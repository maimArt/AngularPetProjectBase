import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {NameChangerComponent} from './name-changer.component';
import {NameOutputComponent} from '../name-output/name-output.component';
import {NameService} from '../name.service';
import {BehaviorSubject, Observable} from 'rxjs';


class MockedNameService {
  name = new BehaviorSubject('InitName');

  changeName(newName: string) {
  }
}

describe('NameChangerComponent', () => {
  let fixture: ComponentFixture<NameChangerComponent>;
  let component: NameChangerComponent;
  let nameInput: HTMLInputElement;
  const nameService: NameService = new MockedNameService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NameChangerComponent
      ],
      providers: [{
        provide: NameService,
        useValue: nameService
      }]
    }).compileComponents();
    fixture = TestBed.createComponent(NameChangerComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameChangerComponent);
    component = fixture.componentInstance;
    nameInput = fixture.nativeElement.querySelector('#nameInput');
    fixture.detectChanges();
  });

  it('should initially contain NameService#name', function () {
    expect(nameInput.value).toEqual(nameService.name.getValue());
  });

  it('should commit the current value to the NameService#name on keyup', function () {
    spyOn(nameService, 'changeName');
    nameInput.value = 'Horst';
    nameInput.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    expect(nameService.changeName).toHaveBeenCalledWith('Horst');
  });
});
