import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesListComponent } from './courses-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngFor', () => {
    it('should create courses.length child courses-items', () => {
      const courseListItems: HTMLElement[] = nativeElement.querySelectorAll('app-courses-list-item');

      expect(courseListItems.length).toBe(component.courses.length);
    });
  });

  describe('loadMore method', () => {
    it('should trigger loadMore method', () => {
      spyOn(console, 'log');
      component.loadMore();

      expect(console.log).toHaveBeenCalled();
    });
  });
});
