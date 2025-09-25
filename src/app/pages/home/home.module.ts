import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { CardActionPage } from '../card-action/card-action.page';
import { CardActionPageModule } from '../card-action/card-action.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CardActionPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
