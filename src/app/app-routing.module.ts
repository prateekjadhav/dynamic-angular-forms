import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFormsComponent } from './my-forms/my-forms.component';

const routes: Routes = [
  {'path':'dynamic-forms','component':MyFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
