import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OvenTypes } from './form.store';
import { Observable, map } from 'rxjs';

interface DictionaryResponse {
  OVEN: OvenTypes[];
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(protected readonly httpClient: HttpClient) {}

  getOvenTypes(): Observable<OvenTypes[]> {
    return this.httpClient
      .get<DictionaryResponse>('./assets/data/dictionaries.json')
      .pipe(map((value: DictionaryResponse) => value.OVEN));
  }
}
