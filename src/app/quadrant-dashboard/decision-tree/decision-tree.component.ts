import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { rankData } from './rankData';
import { ruleData } from './ruleData';
import { treeData } from './treeData';

@Component({
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.scss']
})
export class DecisionTreeComponent implements OnInit {
  @Output()openModal = new EventEmitter<string>();
  @Output()expand = new EventEmitter<string>();
  @Input()chartHeight = 35;
  isExpanded = false;
  activeTab = 'rank';
  rankData = rankData;
  ruleData = ruleData;
  treeData = treeData;
  loadingIndicator = false;

    constructor() { }

  ngOnInit() {

  }

  expandSelf() {
    this.expand.emit('decision-tree');
    this.isExpanded = true;
  }

  changeTab(string) {
    this.activeTab = string;
  }

  getRowHeight(row) {
    const ruleCount = row.rules.length;
    const height = 25 * ruleCount + 20;
    return height;
  }

  onPage(event) {}

  openChartModal(chartRef) {
    this.openModal.emit(chartRef);
  }
}
