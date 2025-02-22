import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navfooter',
  imports: [ RouterLink ],
  templateUrl: './navfooter.component.html'
})
export class NavfooterComponent {
  Navigation = [
    {name: "Home", link: ""},
    {name: "FrontEnd", link: "front"},
    {name: "BackEnd", link: "back"},
    {name: "Data Analyst", link: "data"}
  ]
}
