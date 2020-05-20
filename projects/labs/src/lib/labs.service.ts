import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabsService {
  stream$ = new ReplaySubject(1);
  constructor() { }
}
