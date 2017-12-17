import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { data } from './data';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  citys;
  // host = environment.serverHost;
  cityCtrl: FormControl;
  filteredCitys: Observable<any[]>;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.citys = [];
    this.cityCtrl = new FormControl();
    this.filteredCitys = this.cityCtrl.valueChanges
        .startWith(null)
        .map(city => city ? this.filterCity(city) : this.citys.slice());
   }

  ngOnInit() {
    // this.http.get(this.host + 'plants').subscribe(
    //   citys => {
    //     this.citys = citys;
    //   },
    //   error => {console.log(error); }
    // );
    this.citys = data;
  }

  cityChose(event) {
    console.log(event);
  }

  filterCity(name: string) {
    return this.citys.filter(city =>
      city.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
