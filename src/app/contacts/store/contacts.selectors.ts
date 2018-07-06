import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ContactState} from './contacts-reducers';
import {featureName} from './contacts-store.module';

const selectFeature = createFeatureSelector<ContactState>(featureName);

export const selectContacts = createSelector(
  selectFeature,
  (state: ContactState) => state.contacts
);


