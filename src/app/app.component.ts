import { Component, EventEmitter, Output } from '@angular/core';
import { AlbumService } from './album.service';
import { MUSIC } from './product';
import { ProductsComponent } from './product/product.component';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent {
  title = 'shopping-website';
  
  constructor (private data: AlbumService) { }

  onClickSearch(value:HTMLInputElement){
    let val = value.value;
    this.data.onSearch(val);
    return;
  }
}
