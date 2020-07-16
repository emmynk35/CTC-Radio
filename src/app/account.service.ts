import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';


interface Token {
  accessToken: string
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url: string;
  private token : string;
  private data : string;

  constructor(private _http: HttpClient) { }
  addAccount(email : string, password : string){
    
    console.log(email);
     
    // this._http.get('http://localhost:3000/').subscribe(data=> this.data);
    console.log(this.data);
    console.log("after post");
    return this._http.post('http://localhost:3000/auth/signup',{email,password}).subscribe(data=>this.data);
    
  }

  loginToExistingAccount(email : string, password : string)
  {
    return this._http.post('http://localhost:3000/auth/signin', {observe: 'response', email, password}).subscribe(response  => { console.log(response); } )
  }

}
