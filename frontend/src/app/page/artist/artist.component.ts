import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ArtistEditComponent } from 'src/app/dialog/form/artist-edit/artist-edit.component';
import { DialogService } from 'src/app/dialog/service/dialog.service';
import { MessageService } from 'src/app/dialog/service/message.service';
import { Artist } from 'src/app/model/artist';
import { ArtistService } from 'src/app/service/artist.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  columns = this.config.artistTableColumns;
  list$: Observable<Artist[]> = this.artistService.getAll();

  constructor(
    private config: ConfigService,
    private artistService: ArtistService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  create() {
    this.dialogService
      .open(ArtistEditComponent, new Artist())
      .pipe(take(1))
      .subscribe((result) => {
        console.log(result);
      });
  }

  update(item: Artist) {
    this.artistService.getItem(item._id.toString()).subscribe((item) => {
      if (!item) this.messageService.showFailed();
      else {
        this.dialogService
          .open(ArtistEditComponent, item)
          .pipe(take(1))
          .subscribe((result) => {
            console.log(result);
          });
      }
    });
  }

  delete(item: Artist) {
    if (item.songs.length == 0)
      this.artistService.deleteItem(item._id.toString()).subscribe({
        next: (error) => {
          if (error) {
            this.messageService.showDeleted();
            this.list$ = this.artistService.getAll();
          } else this.messageService.showFailed();
        },
      });
    else
      this.messageService.openDialog({
        title: 'Nem teljesíthető',
        content: 'Egy előadó nem törölhető, amíg dalok vannak hozzárendelve.',
        acknowledgeMode: true,
      });
  }

  ngOnInit(): void {}
}
