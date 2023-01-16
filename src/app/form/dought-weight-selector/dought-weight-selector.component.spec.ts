import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughtWeightSelectorComponent } from './dought-weight-selector.component';
import { ControlModule } from '../../components/control/control.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('DoughtWeightSelectorComponent', () => {
  let component: DoughtWeightSelectorComponent;
  let fixture: ComponentFixture<DoughtWeightSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoughtWeightSelectorComponent],
      imports: [ControlModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DoughtWeightSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
