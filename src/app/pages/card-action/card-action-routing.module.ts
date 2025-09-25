import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardActionPage } from './card-action.page';

const routes: Routes = [
  {
    path: '',
    component: CardActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardActionPageRoutingModule {}
