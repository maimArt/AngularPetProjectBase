import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NameChangerComponent } from './name-changer/name-changer.component';
import { NameOutputComponent } from './name-output/name-output.component';
import {NameService} from './name.service';

@NgModule({
  declarations: [
    NameChangerComponent,
    NameOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NameService],
  bootstrap: [NameChangerComponent, NameOutputComponent]
})
export class AppModule { }
