import {Action} from '@ngrx/store';
import {Contact} from '../../../model/contact';

export interface ContactAction extends Action {
  contact?: Contact;
}

export enum ContactActionTypes {
  ADD_CONTACT = '[Contacts] ADD_CONTACT'
}

export class AddContactAction implements ContactAction {
  readonly type = ContactActionTypes.ADD_CONTACT;

  constructor(public contact: Contact) {

  }

}
