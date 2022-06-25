import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lyricist } from 'src/app/model/lyricist';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-lyricist-edit',
  templateUrl: './lyricist-edit.component.html',
  styleUrls: ['./lyricist-edit.component.scss'],
})
export class LyricistEditComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LyricistEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Lyricist,
    public messageService: MessageService
  ) {}

  onSubmit(form: NgForm, data: Lyricist): void {
    if (form.invalid) {
      this.messageService.showInvalidForm();
    } else this.dialogRef.close(data);
  }

  ngOnInit(): void {}
}
