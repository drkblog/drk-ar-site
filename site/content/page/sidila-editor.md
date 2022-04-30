---
title: SiDiLa
description: Simple Didactic Language
slug: "sidila-editor"
comments: false
---

# Simple Didactic Language - Editor

{{< rawhtml >}}
<div id="container">
  <canvas id="canvas" class="canvas" width="256" height="256"></canvas>
</div>
<div id="message" class="message"></div>
<h3>JSON:</h3>
<textarea id="code" class="source-code" cols="80" rows="12">
</textarea>
<div>
  <button id="load" class="sidila-button">Load</button>
  <button id="reset" class="sidila-button">Reiniciar</button>
</div>
<script type="text/javascript" src="/sidila/peg.js"></script>
<script type="text/javascript" src="/sidila/sidila-editor.js"></script>
{{< /rawhtml >}}