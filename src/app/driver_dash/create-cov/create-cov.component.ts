import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

import { cov } from '../../cov';
import { CovoiturageService } from '../../covoiturage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-cov',
  templateUrl: './create-cov.component.html',
  styleUrls: ['./create-cov.component.css']
})

export class CreateCovComponent implements OnInit {

  prodForm: FormGroup; 
  driverId: number = 1;

  constructor(
    private formBuilder: FormBuilder,
    private CovoiturageService: CovoiturageService,
    private router: Router
  ) {
    
    this.prodForm = this.formBuilder.group({
      depart: ['', Validators.required], 
      destination: ['', Validators.required], 
      description: ['', Validators.required], 
      date: ['', Validators.required], 
      phone: ['', Validators.required], 
      marque:['', Validators.required], 
      bagage: ['', Validators.required], 
      place: ['', [Validators.required, Validators.min(1)]], 
      price: ['', [Validators.required, Validators.min(0), Validators.max(1000)]], 
    });
  }

  ngOnInit(): void {
  }

  saveCovoiturage() {
    const covoiturageData = { ...this.prodForm.value, iddriver: this.driverId };

    this.CovoiturageService.createCovoiturage(covoiturageData).subscribe(
      data => {
        console.log(data);
        this.goToECovoiturageList();
      },
      error => console.log(error)
    );
  }
  

  goToECovoiturageList() {
    this.router.navigate(['/list']);
  }

  onSubmit() {
   // if (this.prodForm.valid) {
      console.log(this.prodForm.value)
      this.saveCovoiturage();
    //}
  }
}