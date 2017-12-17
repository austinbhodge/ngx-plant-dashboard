import { Component, OnInit } from '@angular/core';
import { PlantSidebarService } from './plant-sidebar/plant-sidebar.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  productId: number;
  sidebarOpen = false;
  constructor(private plantSidebarService: PlantSidebarService) { }

  ngOnInit() {
    this.plantSidebarService.getPlantSidbarState().subscribe(
      productId => {
        this.sidebarOpen = true;
        this.productId = productId;
      },
      error => {console.log(error); }
    );
  }

}
