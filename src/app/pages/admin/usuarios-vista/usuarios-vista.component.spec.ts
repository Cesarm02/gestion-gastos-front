import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosVistaComponent } from './usuarios-vista.component';

describe('UsuariosVistaComponent', () => {
  let component: UsuariosVistaComponent;
  let fixture: ComponentFixture<UsuariosVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
