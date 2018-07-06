import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducerMap, StoreModule} from '@ngrx/store';

export class RootState {
}

const ROOT_REDUCER_INJECTOR = new InjectionToken<ActionReducerMap<RootState>>('Root Reducer');

@NgModule({
  imports: [
    CommonModule, StoreModule.forRoot(ROOT_REDUCER_INJECTOR)
  ],
  providers: [{provide: ROOT_REDUCER_INJECTOR, useValue: {}}],
  declarations: []
})
export class RootStoreModule {
}
