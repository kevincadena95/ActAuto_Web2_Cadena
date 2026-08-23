import { TestBed } from '@angular/core/testing';
import { GarleriaService } from './garleria-service';

describe('GarleriaService', () => {
  let service: GarleriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarleriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
