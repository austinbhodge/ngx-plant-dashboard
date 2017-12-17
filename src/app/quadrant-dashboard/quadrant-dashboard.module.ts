import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '../shared/shared.module';
import { MiqModule } from '../miq/miq.module';
import { QuadrantDashboardRoutingModule } from './quadrant-dashboard-routing.module';

import { QuadrantDashboardComponent } from './quadrant-dashboard.component';
import { AlertsNotificationsComponent } from './alerts-notifications/alerts-notifications.component';
import { ProcessMiningComponent } from './process-mining/process-mining.component';
import { DecisionTreeComponent } from './decision-tree/decision-tree.component';

import { MessageModalComponent } from './message-modal/message-modal.component';
import { ChartModalComponent } from './chart-modal/chart-modal.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgxChartsModule,
    QuadrantDashboardRoutingModule,
    SharedModule,
    MiqModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    QuadrantDashboardComponent,
    AlertsNotificationsComponent,
    ProcessMiningComponent,
    DecisionTreeComponent,
    MessageModalComponent,
    ChartModalComponent
  ],
  entryComponents: [
    ChartModalComponent,
    MessageModalComponent
  ]
})
export class QuadrantDashboardModule { }
