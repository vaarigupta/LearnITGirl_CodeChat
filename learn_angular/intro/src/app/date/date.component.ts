import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateval: string;
  constructor() { 

    setInterval(()=>{
      let currentDate = new Date();
      this.dateval = currentDate.toDateString() + " -- " + currentDate.toLocaleTimeString();

    },1000);
    
  }
 
  ngOnInit() {
  }

}
