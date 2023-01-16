import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { InstructionsModule } from './instructions/instructions.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipeState } from './redux/recipe.store';

@NgModule({
  declarations: [RecipeComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    InstructionsModule,
    IngredientsModule,
    NgxsModule.forFeature([RecipeState]),
  ],
})
export class RecipeModule {}
