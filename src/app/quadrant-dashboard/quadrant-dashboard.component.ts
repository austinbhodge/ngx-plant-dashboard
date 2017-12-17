import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { MessageModalComponent } from './message-modal/message-modal.component';
import { ChartModalComponent } from './chart-modal/chart-modal.component';

@Component({
  selector: 'app-quadrant-dashboard',
  templateUrl: './quadrant-dashboard.component.html',
  styleUrls: ['./quadrant-dashboard.component.scss']
})
export class QuadrantDashboardComponent implements OnInit {
  isExpanded = false;
  expandedComponent = '';
  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }

  expandWidget(event) {
    console.log(event);
    this.expandedComponent = event;
    this.isExpanded = true;
  }

  showQuadView() {
    this.isExpanded = false;
    this.expandedComponent = '';
  }

  openChartModal(chartRef) {
    const chartModalRef = this.dialog.open(ChartModalComponent, {
      width: '60vw',
      data: { chartRef: chartRef }
    });

    chartModalRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openMessageModal(rowRef) {
    console.log(rowRef);
    const chartModalRef = this.dialog.open(MessageModalComponent, {
      width: '30vw',
      data: { row: rowRef }
    });

    chartModalRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
