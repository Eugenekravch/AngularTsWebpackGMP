import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('showInputValue method', () => {
  //   it('should show input value', () => {
  //     const expectedText = 'search test';
  //     const searchInput = fixture.nativeElement.querySelector('.search-inputs input');
  //     const searchButton = fixture.debugElement.query(By.css('.search-inputs button'));
  //     searchInput.value = expectedText;
  //     searchButton.triggerEventHandler('click', null);
  //
  //     spyOn(console, 'log');
  //
  //     expect(console.log).toHaveBeenCalledWith(expectedText);
  //   });
  // });
});
