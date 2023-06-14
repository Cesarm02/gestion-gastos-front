import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCuentaTransaccionComponent } from './view-cuenta-transaccion.component';

describe('ViewCuentaTransaccionComponent', () => {
  let component: ViewCuentaTransaccionComponent;
  let fixture: ComponentFixture<ViewCuentaTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCuentaTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCuentaTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
