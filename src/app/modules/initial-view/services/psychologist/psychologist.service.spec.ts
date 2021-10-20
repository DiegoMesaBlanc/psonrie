import { TestBed } from '@angular/core/testing';

import { PsychologistService } from './psychologist.service';

describe('PsychologistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PsychologistService = TestBed.get(PsychologistService);
    expect(service).toBeTruthy();
  });
});
