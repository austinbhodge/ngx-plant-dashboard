import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqComponent } from './miq.component';

describe('MiqComponent', () => {
  let component: MiqComponent;
  let fixture: ComponentFixture<MiqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
