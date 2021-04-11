import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private db: AngularFirestore, public service: CartService, public router: Router) { 

    this.items = this.db.collection('items').valueChanges();
  }
  
  showFiller = false;

  cart2:any[] = [];

  name;

  notebookName;

  view:boolean = false;
  
  buy: {
    name: string,
    price: string
  }

  items: Observable<any[]>  

  ngOnInit() {

    this.cart2 = this.service.buyCheck
    console.log(this.cart2)
  }



  buyNow(notebookName, refPrice){


      let count;
      count = this.number;


      this.buy = {
        name: notebookName.innerHTML,
        price: refPrice.innerHTML
      }


    
    for(let i=0;i<count;i++){

      this.service.setBuy(this.buy)

    }



    setTimeout(this.closeNav, 3000)
    this.number = 1;


  }

  // Side shopping cart

  titleSideShoppingCart;
  priceSideShoppingCart;
  imgSideShoppingCart;

  openNav(title, price, image) {
    document.getElementById("mySidebar").style.width = "300px";

    this.titleSideShoppingCart = title.innerHTML
    this.priceSideShoppingCart = price.innerHTML;
    this.imgSideShoppingCart = image.src;


    document.getElementById("mainContainer").style.opacity = "0.5";

    document.getElementById("mainContainer").style.backgroundColor = "#0000";

  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";

    document.getElementById("mainContainer").style.opacity = "1";
      
   };



  number = 1;

  more(){
    this.number++
  }

  less(){
    this.number--

  }


  closeModal(){



  }


}