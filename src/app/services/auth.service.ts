import { Injectable, Pipe } from '@angular/core';

import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, authState } from '@angular/fire/auth';
import { setDoc, Firestore, doc } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private firestore: Firestore) { }

  crearUsuario(name: string, email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
            .then( ({ user }) => {
              const newUser = new Usuario(user.uid, name, email);
              return setDoc(doc(this.firestore, user.uid, 'user'), {...newUser});
            });
  }

  loginUser(email: string, password: string) {
    return signInWithEmailAndPassword (this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  isAuth() {
    return authState(this.auth).subscribe(resp =>{
      console.log("resp", resp);

    })
  }
  isAuth2(){
    return authState(this.auth).pipe(
      map(fbUser => fbUser != null)

    )
  }
}
