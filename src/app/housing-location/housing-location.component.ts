import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import {RouterModule} from '@angular/router'
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <section>
       <img class="listing-photo" [src]="housingLocation.photo">
       <h2 class="listing-heading">{{housingLocation.name}}</h2>
       <p></p>
       <p class="listing-location">{{housingLocation.city}},{{housingLocation.state}}</p>
       <a [routerLink]="['/details',housingLocation.id]" >See more</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!:HousingLocation //recuper les donnees envoyees par le parent component a travers le decorateur input 
}
