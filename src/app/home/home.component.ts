import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headlines: any[] = [];
  totalResults: number = 0;  // Inicialización con valor por defecto
  pageSize: number = 12;
  pageIndex: number = 0;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadHeadlines();
  }

  loadHeadlines(page: number = 1): void {
    this.newsService.getTopHeadlines(page, this.pageSize).subscribe(data => {
      this.headlines = data.articles;
      this.totalResults = data.totalResults;
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.loadHeadlines(this.pageIndex + 1);
  }

  handleImageError(event: any) {
    event.target.src = '../assets/imgnodisponible.jpg'; // Ruta a una imagen de reemplazo
  }
  
}
