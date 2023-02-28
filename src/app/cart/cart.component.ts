import { Component, OnInit } from '@angular/core';
import { MUSIC } from '../product';
import { CartService } from '../cart.service';
 
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
 
  public total : number = 0;
  public products : any = [];
  public totalPrice !: number;
  albumArray: Array<MUSIC> = [];
  public productList : any;
 
  constructor(private cart : CartService) {}
 
  getImage(record: MUSIC) {
    return "/assets/images/" + record.getRecordVinyl();
  }
 
  ngOnInit(): void {
    this.cart.getProducts().subscribe(result => {    
      this.total = result.length;
    });
 
    this.cart.getProducts().subscribe(result=> {      
      this.products = result;  
      this.totalPrice = this.cart.getTotalAmount();
    })
  }
 
  removeRecord(record : any) {                
    this.cart.removeProduct(record);
  }
 
  emptyCart() {                                
    this.cart.removeAllProducts();
  }
 
}
 
 

