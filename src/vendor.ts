import { pluck, distinctUntilChanged } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

export interface State {
  [key: string]: any
}

const state: State = {};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
