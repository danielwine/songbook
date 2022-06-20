import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDataTableComponent } from './mat-data-table/mat-data-table.component';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [MatDataTableComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  exports: [MatDataTableComponent],
})
export class DataTableModule {}
