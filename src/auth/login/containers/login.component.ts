import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AuthService } from "src/auth/shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-component",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  error: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async loginUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      const a = await this.authService.loginUser(email, password);
      console.log(a, '12313')
      this.router.navigate(["/"]);
    } catch (err) {
      this.error = err.message;
    }
  }
}
