import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../../core/services/apartment.service';
import { Apartment } from '../../core/models/Apartment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  apartments: Apartment[] = [];

  constructor(private apartmentService: ApartmentService, private router: Router) { }

  ngOnInit(): void {
    this.getApartments();  // Charger la liste des appartements au démarrage du composant
  }

  // Méthode pour récupérer la liste des appartements
  getApartments(): void {
    this.apartmentService.getApartments().subscribe(apartments => {
      this.apartments = apartments;
    });
  }

  // Méthode pour accéder aux détails d'un appartement
  viewApartmentDetails(apartment: Apartment): void {
    this.router.navigate(['/apartments', apartment.apartNum]);  // Naviguer vers les détails de l'appartement
  }
}
