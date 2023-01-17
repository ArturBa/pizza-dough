import { ComponentFixture, TestBed } from '@angular/core/testing';

import { doughCounterSelectorComponent } from './dough-counter-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '../../components/control/control.module';

describe('doughCounterSelectorComponent', () => {
  let component: doughCounterSelectorComponent;
  let fixture: ComponentFixture<doughCounterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [doughCounterSelectorComponent],
      imports: [ControlModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(doughCounterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
