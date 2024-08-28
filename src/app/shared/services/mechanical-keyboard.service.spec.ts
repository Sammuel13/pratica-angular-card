import { TestBed } from '@angular/core/testing';

import { MechanicalKeyboardService } from './mechanical-keyboard.service';

describe('MechanicalKeyboardService', () => {
  let service: MechanicalKeyboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MechanicalKeyboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
