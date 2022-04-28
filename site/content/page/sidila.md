---
title: SiDiLa
description: Simple Didactic Language
slug: "sidila"
comments: false
---

# Simple Didactic Language

Una herramienta para aprender conceptos básicos de programación.

{{< rawhtml >}}
<canvas id="canvas" width="300" height="300"></canvas>
<div id="message" class="message"></div>
<textarea id="output" class="output" cols="16" rows="13" disabled="true"></textarea>
<textarea id="code" class="source-code" cols="80" rows="12">
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
</textarea>
<button id="run">Run</button>
<script type="text/javascript" src="/sidila/peg.js"></script>
<script type="text/javascript" src="/sidila/sidila.js"></script>
{{< /rawhtml >}}