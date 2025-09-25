import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CardActionPageRoutingModule } from './card-action-routing.module';
import { CardActionPage } from './card-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardActionPageRoutingModule
  ],
  declarations: [CardActionPage],
  exports: [CardActionPage]

})
export class CardActionPageModule { }
