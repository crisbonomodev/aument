import { Customer } from "./types/customer";
import { Product } from "./types/product";


export default class Order {
    private channel:number;
    private cancelReason:string | null;
    private currency:string;
    private gateway:string;
    private id:number;
    private language:string;
    private locationId:string;
    private name:string;
    private ownerNote:string | null;
    private paymentStatus:string;
    private status:string;
    private subtotal:string;
    private token:string;
    private discount:string;
    private price:string;
    private priceUsd:string;
    private weight:string;
    private shippedAt:string;
    private number:string;
    private products:Product[];
    private storefront: string;
    private customer: Customer;

    constructor(channel:number,    cancelReason:string | null, currency:string,    gateway:string,    id:number,    language:string,
    locationId:string,    name:string,    ownerNote:string | null,    paymentStatus:string,    status:string,    subtotal:string,    token:string,
    discount:string,    price:string,    priceUsd:string,    weight:string,   shippedAt:string,    number:string,
    products:Product[],    storefront:string,    customer:Customer) 
                {
            this.channel = channel;
            this.cancelReason = cancelReason;
            this.currency = currency;
            this.gateway = gateway;
            this.id = id;
            this.language = language;
            this.locationId = locationId;
            this.name = name;
            this.ownerNote = ownerNote;
            this.paymentStatus = paymentStatus;
            this.status = status;
            this.subtotal = subtotal;
            this.token = token;
            this.discount = discount;
            this.price = price;
            this.priceUsd = priceUsd;
            this.weight = weight;
            this.shippedAt = shippedAt;
            this.number = number;
            this.products = products;
            this.storefront = storefront;
            this.customer = customer;
    }

}