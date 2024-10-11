export class ProductItem{
    id : number;
    name : string;
    price : number;
    url : string;
    description : string;
    selectedQuantity : number= -1;
    // For now we have kept it fixed but can be a variable amount based on the inventory details. ( New Component)
    quantity:number[] = [1,2,3,4,5,6,7,8,9,10];  


    constructor(id:number, name:string, price:number,url:string, description:string)
    {
        this.id=id;
        this.name=name;
        this.price=price;
        this.url=url;
        this.description=description;
    }
}