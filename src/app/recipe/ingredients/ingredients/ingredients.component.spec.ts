import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsComponent } from './ingredients.component';
import { TableModule } from '../../../components/table/table.module';
import { NgxsModule } from '@ngxs/store';
import { DoughState } from '../../../dough/redux';
import { RecipeState } from '../../redux/recipe.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IngredientsComponent', () => {
  let component: IngredientsComponent;
  let fixture: ComponentFixture<IngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientsComponent],
      imports: [
        TableModule,
        NgxsModule.forRoot([DoughState, RecipeState]),
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
