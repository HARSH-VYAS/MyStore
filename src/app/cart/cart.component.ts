import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../models/ProductItem';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ItemserviceService } from '../services/itemservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductItemComponent, CommonModule, FormsModule, ConfirmationComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: ProductItem[] = [];
  totalPrice: number = 0;
  // Cart checkout details
  firstName: string = '';
  lastName: string = '';
  cardNumber: string = '';
  cardName: string = '';

  constructor(private itemService: ItemserviceService, private router: Router) {
    this.cart = itemService.getCartItems();
  }
 
  ngOnInit(): void {
    this.getTotalPrice(this.cart);
  }

  getTotalPrice(cart: ProductItem[]): void 
  {
    cart.forEach(item => {
      if (Number.isNaN(item))
        throw new Error('Please enter a valid number');
      this.totalPrice += item.price * Number(item.selectedQuantity);
    });
  }

  updateTotalPrice(item:ProductItem): void 
  {
    this.totalPrice = 0;
    console.log(`for ${item.name} selected quantity is :   ${item.selectedQuantity}`);
    if (item.selectedQuantity === null) {
      // Do nothing if the input is empty
      return;
    }
    if(Number(item.selectedQuantity) == 0)
    {
      alert('Are you sure you want to remove this item')
      this.removeItem(item);

    }
     
    this.getTotalPrice(this.cart);
  }

  removeItem(item:ProductItem)
  {
    const index = this.cart.indexOf(item);
    if (index > -1) {
      // Remove the item from the array
      this.cart.splice(index, 1);
      alert(`${item.name} will be removed from the cart`);
    }

  }

  checkout(): void {

    this.cardNumber = this.cardNumber.replace(/\D/g, "");

    if (isNaN(Number(this.cardNumber))) {
      throw new Error("Card number should be a valid number");
    }
      this.router.navigate(['/success'], {
        queryParams:
        {
          name: this.cardName,
          price: this.totalPrice
        }
      })
      .then(()=>this.cleanUpCart());
  }

  cleanUpCart(){
    this.itemService.cleanUpCartItems();
  }
}
