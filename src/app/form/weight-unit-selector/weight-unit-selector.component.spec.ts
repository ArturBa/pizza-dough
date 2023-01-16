import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightUnitSelectorComponent } from './weight-unit-selector.component';

describe('WeightUnitSelectorComponent', () => {
  let component: WeightUnitSelectorComponent;
  let fixture: ComponentFixture<WeightUnitSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeightUnitSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeightUnitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
