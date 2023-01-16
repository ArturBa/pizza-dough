import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughtCounterSelectorComponent } from './dought-counter-selector.component';

describe('DoughtCounterSelectorComponent', () => {
  let component: DoughtCounterSelectorComponent;
  let fixture: ComponentFixture<DoughtCounterSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoughtCounterSelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoughtCounterSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
