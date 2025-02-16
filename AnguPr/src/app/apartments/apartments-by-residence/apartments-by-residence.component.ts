import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../../core/models/Apartment';
import { ApartmentService } from '../../core/services/apartment.service';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  apartments: Apartment[] = [];
  residenceId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService // Service pour obtenir les appartements
  ) {}

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id')); // Récupère l'ID de la résidence à partir de l'URL
    this.getApartmentsByResidenceId();
  }

  getApartmentsByResidenceId(): void {
    this.apartmentService.getApartmentsByResidence(this.residenceId).subscribe((apartments: Apartment[]) => {
      this.apartments = apartments;
    });
  }
}
