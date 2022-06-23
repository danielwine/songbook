import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { MessageService } from 'src/app/dialog/service/message.service';
import { SorterPipe } from 'src/app/pipe/sorter.pipe';

export interface IMatTableColumn {
  title: string;
  key: string;
}

@Component({
  selector: 'app-mat-data-table',
  templateUrl: './mat-data-table.component.html',
  styleUrls: ['./mat-data-table.component.scss'],
  providers: [SorterPipe],
})
export class MatDataTableComponent<T extends { [x: string]: any }>
  implements OnInit, OnChanges
{
  dataSource = new MatTableDataSource<T>();
  pageSizes: number[] = [20, 40, 60];
  currentFilterKey: string = '';
  @ViewChild(MatPaginator, { static: true }) paginator = new MatPaginator(
    new MatPaginatorIntl(),
    ChangeDetectorRef.prototype
  );

  @Input() list: T[] = [];
  @Input() columns: IMatTableColumn[] = [];
  @Output() requestDelete = new EventEmitter();
  @Output() requestEdit = new EventEmitter();

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

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(item: T): void {
    this.requestEdit.emit(item['_id']);
  }

  onDelete(item: T): void {
    console.log('onDelete');

    const dialogData = {
      title: 'Megerősítés',
      content: 'Biztosan törli az elemet?',
    };
    this.messageService
      .openDialog(dialogData)
      .pipe(take(1))
      .subscribe((result) => {
        if (!result) return;
        else this.requestDelete.emit(item['_id']);
      });
  }

  constructor(
    private sorterPipe: SorterPipe<T>,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = (data: T, filter: string) => {
      console.log('filterKey: ', this.currentFilterKey);
      const key = this.currentFilterKey || '';
      let source = '';
      if (key) {
        if (typeof data[key] == 'string') source = data[key];
        else if (typeof data[key] == 'number') source = data[key].toString();
        else if (data[key] && data[key] != '' && 'name' in data[key])
          source = data[key].name;
        else {
          let items = data[key];
          if (!Array.isArray(items)) items = [data[key]];
          if (items[0] && 'name' in items[0]) {
            console.log(items);
            if (items.length === 1) source = items[0]['name'];
            if (items.length > 1)
              source = items.reduce((item: any, prev: any) => {
                console.log('reduce ', item, prev);
                return item['name'] + ' ' + prev['name'];
              });
          }
        }
      } else source = JSON.stringify(data);
      console.log('source: ', source);
      return source.toLowerCase().includes(filter.toLowerCase());
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    let data = changes['list'].currentValue;
    const key = 'name' in data[0] ? 'name' : 'title';
    let sortedData = this.sorterPipe.transform(data, key);
    this.dataSource.data = sortedData ? sortedData : data;
  }
}
