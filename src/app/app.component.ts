import { Component, OnInit } from '@angular/core';
import {searchList} from './Models/searchList'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AutoComplete';
  inputSearchListCity:searchList[]=[];
  inputSearchListCountries:searchList[]=[];
  ngOnInit(){
    this.inputSearchListCity.push({
      id:1,
      name:"Mumbai"
    });
    this.inputSearchListCity.push({
      id:2,
      name:"Thane"
    });
    this.inputSearchListCity.push({
      id:3,
      name:"Worli"
    });
    this.inputSearchListCity.push({
      id:4,
      name:"Dadar"
    });
    this.inputSearchListCity.push({
      id:5,
      name:"Dombivli"
    });
    
    this.inputSearchListCountries.push({
      id:1,
      name:"India"
    });
    this.inputSearchListCountries.push({
      id:2,
      name:"Nepal"
    });
    this.inputSearchListCountries.push({
      id:1,
      name:"UK"
    });
    this.inputSearchListCountries.push({
      id:1,
      name:"Germany"
    });

  }

}
