import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RecipeSelectorComponent } from './recipe-selector.component';
import { ControlModule } from '../../components/control/control.module';
import { NgxsModule } from '@ngxs/store';
import { FormState } from '../redux/form.state';
import { ReactiveFormsModule } from '@angular/forms';

describe('RecipeSelectorComponent', () => {
  let component: RecipeSelectorComponent;
  let fixture: ComponentFixture<RecipeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeSelectorComponent],
      imports: [
        ControlModule,
        NgxsModule.forRoot([FormState]),
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
