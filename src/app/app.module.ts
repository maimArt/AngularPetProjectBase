import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ContactsModule} from './contacts/contacts.module';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule, ContactsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
