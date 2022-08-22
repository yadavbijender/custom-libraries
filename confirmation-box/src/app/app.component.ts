import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationBoxAppComponent } from 'projects/confirmation-box-app/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  reasonList = ['Not Needed', 'Out of stock', 'Requirement not filled', 'Some other reason']

  constructor(
    private matDialog: MatDialog
  ) { }

  openConformationDialogBox() {
    const dialogRef = this.matDialog.open(ConfirmationBoxAppComponent, {
      width: '400px',
      height: '200px',
      data: {
        title:'Confirm Box',
        message:'Are you sure?',
        reasonLabel:'Give reason for confirmation',
        selectReasonLabel:'Select reason for confirmation',
        selectReasonList: this.reasonList,
        cancelButtonLabel:'Cancel',
        confirmButtonLabel:'Confirm',
        autoFocus:false,
        restoreFocus: false
      }
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    });
  }
}
