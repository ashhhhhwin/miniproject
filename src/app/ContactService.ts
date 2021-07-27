import { Injectable } from "@angular/core";
import { Contact } from "src/Models/Contact";

@Injectable()
export class ContactService{

    contact?:Contact[];
    constructor()
    {
        this.contact=[{FirstName:"Ashwin",LastName:"Selvarangan",Phone:"999999991"},
        {FirstName:"Vishal",LastName:"Iyer",Phone:"999993491"},
        {FirstName:"Aniket",LastName:"Sonawane",Phone:"9923499991"},
        {FirstName:"Sam",LastName:"John",Phone:"999924991"},
        {FirstName:"Saloni",LastName:"Kots",Phone:"9999234991"}]
    }
    getContacts()
    {
        return this.contact;
    }
    

}