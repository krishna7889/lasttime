import { Injectable } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AllapiserviceService {

  constructor(private http:HttpClient,private route:Router) { }

  regs(body:any){
    return this.http.post("http://localhost:4000/api/reg",body)
  }
  getdata(){
    return this.http.get("http://localhost:4000/api/get")
  }
  login(body:any){
    return this.http.post<any>("http://localhost:4000/api/login",body)
  }
  getlogedin(){
    return !!localStorage.getItem('token')
  }
  gettoken(){
    return localStorage.getItem('token')
  }

  logout(){
    this.route.navigate(['login'])
    return localStorage.removeItem('token')
  }
  getaudit(){
    return this.http.get("http://localhost:4000/api/audit")
  }
}
