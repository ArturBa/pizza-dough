import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OvenSelectorComponent } from './oven-selector.component';
import { ControlModule } from '../../components/control/control.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxsModule } from '@ngxs/store';
import { FormState } from '../redux/form.store';
import { ReactiveFormsModule } from '@angular/forms';

describe('OvenSelectorComponent', () => {
  let component: OvenSelectorComponent;
  let fixture: ComponentFixture<OvenSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OvenSelectorComponent],
      imports: [
        ControlModule,
        NgxsModule.forRoot([FormState]),
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(OvenSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
