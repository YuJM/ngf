import { NgModule } from '@angular/core';
import { LabsComponent } from './labs.component';
import { CustomAsyncPipe } from './custom-async.pipe';


@NgModule({
  declarations: [LabsComponent, CustomAsyncPipe ],
  imports: [
  ],
  exports: [LabsComponent, CustomAsyncPipe]
})
export class LabsModule { }
