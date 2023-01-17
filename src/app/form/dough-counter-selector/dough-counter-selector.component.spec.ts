import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughCounterSelectorComponent } from './dough-counter-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '../../components/control/control.module';
import { NgxsModule } from '@ngxs/store';
import { DoughState } from '../../dough/redux';

describe('DoughCounterSelectorComponent', () => {
  let component: DoughCounterSelectorComponent;
  let fixture: ComponentFixture<DoughCounterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoughCounterSelectorComponent],
      imports: [
        ControlModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([DoughState]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DoughCounterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
