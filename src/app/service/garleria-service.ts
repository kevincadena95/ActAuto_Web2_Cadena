import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GarleriaService {
    private http = inject(HttpClient);

    private apiUrl = 'https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&limit=20&fields=id,title,creators,images';

    obtenerProductos() {
        return this.http.get<any>(this.apiUrl);
    }
}