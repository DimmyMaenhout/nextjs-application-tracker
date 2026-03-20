export type ApplicationStatus =
  | "wishlist"
  | "to_apply"
  | "applied"
  | "interview"
  | "offer"
  | "rejected"
  | "accepted"
  | "withdrawn"
  | "ghosted";

export const StatusColors: Record<ApplicationStatus, string> = {
  wishlist: "bg-gray-200 text-gray-600",
  to_apply: "bg-blue-200 text-blue-600",
  applied: "bg-yellow-200 text-yellow-600",
  interview: "bg-purple-200 text-purple-600",
  offer: "bg-green-200 text-green-600",
  rejected: "bg-red-200 text-red-600",
  accepted: "bg-emerald-200 text-emerald-600",
  withdrawn: "bg-slate-200 text-slate-600",
  ghosted: "bg-zinc-200 text-zinc-600",
};
