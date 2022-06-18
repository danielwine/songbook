import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/model/artist';
import { ArtistService } from 'src/app/service/artist.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  columns = this.config.artistTableColumns;
  list$: Observable<Artist[]> = this.artistService.getAll();

  constructor(
    private config: ConfigService,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {}
}
