import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasVistasComponent } from './reservas-vistas.component';

describe('ReservasVistasComponent', () => {
  let component: ReservasVistasComponent;
  let fixture: ComponentFixture<ReservasVistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasVistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasVistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
