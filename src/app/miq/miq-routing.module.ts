import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiqComponent } from './miq.component';

const routes: Routes = [
  { path: 'miq/:batchId', component: MiqComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiqRoutingModule { }

