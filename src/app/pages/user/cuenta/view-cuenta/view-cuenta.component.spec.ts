import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCuentaComponent } from './view-cuenta.component';

describe('ViewCuentaComponent', () => {
  let component: ViewCuentaComponent;
  let fixture: ComponentFixture<ViewCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
