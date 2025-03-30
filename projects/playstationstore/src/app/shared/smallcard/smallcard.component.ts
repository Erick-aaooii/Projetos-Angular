import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import Card from './Card';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-smallcard',
  imports: [ RouterLink, NgClass ],
  templateUrl: './smallcard.component.html'
})
export class SmallcardComponent {
  @Input() cards: Card[] = []
  @Input() title: string = ""
  @ViewChild('cardContainer', { static: true }) cardContainer!: ElementRef;
  animation = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const options = {
      root: null, // Usando o viewport
      rootMargin: '0px',
      threshold: 0.01 // O elemento será visível quando 50% da área estiver no viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animation = true;  // Ativa a animação quando o card é visível
        }
      });
    }, options);

    // Observa o container do card
    if (this.cardContainer) {
      observer.observe(this.cardContainer.nativeElement);
    }
  }

}
