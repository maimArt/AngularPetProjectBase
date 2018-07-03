import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NameOutputComponent} from './name-output.component';
import {NameService} from '../name.service';

describe('NameOutputComponent', () => {
  let component: NameOutputComponent;
  let fixture: ComponentFixture<NameOutputComponent>;
  let nameService = new NameService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameOutputComponent],
      providers: [{provide: NameService, useValue: nameService}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initially show value of service#name', () => {
    expect(fixture.nativeElement.querySelector('#nameOutput').textContent).toEqual(nameService.name.getValue());
  });

  it('should show new value when service#name changed', () => {
    nameService.changeName('NewName');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('#nameOutput').textContent).toEqual(nameService.name.getValue());
  });
});
