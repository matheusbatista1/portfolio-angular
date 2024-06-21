import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';
import { ContatoComponent } from './components/contato/contato.component';
import { Scc19Component } from './components/portfolio/scc19/scc19.component';
import { CalcpricingComponent } from './components/portfolio/calcpricing/calcpricing.component';
import { CalculadorambComponent } from './components/portfolio/calculadoramb/calculadoramb.component';
import { CalculadoraimcComponent } from './components/portfolio/calculadoraimc/calculadoraimc.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home | Matheus dos Santos Batista' } },
  { path: 'portfolio', component: PortfolioComponent, data: { title: 'Portfólio | Matheus dos Santos Batista' } },
  { path: 'portfolio/scc19', component: Scc19Component, data: { title: 'SCC-19 | Matheus dos Santos Batista' } },
  { path: 'portfolio/calcpricing', component: CalcpricingComponent, data: { title: 'CalcPricing | Matheus dos Santos Batista' } },
  { path: 'portfolio/calculadora-imc', component: CalculadoraimcComponent, data: { title: 'Calculadora IMC | Matheus dos Santos Batista' } },
  { path: 'portfolio/calculadora-mb', component: CalculadorambComponent, data: { title: 'Calculadora M.B. | Matheus dos Santos Batista' } },
  { path: 'curriculo', component: CurriculoComponent, data: { title: 'Currículo | Matheus dos Santos Batista' } },
  { path: 'repositorios', component: RepositoriosComponent, data: { title: 'Repositórios | Matheus dos Santos Batista' } },
  { path: 'contato', component: ContatoComponent, data: { title: 'Contato | Matheus dos Santos Batista' } },
  { path: '**', redirectTo: '', data: { title: 'Home | Matheus dos Santos Batista' } }
];
