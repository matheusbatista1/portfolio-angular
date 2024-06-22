import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(true); // Começa como true para mostrar o spinner inicialmente
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  startLoading(): void {
    this.loadingSubject.next(true);
  }

  finishLoading(): void {
    this.loadingSubject.next(false);
  }
}
