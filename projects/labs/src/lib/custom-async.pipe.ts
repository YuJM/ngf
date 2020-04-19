import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
  WrappedValue,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LabsService } from './labs.service';

@Pipe({
  name: 'customAsync',
  pure: false,
})
export class CustomAsyncPipe implements PipeTransform, OnDestroy {
  private reflectValue: any = '';
  subscription: Subscription;
  private latestReflectValue = this.reflectValue;
  constructor(
    public labsService: LabsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  transform(value: unknown, ...args: unknown[]): any {
    this.subscription = this.labsService.stream$.subscribe((x) =>
      this.valueUpdate(x)
    );

    if (this.latestReflectValue === this.reflectValue) {
      return this.latestReflectValue;
    } else {
      this.latestReflectValue = this.reflectValue;
      return WrappedValue.wrap(this.reflectValue);
    }
  }

  valueUpdate(inValue: any) {
    if (this.latestReflectValue !== inValue) {
      this.reflectValue = inValue;
      this.changeDetectorRef.markForCheck();
    }
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
