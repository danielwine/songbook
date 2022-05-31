import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/model/artist';
import { Song } from 'src/app/model/song';
import { ArtistService } from 'src/app/service/artist.service';
import { SongService } from 'src/app/service/song.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  artists$: Observable<Artist[]> = this.artistService.getAll();
  songs$: Observable<Song[]> = this.songService.getAll();

  constructor(
    private artistService: ArtistService,
    private songService: SongService
  ) {}

  ngOnInit(): void {}
}
