import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MechanicalKeyboardCardComponent } from './features/mechanical-keyboard/mechanical-keyboard-card/mechanical-keyboard-card.component';

const routes: Routes = [
  {
    path: '',
    component: MechanicalKeyboardCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
