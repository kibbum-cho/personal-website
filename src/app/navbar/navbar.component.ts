import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = "Ki Bbum Cho";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  toSection(section: string) {
    this.router.navigate(['/home']).then(()=>{
      setTimeout(()=>{
        document.getElementById(section).scrollIntoView({ 
          behavior: 'smooth', block: "start", inline: "nearest"
        });
      });
    });
  }

  toContact() {
    setTimeout(()=>{
      document.getElementById("contact").scrollIntoView({ 
        behavior: 'smooth'
      });
    });
  }

}
