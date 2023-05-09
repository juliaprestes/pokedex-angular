import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public procurar(value: string) {
    this.emmitSearch.emit(value);
  }
}
