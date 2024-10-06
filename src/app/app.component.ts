import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemListComponent } from './product-item-list/product-item-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductItemListComponent, NavbarComponent, CartComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyStore';
}
