import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBArComponent {

  /**
   *
   */
  constructor(private AuthService: AuthService,  private route: Router) {


  }
close(){
  this.AuthService.logout()
  .then(()=>{
    this.route.navigate(['/login'])
  })
}
}
