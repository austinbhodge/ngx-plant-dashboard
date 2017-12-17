import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropHistoryComponent } from './drop-history.component';

describe('DropHistoryComponent', () => {
  let component: DropHistoryComponent;
  let fixture: ComponentFixture<DropHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
