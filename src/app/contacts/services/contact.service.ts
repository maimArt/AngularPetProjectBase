import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Contact} from '../../../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: BehaviorSubject<Contact[]> = new BehaviorSubject([]);

  constructor() {
  }

  addContact(newContact: Contact) {
    this.contacts.next([...this.contacts.getValue(), newContact]);
  }
}
