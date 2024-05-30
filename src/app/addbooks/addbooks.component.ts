import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrl: './addbooks.component.css'
})
export class AddbooksComponent {
  constructor(private service:UserService,private route:Router){}

  bookId:any;
  bookName:any;
  bookPrice:any;
  bookAuthor:any;
  bookImage:any;
  bookDescription:any;
  addBook:any;
  msg:any;

  add(){
    this.addBook={
    bookName:this.bookName,
    bookPrice:this.bookPrice,
    bookAuthor:this.bookAuthor,
    bookImage:this.bookImage,
    bookDescription:this.bookDescription,
  
    show:false
    }
    this.service.add(this.addBook).subscribe((result)=>{
      this.msg=result;
     
      if(this.msg=="New Book Added!"){
      Swal.fire({
        title: "Added Successfully!",
        text: "Now you can see it in Home!",
        icon: "success"
      });
    }
    else{
      alert(this.msg);
    }
      this.route.navigateByUrl('admin/manage');
    });
    
    }
    
}
