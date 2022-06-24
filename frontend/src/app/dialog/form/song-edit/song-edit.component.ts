import { Component, Inject, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Song } from 'src/app/model/song';
import { ArtistService } from 'src/app/service/artist.service';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.scss'],
})
export class SongEditComponent implements OnInit {
  artists$ = this.artistService.getAll()
  constructor(
    public dialogRef: MatDialogRef<SongEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Song,
    public artistService: ArtistService
  ) {}

  onSubmit(form: Form, data: Song): void {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
