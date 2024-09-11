import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;


    constructor(private fb: FormBuilder,
                private auth: AuthService,
                private route: Router

    ) {


    }
  ngOnInit(): void {
    this.validators();
  }

    validators(){
      this.loginForm = this.fb.group(
        {
          correo: ['', Validators.required],
          password: ['', Validators.required],
        }
      )
    }

  onSubmit(){
    const {correo, password} = this.loginForm.value;
    this.auth.loginUser(correo, password)
    .then( resp =>{
          this.route.navigate(['/'])
    })
    .catch(err => Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    }))
  }

}
