import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
courseList = ["Science", "Maths", "English", "Histtory", "Civics" ];

 // crs: string = "Science";
  constructor() { }

  ngOnInit() {
  }

}
