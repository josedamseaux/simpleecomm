import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  productsLength;
  products;
  tester;

  cart2:any[] = [];

  constructor(public service: CartService){

    this.products =  this.service.products;


  }

  ngOnInit() {

    this.cart2 = this.service.buyCheck
    console.log(this.cart2)
  }

 
}
