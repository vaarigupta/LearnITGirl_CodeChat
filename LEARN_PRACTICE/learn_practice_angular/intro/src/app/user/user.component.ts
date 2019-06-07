import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   doer : any;
   @Input('name') userName : string;
  constructor() {
   
   }
   
  ngOnInit() {
    this.doer = {
      name : this.userName,
      address : 'Delhi',
      phone : [
        '122349',
        '134689',
        '567899'
      ]

    };
  }

}
