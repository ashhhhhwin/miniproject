import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/Models/Contact';
import { ContactService } from '../ContactService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.css']
})
export class DisplayContactComponent implements OnInit {

  contact?:any;

  constructor(private pcontact:ContactService,private route:Router) { }

  ngOnInit(): void {
    this.displayContacts();
    
  }
  displayContacts()
  {
    this.contact=this.pcontact.getContacts();
  }

  deleteContact(FirstName?:string)
  {
    for(let i=0;i<this.contact.length;i++)
    {
      if(this.contact[i].FirstName==FirstName)
      {
        this.contact.splice(i,1);
        alert("Record deleted")
      }
      
    }
  }
  AddContact()
  {
    debugger;
    this.route.navigate(['add']);
  }

}
