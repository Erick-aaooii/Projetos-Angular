import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Menu, Moon, Sun, MessageCircleCode} from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, RouterLink, NgClass ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  readonly Menu = Menu
  readonly Moon = Moon
  readonly Sun = Sun
  readonly MessageCircleCode = MessageCircleCode

  isDarkMode = false
  menuIsOpen = false

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark';
    if (this.isDarkMode) {
      document.body.classList.add('dark');
    }
  }

  Navigation = [
    {name: "Home", link: ""},
    {name: "FrontEnd", link: "front"},
    {name: "BackEnd", link: "back"},
    {name: "Data Analyst", link: "data"}
  ]

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

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen
  }
}
