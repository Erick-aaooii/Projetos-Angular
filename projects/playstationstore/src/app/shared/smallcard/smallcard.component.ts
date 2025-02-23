import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import Card from './Card';

@Component({
  selector: 'app-smallcard',
  imports: [ RouterLink ],
  templateUrl: './smallcard.component.html'
})
export class SmallcardComponent {
  @Input() cards: Card[] = []
  @Input() title: string = ""
  
}
