import { RouterModule, Routes } from '@angular/router';
import {ReviewListComponent} from "./review/review-list.component";
import {ReviewAddComponent} from "./review/review-add.component";


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/reviews', pathMatch: 'full'},
  {path: 'reviews', component: ReviewListComponent},
  {path: 'add-review', component: ReviewAddComponent},
  {path: '**', redirectTo: 'reviews', pathMatch:'full'}  //redirect unknown routes to /reviews
];

export const routing = RouterModule.forRoot(APP_ROUTES);
