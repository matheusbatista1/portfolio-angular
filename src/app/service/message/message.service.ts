import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl = 'https://api-portifolio-angular.onrender.com/api/messages';

  constructor(private http: HttpClient) {}

  /**
   * Envia uma mensagem para o backend.
   * @param contactData Dados do formulário de contato.
   * @returns Observable para acompanhar o envio.
   */
  sendMessage(contactData: { name: string; email: string; message: string; company: string }): Observable<any> {
    const url = `${this.baseUrl}/send`;
    return this.http.post(url, contactData);
  }

  /**
   * Lista todas as mensagens do backend.
   * @returns Observable com as mensagens listadas.
   */
  listMessages(): Observable<any[]> {
    const url = `${this.baseUrl}/list`;
    return this.http.get<any[]>(url);
  }
}
