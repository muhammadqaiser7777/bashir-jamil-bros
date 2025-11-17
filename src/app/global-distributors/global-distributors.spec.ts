import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDistributors } from './global-distributors';

describe('GlobalDistributors', () => {
  let component: GlobalDistributors;
  let fixture: ComponentFixture<GlobalDistributors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalDistributors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalDistributors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
