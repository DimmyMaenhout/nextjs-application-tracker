export type JobType =
  | "full_time"
  | "part_time"
  | "contract"
  | "internship"
  | "freelance";

export const JobTypes = [
  "full_time",
  "part_time",
  "contract",
  "internship",
  "freelance",
] as const;

export type JobTypeArrayValues = (typeof JobTypes)[number];
