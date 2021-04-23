import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private users:UserDataService) { }
  loginForm = new FormGroup({
    fname: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    pass: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phno: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  })
  ngOnInit(): void {
  }

  get fname() {return this.loginForm.get('fname')}
  get lname() {return this.loginForm.get('lname')}
  get pass() {return this.loginForm.get('pass')}
  get email() {return this.loginForm.get('email')}
  get phno() {return this.loginForm.get('phno')}
  get address() {return this.loginForm.get('address')}
  
  usersJsonData = [];
  getUserData(){
    //console.log(this.loginForm.value);
    this.users.postData(this.loginForm.value).subscribe((result)=>{console.log(result)
    })
  }

}
