import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('leftFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-70%)' }),
        animate('1.2s 0.2s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ]),
    trigger('rightFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(70%)' }),
        animate('1.2s 0.2s ease-in-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  name = "Ki Bbum Cho";
  description = "Graduated from Stony Brook University with a Bachelor of Science degree in Computer Science. Currently seeking for a full-time position in the field of software development to apply and develop technical knowledge and skills in collaboration with the expert computer scientists.";

  constructor() { }

  ngOnInit() {

  }

}
