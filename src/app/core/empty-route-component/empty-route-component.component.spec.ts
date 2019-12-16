import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyRouteComponentComponent } from './empty-route-component.component';

describe('EmptyRouteComponentComponent', () => {
  let component: EmptyRouteComponentComponent;
  let fixture: ComponentFixture<EmptyRouteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyRouteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyRouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
