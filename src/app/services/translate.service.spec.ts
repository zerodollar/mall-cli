/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminLTETranslateService } from './translate.service';

describe('AdminLTETranslateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminLTETranslateService]
    });
  });

  it('should ...', inject([AdminLTETranslateService], (service: AdminLTETranslateService) => {
    expect(service).toBeTruthy();
  }));
});
