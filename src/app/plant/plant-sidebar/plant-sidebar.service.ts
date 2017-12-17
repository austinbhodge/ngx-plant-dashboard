import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PlantSidebarService {
    sidebarActiveSubject = new Subject<any>();
    sidebarOpen;
    constructor() { }

    openPlantSidebar(productId: number) {
      this.sidebarOpen = true;
      this.sidebarActiveSubject.next(productId);
    }

    closePlantSidebar() {
      this.sidebarOpen = false;
      this.sidebarActiveSubject.next(false);
    }

    getPlantSidbarState(): Observable<any> {
      return this.sidebarActiveSubject.asObservable();
    }
}
