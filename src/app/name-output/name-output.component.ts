import {Component, OnInit} from '@angular/core';
import {NameService} from '../name.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-name-output',
  templateUrl: './name-output.component.html',
  styleUrls: ['./name-output.component.css']
})
export class NameOutputComponent implements OnInit {

  name: Observable<string>;

  constructor(private nameService: NameService) {
    this.name = this.nameService.name;
  }

  ngOnInit() {
  }

}
