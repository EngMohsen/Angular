import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  systemName = '';

  constructor(private route: ActivatedRoute,
    private systemService: SystemService,
    private router: Router) { }

  ngOnInit(): void {
    this.systemName = this.route.snapshot.params['name'];
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.systemName = params['name'];
        this.systemService.setSystemName(this.systemName);
      }
    )
  }


}
