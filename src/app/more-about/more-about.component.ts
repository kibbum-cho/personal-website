import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-more-about',
  templateUrl: './more-about.component.html',
  styleUrls: ['./more-about.component.css'],
  animations: [
    trigger('fadeIn', [
      state('*', style({
        opacity: 0
      })),
      state('in', style({
        opacity: 1
      })),
      transition('out1 => in', [
        animate('1.2s ease-out')
      ]),
      transition('out2 => in', [
        animate('1.2s 0.6s ease-out')
      ]),
      transition('out3 => in', [
        animate('1.2s 1.2s ease-out')
      ])
    ])
  ]
})

export class MoreAboutComponent implements OnInit {
  states = ['out1', 'out2', 'out3' ];

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.states[this.states.length-1] != 'in'){
      if (document.getElementById('more-about-content').getBoundingClientRect().bottom <= window.innerHeight) {
        this.states.forEach(function(value, index) {
          this[index] = "in";
        }, this.states);
      }
    }
  }

}
