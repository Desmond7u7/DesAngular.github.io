import { Component } from '@angular/core';
import { WorkExperienceService } from '../services/work-experience-service/work-experience.service';
import { WorkExperience } from '../models/work-experience/work-experience.model';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common'; // Debe estar arriba de todo

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience: WorkExperience[] = []; // Es un arreglo vacío inicialmente

  constructor(public workExperienceService: WorkExperienceService) {
    this.workExperienceService.getWorkExperience().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.workExperience = data; // Se asignan todos los documentos al arreglo
      console.log(this.workExperience);
    });
  }
}