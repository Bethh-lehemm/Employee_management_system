import { AppError } from "./app.error.ts";

export type ValidationIssueMap = Record<string, string[]>;

export class RequestValidationError extends AppError {
  constructor(details: ValidationIssueMap) {
    super(
      "The submitted data failed validation.",
      422,
      "VALIDATION_ERROR",
      details,
    );
  }
}