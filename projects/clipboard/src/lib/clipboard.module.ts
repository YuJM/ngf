import { NgModule } from '@angular/core';
import { ClipboardComponent } from './clipboard.component';
import { ClipDirective } from './clip.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ClipboardComponent, ClipDirective],
  imports: [
      CommonModule
  ],
  exports: [ClipboardComponent, ClipDirective]
})
export class ClipboardModule { }
