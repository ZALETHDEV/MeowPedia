import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Breed, Image } from '../models/Breed.model';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private base = environment.theCatApiBase;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': environment.theCatApiKey || 'DEMO-API-KEY'
  });

  constructor(private http: HttpClient) { }

  getBreeds(params?: { limit?: number; page?: number; attach_image?: number }): Observable<Breed[]> {
    let httpParams = new HttpParams();
    if (params?.limit != null) httpParams = httpParams.set('limit', String(params.limit));
    if (params?.page != null) httpParams = httpParams.set('page', String(params.page));
    if (params?.attach_image != null) httpParams = httpParams.set('attach_image', String(params.attach_image));

    return this.http.get<Breed[]>(`${this.base}/breeds`, { headers: this.headers, params: httpParams })
      .pipe(
        catchError(this.handleError)
      );
  }

  getBreedById(breedId: string): Observable<Breed> {
    if (!breedId) return throwError(() => new Error('breedId es requerido'));
    return this.http.get<Breed>(`${this.base}/breeds/${encodeURIComponent(breedId)}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getImageById(imageId: string): Observable<Image> {
    if (!imageId) return throwError(() => new Error('imageId es requerido'));
    return this.http.get<Image>(`${this.base}/images/${encodeURIComponent(imageId)}`, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  searchBreeds(query: string, attach_image?: boolean): Observable<Breed[]> {
    if (!query) return throwError(() => new Error('query es requerido'));
    let params = new HttpParams().set('q', query);
    if (attach_image) params = params.set('attach_image', '1');

    return this.http.get<Breed[]>(`${this.base}/breeds/search`, { headers: this.headers, params })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    const message = err?.error?.message || err?.message || 'Error Desconocido';
    return throwError(() => new Error(`Error: ${message}`));
  }

}
