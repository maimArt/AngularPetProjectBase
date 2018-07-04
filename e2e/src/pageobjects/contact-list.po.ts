import {by, element, ElementArrayFinder, ElementFinder, promise} from 'protractor';
import Promise = promise.Promise;

export class ContactListPO {

  isShown(): Promise<boolean> {
    return this.contactListElement().isPresent();
  }

  shownContactNames(): Promise<Promise<string>[]> {
    return this.contactListItemElements().map(contactNameElement => contactNameElement.getText());
  }

  private contactListItemElements(): ElementArrayFinder {
    return this.contactListElement().all(by.css('.contactName'));
  }

  private contactListElement(): ElementFinder {
    return element(by.css('app-contact-list'));
  }
}
