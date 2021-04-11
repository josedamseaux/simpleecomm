import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'angularecommerce';

  productsLength;
  products;
  tester;


  constructor(public service: CartService){

    this.products =  this.service.products;


  }

}