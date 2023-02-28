import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public cartProducts : any = []
  public productList = new BehaviorSubject<any>([]);
 
 
  getProducts() {
    return this.productList.asObservable();
  }
 
  setProducts(products : any) {
    this.cartProducts.push(...products);
    this.productList.next(products);
  }
 
  onAdd(products : any) {
    this.cartProducts.push(products);
    this.productList.next(this.cartProducts);
    this.getTotalAmount();
    console.log(this.cartProducts);
  }
 
  getTotalAmount() : number {
    let totalPrice = 0;
    this.cartProducts.map((x : any)=> {
      totalPrice += x.record_price;
    })
    return totalPrice;
  }
 
  removeProduct(record : any) {
    this.cartProducts.map((x:any, index:any)=> {
      if(record.id == x.id) {
        this.cartProducts.splice(index,1);
      }
    })
    this.productList.next(this.cartProducts);
  }
 
  removeAllProducts() {
    this.cartProducts = [];
    this.productList.next(this.cartProducts);
  }
}


