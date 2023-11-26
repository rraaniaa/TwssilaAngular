import { Component, OnInit } from '@angular/core';
import { CovoiturageService } from '../../covoiturage.service';
import { cov } from 'src/app/cov';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
   ok: any ;
   ok2: any;
   ok3:any;
  constructor(private CovoiturageService: CovoiturageService) {}


  ngOnInit(): void {
    this.getCovoiturages();
    console.log(this.ok);
    this.getReservation() ;
    this.getReservationAnnuled() ;
  }

  private getCovoiturages() {
    this.CovoiturageService.counts().subscribe(data => {
      this.ok = data;
    });
  }
  private getReservation() {
    this.CovoiturageService.counts2().subscribe(data => {
      this.ok2 = data;
    });
  }

  private getReservationAnnuled() {
    this.CovoiturageService.counts3().subscribe(data => {
      this.ok3 = data;
    });
  }
}
