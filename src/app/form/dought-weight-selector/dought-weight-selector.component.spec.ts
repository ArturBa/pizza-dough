import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughtWeightSelectorComponent } from './dought-weight-selector.component';

describe('DoughtWeightSelectorComponent', () => {
  let component: DoughtWeightSelectorComponent;
  let fixture: ComponentFixture<DoughtWeightSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoughtWeightSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoughtWeightSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
