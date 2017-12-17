import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrantDashboardComponent } from './quadrant-dashboard.component';

describe('QuadrantDashboardComponent', () => {
  let component: QuadrantDashboardComponent;
  let fixture: ComponentFixture<QuadrantDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadrantDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
