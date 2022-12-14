import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, HeaderLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains a logo image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header-logo')).toBeTruthy();
  });

  it('should contains a h1 title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')).toBeTruthy();
  });

  it('should contains a h1 title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('h1');
    expect(header?.textContent).toContain('Pizza Dough Generator');
  });
});
