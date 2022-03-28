import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit {

  @Output() selectedMilestone=new EventEmitter();
  openList=[ { "id":"1", "task":" open Task1","isChecked":"false"},{ "id":"2", "task":" open Task1","isChecked":"false" }];
  closedList=[{"id":"1", "task":"Closed task1","isChecked":"false"},{ "id":"2", "task":" Closed Task1","isChecked":"false"}];


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
