import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-miq',
  templateUrl: './miq.component.html',
  styleUrls: ['./miq.component.scss']
})
export class MiqComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
