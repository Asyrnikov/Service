import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InstallationComponent } from './components/installation/installation.component';
import { OrderComponent } from './components/order/order.component';
import { RepairComponent } from './components/repair/repair.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'contact',
    component : ContactComponent
  },
  {
    path : 'installation',
    component : InstallationComponent
  },
  {
    path : 'order',
    component : OrderComponent
  },
  {
    path : 'repair',
    component : RepairComponent
  },
  {
    path: '', redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}



