import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavfooterComponent } from './shared/navfooter/navfooter.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavfooterComponent, NavbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
