import {
  ApplicationStatus,
  JobType,
  RemoteType,
} from "../generated/prisma/enums";

export const REMOTE_TYPE_META = {
  on_site: { label: "On site" },
  hybrid: { label: "Hybrid" },
  remote: { label: "Remote" },
} satisfies Record<RemoteType, { label: string }>;

export const JOB_TYPE_META = {
  full_time: { label: "Full time" },
  part_time: { label: "Part time" },
  contract: { label: "Contract" },
  internship: { label: "Internship" },
  freelance: { label: "Freelance" },
} satisfies Record<JobType, { label: string }>;

export const APPLICATION_STATUS_META = {
  wishlist: { label: "Wishlist", color: "bg-gray-200 text-gray-600" },
  to_apply: { label: "To apply", color: "bg-blue-200 text-blue-600" },
  applied: { label: "Applied", color: "bg-yellow-200 text-yellow-600" },
  interview: { label: "Interview", color: "bg-purple-200 text-purple-600" },
  offer: { label: "Offer", color: "bg-green-200 text-green-600" },
  rejected: { label: "Rejected", color: "bg-red-200 text-red-600" },
  accepted: { label: "Accepted", color: "bg-emerald-200 text-emerald-600" },
  withdrawn: { label: "Withdrawn", color: "bg-slate-200 text-slate-600" },
  ghosted: { label: "Ghosted", color: "bg-zinc-200 text-zinc-600" },
} satisfies Record<ApplicationStatus, { label: string; color: string }>;
