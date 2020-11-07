import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  
  constructor(private dishservice: DishService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
     this.dishservice.getDishes()
      .subscribe((dishes) => this.dishes = dishes);
  }

}
