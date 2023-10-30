import { Component, OnInit } from '@angular/core';
import { CovoiturageService } from '../covoiturage.service';
import { Router } from '@angular/router';
import { cov } from '../cov';

@Component({
  selector: 'app-list-cov',
  templateUrl: './list-cov.component.html',
  styleUrls: ['./list-cov.component.css']
})
export class ListCovComponent implements OnInit {
  covs: any;
  nom!: string;
  searchText = '';

  constructor(private CovoiturageService: CovoiturageService, private router: Router) {}

  ngOnInit(): void {
    this.getCovoiturages();
  }

  private getCovoiturages() {
    this.CovoiturageService.getCovoituragesList().subscribe(data => {
      this.covs = data;
    });
  }

  updateCovoiturage(id: number) {
    this.router.navigate(['Update-cov', id]);
  }

  deleteCovoiturage(id: number) {
    this.CovoiturageService.deleteCovoiturage(id).subscribe(data => {
      console.log(data);
      this.getCovoiturages(); // Correction ici
    });
  }

  getCovoituragesbyNom() {
    this.CovoiturageService.getCovoituragetByNom(this.nom).subscribe(data => {
      this.covs = data;
    });
  }
}
