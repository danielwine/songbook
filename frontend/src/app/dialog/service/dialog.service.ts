import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  open(component: ComponentType<unknown>, data: any): Observable<any> {
    const dialogRef = this.dialog.open(component, {
      data,
      position: {top: '12vh'},
      height: '80vh',
      width: '500px',
    });
    return dialogRef.afterClosed();
  }
}
