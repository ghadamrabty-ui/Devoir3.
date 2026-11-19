import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'ghada', password: '123', roles: ['USER'] }
  ];

  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];

  apiURL: string = 'http://localhost:8081/users';
  token!: string;

  private helper = new JwtHelperService();

  constructor(private router: Router, private http: HttpClient) {}

  login(user: User) {
    return this.http.post<User>(this.apiURL + '/login', user, { observe: 'response' });
  }

  getToken(): string {
    return this.token ?? localStorage.getItem('jwt') ?? '';
  }

  saveToken(jwt: string): void {
    localStorage.setItem('jwt', jwt);
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT();
  }

  decodeJWT(): void {
    if (!this.token) {
      return;
    }
    try {
      const decodedToken = this.helper.decodeToken(this.token);
      this.roles = decodedToken.roles;
      this.loggedUser = decodedToken.sub;
    } catch (err) {
      console.error('Token invalide :', err);
      this.logout();
    }
  }

  loadToken(): void {
    this.token = localStorage.getItem('jwt') ?? '';
    this.decodeJWT();
  }

  logout(): void {
    this.loggedUser = undefined!;
    this.roles = undefined!;
    this.token = undefined!;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('isloggedIn');
    this.router.navigate(['/login']);
  }

  SignIn(user: User): boolean {
    let validUser = false;
    this.users.forEach((curUser) => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): boolean {
    if (!this.roles) {
      return false;
    }
    return this.roles.indexOf('ADMIN') > -1;
  }

  isTokenExpired(): boolean {
    if (!this.token) {
      return true;
    }
    return this.helper.isTokenExpired(this.token);
  }

  setLoggedUserFromLocalStorage(login: string): void {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(username: string): void {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }
}