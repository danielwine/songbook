import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';
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
  visibleSongs$ = this.songs$
  currentSong = new Song();

  constructor(
    private artistService: ArtistService,
    private songService: SongService
  ) {}

  updateSongList(event: Event) {
    this.artists$.subscribe((artists) => {
      const artist = artists.find(
        (item) => item._id === parseInt(event.toString())
      );
      console.log(artist?.songs);
      if (artist && artist.songs)
        this.visibleSongs$ = this.songs$.pipe(
          map((songs) =>
            songs.filter((song) =>
              artist.songs.some((songId) => song._id === songId)
            )
          )
        );
    });
  }

  updateLyrics(event: Event) {
    this.songService
      .getItem(parseInt(event.toString()))
      .subscribe((item: Song) => (this.currentSong = item));
  }

  ngOnInit(): void {
    this.songs$.subscribe((items) => {
      this.currentSong = items[Math.floor(Math.random() * items.length)];
    });
  }
}
