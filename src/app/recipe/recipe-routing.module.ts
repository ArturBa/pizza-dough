import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { defaultFormStateModel } from '../form/redux/form.model';

const defaultRecipeId = defaultFormStateModel.selectedRecipe;

const routes: Routes = [
  {
    path: ':id',
    component: RecipeComponent,
  },
  {
    path: '**',
    redirectTo: `${defaultRecipeId}`,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
