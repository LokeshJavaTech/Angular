import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  searchText: string = "";

  @Output()
  searchTextInputEvent: EventEmitter<string> = new EventEmitter<string>();

  searchTextClickEventMethod(inputElement: HTMLInputElement) {
    this.searchText = inputElement.value;
    console.log("Search component: On Input event, search text is emitted. Will catch in parent app-container component = " + this.searchText);
    this.searchTextInputEvent.emit(this.searchText);
  }
}
