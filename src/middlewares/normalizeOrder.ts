
import  express, { Application, Request, Response, NextFunction } from "express"
import { ShopifyProduct } from "../classes/types/products/shopify";
import { WooCommerceProduct } from "../classes/types/products/woocommerce";

export const normalizeOrder = (req: Request, res: Response, next: NextFunction) => {

    let productsArray: { depth: any; height: any; price: any; productId: any; quantity: any; freeShipping: any; variantId: any; weight: any; width: any; }[] = [];
    const {body} = req;

    body.products.forEach((product: { [x: string]: any; depth: any; height: any; price: any; money: any; product_id: any; quantity: any; free_shipping: any; variant_id: any; weight: any; width: any; }) => {
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
        cancelReason: body.cancel_reason || body['cancel-reason'],
        currency: body.currency,
        gateway: body.gateway,
        id: body.id,
        language: body.language,
        locationId: body.location_id || body['location-id'],
        name:body.name,
        ownerNote:body.owner_note || body['owner-note'],
        paymentStatus:body.payment_status || body['payment_stats'],
        status:body.status || body.stats,
        subtotal:body.subtotal,
        token:body.token,
        discount:body.discount,
        price:body.price || body.money,
        priceUsd:body.price_usd || body['money-usd'],
        weight:body.weight,
        shippedAt:body.shipped_at || body['shipped-at'],
        number:body.number,
        products:productsArray,
        storefront: body.storefront,
    }
   req.body = order;
    next();

}