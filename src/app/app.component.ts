import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AccountService } from 'src/app/account.service';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ctc-radio';
  logInOrOut = 'Login';
  accountEmail: string;
  accountPassword: string;
  login = false;

  constructor(public dialog: MatDialog, private acc: AccountService) {}

  openLogin(): void {
    if (this.logInOrOut == 'Login') {
      const ref = this.dialog.open(LoginComponent, {
        width: '600px',
        panelClass: 'my-dialog',
        data: {email: this.accountEmail, password: this.accountPassword, login: this.login}
      });
      ref.afterClosed().subscribe(result => {
        if (result.event == true) {
          this.logInOrOut = 'Logout';
        }
      });
    } else {
      this.acc.logout();
      this.logInOrOut = 'Login';
    }
  }


  
  ngOnInit() {
  }
  
}


