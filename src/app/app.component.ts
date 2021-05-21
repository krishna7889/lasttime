import { Component, OnInit } from '@angular/core';
import { AllapiserviceService } from './allapiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  base!: boolean;
  constructor(public allser:AllapiserviceService,
    ) {}
    ngOnInit(){
    }
}
