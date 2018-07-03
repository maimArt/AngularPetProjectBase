import {browser, by, element, ElementFinder} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNameInput(): ElementFinder {
    return element(by.css('#nameInput'));
  }

  getNameOutput(): ElementFinder {
    return element(by.css('#nameOutput'));
  }
}
