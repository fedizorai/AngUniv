import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../../core/services/apartment.service';
import { Apartment } from '../../core/models/Apartment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {

  apartment: Apartment = {
    apartNum: 0,
    floorNum: 1,
    surface: 0,
    terrace: false,
    surfaceterrace: 0,
    category: '',
    ResidenceId: 1
  };

  constructor(private apartmentService: ApartmentService, private router: Router) { }

  ngOnInit(): void {}

  // Méthode pour soumettre le formulaire d'ajout
  onSubmit(): void {
    this.apartmentService.addApartment(this.apartment).subscribe(() => {
      this.router.navigate(['/apartments']);  // Redirige vers la liste des appartements
    });
  }
}
