import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaLogHabitacionComponent } from './ruta-log-habitacion.component';

describe('RutaLogHabitacionComponent', () => {
  let component: RutaLogHabitacionComponent;
  let fixture: ComponentFixture<RutaLogHabitacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaLogHabitacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaLogHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
