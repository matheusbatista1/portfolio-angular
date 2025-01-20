import { Component, ViewChild } from '@angular/core';
import { MessageModalComponent } from '../contato/components/message-modal/message-modal.component'; // Ajuste o caminho

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [MessageModalComponent],  // Adicione o componente standalone
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent {
  tituloPagina = 'Contato';

  @ViewChild('messageModal') messageModal!: MessageModalComponent;

  openMessageModal() {
    this.messageModal?.openModal();
  }
}

