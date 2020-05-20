import { NgModule } from '@angular/core';
import { ClipDirective } from './clip.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ClipDirective],
  imports: [
      CommonModule
  ],
  exports: [ClipDirective]
})
export class ClipboardModule { }
