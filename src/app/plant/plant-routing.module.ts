import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantComponent } from './plant.component';
import { PlantMapComponent } from './plant-map/plant-map.component';
import { PlantListComponent } from './plant-list/plant-list.component';

const routes: Routes = [
  {
    path: 'plant',
    component: PlantComponent,
    children: [
      { path: 'map', component: PlantMapComponent},
      { path: 'list', component: PlantListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PlantRoutingModule { }

export const routedComponents = [];
