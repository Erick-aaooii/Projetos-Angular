import { Component } from '@angular/core';

@Component({
  selector: 'app-smallcard',
  imports: [],
  templateUrl: './smallcard.component.html'
})
export class SmallcardComponent {
  posts = [
    { 
      title: "Novo Lançamento Tech", 
      description: "Descubra as últimas inovações tecnológicas de 2025!", 
      img: "https://placehold.co/600x400?text=Tech" 
    },
    { 
      title: "Viagem dos Sonhos", 
      description: "Conheça os destinos mais incríveis para suas próximas férias.", 
      img: "https://placehold.co/600x400?text=Travel" 
    },
    { 
      title: "Dicas de Programação", 
      description: "Aprenda os segredos para escrever código mais limpo e eficiente.", 
      img: "https://placehold.co/600x400?text=Code" 
    }
  ]
  
}
