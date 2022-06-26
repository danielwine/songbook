import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from 'src/app/model/album';
import { Artist } from 'src/app/model/artist';
import { Composer } from 'src/app/model/composer';
import { Genre } from 'src/app/model/genre';
import { Lyricist } from 'src/app/model/lyricist';
import { SongRequest } from 'src/app/model/song';
import { ArtistService } from 'src/app/service/artist.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss'],
})
export class AlbumEditComponent implements OnInit {
  artists$ = this.artistService.getAll();

  request = new SongRequest();

  constructor(
    public dialogRef: MatDialogRef<AlbumEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Album,
    public artistService: ArtistService,
    public messageService: MessageService
  ) {}

  onSubmit(form: NgForm, data: Album): void {
    if (form.invalid) {
      this.messageService.showInvalidForm();
    } else this.dialogRef.close(data);
  }

  displayName(item: Artist | Album | Lyricist | Composer | Genre): string {
    console.log(item);
    if (typeof item == 'string') return item;
    return item ? item.name : '';
  }

  ngOnInit(): void {}
}
