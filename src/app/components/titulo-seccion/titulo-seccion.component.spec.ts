import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloSeccionComponent } from './titulo-seccion.component';

describe('TituloSeccionComponent', () => {
  let component: TituloSeccionComponent;
  let fixture: ComponentFixture<TituloSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloSeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
