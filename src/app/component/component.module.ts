import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFileComponent } from './input-file/input-file.component';



@NgModule({
  declarations: [InputFileComponent],
  entryComponents: [
    InputFileComponent
  ],
  exports: [
    InputFileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
