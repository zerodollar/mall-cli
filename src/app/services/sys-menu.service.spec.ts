/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SysMenuService } from './sys-menu.service';

describe('SysMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SysMenuService]
    });
  });

  it('should ...', inject([SysMenuService], (service: SysMenuService) => {
    expect(service).toBeTruthy();
  }));
});
