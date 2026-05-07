"use server";

import { prisma } from "@/lib/prisma";
import {
  CreateApplication,
  CreateApplicationSchema,
} from "@/lib/schemas/Application";
import { USER_ID } from "@/lib/user";
import { zodToErrors } from "@/util/zodError";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type AddApplicationActionState = {
  fields: Partial<Record<keyof CreateApplication, string>>;
  errors: Partial<Record<keyof CreateApplication, string>>;
  success: boolean;
};

export async function addApplication(
  _prevState: AddApplicationActionState,
  formData: FormData,
) {
  const raw = Object.fromEntries(formData);

  const normalized = {
    ...raw,
    jobUrl: raw.jobUrl || undefined, // otherwise we get "" from the form and zod shows an error
    contactEmail: raw.contactEmail || undefined,
    appliedAt: raw.appliedAt || undefined,
  };

  const parsed = CreateApplicationSchema.safeParse(normalized);

  if (!parsed.success) {
    return {
      success: false,
      fields: raw as Record<string, string>,
      errors: zodToErrors(parsed.error),
    };
  }

  const data = parsed.data;

  await prisma.application.create({
    data: {
      companyName: data.companyName,
      jobTitle: data.jobTitle,
      jobType: data.jobType,
      location: data.location,
      remoteType: data.remoteType,
      status: data.status,
      jobUrl: data.jobUrl || undefined,
      appliedAt: data.appliedAt,
      contactName: data.contactName,
      contactEmail: data.contactEmail || undefined,
      contactLinkedIn: data.contactLinkedin || undefined,
      source: data.source,

      notes: data.notes
        ? {
            create: {
              content: data.notes,
            },
          }
        : undefined,

      user: {
        connect: { id: USER_ID },
      },
    },
  });

  redirect("/applications");
}

export async function deleteApplication(id: string) {
  const application = await prisma.application.findFirst({
    where: { id: id, userId: USER_ID },
  });

  if (!application) {
    throw new Error("Application not found");
  }

  await prisma.application.delete({ where: { id: id } });
}

export async function addNote(id: string, note: string) {
  await prisma.note.create({
    data: {
      applicationId: id,
      content: note,
    },
  });
}

export async function deleteNote(noteId: string, applicationId: string) {
  const note = await prisma.note.findFirst({ where: { id: noteId } });

  if (!note) {
    throw new Error("Note not found");
  }

  await prisma.note.delete({ where: { id: noteId } });

  revalidatePath(`/applications/${noteId}`);
}
