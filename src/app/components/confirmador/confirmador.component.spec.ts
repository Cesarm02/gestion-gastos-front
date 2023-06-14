import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmadorComponent } from './confirmador.component';

describe('ConfirmadorComponent', () => {
  let component: ConfirmadorComponent;
  let fixture: ComponentFixture<ConfirmadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
