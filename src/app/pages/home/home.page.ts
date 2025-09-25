import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';

import { DataService } from '../../services/data.service';
import { Breed, Image } from 'src/app/models/Breed.model';
import { catchError, debounceTime, distinctUntilChanged, of, Subject, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  public breeds: Breed[] = [];
  public images: { [key: string]: Image } = {};
  public query: string = '';

  private searchSubject = new Subject<string>();
  private searchSub?: Subscription;

  constructor(
    private dataService: DataService = inject(DataService)
  ) { }

  ngOnInit(): void {
    this.getBreeds();
    this.searchSub = this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((q) => {
        if (!q.trim()) {
          return this.dataService.getBreeds({ limit: 20 });
        }
        return this.dataService.searchBreeds(q);
      }),
      catchError((err) => {
        console.error(err);
        return of([] as Breed[]);
      })
    ).subscribe((data) => {
      this.breeds = data;
      this.breeds.forEach((breed) => {
        if (breed.reference_image_id) {
          this.dataService.getImageById(breed.reference_image_id).subscribe({
            next: (img) => (this.images[breed.id] = img),
            error: (e) => console.error(e),
          });
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
  }

  getBreeds() {
    this.dataService.getBreeds({ limit: 20 }).subscribe({
      next: (data) => {
        this.breeds = data;

        this.breeds.forEach((breed) => {
          if (breed.reference_image_id) {
            this.dataService.getImageById(breed.reference_image_id).subscribe({
              next: (img) => (this.images[breed.id] = img),
              error: (e) => console.error(e),
            });
          }
        });
      },
      error: (e) => console.error(e),
    });
  }

  onSearchChange(event: any) {
    this.searchSubject.next(event.detail.value);
  }

  refresh(ev: any) {
    setTimeout(() => {
      this.query = '';
      this.getBreeds();
      (ev as RefresherCustomEvent).detail.complete();
    }, 2000);
  }


}
