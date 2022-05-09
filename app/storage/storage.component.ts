import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
   fieldArray: Array<any> = [];
     newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index: number) {
        this.fieldArray.splice(index, 1);
    }
  constructor() { }

  ngOnInit(): void {
  }
  
}
