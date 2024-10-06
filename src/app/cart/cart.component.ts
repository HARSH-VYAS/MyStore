import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../models/ProductItem';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemserviceService } from '../services/itemservice.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductItemComponent, CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit
{
  cart : ProductItem[]=[];
  totalPrice : number = 0;
  changedValue : number =0;

  constructor(private itemService:ItemserviceService)
  {
    this.cart = itemService.getCartItems();
  }
  ngOnInit(): void {
    this.updatePrice(this.cart);
  }

  updatePrice(cart:ProductItem[])
  {
    console.log("Changed value" 
    + this.changedValue);
     cart.forEach(item=>{
       this.totalPrice += item.price * item.selectedQuantity;
     });
     console.log("Total price is "+ this.totalPrice);
  }
}
