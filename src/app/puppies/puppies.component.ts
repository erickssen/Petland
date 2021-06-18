import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';

import { PuppiesService } from './puppies.service';
import { Puppie } from './puppie.model';


@Component({
  selector: 'app-puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.css']
})
export class PuppiesComponent implements OnInit {

  puppie = new FormControl();
  puppies: Puppie[] = [];

  location = new FormControl();
  locationItems: string[] = ['All Locations', 'Pembroke Pines', 'Kendall', 'Plantation', 'Davie', 'Largo', 'Naples'];

  petType = new FormControl();
  petTypeItems: string[] = ['All Pet Types', 'Dogs', 'Cats'];

  gender = new FormControl();
  genderItems: string[] = ['Male', 'Female'];


  constructor(private puppiesService: PuppiesService) { }

  ngOnInit(): void {
      this.puppiesService.getPuppies()
      .subscribe(res => {
        this.puppies = res
      })
  }

}
