import { Router } from "express";
import { getOrder, getOrders, postOrder, putOrder, deleteOrder } from "../controllers/order";
import { normalizeOrder } from "../middlewares/normalizeOrder";

const router = Router();

router.get('/', getOrders);
router.get('/:id', getOrder);
router.post('/',[normalizeOrder], postOrder);
router.put('/:id', putOrder);
router.delete('/:id', deleteOrder);

export default router;