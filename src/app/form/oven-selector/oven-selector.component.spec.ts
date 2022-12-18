import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvenSelectorComponent } from './oven-selector.component';
import { ControlModule } from '../../components/control/control.module';

describe('OvenSelectorComponent', () => {
  let component: OvenSelectorComponent;
  let fixture: ComponentFixture<OvenSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OvenSelectorComponent],
      imports: [ControlModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OvenSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
