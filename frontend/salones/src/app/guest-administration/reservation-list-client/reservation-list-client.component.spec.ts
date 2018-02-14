import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListClientComponent } from './reservation-list-client.component';

describe('ReservationListClientComponent', () => {
  let component: ReservationListClientComponent;
  let fixture: ComponentFixture<ReservationListClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationListClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
