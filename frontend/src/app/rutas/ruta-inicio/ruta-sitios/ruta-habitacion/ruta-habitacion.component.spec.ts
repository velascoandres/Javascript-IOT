import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHabitacionComponent } from './ruta-habitacion.component';

describe('RutaHabitacionComponent', () => {
  let component: RutaHabitacionComponent;
  let fixture: ComponentFixture<RutaHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
