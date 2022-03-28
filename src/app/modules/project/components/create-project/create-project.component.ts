import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  @Output() createdItem=new EventEmitter();
  assign:boolean=false;
  milestoneBoolen:boolean=false;
  date:Date=new Date();
  openCount:number=0;
  closedCount:number=0;
   allAssigneeList:any={
    date:this.date,
    title:'',
    organization:'',
    assigneList:[],
    milestoneList:{}

  }

  constructor(private toastr:ToastrService){
    
  }

  ngOnInit(): void {}


 selectedAssignee(assignees:any){
  this.allAssigneeList.assigneList=assignees;
 }

 removeAssinee(assignees:any){
  this.allAssigneeList.assigneList=assignees;
 }

 selectedMilestone(milestone:any){
   this.allAssigneeList.milestoneList=milestone;
   this.openCount=this.allAssigneeList.milestoneList.open.length;
   this.closedCount=this.allAssigneeList.milestoneList.closed.length;
   
 }

submitHandler(items:NgForm){

  const {title,organization}=items.value;
  if(title.trim()=='' || organization.trim()==''){
    this.toastr.error('Please fill Title and Organization', 'Title and Organization', {
      timeOut: 5000,
    });
  }else if(this.allAssigneeList.assigneList.length==0){
    this.toastr.error('Please select at least one assignee','Assignee')
  }else{
    this.createdItem.emit(this.allAssigneeList)
  }



}

milestoneFocus(){
  this.milestoneBoolen=!this.milestoneBoolen
}
assignFocus(){
  this.assign=!this.assign;
}

resetForm(){
  this.allAssigneeList={};
}





}
