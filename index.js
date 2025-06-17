// VARIABLES PARTE INTERACTIVA

//Variables de Texto
let fuenteGRID
let fuenteTHINI
let fuenteTHINIGRID

//Variables caja de texto
let input
let inputP

//Variables Slider Opacidad
let slider
let sliderP
let opacidad

//Variables Slider Grosor
let slider2
let slider2P
let grosor

//Variable Botón de Radio
let radio

//Variable Selector
let selector
let selectorP

//VARIABLES PARTE RANDOM
let palabras=["abcdefgh","fuente","thini","grid","ijklmnop","qrstuvwxyz","random","escribi","experimenta","tipografia","pod", "interactiva"]
let numeros=["0","1","2","3","4","5","6","7","8","9","?","!"]

function preload() {
  fuenteGRID = loadFont('/tipografias/GRID-Regular.ttf')
  fuenteTHINI = loadFont('/tipografias/THINI-Regular.ttf')
  fuenteTHINIGRID = loadFont('/tipografias/THINIGRID-Regular.ttf')
}

//VARIABLES PARTE CATALOGO
let tiempoInicio
let mostrartipo1
let tiempoActual
let tiempoPasado



function setup() {
  // Código inicial. Se ejecuta una sola vez

  createCanvas(1300, 2500)
  background(0)

  //Función del formato de la interactividad
  interactivdad(1300)

  mostrartipo1 = true
  tiempoInicio = millis()
}

function draw() {
  // Se ejecuta después de setup continuamente 

  //Función de configuración de las interacciones
  interacciones(1300)
  push() //sin push y pop no funciona lo interactivo
  dibujarRandom(700) 
  pop()

  //PARTE CATALOGO

  push() //sin push y pop no funciona bien
  fill(0)
  rect(0,0,800,600)//reemplaza al background(0)

  tiempoActual = millis()
  tiempoPasado = tiempoActual - tiempoInicio

  if (mostrartipo1) {
    
    fill(58, 228, 64)
    textAlign(CENTER, CENTER)
    textFont(fuenteTHINI)
    textSize(150)
    text("THINI", 400, 300)
   
    textosIzqyDer(fuenteTHINI, color(58, 228, 64))
    palabrasRandom(fuenteTHINI)

  } else {
    
  noStroke()
  fill(58, 228, 64) 
  rect(0,0,800,600)//reemplaza al background verde

  fill(0)
  textAlign(CENTER, CENTER)
  textFont(fuenteTHINI)
  textSize(150)
  text("THINI", 400, 300)
  text("GRID", 400, 300 + 120)

  textosIzqyDer(fuenteGRID, 0)
  palabrasRandom(fuenteGRID)
  
  }

  if (tiempoPasado > 150) {
    
    mostrartipo1 = !mostrartipo1
    tiempoInicio = tiempoActual
    
  }
  pop()


}

// FUNCIÓN FORMATO DE LAS INTERACCIONES

function interactivdad(y) {
  //Caja de Texto
  input = createInput("Proba")
  input.position(550, 530 + y)
  inputP = createP('REDACTAR')
  inputP.position(550, 475 + y)
  inputP.addClass('etiqueta')

  //Slider Opacidad
  slider = createSlider(0, 255, 255) // crea un slider con valores min y max en la pag
  slider.position(380, 530 + y)
  sliderP = createP('OPACIDAD')
  sliderP.position(380, 475 + y)
  sliderP.addClass('etiqueta')

  //Slider Grosor
  slider2 = createSlider(1, 15, 0) // crea un slider con valores min y max en la pag
  slider2.position(380, 620 + y)
  slider2P = createP('GROSOR')
  slider2P.position(380, 560 + y)
  slider2P.addClass('etiqueta')

  //Botón de Radio
  radio = createRadio()
  radio.option('THINI')
  radio.option('GRID')
  radio.option('THINI-GRID')
  radio.selected('THINI')
  radio.position(50, 500 + y)
  radio.addClass('etiqueta')

  //Título "Escribí"
  push()
  textFont(fuenteTHINI)
  textSize(50)
  fill(58, 228, 64)
  noStroke()
  text('ESCRIBI', 50, 140 + y)
  pop()

  //Seleccionar
  selectorP = createP('Seleccionar')
  selectorP.position(50, 520 + y)
  selectorP.addClass('etiqueta')

  //Selector 1 estilo
  selector1 = createSelect()
  selector1.option('Relleno')
  selector1.option('Trazo')
  selector1.option('Ambos')
  selector1.position(50, 620 + y)
  selector1P = createP('Estilo')
  selector1P.position(50, 560 + y)
  selector1P.addClass('etiqueta')

  //Selector 2 trazo
  selector2 = createSelect()
  selector2.option('Verde')
  selector2.option('Cian')
  selector2.option('Magenta')
  selector2.option('Amarillo')
  selector2.position(150, 620 + y)
  selector2P = createP('Trazo')
  selector2P.position(150, 560 + y)
  selector2P.addClass('etiqueta')

  //Selector 3 color
  selector3 = createSelect()
  selector3.option('Verde')
  selector3.option('Cian')
  selector3.option('Magenta')
  selector3.option('Amarillo')
  selector3.position(260, 620 + y)
  selector3P = createP('Color')
  selector3P.position(260, 560 + y)
  selector3P.addClass('etiqueta')
}

// FUNCIÓN APLICACIÓN DE LAS INTERACCIONES
function interacciones(y) {

  //Rectangulo de escritura
  push()
  fill(0)
  strokeWeight(2)
  rect(50, 150 + y, 1300, 150) //Para q no se sobre escriba
  stroke(58, 228, 64)
  strokeWeight(2)
  rect(50, 150 + y, 1200, 150)
  pop()

  // Slider Opacidad

  opacidad = slider.value()

  // Slider Grosor
  grosor = slider2.value()


  //Botón Radial
  let eleccionRadio = radio.value()

  //Caja de Texto
  let texto = input.value()
  text(texto, 60, 260 + y, 1150)

  //Selector 1 - ESTILOS

  let eleccionSelector1 = selector1.value()

  if (eleccionSelector1 == 'Relleno') {
    noStroke()
    fill(58, 228, 64, opacidad)
  }
  else if (eleccionSelector1 == 'Trazo') {
    fill(0)
    stroke(58, 228, 64, opacidad)
  }
  else if (eleccionSelector1 == 'Ambos') {
    stroke(58, 228, 64, opacidad)
    fill(58, 228, 64, opacidad)
  }


  //Selector 2 -TRAZO
  let eleccionSelector2 = selector2.value()

  //Selector 3 - COLOR
  let eleccionSelector3 = selector3.value()

  //Asignación color Trazo
  if (eleccionSelector1 != "Relleno" && eleccionSelector1 != "Ambos") { //Si es trazo
    fill(0, 0, 0, 0)
    strokeWeight(grosor)
    if (eleccionSelector2 == 'Verde') {
      stroke(58, 228, 64, opacidad)
    } else if (eleccionSelector2 == 'Cian') {
      stroke(0, 221, 255, opacidad)
    } else if (eleccionSelector2 == 'Magenta') {
      stroke(255, 0, 98, opacidad)
    } else if (eleccionSelector2 == 'Amarillo') {
      stroke(217, 217, 0, opacidad)
    }
  }

  //Asignación color Relleno
  if (eleccionSelector1 != "Trazo" && eleccionSelector1 != "Ambos") { //Si es relleno
    noStroke()
    if (eleccionSelector3 == 'Verde') {
      fill(58, 228, 64, opacidad)
    } else if (eleccionSelector3 == 'Cian') {
      fill(0, 221, 255, opacidad)
    } else if (eleccionSelector3 == 'Magenta') {
      fill(255, 0, 98, opacidad)
    } else if (eleccionSelector3 == 'Amarillo') {
      fill(217, 217, 0, opacidad)
    }
  }

  //Asignación color Ambos
  if (eleccionSelector1 != "Relleno" && eleccionSelector1 != "Trazo") { //Si es Ambos
    strokeWeight(grosor)

    if (eleccionSelector3 == 'Verde') {
      fill(58, 228, 64, opacidad)
    } else if (eleccionSelector3 == 'Cian') {
      fill(0, 221, 255, opacidad)
    } else if (eleccionSelector3 == 'Magenta') {
      fill(255, 0, 98, opacidad)
    } else if (eleccionSelector3 == 'Amarillo') {
      fill(217, 217, 0, opacidad)
    }
    if (eleccionSelector2 == 'Verde') {
      stroke(58, 228, 64, opacidad)
    } else if (eleccionSelector2 == 'Cian') {
      stroke(0, 221, 255, opacidad)
    } else if (eleccionSelector2 == 'Magenta') {
      stroke(255, 0, 98, opacidad)
    } else if (eleccionSelector2 == 'Amarillo') {
      stroke(217, 217, 0, opacidad)
    }
  }

  if (eleccionRadio == 'THINI') {
    textFont(fuenteTHINI)
    textSize(100)
  }

  else if (eleccionRadio == 'GRID') {
    textFont(fuenteGRID)
    textSize(100)
  }

  else if (eleccionRadio == 'THINI-GRID') {
    textFont(fuenteTHINIGRID)
    textSize(100)
  }
}

function dibujarRandom(posicionY){
  
  for (let i = 1; i < 8; i = i +1) {
    // Bloque que se ejecuta en cada iteración
  let posY = i * 70 + posicionY;

  fill(0)
  rect(50,posY-55,1300,55)  //esto reemplaza poner background(0) con el objetivo de limpiar lo escrito
  
  textFont(fuenteGRID)
  textSize(80)
  fill (58, 228, 64)
  text('ESCRIBIrrrrrrrrrrr',50,posY)

  frameRate(5)

  textFont(fuenteTHINI)
  text(random(palabras), 50,posY)

  textFont(fuenteTHINI)
  text(random(numeros), 737,posY)

  textFont(fuenteTHINI)
  text(random(numeros), 737-41,posY)

  textFont(fuenteTHINI)
  text(random(numeros), 737-81,posY)

  textFont(fuenteTHINI)
  text(random(numeros), 737-122,posY)
  }
 

}

// FUNCIONES DE DIBUJO PARTE CATALOGO
function textosIzqyDer(fuente, colorTexto) {
  fill(colorTexto)
  textFont(fuente)
  textAlign(LEFT, TOP)
  textSize(20)
  text("error... error00error... error", 30, 40)
  text("error... error", 30, 70)

  textSize(30);
  text("fuente", 30, 100)
  text("fuente", 220, 230)
  text("abcdefg", 30, 450)
  text("hijkmnl", 30, 480)
  text("opqrstu", 30, 510)
  text("vwxyz", 30, 540)

  textAlign(RIGHT, TOP)
  textSize(20)
  text("01 caja alta", 770, 40)
  text("error", 770, 70)
  text("03 altura en x", 770, 100)
  text("123 123 123 123 123", 770, 130)
  text("......uwu.....", 770, 160)
  text("thini thini thini mua", 770, 540)

}

function palabrasRandom (fuente){
   // Palabras glitch aleatorias
  textFont(fuente)
  text("thini", random(0,800), random(0,400))
  text("tipografia", random(0,800), random(0,400))
  text("pod", random(0,800), random(0,400))
}