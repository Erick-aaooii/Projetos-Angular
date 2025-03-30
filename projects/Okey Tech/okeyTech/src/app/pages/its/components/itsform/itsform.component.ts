import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-itsform',
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './itsform.component.html'
})
export class ItsformComponent {
  @Output() filterChanged = new EventEmitter<{ search: string, type: string }>();

  searchControl = new FormControl('');
  filterControl = new FormControl('all');

  options = [
    { value: 'all', label: 'Todos' },
    { value: 'type1', label: 'Tipo 1' },
    { value: 'type2', label: 'Tipo 2' },
    { value: 'type3', label: 'Tipo 3' }
  ];

  constructor() {
    this.searchControl.valueChanges.subscribe(search => 
      this.emitFilter(search ?? '', this.filterControl.value ?? 'all')
    );
    this.filterControl.valueChanges.subscribe(type => 
      this.emitFilter(this.searchControl.value ?? '', type ?? 'all')
    );
  }

  private emitFilter(search: string, type: string) {
    this.filterChanged.emit({ search, type });
  }
}
