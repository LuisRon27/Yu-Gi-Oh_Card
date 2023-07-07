import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cards: card[] = [];
  offset = 0;
  cardTextFc = new FormControl('');

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardTextFc.valueChanges.pipe(
      debounceTime(1000)
    )
    .subscribe(res => {

      this.cards = [];
      this.searchCards(res);
    })
    this.searchCards();
  }

  onScroll() {

    this.offset += 100;
    this.searchCards();
  }

  searchCards(cardName: string | null = null) {
    this.cardService.getCard(cardName, this.offset).subscribe((res) => {

      this.cards = [...this.cards, ...res];
    });
  }
}
