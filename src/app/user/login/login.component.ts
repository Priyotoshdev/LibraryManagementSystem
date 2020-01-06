import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { TokenService } from '../../shared/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  });

  errorMessage : string;
  constructor(private _router : Router, private _user: UserService, private tokenService: TokenService) { }

  ngOnInit() {
  }


  moveToRegister(){
    this._router.navigate(['/register']);
  }

  login(){
    if(!this.loginForm.valid){
      console.log('invalid Form');return;
    }
    this._user.login(this.loginForm.value).subscribe(user => {
      //console.log(user.message);
      this.tokenService.SetToken(user.token);
      this.loginForm.reset();
      this._router.navigate(['/user']);
    }, err => {
      if(err.error.msg) {
        this.errorMessage = err.error.msg[0].message;
      }
      if(err.error.message) {
        this.errorMessage = err.error.message;
      }
    })
}
}



//   loginForm : FormGroup;

//   constructor(private router : Router, 
//               private fb : FormBuilder,
//               private tokenService : TokenService,
//               private service : UserService
//    ) { }

//   ngOnInit() {
//     this.init()
//   }
//   init() {
//     this.loginForm = this.fb.group({
//       email : ['', Validators.required],
//       password : ['', Validators.required]
//     })
//   };
  
//   get email() {
//     return this.loginForm.get('email');
//   }
//   get password() {
//     return this.loginForm.get('password');
//   }


 
//   login(){
//     this.service.loginUser(this.loginForm.value).subscribe(user => {
//       //console.log(user.message);
//       this.tokenService.SetToken(user.token);
//       this.loginForm.reset();
//       this.router.navigate(['']);
//     }, err => {
//       if(err.error.msg) {
//         this.errorMessage = err.error.msg[0].message;
//       }
//       if(err.error.message) {
//         this.errorMessage = err.error.message;
//       }
//     })

// }
// moveToRegister(){
//   this.router.navigate(['/register']);
// }
// }


