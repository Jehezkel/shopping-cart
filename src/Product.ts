export class Product{
    id!: string
    name!: string
    price!: number
    image!: string
    inStock!: number
    fastDelivery!: boolean
    ratings!: number

}
export interface OrderLine {
    product: Product
    quantity: number
    totalPrice: number
}
export interface Order{
    orderLines: OrderLine[];
    addProduct:(product: Product, qty: number)=>void;
    updateProduct:(product: Product, qty: number)=>void;
    removeProduct:(product: Product)=>void;
}