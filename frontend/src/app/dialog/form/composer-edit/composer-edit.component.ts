import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Composer } from 'src/app/model/composer';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-composer-edit',
  templateUrl: './composer-edit.component.html',
  styleUrls: ['./composer-edit.component.scss'],
})
export class ComposerEditComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ComposerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Composer,
    public messageService: MessageService
  ) {}

  onSubmit(form: NgForm, data: Composer): void {
    if (form.invalid) {
      this.messageService.showInvalidForm();
    } else this.dialogRef.close(data);
  }

  ngOnInit(): void {}
}
