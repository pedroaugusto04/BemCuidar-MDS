import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import { MatSnackBar } from '@angular/material/snack-bar';
import '@geoman-io/leaflet-geoman-free';

@Component({
  selector: 'app-leaflet',
  standalone: true,
  imports: [],
  templateUrl: './leaflet.component.html',
  styleUrl: './leaflet.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LeafletComponent implements OnInit, AfterViewInit{
  hasAddress: boolean = false;
  private map!: L.Map
  markers: L.Marker[] = [
    L.marker([-19.4650, -42.5380]) // Centraliza inicialmente em Ipatinga, Minas Gerais, Brasil
];


  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.initMap();
    this.centerMap();
  }

  private initMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map');
    L.tileLayer(baseMapURl).addTo(this.map);
  }


  private centerMap() {
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));
    
    this.map.fitBounds(bounds);
  }

  addMarker(latitude: number, longitude: number) {
    // Remove os marcadores existentes 
    this.hasAddress = false;
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer); 
      }
    });
    const marker = L.marker([latitude, longitude], {
      icon: L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Caminho do ícone padrão
        iconSize: [25, 41], // Tamanho do ícone
        iconAnchor: [12, 41], // Posição do ponto de ancoragem
        popupAnchor: [1, -34], // Posição do popup
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png', // Sombra do ícone
        shadowSize: [41, 41] // Tamanho da sombra
      })
    }).addTo(this.map);
    this.map.setView([latitude, longitude], 13); 
    this.hasAddress = true;
  }
}
