import express from 'express';
import { createProduct, getAllproduct, updateProduct,deleteProduct,getSingleProduct} from '../productcontroller/productcontroler.js';

const router= express.Router();
router.route('/products').get(getAllproduct)
router.route('/products/new').post(createProduct)
router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(getSingleProduct)
export default router
