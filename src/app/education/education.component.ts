import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger('leftFlyIn', [
      state('out', style({
        transform: 'translateX(-50%)',
        opacity: 0
      })),
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('out => in', [
        animate('1s ease-out')
      ])
    ]),
    trigger('rightFlyIn', [
      state('out', style({
        transform: 'translateX(70%)',
        opacity: 0
      })),
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('out => in', [
        animate('1s ease-out')
      ])
    ])
  ]
})
export class EducationComponent implements OnInit, AfterViewInit {
  educations: Education[];
  states: string[];
  maxPosition: number;
  educationRows: HTMLCollectionOf<Element>;
  startIndex = 0;

  constructor() { }

  ngOnInit() {
    this.educations = [
      { term: '2016 - 2018',
        logo: 'sbu_logo.png',
        description: 'Transferred to Stony Brook after finishing my military duty and changed my major to Computer Science. Graduated in August 2018.'
      },
      { term: '2013 - 2015',
        logo: 'korea_army_logo.png',
        description: 'Served in the military service in South Korea for 2 years in a social welfare department of the Public Office of Gapyeong County to assist public workers with administrative tasks and support the social welfare facilities for elderly, disabled and other socially disadvantaged people.'
      },
      { term: '2012',
        logo: 'qc_logo.png',
        description: 'Transferred to Queens College and continued my study.'
      },
      { term: '2010 - 2012',
        logo: 'qcc_logo.png',
        description: 'Entered Queensborough Community College in August 2010 and started my study in accounting major.'
      }
    ]
    this.states  = new Array(this.educations.length).fill('out');
  }

  ngAfterViewInit() {
    this.educationRows = document.getElementsByClassName('education-row');
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let states = this.states;
    if (states[states.length-1] != 'in'){
      for (let i = this.startIndex; i < this.educationRows.length; i++){
        if (this.educationRows[i].getBoundingClientRect().bottom <= window.innerHeight*0.99) {
          states[i] = 'in';
          this.startIndex = i;
        }
      }
    }
  }

}

interface Education {
  term: string;
  logo: string;
  description: string;
}