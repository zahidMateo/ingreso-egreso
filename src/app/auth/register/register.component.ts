import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registroForm!: FormGroup;


  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private route: Router
  ) {


  }

  ngOnInit(): void {
     this.registroForm = this.fb.group(
      {
        nombre: ['',Validators.required],
        correo: ['', Validators.required],
        password: ['', Validators.required]

      }
     )
  }

  crearUusario(){
    if(this.registroForm.invalid){
      return
    }
    // const correo2 = this.registroForm.get('correo')?.value;
    // console.log("correo3", correo2);

    const {nombre, password, correo} = this.registroForm.value
     this.authService.crearUsuario(nombre, correo,password)
     ?.then( credenciales =>{
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
