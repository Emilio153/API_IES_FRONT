import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {
  alumnoService = inject(AlumnoService);
  alumnos: Alumno[] = [];

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => this.alumnos = data,
      error: (err) => console.error('Error fetching alumnos', err)
    });
  }
}
