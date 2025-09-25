import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breed, Image } from 'src/app/models/Breed.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
  standalone: false,

})
export class CardDetailPage implements OnInit {
  breed!: Breed;
  image?: Image;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dataService.getBreedById(id).subscribe(b => {
        this.breed = b;
        if (b.reference_image_id) {
          this.dataService.getImageById(b.reference_image_id).subscribe(img => {
            this.image = img;
          });
        }
      });
    }
  }
}
