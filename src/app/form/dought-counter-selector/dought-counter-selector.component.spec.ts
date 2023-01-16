import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughtCounterSelectorComponent } from './dought-counter-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '../../components/control/control.module';

describe('DoughtCounterSelectorComponent', () => {
  let component: DoughtCounterSelectorComponent;
  let fixture: ComponentFixture<DoughtCounterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoughtCounterSelectorComponent],
      imports: [ControlModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DoughtCounterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
