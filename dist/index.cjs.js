'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ChartsEmbedSDK = require('@mongodb-js/charts-embed-dom');
var jwt = require('jsonwebtoken');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ChartsEmbedSDK__default = /*#__PURE__*/_interopDefaultLegacy(ChartsEmbedSDK);
var jwt__default = /*#__PURE__*/_interopDefaultLegacy(jwt);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var JWTChart = function JWTChart(jwtData) {
  console.log('command is inside newly linked node-module new resouce folder data version 5.0');

  if (jwtData.jwtData.jwtSdk && jwtData.jwtData.chartData.chartUrl && jwtData.jwtData.chartData.token) {
    console.log(jwtData);
    var sdk = new ChartsEmbedSDK__default["default"]({
      baseUrl: jwtData.jwtData.chartData.chartUrl,
      getUserToken: function getUserToken() {
        var token = jwt__default["default"].sign({}, jwtData.jwtData.chartData.token, {
          expiresIn: '12h'
        });
        return token;
      }
    });
    var chartDiv = React.useRef(null);

    var _useState = React.useState(false),
        _useState2 = _slicedToArray(_useState, 2);
        _useState2[0];
        var setRendered = _useState2[1];

    var _useState3 = React.useState(sdk.createChart({
      chartId: jwtData.jwtData.chartData.chartId,
      height: '600px',
      width: '800px'
    })),
        _useState4 = _slicedToArray(_useState3, 1),
        chart = _useState4[0];
  }

  React.useEffect(function () {
    if (jwtData.jwtData.jwtSdk) {
      chart.render(chartDiv.current).then(function () {
        return setRendered(true);
      })["catch"](function (err) {
        return console.log('Error during Charts rendering.', err);
      });
    }
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "chart",
    ref: chartDiv
  });
};

exports.JWTChart = JWTChart;
