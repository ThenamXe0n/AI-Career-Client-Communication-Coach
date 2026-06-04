import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();
let authController = new AuthController();

router.post("/register", authController.register);
router.post("/login", authController.login);

export default router;
