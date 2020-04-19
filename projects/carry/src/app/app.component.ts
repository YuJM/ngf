import { Component, OnInit } from '@angular/core';
import { LabsService } from 'labs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'carry';

  constructor(private labsService: LabsService) {
  }

  ngOnInit(): void {
    this.labsService.stream$.next('hhhhh');
  }


}
