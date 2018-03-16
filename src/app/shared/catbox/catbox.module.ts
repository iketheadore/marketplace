import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '../../core';
import { SharedModule } from '../../shared';
import { CatBoxComponent } from './catbox.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
  ],
  providers: [
  ]
})
export class CatBoxModule { }
