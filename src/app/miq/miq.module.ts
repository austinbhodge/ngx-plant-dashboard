import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { SharedModule } from '../shared/shared.module';
import { MiqRoutingModule } from './miq-routing.module';

import { MiqComponent } from './miq.component';
import { TopProductComponent } from './top-product/top-product.component';
import { DropHistoryComponent } from './drop-history/drop-history.component';
import { MiqViewComponent } from './miq-view/miq-view.component';

@NgModule({
  imports: [
    CommonModule,
    MiqRoutingModule,
    NgxChartsModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [MiqComponent, TopProductComponent, DropHistoryComponent, MiqViewComponent],
  exports: [MiqViewComponent]
})
export class MiqModule { }
