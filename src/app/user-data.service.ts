import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }
  getData(){
    let data = this.http.get(this.url);
    return data;
  }

  postData(data){
   // console.log(data)
    return this.http.post(this.url,data);
  }

  deleteData(id){
    return this.http.delete(`${this.url}/${id}`)
  }

  getClickedUser(id){
    return this.http.get(`${this.url}/${id}`)
  }

  updateData(id,data){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
