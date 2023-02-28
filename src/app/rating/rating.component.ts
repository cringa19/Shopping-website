import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }  
  rating: number = 0;

  onClick1() {
    this.rating = 1;
  }
  onClick2() {
    this.rating = 2;
  }
  onClick3() {
    this.rating = 3;
  }
  onClick4() {
    this.rating = 4;
  }
  onClick5() {
    this.rating = 5;
  }
}
