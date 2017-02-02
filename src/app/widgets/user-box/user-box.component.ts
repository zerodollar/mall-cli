import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: '.userBox',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.less']
})
export class UserBoxComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
    // TODO
  }

  ngOnInit() {
  }

  private logout = (): void => {
    this.router.navigate(['/']);
    this.auth.logout();
  }
}
