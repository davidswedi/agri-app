import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router'
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
    <article>
        <img class="listing-photo" [src]="housingLocation?.photo"/>
        <section class="listing-descriptions">
             <h2 class="listing-heading">{{housingLocation?.name}}</h2>
             <p class="listing-location">{{housingLocation?.city}},{{housingLocation?.state}}</p>
        </section>
        <section class="listing-features">
           <h2 class="section-heading">About this location</h2>
           <ul>
            <li>Units Available :{{housingLocation?.availableUnits}}</li>
            <li>Does this house have Wifi :{{housingLocation?.wifi}}</li>
            <li>DOes this house have laundry : {{housingLocation?.laundry}}</li>
           </ul>
        </section>
        <section class="listing-apply">
          <h2 class="section-heading">Apply to live here</h2>
          <form  [formGroup]="applyForm" (submit)="applyApplication">
              <label for="firstName">FirstName</label>
              <input formControlName="firstName" type="text" id="first-Name">

              <label for="lastName">LastName</label>
              <input formControlName="lastName" type="text"  id="last-Name">

              <label for="email">email</label>
              <input formControlName="email" type="text"  id="email">

              <button type="submit" class="primary" >Apply now</button>
          </form>
        </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute)//recuppere les donnees de la route active 
  housingService = inject(HousingService) 
  housingLocation : HousingLocation | undefined 
  
  applyForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl('')
  })

  constructor(){
    const housingLocationId = Number(this.route.snapshot.params["id"])
    this.housingLocation = this.housingService.getHousingLocationId(housingLocationId)
  }
  applyApplication(){
    this.housingService.submitApplication(
      this.applyForm.value.firstName?? '',
      this.applyForm.value.lastName?? '',
      this.applyForm.value.email?? '',
    )
  }
}
