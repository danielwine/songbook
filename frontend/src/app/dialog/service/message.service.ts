import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DialogComponent } from '../common/dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

  openDialog(data: any): Observable<any> {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '280px',
      data,
    });
    return dialogRef.afterClosed();
  }

  showDeleted(): void {
    this.showMessage('Az elem törölve');
  }

  showFailed(): void {
    this.showMessage('Sikertelen művelet');
  }

  showInvalidForm(): void {
    this.showMessage('Nem megfelelően kitöltött űrlap');
  }

  showMessage(message: string): void {
    this.snackBar.open(message, '', {
      duration: 3000,
    });
  }
}
