---
title: SiDiLa
description: Simple Didactic Language
slug: "sidila"
comments: false
---

# Simple Didactic Language v0.1.0

Una herramienta para aprender conceptos básicos de programación.

{{< rawhtml >}}
<div id="container">
  <canvas id="canvas" class="canvas" width="300" height="300"></canvas>
  <div id="instructions" class="instructions">
    <p>
      Escribí las instrucciones para que el jugador llegue a la salida sin pasar por el Zombie o la Esfinge.
    </p>
    <ul>
      <li>Tenés que hacerlo línea por línea.</li>
      <li>Las instrucciones válidas son:</li>
      <ul>
        <li>avanzar</li>
        <li>girar hacia la derecha</li>
        <li>girar hacia la izquierda</li>
        <li>disparar</li>
      </ul>
      <li>Sólo podés matar al Zombie.</li>
    </ul>
  </div>
</div>
<div id="message" class="message"></div>
<h3>Tu programa:</h3>
<textarea id="code" class="source-code" cols="80" rows="12">
</textarea>
<div>
  <button id="run" class="sidila-button">Ejecutar</button>
  <button id="reset" class="sidila-button">Reiniciar</button>
</div>
<script type="text/javascript" src="/sidila/peg.js"></script>
<script type="text/javascript" src="/sidila/sidila.js"></script>
<!--
avanzar
girar hacia la derecha
avanzar
avanzar
girar hacia la izquierda
avanzar
avanzar
avanzar
avanzar
avanzar
avanzar
avanzar
avanzar
girar hacia la derecha
avanzar
avanzar
avanzar
avanzar
avanzar
avanzar
avanzar
girar hacia la izquierda
avanzar
-->
{{< /rawhtml >}}