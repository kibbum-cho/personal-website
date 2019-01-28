import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('leftFlyIn', [
      state('out', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('out => in', [
        animate('0.5s ease-in')
      ])
    ]),
    trigger('rightFlyIn', [
      state('out', style({
        transform: 'translateX(200%)',
        opacity: 0
      })),
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('out => in', [
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  state = 'out';

  constructor(public element: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.element.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if (scrollPosition <= componentPosition) {
      this.state = 'in';
    }

  }

}
