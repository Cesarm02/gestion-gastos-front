import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloAgregarComponent } from './titulo-agregar.component';

describe('TituloAgregarComponent', () => {
  let component: TituloAgregarComponent;
  let fixture: ComponentFixture<TituloAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
