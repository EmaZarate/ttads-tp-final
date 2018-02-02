import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeñasComponent } from './señas.component';

describe('SeñasComponent', () => {
  let component: SeñasComponent;
  let fixture: ComponentFixture<SeñasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeñasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeñasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
