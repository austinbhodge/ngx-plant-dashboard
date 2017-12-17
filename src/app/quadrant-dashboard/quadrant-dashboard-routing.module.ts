import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuadrantDashboardComponent } from './quadrant-dashboard.component';

const routes: Routes = [
  { path: 'quadrant-dashboard/:batchId', component: QuadrantDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuadrantDashboardRoutingModule { }

