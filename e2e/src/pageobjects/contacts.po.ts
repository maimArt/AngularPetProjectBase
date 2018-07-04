import {browser} from 'protractor';
import {ContactCreatorPO} from './contact-creator.po';
import {ContactListPO} from './contact-list.po';

export class ContactsPage {

  contactCreator: ContactCreatorPO = new ContactCreatorPO();

  contactList: ContactListPO = new ContactListPO();

  navigateTo() {
    return browser.get('/');
  }
}
