import { apiResponse } from "../../../shared/utils/api-response";
import { AuthService } from "../application/auth.service";

export class AuthController {
  async register(req: any, res: any) {
    try {
      const authService = new AuthService();
      const result = await authService.register(req.body);
      let response = apiResponse(true, "User registered successfully", result);
      res.status(201).json(response);
    } catch (error: any) {
      res.status(400).json(apiResponse(false, error.message));
    }
  }

  async login(req: any, res: any) {
    try {
      const authService = new AuthService();
      const result = await authService.login(req.body);
      let response = apiResponse(true, "User logged in successfully", result);
      res.status(200).json(response);
    } catch (error: any) {
      res.status(400).json(apiResponse(false, error.message));
    }
  }
}
