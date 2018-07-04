import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ContactCreatorComponent} from './contact-creator/contact-creator.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactService} from './contact.service';

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
