import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';

const defaultRecipeId = 18;

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
