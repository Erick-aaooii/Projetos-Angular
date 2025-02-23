import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-bigcard',
  imports: [],
  templateUrl: './bigcard.component.html'
})
export class BigcardComponent {
  @Input() img: String = ""
  @Input() title: String = ""
  @Input() description: String = ""
  @Input() button: String = ""
}
