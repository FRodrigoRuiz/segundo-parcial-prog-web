import { Component } from '@angular/core';
import { Gender } from 'src/app/models/gender';
import { Nationalize } from 'src/app/models/nationalize';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  name: string = '';
  genderData: any;
  nationalityData: any;

  constructor(private informationService: InformationService) { }

  onSubmit() {
    this.informationService.determineGender(this.name).subscribe((data: Gender) => {
      this.genderData = data;
    });

    this.informationService.determineNationality(this.name).subscribe((data: Nationalize) => {
      this.nationalityData = data;
    });
  }
}
