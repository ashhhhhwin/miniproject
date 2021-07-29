import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/Models/Contact';
import { ContactService } from '../ContactService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.css']
})
export class ContactFormsComponent implements OnInit {

  getcontact:Contact={};
  contact?:any;
  constructor(private pcontact:ContactService,private route:Router) { }

  ngOnInit(): void {
    this.displayContacts();
    
  }
  displayContacts()
  {
    
    this.contact=this.pcontact.getContacts();
  }
  addContact()
  {
    debugger;
    this.contact.push(this.getcontact);
    console.log(this.getcontact);
    this.getcontact={};
    this.route.navigate([""]);
    
  }
}
