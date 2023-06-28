import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { AuthStateService } from './shared/auth-state.service';
import { AuthService } from './shared/auth.service';
import { Role } from './models/role';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  isSignedIn!: boolean;
  // userRoleName: string = "";

  constructor(
    private auth: AuthStateService,
    private authService: AuthService,
    public router: Router,
    public token: TokenService
  ) {}
  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
    // this.getRoleName();
  }
  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.authService.logout();
    // this.getRoleName();
    // this.router.navigate(['login']);
  }

  // getRoleName() {
  //   this.authService.profileUser().subscribe((user) => {
  //     this.userRoleName = (user.roles as Role[])[0]?.name;
  //   });
  // }
}