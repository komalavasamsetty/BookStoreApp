import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service:UserService, private router: Router) { }
  loginusername: any;
  loginuserpassword: any;
  user: any;
  msg:any;
  login() {
   
    this.user = {
        userName:this.loginusername,
        userPassword:this.loginuserpassword
    }
    this.service.login(this.user).subscribe((res:any)=>{
      this.msg=res;
      if(this.msg=="Login success"){
        Swal.fire({
          title: 'Admin Login Successful!',
          text: this.msg,
          icon: 'success',
          confirmButtonText: 'OK'
        })
        localStorage.setItem('user',JSON.stringify(this.user));
        this.router.navigateByUrl('/admin')
      }
      else if(this.msg=="Login success"){
        Swal.fire({
          title: 'Hey Login  Successful!',
          text: this.msg,
          icon: 'success',
          confirmButtonText: 'OK'
        })
        localStorage.setItem('user',JSON.stringify(this.user));
        this.router.navigateByUrl('/admin')
      }
      else{
        alert(this.msg)
      }
    })
  }

  load()
  {
    this.router.navigateByUrl('/reg')
  }

}
