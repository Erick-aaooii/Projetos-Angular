import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  options = [
    {name:"Home", link:""},
    {name:"Ponto", link:"login"},
    {name:"Its", link:"its"},
    {name:"Contatos", link:"contatos"}
  ]

  isDarkMode = false

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark';
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
