import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  private emitChangeSource = new Subject<any>();
  private productsLength = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();
  productsLength$ = this.productsLength.asObservable();

  emitChange(param) {
      this.emitChangeSource.next(param);
  }

  
}
