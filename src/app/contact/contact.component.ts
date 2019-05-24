import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  user= {
    username: '',
    password: ''
};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(theForm: NgForm){
    // this.user.username = theForm.value.username;
    // this.user.password = theForm.value.password;
    console.log(this.user);
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      userId: Math.random(),
      id: Math.random(),
      title: theForm.value.title
    }).subscribe( res => {
      console.log(res);
    }, error => {
      console.log(" something went wrong");
    });
  }

}
