import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Composer } from 'src/app/model/composer';
import { ComposerService } from 'src/app/service/composer.service';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {
  columns = this.config.composerTableColumns;
  list$: Observable<Composer[]> = this.composerService.getAll();

  constructor(
    private config: ConfigService,
    private composerService: ComposerService
  ) {}

  ngOnInit(): void {}
}
