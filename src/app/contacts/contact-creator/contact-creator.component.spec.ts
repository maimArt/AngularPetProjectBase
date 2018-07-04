import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ContactCreatorComponent} from './contact-creator.component';
import {ContactService} from '../services/contact.service';
import {BehaviorSubject} from 'rxjs';
import {Contact} from '../../../model/contact';
import objectContaining = jasmine.objectContaining;


class MockedContactService {
  contacts: BehaviorSubject<Contact[]> = new BehaviorSubject([new Contact('Max'), new Contact('Moritz')]);

  addContact() {
  }
}

describe('ContactCreatorComponent', () => {
  let fixture: ComponentFixture<ContactCreatorComponent>;
  let component: ContactCreatorComponent;
  let nameInput: HTMLInputElement;
  let contactService: Partial<ContactService>;

  beforeEach(async(() => {
    contactService = new MockedContactService();
    TestBed.configureTestingModule({
      declarations: [
        ContactCreatorComponent
      ],
      providers: [{
        provide: ContactService,
        useValue: contactService
      }]
    }).compileComponents();
    fixture = TestBed.createComponent(ContactCreatorComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreatorComponent);
    component = fixture.componentInstance;
    nameInput = fixture.nativeElement.querySelector('#nameInput');
    fixture.detectChanges();
  });

  it('should initially contain an empty textfield', function () {
    expect(nameInput.value).toEqual('');
  });

  it('should commit the created contact to the contact service when pressing ENTER', function () {
    spyOn(contactService, 'addContact');
    const nameOfNewContact = 'Horst';
    nameInput.value = nameOfNewContact;

    nameInput.dispatchEvent(new KeyboardEvent('keyup', {key: 'enter'}));
    fixture.detectChanges();

    expect(contactService.addContact).toHaveBeenCalledWith(objectContaining({name: nameOfNewContact}));
  });

  it('should clear the textfield after ENTER was pressed', function () {
    nameInput.value = 'SomeName';

    nameInput.dispatchEvent(new KeyboardEvent('keyup', {key: 'enter'}));
    fixture.detectChanges();

    expect(nameInput.value).toBe('');
  });

  it('should not create a contact when textfield is empty and ENTER was pressed', function () {
    spyOn(contactService, 'addContact');
    nameInput.dispatchEvent(new KeyboardEvent('keyup', {key: 'enter'}));
    fixture.detectChanges();

    expect(contactService.addContact).not.toHaveBeenCalled();
  });
});
