import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes'; 
bootstrapApplication(AppComponent,{
     providers:[
      provideRouter(routeConfig)  // definit le fichier qui contient toutes les routes de l'application 
     ]
}).catch(err => console.error(err));
