import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacts.component.html'
})
export class ContactsComponent {
  contactForm: FormGroup;
  isSubmitted = false;
  isSuccess = false;
  isError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    this.isSubmitted = true;
    this.isSuccess = false;
    this.isError = false;

    if (this.contactForm.invalid) return;

    const { name, email, message } = this.contactForm.value;
    emailjs.send('service_4rnheej', 'template_htr9xf1', {
      from_name: name,
      from_email: email,
      message: message
    }, 'BjxAvuEXgAH8PNWcJ')
      .then(() => {
        this.isSuccess = true;
        this.contactForm.reset();
        this.isSubmitted = false;
      })
      .catch(() => {
        this.isError = true;
      });
  }
}
