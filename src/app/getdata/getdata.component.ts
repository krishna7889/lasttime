import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllapiserviceService } from '../allapiservice.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  constructor(
    private allapi: AllapiserviceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.allapi.getdata().subscribe(r => {
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.route.navigate(['login'])
        }
      }
    })
  }

}
