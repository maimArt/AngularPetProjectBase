import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ContactsModule} from './contacts/contacts.module';
import {AppComponent} from './app.component';
import {RootStoreModule} from './core/root-store.module';

@NgModule({
  imports: [
    BrowserModule, RootStoreModule, ContactsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
