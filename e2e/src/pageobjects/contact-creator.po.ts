import {by, element, ElementFinder, promise, protractor} from 'protractor';
import Promise = promise.Promise;

export class ContactCreatorPO {

  isShown(): Promise<boolean> {
    return this.contactCreatorInputElement().isPresent();
  }

  clearContactCreator(): void {
    this.contactCreatorInputElement().clear();
  }

  typeIntoContactCreator(stringToType: string): void {
    this.contactCreatorInputElement().sendKeys(stringToType);
  }

  pressEnterInContractCreator(): void {
    this.contactCreatorInputElement().sendKeys(protractor.Key.ENTER);
  }

  valueOfContactCreator(): Promise<string> {
    return this.contactCreatorInputElement().getAttribute('value');
  }

  private contactCreatorInputElement(): ElementFinder {
    return element(by.css('app-contact-creator input'));
  }
}
