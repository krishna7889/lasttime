import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { AllapiserviceService } from './allapiservice.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  constructor(
    private injector:Injector,
  ) { }

  intercept(req:any,next:any){
    let allser=this.injector.get(AllapiserviceService)
    let tokenized=req.clone({
      setHeaders:{
        Authorization:`Bearer ${allser.gettoken()}` 
      }
    })
    return next.handle(tokenized)
  }
}
