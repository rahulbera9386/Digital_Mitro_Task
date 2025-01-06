import express from "express";
import { createProduct, getAllProduct } from "../controller/product.controller.js";





const router=express.Router();


router.post("/create-product",createProduct);
router.get("/products",getAllProduct)


export default router;