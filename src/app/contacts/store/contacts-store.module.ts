import {InjectionToken, NgModule} from '@angular/core';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {ContactState, reduceContactState} from './contacts-reducers';

export const featureName = 'Contacts';

const REDUCER_INJECTOR = new InjectionToken<ActionReducer<ContactState>>('Contacts Reducer');


@NgModule({
  imports: [
    StoreModule.forFeature(featureName, REDUCER_INJECTOR)
  ],
  providers: [{
    provide: REDUCER_INJECTOR,
    useValue: reduceContactState
  }],
  declarations: []
})
export class ContactsStoreModule {
}
