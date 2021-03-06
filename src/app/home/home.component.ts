import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;
	
  constructor(private _router : Router){    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Person Details","routerLink":"healthapp/core/person-details","selected":false}]}]; }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
