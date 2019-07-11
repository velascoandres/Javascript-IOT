import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSitiosComponent } from './ruta-sitios.component';

describe('RutaSitiosComponent', () => {
  let component: RutaSitiosComponent;
  let fixture: ComponentFixture<RutaSitiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSitiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
