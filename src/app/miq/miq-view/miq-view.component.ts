import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { data } from './data';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-miq-view',
  templateUrl: './miq-view.component.html',
  styleUrls: ['./miq-view.component.scss']
})
export class MiqViewComponent implements OnInit {
  @Output()expand = new EventEmitter<string>();
  @Input()chartHeight = '55';
  @Input()expandable: boolean;
  activeTab = 'daily';
  activeChart = 'lineChart';
  yieldMin = 55;
  yieldRef = [{name: 'Yield Minimum', value: this.yieldMin}, {name: '', value: 0}];
  colorScheme = {
    domain: ['#4e89f7']
  };
  // host = environment.serverHost;
  batchNumber: number;
  lineData = [
    {
      name : 'Batch' + this.batchNumber,
      series : []
    }
  ];
  customColors = [];
  barData = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.parseChartData(data.daily);
    this.batchNumber = parseFloat(this.route.snapshot.paramMap.get('batchId'));
    this.lineData[0].name = 'Batch ' + this.batchNumber;
  }

  // API Call
  // getYieldData(timeFrame) {
  //   this.http.get(this.host + 'product/3948/batch/' + this.batchNumber + '/' + timeFrame).subscribe(
  //     chartData => { this.parseChartData(chartData); },
  //     error => {console.log(error); }
  //   );
  // }

  parseChartData(chartData) {
    this.lineData[0].series = [];
    this.barData = [];
    for (const entry of chartData){
      const graphPoint = {
        name : moment(entry.date, 'MM-DD-YYYY').format('MMMM D'),
        value: entry.yield
      };
      this.lineData[0].series.push(graphPoint);
      if (graphPoint.value < this.yieldMin) {
        this.customColors.push({name: graphPoint.name, value: '#e42727'});
      }
    }
    this.lineData = [...this.lineData];
    this.barData = [...this.lineData[0].series];
  }

  expandSelf() {
    this.expand.emit('miq-view');
  }

  changeTab(tab) {
    if (this.activeTab === tab) {
      return;
    }else {
      this.activeTab = tab;
      this.parseChartData(data[tab]);
    }
  }

  chartChange(chart) {
    this.activeChart = chart;
  }

  moveQuadView(event) {
    console.log(event);
    this.router.navigate(['/quadrant-dashboard', this.batchNumber]);
  }
}

