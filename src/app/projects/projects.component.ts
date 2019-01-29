import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('hideShowFirst', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-70%)' }),
        animate('0.85s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('hideShowSecond', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-70%)' }),
        animate('0.85s 0.75s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('hideShowThird', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-70%)' }),
        animate('0.85s 1.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
