import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InstallationComponent } from './components/installation/installation.component';
import { OrderComponent } from './components/order/order.component';
import { PriceComponent } from './components/price/price.component';
import { RepairComponent } from './components/repair/repair.component';
import { ShowComponent } from './components/show/show.component';
import { ShowoutstandingordersComponent } from './components/showoutstandingorders/showoutstandingorders.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ShowunpaidordersComponent } from './components/showunpaidorders/showunpaidorders.component';
import { ShowcompleteordersComponent } from './components/showcompleteorders/showcompleteorders.component'
import { PrintalluserordersComponent } from './components/printalluserorders/printalluserorders.component';
import { PrintoutstandinguserordersComponent } from './components/printoutstandinguserorders/printoutstandinguserorders.component';
import { PrintunpaiduserordersComponent } from './components/printunpaiduserorders/printunpaiduserorders.component';
import { PrintcheckeduserordersComponent } from './components/printcheckeduserorders/printcheckeduserorders.component';

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
  {
    path: 'price',
    component: PriceComponent
  },
  {
    path: 'show',
    component: ShowComponent
  },
  {
    path: 'showoutstandingorders',
    component: ShowoutstandingordersComponent
  },
  {
    path: 'showunpaidorders',
    component: ShowunpaidordersComponent
  },
  {
    path: 'showcompletedorders',
    component: ShowcompleteordersComponent
  },
  {
    path: 'printcheckeduserorders',
    component: PrintcheckeduserordersComponent
  },
  {
    path: 'printunpaiduserorders',
    component: PrintunpaiduserordersComponent
  },
  {
    path: 'printoutstandinguserorders',
    component: PrintoutstandinguserordersComponent
  },
  {
    path: 'printalluserorders',
    component: PrintalluserordersComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}



