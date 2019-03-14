import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Store } from "src/store";
import { AppComponent } from "./containers/app/app.component";
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { AppNavComponent } from "./components/app-nav/app-nav.component";
import { AppRoutingModule } from "./app-routing.module";

import { HealthModule } from "src/health/health.module";
import { AuthModule } from "src/auth/auth.module";

@NgModule({
  declarations: [AppComponent, AppHeaderComponent, AppNavComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, HealthModule],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}
