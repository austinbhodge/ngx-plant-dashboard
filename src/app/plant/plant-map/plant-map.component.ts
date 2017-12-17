import { Component, OnInit } from '@angular/core';
import { mapStyles } from './map.style';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PlantSidebarService } from '../plant-sidebar/plant-sidebar.service';
import { data } from './data';

@Component({
  selector: 'app-plant-map',
  templateUrl: './plant-map.component.html',
  styleUrls: ['./plant-map.component.scss']
})
export class PlantMapComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  plants;
  // host = environment.serverHost;
  styles = mapStyles;
  sliderValue: number;

  constructor(private http: HttpClient, private plantSidebarService: PlantSidebarService) { }

  ngOnInit() {
    this.lat = 40;
    this.lng = -40;
    this.zoom = 4;
    this.plants = data;
    // Makes a call to the mock api to get an array of plants
    // this.http.get(this.host + 'plants').subscribe(
    //   plants => {this.plants = plants; },
    //   error => {console.log(error); }
    // );
  }

  getMapIcon(isPositive) {
    if (isPositive) {
      return 'assets/icons/Location_Icon_green_with_shadow.svg';
    }else {
      return 'assets/icons/Location_Icon_red_with_shadow.svg';
    }
  }

  zoomChanged(src) {
    console.log(src);
    this.zoom = src.value;
  }

  zoomClicked(change) {
    this.zoom += change;
  }

  productClicked(productId) {
    this.plantSidebarService.openPlantSidebar(productId);
  }

}
