import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-router.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { PlantModule } from './plant/plant.module';
import { MiqModule } from './miq/miq.module';
import { QuadrantDashboardModule } from './quadrant-dashboard/quadrant-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    PlantModule,
    MiqModule,
    QuadrantDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
