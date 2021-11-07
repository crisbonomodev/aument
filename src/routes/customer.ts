import { Router } from "express";
import { getCustomer, getCustomers, postCustomer, putCustomer, deleteCustomer } from "../controllers/customer";

const router = Router();

router.get('/', getCustomers);
router.get('/:id', getCustomer);
router.post('/', postCustomer);
router.put('/:id', putCustomer);
router.delete('/:id', deleteCustomer);

export default router;