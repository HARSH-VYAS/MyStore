import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../models/ProductItem';
import { ItemserviceService } from '../services/itemservice.service';

@Component({
  selector: 'app-product-item-list',
  standalone: true,
  imports: [],
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
