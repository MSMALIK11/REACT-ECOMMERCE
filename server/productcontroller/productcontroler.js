import Product from "../model/productModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAyncError } from "../middleWare/catchAsyncErrors.js";
import ApiFeatures from "../utils/apiFeatures.js";

// Admin create product
export const createProduct = catchAyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }
  res.status(201).json({
    success: true,
    product,
  });
});

// get all products
export const getAllproduct = catchAyncError(async (req, res, next) => {
  const resultPerPage = 3;
  const apifeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const product = await apifeatures.query;
  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }
  res.status(200).json({ message: "route working ", product });
});

// get Single product

export const getSingleProduct = catchAyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }
  res.status(201).json({
    success: true,
    product,
  });
});
// Admin updateProducts

export const updateProduct = catchAyncError(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//Admin  delete product

export const deleteProduct = catchAyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found ", 404));
  }
  await product.remove();

  res.status(200).json({
    success: true,
    product,
  });
});
