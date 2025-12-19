import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../../../../core/services/partidos/partidos.service';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-arbitro-page',
  templateUrl: './arbitro-page.html',
  styleUrl: './arbitro-page.scss',
})
export class ArbitroPage implements OnInit {
  partidos: any[] = [];

  constructor(private partidoService: PartidoService, private authService: AuthService) {}

  ngOnInit() {
    const arbitroId = this.authService.getUserId(); // ID del árbitro logueado
    console.log('Arbitro ID:', arbitroId); // Verifica que el ID esté bien
    if (arbitroId) {
      this.partidoService.getPartidosByArbitro(arbitroId).subscribe((partidos: any[]) => {
        // aquí tipamos explícitamente
        console.log('Partidos recibidos:', partidos); // Verifica los partidos
        this.partidos = partidos;
      });
    } else {
      console.error('No se encontró el ID del árbitro.');
    }
  }
}
