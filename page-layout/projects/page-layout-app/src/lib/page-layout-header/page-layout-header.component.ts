import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-page-layout-header',
  templateUrl: './page-layout-header.component.html',
  styleUrls: ['./page-layout-header.component.scss']
})
export class PageLayoutHeaderComponent implements OnInit {

  @Input()
  back: boolean = false;
  @Input()
  imgSrc!: string;
  @Input()
  title!: string;

  @Output()
  backBtnEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.back);
    console.log(this.title);
  }

  backBtnClickEvent(){
    this.backBtnEvent.emit();
  }

}
