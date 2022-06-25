import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from 'src/app/model/album';
import { ArtistService } from 'src/app/service/artist.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss'],
})
export class AlbumEditComponent implements OnInit {
  artists$ = this.artistService.getAll()

  constructor(
    public dialogRef: MatDialogRef<AlbumEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Album,
    public artistService: ArtistService,
    public messageService: MessageService,
  ) {}

  onSubmit(form: NgForm, data: Album): void {
    if (form.invalid) {
      this.messageService.showInvalidForm();
    } else this.dialogRef.close(data);
  }

  ngOnInit(): void {}
}
