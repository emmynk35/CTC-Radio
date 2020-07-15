import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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
    selector: 'login-popup',
 })
 
 export class LoginComponent {

    hide = true;
    
    password = new FormControl('');
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);

      matcher = new MyErrorStateMatcher();
    constructor(
       public dialogRef: MatDialogRef<LoginComponent>,
       @Inject(MAT_DIALOG_DATA) public data:any){}

    public onSubmitLogin(){
        this.hide = false;
        alert("email: "+this.emailFormControl.value+ "    password: "+this.password.value);
            

    }
    
      

 }