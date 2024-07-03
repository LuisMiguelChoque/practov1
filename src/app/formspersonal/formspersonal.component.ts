import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formspersonal',
  templateUrl: './formspersonal.component.html',
  styleUrl: './formspersonal.component.css',
})
export class FormspersonalComponent implements OnInit {
  regForm!: FormGroup;
  xenviado: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      cedula: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(8)],
      ],
      nombres: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      appaterno: ['', [Validators.minLength(3)]],
      apmaterno: ['', [Validators.required, Validators.minLength(3)]],
      estadocivil: ['', [Validators.required]],
      lugnacimiento: ['', [Validators.required]],
      usuario: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      clave: ['', [Validators.required, Validators.minLength(6)]],
      rclave: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.regForm.controls;
  }

  enviarDatos() {
    this.xenviado = true;
    if (this.regForm.invalid) {
      return;
    }
    alert('Datos enviados: ' + JSON.stringify(this.regForm.value));
    console.log(this.regForm.value)
  }
}
