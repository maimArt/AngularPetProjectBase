import {RootState, RootStoreModule} from './root-store.module';
import {TestBed} from '@angular/core/testing';
import {Store} from '@ngrx/store';

describe('RootStoreModule Integration', () => {
  let rootStore: Store<RootState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RootStoreModule]
    });
  });

  beforeEach(() => {
    rootStore = TestBed.get(Store);
  });

  it('should create a root store', () => {
    expect(rootStore).toBeTruthy();
  });

  it('should only provide a empty state without properties', (done) => {
    rootStore.select(state => state).subscribe((rootState) => {
      expect(rootState).toEqual({});
      done();
    });
  });
});
