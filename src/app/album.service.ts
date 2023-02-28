import {Injectable } from "@angular/core";
import { MUSIC } from "./product";
 
@Injectable({
    providedIn: 'root'
})
 
export class AlbumService {
    albumArray: Array<MUSIC> = [];
 
    record1 = new MUSIC(1, 72.26, 'Lemonade', 'Lemonade is Beyonce\'s sixth studio album', "lemonade.jpg");
    record2 = new MUSIC(2, 22.23, '25', '25 is Adele\'s third studio album', "25.jpg");
    record3 = new MUSIC(3, 26.47, 'Plastic Hearts', 'The best way to listen to this Miley Cyrus record is to hear it on Vinyl', "plastichearts.jpg");
    record4 = new MUSIC(4, 23.38, 'What\'s Going on', 'This is a classic Marvin Gaye record and every single song is amazing', "whatsgoingon.jpg");
    record5 = new MUSIC(5, 45.99, 'Songs in the Key of Life', 'This is a great deal for this Stevie Wonder record ', "songsinthekeyoflife.jpg");
    record6 = new MUSIC(6, 22.99, 'Purple Rain', 'This Prince album has 5 stars', "purplerain.jpg");
    record7 = new MUSIC(7, 38.99, 'The Miseducation of Lauryn Hill', 'This album earned Lauryn Hill 5 Grammy Awards and 10 nomination, making her the first woman to achieve that', "themiseducation.jpg");
    record8 = new MUSIC(8, 32.996, 'Thriller', 'This is one of the definitive albums of the 1980s', "thriller.jpg");
    record9 = new MUSIC(9, 24.91, 'Ready to Die', 'This is the debut album by rapper The Notorious B.I.G, originally released in 1994 ', "readytodie.jpg");
    record10 = new MUSIC(10, 24.99, 'Legend', 'Bob Marley combines the most stringet quality standards with the most innovative compounds to produce that won\' feel fake.', "legend.jpg");
    record11 = new MUSIC(11, 44.99, 'The Blueprint', 'Jay-Z brings back the soul/jazzy sound back to the music', "theblueprint.jpg");
    record12 = new MUSIC(12, 16.61, 'At Last!', 'This is Etta James\' debut album originally released in 1960', "atlast.jpg");
    record13 = new MUSIC(13, 60.00, 'Otis Blue', 'The soul singer, Otis Redding, is considered by many critics to have one of the rarest voices', "otisblue.jpg");
    record14 = new MUSIC(14, 48.00, 'The College Dropout', 'Kanye West dropped this debut album and it is one of the greatest', "thecollegedropout.jpg");
    record15 = new MUSIC(15, 90.00, 'Blond', 'This Frank Ocean album is one of the greatest albums', "blond.jpg");
    record16 = new MUSIC(16, 70.00, 'Red (Taylor\'s Version)', 'Red is Taylor Swift\'s newly recorded 30 song version of Red', "red.jpg");
    record17 = new MUSIC(17, 35.98, 'I Put a Spell On You', 'Nina Simone released this album in 1965 and it features some of her best known songs', 'iputaspellonyou.jpg' );
    record18 = new MUSIC(18, 28.98, 'Igor', 'Igor is the fifth studio album by rapper Tyler, The Creator and it is entirely produced by Tyler', 'igor.jpg');
 
  getAllRecords() {
    this.albumArray = [];
 
    this.albumArray.push(this.record1);
    this.albumArray.push(this.record2);
    this.albumArray.push(this.record3);
    this.albumArray.push(this.record4);
    this.albumArray.push(this.record5);
    this.albumArray.push(this.record6);
    this.albumArray.push(this.record7);
    this.albumArray.push(this.record8);
    this.albumArray.push(this.record9);
    this.albumArray.push(this.record10);
    this.albumArray.push(this.record11);
    this.albumArray.push(this.record12);
    this.albumArray.push(this.record13);
    this.albumArray.push(this.record14);
    this.albumArray.push(this.record15);
    this.albumArray.push(this.record16);
    this.albumArray.push(this.record17);
    this.albumArray.push(this.record18);
    return this.albumArray;
  }

searchArray: Array<MUSIC> = this.getAllRecords();

  onSearch(text: string) {
    let val : string;
    val = text;

    for(let i = 0; i < this.getAllRecords().length; i++) {
      this.searchArray.pop();
    }

    for(let i = 0; i < this.getAllRecords().length; i++) {
      if(this.albumArray[i].getRecordName()?.toLowerCase().includes(val.toLowerCase())){
        this.searchArray.push(this.albumArray[i]);
      }
    }
  }

  getSearch(){
    return this.searchArray;
  }

}
 

