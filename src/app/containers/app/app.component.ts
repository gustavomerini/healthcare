import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store } from "src/store";
import { AuthService, User } from "src/auth/shared/services/auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  title = "healthcare";
  user$: Observable<User>;
  subscription: Subscription;
  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>("user");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(["/auth/login"]);
  }
}
