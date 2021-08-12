import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { ProfileComponent } from "./examples/profile/profile.component";
import { SignupComponent } from "./examples/signup/signup.component";
import { LandingComponent } from "./examples/landing/landing.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { HopehomeComponent } from "./examples/hopehome/hopehome.component";
import { FamilyfriendsComponent } from "./examples/familyfriends/familyfriends.component";
import { ImagesComponent } from "./examples/images/images.component";
import { ImageComponent } from "./examples/images/image/image.component";
import { ImageListComponent } from "./examples/images/image-list/image-list.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HopehomeComponent },
  { path: "familyfriends", component: FamilyfriendsComponent },
  {
    path: "image",
    component: ImagesComponent,
    children: [
      { path: "upload", component: ImageComponent },
      { path: "list", component: ImageListComponent },
    ],
  },

  { path: "profile", component: ProfileComponent },
  // { path: "familyfriends", component: FamilyfriendsComponent },
  // { path: "familyfriends", component: FamilyfriendsComponent },
  // { path: 'user-profile',     component: ProfileComponent },
  { path: "signup", component: SignupComponent },
  // { path: 'landing',          component: LandingComponent },
  // { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
