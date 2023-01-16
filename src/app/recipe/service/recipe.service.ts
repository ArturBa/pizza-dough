import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeItem } from '../redux/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(protected readonly httpClient: HttpClient) {}

  getRecipe(id: number): Observable<RecipeItem> {
    return this.httpClient.get<RecipeItem>(`./assets/data/recipes/${id}.json`);
  }
}
