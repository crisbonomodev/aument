import { Router } from "express";
import { getEcommerce, postEcommerce, putEcommerce, deleteEcommerce } from "../controllers/ecommerce";

const router = Router();

router.get('/:id', getEcommerce);
router.post('/', postEcommerce);
// router.put('/:id', putEcommerce);
// router.delete('/:id', deleteEcommerce);

export default router;