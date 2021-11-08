import { Router } from "express";
import { getOrdersByCustomer,getCustomerList, getTotalBilling } from "../controllers/metrics";
const router = Router();

router.get('/customerList', getCustomerList);
router.get('/totalBilling', getTotalBilling);
router.get('/orderSummary/:id', getOrdersByCustomer);


export default router;