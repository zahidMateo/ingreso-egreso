import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04-ingresosEgresos';
  /**
   *
   */
  constructor(private auth: AuthService) {
    auth.isAuth();

  }
}
