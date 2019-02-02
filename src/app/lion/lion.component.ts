import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { LionService } from '../lion.service';

@Component({
  selector: 'app-lion',
  providers: [ 
    { provide: AnimalService, useClass: LionService }
  ],    
  templateUrl: './lion.component.html',
  styleUrls: ['./lion.component.scss']
  
})
export class LionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
