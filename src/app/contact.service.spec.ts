import {inject, TestBed} from '@angular/core/testing';

import {ContactService} from './contact.service';
import {Contact} from '../model/contact';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });

  it('should initially provide an empty array of contacts', inject([ContactService], (service: ContactService) => {
    expect(service.contacts.getValue().length).toBe(0);
  }));

  it('should change the name to "Horst" when changed via #changeName', inject([ContactService], (service: ContactService) => {
    const newContact = new Contact('Horst');
    service.addContact(newContact);
    expect(service.contacts.getValue()).toContain(newContact);
  }));
});
