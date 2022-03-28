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
      "date":new Date("Mon Mar 25 2021 14:15:00 GMT+0530 (India Standard Time)"),
      "title":"Angular",
      "organization":"Google",
      "assigneList":[
        {"initial":"MK",},
        {"initial":"NS"},
        {"initial":"PP"}
      ],
      "milestone":{
        "open":[ {"id":"1", "task":"Task1","isChecked":"false"},{"id":"2","task":"Task2","isChecked":"false"}],
        "closed":[{"id":"1","task":"Closed task1","isChecked":"false"},{"id":"2","task":"Closed task2","isChecked":"false"}]

      }
    },
    {
      "date":new Date("Mon Dec 14 2021 8:54:00 GMT+0530 (India Standard Time)"),
      "title":"React",
      "organization":"facebook",
      "assigneList":[
        {"initial":"AK",},
        {"initial":"Dp"},
        {"initial":"RS"}
      ],
      "milestoneList":{
        "open":[ {"id":"1", "task":"Task1","isChecked":"false"},{"id":"2","task":"Task2","isChecked":"false"}],
        "closed":[{"id":"1","task":"Closed task1","isChecked":"false"},{"id":"2","task":"Closed task2","isChecked":"false"}]

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
