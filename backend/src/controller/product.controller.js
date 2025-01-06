import ProductModel from "../models/product.model.js";

const createProduct = async (req, res) => {
  try {
    const { name, description, price, image } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({
          message: "Please Enter Product Name",
          success: false,
          error: true,
        });
    }
    if (!description) {
      return res
        .status(400)
        .json({
          message: "Please Enter Product Description",
          success: false,
          error: true,
        });
    }
    if (!price) {
      return res
        .status(400)
        .json({
          message: "Please Enter Product Name",
          success: false,
          error: true,
        });
    }
    if (!image[0]) {
      return res
        .status(400)
        .json({
          message: "Please Enter Product Name",
          success: false,
          error: true,
        });
    }

const createProduct=new ProductModel({
    name,description,price,image
})
await createProduct.save();
return res.status(200).json({message:"Product Created Successfully",success:true,error:false})

  } catch (error) {
    return res
      .status(500)
      .json({
        message: "There is an error while trying to create a product",
        success: false,
        error: true,
      });
  }
};

export { createProduct };
