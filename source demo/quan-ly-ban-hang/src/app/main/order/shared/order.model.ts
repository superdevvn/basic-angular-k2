export class Order {
    Id: number = 0;
    CustomerId: number = 0;
    CustomerName: string;
    ProductId: number = 0;
    ProductName: string;
    Price: number;
    Quantity: number;
    Date: Date;
    DeliveryDate: Date;
    IsPayed: boolean;
    Description: string;
    constructor() {
        this.Date = new Date();
        this.DeliveryDate = new Date();
    }
}