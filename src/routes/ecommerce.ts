import { Router } from "express";
import { getEcommerce, getEcommerces, postEcommerce, putEcommerce, deleteEcommerce } from "../controllers/ecommerce";

const router = Router();

router.get('/', getEcommerces);
router.get('/:id', getEcommerce);
router.post('/', postEcommerce);
router.put('/:id', putEcommerce);
router.delete('/:id', deleteEcommerce);

export default router;