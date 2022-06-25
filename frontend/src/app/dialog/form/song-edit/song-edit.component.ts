import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Song } from 'src/app/model/song';
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

  onSubmit(form: NgForm, data: Song): void {
    if (form.invalid) {
      this.messageService.showInvalidForm();
    } else this.dialogRef.close(data);
  }

  ngOnInit(): void {}
}
