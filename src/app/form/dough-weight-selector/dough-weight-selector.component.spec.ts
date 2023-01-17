import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughWeightSelectorComponent } from './dough-weight-selector.component';
import { ControlModule } from '../../components/control/control.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { DoughState } from '../../dough/redux';

describe('DoughWeightSelectorComponent', () => {
  let component: DoughWeightSelectorComponent;
  let fixture: ComponentFixture<DoughWeightSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoughWeightSelectorComponent],
      imports: [
        ControlModule,
        ReactiveFormsModule,
        NgxsModule.forRoot([DoughState]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DoughWeightSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
