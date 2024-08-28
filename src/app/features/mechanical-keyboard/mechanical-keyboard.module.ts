import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicalKeyboardCardComponent } from './mechanical-keyboard-card/mechanical-keyboard-card.component';
import { MaterialModule } from '../../layout/material/material.module';



@NgModule({
  declarations: [
    MechanicalKeyboardCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MechanicalKeyboardModule { }
