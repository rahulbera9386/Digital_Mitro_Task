import express from "express";
import { uploadProduct } from "../controller/upload.controller.js";
import upload from "../utills/multer.js";
const router=express.Router();

router.post("/upload",upload.single("image"),uploadProduct);
export default router;