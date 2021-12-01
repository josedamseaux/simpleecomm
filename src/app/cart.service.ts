import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

   constructor(public db: AngularFirestore) {
    this.products = this.db
    .collection(`items`)
    .snapshotChanges();
   }

   buyCheck:any[]=[];

   products;
   
   
    ngOnInit(){
 
     this.setBuy(this.buyCheck)
 
   }

  public setBuy(buy){

    this.buyCheck.push(buy);


    }




}
