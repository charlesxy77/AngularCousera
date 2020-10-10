import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES: Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    //tslint:disable-next-line:max-line-lenght
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description:'Deep frird Zucchini coated with mildly spiced Chickpea floue batter accompanied with a sweet-tangy tamarind sauce'
  },
  {
    id: '2',
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    description:'A quintessential ConFusion experience , Is it vada or is it a donut?'
  },
  {
    id: '3',
    name: 'Elaicheese Cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description:'A delectable, semi-sweet New York Cheese Cake, with Graham craker crust and spiced with Indian cardamons'
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;
  
  selectedDish: Dish = DISHES[0];

  constructor() { }

  ngOnInit() {
  }

}
