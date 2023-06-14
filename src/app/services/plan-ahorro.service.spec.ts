import { TestBed } from '@angular/core/testing';

import { PlanAhorroService } from './plan-ahorro.service';

describe('PlanAhorroService', () => {
  let service: PlanAhorroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanAhorroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
