class cl_estudiante {
  constructor(c, nf) {
    this.cedula = c;
    this.notafinal = nf;
  }
}
class cl_materia {
  constructor() {
    this.contaprobados = 0;
    this.contreprobados = 0;
    this.acumnota = 0;
    this.contestudiantes = 0;
  }
  procesar(e) {
    this.contestudiantes++;
    this.acumnota += e.notafinal;
    if (e.notafinal > 47) this.contaprobados++;
    else this.contreprobados++;
  }
  notapromedio() {
    return this.acumnota / this.contestudiantes;
  }
}

let estUno = new cl_estudiante(888, 60);
let estDos = new cl_estudiante(777, 50);
let estTres = new cl_estudiante(999, 40);
let estCuatro = new cl_estudiante(333, 80);
let estCinco = new cl_estudiante(111, 30);
let estSeis = new cl_estudiante(333, 90);
let estSiete = new cl_estudiante(444, 48);
let estOcho = new cl_estudiante(222, 60);

let materia = new cl_materia();
materia.procesar(estUno);
materia.procesar(estDos);
materia.procesar(estTres);
materia.procesar(estCuatro);
materia.procesar(estCinco);
materia.procesar(estSeis);
materia.procesar(estSiete);
materia.procesar(estOcho);

let salida = document.getElementById("salida");

salida.innerHTML = "Resultados: <br><br>";

salida.innerHTML += `
  el numero de aprobados es: ${materia.contaprobados}<br>
  el numero de reprobados es de: ${materia.contreprobados}<br>
  la nota promedio es de: ${materia.notapromedio()}`;
