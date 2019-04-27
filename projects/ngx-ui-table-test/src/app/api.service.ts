import { Injectable } from '@angular/core';
import * as books from '../assets/mock/books.json';
import {of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  books = books.default;
  constructor() { }

  getBooks() {
    return of(this.books)
  }
}
