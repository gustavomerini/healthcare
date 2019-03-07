import { pluck, distinctUntilChanged } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
import { User } from "./auth/shared/services/auth.service";

export interface State {
  [key: string]: any;
}

const state: State = { user: undefined };

export class Store {
  user: User;

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
