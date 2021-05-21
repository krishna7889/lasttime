import { Component, OnInit } from '@angular/core';
import { AllapiserviceService } from '../allapiservice.service';

@Component({
  selector: 'app-aduit',
  templateUrl: './aduit.component.html',
  styleUrls: ['./aduit.component.css']
})
export class AduitComponent implements OnInit {
  auditdata!: any;

  constructor(
    private allapi: AllapiserviceService
  ) { }

  ngOnInit(): void {
    this.allapi.getaudit().subscribe(r => {
      if (r) {
        this.auditdata = r
      }
    })
  }

}
