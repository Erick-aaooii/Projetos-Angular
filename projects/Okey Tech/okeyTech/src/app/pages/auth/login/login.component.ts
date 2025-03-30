import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user = ""
  password = ""
  EnviarFormulario() {
    console.log(this.user)
    console.log(this.password)
  }

}
