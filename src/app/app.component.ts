import { Component , ViewChild ,AfterViewInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { user } from './models/user-model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CommunicationService } from './services/communication.service';
import {CartComponent} from './components/cart/cart.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild (CartComponent) Cart;

  title = 'Project-Frontend';
  userLoaded;
  user: user;
  cartCount;
  constructor(private router: Router, private _userService: UsersService, private cookie: CookieService,  private communicationService: CommunicationService) {
    communicationService.changeEmitted$.subscribe(data => {
      this.cartCount = data;
      // here fetch data from the session storage 
    });
  }


  ngOnInit(): void {
    try {
      this._userService.getUser()
        .subscribe(
          res => {
            this.initializeUser(res);
            this.userLoaded = true;
          },
          err => {
            this.userLoaded = false;
          }
        )
    }
    catch{
    }
  }

  initializeUser(response) {
    this.user = new user();
    this.user = response;
    this.cartCount = this.user.products.length;
  }

  toggleDropdown() {
    var dropDownIcon = document.querySelector("#dropDownIcon");
    if (dropDownIcon.classList.contains("fa-angle-up")) {
      dropDownIcon.classList.remove("fa-angle-up");
      dropDownIcon.classList.add("fa-angle-down");
      return;
    }
    
    dropDownIcon.classList.remove("fa-angle-down");
    dropDownIcon.classList.add("fa-angle-up");
  }

  async onLogout() {
    this.cookie.delete('token');
    await this.router.navigate([`home`, {}]);
    window.location.reload();
  }
}
