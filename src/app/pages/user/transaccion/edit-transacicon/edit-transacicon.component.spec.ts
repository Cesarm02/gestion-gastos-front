import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransaciconComponent } from './edit-transacicon.component';

describe('EditTransaciconComponent', () => {
  let component: EditTransaciconComponent;
  let fixture: ComponentFixture<EditTransaciconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransaciconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTransaciconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
