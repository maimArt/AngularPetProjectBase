import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactListComponent} from './contact-list.component';
import {BehaviorSubject} from 'rxjs';
import {Contact} from '../../../model/contact';
import {featureName} from '../store/contacts-store.module';
import {Store} from '@ngrx/store';

class MockedContactStore {
  state: BehaviorSubject<any> = new BehaviorSubject({[featureName]: {contacts: [new Contact('contactNo1'), new Contact('contactNo2')]}});

  pipe(...pipedFunctions) {
    return this.state.pipe(...pipedFunctions);
  }
}

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let store: MockedContactStore;

  beforeEach(async(() => {
    store = new MockedContactStore();
    TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      providers: [{
        provide: Store,
        useValue: store
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initially show contacts of store', () => {
    const shownContactNameItems = contactNameItems();
    expect(shownContactNameItems[0].textContent).toEqual(contactState().contacts[0].name);
    expect(shownContactNameItems[1].textContent).toEqual(contactState().contacts[1].name);
  });

  it('should show new contact when added to the store', () => {
    const addedContact = new Contact('AddedContact');
    store.state.next({[featureName]: {contacts: [...contactState().contacts, addedContact]}});
    fixture.detectChanges();
    expect(contactNameItems()[2].textContent).toEqual(addedContact.name);
  });

  const contactState = () => {
    return store.state.getValue()[featureName];
  };

  const contactNameItems = function (): NodeList {
    return fixture.nativeElement.querySelectorAll('.contactName');
  };
});



