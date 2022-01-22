import { TestBed } from '@angular/core/testing';

import { TipoclienteService } from './tipocliente.service';

describe('TipoclienteService', () => {
  let service: TipoclienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoclienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
