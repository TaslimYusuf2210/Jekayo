import { AddMoreComponent } from "../../add-more/add-more.component";
import { AccessPageComponent } from "./access-page/access-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { Routes } from "@angular/router";
import { authGuard } from "../../auth.guard";

export const accessRoutes: Routes = [{
  path: '',
  component: AccessPageComponent,
  children: [
    { path: '', redirectTo: 'accesspage', pathMatch: 'full', },
    { path: 'homepage', component: HomePageComponent, canActivate: [authGuard] },
    { path: 'addMore', component: AddMoreComponent, canActivate: [authGuard] },
  ]
}]