import { RouterModule, Routes } from '@angular/router';
import {ReviewListComponent} from "./review/review-list.component";
import {ReviewAddComponent} from "./review/review-add.component";


const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: ReviewListComponent},
  {path: 'add-review', component: ReviewAddComponent},

];

export const routing = RouterModule.forRoot(APP_ROUTES);
