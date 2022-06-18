import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lyricist } from 'src/app/model/lyricist';
import { ConfigService } from 'src/app/service/config.service';
import { LyricistService } from 'src/app/service/lyricist.service';

@Component({
  selector: 'app-lyricist',
  templateUrl: './lyricist.component.html',
  styleUrls: ['./lyricist.component.scss']
})
export class LyricistComponent implements OnInit {
  columns = this.config.lyricistTableColumns;
  list$: Observable<Lyricist[]> = this.lyricistService.getAll();

  constructor(
    private config: ConfigService,
    private lyricistService: LyricistService
  ) {}

  ngOnInit(): void {}
}
