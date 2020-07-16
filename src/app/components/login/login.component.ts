import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { AccountService } from '../../account.service';


/** Error when invalid control is dirty, touched, or submitted. */
 export class MyErrorStateMatcher implements ErrorStateMatcher {
     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
       const isSubmitted = form && form.submitted;
       return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
     }
   }

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    selector: 'login',
 })
 
 export class LoginComponent {

   login = false;
    hide = true;
    email: string;
    password: string; 
    passwordFormControl = new FormControl('');
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);

      matcher = new MyErrorStateMatcher();
    
     
      constructor(private accountService : AccountService, public dialog: MatDialog,
        public dialogRef: MatDialogRef<LoginComponent>,
       @Inject(MAT_DIALOG_DATA) public data:any){
        }


    public onSubmitLogin(){
        this.hide = false;
        this.email = this.emailFormControl.value;
        this.password = this.passwordFormControl.value;
        this.accountService.loginToExistingAccount(this.email , this.password);
        this.login = true;
    }

    onSubmitSignUp():void {
         this.dialog.open(CreateAccountComponent, {
             width: '60vh',
             maxHeight: '60vh',
         });
    }
      

 }