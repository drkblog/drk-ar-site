var sidila;(()=>{var t={498:(t,s)=>{!function(){"use strict";function t(t,s,e){this.text=t,this.offset=s,this.elements=e}t.prototype.forEach=function(t,s){for(var e=this.elements,i=0,h=e.length;i<h;i++)t.call(s,e[i],i,e)},"undefined"!=typeof Symbol&&Symbol.iterator&&(t.prototype[Symbol.iterator]=function(){return this.elements[Symbol.iterator]()}),o((function(s,e,i){t.apply(this,arguments),this.condition=i[1],this.body=i[2]}),t),o((function(s,e,i){t.apply(this,arguments),this.sprite=i[1]}),t),o((function(s,e,i){t.apply(this,arguments),this.direction=i[1]}),t);var e={},i={_read_body(){var s=e,i=this._offset;this._cache._body=this._cache._body||{};var h=this._cache._body[i];if(h)return this._offset=h[1],h[0];for(var o=this._offset,r=[],f=null;;){var n=this._offset,a=new Array(1);if(this._read_ws()!==e){var _=e,l=this._offset;(_=this._read_turn())===e&&(this._offset=l,(_=this._read_move())===e&&(this._offset=l,(_=this._read_shoot())===e&&(this._offset=l,(_=this._read_loop())===e&&(this._offset=l)))),_!==e?(a[0]=_,this._read_ws()!==e&&this._read_nl()!==e||(a=null,this._offset=n)):(a=null,this._offset=n)}else a=null,this._offset=n;if(null===a?f=e:(f=new t(this._input.substring(n,this._offset),n,a),this._offset=this._offset),f===e)break;r.push(f)}return r.length>=0?(s=new t(this._input.substring(o,this._offset),o,r),this._offset=this._offset):s=e,this._cache._body[i]=[s,this._offset],s},_read_loop(){var s=e,i=this._offset;this._cache._loop=this._cache._loop||{};var h=this._cache._loop[i];if(h)return this._offset=h[1],h[0];var o,r=this._offset,f=new Array(3),n=e,a=null,_=this._offset+8;if(_<=this._inputSize&&(a=this._input.substring(this._offset,_)),"mientras"===a?(n=new t(this._input.substring(this._offset,this._offset+8),this._offset,[]),this._offset=this._offset+8):(n=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::loop","'mientras'"])),n!==e)if(f[0]=n,this._read_ws()!==e)if((o=this._read_condition())!==e)if(f[1]=o,this._read_ws()!==e){var l,c=e,u=null,p=this._offset+1;if(p<=this._inputSize&&(u=this._input.substring(this._offset,p)),"("===u?(c=new t(this._input.substring(this._offset,this._offset+1),this._offset,[]),this._offset=this._offset+1):(c=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::loop","'('"])),c!==e)if(this._read_nl()!==e)if((l=this._read_body())!==e)if(f[2]=l,this._read_nl()!==e){var d=e,g=null,v=this._offset+1;v<=this._inputSize&&(g=this._input.substring(this._offset,v)),")"===g?(d=new t(this._input.substring(this._offset,this._offset+1),this._offset,[]),this._offset=this._offset+1):(d=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::loop","')'"])),d!==e||(f=null,this._offset=r)}else f=null,this._offset=r;else f=null,this._offset=r;else f=null,this._offset=r;else f=null,this._offset=r}else f=null,this._offset=r;else f=null,this._offset=r;else f=null,this._offset=r;else f=null,this._offset=r;return null===f?s=e:(s=this._actions.makeLoop(this._input,r,this._offset,f),this._offset=this._offset),this._cache._loop[i]=[s,this._offset],s},_read_condition(){var s=e,i=this._offset;this._cache._condition=this._cache._condition||{};var h=this._cache._condition[i];if(h)return this._offset=h[1],h[0];var o,r=this._offset,f=new Array(3),n=e,a=null,_=this._offset+6;if(_<=this._inputSize&&(a=this._input.substring(this._offset,_)),"no hay"===a?(n=new t(this._input.substring(this._offset,this._offset+6),this._offset,[]),this._offset=this._offset+6):(n=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::condition","'no hay'"])),n!==e)if(f[0]=n,this._read_ws()!==e)if((o=this._read_sprite())!==e)if(f[1]=o,this._read_ws()!==e){var l=e,c=null,u=this._offset+8;u<=this._inputSize&&(c=this._input.substring(this._offset,u)),"adelante"===c?(l=new t(this._input.substring(this._offset,this._offset+8),this._offset,[]),this._offset=this._offset+8):(l=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::condition","'adelante'"])),l!==e?f[2]=l:(f=null,this._offset=r)}else f=null,this._offset=r;else f=null,this._offset=r;else f=null,this._offset=r;else f=null,this._offset=r;return null===f?s=e:(s=this._actions.makeCondition(this._input,r,this._offset,f),this._offset=this._offset),this._cache._condition[i]=[s,this._offset],s},_read_sprite(){var s=e,i=this._offset;this._cache._sprite=this._cache._sprite||{};var h=this._cache._sprite[i];if(h)return this._offset=h[1],h[0];var o=this._offset,r=null,f=this._offset+5;if(f<=this._inputSize&&(r=this._input.substring(this._offset,f)),"pared"===r?(s=new t(this._input.substring(this._offset,this._offset+5),this._offset,[]),this._offset=this._offset+5):(s=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::sprite","'pared'"])),s===e){this._offset=o;var n=null,a=this._offset+4;a<=this._inputSize&&(n=this._input.substring(this._offset,a)),"algo"===n?(s=new t(this._input.substring(this._offset,this._offset+4),this._offset,[]),this._offset=this._offset+4):(s=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::sprite","'algo'"])),s===e&&(this._offset=o)}return this._cache._sprite[i]=[s,this._offset],s},_read_move(){var t=e,s=this._offset;this._cache._move=this._cache._move||{};var i=this._cache._move[s];if(i)return this._offset=i[1],i[0];var h=null,o=this._offset+7;return o<=this._inputSize&&(h=this._input.substring(this._offset,o)),"avanzar"===h?(t=this._actions.makeMove(this._input,this._offset,this._offset+7,[]),this._offset=this._offset+7):(t=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::move","'avanzar'"])),this._cache._move[s]=[t,this._offset],t},_read_shoot(){var t=e,s=this._offset;this._cache._shoot=this._cache._shoot||{};var i=this._cache._shoot[s];if(i)return this._offset=i[1],i[0];var h=null,o=this._offset+8;return o<=this._inputSize&&(h=this._input.substring(this._offset,o)),"disparar"===h?(t=this._actions.makeShoot(this._input,this._offset,this._offset+8,[]),this._offset=this._offset+8):(t=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::shoot","'disparar'"])),this._cache._shoot[s]=[t,this._offset],t},_read_turn(){var s=e,i=this._offset;this._cache._turn=this._cache._turn||{};var h=this._cache._turn[i];if(h)return this._offset=h[1],h[0];var o=this._offset,r=new Array(2),f=e,n=null,a=this._offset+5;if(a<=this._inputSize&&(n=this._input.substring(this._offset,a)),"girar"===n?(f=new t(this._input.substring(this._offset,this._offset+5),this._offset,[]),this._offset=this._offset+5):(f=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::turn","'girar'"])),f!==e)if(r[0]=f,this._read_ws()!==e){var _,l=e,c=null,u=this._offset+8;if(u<=this._inputSize&&(c=this._input.substring(this._offset,u)),"hacia la"===c?(l=new t(this._input.substring(this._offset,this._offset+8),this._offset,[]),this._offset=this._offset+8):(l=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::turn","'hacia la'"])),l!==e)if(this._read_ws()!==e)(_=this._read_direction())!==e?r[1]=_:(r=null,this._offset=o);else r=null,this._offset=o;else r=null,this._offset=o}else r=null,this._offset=o;else r=null,this._offset=o;return null===r?s=e:(s=this._actions.makeTurn(this._input,o,this._offset,r),this._offset=this._offset),this._cache._turn[i]=[s,this._offset],s},_read_direction(){var s=e,i=this._offset;this._cache._direction=this._cache._direction||{};var h=this._cache._direction[i];if(h)return this._offset=h[1],h[0];var o=this._offset,r=null,f=this._offset+9;if(f<=this._inputSize&&(r=this._input.substring(this._offset,f)),"izquierda"===r?(s=new t(this._input.substring(this._offset,this._offset+9),this._offset,[]),this._offset=this._offset+9):(s=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::direction",'"izquierda"'])),s===e){this._offset=o;var n=null,a=this._offset+7;a<=this._inputSize&&(n=this._input.substring(this._offset,a)),"derecha"===n?(s=new t(this._input.substring(this._offset,this._offset+7),this._offset,[]),this._offset=this._offset+7):(s=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::direction",'"derecha"'])),s===e&&(this._offset=o)}return this._cache._direction[i]=[s,this._offset],s},_read_ws(){var s=e,i=this._offset;this._cache._ws=this._cache._ws||{};var h=this._cache._ws[i];if(h)return this._offset=h[1],h[0];for(var o=this._offset,r=[],f=null;;){for(var n=this._offset,a=[],_=null;;){var l=null,c=this._offset+1;if(c<=this._inputSize&&(l=this._input.substring(this._offset,c)),null!==l&&/^[ \t]/.test(l)?(_=new t(this._input.substring(this._offset,this._offset+1),this._offset,[]),this._offset=this._offset+1):(_=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::ws","[ \\t]"])),_===e)break;a.push(_)}if(a.length>=1?(f=new t(this._input.substring(n,this._offset),n,a),this._offset=this._offset):f=e,f===e)break;r.push(f)}return r.length>=0?(s=new t(this._input.substring(o,this._offset),o,r),this._offset=this._offset):s=e,this._cache._ws[i]=[s,this._offset],s},_read_nl(){var s=e,i=this._offset;this._cache._nl=this._cache._nl||{};var h=this._cache._nl[i];if(h)return this._offset=h[1],h[0];for(var o=this._offset,r=[],f=null;;){for(var n=this._offset,a=[],_=null;;){var l=null,c=this._offset+1;if(c<=this._inputSize&&(l=this._input.substring(this._offset,c)),null!==l&&/^[\r\n]/.test(l)?(_=new t(this._input.substring(this._offset,this._offset+1),this._offset,[]),this._offset=this._offset+1):(_=e,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::nl","[\\r\\n]"])),_===e)break;a.push(_)}if(a.length>=1?(f=new t(this._input.substring(n,this._offset),n,a),this._offset=this._offset):f=e,f===e)break;r.push(f)}return r.length>=0?(s=new t(this._input.substring(o,this._offset),o,r),this._offset=this._offset):s=e,this._cache._nl[i]=[s,this._offset],s}},h=function(t,s,e){this._input=t,this._inputSize=t.length,this._actions=s,this._types=e,this._offset=0,this._cache={},this._failure=0,this._expected=[]};function o(t,s){function e(){}e.prototype=s.prototype,t.prototype=new e,t.prototype.constructor=t}h.prototype.parse=function(){var t=this._read_body();if(t!==e&&this._offset===this._inputSize)return t;throw 0===this._expected.length&&(this._failure=this._offset,this._expected.push(["SiDiLa","<EOF>"])),this.constructor.lastError={offset:this._offset,expected:this._expected},new SyntaxError(function(t,s,e){for(var i=t.split(/\n/g),h=0,o=0;o<=s;)o+=i[h].length+1,h+=1;for(var r=i[h-1],f="Line "+h+": expected one of:\n\n",n=0;n<e.length;n++)f+="    - "+e[n][1]+" from "+e[n][0]+"\n";for(var a=h.toString();a.length<6;)a=" "+a;for(f+="\n"+a+" | "+r+"\n",o-=r.length+10;o<s;)f+=" ",o+=1;return f+"^"}(this._input,this._failure,this._expected))},Object.assign(h.prototype,i);var r={Grammar:i,Parser:h,parse:function(t,s){return new h(t,(s=s||{}).actions,s.types).parse()}};Object.assign(s,r)}()},48:t=>{"use strict";t.exports=JSON.parse('{"width":16,"height":16,"player":{"x":12,"y":2,"direction":"South"},"theme":{"image":"dungeon.png","imageWidth":384,"imageHeight":160,"spriteWidth":16,"spriteHeight":16,"background":"#91b09a","sprite":{"north":189,"east":189,"south":189,"west":189,"dead":165,"nextNorth":212,"nextEast":213,"nextSouth":237,"nextWest":236}},"logic":{"1":"Sphinx","2":"Zombie","54":"Space","172":"Exit","173":"Exit","174":"Exit","175":"Exit"},"space":54,"map":[[5,6,6,6,6,104,6,6,6,6,6,192,193,194,6,7],[29,30,30,147,30,128,30,30,168,30,30,216,217,218,30,31],[53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[102,54,54,54,54,54,54,54,209,210,54,54,54,54,54,75],[76,54,54,54,54,54,54,54,233,234,54,54,54,54,54,99],[100,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[102,54,54,54,54,54,54,54,54,54,8,78,78,127,78,4],[53,54,54,54,54,54,54,54,54,182,99,25,25,25,25,25],[76,54,54,54,54,54,54,54,182,182,55,25,25,25,25,25],[100,54,54,54,54,54,54,54,54,54,56,6,6,6,6,7],[53,54,54,54,54,54,54,54,54,54,80,171,30,174,30,31],[53,54,54,54,54,54,54,158,54,54,54,54,54,54,54,55],[53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],[77,78,78,78,127,78,78,78,78,78,127,78,78,78,78,79]]}')}},s={};function e(i){var h=s[i];if(void 0!==h)return h.exports;var o=s[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.d=(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};(()=>{"use strict";e.r(i),e.d(i,{CanvasPainter:()=>a,EditorBoard:()=>f,GameBoard:()=>r,PalettePainter:()=>_,StepInterpreter:()=>x,Storage:()=>w,maps:()=>b,parse:()=>k});class t{static Wall=new t("█");static Exit=new t("░");static Space=new t(" ");static Zombie=new t("👾");static Sphinx=new t("💀");constructor(t){this.symbol=t}}class s{static North=new s("▲",(t=>({x:t.x,y:t.y-1})));static East=new s("▶",(t=>({x:t.x+1,y:t.y})));static South=new s("▼",(t=>({x:t.x,y:t.y+1})));static West=new s("◀",(t=>({x:t.x-1,y:t.y})));constructor(t,s){this.symbol=t,this.action=s}advance(t){return this.action(t)}static order=[this.North,this.East,this.South,this.West];static toTheRight(t){const s=this.order.indexOf(t)+1;return this.order[s%4]}static toTheLeft(t){const s=this.order.indexOf(t)-1;return this.order[s>-1?s:3]}}class h{constructor(t,s,e){this.x=t,this.y=s,this.direction=e,this.crashed=!1,this.done=!1}setupSprites(t){s.North.sprite=t.sprite.north,s.East.sprite=t.sprite.east,s.South.sprite=t.sprite.south,s.West.sprite=t.sprite.west,s.North.arrowSprite=t.sprite.nextNorth,s.East.arrowSprite=t.sprite.nextEast,s.South.arrowSprite=t.sprite.nextSouth,s.West.arrowSprite=t.sprite.nextWest,this.deadSprite=t.sprite.dead}getSprite(){return this.crashed?this.deadSprite:this.direction.sprite}getNextMoveSprite(){return this.crashed||this.done?null:this.direction.arrowSprite}move(){const t=this.direction.advance(this);this.x=t.x,this.y=t.y}getShootTarget(){return this.direction.advance(this)}crash(){this.crashed=!0}finish(){this.done=!0}wouldMove(){return this.direction.advance(this)}wouldMoveTo(t,s){const e=this.wouldMove();return e.x===t&&e.y===s}isAt(t,s){return this.x==t&&this.y==s}rotateLeft(){this.direction=s.toTheLeft(this.direction)}rotateRight(){this.direction=s.toTheRight(this.direction)}}class o{loadScene(t){this.scene=t}getSprite(t,s){return this.scene.map[s][t]}getLogicLabelForSprite(t){return this.scene.logic[t]}getLogic(s,e){const i=this.getLogicLabelForSprite(this.getSprite(s,e));return void 0===i?t.Wall:t[i]}getSlotIndexFor(t,s){return t+s*this.scene.width}getCoordinatesFor(t){return{x:t%this.scene.width,y:Math.floor(t/this.scene.width)}}}class r extends o{constructor(){super(),this.reset()}reset(){const t=e(48);this.loadScene(t),this.player=new h(this.scene.player.x,this.scene.player.y,s[this.scene.player.direction]),this.player.setupSprites(this.scene.theme)}canMoveInto(s,e){const i=this.getLogic(s,e);return i===t.Space||i===t.Exit}isCrashed(){return this.player.crashed}isDone(){return this.player.done}movePlayer(){const s=this.player.wouldMove();this.canMoveInto(s.x,s.y)?(this.player.move(),this.getLogic(this.player.x,this.player.y)===t.Exit&&this.player.finish()):this.player.crash()}rotatePlayerLeft(){this.player.rotateLeft()}rotatePlayerRight(){this.player.rotateRight()}playerShoot(){const s=this.player.getShootTarget();this.getLogic(s.x,s.y)===t.Zombie&&(this.scene.map[s.x][s.y]=this.scene.space)}getLogicInFrontOfPlayer(){const t=this.player.wouldMove();return this.getLogic(t.x,t.y)}getSprite(t,s){return super.getSprite(t,s)}getOverlaySprite(t,s){return this.player.isAt(t,s)?this.player.getSprite():this.player.wouldMoveTo(t,s)?this.player.getNextMoveSprite():null}}class f extends o{constructor(){super()}load(t){const s=JSON.parse(t);this.loadScene(s)}save(){return JSON.stringify(this.scene,null,2)}setSlot(t,s){const e=this.getCoordinatesFor(t);this.scene.map[e.y][e.x]=s}getOverlaySprite(t,s){return null}}class n{constructor(t,s,e,i,h,o){this.canvas=t,this.width=s,this.height=e,this.slotWidth=i,this.slotHeight=h,this.slotsInX=Math.floor(this.width/this.slotWidth),this.slotsInY=Math.floor(this.height/this.slotHeight),this.hoverColor=o,this.scaleX=t.clientWidth/this.width,this.scaleY=t.clientHeight/this.height}mouseOver(t,s){return this.hover=this.getSlotIndexForDiscrete(Math.floor(t/this.scaleX/this.slotWidth),Math.floor(s/this.scaleY/this.slotHeight)),this.hover}getSlotIndexForDiscrete(t,s){return t+s*this.slotsInX}getCanvasCoordinatesForSlot(t){return{x:t%this.slotsInX*this.slotWidth,y:Math.floor(t/this.slotsInX)*this.slotHeight}}drawGridSlot(t,s,e){t.strokeStyle=e,t.strokeRect(s.x+.5,s.y+.5,this.slotWidth-1,this.slotHeight-1)}paintHover(t){if(void 0!==this.hover){const s=this.getCanvasCoordinatesForSlot(this.hover);this.drawGridSlot(t,s,this.hoverColor)}}}class a extends n{constructor(t,s){super(t,s.width*s.theme.spriteWidth,s.height*s.theme.spriteHeight,s.theme.spriteWidth,s.theme.spriteHeight,"red"),this.scene=s,this.sprites=new Image,this.sprites.src=`/sidila/img/${this.scene.theme.image}`}paint(t){const s=this.canvas.getContext("2d");s.fillStyle=this.scene.theme.background,s.fillRect(0,0,this.canvas.width,this.canvas.height);for(let e=0;e<this.slotsInY;e++)for(let i=0;i<this.slotsInX;i++){const h=t.getSprite(i,e);this.drawSprite(s,h,i,e);const o=t.getOverlaySprite(i,e);null!=o&&this.drawSprite(s,o,i,e)}this.paintHover(s)}drawSprite(t,s,e,i){const h=this.getSourceX(s),o=this.getSourceY(s);t.drawImage(this.sprites,h,o,this.slotWidth,this.slotHeight,e*this.slotWidth,i*this.slotHeight,this.slotWidth,this.slotHeight)}getSourceX(t){return this.slotWidth*(t%(this.sprites.width/this.slotWidth))}getSourceY(t){return this.slotHeight*Math.floor(t/(this.sprites.width/this.slotWidth))}}class _ extends n{constructor(t,s){super(t,s.theme.imageWidth,s.theme.imageHeight,s.theme.spriteWidth,s.theme.spriteHeight,"red"),this.scene=s,this.sprites=new Image,this.sprites.src=`/sidila/img/${s.theme.image}`,this.selected=0}paint(){const t=this.canvas.getContext("2d");if(t.clearRect(0,0,this.canvas.width,this.canvas.height),t.drawImage(this.sprites,0,0),void 0!==this.selected){const s=this.getCanvasCoordinatesForSlot(this.selected);this.drawGridSlot(t,s,"white")}this.paintHover(t)}selectSlot(t){this.selected=t}}class l{constructor(){this.subscribers=[]}addSubscriber(t){this.subscribers.includes(t)||this.subscribers.push(t)}publish(t){this.subscribers.forEach((s=>{s(t)}))}}class c{constructor(t,s){this.location={start:t,end:s}}}class u extends c{constructor(t,s){super(t,s)}}class p extends u{constructor(t,s){super(t,s)}execute(t){t.movePlayer()}}class d extends u{constructor(t,s){super(t,s)}execute(t){t.playerShoot()}}class g{static Left=new g((t=>t.rotatePlayerLeft()));static Right=new g((t=>t.rotatePlayerRight()));constructor(t){this.action=t}}class v extends u{constructor(t,s,e){super(t,s),this.direction="derecha"===e?g.Right:g.Left}execute(t){this.direction.action(t)}}class S extends c{constructor(t,s,e,i){super(t,s),this.condition=e,this.body=i}evaluate(t){return this.condition.evaluate(t)}}class y extends c{constructor(s,e,i){super(s,e),this.condition="pared"===i?s=>s!==t.Wall:s=>s===t.Space}evaluate(t){return this.condition(t.getLogicInFrontOfPlayer())}}class x{constructor(t,s){this.publisher=new l,this.board=t,this.tree=s,this.stack=[],this.stackBody(this.tree.elements)}stackBody(t){for(let s=t.length-1;s>=0;s--)this.stackNode(t[s])}stackNode(t){this.stack.push(t)}tick(){const t=this.stack.pop();void 0!==t&&this.visitNode(t)}isFinished(){return 0===this.stack.length}visitNode(t){const s=t.elements[0],e=this.createStepEvent(s);this.publisher.publish(e),s instanceof u?s.execute(board):s instanceof S&&s.evaluate(board)&&(this.stackNode(t),this.stackBody(s.body))}createStepEvent(t){return{location:t.location}}subscribeToStep(t){this.publisher.addSubscriber(t)}}const m="sidila-program-";class w{static loadFiles(t){w.emptySelectWidget(t);for(let s=0,e=localStorage.length;s<e;++s)if(localStorage.key(s).startsWith(m)){const e=document.createElement("option");e.text=w.getFilenameFromKey(localStorage.key(s)),e.value=localStorage.key(s),t.add(e)}}static emptySelectWidget(t){for(let s=1;s<t.length;s++)t.remove(s)}static loadProgram(t,s){const e=t.options[t.selectedIndex].value;null!=e&&""!=e&&(s.value=localStorage.getItem(e))}static saveProgram(t,s,e){const i=w.getKeyFromFilename(t.value);if(null!==localStorage.getItem(i)&&!e.checked)throw new Error("Ya existe un programa con ese nombre");localStorage.setItem(i,s.value)}static getKeyFromFilename(t){return m+t}static getFilenameFromKey(t){return t.substring(m.length,t.length)}}const b=e(498);class L{makeMove(t,s,e,i){return new p(s,e)}makeShoot(t,s,e,i){return new d(s,e)}makeTurn(t,s,e,i){return new v(s,e,i[1].text)}makeLoop(t,s,e,i){return new S(s,e,i[1],i[2].elements)}makeCondition(t,s,e,i){return new y(s,e,i[1].text)}}function k(t){return b.parse(t,{actions:new L})}})(),sidila=i})();