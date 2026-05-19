import {
  ApplicationStatus,
  JobType,
  RemoteType,
} from "@/lib/generated/prisma/enums";

import * as z from "zod";

export const JobTypeSchema = z.enum(JobType);
export const RemoteTypeSchema = z.enum(RemoteType);
export const ApplicationStatusSchema = z.enum(ApplicationStatus);

export const CreateApplicationSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required"),
  jobTitle: z.string().trim().min(1, "Job title is required"),
  jobType: JobTypeSchema,
  location: z.string().trim().optional(),
  remoteType: RemoteTypeSchema,

  status: ApplicationStatusSchema,
  jobUrl: z.url("Invalid URL").optional(),

  appliedAt: z.coerce.date().optional(),

  contactName: z.string().trim().optional(),
  contactEmail: z.email("Invalid email").optional(),
  contactLinkedin: z.string().trim().optional(),
  source: z.string().trim().optional(),

  notes: z.string().trim().optional(), // Note;
});

export type CreateApplication = z.infer<typeof CreateApplicationSchema>;

export const CreateNoteSchema = z.object({
  note: z.string().trim().min(1, "A note can't be empty"),
});

export type CreateNote = z.infer<typeof CreateNoteSchema>;
