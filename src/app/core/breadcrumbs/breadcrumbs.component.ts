import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbsInitValue = 'course-list';
  breadcrumbsValue: string[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((value => {
      if (value instanceof NavigationEnd) {
        this.createBreadCrumbs(value.url);
      }
    }));
  }

  createBreadCrumbs(url) {
    this.breadcrumbsValue = url.split('/').splice(1, url.length);
  }
}
