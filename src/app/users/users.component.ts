import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersJsonData = [];
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  constructor(private users:UserDataService) { 
    this.users.getData().subscribe((data1:any)=>{console.log("External Services Data",data1)
    this.usersJsonData = data1;
    })
  }

  deleteUser(uId){
    //alert(uId);
    if(confirm("Are you sure you want to delete user?")) {
    this.users.deleteData(uId).subscribe((result)=>{})
  }
}

  ngOnInit(): void {
  }

}
