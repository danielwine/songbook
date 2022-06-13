import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simplelist',
  templateUrl: './simplelist.component.html',
  styleUrls: ['./simplelist.component.scss'],
})
export class SimplelistComponent<T> implements OnInit {
  @Input() list: T[] | null = [];
  @Input() entityName = '';
  @Input() example = '';
  @Input() sorterKey = 'name';
  @Output() updateRequest = new EventEmitter();
  phrase = '';
  filterKey = 'name';
  sorterDirection = 1;
  constructor() {}

  public update(event: Event) {
    this.updateRequest.emit((event.target as HTMLInputElement).id);
  }

  ngOnInit(): void {}
}
