import { Component } from '@angular/core';
import { GastoService } from '../../services/gasto';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
// ===============================
// 🔹 REGISTRO DE FACTURAS (EMPRESA)
// ===============================
rucEmpresa: string = '';
valorFactura: number = 0;
tipoGastoFactura: string = 'Ninguno';

facturas: any[] = [];

agregarFactura(): void {
  const factura = {
    id: Date.now(),
    rucEmpresa: this.rucEmpresa,
    valor: this.valorFactura,
    tipo: this.tipoGastoFactura
  };

  this.facturas.push(factura);

  // Limpiar formulario
  this.rucEmpresa = '';
  this.valorFactura = 0;
  this.tipoGastoFactura = 'Ninguno';

  console.log('Factura registrada:', factura);
}

  // ===============================
  // 🔹 FORMULARIO EXISTENTE
  // ===============================
  cedula: string = '';
  sueldoAnual: number = 0;

  ingresos: number = 0;
  gastos: number = 0;
  baseImponible: number = 0;
  impuestoRenta: number = 0;

  readonly TOPE_GASTOS = 15238.60;

  // 🔹 JSON resultado
  resultadoJSON: any = null;

  tablaRenta = [
    { base: 0, hasta: 12208, impuesto: 0, porcentaje: 0 },
    { base: 12208, hasta: 15549, impuesto: 0, porcentaje: 5 },
    { base: 15549, hasta: 20188, impuesto: 167, porcentaje: 10 },
    { base: 20188, hasta: 26700, impuesto: 631, porcentaje: 12 },
    { base: 26700, hasta: 35136, impuesto: 1412, porcentaje: 15 },
    { base: 35136, hasta: 46575, impuesto: 2678, porcentaje: 20 },
    { base: 46575, hasta: 62005, impuesto: 4965, porcentaje: 25 },
    { base: 62005, hasta: 82679, impuesto: 8823, porcentaje: 30 },
    { base: 82679, hasta: 109956, impuesto: 15025, porcentaje: 35 },
    { base: 109956, hasta: Infinity, impuesto: 24572, porcentaje: 37 }
  ];

  constructor(private gastoService: GastoService) {}

  agregar(): void {
    this.ingresos = this.sueldoAnual;

    const gastosValidos = Math.min(this.totalGastosPersonales, this.TOPE_GASTOS);
    this.baseImponible = this.ingresos - gastosValidos;
    this.impuestoRenta = this.calcularImpuesto(this.baseImponible);

    // 🔹 Generar JSON final
    this.resultadoJSON = {
      cedula: this.cedula,
      sueldoAnual: this.sueldoAnual,
      gastosPersonales: {
        alimentacion: this.alimentacion,
        vivienda: this.vivienda,
        educacion: this.educacion,
        vestimenta: this.vestimenta,
        salud: this.salud,
        total: this.totalGastosPersonales,
        deducible: gastosValidos
      },
      baseImponible: this.baseImponible,
      impuestoRenta: this.impuestoRenta
    };
  }

  calcularImpuesto(base: number): number {
    const fila = this.tablaRenta.find(f => base >= f.base && base <= f.hasta);
    if (!fila) return 0;

    const excedente = base - fila.base;
    return +(fila.impuesto + (excedente * fila.porcentaje) / 100).toFixed(2);
  }

  // ===============================
  // 🔹 CALCULADORA DE GASTOS PERSONALES
  // ===============================
  alimentacion: number = 0;
  vivienda: number = 0;
  educacion: number = 0;
  vestimenta: number = 0;
  salud: number = 0;

  totalGastosPersonales: number = 0;
  totalDeducible: number = 0;

  calcularGastosPersonales(): void {
    this.totalGastosPersonales =
      this.alimentacion +
      this.vivienda +
      this.educacion +
      this.vestimenta +
      this.salud;

    this.totalDeducible = Math.min(
      this.totalGastosPersonales,
      this.TOPE_GASTOS
    );
  }
}
