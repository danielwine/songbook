import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplelist',
  templateUrl: './simplelist.component.html',
  styleUrls: ['./simplelist.component.scss'],
})
export class SimplelistComponent<T> implements OnInit {
  phrase = '';
  filterKey = 'name';
  sorterKey = 'name';
  sorterDirection = 1;
  @Input() list: T[] = [];
  @Input() entityName = '';
  constructor() {}

  ngOnInit(): void {}
}
