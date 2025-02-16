import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../../core/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  // Liste des résidences simulée
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/R1.jpeg', status: 'Disponible' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/R2.jpeg', status: 'En Construction' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/R3.jpeg', status: 'Vendu' },
    { id: 4, name: 'El Anber', address: 'inconnu', image: '../../assets/R4.jpeg', status: 'Vendu' }
  ];

  residence!: Residence | undefined;
  currentIndex!: number;

  // Déclarer router comme public
  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    // Récupérer l'id de la résidence à partir de l'URL
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Convertir l'id en nombre
      if (isNaN(id)) {
        console.error('ID invalide');
        return;
      }

      // Trouver la résidence correspondante dans la liste
      this.residence = this.listResidences.find(res => res.id === id);
      if (!this.residence) {
        console.error('Résidence non trouvée');
        return;
      }

      // Trouver l'index de la résidence dans la liste pour la navigation
      this.currentIndex = this.listResidences.indexOf(this.residence);
    });
  }

  // Fonction pour naviguer vers la résidence suivante
  nextResidence(): void {
    if (this.currentIndex < this.listResidences.length - 1) {
      const nextResidence = this.listResidences[this.currentIndex + 1];
      this.router.navigate(['/residences', nextResidence.id]);
    }
  }

  // Fonction pour naviguer vers la résidence précédente
  previousResidence(): void {
    if (this.currentIndex > 0) {
      const previousResidence = this.listResidences[this.currentIndex - 1];
      this.router.navigate(['/residences', previousResidence.id]);
    }
  }

  // Fonction pour afficher l'image correctement
  getImagePath(image: string): string {
    return image; // Ajouter un chemin d'accès plus complet si nécessaire
  }
}
