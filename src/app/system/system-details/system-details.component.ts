import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { System } from 'src/app/model/system';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-system-details',
  templateUrl: './system-details.component.html',
  styleUrls: ['./system-details.component.css']
})
export class SystemDetailsComponent implements OnInit {

  systemName = '';
  systemDetails!: System;

  constructor(private route: ActivatedRoute,
    private systemService: SystemService,
    private router: Router) { }

  ngOnInit(): void {
    this.systemName = this.systemService.getSystemName();
    this.systemService.loadSystemDetailsByName(this.systemName).subscribe(
      data => {
        this.systemDetails = data;
      }
    )
  }

  isNumber(val: any) {
    return typeof val === 'number';
  }

  isString(val: any) {
    return typeof val === 'string';
  }
  displayObjectType(val: any) {
    console.log(typeof val)
  }


}
