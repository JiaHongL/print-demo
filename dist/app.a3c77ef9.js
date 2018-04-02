// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({16:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],5:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":16}],4:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":5}],15:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":5}],6:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./print.component.scss');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Print = function () {
	function Print() {
		_classCallCheck(this, Print);
	}

	_createClass(Print, [{
		key: 'render',
		value: function render(id, params) {
			var PrintComponentElement = document.getElementById(id);
			PrintComponentElement.innerHTML = '';

			// footer 
			var footerHtml = '<div class="print-footer footer-' + params.setting.FooterPosition + '">\n\t\t\t\t<span>' + params.setting.Footer + '</span>\n\t\t\t</div>';
			var footerTemp = document.createElement('div');
			footerTemp.innerHTML = footerHtml;
			var footerHtmlObject = footerTemp.firstChild;
			PrintComponentElement.appendChild(footerHtmlObject);

			// cover
			var coverHtml = '<div class="print-page print-cover-page">\n\t\t\t\t<div class="cover-headline-block">\n\t\t\t\t\t<h1 class="title">' + params.setting.Title + '</h1>\n\t\t\t\t\t<h2 class="sub-title">' + params.setting.SubTitle + '</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="cover-photo-block">\n\t\t\t\t\t<img class="photo" src="' + params.setting.ImageSrc + '" alt="">\n\t\t\t\t</div>\n\t\t\t\t<div class="cover-info-block">\n\t\t\t\t\t<p class="author">\u4F5C\u8005\uFF1A\n\t\t\t\t\t\t<span class="underline">' + params.setting.Author + '</span>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class="date">\u65E5\u671F\uFF1A\n\t\t\t\t\t\t<span class="underline">' + params.setting.Date + '</span>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="page-number"></div>\n\t\t\t</div>';
			var coverTemp = document.createElement('div');
			coverTemp.innerHTML = coverHtml;
			var coverHtmlObject = coverTemp.firstChild;
			PrintComponentElement.appendChild(coverHtmlObject);

			// table
			var Tables = [];
			for (var i = 0, len = params.list.length; i < len; i += 4) {
				Tables.push(params.list.slice(i, i + 4));
			};
			if (Tables.length > 0) {
				var Count = 4 - Tables[Tables.length - 1].length;
				for (var index = 0; index < Count; index++) {
					Tables[Tables.length - 1].push({
						'Src': '',
						'Desc': ''
					});
				};
			};

			for (var _index = 0; _index < Tables.length; _index++) {
				var tableHtml = '<div class="print-page">\n\t\t\t\t\t<h3 class="page-title">\u76F8\u95DC\u7167\u7247</h3>\n\t\t\t\t\t<table class="print-table">\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-img">\n\t\t\t\t\t\t\t\t\t<img src="' + Tables[_index][0].Src + '" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-img">\n\t\t\t\t\t\t\t\t\t<img src="' + Tables[_index][1].Src + '" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-description">\n\t\t\t\t\t\t\t\t\t<span>' + Tables[_index][0].Desc + '</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-description">\n\t\t\t\t\t\t\t\t\t<span>' + Tables[_index][1].Desc + '</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-img">\n\t\t\t\t\t\t\t\t\t<img src="' + Tables[_index][2].Src + '" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-img">\n\t\t\t\t\t\t\t\t\t<img src="' + Tables[_index][3].Src + '" alt="">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-description">\n\t\t\t\t\t\t\t\t\t<span>' + Tables[_index][2].Desc + '</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class="td-description">\n\t\t\t\t\t\t\t\t\t<span>' + Tables[_index][3].Desc + '</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class="page-number"></div>\n\t\t\t\t</div>';
				var tableTemp = document.createElement('div');
				tableTemp.innerHTML = tableHtml;
				var tableHtmlObject = tableTemp.firstChild;
				PrintComponentElement.appendChild(tableHtmlObject);
			};

			// print
			window.print();
		}
	}]);

	return Print;
}();

exports.default = Print;
},{"./print.component.scss":15}],9:[function(require,module,exports) {
module.exports="02.50082379.jpg";
},{}],7:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('../../assets/02.jpg');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Setting = function () {
    function Setting(printBtnObj) {
        _classCallCheck(this, Setting);

        this._print = printBtnObj['fn'].bind(printBtnObj.this);
    }

    _createClass(Setting, [{
        key: 'render',
        value: function render(id) {
            var _this = this;

            var SettingComponentElement = document.getElementById(id);
            SettingComponentElement.className = 'w3-container no-print';
            var settingHtml = '<form name="SettingForm" class="w3-container w3-margin w3-teal w3-round w3-padding-16">\n            <div class="w3-row-padding">\n                <div class="w3-col s12 m5 l5" style="position:relative;">\n                    <img name="ImgSrc" src="' + _2.default + '" class="w3-border" alt="Norway" style="width:100%;height:290px;">\n                    <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:100%;height:290px;opacity:0;" >\n                </div>\n                <div class="w3-col s12 m7 l7">\n                    <div class="w3-row-padding w3-margin-bottom">\n                        <div class="w3-half">\n                            <label>\u6A19\u984C</label>\n                            <input name="Title" class="w3-input w3-border w3-round" type="text" value="\u5FEB\u6A02\u4F86\u81F3\u65BC\u6EFF\u8DB3\u611F" placeholder="">\n                        </div>\n                        <div class="w3-half">\n                            <label>\u526F\u6A19\u984C</label>\n                            <input name="SubTitle" class="w3-input w3-border w3-round" type="text" value="\u5477\u98FD\u7959?" placeholder="">\n                        </div>\n                    </div>\n                    <div class="w3-row-padding w3-margin-bottom">\n                        <div class="w3-half">\n                            <label>\u65E5\u671F</label>\n                            <input name="Date" class="w3-input w3-border w3-round" type="text" value="2018/04/01" placeholder="">\n                        </div>\n                        <div class="w3-half">\n                            <label>\u4F5C\u8005</label>\n                            <input name="Author" class="w3-input w3-border w3-round" type="text" value="\u6797\u5C0F\u80A5" placeholder="">\n                        </div>\n                    </div>\n                    <div class="w3-row-padding w3-margin-bottom">\n                        <div class="w3-half">\n                            <label>\u9801\u5C3E</label>\n                            <input name="FooterStr" class="w3-input w3-border w3-round" type="text" value="\u6211\u662F\u9801\u5C3E\u5566~~~" placeholder="">\n                        </div>\n                        <div class="w3-half">\n                            <label>\u9801\u5C3E\u4F4D\u7F6E</label>\n                            <p style="margin:0;">\n                                <input id="RadioL" class="w3-radio" type="radio" name="Position" value="left" >\n                                <label for="RadioL">\u9760\u5DE6</label>\n                                <input id="RadioC"class="w3-radio" type="radio" name="Position" value="center" >\n                                <label for="RadioC" for="male">\u7F6E\u4E2D</label>\n                                <input id="RadioR" class="w3-radio" type="radio" name="Position" value="right" checked>\n                                <label for="RadioR">\u9760\u53F3</label>\n                            </p>\n                        </div>\n                    </div>\n                    <div class="w3-row-padding w3-margin-bottom">\n                        <div class="w3-col">\n                            <button id="Print" type="button" class="w3-button w3-block w3-khaki" style="color:white">\n                                    \u5217\u5370\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>';

            var temp = document.createElement('div');
            temp.innerHTML = settingHtml;
            var htmlObject = temp.firstChild;
            htmlObject.querySelectorAll('.AddImg')[0].addEventListener("change", function (event) {
                event.target.parentNode.children[0].src = URL.createObjectURL(event.target.files[0]);
            }, false);
            htmlObject.querySelectorAll('#Print')[0].onclick = function (e) {
                _this._print();
            };
            SettingComponentElement.appendChild(htmlObject);
        }
    }, {
        key: 'getComponentData',
        value: function getComponentData() {
            var SettingForm = document.forms['SettingForm'];
            var Data = {
                Title: SettingForm.Title.value,
                SubTitle: SettingForm.SubTitle.value,
                ImageSrc: SettingForm.ImgSrc.src,
                Date: SettingForm.Date.value,
                Author: SettingForm.Author.value,
                Footer: SettingForm.FooterStr.value,
                FooterPosition: SettingForm.Position.value
            };
            return Data;
        }
    }]);

    return Setting;
}();

exports.default = Setting;
},{"../../assets/02.jpg":9}],10:[function(require,module,exports) {
module.exports="03.6e0fdd4b.jpg";
},{}],11:[function(require,module,exports) {
module.exports="04.611ba2a1.jpg";
},{}],12:[function(require,module,exports) {
module.exports="05.5f5d6fbb.jpg";
},{}],13:[function(require,module,exports) {
module.exports="06.b02c8fe3.jpg";
},{}],14:[function(require,module,exports) {
module.exports="07.b04a0feb.jpg";
},{}],8:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('../../assets/03.jpg');

var _2 = _interopRequireDefault(_);

var _3 = require('../../assets/04.jpg');

var _4 = _interopRequireDefault(_3);

var _5 = require('../../assets/05.jpg');

var _6 = _interopRequireDefault(_5);

var _7 = require('../../assets/06.jpg');

var _8 = _interopRequireDefault(_7);

var _9 = require('../../assets/07.jpg');

var _10 = _interopRequireDefault(_9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
    function List() {
        _classCallCheck(this, List);

        this.ListComponentName = '';
    }

    _createClass(List, [{
        key: '_createItem',
        value: function _createItem() {
            var _this = this;

            var panelHtml = '<div class="w3-col s12 m6 l3">\n                <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                    <div class="w3-display-container w3-center" style="padding:20px;">\n                        <div class="w3-display-container w3-round" style="width:100%;;height:208px;position:relative;">\n                            <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;">\n                            <i class="material-icons w3-display-middle" style="font-size:40px;">&#xE439;</i>\n                            <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                        </div>\n                        <div class="w3-section w3-center">\n                            <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;"></textarea>\n                        </div>\n                        <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                    </div>\n                </div>\n            </div>';
            var temp = document.createElement('div');
            temp.innerHTML = panelHtml;
            var htmlObject = temp.firstChild;
            htmlObject.querySelectorAll('.AddImg')[0].addEventListener("change", function (event) {
                event.target.parentNode.children[0].src = URL.createObjectURL(event.target.files[0]);
                event.target.parentNode.children[1].style = 'display:none;';
            }, false);
            htmlObject.querySelectorAll('.RemovePanel')[0].onclick = function (e) {
                _this._removeItem(e);
            };
            return htmlObject;
        }
    }, {
        key: '_removeItem',
        value: function _removeItem() {
            event.target.parentNode.parentNode.parentNode.remove();
        }
    }, {
        key: '_create',
        value: function _create() {
            var ListComponentElement = document.getElementById(this.ListComponentName);
            var ListElement = document.getElementById('PanelList');
            var LiElement = this._createItem();
            ListElement.insertBefore(LiElement, ListElement.children[ListElement.children.length - 1]);
        }
    }, {
        key: 'render',
        value: function render(id) {
            var _this2 = this;

            this.ListComponentName = id;
            var ListComponentElement = document.getElementById(this.ListComponentName);
            ListComponentElement.className = 'w3-container no-print';
            var listHtml = '<div id="PanelList" class="w3-row-padding">\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="' + _2.default + '">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">\u9019\u9EBC\u5065\u5EB7\u7684\u6771\u897F \u4F60\u771F\u7684\u8981\u5403\uFF1F</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="' + _4.default + '">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">\u5225\u5FD8\u4E86\u5207\u8089\u7684\u540C\u6642 \u4E5F\u662F\u5728\u904B\u52D5</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="' + _6.default + '">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">\u5C31\u7B97\u4F60\u4E0D\u5403\u51B0 \u51B0\u4E5F\u6703\u56E0\u70BA\u4F60\u878D\u5316</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="' + _8.default + '">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">\u5176\u5BE6\u6AFB\u6843\u6C92\u6709\u4E38\u5B50</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-teal w3-round ListItems" style="padding:0;height:320px;">\n                        <div class="w3-display-container w3-center" style="padding:20px;">\n                            <div class="w3-display-container w3-round" style="width:100%;height:208px;position:relative;">\n                                <img class="Photo w3-border w3-border-white w3-round" style="width:100%;height:208px;" src="' + _10.default + '">\n                                <i class="material-icons w3-display-middle" style="font-size:40px;display:none;">&#xE439;</i>\n                                <input class="AddImg w3-btn w3-black" type="file" name="image" id="image" accept="image/*"  style="position:absolute;top:0;left:0;width:248px;height:208px;opacity:0;" >\n                            </div>\n                            <div class="w3-section w3-center">\n                                <textarea class="Desc w3-input w3-border w3-margin-bottom w3-margin-top" style="height:50px;width:100%;">\u53E3\u6E34\u7684\u6642\u5019 \u51B7\u6696\u90FD\u559D</textarea>\n                            </div>\n                            <i class="RemovePanel material-icons w3-display-topright" style="font-size:18px;padding:2px;">&#xE5CD;</i>\n                        </div>\n                    </div>\n                </div>\n                <div class="w3-col s12 m6 l3">\n                    <div class="w3-panel w3-white w3-round w3-border w3-border-teal" style="padding:0;height:320px;">\n                        <div class="w3-display-container" style="height:100%;">\n                            <i id="AddPanel" class="material-icons w3-display-middle" style="color:#009688;font-size: 100px;padding: 110px 95px;">&#xE145;</i>\n                        </div>\n                    </div>\n                </div>\n            </div>';

            var temp = document.createElement('div');
            temp.innerHTML = listHtml;
            var htmlObject = temp.firstChild;
            ListComponentElement.appendChild(htmlObject);

            for (var index = 0; index < ListComponentElement.getElementsByClassName('ListItems').length; index++) {
                ListComponentElement.getElementsByClassName('ListItems')[index].querySelectorAll('.AddImg')[0].addEventListener("change", function (event) {
                    event.target.parentNode.children[0].src = URL.createObjectURL(event.target.files[0]);
                    event.target.parentNode.children[1].style = 'display:none;';
                }, false);
                ListComponentElement.getElementsByClassName('ListItems')[index].querySelectorAll('.RemovePanel')[0].onclick = function (e) {
                    _this2._removeItem(e);
                };
            }
            ListComponentElement.querySelectorAll('#AddPanel')[0].onclick = function () {
                _this2._create();
            };
        }
    }, {
        key: 'getComponentData',
        value: function getComponentData() {
            var ListImg = document.getElementsByClassName('ListItems');
            var Data = [];
            for (var index = 0; index < ListImg.length; index++) {
                Data.push({
                    'Src': ListImg[index].querySelectorAll('.Photo')[0].src,
                    'Desc': ListImg[index].querySelectorAll('.Desc')[0].value
                });
            };
            return Data;
        }
    }]);

    return List;
}();

exports.default = List;
},{"../../assets/03.jpg":10,"../../assets/04.jpg":11,"../../assets/05.jpg":12,"../../assets/06.jpg":13,"../../assets/07.jpg":14}],3:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _printComponent = require('./components/print.component/print.component.js');

var _printComponent2 = _interopRequireDefault(_printComponent);

var _settingComponent = require('./components/setting.component/setting.component.js');

var _settingComponent2 = _interopRequireDefault(_settingComponent);

var _listComponent = require('./components/list.component/list.component.js');

var _listComponent2 = _interopRequireDefault(_listComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainController = function () {
    function MainController() {
        _classCallCheck(this, MainController);

        this.SettingComponent = new _settingComponent2.default({
            fn: this.print,
            this: this
        });
        this.ListComponent = new _listComponent2.default();
        this.PrintComponent = new _printComponent2.default();

        this.SettingComponent.render('SettingComponent');
        this.ListComponent.render('ListComponent');
    }

    _createClass(MainController, [{
        key: 'addItem',
        value: function addItem() {}
    }, {
        key: 'print',
        value: function print() {
            var params = {
                setting: this.SettingComponent.getComponentData(),
                list: this.ListComponent.getComponentData()
            };
            this.PrintComponent.render('PrintComponent', params);
        }
    }]);

    return MainController;
}();

exports.default = MainController;
},{"./components/print.component/print.component.js":6,"./components/setting.component/setting.component.js":7,"./components/list.component/list.component.js":8}],2:[function(require,module,exports) {
'use strict';

require('./style/main.scss');

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var control = new _main2.default();
window.control = control;
},{"./style/main.scss":4,"./main.js":3}],17:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '55995' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[17,2])
//# sourceMappingURL=app.a3c77ef9.map