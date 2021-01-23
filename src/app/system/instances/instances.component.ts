import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { System } from 'src/app/model/system';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
  styleUrls: ['./instances.component.css']
})
export class InstancesComponent implements OnInit {

  instances: System[] = [];

  constructor(private route: ActivatedRoute,
    private systemService: SystemService,
    private router: Router) { }

  ngOnInit(): void {
    this.instances = this.systemService.loadInstanceDetails();
  }

}
