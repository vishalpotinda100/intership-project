import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/project/layout/home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  }
  // {
  //   path:'',
  //   loadChildren:()=>import('./modules/project/project.module').then((m)=>m.ProjectModule)
  // }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
