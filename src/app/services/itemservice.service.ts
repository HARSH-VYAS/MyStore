import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductItem } from '../models/ProductItem';



@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  defaultItem : ProductItem = 
  {
    "id": 1,
    "name": "Book",
    "price": 9.99,
    "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "description": "You can read it!",
    "selectedQuantity":0,
    "quantity" :[1,2,3,4,5,6,7,8,9,10]
  };
  constructor(private http:HttpClient) { }
  cart:ProductItem [] = [];
  detailItem : BehaviorSubject<ProductItem> = new BehaviorSubject<ProductItem>(this.defaultItem);
  currentItem = this.detailItem.asObservable();

  // Get Product Items from json place holder server
  getProductItems(): Observable<ProductItem[]>
  {
      return this.http.get<ProductItem[]>("https://my-json-server.typicode.com/HARSH-VYAS/MyStore/productitems");
  }

  // Add cart Items from ProductList and Product detials pages.
  addCartItems(item:ProductItem)
  {
    const index = this.cart.findIndex(obj => {
      return obj.id === item.id;
    });
    if(index !==-1)
    {
      this.cart[index].selectedQuantity=item.selectedQuantity;
    }
    else
      this.cart.unshift(item);
  }

  // Get CartItems array
  getCartItems():ProductItem[]
  {
    return this.cart;
  }

  //Get Item product details
  getItemProductDetail(item:ProductItem):void
  {
    this.detailItem.next(item);
  }

  // Cleanup cart Items after the checkout.
  cleanUpCartItems():void
  {
    this.cart =[];
  }
}
