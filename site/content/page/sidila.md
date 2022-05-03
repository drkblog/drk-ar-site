---
title: SiDiLa
description: Simple Didactic Language
slug: "sidila"
comments: false
type: page
---

# Simple Didactic Language v0.1.3

{{< rawhtml >}}
<div id="container">
  <canvas id="canvas" class="canvas" width="256" height="256"></canvas>
</div>
<div id="message" class="message"></div>
<h3>Tu programa:</h3>
<div>
  <button id="run" class="sidila-button">Ejecutar</button>
  <label for="periodSelector">Velocidad</label>
  <select id="periodSelector">
    <option value="300">Lento</option>
    <option value="200" selected>Normal</option>
    <option value="50">Rápido</option>
  </select>
  <button id="reset" class="sidila-button">Reiniciar</button> 
</div>
<textarea id="sourceCode" class="sourceCode" cols="80" rows="12">
</textarea>
<div>
  <select id="loadFilename">
    <option value="">Seleccione programa</option>
  </select>
  <button id="load" class="sidila-button">Cargar programa</button>
</div>
<div>
  <input id="saveFilename" placeholder="nombre del programa" minlength="1" maxlength="20">
  <button id="save" class="sidila-button">Guardar programa</button>
  <input type="checkbox" id="saveOverwrite" value="overwrite">
  <label for="saveOverwrite">Sobreescribir si ya existe</label>
</div>
{{< /rawhtml >}}

### Cómo usar SiDiLa

Escribí las instrucciones para que el jugador llegue a la salida sin chocar contra las paredes ni otros obstáculos.
- Las instrucciones válidas son:
  - avanzar
  - girar hacia la derecha
  - girar hacia la izquierda
  - disparar
- Cuando ejecutes el programa se resaltará la instrucción que está siendo procesada en cada paso.
- La velocidad de ejecución actual es de un paso cada {{< rawhtml >}}<span id="periodText"></span>{{< /rawhtml >}}milisegundos.

### Qué es SiDiLa

Una herramienta para aprender conceptos básicos de programación.
A través de un lenguaje de programación en español diseñado especialmente para que el usuario pueda adquirir los conceptos fundamentales más fácilmente.
Pensada para personas que quieren iniciarse en la programación sin tener conocimientos previos.

> Game art by [Buch](https://opengameart.org/users/buch)

{{< rawhtml >}}
<script type="text/javascript" src="/sidila/peg.js"></script>
<script type="text/javascript" src="/sidila/sidila.js"></script>
{{< /rawhtml >}}