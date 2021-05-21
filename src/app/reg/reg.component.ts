import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllapiserviceService } from '../allapiservice.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  registerForm!: FormGroup;
  submitted=false;
  empList: Array<{Email:string}> = [];
  emails: any;
  password:any;
  role:any
  

  constructor(private formBuilder:FormBuilder,private route:Router,
    private allapi:AllapiserviceService,) {

   }

   ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
        role: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    }, 
    );
}
get f() { return this.registerForm.controls; }
onSubmit(){
  this.submitted=true;
  if(this.registerForm.invalid){
    return
  }
  else{
    let body={
      email:this.emails,
      password:this.password,
      role:this.role
    }
    this.allapi.regs(body).subscribe(r=>{
      if(r){
        this.route.navigate(['login'])
      }
    })
     
  }
   }
}
