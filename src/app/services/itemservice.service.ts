import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductItem } from '../models/ProductItem';



@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  defaultItem : ProductItem = {
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


  getProductItems(): Observable<ProductItem[]>
  {
      return this.http.get<ProductItem[]>("https://my-json-server.typicode.com/HARSH-VYAS/MyStore/productitems");
  }

  addCartItems(item:ProductItem)
  {
    this.cart.unshift(item);
  }

  getCartItems():ProductItem[]
  {

    return this.cart;
  }

  getItemProductDetail(item:ProductItem):void
  {
    this.detailItem.next(item);
  }
}
