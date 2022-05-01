var sidila;(()=>{var t={498:(t,s)=>{!function(){"use strict";function t(t,s,e){this.text=t,this.offset=s,this.elements=e}t.prototype.forEach=function(t,s){for(var e=this.elements,i=0,h=e.length;i<h;i++)t.call(s,e[i],i,e)},"undefined"!=typeof Symbol&&Symbol.iterator&&(t.prototype[Symbol.iterator]=function(){return this.elements[Symbol.iterator]()}),function(t,s){function e(){}e.prototype=s.prototype,(t.prototype=new e).constructor=t}((function(s,e,i){t.apply(this,arguments),this.direction=i[1]}),t);var e={},i={_read_statement(){var s=e,i=this._offset;this._cache._statement=this._cache._statement||{};var h=this._cache._statement[i];if(h)return this._offset=h[1],h[0];for(var r=this._offset,o=[],n=null;;){var f=this._offset,a=new Array(1),_=e,c=this._offset;if((_=this._read_turn())===e&&(this._offset=c,(_=this._read_move())===e&&(this._offset=c,(_=this._read_shoot())===e&&(this._offset=c))),_!==e?(a[0]=_,this._read_nl()!==e||(a=null,this._offset=f)):(a=null,this._offset=f),null===a?n=e:(n=new t(this._input.substring(f,this._offset),f,a),this._offset=this._offset),n===e)break;o.push(n)}return o.length>=0?(s=new t(this._input.substring(r,this._offset),r,o),this._offset=this._offset):s=e,this._cache._statement[i]=[s,this._offset],s},_read_move(){var t=e,s=this._offset;this._cache._move=this._cache._move||{};var i=this._cache._move[s];if(i)return this._offset=i[1],i[0];var h=null,r=this._offset+7;return r<=this._inputSize&&(h=this._input.substring(this._offset,r)),"avanzar"===h?(t=this._actions.make_move(this._input,this._offset,this._offset+7,[]),this._offset=this._offset+7):(t=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::move","'avanzar'"])),this._cache._move[s]=[t,this._offset],t},_read_shoot(){var t=e,s=this._offset;this._cache._shoot=this._cache._shoot||{};var i=this._cache._shoot[s];if(i)return this._offset=i[1],i[0];var h=null,r=this._offset+8;return r<=this._inputSize&&(h=this._input.substring(this._offset,r)),"disparar"===h?(t=this._actions.make_shoot(this._input,this._offset,this._offset+8,[]),this._offset=this._offset+8):(t=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::shoot","'disparar'"])),this._cache._shoot[s]=[t,this._offset],t},_read_turn(){var s=e,i=this._offset;this._cache._turn=this._cache._turn||{};var h=this._cache._turn[i];if(h)return this._offset=h[1],h[0];var r=this._offset,o=new Array(2),n=e,f=null,a=this._offset+5;if(a<=this._inputSize&&(f=this._input.substring(this._offset,a)),"girar"===f?(n=new t(this._input.substring(this._offset,this._offset+5),this._offset,[]),this._offset=this._offset+5):(n=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::turn","'girar'"])),n!==e)if(o[0]=n,this._read_ws()!==e){var _,c=e,l=null,u=this._offset+8;if(u<=this._inputSize&&(l=this._input.substring(this._offset,u)),"hacia la"===l?(c=new t(this._input.substring(this._offset,this._offset+8),this._offset,[]),this._offset=this._offset+8):(c=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::turn","'hacia la'"])),c!==e)if(this._read_ws()!==e)(_=this._read_direction())!==e?o[1]=_:(o=null,this._offset=r);else o=null,this._offset=r;else o=null,this._offset=r}else o=null,this._offset=r;else o=null,this._offset=r;return null===o?s=e:(s=this._actions.make_turn(this._input,r,this._offset,o),this._offset=this._offset),this._cache._turn[i]=[s,this._offset],s},_read_direction(){var s=e,i=this._offset;this._cache._direction=this._cache._direction||{};var h=this._cache._direction[i];if(h)return this._offset=h[1],h[0];var r=this._offset,o=null,n=this._offset+9;if(n<=this._inputSize&&(o=this._input.substring(this._offset,n)),"izquierda"===o?(s=new t(this._input.substring(this._offset,this._offset+9),this._offset,[]),this._offset=this._offset+9):(s=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::direction",'"izquierda"'])),s===e){this._offset=r;var f=null,a=this._offset+7;a<=this._inputSize&&(f=this._input.substring(this._offset,a)),"derecha"===f?(s=new t(this._input.substring(this._offset,this._offset+7),this._offset,[]),this._offset=this._offset+7):(s=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::direction",'"derecha"'])),s===e&&(this._offset=r)}return this._cache._direction[i]=[s,this._offset],s},_read_ws(){var s=e,i=this._offset;this._cache._ws=this._cache._ws||{};var h=this._cache._ws[i];if(h)return this._offset=h[1],h[0];for(var r=this._offset,o=[],n=null;;){for(var f=this._offset,a=[],_=null;;){var c=null,l=this._offset+1;if(l<=this._inputSize&&(c=this._input.substring(this._offset,l)),null!==c&&/^[ \t]/.test(c)?(_=new t(this._input.substring(this._offset,this._offset+1),this._offset,[]),this._offset=this._offset+1):(_=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::ws","[ \\t]"])),_===e)break;a.push(_)}if(a.length>=1?(n=new t(this._input.substring(f,this._offset),f,a),this._offset=this._offset):n=e,n===e)break;o.push(n)}return o.length>=0?(s=new t(this._input.substring(r,this._offset),r,o),this._offset=this._offset):s=e,this._cache._ws[i]=[s,this._offset],s},_read_nl(){var s=e,i=this._offset;this._cache._nl=this._cache._nl||{};var h=this._cache._nl[i];if(h)return this._offset=h[1],h[0];for(var r=this._offset,o=[],n=null;;){for(var f=this._offset,a=[],_=null;;){var c=null,l=this._offset+1;if(l<=this._inputSize&&(c=this._input.substring(this._offset,l)),null!==c&&/^[\r\n]/.test(c)?(_=new t(this._input.substring(this._offset,this._offset+1),this._offset,[]),this._offset=this._offset+1):(_=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::nl","[\\r\\n]"])),_===e)break;a.push(_)}if(a.length>=1?(n=new t(this._input.substring(f,this._offset),f,a),this._offset=this._offset):n=e,n===e)break;o.push(n)}return o.length>=0?(s=new t(this._input.substring(r,this._offset),r,o),this._offset=this._offset):s=e,this._cache._nl[i]=[s,this._offset],s}},h=function(t,s,e){this._input=t,this._inputSize=t.length,this._actions=s,this._types=e,this._offset=0,this._cache={},this._failure=0,this._expected=[]};h.prototype.parse=function(){var t=this._read_statement();if(t!==e&&this._offset===this._inputSize)return t;throw 0===this._expected.length&&(this._failure=this._offset,this._expected.push(["SiDiLa","<EOF>"])),this.constructor.lastError={offset:this._offset,expected:this._expected},new SyntaxError(function(t,s,e){for(var i=t.split(/\n/g),h=0,r=0;r<=s;)r+=i[h].length+1,h+=1;for(var o=i[h-1],n="Line "+h+": expected one of:\n\n",f=0;f<e.length;f++)n+="    - "+e[f][1]+" from "+e[f][0]+"\n";for(var a=h.toString();a.length<6;)a=" "+a;for(n+="\n"+a+" | "+o+"\n",r-=o.length+10;r<s;)n+=" ",r+=1;return n+"^"}(this._input,this._failure,this._expected))},Object.assign(h.prototype,i);var r={Grammar:i,Parser:h,parse:function(t,s){return new h(t,(s=s||{}).actions,s.types).parse()}};Object.assign(s,r)}()},48:t=>{"use strict";t.exports=JSON.parse('{"width":16,"height":16,"player":{"x":12,"y":2,"direction":"South"},"theme":{"image":"dungeon.png","imageWidth":384,"imageHeight":160,"spriteWidth":16,"spriteHeight":16,"background":"#91b09a","sprite":{"north":189,"east":189,"south":189,"west":189,"dead":165}},"logic":{"1":"Sphinx","2":"Zombie","54":"Space","172":"Exit","173":"Exit","174":"Exit","175":"Exit","211":"Space"},"space":54,"map":[[5,6,6,6,6,104,6,6,6,6,6,192,193,194,6,7],[29,30,30,147,30,128,30,30,168,30,30,216,217,218,30,31],[53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[102,54,54,54,54,54,54,54,209,210,54,54,211,54,54,75],[76,54,54,54,54,54,54,54,233,234,54,54,54,54,54,99],[100,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[102,54,54,54,54,54,54,54,54,54,8,78,78,127,78,4],[53,54,54,54,54,54,54,54,54,182,99,25,25,25,25,25],[76,54,54,54,54,54,54,54,182,182,55,25,25,25,25,25],[100,54,54,54,54,54,54,54,54,54,56,6,6,6,6,7],[53,54,54,54,54,54,54,54,54,54,80,171,30,174,30,31],[53,54,54,54,54,54,54,158,54,54,54,54,54,54,54,55],[53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[77,78,78,78,127,78,78,78,78,78,127,78,78,78,78,79]]}')}},s={};function e(i){var h=s[i];if(void 0!==h)return h.exports;var r=s[i]={exports:{}};return t[i](r,r.exports,e),r.exports}e.d=(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};(()=>{"use strict";e.r(i),e.d(i,{CanvasPainter:()=>a,EditorBoard:()=>n,GameBoard:()=>o,PalettePainter:()=>_,StepInterpreter:()=>c,maps:()=>l,parse:()=>p});class t{static Wall=new t("█");static Exit=new t("░");static Space=new t(" ");static Zombie=new t("👾");static Sphinx=new t("💀");constructor(t){this.symbol=t}}class s{static North=new s("▲",(t=>({x:t.x,y:t.y-1})));static East=new s("▶",(t=>({x:t.x+1,y:t.y})));static South=new s("▼",(t=>({x:t.x,y:t.y+1})));static West=new s("◀",(t=>({x:t.x-1,y:t.y})));constructor(t,s){this.symbol=t,this.action=s}advance(t){return this.action(t)}static order=[this.North,this.East,this.South,this.West];static toTheRight(t){const s=this.order.indexOf(t)+1;return this.order[s%4]}static toTheLeft(t){const s=this.order.indexOf(t)-1;return this.order[s>-1?s:3]}}class h{constructor(t,s,e){this.x=t,this.y=s,this.direction=e,this.crashed=!1}setupSprites(t){s.North.sprite=t.sprite.north,s.East.sprite=t.sprite.east,s.South.sprite=t.sprite.south,s.West.sprite=t.sprite.west,this.deadSprite=t.sprite.dead}getSprite(){return this.crashed?this.deadSprite:this.direction.sprite}move(){const t=this.direction.advance(this);this.x=t.x,this.y=t.y}getShootTarget(){return this.direction.advance(this)}crash(){this.crashed=!0}wouldMove(){return this.direction.advance(this)}isAt(t,s){return this.x==t&&this.y==s}rotateLeft(){this.direction=s.toTheLeft(this.direction)}rotateRight(){this.direction=s.toTheRight(this.direction)}}class r{loadScene(t){this.scene=t}getSprite(t,s){return this.scene.map[s][t]}getLogicLabelForSprite(t){return this.scene.logic[t]}getLogic(s,e){const i=this.getLogicLabelForSprite(this.getSprite(s,e));return void 0===i?t.Wall:t[i]}getSlotIndexFor(t,s){return t+s*this.scene.width}getCoordinatesFor(t){return{x:t%this.scene.width,y:Math.floor(t/this.scene.width)}}}class o extends r{constructor(){super(),this.reset()}reset(){const t=e(48);this.loadScene(t),this.player=new h(this.scene.player.x,this.scene.player.y,s[this.scene.player.direction]),this.player.setupSprites(this.scene.theme)}canMoveInto(s,e){const i=this.getLogic(s,e);return i===t.Space||i===t.Exit}isCrashed(){return this.player.crashed}isDone(){return this.getLogic(this.player.x,this.player.y)===t.Exit}movePlayer(){const t=this.player.wouldMove();this.canMoveInto(t.x,t.y)?this.player.move():this.player.crash()}rotatePlayerLeft(){this.player.rotateLeft()}rotatePlayerRight(){this.player.rotateRight()}playerShoot(){const s=this.player.getShootTarget();this.getLogic(s.x,s.y)===t.Zombie&&(this.scene.map[s.x][s.y]=this.scene.space)}getSprite(t,s){return super.getSprite(t,s)}getOverlaySprite(t,s){return this.player.isAt(t,s)?this.player.getSprite():null}}class n extends r{constructor(){super()}load(t){const s=JSON.parse(t);this.loadScene(s)}save(){return JSON.stringify(this.scene,null,2)}setSlot(t,s){const e=this.getCoordinatesFor(t);this.scene.map[e.y][e.x]=s}getOverlaySprite(t,s){return null}}class f{constructor(t,s,e,i,h,r){this.canvas=t,this.width=s,this.height=e,this.slotWidth=i,this.slotHeight=h,this.slotsInX=Math.floor(this.width/this.slotWidth),this.slotsInY=Math.floor(this.height/this.slotHeight),this.hoverColor=r,this.scaleX=t.clientWidth/this.width,this.scaleY=t.clientHeight/this.height}mouseOver(t,s){return this.hover=this.getSlotIndexForDiscrete(Math.floor(t/this.scaleX/this.slotWidth),Math.floor(s/this.scaleY/this.slotHeight)),this.hover}getSlotIndexForDiscrete(t,s){return t+s*this.slotsInX}getCanvasCoordinatesForSlot(t){return{x:t%this.slotsInX*this.slotWidth,y:Math.floor(t/this.slotsInX)*this.slotHeight}}drawGridSlot(t,s,e){t.strokeStyle=e,t.strokeRect(s.x+.5,s.y+.5,this.slotWidth-1,this.slotHeight-1)}paintHover(t){if(void 0!==this.hover){const s=this.getCanvasCoordinatesForSlot(this.hover);this.drawGridSlot(t,s,this.hoverColor)}}}class a extends f{constructor(t,s){super(t,s.width*s.theme.spriteWidth,s.height*s.theme.spriteHeight,s.theme.spriteWidth,s.theme.spriteHeight,"red"),this.scene=s,this.sprites=new Image,this.sprites.src=`/sidila/img/${this.scene.theme.image}`}paint(t){const s=this.canvas.getContext("2d");s.fillStyle=this.scene.theme.background,s.fillRect(0,0,this.canvas.width,this.canvas.height);for(let e=0;e<this.slotsInY;e++)for(let i=0;i<this.slotsInX;i++){const h=t.getSprite(i,e);this.drawSprite(s,h,i,e);const r=t.getOverlaySprite(i,e);null!=r&&this.drawSprite(s,r,i,e)}this.paintHover(s)}drawSprite(t,s,e,i){const h=this.getSourceX(s),r=this.getSourceY(s);t.drawImage(this.sprites,h,r,this.slotWidth,this.slotHeight,e*this.slotWidth,i*this.slotHeight,this.slotWidth,this.slotHeight)}getSourceX(t){return this.slotWidth*(t%(this.sprites.width/this.slotWidth))}getSourceY(t){return this.slotHeight*Math.floor(t/(this.sprites.width/this.slotWidth))}}class _ extends f{constructor(t,s){super(t,s.theme.imageWidth,s.theme.imageHeight,s.theme.spriteWidth,s.theme.spriteHeight,"red"),this.scene=s,this.sprites=new Image,this.sprites.src=`/sidila/img/${s.theme.image}`,this.selected=0}paint(){const t=this.canvas.getContext("2d");if(t.clearRect(0,0,this.canvas.width,this.canvas.height),t.drawImage(this.sprites,0,0),void 0!==this.selected){const s=this.getCanvasCoordinatesForSlot(this.selected);this.drawGridSlot(t,s,"white")}this.paintHover(t)}selectSlot(t){this.selected=t}}class c{static processStatement(t,s,e){const i=t.elements[s];this.tryExecuting(i,e)}static tryExecuting(t,s){const e=t.elements[0];switch(e.action){case"move":s.movePlayer();break;case"shoot":s.playerShoot();break;case"turn":"derecha"===e.direction?s.rotatePlayerRight():s.rotatePlayerLeft()}}}const l=e(498);class u{make_move(t,s,e,i){return{action:"move"}}make_shoot(t,s,e,i){return{action:"shoot"}}make_turn(t,s,e,i){return{action:"turn",direction:i[1].text}}}function p(t){return l.parse(t,{actions:new u})}})(),sidila=i})();