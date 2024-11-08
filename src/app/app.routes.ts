import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';

export const routes: Routes = [
  { path:'', component: LandingPageComponent },
  { path:'home', component: LandingPageComponent },
  { path:'signin', component: SignInComponent },
  { path:'signup', component: SignUpComponent },
];
