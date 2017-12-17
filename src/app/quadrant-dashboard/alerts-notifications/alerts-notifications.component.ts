import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'app-alerts-notifications',
  templateUrl: './alerts-notifications.component.html',
  styleUrls: ['./alerts-notifications.component.scss']
})
export class AlertsNotificationsComponent implements OnInit {
  @Output()openModal = new EventEmitter<string>();
  @Output()expand = new EventEmitter<string>();
  @Input()chartHeight = 35;
  isExpanded = false;
  loadingIndicator = false;
  data = data;
    constructor() { }

  ngOnInit() {
  }

  expandSelf() {
    this.expand.emit('alerts-notifications');
    this.isExpanded = true;
  }

  getRowHeight(row) {
    const ruleCount = row.observations.length;
    const height = 15 * ruleCount + 70;
    return height;
  }

  onPage(event) {

  }

  openMessageModal(rowInfo) {
    this.openModal.emit(rowInfo);
  }
}
