import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightUnitSelectorComponent } from './weight-unit-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '../../components/control/control.module';

describe('WeightUnitSelectorComponent', () => {
  let component: WeightUnitSelectorComponent;
  let fixture: ComponentFixture<WeightUnitSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeightUnitSelectorComponent],
      imports: [ControlModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(WeightUnitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
