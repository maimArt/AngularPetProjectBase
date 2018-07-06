import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactCreatorComponent} from './contact-creator/contact-creator.component';
import {ContactsStoreModule} from './store/contacts-store.module';

@NgModule({
  imports: [CommonModule, ContactsStoreModule],
  exports: [ContactCreatorComponent, ContactListComponent],
  declarations: [ContactCreatorComponent, ContactListComponent]
})
export class ContactsModule {
}
