import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('leftFlyIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-70%)' }),
        animate('1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ]),
    trigger('rightFlyIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(70%)' }),
        animate('1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ])
  ]
})
export class AboutComponent implements OnInit, AfterViewInit {
  name = "Ki Bbum Cho";
  description = "Ki is a graduate from Stony Brook University with a Bachelor of Science degree in Computer Science. He is seeking for a full-time job in the field of software development which he can apply his knowledge and skills in communications with expert computer scientists.";
  state = 'out';

  constructor(public element: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
