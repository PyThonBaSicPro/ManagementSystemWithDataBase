import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-full-project',
  templateUrl: './full-project.component.html',
  styleUrls: ['./full-project.component.css']
})
export class FullProjectComponent implements OnInit {

  // @ViewChild('user') user: ElementRef;

  constructor(private main_service: MainService) { }

  ngOnInit(): void {
    this.fetchUser();
    this.fetchAdmin()
  }


  // users account
  user: string[] = [];

  userName: string = '';


  userAdd(data: any) {
    if (data.value.length > 0) {
      this.user.push(data.value);
      this.main_service.usersData(this.user).subscribe();
    } else {
      alert("Users Input Field Is Empty");
    }
  };

  deleteUser(u: any) {
    this.user.splice(u, 1);
    this.main_service.usersData(this.user).subscribe();
  };

  userSave() {
    this.main_service.usersData(this.user).subscribe(
      // (response)=>console.log(response),
      // (error)=>console.log(error)
    );
    alert("Data Is Saved");
  };

  fetchUser() {
    this.main_service.usersFetch().subscribe(
      usersdata => this.user = usersdata
    );
  };

  // @ViewChild('users')
  // usersVal!: ElementRef<any>;
  // updateUser(index:number){
  //   // console.log(this.user[index]);
  //   // this.usersVal.nativeElement.value=this.user[index].usersVal;
  // }


  // admins Account
  admin: string[] = [];
  adminName: string = "";

  addAdmin(val: any) {
    if (val.value.length > 0) {
      this.admin.push(val.value);
      this.main_service.adminData(this.admin).subscribe();
    } else {
      alert("Admins Input Field Is Empty");
    }
  };

  deleteAdmin(i: any) {
    this.admin.splice(i, 1);
    this.main_service.adminData(this.admin).subscribe();
  };

  saveAdmin() {
    this.main_service.adminData(this.admin).subscribe(
      // (response)=>console.log(response),
      // (error)=>console.log(error)
    )
    alert("Data Is Saved");
  }

  fetchAdmin() {
    this.main_service.adminsFetch().subscribe(admindata => this.admin = admindata)
  }





}
