import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssurance } from './quality-assurance';

describe('QualityAssurance', () => {
  let component: QualityAssurance;
  let fixture: ComponentFixture<QualityAssurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityAssurance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityAssurance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
