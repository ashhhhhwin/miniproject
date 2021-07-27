import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/Models/Contact';
import { ContactService } from '../ContactService';

@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.css']
})
export class ContactFormsComponent implements OnInit {

  getcontact:Contact={};
  contact?:any;
  constructor(private pcontact:ContactService) { }

  ngOnInit(): void {
    this.displayContacts();
    
  }
  displayContacts()
  {
    debugger;
    this.contact=this.pcontact.getContacts();
  }
  addContact()
  {
    
    this.contact.push(this.getcontact);
    console.log(this.getcontact);
    this.getcontact={};
  }
}
