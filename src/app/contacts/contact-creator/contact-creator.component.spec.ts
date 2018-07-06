import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ContactCreatorComponent} from './contact-creator.component';
import {ContactActionTypes} from '../store/contacts.actions';
import {Store} from '@ngrx/store';
import objectContaining = jasmine.objectContaining;


class MockedStore {
  dispatch() {
  }
}

describe('ContactCreatorComponent', () => {
  let fixture: ComponentFixture<ContactCreatorComponent>;
  let component: ContactCreatorComponent;
  let nameInput: HTMLInputElement;
  let store: MockedStore;

  beforeEach(async(() => {
    store = new MockedStore();
    TestBed.configureTestingModule({
      declarations: [
        ContactCreatorComponent
      ],
      providers: [{
        provide: Store,
        useValue: store
      }]
    }).compileComponents();
    fixture = TestBed.createComponent(ContactCreatorComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreatorComponent);
    component = fixture.componentInstance;
    nameInput = fixture.nativeElement.querySelector('#nameInput');
    fixture.detectChanges();
    spyOn(store, 'dispatch');
  });

  it('should initially contain an empty textfield', function () {
    expect(nameInput.value).toEqual('');
  });

  it('should commit the created contact to the contact service when pressing ENTER', function () {
    const nameOfNewContact = 'Horst';
    nameInput.value = nameOfNewContact;

    nameInput.dispatchEvent(new KeyboardEvent('keyup', {key: 'enter'}));
    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(objectContaining({
      type: ContactActionTypes.ADD_CONTACT,
      contact: objectContaining({name: nameOfNewContact})
    }));
  });

  it('should clear the textfield after ENTER was pressed', function () {
    nameInput.value = 'SomeName';

    nameInput.dispatchEvent(new KeyboardEvent('keyup', {key: 'enter'}));
    fixture.detectChanges();

    expect(nameInput.value).toBe('');
  });

  it('should not create a contact when textfield is empty and ENTER was pressed', function () {
    nameInput.dispatchEvent(new KeyboardEvent('keyup', {key: 'enter'}));
    fixture.detectChanges();

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
