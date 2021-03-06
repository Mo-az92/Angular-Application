import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish!: Dish;
  dishErrMess!: string;
  promErrMess!: string;
  leadErrMess!: string;
  promotion!: Promotion;
  leader!: Leader;
  

  constructor(private dishService: DishService, private promotionService: PromotionService, private leaderService: LeaderService,
              @Inject('BaseURL') private BaseURL:string) { }

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish, errmess => this.dishErrMess = <any>errmess );
    this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion, errmess => this.promErrMess = <any>errmess);
    this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader, errmess => this.leadErrMess = <any>errmess);

  }

}
