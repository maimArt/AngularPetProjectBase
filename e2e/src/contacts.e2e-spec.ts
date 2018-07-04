import {ContactsPage} from './pageobjects/contacts.po';

describe('Name view', () => {
  let page: ContactsPage;

  beforeEach(() => {
    page = new ContactsPage();
    page.navigateTo();
  });

  it('should initially display the contact creator', () => {
    expect(page.contactCreator.isShown()).toBe(true);
    expect(page.contactCreator.valueOfContactCreator()).toBe('');
  });

  it('should initially display an empty list of contacts', function () {
    expect(page.contactList.isShown()).toBe(true);
    expect(page.contactList.shownContactNames().then(contactNames => contactNames.length)).toBe(0);
  });

  it('should display contact "Rudi" in the contact list when "Rudi" was created in the name-creator', function () {
    page.contactCreator.typeIntoContactCreator('Rudi');
    page.contactCreator.pressEnterInContractCreator();

    expect(page.contactList.shownContactNames()).toContain('Rudi');
  });

  it('should clear the name-creator after a contact was created', function () {
    page.contactCreator.typeIntoContactCreator('Rudi');
    page.contactCreator.pressEnterInContractCreator();
    expect(page.contactCreator.valueOfContactCreator()).toBe('');
  });
});
