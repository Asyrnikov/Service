import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userProfile: User;

  constructor(public authService: AuthService) {
    this.userProfile = {
      id: 0,
      firstname: "",
      lastname: "",
      phone_number: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  }

  ngOnInit() {
    this.authService.profileUser().subscribe((user) => {
      this.userProfile = user;
    });
  }
}