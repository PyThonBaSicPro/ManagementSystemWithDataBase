import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) {}


  // Upload Data
  usersData(users:any[]){
    // return this.http.post("https://users-management-334cb-default-rtdb.firebaseio.com/users.json",users);
    return this.http.put("https://users-management-334cb-default-rtdb.firebaseio.com/users.json",users);

  }


  adminData(admins:any[]){
    // return this.http.post("https://users-management-334cb-default-rtdb.firebaseio.com/admins.json",admins);
    return this.http.put("https://users-management-334cb-default-rtdb.firebaseio.com/admins.json",admins);

  }




  // fetch Data
  usersFetch():Observable<any>{
    return this.http.get("https://users-management-334cb-default-rtdb.firebaseio.com/users.json");
  }

  adminsFetch():Observable<any>{
    return this.http.get("https://users-management-334cb-default-rtdb.firebaseio.com/admins.json");
  }
}
