import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  data:any[];
  
  constructor() {
    this.data=[];
   }
  
  ngOnInit() {
    this.data
  }

}