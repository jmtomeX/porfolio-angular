import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  BASE_PATH = AppSettings.API_MESSAGE;

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }
  sendMessage(body) {
    return this._http.post(this.BASE_PATH, body);
  }
}
