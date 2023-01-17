import { ComponentFixture, TestBed } from '@angular/core/testing';

import { doughWeightSelectorComponent } from './dough-weight-selector.component';
import { ControlModule } from '../../components/control/control.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('doughWeightSelectorComponent', () => {
  let component: doughWeightSelectorComponent;
  let fixture: ComponentFixture<doughWeightSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [doughWeightSelectorComponent],
      imports: [ControlModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(doughWeightSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
