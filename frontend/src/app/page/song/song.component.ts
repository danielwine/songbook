import { Component, OnInit } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { SongEditComponent } from 'src/app/dialog/form/song-edit/song-edit.component';
import { DialogService } from 'src/app/dialog/service/dialog.service';
import { MessageService } from 'src/app/dialog/service/message.service';
import { Song } from 'src/app/model/song';
import { ConfigService } from 'src/app/service/config.service';
import { SongService } from 'src/app/service/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
})
export class SongComponent implements OnInit {
  columns = this.config.songTableColumns;
  list$: Observable<Song[]> = this.songService.getAll();

  constructor(
    private config: ConfigService,
    private songService: SongService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  create() {
    this.dialogService
      .open(SongEditComponent, new Song())
      .pipe(take(1))
      .subscribe((result) => {
        console.log(result);
      });
  }

  update(item: Song) {
    this.songService.getItem(item._id.toString()).subscribe((item) => {
      if (!item) this.messageService.showFailed();
      else {
        this.dialogService
          .open(SongEditComponent, item)
          .pipe(take(1))
          .subscribe((result) => {
            console.log(result);
          });
      }
    });
  }

  delete(item: Song) {
    this.songService.deleteItem(item._id.toString()).subscribe({
      next: (error) => {
        if (error) {
          this.messageService.showDeleted();
          this.list$ = this.songService.getAll();
        } else this.messageService.showFailed();
      },
    });
  }

  ngOnInit(): void {}
}
