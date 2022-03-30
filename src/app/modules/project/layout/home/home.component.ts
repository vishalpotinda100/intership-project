import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date=new Date();
  projectJson=[
  
    {
      "date":new Date("Mon Mar 22 2022 14:15:00 GMT+0530 (India Standard Time)"),
      "title":"Angular",
      "organization":"Google",
      "assigneList":[
        {"initial":"MK",},
        {"initial":"NS"},
        {"initial":"PP"}
      ],
      "milestone":{
        "open":[ { "task":"Task1","isChecked":false},{"task":"Task2","isChecked":false}],
        "closed":[{"task":"Closed task1","isChecked":true},{"task":"Closed task2","isChecked":true}]

      }
    },
    {
      "date":new Date("Mon Mar 28 2022 8:54:00 GMT+0530 (India Standard Time)"),
      "title":"React",
      "organization":"facebook",
      "assigneList":[
        {"initial":"AK",},
        {"initial":"Dp"},
        {"initial":"RS"}
      ],
      "milestoneList":{
        "open":[ { "task":"Task1","isChecked":true},{"task":"Task2","isChecked":true}],
        "closed":[{"task":"Closed task1","isChecked":false},{"task":"Closed task2","isChecked":true}]

      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  createForm(data:any){
    
    console.log(data)
    this.projectJson=[...this.projectJson,data];
  }

}
