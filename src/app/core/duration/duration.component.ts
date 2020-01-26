import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {
  @Input() formGroupChild: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroupChild.addControl('courseDuration', new FormControl('', Validators.required));
  }

}
