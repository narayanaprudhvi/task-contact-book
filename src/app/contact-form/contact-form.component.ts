import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name: string='';
  number: string='';
  contactObj: any='';
  data: any='';

 

  constructor() { }

  ngOnInit(): void {
  }
  onUserAdd(userName: any){
  console.log(userName)
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

