import {Directive, Renderer2, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appCourseStatus]'
})
export class CourseStatusDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appCourseStatus') creationDate: string;

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'border-color', this.setBorderColorByDate());
  }

  private setBorderColorByDate(): string {
    const currentDate = new Date();
    const creationDate = new Date(this.creationDate);
    const diffDays = Math.ceil(Math.abs(currentDate.getDate() - creationDate.getDate()) / (1000 * 60 * 60 * 24));
    let color = 'transparent';

    if (creationDate < currentDate && diffDays <= 14) {
      color = 'lightgreen';
    }

    if (creationDate > currentDate) {
      color = 'lightblue';
    }

    return color;
  }
}
