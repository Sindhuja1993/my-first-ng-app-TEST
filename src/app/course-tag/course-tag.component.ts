import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-tag',
  templateUrl: './course-tag.component.html',
  styleUrls: ['./course-tag.component.css']
})
export class CourseTagComponent implements OnInit {
@Input() course:string;
  constructor() { }

  ngOnInit() {
    console.log(this.course);
  }

}
