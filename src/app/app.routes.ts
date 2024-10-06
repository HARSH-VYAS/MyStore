import { Routes } from '@angular/router';
import { ProductItemListComponent } from './product-item-list/product-item-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';

export const routes: Routes = 
[
    {path:'', component:ProductItemListComponent},
    {path:'productdetails', component:ProductItemDetailComponent},
    {path:'cart', component:CartComponent}
];
