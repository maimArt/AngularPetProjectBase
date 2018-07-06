import {ContactsStoreModule, featureName} from './contacts-store.module';
import {Store} from '@ngrx/store';
import {TestBed} from '@angular/core/testing';
import {RootStoreModule} from '../../core/root-store.module';
import {Contact} from '../../../model/contact';
import {AddContactAction} from './contacts.actions';
import {ContactState} from './contacts-reducers';
import anything = jasmine.anything;

describe('ContactsStoreModule', () => {
  let contactsStore: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RootStoreModule, ContactsStoreModule]
    });
  });

  beforeEach(() => {
    contactsStore = TestBed.get(Store);
  });

  it('should create an contacts$ store', () => {
    expect(contactsStore).toBeTruthy();
  });

  it('should be attached to the store', done => {
    contactsStore.select(state => state).subscribe(state => {
      expect(state).toEqual({[featureName]: anything()});
      done();
    });
  });

  it('should initially have an empty array of contacts$', done => {
    contactsStore.select(featureName).subscribe((contactsState: ContactState) => {
      expect(contactsState.contacts).toEqual([]);
      done();
    });
  });

  it('contact should be added to contacts$ when ADD_CONTACT is fired', done => {
    const newContact = new Contact('Horst');

    contactsStore.dispatch(new AddContactAction(newContact));

    contactsStore.select(featureName).subscribe((contactsState: ContactState) => {
      expect(contactsState.contacts).toContain(newContact);
      done();
    });
  });
});
