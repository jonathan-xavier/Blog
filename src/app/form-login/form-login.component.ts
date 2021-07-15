import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit, OnDestroy {
  
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  
  constructor(private router: Router) { }

  ngOnDestroy(): void {
    document.querySelector('html').style.background = 'none';
  }

  ngOnInit(): void {
    document.querySelector('html').style.background = 
    'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(113,89,193,1) 50%, rgba(252,176,69,1) 100%)';
  }

  login(){

    if(this.loginForm.valid){
      localStorage.setItem('token','coxinha');
      this.router.navigate(['/noticias'])
    }else{
      console.log('Login invalido')
    }
  }
  
  

}
