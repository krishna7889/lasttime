import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AllapiserviceService } from './allapiservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private allser:AllapiserviceService,
    private route:Router
  ){

  }
  canActivate():boolean {
    if(this.allser.getlogedin()){
     return true
    }
    else{
      this.route.navigate(['login'])
      return false
     
    }
  
  }
  
}
