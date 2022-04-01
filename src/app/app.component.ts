import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  calculadoraForm: FormGroup;
  resultado: string;
  expRegValidatePrice = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;

  ngOnInit(): void {
    this.calculadoraForm = new FormGroup({
      dineroapagar: new FormControl('', [Validators.required, Validators.pattern(this.expRegValidatePrice)]),
      preciogasolina: new FormControl('', [Validators.required, Validators.pattern(this.expRegValidatePrice)]),
    });
  }

  calcularprecio() {
    const dineroapagar = +this.calculadoraForm.get('dineroapagar').value;
    const preciogasolina = +this.calculadoraForm.get('preciogasolina').value;
    console.log(dineroapagar);
    console.log(preciogasolina);
    let litros = dineroapagar / preciogasolina;
    let descuento = litros * 0.2;
    let preciopagado = dineroapagar - descuento;
    this.resultado = ((dineroapagar * dineroapagar) / preciopagado).toFixed(2);
  }
}
