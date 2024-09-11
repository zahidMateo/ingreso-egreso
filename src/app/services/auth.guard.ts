import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';  // Usa operadores en lugar de funciones directas de 'rxjs'.

@Injectable({
  providedIn: 'root',  // Esto lo registra como un servicio a nivel global.
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): any {
    return this.auth.isAuth2().pipe(
      tap(estado => {
        if (!estado) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
