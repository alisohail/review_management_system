import { Component, OnInit, Input, Inject } from '@angular/core';
import { Review } from "./review";
import { NgForm } from "@angular/forms";
import { ReviewService } from "./review.service";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'ra-review-add',
  templateUrl: './review-add.component.html',
  styles: []
})
export class ReviewAddComponent implements OnInit {
  newReview: Review = new Review();
  reviews:Review[] = [];  //list of all reviews
  constructor(
    private reviewService: ReviewService,
    private flashMessagesService: FlashMessagesService) {}

  ngOnInit() {

  }

  addReview(review: Review){
    //maybe return boolean to check if added successfully to db we show some kind of message?
    this.reviewService.addReview(review)
    .then(() => {
      this.flashMessagesService.show('Your review has been send.', { cssClass: 'alert-success', timeout: 5000 });
    })
    .catch(error => {
      this.flashMessagesService.show('Unable to submit review. Unknown error occured.', { cssClass: 'alert-danger', timeout: 5000 });
    });
  }

  onSubmit(form: NgForm){
    //not using form parameter for time being.
    //any form validation? custom messages for validaton etc... could directly call service but created different method for maintainance purpose.
    this.addReview(this.newReview);
    form.reset();
  }
}
