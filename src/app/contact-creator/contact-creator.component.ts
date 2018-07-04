import {Component, ElementRef, ViewChild} from '@angular/core';
import {ContactService} from '../contact.service';
import {Contact} from '../../model/contact';

@Component({
  selector: 'app-contact-creator',
  templateUrl: './contact-creator.component.html',
  styleUrls: ['./contact-creator.component.css']
})
export class ContactCreatorComponent {

  @ViewChild('nameInput')
  inputField: ElementRef<HTMLInputElement>;

  constructor(private nameService: ContactService) {

  }

  createNewContact() {
    const nameOfNewContact = this.inputField.nativeElement.value;
    if (nameOfNewContact != null && nameOfNewContact.length > 0) {
      this.nameService.addContact(new Contact(nameOfNewContact));
      this.clearInputField();
    }
  }

  private clearInputField() {
    this.inputField.nativeElement.value = '';
  }
}
