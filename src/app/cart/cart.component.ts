import { AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { StripeService } from '../stripe.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {

  constructor(public service: CartService, public ngZone: NgZone, private stripeService: StripeService) { }

  @ViewChild('cardInfo') cardInfo: ElementRef;
  cardError: string;
  card: any;


  ngAfterViewInit(){
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.OnChange);
  }

  OnChange({ error }){

    if(error){
      this.ngZone.run(()=>  this.cardError = error.message )
    } else {
      this.ngZone.run(()=>  this.cardError = null )
    }
  }


  async onClick(){

    const {token, error} = await stripe.createToken(this.card);
    if(token)
    {
     await this.stripeService.charge(100, token.id)

    }else {
      this.ngZone.run(()=>  this.cardError = error.message )
    }
  }





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
