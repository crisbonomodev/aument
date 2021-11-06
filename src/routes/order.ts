import { Router } from "express";
import { getOrder, getOrders, postOrder, putOrder, deleteOrder } from "../controllers/order";

const router = Router();

router.get('/', getOrders);
router.get('/:id', getOrder);
router.post('/', postOrder);
router.put('/:id', putOrder);
router.delete('/:id', deleteOrder);

export default router;