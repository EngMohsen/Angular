import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppPage } from 'e2e/src/app.po';
import { MetaData } from '../model/metaData';
import { ParameterData } from '../model/parameters';
import { System } from '../model/system';
import { Types } from '../model/types';
import { SystemService } from '../service/system.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {





  constructor() { }

  ngOnInit(): void {
    
  }


}
