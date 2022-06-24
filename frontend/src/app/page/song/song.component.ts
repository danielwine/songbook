import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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
    private dialogService: DialogService,
    private router: Router
  ) {}

  edit(id: string) {
    this.songService.getItem(id).subscribe((item) => {
      if (!item) this.messageService.showFailed();
      else {
        this.dialogService.open(SongEditComponent, item);
      }
    });
    console.log(id);
  }

  delete(id: string) {
    this.songService.deleteItem(id).subscribe({
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
