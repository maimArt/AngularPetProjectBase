import {ContactState, reduceContactState} from './contacts-reducers';
import {AddContactAction} from './contacts.actions';
import {Contact} from '../../../model/contact';

describe('Contacts reducer', function () {
  it('should add a contact on an ADD_CONTACT action', function () {
    const state = new ContactState();
    const contactToAdd = new Contact('Horst');

    const newState = reduceContactState(state, new AddContactAction(contactToAdd));

    expect(newState.contacts).toContain(contactToAdd);
  });
});
