import { Component, inject, signal } from '@angular/core';
import { GarleriaService } from '../service/garleria-service';

@Component({
  selector: 'app-galeria',
  imports: [],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria {
  private galeriaService = inject(GarleriaService);
  productos = signal<any[]>([]);

  ngOnInit() {
    this.galeriaService.obtenerProductos().subscribe(data => {
      this.productos.set(data.data);
    });
  }
}