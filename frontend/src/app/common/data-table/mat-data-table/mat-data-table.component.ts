import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  implements OnInit, OnChanges
{
  dataSource = new MatTableDataSource<T>();
  pageSizes: number[] = [20, 40, 60];
  @ViewChild(MatPaginator, { static: true }) paginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );

  @Input() list: T[] = [];
  @Input() columns: IMatTableColumn[] = [];

  getColumnKeys = (columns: IMatTableColumn[]) =>
    columns.map((item) => item.key);

  renderItem = (item: T, column: IMatTableColumn) => {
    let cumulated = 0;
    let columnItem = item[column.key];
    if (!columnItem) return '';
    if (typeof columnItem == 'string') return columnItem;
    if (typeof columnItem == 'number') return columnItem.toString();
    if (!Array.isArray(columnItem)) {
      columnItem = [columnItem];
    }
    if (Array.isArray(columnItem)) {
      let result = columnItem
        .map((entity: T) => {
          if ('title' in entity) cumulated += 1;
          return 'name' in entity ? entity['name'] : '';
        })
        .join(', ');
      if (cumulated != 0) result = cumulated.toString();
      return result;
    } else return '';
  };

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = changes['list'].currentValue;
  }
}
