import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../models/ProductItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemserviceService } from '../services/itemservice.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit
{
  @Input() item : ProductItem;
  quantity :number[] = [];
  selectedValue : number = 1;
  @Output() imageClicked : EventEmitter<ProductItem> = new EventEmitter();


  constructor(private itemService:ItemserviceService)
  {
    // Adding a default value
    this.item = {
      "id": 1,
      "name": "Book",
      "price": 9.99,
      "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "You can read it!",
      "selectedQuantity":0,
      "quantity" :[1,2,3,4,5,6,7,8,9,10]
    };
    this.quantity=this.item.quantity;
  }


  ngOnInit(): void {
    
  }

  submitForm()
  {
      this.item.selectedQuantity=this.selectedValue;
      this.itemService.addCartItems(this.item);
      this.selectedValue=0;

  }

  showProductDetails(item:ProductItem)
  {
    // Here we are setting the data change between the parent (productItemDetail) and chile(productItem)
    // components
    this.itemService.getItemProductDetail(item);
  }

}
