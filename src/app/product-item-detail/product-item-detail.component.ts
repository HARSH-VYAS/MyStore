import { Component, Input, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../models/ProductItem';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemserviceService } from '../services/itemservice.service';

@Component({
  selector: 'app-product-item-detail',
  standalone: true,
  imports: [ProductItemComponent, CommonModule, RouterModule, FormsModule],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css'
})
export class ProductItemDetailComponent implements OnInit
{
  childItem : ProductItem = {
    "id": 1,
    "name": "Book",
    "price": 9.99,
    "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "description": "You can read it!",
    "selectedQuantity":0,
    "quantity" :[1,2,3,4,5,6,7,8,9,10]
  };

  constructor(private itemService:ItemserviceService)
  {
  }
  ngOnInit(): void {
    this.itemService.currentItem.subscribe(resp=>{
      this.childItem=resp;
    })
  }
}
