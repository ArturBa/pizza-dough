import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { InstructionsModule } from './instructions/instructions.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@NgModule({
  declarations: [RecipeComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    InstructionsModule,
    IngredientsModule,
  ],
})
export class RecipeModule {}
