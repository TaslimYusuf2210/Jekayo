import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  saveData(key:string, value:string){
    localStorage.setItem(key, JSON.stringify(value)), FormData
  }

  getData(key:string){
    return JSON.parse(localStorage.getItem(key) !)
  }
}
