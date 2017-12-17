import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessMiningComponent } from './process-mining.component';

describe('ProcessMiningComponent', () => {
  let component: ProcessMiningComponent;
  let fixture: ComponentFixture<ProcessMiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessMiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
