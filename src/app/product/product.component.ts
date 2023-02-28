import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MUSIC } from '../product';
import { AlbumService } from '../album.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
 
 
@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductsComponent implements  OnInit  {

albumArray: Array<MUSIC> = [];
searchArray: Array<MUSIC> = this.getAllRecords();

searchText = "";

@Output() messageEvent = new EventEmitter< Array<MUSIC> >();
  prod: any;
 
  constructor(private data:AlbumService, private cart : CartService, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void { }
  
  getSearch(){
    return this.searchArray;
  }
 
  getImage(record: MUSIC) {
    return "/assets/images/" + record.getRecordVinyl();
  }
 
  onAdd(record: any) {
    this.cart.onAdd(record);
  }
 
  getAllRecords() {
    this.albumArray = this.data.getAllRecords();
    return this.albumArray;
  }
 
   
}
 

