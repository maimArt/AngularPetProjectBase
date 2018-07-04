import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactCreatorComponent} from './contact-creator/contact-creator.component';
import {ContactService} from './services/contact.service';

@NgModule({
  imports: [CommonModule],
  exports: [ContactCreatorComponent, ContactListComponent],
  declarations: [ContactCreatorComponent, ContactListComponent],
  providers: [ContactService]
})
export class ContactsModule {
}
