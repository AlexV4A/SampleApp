import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkboardComponent } from './workboard.component';
import { ActionComponent } from '../common/action/action.component';


@NgModule({
  declarations: [
    WorkboardComponent,
    ActionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkboardModule { }
