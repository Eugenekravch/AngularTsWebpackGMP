import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoading = new Subject<boolean>();

  constructor() { }

  loadingStart(): void {
    this.isLoading.next(true);
  }

  loadingStop(): void {
    this.isLoading.next(false);
  }

  getLoadingStatus(): Observable<any> {
    return this.isLoading.asObservable();
  }
}
