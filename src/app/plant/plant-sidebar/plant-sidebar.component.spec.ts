import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSidebarComponent } from './plant-sidebar.component';

describe('PlantSidebarComponent', () => {
  let component: PlantSidebarComponent;
  let fixture: ComponentFixture<PlantSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
