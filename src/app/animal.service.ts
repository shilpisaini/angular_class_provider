import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor() { }

  name = 'Animal';
	food = 'Food';	
  
  getName() {
		return this.name;
	}
        getFood() {
		return this.food;
	}	
}
