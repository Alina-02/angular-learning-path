import { ListingComponent } from './listing/listing.component';
import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      <!-- This article element represents and entire listing -->
      @for (car of carList; track $index) { <app-listing [car]="car" />}
      <!-- end car listing markup -->
    </section>
  `,
  styles: [],
  imports: [ListingComponent],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
}
