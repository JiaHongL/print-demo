parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({6:[function(require,module,exports) {

},{}],8:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}();function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}require("./print.component.scss");var e=function(){function e(){n(this,e)}return t(e,[{key:"render",value:function(t,n){var e=document.getElementById(t);e.innerHTML="";var i='<div class="print-footer footer-'+n.setting.FooterPosition+'">\n\t\t\t\t<span>'+n.setting.Footer+"</span>\n\t\t\t</div>",s=document.createElement("div");s.innerHTML=i;var r=s.firstChild;e.appendChild(r);var a='<div class="print-page print-cover-page">\n\t\t\t\t<div class="cover-headline-block">\n\t\t\t\t\t<h1 class="title">'+n.setting.Title+'</h1>\n\t\t\t\t\t<h2 class="sub-title">'+n.setting.SubTitle+'</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="cover-photo-block">\n\t\t\t\t\t<img class="photo" src="'+n.setting.ImageSrc+'" alt="">\n\t\t\t\t</div>\n\t\t\t\t<div class="cover-info-block">\n\t\t\t\t\t<p class="author">作者：\n\t\t\t\t\t\t<span class="underline">'+n.setting.Author+'</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class="date">日期：\n\t\t\t\t\t\t<span class="underline">'+n.setting.Date+'</span>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="page-number"></div>\n\t\t\t</div>',d=document.createElement("div");d.innerHTML=a;var c=d.firstChild;e.appendChild(c);for(var l=[],o=0,v=n.list.length;o<v;o+=4)l.push(n.list.slice(o,o+4));if(l.length>0)for(var p=4-l[l.length-1].length,u=0;u<p;u++)l[l.length-1].push({Src:"",Desc:""});l.forEach(function(t,n){var i='<div class="print-page">\n\t\t\t\t\t<h3 class="page-title">相關照片</h3>\n\t\t\t\t\t<table class="print-table">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-img">\n\t\t\t\t\t\t\t\t\t<img src="'+t[0].Src+'" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-img">\n\t\t\t\t\t\t\t\t\t<img src="'+t[1].Src+'" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-description">\n\t\t\t\t\t\t\t\t\t<span>'+t[0].Desc+'</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-description">\n\t\t\t\t\t\t\t\t\t<span>'+t[1].Desc+'</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-img">\n\t\t\t\t\t\t\t\t\t<img src="'+t[2].Src+'" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-img">\n\t\t\t\t\t\t\t\t\t<img src="'+t[3].Src+'" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-description">\n\t\t\t\t\t\t\t\t\t<span>'+t[2].Desc+'</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-description">\n\t\t\t\t\t\t\t\t\t<span>'+t[3].Desc+'</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class="page-number"></div>\n\t\t\t\t</div>',s=document.createElement("div");s.innerHTML=i;var r=s.firstChild;e.appendChild(r)}),window.print()}}]),e}();exports.default=e;
},{"./print.component.scss":6}],13:[function(require,module,exports) {
module.exports="02.bf6a0709.jpg";
},{}],9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),n=require("../../assets/02.jpg"),t=a(n);function a(e){return e&&e.__esModule?e:{default:e}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=function(){function n(e){l(this,n),this._print=e.fn.bind(e.this)}return e(n,[{key:"render",value:function(e){var n=this,a=document.getElementById(e);a.className="w3-container no-print";var l='<form name="SettingForm" class="w3-container w3-margin w3-teal w3-round w3-padding-16">\n                <div class="w3-row-padding">\n                    <div class="w3-col s12 m5 l5" style="position:relative;">\n                        <img name="ImgSrc" src="'+t.default+'" class="w3-border" alt="Norway" style="width:100%;height:290px;">\n                        <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:100%;height:290px;opacity:0;" >\n                    </div>\n                    <div class="w3-col s12 m7 l7">\n                        <div class="w3-row-padding w3-margin-bottom">\n                            <div class="w3-half">\n                                <label>標題</label>\n                                <input name="Title" class="w3-input w3-border w3-round" type="text" value="快樂來至於滿足感" placeholder="">\n                            </div>\n                            <div class="w3-half">\n                                <label>副標題</label>\n                                <input name="SubTitle" class="w3-input w3-border w3-round" type="text" value="呷飽祙?" placeholder="">\n                            </div>\n                        </div>\n                        <div class="w3-row-padding w3-margin-bottom">\n                            <div class="w3-half">\n                                <label>日期</label>\n                                <input name="Date" class="w3-input w3-border w3-round" type="text" value="2018/04/01" placeholder="">\n                            </div>\n                            <div class="w3-half">\n                                <label>作者</label>\n                                <input name="Author" class="w3-input w3-border w3-round" type="text" value="林小肥" placeholder="">\n                            </div>\n                        </div>\n                        <div class="w3-row-padding w3-margin-bottom">\n                            <div class="w3-half">\n                                <label>頁尾</label>\n                                <input name="FooterStr" class="w3-input w3-border w3-round" type="text" value="我是頁尾啦~~~" placeholder="">\n                            </div>\n                            <div class="w3-half">\n                                <label>頁尾位置</label>\n                                <p style="margin:0;">\n                                    <input id="RadioL" class="w3-radio" type="radio" name="Position" value="left" >\n                                    <label for="RadioL">靠左</label>\n                                    <input id="RadioC"class="w3-radio" type="radio" name="Position" value="center" >\n                                    <label for="RadioC" for="male">置中</label>\n                                    <input id="RadioR" class="w3-radio" type="radio" name="Position" value="right" checked>\n                                    <label for="RadioR">靠右</label>\n                                </p>\n                            </div>\n                        </div>\n                        <div class="w3-row-padding w3-margin-bottom">\n                            <div class="w3-col">\n                                <button id="Print" type="button" class="w3-button w3-block w3-khaki" style="color:white">\n                                        列印\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>',i=document.createElement("div");i.innerHTML=l;var o=i.firstChild;o.querySelectorAll(".AddImg")[0].addEventListener("change",function(e){e.target.parentNode.children[0].src=URL.createObjectURL(e.target.files[0])},!1),o.querySelectorAll("#Print")[0].onclick=function(e){n._print()},a.appendChild(o)}},{key:"getComponentData",value:function(){var e=document.forms.SettingForm;return{Title:e.Title.value,SubTitle:e.SubTitle.value,ImageSrc:e.ImgSrc.src,Date:e.Date.value,Author:e.Author.value,Footer:e.FooterStr.value,FooterPosition:e.Position.value}}}]),n}();exports.default=i;
},{"../../assets/02.jpg":13}],17:[function(require,module,exports) {
module.exports="03.3413e141.jpg";
},{}],18:[function(require,module,exports) {
module.exports="04.b5068970.jpg";
},{}],19:[function(require,module,exports) {
module.exports="05.85bf3573.jpg";
},{}],20:[function(require,module,exports) {
module.exports="06.2093a038.jpg";
},{}],21:[function(require,module,exports) {
module.exports="07.6c54e32d.jpg";
},{}],10:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),t=require("../../assets/03.jpg"),i=p(t),n=require("../../assets/04.jpg"),a=p(n),s=require("../../assets/05.jpg"),l=p(s),d=require("../../assets/06.jpg"),o=p(d),r=require("../../assets/07.jpg"),c=p(r);function p(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var m=function(){function t(){w(this,t),this.ListComponentName=""}return e(t,[{key:"_createItem",value:function(){var e=this,t=document.createElement("div");t.innerHTML='<div class="w3-col s12 m6 l3">\n                <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                    <div class="w3-display-container w3-center" style="padding:20px;">\n                        <div class="w3-display-container w3-round" style="width:100%;;height:208px;position:relative;">\n                            <img class="Photo w3-border w3-border-white w3-round" style="display: block;width:100%;height:208px;">\n                            <i class="material-icons w3-display-middle" style="font-size:40px;">&#xE439;</i>\n                            <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                        </div>\n                        <div class="w3-section w3-center">\n                            <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;"></textarea>\n                        </div>\n                        <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                    </div>\n                </div>\n            </div>';var i=t.firstChild;return i.querySelectorAll(".AddImg")[0].addEventListener("change",function(e){e.target.parentNode.children[0].src=URL.createObjectURL(e.target.files[0]),e.target.parentNode.children[1].style="display:none;"},!1),i.querySelectorAll(".RemovePanel")[0].onclick=function(t){e._removeItem(t)},i}},{key:"_removeItem",value:function(e){e.target.parentNode.parentNode.parentNode.remove()}},{key:"_create",value:function(){document.getElementById(this.ListComponentName);var e=document.getElementById("PanelList"),t=this._createItem();e.insertBefore(t,e.children[e.children.length-1])}},{key:"render",value:function(e){var t=this;this.ListComponentName=e;var n=document.getElementById(this.ListComponentName);n.className="w3-container no-print";var s='<div id="PanelList" class="w3-row-padding">\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="'+i.default+'">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">這麼健康的東西 你真的要吃？</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="'+a.default+'">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">別忘了切肉的同時 也是在運動</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="'+l.default+'">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">就算你不吃冰 冰也會因為你融化</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="'+o.default+'">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">其實櫻桃沒有丸子</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="'+c.default+'">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">口渴的時候 冷暖都喝</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-white w3-round w3-border w3-border-teal" style="padding:0;height:320px;">\n                        <div class="w3-display-container" style="height:100%;">\n                            <i id="AddPanel" class="material-icons w3-display-middle" style="color:#009688;font-size: 100px;padding: 110px 95px;">&#xE145;</i>\n                        </div>\n                    </div>\n                </div>\n            </div>',d=document.createElement("div");d.innerHTML=s;var r=d.firstChild;n.appendChild(r),Array.from(n.getElementsByClassName("ListItems")).forEach(function(e){e.querySelectorAll(".AddImg")[0].addEventListener("change",function(e){e.target.parentNode.children[0].src=URL.createObjectURL(e.target.files[0]),e.target.parentNode.children[1].style="display:none;"},!1),e.querySelectorAll(".RemovePanel")[0].onclick=function(e){t._removeItem(e)}}),n.querySelectorAll("#AddPanel")[0].onclick=function(){t._create()}}},{key:"getComponentData",value:function(){var e=[];return Array.from(document.getElementsByClassName("ListItems")).forEach(function(t){e.push({Src:t.querySelectorAll(".Photo")[0].src,Desc:t.querySelectorAll(".Desc")[0].value})}),e}}]),t}();exports.default=m;
},{"../../assets/03.jpg":17,"../../assets/04.jpg":18,"../../assets/05.jpg":19,"../../assets/06.jpg":20,"../../assets/07.jpg":21}],5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}(),t=require("./components/print.component/print.component.js"),e=p(t),o=require("./components/setting.component/setting.component.js"),i=p(o),r=require("./components/list.component/list.component.js"),s=p(r);function p(n){return n&&n.__esModule?n:{default:n}}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(){u(this,t),this.SettingComponent=new i.default({fn:this.print,this:this}),this.ListComponent=new s.default,this.PrintComponent=new e.default,this.SettingComponent.render("SettingComponent"),this.ListComponent.render("ListComponent")}return n(t,[{key:"addItem",value:function(){}},{key:"print",value:function(){var n={setting:this.SettingComponent.getComponentData(),list:this.ListComponent.getComponentData()};this.PrintComponent.render("PrintComponent",n)}}]),t}();exports.default=a;
},{"./components/print.component/print.component.js":8,"./components/setting.component/setting.component.js":9,"./components/list.component/list.component.js":10}],4:[function(require,module,exports) {
"use strict";require("./style/main.scss");var e=require("./main.js"),r=n(e);function n(e){return e&&e.__esModule?e:{default:e}}var s=new r.default;window.control=s;
},{"./style/main.scss":6,"./main.js":5}]},{},[4])
//# sourceMappingURL=app.8bcda6d1.map