import { Component } from '@angular/core';

@Component({
  selector: 'app-bigcard',
  imports: [],
  templateUrl: './bigcard.component.html'
})
export class BigcardComponent {
  cards = [
    {
      title: "Inteligência Artificial no Dia a Dia", 
      description: "Como a IA está transformando nossas rotinas e o mercado de trabalho.",
      img: "https://placehold.co/600x400?text=AI"
    },
    {
      title: "Fotografia Profissional com Celular", 
      description: "Dicas para capturar imagens incríveis usando apenas seu smartphone.",
      img: "https://placehold.co/600x400?text=Photography"
    }
  ]
}
