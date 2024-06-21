import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projetos = [
    {
      nome: 'Sistema de Cadastro COVID-19',
      descricao: 'Desenvolvido em C',
      imagem: '../../../assets/img/projects/scc-19/capa-scc-19.png',
      link: '/portfolio/scc19'
    },
    {
      nome: 'CalcPricing',
      descricao: 'Desenvolvido em JavaScript',
      imagem: '../../../assets/img/projects/calcpricing/capa-calcpricing.png',
      link: '/portfolio/calcpricing'
    },
    {
      nome: 'Calculadora de IMC',
      descricao: 'Desenvolvido em JavaScript',
      imagem: '../../../assets/img/projects/calculadoraIMC/capa-calculadoraIMC.png',
      link: '/portfolio/calculadora-imc'
    },
    {
      nome: 'Calculadora M.B.',
      descricao: 'Desenvolvido em C#',
      imagem: '../../../assets/img/projects/calculadoraMB/capa-calculadoraMB.png',
      link: '/portfolio/calculadora-mb'
    }
  ];

}
