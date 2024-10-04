import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemListComponent } from './product-item-list/product-item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyStore';
}
