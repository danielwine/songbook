import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/model/album';
import { AlbumService } from 'src/app/service/album.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  columns = this.config.albumTableColumns;
  list$: Observable<Album[]> = this.albumService.getAll();

  constructor(
    private config: ConfigService,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {}
}
