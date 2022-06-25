import { Component, Inject, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Album } from 'src/app/model/album';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.scss'],
})
export class AlbumEditComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AlbumEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Album,
    public messageService: MessageService
  ) {}

  onSubmit(form: NgForm, data: Album): void {
    if (form.invalid) {
      this.messageService.showInvalidForm();
    } else this.dialogRef.close(data);
  }

  ngOnInit(): void {}
}
