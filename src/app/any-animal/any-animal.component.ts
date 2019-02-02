import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-any-animal',
  providers: [ 
    AnimalService
   ],    
  templateUrl: './any-animal.component.html',
  styleUrls: ['./any-animal.component.scss']
})
export class AnyAnimalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
