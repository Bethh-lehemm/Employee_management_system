import type { Request, Response } from "express";

import {
  successResponse,
  type ApiSuccessResponse,
} from "../../../common/responses/api.response.ts";

import type { PublicUserRecord } from "../../users/repositories/user.repository.ts";
import type { RegisterDto } from "../dtos/register.dto.ts";
import { AuthService } from "../services/auth.service.ts";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  readonly register = async (
    req: Request<
      Record<string, never>,
      ApiSuccessResponse<PublicUserRecord>,
      RegisterDto
    >,
    res: Response<ApiSuccessResponse<PublicUserRecord>>,
  ): Promise<void> => {
    const user = await this.authService.register(req.body);

    res
      .status(201)
      .json(successResponse("User account created successfully.", user));
  };
}
