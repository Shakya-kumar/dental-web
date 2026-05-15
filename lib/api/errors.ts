import { ZodError } from "zod";
import { fail } from "@/lib/api/response";

export async function handleApiError(error: unknown) {
  console.error(error);

  if (error instanceof ZodError) {
    return fail("VALIDATION_ERROR", "Please check the submitted details.", 422, error.flatten());
  }

  return fail("INTERNAL_ERROR", "Something went wrong. Please try again.", 500);
}
