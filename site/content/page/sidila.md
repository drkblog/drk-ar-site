---
title: SiDiLa
description: Simple Didactic Language
slug: "sidila"
comments: false
---

{{< rawhtml >}}
<textarea id="code" class="source-code" cols="80" rows="25"></textarea>
<button id="run">Run</button>
<textarea id="output" class="output" cols="80" rows="25" disabled="true"></textarea>
<script type="text/javascript">
  function translateLine(line) {
    const assignRegex = /asignar ([a-z][\w]+)=(.*)/i;
    const printRegex = /imprimir ([a-z][\w]+)/i;
    if (line.match(assignRegex) != null) {
      return line.replace(assignRegex, 'var $1=$2;');
    }
    if (line.match(printRegex) != null) {
      return line.replace(printRegex, 'outputCollector += $1; outputCollector += \'\\n\';');
    }
    throw `Unrecognized syntax: ${line}`
  }
  function run(source) {
    var outputCollector = '';
    var jsCode = '';
    const lines = source.split('\n');
    var lineNumber = 0;
    try {
      for(lineNumber=0; lineNumber < lines.length; lineNumber++) {
        jsCode += translateLine(lines[lineNumber]);
      }
      eval(jsCode);
    } catch (error) {
      outputCollector = `ERROR in line ${lineNumber+1}: ${error}`;
    }
    return outputCollector;
  }
  // UI
  const code = document.querySelector("#code");
  const output = document.querySelector("#output");
  const runButton = document.querySelector("#run");
  runButton.addEventListener("click", async (event) => {
      output.value = run(code.value.toString());
  });
</script>
{{< /rawhtml >}}