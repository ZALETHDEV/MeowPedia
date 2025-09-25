import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CardDetailPageRoutingModule } from './card-detail-routing.module';
import { CardDetailPage } from './card-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDetailPageRoutingModule
  ],
  declarations: [CardDetailPage]
})
export class CardDetailPageModule {}
