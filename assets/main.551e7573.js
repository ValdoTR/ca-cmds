class P{constructor(e){this.properties=e!=null?e:[]}get(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.value);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(r!==void 0){if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(t!=="json"&&typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter(r=>r.name===e).map(r=>r.type);if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(t.length!==0)return t[0]}}const V="https://unpkg.com/@workadventure/scripting-api-extra@1.4.5/dist";class te{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new P(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function D(n){const e=n?"#"+n.join():"";WA.nav.openCoWebSite(V+"/configuration.html"+e)}async function ne(n,e){const t=await WA.room.getTiledMap(),r=new Map;return X(t.layers,r,n,e),r}function X(n,e,t,r){for(const o of n)if(o.type==="objectgroup"){for(const s of o.objects)if(s.type==="variable"||s.class==="variable"){if(!!t&&o.name!==t||!!r&&!r.includes(s.name))continue;e.set(s.name,new te(s))}}else o.type==="group"&&X(o.layers,e,t,r)}let I;async function T(){return I===void 0&&(I=re()),I}async function re(){return oe(await WA.room.getTiledMap())}function oe(n){const e=new Map;return Y(n.layers,"",e),e}function Y(n,e,t){for(const r of n)r.type==="group"?Y(r.layers,e+r.name+"/",t):(r.name=e+r.name,t.set(r.name,r))}async function se(){const n=await T(),e=[];for(const t of n.values())if(t.type==="objectgroup")for(const r of t.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function ie(n){let e=1/0,t=1/0,r=0,o=0;const s=n.data;if(typeof s=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<n.height;i++)for(let a=0;a<n.width;a++)s[a+i*n.width]!==0&&(e=Math.min(e,a),o=Math.max(o,a),t=Math.min(t,i),r=Math.max(r,i));return{top:t,left:e,right:o+1,bottom:r+1}}function Z(n){let e=1/0,t=1/0,r=0,o=0;for(const s of n){const i=ie(s);i.left<e&&(e=i.left),i.top<t&&(t=i.top),i.right>o&&(o=i.right),i.bottom>r&&(r=i.bottom)}return{top:t,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var ae=Object.prototype.toString,S=Array.isArray||function(e){return ae.call(e)==="[object Array]"};function U(n){return typeof n=="function"}function ue(n){return S(n)?"array":typeof n}function j(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function _(n,e){return n!=null&&typeof n=="object"&&e in n}function le(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var ce=RegExp.prototype.test;function pe(n,e){return ce.call(n,e)}var fe=/\S/;function he(n){return!pe(fe,n)}var ge={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function de(n){return String(n).replace(/[&<>"'`=\/]/g,function(t){return ge[t]})}var ye=/\s*/,me=/\s+/,z=/\s*=/,ve=/\s*\}/,be=/#|\^|\/|>|\{|&|=|!/;function Ae(n,e){if(!n)return[];var t=!1,r=[],o=[],s=[],i=!1,a=!1,u="",c=0;function p(){if(i&&!a)for(;s.length;)delete o[s.pop()];else s=[];i=!1,a=!1}var d,m,k;function E(b){if(typeof b=="string"&&(b=b.split(me,2)),!S(b)||b.length!==2)throw new Error("Invalid tags: "+b);d=new RegExp(j(b[0])+"\\s*"),m=new RegExp("\\s*"+j(b[1])),k=new RegExp("\\s*"+j("}"+b[1]))}E(e||g.tags);for(var l=new M(n),v,h,y,C,B,w;!l.eos();){if(v=l.pos,y=l.scanUntil(d),y)for(var R=0,ee=y.length;R<ee;++R)C=y.charAt(R),he(C)?(s.push(o.length),u+=C):(a=!0,t=!0,u+=" "),o.push(["text",C,v,v+1]),v+=1,C===`
`&&(p(),u="",c=0,t=!1);if(!l.scan(d))break;if(i=!0,h=l.scan(be)||"name",l.scan(ye),h==="="?(y=l.scanUntil(z),l.scan(z),l.scanUntil(m)):h==="{"?(y=l.scanUntil(k),l.scan(ve),l.scanUntil(m),h="&"):y=l.scanUntil(m),!l.scan(m))throw new Error("Unclosed tag at "+l.pos);if(h==">"?B=[h,y,v,l.pos,u,c,t]:B=[h,y,v,l.pos],c++,o.push(B),h==="#"||h==="^")r.push(B);else if(h==="/"){if(w=r.pop(),!w)throw new Error('Unopened section "'+y+'" at '+v);if(w[1]!==y)throw new Error('Unclosed section "'+w[1]+'" at '+v)}else h==="name"||h==="{"||h==="&"?a=!0:h==="="&&E(y)}if(p(),w=r.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+l.pos);return We(we(o))}function we(n){for(var e=[],t,r,o=0,s=n.length;o<s;++o)t=n[o],t&&(t[0]==="text"&&r&&r[0]==="text"?(r[1]+=t[1],r[3]=t[3]):(e.push(t),r=t));return e}function We(n){for(var e=[],t=e,r=[],o,s,i=0,a=n.length;i<a;++i)switch(o=n[i],o[0]){case"#":case"^":t.push(o),r.push(o),t=o[4]=[];break;case"/":s=r.pop(),s[5]=o[2],t=r.length>0?r[r.length-1][4]:e;break;default:t.push(o)}return e}function M(n){this.string=n,this.tail=n,this.pos=0}M.prototype.eos=function(){return this.tail===""};M.prototype.scan=function(e){var t=this.tail.match(e);if(!t||t.index!==0)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};M.prototype.scanUntil=function(e){var t=this.tail.search(e),r;switch(t){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,t),this.tail=this.tail.substring(t)}return this.pos+=r.length,r};function W(n,e){this.view=n,this.cache={".":this.view},this.parent=e}W.prototype.push=function(e){return new W(e,this)};W.prototype.lookup=function(e){var t=this.cache,r;if(t.hasOwnProperty(e))r=t[e];else{for(var o=this,s,i,a,u=!1;o;){if(e.indexOf(".")>0)for(s=o.view,i=e.split("."),a=0;s!=null&&a<i.length;)a===i.length-1&&(u=_(s,i[a])||le(s,i[a])),s=s[i[a++]];else s=o.view[e],u=_(o.view,e);if(u){r=s;break}o=o.parent}t[e]=r}return U(r)&&(r=r.call(this.view)),r};function f(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}f.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};f.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||g.tags).join(":"),s=typeof r!="undefined",i=s?r.get(o):void 0;return i==null&&(i=Ae(e,t),s&&r.set(o,i)),i};f.prototype.render=function(e,t,r,o){var s=this.getConfigTags(o),i=this.parse(e,s),a=t instanceof W?t:new W(t,void 0);return this.renderTokens(i,a,r,e,o)};f.prototype.renderTokens=function(e,t,r,o,s){for(var i="",a,u,c,p=0,d=e.length;p<d;++p)c=void 0,a=e[p],u=a[0],u==="#"?c=this.renderSection(a,t,r,o,s):u==="^"?c=this.renderInverted(a,t,r,o,s):u===">"?c=this.renderPartial(a,t,r,s):u==="&"?c=this.unescapedValue(a,t):u==="name"?c=this.escapedValue(a,t,s):u==="text"&&(c=this.rawValue(a)),c!==void 0&&(i+=c);return i};f.prototype.renderSection=function(e,t,r,o,s){var i=this,a="",u=t.lookup(e[1]);function c(m){return i.render(m,t,r,s)}if(!!u){if(S(u))for(var p=0,d=u.length;p<d;++p)a+=this.renderTokens(e[4],t.push(u[p]),r,o,s);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")a+=this.renderTokens(e[4],t.push(u),r,o,s);else if(U(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(t.view,o.slice(e[3],e[5]),c),u!=null&&(a+=u)}else a+=this.renderTokens(e[4],t,r,o,s);return a}};f.prototype.renderInverted=function(e,t,r,o,s){var i=t.lookup(e[1]);if(!i||S(i)&&i.length===0)return this.renderTokens(e[4],t,r,o,s)};f.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),s=e.split(`
`),i=0;i<s.length;i++)s[i].length&&(i>0||!r)&&(s[i]=o+s[i]);return s.join(`
`)};f.prototype.renderPartial=function(e,t,r,o){if(!!r){var s=this.getConfigTags(o),i=U(r)?r(e[1]):r[e[1]];if(i!=null){var a=e[6],u=e[5],c=e[4],p=i;u==0&&c&&(p=this.indentPartial(i,c,a));var d=this.parse(p,s);return this.renderTokens(d,t,r,p,o)}}};f.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(r!=null)return r};f.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||g.escape,s=t.lookup(e[1]);if(s!=null)return typeof s=="number"&&o===g.escape?String(s):o(s)};f.prototype.rawValue=function(e){return e[1]};f.prototype.getConfigTags=function(e){return S(e)?e:e&&typeof e=="object"?e.tags:void 0};f.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!S(e))return e.escape};var g={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){L.templateCache=n},get templateCache(){return L.templateCache}},L=new f;g.clearCache=function(){return L.clearCache()};g.parse=function(e,t){return L.parse(e,t)};g.render=function(e,t,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ue(e)+'" was given as the first argument for mustache#render(template, view, partials)');return L.render(e,t,r,o)};g.escape=de;g.Scanner=M;g.Context=W;g.Writer=f;class F{constructor(e,t){this.template=e,this.state=t,this.ast=g.parse(e)}getValue(){return this.value===void 0&&(this.value=g.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe(()=>{const o=g.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of t)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const o=r[0],s=r[1],i=r[4];["name","&","#","^"].includes(o)&&t.add(s),i!==void 0&&typeof i!="string"&&this.recursiveGetUsedVariables(i,t)}}}async function Se(){var n;const e=await se();for(const t of e){const r=(n=t.properties)!==null&&n!==void 0?n:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const s=new F(o.value,WA.state);if(s.isPureString())continue;const i=s.getValue();await N(t.name,o.name,i),s.onChange(async a=>{await N(t.name,o.name,a)})}}}async function Ee(){var n;const e=await T();for(const[t,r]of e.entries())if(r.type!=="objectgroup"){const o=(n=r.properties)!==null&&n!==void 0?n:[];for(const s of o){if(s.type==="int"||s.type==="bool"||s.type==="object"||typeof s.value!="string")continue;const i=new F(s.value,WA.state);if(i.isPureString())continue;const a=i.getValue();K(t,s.name,a),i.onChange(u=>{K(t,s.name,u)})}}}async function N(n,e,t){console.log(n),(await WA.room.area.get(n)).setProperty(e,t)}function K(n,e,t){WA.room.setProperty(n,e,t),e==="visible"&&(t?WA.room.showLayer(n):WA.room.hideLayer(n))}let G,q=0,O=0;function $(n){if(WA.state[n.name]){let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.showLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.hideLayer(t)}else{let e=n.properties.mustGetString("openLayer");for(const t of e.split(`
`))WA.room.hideLayer(t);e=n.properties.mustGetString("closeLayer");for(const t of e.split(`
`))WA.room.showLayer(t)}}function Ce(n){const e=n.properties.getString("openSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Q(n.properties.mustGetString("openLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function xe(n){const e=n.properties.getString("closeSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Q(n.properties.mustGetString("closeLayer").split(`
`));if(o>t)return;r=1-o/t}e&&WA.sound.loadSound(e).play({volume:r})}function J(n){return n.map(e=>G.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function Q(n){const e=J(n),t=Z(e),r=((t.right-t.left)/2+t.left)*32,o=((t.bottom-t.top)/2+t.top)*32;return Math.sqrt(Math.pow(q-r,2)+Math.pow(O-o,2))}function Pe(n){WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]?Ce(n):xe(n),$(n)}),$(n)}function Le(n,e,t,r){const o=n.name;let s,i,a=!1;const u=t.getString("tag");let c=!0;u&&!WA.player.tags.includes(u)&&(c=!1);const p=!!u;function d(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=t.getString("closeTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var l;s&&s.remove(),s=WA.ui.displayActionMessage({message:(l=t.getString("openTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,d()}})}function k(l){const v=Z(J(e.properties.mustGetString("closeLayer").split(`
`)));i=WA.room.website.create({name:"doorKeypad"+l,url:r+"/keypad.html#"+encodeURIComponent(l),position:{x:v.right*32,y:v.top*32,width:32*3,height:32*4},allowApi:!0})}function E(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(a=!0,t.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!c||!p)&&(t.getString("code")||t.getString("codeVariable"))){k(o);return}!c||(WA.state[e.name]?d():m())}),WA.room.onLeaveLayer(o).subscribe(()=>{a=!1,t.getBoolean("autoClose")&&(WA.state[e.name]=!1),s&&s.remove(),E()}),WA.state.onVariableChange(e.name).subscribe(()=>{a&&(!t.getBoolean("autoClose")&&WA.state[e.name]===!0&&d(),i&&WA.state[e.name]===!0&&E(),!t.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Te(n){const e=n.properties.mustGetString("bellSound"),t=n.properties.getNumber("soundRadius");let r=1;if(t){const o=Math.sqrt(Math.pow(n.x-q,2)+Math.pow(n.y-O,2));if(o>t)return;r=1-o/t}WA.sound.loadSound(e).play({volume:r})}function Me(n){WA.state[n.name]===void 0&&(WA.state[n.name]=0),WA.state.onVariableChange(n.name).subscribe(()=>{WA.state[n.name]&&Te(n)})}function ke(n,e,t){let r;const o=e.getString("bellPopup");WA.room.onEnterLayer(t).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[n]=WA.state[n]+1}}]):WA.state[n]=WA.state[n]+1}),WA.room.onLeaveLayer(t).subscribe(()=>{r&&(r.close(),r=void 0)})}async function Be(n){n=n!=null?n:V;const e=await ne();G=await T();for(const t of e.values())t.properties.get("door")&&Pe(t),t.properties.get("bell")&&Me(t);for(const t of G.values()){const r=new P(t.properties),o=r.getString("doorVariable");if(o&&t.type==="tilelayer"){const i=e.get(o);if(i===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+t.name+'"');Le(t,i,r,n)}const s=r.getString("bellVariable");s&&ke(s,r,t.name)}WA.player.onPlayerMove(t=>{q=t.x,O=t.y})}function Re(n,e){const t=n.getString("bindVariable");if(t){const r=n.get("enterValue"),o=n.get("leaveValue"),s=n.getString("triggerMessage"),i=n.getString("tag");Ie(t,e,r,o,s,i)}}function Ie(n,e,t,r,o,s){s&&!WA.player.tags.includes(s)||(t!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[n]=t)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[n]=r}))}async function je(){const n=await T();for(const e of n.values()){const t=new P(e.properties);Re(t,e.name)}}let H;async function Ge(n){const e=await WA.room.getTiledMap();n=n!=null?n:V,H=await T();const t=e.layers.find(r=>r.name==="configuration");if(t){const o=new P(t.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(n+"/configuration.html",!0)});for(const s of H.values()){const i=new P(s.properties),a=i.getString("openConfig");a&&s.type==="tilelayer"&&Ve(a.split(","),s.name,i)}}}function Ve(n,e,t){let r;const o=t.getString("openConfigAdminTag");let s=!0;o&&!WA.player.tags.includes(o)&&(s=!1);function i(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=t.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>D(n)})}function a(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=t.getString("openConfigTrigger");s&&(u&&u==="onaction"?i():D(n))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),a()})}function Ue(){return WA.onInit().then(()=>{Be().catch(n=>console.error(n)),je().catch(n=>console.error(n)),Ge().catch(n=>console.error(n)),Ee().catch(n=>console.error(n)),Se().catch(n=>console.error(n))}).catch(n=>console.error(n))}console.log("Script started successfully");let A;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.player.tags.includes("ca")&&WA.player.setOutlineColor(255,0,0),A=WA.ui.openPopup("InstructionPopup","Bienvenue au lancement de la communaut\xE9 DigiTesteurs CMDS ! \xC0 tout moment, retrouvez l\u2019Agenda, le Guide d\u2019utilisation et le Plan de la map \xE0 l\u2019aide des boutons situ\xE9s en haut \xE0 gauche de votre \xE9cran. Nous vous souhaitons une belle exploration !",[]),WA.room.area.onLeave("Instruction").subscribe(x),WA.room.area.onEnter("Cookie").subscribe(()=>{A=WA.ui.openPopup("CookiePopup","Savais-tu qu\u2019en plus d\u2019\xEAtre de d\xE9licieux g\xE2teaux, les cookies sont, dans le marketing digital, des petits fichiers servant au bon fonctionnement d\u2019un site. Mais il existe \xE9galement d\u2019autres usages comme le ciblage publicitaire et l\u2019analyse des usages web.",[])}),WA.room.area.onLeave("Cookie").subscribe(x),WA.room.area.onEnter("ThumbUp").subscribe(()=>{A=WA.ui.openPopup("ThumbUpPopup","Savais-tu que nous \xE9tions pr\xE9sents sur les r\xE9seaux sociaux ? Facebook, Twitter, Tik-Tok ou encore LinkedIn. Avec plus de 15 000 abonn\xE9s, notre page Facebook rassemble notre plus forte communaut\xE9. N\u2019h\xE9site pas \xE0 d\xE9couvrir notre activit\xE9 sur ces plateformes !",[])}),WA.room.area.onLeave("ThumbUp").subscribe(x),WA.room.area.onEnter("Smartphone").subscribe(()=>{A=WA.ui.openPopup("SmartphonePopup","Savais-tu que ce support \xE9tait de plus en plus utilis\xE9 par nos clients ? Aujourd\u2019hui, presque la moiti\xE9 de nos visites sur le site Internet se font sur Smartphone. De plus, notre nouvelle application Ma Banque est aujourd\u2019hui utilis\xE9e par plus de 165 000 clients !",[])}),WA.room.area.onLeave("Smartphone").subscribe(x),WA.room.area.onEnter("Cart").subscribe(()=>{A=WA.ui.openPopup("CartPopup","Savais tu qu\u2019aujourd\u2019hui, notre site internet propose plus de 30 parcours en selfcare, permettant \xE0 nos clients d\u2019\xEAtre autonome et de souscrire un produit ou un service en ligne ? Ils sont principalement regroup\xE9s sur notre boutique en ligne. Aujourd\u2019hui, plus de 10% des souscriptions en ligne proviennent de cette page.",[])}),WA.room.area.onLeave("Cart").subscribe(x);const n=WA.room.mapURL,e=n.substring(0,n.lastIndexOf("/")),t={url:e+"/guideBtn.html",visible:!0,allowApi:!0,allowPolicy:"",position:{vertical:"top",horizontal:"left"},size:{width:"65px",height:"65px"}},r={url:e+"/floormapBtn.html",visible:!0,allowApi:!0,allowPolicy:"",position:{vertical:"top",horizontal:"left"},size:{width:"65px",height:"120px"}},o={url:e+"/scheduleBtn.html",visible:!0,allowApi:!0,allowPolicy:"",position:{vertical:"middle",horizontal:"left"},size:{width:"65px",height:"655px"}};WA.ui.website.open(r),WA.ui.website.open(t),WA.ui.website.open(o),Ue().then(()=>{console.log("Scripting API Extra ready")}).catch(s=>console.error(s))}).catch(n=>console.error(n));function x(){A!==void 0&&(A.close(),A=void 0)}