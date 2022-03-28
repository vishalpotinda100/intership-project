import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss']
})
export class AssigneeComponent implements OnInit {

  @Output() selectedAssinee=new EventEmitter();
  @Output() removeAssinee=new EventEmitter();

  separatorKeysCodes: number[] = [ENTER, COMMA];
  AssigneeCtrl = new FormControl();
  filteredAssignee: Observable<any[]>;

  assigneesList: any = [];
  allAssignee:any= [{'initial':"vp"},{"initial":"DK"},{"initial":"Mk"}];
  assigneeForm!:FormGroup;


  constructor() {
    
    this.filteredAssignee = this.AssigneeCtrl.valueChanges.pipe(
      startWith(null),
      map((assignee:any) => (assignee ? this._filter(assignee): this.allAssignee.slice())),
    );

  }

  ngOnInit(){
  }

 

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.assigneesList.push(value);
    }
    event.chipInput!.clear();
    this.AssigneeCtrl.setValue(null);
  }



  remove(assign: string): void {
    const index = this.assigneesList.indexOf(assign);
    console.log(assign)
    if (index >= 0) {
      this.assigneesList.splice(index, 1);
      console.log(this.assigneesList)
      this.removeAssinee.emit(this.assigneesList);
    }
  }

  
  selected(event: MatAutocompleteSelectedEvent): void {
     this.assigneesList.push({'initial':event.option.viewValue});
    this.AssigneeCtrl.setValue(null);
    this.selectedAssinee.emit(this.assigneesList);
    console.log(this.assigneesList)
  }


  private _filter(value: any): any[] {
    const filterValue = value.initial;

    return this.allAssignee.filter((assignee:any) => assignee.initial.toLowerCase().includes(filterValue));
  }
 
 
}
