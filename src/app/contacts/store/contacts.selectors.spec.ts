import {Contact} from '../../../model/contact';
import {featureName} from './contacts-store.module';
import {ContactState} from './contacts-reducers';
import {selectContacts} from './contacts.selectors';

describe('Contacts selectors', function () {
  it('selectContacts should return contacts of a state', function () {
    let state = {[featureName]: new ContactState()};
    state.Contacts.contacts.push(new Contact('Test'));

    let selectedContacts: Contact[] = selectContacts(state);

    expect(selectedContacts).toBe(state.Contacts.contacts);
  });
});
