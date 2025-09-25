import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breed, Image } from 'src/app/models/Breed.model';

@Component({
  selector: 'app-card-action',
  templateUrl: './card-action.page.html',
  styleUrls: ['./card-action.page.scss'],
  standalone: false,

})
export class CardActionPage implements OnInit {
  @Input() breed?: Breed;
  @Input() image?: Image;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToBreedDetail(id: string) {
    this.router.navigate(['/card-detail', id]);
  }
}
