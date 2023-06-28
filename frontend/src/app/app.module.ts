import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { InstallationComponent } from './components/installation/installation.component';
import { RepairComponent } from './components/repair/repair.component';
import { OrderComponent } from './components/order/order.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MultiDropdownComponent } from './shared/multi-dropdown/multi-dropdown.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PriceComponent } from './components/price/price.component';
import { ShowComponent } from './components/show/show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { ShowoutstandingordersComponent } from './components/showoutstandingorders/showoutstandingorders.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ShowunpaidordersComponent } from './components/showunpaidorders/showunpaidorders.component';
import { ShowcompleteordersComponent } from './components/showcompleteorders/showcompleteorders.component';
import { PrintalluserordersComponent } from './components/printalluserorders/printalluserorders.component';
import { PrintcheckeduserordersComponent } from './components/printcheckeduserorders/printcheckeduserorders.component';
import { PrintunpaiduserordersComponent } from './components/printunpaiduserorders/printunpaiduserorders.component';
import { PrintoutstandinguserordersComponent } from './components/printoutstandinguserorders/printoutstandinguserorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstallationComponent,
    RepairComponent,
    OrderComponent,
    ContactComponent,
    HomeComponent,
    MultiDropdownComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    PriceComponent,
    ShowComponent,
    ShowoutstandingordersComponent,
    ShowunpaidordersComponent,
    ShowcompleteordersComponent,
    PrintalluserordersComponent,
    PrintcheckeduserordersComponent,
    PrintunpaiduserordersComponent,
    PrintoutstandinguserordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    FlexLayoutModule,
    MatDatepickerModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

