import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AccountService } from '../../account.service';


/** Error when invalid control is dirty, touched, or submitted. */
 export class MyErrorStateMatcher implements ErrorStateMatcher {
     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
       const isSubmitted = form && form.submitted;
       return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
     }
   }

@Component({
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.css'],
    selector: 'create-account',
 })
 
 export class CreateAccountComponent {

  hide = true;
  firstName = new FormControl('');
  lastName = new FormControl(''); 
  email : string;
  password : string; 
  passwordFormControl = new FormControl('');
  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();
  
    constructor(private accountService : AccountService,
      public dialogRef: MatDialogRef<CreateAccountComponent>){}

  public onCreateNewAccount(){
      this.hide = false;
      this.email = this.emailFormControl.value;
      this.password = this.passwordFormControl.value;
      //alert("New Account \n Name: "+this.firstName.value+" "+this.lastName.value+" \n email: "+this.email+ "    password: "+this.password);
      this.accountService.addAccount(this.email , this.password);
      this.dialogRef.close();
    }

  

 }