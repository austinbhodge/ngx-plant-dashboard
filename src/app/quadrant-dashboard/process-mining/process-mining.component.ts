import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { data } from './data';
import { miningData } from './miningData';

@Component({
  selector: 'app-process-mining',
  templateUrl: './process-mining.component.html',
  styleUrls: ['./process-mining.component.scss']
})
export class ProcessMiningComponent implements OnInit {
  @Output()expand = new EventEmitter<string>();
  @Input()chartHeight = 35;
  isExpanded = false;
  activeTab = 'process-mining-view';
  data = data;
  miningData = miningData;
  loadingIndicator = false;
  percentThrough = 0;
  columns = [
    {name : 'Product ID', prop: 'productId'},
    {name : 'Step ID', prop: 'stepId'},
    {name : 'Vessel ID', prop: 'vesselId'},
    {name : 'Case ID', prop: 'caseId'},
    {name : 'Parameter Name', prop: 'parameterName'},
    {name : 'Parameter Rank', prop: 'parameterRank'},
    {name : 'Parameter Value', prop: 'parameterValue'},
  ];
  calculatedWidth = this.miningData.length * 300;
    constructor() { }

  ngOnInit() {
  }

  expandSelf() {
    this.expand.emit('process-mining');
    this.isExpanded = true;
  }

  changeTab(string) {
    this.activeTab = string;
  }

  moveProcess(event) {
    console.log(event);
    this.percentThrough = event.value;
  }
}
