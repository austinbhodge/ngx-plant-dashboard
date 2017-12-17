import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { data } from './data';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-plant-sidebar',
  templateUrl: './plant-sidebar.component.html',
  styleUrls: ['./plant-sidebar.component.scss']
})
export class PlantSidebarComponent implements OnInit {
  @Input() productId: number;
  host = environment.serverHost;
  product;
  batchId;
  isBatchSelected = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log(this.productId);
    // this.http.get(this.host + 'product/' + this.productId).subscribe(
    //   product => {this.product = product; },
    //   error => {console.log(error); }
    // );
    this.product = data;
  }

  toggleEquipment(index) {
    if (this.product.equipment[index].opened) {
      this.product.equipment[index].opened = false;
    }else {
      this.product.equipment[index].opened = true;
    }
  }

  toggleProduct(equipmentIndex, batchGroupIndex) {
    if (this.product.equipment[equipmentIndex].batchGroups[batchGroupIndex].opened) {
      this.product.equipment[equipmentIndex].batchGroups[batchGroupIndex].opened = false;
    }else {
      this.product.equipment[equipmentIndex].batchGroups[batchGroupIndex].opened = true;
    }
  }

  batchSelected(checkbox) {
    console.log(checkbox);
    if ((checkbox.source.id === this.batchId) && !checkbox.checked) {
      this.isBatchSelected = false;
    }else {
      this.batchId = checkbox.source.id;
      this.isBatchSelected = true;
    }
  }

  batchSubmitted() {
    this.router.navigate(['/miq', this.batchId]);
  }

}
