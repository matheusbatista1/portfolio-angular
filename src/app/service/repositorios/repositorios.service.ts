import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepositoriosService {
  private apiUrl = 'https://api.github.com/users/matheusbatista1/repos';

  constructor(private http: HttpClient) {}

  getRepositorios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(repos => repos.sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }))
    );
  }
}
