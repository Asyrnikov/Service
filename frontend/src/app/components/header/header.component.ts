import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
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

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService
  ) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }
}
