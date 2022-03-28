import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssigneeComponent } from './components/add-assignee/assignee.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { HomeComponent } from './layout/home/home.component';
import { MaterialModule } from '../../core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AssigneeComponent,
    MilestoneComponent,
    ListProjectComponent,
    CreateProjectComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      progressBar:true,
      progressAnimation:'decreasing'

    })
  ],  
  exports:[
    
  ]
})
export class ProjectModule { }
