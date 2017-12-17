import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chart-modal',
  templateUrl: './chart-modal.component.html',
  styleUrls: ['./chart-modal.component.scss']
})
export class ChartModalComponent implements OnInit {
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  colorScheme = {
    domain: ['#df3a3a']
  };
  host = environment.serverHost;
  lineData = [
    {
      name : '',
      series : []
    }
  ];
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<ChartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
      this.getData();
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    getData() {
      this.http.get(this.host + 'product/3948/batch/4943/daily').subscribe(
        chartData => { this.parseChartData(chartData); },
        error => {console.log(error); }
      );
    }

    parseChartData(chartData) {
      this.lineData[0].series = [];
      this.lineData[0].name = this.data.chartRef;
      for (const entry of chartData){
        const graphPoint = {
          name : moment(entry.date, 'MM-DD-YYYY').format('MMMM D'),
          value: entry.yield
        };
        this.lineData[0].series.push(graphPoint);
      }
      this.lineData = [...this.lineData];

    }
}
