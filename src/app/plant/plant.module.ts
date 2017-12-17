import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '../shared/shared.module';

import { PlantRoutingModule } from './plant-routing.module';

import { PlantComponent } from './plant.component';
import { PlantMapComponent } from './plant-map/plant-map.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantSidebarComponent } from './plant-sidebar/plant-sidebar.component';
import { PlantSidebarService } from './plant-sidebar/plant-sidebar.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDVUCggbTi2bJSDzxor3LfLHktV-i16Zzg'}),
    PlantRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  declarations: [
    PlantComponent,
    PlantMapComponent,
    PlantListComponent,
    PlantSidebarComponent
  ],
  providers: [
    PlantSidebarService
  ]
})
export class PlantModule { }
