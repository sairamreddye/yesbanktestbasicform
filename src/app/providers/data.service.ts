import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private user = new BehaviorSubject<string>(null);
  castUser = this.user.asObservable();

  constructor() { }

  studentDetails(newUser){
    this.user.next(newUser); 
  }

}
