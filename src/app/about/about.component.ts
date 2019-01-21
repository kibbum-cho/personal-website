import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name = "Ki Bbum Cho";
  description = "Ki is a graduate from Stony Brook University with a Bachelor of Science degree in Computer Science. He is seeking for a full-time job in the field of software development which he can apply his knowledge and skills in communications with expert computer scientists and clients.";

  constructor() { }

  ngOnInit() {
  }

}
