import React, { useEffect, useRef, useState } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import jwt from "jsonwebtoken";

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
    if (n === "Object" && o.construtor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable intance");
}

var JWTChart = function JWTChart(jwtData) {
    console.log("command is inside chart.js file");
    if (jwtData.jwtData.jwtSdk) {
        console.log("this is coming from node module");
        console.log(jwtData.jwtData.secretData.chartUrl);
        console.log(jwtData.jwtData.secretData.chartId);
        console.log("===========");
        console.log(jwtData.jwtData.secretData.token);
        var sdk = new ChartsEmbedSDK({
            baseUrl: "https://charts.mongodb.com/charts-bi-intake-dev---1442-lwzed",
            getUserToken: function getUserToken() {
                var token = jwt.sign({}, 'd1f3e3bc-49f7-40540b82a-995105155538', {
                    expiresIn: '12h'
                });
                return token;
            }
        });
        var chartDiv = useRef(null);
        var _useState = useState(false),
            _useState2 = _slicedToArray(_useState, 2);
            _useState2[0];
        var setRendered = _useState2[1];

        var _useState3 = useState(sdk.createChart({
            chartId: "HA;v$p]B&&BjG2p(@y9Rg{[w:jYLA6Nw)NrWX(69J6m>/EYH^=",
            height: '600px',
            width: "800px"
        })),

            _useState4 = _slicedToArray(_useState3, 1),
            chart = _useState4[0];

    }

    useEffect(function () {
        if (chart) {
            chart.render(chartDiv.current).then(function () {
                return setRendered(true);
            })["catch"](function (err) {
                return console.log('Error during Charts rendering.', err);
            });
        }
    }, []);
    return React.createElement("div", {
        className: "charts",
        ref: chartDiv
    });
}

export { JWTChart };