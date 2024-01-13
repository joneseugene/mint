import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {
  property: any ={
    "id": 1,
    "image": "../../../../assets/img/info.jpg",
    "name": "Big Mansion",
    "type": "House",
    "cost": 12000.00
  }
}
