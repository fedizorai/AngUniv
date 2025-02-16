import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {
  listResidences: Residence[] = [
    { id: 1, name: 'El Fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpg', status: 'Disponible' },
    { id: 2, name: 'El Yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpg', status: 'Disponible' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/images/R4.jpg', status: 'En Construction' }
  ];

  showAddressMap: { [id: number]: boolean } = {};
  favorites: Residence[] = [];
  searchAddress: string = '';

  constructor() { }

  ngOnInit(): void { }

  onShowLocation(residence: Residence): void {
    if (residence.address.toLowerCase() === 'inconnu') {
      alert(`L'adresse de la résidence ${residence.name} est inconnue`);
    } else {
      this.showAddressMap[residence.id] = !this.showAddressMap[residence.id];
    }
  }

  onLike(residence: Residence): void {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
    }
  }
}
