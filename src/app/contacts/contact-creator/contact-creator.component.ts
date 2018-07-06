import {Component, ElementRef, ViewChild} from '@angular/core';
import {Contact} from '../../../model/contact';
import {Store} from '@ngrx/store';
import {AddContactAction} from '../store/contacts.actions';

@Component({
  selector: 'app-contact-creator',
  templateUrl: './contact-creator.component.html',
  styleUrls: ['./contact-creator.component.css']
})
export class ContactCreatorComponent {

  @ViewChild('nameInput')
  inputField: ElementRef<HTMLInputElement>;

  constructor(public store: Store<any>) {

  }

  createNewContact() {
    const nameOfNewContact = this.inputField.nativeElement.value;
    if (nameOfNewContact != null && nameOfNewContact.length > 0) {
      this.store.dispatch(new AddContactAction(new Contact(nameOfNewContact)));
      this.clearInputField();
    }
  }

  private clearInputField() {
    this.inputField.nativeElement.value = '';
  }
}
