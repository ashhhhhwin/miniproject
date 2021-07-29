import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactService } from './ContactService';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Searchbyname } from './display-contact/Searchbyname.pipe';
import { SortnamePipe } from './sortname.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DisplayContactComponent,
    ContactFormsComponent,
    Searchbyname,
    SortnamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
