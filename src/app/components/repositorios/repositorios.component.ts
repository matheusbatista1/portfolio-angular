import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriosService } from '../../service/repositorios/repositorios.service';

@Component({
  selector: 'app-repositorios',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss']
})
export class RepositoriosComponent implements OnInit {
  repositorios: any[] = [];

  constructor(private repositoriosService: RepositoriosService) { }

  ngOnInit(): void {
    this.repositoriosService.getRepositorios().subscribe(
      repositorios => {
        this.repositorios = repositorios;
      },
      error => {
        console.error('Erro ao carregar repositórios:', error);
      }
    );
  }
}
