import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit {

  @Output() selectedMilestone=new EventEmitter();
  openList=[ {  "task":" open Task1","isChecked":false},{  "task":" open Task1","isChecked":false }];
  closedList=[{ "task":"Closed task1","isChecked":false},{  "task":" Closed Task1","isChecked":false}];


  milestoneList:any={
    open:[],
    closed:[]
    }


  constructor() {
   }


  ngOnInit(): void {
  }

  addOpen(){

      const filterList=this.openList.filter((item:any)=>item.isChecked);
      this.milestoneList.open=filterList;
      this.selectedMilestone.emit(this.milestoneList);
  }

  
  addClosed(){
      const filterList=this.closedList.filter((item:any)=>item.isChecked);
      this.milestoneList.closed=filterList;
      this.selectedMilestone.emit(this.milestoneList);
  }




}
