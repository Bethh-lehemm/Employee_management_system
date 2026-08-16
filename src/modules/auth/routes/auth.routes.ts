import { Router } from "express";

import { UserRepository } from "../../users/repositories/user.repository.ts";

import { AuthController } from "../controllers/auth.controller.ts";
import { AuthService } from "../services/auth.service.ts";
import { validateRegister } from "../validators/register.validator.ts";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

export const authRouter = Router();

authRouter.post("/register", validateRegister, authController.register);
