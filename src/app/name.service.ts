import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  name: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
  }

  changeName(newName: string) {
    this.name.next(newName);
  }
}
