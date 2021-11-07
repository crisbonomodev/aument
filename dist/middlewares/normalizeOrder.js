"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeOrder = void 0;
const normalizeOrder = (req, res, next) => {
    let productsArray = [];
    const { body } = req;
    const { customer } = body;
    body.products.forEach((product) => {
        let productToAdd = {
            depth: product.depth,
            height: product.height,
            price: product.price || product.money,
            productId: product.product_id || product['product-id'],
            quantity: product.quantity,
            freeShipping: product.free_shipping || product['free-shipping'],
            variantId: product.variant_id || product['variant-id'],
            weight: product.weight,
            width: product.width
        };
        productsArray.push(productToAdd);
    });
    const order = {
        channel: body.channel,
        cancelReason: (body.cancel_reason ? body.cancel_reason : body['cancel-reason']),
        currency: body.currency,
        gateway: body.gateway,
        id: body.id,
        language: body.language,
        locationId: body.location_id || body['location-id'],
        name: body.name,
        ownerNote: body.owner_note || body['owner-note'],
        paymentStatus: body.payment_status || body['payment_stats'],
        status: body.status || body.stats,
        subtotal: body.subtotal,
        token: body.token,
        discount: body.discount,
        price: body.price || body.money,
        priceUsd: body.price_usd || body['money-usd'],
        weight: body.weight,
        shippedAt: body.shipped_at || body['shipped-at'],
        number: body.number,
        products: productsArray,
        storefront: body.storefront,
        customer: {
            createdAt: customer.created_at || customer['created-at'],
            email: customer.email,
            id: customer.id,
            lastOrderId: customer.last_order_id || customer['last-order-id'],
            name: customer.name,
            totalSpent: customer.total_spent || customer['total-spent'],
            totalSpentCurrency: customer.total_spent_currency || customer['total-spent-currency'],
            updatedAt: customer.updated_at || customer['updated-at'],
        }
    };
    req.body = order;
    next();
};
exports.normalizeOrder = normalizeOrder;
