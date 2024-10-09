import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit
{
  
  price : Number= 0;
  name : string = "";

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {
   this.route.queryParams.subscribe(params =>{
     console.log("price coming from params" + params['price']);
     console.log("name coming from params" +params['name'])
      this.price = params['price'];
      this.name =params['name'];
   });
  }

}
