import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SergicalSets } from './sergical-sets';

describe('SergicalSets', () => {
  let component: SergicalSets;
  let fixture: ComponentFixture<SergicalSets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SergicalSets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SergicalSets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
