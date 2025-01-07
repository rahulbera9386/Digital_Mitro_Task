import express from "express";
import { createProduct, deleteProduct, getAllProduct, getProductDetailsById, updateProduct } from "../controller/product.controller.js";





const router=express.Router();


router.post("/create-product",createProduct);
router.get("/products",getAllProduct);
router.put("/update-product",updateProduct);
router.delete("/delete-product",deleteProduct);
router.get('/get-product/:id', getProductDetailsById);


export default router;