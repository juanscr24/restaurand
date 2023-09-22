export interface IPrice {
    id: number;
    price: number;
    options?: {title:string; additionalPrice:number}[];
}