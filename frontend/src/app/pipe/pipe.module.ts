import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { SorterPipe } from './sorter.pipe';


@NgModule({
  declarations: [FilterPipe, SorterPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterPipe, SorterPipe]
})
export class PipeModule { }
