---
title: SiDiLa
description: Simple Didactic Language
slug: "sidila"
comments: false
---

# Simple Didactic Language v0.1.3

Una herramienta para aprender conceptos básicos de programación.

{{< rawhtml >}}
<div id="container">
  <canvas id="canvas" class="canvas" width="256" height="256"></canvas>
</div>
<div id="message" class="message"></div>
<h3>Tu programa:</h3>
<div>
  <button id="run" class="sidila-button">Ejecutar</button>
  <button id="reset" class="sidila-button">Reiniciar</button>
  <button id="load" class="sidila-button">Cargar programa</button>
  <button id="save" class="sidila-button">Guardar programa</button>
</div>
<textarea id="sourceCode" class="sourceCode" cols="80" rows="12">
</textarea>
<script type="text/javascript" src="/sidila/peg.js"></script>
<script type="text/javascript" src="/sidila/sidila.js"></script>
{{< /rawhtml >}}

Escribí las instrucciones para que el jugador llegue a la salida sin pasar por el Zombie o la Esfinge.
- Tenés que hacerlo línea por línea.
- Las instrucciones válidas son:
  - avanzar
  - girar hacia la derecha
  - girar hacia la izquierda
  - disparar
- Sólo podés matar al Zombie.
- Cada instrucción se ejecuta una vez.
- Por ejemplo. Para avanzar dos espacios hay que escribir dos líneas con la palabra 'avanzar'.

> Game art by [Buch](https://opengameart.org/users/buch)