import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactListComponent} from './contact-list.component';
import {ContactService} from '../services/contact.service';
import {BehaviorSubject} from 'rxjs';
import {Contact} from '../../../model/contact';

class MockedContactService {
  contacts: BehaviorSubject<Contact[]> = new BehaviorSubject([new Contact('Max'), new Contact('Moritz')]);
}

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let contactService: Partial<ContactService>;

  beforeEach(async(() => {
    contactService = new MockedContactService();
    TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      providers: [{provide: ContactService, useValue: contactService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initially show contacts of service', () => {
    const shownContactNameItems = contactNameItems();
    expect(shownContactNameItems[0].textContent).toEqual(contactService.contacts.getValue()[0].name);
    expect(shownContactNameItems[1].textContent).toEqual(contactService.contacts.getValue()[1].name);
  });

  it('should show new value when service#name changed', () => {
    const addedContact = new Contact('AddedContact');
    contactService.contacts.next([...contactService.contacts.getValue(), addedContact]);
    fixture.detectChanges();
    expect(contactNameItems()[2].textContent).toEqual(addedContact.name);
  });

  const contactNameItems = function (): NodeList {
    return fixture.nativeElement.querySelectorAll('.contactName');
  };
});



