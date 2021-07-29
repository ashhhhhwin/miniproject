import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';

const routes: Routes = [
  {path:'',component:DisplayContactComponent},
  {path:'display',component:DisplayContactComponent},
  {path:'add',component:ContactFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
