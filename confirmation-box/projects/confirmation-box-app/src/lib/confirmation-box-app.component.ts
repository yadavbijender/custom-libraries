import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-confirmation-box-app',
  templateUrl: './confirmation-box-app.component.html',
  styleUrls: ['./confirmation-box-app.component.scss']
})
export class ConfirmationBoxAppComponent implements OnInit {

  textMessage = new FormControl('');
  selectReason = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<ConfirmationBoxAppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  sure() {
    let dataResult: any = {};
    if (this.data?.message) {
      dataResult['sure'] = 'Ok';
    }
    if (this.data?.reasonLabel) {
      dataResult['reasonForSure'] = this.textMessage.value;
    }
    if (this.data?.selectReasonLabel) {
      dataResult['selectedReaon'] = this.selectReason.value;
    }
    this.dialogRef.close(dataResult);
  }

}
