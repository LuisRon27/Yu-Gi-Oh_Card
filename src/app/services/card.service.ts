import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { card } from '../interfaces/card.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CardService {
  API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  constructor( private http: HttpClient) { }

  getCard(name: string | null, offset = 0){
    const params: any = {
      num: 100,
      offset
    };
    if (name) params.fname = name;
    return this.http.get<card[]>(this.API_URL, { params }).pipe(
      map( (res: any) => res.data)
    )
  }

  getCardId(id: string){
    const params = { id };
    return this.http
    .get(this.API_URL, {params})
    .pipe(map( (res: any) => res.data[0]));
  }
}
