var sidila;(()=>{var t={498:(t,s)=>{!function(){"use strict";function t(t,s,i){this.text=t,this.offset=s,this.elements=i}t.prototype.forEach=function(t,s){for(var i=this.elements,e=0,h=i.length;e<h;e++)t.call(s,i[e],e,i)},"undefined"!=typeof Symbol&&Symbol.iterator&&(t.prototype[Symbol.iterator]=function(){return this.elements[Symbol.iterator]()}),function(t,s){function i(){}i.prototype=s.prototype,(t.prototype=new i).constructor=t}((function(s,i,e){t.apply(this,arguments),this.direction=e[1]}),t);var i={},e={_read_statement(){var s=i,e=this._offset;this._cache._statement=this._cache._statement||{};var h=this._cache._statement[e];if(h)return this._offset=h[1],h[0];for(var r=this._offset,o=[],f=null;;){var a=this._offset,n=new Array(1),_=i,c=this._offset;if((_=this._read_turn())===i&&(this._offset=c,(_=this._read_move())===i&&(this._offset=c,(_=this._read_shoot())===i&&(this._offset=c))),_!==i?(n[0]=_,this._read_nl()!==i||(n=null,this._offset=a)):(n=null,this._offset=a),null===n?f=i:(f=new t(this._input.substring(a,this._offset),a,n),this._offset=this._offset),f===i)break;o.push(f)}return o.length>=0?(s=new t(this._input.substring(r,this._offset),r,o),this._offset=this._offset):s=i,this._cache._statement[e]=[s,this._offset],s},_read_move(){var t=i,s=this._offset;this._cache._move=this._cache._move||{};var e=this._cache._move[s];if(e)return this._offset=e[1],e[0];var h=null,r=this._offset+7;return r<=this._inputSize&&(h=this._input.substring(this._offset,r)),"avanzar"===h?(t=this._actions.make_move(this._input,this._offset,this._offset+7,[]),this._offset=this._offset+7):(t=i,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::move","'avanzar'"])),this._cache._move[s]=[t,this._offset],t},_read_shoot(){var t=i,s=this._offset;this._cache._shoot=this._cache._shoot||{};var e=this._cache._shoot[s];if(e)return this._offset=e[1],e[0];var h=null,r=this._offset+8;return r<=this._inputSize&&(h=this._input.substring(this._offset,r)),"disparar"===h?(t=this._actions.make_shoot(this._input,this._offset,this._offset+8,[]),this._offset=this._offset+8):(t=i,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::shoot","'disparar'"])),this._cache._shoot[s]=[t,this._offset],t},_read_turn(){var s=i,e=this._offset;this._cache._turn=this._cache._turn||{};var h=this._cache._turn[e];if(h)return this._offset=h[1],h[0];var r=this._offset,o=new Array(2),f=i,a=null,n=this._offset+5;if(n<=this._inputSize&&(a=this._input.substring(this._offset,n)),"girar"===a?(f=new t(this._input.substring(this._offset,this._offset+5),this._offset,[]),this._offset=this._offset+5):(f=i,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::turn","'girar'"])),f!==i)if(o[0]=f,this._read_ws()!==i){var _,c=i,l=null,u=this._offset+8;if(u<=this._inputSize&&(l=this._input.substring(this._offset,u)),"hacia la"===l?(c=new t(this._input.substring(this._offset,this._offset+8),this._offset,[]),this._offset=this._offset+8):(c=i,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::turn","'hacia la'"])),c!==i)if(this._read_ws()!==i)(_=this._read_direction())!==i?o[1]=_:(o=null,this._offset=r);else o=null,this._offset=r;else o=null,this._offset=r}else o=null,this._offset=r;else o=null,this._offset=r;return null===o?s=i:(s=this._actions.make_turn(this._input,r,this._offset,o),this._offset=this._offset),this._cache._turn[e]=[s,this._offset],s},_read_direction(){var s=i,e=this._offset;this._cache._direction=this._cache._direction||{};var h=this._cache._direction[e];if(h)return this._offset=h[1],h[0];var r=this._offset,o=null,f=this._offset+9;if(f<=this._inputSize&&(o=this._input.substring(this._offset,f)),"izquierda"===o?(s=new t(this._input.substring(this._offset,this._offset+9),this._offset,[]),this._offset=this._offset+9):(s=i,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::direction",'"izquierda"'])),s===i){this._offset=r;var a=null,n=this._offset+7;n<=this._inputSize&&(a=this._input.substring(this._offset,n)),"derecha"===a?(s=new t(this._input.substring(this._offset,this._offset+7),this._offset,[]),this._offset=this._offset+7):(s=i,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::direction",'"derecha"'])),s===i&&(this._offset=r)}return this._cache._direction[e]=[s,this._offset],s},_read_ws(){var s=i,e=this._offset;this._cache._ws=this._cache._ws||{};var h=this._cache._ws[e];if(h)return this._offset=h[1],h[0];for(var r=this._offset,o=[],f=null;;){for(var a=this._offset,n=[],_=null;;){var c=null,l=this._offset+1;if(l<=this._inputSize&&(c=this._input.substring(this._offset,l)),null!==c&&/^[ \t]/.test(c)?(_=new t(this._input.substring(this._offset,this._offset+1),this._offset,[]),this._offset=this._offset+1):(_=i,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::ws","[ \\t]"])),_===i)break;n.push(_)}if(n.length>=1?(f=new t(this._input.substring(a,this._offset),a,n),this._offset=this._offset):f=i,f===i)break;o.push(f)}return o.length>=0?(s=new t(this._input.substring(r,this._offset),r,o),this._offset=this._offset):s=i,this._cache._ws[e]=[s,this._offset],s},_read_nl(){var s=i,e=this._offset;this._cache._nl=this._cache._nl||{};var h=this._cache._nl[e];if(h)return this._offset=h[1],h[0];for(var r=this._offset,o=[],f=null;;){for(var a=this._offset,n=[],_=null;;){var c=null,l=this._offset+1;if(l<=this._inputSize&&(c=this._input.substring(this._offset,l)),null!==c&&/^[\r\n]/.test(c)?(_=new t(this._input.substring(this._offset,this._offset+1),this._offset,[]),this._offset=this._offset+1):(_=i,this._offset>this._failure&&(this._failure=this._offset,this._expected=[]),this._offset===this._failure&&this._expected.push(["SiDiLa::nl","[\\r\\n]"])),_===i)break;n.push(_)}if(n.length>=1?(f=new t(this._input.substring(a,this._offset),a,n),this._offset=this._offset):f=i,f===i)break;o.push(f)}return o.length>=0?(s=new t(this._input.substring(r,this._offset),r,o),this._offset=this._offset):s=i,this._cache._nl[e]=[s,this._offset],s}},h=function(t,s,i){this._input=t,this._inputSize=t.length,this._actions=s,this._types=i,this._offset=0,this._cache={},this._failure=0,this._expected=[]};h.prototype.parse=function(){var t=this._read_statement();if(t!==i&&this._offset===this._inputSize)return t;throw 0===this._expected.length&&(this._failure=this._offset,this._expected.push(["SiDiLa","<EOF>"])),this.constructor.lastError={offset:this._offset,expected:this._expected},new SyntaxError(function(t,s,i){for(var e=t.split(/\n/g),h=0,r=0;r<=s;)r+=e[h].length+1,h+=1;for(var o=e[h-1],f="Line "+h+": expected one of:\n\n",a=0;a<i.length;a++)f+="    - "+i[a][1]+" from "+i[a][0]+"\n";for(var n=h.toString();n.length<6;)n=" "+n;for(f+="\n"+n+" | "+o+"\n",r-=o.length+10;r<s;)f+=" ",r+=1;return f+"^"}(this._input,this._failure,this._expected))},Object.assign(h.prototype,e);var r={Grammar:e,Parser:h,parse:function(t,s){return new h(t,(s=s||{}).actions,s.types).parse()}};Object.assign(s,r)}()}},s={};function i(e){var h=s[e];if(void 0!==h)return h.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.d=(t,s)=>{for(var e in s)i.o(s,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})},i.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};(()=>{"use strict";i.r(e),i.d(e,{AsciiPainter:()=>o,BasicPainter:()=>a,Board:()=>r,CanvasPainter:()=>n,CardinalDirection:()=>s,Player:()=>h,StepInterpreter:()=>_,maps:()=>c,parse:()=>u});class t{static Wall=new t("█");static Exit=new t("░");static Space=new t(" ");static Zombie=new t("👾");static Sphinx=new t("💀");constructor(t){this.symbol=t}}class s{static North=new s("▲",(t=>({x:t.x,y:t.y-1})));static East=new s("▶",(t=>({x:t.x+1,y:t.y})));static South=new s("▼",(t=>({x:t.x,y:t.y+1})));static West=new s("◀",(t=>({x:t.x-1,y:t.y})));constructor(t,s){this.symbol=t,this.action=s}advance(t){return this.action(t)}static order=[this.North,this.East,this.South,this.West];static toTheRight(t){const s=this.order.indexOf(t)+1;return this.order[s%4]}static toTheLeft(t){const s=this.order.indexOf(t)-1;return this.order[s>-1?s:3]}}class h{constructor(t,s,i){this.x=t,this.y=s,this.direction=i,this.crashed=!1}getSymbol(){return this.crashed?"✟":this.direction.symbol}move(){const t=this.direction.advance(this);this.x=t.x,this.y=t.y}getShootTarget(){return this.direction.advance(this)}crash(){this.crashed=!0}wouldMove(){return this.direction.advance(this)}isAt(t,s){return this.x==t&&this.y==s}rotateLeft(){this.direction=s.toTheLeft(this.direction)}rotateRight(){this.direction=s.toTheRight(this.direction)}}class r{constructor(t){this.side=t,this.reset()}reset(){this.player=new sidila.Player(1,1,sidila.CardinalDirection.East),this.boardLoadHardcoded()}boardLoadHardcoded(){this.board=[];for(let s=0;s<this.side;s++){this.board[s]=[];for(let i=0;i<this.side;i++){let e;e=0==s||0==i||s==this.side-1||i==this.side-1?t.Wall:t.Space,this.board[s][i]=e}}for(let s=0;s<this.side;s++)this.board[s][0]=t.Wall,this.board[s][this.side-1]=t.Wall,this.board[0][s]=t.Wall,this.board[this.side-1][s]=t.Wall;this.board[this.side-1][this.side-2]=t.Exit,this.board[this.getInnerRandomPosition()][this.getInnerRandomPosition()]=t.Zombie,this.board[this.getInnerRandomPosition()][this.getInnerRandomPosition()]=t.Sphinx,this.target=t=>t.x==this.side-1&&t.y==this.side-2}getInnerRandomPosition(){return Math.floor(8*Math.random())+2}canMoveInto(s,i){return this.board[s][i]===t.Space||this.board[s][i]===t.Exit}isCrashed(){return this.player.crashed}isDone(){return this.target(this.player)}movePlayer(){const t=this.player.wouldMove();this.canMoveInto(t.x,t.y)?this.player.move():this.player.crash()}rotatePlayerLeft(){this.player.rotateLeft()}rotatePlayerRight(){this.player.rotateRight()}playerShoot(){const s=this.player.getShootTarget();this.board[s.x][s.y]===t.Zombie&&(this.board[s.x][s.y]=t.Space)}getPieceSymbol(t,s){return this.player.isAt(t,s)?this.player.getSymbol():this.board[t][s].symbol}}class o{static paint(t){let s="";for(let i=0;i<t.side;i++){for(let e=0;e<t.side;e++)s+=t.getPieceSymbol(e,i);s+="\n"}return s}}const f={"█":"wall.png","░":"exit.png"," ":"space.png","▲":"player-n.png","▶":"player-e.png","▼":"player-s.png","◀":"player-w.png","✟":"skull.png","👾":"zombie.png","💀":"greek-sphinx.png"};class a{static paint(t){let s='<div class="sidila-row">';for(let i=0;i<t.side;i++){for(let e=0;e<t.side;e++)s+=this.getImageTag(t.getPieceSymbol(e,i));s+='</div><div class="sidila-row">'}return s+="</div>",s}static getImageTag(t){return this.getBaseTag(f[t])}static getBaseTag(t){return`<img src="/sidila/img/${t}">`}}class n{constructor(t,s){this.canvas=t,this.slotSize=s,this.imageMap={};for(const t in f)this.imageMap[t]=new Image,this.imageMap[t].src=`/sidila/img/${f[t]}`}paint(t){const s=this.canvas.getContext("2d");for(let i=0;i<t.side;i++)for(let e=0;e<t.side;e++){let h=this.imageMap[t.getPieceSymbol(e,i)];s.drawImage(h,e*this.slotSize,i*this.slotSize)}}}class _{static processStatement(t,s,i){const e=t.elements[s];this.tryExecuting(e,i)}static tryExecuting(t,s){const i=t.elements[0];switch(i.action){case"move":s.movePlayer();break;case"shoot":s.playerShoot();break;case"turn":"derecha"===i.direction?s.rotatePlayerRight():s.rotatePlayerLeft()}}}const c=i(498);class l{make_move(t,s,i,e){return{action:"move"}}make_shoot(t,s,i,e){return{action:"shoot"}}make_turn(t,s,i,e){return{action:"turn",direction:e[1].text}}}function u(t){return c.parse(t,{actions:new l})}})(),sidila=e})();