import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog'
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
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.css'],
    selector: 'create-account',
 })
 
 export class CreateAccountComponent {

  hide = true;
  firstName = new FormControl('');
  lastName = new FormControl('');  
  password = new FormControl('');
  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();
  

  public onCreateNewAccount(){
      this.hide = false;
      alert("New Account \n Name: "+this.firstName.value+" "+this.lastName.value+" \n email: "+this.emailFormControl.value+ "    password: "+this.password.value);
  }

  

 }