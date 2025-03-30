import { Component } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { ItsformComponent } from "./components/itsform/itsform.component";

@Component({
  selector: 'app-its',
  imports: [CardComponent, ItsformComponent],
  templateUrl: './its.component.html'
})
export class ItsComponent {
  options = [
    { name: "Item 1", link: "https://example.com/1", description: "Descrição do item 1", type:"type1" },
    { name: "Item 2", link: "https://example.com/2", description: "Descrição do item 2", type:"type2" },
    { name: "Item 3", link: "https://example.com/3", description: "Descrição do item 3", type:"type3" },
    { name: "Item 4", link: "https://example.com/4", description: "Descrição do item 4", type:"type1" },
    { name: "Item 5", link: "https://example.com/5", description: "Descrição do item 5", type:"type2" },
    { name: "Item 6", link: "https://example.com/6", description: "Descrição do item 6", type:"type3" },
  ];

  filteredOptions = [...this.options];

  onFilterChanged(filter: { search: string, type: string }) {
    this.filteredOptions = this.options.filter(item => {
      const matchesText = item.name.toLowerCase().includes(filter.search.toLowerCase());
      const matchesType = filter.type === 'all' || item.type === filter.type;
      return matchesText && matchesType;
    });
  }
}