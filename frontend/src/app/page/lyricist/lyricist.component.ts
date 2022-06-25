import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { LyricistEditComponent } from 'src/app/dialog/form/lyricist-edit/lyricist-edit.component';
import { DialogService } from 'src/app/dialog/service/dialog.service';
import { MessageService } from 'src/app/dialog/service/message.service';
import { Lyricist } from 'src/app/model/lyricist';
import { ConfigService } from 'src/app/service/config.service';
import { LyricistService } from 'src/app/service/lyricist.service';

@Component({
  selector: 'app-lyricist',
  templateUrl: './lyricist.component.html',
  styleUrls: ['./lyricist.component.scss'],
})
export class LyricistComponent implements OnInit {
  columns = this.config.lyricistTableColumns;
  list$: Observable<Lyricist[]> = this.lyricistService.getAll();

  constructor(
    private config: ConfigService,
    private lyricistService: LyricistService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  create() {
    this.dialogService
      .open(LyricistEditComponent, new Lyricist())
      .pipe(take(1))
      .subscribe((result) => {
        console.log(result);
      });
  }

  update(item: Lyricist) {
    this.lyricistService.getItem(item._id.toString()).subscribe((item) => {
      if (!item) this.messageService.showFailed();
      else {
        this.dialogService
          .open(LyricistEditComponent, item)
          .pipe(take(1))
          .subscribe((result) => {
            console.log(result);
          });
      }
    });
  }

  delete(item: Lyricist) {
    if (item.songs.length == 0)
      this.lyricistService.deleteItem(item._id.toString()).subscribe({
        next: (error) => {
          if (error) {
            this.messageService.showDeleted();
            this.list$ = this.lyricistService.getAll();
          } else this.messageService.showFailed();
        },
      });
    else
      this.messageService.openDialog({
        title: 'Nem teljesíthető',
        content:
          'Egy dalszövegíró nem törölhető, amíg dalok vannak hozzárendelve.',
        acknowledgeMode: true,
      });
  }

  ngOnInit(): void {}
}
