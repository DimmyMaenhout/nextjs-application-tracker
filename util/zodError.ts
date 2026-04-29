import * as z from "zod";

export function zodToErrors(error: z.ZodError) {
  const errors: Record<string, string> = {};

  for (const issue of error.issues) {
    const key = issue.path.join(".");
    errors[key] = issue.message;
  }

  return errors;
}
