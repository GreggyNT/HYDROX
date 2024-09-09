import { Component, OnInit } from '@angular/core';
import { YMapComponent, YMapDefaultSchemeLayerDirective } from 'angular-yandex-maps-v3';

declare var ymaps:any;
@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [ YMapComponent, YMapDefaultSchemeLayerDirective],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css'
})
export  class  MapComponentComponent implements OnInit {
  public map :any;
  ngOnInit() {
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [54.087796, 28.297121],
        zoom: 17,
        type:'yandex#map'
      });
      this.map.controls.remove('typeSelector');
      this.map.controls.remove('fullscreenControl');
      this.map.controls.remove('rulerControl');
      const placemark = new ymaps.Placemark( [54.087796, 28.29690], {
        balloonContent: 'Hydrox'
      }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      });
      this.map.geoObjects.add(placemark);
    });
    
  }
}
