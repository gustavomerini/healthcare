import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { SharedModule } from "./shared/shared.module";

export const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
      },
      {
        path: "login",
        loadChildren: "./login/login.module#LoginModule"
      },
      {
        path: "register",
        loadChildren: "./register/register.module#RegisterModule"
      }
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDPu_joA9HcE3VAZ0WArbXrR5z0_5N8kw0",
  authDomain: "healthcare-2c099.firebaseapp.com",
  databaseURL: "https://healthcare-2c099.firebaseio.com",
  projectId: "healthcare-2c099",
  storageBucket: "healthcare-2c099.appspot.com",
  messagingSenderId: "760202545064"
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ],
  exports: [],
  providers: []
})
export class AuthModule {}
