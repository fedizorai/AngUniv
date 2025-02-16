import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentService } from '../../core/services/apartment.service';
import { Apartment } from '../../core/models/Apartment';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
  apartment: Apartment | undefined;

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'appartement depuis l'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apartment = this.apartmentService.getApartmentById(id);
  }
}
