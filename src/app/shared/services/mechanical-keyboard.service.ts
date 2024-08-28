import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MechanicalKeyboard } from '../models/mechanical-keyboard.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MechanicalKeyboardService {

  KEYBOARD_API = 'http//localhost:3000/keyboards';

  constructor(private httpClient: HttpClient) {}

  create(kb: MechanicalKeyboard): Observable<MechanicalKeyboard> {
    return this.httpClient.post<MechanicalKeyboard>(this.KEYBOARD_API, kb);
  }

  read(): Observable<MechanicalKeyboard[]> {
    return this.httpClient.get<MechanicalKeyboard[]>(this.KEYBOARD_API)
  }
  
  update(kb: MechanicalKeyboard): Observable<MechanicalKeyboard> {
    return this.httpClient.put<MechanicalKeyboard>(`${this.KEYBOARD_API}/${kb.id}`, kb);
  }

  delete(kb: MechanicalKeyboard): Observable<MechanicalKeyboard> {
    return this.httpClient.delete<MechanicalKeyboard>(`${this.KEYBOARD_API}/${kb.id}`)
  }
}
