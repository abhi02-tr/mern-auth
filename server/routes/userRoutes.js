import express from "express";
import { authUser, getUser, logoutUser, registerUser, getUserProfile, updateUserProfile } from "../controller/userController.js";

const router = express.Router();

router.route("/")
    .post(registerUser)
    .get(getUser);

router.post("/auth", authUser);

router.post("/logout", logoutUser);

router.route("/profile")
    .get(getUserProfile)
    .put(updateUserProfile);

export default router;