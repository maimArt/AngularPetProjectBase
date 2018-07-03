import {TestBed, inject} from '@angular/core/testing';

import {NameService} from './name.service';

describe('NameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameService]
    });
  });

  it('should initially provide an empty name-string', inject([NameService], (service: NameService) => {
    expect(service.name.getValue()).toBe('');
  }));

  it('should change the name to "Horst" when changed via #changeName', inject([NameService], (service: NameService) => {
    service.changeName('Horst');
    expect(service.name.getValue()).toBe('Horst');
  }));
});
