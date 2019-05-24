import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  firstName = 'Behzad';
  lastName = 'khosrojerdi';
  city = 'Berlin';
  status: boolean;
  posts: object[];

  constructor() { 
   console.log('constructor ....');
    this.status = true;
    this.posts = [
        {title: 'post 1'},
        {title: 'post 2'},
        {title: 'post 3'},
        {title: 'post 4'}
    ];
  }

  displayName(){
    return this.firstName;
  }

  getUserStatus(){
    this.status = true;
  }

  greetPerson(){
    // alert("Hi !");
    console.log('Hi !');
  }

  mousingOver(){
    console.log("mousing over!");
  }

  ngOnInit() {
  }

}
