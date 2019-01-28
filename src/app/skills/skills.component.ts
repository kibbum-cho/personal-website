import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('slideOpen', [
      state('closed', style({
        opacity: 0,
        width: '0px'
      })),
      state('open', style({
        opacity: 1,
        width: '150px'
      })),
      transition('closed => open', [
        animate('1.5s ease-out')
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit, AfterViewInit {
  programmingSkills: string[];
  otherSkills: string[];
  states: string[];
  skillBoxes: HTMLCollectionOf<Element>;
  startIndex = 0;

  constructor() { }

  ngOnInit() {
    this.programmingSkills = [ 'Java', 'Python', 'C', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'Thymeleaf', 'Angular', 'C#' ];
    this.otherSkills = [ 'Photoshop', 'Illustrator', 'Korean' ];
    this.states  = new Array(this.programmingSkills.length+this.otherSkills.length).fill('closed');
  }

  ngAfterViewInit() {
    this.skillBoxes = document.getElementsByClassName('skill-box');
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let states = this.states;
    if (states[states.length-1] != 'open'){
      for (let i = this.startIndex; i < this.skillBoxes.length; i++){
        if (this.skillBoxes[i].getBoundingClientRect().bottom <= window.innerHeight*0.9) {
          states[i] = 'open';
          this.startIndex = i;
        }
      }
    }
  }

}
