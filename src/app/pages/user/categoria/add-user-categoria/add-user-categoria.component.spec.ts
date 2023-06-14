import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserCategoriaComponent } from './add-user-categoria.component';

describe('AddUserCategoriaComponent', () => {
  let component: AddUserCategoriaComponent;
  let fixture: ComponentFixture<AddUserCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
