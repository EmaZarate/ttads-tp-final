import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasCalendarioComponent } from './reservas-calendario.component';

describe('ReservasCalendarioComponent', () => {
  let component: ReservasCalendarioComponent;
  let fixture: ComponentFixture<ReservasCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
