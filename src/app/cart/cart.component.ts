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
    this.cart = this.cart.filter(item => item.id != 0);
  }
 
  ngOnInit(): void {
    this.getTotalPrice(this.cart);
  }

  getTotalPrice(cart: ProductItem[]): void {
    cart.forEach(item => {
      if (Number.isNaN(item))
        throw new Error('Please enter a valid number');
      this.totalPrice += item.price * item.selectedQuantity;
    });
  }

  updateTotalPrice(): void {
    this.totalPrice = 0;
    this.getTotalPrice(this.cart);
  }

  checkout(): void {

    this.cardNumber = this.cardNumber.replace(/\D/g, "");

    if (!this.cardNumber) {
      throw new Error("Card number can not be empty");
    }

    if (isNaN(Number(this.cardNumber))) {
      throw new Error("Card number should be a valid number");
    }

    if (this.cardNumber.length < 13 || this.cardNumber.length > 19) {
      throw new Error("Valid card number must be between length 13 and 19");
    }

    const currentName = this.firstName + " " + this.lastName;
    if (this.cardName == currentName) {
      this.router.navigate(['/success'], {
        queryParams:
        {
          name: this.cardName,
          price: this.totalPrice
        }
      })
      .then(()=>this.cleanUpCart());
      
    }
    else{
      throw new Error("card name should be a valid card name" + this.cardName);
    }
  }

  cleanUpCart(){
    this.itemService.cleanUpCartItems();
  }
}
