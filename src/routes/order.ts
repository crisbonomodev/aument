import { Router } from "express";
import { getOrderById, getOrdersByEcommerce, getOrdersByCustomer, postOrder, putOrder, deleteOrder } from "../controllers/order";
import { normalizeOrder } from "../middlewares/normalizeOrder";

const router = Router();

router.get('/', getOrdersByEcommerce);
router.get('/:id', getOrderById);
router.get('/customer/:id', getOrdersByCustomer);
router.post('/',[normalizeOrder], postOrder);
router.put('/:id', putOrder);
router.delete('/:id', deleteOrder);

export default router;