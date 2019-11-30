import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNewEditPageComponent } from './courses-new-edit-page.component';

describe('CoursesNewEditPageComponent', () => {
  let component: CoursesNewEditPageComponent;
  let fixture: ComponentFixture<CoursesNewEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesNewEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesNewEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
