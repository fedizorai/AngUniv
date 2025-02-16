import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Residence } from '../../core/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residence: Residence = { id: 0, name: '', address: '', image: '', status: '' };
  isEditMode: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Vérifie si on est en mode édition (mise à jour) ou création
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.isEditMode = true;
        this.residence = this.getResidenceById(id); // Récupère la résidence existante
      }
    });
  }

  // Fonction pour simuler la récupération d'une résidence existante
  getResidenceById(id: number): Residence {
    const listResidences: Residence[] = [
      { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/R1.jpeg', status: 'Disponible' },
      { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/R2.jpeg', status: 'En Construction' },
      { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/R3.jpeg', status: 'Vendu' },
      { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/R4.jpeg', status: 'Vendu' }
    ];

    return listResidences.find(res => res.id === id)!;
  }

  // Méthode pour enregistrer la résidence (ajout ou mise à jour)
  saveResidence(): void {
    if (this.isEditMode) {
      alert(`Mise à jour de la résidence: ${this.residence.name}`);
    } else {
      alert(`Ajout d'une nouvelle résidence: ${this.residence.name}`);
    }
    this.router.navigate(['/residences']); // Redirection vers la page des résidences
  }
}
