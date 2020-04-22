import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactFormService } from '../../services/contact-form.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({

      email: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(50)
      ]),
      razon: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ])
    });
  }

  contactForm: FormGroup;
  

  constructor(private contactFs: ContactFormService, private toastr: ToastrService) {

    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onResetForm() {
    this.contactForm.reset();
  }

  onSaveForm() {

    if (this.contactForm.valid) {
      this.contactFs.saveMessage(this.contactForm.value);
      this.onResetForm();
      this.toastr.success('Te contactaré prontó!', 'Exito');
    } else {
      this.toastr.info('Hublo problemas, intentelo más tarde.', 'Error inesperado!');
    }
    
  }

}
