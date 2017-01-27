import { Component, OnInit } from '@angular/core';
import {Review} from "./review";
import { ReviewService } from "./review.service";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'ra-review-list',
  templateUrl: './review-list.component.html',
  styles: []
})
export class ReviewListComponent implements OnInit {
  public allReviews: any[]; // Holds all reviews
  public reviews: any[]; // Current page
  public currentPage: number = 1;
  public totalReviews: number = 0;
  public itemsPerPage: number = 5;  //total number to reviews you want to see on page.

  constructor(
    private reviewService: ReviewService,
    private flashMessagesService: FlashMessagesService) {}

  ngOnInit() {
    this.reviewService.getReviews().subscribe((reviews: Review[]) => {
      this.allReviews = reviews;
      this.totalReviews = this.allReviews.length;

      // We need to display latest reviews first
      this.sort('desc');
    }, (error) => {
       this.flashMessagesService.show('An error occured while fetching the list.', { cssClass: 'alert-danger', timeout: 5000 });
    });
  }

  changePage(page: number) {
    let startIndex = (page - 1) * this.itemsPerPage;
    let endIndex = startIndex + this.itemsPerPage;
    this.reviews = this.allReviews.slice(startIndex, endIndex);
  }

  sort(order: string) {
    this.allReviews = this.reviewService.sortReviews(this.allReviews, order)
    this.changePage(1);
    this.currentPage = 1;
  }

  pageChanged(event:any):void {
    this.changePage(event.page);
  }
}
