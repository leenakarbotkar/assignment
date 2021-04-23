import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
alert:boolean=false;
  constructor( private router: ActivatedRoute, private users:UserDataService) { }
  editForm = new FormGroup({
    fname: new FormControl('',Validators.required),
    lname: new FormControl('',Validators.required),
    pass: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phno: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  })

  get fname() {return this.editForm.get('fname')}
  get lname() {return this.editForm.get('lname')}
  get pass() {return this.editForm.get('pass')}
  get email() {return this.editForm.get('email')}
  get phno() {return this.editForm.get('phno')}
  get address() {return this.editForm.get('address')}

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.users.getClickedUser(this.router.snapshot.params.id).subscribe((result)=>{
      //console.log("here",result)
      this.editForm = new FormGroup({
        fname: new FormControl(result['fname'],Validators.required),
        lname: new FormControl(result['lname'],Validators.required),
        pass: new FormControl(result['pass'],Validators.required),
        email: new FormControl(result['email'],Validators.required),
        phno: new FormControl(result['phno'],Validators.required),
        address: new FormControl(result['address'],Validators.required),
      })
    })
  }

  updateUser(){
    console.log("data",this.editForm.value);
    this.users.updateData(this.router.snapshot.params.id,this.editForm.value).subscribe((result)=>{this.alert = true})
  }


}
