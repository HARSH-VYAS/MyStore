import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../models/ProductItem';
import { ItemserviceService } from '../services/itemservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-item-list',
  standalone: true,
  imports: [CommonModule,FormsModule, ProductItemComponent],
  templateUrl: './product-item-list.component.html',
  styleUrl: './product-item-list.component.css'
})
export class ProductItemListComponent implements OnInit
{
  items: ProductItem[]=[];

  constructor(private itemService : ItemserviceService){

  }

  ngOnInit(): void {
    this.itemService.getProductItems().subscribe(resp=>{
      this.items= resp;
    });
  }


}
