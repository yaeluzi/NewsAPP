import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'ea892933f5374576beb63488b694c6ff';
  private apiUrl = 'https://newsapi.org/v2/';

  constructor(private http: HttpClient) {}

  getTopHeadlines(page: number, pageSize: number): Observable<any> {
    const url = `${this.apiUrl}top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=${this.apiKey}`;
    console.log('URL de solicitud:', url);
    return this.http.get(url);
  }

  searchArticles(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}everything?q=${query}&apiKey=${this.apiKey}`);
  }
}
