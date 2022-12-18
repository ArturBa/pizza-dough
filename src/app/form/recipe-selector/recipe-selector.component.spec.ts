import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSelectorComponent } from './recipe-selector.component';
import { ControlModule } from '../../components/control/control.module';

describe('RecipeSelectorComponent', () => {
  let component: RecipeSelectorComponent;
  let fixture: ComponentFixture<RecipeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeSelectorComponent],
      imports: [ControlModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
