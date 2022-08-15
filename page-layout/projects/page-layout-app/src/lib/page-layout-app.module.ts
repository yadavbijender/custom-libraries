import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageLayoutAppComponent } from './page-layout-app.component';
import { PageLayoutBodyComponent } from './page-layout-body/page-layout-body.component';
import { PageLayoutHeaderComponent } from './page-layout-header/page-layout-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    PageLayoutAppComponent,
    PageLayoutHeaderComponent,
    PageLayoutBodyComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    PageLayoutAppComponent,
    PageLayoutHeaderComponent,
    PageLayoutBodyComponent
  ]
})
export class PageLayoutAppModule { }
