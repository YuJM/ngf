import { NgModule } from '@angular/core';
import { ClipboardComponent } from './clipboard.component';
import { ClipboardDirective } from './clipboard.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ClipboardComponent, ClipboardDirective],
  imports: [
      CommonModule
  ],
  exports: [ClipboardComponent, ClipboardDirective]
})
export class ClipboardModule { }
