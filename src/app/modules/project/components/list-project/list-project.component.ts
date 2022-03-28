import { Component,Input, OnInit } from '@angular/core';
import { MatCardXlImage } from '@angular/material/card';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
  @Input() items:any;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'determinate';
  value=45;
  today=new Date();
  olddate=new Date();
  
 
  cal:any="";
  constructor() {
   }
  
  ngOnInit(): void {
  this.cal=this.demo(this.items.date,this.today);
  console.log(this.cal)
    
  }

  demo(old:any,today:any){
    const milisec=today.getTime()-old.getTime();
    const sec=Math.trunc(milisec/1000);
    const day=Math.trunc(milisec/(1000*60*60*24));
    const hour=Math.trunc(milisec/(1000*60*60));
    const min=Math.trunc(milisec/(1000*60));
    
    if(day >=365){
      if(day==365){
        return "1 Year";
      }
      return Math.trunc(day/365)+" "+"Years";
    }else{
      if(day >=30){
        if(day==30){
            return "1 Month";
        }
        return Math.trunc(day/30)+" "+"Months";
      }else{
        if(day >=7){
          if(day==7){
            return "1 Week";
          }
          return Math.trunc(day/7)+" "+" Weeks"
        }else{
          if(hour >=24){
            if(hour==24){
              return "1 day";
            }
            return Math.trunc(hour/24)+" "+"days";
          }else{
            if(min >=60){
              if(min==60){
                return "1 Hour";
              }
              return Math.trunc(min/60)+" "+"Hours"
            }else{
              if(sec >=60){
                if(sec==60){
                  return "1 Minute"
                }
                return Math.trunc(sec/60)+" "+"Minutes";
              }
            }
          }
        }
      }
    }

    return Math.trunc(sec)+" "+"Secs";

  }

}
