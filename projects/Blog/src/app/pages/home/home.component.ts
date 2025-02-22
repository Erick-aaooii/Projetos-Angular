import { Component } from '@angular/core';
import { BigcardComponent } from "./components/bigcard/bigcard.component";
import { SmallcardComponent } from "./components/smallcard/smallcard.component";

@Component({
  selector: 'app-home',
  imports: [BigcardComponent, SmallcardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
