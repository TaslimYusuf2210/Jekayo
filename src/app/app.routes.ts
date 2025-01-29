import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: 'jekayo',
    loadChildren: () => 
      import('./pages/access/access.route').then((m) => m.accessRoutes),
  },
  { path:'', component: LandingPageComponent },
  { path:'home', component: LandingPageComponent },
  { path:'homepage', component: SignInComponent },
  { path:'signup', component: SignUpComponent },
];
