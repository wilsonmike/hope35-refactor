import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LandingComponent } from "./landing/landing.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignupComponent } from "./signup/signup.component";
import { HopehomeComponent } from "./hopehome/hopehome.component";
import { FamilyfriendsComponent } from "./familyfriends/familyfriends.component";
import { GetstartedComponent } from "./getstarted/getstarted.component";
import { AboutComponent } from "./about/about.component";
import { DropzoneDirective } from "./directives/dropzone.directive";
import { MainformControllerComponent } from "./mainform-controller/mainform-controller.component";

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule],
  declarations: [
    LandingComponent,
    SignupComponent,
    ProfileComponent,
    HopehomeComponent,
    FamilyfriendsComponent,
    GetstartedComponent,
    AboutComponent,
    DropzoneDirective,
    MainformControllerComponent,
  ],
})
export class ExamplesModule {}
