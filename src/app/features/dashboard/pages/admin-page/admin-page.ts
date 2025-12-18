import { Component } from '@angular/core';
import { PartidoService } from '../../../../core/services/partidos/partidos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage {

  newPartido = {
    deporte: 'futbol',
    equipo1:'',
    equipo2: '',
    fecha: '',
    arbitro: '',
    ubicacion: '',
  };

  deportes = [
    { value: 'futbol', label: 'Fútbol'},
    { value: 'baloncesto', label: 'Baloncesto'},
    { value: 'volley', label: 'Voleibol'}
  ]

  constructor(private partidoService: PartidoService) {}

  crearPartido() {
    this.partidoService.createPartido(this.newPartido).subscribe((partido) => {
      alert("Partido creado correctamente");
      console.log('Partido creado:', partido);
    });
  }
}
