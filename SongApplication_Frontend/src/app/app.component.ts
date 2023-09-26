import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '';

  constructor(private router: Router) { }

  redirectToHome() {
    // Use the router to navigate to the home screen (change 'home' to your actual home route)
    this.router.navigate(['/songs']);
  }
}
