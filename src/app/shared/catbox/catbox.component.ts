import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { I18nService } from '../../core/i18n.service';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { KittiesService } from '../kitties.service';
import { Kitty } from '../models/kitty.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'cat-box',
  templateUrl: './catbox.component.html',
  styleUrls: ['./catbox.component.scss']
})
export class CatBoxComponent implements OnInit {

  constructor(private router: Router,
              private i18nService: I18nService,
              private authenticationService: AuthenticationService, 
              private kittiesService: KittiesService) { }

  isLoading: boolean;

  ngOnInit() { }

  showToDo() {
    alert("Still ToDo");
  }

  breed() {
    if (this.authenticationService.isAuthenticated())
    {
      alert("Breed Cat code here");
    }
    else
    {
      alert("You need to login to perform this action");
      this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
    }
  }
  buy() {
    if (this.authenticationService.isAuthenticated())
    {
      alert("Buy Cat code here");
    }
    else
    {
      alert("You need to login to perform this action");
      this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
    }
  }
  reserve(cat: object) {
     this.kittiesService.setCurrentKitty(cat);
  }

  kittyImage(kitty_id:number) {
    return environment.serverUrl + "/image/" + kitty_id;
  }

  removeDetails() {
    this.cat.details = false;
  }

  getDetails(kitty_id: number) {
    this.kittiesService.getDetails({ kitty_id: kitty_id })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((details: object) => { 
        this.cat.details = details; 
      });
  }


  @Input() cat: Kitty;
  @Input() action: string = 'buy';
}

