import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CurriculoComponent } from './components/curriculo/curriculo.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';
import { ContatoComponent } from './components/contato/contato.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home | Matheus dos Santos Batista' } },
  { path: 'portfolio', component: PortfolioComponent, data: { title: 'Portfolio | Matheus dos Santos Batista' } },
  { path: 'curriculo', component: CurriculoComponent, data: { title: 'Currículo | Matheus dos Santos Batista' } },
  { path: 'repositorios', component: RepositoriosComponent, data: { title: 'Repositórios | Matheus dos Santos Batista' } },
  { path: 'contato', component: ContatoComponent, data: { title: 'Contato | Matheus dos Santos Batista' } },
  { path: '**', redirectTo: '', data: { title: 'Home | Matheus dos Santos Batista' } }
];
