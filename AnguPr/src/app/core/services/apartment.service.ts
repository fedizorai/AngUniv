import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Apartment } from '../../core/models/Apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  private apartments: Apartment[] = [
    { apartNum: 1, floorNum: 2, surface: 120, terrace: true, surfaceterrace: 30, category: 'T3', ResidenceId: 1 },
    { apartNum: 2, floorNum: 3, surface: 150, terrace: true, surfaceterrace: 50, category: 'T4', ResidenceId: 1 },
    { apartNum: 3, floorNum: 1, surface: 80, terrace: false, surfaceterrace: 0, category: 'T2', ResidenceId: 2 },
    // D'autres appartements...
  ];

  constructor() {}

  // Méthode pour récupérer tous les appartements
  getApartments(): Observable<Apartment[]> {
    return of(this.apartments);
  }

  // Méthode pour récupérer un appartement par son apartNum
  getApartmentById(id: number): Apartment | undefined {
    return this.apartments.find(apartment => apartment.apartNum === id);
  }
  

  getApartmentsByResidence(residenceId: number): Observable<Apartment[]> {
    return of(this.apartments.filter(a => a.ResidenceId === residenceId));
  }

  // Méthode pour ajouter un nouvel appartement
  addApartment(apartment: Apartment): Observable<void> {
    this.apartments.push(apartment); // Ajouter l'appartement à la liste
    return of(); // Simuler une réponse asynchrone
  }

  // Méthode pour mettre à jour un appartement
  updateApartment(apartNum: number, updatedApartment: Apartment): Observable<void> {
    const index = this.apartments.findIndex(a => a.apartNum === apartNum);
    if (index !== -1) {
      this.apartments[index] = { ...this.apartments[index], ...updatedApartment }; // Mise à jour de l'appartement
    }
    return of(); // Simuler une réponse asynchrone
  }

  // Méthode pour supprimer un appartement
  deleteApartment(apartNum: number): Observable<void> {
    this.apartments = this.apartments.filter(a => a.apartNum !== apartNum); // Supprimer l'appartement
    return of(); // Simuler une réponse asynchrone
  }
}
