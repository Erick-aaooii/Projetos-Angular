import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() link: String = "";
  @Input() name: String = "";
  @Input() description: String = "";
}
