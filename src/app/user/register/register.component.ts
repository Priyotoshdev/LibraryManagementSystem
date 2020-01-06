import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // errorMessage : string;
  registerForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass: new FormControl(null,Validators.required)
  })

  constructor(private _router:Router, private _userService : UserService) { }

  ngOnInit() {
    
  }
  moveToLogin(){
    this._router.navigate(['login']);
  }

  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
      console.log('Invalid Form'); return;
    }

    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/login']);},
      error=>console.error(error)
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }

}


// errorMessage : string;
//   registerForm : FormGroup;
//   constructor(
//     private router:Router,
//    private fb : FormBuilder,
//    private service : UserService
//    ) { }

//   ngOnInit() {
//     this.init();
//   }
//   get username() {
//     return this.registerForm.get('username');
//   }
//   get email() {
//     return this.registerForm.get('email');
//   }
//   get passsword() {
//     return this.registerForm.get('password');
//   }
//   init() {
//     this.registerForm = this.fb.group({
//       username : ["", Validators.required],
//       email : ["", [Validators.required, Validators.email]],
//       password : ["", Validators.required]
//     });
//   }

//   moveToLogin(){
//         this.router.navigate(['/login']);
//       }
//   onSubmit() {
//     this.service.registerUser(this.registerForm.value).subscribe(user => {
//       this.registerForm.reset();
//       this.router.navigate(['/login']);
//     }, (err) => {
//       if(err.error.msg) {
//         this.errorMessage = err.error.msg[0].message;
//       }
//       if(err.error.errorMessage) {
//         this.errorMessage = err.error.errorMessage;
//       }
//     })
//   }
// }