import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ra-review-manager-header',
  templateUrl: './review-manager-header.component.html',
  styles: []
})
export class ReviewManagerHeaderComponent implements OnInit {
  appTitle:string = "Review Management App";
  constructor() { }

  ngOnInit() {
  }

}
