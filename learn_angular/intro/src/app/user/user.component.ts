import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   doer : any;
  constructor() {
    this.doer = {
      name : 'Vaari',
      address : 'Delhi',
      phone : [
        '122349',
        '134689',
        '567899'
      ]

    };
   }
   
  ngOnInit() {
  }

}
