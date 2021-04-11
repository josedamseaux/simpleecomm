import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public service: CartService) { }


  cart;

  buyChekOut: any[] = [];

  buyFiltered;

  totalSum;


  ngOnInit() {
    console.log(this.cart)

    this.buyChekOut.push(this.service.buyCheck);
    console.log(this.buyChekOut)
    let flattened = [].concat.apply([], this.buyChekOut);
    this.buyFiltered = flattened;
    console.log(this.buyFiltered.price)
    this.calculateTotal();
  }

  delete(i){
    this.buyFiltered.splice(i,1);
    this.service.buyCheck.splice(i,1);

    this.calculateTotal()
  }

  calculateTotal(){

    let total = 0;

    for(let i = 0; i<this.buyFiltered.length; i++){
      let priceToNumbers = parseInt(this.buyFiltered[i].price)
      total = total + priceToNumbers;
    }

 
    
    this.totalSum = total + ".000"

  }

}
