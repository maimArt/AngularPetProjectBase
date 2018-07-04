import {Component, OnInit} from '@angular/core';
import {ContactService} from '../contact.service';
import {Observable} from 'rxjs';
import {Contact} from '../../model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<Contact[]>;

  constructor(private nameService: ContactService) {
    this.contacts = nameService.contacts;
  }

  ngOnInit() {
  }

}
