import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../../../model/contact';
import {select, Store} from '@ngrx/store';
import {selectContacts} from '../store/contacts.selectors';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts$: Observable<Contact[]>;

  constructor(private store: Store<any>) {
    this.contacts$ = this.store.pipe(select(selectContacts));
  }

  ngOnInit() {
  }

}


