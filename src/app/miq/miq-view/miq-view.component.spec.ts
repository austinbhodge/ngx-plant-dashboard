import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqViewComponent } from './miq-view.component';

describe('MiqViewComponent', () => {
  let component: MiqViewComponent;
  let fixture: ComponentFixture<MiqViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiqViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiqViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
