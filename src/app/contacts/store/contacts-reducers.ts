import {ContactAction, ContactActionTypes} from './contacts.actions';
import {ContactState} from './contacts-store.module';

export const reduceContactState = (state: ContactState = new ContactState(), action: ContactAction) => {
  switch (action.type) {
    case ContactActionTypes.ADD_CONTACT:
      return {contacts: [...state.contacts, action.contact]};
  }
  return state;
};
