import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Song } from 'src/app/model/song';
import { ConfigService } from 'src/app/service/config.service';
import { SongService } from 'src/app/service/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  columns = this.config.songTableColumns;
  list$: Observable<Song[]> = this.songService.getAll();

  constructor(
    private config: ConfigService,
    private songService: SongService
  ) {}

  edit(event: Event) {
    console.log(event);
  }

  delete(event: Event) {
    console.log(event);
    // this.songService.deleteItem(event)
  }

  ngOnInit(): void {}
}
