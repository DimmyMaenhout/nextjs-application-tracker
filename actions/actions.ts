"use server";

import { prisma } from "@/lib/prisma";
import { USER_ID } from "@/lib/user";
import { ApplicationStatus } from "@/models/ApplicationStatus";
import { JobType } from "@/models/JobType";
import { RemoteType } from "@/models/RemoteType";
import { isEmptyString } from "@/util/string";

export type AddApplicationActionState = {
  fields: {
    companyName: string;
    jobTitle: string;
    jobType?: JobType;
    location?: string;
    remoteType?: RemoteType;

    status: ApplicationStatus;
    jobUrl?: string;

    appliedAt?: string;
    //   createdAt: Date;
    //   updatedAt: Date;

    contactName?: string;
    contactEmail?: string;
    contactLinkedin?: string;
    source?: string;

    notes?: string; // Note;
  };
  errors: Partial<Record<keyof AddApplicationActionState["fields"], string>>;
  success: boolean;
};

export async function addApplication(
  _prevState: AddApplicationActionState,
  formData: FormData,
) {
  const errors: AddApplicationActionState["errors"] = {};

  const companyName = formData.get("companyName") as string;
  const jobTitle = formData.get("jobTitle") as string;
  const jobType = formData.get("jobType") as JobType;
  const location = formData.get("location") as string;
  const remoteType = formData.get("remoteType") as RemoteType;
  const applicationStatus = formData.get(
    "applicationStatus",
  ) as ApplicationStatus;

  const jobUrl = formData.get("jobUrl") as string;

  const appliedAtRaw = formData.get("appliedAt") as string;

  const contactName = formData.get("contactName") as string;
  const contactEmail = formData.get("contactEmail") as string;
  const contactLinkedin = formData.get("contactLinkedin") as string;

  const source = formData.get("source") as string;

  const notes = formData.get("notes") as string; // @TODO: Change this to note? If we create a new application there will only be one note

  const appliedAtDate = new Date(appliedAtRaw).toLocaleDateString();

  // @TODO: Validate fields ... if validation fails early return

  if (isEmptyString(jobTitle)) {
    errors.jobTitle = "Job title is required!";
  }

  if (isEmptyString(companyName)) {
    errors.companyName = "Company name is required!";
  }

  if (appliedAtDate)
    if (Object.keys(errors).length > 0) {
      return {
        fields: {
          companyName,
          jobTitle,
          jobType: jobType,
          location: location,
          remoteType: remoteType,
          status: applicationStatus,
          jobUrl: jobUrl,
          appliedAt: appliedAtRaw,
          contactName: contactName,
          contactEmail: contactEmail,
          contactLinkedin: contactLinkedin,
          source: source,
          notes: notes,
        },
        errors,
        success: false,
      };
    }

  await prisma.application.create({
    data: {
      companyName,
      jobTitle,
      jobType,
      location,
      remoteType,
      status: applicationStatus,
      jobUrl,
      appliedAt: appliedAtRaw ? new Date(appliedAtRaw) : undefined,
      contactName,
      contactEmail,
      contactLinkedIn: contactLinkedin,
      source,
      notes: notes
        ? {
            create: {
              content: notes,
            },
          }
        : undefined,
      user: {
        connect: { id: USER_ID },
      },
    },
  });

  return {
    fields: {
      companyName,
      jobTitle,
      jobType,
      location,
      remoteType,
      status: applicationStatus,
      jobUrl,
      appliedAt: appliedAtDate,
      // createdAt,
      // updatedAt,
      contactName,
      contactEmail,
      contactLinkedin,
      source,
      notes,
    },
    errors: {},
    success: true,
  };
}
