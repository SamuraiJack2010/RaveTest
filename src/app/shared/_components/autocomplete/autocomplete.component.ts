import { Component, OnInit,Input } from '@angular/core';
import {searchList} from '../../../Models/searchList';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  
  @Input()inputSearchList:searchList[]=[];
  inputText:string;
  searchCondition:string;
  finalFilterResult:searchList[]=[];
  constructor() { }

  ngOnInit(): void {
    
  }
  search(event:any){
    var searchKey=event.target.value.toString(); 
    console.log(searchKey);
    
    if(searchKey.length>0){
      this.finalFilterResult=this.inputSearchList.filter(function (search) {
        return search.name.toLowerCase().includes(searchKey.toLowerCase());
      })
    }
    
  }
}
