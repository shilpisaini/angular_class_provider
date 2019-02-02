import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { CowService } from '../cow.service';

@Component({
  selector: 'app-cow',
  providers: [ 
    { provide: AnimalService, useClass: CowService }
  ],     
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.scss']
})
export class CowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
