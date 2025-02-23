import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, LucideAngularModule, RouterLinkActive ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  readonly Search = Search

  options = [
    {name: "Jogos", link: ""},
    {name: "PS5", link: ""},
    {name: "PS4", link: ""},
    {name: "Serviços", link: ""},
    {name: "Acessórios", link: ""},
    {name: "Nóticias", link: ""},
    {name: "Loja", link: ""},
    {name: "Suporte", link: ""}
  ]

  pags = [
    {name: "Novidades", link: ""},
    {name: "Coleções", link: ""},
    {name: "Ofertas", link: ""},
    {name: "Assinaturas", link: ""},
    {name: "Navegar", link: ""}
  ]
}
