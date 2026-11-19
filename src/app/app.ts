import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  title = 'Mes Maquillages';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const jwt = localStorage.getItem('jwt');
    const loggedUser = localStorage.getItem('loggedUser');

    if (!jwt || !loggedUser) {
      this.router.navigate(['/login']);
      return;
    }

    this.authService.loadToken();
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLogout(): void {
    this.authService.logout();
  }
}