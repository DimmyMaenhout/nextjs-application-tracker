export type RemoteType = "on_site" | "hybrid" | "remote";

export const RemoteTypes = ["on_site", "hybrid", "remote"] as const;

export type RemoteTypeArrayValues = (typeof RemoteTypes)[number];
