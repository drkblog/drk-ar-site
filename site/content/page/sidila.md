---
title: SiDiLa
description: Simple Didactic Language
slug: "sidila"
comments: false
type: page
---

# Simple Didactic Language v0.2.3

{{< rawhtml >}}
<div id="container">
  <canvas id="canvas" class="canvas" width="256" height="256"></canvas>
</div>
<div id="message" class="message"></div>
<div>
 <select id="mapSelector" class="sidila-button">
    <option value="0" selected>#1</option>
    <option value="1">#2</option>
  </select>
</div>
<h3>Tu programa:</h3>
<div>
  <button id="run" class="sidila-button">Ejecutar</button>
  <button id="reset" class="sidila-button">Reiniciar</button> 
  <label for="periodSelector">Velocidad</label>
  <select id="periodSelector" class="sidila-button">
    <option value="0">Paso a paso</option>
    <option value="300">Lento</option>
    <option value="200" selected>Normal</option>
    <option value="50">Rápido</option>
  </select>
  <button id="step" class="sidila-button" disabled>Dar un paso</button> 
  <input type="checkbox" id="sound" value="sound" checked>
  <label for="sound">Sonidos</label>
</div>
<textarea id="errorMessage" class="errorMessage" cols="80" rows="10">
</textarea>
<textarea id="sourceCode" class="sourceCode" cols="80" rows="12">
</textarea>
<div>
  <select id="loadFilename" class="sidila-button">
    <option value="">Seleccione programa</option>
  </select>
  <button id="load" class="sidila-button">Cargar programa</button>
</div>
<div>
  <input id="saveFilename" placeholder="nombre del programa" minlength="1" maxlength="20" class="sidila-button">
  <button id="save" class="sidila-button">Guardar programa</button>
  <input type="checkbox" id="saveOverwrite" value="overwrite">
  <label for="saveOverwrite">Sobreescribir si ya existe</label>
</div>
{{< /rawhtml >}}

### Cómo usar SiDiLa

Escribí las instrucciones para que el jugador llegue a la salida siguiendo [las reglas](#reglas).
- Las instrucciones válidas son:
  - avanzar
  - retroceder
  - girar hacia la derecha
  - girar hacia la izquierda
  - disparar
- Adicionalmente se puede repetir un conjunto de instrucciones:
  - mientras no hay pared adelante (
  - _...instrucciones..._
  - )
  - mientras no hay algo adelante (
  - _...instrucciones..._
  - )
- Cuando ejecutes el programa se resaltará la instrucción que está siendo procesada en cada paso.
- La velocidad de ejecución actual es de un paso cada {{< rawhtml >}}<span id="periodText"></span>{{< /rawhtml >}}milisegundos.

#### Reglas

- El jugador muere si avanza sobre un casillero que no tiene un espacio en blanco {{< rawhtml >}}<img src="/sidila/img/space.png" class="inline">{{< /rawhtml >}}
- También muere si pasa cualquier casillero que esté al norte, este, sur u oeste de la Esfinge {{< rawhtml >}}<img src="/sidila/img/sphinx.png" class="inline">{{< /rawhtml >}}
- La instrucción disparar permite matar al Zombie {{< rawhtml >}}<img src="/sidila/img/zombie.png" class="inline">{{< /rawhtml >}} si el jugador se encuentra justo al lado y apuntando hacia él.
- Para terminar el jugador tiene que avanzar hacia la salida {{< rawhtml >}}<img src="/sidila/img/exit.png" class="inline">{{< /rawhtml >}}
- Mientras menos líneas de código tenga el programa y menos movimientos haga el jugador para salir, mayor será la cantidad de puntos.
- Matar al Zombie otorga puntos extra.

#### Ejemplo

```
mientras no hay pared adelante (
  avanzar
)
girar hacia la derecha
avanzar
avanzar
```

### Qué es SiDiLa

Una herramienta para aprender conceptos básicos de programación.
A través de un lenguaje de programación en español diseñado especialmente para que el usuario pueda adquirir los conceptos fundamentales más fácilmente.
Pensada para personas que quieren iniciarse en la programación sin tener conocimientos previos.

> SiDiLa  Copyright (C) 2022  Leandro Hernan Fernandez

> Game art by [Buch](https://opengameart.org/users/buch)

```
SiDiLa - Simple Didactic Language
Copyright (C) 2022  Leandro Hernan Fernandez

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

{{< rawhtml >}}
<script type="text/javascript" src="/sidila/peg.js"></script>
<script type="text/javascript" src="/sidila/sidila.js"></script>
{{< /rawhtml >}}