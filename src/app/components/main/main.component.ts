import { Component } from '@angular/core';
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
    this.informationService.determineGender(this.name).subscribe((data: any) => {
      this.genderData = data;
    });

    this.informationService.determineNationality(this.name).subscribe((data: any) => {
      this.nationalityData = data;
    });
  }
}
