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



const getAllProduct=async(req,res)=>{
try{
  const allProducts=await ProductModel.find().sort({createdAt:-1})
  return res.status(200).json({message:"All Products Found Sucessfully",success:true,error:false,data:allProducts})

}
catch(error){
  return res.status(500).json({message:"There is an error while trying to find products",success:false,error:true});
}
}



const updateProduct=async(req,res)=>{
  try{

    const {productId,name,description,image,price}=req.body;
    console.log(req.body)
    if(!productId)
    {
      return res.status(400).json({message:"productId not defined",success:false,error:true})
    }
    const product=await ProductModel.findById(productId);
   const updateFields={
    name:"",
    description:'',
    price:"",
    image:[]
   };
   if (name) updateFields.name = name;
   if (price) updateFields.price = price;
   if (description) updateFields.description = description;
   if (image) updateFields.image = image;
   if(Object.keys(updateFields).length===0)
   {
    return res.status(400).json({message:"No fields to update",success:false,error:true})
   }
   const updatedData=await ProductModel.findByIdAndUpdate(productId,updateFields,{new:true});
   return res.status(200).json({message:"Product Updated Successfully",success:true,error:false})

  }
  catch(error)
  {
    console.log(error)
    return res.status(500).json(({message:"Err while trying to update product",success:false,error:true}))
  } 
}




const deleteProduct=async(req,res)=>{
  try{
    const {data}=req.body;
    //console.log(req.body)
    if(!data)
    {
      return res.status(400).json({message:"product id is not defined",success:false,error:true})
    }
    const deleteProduct=await ProductModel.findByIdAndDelete(data)
    return res.status(200).json({message:"Product Deleted Successfully",success:true,error:false})

  }
  catch(error)
  {
    console.log(error)
    return res.status(500).json({messsage:"There is an error while trying to delete products"})
  }
}
export { createProduct ,getAllProduct,updateProduct,deleteProduct};
