import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductItem } from '../models/ProductItem';


@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private http:HttpClient) { }


  getProductItems(): Observable<ProductItem[]>
  {
      return this.http.get<ProductItem[]>("https://my-json-server.typicode.com/HARSH-VYAS/PhotosApp/productitems");
  }
}
