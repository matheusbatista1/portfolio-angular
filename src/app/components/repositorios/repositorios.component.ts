import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriosService } from '../../service/repositorios/repositorios.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-repositorios',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss']
})
export class RepositoriosComponent implements OnInit {
  repositorios: any[] = [];
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private repositoriosService: RepositoriosService) { }

  ngOnInit(): void {
    this.carregarRepositorios();
  }

  carregarRepositorios(): void {
    this.repositoriosService.getRepositorios().subscribe(
      repositorios => {
        this.repositorios = repositorios;
      },
      error => {
        console.error('Erro ao carregar repositórios:', error);
      }
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.scrollToTop();
  }

  scrollToTop(): void {
    const container = document.getElementById('repositorios-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  get repositoriosPaginados(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.repositorios.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getPaginationArray(): number[] {
    const pageCount = Math.ceil(this.repositorios.length / this.itemsPerPage);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }
}
