import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList: Contact[]=[];
 contactObj : Contact={
   id: '',
   name: '',
   mobile: ''
 };
 id:string='';
 name:string='';
 number:string='';
  mobile: string | undefined;
  data: any;


  constructor() { }

  ngOnInit(): void {
  }
  addContact(){
    if(this.name==''|| this.number==''){
      
      return;
    }
    this.contactObj.id='';
    this.contactObj.name=this.name;
    this.data.addContact(this.contactObj);
  
  
  }


}


