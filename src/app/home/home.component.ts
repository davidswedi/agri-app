import { Component , Inject, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  template: `
    <section>
     <form>
         <input type="text" placeholder="Filter by city">
         <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
    <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"> <!-- iterer sur la liste des locations avec la directive ngfor et envoyer les donnes au composant enfant hoising location -->
    </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //initialistation tu tableau housingLocationList a un tableau vide 
  housingLocationList:HousingLocation[] = [];
  //recuper les donnees de la classe HousingService dans la propriete housing Service a l'aide l'injection
  housingService : HousingService = inject(HousingService);
  
  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();//affecter les listes de toutes les locations a partir de la methode getAllHousingLocations() de la classe housingSercive
  }
} 
