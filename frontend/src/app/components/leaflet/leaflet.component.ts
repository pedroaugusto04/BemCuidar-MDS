import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';
import { Map,FeatureGroup, Layer, latLng, tileLayer, Marker, MarkerOptions } from 'leaflet';
import { LeafletService } from './services/leaflet.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import '@geoman-io/leaflet-geoman-free';

@Component({
  selector: 'app-leaflet',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './leaflet.component.html',
  styleUrl: './leaflet.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LeafletComponent {

  layers: Layer[] = [];
  optionFalse: false = false;
  marker!: Marker;
  markerOptions: MarkerOptions;
  map!: Map
  
  @Input() title: string = 'Insert Address / Coverage Area:'
  @Input() height: number = 400;
  @Input() width: number = 400;
  @Input() insertPoint: boolean = true;
  goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  constructor(private leafletService: LeafletService, private snackBar: MatSnackBar) {
    this.markerOptions = {
      icon: this.blueIcon
    }
  }
  processMapData(form: FormGroup) {
    this.isMapReadyToSearch();
    this.clearPoints();

    this.processMapPoint(form);
  }

  processMapPoint(form: FormGroup) {
    this.isMapReady();
    let point = {
      "type": "Point",
      "coordinates": [this.marker.getLatLng().lng, this.marker.getLatLng().lat]
    }

    var pointGeoJson = JSON.stringify(point);

    form.patchValue({ 'address': pointGeoJson });
  }

  //  main configs 
  options = {
    layers: [
      tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      })
    ],
    zoom: 4,
    center: latLng(46.879966, -121.726909)
  }

  drawOptions = {
    draw: {
      marker: {
        icon: this.blueIcon
      }
    },
  };

  public onDrawCreated(e: any) {

  }

  layersControl = {
    baseLayers: {
      'googleStreets': tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }),
      'googleSatellite': tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }),
    },
    overlays: {
    }
  }

  // search bar
  onMapReady(map: Map) {
    this.map = map;
    const SearchControl = L.Control.extend({
      onAdd: () => {
        let container = L.DomUtil.create('div', 'search-address');
        let form = L.DomUtil.create('form', 'form-address', container);
        let input = L.DomUtil.create('input', 'input-address', form);
        let submit = L.DomUtil.create('button', 'button-address', form);
        submit.innerHTML = 'Search';
        input.placeholder = "City/District/Street/Number";

        L.DomEvent.addListener(form, 'submit', (event) => {
          event.preventDefault();
          let address = input.value;
          this.processAddress(address, map);
        });

        L.DomEvent.disableClickPropagation(container);
        return container;
      },
    });
    const searchControl = new SearchControl();
    map.addControl(searchControl);
  }

  // open street map search address
  processAddress(address: string, map: Map) {
    if (this.insertPoint) {
      this.clearPoints();
      this.leafletService.processAddress(address).subscribe({
        next: (response: any) => {
          let lat = parseFloat(response[0].lat);
          let lon = parseFloat(response[0].lon);
          map.setView([lat, lon], 12);
          if (this.marker) {
            map.removeLayer(this.marker);
          }
          this.marker = L.marker([lat, lon], this.markerOptions).addTo(map);
          this.marker.bindPopup(`${address}`);
        },
        error: () => {
          this.onError();
        }

      })
    } else {
      this.leafletService.processAddress(address).subscribe({
        next: (response: any) => {
          let lat = parseFloat(response[0].lat);
          let lon = parseFloat(response[0].lon);
          map.setView([lat, lon], 12);
        },
        error: () => {
          this.onError();
        }
      })
    }
  }


  isMapReadyToSearch(): void {
    this.isMapReady();
    if (!this.marker) {
      let error = new Error("No address selected");
      this.onMapError(error.message);
      throw error;
    }
  }

  isMapReady(): void {
    if (!this.map) {
      let error = new Error("Map is loading. Please wait.");
      this.onMapError(error.message);
      throw error;
    }
  }

  clearPoints() {
    this.map.eachLayer(layer => {
      if (layer instanceof L.Marker && layer !== this.marker) {
        if (this.map.getBounds().contains(layer.getLatLng())) {
          this.map.removeLayer(layer);
        }
      }
    })
  }

  onError() {
    this.snackBar.open("Error searching address", '', { duration: 4000 });
  }

  onMapError(messageError: string) {
    this.snackBar.open(messageError, '', { duration: 4000 });
  }
}
