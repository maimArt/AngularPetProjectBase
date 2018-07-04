import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ContactCreatorComponent} from './contacts/contact-creator/contact-creator.component';
import {ContactListComponent} from './contacts/contact-list/contact-list.component';
import {ContactService} from './contacts/services/contact.service';

@NgModule({
  declarations: [
    ContactCreatorComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactService],
  bootstrap: [ContactCreatorComponent, ContactListComponent]
})
export class AppModule { }
