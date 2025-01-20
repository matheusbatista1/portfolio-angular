import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '../../../../service/message/message.service';

@Component({
  selector: 'app-message-modal',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent {
  isVisible = false;
  showSuccessModal = false;
  showErrorModal = false;
  maxMessageLength = 500;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-záàãâéèêíóôúçÁÀÃÂÉÊÍÓÔÚÇ ]*'), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.maxLength(this.maxMessageLength)]],
      company: ['', [Validators.maxLength(255)]]
    });
  }

  formValid(): boolean {
    return this.contactForm.valid;
  }

  openModal(): void {
    this.isVisible = true;
  }

  closeModal(): void {
    this.isVisible = false;
    this.contactForm.reset();
  }

  closeSuccessModal(): void {
    this.showSuccessModal = false;
  }

  closeErrorModal(): void {
    this.showErrorModal = false;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.getRawValue();
      this.messageService.sendMessage(formData).subscribe(
        response => {
          console.log('Mensagem enviada com sucesso!', response);
          this.showSuccessModal = true;
          this.closeModal();
        },
        error => {
          console.error('Erro ao enviar mensagem:', error);
          this.showErrorModal = true;
          this.closeModal();
        }
      );
    }
  }
}
