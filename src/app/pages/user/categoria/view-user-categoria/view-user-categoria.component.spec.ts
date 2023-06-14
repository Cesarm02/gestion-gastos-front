import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserCategoriaComponent } from './view-user-categoria.component';

describe('ViewUserCategoriaComponent', () => {
  let component: ViewUserCategoriaComponent;
  let fixture: ComponentFixture<ViewUserCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
