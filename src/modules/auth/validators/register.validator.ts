import { validateBody } from "../../../common/middleware/validate.middleware.js";
import { RegisterDto } from "../dtos/register.dto.js";

export const validateRegister = validateBody(RegisterDto);
