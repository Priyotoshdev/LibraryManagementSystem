import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(public router: Router) { }
  required= false;
  ngOnInit() { 
    

  }
  handleClick(event: Event) {
   
    this.router.navigate(['/home']);
    alert('your request has been submitted')
  
}

}


