import { Injectable, Inject } from '@angular/core';
import {Review} from "./review";
import { AngularFire, FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class ReviewService {

  private reviews:Review[] = [];  //list of all reviews

  constructor(private af: AngularFire,
    @Inject(FirebaseApp) private firebaseApp: any) {}

  addReview(review: Review){
    //maybe return boolean to check if added successfully to db we show some kind of message?
    review.posteddate = firebase.database.ServerValue.TIMESTAMP; //set posted date of the review
    return this.af.database.list('/reviews').push(review);
  }

  getReviews() : Observable<any> {
    return this.af.database.list('/reviews');    
  }

  sortReviews(reviews: Review[], direction: String) {
    return reviews.sort((a, b) => {
      return direction == 'desc'
        ? b.posteddate - a.posteddate
        : a.posteddate - b.posteddate;
    });
  }
}
