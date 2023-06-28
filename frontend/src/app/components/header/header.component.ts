import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
  isSignedIn!: boolean;
  isCollapsed : boolean = true; 
  isPriceListCollapsed : boolean = true;
  user: User;

  constructor(
    private auth: AuthStateService,
    private authService: AuthService,
    public router: Router,
    public token: TokenService,
  ) {
    this.authService.user.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }

  get isUser() {
    const roleName = this.user ? (this.user.roles as Role[])[0]?.name : "";
    console.log(roleName === "user");
    return roleName === "user";
  }

  get isAdmin() {
    const roleName = this.user ? (this.user.roles as Role[])[0]?.name : "";
    console.log(roleName === "admin");
    return roleName === "admin";
  }
}
