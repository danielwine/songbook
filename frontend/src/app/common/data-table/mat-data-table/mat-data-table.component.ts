import { Component, Input, OnInit } from '@angular/core';

export interface IMatTableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'app-mat-data-table',
  templateUrl: './mat-data-table.component.html',
  styleUrls: ['./mat-data-table.component.scss'],
})
export class MatDataTableComponent<T extends { [x: string]: any }>
  implements OnInit
{
  @Input() list: T[] = [];
  @Input() columns: IMatTableColumn[] = [];

  getColumnKeys = (columns: IMatTableColumn[]) =>
    columns.map((item) => item.key);

  constructor() {}

  ngOnInit(): void {}
}
