import { TestBed } from '@angular/core/testing';

import { ModalPortalService } from './modal-portal.service';

describe('ModalPortalService', () => {
  let service: ModalPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
