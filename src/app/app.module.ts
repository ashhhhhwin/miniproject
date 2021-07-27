import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactService } from './ContactService';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DisplayContactComponent,
    ContactFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
