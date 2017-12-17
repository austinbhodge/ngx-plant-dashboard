import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { data } from './data';

import * as moment from 'moment';

@Component({
  selector: 'app-drop-history',
  templateUrl: './drop-history.component.html',
  styleUrls: ['./drop-history.component.scss']
})
export class DropHistoryComponent implements OnInit {
  dropHistory;
  viewedDropHistory;
  dropHistoryLength;
  host = environment.serverHost;
  currentIndex = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dropHistory = data;
    this.viewHistory(0);
    this.dropHistoryLength = this.dropHistory.length;
  }

  callApi() {
    this.http.get(this.host + 'product/3948/batch/4843/drop').subscribe(
      dropHistory => {
        this.dropHistory = dropHistory;
        this.viewHistory(0);
        this.dropHistoryLength = this.dropHistory.length;
      },
      error => {console.log(error); }
    );
  }

  viewHistory(direction) {
    this.currentIndex += direction;
    this.viewedDropHistory = this.dropHistory.slice(this.currentIndex, this.currentIndex + 3);
    for (const drop of this.viewedDropHistory){
      drop.parsedDate = moment(drop.date, 'MM-DD-YYYY').format('MMMM D');
      console.log(drop.parsedDate);
    }
  }

}
