import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from '../component/component.module';
import { InputFileComponent } from '../component/input-file/input-file.component';

@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ]
})
export class ViewModule { }
