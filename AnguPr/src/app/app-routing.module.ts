import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { ApartmentsComponent } from './apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentDetailsComponent } from './apartments/apartment-details/apartment-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil par défaut
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent }, // Détails d'une résidence avec ID
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments/:id', component: ApartmentDetailsComponent },
  { path: 'residences/:id/apartments', component: ApartmentsByResidenceComponent }, // Liste des appartements d'une résidence
  { path: 'add-apartment', component: AddApartmentComponent },
  { path: 'update-residence/:id', component: AddResidenceComponent },
  { path: 'apartments/add', component: AddApartmentComponent },
  { path: 'apartments-by-residence/:id', component: ApartmentsByResidenceComponent },
  { path: '**', component: NotFoundComponent } // Gestion des routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
