import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue = '';
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // const searchInput = this.element.nativeElement;
    const searchInput = document.getElementById('searchInput');

    fromEvent(searchInput, 'keyup')
      .pipe(
        map(() => searchInput['value']),
        filter(searchText => !searchText || searchText.length > 2),
        distinctUntilChanged(),
        debounceTime(250)
      )
      .subscribe(searchText => {
        this.searchEvent.emit(searchText);
      });
  }

}
