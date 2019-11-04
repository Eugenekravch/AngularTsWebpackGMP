import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListItemComponent } from './courses-list-item.component';
import {Component} from '@angular/core';
import {CoursesListItem} from '../courses-list.interface';
import {By} from '@angular/platform-browser';

@Component({
  template: `<app-courses-list-item [courseInfo]="courseItem" (deleteCourseEvent)="deleteCourse($event)"></app-courses-list-item>`
})
class TestComponent {
  public courseItem: CoursesListItem = {
    id: 2,
    description: 'Test',
    creationDate: '10-10-2019',
    duration: 5,
    title: 'Test title'
  };
  public deletedId: number;
  public deleteCourse(id) { this.deletedId =  id; }
}

describe('CoursesListItemComponent', () => {
  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListItemComponent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
  });

  it('should create', () => {
    expect(testComponent).toBeTruthy();
  });

  describe('delete method (Output)', () => {
    it('should pass id of course', () => {
      fixture.detectChanges();

      const expectedId = 2;
      const deleteButton = fixture.debugElement.query(By.css('.delete-button'));
      deleteButton.triggerEventHandler('click', null);

      expect(testComponent.deletedId).toBe(expectedId);
    });
  });

  describe('Input', () => {
    it('should set correct values', () => {
      fixture.detectChanges();
      const expectedTitle = 'Test title';
      const titleElement = fixture.nativeElement.querySelector('.course-list-item-header h3');

      expect(titleElement.textContent).toBe(expectedTitle);
    });
  });

  describe('onInit method', () => {
    it('should set title value', () => {
      testComponent.courseItem.id = 1;
      fixture.detectChanges();

      const expectedTitle = 'OnInit value';
      const titleElement = fixture.nativeElement.querySelector('.course-list-item-header h3');

      expect(titleElement.textContent).toBe(expectedTitle);
    });
  });
});
