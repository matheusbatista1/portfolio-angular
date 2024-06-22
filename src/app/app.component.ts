import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';
import { filter } from 'rxjs/operators';
import { LoadingComponent } from './components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RepositoriosComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private titleService: Title, private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.routerState.root.snapshot.firstChild;
      const pageTitle = currentRoute?.data['title'] || 'Matheus dos Santos Batista';
      this.titleService.setTitle(pageTitle);
    });
  }
}
