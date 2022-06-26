import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from 'src/app/model/album';
import { Artist } from 'src/app/model/artist';
import { Composer } from 'src/app/model/composer';
import { Genre } from 'src/app/model/genre';
import { Lyricist } from 'src/app/model/lyricist';
import { Song, SongRequest } from 'src/app/model/song';
import { AlbumService } from 'src/app/service/album.service';
import { ArtistService } from 'src/app/service/artist.service';
import { ComposerService } from 'src/app/service/composer.service';
import { GenreService } from 'src/app/service/genre.service';
import { LyricistService } from 'src/app/service/lyricist.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.scss'],
})
export class SongEditComponent implements OnInit {
  artists$ = this.artistService.getAll();
  albums$ = this.albumService.getAll();
  lyricists$ = this.lyricistService.getAll();
  composers$ = this.composerService.getAll();
  genres$ = this.genreService.getAll();

  request = new SongRequest();

  constructor(
    public dialogRef: MatDialogRef<SongEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Song,
    public artistService: ArtistService,
    public albumService: AlbumService,
    public lyricistService: LyricistService,
    public composerService: ComposerService,
    public genreService: GenreService,
    public messageService: MessageService
  ) {}

  convertDataToSongRequest() {
    Object.entries(this.data).forEach((entry) => {
      if (typeof entry[1] == 'string' && entry[1] != '')
        this.request[entry[0]] = entry[1];
      if (
        typeof entry[1] == 'object' &&
        '_id' in entry[1] &&
        entry[1]['_id'] !== ''
      ) {
        this.request[entry[0]] = entry[1]['_id'];
      }

      if (Array.isArray(entry[1]) && entry[1][0] && entry[1][0]['name']) {
        this.request[entry[0]] = entry[1].map((item) => item.name._id);
      }
    });
  }

  onSubmit(form: NgForm, data: Song): void {
    if (form.invalid) {
      this.messageService.showInvalidForm();
    } else {
      console.log('DATA', this.data);
      this.convertDataToSongRequest();
      console.log('REQUEST', this.request);
      this.dialogRef.close(this.request);
    }
  }

  displayName(item: Artist | Album | Lyricist | Composer | Genre): string {
    console.log(item);
    if (typeof item == 'string') return item;
    return item ? item.name : '';
  }

  ngOnInit(): void {}
}
