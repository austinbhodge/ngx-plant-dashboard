import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { data } from './data';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent implements OnInit {
  topProducts;
  // host = environment.serverHost;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.topProducts = data;
  }

  // apiCall() {
  //   this.http.get(this.host + 'product/3948/batch/4843/top').subscribe(
  //     topProducts => {this.topProducts = topProducts; },
  //     error => {console.log(error); }
  //   );
  // }

}
