import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StartRatingComponent implements OnChanges {
  public starWidth: number = 0;
  @Input()
  public rating: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = (this.rating * 125) / 5;
  }
}
