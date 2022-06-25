import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Artist } from 'src/app/model/artist';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss'],
})
export class ArtistEditComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ArtistEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Artist,
    public messageService: MessageService
  ) {}

  onSubmit(form: NgForm, data: Artist): void {
    if (form.invalid) {
      this.messageService.showInvalidForm();
    } else this.dialogRef.close(data);
  }

  ngOnInit(): void {}
}
