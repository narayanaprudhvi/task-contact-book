import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Contact } from '../model/contact';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

//add contact
addContact(contact:Contact){
  contact.id=this.afs.createId();
  return this.afs.collection('/contact').add(contact);
}

//delete contact
deletecontact(contact:Contact){
return this.afs.doc('/contact/'+contact.id).delete();
}

//update contact
updatecontact(contact:Contact){
  this.deletecontact(contact);
  this.addContact(contact);
}


}
