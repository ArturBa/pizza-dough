import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';

import { RecipeComponent } from './recipe.component';
import { RecipeModule } from '../recipe.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

const activatedRouteStub = {
  params: of(null),
};

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
      imports: [RecipeModule, NgxsModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
