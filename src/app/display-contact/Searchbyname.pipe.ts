import { getTranslationDeclStmts } from "@angular/compiler/src/render3/view/template";
import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from "src/Models/Contact";

@Pipe({name:'Searchbyname'})
export class Searchbyname implements PipeTransform
{
    transform(Contact:Contact[], searchText:string){
        if(searchText)
        {
            return Contact.filter((x)=>x.FirstName?.toLowerCase().startsWith(searchText.toLowerCase()));
        }
        else{
            return Contact;
        }
        
    }
    
}