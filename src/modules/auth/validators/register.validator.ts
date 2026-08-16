import { validateBody } from "../../../common/middleware/validate.middleware.ts";
import { RegisterDto } from "../dtos/register.dto.ts";

export const validateRegister = validateBody(RegisterDto);
