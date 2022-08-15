import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-image-carousel-app',
  templateUrl: './image-carousel-app.component.html',
  styleUrls: ['./image-carousel-app.component.scss'
  ]
})
export class ImageCarouselAppComponent implements OnInit {

  @Input() imageList:string[] = [];

  selectedImage!: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedImage = this.imageList[0];
  }

  selectImage(imag: any){
    this.selectedImage = imag;
  }

  isPreviousVisible(){
    if(this.imageList.indexOf(this.selectedImage)>0){
      return true;
    }
    return false;
  }

  isNextVisible(){
    if(this.imageList.indexOf(this.selectedImage)<this.imageList.length-1){
      return true;
    }
    return false;
  }

  previous(){
    this.selectedImage = this.imageList[this.imageList.indexOf(this.selectedImage)-1]
  }

  next(){
    this.selectedImage = this.imageList[this.imageList.indexOf(this.selectedImage)+1]
  }

}
