import {Component} from '@angular/core';
import {NameService} from '../name.service';

@Component({
  selector: 'app-name-changer',
  templateUrl: './name-changer.component.html',
  styleUrls: ['./name-changer.component.css']
})
export class NameChangerComponent {

  initialName = '';

  constructor(private nameService: NameService) {
    this.initialName = nameService.name.getValue();
  }

  nameChanged(newValue: string) {
    this.nameService.changeName(newValue);
  }
}
