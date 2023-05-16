import express from "express";
import { authUser, getUser, logoutUser, registerUser } from "../controller/userController.js";

const router = express.Router();

router.post("/auth", authUser);

router.route("/")
.get(getUser)
.post(registerUser);

router.post("/logout", logoutUser);

export default router;