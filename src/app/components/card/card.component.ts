import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { card } from 'src/app/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  implements OnInit {

  @Input() Card!: card;

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  goToCard(){
    this.router.navigate([`card/${this.Card.id}`])
  }
}
