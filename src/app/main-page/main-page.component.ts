import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadingService} from '../core/loading.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private loadingSubscription: Subscription;
  private isLoading: boolean;

  constructor(private loadingService: LoadingService) {
    this.loadingSubscription = this.loadingService.getLoadingStatus().subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit() {
  }

}
