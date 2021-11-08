"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const metrics_1 = require("../controllers/metrics");
const router = (0, express_1.Router)();
router.get('/customerList', metrics_1.getCustomerList);
router.get('/totalBilling', metrics_1.getTotalBilling);
router.get('/orderSummary/:id', metrics_1.getOrdersByCustomer);
exports.default = router;
