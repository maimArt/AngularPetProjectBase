import {InjectionToken, NgModule} from '@angular/core';
import {Contact} from '../../../model/contact';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {reduceContactState} from './contacts-reducers';

export class ContactState {
  contacts: Contact[] = [];
}

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
