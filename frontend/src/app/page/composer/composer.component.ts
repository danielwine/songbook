import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ComposerEditComponent } from 'src/app/dialog/form/composer-edit/composer-edit.component';
import { DialogService } from 'src/app/dialog/service/dialog.service';
import { MessageService } from 'src/app/dialog/service/message.service';
import { Composer } from 'src/app/model/composer';
import { ComposerService } from 'src/app/service/composer.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss'],
})
export class ComposerComponent implements OnInit {
  columns = this.config.composerTableColumns;
  list$: Observable<Composer[]> = this.composerService.getAll();

  constructor(
    private config: ConfigService,
    private composerService: ComposerService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  create() {
    this.dialogService
      .open(ComposerEditComponent, new Composer())
      .pipe(take(1))
      .subscribe((data) => {
        let { _id, ...result } = data;
        this.composerService.createItem(result).subscribe((item) => {
          if (!item) this.messageService.showFailed();
          else {
            this.messageService.showCreated();
            this.list$ = this.composerService.getAll();
          }
        });
      });
  }

  update(item: Composer) {
    this.composerService.getItem(item._id.toString()).subscribe((item) => {
      if (!item) this.messageService.showFailed();
      else {
        this.dialogService
          .open(ComposerEditComponent, item)
          .pipe(take(1))
          .subscribe((result) => {
            if (result)
              this.composerService.updateItem(result).subscribe(() => {
                this.list$ = this.composerService.getAll();
              });
          });
      }
    });
  }

  delete(item: Composer) {
    if (item.songs.length == 0)
      this.composerService.deleteItem(item._id.toString()).subscribe({
        next: (error) => {
          if (error) {
            this.messageService.showDeleted();
            this.list$ = this.composerService.getAll();
          } else this.messageService.showFailed();
        },
      });
    else
      this.messageService.openDialog({
        title: 'Nem teljesíthető',
        content:
          'Egy zeneszerző nem törölhető, amíg dalok vannak hozzárendelve.',
        acknowledgeMode: true,
      });
  }

  ngOnInit(): void {}
}
