import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { PaginationModule } from 'ng2-bootstrap/pagination';
import { MomentModule } from 'angular2-moment';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ReviewManagerComponent } from './review-manager.component';
import { ReviewManagerHeaderComponent } from './review-manager-header.component';
import { ReviewAddComponent } from './review/review-add.component';
import { ReviewListComponent } from './review/review-list.component';
import {routing} from "./app.routing";
import {ReviewService} from "./review/review.service";

export const firebaseConfig = {
  apiKey: "AIzaSyA7zxRlwKPq6Z0e4nj7R5RuVipUuxOPC1U",
  authDomain: "reviewmanagementdb.firebaseapp.com",
  databaseURL: "https://reviewmanagementdb.firebaseio.com",
  storageBucket: "reviewmanagementdb.appspot.com",
  messagingSenderId: "743739124483"
};

@NgModule({
  declarations: [
    ReviewManagerComponent,
    ReviewManagerHeaderComponent,
    ReviewAddComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    PaginationModule.forRoot(),
    routing
  ],
  providers: [ReviewService],
  bootstrap: [ReviewManagerComponent]
})
export class AppModule { }
