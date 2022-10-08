/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {i: r, l: !1, exports: {}};
    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }

  n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
      return t[e]
    }.bind(null, i));
    return r
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 128)
}([function (t, e, n) {
  (function (e) {
    var n = function (t) {
      return t && t.Math == Math && t
    };
    t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function () {
      return this
    }() || Function("return this")()
  }).call(this, n(25))
}, function (t, e) {
  t.exports = function (t) {
    return t && t.__esModule ? t : {default: t}
  }
}, function (t, e) {
  var n = Array.isArray;
  t.exports = n
}, function (t, e, n) {
  "use strict";
  var r = n(18);
  Object.defineProperty(e, "__esModule", {value: !0});
  var i = {IX2EngineActionTypes: !0, IX2EngineConstants: !0};
  e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
  var o = n(190);
  Object.keys(o).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return o[t]
      }
    }))
  });
  var a = n(93);
  Object.keys(a).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return a[t]
      }
    }))
  });
  var u = n(191);
  Object.keys(u).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return u[t]
      }
    }))
  });
  var c = n(192);
  Object.keys(c).forEach(function (t) {
    "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: function () {
        return c[t]
      }
    }))
  });
  var s = r(n(193));
  e.IX2EngineActionTypes = s;
  var f = r(n(194));
  e.IX2EngineConstants = f
}, function (t, e) {
  var n = Function.prototype, r = n.bind, i = n.call, o = r && r.bind(i);
  t.exports = r ? function (t) {
    return t && o(i, t)
  } : function (t) {
    return t && function () {
      return i.apply(t, arguments)
    }
  }
}, function (t, e, n) {
  var r = n(98), i = "object" == typeof self && self && self.Object === Object && self,
    o = r || i || Function("return this")();
  t.exports = o
}, function (t, e, n) {
  "use strict";
  var r = {}, i = {}, o = [], a = window.Webflow || [], u = window.jQuery, c = u(window), s = u(document),
    f = u.isFunction, l = r._ = n(132), d = r.tram = n(68) && u.tram, p = !1, v = !1;

  function h(t) {
    r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      if (p) return void t.ready();
      if (l.contains(o, t.ready)) return;
      o.push(t.ready)
    }(t)
  }

  function E(t) {
    f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function (t) {
      o = l.filter(o, function (e) {
        return e !== t.ready
      })
    }(t)
  }

  d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (t, e, n) {
    i[t] && E(i[t]);
    var r = i[t] = e(u, l, n) || {};
    return h(r), r
  }, r.require = function (t) {
    return i[t]
  }, r.push = function (t) {
    p ? f(t) && t() : a.push(t)
  }, r.env = function (t) {
    var e = window.__wf_design, n = void 0 !== e;
    return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
  };
  var _, y = navigator.userAgent.toLowerCase(),
    g = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
    m = r.env.chrome = /chrome/.test(y) && /Google/.test(navigator.vendor) && parseInt(y.match(/chrome\/(\d+)\./)[1], 10),
    I = r.env.ios = /(ipod|iphone|ipad)/.test(y);
  r.env.safari = /safari/.test(y) && !m && !I, g && s.on("touchstart mousedown", function (t) {
    _ = t.target
  }), r.validClick = g ? function (t) {
    return t === _ || u.contains(t, _)
  } : function () {
    return !0
  };
  var T, b = "resize.webflow orientationchange.webflow load.webflow";

  function O(t, e) {
    var n = [], r = {};
    return r.up = l.throttle(function (t) {
      l.each(n, function (e) {
        e(t)
      })
    }), t && e && t.on(e, r.up), r.on = function (t) {
      "function" == typeof t && (l.contains(n, t) || n.push(t))
    }, r.off = function (t) {
      n = arguments.length ? l.filter(n, function (e) {
        return e !== t
      }) : []
    }, r
  }

  function A(t) {
    f(t) && t()
  }

  function w() {
    T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve)
  }

  r.resize = O(c, b), r.scroll = O(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = O(), r.location = function (t) {
    window.location = t
  }, r.env() && (r.location = function () {
  }), r.ready = function () {
    p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, A), l.each(a, A), r.resize.up()
  }, r.load = function (t) {
    T.then(t)
  }, r.destroy = function (t) {
    t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && w()
  }, u(r.ready), w(), t.exports = window.Webflow = r
}, function (t, e) {
  t.exports = function (t) {
    return "function" == typeof t
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e)
  }
}, function (t, e, n) {
  var r = n(4), i = n(158), o = r({}.hasOwnProperty);
  t.exports = Object.hasOwn || function (t, e) {
    return o(i(t), e)
  }
}, function (t, e, n) {
  var r = n(197), i = n(251), o = n(62), a = n(2), u = n(260);
  t.exports = function (t) {
    return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
  }
}, function (t, e, n) {
  var r = n(209), i = n(214);
  t.exports = function (t, e) {
    var n = i(t, e);
    return r(n) ? n : void 0
  }
}, function (t, e) {
  t.exports = function (t) {
    return null != t && "object" == typeof t
  }
}, function (t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function r(e) {
    return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function (t) {
      return n(t)
    } : t.exports = r = function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
    }, r(e)
  }

  t.exports = r
}, function (t, e, n) {
  var r = n(19);
  t.exports = !r(function () {
    return 7 != Object.defineProperty({}, 1, {
      get: function () {
        return 7
      }
    })[1]
  })
}, function (t, e, n) {
  "use strict";
  var r = n(18);
  Object.defineProperty(e, "__esModule", {value: !0}), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
  var i = r(n(47));
  e.IX2BrowserSupport = i;
  var o = r(n(115));
  e.IX2Easings = o;
  var a = r(n(117));
  e.IX2EasingUtils = a;
  var u = r(n(269));
  e.IX2ElementsReducer = u;
  var c = r(n(119));
  e.IX2VanillaPlugins = c;
  var s = r(n(271));
  e.IX2VanillaUtils = s
}, function (t, e, n) {
  var r = n(23), i = n(210), o = n(211), a = "[object Null]", u = "[object Undefined]", c = r ? r.toStringTag : void 0;
  t.exports = function (t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
  }
}, function (t, e, n) {
  var r = n(97), i = n(55);
  t.exports = function (t) {
    return null != t && i(t.length) && !r(t)
  }
}, function (t, e) {
  t.exports = function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
      r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
    }
    return e.default = t, e
  }
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  }
}, function (t, e, n) {
  var r = n(7);
  t.exports = function (t) {
    return "object" == typeof t ? null !== t : r(t)
  }
}, function (t, e) {
  t.exports = function (t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0});
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  };
  e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = E, e.replaceAt = _, e.getIn = y, e.set = g, e.setIn = m, e.update = I, e.updateIn = T, e.merge = b, e.mergeDeep = O, e.mergeIn = A, e.omit = w, e.addDefaults = S;
  /*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 */
  var i = "INVALID_ARGS";

  function o(t) {
    throw new Error(t)
  }

  function a(t) {
    var e = Object.keys(t);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
  }

  var u = {}.hasOwnProperty;

  function c(t) {
    if (Array.isArray(t)) return t.slice();
    for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
      var i = e[r];
      n[i] = t[i]
    }
    return n
  }

  function s(t, e, n) {
    var r = n;
    null == r && o(i);
    for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
    for (var v = 0; v < d.length; v++) {
      var h = d[v];
      if (null != h) {
        var E = a(h);
        if (E.length) for (var _ = 0; _ <= E.length; _++) {
          var y = E[_];
          if (!t || void 0 === r[y]) {
            var g = h[y];
            e && f(r[y]) && f(g) && (g = s(t, e, r[y], g)), void 0 !== g && g !== r[y] && (u || (u = !0, r = c(r)), r[y] = g)
          }
        }
      }
    }
    return r
  }

  function f(t) {
    var e = void 0 === t ? "undefined" : r(t);
    return null != t && ("object" === e || "function" === e)
  }

  function l(t, e) {
    return Array.isArray(e) ? t.concat(e) : t.concat([e])
  }

  function d(t, e) {
    return Array.isArray(e) ? e.concat(t) : [e].concat(t)
  }

  function p(t) {
    return t.length ? t.slice(0, t.length - 1) : t
  }

  function v(t) {
    return t.length ? t.slice(1) : t
  }

  function h(t, e, n) {
    return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
  }

  function E(t, e) {
    return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
  }

  function _(t, e, n) {
    if (t[e] === n) return t;
    for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
    return i[e] = n, i
  }

  function y(t, e) {
    if (!Array.isArray(e) && o(i), null != t) {
      for (var n = t, r = 0; r < e.length; r++) {
        var a = e[r];
        if (void 0 === (n = null != n ? n[a] : void 0)) return n
      }
      return n
    }
  }

  function g(t, e, n) {
    var r = null == t ? "number" == typeof e ? [] : {} : t;
    if (r[e] === n) return r;
    var i = c(r);
    return i[e] = n, i
  }

  function m(t, e, n) {
    return e.length ? function t(e, n, r, i) {
      var o = void 0, a = n[i];
      o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
      return g(e, a, o)
    }(t, e, n, 0) : n
  }

  function I(t, e, n) {
    return g(t, e, n(null == t ? void 0 : t[e]))
  }

  function T(t, e, n) {
    return m(t, e, n(y(t, e)))
  }

  function b(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
    return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
  }

  function O(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
    return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
  }

  function A(t, e, n, r, i, o, a) {
    var u = y(t, e);
    null == u && (u = {});
    for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
    return m(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
  }

  function w(t, e) {
    for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++) if (u.call(t, n[i])) {
      r = !0;
      break
    }
    if (!r) return t;
    for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
      var f = c[s];
      n.indexOf(f) >= 0 || (o[f] = t[f])
    }
    return o
  }

  function S(t, e, n, r, i, o) {
    for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
    return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
  }

  var R = {
    clone: c,
    addLast: l,
    addFirst: d,
    removeLast: p,
    removeFirst: v,
    insert: h,
    removeAt: E,
    replaceAt: _,
    getIn: y,
    set: g,
    setIn: m,
    update: I,
    updateIn: T,
    merge: b,
    mergeDeep: O,
    mergeIn: A,
    omit: w,
    addDefaults: S
  };
  e.default = R
}, function (t, e, n) {
  var r = n(5).Symbol;
  t.exports = r
}, function (t, e, n) {
  var r = n(38), i = 1 / 0;
  t.exports = function (t) {
    if ("string" == typeof t || r(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -i ? "-0" : e
  }
}, function (t, e) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (t) {
    "object" == typeof window && (n = window)
  }
  t.exports = n
}, function (t, e, n) {
  var r = n(147), i = n(71);
  t.exports = function (t) {
    return r(i(t))
  }
}, function (t, e, n) {
  var r = n(0), i = n(7);
  t.exports = function (t, e) {
    return arguments.length < 2 ? (n = r[t], i(n) ? n : void 0) : r[t] && r[t][e];
    var n
  }
}, function (t, e, n) {
  var r = n(0), i = n(14), o = n(79), a = n(29), u = n(72), c = r.TypeError, s = Object.defineProperty;
  e.f = i ? s : function (t, e, n) {
    if (a(t), e = u(e), a(n), o) try {
      return s(t, e, n)
    } catch (t) {
    }
    if ("get" in n || "set" in n) throw c("Accessors not supported");
    return "value" in n && (t[e] = n.value), t
  }
}, function (t, e, n) {
  var r = n(0), i = n(20), o = r.String, a = r.TypeError;
  t.exports = function (t) {
    if (i(t)) return t;
    throw a(o(t) + " is not an object")
  }
}, function (t, e) {
  function n() {
    return t.exports = n = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    }, n.apply(this, arguments)
  }

  t.exports = n
}, function (t, e, n) {
  var r = n(199), i = n(200), o = n(201), a = n(202), u = n(203);

  function c(t) {
    var e = -1, n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }

  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
  var r = n(48);
  t.exports = function (t, e) {
    for (var n = t.length; n--;) if (r(t[n][0], e)) return n;
    return -1
  }
}, function (t, e, n) {
  var r = n(11)(Object, "create");
  t.exports = r
}, function (t, e, n) {
  var r = n(223);
  t.exports = function (t, e) {
    var n = t.__data__;
    return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
  }
}, function (t, e, n) {
  var r = n(105), i = n(56), o = n(17);
  t.exports = function (t) {
    return o(t) ? r(t) : i(t)
  }
}, function (t, e, n) {
  var r = n(241), i = n(12), o = Object.prototype, a = o.hasOwnProperty, u = o.propertyIsEnumerable, c = r(function () {
    return arguments
  }()) ? r : function (t) {
    return i(t) && a.call(t, "callee") && !u.call(t, "callee")
  };
  t.exports = c
}, function (t, e, n) {
  var r = n(2), i = n(61), o = n(252), a = n(255);
  t.exports = function (t, e) {
    return r(t) ? t : i(t, e) ? [t] : o(a(t))
  }
}, function (t, e, n) {
  var r = n(16), i = n(12), o = "[object Symbol]";
  t.exports = function (t) {
    return "symbol" == typeof t || i(t) && r(t) == o
  }
}, function (t, e) {
  var n = Function.prototype.call;
  t.exports = n.bind ? n.bind(n) : function () {
    return n.apply(n, arguments)
  }
}, function (t, e, n) {
  var r = n(0), i = n(41), o = r["__core-js_shared__"] || i("__core-js_shared__", {});
  t.exports = o
}, function (t, e, n) {
  var r = n(0), i = Object.defineProperty;
  t.exports = function (t, e) {
    try {
      i(r, t, {value: e, configurable: !0, writable: !0})
    } catch (n) {
      r[t] = e
    }
    return e
  }
}, function (t, e, n) {
  var r = n(14), i = n(28), o = n(70);
  t.exports = r ? function (t, e, n) {
    return i.f(t, e, o(1, n))
  } : function (t, e, n) {
    return t[e] = n, t
  }
}, function (t, e) {
  t.exports = {}
}, function (t, e) {
  t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "ActionTypes", function () {
    return o
  }), n.d(e, "default", function () {
    return a
  });
  var r = n(87), i = n(185), o = {INIT: "@@redux/INIT"};

  function a(t, e, n) {
    var u;
    if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
      if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
      return n(a)(t, e)
    }
    if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
    var c = t, s = e, f = [], l = f, d = !1;

    function p() {
      l === f && (l = f.slice())
    }

    function v() {
      return s
    }

    function h(t) {
      if ("function" != typeof t) throw new Error("Expected listener to be a function.");
      var e = !0;
      return p(), l.push(t), function () {
        if (e) {
          e = !1, p();
          var n = l.indexOf(t);
          l.splice(n, 1)
        }
      }
    }

    function E(t) {
      if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
      if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
      if (d) throw new Error("Reducers may not dispatch actions.");
      try {
        d = !0, s = c(s, t)
      } finally {
        d = !1
      }
      for (var e = f = l, n = 0; n < e.length; n++) e[n]();
      return t
    }

    return E({type: o.INIT}), (u = {
      dispatch: E, subscribe: h, getState: v, replaceReducer: function (t) {
        if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
        c = t, E({type: o.INIT})
      }
    })[i.default] = function () {
      var t, e = h;
      return (t = {
        subscribe: function (t) {
          if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

          function n() {
            t.next && t.next(v())
          }

          return n(), {unsubscribe: e(n)}
        }
      })[i.default] = function () {
        return this
      }, t
    }, u
  }
}, function (t, e, n) {
  "use strict";

  function r() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    if (0 === e.length) return function (t) {
      return t
    };
    if (1 === e.length) return e[0];
    var r = e[e.length - 1], i = e.slice(0, -1);
    return function () {
      return i.reduceRight(function (t, e) {
        return e(t)
      }, r.apply(void 0, arguments))
    }
  }

  n.r(e), n.d(e, "default", function () {
    return r
  })
}, function (t, e, n) {
  "use strict";
  var r = n(1);
  Object.defineProperty(e, "__esModule", {value: !0}), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
  var i = r(n(94)), o = "undefined" != typeof window;
  e.IS_BROWSER_ENV = o;
  var a = function (t, e) {
    return o ? t() : e
  };
  e.withBrowser = a;
  var u = a(function () {
    return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
      return t in Element.prototype
    })
  });
  e.ELEMENT_MATCHES = u;
  var c = a(function () {
    var t = document.createElement("i"), e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
    try {
      for (var n = e.length, r = 0; r < n; r++) {
        var i = e[r];
        if (t.style.display = i, t.style.display === i) return i
      }
      return ""
    } catch (t) {
      return ""
    }
  }, "flex");
  e.FLEX_PREFIXED = c;
  var s = a(function () {
    var t = document.createElement("i");
    if (null == t.style.transform) for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
      var i = e[r] + "Transform";
      if (void 0 !== t.style[i]) return i
    }
    return "transform"
  }, "transform");
  e.TRANSFORM_PREFIXED = s;
  var f = s.split("transform")[0], l = f ? f + "TransformStyle" : "transformStyle";
  e.TRANSFORM_STYLE_PREFIXED = l
}, function (t, e) {
  t.exports = function (t, e) {
    return t === e || t != t && e != e
  }
}, function (t, e, n) {
  var r = n(11)(n(5), "Map");
  t.exports = r
}, function (t, e, n) {
  var r = n(215), i = n(222), o = n(224), a = n(225), u = n(226);

  function c(t) {
    var e = -1, n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }

  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
    return t
  }
}, function (t, e, n) {
  (function (t) {
    var r = n(5), i = n(242), o = e && !e.nodeType && e, a = o && "object" == typeof t && t && !t.nodeType && t,
      u = a && a.exports === o ? r.Buffer : void 0, c = (u ? u.isBuffer : void 0) || i;
    t.exports = c
  }).call(this, n(106)(t))
}, function (t, e) {
  var n = 9007199254740991, r = /^(?:0|[1-9]\d*)$/;
  t.exports = function (t, e) {
    var i = typeof t;
    return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
  }
}, function (t, e, n) {
  var r = n(243), i = n(244), o = n(245), a = o && o.isTypedArray, u = a ? i(a) : r;
  t.exports = u
}, function (t, e) {
  var n = 9007199254740991;
  t.exports = function (t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
  }
}, function (t, e, n) {
  var r = n(57), i = n(246), o = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!r(t)) return i(t);
    var e = [];
    for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
    return e
  }
}, function (t, e) {
  var n = Object.prototype;
  t.exports = function (t) {
    var e = t && t.constructor;
    return t === ("function" == typeof e && e.prototype || n)
  }
}, function (t, e, n) {
  var r = n(247), i = n(49), o = n(248), a = n(249), u = n(108), c = n(16), s = n(99), f = s(r), l = s(i), d = s(o),
    p = s(a), v = s(u), h = c;
  (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function (t) {
    var e = c(t), n = "[object Object]" == e ? t.constructor : void 0, r = n ? s(n) : "";
    if (r) switch (r) {
      case f:
        return "[object DataView]";
      case l:
        return "[object Map]";
      case d:
        return "[object Promise]";
      case p:
        return "[object Set]";
      case v:
        return "[object WeakMap]"
    }
    return e
  }), t.exports = h
}, function (t, e, n) {
  var r = n(60);
  t.exports = function (t, e, n) {
    var i = null == t ? void 0 : r(t, e);
    return void 0 === i ? n : i
  }
}, function (t, e, n) {
  var r = n(37), i = n(24);
  t.exports = function (t, e) {
    for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
    return n && n == o ? t : void 0
  }
}, function (t, e, n) {
  var r = n(2), i = n(38), o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
  t.exports = function (t, e) {
    if (r(t)) return !1;
    var n = typeof t;
    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
  }
}, function (t, e) {
  t.exports = function (t) {
    return t
  }
}, function (t, e, n) {
  var r = n(264), i = n(8), o = n(38), a = NaN, u = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, s = /^0o[0-7]+$/i,
    f = parseInt;
  t.exports = function (t) {
    if ("number" == typeof t) return t;
    if (o(t)) return a;
    if (i(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = i(e) ? e + "" : e
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = r(t);
    var n = c.test(t);
    return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t
  }
}, function (t, e, n) {
  "use strict";
  var r = n(1);
  Object.defineProperty(e, "__esModule", {value: !0}), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
  var i = r(n(30)), o = n(3), a = n(15), u = o.IX2EngineActionTypes, c = u.IX2_RAW_DATA_IMPORTED,
    s = u.IX2_SESSION_INITIALIZED, f = u.IX2_SESSION_STARTED, l = u.IX2_SESSION_STOPPED, d = u.IX2_PREVIEW_REQUESTED,
    p = u.IX2_PLAYBACK_REQUESTED, v = u.IX2_STOP_REQUESTED, h = u.IX2_CLEAR_REQUESTED, E = u.IX2_EVENT_LISTENER_ADDED,
    _ = u.IX2_TEST_FRAME_RENDERED, y = u.IX2_EVENT_STATE_CHANGED, g = u.IX2_ANIMATION_FRAME_CHANGED,
    m = u.IX2_PARAMETER_CHANGED, I = u.IX2_INSTANCE_ADDED, T = u.IX2_INSTANCE_STARTED, b = u.IX2_INSTANCE_REMOVED,
    O = u.IX2_ELEMENT_STATE_CHANGED, A = u.IX2_ACTION_LIST_PLAYBACK_CHANGED, w = u.IX2_VIEWPORT_WIDTH_CHANGED,
    S = u.IX2_MEDIA_QUERIES_DEFINED, R = a.IX2VanillaUtils.reifyState;
  e.rawDataImported = function (t) {
    return {type: c, payload: (0, i.default)({}, R(t))}
  };
  e.sessionInitialized = function (t) {
    var e = t.hasBoundaryNodes, n = t.reducedMotion;
    return {type: s, payload: {hasBoundaryNodes: e, reducedMotion: n}}
  };
  e.sessionStarted = function () {
    return {type: f}
  };
  e.sessionStopped = function () {
    return {type: l}
  };
  e.previewRequested = function (t) {
    var e = t.rawData, n = t.defer;
    return {type: d, payload: {defer: n, rawData: e}}
  };
  e.playbackRequested = function (t) {
    var e = t.actionTypeId, n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e, r = t.actionListId,
      i = t.actionItemId, a = t.eventId, u = t.allowEvents, c = t.immediate, s = t.testManual, f = t.verbose,
      l = t.rawData;
    return {
      type: p,
      payload: {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        testManual: s,
        eventId: a,
        allowEvents: u,
        immediate: c,
        verbose: f,
        rawData: l
      }
    }
  };
  e.stopRequested = function (t) {
    return {type: v, payload: {actionListId: t}}
  };
  e.clearRequested = function () {
    return {type: h}
  };
  e.eventListenerAdded = function (t, e) {
    return {type: E, payload: {target: t, listenerParams: e}}
  };
  e.testFrameRendered = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return {type: _, payload: {step: t}}
  };
  e.eventStateChanged = function (t, e) {
    return {type: y, payload: {stateKey: t, newState: e}}
  };
  e.animationFrameChanged = function (t, e) {
    return {type: g, payload: {now: t, parameters: e}}
  };
  e.parameterChanged = function (t, e) {
    return {type: m, payload: {key: t, value: e}}
  };
  e.instanceAdded = function (t) {
    return {type: I, payload: (0, i.default)({}, t)}
  };
  e.instanceStarted = function (t, e) {
    return {type: T, payload: {instanceId: t, time: e}}
  };
  e.instanceRemoved = function (t) {
    return {type: b, payload: {instanceId: t}}
  };
  e.elementStateChanged = function (t, e, n, r) {
    return {type: O, payload: {elementId: t, actionTypeId: e, current: n, actionItem: r}}
  };
  e.actionListPlaybackChanged = function (t) {
    var e = t.actionListId, n = t.isPlaying;
    return {type: A, payload: {actionListId: e, isPlaying: n}}
  };
  e.viewportWidthChanged = function (t) {
    var e = t.width, n = t.mediaQueries;
    return {type: w, payload: {width: e, mediaQueries: n}}
  };
  e.mediaQueriesDefined = function () {
    return {type: S}
  }
}, function (t, e, n) {
  var r = n(125), i = n(66);

  function o(t, e) {
    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
  }

  o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function (t, e) {
  t.exports = function () {
  }
}, function (t, e, n) {
  var r = n(125), i = n(66), o = 4294967295;

  function a(t) {
    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
  }

  a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function (t, e, n) {
  "use strict";
  var r = n(1)(n(13));
  window.tram = function (t) {
    function e(t, e) {
      return (new F.Bare).init(t, e)
    }

    function n(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase()
      })
    }

    function i(t) {
      var e = parseInt(t.slice(1), 16);
      return [e >> 16 & 255, e >> 8 & 255, 255 & e]
    }

    function o(t, e, n) {
      return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
    }

    function a() {
    }

    function u(t, e, n) {
      s("Units do not match [" + t + "]: " + e + ", " + n)
    }

    function c(t, e, n) {
      if (void 0 !== e && (n = e), void 0 === t) return n;
      var r = n;
      return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
    }

    function s(t) {
      H.debug && window && window.console.warn(t)
    }

    var f = function (t, e, n) {
        function i(t) {
          return "object" == (0, r.default)(t)
        }

        function o(t) {
          return "function" == typeof t
        }

        function a() {
        }

        return function r(u, c) {
          function s() {
            var t = new f;
            return o(t.init) && t.init.apply(t, arguments), t
          }

          function f() {
          }

          c === n && (c = u, u = Object), s.Bare = f;
          var l, d = a[t] = u[t], p = f[t] = s[t] = new a;
          return p.constructor = s, s.mixin = function (e) {
            return f[t] = s[t] = r(s, e)[t], s
          }, s.open = function (t) {
            if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l)) for (var n in l) e.call(l, n) && (p[n] = l[n]);
            return o(p.init) || (p.init = u), s
          }, s.open(c)
        }
      }("prototype", {}.hasOwnProperty), l = {
        ease: ["ease", function (t, e, n, r) {
          var i = (t /= r) * t, o = i * t;
          return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
        }], "ease-in": ["ease-in", function (t, e, n, r) {
          var i = (t /= r) * t, o = i * t;
          return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
        }], "ease-out": ["ease-out", function (t, e, n, r) {
          var i = (t /= r) * t, o = i * t;
          return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
        }], "ease-in-out": ["ease-in-out", function (t, e, n, r) {
          var i = (t /= r) * t, o = i * t;
          return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
        }], linear: ["linear", function (t, e, n, r) {
          return n * t / r + e
        }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (t, e, n, r) {
          return n * (t /= r) * t + e
        }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (t, e, n, r) {
          return -n * (t /= r) * (t - 2) + e
        }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
        }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (t, e, n, r) {
          return n * (t /= r) * t * t + e
        }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (t, e, n, r) {
          return n * ((t = t / r - 1) * t * t + 1) + e
        }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
        }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (t, e, n, r) {
          return n * (t /= r) * t * t * t + e
        }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (t, e, n, r) {
          return -n * ((t = t / r - 1) * t * t * t - 1) + e
        }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
        }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (t, e, n, r) {
          return n * (t /= r) * t * t * t * t + e
        }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (t, e, n, r) {
          return n * ((t = t / r - 1) * t * t * t * t + 1) + e
        }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
        }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (t, e, n, r) {
          return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
        }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (t, e, n, r) {
          return n * Math.sin(t / r * (Math.PI / 2)) + e
        }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (t, e, n, r) {
          return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
        }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (t, e, n, r) {
          return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
        }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (t, e, n, r) {
          return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
        }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (t, e, n, r) {
          return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
        }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (t, e, n, r) {
          return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
        }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (t, e, n, r) {
          return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
        }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (t, e, n, r) {
          return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
        }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
        }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
        }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (t, e, n, r, i) {
          return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
        }]
      }, d = {
        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
      }, p = document, v = window, h = "bkwld-tram", E = /[\-\.0-9]/g, _ = /[A-Z]/, y = "number", g = /^(rgb|#)/,
      m = /(em|cm|mm|in|pt|pc|px)$/, I = /(em|cm|mm|in|pt|pc|px|%)$/, T = /(deg|rad|turn)$/, b = "unitless",
      O = /(all|none) 0s ease 0s/, A = /^(width|height)$/, w = " ", S = p.createElement("a"),
      R = ["Webkit", "Moz", "O", "ms"], N = ["-webkit-", "-moz-", "-o-", "-ms-"], x = function (t) {
        if (t in S.style) return {dom: t, css: t};
        var e, n, r = "", i = t.split("-");
        for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
        for (e = 0; e < R.length; e++) if ((n = R[e] + r) in S.style) return {dom: n, css: N[e] + t}
      }, C = e.support = {
        bind: Function.prototype.bind,
        transform: x("transform"),
        transition: x("transition"),
        backface: x("backface-visibility"),
        timing: x("transition-timing-function")
      };
    if (C.transition) {
      var L = C.timing.dom;
      if (S.style[L] = l["ease-in-back"][0], !S.style[L]) for (var P in d) l[P][0] = d[P]
    }
    var M = e.frame = function () {
      var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
      return t && C.bind ? t.bind(v) : function (t) {
        v.setTimeout(t, 16)
      }
    }(), D = e.now = function () {
      var t = v.performance, e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
      return e && C.bind ? e.bind(t) : Date.now || function () {
        return +new Date
      }
    }(), j = f(function (e) {
      function i(t, e) {
        var n = function (t) {
          for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
            var i = t[e];
            i && r.push(i)
          }
          return r
        }(("" + t).split(w)), r = n[0];
        e = e || {};
        var i = Q[r];
        if (!i) return s("Unsupported property: " + r);
        if (!e.weak || !this.props[r]) {
          var o = i[0], a = this.props[r];
          return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
        }
      }

      function o(t, e, n) {
        if (t) {
          var o = (0, r.default)(t);
          if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new B({
            duration: t,
            context: this,
            complete: a
          }), void (this.active = !0);
          if ("string" == o && e) {
            switch (t) {
              case"hide":
                f.call(this);
                break;
              case"stop":
                u.call(this);
                break;
              case"redraw":
                l.call(this);
                break;
              default:
                i.call(this, t, n && n[1])
            }
            return a.call(this)
          }
          if ("function" == o) return void t.call(this, this);
          if ("object" == o) {
            var s = 0;
            p.call(this, t, function (t, e) {
              t.span > s && (s = t.span), t.stop(), t.animate(e)
            }, function (t) {
              "wait" in t && (s = c(t.wait, 0))
            }), d.call(this), s > 0 && (this.timer = new B({
              duration: s,
              context: this
            }), this.active = !0, e && (this.timer.complete = a));
            var v = this, h = !1, E = {};
            M(function () {
              p.call(v, t, function (t) {
                t.active && (h = !0, E[t.name] = t.nextStyle)
              }), h && v.$el.css(E)
            })
          }
        }
      }

      function a() {
        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
          var t = this.queue.shift();
          o.call(this, t.options, !0, t.args)
        }
      }

      function u(t) {
        var e;
        this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
      }

      function f() {
        u.call(this), this.el.style.display = "none"
      }

      function l() {
        this.el.offsetHeight
      }

      function d() {
        var t, e, n = [];
        for (t in this.upstream && n.push(this.upstream), this.props) (e = this.props[t]).active && n.push(e.string);
        n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
      }

      function p(t, e, r) {
        var o, a, u, c, s = e !== v, f = {};
        for (o in t) u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (_.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
        for (o in f) {
          if (u = f[o], !(a = this.props[o])) {
            if (!s) continue;
            a = i.call(this, o)
          }
          e.call(this, a, u)
        }
        r && c && r.call(this, c)
      }

      function v(t) {
        t.stop()
      }

      function E(t, e) {
        t.set(e)
      }

      function y(t) {
        this.$el.css(t)
      }

      function g(t, n) {
        e[t] = function () {
          return this.children ? function (t, e) {
            var n, r = this.children.length;
            for (n = 0; r > n; n++) t.apply(this.children[n], e);
            return this
          }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
        }
      }

      e.init = function (e) {
        if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
          var n = K(this.el, "transition");
          n && !O.test(n) && (this.upstream = n)
        }
        C.backface && H.hideBackface && z(this.el, C.backface.css, "hidden")
      }, g("add", i), g("start", o), g("wait", function (t) {
        t = c(t, 0), this.active ? this.queue.push({options: t}) : (this.timer = new B({
          duration: t,
          context: this,
          complete: a
        }), this.active = !0)
      }), g("then", function (t) {
        return this.active ? (this.queue.push({
          options: t,
          args: arguments
        }), void (this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
      }), g("next", a), g("stop", u), g("set", function (t) {
        u.call(this, t), p.call(this, t, E, y)
      }), g("show", function (t) {
        "string" != typeof t && (t = "block"), this.el.style.display = t
      }), g("hide", f), g("redraw", l), g("destroy", function () {
        u.call(this), t.removeData(this.el, h), this.$el = this.el = null
      })
    }), F = f(j, function (e) {
      function n(e, n) {
        var r = t.data(e, h) || t.data(e, h, new j.Bare);
        return r.el || r.init(e), n ? r.start(n) : r
      }

      e.init = function (e, r) {
        var i = t(e);
        if (!i.length) return this;
        if (1 === i.length) return n(i[0], r);
        var o = [];
        return i.each(function (t, e) {
          o.push(n(e, r))
        }), this.children = o, this
      }
    }), X = f(function (t) {
      function e() {
        var t = this.get();
        this.update("auto");
        var e = this.get();
        return this.update(t), e
      }

      function n(t) {
        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
        return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
      }

      var i = 500, a = "ease", u = 0;
      t.init = function (t, e, n, r) {
        this.$el = t, this.el = t[0];
        var o = e[0];
        n[2] && (o = n[2]), Y[o] && (o = Y[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function (t, e, n) {
          return void 0 !== e && (n = e), t in l ? t : n
        }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + w + this.duration + "ms" + ("ease" != this.ease ? w + l[this.ease][0] : "") + (this.delay ? w + this.delay + "ms" : ""))
      }, t.set = function (t) {
        t = this.convert(t, this.type), this.update(t), this.redraw()
      }, t.transition = function (t) {
        this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
      }, t.fallback = function (t) {
        var n = this.el.style[this.name] || this.convert(this.get(), this.type);
        t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new U({
          from: n,
          to: t,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        })
      }, t.get = function () {
        return K(this.el, this.name)
      }, t.update = function (t) {
        z(this.el, this.name, t)
      }, t.stop = function () {
        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
        var t = this.tween;
        t && t.context && t.destroy()
      }, t.convert = function (t, e) {
        if ("auto" == t && this.auto) return t;
        var i, o = "number" == typeof t, a = "string" == typeof t;
        switch (e) {
          case y:
            if (o) return t;
            if (a && "" === t.replace(E, "")) return +t;
            i = "number(unitless)";
            break;
          case g:
            if (a) {
              if ("" === t && this.original) return this.original;
              if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
            }
            i = "hex or rgb string";
            break;
          case m:
            if (o) return t + this.unit;
            if (a && e.test(t)) return t;
            i = "number(px) or string(unit)";
            break;
          case I:
            if (o) return t + this.unit;
            if (a && e.test(t)) return t;
            i = "number(px) or string(unit or %)";
            break;
          case T:
            if (o) return t + this.angle;
            if (a && e.test(t)) return t;
            i = "number(deg) or string(angle)";
            break;
          case b:
            if (o) return t;
            if (a && I.test(t)) return t;
            i = "number(unitless) or string(unit or %)"
        }
        return function (t, e) {
          s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
        }(i, t), t
      }, t.redraw = function () {
        this.el.offsetHeight
      }
    }), G = f(X, function (t, e) {
      t.init = function () {
        e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), g))
      }
    }), V = f(X, function (t, e) {
      t.init = function () {
        e.init.apply(this, arguments), this.animate = this.fallback
      }, t.get = function () {
        return this.$el[this.name]()
      }, t.update = function (t) {
        this.$el[this.name](t)
      }
    }), k = f(X, function (t, e) {
      function n(t, e) {
        var n, r, i, o, a;
        for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
      }

      t.init = function () {
        e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw()))
      }, t.set = function (t) {
        n.call(this, t, function (t, e) {
          this.current[t] = e
        }), z(this.el, this.name, this.style(this.current)), this.redraw()
      }, t.transition = function (t) {
        var e = this.values(t);
        this.tween = new W({
          current: this.current,
          values: e,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease
        });
        var n, r = {};
        for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
        this.active = !0, this.nextStyle = this.style(r)
      }, t.fallback = function (t) {
        var e = this.values(t);
        this.tween = new W({
          current: this.current,
          values: e,
          duration: this.duration,
          delay: this.delay,
          ease: this.ease,
          update: this.update,
          context: this
        })
      }, t.update = function () {
        z(this.el, this.name, this.style(this.current))
      }, t.style = function (t) {
        var e, n = "";
        for (e in t) n += e + "(" + t[e] + ") ";
        return n
      }, t.values = function (t) {
        var e, r = {};
        return n.call(this, t, function (t, n, i) {
          r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
        }), r
      }
    }), U = f(function (e) {
      function n() {
        var t, e, r, i = c.length;
        if (i) for (M(n), e = D(), t = i; t--;) (r = c[t]) && r.render(e)
      }

      var r = {ease: l.ease[1], from: 0, to: 1};
      e.init = function (t) {
        this.duration = t.duration || 0, this.delay = t.delay || 0;
        var e = t.ease || r.ease;
        l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
        var n = t.from, i = t.to;
        void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = D(), !1 !== t.autoplay && this.play()
      }, e.play = function () {
        var t;
        this.active || (this.start || (this.start = D()), this.active = !0, t = this, 1 === c.push(t) && M(n))
      }, e.stop = function () {
        var e, n, r;
        this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
      }, e.render = function (t) {
        var e, n = t - this.start;
        if (this.delay) {
          if (n <= this.delay) return;
          n -= this.delay
        }
        if (n < this.duration) {
          var r = this.ease(n, 0, 1, this.duration);
          return e = this.startRGB ? function (t, e, n) {
            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
          }(this.startRGB, this.endRGB, r) : function (t) {
            return Math.round(t * s) / s
          }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
        }
        e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
      }, e.format = function (t, e) {
        if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void (this.change = 1);
        if (!this.unit) {
          var n = e.replace(E, "");
          n !== t.replace(E, "") && u("tween", e, t), this.unit = n
        }
        e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
      }, e.destroy = function () {
        this.stop(), this.context = null, this.ease = this.update = this.complete = a
      };
      var c = [], s = 1e3
    }), B = f(U, function (t) {
      t.init = function (t) {
        this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
      }, t.render = function (t) {
        t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
      }
    }), W = f(U, function (t, e) {
      t.init = function (t) {
        var e, n;
        for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new U({
          name: e,
          from: this.current[e],
          to: n,
          duration: t.duration,
          delay: t.delay,
          ease: t.ease,
          autoplay: !1
        }));
        this.play()
      }, t.render = function (t) {
        var e, n, r = !1;
        for (e = this.tweens.length; e--;) (n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
        return r ? void (this.update && this.update.call(this.context)) : this.destroy()
      }, t.destroy = function () {
        if (e.destroy.call(this), this.tweens) {
          var t;
          for (t = this.tweens.length; t--;) this.tweens[t].destroy();
          this.tweens = null, this.current = null
        }
      }
    }), H = e.config = {
      debug: !1,
      defaultUnit: "px",
      defaultAngle: "deg",
      keepInherited: !1,
      hideBackface: !1,
      perspective: "",
      fallback: !C.transition,
      agentTests: []
    };
    e.fallback = function (t) {
      if (!C.transition) return H.fallback = !0;
      H.agentTests.push("(" + t + ")");
      var e = new RegExp(H.agentTests.join("|"), "i");
      H.fallback = e.test(navigator.userAgent)
    }, e.fallback("6.0.[2-5] Safari"), e.tween = function (t) {
      return new U(t)
    }, e.delay = function (t, e, n) {
      return new B({complete: e, duration: t, context: n})
    }, t.fn.tram = function (t) {
      return e.call(null, this, t)
    };
    var z = t.style, K = t.css, Y = {transform: C.transform && C.transform.css}, Q = {
      color: [G, g],
      background: [G, g, "background-color"],
      "outline-color": [G, g],
      "border-color": [G, g],
      "border-top-color": [G, g],
      "border-right-color": [G, g],
      "border-bottom-color": [G, g],
      "border-left-color": [G, g],
      "border-width": [X, m],
      "border-top-width": [X, m],
      "border-right-width": [X, m],
      "border-bottom-width": [X, m],
      "border-left-width": [X, m],
      "border-spacing": [X, m],
      "letter-spacing": [X, m],
      margin: [X, m],
      "margin-top": [X, m],
      "margin-right": [X, m],
      "margin-bottom": [X, m],
      "margin-left": [X, m],
      padding: [X, m],
      "padding-top": [X, m],
      "padding-right": [X, m],
      "padding-bottom": [X, m],
      "padding-left": [X, m],
      "outline-width": [X, m],
      opacity: [X, y],
      top: [X, I],
      right: [X, I],
      bottom: [X, I],
      left: [X, I],
      "font-size": [X, I],
      "text-indent": [X, I],
      "word-spacing": [X, I],
      width: [X, I],
      "min-width": [X, I],
      "max-width": [X, I],
      height: [X, I],
      "min-height": [X, I],
      "max-height": [X, I],
      "line-height": [X, b],
      "scroll-top": [V, y, "scrollTop"],
      "scroll-left": [V, y, "scrollLeft"]
    }, q = {};
    C.transform && (Q.transform = [k], q = {
      x: [I, "translateX"],
      y: [I, "translateY"],
      rotate: [T],
      rotateX: [T],
      rotateY: [T],
      scale: [y],
      scaleX: [y],
      scaleY: [y],
      skew: [T],
      skewX: [T],
      skewY: [T]
    }), C.transform && C.backface && (q.z = [I, "translateZ"], q.rotateZ = [T], q.scaleZ = [y], q.perspective = [m]);
    var $ = /ms/, Z = /s|\./;
    return t.tram = e
  }(window.jQuery)
}, function (t, e, n) {
  var r = n(14), i = n(39), o = n(146), a = n(70), u = n(26), c = n(72), s = n(9), f = n(79),
    l = Object.getOwnPropertyDescriptor;
  e.f = r ? l : function (t, e) {
    if (t = u(t), e = c(e), f) try {
      return l(t, e)
    } catch (t) {
    }
    if (s(t, e)) return a(!i(o.f, t, e), t[e])
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
  }
}, function (t, e, n) {
  var r = n(0).TypeError;
  t.exports = function (t) {
    if (null == t) throw r("Can't call method on " + t);
    return t
  }
}, function (t, e, n) {
  var r = n(149), i = n(73);
  t.exports = function (t) {
    var e = r(t, "string");
    return i(e) ? e : e + ""
  }
}, function (t, e, n) {
  var r = n(0), i = n(27), o = n(7), a = n(150), u = n(74), c = r.Object;
  t.exports = u ? function (t) {
    return "symbol" == typeof t
  } : function (t) {
    var e = i("Symbol");
    return o(e) && a(e.prototype, c(t))
  }
}, function (t, e, n) {
  var r = n(75);
  t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (t, e, n) {
  var r = n(151), i = n(19);
  t.exports = !!Object.getOwnPropertySymbols && !i(function () {
    var t = Symbol();
    return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
  })
}, function (t, e, n) {
  var r = n(0), i = n(77), o = n(9), a = n(78), u = n(75), c = n(74), s = i("wks"), f = r.Symbol, l = f && f.for,
    d = c ? f : f && f.withoutSetter || a;
  t.exports = function (t) {
    if (!o(s, t) || !u && "string" != typeof s[t]) {
      var e = "Symbol." + t;
      u && o(f, t) ? s[t] = f[t] : s[t] = c && l ? l(e) : d(e)
    }
    return s[t]
  }
}, function (t, e, n) {
  var r = n(157), i = n(40);
  (t.exports = function (t, e) {
    return i[t] || (i[t] = void 0 !== e ? e : {})
  })("versions", []).push({
    version: "3.19.0",
    mode: r ? "pure" : "global",
    copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)"
  })
}, function (t, e, n) {
  var r = n(4), i = 0, o = Math.random(), a = r(1..toString);
  t.exports = function (t) {
    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++i + o, 36)
  }
}, function (t, e, n) {
  var r = n(14), i = n(19), o = n(80);
  t.exports = !r && !i(function () {
    return 7 != Object.defineProperty(o("div"), "a", {
      get: function () {
        return 7
      }
    }).a
  })
}, function (t, e, n) {
  var r = n(0), i = n(20), o = r.document, a = i(o) && i(o.createElement);
  t.exports = function (t) {
    return a ? o.createElement(t) : {}
  }
}, function (t, e, n) {
  var r = n(4), i = n(7), o = n(40), a = r(Function.toString);
  i(o.inspectSource) || (o.inspectSource = function (t) {
    return a(t)
  }), t.exports = o.inspectSource
}, function (t, e, n) {
  var r = n(77), i = n(78), o = r("keys");
  t.exports = function (t) {
    return o[t] || (o[t] = i(t))
  }
}, function (t, e, n) {
  var r = n(4), i = n(9), o = n(26), a = n(84).indexOf, u = n(43), c = r([].push);
  t.exports = function (t, e) {
    var n, r = o(t), s = 0, f = [];
    for (n in r) !i(u, n) && i(r, n) && c(f, n);
    for (; e.length > s;) i(r, n = e[s++]) && (~a(f, n) || c(f, n));
    return f
  }
}, function (t, e, n) {
  var r = n(26), i = n(166), o = n(167), a = function (t) {
    return function (e, n, a) {
      var u, c = r(e), s = o(c), f = i(a, s);
      if (t && n != n) {
        for (; s > f;) if ((u = c[f++]) != u) return !0
      } else for (; s > f; f++) if ((t || f in c) && c[f] === n) return t || f || 0;
      return !t && -1
    }
  };
  t.exports = {includes: a(!0), indexOf: a(!1)}
}, function (t, e) {
  var n = Math.ceil, r = Math.floor;
  t.exports = function (t) {
    var e = +t;
    return e != e || 0 === e ? 0 : (e > 0 ? r : n)(e)
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(45);
  n.d(e, "createStore", function () {
    return r.default
  });
  var i = n(89);
  n.d(e, "combineReducers", function () {
    return i.default
  });
  var o = n(91);
  n.d(e, "bindActionCreators", function () {
    return o.default
  });
  var a = n(92);
  n.d(e, "applyMiddleware", function () {
    return a.default
  });
  var u = n(46);
  n.d(e, "compose", function () {
    return u.default
  });
  n(90)
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(177), i = n(182), o = n(184), a = "[object Object]", u = Function.prototype, c = Object.prototype,
    s = u.toString, f = c.hasOwnProperty, l = s.call(Object);
  e.default = function (t) {
    if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
    var e = Object(i.default)(t);
    if (null === e) return !0;
    var n = f.call(e, "constructor") && e.constructor;
    return "function" == typeof n && n instanceof n && s.call(n) == l
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(178).default.Symbol;
  e.default = r
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "default", function () {
    return o
  });
  var r = n(45);
  n(87), n(90);

  function i(t, e) {
    var n = e && e.type;
    return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
  }

  function o(t) {
    for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
      var a = e[o];
      0, "function" == typeof t[a] && (n[a] = t[a])
    }
    var u, c = Object.keys(n);
    try {
      !function (t) {
        Object.keys(t).forEach(function (e) {
          var n = t[e];
          if (void 0 === n(void 0, {type: r.ActionTypes.INIT})) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          if (void 0 === n(void 0, {type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")})) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
        })
      }(n)
    } catch (t) {
      u = t
    }
    return function () {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], e = arguments[1];
      if (u) throw u;
      for (var r = !1, o = {}, a = 0; a < c.length; a++) {
        var s = c[a], f = n[s], l = t[s], d = f(l, e);
        if (void 0 === d) {
          var p = i(s, e);
          throw new Error(p)
        }
        o[s] = d, r = r || d !== l
      }
      return r ? o : t
    }
  }
}, function (t, e, n) {
  "use strict";

  function r(t) {
    "undefined" != typeof console && "function" == typeof console.error && console.error(t);
    try {
      throw new Error(t)
    } catch (t) {
    }
  }

  n.r(e), n.d(e, "default", function () {
    return r
  })
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    return function () {
      return e(t.apply(void 0, arguments))
    }
  }

  function i(t, e) {
    if ("function" == typeof t) return r(t, e);
    if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
      var a = n[o], u = t[a];
      "function" == typeof u && (i[a] = r(u, e))
    }
    return i
  }

  n.r(e), n.d(e, "default", function () {
    return i
  })
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "default", function () {
    return o
  });
  var r = n(46), i = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
  };

  function o() {
    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return function (t) {
      return function (n, o, a) {
        var u, c = t(n, o, a), s = c.dispatch, f = {
          getState: c.getState, dispatch: function (t) {
            return s(t)
          }
        };
        return u = e.map(function (t) {
          return t(f)
        }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {dispatch: s})
      }
    }
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
  e.ActionTypeConsts = {
    TRANSFORM_MOVE: "TRANSFORM_MOVE",
    TRANSFORM_SCALE: "TRANSFORM_SCALE",
    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
    TRANSFORM_SKEW: "TRANSFORM_SKEW",
    STYLE_OPACITY: "STYLE_OPACITY",
    STYLE_SIZE: "STYLE_SIZE",
    STYLE_FILTER: "STYLE_FILTER",
    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
    STYLE_BORDER: "STYLE_BORDER",
    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
    GENERAL_DISPLAY: "GENERAL_DISPLAY",
    GENERAL_START_ACTION: "GENERAL_START_ACTION",
    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
    GENERAL_LOOP: "GENERAL_LOOP",
    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
  };
  e.ActionAppliesTo = {ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT"}
}, function (t, e, n) {
  var r = n(95)(n(262));
  t.exports = r
}, function (t, e, n) {
  var r = n(10), i = n(17), o = n(35);
  t.exports = function (t) {
    return function (e, n, a) {
      var u = Object(e);
      if (!i(e)) {
        var c = r(n, 3);
        e = o(e), n = function (t) {
          return c(u[t], t, u)
        }
      }
      var s = t(e, n, a);
      return s > -1 ? u[c ? e[s] : s] : void 0
    }
  }
}, function (t, e, n) {
  var r = n(31), i = n(204), o = n(205), a = n(206), u = n(207), c = n(208);

  function s(t) {
    var e = this.__data__ = new r(t);
    this.size = e.size
  }

  s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function (t, e, n) {
  var r = n(16), i = n(8), o = "[object AsyncFunction]", a = "[object Function]", u = "[object GeneratorFunction]",
    c = "[object Proxy]";
  t.exports = function (t) {
    if (!i(t)) return !1;
    var e = r(t);
    return e == a || e == u || e == o || e == c
  }
}, function (t, e, n) {
  (function (e) {
    var n = "object" == typeof e && e && e.Object === Object && e;
    t.exports = n
  }).call(this, n(25))
}, function (t, e) {
  var n = Function.prototype.toString;
  t.exports = function (t) {
    if (null != t) {
      try {
        return n.call(t)
      } catch (t) {
      }
      try {
        return t + ""
      } catch (t) {
      }
    }
    return ""
  }
}, function (t, e, n) {
  var r = n(227), i = n(12);
  t.exports = function t(e, n, o, a, u) {
    return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
  }
}, function (t, e, n) {
  var r = n(228), i = n(231), o = n(232), a = 1, u = 2;
  t.exports = function (t, e, n, c, s, f) {
    var l = n & a, d = t.length, p = e.length;
    if (d != p && !(l && p > d)) return !1;
    var v = f.get(t), h = f.get(e);
    if (v && h) return v == e && h == t;
    var E = -1, _ = !0, y = n & u ? new r : void 0;
    for (f.set(t, e), f.set(e, t); ++E < d;) {
      var g = t[E], m = e[E];
      if (c) var I = l ? c(m, g, E, e, t, f) : c(g, m, E, t, e, f);
      if (void 0 !== I) {
        if (I) continue;
        _ = !1;
        break
      }
      if (y) {
        if (!i(e, function (t, e) {
          if (!o(y, e) && (g === t || s(g, t, n, c, f))) return y.push(e)
        })) {
          _ = !1;
          break
        }
      } else if (g !== m && !s(g, m, n, c, f)) {
        _ = !1;
        break
      }
    }
    return f.delete(t), f.delete(e), _
  }
}, function (t, e, n) {
  var r = n(51), i = n(2);
  t.exports = function (t, e, n) {
    var o = e(t);
    return i(t) ? o : r(o, n(t))
  }
}, function (t, e, n) {
  var r = n(239), i = n(104), o = Object.prototype.propertyIsEnumerable, a = Object.getOwnPropertySymbols,
    u = a ? function (t) {
      return null == t ? [] : (t = Object(t), r(a(t), function (e) {
        return o.call(t, e)
      }))
    } : i;
  t.exports = u
}, function (t, e) {
  t.exports = function () {
    return []
  }
}, function (t, e, n) {
  var r = n(240), i = n(36), o = n(2), a = n(52), u = n(53), c = n(54), s = Object.prototype.hasOwnProperty;
  t.exports = function (t, e) {
    var n = o(t), f = !n && i(t), l = !n && !f && a(t), d = !n && !f && !l && c(t), p = n || f || l || d,
      v = p ? r(t.length, String) : [], h = v.length;
    for (var E in t) !e && !s.call(t, E) || p && ("length" == E || l && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
    return v
  }
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {
    }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function () {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0, get: function () {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return t(e(n))
    }
  }
}, function (t, e, n) {
  var r = n(11)(n(5), "WeakMap");
  t.exports = r
}, function (t, e, n) {
  var r = n(8);
  t.exports = function (t) {
    return t == t && !r(t)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return function (n) {
      return null != n && n[t] === e && (void 0 !== e || t in Object(n))
    }
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
    return i
  }
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return null == e ? void 0 : e[t]
    }
  }
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) if (e(t[o], o, t)) return o;
    return -1
  }
}, function (t, e, n) {
  var r = n(263);
  t.exports = function (t) {
    var e = r(t), n = e % 1;
    return e == e ? n ? e - n : e : 0
  }
}, function (t, e, n) {
  "use strict";
  var r = n(1);
  Object.defineProperty(e, "__esModule", {value: !0}), e.inQuad = function (t) {
    return Math.pow(t, 2)
  }, e.outQuad = function (t) {
    return -(Math.pow(t - 1, 2) - 1)
  }, e.inOutQuad = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
    return -.5 * ((t -= 2) * t - 2)
  }, e.inCubic = function (t) {
    return Math.pow(t, 3)
  }, e.outCubic = function (t) {
    return Math.pow(t - 1, 3) + 1
  }, e.inOutCubic = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
    return .5 * (Math.pow(t - 2, 3) + 2)
  }, e.inQuart = function (t) {
    return Math.pow(t, 4)
  }, e.outQuart = function (t) {
    return -(Math.pow(t - 1, 4) - 1)
  }, e.inOutQuart = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
    return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
  }, e.inQuint = function (t) {
    return Math.pow(t, 5)
  }, e.outQuint = function (t) {
    return Math.pow(t - 1, 5) + 1
  }, e.inOutQuint = function (t) {
    if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
    return .5 * (Math.pow(t - 2, 5) + 2)
  }, e.inSine = function (t) {
    return 1 - Math.cos(t * (Math.PI / 2))
  }, e.outSine = function (t) {
    return Math.sin(t * (Math.PI / 2))
  }, e.inOutSine = function (t) {
    return -.5 * (Math.cos(Math.PI * t) - 1)
  }, e.inExpo = function (t) {
    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
  }, e.outExpo = function (t) {
    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
  }, e.inOutExpo = function (t) {
    if (0 === t) return 0;
    if (1 === t) return 1;
    if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
    return .5 * (2 - Math.pow(2, -10 * --t))
  }, e.inCirc = function (t) {
    return -(Math.sqrt(1 - t * t) - 1)
  }, e.outCirc = function (t) {
    return Math.sqrt(1 - Math.pow(t - 1, 2))
  }, e.inOutCirc = function (t) {
    if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
    return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
  }, e.outBounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.inBack = function (t) {
    return t * t * ((o + 1) * t - o)
  }, e.outBack = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1
  }, e.inOutBack = function (t) {
    var e = o;
    if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
    return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.inElastic = function (t) {
    var e = o, n = 0, r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
  }, e.outElastic = function (t) {
    var e = o, n = 0, r = 1;
    if (0 === t) return 0;
    if (1 === t) return 1;
    n || (n = .3);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
  }, e.inOutElastic = function (t) {
    var e = o, n = 0, r = 1;
    if (0 === t) return 0;
    if (2 == (t /= .5)) return 1;
    n || (n = .3 * 1.5);
    r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
    if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
    return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
  }, e.swingFromTo = function (t) {
    var e = o;
    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
  }, e.swingFrom = function (t) {
    return t * t * ((o + 1) * t - o)
  }, e.swingTo = function (t) {
    return (t -= 1) * t * ((o + 1) * t + o) + 1
  }, e.bounce = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
  }, e.bouncePast = function (t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
  }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
  var i = r(n(116)), o = 1.70158, a = (0, i.default)(.25, .1, .25, 1);
  e.ease = a;
  var u = (0, i.default)(.42, 0, 1, 1);
  e.easeIn = u;
  var c = (0, i.default)(0, 0, .58, 1);
  e.easeOut = c;
  var s = (0, i.default)(.42, 0, .58, 1);
  e.easeInOut = s
}, function (t, e) {
  var n = 4, r = .001, i = 1e-7, o = 10, a = 11, u = 1 / (a - 1), c = "function" == typeof Float32Array;

  function s(t, e) {
    return 1 - 3 * e + 3 * t
  }

  function f(t, e) {
    return 3 * e - 6 * t
  }

  function l(t) {
    return 3 * t
  }

  function d(t, e, n) {
    return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
  }

  function p(t, e, n) {
    return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
  }

  t.exports = function (t, e, s, f) {
    if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
    var l = c ? new Float32Array(a) : new Array(a);
    if (t !== e || s !== f) for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

    function h(e) {
      for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
      var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u, E = p(h, t, s);
      return E >= r ? function (t, e, r, i) {
        for (var o = 0; o < n; ++o) {
          var a = p(e, r, i);
          if (0 === a) return e;
          e -= (d(e, r, i) - t) / a
        }
        return e
      }(e, h, t, s) : 0 === E ? h : function (t, e, n, r, a) {
        var u, c, s = 0;
        do {
          (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
        } while (Math.abs(u) > i && ++s < o);
        return c
      }(e, c, c + u, t, s)
    }

    return function (n) {
      return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f)
    }
  }
}, function (t, e, n) {
  "use strict";
  var r = n(1)(n(118)), i = n(1), o = n(18);
  Object.defineProperty(e, "__esModule", {value: !0}), e.optimizeFloat = c, e.createBezierEasing = function (t) {
    return u.default.apply(void 0, (0, r.default)(t))
  }, e.applyEasing = function (t, e, n) {
    if (0 === e) return 0;
    if (1 === e) return 1;
    if (n) return c(e > 0 ? n(e) : e);
    return c(e > 0 && t && a[t] ? a[t](e) : e)
  };
  var a = o(n(115)), u = i(n(116));

  function c(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, r = Math.pow(n, e),
      i = Number(Math.round(t * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0
  }
}, function (t, e, n) {
  var r = n(266), i = n(267), o = n(268);
  t.exports = function (t) {
    return r(t) || i(t) || o()
  }
}, function (t, e, n) {
  "use strict";
  var r = n(1)(n(21));
  Object.defineProperty(e, "__esModule", {value: !0}), e.isPluginType = function (t) {
    return t === o.ActionTypeConsts.PLUGIN_LOTTIE
  }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
  var i = n(270), o = n(3), a = n(47), u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
    getConfig: i.getPluginConfig,
    getOrigin: i.getPluginOrigin,
    getDuration: i.getPluginDuration,
    getDestination: i.getPluginDestination,
    createInstance: i.createPluginInstance,
    render: i.renderPlugin,
    clear: i.clearPlugin
  });
  var c = function (t) {
    return function (e) {
      if (!a.IS_BROWSER_ENV) return function () {
        return null
      };
      var n = u[e];
      if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
      var r = n[t];
      if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
      return r
    }
  }, s = c("getConfig");
  e.getPluginConfig = s;
  var f = c("getOrigin");
  e.getPluginOrigin = f;
  var l = c("getDuration");
  e.getPluginDuration = l;
  var d = c("getDestination");
  e.getPluginDestination = d;
  var p = c("createInstance");
  e.createPluginInstance = p;
  var v = c("render");
  e.renderPlugin = v;
  var h = c("clear");
  e.clearPlugin = h
}, function (t, e, n) {
  var r = n(121), i = n(277)(r);
  t.exports = i
}, function (t, e, n) {
  var r = n(275), i = n(35);
  t.exports = function (t, e) {
    return t && r(t, e, i)
  }
}, function (t, e, n) {
  "use strict";
  var r = n(1)(n(118)), i = n(18), o = n(1);
  Object.defineProperty(e, "__esModule", {value: !0}), e.observeRequests = function (t) {
    P({
      store: t, select: function (t) {
        var e = t.ixRequest;
        return e.preview
      }, onChange: et
    }), P({
      store: t, select: function (t) {
        var e = t.ixRequest;
        return e.playback
      }, onChange: rt
    }), P({
      store: t, select: function (t) {
        var e = t.ixRequest;
        return e.stop
      }, onChange: it
    }), P({
      store: t, select: function (t) {
        var e = t.ixRequest;
        return e.clear
      }, onChange: ot
    })
  }, e.startEngine = at, e.stopEngine = ut, e.stopAllActionGroups = ht, e.stopActionGroup = Et, e.startActionGroup = _t;
  var a = o(n(30)), u = o(n(284)), c = o(n(94)), s = o(n(59)), f = o(n(285)), l = o(n(291)), d = o(n(303)),
    p = o(n(304)), v = o(n(305)), h = o(n(308)), E = n(3), _ = n(15), y = n(64), g = i(n(311)), m = o(n(312)),
    I = Object.keys(E.QuickEffectIds), T = function (t) {
      return I.includes(t)
    }, b = E.IX2EngineConstants, O = b.COLON_DELIMITER, A = b.BOUNDARY_SELECTOR, w = b.HTML_ELEMENT, S = b.RENDER_GENERAL,
    R = b.W_MOD_IX, N = _.IX2VanillaUtils, x = N.getAffectedElements, C = N.getElementId, L = N.getDestinationValues,
    P = N.observeStore, M = N.getInstanceId, D = N.renderHTMLElement, j = N.clearAllStyles,
    F = N.getMaxDurationItemIndex, X = N.getComputedStyle, G = N.getInstanceOrigin, V = N.reduceListToGroup,
    k = N.shouldNamespaceEventParameter, U = N.getNamespacedParameterId, B = N.shouldAllowMediaQuery,
    W = N.cleanupHTMLElement, H = N.stringifyTarget, z = N.mediaQueriesEqual, K = N.shallowEqual,
    Y = _.IX2VanillaPlugins, Q = Y.isPluginType, q = Y.createPluginInstance, $ = Y.getPluginDuration,
    Z = navigator.userAgent, J = Z.match(/iPad/i) || Z.match(/iPhone/), tt = 12;

  function et(t, e) {
    var n = t.rawData, r = function () {
      at({store: e, rawData: n, allowEvents: !0}), nt()
    };
    t.defer ? setTimeout(r, 0) : r()
  }

  function nt() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
  }

  function rt(t, e) {
    var n = t.actionTypeId, r = t.actionListId, i = t.actionItemId, o = t.eventId, a = t.allowEvents, u = t.immediate,
      c = t.testManual, s = t.verbose, f = void 0 === s || s, l = t.rawData;
    if (r && i && l && u) {
      var d = l.actionLists[r];
      d && (l = V({actionList: d, actionItemId: i, rawData: l}))
    }
    if (at({
      store: e,
      rawData: l,
      allowEvents: a,
      testManual: c
    }), r && n === E.ActionTypeConsts.GENERAL_START_ACTION || T(n)) {
      Et({store: e, actionListId: r}), vt({store: e, actionListId: r, eventId: o});
      var p = _t({store: e, eventId: o, actionListId: r, immediate: u, verbose: f});
      f && p && e.dispatch((0, y.actionListPlaybackChanged)({actionListId: r, isPlaying: !u}))
    }
  }

  function it(t, e) {
    var n = t.actionListId;
    n ? Et({store: e, actionListId: n}) : ht({store: e}), ut(e)
  }

  function ot(t, e) {
    ut(e), j({store: e, elementApi: g})
  }

  function at(t) {
    var e, n = t.store, i = t.rawData, o = t.allowEvents, a = t.testManual, u = n.getState().ixSession;
    i && n.dispatch((0, y.rawDataImported)(i)), u.active || (n.dispatch((0, y.sessionInitialized)({
      hasBoundaryNodes: Boolean(document.querySelector(A)),
      reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
    })), o && (function (t) {
      var e = t.getState().ixData.eventTypeMap;
      ft(t), (0, v.default)(e, function (e, n) {
        var i = m.default[n];
        i ? function (t) {
          var e = t.logic, n = t.store, i = t.events;
          !function (t) {
            if (J) {
              var e = {}, n = "";
              for (var r in t) {
                var i = t[r], o = i.eventTypeId, a = i.target, u = g.getQuerySelector(a);
                e[u] || o !== E.EventTypeConsts.MOUSE_CLICK && o !== E.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
              }
              if (n) {
                var c = document.createElement("style");
                c.textContent = n, document.body.appendChild(c)
              }
            }
          }(i);
          var o = e.types, a = e.handler, u = n.getState().ixData, l = u.actionLists, d = lt(i, pt);
          if ((0, f.default)(d)) {
            (0, v.default)(d, function (t, e) {
              var o = i[e], a = o.action, f = o.id, d = o.mediaQueries, p = void 0 === d ? u.mediaQueryKeys : d,
                v = a.config.actionListId;
              if (z(p, u.mediaQueryKeys) || n.dispatch((0, y.mediaQueriesDefined)()), a.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                var h = Array.isArray(o.config) ? o.config : [o.config];
                h.forEach(function (e) {
                  var i = e.continuousParameterGroupId,
                    o = (0, s.default)(l, "".concat(v, ".continuousParameterGroups"), []),
                    a = (0, c.default)(o, function (t) {
                      var e = t.id;
                      return e === i
                    }), u = (e.smoothing || 0) / 100, d = (e.restingState || 0) / 100;
                  a && t.forEach(function (t, i) {
                    var o = f + O + i;
                    !function (t) {
                      var e = t.store, n = t.eventStateKey, i = t.eventTarget, o = t.eventId, a = t.eventConfig,
                        u = t.actionListId, c = t.parameterGroup, f = t.smoothing, l = t.restingValue, d = e.getState(),
                        p = d.ixData, v = d.ixSession, h = p.events[o], E = h.eventTypeId, _ = {}, y = {}, m = [],
                        I = c.continuousActionGroups, T = c.id;
                      k(E, a) && (T = U(n, T));
                      var b = v.hasBoundaryNodes && i ? g.getClosestElement(i, A) : null;
                      I.forEach(function (t) {
                        var e = t.keyframe, n = t.actionItems;
                        n.forEach(function (t) {
                          var n = t.actionTypeId, o = t.config.target;
                          if (o) {
                            var a = o.boundaryMode ? b : null, u = H(o) + O + n;
                            if (y[u] = function () {
                              var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                n = arguments.length > 1 ? arguments[1] : void 0,
                                i = arguments.length > 2 ? arguments[2] : void 0, o = (0, r.default)(e);
                              return o.some(function (e, r) {
                                return e.keyframe === n && (t = r, !0)
                              }), null == t && (t = o.length, o.push({
                                keyframe: n,
                                actionItems: []
                              })), o[t].actionItems.push(i), o
                            }(y[u], e, t), !_[u]) {
                              _[u] = !0;
                              var c = t.config;
                              x({
                                config: c,
                                event: h,
                                eventTarget: i,
                                elementRoot: a,
                                elementApi: g
                              }).forEach(function (t) {
                                m.push({element: t, key: u})
                              })
                            }
                          }
                        })
                      }), m.forEach(function (t) {
                        var n = t.element, r = t.key, i = y[r], a = (0, s.default)(i, "[0].actionItems[0]", {}),
                          c = a.actionTypeId, d = Q(c) ? q(c)(n, a) : null,
                          p = L({element: n, actionItem: a, elementApi: g}, d);
                        yt({
                          store: e,
                          element: n,
                          eventId: o,
                          actionListId: u,
                          actionItem: a,
                          destination: p,
                          continuous: !0,
                          parameterId: T,
                          actionGroups: i,
                          smoothing: f,
                          restingValue: l,
                          pluginInstance: d
                        })
                      })
                    }({
                      store: n,
                      eventStateKey: o,
                      eventTarget: t,
                      eventId: f,
                      eventConfig: e,
                      actionListId: v,
                      parameterGroup: a,
                      smoothing: u,
                      restingValue: d
                    })
                  })
                })
              }
              (a.actionTypeId === E.ActionTypeConsts.GENERAL_START_ACTION || T(a.actionTypeId)) && vt({
                store: n,
                actionListId: v,
                eventId: f
              })
            });
            var p = function (t) {
              var e = n.getState(), r = e.ixSession;
              dt(d, function (e, o, c) {
                var s = i[o], f = r.eventState[c], l = s.action, d = s.mediaQueries,
                  p = void 0 === d ? u.mediaQueryKeys : d;
                if (B(p, r.mediaQueryKey)) {
                  var v = function () {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      i = a({store: n, element: e, event: s, eventConfig: r, nativeEvent: t, eventStateKey: c}, f);
                    K(i, f) || n.dispatch((0, y.eventStateChanged)(c, i))
                  };
                  if (l.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                    var h = Array.isArray(s.config) ? s.config : [s.config];
                    h.forEach(v)
                  } else v()
                }
              })
            }, _ = (0, h.default)(p, tt), m = function (t) {
              var e = t.target, r = void 0 === e ? document : e, i = t.types, o = t.throttle;
              i.split(" ").filter(Boolean).forEach(function (t) {
                var e = o ? _ : p;
                r.addEventListener(t, e), n.dispatch((0, y.eventListenerAdded)(r, [t, e]))
              })
            };
            Array.isArray(o) ? o.forEach(m) : "string" == typeof o && m(e)
          }
        }({logic: i, store: t, events: e}) : console.warn("IX2 event type not configured: ".concat(n))
      }), t.getState().ixSession.eventListeners.length && function (t) {
        var e = function () {
          ft(t)
        };
        st.forEach(function (n) {
          window.addEventListener(n, e), t.dispatch((0, y.eventListenerAdded)(window, [n, e]))
        }), e()
      }(t)
    }(n), -1 === (e = document.documentElement).className.indexOf(R) && (e.className += " ".concat(R)), n.getState().ixSession.hasDefinedMediaQueries && function (t) {
      P({
        store: t, select: function (t) {
          return t.ixSession.mediaQueryKey
        }, onChange: function () {
          ut(t), j({store: t, elementApi: g}), at({store: t, allowEvents: !0}), nt()
        }
      })
    }(n)), n.dispatch((0, y.sessionStarted)()), function (t, e) {
      !function n(r) {
        var i = t.getState(), o = i.ixSession, a = i.ixParameters;
        o.active && (t.dispatch((0, y.animationFrameChanged)(r, a)), e ? function (t, e) {
          var n = P({
            store: t, select: function (t) {
              return t.ixSession.tick
            }, onChange: function (t) {
              e(t), n()
            }
          })
        }(t, n) : requestAnimationFrame(n))
      }(window.performance.now())
    }(n, a))
  }

  function ut(t) {
    var e = t.getState().ixSession;
    e.active && (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()))
  }

  function ct(t) {
    var e = t.target, n = t.listenerParams;
    e.removeEventListener.apply(e, n)
  }

  var st = ["resize", "orientationchange"];

  function ft(t) {
    var e = t.getState(), n = e.ixSession, r = e.ixData, i = window.innerWidth;
    if (i !== n.viewportWidth) {
      var o = r.mediaQueries;
      t.dispatch((0, y.viewportWidthChanged)({width: i, mediaQueries: o}))
    }
  }

  var lt = function (t, e) {
    return (0, l.default)((0, p.default)(t, e), d.default)
  }, dt = function (t, e) {
    (0, v.default)(t, function (t, n) {
      t.forEach(function (t, r) {
        e(t, n, n + O + r)
      })
    })
  }, pt = function (t) {
    var e = {target: t.target, targets: t.targets};
    return x({config: e, elementApi: g})
  };

  function vt(t) {
    var e = t.store, n = t.actionListId, r = t.eventId, i = e.getState(), o = i.ixData, a = i.ixSession,
      u = o.actionLists, c = o.events[r], f = u[n];
    if (f && f.useFirstGroupAsInitialState) {
      var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
        d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
      if (!B(d, a.mediaQueryKey)) return;
      l.forEach(function (t) {
        var i, o = t.config, a = t.actionTypeId,
          u = !0 === (null == o ? void 0 : null === (i = o.target) || void 0 === i ? void 0 : i.useEventTarget) ? {
            target: c.target,
            targets: c.targets
          } : o, s = x({config: u, event: c, elementApi: g}), f = Q(a);
        s.forEach(function (i) {
          var o = f ? q(a)(i, t) : null;
          yt({
            destination: L({element: i, actionItem: t, elementApi: g}, o),
            immediate: !0,
            store: e,
            element: i,
            eventId: r,
            actionItem: t,
            actionListId: n,
            pluginInstance: o
          })
        })
      })
    }
  }

  function ht(t) {
    var e = t.store, n = e.getState().ixInstances;
    (0, v.default)(n, function (t) {
      if (!t.continuous) {
        var n = t.actionListId, r = t.verbose;
        gt(t, e), r && e.dispatch((0, y.actionListPlaybackChanged)({actionListId: n, isPlaying: !1}))
      }
    })
  }

  function Et(t) {
    var e = t.store, n = t.eventId, r = t.eventTarget, i = t.eventStateKey, o = t.actionListId, a = e.getState(),
      u = a.ixInstances, c = a.ixSession.hasBoundaryNodes && r ? g.getClosestElement(r, A) : null;
    (0, v.default)(u, function (t) {
      var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"), a = !i || t.eventStateKey === i;
      if (t.actionListId === o && t.eventId === n && a) {
        if (c && r && !g.elementContains(c, t.element)) return;
        gt(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({actionListId: o, isPlaying: !1}))
      }
    })
  }

  function _t(t) {
    var e, n = t.store, r = t.eventId, i = t.eventTarget, o = t.eventStateKey, a = t.actionListId, u = t.groupIndex,
      c = void 0 === u ? 0 : u, f = t.immediate, l = t.verbose, d = n.getState(), p = d.ixData, v = d.ixSession,
      h = p.events[r] || {}, E = h.mediaQueries, _ = void 0 === E ? p.mediaQueryKeys : E,
      y = (0, s.default)(p, "actionLists.".concat(a), {}), m = y.actionItemGroups, I = y.useFirstGroupAsInitialState;
    if (!m || !m.length) return !1;
    c >= m.length && (0, s.default)(h, "config.loop") && (c = 0), 0 === c && I && c++;
    var b = (0 === c || 1 === c && I) && T(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId) ? h.config.delay : void 0,
      O = (0, s.default)(m, [c, "actionItems"], []);
    if (!O.length) return !1;
    if (!B(_, v.mediaQueryKey)) return !1;
    var w = v.hasBoundaryNodes && i ? g.getClosestElement(i, A) : null, S = F(O), R = !1;
    return O.forEach(function (t, e) {
      var u = t.config, s = t.actionTypeId, d = Q(s), p = u.target;
      if (p) {
        var v = p.boundaryMode ? w : null;
        x({config: u, event: h, eventTarget: i, elementRoot: v, elementApi: g}).forEach(function (u, p) {
          var v = d ? q(s)(u, t) : null, h = d ? $(s)(u, t) : null;
          R = !0;
          var E = S === e && 0 === p, _ = X({element: u, actionItem: t}),
            y = L({element: u, actionItem: t, elementApi: g}, v);
          yt({
            store: n,
            element: u,
            actionItem: t,
            eventId: r,
            eventTarget: i,
            eventStateKey: o,
            actionListId: a,
            groupIndex: c,
            isCarrier: E,
            computedStyle: _,
            destination: y,
            immediate: f,
            verbose: l,
            pluginInstance: v,
            pluginDuration: h,
            instanceDelay: b
          })
        })
      }
    }), R
  }

  function yt(t) {
    var e, n, r = t.store, i = t.computedStyle, o = (0, u.default)(t, ["store", "computedStyle"]), c = o.element,
      s = o.actionItem, f = o.immediate, l = o.pluginInstance, d = o.continuous, p = o.restingValue, v = o.eventId,
      h = !d, _ = M(), m = r.getState(), I = m.ixElements, T = m.ixSession, b = m.ixData, O = C(I, c),
      A = (I[O] || {}).refState, w = g.getRefType(c), S = T.reducedMotion && E.ReducedMotionTypes[s.actionTypeId];
    if (S && d) switch (null === (e = b.events[v]) || void 0 === e ? void 0 : e.eventTypeId) {
      case E.EventTypeConsts.MOUSE_MOVE:
      case E.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
        n = p;
        break;
      default:
        n = .5
    }
    var R = G(c, A, i, s, g, l);
    r.dispatch((0, y.instanceAdded)((0, a.default)({
      instanceId: _,
      elementId: O,
      origin: R,
      refType: w,
      skipMotion: S,
      skipToValue: n
    }, o))), mt(document.body, "ix2-animation-started", _), f ? function (t, e) {
      var n = t.getState().ixParameters;
      t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t)
    }(r, _) : (P({
      store: r, select: function (t) {
        return t.ixInstances[_]
      }, onChange: It
    }), h && r.dispatch((0, y.instanceStarted)(_, T.tick)))
  }

  function gt(t, e) {
    mt(document.body, "ix2-animation-stopping", {instanceId: t.id, state: e.getState()});
    var n = t.elementId, r = t.actionItem, i = e.getState().ixElements[n] || {}, o = i.ref;
    i.refType === w && W(o, r, g), e.dispatch((0, y.instanceRemoved)(t.id))
  }

  function mt(t, e, n) {
    var r = document.createEvent("CustomEvent");
    r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
  }

  function It(t, e) {
    var n = t.active, r = t.continuous, i = t.complete, o = t.elementId, a = t.actionItem, u = t.actionTypeId,
      c = t.renderType, s = t.current, f = t.groupIndex, l = t.eventId, d = t.eventTarget, p = t.eventStateKey,
      v = t.actionListId, h = t.isCarrier, E = t.styleProp, _ = t.verbose, m = t.pluginInstance, I = e.getState(),
      T = I.ixData, b = I.ixSession, O = (T.events[l] || {}).mediaQueries, A = void 0 === O ? T.mediaQueryKeys : O;
    if (B(A, b.mediaQueryKey) && (r || n || i)) {
      if (s || c === S && i) {
        e.dispatch((0, y.elementStateChanged)(o, u, s, a));
        var R = e.getState().ixElements[o] || {}, N = R.ref, x = R.refType, C = R.refState, L = C && C[u];
        switch (x) {
          case w:
            D(N, C, L, l, a, E, g, c, m)
        }
      }
      if (i) {
        if (h) {
          var P = _t({
            store: e,
            eventId: l,
            eventTarget: d,
            eventStateKey: p,
            actionListId: v,
            groupIndex: f + 1,
            verbose: _
          });
          _ && !P && e.dispatch((0, y.actionListPlaybackChanged)({actionListId: v, isPlaying: !1}))
        }
        gt(t, e)
      }
    }
  }
}, function (t, e, n) {
  var r = n(124);
  t.exports = function (t, e, n) {
    "__proto__" == e && r ? r(t, e, {configurable: !0, enumerable: !0, value: n, writable: !0}) : t[e] = n
  }
}, function (t, e, n) {
  var r = n(11), i = function () {
    try {
      var t = r(Object, "defineProperty");
      return t({}, "", {}), t
    } catch (t) {
    }
  }();
  t.exports = i
}, function (t, e, n) {
  var r = n(8), i = Object.create, o = function () {
    function t() {
    }

    return function (e) {
      if (!r(e)) return {};
      if (i) return i(e);
      t.prototype = e;
      var n = new t;
      return t.prototype = void 0, n
    }
  }();
  t.exports = o
}, function (t, e, n) {
  var r = n(325), i = n(326), o = r ? function (t) {
    return r.get(t)
  } : i;
  t.exports = o
}, function (t, e, n) {
  var r = n(327), i = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
      var a = n[o], u = a.func;
      if (null == u || u == t) return a.name
    }
    return e
  }
}, function (t, e, n) {
  n(129), n(130), n(131), n(133), n(134), n(135), n(136), n(137), n(139), n(334), n(335), t.exports = n(336)
}, function (t, e, n) {
  "use strict";
  var r = n(1)(n(13));
  !function () {
    if ("undefined" != typeof window) {
      var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./), e = !!t && parseInt(t[1], 10) >= 16;
      if (!("objectFit" in document.documentElement.style != !1) || e) {
        var n = function (t) {
          var e = t.parentNode;
          !function (t) {
            var e = window.getComputedStyle(t, null), n = e.getPropertyValue("position"),
              r = e.getPropertyValue("overflow"), i = e.getPropertyValue("display");
            n && "static" !== n || (t.style.position = "relative"), "hidden" !== r && (t.style.overflow = "hidden"), i && "inline" !== i || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className += " object-fit-polyfill")
          }(e), function (t) {
            var e = window.getComputedStyle(t, null), n = {
              "max-width": "none",
              "max-height": "none",
              "min-width": "0px",
              "min-height": "0px",
              top: "auto",
              right: "auto",
              bottom: "auto",
              left: "auto",
              "margin-top": "0px",
              "margin-right": "0px",
              "margin-bottom": "0px",
              "margin-left": "0px"
            };
            for (var r in n) e.getPropertyValue(r) !== n[r] && (t.style[r] = n[r])
          }(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", t.clientWidth > e.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", t.style.left = "50%", t.style.marginLeft = t.clientWidth / -2 + "px") : (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", t.style.top = "50%", t.style.marginTop = t.clientHeight / -2 + "px")
        }, i = function (t) {
          if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]"); else if (t && t.nodeName) t = [t]; else {
            if ("object" !== (0, r.default)(t) || !t.length || !t[0].nodeName) return !1;
            t = t
          }
          for (var i = 0; i < t.length; i++) if (t[i].nodeName) {
            var o = t[i].nodeName.toLowerCase();
            if ("img" === o) {
              if (e) continue;
              t[i].complete ? n(t[i]) : t[i].addEventListener("load", function () {
                n(this)
              })
            } else "video" === o ? t[i].readyState > 0 ? n(t[i]) : t[i].addEventListener("loadedmetadata", function () {
              n(this)
            }) : n(t[i])
          }
          return !0
        };
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i(), window.addEventListener("resize", i), window.objectFitPolyfill = i
      } else window.objectFitPolyfill = function () {
        return !1
      }
    }
  }()
}, function (t, e, n) {
  "use strict";
  !function () {
    function t(t) {
      Webflow.env("design") || ($("video").each(function () {
        t && $(this).prop("autoplay") ? this.play() : this.pause()
      }), $(".w-background-video--control").each(function () {
        t ? n($(this)) : e($(this))
      }))
    }

    function e(t) {
      t.find("> span").each(function (t) {
        $(this).prop("hidden", function () {
          return 0 === t
        })
      })
    }

    function n(t) {
      t.find("> span").each(function (t) {
        $(this).prop("hidden", function () {
          return 1 === t
        })
      })
    }

    "undefined" != typeof window && $(document).ready(function () {
      var r = window.matchMedia("(prefers-reduced-motion: reduce)");
      r.addEventListener("change", function (e) {
        t(!e.matches)
      }), r.matches && t(!1), $(document).on("click", ".w-background-video--control", function (t) {
        if (!Webflow.env("design")) {
          var r = $(t.currentTarget), i = $("video#".concat(r.attr("aria-controls"))).get(0);
          if (i) if (i.paused) {
            var o = i.play();
            n(r), o && "function" == typeof o.catch && o.catch(function () {
              e(r)
            })
          } else i.pause(), e(r)
        }
      })
    })
  }()
}, function (t, e, n) {
  "use strict";
  var r = n(6);
  r.define("brand", t.exports = function (t) {
    var e, n = {}, i = document, o = t("html"), a = t("body"), u = ".w-webflow-badge", c = window.location,
      s = /PhantomJS/i.test(navigator.userAgent),
      f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

    function l() {
      var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
      t(e).attr("style", n ? "display: none !important;" : "")
    }

    function d() {
      var t = a.children(u), n = t.length && t.get(0) === e, i = r.env("editor");
      n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
    }

    return n.ready = function () {
      var n, r, a, u = o.attr("data-wf-status"), p = o.attr("data-wf-domain") || "";
      /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
        marginRight: "8px",
        width: "16px"
      }), a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
    }, n
  })
}, function (t, e, n) {
  "use strict";
  var r = window.$, i = n(68) && r.tram;
  /*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
  t.exports = function () {
    var t = {VERSION: "1.6.0-Webflow"}, e = {}, n = Array.prototype, r = Object.prototype, o = Function.prototype,
      a = (n.push, n.slice), u = (n.concat, r.toString, r.hasOwnProperty), c = n.forEach, s = n.map,
      f = (n.reduce, n.reduceRight, n.filter), l = (n.every, n.some), d = n.indexOf,
      p = (n.lastIndexOf, Array.isArray, Object.keys), v = (o.bind, t.each = t.forEach = function (n, r, i) {
        if (null == n) return n;
        if (c && n.forEach === c) n.forEach(r, i); else if (n.length === +n.length) {
          for (var o = 0, a = n.length; o < a; o++) if (r.call(i, n[o], o, n) === e) return
        } else {
          var u = t.keys(n);
          for (o = 0, a = u.length; o < a; o++) if (r.call(i, n[u[o]], u[o], n) === e) return
        }
        return n
      });
    t.map = t.collect = function (t, e, n) {
      var r = [];
      return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function (t, i, o) {
        r.push(e.call(n, t, i, o))
      }), r)
    }, t.find = t.detect = function (t, e, n) {
      var r;
      return h(t, function (t, i, o) {
        if (e.call(n, t, i, o)) return r = t, !0
      }), r
    }, t.filter = t.select = function (t, e, n) {
      var r = [];
      return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function (t, i, o) {
        e.call(n, t, i, o) && r.push(t)
      }), r)
    };
    var h = t.some = t.any = function (n, r, i) {
      r || (r = t.identity);
      var o = !1;
      return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function (t, n, a) {
        if (o || (o = r.call(i, t, n, a))) return e
      }), !!o)
    };
    t.contains = t.include = function (t, e) {
      return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function (t) {
        return t === e
      }))
    }, t.delay = function (t, e) {
      var n = a.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n)
      }, e)
    }, t.defer = function (e) {
      return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
    }, t.throttle = function (t) {
      var e, n, r;
      return function () {
        e || (e = !0, n = arguments, r = this, i.frame(function () {
          e = !1, t.apply(r, n)
        }))
      }
    }, t.debounce = function (e, n, r) {
      var i, o, a, u, c, s = function s() {
        var f = t.now() - u;
        f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
      };
      return function () {
        a = this, o = arguments, u = t.now();
        var f = r && !i;
        return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
      }
    }, t.defaults = function (e) {
      if (!t.isObject(e)) return e;
      for (var n = 1, r = arguments.length; n < r; n++) {
        var i = arguments[n];
        for (var o in i) void 0 === e[o] && (e[o] = i[o])
      }
      return e
    }, t.keys = function (e) {
      if (!t.isObject(e)) return [];
      if (p) return p(e);
      var n = [];
      for (var r in e) t.has(e, r) && n.push(r);
      return n
    }, t.has = function (t, e) {
      return u.call(t, e)
    }, t.isObject = function (t) {
      return t === Object(t)
    }, t.now = Date.now || function () {
      return (new Date).getTime()
    }, t.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var E = /(.)^/, _ = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
      y = /\\|'|\r|\n|\u2028|\u2029/g, g = function (t) {
        return "\\" + _[t]
      };
    return t.template = function (e, n, r) {
      !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
      var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g"),
        o = 0, a = "__p+='";
      e.replace(i, function (t, n, r, i, u) {
        return a += e.slice(o, u).replace(y, g), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
      }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
      try {
        var u = new Function(n.variable || "obj", "_", a)
      } catch (t) {
        throw t.source = a, t
      }
      var c = function (e) {
        return u.call(this, e, t)
      }, s = n.variable || "obj";
      return c.source = "function(" + s + "){\n" + a + "}", c
    }, t
  }()
}, function (t, e, n) {
  "use strict";
  var r = n(6);
  r.define("edit", t.exports = function (t, e, n) {
    if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && !function () {
      try {
        return window.top.__Cypress__
      } catch (t) {
        return !1
      }
    }()) return {exit: 1};
    var i, o = t(window), a = t(document.documentElement), u = document.location, c = "hashchange",
      s = n.load || function () {
        i = !0, window.WebflowEditor = !0, o.off(c, l), function (t) {
          var e = window.document.createElement("iframe");
          e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
          var n = function n(r) {
            "WF_third_party_cookies_unsupported" === r.data ? (_(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (_(e, n), t(!0))
          };
          e.onerror = function () {
            _(e, n), t(!1)
          }, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
        }(function (e) {
          t.ajax({
            url: E("https://editor-api.webflow.com/api/editor/view"),
            data: {siteId: a.attr("data-wf-site")},
            xhrFields: {withCredentials: !0},
            dataType: "json",
            crossDomain: !0,
            success: d(e)
          })
        })
      }, f = !1;
    try {
      f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
    } catch (t) {
    }

    function l() {
      i || /\?edit/.test(u.hash) && s()
    }

    function d(t) {
      return function (e) {
        e ? (e.thirdPartyCookiesSupported = t, p(h(e.bugReporterScriptPath), function () {
          p(h(e.scriptPath), function () {
            window.WebflowEditor(e)
          })
        })) : console.error("Could not load editor data")
      }
    }

    function p(e, n) {
      t.ajax({type: "GET", url: e, dataType: "script", cache: !0}).then(n, v)
    }

    function v(t, e, n) {
      throw console.error("Could not load editor script: " + e), n
    }

    function h(t) {
      return t.indexOf("//") >= 0 ? t : E("https://editor-api.webflow.com" + t)
    }

    function E(t) {
      return t.replace(/([^:])\/\//g, "$1/")
    }

    function _(t, e) {
      window.removeEventListener("message", e, !1), t.remove()
    }

    return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {}
  })
}, function (t, e, n) {
  "use strict";
  n(6).define("focus-visible", t.exports = function () {
    function t(t) {
      var e = !0, n = !1, r = null, i = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0
      };

      function o(t) {
        return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList)
      }

      function a(t) {
        t.getAttribute("data-wf-focus-visible") || t.setAttribute("data-wf-focus-visible", "true")
      }

      function u() {
        e = !1
      }

      function c() {
        document.addEventListener("mousemove", s), document.addEventListener("mousedown", s), document.addEventListener("mouseup", s), document.addEventListener("pointermove", s), document.addEventListener("pointerdown", s), document.addEventListener("pointerup", s), document.addEventListener("touchmove", s), document.addEventListener("touchstart", s), document.addEventListener("touchend", s)
      }

      function s(t) {
        t.target.nodeName && "html" === t.target.nodeName.toLowerCase() || (e = !1, document.removeEventListener("mousemove", s), document.removeEventListener("mousedown", s), document.removeEventListener("mouseup", s), document.removeEventListener("pointermove", s), document.removeEventListener("pointerdown", s), document.removeEventListener("pointerup", s), document.removeEventListener("touchmove", s), document.removeEventListener("touchstart", s), document.removeEventListener("touchend", s))
      }

      document.addEventListener("keydown", function (n) {
        n.metaKey || n.altKey || n.ctrlKey || (o(t.activeElement) && a(t.activeElement), e = !0)
      }, !0), document.addEventListener("mousedown", u, !0), document.addEventListener("pointerdown", u, !0), document.addEventListener("touchstart", u, !0), document.addEventListener("visibilitychange", function () {
        "hidden" === document.visibilityState && (n && (e = !0), c())
      }, !0), c(), t.addEventListener("focus", function (t) {
        var n, r, u;
        o(t.target) && (e || (n = t.target, r = n.type, "INPUT" === (u = n.tagName) && i[r] && !n.readOnly || "TEXTAREA" === u && !n.readOnly || n.isContentEditable)) && a(t.target)
      }, !0), t.addEventListener("blur", function (t) {
        var e;
        o(t.target) && t.target.hasAttribute("data-wf-focus-visible") && (n = !0, window.clearTimeout(r), r = window.setTimeout(function () {
          n = !1
        }, 100), (e = t.target).getAttribute("data-wf-focus-visible") && e.removeAttribute("data-wf-focus-visible"))
      }, !0)
    }

    return {
      ready: function () {
        if ("undefined" != typeof document) try {
          document.querySelector(":focus-visible")
        } catch (e) {
          t(document)
        }
      }
    }
  })
}, function (t, e, n) {
  "use strict";
  n(6).define("focus-within", t.exports = function () {
    function t(t) {
      for (var e = [t], n = null; n = t.parentNode || t.host || t.defaultView;) e.push(n), t = n;
      return e
    }

    function e(t) {
      "function" != typeof t.getAttribute || t.getAttribute("data-wf-focus-within") || t.setAttribute("data-wf-focus-within", "true")
    }

    function n(t) {
      "function" == typeof t.getAttribute && t.getAttribute("data-wf-focus-within") && t.removeAttribute("data-wf-focus-within")
    }

    return {
      ready: function () {
        if ("undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within")) try {
          document.querySelector(":focus-within")
        } catch (i) {
          r = function (r) {
            var i;
            i || (window.requestAnimationFrame(function () {
              i = !1, "blur" === r.type && Array.prototype.slice.call(t(r.target)).forEach(n), "focus" === r.type && Array.prototype.slice.call(t(r.target)).forEach(e)
            }), i = !0)
          }, document.addEventListener("focus", r, !0), document.addEventListener("blur", r, !0), e(document.body)
        }
        var r
      }
    }
  })
}, function (t, e, n) {
  "use strict";
  var r = n(6);
  r.define("focus", t.exports = function () {
    var t = [], e = !1;

    function n(n) {
      e && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), t.unshift(n))
    }

    function i(n) {
      (function (t) {
        var e = t.target, n = e.tagName;
        return /^a$/i.test(n) && null != e.href || /^(button|textarea)$/i.test(n) && !0 !== e.disabled || /^input$/i.test(n) && /^(button|reset|submit|radio|checkbox)$/i.test(e.type) && !e.disabled || !/^(button|input|textarea|select|a)$/i.test(n) && !Number.isNaN(Number.parseFloat(e.tabIndex)) || /^audio$/i.test(n) || /^video$/i.test(n) && !0 === e.controls
      })(n) && (e = !0, setTimeout(function () {
        for (e = !1, n.target.focus(); t.length > 0;) {
          var r = t.pop();
          r.target.dispatchEvent(new MouseEvent(r.type, r))
        }
      }, 0))
    }

    return {
      ready: function () {
        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && r.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
      }
    }
  })
}, function (t, e, n) {
  "use strict";
  var r = n(138);

  function i(t, e) {
    var n = document.createEvent("CustomEvent");
    n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
  }

  var o = window.jQuery, a = {}, u = {
    reset: function (t, e) {
      r.triggers.reset(t, e)
    }, intro: function (t, e) {
      r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
    }, outro: function (t, e) {
      r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
    }
  };
  a.triggers = {}, a.types = {
    INTRO: "w-ix-intro.w-ix",
    OUTRO: "w-ix-outro.w-ix"
  }, o.extend(a.triggers, u), t.exports = a
}, function (t, e, n) {
  "use strict";
  var r = window.jQuery, i = {}, o = [], a = {
    reset: function (t, e) {
      e.__wf_intro = null
    }, intro: function (t, e) {
      e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
    }, outro: function (t, e) {
      e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
    }
  };
  i.triggers = {}, i.types = {INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix"}, i.init = function () {
    for (var t = o.length, e = 0; e < t; e++) {
      var n = o[e];
      n[0](0, n[1])
    }
    o = [], r.extend(i.triggers, a)
  }, i.async = function () {
    for (var t in a) {
      var e = a[t];
      a.hasOwnProperty(t) && (i.triggers[t] = function (t, n) {
        o.push([e, n])
      })
    }
  }, i.async(), t.exports = i
}, function (t, e, n) {
  "use strict";
  var r = n(6), i = n(140);
  i.setEnv(r.env), r.define("ix2", t.exports = function () {
    return i
  })
}, function (t, e, n) {
  "use strict";
  var r = n(18), i = n(1);
  Object.defineProperty(e, "__esModule", {value: !0}), e.setEnv = function (t) {
    t() && (0, u.observeRequests)(s)
  }, e.init = function (t) {
    f(), (0, u.startEngine)({store: s, rawData: t, allowEvents: !0})
  }, e.destroy = f, e.actions = e.store = void 0, n(141);
  var o = n(86), a = i(n(188)), u = n(122), c = r(n(64));
  e.actions = c;
  var s = (0, o.createStore)(a.default);

  function f() {
    (0, u.stopEngine)(s)
  }

  e.store = s
}, function (t, e, n) {
  var r = n(142);
  t.exports = r
}, function (t, e, n) {
  var r = n(143);
  t.exports = r
}, function (t, e, n) {
  n(144);
  var r = n(176);
  t.exports = r("Array", "includes")
}, function (t, e, n) {
  "use strict";
  var r = n(145), i = n(84).includes, o = n(171);
  r({target: "Array", proto: !0}, {
    includes: function (t) {
      return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), o("includes")
}, function (t, e, n) {
  var r = n(0), i = n(69).f, o = n(42), a = n(159), u = n(41), c = n(163), s = n(170);
  t.exports = function (t, e) {
    var n, f, l, d, p, v = t.target, h = t.global, E = t.stat;
    if (n = h ? r : E ? r[v] || u(v, {}) : (r[v] || {}).prototype) for (f in e) {
      if (d = e[f], l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f], !s(h ? f : v + (E ? "." : "#") + f, t.forced) && void 0 !== l) {
        if (typeof d == typeof l) continue;
        c(d, l)
      }
      (t.sham || l && l.sham) && o(d, "sham", !0), a(n, f, d, t)
    }
  }
}, function (t, e, n) {
  "use strict";
  var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({1: 2}, 1);
  e.f = o ? function (t) {
    var e = i(this, t);
    return !!e && e.enumerable
  } : r
}, function (t, e, n) {
  var r = n(0), i = n(4), o = n(19), a = n(148), u = r.Object, c = i("".split);
  t.exports = o(function () {
    return !u("z").propertyIsEnumerable(0)
  }) ? function (t) {
    return "String" == a(t) ? c(t, "") : u(t)
  } : u
}, function (t, e, n) {
  var r = n(4), i = r({}.toString), o = r("".slice);
  t.exports = function (t) {
    return o(i(t), 8, -1)
  }
}, function (t, e, n) {
  var r = n(0), i = n(39), o = n(20), a = n(73), u = n(153), c = n(156), s = n(76), f = r.TypeError,
    l = s("toPrimitive");
  t.exports = function (t, e) {
    if (!o(t) || a(t)) return t;
    var n, r = u(t, l);
    if (r) {
      if (void 0 === e && (e = "default"), n = i(r, t, e), !o(n) || a(n)) return n;
      throw f("Can't convert object to primitive value")
    }
    return void 0 === e && (e = "number"), c(t, e)
  }
}, function (t, e, n) {
  var r = n(4);
  t.exports = r({}.isPrototypeOf)
}, function (t, e, n) {
  var r, i, o = n(0), a = n(152), u = o.process, c = o.Deno, s = u && u.versions || c && c.version, f = s && s.v8;
  f && (i = (r = f.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = +r[1]), t.exports = i
}, function (t, e, n) {
  var r = n(27);
  t.exports = r("navigator", "userAgent") || ""
}, function (t, e, n) {
  var r = n(154);
  t.exports = function (t, e) {
    var n = t[e];
    return null == n ? void 0 : r(n)
  }
}, function (t, e, n) {
  var r = n(0), i = n(7), o = n(155), a = r.TypeError;
  t.exports = function (t) {
    if (i(t)) return t;
    throw a(o(t) + " is not a function")
  }
}, function (t, e, n) {
  var r = n(0).String;
  t.exports = function (t) {
    try {
      return r(t)
    } catch (t) {
      return "Object"
    }
  }
}, function (t, e, n) {
  var r = n(0), i = n(39), o = n(7), a = n(20), u = r.TypeError;
  t.exports = function (t, e) {
    var n, r;
    if ("string" === e && o(n = t.toString) && !a(r = i(n, t))) return r;
    if (o(n = t.valueOf) && !a(r = i(n, t))) return r;
    if ("string" !== e && o(n = t.toString) && !a(r = i(n, t))) return r;
    throw u("Can't convert object to primitive value")
  }
}, function (t, e) {
  t.exports = !1
}, function (t, e, n) {
  var r = n(0), i = n(71), o = r.Object;
  t.exports = function (t) {
    return o(i(t))
  }
}, function (t, e, n) {
  var r = n(0), i = n(7), o = n(9), a = n(42), u = n(41), c = n(81), s = n(160), f = n(162).CONFIGURABLE, l = s.get,
    d = s.enforce, p = String(String).split("String");
  (t.exports = function (t, e, n, c) {
    var s, l = !!c && !!c.unsafe, v = !!c && !!c.enumerable, h = !!c && !!c.noTargetGet,
      E = c && void 0 !== c.name ? c.name : e;
    i(n) && ("Symbol(" === String(E).slice(0, 7) && (E = "[" + String(E).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!o(n, "name") || f && n.name !== E) && a(n, "name", E), (s = d(n)).source || (s.source = p.join("string" == typeof E ? E : ""))), t !== r ? (l ? !h && t[e] && (v = !0) : delete t[e], v ? t[e] = n : a(t, e, n)) : v ? t[e] = n : u(e, n)
  })(Function.prototype, "toString", function () {
    return i(this) && l(this).source || c(this)
  })
}, function (t, e, n) {
  var r, i, o, a = n(161), u = n(0), c = n(4), s = n(20), f = n(42), l = n(9), d = n(40), p = n(82), v = n(43),
    h = u.TypeError, E = u.WeakMap;
  if (a || d.state) {
    var _ = d.state || (d.state = new E), y = c(_.get), g = c(_.has), m = c(_.set);
    r = function (t, e) {
      if (g(_, t)) throw new h("Object already initialized");
      return e.facade = t, m(_, t, e), e
    }, i = function (t) {
      return y(_, t) || {}
    }, o = function (t) {
      return g(_, t)
    }
  } else {
    var I = p("state");
    v[I] = !0, r = function (t, e) {
      if (l(t, I)) throw new h("Object already initialized");
      return e.facade = t, f(t, I, e), e
    }, i = function (t) {
      return l(t, I) ? t[I] : {}
    }, o = function (t) {
      return l(t, I)
    }
  }
  t.exports = {
    set: r, get: i, has: o, enforce: function (t) {
      return o(t) ? i(t) : r(t, {})
    }, getterFor: function (t) {
      return function (e) {
        var n;
        if (!s(e) || (n = i(e)).type !== t) throw h("Incompatible receiver, " + t + " required");
        return n
      }
    }
  }
}, function (t, e, n) {
  var r = n(0), i = n(7), o = n(81), a = r.WeakMap;
  t.exports = i(a) && /native code/.test(o(a))
}, function (t, e, n) {
  var r = n(14), i = n(9), o = Function.prototype, a = r && Object.getOwnPropertyDescriptor, u = i(o, "name"),
    c = u && "something" === function () {
    }.name, s = u && (!r || r && a(o, "name").configurable);
  t.exports = {EXISTS: u, PROPER: c, CONFIGURABLE: s}
}, function (t, e, n) {
  var r = n(9), i = n(164), o = n(69), a = n(28);
  t.exports = function (t, e) {
    for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
      var f = n[s];
      r(t, f) || u(t, f, c(e, f))
    }
  }
}, function (t, e, n) {
  var r = n(27), i = n(4), o = n(165), a = n(169), u = n(29), c = i([].concat);
  t.exports = r("Reflect", "ownKeys") || function (t) {
    var e = o.f(u(t)), n = a.f;
    return n ? c(e, n(t)) : e
  }
}, function (t, e, n) {
  var r = n(83), i = n(44).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function (t) {
    return r(t, i)
  }
}, function (t, e, n) {
  var r = n(85), i = Math.max, o = Math.min;
  t.exports = function (t, e) {
    var n = r(t);
    return n < 0 ? i(n + e, 0) : o(n, e)
  }
}, function (t, e, n) {
  var r = n(168);
  t.exports = function (t) {
    return r(t.length)
  }
}, function (t, e, n) {
  var r = n(85), i = Math.min;
  t.exports = function (t) {
    return t > 0 ? i(r(t), 9007199254740991) : 0
  }
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
  var r = n(19), i = n(7), o = /#|\.prototype\./, a = function (t, e) {
    var n = c[u(t)];
    return n == f || n != s && (i(e) ? r(e) : !!e)
  }, u = a.normalize = function (t) {
    return String(t).replace(o, ".").toLowerCase()
  }, c = a.data = {}, s = a.NATIVE = "N", f = a.POLYFILL = "P";
  t.exports = a
}, function (t, e, n) {
  var r = n(76), i = n(172), o = n(28), a = r("unscopables"), u = Array.prototype;
  null == u[a] && o.f(u, a, {configurable: !0, value: i(null)}), t.exports = function (t) {
    u[a][t] = !0
  }
}, function (t, e, n) {
  var r, i = n(29), o = n(173), a = n(44), u = n(43), c = n(175), s = n(80), f = n(82), l = f("IE_PROTO"),
    d = function () {
    }, p = function (t) {
      return "<script>" + t + "<\/script>"
    }, v = function (t) {
      t.write(p("")), t.close();
      var e = t.parentWindow.Object;
      return t = null, e
    }, h = function () {
      try {
        r = new ActiveXObject("htmlfile")
      } catch (t) {
      }
      var t, e;
      h = "undefined" != typeof document ? document.domain && r ? v(r) : ((e = s("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F) : v(r);
      for (var n = a.length; n--;) delete h.prototype[a[n]];
      return h()
    };
  u[l] = !0, t.exports = Object.create || function (t, e) {
    var n;
    return null !== t ? (d.prototype = i(t), n = new d, d.prototype = null, n[l] = t) : n = h(), void 0 === e ? n : o(n, e)
  }
}, function (t, e, n) {
  var r = n(14), i = n(28), o = n(29), a = n(26), u = n(174);
  t.exports = r ? Object.defineProperties : function (t, e) {
    o(t);
    for (var n, r = a(e), c = u(e), s = c.length, f = 0; s > f;) i.f(t, n = c[f++], r[n]);
    return t
  }
}, function (t, e, n) {
  var r = n(83), i = n(44);
  t.exports = Object.keys || function (t) {
    return r(t, i)
  }
}, function (t, e, n) {
  var r = n(27);
  t.exports = r("document", "documentElement")
}, function (t, e, n) {
  var r = n(0), i = n(4);
  t.exports = function (t, e) {
    return i(r[t].prototype[e])
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(88), i = n(180), o = n(181), a = "[object Null]", u = "[object Undefined]",
    c = r.default ? r.default.toStringTag : void 0;
  e.default = function (t) {
    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(179), i = "object" == typeof self && self && self.Object === Object && self,
    o = r.default || i || Function("return this")();
  e.default = o
}, function (t, e, n) {
  "use strict";
  n.r(e), function (t) {
    var n = "object" == typeof t && t && t.Object === Object && t;
    e.default = n
  }.call(this, n(25))
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(88), i = Object.prototype, o = i.hasOwnProperty, a = i.toString,
    u = r.default ? r.default.toStringTag : void 0;
  e.default = function (t) {
    var e = o.call(t, u), n = t[u];
    try {
      t[u] = void 0;
      var r = !0
    } catch (t) {
    }
    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = Object.prototype.toString;
  e.default = function (t) {
    return r.call(t)
  }
}, function (t, e, n) {
  "use strict";
  n.r(e);
  var r = n(183), i = Object(r.default)(Object.getPrototypeOf, Object);
  e.default = i
}, function (t, e, n) {
  "use strict";
  n.r(e), e.default = function (t, e) {
    return function (n) {
      return t(e(n))
    }
  }
}, function (t, e, n) {
  "use strict";
  n.r(e), e.default = function (t) {
    return null != t && "object" == typeof t
  }
}, function (t, e, n) {
  "use strict";
  n.r(e), function (t, r) {
    var i, o = n(187);
    i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
    var a = Object(o.default)(i);
    e.default = a
  }.call(this, n(25), n(186)(t))
}, function (t, e) {
  t.exports = function (t) {
    if (!t.webpackPolyfill) {
      var e = Object.create(t);
      e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0, get: function () {
          return e.l
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0, get: function () {
          return e.i
        }
      }), Object.defineProperty(e, "exports", {enumerable: !0}), e.webpackPolyfill = 1
    }
    return e
  }
}, function (t, e, n) {
  "use strict";

  function r(t) {
    var e, n = t.Symbol;
    return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
  }

  n.r(e), n.d(e, "default", function () {
    return r
  })
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
  var r = n(86), i = n(189), o = n(195), a = n(196), u = n(15), c = n(282), s = n(283),
    f = u.IX2ElementsReducer.ixElements, l = (0, r.combineReducers)({
      ixData: i.ixData,
      ixRequest: o.ixRequest,
      ixSession: a.ixSession,
      ixElements: f,
      ixInstances: c.ixInstances,
      ixParameters: s.ixParameters
    });
  e.default = l
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.ixData = void 0;
  var r = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
  e.ixData = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case r:
        return e.payload.ixData || Object.freeze({});
      default:
        return t
    }
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
  e.EventTypeConsts = {
    NAVBAR_OPEN: "NAVBAR_OPEN",
    NAVBAR_CLOSE: "NAVBAR_CLOSE",
    TAB_ACTIVE: "TAB_ACTIVE",
    TAB_INACTIVE: "TAB_INACTIVE",
    SLIDER_ACTIVE: "SLIDER_ACTIVE",
    SLIDER_INACTIVE: "SLIDER_INACTIVE",
    DROPDOWN_OPEN: "DROPDOWN_OPEN",
    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
    MOUSE_CLICK: "MOUSE_CLICK",
    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
    MOUSE_DOWN: "MOUSE_DOWN",
    MOUSE_UP: "MOUSE_UP",
    MOUSE_OVER: "MOUSE_OVER",
    MOUSE_OUT: "MOUSE_OUT",
    MOUSE_MOVE: "MOUSE_MOVE",
    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
    PAGE_START: "PAGE_START",
    PAGE_FINISH: "PAGE_FINISH",
    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
    PAGE_SCROLL: "PAGE_SCROLL"
  };
  e.EventAppliesTo = {ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE"};
  e.EventBasedOn = {ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT"};
  e.EventContinuousMouseAxes = {X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS"};
  e.EventLimitAffectedElements = {CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"};
  e.QuickEffectIds = {
    FADE_EFFECT: "FADE_EFFECT",
    SLIDE_EFFECT: "SLIDE_EFFECT",
    GROW_EFFECT: "GROW_EFFECT",
    SHRINK_EFFECT: "SHRINK_EFFECT",
    SPIN_EFFECT: "SPIN_EFFECT",
    FLY_EFFECT: "FLY_EFFECT",
    POP_EFFECT: "POP_EFFECT",
    FLIP_EFFECT: "FLIP_EFFECT",
    JIGGLE_EFFECT: "JIGGLE_EFFECT",
    PULSE_EFFECT: "PULSE_EFFECT",
    DROP_EFFECT: "DROP_EFFECT",
    BLINK_EFFECT: "BLINK_EFFECT",
    BOUNCE_EFFECT: "BOUNCE_EFFECT",
    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
    JELLO_EFFECT: "JELLO_EFFECT",
    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
  };
  e.QuickEffectDirectionConsts = {
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    BOTTOM: "BOTTOM",
    TOP: "TOP",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM_RIGHT: "BOTTOM_RIGHT",
    TOP_RIGHT: "TOP_RIGHT",
    TOP_LEFT: "TOP_LEFT",
    CLOCKWISE: "CLOCKWISE",
    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.InteractionTypeConsts = void 0;
  e.InteractionTypeConsts = {
    MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
    MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
    MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
    SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
    SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
    MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
    PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
    PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
    PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
    NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
    DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
    ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
    TAB_INTERACTION: "TAB_INTERACTION",
    SLIDER_INTERACTION: "SLIDER_INTERACTION"
  }
}, function (t, e, n) {
  "use strict";
  var r, i = n(1)(n(21));
  Object.defineProperty(e, "__esModule", {value: !0}), e.ReducedMotionTypes = void 0;
  var o = n(93).ActionTypeConsts, a = o.TRANSFORM_MOVE, u = o.TRANSFORM_SCALE, c = o.TRANSFORM_ROTATE,
    s = o.TRANSFORM_SKEW, f = o.STYLE_SIZE, l = o.STYLE_FILTER,
    d = (r = {}, (0, i.default)(r, a, !0), (0, i.default)(r, u, !0), (0, i.default)(r, c, !0), (0, i.default)(r, s, !0), (0, i.default)(r, f, !0), (0, i.default)(r, l, !0), r);
  e.ReducedMotionTypes = d
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
  e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
  e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
  e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
  e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
  e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
  e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
  e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
  e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
  e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
  e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
  e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
  e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
  e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
  e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
  e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
  e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
  e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
  e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
  e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
  e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
  e.IX2_ID_DELIMITER = "|";
  e.WF_PAGE = "data-wf-page";
  e.W_MOD_JS = "w-mod-js";
  e.W_MOD_IX = "w-mod-ix";
  e.BOUNDARY_SELECTOR = ".w-dyn-item";
  e.CONFIG_X_VALUE = "xValue";
  e.CONFIG_Y_VALUE = "yValue";
  e.CONFIG_Z_VALUE = "zValue";
  e.CONFIG_VALUE = "value";
  e.CONFIG_X_UNIT = "xUnit";
  e.CONFIG_Y_UNIT = "yUnit";
  e.CONFIG_Z_UNIT = "zUnit";
  e.CONFIG_UNIT = "unit";
  e.TRANSFORM = "transform";
  e.TRANSLATE_X = "translateX";
  e.TRANSLATE_Y = "translateY";
  e.TRANSLATE_Z = "translateZ";
  e.TRANSLATE_3D = "translate3d";
  e.SCALE_X = "scaleX";
  e.SCALE_Y = "scaleY";
  e.SCALE_Z = "scaleZ";
  e.SCALE_3D = "scale3d";
  e.ROTATE_X = "rotateX";
  e.ROTATE_Y = "rotateY";
  e.ROTATE_Z = "rotateZ";
  e.SKEW = "skew";
  e.SKEW_X = "skewX";
  e.SKEW_Y = "skewY";
  e.OPACITY = "opacity";
  e.FILTER = "filter";
  e.WIDTH = "width";
  e.HEIGHT = "height";
  e.BACKGROUND_COLOR = "backgroundColor";
  e.BACKGROUND = "background";
  e.BORDER_COLOR = "borderColor";
  e.COLOR = "color";
  e.DISPLAY = "display";
  e.FLEX = "flex";
  e.WILL_CHANGE = "willChange";
  e.AUTO = "AUTO";
  e.COMMA_DELIMITER = ",";
  e.COLON_DELIMITER = ":";
  e.BAR_DELIMITER = "|";
  e.CHILDREN = "CHILDREN";
  e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
  e.SIBLINGS = "SIBLINGS";
  e.PARENT = "PARENT";
  e.PRESERVE_3D = "preserve-3d";
  e.HTML_ELEMENT = "HTML_ELEMENT";
  e.PLAIN_OBJECT = "PLAIN_OBJECT";
  e.ABSTRACT_NODE = "ABSTRACT_NODE";
  e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
  e.RENDER_GENERAL = "RENDER_GENERAL";
  e.RENDER_STYLE = "RENDER_STYLE";
  e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function (t, e, n) {
  "use strict";
  var r, i = n(1)(n(21)), o = n(1);
  Object.defineProperty(e, "__esModule", {value: !0}), e.ixRequest = void 0;
  var a = o(n(30)), u = n(3), c = n(22), s = u.IX2EngineActionTypes, f = s.IX2_PREVIEW_REQUESTED,
    l = s.IX2_PLAYBACK_REQUESTED, d = s.IX2_STOP_REQUESTED, p = s.IX2_CLEAR_REQUESTED,
    v = {preview: {}, playback: {}, stop: {}, clear: {}},
    h = Object.create(null, (r = {}, (0, i.default)(r, f, {value: "preview"}), (0, i.default)(r, l, {value: "playback"}), (0, i.default)(r, d, {value: "stop"}), (0, i.default)(r, p, {value: "clear"}), r));
  e.ixRequest = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
      e = arguments.length > 1 ? arguments[1] : void 0;
    if (e.type in h) {
      var n = [h[e.type]];
      return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload))
    }
    return t
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.ixSession = void 0;
  var r = n(3), i = n(22), o = r.IX2EngineActionTypes, a = o.IX2_SESSION_INITIALIZED, u = o.IX2_SESSION_STARTED,
    c = o.IX2_TEST_FRAME_RENDERED, s = o.IX2_SESSION_STOPPED, f = o.IX2_EVENT_LISTENER_ADDED,
    l = o.IX2_EVENT_STATE_CHANGED, d = o.IX2_ANIMATION_FRAME_CHANGED, p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
    v = o.IX2_VIEWPORT_WIDTH_CHANGED, h = o.IX2_MEDIA_QUERIES_DEFINED, E = {
      active: !1,
      tick: 0,
      eventListeners: [],
      eventState: {},
      playbackState: {},
      viewportWidth: 0,
      mediaQueryKey: null,
      hasBoundaryNodes: !1,
      hasDefinedMediaQueries: !1,
      reducedMotion: !1
    };
  e.ixSession = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case a:
        var n = e.payload, r = n.hasBoundaryNodes, o = n.reducedMotion;
        return (0, i.merge)(t, {hasBoundaryNodes: r, reducedMotion: o});
      case u:
        return (0, i.set)(t, "active", !0);
      case c:
        var _ = e.payload.step, y = void 0 === _ ? 20 : _;
        return (0, i.set)(t, "tick", t.tick + y);
      case s:
        return E;
      case d:
        var g = e.payload.now;
        return (0, i.set)(t, "tick", g);
      case f:
        var m = (0, i.addLast)(t.eventListeners, e.payload);
        return (0, i.set)(t, "eventListeners", m);
      case l:
        var I = e.payload, T = I.stateKey, b = I.newState;
        return (0, i.setIn)(t, ["eventState", T], b);
      case p:
        var O = e.payload, A = O.actionListId, w = O.isPlaying;
        return (0, i.setIn)(t, ["playbackState", A], w);
      case v:
        for (var S = e.payload, R = S.width, N = S.mediaQueries, x = N.length, C = null, L = 0; L < x; L++) {
          var P = N[L], M = P.key, D = P.min, j = P.max;
          if (R >= D && R <= j) {
            C = M;
            break
          }
        }
        return (0, i.merge)(t, {viewportWidth: R, mediaQueryKey: C});
      case h:
        return (0, i.set)(t, "hasDefinedMediaQueries", !0);
      default:
        return t
    }
  }
}, function (t, e, n) {
  var r = n(198), i = n(250), o = n(110);
  t.exports = function (t) {
    var e = i(t);
    return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function (n) {
      return n === t || r(n, t, e)
    }
  }
}, function (t, e, n) {
  var r = n(96), i = n(100), o = 1, a = 2;
  t.exports = function (t, e, n, u) {
    var c = n.length, s = c, f = !u;
    if (null == t) return !s;
    for (t = Object(t); c--;) {
      var l = n[c];
      if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
    }
    for (; ++c < s;) {
      var d = (l = n[c])[0], p = t[d], v = l[1];
      if (f && l[2]) {
        if (void 0 === p && !(d in t)) return !1
      } else {
        var h = new r;
        if (u) var E = u(p, v, d, t, e, h);
        if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1
      }
    }
    return !0
  }
}, function (t, e) {
  t.exports = function () {
    this.__data__ = [], this.size = 0
  }
}, function (t, e, n) {
  var r = n(32), i = Array.prototype.splice;
  t.exports = function (t) {
    var e = this.__data__, n = r(e, t);
    return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
  }
}, function (t, e, n) {
  var r = n(32);
  t.exports = function (t) {
    var e = this.__data__, n = r(e, t);
    return n < 0 ? void 0 : e[n][1]
  }
}, function (t, e, n) {
  var r = n(32);
  t.exports = function (t) {
    return r(this.__data__, t) > -1
  }
}, function (t, e, n) {
  var r = n(32);
  t.exports = function (t, e) {
    var n = this.__data__, i = r(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
  }
}, function (t, e, n) {
  var r = n(31);
  t.exports = function () {
    this.__data__ = new r, this.size = 0
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = this.__data__, n = e.delete(t);
    return this.size = e.size, n
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.get(t)
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t)
  }
}, function (t, e, n) {
  var r = n(31), i = n(49), o = n(50), a = 200;
  t.exports = function (t, e) {
    var n = this.__data__;
    if (n instanceof r) {
      var u = n.__data__;
      if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
      n = this.__data__ = new o(u)
    }
    return n.set(t, e), this.size = n.size, this
  }
}, function (t, e, n) {
  var r = n(97), i = n(212), o = n(8), a = n(99), u = /^\[object .+?Constructor\]$/, c = Function.prototype,
    s = Object.prototype, f = c.toString, l = s.hasOwnProperty,
    d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  t.exports = function (t) {
    return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
  }
}, function (t, e, n) {
  var r = n(23), i = Object.prototype, o = i.hasOwnProperty, a = i.toString, u = r ? r.toStringTag : void 0;
  t.exports = function (t) {
    var e = o.call(t, u), n = t[u];
    try {
      t[u] = void 0;
      var r = !0
    } catch (t) {
    }
    var i = a.call(t);
    return r && (e ? t[u] = n : delete t[u]), i
  }
}, function (t, e) {
  var n = Object.prototype.toString;
  t.exports = function (t) {
    return n.call(t)
  }
}, function (t, e, n) {
  var r, i = n(213), o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
  t.exports = function (t) {
    return !!o && o in t
  }
}, function (t, e, n) {
  var r = n(5)["__core-js_shared__"];
  t.exports = r
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t ? void 0 : t[e]
  }
}, function (t, e, n) {
  var r = n(216), i = n(31), o = n(49);
  t.exports = function () {
    this.size = 0, this.__data__ = {hash: new r, map: new (o || i), string: new r}
  }
}, function (t, e, n) {
  var r = n(217), i = n(218), o = n(219), a = n(220), u = n(221);

  function c(t) {
    var e = -1, n = null == t ? 0 : t.length;
    for (this.clear(); ++e < n;) {
      var r = t[e];
      this.set(r[0], r[1])
    }
  }

  c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function (t, e, n) {
  var r = n(33);
  t.exports = function () {
    this.__data__ = r ? r(null) : {}, this.size = 0
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
  }
}, function (t, e, n) {
  var r = n(33), i = "__lodash_hash_undefined__", o = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    if (r) {
      var n = e[t];
      return n === i ? void 0 : n
    }
    return o.call(e, t) ? e[t] : void 0
  }
}, function (t, e, n) {
  var r = n(33), i = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    var e = this.__data__;
    return r ? void 0 !== e[t] : i.call(e, t)
  }
}, function (t, e, n) {
  var r = n(33), i = "__lodash_hash_undefined__";
  t.exports = function (t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
  }
}, function (t, e, n) {
  var r = n(34);
  t.exports = function (t) {
    var e = r(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = typeof t;
    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
  }
}, function (t, e, n) {
  var r = n(34);
  t.exports = function (t) {
    return r(this, t).get(t)
  }
}, function (t, e, n) {
  var r = n(34);
  t.exports = function (t) {
    return r(this, t).has(t)
  }
}, function (t, e, n) {
  var r = n(34);
  t.exports = function (t, e) {
    var n = r(this, t), i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
  }
}, function (t, e, n) {
  var r = n(96), i = n(101), o = n(233), a = n(237), u = n(58), c = n(2), s = n(52), f = n(54), l = 1,
    d = "[object Arguments]", p = "[object Array]", v = "[object Object]", h = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n, E, _, y) {
    var g = c(t), m = c(e), I = g ? p : u(t), T = m ? p : u(e), b = (I = I == d ? v : I) == v,
      O = (T = T == d ? v : T) == v, A = I == T;
    if (A && s(t)) {
      if (!s(e)) return !1;
      g = !0, b = !1
    }
    if (A && !b) return y || (y = new r), g || f(t) ? i(t, e, n, E, _, y) : o(t, e, I, n, E, _, y);
    if (!(n & l)) {
      var w = b && h.call(t, "__wrapped__"), S = O && h.call(e, "__wrapped__");
      if (w || S) {
        var R = w ? t.value() : t, N = S ? e.value() : e;
        return y || (y = new r), _(R, N, n, E, y)
      }
    }
    return !!A && (y || (y = new r), a(t, e, n, E, _, y))
  }
}, function (t, e, n) {
  var r = n(50), i = n(229), o = n(230);

  function a(t) {
    var e = -1, n = null == t ? 0 : t.length;
    for (this.__data__ = new r; ++e < n;) this.add(t[e])
  }

  a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function (t, e) {
  var n = "__lodash_hash_undefined__";
  t.exports = function (t) {
    return this.__data__.set(t, n), this
  }
}, function (t, e) {
  t.exports = function (t) {
    return this.__data__.has(t)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r;) if (e(t[n], n, t)) return !0;
    return !1
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return t.has(e)
  }
}, function (t, e, n) {
  var r = n(23), i = n(234), o = n(48), a = n(101), u = n(235), c = n(236), s = 1, f = 2, l = "[object Boolean]",
    d = "[object Date]", p = "[object Error]", v = "[object Map]", h = "[object Number]", E = "[object RegExp]",
    _ = "[object Set]", y = "[object String]", g = "[object Symbol]", m = "[object ArrayBuffer]",
    I = "[object DataView]", T = r ? r.prototype : void 0, b = T ? T.valueOf : void 0;
  t.exports = function (t, e, n, r, T, O, A) {
    switch (n) {
      case I:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        t = t.buffer, e = e.buffer;
      case m:
        return !(t.byteLength != e.byteLength || !O(new i(t), new i(e)));
      case l:
      case d:
      case h:
        return o(+t, +e);
      case p:
        return t.name == e.name && t.message == e.message;
      case E:
      case y:
        return t == e + "";
      case v:
        var w = u;
      case _:
        var S = r & s;
        if (w || (w = c), t.size != e.size && !S) return !1;
        var R = A.get(t);
        if (R) return R == e;
        r |= f, A.set(t, e);
        var N = a(w(t), w(e), r, T, O, A);
        return A.delete(t), N;
      case g:
        if (b) return b.call(t) == b.call(e)
    }
    return !1
  }
}, function (t, e, n) {
  var r = n(5).Uint8Array;
  t.exports = r
}, function (t, e) {
  t.exports = function (t) {
    var e = -1, n = Array(t.size);
    return t.forEach(function (t, r) {
      n[++e] = [r, t]
    }), n
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = -1, n = Array(t.size);
    return t.forEach(function (t) {
      n[++e] = t
    }), n
  }
}, function (t, e, n) {
  var r = n(238), i = 1, o = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n, a, u, c) {
    var s = n & i, f = r(t), l = f.length;
    if (l != r(e).length && !s) return !1;
    for (var d = l; d--;) {
      var p = f[d];
      if (!(s ? p in e : o.call(e, p))) return !1
    }
    var v = c.get(t), h = c.get(e);
    if (v && h) return v == e && h == t;
    var E = !0;
    c.set(t, e), c.set(e, t);
    for (var _ = s; ++d < l;) {
      var y = t[p = f[d]], g = e[p];
      if (a) var m = s ? a(g, y, p, e, t, c) : a(y, g, p, t, e, c);
      if (!(void 0 === m ? y === g || u(y, g, n, a, c) : m)) {
        E = !1;
        break
      }
      _ || (_ = "constructor" == p)
    }
    if (E && !_) {
      var I = t.constructor, T = e.constructor;
      I != T && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof T && T instanceof T) && (E = !1)
    }
    return c.delete(t), c.delete(e), E
  }
}, function (t, e, n) {
  var r = n(102), i = n(103), o = n(35);
  t.exports = function (t) {
    return r(t, o, i)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
      var a = t[n];
      e(a, n, t) && (o[i++] = a)
    }
    return o
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
    return r
  }
}, function (t, e, n) {
  var r = n(16), i = n(12), o = "[object Arguments]";
  t.exports = function (t) {
    return i(t) && r(t) == o
  }
}, function (t, e) {
  t.exports = function () {
    return !1
  }
}, function (t, e, n) {
  var r = n(16), i = n(55), o = n(12), a = {};
  a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
    return o(t) && i(t.length) && !!a[r(t)]
  }
}, function (t, e) {
  t.exports = function (t) {
    return function (e) {
      return t(e)
    }
  }
}, function (t, e, n) {
  (function (t) {
    var r = n(98), i = e && !e.nodeType && e, o = i && "object" == typeof t && t && !t.nodeType && t,
      a = o && o.exports === i && r.process, u = function () {
        try {
          var t = o && o.require && o.require("util").types;
          return t || a && a.binding && a.binding("util")
        } catch (t) {
        }
      }();
    t.exports = u
  }).call(this, n(106)(t))
}, function (t, e, n) {
  var r = n(107)(Object.keys, Object);
  t.exports = r
}, function (t, e, n) {
  var r = n(11)(n(5), "DataView");
  t.exports = r
}, function (t, e, n) {
  var r = n(11)(n(5), "Promise");
  t.exports = r
}, function (t, e, n) {
  var r = n(11)(n(5), "Set");
  t.exports = r
}, function (t, e, n) {
  var r = n(109), i = n(35);
  t.exports = function (t) {
    for (var e = i(t), n = e.length; n--;) {
      var o = e[n], a = t[o];
      e[n] = [o, a, r(a)]
    }
    return e
  }
}, function (t, e, n) {
  var r = n(100), i = n(59), o = n(257), a = n(61), u = n(109), c = n(110), s = n(24), f = 1, l = 2;
  t.exports = function (t, e) {
    return a(t) && u(e) ? c(s(t), e) : function (n) {
      var a = i(n, t);
      return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
    }
  }
}, function (t, e, n) {
  var r = n(253),
    i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    o = /\\(\\)?/g, a = r(function (t) {
      var e = [];
      return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function (t, n, r, i) {
        e.push(r ? i.replace(o, "$1") : n || t)
      }), e
    });
  t.exports = a
}, function (t, e, n) {
  var r = n(254), i = 500;
  t.exports = function (t) {
    var e = r(t, function (t) {
      return n.size === i && n.clear(), t
    }), n = e.cache;
    return e
  }
}, function (t, e, n) {
  var r = n(50), i = "Expected a function";

  function o(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
    var n = function () {
      var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
      if (o.has(i)) return o.get(i);
      var a = t.apply(this, r);
      return n.cache = o.set(i, a) || o, a
    };
    return n.cache = new (o.Cache || r), n
  }

  o.Cache = r, t.exports = o
}, function (t, e, n) {
  var r = n(256);
  t.exports = function (t) {
    return null == t ? "" : r(t)
  }
}, function (t, e, n) {
  var r = n(23), i = n(111), o = n(2), a = n(38), u = 1 / 0, c = r ? r.prototype : void 0, s = c ? c.toString : void 0;
  t.exports = function t(e) {
    if ("string" == typeof e) return e;
    if (o(e)) return i(e, t) + "";
    if (a(e)) return s ? s.call(e) : "";
    var n = e + "";
    return "0" == n && 1 / e == -u ? "-0" : n
  }
}, function (t, e, n) {
  var r = n(258), i = n(259);
  t.exports = function (t, e) {
    return null != t && i(t, e, r)
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null != t && e in Object(t)
  }
}, function (t, e, n) {
  var r = n(37), i = n(36), o = n(2), a = n(53), u = n(55), c = n(24);
  t.exports = function (t, e, n) {
    for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
      var d = c(e[s]);
      if (!(l = null != t && n(t, d))) break;
      t = t[d]
    }
    return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
  }
}, function (t, e, n) {
  var r = n(112), i = n(261), o = n(61), a = n(24);
  t.exports = function (t) {
    return o(t) ? r(a(t)) : i(t)
  }
}, function (t, e, n) {
  var r = n(60);
  t.exports = function (t) {
    return function (e) {
      return r(e, t)
    }
  }
}, function (t, e, n) {
  var r = n(113), i = n(10), o = n(114), a = Math.max;
  t.exports = function (t, e, n) {
    var u = null == t ? 0 : t.length;
    if (!u) return -1;
    var c = null == n ? 0 : o(n);
    return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
  }
}, function (t, e, n) {
  var r = n(63), i = 1 / 0, o = 1.7976931348623157e308;
  t.exports = function (t) {
    return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
  }
}, function (t, e, n) {
  var r = n(265), i = /^\s+/;
  t.exports = function (t) {
    return t ? t.slice(0, r(t) + 1).replace(i, "") : t
  }
}, function (t, e) {
  var n = /\s/;
  t.exports = function (t) {
    for (var e = t.length; e-- && n.test(t.charAt(e));) ;
    return e
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) {
      for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
      return n
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
  }
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.createElementState = I, e.mergeActionState = T, e.ixElements = void 0;
  var r = n(22), i = n(3), o = i.IX2EngineConstants, a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
    u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE), c = o.CONFIG_Y_VALUE, s = o.CONFIG_Z_VALUE, f = o.CONFIG_VALUE,
    l = o.CONFIG_X_UNIT, d = o.CONFIG_Y_UNIT, p = o.CONFIG_Z_UNIT, v = o.CONFIG_UNIT, h = i.IX2EngineActionTypes,
    E = h.IX2_SESSION_STOPPED, _ = h.IX2_INSTANCE_ADDED, y = h.IX2_ELEMENT_STATE_CHANGED, g = {}, m = "refState";

  function I(t, e, n, i, o) {
    var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
    return (0, r.mergeIn)(t, [i], {id: i, ref: e, refId: u, refType: n})
  }

  function T(t, e, n, i, o) {
    var a = function (t) {
      var e = t.config;
      return b.reduce(function (t, n) {
        var r = n[0], i = n[1], o = e[r], a = e[i];
        return null != o && null != a && (t[i] = a), t
      }, {})
    }(o), u = [e, m, n];
    return (0, r.mergeIn)(t, u, i, a)
  }

  e.ixElements = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    switch (e.type) {
      case E:
        return g;
      case _:
        var n = e.payload, i = n.elementId, o = n.element, a = n.origin, u = n.actionItem, c = n.refType,
          s = u.actionTypeId, f = t;
        return (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)), T(f, i, s, a, u);
      case y:
        var l = e.payload;
        return T(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
      default:
        return t
    }
  };
  var b = [[u, l], [c, d], [s, p], [f, v]]
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
  e.getPluginConfig = function (t) {
    return t.value
  };
  e.getPluginDuration = function (t, e) {
    if ("auto" !== e.config.duration) return null;
    var n = parseFloat(t.getAttribute("data-duration"));
    return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
  };
  e.getPluginOrigin = function (t) {
    return t || {value: 0}
  };
  e.getPluginDestination = function (t) {
    return {value: t.value}
  };
  e.createPluginInstance = function (t) {
    var e = window.Webflow.require("lottie").createInstance(t);
    return e.stop(), e.setSubframe(!0), e
  };
  e.renderPlugin = function (t, e, n) {
    if (t) {
      var r = e[n.actionTypeId].value / 100;
      t.goToFrame(t.frames * r)
    }
  };
  e.clearPlugin = function (t) {
    window.Webflow.require("lottie").createInstance(t).stop()
  }
}, function (t, e, n) {
  "use strict";
  var r, i, o, a = n(1), u = a(n(13)), c = a(n(21)), s = n(1);
  Object.defineProperty(e, "__esModule", {value: !0}), e.getInstanceId = function () {
    return "i" + vt++
  }, e.getElementId = function (t, e) {
    for (var n in t) {
      var r = t[n];
      if (r && r.ref === e) return r.id
    }
    return "e" + ht++
  }, e.reifyState = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.events, n = t.actionLists,
      r = t.site, i = (0, l.default)(e, function (t, e) {
        var n = e.eventTypeId;
        return t[n] || (t[n] = {}), t[n][e.id] = e, t
      }, {}), o = r && r.mediaQueries, a = [];
    o ? a = o.map(function (t) {
      return t.key
    }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
    return {ixData: {events: e, actionLists: n, eventTypeMap: i, mediaQueries: o, mediaQueryKeys: a}}
  }, e.observeStore = function (t) {
    var e = t.store, n = t.select, r = t.onChange, i = t.comparator, o = void 0 === i ? Et : i, a = e.getState,
      u = (0, e.subscribe)(function () {
        var t = n(a());
        if (null == t) return void u();
        o(t, c) || r(c = t, e)
      }), c = n(a());
    return u
  }, e.getAffectedElements = yt, e.getComputedStyle = function (t) {
    var e = t.element, n = t.actionItem;
    if (!y.IS_BROWSER_ENV) return {};
    switch (n.actionTypeId) {
      case it:
      case ot:
      case at:
      case ut:
      case ct:
        return window.getComputedStyle(e);
      default:
        return {}
    }
  }, e.getInstanceOrigin = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = arguments.length > 3 ? arguments[3] : void 0, i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
      o = r.actionTypeId, a = r.config;
    if ((0, _.isPluginType)(o)) return (0, _.getPluginOrigin)(o)(e[o]);
    switch (o) {
      case Z:
      case J:
      case tt:
      case et:
        return e[o] || bt[o];
      case rt:
        return mt(e[o], r.config.filters);
      case nt:
        return {value: (0, f.default)(parseFloat(i(t, x)), 1)};
      case it:
        var u, c, s = i(t, L), l = i(t, P);
        return u = a.widthUnit === B ? gt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === B ? gt.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), {
          widthValue: u,
          heightValue: c
        };
      case ot:
      case at:
      case ut:
        return function (t) {
          var e = t.element, n = t.actionTypeId, r = t.computedStyle, i = t.getStyle, o = lt[n], a = i(e, o),
            u = St.test(a) ? a : r[o], c = function (t, e) {
              var n = t.exec(e);
              return n ? n[1] : ""
            }(Rt, u).split(W);
          return {
            rValue: (0, f.default)(parseInt(c[0], 10), 255),
            gValue: (0, f.default)(parseInt(c[1], 10), 255),
            bValue: (0, f.default)(parseInt(c[2], 10), 255),
            aValue: (0, f.default)(parseFloat(c[3]), 1)
          }
        }({element: t, actionTypeId: o, computedStyle: n, getStyle: i});
      case ct:
        return {value: (0, f.default)(i(t, k), n.display)};
      case st:
        return e[o] || {value: 0};
      default:
        return
    }
  }, e.getDestinationValues = function (t) {
    var e = t.element, n = t.actionItem, r = t.elementApi, i = n.actionTypeId;
    if ((0, _.isPluginType)(i)) return (0, _.getPluginDestination)(i)(n.config);
    switch (i) {
      case Z:
      case J:
      case tt:
      case et:
        var o = n.config, a = o.xValue, u = o.yValue, c = o.zValue;
        return {xValue: a, yValue: u, zValue: c};
      case it:
        var s = r.getStyle, f = r.setStyle, l = r.getProperty, d = n.config, p = d.widthUnit, v = d.heightUnit,
          h = n.config, E = h.widthValue, g = h.heightValue;
        if (!y.IS_BROWSER_ENV) return {widthValue: E, heightValue: g};
        if (p === B) {
          var m = s(e, L);
          f(e, L, ""), E = l(e, "offsetWidth"), f(e, L, m)
        }
        if (v === B) {
          var I = s(e, P);
          f(e, P, ""), g = l(e, "offsetHeight"), f(e, P, I)
        }
        return {widthValue: E, heightValue: g};
      case ot:
      case at:
      case ut:
        var T = n.config, b = T.rValue, O = T.gValue, A = T.bValue, w = T.aValue;
        return {rValue: b, gValue: O, bValue: A, aValue: w};
      case rt:
        return n.config.filters.reduce(It, {});
      default:
        var S = n.config.value;
        return {value: S}
    }
  }, e.getRenderType = Tt, e.getStyleProp = function (t, e) {
    return t === Q ? e.replace("STYLE_", "").toLowerCase() : null
  }, e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
    switch (u) {
      case K:
        return function (t, e, n, r, i) {
          var o = wt.map(function (t) {
            var n = bt[t], r = e[t] || {}, i = r.xValue, o = void 0 === i ? n.xValue : i, a = r.yValue,
              u = void 0 === a ? n.yValue : a, c = r.zValue, s = void 0 === c ? n.zValue : c, f = r.xUnit,
              l = void 0 === f ? "" : f, d = r.yUnit, p = void 0 === d ? "" : d, v = r.zUnit, h = void 0 === v ? "" : v;
            switch (t) {
              case Z:
                return "".concat(T, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
              case J:
                return "".concat(b, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
              case tt:
                return "".concat(O, "(").concat(o).concat(l, ") ").concat(A, "(").concat(u).concat(p, ") ").concat(w, "(").concat(s).concat(h, ")");
              case et:
                return "".concat(S, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
              default:
                return ""
            }
          }).join(" "), a = i.setStyle;
          Nt(t, y.TRANSFORM_PREFIXED, i), a(t, y.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === Z && void 0 !== d || s === J && void 0 !== d || s === tt && (void 0 !== f || void 0 !== l)) && a(t, y.TRANSFORM_STYLE_PREFIXED, R);
          var u, c, s, f, l, d
        }(t, e, n, i, a);
      case Q:
        return function (t, e, n, r, i, o) {
          var a = o.setStyle, u = r.actionTypeId, c = r.config;
          switch (u) {
            case it:
              var s = r.config, f = s.widthUnit, d = void 0 === f ? "" : f, p = s.heightUnit, v = void 0 === p ? "" : p,
                h = n.widthValue, E = n.heightValue;
              void 0 !== h && (d === B && (d = "px"), Nt(t, L, o), a(t, L, h + d)), void 0 !== E && (v === B && (v = "px"), Nt(t, P, o), a(t, P, E + v));
              break;
            case rt:
              !function (t, e, n, r) {
                var i = (0, l.default)(e, function (t, e, r) {
                  return "".concat(t, " ").concat(r, "(").concat(e).concat(At(r, n), ")")
                }, ""), o = r.setStyle;
                Nt(t, C, r), o(t, C, i)
              }(t, n, c, o);
              break;
            case ot:
            case at:
            case ut:
              var _ = lt[u], y = Math.round(n.rValue), g = Math.round(n.gValue), m = Math.round(n.bValue), I = n.aValue;
              Nt(t, _, o), a(t, _, I >= 1 ? "rgb(".concat(y, ",").concat(g, ",").concat(m, ")") : "rgba(".concat(y, ",").concat(g, ",").concat(m, ",").concat(I, ")"));
              break;
            default:
              var T = c.unit, b = void 0 === T ? "" : T;
              Nt(t, i, o), a(t, i, n.value + b)
          }
        }(t, 0, n, i, o, a);
      case Y:
        return function (t, e, n) {
          var r = n.setStyle;
          switch (e.actionTypeId) {
            case ct:
              var i = e.config.value;
              return void (i === N && y.IS_BROWSER_ENV ? r(t, k, y.FLEX_PREFIXED) : r(t, k, i))
          }
        }(t, i, a);
      case q:
        var s = i.actionTypeId;
        if ((0, _.isPluginType)(s)) return (0, _.renderPlugin)(s)(c, e, i)
    }
  }, e.clearAllStyles = function (t) {
    var e = t.store, n = t.elementApi, r = e.getState().ixData, i = r.events, o = void 0 === i ? {} : i,
      a = r.actionLists, u = void 0 === a ? {} : a;
    Object.keys(o).forEach(function (t) {
      var e = o[t], r = e.action.config, i = r.actionListId, a = u[i];
      a && Ct({actionList: a, event: e, elementApi: n})
    }), Object.keys(u).forEach(function (t) {
      Ct({actionList: u[t], elementApi: n})
    })
  }, e.cleanupHTMLElement = function (t, e, n) {
    var r = n.setStyle, i = n.getStyle, o = e.actionTypeId;
    if (o === it) {
      var a = e.config;
      a.widthUnit === B && r(t, L, ""), a.heightUnit === B && r(t, P, "")
    }
    i(t, U) && Pt({effect: xt, actionTypeId: o, elementApi: n})(t)
  }, e.getMaxDurationItemIndex = Dt, e.getActionListProgress = function (t, e) {
    var n = t.actionItemGroups, r = t.useFirstGroupAsInitialState, i = e.actionItem, o = e.verboseTimeElapsed,
      a = void 0 === o ? 0 : o, u = 0, c = 0;
    return n.forEach(function (t, e) {
      if (!r || 0 !== e) {
        var n = t.actionItems, o = n[Dt(n)], s = o.config, f = o.actionTypeId;
        i.id === o.id && (c = u + a);
        var l = Tt(f) === Y ? 0 : s.duration;
        u += s.delay + l
      }
    }), u > 0 ? (0, E.optimizeFloat)(c / u) : 0
  }, e.reduceListToGroup = function (t) {
    var e = t.actionList, n = t.actionItemId, r = t.rawData, i = e.actionItemGroups, o = e.continuousParameterGroups,
      a = [], u = function (t) {
        return a.push((0, p.mergeIn)(t, ["config"], {delay: 0, duration: 0})), t.id === n
      };
    return i && i.some(function (t) {
      return t.actionItems.some(u)
    }), o && o.some(function (t) {
      return t.continuousActionGroups.some(function (t) {
        return t.actionItems.some(u)
      })
    }), (0, p.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, {id: e.id, actionItemGroups: [{actionItems: a}]}))
  }, e.shouldNamespaceEventParameter = function (t, e) {
    var n = e.basedOn;
    return t === v.EventTypeConsts.SCROLLING_IN_VIEW && (n === v.EventBasedOn.ELEMENT || null == n) || t === v.EventTypeConsts.MOUSE_MOVE && n === v.EventBasedOn.ELEMENT
  }, e.getNamespacedParameterId = function (t, e) {
    return t + H + e
  }, e.shouldAllowMediaQuery = function (t, e) {
    if (null == e) return !0;
    return -1 !== t.indexOf(e)
  }, e.mediaQueriesEqual = function (t, e) {
    return (0, h.default)(t && t.sort(), e && e.sort())
  }, e.stringifyTarget = function (t) {
    if ("string" == typeof t) return t;
    var e = t.id, n = void 0 === e ? "" : e, r = t.selector, i = void 0 === r ? "" : r, o = t.useEventTarget;
    return n + z + i + z + (void 0 === o ? "" : o)
  }, Object.defineProperty(e, "shallowEqual", {
    enumerable: !0, get: function () {
      return h.default
    }
  }), e.getItemConfigByKey = void 0;
  var f = s(n(272)), l = s(n(273)), d = s(n(279)), p = n(22), v = n(3), h = s(n(281)), E = n(117), _ = n(119),
    y = n(47), g = v.IX2EngineConstants, m = g.BACKGROUND, I = g.TRANSFORM, T = g.TRANSLATE_3D, b = g.SCALE_3D,
    O = g.ROTATE_X, A = g.ROTATE_Y, w = g.ROTATE_Z, S = g.SKEW, R = g.PRESERVE_3D, N = g.FLEX, x = g.OPACITY,
    C = g.FILTER, L = g.WIDTH, P = g.HEIGHT, M = g.BACKGROUND_COLOR, D = g.BORDER_COLOR, j = g.COLOR, F = g.CHILDREN,
    X = g.IMMEDIATE_CHILDREN, G = g.SIBLINGS, V = g.PARENT, k = g.DISPLAY, U = g.WILL_CHANGE, B = g.AUTO,
    W = g.COMMA_DELIMITER, H = g.COLON_DELIMITER, z = g.BAR_DELIMITER, K = g.RENDER_TRANSFORM, Y = g.RENDER_GENERAL,
    Q = g.RENDER_STYLE, q = g.RENDER_PLUGIN, $ = v.ActionTypeConsts, Z = $.TRANSFORM_MOVE, J = $.TRANSFORM_SCALE,
    tt = $.TRANSFORM_ROTATE, et = $.TRANSFORM_SKEW, nt = $.STYLE_OPACITY, rt = $.STYLE_FILTER, it = $.STYLE_SIZE,
    ot = $.STYLE_BACKGROUND_COLOR, at = $.STYLE_BORDER, ut = $.STYLE_TEXT_COLOR, ct = $.GENERAL_DISPLAY,
    st = "OBJECT_VALUE", ft = function (t) {
      return t.trim()
    }, lt = Object.freeze((r = {}, (0, c.default)(r, ot, M), (0, c.default)(r, at, D), (0, c.default)(r, ut, j), r)),
    dt = Object.freeze((i = {}, (0, c.default)(i, y.TRANSFORM_PREFIXED, I), (0, c.default)(i, M, m), (0, c.default)(i, x, x), (0, c.default)(i, C, C), (0, c.default)(i, L, L), (0, c.default)(i, P, P), i)),
    pt = {}, vt = 1;
  var ht = 1;
  var Et = function (t, e) {
    return t === e
  };

  function _t(t) {
    var e = (0, u.default)(t);
    return "string" === e ? {id: t} : null != t && "object" === e ? {
      id: t.id,
      objectId: t.objectId,
      selector: t.selector,
      selectorGuids: t.selectorGuids,
      appliesTo: t.appliesTo,
      useEventTarget: t.useEventTarget
    } : {}
  }

  function yt(t) {
    var e, n, r, i = t.config, o = t.event, a = t.eventTarget, u = t.elementRoot, c = t.elementApi;
    if (!c) throw new Error("IX2 missing elementApi");
    var s = i.targets;
    if (Array.isArray(s) && s.length > 0) return s.reduce(function (t, e) {
      return t.concat(yt({config: {target: e}, event: o, eventTarget: a, elementRoot: u, elementApi: c}))
    }, []);
    var f = c.getValidDocument, l = c.getQuerySelector, d = c.queryDocument, p = c.getChildElements,
      h = c.getSiblingElements, E = c.matchSelector, _ = c.elementContains, g = c.isSiblingNode, m = i.target;
    if (!m) return [];
    var I = _t(m), T = I.id, b = I.objectId, O = I.selector, A = I.selectorGuids, w = I.appliesTo, S = I.useEventTarget;
    if (b) return [pt[b] || (pt[b] = {})];
    if (w === v.EventAppliesTo.PAGE) {
      var R = f(T);
      return R ? [R] : []
    }
    var N, x, C,
      L = (null !== (e = null == o ? void 0 : null === (n = o.action) || void 0 === n ? void 0 : null === (r = n.config) || void 0 === r ? void 0 : r.affectedElements) && void 0 !== e ? e : {})[T || O] || {},
      P = Boolean(L.id || L.selector), M = o && l(_t(o.target));
    if (P ? (N = L.limitAffectedElements, x = M, C = l(L)) : x = C = l({
      id: T,
      selector: O,
      selectorGuids: A
    }), o && S) {
      var D = a && (C || !0 === S) ? [a] : d(M);
      if (C) {
        if (S === V) return d(C).filter(function (t) {
          return D.some(function (e) {
            return _(t, e)
          })
        });
        if (S === F) return d(C).filter(function (t) {
          return D.some(function (e) {
            return _(e, t)
          })
        });
        if (S === G) return d(C).filter(function (t) {
          return D.some(function (e) {
            return g(e, t)
          })
        })
      }
      return D
    }
    return null == x || null == C ? [] : y.IS_BROWSER_ENV && u ? d(C).filter(function (t) {
      return u.contains(t)
    }) : N === F ? d(x, C) : N === X ? p(d(x)).filter(E(C)) : N === G ? h(d(x)).filter(E(C)) : d(C)
  }

  var gt = /px/, mt = function (t, e) {
    return e.reduce(function (t, e) {
      return null == t[e.type] && (t[e.type] = Ot[e.type]), t
    }, t || {})
  };
  var It = function (t, e) {
    return e && (t[e.type] = e.value || 0), t
  };

  function Tt(t) {
    return /^TRANSFORM_/.test(t) ? K : /^STYLE_/.test(t) ? Q : /^GENERAL_/.test(t) ? Y : /^PLUGIN_/.test(t) ? q : void 0
  }

  e.getItemConfigByKey = function (t, e, n) {
    if ((0, _.isPluginType)(t)) return (0, _.getPluginConfig)(t)(n, e);
    switch (t) {
      case rt:
        var r = (0, d.default)(n.filters, function (t) {
          return t.type === e
        });
        return r ? r.value : 0;
      default:
        return n[e]
    }
  };
  var bt = (o = {}, (0, c.default)(o, Z, Object.freeze({
    xValue: 0,
    yValue: 0,
    zValue: 0
  })), (0, c.default)(o, J, Object.freeze({
    xValue: 1,
    yValue: 1,
    zValue: 1
  })), (0, c.default)(o, tt, Object.freeze({
    xValue: 0,
    yValue: 0,
    zValue: 0
  })), (0, c.default)(o, et, Object.freeze({xValue: 0, yValue: 0})), o), Ot = Object.freeze({
    blur: 0,
    "hue-rotate": 0,
    invert: 0,
    grayscale: 0,
    saturate: 100,
    sepia: 0,
    contrast: 100,
    brightness: 100
  }), At = function (t, e) {
    var n = (0, d.default)(e.filters, function (e) {
      return e.type === t
    });
    if (n && n.unit) return n.unit;
    switch (t) {
      case"blur":
        return "px";
      case"hue-rotate":
        return "deg";
      default:
        return "%"
    }
  }, wt = Object.keys(bt);
  var St = /^rgb/, Rt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

  function Nt(t, e, n) {
    if (y.IS_BROWSER_ENV) {
      var r = dt[e];
      if (r) {
        var i = n.getStyle, o = n.setStyle, a = i(t, U);
        if (a) {
          var u = a.split(W).map(ft);
          -1 === u.indexOf(r) && o(t, U, u.concat(r).join(W))
        } else o(t, U, r)
      }
    }
  }

  function xt(t, e, n) {
    if (y.IS_BROWSER_ENV) {
      var r = dt[e];
      if (r) {
        var i = n.getStyle, o = n.setStyle, a = i(t, U);
        a && -1 !== a.indexOf(r) && o(t, U, a.split(W).map(ft).filter(function (t) {
          return t !== r
        }).join(W))
      }
    }
  }

  function Ct(t) {
    var e = t.actionList, n = void 0 === e ? {} : e, r = t.event, i = t.elementApi, o = n.actionItemGroups,
      a = n.continuousParameterGroups;
    o && o.forEach(function (t) {
      Lt({actionGroup: t, event: r, elementApi: i})
    }), a && a.forEach(function (t) {
      t.continuousActionGroups.forEach(function (t) {
        Lt({actionGroup: t, event: r, elementApi: i})
      })
    })
  }

  function Lt(t) {
    var e = t.actionGroup, n = t.event, r = t.elementApi;
    e.actionItems.forEach(function (t) {
      var e, i = t.actionTypeId, o = t.config;
      e = (0, _.isPluginType)(i) ? (0, _.clearPlugin)(i) : Pt({
        effect: Mt,
        actionTypeId: i,
        elementApi: r
      }), yt({config: o, event: n, elementApi: r}).forEach(e)
    })
  }

  var Pt = function (t) {
    var e = t.effect, n = t.actionTypeId, r = t.elementApi;
    return function (t) {
      switch (n) {
        case Z:
        case J:
        case tt:
        case et:
          e(t, y.TRANSFORM_PREFIXED, r);
          break;
        case rt:
          e(t, C, r);
          break;
        case nt:
          e(t, x, r);
          break;
        case it:
          e(t, L, r), e(t, P, r);
          break;
        case ot:
        case at:
        case ut:
          e(t, lt[n], r);
          break;
        case ct:
          e(t, k, r)
      }
    }
  };

  function Mt(t, e, n) {
    var r = n.setStyle;
    xt(t, e, n), r(t, e, ""), e === y.TRANSFORM_PREFIXED && r(t, y.TRANSFORM_STYLE_PREFIXED, "")
  }

  function Dt(t) {
    var e = 0, n = 0;
    return t.forEach(function (t, r) {
      var i = t.config, o = i.delay + i.duration;
      o >= e && (e = o, n = r)
    }), n
  }
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t || t != t ? e : t
  }
}, function (t, e, n) {
  var r = n(274), i = n(120), o = n(10), a = n(278), u = n(2);
  t.exports = function (t, e, n) {
    var c = u(t) ? r : a, s = arguments.length < 3;
    return c(t, o(e, 4), n, s, i)
  }
}, function (t, e) {
  t.exports = function (t, e, n, r) {
    var i = -1, o = null == t ? 0 : t.length;
    for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
    return n
  }
}, function (t, e, n) {
  var r = n(276)();
  t.exports = r
}, function (t, e) {
  t.exports = function (t) {
    return function (e, n, r) {
      for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
        var c = a[t ? u : ++i];
        if (!1 === n(o[c], c, o)) break
      }
      return e
    }
  }
}, function (t, e, n) {
  var r = n(17);
  t.exports = function (t, e) {
    return function (n, i) {
      if (null == n) return n;
      if (!r(n)) return t(n, i);
      for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);) ;
      return n
    }
  }
}, function (t, e) {
  t.exports = function (t, e, n, r, i) {
    return i(t, function (t, i, o) {
      n = r ? (r = !1, t) : e(n, t, i, o)
    }), n
  }
}, function (t, e, n) {
  var r = n(95)(n(280));
  t.exports = r
}, function (t, e, n) {
  var r = n(113), i = n(10), o = n(114), a = Math.max, u = Math.min;
  t.exports = function (t, e, n) {
    var c = null == t ? 0 : t.length;
    if (!c) return -1;
    var s = c - 1;
    return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
  }
}, function (t, e, n) {
  "use strict";
  var r = n(1)(n(13));
  Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
  var i = Object.prototype.hasOwnProperty;

  function o(t, e) {
    return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
  }

  var a = function (t, e) {
    if (o(t, e)) return !0;
    if ("object" !== (0, r.default)(t) || null === t || "object" !== (0, r.default)(e) || null === e) return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (var u = 0; u < n.length; u++) if (!i.call(e, n[u]) || !o(t[n[u]], e[n[u]])) return !1;
    return !0
  };
  e.default = a
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.ixInstances = void 0;
  var r = n(3), i = n(15), o = n(22), a = r.IX2EngineActionTypes, u = a.IX2_RAW_DATA_IMPORTED,
    c = a.IX2_SESSION_STOPPED, s = a.IX2_INSTANCE_ADDED, f = a.IX2_INSTANCE_STARTED, l = a.IX2_INSTANCE_REMOVED,
    d = a.IX2_ANIMATION_FRAME_CHANGED, p = i.IX2EasingUtils, v = p.optimizeFloat, h = p.applyEasing,
    E = p.createBezierEasing, _ = r.IX2EngineConstants.RENDER_GENERAL, y = i.IX2VanillaUtils, g = y.getItemConfigByKey,
    m = y.getRenderType, I = y.getStyleProp, T = function (t, e) {
      var n = t.position, r = t.parameterId, i = t.actionGroups, a = t.destinationKeys, u = t.smoothing,
        c = t.restingValue, s = t.actionTypeId, f = t.customEasingFn, l = t.skipMotion, d = t.skipToValue,
        p = e.payload.parameters, E = Math.max(1 - u, .01), _ = p[r];
      null == _ && (E = 1, _ = c);
      var y, m, I, T, b = Math.max(_, 0) || 0, O = v(b - n), A = l ? d : v(n + O * E), w = 100 * A;
      if (A === n && t.current) return t;
      for (var S = 0, R = i.length; S < R; S++) {
        var N = i[S], x = N.keyframe, C = N.actionItems;
        if (0 === S && (y = C[0]), w >= x) {
          y = C[0];
          var L = i[S + 1], P = L && w !== x;
          m = P ? L.actionItems[0] : null, P && (I = x / 100, T = (L.keyframe - x) / 100)
        }
      }
      var M = {};
      if (y && !m) for (var D = 0, j = a.length; D < j; D++) {
        var F = a[D];
        M[F] = g(s, F, y.config)
      } else if (y && m && void 0 !== I && void 0 !== T) for (var X = (A - I) / T, G = y.config.easing, V = h(G, X, f), k = 0, U = a.length; k < U; k++) {
        var B = a[k], W = g(s, B, y.config), H = (g(s, B, m.config) - W) * V + W;
        M[B] = H
      }
      return (0, o.merge)(t, {position: A, current: M})
    }, b = function (t, e) {
      var n = t, r = n.active, i = n.origin, a = n.start, u = n.immediate, c = n.renderType, s = n.verbose,
        f = n.actionItem, l = n.destination, d = n.destinationKeys, p = n.pluginDuration, E = n.instanceDelay,
        y = n.customEasingFn, g = n.skipMotion, m = f.config.easing, I = f.config, T = I.duration, b = I.delay;
      null != p && (T = p), b = null != E ? E : b, c === _ ? T = 0 : (u || g) && (T = b = 0);
      var O = e.payload.now;
      if (r && i) {
        var A = O - (a + b);
        if (s) {
          var w = O - a, S = T + b, R = v(Math.min(Math.max(0, w / S), 1));
          t = (0, o.set)(t, "verboseTimeElapsed", S * R)
        }
        if (A < 0) return t;
        var N = v(Math.min(Math.max(0, A / T), 1)), x = h(m, N, y), C = {}, L = null;
        return d.length && (L = d.reduce(function (t, e) {
          var n = l[e], r = parseFloat(i[e]) || 0, o = (parseFloat(n) - r) * x + r;
          return t[e] = o, t
        }, {})), C.current = L, C.position = N, 1 === N && (C.active = !1, C.complete = !0), (0, o.merge)(t, C)
      }
      return t
    };
  e.ixInstances = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case u:
        return e.payload.ixInstances || Object.freeze({});
      case c:
        return Object.freeze({});
      case s:
        var n = e.payload, r = n.instanceId, i = n.elementId, a = n.actionItem, p = n.eventId, v = n.eventTarget,
          h = n.eventStateKey, _ = n.actionListId, y = n.groupIndex, g = n.isCarrier, O = n.origin, A = n.destination,
          w = n.immediate, S = n.verbose, R = n.continuous, N = n.parameterId, x = n.actionGroups, C = n.smoothing,
          L = n.restingValue, P = n.pluginInstance, M = n.pluginDuration, D = n.instanceDelay, j = n.skipMotion,
          F = n.skipToValue, X = a.actionTypeId, G = m(X), V = I(G, X), k = Object.keys(A).filter(function (t) {
            return null != A[t]
          }), U = a.config.easing;
        return (0, o.set)(t, r, {
          id: r,
          elementId: i,
          active: !1,
          position: 0,
          start: 0,
          origin: O,
          destination: A,
          destinationKeys: k,
          immediate: w,
          verbose: S,
          current: null,
          actionItem: a,
          actionTypeId: X,
          eventId: p,
          eventTarget: v,
          eventStateKey: h,
          actionListId: _,
          groupIndex: y,
          renderType: G,
          isCarrier: g,
          styleProp: V,
          continuous: R,
          parameterId: N,
          actionGroups: x,
          smoothing: C,
          restingValue: L,
          pluginInstance: P,
          pluginDuration: M,
          instanceDelay: D,
          skipMotion: j,
          skipToValue: F,
          customEasingFn: Array.isArray(U) && 4 === U.length ? E(U) : void 0
        });
      case f:
        var B = e.payload, W = B.instanceId, H = B.time;
        return (0, o.mergeIn)(t, [W], {active: !0, complete: !1, start: H});
      case l:
        var z = e.payload.instanceId;
        if (!t[z]) return t;
        for (var K = {}, Y = Object.keys(t), Q = Y.length, q = 0; q < Q; q++) {
          var $ = Y[q];
          $ !== z && (K[$] = t[$])
        }
        return K;
      case d:
        for (var Z = t, J = Object.keys(t), tt = J.length, et = 0; et < tt; et++) {
          var nt = J[et], rt = t[nt], it = rt.continuous ? T : b;
          Z = (0, o.set)(Z, nt, it(rt, e))
        }
        return Z;
      default:
        return t
    }
  }
}, function (t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {value: !0}), e.ixParameters = void 0;
  var r = n(3).IX2EngineActionTypes, i = r.IX2_RAW_DATA_IMPORTED, o = r.IX2_SESSION_STOPPED,
    a = r.IX2_PARAMETER_CHANGED;
  e.ixParameters = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = arguments.length > 1 ? arguments[1] : void 0;
    switch (e.type) {
      case i:
        return e.payload.ixParameters || {};
      case o:
        return {};
      case a:
        var n = e.payload, r = n.key, u = n.value;
        return t[r] = u, t;
      default:
        return t
    }
  }
}, function (t, e) {
  t.exports = function (t, e) {
    if (null == t) return {};
    var n, r, i = {}, o = Object.keys(t);
    for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
    return i
  }
}, function (t, e, n) {
  var r = n(56), i = n(58), o = n(17), a = n(286), u = n(287), c = "[object Map]", s = "[object Set]";
  t.exports = function (t) {
    if (null == t) return 0;
    if (o(t)) return a(t) ? u(t) : t.length;
    var e = i(t);
    return e == c || e == s ? t.size : r(t).length
  }
}, function (t, e, n) {
  var r = n(16), i = n(2), o = n(12), a = "[object String]";
  t.exports = function (t) {
    return "string" == typeof t || !i(t) && o(t) && r(t) == a
  }
}, function (t, e, n) {
  var r = n(288), i = n(289), o = n(290);
  t.exports = function (t) {
    return i(t) ? o(t) : r(t)
  }
}, function (t, e, n) {
  var r = n(112)("length");
  t.exports = r
}, function (t, e) {
  var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
  t.exports = function (t) {
    return n.test(t)
  }
}, function (t, e) {
  var n = "[\\ud800-\\udfff]", r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", i = "\\ud83c[\\udffb-\\udfff]",
    o = "[^\\ud800-\\udfff]", a = "(?:\\ud83c[\\udde6-\\uddff]){2}", u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    c = "(?:" + r + "|" + i + ")" + "?",
    s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
    f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")", l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
  t.exports = function (t) {
    for (var e = l.lastIndex = 0; l.test(t);) ++e;
    return e
  }
}, function (t, e, n) {
  var r = n(10), i = n(292), o = n(293);
  t.exports = function (t, e) {
    return o(t, i(r(e)))
  }
}, function (t, e) {
  var n = "Expected a function";
  t.exports = function (t) {
    if ("function" != typeof t) throw new TypeError(n);
    return function () {
      var e = arguments;
      switch (e.length) {
        case 0:
          return !t.call(this);
        case 1:
          return !t.call(this, e[0]);
        case 2:
          return !t.call(this, e[0], e[1]);
        case 3:
          return !t.call(this, e[0], e[1], e[2])
      }
      return !t.apply(this, e)
    }
  }
}, function (t, e, n) {
  var r = n(111), i = n(10), o = n(294), a = n(297);
  t.exports = function (t, e) {
    if (null == t) return {};
    var n = r(a(t), function (t) {
      return [t]
    });
    return e = i(e), o(t, n, function (t, n) {
      return e(t, n[0])
    })
  }
}, function (t, e, n) {
  var r = n(60), i = n(295), o = n(37);
  t.exports = function (t, e, n) {
    for (var a = -1, u = e.length, c = {}; ++a < u;) {
      var s = e[a], f = r(t, s);
      n(f, s) && i(c, o(s, t), f)
    }
    return c
  }
}, function (t, e, n) {
  var r = n(296), i = n(37), o = n(53), a = n(8), u = n(24);
  t.exports = function (t, e, n, c) {
    if (!a(t)) return t;
    for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
      var p = u(e[s]), v = n;
      if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
      if (s != l) {
        var h = d[p];
        void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
      }
      r(d, p, v), d = d[p]
    }
    return t
  }
}, function (t, e, n) {
  var r = n(123), i = n(48), o = Object.prototype.hasOwnProperty;
  t.exports = function (t, e, n) {
    var a = t[e];
    o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
  }
}, function (t, e, n) {
  var r = n(102), i = n(298), o = n(300);
  t.exports = function (t) {
    return r(t, o, i)
  }
}, function (t, e, n) {
  var r = n(51), i = n(299), o = n(103), a = n(104), u = Object.getOwnPropertySymbols ? function (t) {
    for (var e = []; t;) r(e, o(t)), t = i(t);
    return e
  } : a;
  t.exports = u
}, function (t, e, n) {
  var r = n(107)(Object.getPrototypeOf, Object);
  t.exports = r
}, function (t, e, n) {
  var r = n(105), i = n(301), o = n(17);
  t.exports = function (t) {
    return o(t) ? r(t, !0) : i(t)
  }
}, function (t, e, n) {
  var r = n(8), i = n(57), o = n(302), a = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (!r(t)) return o(t);
    var e = i(t), n = [];
    for (var u in t) ("constructor" != u || !e && a.call(t, u)) && n.push(u);
    return n
  }
}, function (t, e) {
  t.exports = function (t) {
    var e = [];
    if (null != t) for (var n in Object(t)) e.push(n);
    return e
  }
}, function (t, e, n) {
  var r = n(56), i = n(58), o = n(36), a = n(2), u = n(17), c = n(52), s = n(57), f = n(54), l = "[object Map]",
    d = "[object Set]", p = Object.prototype.hasOwnProperty;
  t.exports = function (t) {
    if (null == t) return !0;
    if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
    var e = i(t);
    if (e == l || e == d) return !t.size;
    if (s(t)) return !r(t).length;
    for (var n in t) if (p.call(t, n)) return !1;
    return !0
  }
}, function (t, e, n) {
  var r = n(123), i = n(121), o = n(10);
  t.exports = function (t, e) {
    var n = {};
    return e = o(e, 3), i(t, function (t, i, o) {
      r(n, i, e(t, i, o))
    }), n
  }
}, function (t, e, n) {
  var r = n(306), i = n(120), o = n(307), a = n(2);
  t.exports = function (t, e) {
    return (a(t) ? r : i)(t, o(e))
  }
}, function (t, e) {
  t.exports = function (t, e) {
    for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t);) ;
    return t
  }
}, function (t, e, n) {
  var r = n(62);
  t.exports = function (t) {
    return "function" == typeof t ? t : r
  }
}, function (t, e, n) {
  var r = n(309), i = n(8), o = "Expected a function";
  t.exports = function (t, e, n) {
    var a = !0, u = !0;
    if ("function" != typeof t) throw new TypeError(o);
    return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
      leading: a,
      maxWait: e,
      trailing: u
    })
  }
}, function (t, e, n) {
  var r = n(8), i = n(310), o = n(63), a = "Expected a function", u = Math.max, c = Math.min;
  t.exports = function (t, e, n) {
    var s, f, l, d, p, v, h = 0, E = !1, _ = !1, y = !0;
    if ("function" != typeof t) throw new TypeError(a);

    function g(e) {
      var n = s, r = f;
      return s = f = void 0, h = e, d = t.apply(r, n)
    }

    function m(t) {
      var n = t - v;
      return void 0 === v || n >= e || n < 0 || _ && t - h >= l
    }

    function I() {
      var t = i();
      if (m(t)) return T(t);
      p = setTimeout(I, function (t) {
        var n = e - (t - v);
        return _ ? c(n, l - (t - h)) : n
      }(t))
    }

    function T(t) {
      return p = void 0, y && s ? g(t) : (s = f = void 0, d)
    }

    function b() {
      var t = i(), n = m(t);
      if (s = arguments, f = this, v = t, n) {
        if (void 0 === p) return function (t) {
          return h = t, p = setTimeout(I, e), E ? g(t) : d
        }(v);
        if (_) return clearTimeout(p), p = setTimeout(I, e), g(v)
      }
      return void 0 === p && (p = setTimeout(I, e)), d
    }

    return e = o(e) || 0, r(n) && (E = !!n.leading, l = (_ = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, y = "trailing" in n ? !!n.trailing : y), b.cancel = function () {
      void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0
    }, b.flush = function () {
      return void 0 === p ? d : T(i())
    }, b
  }
}, function (t, e, n) {
  var r = n(5);
  t.exports = function () {
    return r.Date.now()
  }
}, function (t, e, n) {
  "use strict";
  var r = n(1)(n(13));
  Object.defineProperty(e, "__esModule", {value: !0}), e.setStyle = function (t, e, n) {
    t.style[e] = n
  }, e.getStyle = function (t, e) {
    return t.style[e]
  }, e.getProperty = function (t, e) {
    return t[e]
  }, e.matchSelector = function (t) {
    return function (e) {
      return e[a](t)
    }
  }, e.getQuerySelector = function (t) {
    var e = t.id, n = t.selector;
    if (e) {
      var r = e;
      if (-1 !== e.indexOf(c)) {
        var i = e.split(c), o = i[0];
        if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
      }
      return '[data-w-id="'.concat(r, '"], [data-w-id^="').concat(r, '_instance"]')
    }
    return n
  }, e.getValidDocument = function (t) {
    if (null == t || t === document.documentElement.getAttribute(l)) return document;
    return null
  }, e.queryDocument = function (t, e) {
    return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
  }, e.elementContains = function (t, e) {
    return t.contains(e)
  }, e.isSiblingNode = function (t, e) {
    return t !== e && t.parentNode === e.parentNode
  }, e.getChildElements = function (t) {
    for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
      var i = t[n].children, o = i.length;
      if (o) for (var a = 0; a < o; a++) e.push(i[a])
    }
    return e
  }, e.getSiblingElements = function () {
    for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
      var o = t[r].parentNode;
      if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
        n.push(o);
        for (var a = o.firstElementChild; null != a;) -1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
      }
    }
    return e
  }, e.getRefType = function (t) {
    if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : f;
    return null
  }, e.getClosestElement = void 0;
  var i = n(15), o = n(3), a = i.IX2BrowserSupport.ELEMENT_MATCHES, u = o.IX2EngineConstants, c = u.IX2_ID_DELIMITER,
    s = u.HTML_ELEMENT, f = u.PLAIN_OBJECT, l = u.WF_PAGE;
  var d = Element.prototype.closest ? function (t, e) {
    return document.documentElement.contains(t) ? t.closest(e) : null
  } : function (t, e) {
    if (!document.documentElement.contains(t)) return null;
    var n = t;
    do {
      if (n[a] && n[a](e)) return n;
      n = n.parentNode
    } while (null != n);
    return null
  };
  e.getClosestElement = d
}, function (t, e, n) {
  "use strict";
  var r, i = n(1), o = i(n(21)), a = i(n(13)), u = n(1);
  Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
  var c, s, f, l = u(n(30)), d = u(n(313)), p = u(n(59)), v = u(n(332)), h = n(3), E = n(122), _ = n(64), y = n(15),
    g = h.EventTypeConsts, m = g.MOUSE_CLICK, I = g.MOUSE_SECOND_CLICK, T = g.MOUSE_DOWN, b = g.MOUSE_UP,
    O = g.MOUSE_OVER, A = g.MOUSE_OUT, w = g.DROPDOWN_CLOSE, S = g.DROPDOWN_OPEN, R = g.SLIDER_ACTIVE,
    N = g.SLIDER_INACTIVE, x = g.TAB_ACTIVE, C = g.TAB_INACTIVE, L = g.NAVBAR_CLOSE, P = g.NAVBAR_OPEN,
    M = g.MOUSE_MOVE, D = g.PAGE_SCROLL_DOWN, j = g.SCROLL_INTO_VIEW, F = g.SCROLL_OUT_OF_VIEW, X = g.PAGE_SCROLL_UP,
    G = g.SCROLLING_IN_VIEW, V = g.PAGE_FINISH, k = g.ECOMMERCE_CART_CLOSE, U = g.ECOMMERCE_CART_OPEN, B = g.PAGE_START,
    W = g.PAGE_SCROLL, H = "COMPONENT_ACTIVE", z = "COMPONENT_INACTIVE", K = h.IX2EngineConstants.COLON_DELIMITER,
    Y = y.IX2VanillaUtils.getNamespacedParameterId, Q = function (t) {
      return function (e) {
        return !("object" !== (0, a.default)(e) || !t(e)) || e
      }
    }, q = Q(function (t) {
      return t.element === t.nativeEvent.target
    }), $ = Q(function (t) {
      var e = t.element, n = t.nativeEvent;
      return e.contains(n.target)
    }), Z = (0, d.default)([q, $]), J = function (t, e) {
      if (e) {
        var n = t.getState().ixData.events[e];
        if (n && !at[n.eventTypeId]) return n
      }
      return null
    }, tt = function (t, e) {
      var n = t.store, r = t.event, i = t.element, o = t.eventStateKey, a = r.action, u = r.id, c = a.config,
        s = c.actionListId, f = c.autoStopEventId, l = J(n, f);
      return l && (0, E.stopActionGroup)({
        store: n,
        eventId: f,
        eventTarget: i,
        eventStateKey: f + K + o.split(K)[1],
        actionListId: (0, p.default)(l, "action.config.actionListId")
      }), (0, E.stopActionGroup)({
        store: n,
        eventId: u,
        eventTarget: i,
        eventStateKey: o,
        actionListId: s
      }), (0, E.startActionGroup)({store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s}), e
    }, et = function (t, e) {
      return function (n, r) {
        return !0 === t(n, r) ? e(n, r) : r
      }
    }, nt = {handler: et(Z, tt)}, rt = (0, l.default)({}, nt, {types: [H, z].join(" ")}),
    it = [{target: window, types: "resize orientationchange", throttle: !0}, {
      target: document,
      types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
      throttle: !0
    }], ot = {types: it}, at = {PAGE_START: B, PAGE_FINISH: V},
    ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
      return {
        scrollLeft: c ? window.pageXOffset : s.scrollLeft,
        scrollTop: c ? window.pageYOffset : s.scrollTop,
        stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
        scrollWidth: s.scrollWidth,
        scrollHeight: s.scrollHeight,
        clientWidth: s.clientWidth,
        clientHeight: s.clientHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      }
    }), ct = function (t) {
      var e = t.element, n = t.nativeEvent, r = n.type, i = n.target, o = n.relatedTarget, a = e.contains(i);
      if ("mouseover" === r && a) return !0;
      var u = e.contains(o);
      return !("mouseout" !== r || !a || !u)
    }, st = function (t) {
      var e, n, r = t.element, i = t.event.config, o = ut(), a = o.clientWidth, u = o.clientHeight,
        c = i.scrollOffsetValue, s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
      return e = r.getBoundingClientRect(), n = {
        left: 0,
        top: s,
        right: a,
        bottom: u - s
      }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
    }, ft = function (t) {
      return function (e, n) {
        var r = e.nativeEvent.type, i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
          o = (0, l.default)({}, n, {isActive: i});
        return n && o.isActive === n.isActive ? o : t(e, o) || o
      }
    }, lt = function (t) {
      return function (e, n) {
        var r = {elementHovered: ct(e)};
        return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
      }
    }, dt = function (t) {
      return function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = ut(), i = r.stiffScrollTop,
          o = r.scrollHeight, a = r.innerHeight, u = e.event, c = u.config, s = u.eventTypeId, f = c.scrollOffsetValue,
          d = "PX" === c.scrollOffsetUnit, p = o - a, v = Number((i / p).toFixed(2));
        if (n && n.percentTop === v) return n;
        var h, E, _ = (d ? f : a * (f || 0) / 100) / p, y = 0;
        n && (h = v > n.percentTop, y = (E = n.scrollingDown !== h) ? v : n.anchorTop);
        var g = s === D ? v >= y + _ : v <= y - _,
          m = (0, l.default)({}, n, {percentTop: v, inBounds: g, anchorTop: y, scrollingDown: h});
        return n && g && (E || m.inBounds !== n.inBounds) && t(e, m) || m
      }
    }, pt = function (t) {
      return function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {clickCount: 0},
          r = {clickCount: n.clickCount % 2 + 1};
        return r.clickCount !== n.clickCount && t(e, r) || r
      }
    }, vt = function () {
      var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return (0, l.default)({}, rt, {
        handler: et(t ? Z : q, ft(function (t, e) {
          return e.isActive ? nt.handler(t, e) : e
        }))
      })
    }, ht = function () {
      var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return (0, l.default)({}, rt, {
        handler: et(t ? Z : q, ft(function (t, e) {
          return e.isActive ? e : nt.handler(t, e)
        }))
      })
    }, Et = (0, l.default)({}, ot, {
      handler: (f = function (t, e) {
        var n = e.elementVisible, r = t.event;
        return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === j === n ? (tt(t), (0, l.default)({}, e, {triggered: !0})) : e
      }, function (t, e) {
        var n = (0, l.default)({}, e, {elementVisible: st(t)});
        return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n
      })
    }),
    _t = (r = {}, (0, o.default)(r, R, vt()), (0, o.default)(r, N, ht()), (0, o.default)(r, S, vt()), (0, o.default)(r, w, ht()), (0, o.default)(r, P, vt(!1)), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, x, vt()), (0, o.default)(r, C, ht()), (0, o.default)(r, U, {
      types: "ecommerce-cart-open",
      handler: et(Z, tt)
    }), (0, o.default)(r, k, {types: "ecommerce-cart-close", handler: et(Z, tt)}), (0, o.default)(r, m, {
      types: "click",
      handler: et(Z, pt(function (t, e) {
        var n, r, i, o = e.clickCount;
        r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t)
      }))
    }), (0, o.default)(r, I, {
      types: "click", handler: et(Z, pt(function (t, e) {
        2 === e.clickCount && tt(t)
      }))
    }), (0, o.default)(r, T, (0, l.default)({}, nt, {types: "mousedown"})), (0, o.default)(r, b, (0, l.default)({}, nt, {types: "mouseup"})), (0, o.default)(r, O, {
      types: "mouseover mouseout",
      handler: et(Z, lt(function (t, e) {
        e.elementHovered && tt(t)
      }))
    }), (0, o.default)(r, A, {
      types: "mouseover mouseout", handler: et(Z, lt(function (t, e) {
        e.elementHovered || tt(t)
      }))
    }), (0, o.default)(r, M, {
      types: "mousemove mouseout scroll", handler: function (t) {
        var e = t.store, n = t.element, r = t.eventConfig, i = t.nativeEvent, o = t.eventStateKey,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
          }, u = r.basedOn, c = r.selectedAxis, s = r.continuousParameterGroupId, f = r.reverse, l = r.restingState,
          d = void 0 === l ? 0 : l, p = i.clientX, v = void 0 === p ? a.clientX : p, E = i.clientY,
          y = void 0 === E ? a.clientY : E, g = i.pageX, m = void 0 === g ? a.pageX : g, I = i.pageY,
          T = void 0 === I ? a.pageY : I, b = "X_AXIS" === c, O = "mouseout" === i.type, A = d / 100, w = s, S = !1;
        switch (u) {
          case h.EventBasedOn.VIEWPORT:
            A = b ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(y, window.innerHeight) / window.innerHeight;
            break;
          case h.EventBasedOn.PAGE:
            var R = ut(), N = R.scrollLeft, x = R.scrollTop, C = R.scrollWidth, L = R.scrollHeight;
            A = b ? Math.min(N + m, C) / C : Math.min(x + T, L) / L;
            break;
          case h.EventBasedOn.ELEMENT:
          default:
            w = Y(o, s);
            var P = 0 === i.type.indexOf("mouse");
            if (P && !0 !== Z({element: n, nativeEvent: i})) break;
            var M = n.getBoundingClientRect(), D = M.left, j = M.top, F = M.width, X = M.height;
            if (!P && !function (t, e) {
              return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
            }({left: v, top: y}, M)) break;
            S = !0, A = b ? (v - D) / F : (y - j) / X
        }
        return O && (A > .95 || A < .05) && (A = Math.round(A)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (A = f ? 1 - A : A, e.dispatch((0, _.parameterChanged)(w, A))), {
          elementHovered: S,
          clientX: v,
          clientY: y,
          pageX: m,
          pageY: T
        }
      }
    }), (0, o.default)(r, W, {
      types: it, handler: function (t) {
        var e = t.store, n = t.eventConfig, r = n.continuousParameterGroupId, i = n.reverse, o = ut(),
          a = o.scrollTop / (o.scrollHeight - o.clientHeight);
        a = i ? 1 - a : a, e.dispatch((0, _.parameterChanged)(r, a))
      }
    }), (0, o.default)(r, G, {
      types: it, handler: function (t) {
        var e = t.element, n = t.store, r = t.eventConfig, i = t.eventStateKey,
          o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {scrollPercent: 0}, a = ut(),
          u = a.scrollLeft, c = a.scrollTop, s = a.scrollWidth, f = a.scrollHeight, l = a.clientHeight, d = r.basedOn,
          p = r.selectedAxis, v = r.continuousParameterGroupId, E = r.startsEntering, y = r.startsExiting,
          g = r.addEndOffset, m = r.addStartOffset, I = r.addOffsetValue, T = void 0 === I ? 0 : I,
          b = r.endOffsetValue, O = void 0 === b ? 0 : b, A = "X_AXIS" === p;
        if (d === h.EventBasedOn.VIEWPORT) {
          var w = A ? u / s : c / f;
          return w !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(v, w)), {scrollPercent: w}
        }
        var S = Y(i, v), R = e.getBoundingClientRect(), N = (m ? T : 0) / 100, x = (g ? O : 0) / 100;
        N = E ? N : 1 - N, x = y ? x : 1 - x;
        var C = R.top + Math.min(R.height * N, l), L = R.top + R.height * x - C, P = Math.min(l + L, f),
          M = Math.min(Math.max(0, l - C), P) / P;
        return M !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(S, M)), {scrollPercent: M}
      }
    }), (0, o.default)(r, j, Et), (0, o.default)(r, F, Et), (0, o.default)(r, D, (0, l.default)({}, ot, {
      handler: dt(function (t, e) {
        e.scrollingDown && tt(t)
      })
    })), (0, o.default)(r, X, (0, l.default)({}, ot, {
      handler: dt(function (t, e) {
        e.scrollingDown || tt(t)
      })
    })), (0, o.default)(r, V, {
      types: "readystatechange IX2_PAGE_UPDATE", handler: et(q, function (t) {
        return function (e, n) {
          var r = {finished: "complete" === document.readyState};
          return !r.finished || n && n.finshed || t(e), r
        }
      }(tt))
    }), (0, o.default)(r, B, {
      types: "readystatechange IX2_PAGE_UPDATE", handler: et(q, function (t) {
        return function (e, n) {
          return n || t(e), {started: !0}
        }
      }(tt))
    }), r);
  e.default = _t
}, function (t, e, n) {
  var r = n(314)();
  t.exports = r
}, function (t, e, n) {
  var r = n(65), i = n(315), o = n(126), a = n(127), u = n(2), c = n(328), s = "Expected a function", f = 8, l = 32,
    d = 128, p = 256;
  t.exports = function (t) {
    return i(function (e) {
      var n = e.length, i = n, v = r.prototype.thru;
      for (t && e.reverse(); i--;) {
        var h = e[i];
        if ("function" != typeof h) throw new TypeError(s);
        if (v && !E && "wrapper" == a(h)) var E = new r([], !0)
      }
      for (i = E ? i : n; ++i < n;) {
        h = e[i];
        var _ = a(h), y = "wrapper" == _ ? o(h) : void 0;
        E = y && c(y[0]) && y[1] == (d | f | l | p) && !y[4].length && 1 == y[9] ? E[a(y[0])].apply(E, y[3]) : 1 == h.length && c(h) ? E[_]() : E.thru(h)
      }
      return function () {
        var t = arguments, r = t[0];
        if (E && 1 == t.length && u(r)) return E.plant(r).value();
        for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
        return o
      }
    })
  }
}, function (t, e, n) {
  var r = n(316), i = n(319), o = n(321);
  t.exports = function (t) {
    return o(i(t, void 0, r), t + "")
  }
}, function (t, e, n) {
  var r = n(317);
  t.exports = function (t) {
    return null != t && t.length ? r(t, 1) : []
  }
}, function (t, e, n) {
  var r = n(51), i = n(318);
  t.exports = function t(e, n, o, a, u) {
    var c = -1, s = e.length;
    for (o || (o = i), u || (u = []); ++c < s;) {
      var f = e[c];
      n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
    }
    return u
  }
}, function (t, e, n) {
  var r = n(23), i = n(36), o = n(2), a = r ? r.isConcatSpreadable : void 0;
  t.exports = function (t) {
    return o(t) || i(t) || !!(a && t && t[a])
  }
}, function (t, e, n) {
  var r = n(320), i = Math.max;
  t.exports = function (t, e, n) {
    return e = i(void 0 === e ? t.length - 1 : e, 0), function () {
      for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
      a = -1;
      for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
      return s[e] = n(c), r(t, this, s)
    }
  }
}, function (t, e) {
  t.exports = function (t, e, n) {
    switch (n.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, n[0]);
      case 2:
        return t.call(e, n[0], n[1]);
      case 3:
        return t.call(e, n[0], n[1], n[2])
    }
    return t.apply(e, n)
  }
}, function (t, e, n) {
  var r = n(322), i = n(324)(r);
  t.exports = i
}, function (t, e, n) {
  var r = n(323), i = n(124), o = n(62), a = i ? function (t, e) {
    return i(t, "toString", {configurable: !0, enumerable: !1, value: r(e), writable: !0})
  } : o;
  t.exports = a
}, function (t, e) {
  t.exports = function (t) {
    return function () {
      return t
    }
  }
}, function (t, e) {
  var n = 800, r = 16, i = Date.now;
  t.exports = function (t) {
    var e = 0, o = 0;
    return function () {
      var a = i(), u = r - (a - o);
      if (o = a, u > 0) {
        if (++e >= n) return arguments[0]
      } else e = 0;
      return t.apply(void 0, arguments)
    }
  }
}, function (t, e, n) {
  var r = n(108), i = r && new r;
  t.exports = i
}, function (t, e) {
  t.exports = function () {
  }
}, function (t, e) {
  t.exports = {}
}, function (t, e, n) {
  var r = n(67), i = n(126), o = n(127), a = n(329);
  t.exports = function (t) {
    var e = o(t), n = a[e];
    if ("function" != typeof n || !(e in r.prototype)) return !1;
    if (t === n) return !0;
    var u = i(n);
    return !!u && t === u[0]
  }
}, function (t, e, n) {
  var r = n(67), i = n(65), o = n(66), a = n(2), u = n(12), c = n(330), s = Object.prototype.hasOwnProperty;

  function f(t) {
    if (u(t) && !a(t) && !(t instanceof r)) {
      if (t instanceof i) return t;
      if (s.call(t, "__wrapped__")) return c(t)
    }
    return new i(t)
  }

  f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function (t, e, n) {
  var r = n(67), i = n(65), o = n(331);
  t.exports = function (t) {
    if (t instanceof r) return t.clone();
    var e = new i(t.__wrapped__, t.__chain__);
    return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
  }
}, function (t, e) {
  t.exports = function (t, e) {
    var n = -1, r = t.length;
    for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
    return e
  }
}, function (t, e, n) {
  var r = n(333), i = n(63);
  t.exports = function (t, e, n) {
    return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
  }
}, function (t, e) {
  t.exports = function (t, e, n) {
    return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
  }
}, function (t, e, n) {
  "use strict";
  var r = n(6);
  r.define("links", t.exports = function (t, e) {
    var n, i, o, a = {}, u = t(window), c = r.env(), s = window.location, f = document.createElement("a"),
      l = "w--current", d = /index\.(html|php)$/, p = /\/$/;

    function v(e) {
      var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
      if (f.href = r, !(r.indexOf(":") >= 0)) {
        var a = t(e);
        if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
          if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
          var u = t(f.hash);
          u.length && i.push({link: a, sec: u, active: !1})
        } else if ("#" !== r && "" !== r) {
          var c = f.href === s.href || r === o || d.test(r) && p.test(o);
          E(a, l, c)
        }
      }
    }

    function h() {
      var t = u.scrollTop(), n = u.height();
      e.each(i, function (e) {
        var r = e.link, i = e.sec, o = i.offset().top, a = i.outerHeight(), u = .5 * n,
          c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
        e.active !== c && (e.active = c, E(r, l, c))
      })
    }

    function E(t, e, n) {
      var r = t.hasClass(e);
      n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
    }

    return a.ready = a.design = a.preview = function () {
      n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
      for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
      i.length && (r.scroll.on(h), h())
    }, a
  })
}, function (t, e, n) {
  "use strict";
  var r = n(6);
  r.define("scroll", t.exports = function (t) {
    var e = {WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll"}, n = window.location,
      i = function () {
        try {
          return Boolean(window.frameElement)
        } catch (t) {
          return !0
        }
      }() ? null : window.history, o = t(window), a = t(document), u = t(document.body),
      c = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
        window.setTimeout(t, 15)
      }, s = r.env("editor") ? ".w-editor-body" : "body",
      f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])", l = 'a[href="#"]',
      d = 'a[href*="#"]:not(.w-tab-link):not(' + l + ")", p = document.createElement("style");
    p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
    var v = /^#[a-zA-Z0-9][\w:.-]*$/;
    var h = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

    function E(t, e) {
      var n;
      switch (e) {
        case"add":
          (n = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", n) : t.attr("tabindex", "-1");
          break;
        case"remove":
          (n = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", n), t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex")
      }
      t.toggleClass("wf-force-outline-none", "add" === e)
    }

    function _(e) {
      var a = e.currentTarget;
      if (!(r.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
        var s, l = (s = a, v.test(s.hash) && s.host + s.pathname === n.host + n.pathname ? a.hash : "");
        if ("" !== l) {
          var d = t(l);
          d.length && (e && (e.preventDefault(), e.stopPropagation()), function (t) {
            if (n.hash !== t && i && i.pushState && (!r.env.chrome || "file:" !== n.protocol)) {
              var e = i.state && i.state.hash;
              e !== t && i.pushState({hash: t}, "", t)
            }
          }(l), window.setTimeout(function () {
            !function (e, n) {
              var r = o.scrollTop(), i = function (e) {
                var n = t(f), r = "fixed" === n.css("position") ? n.outerHeight() : 0, i = e.offset().top - r;
                if ("mid" === e.data("scroll")) {
                  var a = o.height() - r, u = e.outerHeight();
                  u < a && (i -= Math.round((a - u) / 2))
                }
                return i
              }(e);
              if (r === i) return;
              var a = function (t, e, n) {
                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || h.matches) return 0;
                var r = 1;
                return u.add(t).each(function (t, e) {
                  var n = parseFloat(e.getAttribute("data-scroll-time"));
                  !isNaN(n) && n >= 0 && (r = n)
                }), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * r
              }(e, r, i), s = Date.now();
              c(function t() {
                var e = Date.now() - s;
                window.scroll(0, function (t, e, n, r) {
                  return n > r ? e : t + (e - t) * ((i = n / r) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                  var i
                }(r, i, e, a)), e <= a ? c(t) : "function" == typeof n && n()
              })
            }(d, function () {
              E(d, "add"), d.get(0).focus({preventScroll: !0}), E(d, "remove")
            })
          }, e ? 0 : 300))
        }
      }
    }

    return {
      ready: function () {
        var t = e.WF_CLICK_EMPTY, n = e.WF_CLICK_SCROLL;
        a.on(n, d, _), a.on(t, l, function (t) {
          t.preventDefault()
        }), document.head.insertBefore(p, document.head.firstChild)
      }
    }
  })
}, function (t, e, n) {
  "use strict";
  n(6).define("touch", t.exports = function (t) {
    var e = {}, n = window.getSelection;

    function r(e) {
      var r, i, o = !1, a = !1, u = Math.min(Math.round(.04 * window.innerWidth), 40);

      function c(t) {
        var e = t.touches;
        e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
      }

      function s(e) {
        if (o) {
          if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
          var r = e.touches, c = r ? r[0].clientX : e.clientX, s = c - i;
          i = c, Math.abs(s) > u && n && "" === String(n()) && (!function (e, n, r) {
            var i = t.Event(e, {originalEvent: n});
            t(n.target).trigger(i, r)
          }("swipe", e, {direction: s > 0 ? "right" : "left"}), l())
        }
      }

      function f(t) {
        if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void (a = !1)) : void 0
      }

      function l() {
        o = !1
      }

      e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function () {
        e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null
      }
    }

    return t.event.special.tap = {bindType: "click", delegateType: "click"}, e.init = function (e) {
      return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null
    }, e.instance = e.init(document), e
  })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
  {
    "events": {
      "e-3": {
        "id": "e-3",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLLING_IN_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {"actionListId": "a-2", "affectedElements": {}, "duration": 0}
        },
        "mediaQueries": ["main", "medium", "small"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ca9",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ca9",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": [{
          "continuousParameterGroupId": "a-2-p",
          "smoothing": 94,
          "startsEntering": false,
          "addStartOffset": false,
          "addOffsetValue": 50,
          "startsExiting": false,
          "addEndOffset": true,
          "endOffsetValue": 10
        }],
        "createdOn": 1652155529293
      },
      "e-4": {
        "id": "e-4",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLLING_IN_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {"actionListId": "a-3", "affectedElements": {}, "duration": 0}
        },
        "mediaQueries": ["main", "medium", "small"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|3fbae1a0-b34d-680f-7875-043c2f073f0f",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|3fbae1a0-b34d-680f-7875-043c2f073f0f",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": [{
          "continuousParameterGroupId": "a-3-p",
          "smoothing": 94,
          "startsEntering": false,
          "addStartOffset": false,
          "addOffsetValue": 50,
          "startsExiting": false,
          "addEndOffset": true,
          "endOffsetValue": 20
        }],
        "createdOn": 1652156505219
      },
      "e-5": {
        "id": "e-5",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLLING_IN_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {"actionListId": "a", "affectedElements": {}, "duration": 0}
        },
        "mediaQueries": ["main", "medium", "small"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|dd6611d0-4354-3de2-f708-01011e261f18",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|dd6611d0-4354-3de2-f708-01011e261f18",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": [{
          "continuousParameterGroupId": "a-p",
          "smoothing": 94,
          "startsEntering": true,
          "addStartOffset": false,
          "addOffsetValue": 50,
          "startsExiting": false,
          "addEndOffset": false,
          "endOffsetValue": 50
        }],
        "createdOn": 1652250078910
      },
      "e-6": {
        "id": "e-6",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "PAGE_START",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-4",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-7"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {"id": "62622ac9404b8d5e17b40996", "appliesTo": "PAGE", "styleBlockIds": []},
        "targets": [{"id": "62622ac9404b8d5e17b40996", "appliesTo": "PAGE", "styleBlockIds": []}],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652503166765
      },
      "e-8": {
        "id": "e-8",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "PAGE_START",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-5",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-9"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {"id": "62622ac9404b8d5e17b40996", "appliesTo": "PAGE", "styleBlockIds": []},
        "targets": [{"id": "62622ac9404b8d5e17b40996", "appliesTo": "PAGE", "styleBlockIds": []}],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652512673305
      },
      "e-12": {
        "id": "e-12",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-7",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-13"
          }
        },
        "mediaQueries": ["main", "medium", "small"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd9",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd9",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 50,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652586945055
      },
      "e-18": {
        "id": "e-18",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-10",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-19"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|624a74ad-b97f-7271-dfc1-3eed8f042778",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|624a74ad-b97f-7271-dfc1-3eed8f042778",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652669476791
      },
      "e-22": {
        "id": "e-22",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-12",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-23"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|eaf98140-4edf-73a1-7e08-15a37501b1f3",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|eaf98140-4edf-73a1-7e08-15a37501b1f3",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 15,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652670391882
      },
      "e-24": {
        "id": "e-24",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "SLIDE_EFFECT",
          "instant": false,
          "config": {"actionListId": "slideInBottomRight", "autoStopEventId": "e-25"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 5,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": "BOTTOM_RIGHT",
          "effectIn": true
        },
        "createdOn": 1652678536742
      },
      "e-26": {
        "id": "e-26",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "SLIDE_EFFECT",
          "instant": false,
          "config": {"actionListId": "slideInBottomRight", "autoStopEventId": "e-27"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|23f721d4-fce0-e42b-0581-bd14779b5e3c",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|23f721d4-fce0-e42b-0581-bd14779b5e3c",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 5,
          "scrollOffsetUnit": "%",
          "delay": 500,
          "direction": "BOTTOM_RIGHT",
          "effectIn": true
        },
        "createdOn": 1652678585379
      },
      "e-28": {
        "id": "e-28",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "SLIDE_EFFECT",
          "instant": false,
          "config": {"actionListId": "slideInBottomRight", "autoStopEventId": "e-29"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|b87903cb-63d2-14dd-9408-0cc4a9b3b4b3",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|b87903cb-63d2-14dd-9408-0cc4a9b3b4b3",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 5,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": "BOTTOM_RIGHT",
          "effectIn": true
        },
        "createdOn": 1652678633744
      },
      "e-30": {
        "id": "e-30",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "SLIDE_EFFECT",
          "instant": false,
          "config": {"actionListId": "slideInBottomRight", "autoStopEventId": "e-31"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|b32b9360-bbd6-dee2-0d36-1999a539a13e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|b32b9360-bbd6-dee2-0d36-1999a539a13e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 5,
          "scrollOffsetUnit": "%",
          "delay": 500,
          "direction": "BOTTOM_RIGHT",
          "effectIn": true
        },
        "createdOn": 1652678650798
      },
      "e-32": {
        "id": "e-32",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "SLIDE_EFFECT",
          "instant": false,
          "config": {"actionListId": "slideInBottomRight", "autoStopEventId": "e-33"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 5,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": "BOTTOM_RIGHT",
          "effectIn": true
        },
        "createdOn": 1652678668710
      },
      "e-34": {
        "id": "e-34",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "SLIDE_EFFECT",
          "instant": false,
          "config": {"actionListId": "slideInBottomRight", "autoStopEventId": "e-35"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|0c80f33b-5de1-d56e-7369-5b8aab280f11",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|0c80f33b-5de1-d56e-7369-5b8aab280f11",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 5,
          "scrollOffsetUnit": "%",
          "delay": 500,
          "direction": "BOTTOM_RIGHT",
          "effectIn": true
        },
        "createdOn": 1652678681857
      },
      "e-36": {
        "id": "e-36",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "SLIDE_EFFECT",
          "instant": false,
          "config": {"actionListId": "slideInBottomRight", "autoStopEventId": "e-37"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aeedd871-f1cf-0534-ba3c-a3677f5fefe3",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aeedd871-f1cf-0534-ba3c-a3677f5fefe3",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 5,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": "BOTTOM_RIGHT",
          "effectIn": true
        },
        "createdOn": 1652678699472
      },
      "e-38": {
        "id": "e-38",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "SLIDE_EFFECT",
          "instant": false,
          "config": {"actionListId": "slideInBottomRight", "autoStopEventId": "e-39"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|c53817fd-ff4f-4ffc-536a-bc5c797611f6",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|c53817fd-ff4f-4ffc-536a-bc5c797611f6",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 10,
          "scrollOffsetUnit": "%",
          "delay": 5,
          "direction": "BOTTOM_RIGHT",
          "effectIn": true
        },
        "createdOn": 1652678710946
      },
      "e-40": {
        "id": "e-40",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLLING_IN_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {"actionListId": "a-13", "affectedElements": {}, "duration": 0}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|b989789d-fe0f-6f86-4436-013b433225c2",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|b989789d-fe0f-6f86-4436-013b433225c2",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": [{
          "continuousParameterGroupId": "a-13-p",
          "smoothing": 55,
          "startsEntering": true,
          "addStartOffset": false,
          "addOffsetValue": 50,
          "startsExiting": false,
          "addEndOffset": false,
          "endOffsetValue": 50
        }],
        "createdOn": 1652682562939
      },
      "e-41": {
        "id": "e-41",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "FADE_EFFECT",
          "instant": false,
          "config": {"actionListId": "fadeIn", "autoStopEventId": "e-42"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|c265770c-f146-8026-d90b-9a3c0882e86b",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|c265770c-f146-8026-d90b-9a3c0882e86b",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 30,
          "scrollOffsetUnit": "%",
          "delay": 200,
          "direction": null,
          "effectIn": true
        },
        "createdOn": 1652685389522
      },
      "e-43": {
        "id": "e-43",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "FADE_EFFECT",
          "instant": false,
          "config": {"actionListId": "fadeIn", "autoStopEventId": "e-44"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|46072bca-0fcd-711c-eacf-ad40b2c3ffdb",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|46072bca-0fcd-711c-eacf-ad40b2c3ffdb",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 35,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": true
        },
        "createdOn": 1652685407157
      },
      "e-45": {
        "id": "e-45",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "FADE_EFFECT",
          "instant": false,
          "config": {"actionListId": "fadeIn", "autoStopEventId": "e-46"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|9c8dac87-e54a-5771-2b52-cddde98cbdca",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|9c8dac87-e54a-5771-2b52-cddde98cbdca",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 40,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": true
        },
        "createdOn": 1652685423277
      },
      "e-49": {
        "id": "e-49",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-14",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-50"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|97290b9b-a89f-6a9f-b9bd-3b9213bb49b8",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|97290b9b-a89f-6a9f-b9bd-3b9213bb49b8",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652696133627
      },
      "e-51": {
        "id": "e-51",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-15",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-52"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db7",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db7",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652696749940
      },
      "e-53": {
        "id": "e-53",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-16",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-54"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|947d7d38-3822-6ae7-be3c-b967ffa5e6e6",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|947d7d38-3822-6ae7-be3c-b967ffa5e6e6",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652697588469
      },
      "e-55": {
        "id": "e-55",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-17",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-56"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cca",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cca",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652766914990
      },
      "e-57": {
        "id": "e-57",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-18",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-58"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ccd",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ccd",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652766973826
      },
      "e-60": {
        "id": "e-60",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-20",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-61"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|a1a93f6a-5b93-512e-be94-3fbb2c6b8d0e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|a1a93f6a-5b93-512e-be94-3fbb2c6b8d0e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652770372574
      },
      "e-62": {
        "id": "e-62",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-21",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-63"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd7",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd7",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652780158272
      },
      "e-72": {
        "id": "e-72",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "BLINK_EFFECT",
          "instant": false,
          "config": {"actionListId": "blink", "autoStopEventId": "e-73"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|fc4bc945-857d-8566-0c33-42af5e454bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|fc4bc945-857d-8566-0c33-42af5e454bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652782849989
      },
      "e-73": {
        "id": "e-73",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_OUT_OF_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-23",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-72"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|fc4bc945-857d-8566-0c33-42af5e454bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|fc4bc945-857d-8566-0c33-42af5e454bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1652782849990
      },
      "e-92": {
        "id": "e-92",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "FADE_EFFECT",
          "instant": false,
          "config": {"actionListId": "fadeIn", "autoStopEventId": "e-93"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cac",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cac",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": true
        },
        "createdOn": 1653028626669
      },
      "e-93": {
        "id": "e-93",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_OUT_OF_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "FADE_EFFECT",
          "instant": false,
          "config": {"actionListId": "fadeOut", "autoStopEventId": "e-92"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cac",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cac",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": false
        },
        "createdOn": 1653028626669
      },
      "e-94": {
        "id": "e-94",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "FADE_EFFECT",
          "instant": false,
          "config": {"actionListId": "fadeIn", "autoStopEventId": "e-95"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd7",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd7",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": true
        },
        "createdOn": 1653029303763
      },
      "e-95": {
        "id": "e-95",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_OUT_OF_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "FADE_EFFECT",
          "instant": false,
          "config": {"actionListId": "fadeOut", "autoStopEventId": "e-94"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd7",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd7",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": false
        },
        "createdOn": 1653029303764
      },
      "e-96": {
        "id": "e-96",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_MOVE",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {"actionListId": "a-24", "affectedElements": {}, "duration": 0}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {"id": "62622ac9404b8d5e17b40996", "appliesTo": "PAGE", "styleBlockIds": []},
        "targets": [{"id": "62622ac9404b8d5e17b40996", "appliesTo": "PAGE", "styleBlockIds": []}],
        "config": [{
          "continuousParameterGroupId": "a-24-p",
          "selectedAxis": "X_AXIS",
          "basedOn": "VIEWPORT",
          "reverse": false,
          "smoothing": 85,
          "restingState": 50
        }, {
          "continuousParameterGroupId": "a-24-p-2",
          "selectedAxis": "Y_AXIS",
          "basedOn": "VIEWPORT",
          "reverse": false,
          "smoothing": 85,
          "restingState": 50
        }],
        "createdOn": 1653058598966
      },
      "e-97": {
        "id": "e-97",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-25",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-98"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653059253608
      },
      "e-98": {
        "id": "e-98",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-26",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-97"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653059253609
      },
      "e-103": {
        "id": "e-103",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_MOVE",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {"actionListId": "a-28", "affectedElements": {}, "duration": 0}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {"id": "62622ac9404b8d5e17b40996", "appliesTo": "PAGE", "styleBlockIds": []},
        "targets": [{"id": "62622ac9404b8d5e17b40996", "appliesTo": "PAGE", "styleBlockIds": []}],
        "config": [{
          "continuousParameterGroupId": "a-28-p",
          "selectedAxis": "X_AXIS",
          "basedOn": "VIEWPORT",
          "reverse": false,
          "smoothing": 77,
          "restingState": 50
        }, {
          "continuousParameterGroupId": "a-28-p-2",
          "selectedAxis": "Y_AXIS",
          "basedOn": "VIEWPORT",
          "reverse": false,
          "smoothing": 50,
          "restingState": 50
        }],
        "createdOn": 1653191612523
      },
      "e-104": {
        "id": "e-104",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-27",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-105"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|06bed3f9-e8ea-3ce0-f72f-9a0161dc5f08",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|06bed3f9-e8ea-3ce0-f72f-9a0161dc5f08",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653192921526
      },
      "e-109": {
        "id": "e-109",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "BLINK_EFFECT",
          "instant": false,
          "config": {"actionListId": "blink", "autoStopEventId": "e-110"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|c169a228-c564-8826-24fe-b6a38090c73e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|c169a228-c564-8826-24fe-b6a38090c73e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653200564665
      },
      "e-110": {
        "id": "e-110",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_OUT_OF_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-23",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-109"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|c169a228-c564-8826-24fe-b6a38090c73e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|c169a228-c564-8826-24fe-b6a38090c73e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653200564665
      },
      "e-113": {
        "id": "e-113",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "BLINK_EFFECT",
          "instant": false,
          "config": {"actionListId": "blink", "autoStopEventId": "e-114"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|a4559ec0-63d2-e31b-6b42-f3f9d3912854",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|a4559ec0-63d2-e31b-6b42-f3f9d3912854",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653200574460
      },
      "e-114": {
        "id": "e-114",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_OUT_OF_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-23",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-113"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|a4559ec0-63d2-e31b-6b42-f3f9d3912854",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|a4559ec0-63d2-e31b-6b42-f3f9d3912854",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653200574460
      },
      "e-117": {
        "id": "e-117",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "BLINK_EFFECT",
          "instant": false,
          "config": {"actionListId": "blink", "autoStopEventId": "e-118"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|37a24d7e-83e2-55fc-2f18-f3570a769ef6",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|37a24d7e-83e2-55fc-2f18-f3570a769ef6",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653200578097
      },
      "e-118": {
        "id": "e-118",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_OUT_OF_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-23",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-117"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|37a24d7e-83e2-55fc-2f18-f3570a769ef6",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|37a24d7e-83e2-55fc-2f18-f3570a769ef6",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653200578097
      },
      "e-119": {
        "id": "e-119",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-30",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-120"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|2ec5b4a8-72e6-f528-25c0-db5ac803cc31",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|2ec5b4a8-72e6-f528-25c0-db5ac803cc31",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653289879876
      },
      "e-120": {
        "id": "e-120",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-31",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-119"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|2ec5b4a8-72e6-f528-25c0-db5ac803cc31",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|2ec5b4a8-72e6-f528-25c0-db5ac803cc31",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653289879877
      },
      "e-121": {
        "id": "e-121",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-30",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-122"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653290134963
      },
      "e-122": {
        "id": "e-122",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-31",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-121"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653290134964
      },
      "e-123": {
        "id": "e-123",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-30",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-124"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653290172456
      },
      "e-124": {
        "id": "e-124",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-31",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-123"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653290172457
      },
      "e-125": {
        "id": "e-125",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-30",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-126"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653290229275
      },
      "e-126": {
        "id": "e-126",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-31",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-125"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653290229275
      },
      "e-127": {
        "id": "e-127",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_MOVE",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {"actionListId": "a-33", "affectedElements": {}, "duration": 0}
        },
        "mediaQueries": ["main"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": [{
          "continuousParameterGroupId": "a-33-p",
          "selectedAxis": "X_AXIS",
          "basedOn": "ELEMENT",
          "reverse": false,
          "smoothing": 93,
          "restingState": 50
        }, {
          "continuousParameterGroupId": "a-33-p-2",
          "selectedAxis": "Y_AXIS",
          "basedOn": "ELEMENT",
          "reverse": false,
          "smoothing": 93,
          "restingState": 50
        }],
        "createdOn": 1653290974783
      },
      "e-133": {
        "id": "e-133",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_MOVE",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {"actionListId": "a-32", "affectedElements": {}, "duration": 0}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": [{
          "continuousParameterGroupId": "a-32-p",
          "selectedAxis": "X_AXIS",
          "basedOn": "ELEMENT",
          "reverse": false,
          "smoothing": 93,
          "restingState": 50
        }, {
          "continuousParameterGroupId": "a-32-p-2",
          "selectedAxis": "Y_AXIS",
          "basedOn": "ELEMENT",
          "reverse": false,
          "smoothing": 93,
          "restingState": 50
        }],
        "createdOn": 1653293418973
      },
      "e-134": {
        "id": "e-134",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-34",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-135"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": true,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653293690461
      },
      "e-136": {
        "id": "e-136",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_MOVE",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
          "config": {"actionListId": "a-35", "affectedElements": {}, "duration": 0}
        },
        "mediaQueries": ["main"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": [{
          "continuousParameterGroupId": "a-35-p",
          "selectedAxis": "X_AXIS",
          "basedOn": "ELEMENT",
          "reverse": false,
          "smoothing": 93,
          "restingState": 50
        }, {
          "continuousParameterGroupId": "a-35-p-2",
          "selectedAxis": "Y_AXIS",
          "basedOn": "ELEMENT",
          "reverse": false,
          "smoothing": 93,
          "restingState": 50
        }],
        "createdOn": 1653293711417
      },
      "e-137": {
        "id": "e-137",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-30",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-138"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".project-big",
          "originalId": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "CLASS"
        },
        "targets": [{
          "selector": ".project-big",
          "originalId": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "CLASS"
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653660556145
      },
      "e-138": {
        "id": "e-138",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-31",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-137"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".project-big",
          "originalId": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "CLASS"
        },
        "targets": [{
          "selector": ".project-big",
          "originalId": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "CLASS"
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653660556173
      },
      "e-139": {
        "id": "e-139",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-30",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-140"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".project-mid",
          "originalId": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "CLASS"
        },
        "targets": [{
          "selector": ".project-mid",
          "originalId": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "CLASS"
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653660872737
      },
      "e-140": {
        "id": "e-140",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-31",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-139"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".project-mid",
          "originalId": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "CLASS"
        },
        "targets": [{
          "selector": ".project-mid",
          "originalId": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "CLASS"
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653660872738
      },
      "e-141": {
        "id": "e-141",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-36",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-142"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653663256679
      },
      "e-142": {
        "id": "e-142",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-37",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-141"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|0975d353-a596-56e6-b59b-d7ee0f9b0636",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653663256679
      },
      "e-143": {
        "id": "e-143",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-36",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-144"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|b32b9360-bbd6-dee2-0d36-1999a539a13e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|b32b9360-bbd6-dee2-0d36-1999a539a13e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653663749322
      },
      "e-144": {
        "id": "e-144",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-37",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-143"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|b32b9360-bbd6-dee2-0d36-1999a539a13e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|b32b9360-bbd6-dee2-0d36-1999a539a13e",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653663749323
      },
      "e-145": {
        "id": "e-145",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OVER",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-38",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-146"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".project-mid",
          "originalId": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "CLASS"
        },
        "targets": [{
          "selector": ".project-mid",
          "originalId": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "CLASS"
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653663987085
      },
      "e-146": {
        "id": "e-146",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "MOUSE_OUT",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-39",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-145"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "selector": ".project-mid",
          "originalId": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "CLASS"
        },
        "targets": [{
          "selector": ".project-mid",
          "originalId": "62622ac9404b8d5e17b40996|55eb1fc9-5dd2-c08d-1d7d-f9e6a7abced3",
          "appliesTo": "CLASS"
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": null,
          "scrollOffsetUnit": null,
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653663987086
      },
      "e-147": {
        "id": "e-147",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-8",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-148"
          }
        },
        "mediaQueries": ["main", "medium", "small"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d94295065",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d94295065",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653816864795
      },
      "e-149": {
        "id": "e-149",
        "name": "",
        "animationType": "custom",
        "eventTypeId": "SCROLL_INTO_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "GENERAL_START_ACTION",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "actionListId": "a-40",
            "affectedElements": {},
            "playInReverse": false,
            "autoStopEventId": "e-150"
          }
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cae",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 50,
          "scrollOffsetUnit": "%",
          "delay": null,
          "direction": null,
          "effectIn": null
        },
        "createdOn": 1653821660506
      },
      "e-152": {
        "id": "e-152",
        "name": "",
        "animationType": "preset",
        "eventTypeId": "SCROLL_OUT_OF_VIEW",
        "action": {
          "id": "",
          "actionTypeId": "FADE_EFFECT",
          "instant": false,
          "config": {"actionListId": "fadeOut", "autoStopEventId": "e-151"}
        },
        "mediaQueries": ["main", "medium", "small", "tiny"],
        "target": {
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cdb",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        },
        "targets": [{
          "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cdb",
          "appliesTo": "ELEMENT",
          "styleBlockIds": []
        }],
        "config": {
          "loop": false,
          "playInReverse": false,
          "scrollOffsetValue": 0,
          "scrollOffsetUnit": "%",
          "delay": 0,
          "direction": null,
          "effectIn": false
        },
        "createdOn": 1654048874290
      }
    },
    "actionLists": {
      "a-2": {
        "id": "a-2", "title": "roto-scroll", "continuousParameterGroups": [{
          "id": "a-2-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{
            "keyframe": 12.5,
            "actionItems": [{
              "id": "a-2-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".roto-frame",
                  "selectorGuids": ["7d5f0474-3bd6-eb88-781a-db462c0c6e4b"]
                },
                "xValue": 0,
                "xUnit": "vw",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-27",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45dbe"
                },
                "xValue": 20,
                "yValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-28",
              "actionTypeId": "TRANSFORM_ROTATE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45dbe"
                },
                "xValue": null,
                "zValue": -30,
                "xUnit": "deg",
                "yUnit": "DEG",
                "zUnit": "deg"
              }
            }, {
              "id": "a-2-n-31",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db5"
                },
                "xValue": -20,
                "yValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-32",
              "actionTypeId": "TRANSFORM_ROTATE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db5"
                },
                "xValue": null,
                "yValue": 180,
                "zValue": -30,
                "xUnit": "deg",
                "yUnit": "deg",
                "zUnit": "deg"
              }
            }]
          }, {
            "keyframe": 30,
            "actionItems": [{
              "id": "a-2-n-11",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d80"
                },
                "yValue": 10,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-12",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d80"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-2-n-15",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d4c"
                },
                "yValue": 10,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-16",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d4c"
                },
                "value": 0,
                "unit": ""
              }
            }]
          }, {
            "keyframe": 40,
            "actionItems": [{
              "id": "a-2-n-23",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ce4"
                },
                "yValue": 10,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-24",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ce4"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-2-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".roto-frame",
                  "selectorGuids": ["7d5f0474-3bd6-eb88-781a-db462c0c6e4b"]
                },
                "xValue": -100,
                "xUnit": "vw",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-19",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d18"
                },
                "yValue": 10,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-20",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d18"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-2-n-35",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db5"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-2-n-37",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45dbe"
                },
                "value": 0,
                "unit": ""
              }
            }]
          }, {
            "keyframe": 47,
            "actionItems": [{
              "id": "a-2-n-13",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d80"
                },
                "yValue": 0,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-14",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d80"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-2-n-17",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d4c"
                },
                "yValue": 0,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-18",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d4c"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-2-n-21",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d18"
                },
                "yValue": 0,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-22",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45d18"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-2-n-25",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ce4"
                },
                "yValue": 0,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-26",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ce4"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-2-n-29",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45dbe"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-30",
              "actionTypeId": "TRANSFORM_ROTATE",
              "config": {
                "delay": 0,
                "easing": "inOutQuint",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45dbe"
                },
                "zValue": 0,
                "xUnit": "DEG",
                "yUnit": "DEG",
                "zUnit": "deg"
              }
            }, {
              "id": "a-2-n-33",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db5"
                },
                "xValue": 0,
                "yValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }, {
              "id": "a-2-n-34",
              "actionTypeId": "TRANSFORM_ROTATE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db5"
                },
                "xValue": null,
                "yValue": 180,
                "zValue": 0,
                "xUnit": "deg",
                "yUnit": "deg",
                "zUnit": "deg"
              }
            }, {
              "id": "a-2-n-36",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db5"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-2-n-38",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45dbe"
                },
                "value": 1,
                "unit": ""
              }
            }]
          }]
        }], "createdOn": 1652154457407
      },
      "a-3": {
        "id": "a-3", "title": "hori-scroll", "continuousParameterGroups": [{
          "id": "a-3-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-3-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".hori-frame",
                  "selectorGuids": ["40330966-4cd1-c0a3-c400-6392b3a3aca4"]
                },
                "xValue": 0,
                "xUnit": "vw",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-3",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d9429506d"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-5",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|ad105393-5ffe-8c98-3a52-0493fda6bdd9"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-23",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|bc3353c4-90c2-c114-c8d3-99103e743fc9"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 12,
            "actionItems": [{
              "id": "a-3-n-4",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d9429506d"
                },
                "xValue": 10,
                "yValue": null,
                "zValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "px"
              }
            }, {
              "id": "a-3-n-6",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|ad105393-5ffe-8c98-3a52-0493fda6bdd9"
                },
                "xValue": 10,
                "yValue": null,
                "zValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "px"
              }
            }, {
              "id": "a-3-n-7",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|c169a228-c564-8826-24fe-b6a38090c744"
                },
                "xValue": -10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-8",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|c169a228-c564-8826-24fe-b6a38090c746"
                },
                "xValue": -10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-27",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|bc3353c4-90c2-c114-c8d3-99103e743fc9"
                },
                "xValue": -10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-28",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|ed9f9040-7b83-3bc0-52bb-77b5528bd053"
                },
                "xValue": 10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 34,
            "actionItems": [{
              "id": "a-3-n-11",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|a4559ec0-63d2-e31b-6b42-f3f9d391285a"
                },
                "xValue": -10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-12",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|a4559ec0-63d2-e31b-6b42-f3f9d391285c"
                },
                "xValue": -10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-9",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|c169a228-c564-8826-24fe-b6a38090c744"
                },
                "xValue": 10,
                "yValue": null,
                "zValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "px"
              }
            }, {
              "id": "a-3-n-10",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|c169a228-c564-8826-24fe-b6a38090c746"
                },
                "xValue": 10,
                "yValue": null,
                "zValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "px"
              }
            }, {
              "id": "a-3-n-29",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|ed9f9040-7b83-3bc0-52bb-77b5528bd053"
                },
                "xValue": -10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-30",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|9c5adab5-d044-19fc-4ea0-7947ef3d2da4"
                },
                "xValue": 10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 50,
            "actionItems": [{
              "id": "a-3-n-15",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|37a24d7e-83e2-55fc-2f18-f3570a769efc"
                },
                "xValue": -10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-16",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|37a24d7e-83e2-55fc-2f18-f3570a769efe"
                },
                "xValue": -10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 57,
            "actionItems": [{
              "id": "a-3-n-13",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|a4559ec0-63d2-e31b-6b42-f3f9d391285a"
                },
                "xValue": 10,
                "yValue": null,
                "zValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "px"
              }
            }, {
              "id": "a-3-n-14",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|a4559ec0-63d2-e31b-6b42-f3f9d391285c"
                },
                "xValue": 10,
                "yValue": null,
                "zValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "px"
              }
            }, {
              "id": "a-3-n-32",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|bc829af7-37d3-25c3-5d03-1b2982c9bf52"
                },
                "xValue": 10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-31",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|9c5adab5-d044-19fc-4ea0-7947ef3d2da4"
                },
                "xValue": -10,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 70,
            "actionItems": [{
              "id": "a-3-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".hori-frame",
                  "selectorGuids": ["40330966-4cd1-c0a3-c400-6392b3a3aca4"]
                },
                "xValue": -300,
                "xUnit": "vw",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-3-n-17",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|37a24d7e-83e2-55fc-2f18-f3570a769efc"
                },
                "xValue": 0,
                "yValue": null,
                "zValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "px"
              }
            }, {
              "id": "a-3-n-18",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|37a24d7e-83e2-55fc-2f18-f3570a769efe"
                },
                "xValue": 0,
                "yValue": null,
                "zValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "px"
              }
            }, {
              "id": "a-3-n-33",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|bc829af7-37d3-25c3-5d03-1b2982c9bf52"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }]
        }], "createdOn": 1652156510178
      },
      "a": {
        "id": "a", "title": "hero - scroll", "continuousParameterGroups": [{
          "id": "a-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{
            "keyframe": 36,
            "actionItems": [{
              "id": "a-n-3",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|a529d52d-a5a9-11a0-1792-b7e37802da2c"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|75806a86-7f38-1661-e98b-56e5993da169"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-n-5",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|cebdc53b-2491-6100-25f2-d2cafcec59e0"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-n-7",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|75806a86-7f38-1661-e98b-56e5993da169"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-n-10",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|a529d52d-a5a9-11a0-1792-b7e37802da2c"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-n-11",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|cebdc53b-2491-6100-25f2-d2cafcec59e0"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-n-13",
              "actionTypeId": "TRANSFORM_SCALE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".about-door-cont",
                  "selectorGuids": ["dd5e9e53-a22e-b13f-97ed-259c2a04b230"]
                },
                "xValue": 1,
                "yValue": 1,
                "locked": true
              }
            }, {
              "id": "a-n-18",
              "actionTypeId": "TRANSFORM_SCALE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".blob-wrap",
                  "selectorGuids": ["b7a15fb8-1cdd-ea93-531d-d15fe9ed165a"]
                },
                "xValue": 1,
                "yValue": 1,
                "locked": true
              }
            }, {
              "id": "a-n-20",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".blob-wrap",
                  "selectorGuids": ["b7a15fb8-1cdd-ea93-531d-d15fe9ed165a"]
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-n-22",
              "actionTypeId": "TRANSFORM_ROTATE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|8a7e4ad8-aff4-c999-97c4-98f1b09b154e"
                },
                "xValue": null,
                "yValue": 0,
                "xUnit": "deg",
                "yUnit": "deg",
                "zUnit": "DEG"
              }
            }, {
              "id": "a-n-24",
              "actionTypeId": "TRANSFORM_ROTATE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|b7c03165-ba3b-2233-0ee8-25e903ed3c0c"
                },
                "yValue": 0,
                "xUnit": "DEG",
                "yUnit": "deg",
                "zUnit": "DEG"
              }
            }, {
              "id": "a-n-28",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".hero-ptext-wrap",
                  "selectorGuids": ["e7723a03-9f98-898b-abc5-bb095839504e"]
                },
                "value": 1,
                "unit": ""
              }
            }]
          }, {
            "keyframe": 47,
            "actionItems": [{
              "id": "a-n-8",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|75806a86-7f38-1661-e98b-56e5993da169"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-n-9",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|a529d52d-a5a9-11a0-1792-b7e37802da2c"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-n-12",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|cebdc53b-2491-6100-25f2-d2cafcec59e0"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-n-14",
              "actionTypeId": "TRANSFORM_SCALE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".about-door-cont",
                  "selectorGuids": ["dd5e9e53-a22e-b13f-97ed-259c2a04b230"]
                },
                "xValue": 4,
                "yValue": 4,
                "locked": true
              }
            }, {
              "id": "a-n-19",
              "actionTypeId": "TRANSFORM_SCALE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".blob-wrap",
                  "selectorGuids": ["b7a15fb8-1cdd-ea93-531d-d15fe9ed165a"]
                },
                "xValue": 4,
                "yValue": 4,
                "locked": true
              }
            }, {
              "id": "a-n-21",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".blob-wrap",
                  "selectorGuids": ["b7a15fb8-1cdd-ea93-531d-d15fe9ed165a"]
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-n-26",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".about-door-wrap", "selectorGuids": ["106b6f94-9ae1-0e6b-e328-61899ca9e970"]},
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-n-29",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".hero-ptext-wrap",
                  "selectorGuids": ["e7723a03-9f98-898b-abc5-bb095839504e"]
                },
                "value": 0,
                "unit": ""
              }
            }]
          }, {
            "keyframe": 53,
            "actionItems": [{
              "id": "a-n-23",
              "actionTypeId": "TRANSFORM_ROTATE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|8a7e4ad8-aff4-c999-97c4-98f1b09b154e"
                },
                "yValue": 90,
                "xUnit": "DEG",
                "yUnit": "deg",
                "zUnit": "DEG"
              }
            }, {
              "id": "a-n-25",
              "actionTypeId": "TRANSFORM_ROTATE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|b7c03165-ba3b-2233-0ee8-25e903ed3c0c"
                },
                "yValue": -90,
                "xUnit": "DEG",
                "yUnit": "deg",
                "zUnit": "DEG"
              }
            }, {
              "id": "a-n-27",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".about-door-wrap", "selectorGuids": ["106b6f94-9ae1-0e6b-e328-61899ca9e970"]},
                "value": 1,
                "unit": ""
              }
            }]
          }, {
            "keyframe": 57,
            "actionItems": [{
              "id": "a-n-15",
              "actionTypeId": "TRANSFORM_SCALE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "selector": ".about-door-cont",
                  "selectorGuids": ["dd5e9e53-a22e-b13f-97ed-259c2a04b230"]
                },
                "xValue": 30,
                "yValue": 30,
                "locked": true
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|75806a86-7f38-1661-e98b-56e5993da169"
                },
                "xValue": 60,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-n-4",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|a529d52d-a5a9-11a0-1792-b7e37802da2c"
                },
                "xValue": -60,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-n-6",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|cebdc53b-2491-6100-25f2-d2cafcec59e0"
                },
                "xValue": 60,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }]
        }], "createdOn": 1651556906151
      },
      "a-4": {
        "id": "a-4", "title": "load - preloader", "actionItemGroups": [{
          "actionItems": [{
            "id": "a-4-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|d4f3514b-82ae-749d-8401-33fc7afaa113"},
              "yValue": 11,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-4-n-11",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|7ef970a0-2840-87bb-cd47-f6766497c075"},
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "vh",
              "zUnit": "PX"
            }
          }, {
            "id": "a-4-n-7",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|4226a255-2f48-1e17-b916-d6fafc0b2c16"},
              "heightValue": 0,
              "widthUnit": "PX",
              "heightUnit": "px",
              "locked": false
            }
          }, {
            "id": "a-4-n-5",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|015ea9c1-0938-ffee-2e3c-ba9267894c9b"},
              "heightValue": 6.3,
              "widthUnit": "PX",
              "heightUnit": "em",
              "locked": false
            }
          }, {
            "id": "a-4-n-9",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|2c1644c4-64c0-f8ad-c6a7-f66c98837b77"},
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-4-n-8",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 1000,
              "easing": "outQuint",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|4226a255-2f48-1e17-b916-d6fafc0b2c16"},
              "heightValue": 10.2,
              "widthUnit": "PX",
              "heightUnit": "em",
              "locked": false
            }
          }, {
            "id": "a-4-n-4",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 1000,
              "easing": "outQuint",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|d4f3514b-82ae-749d-8401-33fc7afaa113"},
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-4-n-10",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 1000,
              "easing": "",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|2c1644c4-64c0-f8ad-c6a7-f66c98837b77"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-4-n-6",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 1000,
              "easing": "outQuint",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|015ea9c1-0938-ffee-2e3c-ba9267894c9b"},
              "heightValue": 16.6,
              "widthUnit": "PX",
              "heightUnit": "em",
              "locked": false
            }
          }, {
            "id": "a-4-n-12",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 2000,
              "easing": "outQuint",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|7ef970a0-2840-87bb-cd47-f6766497c075"},
              "yValue": -156,
              "xUnit": "PX",
              "yUnit": "vh",
              "zUnit": "PX"
            }
          }]
        }], "useFirstGroupAsInitialState": true, "createdOn": 1652503441532
      },
      "a-5": {
        "id": "a-5", "title": "load - hero", "actionItemGroups": [{
          "actionItems": [{
            "id": "a-5-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|c7b363a2-f902-c381-9303-ae87295fe833"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-41",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|7a5c32c3-37c1-8ac2-b606-150f25d4d491"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-39",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|55d9fc3e-d7bd-1ade-d48f-1abf4a183a61"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-36",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|7ac37bef-ec1d-301d-02a7-7d5340bec9e5"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-35",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|7ac37bef-ec1d-301d-02a7-7d5340bec9e5"},
              "yValue": 4,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-5-n-11",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|b52b1dc1-a3ac-cfd4-4729-2e74c600352e"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-9",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|b52b1dc1-a3ac-cfd4-4729-2e74c600352e"},
              "xValue": -92,
              "xUnit": "deg",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-5",
            "actionTypeId": "TRANSFORM_SKEW",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|b52b1dc1-a3ac-cfd4-4729-2e74c600352e"},
              "xValue": 3,
              "yValue": -12,
              "xUnit": "deg",
              "yUnit": "deg",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|b52b1dc1-a3ac-cfd4-4729-2e74c600352e"},
              "yValue": 70,
              "zValue": -90,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "px"
            }
          }, {
            "id": "a-5-n-16",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|af6a7cac-86e4-e966-4a1a-367afe7a0faa"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-15",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|af6a7cac-86e4-e966-4a1a-367afe7a0faa"},
              "xValue": -92,
              "xUnit": "deg",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-14",
            "actionTypeId": "TRANSFORM_SKEW",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|af6a7cac-86e4-e966-4a1a-367afe7a0faa"},
              "xValue": 3,
              "yValue": -12,
              "xUnit": "deg",
              "yUnit": "deg",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-13",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|af6a7cac-86e4-e966-4a1a-367afe7a0faa"},
              "yValue": 70,
              "zValue": -90,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "px"
            }
          }, {
            "id": "a-5-n-21",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|b236c527-e90b-6a94-2c56-fc4500060f62"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-24",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|b236c527-e90b-6a94-2c56-fc4500060f62"},
              "yValue": 70,
              "zValue": -90,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "px"
            }
          }, {
            "id": "a-5-n-23",
            "actionTypeId": "TRANSFORM_SKEW",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|b236c527-e90b-6a94-2c56-fc4500060f62"},
              "xValue": 3,
              "yValue": -12,
              "xUnit": "deg",
              "yUnit": "deg",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-22",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|b236c527-e90b-6a94-2c56-fc4500060f62"},
              "xValue": -92,
              "xUnit": "deg",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-30",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 800,
              "target": {"selector": ".daimond-wrap", "selectorGuids": ["5338b3d6-849e-f604-773f-19eec85c7e20"]},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-33",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|947d7d38-3822-6ae7-be3c-b967ffa5e6e6"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-34",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|17470360-9357-dbe0-ee8a-a1fb5e27d212"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-43",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|93a1340f-6f5a-ef95-45d0-2b2af75c84f7"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-44",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|93a1340f-6f5a-ef95-45d0-2b2af75c84f7"},
              "yValue": 4,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-5-n-47",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|10012c75-48d4-fd9c-ddb0-5638f91c32c6"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-5-n-48",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|10012c75-48d4-fd9c-ddb0-5638f91c32c6"},
              "yValue": 4,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-5-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 2500,
              "easing": "ease",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|c7b363a2-f902-c381-9303-ae87295fe833"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-6",
            "actionTypeId": "TRANSFORM_SKEW",
            "config": {
              "delay": 2900,
              "easing": "outQuint",
              "duration": 1500,
              "target": {"id": "62622ac9404b8d5e17b40996|b52b1dc1-a3ac-cfd4-4729-2e74c600352e"},
              "xValue": 0,
              "yValue": 0,
              "xUnit": "deg",
              "yUnit": "deg",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-12",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 2900,
              "easing": "ease",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|b52b1dc1-a3ac-cfd4-4729-2e74c600352e"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-10",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 2900,
              "easing": "outQuint",
              "duration": 1400,
              "target": {"id": "62622ac9404b8d5e17b40996|b52b1dc1-a3ac-cfd4-4729-2e74c600352e"},
              "xValue": 0,
              "xUnit": "deg",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 2900,
              "easing": "outQuint",
              "duration": 1500,
              "target": {"id": "62622ac9404b8d5e17b40996|b52b1dc1-a3ac-cfd4-4729-2e74c600352e"},
              "yValue": 0,
              "zValue": 0,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "px"
            }
          }, {
            "id": "a-5-n-17",
            "actionTypeId": "TRANSFORM_SKEW",
            "config": {
              "delay": 3100,
              "easing": "outQuint",
              "duration": 1500,
              "target": {"id": "62622ac9404b8d5e17b40996|af6a7cac-86e4-e966-4a1a-367afe7a0faa"},
              "xValue": 0,
              "yValue": 0,
              "xUnit": "deg",
              "yUnit": "deg",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-20",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 3100,
              "easing": "outQuint",
              "duration": 1500,
              "target": {"id": "62622ac9404b8d5e17b40996|af6a7cac-86e4-e966-4a1a-367afe7a0faa"},
              "yValue": 0,
              "zValue": 0,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "px"
            }
          }, {
            "id": "a-5-n-19",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 3100,
              "easing": "outQuint",
              "duration": 1400,
              "target": {"id": "62622ac9404b8d5e17b40996|af6a7cac-86e4-e966-4a1a-367afe7a0faa"},
              "xValue": 0,
              "xUnit": "deg",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-18",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 3100,
              "easing": "ease",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|af6a7cac-86e4-e966-4a1a-367afe7a0faa"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-25",
            "actionTypeId": "TRANSFORM_SKEW",
            "config": {
              "delay": 3300,
              "easing": "outQuint",
              "duration": 1500,
              "target": {"id": "62622ac9404b8d5e17b40996|b236c527-e90b-6a94-2c56-fc4500060f62"},
              "xValue": 0,
              "yValue": 0,
              "xUnit": "deg",
              "yUnit": "deg",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-28",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 3300,
              "easing": "ease",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|b236c527-e90b-6a94-2c56-fc4500060f62"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-27",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 3300,
              "easing": "outQuint",
              "duration": 1400,
              "target": {"id": "62622ac9404b8d5e17b40996|b236c527-e90b-6a94-2c56-fc4500060f62"},
              "xValue": 0,
              "xUnit": "deg",
              "yUnit": "DEG",
              "zUnit": "DEG"
            }
          }, {
            "id": "a-5-n-26",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 3300,
              "easing": "outQuint",
              "duration": 1500,
              "target": {"id": "62622ac9404b8d5e17b40996|b236c527-e90b-6a94-2c56-fc4500060f62"},
              "yValue": 0,
              "zValue": 0,
              "xUnit": "PX",
              "yUnit": "px",
              "zUnit": "px"
            }
          }, {
            "id": "a-5-n-29",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 3900,
              "easing": "ease",
              "duration": 1000,
              "target": {"selector": ".daimond-wrap", "selectorGuids": ["5338b3d6-849e-f604-773f-19eec85c7e20"]},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-31",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 3900,
              "easing": "ease",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|947d7d38-3822-6ae7-be3c-b967ffa5e6e6"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-32",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 3900,
              "easing": "ease",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|17470360-9357-dbe0-ee8a-a1fb5e27d212"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-38",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 4500,
              "easing": "ease",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|7ac37bef-ec1d-301d-02a7-7d5340bec9e5"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-37",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 4500,
              "easing": "outQuint",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|7ac37bef-ec1d-301d-02a7-7d5340bec9e5"},
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-5-n-40",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 4500,
              "easing": "ease",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|55d9fc3e-d7bd-1ade-d48f-1abf4a183a61"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-42",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 4500,
              "easing": "ease",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|7a5c32c3-37c1-8ac2-b606-150f25d4d491"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-45",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 4500,
              "easing": "ease",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|93a1340f-6f5a-ef95-45d0-2b2af75c84f7"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-46",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 4500,
              "easing": "outQuint",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|93a1340f-6f5a-ef95-45d0-2b2af75c84f7"},
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-5-n-49",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 4500,
              "easing": "ease",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|10012c75-48d4-fd9c-ddb0-5638f91c32c6"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-5-n-50",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 4500,
              "easing": "outQuint",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|10012c75-48d4-fd9c-ddb0-5638f91c32c6"},
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }]
        }], "useFirstGroupAsInitialState": true, "createdOn": 1652512681064
      },
      "a-7": {
        "id": "a-7", "title": "SIV - skill - 1", "actionItemGroups": [{
          "actionItems": [{
            "id": "a-7-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".skill-heading-wrap",
                "selectorGuids": ["d9e6c2ba-331f-e9f4-19f6-aeed75ba7273"]
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-7-n-9",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".keeps-wrap",
                "selectorGuids": ["c5b8680b-36c9-73b3-f09e-62fe5092ed33"]
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-7-n-8",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".skill-rock",
                "selectorGuids": ["a6c02664-26b9-f53e-3c8b-0627140fef7f"]
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-7-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".sphere-text",
                "selectorGuids": ["d871f695-8266-fdda-5147-f4d891bf0268"]
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-7-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".skill-clouds",
                "selectorGuids": ["a8f0362c-d3bb-13e0-fcab-1524ba9e9c30"]
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-7-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".skill-sun",
                "selectorGuids": ["835ee525-41ee-d048-2c2c-9b97dafe5a85"]
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-7-n-10",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".skill-heading-wrap",
                "selectorGuids": ["d9e6c2ba-331f-e9f4-19f6-aeed75ba7273"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-7-n-11",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".skill-clouds",
                "selectorGuids": ["a8f0362c-d3bb-13e0-fcab-1524ba9e9c30"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-7-n-12",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".skill-sun",
                "selectorGuids": ["835ee525-41ee-d048-2c2c-9b97dafe5a85"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-7-n-14",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".sphere-text",
                "selectorGuids": ["d871f695-8266-fdda-5147-f4d891bf0268"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-7-n-16",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".skill-rock",
                "selectorGuids": ["a6c02664-26b9-f53e-3c8b-0627140fef7f"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-7-n-17",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".keeps-wrap",
                "selectorGuids": ["c5b8680b-36c9-73b3-f09e-62fe5092ed33"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }], "useFirstGroupAsInitialState": true, "createdOn": 1652586966443
      },
      "a-10": {
        "id": "a-10",
        "title": "SIV - terms",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-10-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|bbbae40e-4f71-23ac-50d0-06e894541ad0"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-10-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|0cda32bf-b0ba-c2d6-9c70-f04c924ffca8"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-10-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|d6005567-b7a1-905b-d101-9aa134cb6873"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-10-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|bbbae40e-4f71-23ac-50d0-06e894541ad0"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-10-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|0cda32bf-b0ba-c2d6-9c70-f04c924ffca8"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-10-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|d6005567-b7a1-905b-d101-9aa134cb6873"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1652669483353
      },
      "a-12": {
        "id": "a-12", "title": "SVI - contact", "actionItemGroups": [{
          "actionItems": [{
            "id": "a-12-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|c402173a-d886-5598-c7af-aff5830891b5"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-12-n-22",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".contact-cta",
                "selectorGuids": ["d82fef15-f939-b6e0-4696-c1a5ca66fd8d"]
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-12-n-10",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|48e39bc9-b520-f481-2f8b-a04db38d30dc"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-12-n-9",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-12-n-7",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|34737ede-e58b-5046-a2ef-0cb04fd02a80"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-12-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|19c26ebe-5a66-2e61-b69a-fd9fb7479bc0"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-12-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|34863106-7361-0dd4-a887-321fc98243dc"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-12-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|3da67824-5291-591f-d813-fbc586bcf84c"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-12-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|caf0eef7-cc87-4c80-b857-d20340460332"},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-12-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|81779f71-e2b2-bc75-e80e-193b98ed237d"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-12-n-11",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|c402173a-d886-5598-c7af-aff5830891b5"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-12-n-12",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|81779f71-e2b2-bc75-e80e-193b98ed237d"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-12-n-13",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|34863106-7361-0dd4-a887-321fc98243dc"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-12-n-14",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|3da67824-5291-591f-d813-fbc586bcf84c"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-12-n-24",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|34737ede-e58b-5046-a2ef-0cb04fd02a80"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-12-n-15",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "easeOut",
              "duration": 1000,
              "target": {"id": "62622ac9404b8d5e17b40996|caf0eef7-cc87-4c80-b857-d20340460332"},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-12-n-16",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 300,
              "easing": "easeOut",
              "duration": 1000,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|19c26ebe-5a66-2e61-b69a-fd9fb7479bc0"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-12-n-23",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 400,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".contact-cta",
                "selectorGuids": ["d82fef15-f939-b6e0-4696-c1a5ca66fd8d"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-12-n-18",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|48e39bc9-b520-f481-2f8b-a04db38d30dc"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-12-n-19",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }], "useFirstGroupAsInitialState": true, "createdOn": 1652670403869
      },
      "a-13": {
        "id": "a-13", "title": "scroll - quote", "continuousParameterGroups": [{
          "id": "a-13-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-13-n",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|bee52259-7a77-90d6-da91-c9e16400848b"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-13-n-3",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|bee52259-7a77-90d6-da91-c9e16400848b"
                },
                "xValue": -8,
                "yValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-5",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|e883ad28-d425-8f2e-bc1e-07738634eb93"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-13-n-7",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|e883ad28-d425-8f2e-bc1e-07738634eb93"
                },
                "xValue": 8,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-9",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|8bb07c29-8177-784a-751d-fb893be7df81"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-13-n-10",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|8bb07c29-8177-784a-751d-fb893be7df81"
                },
                "xValue": -12,
                "yValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-13",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|eedb4be2-1469-6bc2-bb16-3e2166ef56ec"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-13-n-14",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|eedb4be2-1469-6bc2-bb16-3e2166ef56ec"
                },
                "xValue": 12,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-17",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|6c10123d-8714-357a-edf0-6a042fa09fb5"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-13-n-18",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|6c10123d-8714-357a-edf0-6a042fa09fb5"
                },
                "xValue": -15,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-21",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|c0ea47b1-5521-6bb8-c863-cd5cfda888ec"
                },
                "xValue": -8,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-22",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|c0ea47b1-5521-6bb8-c863-cd5cfda888ec"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-13-n-25",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|dd5d0474-5cee-742a-ba58-b6079e839f44"
                },
                "xValue": 8,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-27",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|dd5d0474-5cee-742a-ba58-b6079e839f44"
                },
                "value": 0,
                "unit": ""
              }
            }, {
              "id": "a-13-n-29",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|d950558d-f870-6ee7-91b1-62f1b168a4de"
                },
                "xValue": 15,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-32",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|d950558d-f870-6ee7-91b1-62f1b168a4de"
                },
                "value": 0,
                "unit": ""
              }
            }]
          }, {
            "keyframe": 28,
            "actionItems": [{
              "id": "a-13-n-2",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|bee52259-7a77-90d6-da91-c9e16400848b"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-13-n-4",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|bee52259-7a77-90d6-da91-c9e16400848b"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-15",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|e883ad28-d425-8f2e-bc1e-07738634eb93"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-13-n-16",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|e883ad28-d425-8f2e-bc1e-07738634eb93"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 39,
            "actionItems": [{
              "id": "a-13-n-6",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|eedb4be2-1469-6bc2-bb16-3e2166ef56ec"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-13-n-8",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|eedb4be2-1469-6bc2-bb16-3e2166ef56ec"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-11",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|8bb07c29-8177-784a-751d-fb893be7df81"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-13-n-12",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|8bb07c29-8177-784a-751d-fb893be7df81"
                },
                "xValue": 0,
                "yValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 48,
            "actionItems": [{
              "id": "a-13-n-19",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|6c10123d-8714-357a-edf0-6a042fa09fb5"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-20",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|6c10123d-8714-357a-edf0-6a042fa09fb5"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-13-n-23",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|c0ea47b1-5521-6bb8-c863-cd5cfda888ec"
                },
                "xValue": 0,
                "yValue": null,
                "xUnit": "em",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-24",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|c0ea47b1-5521-6bb8-c863-cd5cfda888ec"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-13-n-26",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|dd5d0474-5cee-742a-ba58-b6079e839f44"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-28",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|dd5d0474-5cee-742a-ba58-b6079e839f44"
                },
                "value": 1,
                "unit": ""
              }
            }, {
              "id": "a-13-n-30",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "easeOut",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|d950558d-f870-6ee7-91b1-62f1b168a4de"
                },
                "xValue": 0,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-13-n-31",
              "actionTypeId": "STYLE_OPACITY",
              "config": {
                "delay": 0,
                "easing": "ease",
                "duration": 500,
                "target": {
                  "useEventTarget": "CHILDREN",
                  "id": "62622ac9404b8d5e17b40996|d950558d-f870-6ee7-91b1-62f1b168a4de"
                },
                "value": 1,
                "unit": ""
              }
            }]
          }]
        }], "createdOn": 1652682575794
      },
      "a-14": {
        "id": "a-14",
        "title": "loop - hire",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-14-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|3e409926-eac5-257d-e39d-778217b670f5"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-14-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 5000,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|3e409926-eac5-257d-e39d-778217b670f5"
              },
              "xValue": -16.4,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-14-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|3e409926-eac5-257d-e39d-778217b670f5"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1652696141102
      },
      "a-15": {
        "id": "a-15",
        "title": "loop - keep scrolling",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-15-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db8"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-15-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 5000,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db8"
              },
              "xValue": -12.3,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-15-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45db8"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1652696758550
      },
      "a-16": {
        "id": "a-16",
        "title": "loop - herow",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-16-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|e56a1efb-89ae-b544-6668-7e50d519a26a"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-16-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "inOutQuint",
              "duration": 3000,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|e56a1efb-89ae-b544-6668-7e50d519a26a"
              },
              "xValue": -27.4,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-16-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|e56a1efb-89ae-b544-6668-7e50d519a26a"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1652697599264
      },
      "a-17": {
        "id": "a-17",
        "title": "circ - emoji star",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-17-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cca"},
              "xValue": null,
              "yValue": null,
              "zValue": 0,
              "xUnit": "deg",
              "yUnit": "deg",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-17-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 6000,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cca"},
              "zValue": 1080,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-17-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cca"},
              "zValue": 0,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1652765862214
      },
      "a-18": {
        "id": "a-18",
        "title": "circ - emoji smiley",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-18-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ccd"},
              "xValue": null,
              "yValue": null,
              "zValue": 0,
              "xUnit": "deg",
              "yUnit": "deg",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-18-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 6000,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ccd"},
              "zValue": 1080,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-18-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ccd"},
              "zValue": 0,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1652765862214
      },
      "a-20": {
        "id": "a-20",
        "title": "loop - terms",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-20-n",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|bbbae40e-4f71-23ac-50d0-06e894541ad0"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-20-n-7",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|d6005567-b7a1-905b-d101-9aa134cb6873"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-20-n-4",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|0cda32bf-b0ba-c2d6-9c70-f04c924ffca8"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-20-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 15000,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|bbbae40e-4f71-23ac-50d0-06e894541ad0"
              },
              "xValue": -136.7,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-20-n-5",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 15000,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|0cda32bf-b0ba-c2d6-9c70-f04c924ffca8"
              },
              "xValue": -200.8,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-20-n-8",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 15000,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|d6005567-b7a1-905b-d101-9aa134cb6873"
              },
              "xValue": -262,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-20-n-9",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|d6005567-b7a1-905b-d101-9aa134cb6873"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-20-n-6",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|0cda32bf-b0ba-c2d6-9c70-f04c924ffca8"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }, {
            "id": "a-20-n-3",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|bbbae40e-4f71-23ac-50d0-06e894541ad0"
              },
              "xValue": 0,
              "xUnit": "em",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1652768808137
      },
      "a-21": {
        "id": "a-21",
        "title": "loop - sphere",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-21-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".sphere-img",
                "selectorGuids": ["75754ae6-1aba-2524-4496-bd74f450f819"]
              },
              "zValue": 0,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-21-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 4000,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".sphere-img",
                "selectorGuids": ["75754ae6-1aba-2524-4496-bd74f450f819"]
              },
              "zValue": 360,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-21-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".sphere-img",
                "selectorGuids": ["75754ae6-1aba-2524-4496-bd74f450f819"]
              },
              "zValue": 0,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1652780164946
      },
      "a-23": {
        "id": "a-23",
        "title": "sphere hide - out",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-23-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|fc4bc945-857d-8566-0c33-42af5e454bae"},
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-23-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 1000,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|fc4bc945-857d-8566-0c33-42af5e454bae"},
              "value": 0,
              "unit": ""
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1652946804114
      },
      "a-24": {
        "id": "a-24", "title": "mouse - eye", "continuousParameterGroups": [{
          "id": "a-24-p",
          "type": "MOUSE_X",
          "parameterLabel": "Mouse X",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-24-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".ch-eye-pupil", "selectorGuids": ["b83f0671-5dab-f1dd-019b-f611d65f94f5"]},
                "xValue": -0.6,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-24-n-5",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".pupil-inner", "selectorGuids": ["075f0a5a-cd2c-a605-88bf-4e645f705c93"]},
                "xValue": -0.4,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-24-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".ch-eye-pupil", "selectorGuids": ["b83f0671-5dab-f1dd-019b-f611d65f94f5"]},
                "xValue": 0.6,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }, {
              "id": "a-24-n-7",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".pupil-inner", "selectorGuids": ["075f0a5a-cd2c-a605-88bf-4e645f705c93"]},
                "xValue": 0.4,
                "xUnit": "em",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }]
        }, {
          "id": "a-24-p-2",
          "type": "MOUSE_Y",
          "parameterLabel": "Mouse Y",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-24-n-3",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".ch-eye-pupil", "selectorGuids": ["b83f0671-5dab-f1dd-019b-f611d65f94f5"]},
                "yValue": -0.4,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-24-n-6",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".pupil-inner", "selectorGuids": ["075f0a5a-cd2c-a605-88bf-4e645f705c93"]},
                "yValue": -0.3,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-24-n-4",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".ch-eye-pupil", "selectorGuids": ["b83f0671-5dab-f1dd-019b-f611d65f94f5"]},
                "yValue": 0.4,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }, {
              "id": "a-24-n-8",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"selector": ".pupil-inner", "selectorGuids": ["075f0a5a-cd2c-a605-88bf-4e645f705c93"]},
                "yValue": 0.3,
                "xUnit": "PX",
                "yUnit": "em",
                "zUnit": "PX"
              }
            }]
          }]
        }], "createdOn": 1653058603290
      },
      "a-25": {
        "id": "a-25",
        "title": "hover-cta",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-25-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "selector": ".contact-ch-bg-fire-cont",
                "selectorGuids": ["466bf850-66d7-a2a3-9f89-e0dba22f99b3"]
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-25-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"selector": ".ch-eye-pupil", "selectorGuids": ["b83f0671-5dab-f1dd-019b-f611d65f94f5"]},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-25-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"selector": ".ch-eye-pupil-hover", "selectorGuids": ["2e7272d5-a040-f731-ae62-62146e85de12"]},
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-25-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "selector": ".contact-ch-bg-fire-cont",
                "selectorGuids": ["466bf850-66d7-a2a3-9f89-e0dba22f99b3"]
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-25-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {"selector": ".ch-eye-pupil", "selectorGuids": ["b83f0671-5dab-f1dd-019b-f611d65f94f5"]},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-25-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {"selector": ".ch-eye-pupil-hover", "selectorGuids": ["2e7272d5-a040-f731-ae62-62146e85de12"]},
              "value": 1,
              "unit": ""
            }
          }]
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1653059261239
      },
      "a-26": {
        "id": "a-26",
        "title": "hover-cta out",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-26-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {"selector": ".ch-eye-pupil-hover", "selectorGuids": ["2e7272d5-a040-f731-ae62-62146e85de12"]},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-26-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {"selector": ".ch-eye-pupil", "selectorGuids": ["b83f0671-5dab-f1dd-019b-f611d65f94f5"]},
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-26-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "selector": ".contact-ch-bg-fire-cont",
                "selectorGuids": ["466bf850-66d7-a2a3-9f89-e0dba22f99b3"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-26-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "selector": ".contact-ch-bg-fire-cont",
                "selectorGuids": ["466bf850-66d7-a2a3-9f89-e0dba22f99b3"]
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-26-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {"selector": ".ch-eye-pupil", "selectorGuids": ["b83f0671-5dab-f1dd-019b-f611d65f94f5"]},
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-26-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {"selector": ".ch-eye-pupil-hover", "selectorGuids": ["2e7272d5-a040-f731-ae62-62146e85de12"]},
              "value": 0,
              "unit": ""
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1653059261239
      },
      "a-28": {
        "id": "a-28",
        "title": "cursor",
        "continuousParameterGroups": [{
          "id": "a-28-p",
          "type": "MOUSE_X",
          "parameterLabel": "Mouse X",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-28-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"id": "62622ac9404b8d5e17b40996|dde19ea4-bb47-29cf-62b9-24bc90304d06"},
                "xValue": -50,
                "xUnit": "vw",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-28-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"id": "62622ac9404b8d5e17b40996|dde19ea4-bb47-29cf-62b9-24bc90304d06"},
                "xValue": 50,
                "xUnit": "vw",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }]
        }, {
          "id": "a-28-p-2",
          "type": "MOUSE_Y",
          "parameterLabel": "Mouse Y",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-28-n-3",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"id": "62622ac9404b8d5e17b40996|dde19ea4-bb47-29cf-62b9-24bc90304d06"},
                "yValue": -50,
                "xUnit": "PX",
                "yUnit": "vh",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-28-n-4",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {"id": "62622ac9404b8d5e17b40996|dde19ea4-bb47-29cf-62b9-24bc90304d06"},
                "yValue": 50,
                "xUnit": "PX",
                "yUnit": "vh",
                "zUnit": "PX"
              }
            }]
          }]
        }],
        "createdOn": 1653191622042
      },
      "a-27": {
        "id": "a-27",
        "title": "loop - sphere 2",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-27-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".sphere-img",
                "selectorGuids": ["75754ae6-1aba-2524-4496-bd74f450f819"]
              },
              "zValue": 0,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-27-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 4000,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".sphere-img",
                "selectorGuids": ["75754ae6-1aba-2524-4496-bd74f450f819"]
              },
              "zValue": 360,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-27-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".sphere-img",
                "selectorGuids": ["75754ae6-1aba-2524-4496-bd74f450f819"]
              },
              "zValue": 0,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1652780164946
      },
      "a-30": {
        "id": "a-30",
        "title": "cursor - hover",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-30-n",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "outCubic",
              "duration": 500,
              "target": {"selector": ".cursor-dot", "selectorGuids": ["ab01be2e-79a6-6d14-4469-e61a27eaa5f3"]},
              "widthValue": 35,
              "heightValue": 35,
              "widthUnit": "px",
              "heightUnit": "px",
              "locked": false
            }
          }, {
            "id": "a-30-n-2",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 500,
              "target": {"selector": ".cursor-dot", "selectorGuids": ["ab01be2e-79a6-6d14-4469-e61a27eaa5f3"]},
              "globalSwatchId": "",
              "rValue": 0,
              "bValue": 0,
              "gValue": 0,
              "aValue": 0
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1653289885497
      },
      "a-31": {
        "id": "a-31",
        "title": "cursor - hover OUT",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-31-n",
            "actionTypeId": "STYLE_SIZE",
            "config": {
              "delay": 0,
              "easing": "outCubic",
              "duration": 500,
              "target": {"selector": ".cursor-dot", "selectorGuids": ["ab01be2e-79a6-6d14-4469-e61a27eaa5f3"]},
              "widthValue": 12,
              "heightValue": 12,
              "widthUnit": "px",
              "heightUnit": "px",
              "locked": false
            }
          }, {
            "id": "a-31-n-2",
            "actionTypeId": "STYLE_BACKGROUND_COLOR",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 500,
              "target": {"selector": ".cursor-dot", "selectorGuids": ["ab01be2e-79a6-6d14-4469-e61a27eaa5f3"]},
              "globalSwatchId": "95231225",
              "rValue": 255,
              "bValue": 255,
              "gValue": 255,
              "aValue": 1
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1653289885497
      },
      "a-33": {
        "id": "a-33",
        "title": "mouse - email btn",
        "continuousParameterGroups": [{
          "id": "a-33-p",
          "type": "MOUSE_X",
          "parameterLabel": "Mouse X",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-33-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463"
                },
                "xValue": -10,
                "xUnit": "px",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-33-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463"
                },
                "xValue": 10,
                "xUnit": "px",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }]
        }, {
          "id": "a-33-p-2",
          "type": "MOUSE_Y",
          "parameterLabel": "Mouse Y",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-33-n-3",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463"
                },
                "yValue": -10,
                "xUnit": "PX",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-33-n-4",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|b1e4702a-0805-f266-872e-64bfe3037463"
                },
                "yValue": 5,
                "xUnit": "PX",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }]
          }]
        }],
        "createdOn": 1653291422170
      },
      "a-32": {
        "id": "a-32",
        "title": "mouse - cta btn",
        "continuousParameterGroups": [{
          "id": "a-32-p",
          "type": "MOUSE_X",
          "parameterLabel": "Mouse X",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-32-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae"
                },
                "xValue": -20,
                "yValue": null,
                "xUnit": "px",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-32-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae"
                },
                "xValue": 20,
                "yValue": null,
                "xUnit": "px",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }]
          }]
        }, {
          "id": "a-32-p-2",
          "type": "MOUSE_Y",
          "parameterLabel": "Mouse Y",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-32-n-3",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae"
                },
                "xValue": null,
                "yValue": -20,
                "xUnit": "px",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-32-n-4",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae"
                },
                "xValue": null,
                "yValue": 20,
                "xUnit": "px",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }]
          }]
        }],
        "createdOn": 1653291017273
      },
      "a-34": {
        "id": "a-34",
        "title": "loop - cta btn",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-34-n",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae"},
              "zValue": 0,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-34-n-2",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 8000,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae"},
              "zValue": 360,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-34-n-3",
            "actionTypeId": "TRANSFORM_ROTATE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {"useEventTarget": true, "id": "62622ac9404b8d5e17b40996|3e9be23a-b4dc-a8ea-d122-a006080c7bae"},
              "zValue": 0,
              "xUnit": "DEG",
              "yUnit": "DEG",
              "zUnit": "deg"
            }
          }]
        }],
        "useFirstGroupAsInitialState": true,
        "createdOn": 1653291692911
      },
      "a-35": {
        "id": "a-35",
        "title": "mouse - hcta btn",
        "continuousParameterGroups": [{
          "id": "a-35-p",
          "type": "MOUSE_X",
          "parameterLabel": "Mouse X",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-35-n",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464"
                },
                "xValue": -10,
                "xUnit": "px",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-35-n-2",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464"
                },
                "xValue": 10,
                "xUnit": "px",
                "yUnit": "PX",
                "zUnit": "PX"
              }
            }]
          }]
        }, {
          "id": "a-35-p-2",
          "type": "MOUSE_Y",
          "parameterLabel": "Mouse Y",
          "continuousActionGroups": [{
            "keyframe": 0,
            "actionItems": [{
              "id": "a-35-n-3",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464"
                },
                "yValue": -10,
                "xUnit": "PX",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }]
          }, {
            "keyframe": 100,
            "actionItems": [{
              "id": "a-35-n-4",
              "actionTypeId": "TRANSFORM_MOVE",
              "config": {
                "delay": 0,
                "easing": "",
                "duration": 500,
                "target": {
                  "useEventTarget": true,
                  "id": "62622ac9404b8d5e17b40996|10dfe247-3745-165d-4d46-d7f3173ba464"
                },
                "yValue": 10,
                "xUnit": "PX",
                "yUnit": "px",
                "zUnit": "PX"
              }
            }]
          }]
        }],
        "createdOn": 1653293726542
      },
      "a-36": {
        "id": "a-36",
        "title": "hover- project-b",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-36-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".project-big",
                "selectorGuids": ["5572520a-3f9c-7427-53e0-94d27badb434"]
              },
              "yValue": -1,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-36-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".project-big",
                "selectorGuids": ["5572520a-3f9c-7427-53e0-94d27badb434"]
              },
              "value": 0.6,
              "unit": ""
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1653661308281
      },
      "a-37": {
        "id": "a-37",
        "title": "hover- project-b out",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-37-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".project-big",
                "selectorGuids": ["5572520a-3f9c-7427-53e0-94d27badb434"]
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-37-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".project-big",
                "selectorGuids": ["5572520a-3f9c-7427-53e0-94d27badb434"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1653661308281
      },
      "a-38": {
        "id": "a-38",
        "title": "hover- project-m",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-38-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".project-mid",
                "selectorGuids": ["226c47a0-9a36-6dd2-7384-6267fecc40e9"]
              },
              "yValue": -1,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-38-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".project-mid",
                "selectorGuids": ["226c47a0-9a36-6dd2-7384-6267fecc40e9"]
              },
              "value": 0.6,
              "unit": ""
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1653661308281
      },
      "a-39": {
        "id": "a-39",
        "title": "hover- project-m out",
        "actionItemGroups": [{
          "actionItems": [{
            "id": "a-39-n-2",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".project-mid",
                "selectorGuids": ["226c47a0-9a36-6dd2-7384-6267fecc40e9"]
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-39-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".project-mid",
                "selectorGuids": ["226c47a0-9a36-6dd2-7384-6267fecc40e9"]
              },
              "value": 1,
              "unit": ""
            }
          }]
        }],
        "useFirstGroupAsInitialState": false,
        "createdOn": 1653661308281
      },
      "a-8": {
        "id": "a-8", "title": "SIV - skill 2", "actionItemGroups": [{
          "actionItems": [{
            "id": "a-8-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|a4c96398-2896-4d81-7d3f-95c8fce8c4d1"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-8-n-11",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|fc4bc945-857d-8566-0c33-42af5e454bae"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-8-n-10",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d9429507b"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-8-n-9",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d94295079"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-8-n-8",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|bc3353c4-90c2-c114-c8d3-99103e743fc9"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-8-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|ad105393-5ffe-8c98-3a52-0493fda6bdd9"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-8-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d9429506d"
              },
              "value": 0,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-8-n-15",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|a4c96398-2896-4d81-7d3f-95c8fce8c4d1"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-8-n-12",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|fc4bc945-857d-8566-0c33-42af5e454bae"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-8-n-16",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d9429506d"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-8-n-23",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|ad105393-5ffe-8c98-3a52-0493fda6bdd9"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-8-n-17",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d9429507b"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-8-n-18",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|b8ca4756-8c83-639b-6165-ce3d94295079"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-8-n-19",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|bc3353c4-90c2-c114-c8d3-99103e743fc9"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }], "useFirstGroupAsInitialState": true, "createdOn": 1652594175041
      },
      "a-40": {
        "id": "a-40", "title": "SIV - About me 2", "actionItemGroups": [{
          "actionItems": [{
            "id": "a-40-n",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cbc"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-40-n-2",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd3"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-40-n-3",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cb3"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-40-n-4",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".about-capsule",
                "selectorGuids": ["38c4dd78-0272-c008-f0e8-868ffbc396f1"]
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-40-n-5",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cc3"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-40-n-6",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ccd"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-40-n-7",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cca"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-40-n-8",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|a8a55169-6eaa-1c52-4efc-e4d7f0491865"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-40-n-10",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|cfb6135b-8ccc-bf04-e702-de0be097e966"
              },
              "value": 0,
              "unit": ""
            }
          }, {
            "id": "a-40-n-11",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cbc"
              },
              "yValue": 2,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-40-n-12",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 1000,
              "easing": "easeOut",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|a8a55169-6eaa-1c52-4efc-e4d7f0491865"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-40-n-14",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 1000,
              "easing": "easeOut",
              "duration": 500,
              "target": {"id": "62622ac9404b8d5e17b40996|e3deab6d-f71e-5ad2-a51e-ec3d100943cb"},
              "yValue": 32,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-40-n-15",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 1000,
              "easing": "easeOut",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|cfb6135b-8ccc-bf04-e702-de0be097e966"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-40-n-16",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 600,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cc3"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-40-n-17",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "outQuint",
              "duration": 800,
              "target": {"id": "62622ac9404b8d5e17b40996|e3deab6d-f71e-5ad2-a51e-ec3d100943cb"},
              "xValue": null,
              "yValue": 0,
              "xUnit": "px",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-40-n-18",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cbc"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-40-n-19",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 300,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cbc"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-40-n-20",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cd3"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-40-n-21",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cb3"
              },
              "value": 1,
              "unit": ""
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-40-n-22",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "easeOut",
              "duration": 300,
              "target": {
                "useEventTarget": "CHILDREN",
                "selector": ".about-capsule",
                "selectorGuids": ["38c4dd78-0272-c008-f0e8-868ffbc396f1"]
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-40-n-23",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ccd"
              },
              "yValue": 10,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-40-n-24",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "",
              "duration": 0,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cca"
              },
              "yValue": 10,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "id": "a-40-n-25",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 400,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ccd"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-40-n-26",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "easeOut",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45ccd"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }, {
            "id": "a-40-n-27",
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "ease",
              "duration": 400,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cca"
              },
              "value": 1,
              "unit": ""
            }
          }, {
            "id": "a-40-n-28",
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "easeOut",
              "duration": 500,
              "target": {
                "useEventTarget": "CHILDREN",
                "id": "62622ac9404b8d5e17b40996|aedb2148-8f8b-fbfc-eee0-0c550de45cca"
              },
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "em",
              "zUnit": "PX"
            }
          }]
        }], "useFirstGroupAsInitialState": true, "createdOn": 1652584011645
      },
      "slideInBottomRight": {
        "id": "slideInBottomRight",
        "useFirstGroupAsInitialState": true,
        "actionItemGroups": [{
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "duration": 0,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 0
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "duration": 0,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "xValue": 100,
              "yValue": 100,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuart",
              "duration": 1000,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 1
            }
          }, {
            "actionTypeId": "TRANSFORM_MOVE",
            "config": {
              "delay": 0,
              "easing": "outQuart",
              "duration": 1000,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "xValue": 0,
              "yValue": 0,
              "xUnit": "PX",
              "yUnit": "PX",
              "zUnit": "PX"
            }
          }]
        }]
      },
      "fadeIn": {
        "id": "fadeIn",
        "useFirstGroupAsInitialState": true,
        "actionItemGroups": [{
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "duration": 0,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 0
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuart",
              "duration": 1000,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 1
            }
          }]
        }]
      },
      "blink": {
        "id": "blink",
        "actionItemGroups": [{
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuad",
              "duration": 120,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 0
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuad",
              "duration": 120,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 1
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuad",
              "duration": 120,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 0
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuad",
              "duration": 120,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 1
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuad",
              "duration": 120,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 0
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuad",
              "duration": 120,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 1
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuad",
              "duration": 120,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 0
            }
          }]
        }, {
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "outQuad",
              "duration": 120,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 1
            }
          }]
        }]
      },
      "fadeOut": {
        "id": "fadeOut",
        "actionItemGroups": [{
          "actionItems": [{
            "actionTypeId": "STYLE_OPACITY",
            "config": {
              "delay": 0,
              "easing": "inQuart",
              "duration": 1000,
              "target": {"id": "N/A", "appliesTo": "TRIGGER_ELEMENT", "useEventTarget": true},
              "value": 0
            }
          }]
        }]
      }
    },
    "site": {
      "mediaQueries": [{"key": "main", "min": 992, "max": 10000}, {
        "key": "medium",
        "min": 768,
        "max": 991
      }, {"key": "small", "min": 480, "max": 767}, {"key": "tiny", "min": 0, "max": 479}]
    }
  }
);

const gc = s => document.querySelector('#countdown [count="' + s + '"] span');

let d = new Date('2022-10-28T10:00:00') - new Date();

const mainCalc = (s, t, c) => {
  gc(s).classList.remove('ping');
  const m = t % c;

  const e = a => gc(s)[a + 'Attribute'].bind(gc(s));

  e('set')('b', m < 10 ? '0' + m : m);
  setTimeout(() => gc(s).classList.add('ping'), 10);
  return m;
};

const count = (b = 0) => (d -= 1000) && count.seconds(d, b);

const opti = (v, n) => (v - v % n) / n;

count.seconds = (t, i = !1) => {
  t = opti(t, 1000);
  i && count.minutes(t, i);
  if (mainCalc('seconds', t, 60) == 59) count.minutes(t, i);
};

count.minutes = (t, i = !1) => {
  t = opti(t, 60);
  i && count.hours(t, i);
  if (mainCalc('minutes', t, 60) == 59) count.hours(t, i);
};

count.hours = (t, i = !1) => {
  t = opti(t, 60) - 1;
  i && count.days(t);
  if (mainCalc('hours', t, 24) == 23) count.days(t);
};

count.days = t => {
  t = opti(t, 24);
  gc('days').setAttribute('b', t < 10 ? '0' + t : t);
  setTimeout(() => gc('days').classList.add('ping'), 10);
};

setTimeout(() => {
  count(true);
  setInterval(count, 1000);
}, d % 1000);

if (new Date() > new Date('2022-10-28T10:00:00')) {
  d = null;
  count.seconds = null;
  count.hours = null;
  count.minutes = null;
  count.days = null;

}
// $('.toggle-menu').click (function(){
//   $(this).toggleClass('active');
//   $('#menu').toggleClass('open');
// });
//
// function animateMenu() {
//     var menu = $('.menuBg');
//     var nav = $('.mobileNav');
//
//     if (menu.hasClass('showMenu')) { // Hide menu if it's open
//         menu.removeClass('showMenu').addClass('hideMenu');
//         nav.removeClass('fadeIn');
//     } else if (menu.hasClass('hideMenu')) { // Show menu and remove hideMenu
//         menu.removeClass('hideMenu').addClass('showMenu');
//         nav.addClass('fadeIn')
//     } else {
//         menu.addClass('showMenu'); // Initial show menu
//         nav.addClass('fadeIn');
//     }
// };
//
// $(document).ready(function() {
//     $('.hamburger').on('click', function() {
//         $(this).toggleClass('open');
//         animateMenu();
//     });
//     $('.mobileNav a').on('click', function(){
//         $('.hamburger').toggleClass('open');
//         animateMenu();
//     });
// });

/**
 * Swiper 4.4.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 19, 2018
 */
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
  "use strict";
  var f = "undefined" == typeof document ? {
    body: {}, addEventListener: function () {
    }, removeEventListener: function () {
    }, activeElement: {
      blur: function () {
      }, nodeName: ""
    }, querySelector: function () {
      return null
    }, querySelectorAll: function () {
      return []
    }, getElementById: function () {
      return null
    }, createEvent: function () {
      return {
        initEvent: function () {
        }
      }
    }, createElement: function () {
      return {
        children: [], childNodes: [], style: {}, setAttribute: function () {
        }, getElementsByTagName: function () {
          return []
        }
      }
    }, location: {hash: ""}
  } : document, J = "undefined" == typeof window ? {
    document: f,
    navigator: {userAgent: ""},
    location: {},
    history: {},
    CustomEvent: function () {
      return this
    },
    addEventListener: function () {
    },
    removeEventListener: function () {
    },
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return ""
        }
      }
    },
    Image: function () {
    },
    Date: function () {
    },
    screen: {},
    setTimeout: function () {
    },
    clearTimeout: function () {
    }
  } : window, l = function (e) {
    for (var t = 0; t < e.length; t += 1) this[t] = e[t];
    return this.length = e.length, this
  };

  function L(e, t) {
    var a = [], i = 0;
    if (e && !t && e instanceof l) return e;
    if (e) if ("string" == typeof e) {
      var s, r, n = e.trim();
      if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
        var o = "div";
        for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
      } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
    } else if (e.nodeType || e === J || e === f) a.push(e); else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) a.push(e[i]);
    return new l(a)
  }

  function r(e) {
    for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
    return t
  }

  L.fn = l.prototype, L.Class = l, L.Dom7 = l;
  var t = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
      return this
    }, removeClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
      return this
    }, hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e)
    }, toggleClass: function (e) {
      for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
      return this
    }, attr: function (e, t) {
      var a = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (var i = 0; i < this.length; i += 1) if (2 === a.length) this[i].setAttribute(e, t); else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
      return this
    }, removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this
    }, data: function (e, t) {
      var a;
      if (void 0 !== t) {
        for (var i = 0; i < this.length; i += 1) (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
        return this
      }
      if (a = this[0]) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
        var s = a.getAttribute("data-" + e);
        return s || void 0
      }
    }, transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        a.webkitTransform = e, a.transform = e
      }
      return this
    }, transition: function (e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var a = this[t].style;
        a.webkitTransitionDuration = e, a.transitionDuration = e
      }
      return this
    }, on: function () {
      for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      var i = t[0], r = t[1], n = t[2], s = t[3];

      function o(e) {
        var t = e.target;
        if (t) {
          var a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a); else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
        }
      }

      function l(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
      }

      "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
      for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r) for (d = 0; d < p.length; d += 1) {
          var h = p[d];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
            listener: n,
            proxyListener: o
          }), u.addEventListener(h, o, s)
        } else for (d = 0; d < p.length; d += 1) {
          var v = p[d];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
            listener: n,
            proxyListener: l
          }), u.addEventListener(v, l, s)
        }
      }
      return this
    }, off: function () {
      for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      var i = t[0], s = t[1], r = t[2], n = t[3];
      "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
      for (var o = i.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], p = 0; p < this.length; p += 1) {
        var c = this[p], u = void 0;
        if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) {
          var v = u[h];
          r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
        }
      }
      return this
    }, trigger: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1) for (var r = a[s], n = 0; n < this.length; n += 1) {
        var o = this[n], l = void 0;
        try {
          l = new J.CustomEvent(r, {detail: i, bubbles: !0, cancelable: !0})
        } catch (e) {
          (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
        }
        o.dom7EventData = e.filter(function (e, t) {
          return 0 < t
        }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
      }
      return this
    }, transitionEnd: function (t) {
      var a, i = ["webkitTransitionEnd", "transitionend"], s = this;

      function r(e) {
        if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
      }

      if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
      return this
    }, outerWidth: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
      }
      return null
    }, outerHeight: function (e) {
      if (0 < this.length) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
      }
      return null
    }, offset: function () {
      if (0 < this.length) {
        var e = this[0], t = e.getBoundingClientRect(), a = f.body, i = e.clientTop || a.clientTop || 0,
          s = e.clientLeft || a.clientLeft || 0, r = e === J ? J.scrollY : e.scrollTop,
          n = e === J ? J.scrollX : e.scrollLeft;
        return {top: t.top + r - i, left: t.left + n - s}
      }
      return null
    }, css: function (e, t) {
      var a;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1) for (var i in e) this[a].style[i] = e[i];
          return this
        }
        if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this
      }
      return this
    }, each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
      return this
    }, html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this
    }, text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this
    }, is: function (e) {
      var t, a, i = this[0];
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (t = L(e), a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
        return !1
      }
      if (e === f) return i === f;
      if (e === J) return i === J;
      if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
        return !1
      }
      return !1
    }, index: function () {
      var e, t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
        return e
      }
    }, eq: function (e) {
      if (void 0 === e) return this;
      var t, a = this.length;
      return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
    }, append: function () {
      for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
      for (var i = 0; i < t.length; i += 1) {
        e = t[i];
        for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
          var r = f.createElement("div");
          for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
        } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]); else this[s].appendChild(e)
      }
      return this
    }, prepend: function (e) {
      var t, a;
      for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
        var i = f.createElement("div");
        for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
      } else if (e instanceof l) for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
      return this
    }, next: function (e) {
      return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
    }, nextAll: function (e) {
      var t = [], a = this[0];
      if (!a) return new l([]);
      for (; a.nextElementSibling;) {
        var i = a.nextElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), a = i
      }
      return new l(t)
    }, prev: function (e) {
      if (0 < this.length) {
        var t = this[0];
        return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
      }
      return new l([])
    }, prevAll: function (e) {
      var t = [], a = this[0];
      if (!a) return new l([]);
      for (; a.previousElementSibling;) {
        var i = a.previousElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i), a = i
      }
      return new l(t)
    }, parent: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
      return L(r(t))
    }, parents: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
      return L(r(t))
    }, closest: function (e) {
      var t = this;
      return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
    }, find: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
      return new l(t)
    }, children: function (e) {
      for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
      return new l(r(t))
    }, remove: function () {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this
    }, add: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var a, i;
      for (a = 0; a < e.length; a += 1) {
        var s = L(e[a]);
        for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
      }
      return this
    }, styles: function () {
      return this[0] ? J.getComputedStyle(this[0], null) : {}
    }
  };
  Object.keys(t).forEach(function (e) {
    L.fn[e] = t[e]
  });
  var e, a, i, ee = {
    deleteProps: function (e) {
      var t = e;
      Object.keys(t).forEach(function (e) {
        try {
          t[e] = null
        } catch (e) {
        }
        try {
          delete t[e]
        } catch (e) {
        }
      })
    }, nextTick: function (e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t)
    }, now: function () {
      return Date.now()
    }, getTranslate: function (e, t) {
      var a, i, s;
      void 0 === t && (t = "x");
      var r = J.getComputedStyle(e, null);
      return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
        return e.replace(",", ".")
      }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }, parseUrlQuery: function (e) {
      var t, a, i, s, r = {}, n = e || J.location.href;
      if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e
      })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
      return r
    }, isObject: function (e) {
      return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
    }, extend: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
        var s = e[i];
        if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
          var l = r[n], d = Object.getOwnPropertyDescriptor(s, l);
          void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l])
        }
      }
      return a
    }
  }, te = (i = f.createElement("div"), {
    touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
    pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator),
    prefixedPointerEvents: !!J.navigator.msPointerEnabled,
    transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
    transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
    flexbox: function () {
      for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) if (t[a] in e) return !0;
      return !1
    }(),
    observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
    passiveListener: function () {
      var e = !1;
      try {
        var t = Object.defineProperty({}, "passive", {
          get: function () {
            e = !0
          }
        });
        J.addEventListener("testPassiveListener", null, t)
      } catch (e) {
      }
      return e
    }(),
    gestures: "ongesturestart" in J
  }), s = function (e) {
    void 0 === e && (e = {});
    var t = this;
    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
      t.on(e, t.params.on[e])
    })
  }, n = {components: {configurable: !0}};
  s.prototype.on = function (e, t, a) {
    var i = this;
    if ("function" != typeof t) return i;
    var s = a ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
    }), i
  }, s.prototype.once = function (i, s, e) {
    var r = this;
    if ("function" != typeof s) return r;
    return r.on(i, function e() {
      for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
      s.apply(r, t), r.off(i, e)
    }, e)
  }, s.prototype.off = function (e, i) {
    var s = this;
    return s.eventsListeners && e.split(" ").forEach(function (a) {
      void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
        e === i && s.eventsListeners[a].splice(t, 1)
      })
    }), s
  }, s.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var a, i, s, r = this;
    return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function (e) {
          t.push(e)
        }), t.forEach(function (e) {
          e.apply(s, i)
        })
      }
    })), r
  }, s.prototype.useModulesParams = function (a) {
    var i = this;
    i.modules && Object.keys(i.modules).forEach(function (e) {
      var t = i.modules[e];
      t.params && ee.extend(a, t.params)
    })
  }, s.prototype.useModules = function (i) {
    void 0 === i && (i = {});
    var s = this;
    s.modules && Object.keys(s.modules).forEach(function (e) {
      var a = s.modules[e], t = i[e] || {};
      a.instance && Object.keys(a.instance).forEach(function (e) {
        var t = a.instance[e];
        s[e] = "function" == typeof t ? t.bind(s) : t
      }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
        s.on(e, a.on[e])
      }), a.create && a.create.bind(s)(t)
    })
  }, n.components.set = function (e) {
    this.use && this.use(e)
  }, s.installModule = function (t) {
    for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
    var i = this;
    i.prototype.modules || (i.prototype.modules = {});
    var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
    return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
      i.prototype[e] = t.proto[e]
    }), t.static && Object.keys(t.static).forEach(function (e) {
      i[e] = t.static[e]
    }), t.install && t.install.apply(i, e), i
  }, s.use = function (e) {
    for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
    var i = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return i.installModule(e)
    }), i) : i.installModule.apply(i, [e].concat(t))
  }, Object.defineProperties(s, n);
  var o = {
    updateSize: function () {
      var e, t, a = this, i = a.$el;
      e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
        width: e,
        height: t,
        size: a.isHorizontal() ? e : t
      }))
    }, updateSlides: function () {
      var e = this, t = e.params, a = e.$wrapperEl, i = e.size, s = e.rtlTranslate, r = e.wrongRTL,
        n = e.virtual && t.virtual.enabled, o = n ? e.virtual.slides.length : e.slides.length,
        l = a.children("." + e.params.slideClass), d = n ? e.virtual.slides.length : l.length, p = [], c = [], u = [],
        h = t.slidesOffsetBefore;
      "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
      var v = t.slidesOffsetAfter;
      "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
      var f = e.snapGrid.length, m = e.snapGrid.length, g = t.spaceBetween, b = -h, w = 0, y = 0;
      if (void 0 !== i) {
        var x, T;
        "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
          marginLeft: "",
          marginTop: ""
        }) : l.css({
          marginRight: "",
          marginBottom: ""
        }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
        for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), k = 0; k < d; k += 1) {
          T = 0;
          var P = l.eq(k);
          if (1 < t.slidesPerColumn) {
            var z = void 0, $ = void 0, L = void 0;
            "column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), z = $ + L * x / S, P.css({
              "-webkit-box-ordinal-group": z,
              "-moz-box-ordinal-group": z,
              "-ms-flex-order": z,
              "-webkit-order": z,
              order: z
            })) : $ = k - (L = Math.floor(k / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
          }
          if ("none" !== P.css("display")) {
            if ("auto" === t.slidesPerView) {
              var I = J.getComputedStyle(P[0], null), D = P[0].style.transform, O = P[0].style.webkitTransform;
              if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0); else if (e.isHorizontal()) {
                var A = parseFloat(I.getPropertyValue("width")), N = parseFloat(I.getPropertyValue("padding-left")),
                  H = parseFloat(I.getPropertyValue("padding-right")),
                  G = parseFloat(I.getPropertyValue("margin-left")), B = parseFloat(I.getPropertyValue("margin-right")),
                  X = I.getPropertyValue("box-sizing");
                T = X && "border-box" === X ? A + G + B : A + N + H + G + B
              } else {
                var Y = parseFloat(I.getPropertyValue("height")), V = parseFloat(I.getPropertyValue("padding-top")),
                  F = parseFloat(I.getPropertyValue("padding-bottom")),
                  R = parseFloat(I.getPropertyValue("margin-top")), q = parseFloat(I.getPropertyValue("margin-bottom")),
                  W = I.getPropertyValue("box-sizing");
                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
              }
              D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
            } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
            l[k] && (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
          }
        }
        if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({width: e.virtualSize + t.spaceBetween + "px"}), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({width: e.virtualSize + t.spaceBetween + "px"}) : a.css({height: e.virtualSize + t.spaceBetween + "px"})), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({width: e.virtualSize + t.spaceBetween + "px"}) : a.css({height: e.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
          E = [];
          for (var j = 0; j < p.length; j += 1) {
            var U = p[j];
            t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U)
          }
          p = E
        }
        if (!t.centeredSlides) {
          E = [];
          for (var K = 0; K < p.length; K += 1) {
            var _ = p[K];
            t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_)
          }
          p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
        }
        if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({marginLeft: g + "px"}) : l.css({marginRight: g + "px"}) : l.css({marginBottom: g + "px"})), t.centerInsufficientSlides) {
          var Z = 0;
          if (u.forEach(function (e) {
            Z += e + (t.spaceBetween ? t.spaceBetween : 0)
          }), (Z -= t.spaceBetween) < i) {
            var Q = (i - Z) / 2;
            p.forEach(function (e, t) {
              p[t] = e - Q
            }), c.forEach(function (e, t) {
              c[t] = e + Q
            })
          }
        }
        ee.extend(e, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u
        }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
      }
    }, updateAutoHeight: function (e) {
      var t, a = this, i = [], s = 0;
      if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
        var r = a.activeIndex + t;
        if (r > a.slides.length) break;
        i.push(a.slides.eq(r)[0])
      } else i.push(a.slides.eq(a.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
        var n = i[t].offsetHeight;
        s = s < n ? n : s
      }
      s && a.$wrapperEl.css("height", s + "px")
    }, updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
    }, updateSlidesProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this, a = t.params, i = t.slides, s = t.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        var r = -e;
        s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
          if (a.watchSlidesVisibility) {
            var d = -(r - o.swiperSlideOffset), p = d + t.slidesSizesGrid[n];
            (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
          }
          o.progress = s ? -l : l
        }
        t.visibleSlides = L(t.visibleSlides)
      }
    }, updateProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this, a = t.params, i = t.maxTranslate() - t.minTranslate(), s = t.progress, r = t.isBeginning,
        n = t.isEnd, o = r, l = n;
      0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
        progress: s,
        isBeginning: r,
        isEnd: n
      }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
    }, updateSlidesClasses: function () {
      var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex,
        o = t.virtual && i.virtual.enabled;
      a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
      var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
      var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
    }, updateActiveIndex: function (e) {
      var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params,
        o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e;
      if (void 0 === p) {
        for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
      }
      if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
        var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
        ee.extend(a, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: p
        }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
      } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
    }, updateClickedSlide: function (e) {
      var t = this, a = t.params, i = L(e.target).closest("." + a.slideClass)[0], s = !1;
      if (i) for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
      if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
    }
  };
  var d = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params, a = this.rtlTranslate, i = this.translate, s = this.$wrapperEl;
      if (t.virtualTranslate) return a ? -i : i;
      var r = ee.getTranslate(s[0], e);
      return a && (r = -r), r || 0
    }, setTranslate: function (e, t) {
      var a = this, i = a.rtlTranslate, s = a.params, r = a.$wrapperEl, n = a.progress, o = 0, l = 0;
      a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
      var d = a.maxTranslate() - a.minTranslate();
      (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
    }, minTranslate: function () {
      return -this.snapGrid[0]
    }, maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1]
    }
  };
  var p = {
    setTransition: function (e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
    }, transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var a = this, i = a.activeIndex, s = a.params, r = a.previousIndex;
      s.autoHeight && a.updateAutoHeight();
      var n = t;
      if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
        if ("reset" === n) return void a.emit("slideResetTransitionStart");
        a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
      }
    }, transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var a = this, i = a.activeIndex, s = a.previousIndex;
      a.animating = !1, a.setTransition(0);
      var r = t;
      if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
        if ("reset" === r) return void a.emit("slideResetTransitionEnd");
        a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
      }
    }
  };
  var c = {
    slideTo: function (e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
      var s = this, r = e;
      r < 0 && (r = 0);
      var n = s.params, o = s.snapGrid, l = s.slidesGrid, d = s.previousIndex, p = s.activeIndex, c = s.rtlTranslate;
      if (s.animating && n.preventInteractionOnTransition) return !1;
      var u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
      var h, v = -o[u];
      if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
      if (s.initialized && r !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
        if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
      }
      return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
      }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
    }, slideToLoop: function (e, t, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
      var s = e;
      return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
    }, slideNext: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this, s = i.params, r = i.animating;
      return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
    }, slidePrev: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this, s = i.params, r = i.animating, n = i.snapGrid, o = i.slidesGrid, l = i.rtlTranslate;
      if (s.loop) {
        if (r) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
      }

      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
      }

      var p, c = d(l ? i.translate : -i.translate), u = n.map(function (e) {
        return d(e)
      }), h = (o.map(function (e) {
        return d(e)
      }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
      return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
    }, slideReset: function (e, t, a) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
    }, slideToClosest: function (e, t, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var i = this, s = i.activeIndex, r = Math.floor(s / i.params.slidesPerGroup);
      if (r < i.snapGrid.length - 1) {
        var n = i.rtlTranslate ? i.translate : -i.translate, o = i.snapGrid[r];
        (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
      }
      return i.slideTo(s, e, t, a)
    }, slideToClickedSlide: function () {
      var e, t = this, a = t.params, i = t.$wrapperEl,
        s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
      if (a.loop) {
        if (t.animating) return;
        e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
          t.slideTo(r)
        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function () {
          t.slideTo(r)
        })) : t.slideTo(r)
      } else t.slideTo(r)
    }
  };
  var u = {
    loopCreate: function () {
      var i = this, e = i.params, t = i.$wrapperEl;
      t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
      var s = t.children("." + e.slideClass);
      if (e.loopFillGroupWithBlank) {
        var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
        if (a !== e.slidesPerGroup) {
          for (var r = 0; r < a; r += 1) {
            var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
            t.append(n)
          }
          s = t.children("." + e.slideClass)
        }
      }
      "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
      var o = [], l = [];
      s.each(function (e, t) {
        var a = L(t);
        e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
      });
      for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
    }, loopFix: function () {
      var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev,
        o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
      t.allowSlidePrev = !0, t.allowSlideNext = !0;
      var p = -l[i] - t.getTranslate();
      i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
      t.allowSlidePrev = n, t.allowSlideNext = o
    }, loopDestroy: function () {
      var e = this.$wrapperEl, t = this.params, a = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
    }
  };
  var h = {
    setGrabCursor: function (e) {
      if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
      }
    }, unsetGrabCursor: function () {
      te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
    }
  };
  var v = {
    appendSlide: function (e) {
      var t = this, a = t.$wrapperEl, i = t.params;
      if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]); else a.append(e);
      i.loop && t.loopCreate(), i.observer && te.observer || t.update()
    }, prependSlide: function (e) {
      var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
      a.loop && t.loopDestroy();
      var r = s + 1;
      if ("object" == typeof e && "length" in e) {
        for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
        r = s + e.length
      } else i.prepend(e);
      a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1)
    }, addSlide: function (e, t) {
      var a = this, i = a.$wrapperEl, s = a.params, r = a.activeIndex;
      s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
      var n = a.slides.length;
      if (e <= 0) a.prependSlide(t); else if (n <= e) a.appendSlide(t); else {
        for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
          var p = a.slides.eq(d);
          p.remove(), l.unshift(p)
        }
        if ("object" == typeof t && "length" in t) {
          for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
          o = e < r ? r + t.length : r
        } else i.append(t);
        for (var u = 0; u < l.length; u += 1) i.append(l[u]);
        s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
      }
    }, removeSlide: function (e) {
      var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
      a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
      var r, n = s;
      if ("object" == typeof e && "length" in e) {
        for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
        n = Math.max(n, 0)
      } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
      a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
    }, removeAllSlides: function () {
      for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
      this.removeSlide(e)
    }
  }, m = function () {
    var e = J.navigator.userAgent, t = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        windows: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        cordova: J.cordova || J.phonegap,
        phonegap: J.cordova || J.phonegap
      }, a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
      s = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
      n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
      var o = t.osVersion.split("."), l = f.querySelector('meta[name="viewport"]');
      t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
    }
    return t.pixelRatio = J.devicePixelRatio || 1, t
  }();

  function g() {
    var e = this, t = e.params, a = e.el;
    if (!a || 0 !== a.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var i = e.allowSlideNext, s = e.allowSlidePrev, r = e.snapGrid;
      if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
      } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
      e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
  }

  var b = {
    attachEvents: function () {
      var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl;
      e.onTouchStart = function (e) {
        var t = this, a = t.touchEventsData, i = t.params, s = t.touches;
        if (!t.animating || !i.preventInteractionOnTransition) {
          var r = e;
          if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0; else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
            s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
            var n = s.currentX, o = s.currentY, l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
              d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
            if (!l || !(n <= d || n >= J.screen.width - d)) {
              if (ee.extend(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
              }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                var p = !0;
                L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                (i.touchStartForcePreventDefault || c) && r.preventDefault()
              }
              t.emit("touchStart", r)
            }
          }
        }
      }.bind(e), e.onTouchMove = function (e) {
        var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = e;
        if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
          if (!a.isTouchEvent || "mousemove" !== n.type) {
            var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
              l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
            if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
            if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (ee.extend(s, {
              startX: o,
              startY: l,
              currentX: o,
              currentY: l
            }), a.touchStartTime = ee.now()));
            if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
              if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1)
            } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
            if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1);
            if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
              s.currentX = o, s.currentY = l;
              var d, p = s.currentX - s.startX, c = s.currentY - s.startY;
              if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1; else if (a.startMoving) {
                t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                var u = t.isHorizontal() ? p : c;
                s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                var h = !0, v = i.resistanceRatio;
                if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                  if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                  if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                }
                i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                  position: s[t.isHorizontal() ? "startX" : "startY"],
                  time: a.touchStartTime
                }), a.velocities.push({
                  position: s[t.isHorizontal() ? "currentX" : "currentY"],
                  time: ee.now()
                })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
              }
            }
          }
        } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
      }.bind(e), e.onTouchEnd = function (e) {
        var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = t.$wrapperEl,
          o = t.slidesGrid, l = t.snapGrid, d = e;
        if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
        i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p, c = ee.now(), u = c - a.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function () {
          t && !t.destroyed && t.emit("click", d)
        }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function () {
          t.destroyed || (t.allowClick = !0)
        }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
        if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
          if (i.freeModeMomentum) {
            if (1 < a.velocities.length) {
              var h = a.velocities.pop(), v = a.velocities.pop(), f = h.position - v.position, m = h.time - v.time;
              t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
            } else t.velocity = 0;
            t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
            var g = 1e3 * i.freeModeMomentumRatio, b = t.velocity * g, w = t.translate + b;
            r && (w = -w);
            var y, x, T = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0); else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0); else if (i.freeModeSticky) {
              for (var S, C = 0; C < l.length; C += 1) if (l[C] > -w) {
                S = C;
                break
              }
              w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
            }
            if (x && t.once("transitionEnd", function () {
              t.loopFix()
            }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity); else if (i.freeModeSticky) return void t.slideToClosest();
            i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                t && !t.destroyed && t.transitionEnd()
              }))
            })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd()
            }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
          } else if (i.freeModeSticky) return void t.slideToClosest();
          (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
          for (var M = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (k = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, k = o[o.length - 1] - o[o.length - 2]);
          var z = (p - o[M]) / k;
          if (u > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
          }
        }
      }.bind(e), e.onClick = function (e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
      }.bind(e);
      var r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested;
      if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
        if (te.touch) {
          var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
            passive: !1,
            capture: n
          } : n), r.addEventListener(a.end, e.onTouchEnd, o)
        }
        (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
      } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
      (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
    }, detachEvents: function () {
      var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl,
        r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested;
      if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
        if (te.touch) {
          var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
        }
        (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
      } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
      (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
    }
  };
  var w, y = {
    setBreakpoint: function () {
      var e = this, t = e.activeIndex, a = e.initialized, i = e.loopedSlides;
      void 0 === i && (i = 0);
      var s = e.params, r = s.breakpoints;
      if (r && (!r || 0 !== Object.keys(r).length)) {
        var n = e.getBreakpoint(r);
        if (n && e.currentBreakpoint !== n) {
          var o = n in r ? r[n] : void 0;
          o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
            var t = o[e];
            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
          });
          var l = o || e.originalParams, d = s.loop && l.slidesPerView !== s.slidesPerView;
          ee.extend(e.params, l), ee.extend(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), e.currentBreakpoint = n, d && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
        }
      }
    }, getBreakpoint: function (e) {
      if (e) {
        var t = !1, a = [];
        Object.keys(e).forEach(function (e) {
          a.push(e)
        }), a.sort(function (e, t) {
          return parseInt(e, 10) - parseInt(t, 10)
        });
        for (var i = 0; i < a.length; i += 1) {
          var s = a[i];
          this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
        }
        return t || "max"
      }
    }
  }, I = {
    isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
    isEdge: !!J.navigator.userAgent.match(/Edge/g),
    isSafari: (w = J.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
  };
  var x = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsInverse: !1,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    }, T = {
      update: o,
      translate: d,
      transition: p,
      slide: c,
      loop: u,
      grabCursor: h,
      manipulation: v,
      events: b,
      breakpoints: y,
      checkOverflow: {
        checkOverflow: function () {
          var e = this, t = e.isLocked;
          e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
        }
      },
      classes: {
        addClasses: function () {
          var t = this.classNames, a = this.params, e = this.rtl, i = this.$el, s = [];
          s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
            t.push(a.containerModifierClass + e)
          }), i.addClass(t.join(" "))
        }, removeClasses: function () {
          var e = this.$el, t = this.classNames;
          e.removeClass(t.join(" "))
        }
      },
      images: {
        loadImage: function (e, t, a, i, s, r) {
          var n;

          function o() {
            r && r()
          }

          e.complete && s ? o() : t ? ((n = new J.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
        }, preloadImages: function () {
          var e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
          }

          e.imagesToLoad = e.$el.find("img");
          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
          }
        }
      }
    }, E = {}, S = function (u) {
      function h() {
        for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
        1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(T).forEach(function (t) {
          Object.keys(T[t]).forEach(function (e) {
            h.prototype[e] || (h.prototype[e] = T[t][e])
          })
        });
        var r = this;
        void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
          var t = r.modules[e];
          if (t.params) {
            var a = Object.keys(t.params)[0], i = t.params[a];
            if ("object" != typeof i || null === i) return;
            if (!(a in s && "enabled" in i)) return;
            !0 === s[a] && (s[a] = {enabled: !0}), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {enabled: !1})
          }
        });
        var n = ee.extend({}, x);
        r.useModulesParams(n), r.params = ee.extend({}, n, E, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
        var o = (r.$ = L)(r.params.el);
        if (t = o[0]) {
          if (1 < o.length) {
            var l = [];
            return o.each(function (e, t) {
              var a = ee.extend({}, s, {el: t});
              l.push(new h(a))
            }), l
          }
          t.swiper = r, o.data("swiper", r);
          var d, p, c = o.children("." + r.params.wrapperClass);
          return ee.extend(r, {
            $el: o,
            el: t,
            $wrapperEl: c,
            wrapperEl: c[0],
            classNames: [],
            slides: L(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function () {
              return "horizontal" === r.params.direction
            },
            isVertical: function () {
              return "vertical" === r.params.direction
            },
            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
            rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
            wrongRTL: "-webkit-box" === c.css("display"),
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
              start: d[0],
              move: d[1],
              end: d[2]
            }, r.touchEventsDesktop = {
              start: p[0],
              move: p[1],
              end: p[2]
            }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: "input, select, option, textarea, button, video",
              lastClickTime: ee.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
            imagesToLoad: [],
            imagesLoaded: 0
          }), r.useModules(), r.params.init && r.init(), r
        }
      }

      u && (h.__proto__ = u);
      var e = {
        extendedDefaults: {configurable: !0},
        defaults: {configurable: !0},
        Class: {configurable: !0},
        $: {configurable: !0}
      };
      return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
        var e = this, t = e.params, a = e.slides, i = e.slidesGrid, s = e.size, r = e.activeIndex, n = 1;
        if (t.centeredSlides) {
          for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
          for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
        } else for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
        return n
      }, h.prototype.update = function () {
        var a = this;
        if (a && !a.destroyed) {
          var e = a.snapGrid, t = a.params;
          t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
        }

        function i() {
          var e = a.rtlTranslate ? -1 * a.translate : a.translate,
            t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
          a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
        }
      }, h.prototype.init = function () {
        var e = this;
        e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
      }, h.prototype.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var a = this, i = a.params, s = a.$el, r = a.$wrapperEl, n = a.slides;
        return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
          a.off(e)
        }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null
      }, h.extendDefaults = function (e) {
        ee.extend(E, e)
      }, e.extendedDefaults.get = function () {
        return E
      }, e.defaults.get = function () {
        return x
      }, e.Class.get = function () {
        return u
      }, e.$.get = function () {
        return L
      }, Object.defineProperties(h, e), h
    }(s), C = {name: "device", proto: {device: m}, static: {device: m}},
    M = {name: "support", proto: {support: te}, static: {support: te}},
    k = {name: "browser", proto: {browser: I}, static: {browser: I}}, P = {
      name: "resize", create: function () {
        var e = this;
        ee.extend(e, {
          resize: {
            resizeHandler: function () {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
            }, orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange")
            }
          }
        })
      }, on: {
        init: function () {
          J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
        }, destroy: function () {
          J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
        }
      }
    }, z = {
      func: J.MutationObserver || J.WebkitMutationObserver, attach: function (e, t) {
        void 0 === t && (t = {});
        var a = this, i = new z.func(function (e) {
          if (1 !== e.length) {
            var t = function () {
              a.emit("observerUpdate", e[0])
            };
            J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
          } else a.emit("observerUpdate", e[0])
        });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), a.observer.observers.push(i)
      }, init: function () {
        var e = this;
        if (te.observer && e.params.observer) {
          if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], {childList: e.params.observeSlideChildren}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
        }
      }, destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect()
        }), this.observer.observers = []
      }
    }, $ = {
      name: "observer", params: {observer: !1, observeParents: !1, observeSlideChildren: !1}, create: function () {
        ee.extend(this, {
          observer: {
            init: z.init.bind(this),
            attach: z.attach.bind(this),
            destroy: z.destroy.bind(this),
            observers: []
          }
        })
      }, on: {
        init: function () {
          this.observer.init()
        }, destroy: function () {
          this.observer.destroy()
        }
      }
    }, D = {
      update: function (e) {
        var t = this, a = t.params, i = a.slidesPerView, s = a.slidesPerGroup, r = a.centeredSlides, n = t.params.virtual,
          o = n.addSlidesBefore, l = n.addSlidesAfter, d = t.virtual, p = d.from, c = d.to, u = d.slides,
          h = d.slidesGrid, v = d.renderSlide, f = d.offset;
        t.updateActiveIndex();
        var m, g, b, w = t.activeIndex || 0;
        m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
        var y = Math.max((w || 0) - b, 0), x = Math.min((w || 0) + g, u.length - 1),
          T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

        function E() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
        }

        if (ee.extend(t.virtual, {
          from: y,
          to: x,
          offset: T,
          slidesGrid: t.slidesGrid
        }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: T,
          from: y,
          to: x,
          slides: function () {
            for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
            return e
          }()
        }), void E();
        var S = [], C = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var M = p; M <= c; M += 1) (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
        for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
        C.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e))
        }), S.sort(function (e, t) {
          return t - e
        }).forEach(function (e) {
          t.$wrapperEl.prepend(v(u[e], e))
        }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
      }, renderSlide: function (e, t) {
        var a = this, i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
      }, appendSlide: function (e) {
        this.virtual.slides.push(e), this.virtual.update(!0)
      }, prependSlide: function (e) {
        var t = this;
        if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
          var a = t.virtual.cache, i = {};
          Object.keys(a).forEach(function (e) {
            i[e + 1] = a[e]
          }), t.virtual.cache = i
        }
        t.virtual.update(!0), t.slideNext(0)
      }
    }, O = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function () {
        var e = this;
        ee.extend(e, {
          virtual: {
            update: D.update.bind(e),
            appendSlide: D.appendSlide.bind(e),
            prependSlide: D.prependSlide.bind(e),
            renderSlide: D.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {}
          }
        })
      },
      on: {
        beforeInit: function () {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {watchSlidesProgress: !0};
            ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
          }
        }, setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update()
        }
      }
    }, A = {
      handle: function (e) {
        var t = this, a = t.rtlTranslate, i = e;
        i.originalEvent && (i = i.originalEvent);
        var s = i.keyCode || i.charCode;
        if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
        if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
          if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
            var r = !1;
            if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
            var n = J.innerWidth, o = J.innerHeight, l = t.$el.offset();
            a && (l.left -= t.$el[0].scrollLeft);
            for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
              var c = d[p];
              0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
            }
            if (!r) return
          }
          t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
        }
      }, enable: function () {
        this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
      }, disable: function () {
        this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
      }
    }, N = {
      name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
        ee.extend(this, {
          keyboard: {
            enabled: !1,
            enable: A.enable.bind(this),
            disable: A.disable.bind(this),
            handle: A.handle.bind(this)
          }
        })
      }, on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable()
        }, destroy: function () {
          this.keyboard.enabled && this.keyboard.disable()
        }
      }
    };
  var H = {
    lastScrollTime: ee.now(), event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
      var e = "onwheel", t = e in f;
      if (!t) {
        var a = f.createElement("div");
        a.setAttribute(e, "return;"), t = "function" == typeof a[e]
      }
      return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
    }() ? "wheel" : "mousewheel", normalize: function (e) {
      var t = 0, a = 0, i = 0, s = 0;
      return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
        spinX: t,
        spinY: a,
        pixelX: i,
        pixelY: s
      }
    }, handleMouseEnter: function () {
      this.mouseEntered = !0
    }, handleMouseLeave: function () {
      this.mouseEntered = !1
    }, handle: function (e) {
      var t = e, a = this, i = a.params.mousewheel;
      if (!a.mouseEntered && !i.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var s = 0, r = a.rtlTranslate ? -1 : 1, n = H.normalize(t);
      if (i.forceToAxis) if (a.isHorizontal()) {
        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
        s = n.pixelX * r
      } else {
        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
        s = n.pixelY
      } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
      if (0 === s) return !0;
      if (i.invert && (s = -s), a.params.freeMode) {
        a.params.loop && a.loopFix();
        var o = a.getTranslate() + s * i.sensitivity, l = a.isBeginning, d = a.isEnd;
        if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function () {
          a.slideToClosest()
        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
      } else {
        if (60 < ee.now() - a.mousewheel.lastScrollTime) if (s < 0) if (a.isEnd && !a.params.loop || a.animating) {
          if (i.releaseOnEdges) return !0
        } else a.slideNext(), a.emit("scroll", t); else if (a.isBeginning && !a.params.loop || a.animating) {
          if (i.releaseOnEdges) return !0
        } else a.slidePrev(), a.emit("scroll", t);
        a.mousewheel.lastScrollTime = (new J.Date).getTime()
      }
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
    }, enable: function () {
      var e = this;
      if (!H.event) return !1;
      if (e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(H.event, e.mousewheel.handle), e.mousewheel.enabled = !0
    }, disable: function () {
      var e = this;
      if (!H.event) return !1;
      if (!e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
    }
  }, G = {
    update: function () {
      var e = this, t = e.params.navigation;
      if (!e.params.loop) {
        var a = e.navigation, i = a.$nextEl, s = a.$prevEl;
        s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
      }
    }, onPrevClick: function (e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
    }, onNextClick: function (e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
    }, init: function () {
      var e, t, a = this, i = a.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }))
    }, destroy: function () {
      var e = this, t = e.navigation, a = t.$nextEl, i = t.$prevEl;
      a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
    }
  }, B = {
    update: function () {
      var e = this, t = e.rtl, s = e.params.pagination;
      if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          i = e.pagination.$el,
          n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
          var o, l, d, p = e.pagination.bullets;
          if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
            var a = L(t), i = a.index();
            i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
          }); else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
            c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
          }
          if (s.dynamicBullets) {
            var v = Math.min(p.length, s.dynamicMainBullets + 4),
              f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
              m = t ? "right" : "left";
            p.css(e.isHorizontal() ? m : "top", f + "px")
          }
        }
        if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
          var g;
          g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
          var b = (r + 1) / n, w = 1, y = 1;
          "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
        }
        "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
      }
    }, render: function () {
      var e = this, t = e.params.pagination;
      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el,
          s = "";
        if ("bullets" === t.type) {
          for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
          i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
        }
        "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
      }
    }, init: function () {
      var a = this, e = a.params.pagination;
      if (e.el) {
        var t = L(e.el);
        0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
          e.preventDefault();
          var t = L(this).index() * a.params.slidesPerGroup;
          a.params.loop && (t += a.loopedSlides), a.slideTo(t)
        }), ee.extend(a.pagination, {$el: t, el: t[0]}))
      }
    }, destroy: function () {
      var e = this, t = e.params.pagination;
      if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
        var a = e.pagination.$el;
        a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
      }
    }
  }, X = {
    setTranslate: function () {
      var e = this;
      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar, a = e.rtlTranslate, i = e.progress, s = t.dragSize, r = t.trackSize, n = t.$dragEl,
          o = t.$el, l = e.params.scrollbar, d = s, p = (r - s) * i;
        a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
          o[0].style.opacity = 0, o.transition(400)
        }, 1e3))
      }
    }, setTransition: function (e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
    }, updateSize: function () {
      var e = this;
      if (e.params.scrollbar.el && e.scrollbar.el) {
        var t = e.scrollbar, a = t.$dragEl, i = t.$el;
        a[0].style.width = "", a[0].style.height = "";
        var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize,
          o = n * (r / e.size);
        s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), ee.extend(t, {
          trackSize: r,
          divider: n,
          moveDivider: o,
          dragSize: s
        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
      }
    }, setDragPosition: function (e) {
      var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, o = i.trackSize;
      t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
      a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
    }, onDragStart: function (e) {
      var t = this, a = t.params.scrollbar, i = t.scrollbar, s = t.$wrapperEl, r = i.$el, n = i.$dragEl;
      t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
    }, onDragMove: function (e) {
      var t = this.scrollbar, a = this.$wrapperEl, i = t.$el, s = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
    }, onDragEnd: function (e) {
      var t = this, a = t.params.scrollbar, i = t.scrollbar.$el;
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function () {
        i.css("opacity", 0), i.transition(400)
      }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
    }, enableDraggable: function () {
      var e = this;
      if (e.params.scrollbar.el) {
        var t = e.scrollbar, a = e.touchEventsTouch, i = e.touchEventsDesktop, s = e.params, r = t.$el[0],
          n = !(!te.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
          o = !(!te.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
        te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
      }
    }, disableDraggable: function () {
      var e = this;
      if (e.params.scrollbar.el) {
        var t = e.scrollbar, a = e.touchEventsTouch, i = e.touchEventsDesktop, s = e.params, r = t.$el[0],
          n = !(!te.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
          o = !(!te.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
        te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
      }
    }, init: function () {
      var e = this;
      if (e.params.scrollbar.el) {
        var t = e.scrollbar, a = e.$el, i = e.params.scrollbar, s = L(i.el);
        e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
        var r = s.find("." + e.params.scrollbar.dragClass);
        0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
          $el: s,
          el: s[0],
          $dragEl: r,
          dragEl: r[0]
        }), i.draggable && t.enableDraggable()
      }
    }, destroy: function () {
      this.scrollbar.disableDraggable()
    }
  }, Y = {
    setTransform: function (e, t) {
      var a = this.rtl, i = L(e), s = a ? -1 : 1, r = i.attr("data-swiper-parallax") || "0",
        n = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y"),
        l = i.attr("data-swiper-parallax-scale"), d = i.attr("data-swiper-parallax-opacity");
      if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
        var p = d - (d - 1) * (1 - Math.abs(t));
        i[0].style.opacity = p
      }
      if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)"); else {
        var c = l - (l - 1) * (1 - Math.abs(t));
        i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
      }
    }, setTranslate: function () {
      var i = this, e = i.$el, t = i.slides, s = i.progress, r = i.snapGrid;
      e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
        i.parallax.setTransform(t, s)
      }), t.each(function (e, t) {
        var a = t.progress;
        1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
          i.parallax.setTransform(t, a)
        })
      })
    }, setTransition: function (s) {
      void 0 === s && (s = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
        var a = L(t), i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
        0 === s && (i = 0), a.transition(i)
      })
    }
  }, V = {
    getDistanceBetweenTouches: function (e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX, a = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX,
        s = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
    }, onGestureStart: function (e) {
      var t = this, a = t.params.zoom, i = t.zoom, s = i.gesture;
      if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureTouched = !0, s.scaleStart = V.getDistanceBetweenTouches(e)
      }
      s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
    }, onGestureChange: function (e) {
      var t = this.params.zoom, a = this.zoom, i = a.gesture;
      if (!te.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        a.fakeGestureMoved = !0, i.scaleMove = V.getDistanceBetweenTouches(e)
      }
      i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
    }, onGestureEnd: function (e) {
      var t = this.params.zoom, a = this.zoom, i = a.gesture;
      if (!te.gestures) {
        if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
        a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
      }
      i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
    }, onTouchStart: function (e) {
      var t = this.zoom, a = t.gesture, i = t.image;
      a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
    }, onTouchMove: function (e) {
      var t = this, a = t.zoom, i = a.gesture, s = a.image, r = a.velocity;
      if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var n = s.width * a.scale, o = s.height * a.scale;
        if (!(n < i.slideWidth && o < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
          }
          e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
        }
      }
    }, onTouchEnd: function () {
      var e = this.zoom, t = e.gesture, a = e.image, i = e.velocity;
      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
        a.isTouched = !1, a.isMoved = !1;
        var s = 300, r = 300, n = i.x * s, o = a.currentX + n, l = i.y * r, d = a.currentY + l;
        0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
        var p = Math.max(s, r);
        a.currentX = o, a.currentY = d;
        var c = a.width * e.scale, u = a.height * e.scale;
        a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
      }
    }, onTransitionEnd: function () {
      var e = this.zoom, t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
    }, toggle: function (e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t.in(e)
    }, in: function (e) {
      var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this, b = g.zoom, w = g.params.zoom, y = b.gesture,
        x = b.image;
      (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
    }, out: function () {
      var e = this, t = e.zoom, a = e.params.zoom, i = t.gesture;
      i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
    }, enable: function () {
      var e = this, t = e.zoom;
      if (!t.enabled) {
        t.enabled = !0;
        var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
      }
    }, disable: function () {
      var e = this, t = e.zoom;
      if (t.enabled) {
        e.zoom.enabled = !1;
        var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
      }
    }
  }, F = {
    loadInSlide: function (e, l) {
      void 0 === l && (l = !0);
      var d = this, p = d.params.lazy;
      if (void 0 !== e && 0 !== d.slides.length) {
        var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
          t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
        !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
          var i = L(t);
          i.addClass(p.loadingClass);
          var s = i.attr("data-background"), r = i.attr("data-src"), n = i.attr("data-srcset"),
            o = i.attr("data-sizes");
          d.loadImage(i[0], r || s, n, o, !1, function () {
            if (null != d && d && (!d || d.params) && !d.destroyed) {
              if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                var e = c.attr("data-swiper-slide-index");
                if (c.hasClass(d.params.slideDuplicateClass)) {
                  var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                  d.lazy.loadInSlide(t.index(), !1)
                } else {
                  var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  d.lazy.loadInSlide(a.index(), !1)
                }
              }
              d.emit("lazyImageReady", c[0], i[0])
            }
          }), d.emit("lazyImageLoad", c[0], i[0])
        })
      }
    }, load: function () {
      var i = this, t = i.$wrapperEl, a = i.params, s = i.slides, e = i.activeIndex, r = i.virtual && a.virtual.enabled,
        n = a.lazy, o = a.slidesPerView;

      function l(e) {
        if (r) {
          if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
        } else if (s[e]) return !0;
        return !1
      }

      function d(e) {
        return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
      }

      if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
        var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
        i.lazy.loadInSlide(a)
      }); else if (1 < o) for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p); else i.lazy.loadInSlide(e);
      if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
        for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
      } else {
        var g = t.children("." + a.slideNextClass);
        0 < g.length && i.lazy.loadInSlide(d(g));
        var b = t.children("." + a.slidePrevClass);
        0 < b.length && i.lazy.loadInSlide(d(b))
      }
    }
  }, R = {
    LinearSpline: function (e, t) {
      var a, i, s, r, n, o = function (e, t) {
        for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
        return a
      };
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
      }, this
    }, getInterpolateFunction: function (e) {
      var t = this;
      t.controller.spline || (t.controller.spline = t.params.loop ? new R.LinearSpline(t.slidesGrid, e.slidesGrid) : new R.LinearSpline(t.snapGrid, e.snapGrid))
    }, setTranslate: function (e, t) {
      var a, i, s = this, r = s.controller.control;

      function n(e) {
        var t = s.rtlTranslate ? -s.translate : s.translate;
        "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]); else r instanceof S && t !== r && n(r)
    }, setTransition: function (t, e) {
      var a, i = this, s = i.controller.control;

      function r(e) {
        e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function () {
          e.updateAutoHeight()
        }), e.$wrapperEl.transitionEnd(function () {
          s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
        }))
      }

      if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]); else s instanceof S && e !== s && r(s)
    }
  }, q = {
    makeElFocusable: function (e) {
      return e.attr("tabIndex", "0"), e
    }, addElRole: function (e, t) {
      return e.attr("role", t), e
    }, addElLabel: function (e, t) {
      return e.attr("aria-label", t), e
    }, disableEl: function (e) {
      return e.attr("aria-disabled", !0), e
    }, enableEl: function (e) {
      return e.attr("aria-disabled", !1), e
    }, onEnterKey: function (e) {
      var t = this, a = t.params.a11y;
      if (13 === e.keyCode) {
        var i = L(e.target);
        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
      }
    }, notify: function (e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e))
    }, updateNavigation: function () {
      var e = this;
      if (!e.params.loop) {
        var t = e.navigation, a = t.$nextEl, i = t.$prevEl;
        i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
      }
    }, updatePagination: function () {
      var i = this, s = i.params.a11y;
      i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
        var a = L(t);
        i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
      })
    }, init: function () {
      var e = this;
      e.$el.append(e.a11y.liveRegion);
      var t, a, i = e.params.a11y;
      e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
    }, destroy: function () {
      var e, t, a = this;
      a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
    }
  }, W = {
    init: function () {
      var e = this;
      if (e.params.history) {
        if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
        var t = e.history;
        t.initialized = !0, t.paths = W.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
      }
    }, destroy: function () {
      this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
    }, setHistoryPopState: function () {
      this.history.paths = W.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
    }, getPathValues: function () {
      var e = J.location.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e
      }), t = e.length;
      return {key: e[t - 2], value: e[t - 1]}
    }, setHistory: function (e, t) {
      if (this.history.initialized && this.params.history.enabled) {
        var a = this.slides.eq(t), i = W.slugify(a.attr("data-history"));
        J.location.pathname.includes(e) || (i = e + "/" + i);
        var s = J.history.state;
        s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({value: i}, null, i) : J.history.pushState({value: i}, null, i))
      }
    }, slugify: function (e) {
      return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    }, scrollToSlide: function (e, t, a) {
      var i = this;
      if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
        var n = i.slides.eq(s);
        if (W.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
          var o = n.index();
          i.slideTo(o, e, a)
        }
      } else i.slideTo(0, e, a)
    }
  }, j = {
    onHashCange: function () {
      var e = this, t = f.location.hash.replace("#", "");
      if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
        if (void 0 === a) return;
        e.slideTo(a)
      }
    }, setHash: function () {
      var e = this;
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""); else {
        var t = e.slides.eq(e.activeIndex), a = t.attr("data-hash") || t.attr("data-history");
        f.location.hash = a || ""
      }
    }, init: function () {
      var e = this;
      if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
        e.hashNavigation.initialized = !0;
        var t = f.location.hash.replace("#", "");
        if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) {
          var s = e.slides.eq(a);
          if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
            var r = s.index();
            e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
          }
        }
        e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
      }
    }, destroy: function () {
      this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
    }
  }, U = {
    run: function () {
      var e = this, t = e.slides.eq(e.activeIndex), a = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
      }, a)
    }, start: function () {
      var e = this;
      return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
    }, stop: function () {
      var e = this;
      return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
    }, pause: function (e) {
      var t = this;
      t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
    }
  }, K = {
    setTranslate: function () {
      for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
        var i = e.slides.eq(a), s = -i[0].swiperSlideOffset;
        e.params.virtualTranslate || (s -= e.translate);
        var r = 0;
        e.isHorizontal() || (r = s, s = 0);
        var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({opacity: n}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
      }
    }, setTransition: function (e) {
      var a = this, t = a.slides, i = a.$wrapperEl;
      if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
        var s = !1;
        t.transitionEnd(function () {
          if (!s && a && !a.destroyed) {
            s = !0, a.animating = !1;
            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
          }
        })
      }
    }
  }, _ = {
    setTranslate: function () {
      var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, o = t.rtlTranslate,
        l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, u = 0;
      d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: r + "px"})) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
      for (var h = 0; h < s.length; h += 1) {
        var v = s.eq(h), f = h;
        c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
        var m = 90 * f, g = Math.floor(m / 360);
        o && (m = -m, g = Math.floor(-m / 360));
        var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
        f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
        var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
        if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
          var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
            S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
        }
      }
      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
        "transform-origin": "50% 50% -" + l / 2 + "px"
      }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
          M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2), k = d.shadowScale,
          P = d.shadowScale / M, z = d.shadowOffset;
        e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + z) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
      }
      var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
      i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
    }, setTransition: function (e) {
      var t = this.$el;
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
    }
  }, Z = {
    setTranslate: function () {
      for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
        var s = t.eq(i), r = s[0].progress;
        e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
        var n = -180 * r, o = 0, l = -s[0].swiperSlideOffset, d = 0;
        if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
          var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
            c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
        }
        s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
      }
    }, setTransition: function (e) {
      var a = this, t = a.slides, i = a.activeIndex, s = a.$wrapperEl;
      if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
        var r = !1;
        t.eq(i).transitionEnd(function () {
          if (!r && a && !a.destroyed) {
            r = !0, a.animating = !1;
            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
          }
        })
      }
    }
  }, Q = {
    setTranslate: function () {
      for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
        var v = i.eq(u), f = r[u], m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier, g = o ? p * m : 0,
          b = o ? 0 : p * m, w = -c * Math.abs(m), y = o ? 0 : n.stretch * m, x = o ? n.stretch * m : 0;
        Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
        var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
        if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
          var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
            S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
        }
      }
      (te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
    }, setTransition: function (e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
    }
  }, ae = {
    init: function () {
      var e = this, t = e.params.thumbs, a = e.constructor;
      t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), ee.extend(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
    }, onThumbClick: function () {
      var e = this, t = e.thumbs.swiper;
      if (t) {
        var a = t.clickedIndex, i = t.clickedSlide;
        if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
          var s;
          if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
            var r = e.activeIndex;
            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
            var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
              o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
          }
          e.slideTo(s)
        }
      }
    }, update: function (e) {
      var t = this, a = t.thumbs.swiper;
      if (a) {
        var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
        if (t.realIndex !== a.realIndex) {
          var s, r = a.activeIndex;
          if (a.params.loop) {
            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
            var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
              o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
            s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
          } else s = t.realIndex;
          a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
        }
        var l = 1, d = t.params.thumbs.slideThumbActiveClass;
        if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d); else for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
      }
    }
  }, ie = [C, M, k, P, $, O, N, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarged: "container"
      }
    },
    create: function () {
      var e = this;
      ee.extend(e, {
        mousewheel: {
          enabled: !1,
          enable: H.enable.bind(e),
          disable: H.disable.bind(e),
          handle: H.handle.bind(e),
          handleMouseEnter: H.handleMouseEnter.bind(e),
          handleMouseLeave: H.handleMouseLeave.bind(e),
          lastScrollTime: ee.now()
        }
      })
    },
    on: {
      init: function () {
        this.params.mousewheel.enabled && this.mousewheel.enable()
      }, destroy: function () {
        this.mousewheel.enabled && this.mousewheel.disable()
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function () {
      var e = this;
      ee.extend(e, {
        navigation: {
          init: G.init.bind(e),
          update: G.update.bind(e),
          destroy: G.destroy.bind(e),
          onNextClick: G.onNextClick.bind(e),
          onPrevClick: G.onPrevClick.bind(e)
        }
      })
    },
    on: {
      init: function () {
        this.navigation.init(), this.navigation.update()
      }, toEdge: function () {
        this.navigation.update()
      }, fromEdge: function () {
        this.navigation.update()
      }, destroy: function () {
        this.navigation.destroy()
      }, click: function (e) {
        var t = this.navigation, a = t.$nextEl, i = t.$prevEl;
        !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (e) {
          return e
        },
        formatFractionTotal: function (e) {
          return e
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function () {
      var e = this;
      ee.extend(e, {
        pagination: {
          init: B.init.bind(e),
          render: B.render.bind(e),
          update: B.update.bind(e),
          destroy: B.destroy.bind(e),
          dynamicBulletIndex: 0
        }
      })
    },
    on: {
      init: function () {
        this.pagination.init(), this.pagination.render(), this.pagination.update()
      }, activeIndexChange: function () {
        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
      }, snapIndexChange: function () {
        this.params.loop || this.pagination.update()
      }, slidesLengthChange: function () {
        this.params.loop && (this.pagination.render(), this.pagination.update())
      }, snapGridLengthChange: function () {
        this.params.loop || (this.pagination.render(), this.pagination.update())
      }, destroy: function () {
        this.pagination.destroy()
      }, click: function (e) {
        var t = this;
        t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function () {
      var e = this;
      ee.extend(e, {
        scrollbar: {
          init: X.init.bind(e),
          destroy: X.destroy.bind(e),
          updateSize: X.updateSize.bind(e),
          setTranslate: X.setTranslate.bind(e),
          setTransition: X.setTransition.bind(e),
          enableDraggable: X.enableDraggable.bind(e),
          disableDraggable: X.disableDraggable.bind(e),
          setDragPosition: X.setDragPosition.bind(e),
          onDragStart: X.onDragStart.bind(e),
          onDragMove: X.onDragMove.bind(e),
          onDragEnd: X.onDragEnd.bind(e),
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }
      })
    },
    on: {
      init: function () {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
      }, update: function () {
        this.scrollbar.updateSize()
      }, resize: function () {
        this.scrollbar.updateSize()
      }, observerUpdate: function () {
        this.scrollbar.updateSize()
      }, setTranslate: function () {
        this.scrollbar.setTranslate()
      }, setTransition: function (e) {
        this.scrollbar.setTransition(e)
      }, destroy: function () {
        this.scrollbar.destroy()
      }
    }
  }, {
    name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
      ee.extend(this, {
        parallax: {
          setTransform: Y.setTransform.bind(this),
          setTranslate: Y.setTranslate.bind(this),
          setTransition: Y.setTransition.bind(this)
        }
      })
    }, on: {
      beforeInit: function () {
        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
      }, init: function () {
        this.params.parallax && this.parallax.setTranslate()
      }, setTranslate: function () {
        this.params.parallax && this.parallax.setTranslate()
      }, setTransition: function (e) {
        this.params.parallax && this.parallax.setTransition(e)
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function () {
      var i = this, t = {
        enabled: !1,
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
      };
      "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
        t[e] = V[e].bind(i)
      }), ee.extend(i, {zoom: t});
      var s = 1;
      Object.defineProperty(i.zoom, "scale", {
        get: function () {
          return s
        }, set: function (e) {
          if (s !== e) {
            var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
              a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
            i.emit("zoomChange", e, t, a)
          }
          s = e
        }
      })
    },
    on: {
      init: function () {
        this.params.zoom.enabled && this.zoom.enable()
      }, destroy: function () {
        this.zoom.disable()
      }, touchStart: function (e) {
        this.zoom.enabled && this.zoom.onTouchStart(e)
      }, touchEnd: function (e) {
        this.zoom.enabled && this.zoom.onTouchEnd(e)
      }, doubleTap: function (e) {
        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
      }, transitionEnd: function () {
        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function () {
      ee.extend(this, {lazy: {initialImageLoaded: !1, load: F.load.bind(this), loadInSlide: F.loadInSlide.bind(this)}})
    },
    on: {
      beforeInit: function () {
        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
      }, init: function () {
        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
      }, scroll: function () {
        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
      }, resize: function () {
        this.params.lazy.enabled && this.lazy.load()
      }, scrollbarDragMove: function () {
        this.params.lazy.enabled && this.lazy.load()
      }, transitionStart: function () {
        var e = this;
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
      }, transitionEnd: function () {
        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
      }
    }
  }, {
    name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
      var e = this;
      ee.extend(e, {
        controller: {
          control: e.params.controller.control,
          getInterpolateFunction: R.getInterpolateFunction.bind(e),
          setTranslate: R.setTranslate.bind(e),
          setTransition: R.setTransition.bind(e)
        }
      })
    }, on: {
      update: function () {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
      }, resize: function () {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
      }, observerUpdate: function () {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
      }, setTranslate: function (e, t) {
        this.controller.control && this.controller.setTranslate(e, t)
      }, setTransition: function (e, t) {
        this.controller.control && this.controller.setTransition(e, t)
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}"
      }
    },
    create: function () {
      var t = this;
      ee.extend(t, {a11y: {liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(q).forEach(function (e) {
        t.a11y[e] = q[e].bind(t)
      })
    },
    on: {
      init: function () {
        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
      }, toEdge: function () {
        this.params.a11y.enabled && this.a11y.updateNavigation()
      }, fromEdge: function () {
        this.params.a11y.enabled && this.a11y.updateNavigation()
      }, paginationUpdate: function () {
        this.params.a11y.enabled && this.a11y.updatePagination()
      }, destroy: function () {
        this.params.a11y.enabled && this.a11y.destroy()
      }
    }
  }, {
    name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
      var e = this;
      ee.extend(e, {
        history: {
          init: W.init.bind(e),
          setHistory: W.setHistory.bind(e),
          setHistoryPopState: W.setHistoryPopState.bind(e),
          scrollToSlide: W.scrollToSlide.bind(e),
          destroy: W.destroy.bind(e)
        }
      })
    }, on: {
      init: function () {
        this.params.history.enabled && this.history.init()
      }, destroy: function () {
        this.params.history.enabled && this.history.destroy()
      }, transitionEnd: function () {
        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
      }
    }
  }, {
    name: "hash-navigation",
    params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
    create: function () {
      var e = this;
      ee.extend(e, {
        hashNavigation: {
          initialized: !1,
          init: j.init.bind(e),
          destroy: j.destroy.bind(e),
          setHash: j.setHash.bind(e),
          onHashCange: j.onHashCange.bind(e)
        }
      })
    },
    on: {
      init: function () {
        this.params.hashNavigation.enabled && this.hashNavigation.init()
      }, destroy: function () {
        this.params.hashNavigation.enabled && this.hashNavigation.destroy()
      }, transitionEnd: function () {
        this.hashNavigation.initialized && this.hashNavigation.setHash()
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function () {
      var t = this;
      ee.extend(t, {
        autoplay: {
          running: !1,
          paused: !1,
          run: U.run.bind(t),
          start: U.start.bind(t),
          stop: U.stop.bind(t),
          pause: U.pause.bind(t),
          onTransitionEnd: function (e) {
            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
          }
        }
      })
    },
    on: {
      init: function () {
        this.params.autoplay.enabled && this.autoplay.start()
      }, beforeTransitionStart: function (e, t) {
        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
      }, sliderFirstMove: function () {
        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
      }, destroy: function () {
        this.autoplay.running && this.autoplay.stop()
      }
    }
  }, {
    name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
      ee.extend(this, {
        fadeEffect: {
          setTranslate: K.setTranslate.bind(this),
          setTransition: K.setTransition.bind(this)
        }
      })
    }, on: {
      beforeInit: function () {
        var e = this;
        if ("fade" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "fade");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          ee.extend(e.params, t), ee.extend(e.originalParams, t)
        }
      }, setTranslate: function () {
        "fade" === this.params.effect && this.fadeEffect.setTranslate()
      }, setTransition: function (e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e)
      }
    }
  }, {
    name: "effect-cube",
    params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
    create: function () {
      ee.extend(this, {
        cubeEffect: {
          setTranslate: _.setTranslate.bind(this),
          setTransition: _.setTransition.bind(this)
        }
      })
    },
    on: {
      beforeInit: function () {
        var e = this;
        if ("cube" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          ee.extend(e.params, t), ee.extend(e.originalParams, t)
        }
      }, setTranslate: function () {
        "cube" === this.params.effect && this.cubeEffect.setTranslate()
      }, setTransition: function (e) {
        "cube" === this.params.effect && this.cubeEffect.setTransition(e)
      }
    }
  }, {
    name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
      ee.extend(this, {
        flipEffect: {
          setTranslate: Z.setTranslate.bind(this),
          setTransition: Z.setTransition.bind(this)
        }
      })
    }, on: {
      beforeInit: function () {
        var e = this;
        if ("flip" === e.params.effect) {
          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
          var t = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          ee.extend(e.params, t), ee.extend(e.originalParams, t)
        }
      }, setTranslate: function () {
        "flip" === this.params.effect && this.flipEffect.setTranslate()
      }, setTransition: function (e) {
        "flip" === this.params.effect && this.flipEffect.setTransition(e)
      }
    }
  }, {
    name: "effect-coverflow",
    params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
    create: function () {
      ee.extend(this, {
        coverflowEffect: {
          setTranslate: Q.setTranslate.bind(this),
          setTransition: Q.setTransition.bind(this)
        }
      })
    },
    on: {
      beforeInit: function () {
        var e = this;
        "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
      }, setTranslate: function () {
        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
      }, setTransition: function (e) {
        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function () {
      ee.extend(this, {
        thumbs: {
          swiper: null,
          init: ae.init.bind(this),
          update: ae.update.bind(this),
          onThumbClick: ae.onThumbClick.bind(this)
        }
      })
    },
    on: {
      beforeInit: function () {
        var e = this.params.thumbs;
        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
      }, slideChange: function () {
        this.thumbs.swiper && this.thumbs.update()
      }, update: function () {
        this.thumbs.swiper && this.thumbs.update()
      }, resize: function () {
        this.thumbs.swiper && this.thumbs.update()
      }, observerUpdate: function () {
        this.thumbs.swiper && this.thumbs.update()
      }, setTransition: function (e) {
        var t = this.thumbs.swiper;
        t && t.setTransition(e)
      }, beforeDestroy: function () {
        var e = this.thumbs.swiper;
        e && this.thumbs.swiperCreated && e && e.destroy()
      }
    }
  }];
  return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
});
//# sourceMappingURL=swiper.min.js.map


var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 6, // slider Design change.
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  autoplay: true
});


