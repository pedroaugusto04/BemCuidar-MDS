import { AfterViewInit, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import { MatSnackBar } from '@angular/material/snack-bar';
import '@geoman-io/leaflet-geoman-free';
import { ServiceProvider } from '../../models/ServiceProvider';
import { ViewServiceProviderService } from '../view-service-provider/services/view-service-provider.service';

@Component({
  selector: 'app-leaflet',
  standalone: true,
  imports: [],
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LeafletComponent implements OnInit, AfterViewInit {
  hasAddress: boolean = false;
  private map!: L.Map;
  markers: L.Marker[] = [
    L.marker([-19.4650, -42.5380]) // centraliza inicialmente em Ipatinga
  ];
  defaultIcon: string = "assets/imgs/map-profile-icon.svg";
  @Input({ required: true }) mapId!: string;
  @Input() canClick: boolean = false;
  @Input() height: string = '30rem';  
  @Input() width: string = '50rem';   

  constructor(private snackBar: MatSnackBar, private viewServiceProviderService: ViewServiceProviderService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.initMap();
    this.centerMap();
  }

  private initMap() {
    const baseMapURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.map = L.map(this.mapId);
    L.tileLayer(baseMapURL).addTo(this.map);
  }

  private centerMap() {
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));
    this.map.fitBounds(bounds);
  }

  addMarker(latitude: number, longitude: number, provider?: ServiceProvider) {
    const marker = L.marker([latitude, longitude], {
      icon: L.icon({
        iconUrl: this.defaultIcon,
        iconSize: [40, 70],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
      })
    }).addTo(this.map);

    if (provider && provider.name != null) {
      marker.bindPopup(`${provider.name}`, {
        autoClose: false,
        closeButton: false,
        closeOnClick: false,
      }).openPopup();
    }

    marker.on('click', (e) => {
      e.target.openPopup();
      this.onMarkerClick(provider!);
    });

    this.hasAddress = true;
  }

  setView(latitude: number, longitude: number, scale: number){
    this.map.setView([latitude, longitude], scale);
  }

  // limpa todos os marcadores
  clearMarkers() {
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer); 
      }
    });
  }

  onMarkerClick(provider: ServiceProvider): void {
    if (this.canClick){
      this.viewServiceProviderService.openDialog(provider);  
    }
  }
}
