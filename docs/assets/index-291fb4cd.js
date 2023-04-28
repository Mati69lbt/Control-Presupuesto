(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Rc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var y = {},
  Dc = {
    get exports() {
      return y;
    },
    set exports(e) {
      y = e;
    },
  },
  cl = {},
  O = {},
  jc = {
    get exports() {
      return O;
    },
    set exports(e) {
      O = e;
    },
  },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tr = Symbol.for("react.element"),
  zc = Symbol.for("react.portal"),
  Mc = Symbol.for("react.fragment"),
  Ic = Symbol.for("react.strict_mode"),
  Fc = Symbol.for("react.profiler"),
  Uc = Symbol.for("react.provider"),
  $c = Symbol.for("react.context"),
  Wc = Symbol.for("react.forward_ref"),
  Vc = Symbol.for("react.suspense"),
  Hc = Symbol.for("react.memo"),
  Bc = Symbol.for("react.lazy"),
  Jo = Symbol.iterator;
function Qc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Jo && e[Jo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ds = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ps = Object.assign,
  ms = {};
function dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ms),
    (this.updater = n || ds);
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hs() {}
hs.prototype = dn.prototype;
function to(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ms),
    (this.updater = n || ds);
}
var no = (to.prototype = new hs());
no.constructor = to;
ps(no, dn.prototype);
no.isPureReactComponent = !0;
var qo = Array.isArray,
  vs = Object.prototype.hasOwnProperty,
  ro = { current: null },
  gs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      vs.call(t, r) && !gs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: tr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: ro.current,
  };
}
function Gc(e, t) {
  return {
    $$typeof: tr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function lo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function Kc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bo = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Kc("" + e.key)
    : t.toString(36);
}
function Tr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case tr:
          case zc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Al(o, 0) : r),
      qo(l)
        ? ((n = ""),
          e != null && (n = e.replace(bo, "$&/") + "/"),
          Tr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (lo(l) &&
            (l = Gc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(bo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), qo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Al(i, u);
      o += Tr(i, t, n, s, l);
    }
  else if (((s = Qc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Al(i, u++)), (o += Tr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Xc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  Pr = { transition: null },
  Yc = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: Pr,
    ReactCurrentOwner: ro,
  };
j.Children = {
  map: sr,
  forEach: function (e, t, n) {
    sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!lo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
j.Component = dn;
j.Fragment = Mc;
j.Profiler = Fc;
j.PureComponent = to;
j.StrictMode = Ic;
j.Suspense = Vc;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yc;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ps({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = ro.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      vs.call(t, s) &&
        !gs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: $c,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Uc, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = ys;
j.createFactory = function (e) {
  var t = ys.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: Wc, render: e };
};
j.isValidElement = lo;
j.lazy = function (e) {
  return { $$typeof: Bc, _payload: { _status: -1, _result: e }, _init: Xc };
};
j.memo = function (e, t) {
  return { $$typeof: Hc, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Pr.transition;
  Pr.transition = {};
  try {
    e();
  } finally {
    Pr.transition = t;
  }
};
j.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
j.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
j.useContext = function (e) {
  return pe.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
j.useId = function () {
  return pe.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return pe.current.useRef(e);
};
j.useState = function (e) {
  return pe.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return pe.current.useTransition();
};
j.version = "18.2.0";
(function (e) {
  e.exports = j;
})(jc);
const Z = Rc(O);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zc = O,
  Jc = Symbol.for("react.element"),
  qc = Symbol.for("react.fragment"),
  bc = Object.prototype.hasOwnProperty,
  ef = Zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  tf = { key: !0, ref: !0, __self: !0, __source: !0 };
function ws(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) bc.call(t, r) && !tf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Jc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: ef.current,
  };
}
cl.Fragment = qc;
cl.jsx = ws;
cl.jsxs = ws;
(function (e) {
  e.exports = cl;
})(Dc);
var ti = {},
  ni = {},
  nf = {
    get exports() {
      return ni;
    },
    set exports(e) {
      ni = e;
    },
  },
  Ce = {},
  ri = {},
  rf = {
    get exports() {
      return ri;
    },
    set exports(e) {
      ri = e;
    },
  },
  Ss = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, A) {
    var R = _.length;
    _.push(A);
    e: for (; 0 < R; ) {
      var X = (R - 1) >>> 1,
        ee = _[X];
      if (0 < l(ee, A)) (_[X] = A), (_[R] = ee), (R = X);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var A = _[0],
      R = _.pop();
    if (R !== A) {
      _[0] = R;
      e: for (var X = 0, ee = _.length, or = ee >>> 1; X < or; ) {
        var Et = 2 * (X + 1) - 1,
          Pl = _[Et],
          xt = Et + 1,
          ur = _[xt];
        if (0 > l(Pl, R))
          xt < ee && 0 > l(ur, Pl)
            ? ((_[X] = ur), (_[xt] = R), (X = xt))
            : ((_[X] = Pl), (_[Et] = R), (X = Et));
        else if (xt < ee && 0 > l(ur, R)) (_[X] = ur), (_[xt] = R), (X = xt);
        else break e;
      }
    }
    return A;
  }
  function l(_, A) {
    var R = _.sortIndex - A.sortIndex;
    return R !== 0 ? R : _.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    m = 1,
    h = null,
    p = 3,
    g = !1,
    w = !1,
    k = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var A = n(a); A !== null; ) {
      if (A.callback === null) r(a);
      else if (A.startTime <= _)
        r(a), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(a);
    }
  }
  function v(_) {
    if (((k = !1), d(_), !w))
      if (n(s) !== null) (w = !0), Nl(E);
      else {
        var A = n(a);
        A !== null && Tl(v, A.startTime - _);
      }
  }
  function E(_, A) {
    (w = !1), k && ((k = !1), f(T), (T = -1)), (g = !0);
    var R = p;
    try {
      for (
        d(A), h = n(s);
        h !== null && (!(h.expirationTime > A) || (_ && !Se()));

      ) {
        var X = h.callback;
        if (typeof X == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var ee = X(h.expirationTime <= A);
          (A = e.unstable_now()),
            typeof ee == "function" ? (h.callback = ee) : h === n(s) && r(s),
            d(A);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var or = !0;
      else {
        var Et = n(a);
        Et !== null && Tl(v, Et.startTime - A), (or = !1);
      }
      return or;
    } finally {
      (h = null), (p = R), (g = !1);
    }
  }
  var C = !1,
    N = null,
    T = -1,
    V = 5,
    D = -1;
  function Se() {
    return !(e.unstable_now() - D < V);
  }
  function hn() {
    if (N !== null) {
      var _ = e.unstable_now();
      D = _;
      var A = !0;
      try {
        A = N(!0, _);
      } finally {
        A ? vn() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var vn;
  if (typeof c == "function")
    vn = function () {
      c(hn);
    };
  else if (typeof MessageChannel < "u") {
    var Zo = new MessageChannel(),
      Oc = Zo.port2;
    (Zo.port1.onmessage = hn),
      (vn = function () {
        Oc.postMessage(null);
      });
  } else
    vn = function () {
      P(hn, 0);
    };
  function Nl(_) {
    (N = _), C || ((C = !0), vn());
  }
  function Tl(_, A) {
    T = P(function () {
      _(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), Nl(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var R = p;
      p = A;
      try {
        return _();
      } finally {
        p = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, A) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var R = p;
      p = _;
      try {
        return A();
      } finally {
        p = R;
      }
    }),
    (e.unstable_scheduleCallback = function (_, A, R) {
      var X = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? X + R : X))
          : (R = X),
        _)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = R + ee),
        (_ = {
          id: m++,
          callback: A,
          priorityLevel: _,
          startTime: R,
          expirationTime: ee,
          sortIndex: -1,
        }),
        R > X
          ? ((_.sortIndex = R),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (k ? (f(T), (T = -1)) : (k = !0), Tl(v, R - X)))
          : ((_.sortIndex = ee), t(s, _), w || g || ((w = !0), Nl(E))),
        _
      );
    }),
    (e.unstable_shouldYield = Se),
    (e.unstable_wrapCallback = function (_) {
      var A = p;
      return function () {
        var R = p;
        p = A;
        try {
          return _.apply(this, arguments);
        } finally {
          p = R;
        }
      };
    });
})(Ss);
(function (e) {
  e.exports = Ss;
})(rf);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ks = O,
  _e = ri;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Es = new Set(),
  Fn = {};
function It(e, t) {
  ln(e, t), ln(e + "Capture", t);
}
function ln(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) Es.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  li = Object.prototype.hasOwnProperty,
  lf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  eu = {},
  tu = {};
function of(e) {
  return li.call(tu, e)
    ? !0
    : li.call(eu, e)
    ? !1
    : lf.test(e)
    ? (tu[e] = !0)
    : ((eu[e] = !0), !1);
}
function uf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sf(e, t, n, r) {
  if (t === null || typeof t > "u" || uf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function me(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var io = /[\-:]([a-z])/g;
function oo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(io, oo);
    ie[t] = new me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(io, oo);
    ie[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(io, oo);
  ie[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uo(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sf(t, n, l, r) && (n = null),
    r || l === null
      ? of(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tt = ks.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ar = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  Wt = Symbol.for("react.fragment"),
  so = Symbol.for("react.strict_mode"),
  ii = Symbol.for("react.profiler"),
  xs = Symbol.for("react.provider"),
  _s = Symbol.for("react.context"),
  ao = Symbol.for("react.forward_ref"),
  oi = Symbol.for("react.suspense"),
  ui = Symbol.for("react.suspense_list"),
  co = Symbol.for("react.memo"),
  rt = Symbol.for("react.lazy"),
  Cs = Symbol.for("react.offscreen"),
  nu = Symbol.iterator;
function gn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nu && e[nu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  Ll;
function Cn(e) {
  if (Ll === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ll = (t && t[1]) || "";
    }
  return (
    `
` +
    Ll +
    e
  );
}
var Ol = !1;
function Rl(e, t) {
  if (!e || Ol) return "";
  Ol = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Ol = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function af(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Rl(e.type, !1)), e;
    case 11:
      return (e = Rl(e.type.render, !1)), e;
    case 1:
      return (e = Rl(e.type, !0)), e;
    default:
      return "";
  }
}
function si(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case $t:
      return "Portal";
    case ii:
      return "Profiler";
    case so:
      return "StrictMode";
    case oi:
      return "Suspense";
    case ui:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _s:
        return (e.displayName || "Context") + ".Consumer";
      case xs:
        return (e._context.displayName || "Context") + ".Provider";
      case ao:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case co:
        return (
          (t = e.displayName || null), t !== null ? t : si(e.type) || "Memo"
        );
      case rt:
        (t = e._payload), (e = e._init);
        try {
          return si(e(t));
        } catch {}
    }
  return null;
}
function cf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return si(t);
    case 8:
      return t === so ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ns(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ff(e) {
  var t = Ns(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function cr(e) {
  e._valueTracker || (e._valueTracker = ff(e));
}
function Ts(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ns(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ur(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ai(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ps(e, t) {
  (t = t.checked), t != null && uo(e, "checked", t, !1);
}
function ci(e, t) {
  Ps(e, t);
  var n = gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fi(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function fi(e, t, n) {
  (t !== "number" || Ur(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function di(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gt(n) };
}
function As(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ls(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ls(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var fr,
  Os = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        fr = fr || document.createElement("div"),
          fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = fr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Un(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var An = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  df = ["Webkit", "ms", "Moz", "O"];
Object.keys(An).forEach(function (e) {
  df.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (An[t] = An[e]);
  });
});
function Rs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (An.hasOwnProperty(e) && An[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ds(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Rs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var pf = G(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function mi(e, t) {
  if (t) {
    if (pf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function hi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var vi = null;
function fo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var gi = null,
  bt = null,
  en = null;
function uu(e) {
  if ((e = lr(e))) {
    if (typeof gi != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = hl(t)), gi(e.stateNode, e.type, t));
  }
}
function js(e) {
  bt ? (en ? en.push(e) : (en = [e])) : (bt = e);
}
function zs() {
  if (bt) {
    var e = bt,
      t = en;
    if (((en = bt = null), uu(e), t)) for (e = 0; e < t.length; e++) uu(t[e]);
  }
}
function Ms(e, t) {
  return e(t);
}
function Is() {}
var Dl = !1;
function Fs(e, t, n) {
  if (Dl) return e(t, n);
  Dl = !0;
  try {
    return Ms(e, t, n);
  } finally {
    (Dl = !1), (bt !== null || en !== null) && (Is(), zs());
  }
}
function $n(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var yi = !1;
if (Je)
  try {
    var yn = {};
    Object.defineProperty(yn, "passive", {
      get: function () {
        yi = !0;
      },
    }),
      window.addEventListener("test", yn, yn),
      window.removeEventListener("test", yn, yn);
  } catch {
    yi = !1;
  }
function mf(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var Ln = !1,
  $r = null,
  Wr = !1,
  wi = null,
  hf = {
    onError: function (e) {
      (Ln = !0), ($r = e);
    },
  };
function vf(e, t, n, r, l, i, o, u, s) {
  (Ln = !1), ($r = null), mf.apply(hf, arguments);
}
function gf(e, t, n, r, l, i, o, u, s) {
  if ((vf.apply(this, arguments), Ln)) {
    if (Ln) {
      var a = $r;
      (Ln = !1), ($r = null);
    } else throw Error(S(198));
    Wr || ((Wr = !0), (wi = a));
  }
}
function Ft(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Us(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function su(e) {
  if (Ft(e) !== e) throw Error(S(188));
}
function yf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return su(l), e;
        if (i === r) return su(l), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function $s(e) {
  return (e = yf(e)), e !== null ? Ws(e) : null;
}
function Ws(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ws(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vs = _e.unstable_scheduleCallback,
  au = _e.unstable_cancelCallback,
  wf = _e.unstable_shouldYield,
  Sf = _e.unstable_requestPaint,
  Y = _e.unstable_now,
  kf = _e.unstable_getCurrentPriorityLevel,
  po = _e.unstable_ImmediatePriority,
  Hs = _e.unstable_UserBlockingPriority,
  Vr = _e.unstable_NormalPriority,
  Ef = _e.unstable_LowPriority,
  Bs = _e.unstable_IdlePriority,
  fl = null,
  Be = null;
function xf(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Nf,
  _f = Math.log,
  Cf = Math.LN2;
function Nf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_f(e) / Cf) | 0)) | 0;
}
var dr = 64,
  pr = 4194304;
function Tn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Tn(u)) : ((i &= o), i !== 0 && (r = Tn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Tn(o)) : i !== 0 && (r = Tn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Tf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Pf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Fe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Tf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Si(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qs() {
  var e = dr;
  return (dr <<= 1), !(dr & 4194240) && (dr = 64), e;
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function Af(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function mo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function Gs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ks,
  ho,
  Xs,
  Ys,
  Zs,
  ki = !1,
  mr = [],
  at = null,
  ct = null,
  ft = null,
  Wn = new Map(),
  Vn = new Map(),
  it = [],
  Lf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      at = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Wn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vn.delete(t.pointerId);
  }
}
function wn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = lr(t)), t !== null && ho(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Of(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (at = wn(at, e, t, n, r, l)), !0;
    case "dragenter":
      return (ct = wn(ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (ft = wn(ft, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Wn.set(i, wn(Wn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Vn.set(i, wn(Vn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Js(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Us(n)), t !== null)) {
          (e.blockedOn = t),
            Zs(e.priority, function () {
              Xs(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ar(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ei(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vi = r), n.target.dispatchEvent(r), (vi = null);
    } else return (t = lr(n)), t !== null && ho(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function fu(e, t, n) {
  Ar(e) && n.delete(t);
}
function Rf() {
  (ki = !1),
    at !== null && Ar(at) && (at = null),
    ct !== null && Ar(ct) && (ct = null),
    ft !== null && Ar(ft) && (ft = null),
    Wn.forEach(fu),
    Vn.forEach(fu);
}
function Sn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ki ||
      ((ki = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, Rf)));
}
function Hn(e) {
  function t(l) {
    return Sn(l, e);
  }
  if (0 < mr.length) {
    Sn(mr[0], e);
    for (var n = 1; n < mr.length; n++) {
      var r = mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    at !== null && Sn(at, e),
      ct !== null && Sn(ct, e),
      ft !== null && Sn(ft, e),
      Wn.forEach(t),
      Vn.forEach(t),
      n = 0;
    n < it.length;
    n++
  )
    (r = it[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < it.length && ((n = it[0]), n.blockedOn === null); )
    Js(n), n.blockedOn === null && it.shift();
}
var tn = tt.ReactCurrentBatchConfig,
  Br = !0;
function Df(e, t, n, r) {
  var l = I,
    i = tn.transition;
  tn.transition = null;
  try {
    (I = 1), vo(e, t, n, r);
  } finally {
    (I = l), (tn.transition = i);
  }
}
function jf(e, t, n, r) {
  var l = I,
    i = tn.transition;
  tn.transition = null;
  try {
    (I = 4), vo(e, t, n, r);
  } finally {
    (I = l), (tn.transition = i);
  }
}
function vo(e, t, n, r) {
  if (Br) {
    var l = Ei(e, t, n, r);
    if (l === null) Bl(e, t, r, Qr, n), cu(e, r);
    else if (Of(l, e, t, n, r)) r.stopPropagation();
    else if ((cu(e, r), t & 4 && -1 < Lf.indexOf(e))) {
      for (; l !== null; ) {
        var i = lr(l);
        if (
          (i !== null && Ks(i),
          (i = Ei(e, t, n, r)),
          i === null && Bl(e, t, r, Qr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Bl(e, t, r, null, n);
  }
}
var Qr = null;
function Ei(e, t, n, r) {
  if (((Qr = null), (e = fo(r)), (e = Tt(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Us(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Qr = e), null;
}
function qs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (kf()) {
        case po:
          return 1;
        case Hs:
          return 4;
        case Vr:
        case Ef:
          return 16;
        case Bs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ut = null,
  go = null,
  Lr = null;
function bs() {
  if (Lr) return Lr;
  var e,
    t = go,
    n = t.length,
    r,
    l = "value" in ut ? ut.value : ut.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Lr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Or(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function hr() {
  return !0;
}
function du() {
  return !1;
}
function Ne(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? hr
        : du),
      (this.isPropagationStopped = du),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = hr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = hr));
      },
      persist: function () {},
      isPersistent: hr,
    }),
    t
  );
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yo = Ne(pn),
  rr = G({}, pn, { view: 0, detail: 0 }),
  zf = Ne(rr),
  zl,
  Ml,
  kn,
  dl = G({}, rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== kn &&
            (kn && e.type === "mousemove"
              ? ((zl = e.screenX - kn.screenX), (Ml = e.screenY - kn.screenY))
              : (Ml = zl = 0),
            (kn = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ml;
    },
  }),
  pu = Ne(dl),
  Mf = G({}, dl, { dataTransfer: 0 }),
  If = Ne(Mf),
  Ff = G({}, rr, { relatedTarget: 0 }),
  Il = Ne(Ff),
  Uf = G({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $f = Ne(Uf),
  Wf = G({}, pn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vf = Ne(Wf),
  Hf = G({}, pn, { data: 0 }),
  mu = Ne(Hf),
  Bf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Qf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gf[e]) ? !!t[e] : !1;
}
function wo() {
  return Kf;
}
var Xf = G({}, rr, {
    key: function (e) {
      if (e.key) {
        var t = Bf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Or(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Qf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wo,
    charCode: function (e) {
      return e.type === "keypress" ? Or(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Or(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Yf = Ne(Xf),
  Zf = G({}, dl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  hu = Ne(Zf),
  Jf = G({}, rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wo,
  }),
  qf = Ne(Jf),
  bf = G({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ed = Ne(bf),
  td = G({}, dl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  nd = Ne(td),
  rd = [9, 13, 27, 32],
  So = Je && "CompositionEvent" in window,
  On = null;
Je && "documentMode" in document && (On = document.documentMode);
var ld = Je && "TextEvent" in window && !On,
  ea = Je && (!So || (On && 8 < On && 11 >= On)),
  vu = String.fromCharCode(32),
  gu = !1;
function ta(e, t) {
  switch (e) {
    case "keyup":
      return rd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function na(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vt = !1;
function id(e, t) {
  switch (e) {
    case "compositionend":
      return na(t);
    case "keypress":
      return t.which !== 32 ? null : ((gu = !0), vu);
    case "textInput":
      return (e = t.data), e === vu && gu ? null : e;
    default:
      return null;
  }
}
function od(e, t) {
  if (Vt)
    return e === "compositionend" || (!So && ta(e, t))
      ? ((e = bs()), (Lr = go = ut = null), (Vt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ea && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ud = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ud[e.type] : t === "textarea";
}
function ra(e, t, n, r) {
  js(r),
    (t = Gr(t, "onChange")),
    0 < t.length &&
      ((n = new yo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Rn = null,
  Bn = null;
function sd(e) {
  ma(e, 0);
}
function pl(e) {
  var t = Qt(e);
  if (Ts(t)) return e;
}
function ad(e, t) {
  if (e === "change") return t;
}
var la = !1;
if (Je) {
  var Fl;
  if (Je) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var wu = document.createElement("div");
      wu.setAttribute("oninput", "return;"),
        (Ul = typeof wu.oninput == "function");
    }
    Fl = Ul;
  } else Fl = !1;
  la = Fl && (!document.documentMode || 9 < document.documentMode);
}
function Su() {
  Rn && (Rn.detachEvent("onpropertychange", ia), (Bn = Rn = null));
}
function ia(e) {
  if (e.propertyName === "value" && pl(Bn)) {
    var t = [];
    ra(t, Bn, e, fo(e)), Fs(sd, t);
  }
}
function cd(e, t, n) {
  e === "focusin"
    ? (Su(), (Rn = t), (Bn = n), Rn.attachEvent("onpropertychange", ia))
    : e === "focusout" && Su();
}
function fd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pl(Bn);
}
function dd(e, t) {
  if (e === "click") return pl(t);
}
function pd(e, t) {
  if (e === "input" || e === "change") return pl(t);
}
function md(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $e = typeof Object.is == "function" ? Object.is : md;
function Qn(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!li.call(t, l) || !$e(e[l], t[l])) return !1;
  }
  return !0;
}
function ku(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eu(e, t) {
  var n = ku(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ku(n);
  }
}
function oa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? oa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ua() {
  for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ur(e.document);
  }
  return t;
}
function ko(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function hd(e) {
  var t = ua(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    oa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ko(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Eu(n, i));
        var o = Eu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vd = Je && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  xi = null,
  Dn = null,
  _i = !1;
function xu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _i ||
    Ht == null ||
    Ht !== Ur(r) ||
    ((r = Ht),
    "selectionStart" in r && ko(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dn && Qn(Dn, r)) ||
      ((Dn = r),
      (r = Gr(xi, "onSelect")),
      0 < r.length &&
        ((t = new yo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function vr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bt = {
    animationend: vr("Animation", "AnimationEnd"),
    animationiteration: vr("Animation", "AnimationIteration"),
    animationstart: vr("Animation", "AnimationStart"),
    transitionend: vr("Transition", "TransitionEnd"),
  },
  $l = {},
  sa = {};
Je &&
  ((sa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bt.animationend.animation,
    delete Bt.animationiteration.animation,
    delete Bt.animationstart.animation),
  "TransitionEvent" in window || delete Bt.transitionend.transition);
function ml(e) {
  if ($l[e]) return $l[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in sa) return ($l[e] = t[n]);
  return e;
}
var aa = ml("animationend"),
  ca = ml("animationiteration"),
  fa = ml("animationstart"),
  da = ml("transitionend"),
  pa = new Map(),
  _u =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function wt(e, t) {
  pa.set(e, t), It(t, [e]);
}
for (var Wl = 0; Wl < _u.length; Wl++) {
  var Vl = _u[Wl],
    gd = Vl.toLowerCase(),
    yd = Vl[0].toUpperCase() + Vl.slice(1);
  wt(gd, "on" + yd);
}
wt(aa, "onAnimationEnd");
wt(ca, "onAnimationIteration");
wt(fa, "onAnimationStart");
wt("dblclick", "onDoubleClick");
wt("focusin", "onFocus");
wt("focusout", "onBlur");
wt(da, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
It(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
It(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Pn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));
function Cu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), gf(r, t, void 0, e), (e.currentTarget = null);
}
function ma(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Cu(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Cu(l, u, a), (i = s);
        }
    }
  }
  if (Wr) throw ((e = wi), (Wr = !1), (wi = null), e);
}
function $(e, t) {
  var n = t[Ai];
  n === void 0 && (n = t[Ai] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ha(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), ha(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[gr]) {
    (e[gr] = !0),
      Es.forEach(function (n) {
        n !== "selectionchange" && (wd.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || ((t[gr] = !0), Hl("selectionchange", !1, t));
  }
}
function ha(e, t, n, r) {
  switch (qs(t)) {
    case 1:
      var l = Df;
      break;
    case 4:
      l = jf;
      break;
    default:
      l = vo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !yi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Bl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Tt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Fs(function () {
    var a = i,
      m = fo(n),
      h = [];
    e: {
      var p = pa.get(e);
      if (p !== void 0) {
        var g = yo,
          w = e;
        switch (e) {
          case "keypress":
            if (Or(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Yf;
            break;
          case "focusin":
            (w = "focus"), (g = Il);
            break;
          case "focusout":
            (w = "blur"), (g = Il);
            break;
          case "beforeblur":
          case "afterblur":
            g = Il;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = If;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = qf;
            break;
          case aa:
          case ca:
          case fa:
            g = $f;
            break;
          case da:
            g = ed;
            break;
          case "scroll":
            g = zf;
            break;
          case "wheel":
            g = nd;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Vf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = hu;
        }
        var k = (t & 4) !== 0,
          P = !k && e === "scroll",
          f = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = $n(c, f)), v != null && k.push(Kn(c, v, d)))),
            P)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((p = new g(p, w, null, n, m)), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== vi &&
            (w = n.relatedTarget || n.fromElement) &&
            (Tt(w) || w[qe]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = a),
              (w = w ? Tt(w) : null),
              w !== null &&
                ((P = Ft(w)), w !== P || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = a)),
          g !== w)
        ) {
          if (
            ((k = pu),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = hu),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (P = g == null ? p : Qt(g)),
            (d = w == null ? p : Qt(w)),
            (p = new k(v, c + "leave", g, n, m)),
            (p.target = P),
            (p.relatedTarget = d),
            (v = null),
            Tt(m) === a &&
              ((k = new k(f, c + "enter", w, n, m)),
              (k.target = d),
              (k.relatedTarget = P),
              (v = k)),
            (P = v),
            g && w)
          )
            t: {
              for (k = g, f = w, c = 0, d = k; d; d = Ut(d)) c++;
              for (d = 0, v = f; v; v = Ut(v)) d++;
              for (; 0 < c - d; ) (k = Ut(k)), c--;
              for (; 0 < d - c; ) (f = Ut(f)), d--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Ut(k)), (f = Ut(f));
              }
              k = null;
            }
          else k = null;
          g !== null && Nu(h, p, g, k, !1),
            w !== null && P !== null && Nu(h, P, w, k, !0);
        }
      }
      e: {
        if (
          ((p = a ? Qt(a) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var E = ad;
        else if (yu(p))
          if (la) E = pd;
          else {
            E = fd;
            var C = cd;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = dd);
        if (E && (E = E(e, a))) {
          ra(h, E, n, m);
          break e;
        }
        C && C(e, p, a),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            fi(p, "number", p.value);
      }
      switch (((C = a ? Qt(a) : window), e)) {
        case "focusin":
          (yu(C) || C.contentEditable === "true") &&
            ((Ht = C), (xi = a), (Dn = null));
          break;
        case "focusout":
          Dn = xi = Ht = null;
          break;
        case "mousedown":
          _i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (_i = !1), xu(h, n, m);
          break;
        case "selectionchange":
          if (vd) break;
        case "keydown":
        case "keyup":
          xu(h, n, m);
      }
      var N;
      if (So)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Vt
          ? ta(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (ea &&
          n.locale !== "ko" &&
          (Vt || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Vt && (N = bs())
            : ((ut = m),
              (go = "value" in ut ? ut.value : ut.textContent),
              (Vt = !0))),
        (C = Gr(a, T)),
        0 < C.length &&
          ((T = new mu(T, e, null, n, m)),
          h.push({ event: T, listeners: C }),
          N ? (T.data = N) : ((N = na(n)), N !== null && (T.data = N)))),
        (N = ld ? id(e, n) : od(e, n)) &&
          ((a = Gr(a, "onBeforeInput")),
          0 < a.length &&
            ((m = new mu("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: a }),
            (m.data = N)));
    }
    ma(h, t);
  });
}
function Kn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = $n(e, n)),
      i != null && r.unshift(Kn(e, i, l)),
      (i = $n(e, t)),
      i != null && r.push(Kn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ut(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = $n(n, i)), s != null && o.unshift(Kn(n, s, u)))
        : l || ((s = $n(n, i)), s != null && o.push(Kn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Sd = /\r\n?/g,
  kd = /\u0000|\uFFFD/g;
function Tu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Sd,
      `
`
    )
    .replace(kd, "");
}
function yr(e, t, n) {
  if (((t = Tu(t)), Tu(e) !== t && n)) throw Error(S(425));
}
function Kr() {}
var Ci = null,
  Ni = null;
function Ti(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Pi = typeof setTimeout == "function" ? setTimeout : void 0,
  Ed = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Pu = typeof Promise == "function" ? Promise : void 0,
  xd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Pu < "u"
      ? function (e) {
          return Pu.resolve(null).then(e).catch(_d);
        }
      : Pi;
function _d(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ql(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Hn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Hn(t);
}
function dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Au(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var mn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + mn,
  Xn = "__reactProps$" + mn,
  qe = "__reactContainer$" + mn,
  Ai = "__reactEvents$" + mn,
  Cd = "__reactListeners$" + mn,
  Nd = "__reactHandles$" + mn;
function Tt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Au(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = Au(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function lr(e) {
  return (
    (e = e[He] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function hl(e) {
  return e[Xn] || null;
}
var Li = [],
  Gt = -1;
function St(e) {
  return { current: e };
}
function W(e) {
  0 > Gt || ((e.current = Li[Gt]), (Li[Gt] = null), Gt--);
}
function U(e, t) {
  Gt++, (Li[Gt] = e.current), (e.current = t);
}
var yt = {},
  ae = St(yt),
  ge = St(!1),
  Rt = yt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function Xr() {
  W(ge), W(ae);
}
function Lu(e, t, n) {
  if (ae.current !== yt) throw Error(S(168));
  U(ae, t), U(ge, n);
}
function va(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, cf(e) || "Unknown", l));
  return G({}, n, r);
}
function Yr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yt),
    (Rt = ae.current),
    U(ae, e),
    U(ge, ge.current),
    !0
  );
}
function Ou(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = va(e, t, Rt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(ge),
      W(ae),
      U(ae, e))
    : W(ge),
    U(ge, n);
}
var Ke = null,
  vl = !1,
  Gl = !1;
function ga(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
function Td(e) {
  (vl = !0), ga(e);
}
function kt() {
  if (!Gl && Ke !== null) {
    Gl = !0;
    var e = 0,
      t = I;
    try {
      var n = Ke;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ke = null), (vl = !1);
    } catch (l) {
      throw (Ke !== null && (Ke = Ke.slice(e + 1)), Vs(po, kt), l);
    } finally {
      (I = t), (Gl = !1);
    }
  }
  return null;
}
var Kt = [],
  Xt = 0,
  Zr = null,
  Jr = 0,
  Te = [],
  Pe = 0,
  Dt = null,
  Xe = 1,
  Ye = "";
function _t(e, t) {
  (Kt[Xt++] = Jr), (Kt[Xt++] = Zr), (Zr = e), (Jr = t);
}
function ya(e, t, n) {
  (Te[Pe++] = Xe), (Te[Pe++] = Ye), (Te[Pe++] = Dt), (Dt = e);
  var r = Xe;
  e = Ye;
  var l = 32 - Fe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Fe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Xe = (1 << (32 - Fe(t) + l)) | (n << l) | r),
      (Ye = i + e);
  } else (Xe = (1 << i) | (n << l) | r), (Ye = e);
}
function Eo(e) {
  e.return !== null && (_t(e, 1), ya(e, 1, 0));
}
function xo(e) {
  for (; e === Zr; )
    (Zr = Kt[--Xt]), (Kt[Xt] = null), (Jr = Kt[--Xt]), (Kt[Xt] = null);
  for (; e === Dt; )
    (Dt = Te[--Pe]),
      (Te[Pe] = null),
      (Ye = Te[--Pe]),
      (Te[Pe] = null),
      (Xe = Te[--Pe]),
      (Te[Pe] = null);
}
var xe = null,
  Ee = null,
  H = !1,
  Ie = null;
function wa(e, t) {
  var n = Ae(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ru(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (Ee = dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dt !== null ? { id: Xe, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Oi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ri(e) {
  if (H) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!Ru(e, t)) {
        if (Oi(e)) throw Error(S(418));
        t = dt(n.nextSibling);
        var r = xe;
        t && Ru(e, t)
          ? wa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e));
      }
    } else {
      if (Oi(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (xe = e);
    }
  }
}
function Du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function wr(e) {
  if (e !== xe) return !1;
  if (!H) return Du(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ti(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (Oi(e)) throw (Sa(), Error(S(418)));
    for (; t; ) wa(e, t), (t = dt(t.nextSibling));
  }
  if ((Du(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = xe ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Sa() {
  for (var e = Ee; e; ) e = dt(e.nextSibling);
}
function un() {
  (Ee = xe = null), (H = !1);
}
function _o(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var Pd = tt.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var qr = St(null),
  br = null,
  Yt = null,
  Co = null;
function No() {
  Co = Yt = br = null;
}
function To(e) {
  var t = qr.current;
  W(qr), (e._currentValue = t);
}
function Di(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nn(e, t) {
  (br = e),
    (Co = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Oe(e) {
  var t = e._currentValue;
  if (Co !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (br === null) throw Error(S(308));
      (Yt = e), (br.dependencies = { lanes: 0, firstContext: e });
    } else Yt = Yt.next = e;
  return t;
}
var Pt = null;
function Po(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function ka(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Po(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    be(e, r)
  );
}
function be(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var lt = !1;
function Ao(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ea(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      be(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Po(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    be(e, n)
  );
}
function Rr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n);
  }
}
function ju(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function el(e, t, n, r) {
  var l = e.updateQueue;
  lt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = a) : (u.next = a),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (m = a = s = null), (u = i);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            k = u;
          switch (((p = t), (g = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (p = typeof w == "function" ? w.call(g, h, p) : w),
                p == null)
              )
                break e;
              h = G({}, h, p);
              break e;
            case 2:
              lt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((a = m = g), (s = h)) : (m = m.next = g),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (zt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function zu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var xa = new ks.Component().refs;
function ji(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = ht(e),
      i = Ze(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = pt(e, i, l)),
      t !== null && (Ue(t, e, l, r), Rr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = ht(e),
      i = Ze(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = pt(e, i, l)),
      t !== null && (Ue(t, e, l, r), Rr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = ht(e),
      l = Ze(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = pt(e, l, r)),
      t !== null && (Ue(t, e, r, n), Rr(t, e, r));
  },
};
function Mu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qn(n, r) || !Qn(l, i)
      : !0
  );
}
function _a(e, t, n) {
  var r = !1,
    l = yt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Oe(i))
      : ((l = ye(t) ? Rt : ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? on(e, l) : yt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Iu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gl.enqueueReplaceState(t, t.state, null);
}
function zi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = xa), Ao(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Oe(i))
    : ((i = ye(t) ? Rt : ae.current), (l.context = on(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ji(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && gl.enqueueReplaceState(l, l.state, null),
      el(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function En(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === xa && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Sr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Fu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ca(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = vt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, v) {
    return c === null || c.tag !== 6
      ? ((c = bl(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, v) {
    var E = d.type;
    return E === Wt
      ? m(f, c, d.props.children, v, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === rt &&
            Fu(E) === c.type))
      ? ((v = l(c, d.props)), (v.ref = En(f, c, d)), (v.return = f), v)
      : ((v = Fr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = En(f, c, d)),
        (v.return = f),
        v);
  }
  function a(f, c, d, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = ei(d, f.mode, v)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function m(f, c, d, v, E) {
    return c === null || c.tag !== 7
      ? ((c = Ot(d, f.mode, v, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function h(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = bl("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ar:
          return (
            (d = Fr(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = En(f, null, c)),
            (d.return = f),
            d
          );
        case $t:
          return (c = ei(c, f.mode, d)), (c.return = f), c;
        case rt:
          var v = c._init;
          return h(f, v(c._payload), d);
      }
      if (Nn(c) || gn(c))
        return (c = Ot(c, f.mode, d, null)), (c.return = f), c;
      Sr(f, c);
    }
    return null;
  }
  function p(f, c, d, v) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === E ? s(f, c, d, v) : null;
        case $t:
          return d.key === E ? a(f, c, d, v) : null;
        case rt:
          return (E = d._init), p(f, c, E(d._payload), v);
      }
      if (Nn(d) || gn(d)) return E !== null ? null : m(f, c, d, v, null);
      Sr(f, d);
    }
    return null;
  }
  function g(f, c, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(c, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ar:
          return (f = f.get(v.key === null ? d : v.key) || null), s(c, f, v, E);
        case $t:
          return (f = f.get(v.key === null ? d : v.key) || null), a(c, f, v, E);
        case rt:
          var C = v._init;
          return g(f, c, d, C(v._payload), E);
      }
      if (Nn(v) || gn(v)) return (f = f.get(d) || null), m(c, f, v, E, null);
      Sr(c, v);
    }
    return null;
  }
  function w(f, c, d, v) {
    for (
      var E = null, C = null, N = c, T = (c = 0), V = null;
      N !== null && T < d.length;
      T++
    ) {
      N.index > T ? ((V = N), (N = null)) : (V = N.sibling);
      var D = p(f, N, d[T], v);
      if (D === null) {
        N === null && (N = V);
        break;
      }
      e && N && D.alternate === null && t(f, N),
        (c = i(D, c, T)),
        C === null ? (E = D) : (C.sibling = D),
        (C = D),
        (N = V);
    }
    if (T === d.length) return n(f, N), H && _t(f, T), E;
    if (N === null) {
      for (; T < d.length; T++)
        (N = h(f, d[T], v)),
          N !== null &&
            ((c = i(N, c, T)), C === null ? (E = N) : (C.sibling = N), (C = N));
      return H && _t(f, T), E;
    }
    for (N = r(f, N); T < d.length; T++)
      (V = g(N, f, T, d[T], v)),
        V !== null &&
          (e && V.alternate !== null && N.delete(V.key === null ? T : V.key),
          (c = i(V, c, T)),
          C === null ? (E = V) : (C.sibling = V),
          (C = V));
    return (
      e &&
        N.forEach(function (Se) {
          return t(f, Se);
        }),
      H && _t(f, T),
      E
    );
  }
  function k(f, c, d, v) {
    var E = gn(d);
    if (typeof E != "function") throw Error(S(150));
    if (((d = E.call(d)), d == null)) throw Error(S(151));
    for (
      var C = (E = null), N = c, T = (c = 0), V = null, D = d.next();
      N !== null && !D.done;
      T++, D = d.next()
    ) {
      N.index > T ? ((V = N), (N = null)) : (V = N.sibling);
      var Se = p(f, N, D.value, v);
      if (Se === null) {
        N === null && (N = V);
        break;
      }
      e && N && Se.alternate === null && t(f, N),
        (c = i(Se, c, T)),
        C === null ? (E = Se) : (C.sibling = Se),
        (C = Se),
        (N = V);
    }
    if (D.done) return n(f, N), H && _t(f, T), E;
    if (N === null) {
      for (; !D.done; T++, D = d.next())
        (D = h(f, D.value, v)),
          D !== null &&
            ((c = i(D, c, T)), C === null ? (E = D) : (C.sibling = D), (C = D));
      return H && _t(f, T), E;
    }
    for (N = r(f, N); !D.done; T++, D = d.next())
      (D = g(N, f, T, D.value, v)),
        D !== null &&
          (e && D.alternate !== null && N.delete(D.key === null ? T : D.key),
          (c = i(D, c, T)),
          C === null ? (E = D) : (C.sibling = D),
          (C = D));
    return (
      e &&
        N.forEach(function (hn) {
          return t(f, hn);
        }),
      H && _t(f, T),
      E
    );
  }
  function P(f, c, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Wt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var E = d.key, C = c; C !== null; ) {
              if (C.key === E) {
                if (((E = d.type), E === Wt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (c = l(C, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === rt &&
                    Fu(E) === C.type)
                ) {
                  n(f, C.sibling),
                    (c = l(C, d.props)),
                    (c.ref = En(f, C, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Wt
              ? ((c = Ot(d.props.children, f.mode, v, d.key)),
                (c.return = f),
                (f = c))
              : ((v = Fr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = En(f, c, d)),
                (v.return = f),
                (f = v));
          }
          return o(f);
        case $t:
          e: {
            for (C = d.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ei(d, f.mode, v)), (c.return = f), (f = c);
          }
          return o(f);
        case rt:
          return (C = d._init), P(f, c, C(d._payload), v);
      }
      if (Nn(d)) return w(f, c, d, v);
      if (gn(d)) return k(f, c, d, v);
      Sr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = bl(d, f.mode, v)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return P;
}
var sn = Ca(!0),
  Na = Ca(!1),
  ir = {},
  Qe = St(ir),
  Yn = St(ir),
  Zn = St(ir);
function At(e) {
  if (e === ir) throw Error(S(174));
  return e;
}
function Lo(e, t) {
  switch ((U(Zn, t), U(Yn, e), U(Qe, ir), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pi(t, e));
  }
  W(Qe), U(Qe, t);
}
function an() {
  W(Qe), W(Yn), W(Zn);
}
function Ta(e) {
  At(Zn.current);
  var t = At(Qe.current),
    n = pi(t, e.type);
  t !== n && (U(Yn, e), U(Qe, n));
}
function Oo(e) {
  Yn.current === e && (W(Qe), W(Yn));
}
var B = St(0);
function tl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Kl = [];
function Ro() {
  for (var e = 0; e < Kl.length; e++)
    Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Dr = tt.ReactCurrentDispatcher,
  Xl = tt.ReactCurrentBatchConfig,
  jt = 0,
  Q = null,
  q = null,
  te = null,
  nl = !1,
  jn = !1,
  Jn = 0,
  Ad = 0;
function oe() {
  throw Error(S(321));
}
function Do(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$e(e[n], t[n])) return !1;
  return !0;
}
function jo(e, t, n, r, l, i) {
  if (
    ((jt = i),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Dr.current = e === null || e.memoizedState === null ? Dd : jd),
    (e = n(r, l)),
    jn)
  ) {
    i = 0;
    do {
      if (((jn = !1), (Jn = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (te = q = null),
        (t.updateQueue = null),
        (Dr.current = zd),
        (e = n(r, l));
    } while (jn);
  }
  if (
    ((Dr.current = rl),
    (t = q !== null && q.next !== null),
    (jt = 0),
    (te = q = Q = null),
    (nl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function zo() {
  var e = Jn !== 0;
  return (Jn = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return te === null ? (Q.memoizedState = te = e) : (te = te.next = e), te;
}
function Re() {
  if (q === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = te === null ? Q.memoizedState : te.next;
  if (t !== null) (te = t), (q = e);
  else {
    if (e === null) throw Error(S(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      te === null ? (Q.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yl(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = q,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var m = a.lane;
      if ((jt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: m,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (Q.lanes |= m),
          (zt |= m);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      $e(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (Q.lanes |= i), (zt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zl(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    $e(i, t.memoizedState) || (ve = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Pa() {}
function Aa(e, t) {
  var n = Q,
    r = Re(),
    l = t(),
    i = !$e(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    Mo(Ra.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (te !== null && te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      bn(9, Oa.bind(null, n, r, l, t), void 0, null),
      ne === null)
    )
      throw Error(S(349));
    jt & 30 || La(n, t, l);
  }
  return l;
}
function La(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Oa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Da(t) && ja(e);
}
function Ra(e, t, n) {
  return n(function () {
    Da(t) && ja(e);
  });
}
function Da(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function ja(e) {
  var t = be(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function Uu(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Rd.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function bn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function za() {
  return Re().memoizedState;
}
function jr(e, t, n, r) {
  var l = Ve();
  (Q.flags |= e),
    (l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r));
}
function yl(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (q !== null) {
    var o = q.memoizedState;
    if (((i = o.destroy), r !== null && Do(r, o.deps))) {
      l.memoizedState = bn(t, n, i, r);
      return;
    }
  }
  (Q.flags |= e), (l.memoizedState = bn(1 | t, n, i, r));
}
function $u(e, t) {
  return jr(8390656, 8, e, t);
}
function Mo(e, t) {
  return yl(2048, 8, e, t);
}
function Ma(e, t) {
  return yl(4, 2, e, t);
}
function Ia(e, t) {
  return yl(4, 4, e, t);
}
function Fa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ua(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), yl(4, 4, Fa.bind(null, t, e), n)
  );
}
function Io() {}
function $a(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Do(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wa(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Do(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Va(e, t, n) {
  return jt & 21
    ? ($e(n, t) || ((n = Qs()), (Q.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Ld(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (Xl.transition = r);
  }
}
function Ha() {
  return Re().memoizedState;
}
function Od(e, t, n) {
  var r = ht(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ba(e))
  )
    Qa(t, n);
  else if (((n = ka(e, t, n, r)), n !== null)) {
    var l = de();
    Ue(n, e, r, l), Ga(n, t, r);
  }
}
function Rd(e, t, n) {
  var r = ht(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ba(e)) Qa(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), $e(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Po(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ka(e, t, l, r)),
      n !== null && ((l = de()), Ue(n, e, r, l), Ga(n, t, r));
  }
}
function Ba(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Qa(e, t) {
  jn = nl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ga(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mo(e, n);
  }
}
var rl = {
    readContext: Oe,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  Dd = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: $u,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        jr(4194308, 4, Fa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return jr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return jr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Od.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Uu,
    useDebugValue: Io,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = Uu(!1),
        t = e[0];
      return (e = Ld.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        l = Ve();
      if (H) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), ne === null)) throw Error(S(349));
        jt & 30 || La(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        $u(Ra.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        bn(9, Oa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = ne.identifierPrefix;
      if (H) {
        var n = Ye,
          r = Xe;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ad++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jd = {
    readContext: Oe,
    useCallback: $a,
    useContext: Oe,
    useEffect: Mo,
    useImperativeHandle: Ua,
    useInsertionEffect: Ma,
    useLayoutEffect: Ia,
    useMemo: Wa,
    useReducer: Yl,
    useRef: za,
    useState: function () {
      return Yl(qn);
    },
    useDebugValue: Io,
    useDeferredValue: function (e) {
      var t = Re();
      return Va(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(qn)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Pa,
    useSyncExternalStore: Aa,
    useId: Ha,
    unstable_isNewReconciler: !1,
  },
  zd = {
    readContext: Oe,
    useCallback: $a,
    useContext: Oe,
    useEffect: Mo,
    useImperativeHandle: Ua,
    useInsertionEffect: Ma,
    useLayoutEffect: Ia,
    useMemo: Wa,
    useReducer: Zl,
    useRef: za,
    useState: function () {
      return Zl(qn);
    },
    useDebugValue: Io,
    useDeferredValue: function (e) {
      var t = Re();
      return q === null ? (t.memoizedState = e) : Va(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(qn)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: Pa,
    useSyncExternalStore: Aa,
    useId: Ha,
    unstable_isNewReconciler: !1,
  };
function cn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += af(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Jl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Mi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Md = typeof WeakMap == "function" ? WeakMap : Map;
function Ka(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      il || ((il = !0), (Gi = r)), Mi(e, t);
    }),
    n
  );
}
function Xa(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Mi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Mi(e, t),
          typeof r != "function" &&
            (mt === null ? (mt = new Set([this])) : mt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Wu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Md();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Zd.bind(null, e, t, n)), t.then(e, e));
}
function Vu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Hu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Id = tt.ReactCurrentOwner,
  ve = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Na(t, null, n, r) : sn(t, e.child, n, r);
}
function Bu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    nn(t, l),
    (r = jo(e, t, n, r, i, l)),
    (n = zo()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (H && n && Eo(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function Qu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Qo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ya(e, t, i, r, l))
      : ((e = Fr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qn), n(o, r) && e.ref === t.ref)
    )
      return et(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = vt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ya(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Qn(i, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), et(e, t, l);
  }
  return Ii(e, t, n, r, l);
}
function Za(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(Jt, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(Jt, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        U(Jt, ke),
        (ke |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(Jt, ke),
      (ke |= r);
  return ce(e, t, l, n), t.child;
}
function Ja(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ii(e, t, n, r, l) {
  var i = ye(n) ? Rt : ae.current;
  return (
    (i = on(t, i)),
    nn(t, l),
    (n = jo(e, t, n, r, i, l)),
    (r = zo()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (H && r && Eo(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function Gu(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    Yr(t);
  } else i = !1;
  if ((nn(t, l), t.stateNode === null))
    zr(e, t), _a(t, n, r), zi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Oe(a))
      : ((a = ye(n) ? Rt : ae.current), (a = on(t, a)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Iu(t, o, r, a)),
      (lt = !1);
    var p = t.memoizedState;
    (o.state = p),
      el(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || ge.current || lt
        ? (typeof m == "function" && (ji(t, n, m, r), (s = t.memoizedState)),
          (u = lt || Mu(t, n, u, r, p, s, a))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ea(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : ze(t.type, u)),
      (o.props = a),
      (h = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Oe(s))
        : ((s = ye(n) ? Rt : ae.current), (s = on(t, s)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || p !== s) && Iu(t, o, r, s)),
      (lt = !1),
      (p = t.memoizedState),
      (o.state = p),
      el(t, r, o, l);
    var w = t.memoizedState;
    u !== h || p !== w || ge.current || lt
      ? (typeof g == "function" && (ji(t, n, g, r), (w = t.memoizedState)),
        (a = lt || Mu(t, n, a, r, p, w, s) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Fi(e, t, n, r, i, l);
}
function Fi(e, t, n, r, l, i) {
  Ja(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Ou(t, n, !1), et(e, t, i);
  (r = t.stateNode), (Id.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = sn(t, e.child, null, i)), (t.child = sn(t, null, u, i)))
      : ce(e, t, u, i),
    (t.memoizedState = r.state),
    l && Ou(t, n, !0),
    t.child
  );
}
function qa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Lu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Lu(e, t.context, !1),
    Lo(e, t.containerInfo);
}
function Ku(e, t, n, r, l) {
  return un(), _o(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var Ui = { dehydrated: null, treeContext: null, retryLane: 0 };
function $i(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ba(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(B, l & 1),
    e === null)
  )
    return (
      Ri(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = kl(o, r, 0, null)),
              (e = Ot(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = $i(n)),
              (t.memoizedState = Ui),
              e)
            : Fo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Fd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = vt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = vt(u, i)) : ((i = Ot(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? $i(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ui),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fo(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function kr(e, t, n, r) {
  return (
    r !== null && _o(r),
    sn(t, e.child, null, n),
    (e = Fo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Fd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Jl(Error(S(422)))), kr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = kl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Ot(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && sn(t, e.child, null, o),
        (t.child.memoizedState = $i(o)),
        (t.memoizedState = Ui),
        i);
  if (!(t.mode & 1)) return kr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(S(419))), (r = Jl(i, r, void 0)), kr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ve || u)) {
    if (((r = ne), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), be(e, l), Ue(r, e, l, -1));
    }
    return Bo(), (r = Jl(Error(S(421)))), kr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ee = dt(l.nextSibling)),
      (xe = t),
      (H = !0),
      (Ie = null),
      e !== null &&
        ((Te[Pe++] = Xe),
        (Te[Pe++] = Ye),
        (Te[Pe++] = Dt),
        (Xe = e.id),
        (Ye = e.overflow),
        (Dt = t)),
      (t = Fo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Di(e.return, t, n);
}
function ql(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function ec(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xu(e, n, t);
        else if (e.tag === 19) Xu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && tl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ql(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && tl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ql(t, !0, n, null, i);
        break;
      case "together":
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ud(e, t, n) {
  switch (t.tag) {
    case 3:
      qa(t), un();
      break;
    case 5:
      Ta(t);
      break;
    case 1:
      ye(t.type) && Yr(t);
      break;
    case 4:
      Lo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(qr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ba(e, t, n)
          : (U(B, B.current & 1),
            (e = et(e, t, n)),
            e !== null ? e.sibling : null);
      U(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ec(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Za(e, t, n);
  }
  return et(e, t, n);
}
var tc, Wi, nc, rc;
tc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Wi = function () {};
nc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), At(Qe.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ai(e, l)), (r = ai(e, r)), (i = []);
        break;
      case "select":
        (l = G({}, l, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = di(e, l)), (r = di(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Kr);
    }
    mi(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Fn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Fn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && $("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
rc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function $d(e, t, n) {
  var r = t.pendingProps;
  switch ((xo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return ye(t.type) && Xr(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        an(),
        W(ge),
        W(ae),
        Ro(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (wr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (Yi(Ie), (Ie = null)))),
        Wi(e, t),
        ue(t),
        null
      );
    case 5:
      Oo(t);
      var l = At(Zn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        nc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ue(t), null;
        }
        if (((e = At(Qe.current)), wr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[He] = t), (r[Xn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Pn.length; l++) $(Pn[l], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              ru(r, i), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              iu(r, i), $("invalid", r);
          }
          mi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      yr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Fn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              cr(r), lu(r, i, !0);
              break;
            case "textarea":
              cr(r), ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Kr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ls(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[He] = t),
            (e[Xn] = r),
            tc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = hi(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Pn.length; l++) $(Pn[l], e);
                l = r;
                break;
              case "source":
                $("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (l = r);
                break;
              case "details":
                $("toggle", e), (l = r);
                break;
              case "input":
                ru(e, r), (l = ai(e, r)), $("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = G({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                iu(e, r), (l = di(e, r)), $("invalid", e);
                break;
              default:
                l = r;
            }
            mi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Ds(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Os(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Un(e, s)
                    : typeof s == "number" && Un(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Fn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && $("scroll", e)
                      : s != null && uo(e, i, s, o));
              }
            switch (n) {
              case "input":
                cr(e), lu(e, r, !1);
                break;
              case "textarea":
                cr(e), ou(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Kr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) rc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = At(Zn.current)), At(Qe.current), wr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (i = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (W(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Ee !== null && t.mode & 1 && !(t.flags & 128))
          Sa(), un(), (t.flags |= 98560), (i = !1);
        else if (((i = wr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[He] = t;
          } else
            un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (i = !1);
        } else Ie !== null && (Yi(Ie), (Ie = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? b === 0 && (b = 3) : Bo())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        an(), Wi(e, t), e === null && Gn(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return To(t.type._context), ue(t), null;
    case 17:
      return ye(t.type) && Xr(), ue(t), null;
    case 19:
      if ((W(B), (i = t.memoizedState), i === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) xn(i, !1);
        else {
          if (b !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = tl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    xn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Y() > fn &&
            ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = tl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !H)
            )
              return ue(t), null;
          } else
            2 * Y() - i.renderingStartTime > fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Y()),
          (t.sibling = null),
          (n = B.current),
          U(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        Ho(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Wd(e, t) {
  switch ((xo(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && Xr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        an(),
        W(ge),
        W(ae),
        Ro(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Oo(t), null;
    case 13:
      if ((W(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        un();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(B), null;
    case 4:
      return an(), null;
    case 10:
      return To(t.type._context), null;
    case 22:
    case 23:
      return Ho(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Er = !1,
  se = !1,
  Vd = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function Vi(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var Yu = !1;
function Hd(e, t) {
  if (((Ci = Br), (e = ua()), ko(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (g = h.firstChild) !== null;

            )
              (p = h), (h = g);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++a === l && (u = o),
                p === i && ++m === r && (s = o),
                (g = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ni = { focusedElem: e, selectionRange: n }, Br = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (x = e);
    else
      for (; x !== null; ) {
        t = x;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    P = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ze(t.type, k),
                      P
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (v) {
          K(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (x = e);
          break;
        }
        x = t.return;
      }
  return (w = Yu), (Yu = !1), w;
}
function zn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Vi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function wl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Hi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function lc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[Xn], delete t[Ai], delete t[Cd], delete t[Nd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ic(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ic(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Kr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bi(e, t, n), e = e.sibling; e !== null; ) Bi(e, t, n), (e = e.sibling);
}
function Qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qi(e, t, n), e = e.sibling; e !== null; ) Qi(e, t, n), (e = e.sibling);
}
var re = null,
  Me = !1;
function nt(e, t, n) {
  for (n = n.child; n !== null; ) oc(e, t, n), (n = n.sibling);
}
function oc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(fl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || Zt(n, t);
    case 6:
      var r = re,
        l = Me;
      (re = null),
        nt(e, t, n),
        (re = r),
        (Me = l),
        re !== null &&
          (Me
            ? ((e = re),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null &&
        (Me
          ? ((e = re),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ql(e.parentNode, n)
              : e.nodeType === 1 && Ql(e, n),
            Hn(e))
          : Ql(re, n.stateNode));
      break;
    case 4:
      (r = re),
        (l = Me),
        (re = n.stateNode.containerInfo),
        (Me = !0),
        nt(e, t, n),
        (re = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Vi(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      nt(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      nt(e, t, n);
      break;
    case 21:
      nt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), nt(e, t, n), (se = r))
        : nt(e, t, n);
      break;
    default:
      nt(e, t, n);
  }
}
function Ju(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vd()),
      t.forEach(function (r) {
        var l = qd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (re = u.stateNode), (Me = !1);
              break e;
            case 3:
              (re = u.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (re = u.stateNode.containerInfo), (Me = !0);
              break e;
          }
          u = u.return;
        }
        if (re === null) throw Error(S(160));
        oc(i, o, l), (re = null), (Me = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        K(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) uc(t, e), (t = t.sibling);
}
function uc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), We(e), r & 4)) {
        try {
          zn(3, e, e.return), wl(3, e);
        } catch (k) {
          K(e, e.return, k);
        }
        try {
          zn(5, e, e.return);
        } catch (k) {
          K(e, e.return, k);
        }
      }
      break;
    case 1:
      De(t, e), We(e), r & 512 && n !== null && Zt(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        We(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Un(l, "");
        } catch (k) {
          K(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Ps(l, i),
              hi(u, o);
            var a = hi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                h = s[o + 1];
              m === "style"
                ? Ds(l, h)
                : m === "dangerouslySetInnerHTML"
                ? Os(l, h)
                : m === "children"
                ? Un(l, h)
                : uo(l, m, h, a);
            }
            switch (u) {
              case "input":
                ci(l, i);
                break;
              case "textarea":
                As(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? qt(l, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qt(l, !!i.multiple, i.defaultValue, !0)
                      : qt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Xn] = i;
          } catch (k) {
            K(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((De(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          K(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Hn(t.containerInfo);
        } catch (k) {
          K(e, e.return, k);
        }
      break;
    case 4:
      De(t, e), We(e);
      break;
    case 13:
      De(t, e),
        We(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Wo = Y())),
        r & 4 && Ju(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (a = se) || m), De(t, e), (se = a)) : De(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !m && e.mode & 1)
        )
          for (x = e, m = e.child; m !== null; ) {
            for (h = x = m; x !== null; ) {
              switch (((p = x), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zn(4, p, p.return);
                  break;
                case 1:
                  Zt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      K(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Zt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    bu(h);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (x = g)) : bu(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Rs("display", o)));
              } catch (k) {
                K(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (k) {
                K(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      De(t, e), We(e), r & 4 && Ju(e);
      break;
    case 21:
      break;
    default:
      De(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ic(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Un(l, ""), (r.flags &= -33));
          var i = Zu(e);
          Qi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Zu(e);
          Bi(e, u, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      K(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bd(e, t, n) {
  (x = e), sc(e);
}
function sc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Er;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || se;
        u = Er;
        var a = se;
        if (((Er = o), (se = s) && !a))
          for (x = l; x !== null; )
            (o = x),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? es(l)
                : s !== null
                ? ((s.return = o), (x = s))
                : es(l);
        for (; i !== null; ) (x = i), sc(i), (i = i.sibling);
        (x = l), (Er = u), (se = a);
      }
      qu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (x = i)) : qu(e);
  }
}
function qu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || wl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && zu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var m = a.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Hn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        se || (t.flags & 512 && Hi(t));
      } catch (p) {
        K(t, t.return, p);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function bu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function es(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wl(4, t);
          } catch (s) {
            K(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              K(t, l, s);
            }
          }
          var i = t.return;
          try {
            Hi(t);
          } catch (s) {
            K(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Hi(t);
          } catch (s) {
            K(t, o, s);
          }
      }
    } catch (s) {
      K(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (x = u);
      break;
    }
    x = t.return;
  }
}
var Qd = Math.ceil,
  ll = tt.ReactCurrentDispatcher,
  Uo = tt.ReactCurrentOwner,
  Le = tt.ReactCurrentBatchConfig,
  M = 0,
  ne = null,
  J = null,
  le = 0,
  ke = 0,
  Jt = St(0),
  b = 0,
  er = null,
  zt = 0,
  Sl = 0,
  $o = 0,
  Mn = null,
  he = null,
  Wo = 0,
  fn = 1 / 0,
  Ge = null,
  il = !1,
  Gi = null,
  mt = null,
  xr = !1,
  st = null,
  ol = 0,
  In = 0,
  Ki = null,
  Mr = -1,
  Ir = 0;
function de() {
  return M & 6 ? Y() : Mr !== -1 ? Mr : (Mr = Y());
}
function ht(e) {
  return e.mode & 1
    ? M & 2 && le !== 0
      ? le & -le
      : Pd.transition !== null
      ? (Ir === 0 && (Ir = Qs()), Ir)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qs(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < In) throw ((In = 0), (Ki = null), Error(S(185)));
  nr(e, n, r),
    (!(M & 2) || e !== ne) &&
      (e === ne && (!(M & 2) && (Sl |= n), b === 4 && ot(e, le)),
      we(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((fn = Y() + 500), vl && kt()));
}
function we(e, t) {
  var n = e.callbackNode;
  Pf(e, t);
  var r = Hr(e, e === ne ? le : 0);
  if (r === 0)
    n !== null && au(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && au(n), t === 1))
      e.tag === 0 ? Td(ts.bind(null, e)) : ga(ts.bind(null, e)),
        xd(function () {
          !(M & 6) && kt();
        }),
        (n = null);
    else {
      switch (Gs(r)) {
        case 1:
          n = po;
          break;
        case 4:
          n = Hs;
          break;
        case 16:
          n = Vr;
          break;
        case 536870912:
          n = Bs;
          break;
        default:
          n = Vr;
      }
      n = vc(n, ac.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ac(e, t) {
  if (((Mr = -1), (Ir = 0), M & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Hr(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = fc();
    (ne !== e || le !== t) && ((Ge = null), (fn = Y() + 500), Lt(e, t));
    do
      try {
        Xd();
        break;
      } catch (u) {
        cc(e, u);
      }
    while (1);
    No(),
      (ll.current = i),
      (M = l),
      J !== null ? (t = 0) : ((ne = null), (le = 0), (t = b));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Si(e)), l !== 0 && ((r = l), (t = Xi(e, l)))), t === 1)
    )
      throw ((n = er), Lt(e, 0), ot(e, r), we(e, Y()), n);
    if (t === 6) ot(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Gd(l) &&
          ((t = ul(e, r)),
          t === 2 && ((i = Si(e)), i !== 0 && ((r = i), (t = Xi(e, i)))),
          t === 1))
      )
        throw ((n = er), Lt(e, 0), ot(e, r), we(e, Y()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Ct(e, he, Ge);
          break;
        case 3:
          if (
            (ot(e, r), (r & 130023424) === r && ((t = Wo + 500 - Y()), 10 < t))
          ) {
            if (Hr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Pi(Ct.bind(null, e, he, Ge), t);
            break;
          }
          Ct(e, he, Ge);
          break;
        case 4:
          if ((ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Fe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Qd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pi(Ct.bind(null, e, he, Ge), r);
            break;
          }
          Ct(e, he, Ge);
          break;
        case 5:
          Ct(e, he, Ge);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return we(e, Y()), e.callbackNode === n ? ac.bind(null, e) : null;
}
function Xi(e, t) {
  var n = Mn;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = ul(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && Yi(t)),
    e
  );
}
function Yi(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function Gd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!$e(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ot(e, t) {
  for (
    t &= ~$o,
      t &= ~Sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ts(e) {
  if (M & 6) throw Error(S(327));
  rn();
  var t = Hr(e, 0);
  if (!(t & 1)) return we(e, Y()), null;
  var n = ul(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Si(e);
    r !== 0 && ((t = r), (n = Xi(e, r)));
  }
  if (n === 1) throw ((n = er), Lt(e, 0), ot(e, t), we(e, Y()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ct(e, he, Ge),
    we(e, Y()),
    null
  );
}
function Vo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((fn = Y() + 500), vl && kt());
  }
}
function Mt(e) {
  st !== null && st.tag === 0 && !(M & 6) && rn();
  var t = M;
  M |= 1;
  var n = Le.transition,
    r = I;
  try {
    if (((Le.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Le.transition = n), (M = t), !(M & 6) && kt();
  }
}
function Ho() {
  (ke = Jt.current), W(Jt);
}
function Lt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ed(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((xo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xr();
          break;
        case 3:
          an(), W(ge), W(ae), Ro();
          break;
        case 5:
          Oo(r);
          break;
        case 4:
          an();
          break;
        case 13:
          W(B);
          break;
        case 19:
          W(B);
          break;
        case 10:
          To(r.type._context);
          break;
        case 22:
        case 23:
          Ho();
      }
      n = n.return;
    }
  if (
    ((ne = e),
    (J = e = vt(e.current, null)),
    (le = ke = t),
    (b = 0),
    (er = null),
    ($o = Sl = zt = 0),
    (he = Mn = null),
    Pt !== null)
  ) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Pt = null;
  }
  return e;
}
function cc(e, t) {
  do {
    var n = J;
    try {
      if ((No(), (Dr.current = rl), nl)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        nl = !1;
      }
      if (
        ((jt = 0),
        (te = q = Q = null),
        (jn = !1),
        (Jn = 0),
        (Uo.current = null),
        n === null || n.return === null)
      ) {
        (b = 1), (er = t), (J = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = le),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = Vu(o);
          if (g !== null) {
            (g.flags &= -257),
              Hu(g, o, u, i, t),
              g.mode & 1 && Wu(i, a, t),
              (t = g),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Wu(i, a, t), Bo();
              break e;
            }
            s = Error(S(426));
          }
        } else if (H && u.mode & 1) {
          var P = Vu(o);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Hu(P, o, u, i, t),
              _o(cn(s, u));
            break e;
          }
        }
        (i = s = cn(s, u)),
          b !== 4 && (b = 2),
          Mn === null ? (Mn = [i]) : Mn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Ka(i, s, t);
              ju(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (mt === null || !mt.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Xa(i, u, t);
                ju(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      pc(n);
    } catch (E) {
      (t = E), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function fc() {
  var e = ll.current;
  return (ll.current = rl), e === null ? rl : e;
}
function Bo() {
  (b === 0 || b === 3 || b === 2) && (b = 4),
    ne === null || (!(zt & 268435455) && !(Sl & 268435455)) || ot(ne, le);
}
function ul(e, t) {
  var n = M;
  M |= 2;
  var r = fc();
  (ne !== e || le !== t) && ((Ge = null), Lt(e, t));
  do
    try {
      Kd();
      break;
    } catch (l) {
      cc(e, l);
    }
  while (1);
  if ((No(), (M = n), (ll.current = r), J !== null)) throw Error(S(261));
  return (ne = null), (le = 0), b;
}
function Kd() {
  for (; J !== null; ) dc(J);
}
function Xd() {
  for (; J !== null && !wf(); ) dc(J);
}
function dc(e) {
  var t = hc(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? pc(e) : (J = t),
    (Uo.current = null);
}
function pc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Wd(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (b = 6), (J = null);
        return;
      }
    } else if (((n = $d(n, t, ke)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function Ct(e, t, n) {
  var r = I,
    l = Le.transition;
  try {
    (Le.transition = null), (I = 1), Yd(e, t, n, r);
  } finally {
    (Le.transition = l), (I = r);
  }
  return null;
}
function Yd(e, t, n, r) {
  do rn();
  while (st !== null);
  if (M & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Af(e, i),
    e === ne && ((J = ne = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xr ||
      ((xr = !0),
      vc(Vr, function () {
        return rn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Le.transition), (Le.transition = null);
    var o = I;
    I = 1;
    var u = M;
    (M |= 4),
      (Uo.current = null),
      Hd(e, n),
      uc(n, e),
      hd(Ni),
      (Br = !!Ci),
      (Ni = Ci = null),
      (e.current = n),
      Bd(n),
      Sf(),
      (M = u),
      (I = o),
      (Le.transition = i);
  } else e.current = n;
  if (
    (xr && ((xr = !1), (st = e), (ol = l)),
    (i = e.pendingLanes),
    i === 0 && (mt = null),
    xf(n.stateNode),
    we(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (il) throw ((il = !1), (e = Gi), (Gi = null), e);
  return (
    ol & 1 && e.tag !== 0 && rn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ki ? In++ : ((In = 0), (Ki = e))) : (In = 0),
    kt(),
    null
  );
}
function rn() {
  if (st !== null) {
    var e = Gs(ol),
      t = Le.transition,
      n = I;
    try {
      if (((Le.transition = null), (I = 16 > e ? 16 : e), st === null))
        var r = !1;
      else {
        if (((e = st), (st = null), (ol = 0), M & 6)) throw Error(S(331));
        var l = M;
        for (M |= 4, x = e.current; x !== null; ) {
          var i = x,
            o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (x = a; x !== null; ) {
                  var m = x;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (x = h);
                  else
                    for (; x !== null; ) {
                      m = x;
                      var p = m.sibling,
                        g = m.return;
                      if ((lc(m), m === a)) {
                        x = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (x = p);
                        break;
                      }
                      x = g;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var P = k.sibling;
                    (k.sibling = null), (k = P);
                  } while (k !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (x = o);
          else
            e: for (; x !== null; ) {
              if (((i = x), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (x = f);
                break e;
              }
              x = i.return;
            }
        }
        var c = e.current;
        for (x = c; x !== null; ) {
          o = x;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (x = d);
          else
            e: for (o = c; x !== null; ) {
              if (((u = x), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wl(9, u);
                  }
                } catch (E) {
                  K(u, u.return, E);
                }
              if (u === o) {
                x = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (x = v);
                break e;
              }
              x = u.return;
            }
        }
        if (
          ((M = l), kt(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(fl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Le.transition = t);
    }
  }
  return !1;
}
function ns(e, t, n) {
  (t = cn(n, t)),
    (t = Ka(e, t, 1)),
    (e = pt(e, t, 1)),
    (t = de()),
    e !== null && (nr(e, 1, t), we(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) ns(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ns(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (mt === null || !mt.has(r)))
        ) {
          (e = cn(n, e)),
            (e = Xa(t, e, 1)),
            (t = pt(t, e, 1)),
            (e = de()),
            t !== null && (nr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Zd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ne === e &&
      (le & n) === n &&
      (b === 4 || (b === 3 && (le & 130023424) === le && 500 > Y() - Wo)
        ? Lt(e, 0)
        : ($o |= n)),
    we(e, t);
}
function mc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = pr), (pr <<= 1), !(pr & 130023424) && (pr = 4194304))
      : (t = 1));
  var n = de();
  (e = be(e, t)), e !== null && (nr(e, t, n), we(e, n));
}
function Jd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), mc(e, n);
}
function qd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), mc(e, n);
}
var hc;
hc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), Ud(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), H && t.flags & 1048576 && ya(t, Jr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zr(e, t), (e = t.pendingProps);
      var l = on(t, ae.current);
      nn(t, n), (l = jo(null, t, r, e, l, n));
      var i = zo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), Yr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ao(t),
            (l.updater = gl),
            (t.stateNode = l),
            (l._reactInternals = t),
            zi(t, r, e, n),
            (t = Fi(null, t, r, !0, i, n)))
          : ((t.tag = 0), H && i && Eo(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = ep(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Ii(null, t, r, e, n);
            break e;
          case 1:
            t = Gu(null, t, r, e, n);
            break e;
          case 11:
            t = Bu(null, t, r, e, n);
            break e;
          case 14:
            t = Qu(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Ii(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Gu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((qa(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ea(e, t),
          el(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = cn(Error(S(423)), t)), (t = Ku(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = cn(Error(S(424)), t)), (t = Ku(e, t, r, n, l));
            break e;
          } else
            for (
              Ee = dt(t.stateNode.containerInfo.firstChild),
                xe = t,
                H = !0,
                Ie = null,
                n = Na(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((un(), r === l)) {
            t = et(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ta(t),
        e === null && Ri(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Ti(r, l) ? (o = null) : i !== null && Ti(r, i) && (t.flags |= 32),
        Ja(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ri(t), null;
    case 13:
      return ba(e, t, n);
    case 4:
      return (
        Lo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Bu(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          U(qr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if ($e(i.value, o)) {
            if (i.children === l.children && !ge.current) {
              t = et(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ze(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var m = a.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Di(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Di(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        nn(t, n),
        (l = Oe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        Qu(e, t, r, l, n)
      );
    case 15:
      return Ya(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        zr(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), Yr(t)) : (e = !1),
        nn(t, n),
        _a(t, r, l),
        zi(t, r, l, n),
        Fi(null, t, r, !0, e, n)
      );
    case 19:
      return ec(e, t, n);
    case 22:
      return Za(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function vc(e, t) {
  return Vs(e, t);
}
function bd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ae(e, t, n, r) {
  return new bd(e, t, n, r);
}
function Qo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ep(e) {
  if (typeof e == "function") return Qo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ao)) return 11;
    if (e === co) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Fr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Qo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Wt:
        return Ot(n.children, l, i, t);
      case so:
        (o = 8), (l |= 8);
        break;
      case ii:
        return (
          (e = Ae(12, n, t, l | 2)), (e.elementType = ii), (e.lanes = i), e
        );
      case oi:
        return (e = Ae(13, n, t, l)), (e.elementType = oi), (e.lanes = i), e;
      case ui:
        return (e = Ae(19, n, t, l)), (e.elementType = ui), (e.lanes = i), e;
      case Cs:
        return kl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case xs:
              o = 10;
              break e;
            case _s:
              o = 9;
              break e;
            case ao:
              o = 11;
              break e;
            case co:
              o = 14;
              break e;
            case rt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ae(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ot(e, t, n, r) {
  return (e = Ae(7, e, r, t)), (e.lanes = n), e;
}
function kl(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = Cs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bl(e, t, n) {
  return (e = Ae(6, e, null, t)), (e.lanes = n), e;
}
function ei(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function tp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Go(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new tp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ae(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ao(i),
    e
  );
}
function np(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function gc(e) {
  if (!e) return yt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return va(e, n, t);
  }
  return t;
}
function yc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Go(n, r, !0, e, l, i, o, u, s)),
    (e.context = gc(null)),
    (n = e.current),
    (r = de()),
    (l = ht(n)),
    (i = Ze(r, l)),
    (i.callback = t ?? null),
    pt(n, i, l),
    (e.current.lanes = l),
    nr(e, l, r),
    we(e, r),
    e
  );
}
function El(e, t, n, r) {
  var l = t.current,
    i = de(),
    o = ht(l);
  return (
    (n = gc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pt(l, t, o)),
    e !== null && (Ue(e, l, o, i), Rr(e, l, o)),
    o
  );
}
function sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ko(e, t) {
  rs(e, t), (e = e.alternate) && rs(e, t);
}
function rp() {
  return null;
}
var wc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xo(e) {
  this._internalRoot = e;
}
xl.prototype.render = Xo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  El(e, t, null, null);
};
xl.prototype.unmount = Xo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function () {
      El(null, e, null, null);
    }),
      (t[qe] = null);
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ys();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < it.length && t !== 0 && t < it[n].priority; n++);
    it.splice(n, 0, e), n === 0 && Js(e);
  }
};
function Yo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ls() {}
function lp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = sl(o);
        i.call(a);
      };
    }
    var o = yc(t, r, e, 0, null, !1, !1, "", ls);
    return (
      (e._reactRootContainer = o),
      (e[qe] = o.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = sl(s);
      u.call(a);
    };
  }
  var s = Go(e, 0, !1, null, null, !1, !1, "", ls);
  return (
    (e._reactRootContainer = s),
    (e[qe] = s.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      El(t, s, n, r);
    }),
    s
  );
}
function Cl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = sl(o);
        u.call(s);
      };
    }
    El(t, o, e, l);
  } else o = lp(n, t, e, l, r);
  return sl(o);
}
Ks = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tn(t.pendingLanes);
        n !== 0 &&
          (mo(t, n | 1), we(t, Y()), !(M & 6) && ((fn = Y() + 500), kt()));
      }
      break;
    case 13:
      Mt(function () {
        var r = be(e, 1);
        if (r !== null) {
          var l = de();
          Ue(r, e, 1, l);
        }
      }),
        Ko(e, 1);
  }
};
ho = function (e) {
  if (e.tag === 13) {
    var t = be(e, 134217728);
    if (t !== null) {
      var n = de();
      Ue(t, e, 134217728, n);
    }
    Ko(e, 134217728);
  }
};
Xs = function (e) {
  if (e.tag === 13) {
    var t = ht(e),
      n = be(e, t);
    if (n !== null) {
      var r = de();
      Ue(n, e, t, r);
    }
    Ko(e, t);
  }
};
Ys = function () {
  return I;
};
Zs = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
gi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ci(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = hl(r);
            if (!l) throw Error(S(90));
            Ts(r), ci(r, l);
          }
        }
      }
      break;
    case "textarea":
      As(e, n);
      break;
    case "select":
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
Ms = Vo;
Is = Mt;
var ip = { usingClientEntryPoint: !1, Events: [lr, Qt, hl, js, zs, Vo] },
  _n = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  op = {
    bundleType: _n.bundleType,
    version: _n.version,
    rendererPackageName: _n.rendererPackageName,
    rendererConfig: _n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $s(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _n.findFiberByHostInstance || rp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_r.isDisabled && _r.supportsFiber)
    try {
      (fl = _r.inject(op)), (Be = _r);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yo(t)) throw Error(S(200));
  return np(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!Yo(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = wc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Go(e, 1, !1, null, null, n, !1, r, l)),
    (e[qe] = t.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    new Xo(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = $s(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Mt(e);
};
Ce.hydrate = function (e, t, n) {
  if (!_l(t)) throw Error(S(200));
  return Cl(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!Yo(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = wc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = yc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[qe] = t.current),
    Gn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new xl(t);
};
Ce.render = function (e, t, n) {
  if (!_l(t)) throw Error(S(200));
  return Cl(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!_l(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Mt(function () {
        Cl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qe] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = Vo;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_l(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Cl(e, t, n, !1, r);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ce);
})(nf);
var is = ni;
(ti.createRoot = is.createRoot), (ti.hydrateRoot = is.hydrateRoot);
const up = ({ filtros: e, setFiltros: t }) =>
  y.jsx("div", {
    className: "filtros sombra contenedor",
    children: y.jsx("form", {
      action: "",
      children: y.jsxs("div", {
        className: "campo",
        children: [
          y.jsx("label", { children: "Filtrar Gastos" }),
          y.jsxs("select", {
            value: e,
            onChange: (n) => t(n.target.value),
            children: [
              y.jsx("option", {
                value: "",
                children: "--- Seleccione Una ---",
              }),
              y.jsx("option", { value: "ahorro", children: "Ahorro" }),
              y.jsx("option", { value: "comida", children: "Comida" }),
              y.jsx("option", { value: "casa", children: "Casa" }),
              y.jsx("option", { value: "gastos", children: "Gastos Varios" }),
              y.jsx("option", { value: "ocio", children: "Tiempo Libre" }),
              y.jsx("option", { value: "salud", children: "Salud" }),
              y.jsx("option", {
                value: "subcripciones",
                children: "Subcripciones",
              }),
              y.jsx("option", { value: "comida", children: "Verduleria" }),
              y.jsx("option", { value: "comida", children: "Polleria" }),
            ],
          }),
        ],
      }),
    }),
  });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var Zi =
  function (e, t) {
    return (
      (Zi =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var l in r) r.hasOwnProperty(l) && (n[l] = r[l]);
        }),
      Zi(e, t)
    );
  };
function sp(e, t) {
  Zi(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var ap = 100,
  cp = 100,
  os = 50,
  Ji = 50,
  qi = 50;
function us(e) {
  var t = e.className,
    n = e.counterClockwise,
    r = e.dashRatio,
    l = e.pathRadius,
    i = e.strokeWidth,
    o = e.style;
  return O.createElement("path", {
    className: t,
    style: Object.assign(
      {},
      o,
      dp({ pathRadius: l, dashRatio: r, counterClockwise: n })
    ),
    d: fp({ pathRadius: l, counterClockwise: n }),
    strokeWidth: i,
    fillOpacity: 0,
  });
}
function fp(e) {
  var t = e.pathRadius,
    n = e.counterClockwise,
    r = t,
    l = n ? 1 : 0;
  return (
    `
      M ` +
    Ji +
    "," +
    qi +
    `
      m 0,-` +
    r +
    `
      a ` +
    r +
    "," +
    r +
    " " +
    l +
    " 1 1 0," +
    2 * r +
    `
      a ` +
    r +
    "," +
    r +
    " " +
    l +
    " 1 1 0,-" +
    2 * r +
    `
    `
  );
}
function dp(e) {
  var t = e.counterClockwise,
    n = e.dashRatio,
    r = e.pathRadius,
    l = Math.PI * 2 * r,
    i = (1 - n) * l;
  return {
    strokeDasharray: l + "px " + l + "px",
    strokeDashoffset: (t ? -i : i) + "px",
  };
}
var pp = (function (e) {
  sp(t, e);
  function t() {
    return (e !== null && e.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.getBackgroundPadding = function () {
      return this.props.background ? this.props.backgroundPadding : 0;
    }),
    (t.prototype.getPathRadius = function () {
      return os - this.props.strokeWidth / 2 - this.getBackgroundPadding();
    }),
    (t.prototype.getPathRatio = function () {
      var n = this.props,
        r = n.value,
        l = n.minValue,
        i = n.maxValue,
        o = Math.min(Math.max(r, l), i);
      return (o - l) / (i - l);
    }),
    (t.prototype.render = function () {
      var n = this.props,
        r = n.circleRatio,
        l = n.className,
        i = n.classes,
        o = n.counterClockwise,
        u = n.styles,
        s = n.strokeWidth,
        a = n.text,
        m = this.getPathRadius(),
        h = this.getPathRatio();
      return O.createElement(
        "svg",
        {
          className: i.root + " " + l,
          style: u.root,
          viewBox: "0 0 " + ap + " " + cp,
          "data-test-id": "CircularProgressbar",
        },
        this.props.background
          ? O.createElement("circle", {
              className: i.background,
              style: u.background,
              cx: Ji,
              cy: qi,
              r: os,
            })
          : null,
        O.createElement(us, {
          className: i.trail,
          counterClockwise: o,
          dashRatio: r,
          pathRadius: m,
          strokeWidth: s,
          style: u.trail,
        }),
        O.createElement(us, {
          className: i.path,
          counterClockwise: o,
          dashRatio: h * r,
          pathRadius: m,
          strokeWidth: s,
          style: u.path,
        }),
        a
          ? O.createElement(
              "text",
              { className: i.text, style: u.text, x: Ji, y: qi },
              a
            )
          : null
      );
    }),
    (t.defaultProps = {
      background: !1,
      backgroundPadding: 0,
      circleRatio: 1,
      classes: {
        root: "CircularProgressbar",
        trail: "CircularProgressbar-trail",
        path: "CircularProgressbar-path",
        text: "CircularProgressbar-text",
        background: "CircularProgressbar-background",
      },
      counterClockwise: !1,
      className: "",
      maxValue: 100,
      minValue: 0,
      strokeWidth: 8,
      styles: { root: {}, trail: {}, path: {}, text: {}, background: {} },
      text: "",
    }),
    t
  );
})(O.Component);
function mp(e) {
  var t = e.rotation,
    n = e.strokeLinecap,
    r = e.textColor,
    l = e.textSize,
    i = e.pathColor,
    o = e.pathTransition,
    u = e.pathTransitionDuration,
    s = e.trailColor,
    a = e.backgroundColor,
    m = t == null ? void 0 : "rotate(" + t + "turn)",
    h = t == null ? void 0 : "center center";
  return {
    root: {},
    path: Cr({
      stroke: i,
      strokeLinecap: n,
      transform: m,
      transformOrigin: h,
      transition: o,
      transitionDuration: u == null ? void 0 : u + "s",
    }),
    trail: Cr({
      stroke: s,
      strokeLinecap: n,
      transform: m,
      transformOrigin: h,
    }),
    text: Cr({ fill: r, fontSize: l }),
    background: Cr({ fill: a }),
  };
}
function Cr(e) {
  return (
    Object.keys(e).forEach(function (t) {
      e[t] == null && delete e[t];
    }),
    e
  );
}
const hp = ({
    gastos: e,
    presupuesto: t,
    setGastos: n,
    setPresupuesto: r,
    setIsValidPresupuesto: l,
  }) => {
    const [i, o] = O.useState(0),
      [u, s] = O.useState(0),
      [a, m] = O.useState(0);
    O.useEffect(() => {
      const g = e.reduce((P, f) => f.cantidad + P, 0),
        w = t - g,
        k = (((t - w) / t) * 100).toFixed(2);
      setTimeout(() => {
        o(k), s(w);
      }, 1500),
        m(g);
    }, [e]);
    const h = (g) =>
        g.toLocaleString("en-US", { style: "currency", currency: "USD" }),
      p = () => {
        confirm("¿Desea Reiniciar la App?") && (n([]), r(0), l(!1));
      };
    return y.jsxs("div", {
      className: "contenedor-presupuesto contenedor sombra dos-columnas",
      children: [
        y.jsx("div", {
          children: y.jsx(pp, {
            value: i,
            text: `${i}% Gastado`,
            styles: mp({
              pathColor: i > 100 ? "#dc2626" : "#3b82f6",
              trailColor: "#f5f5f5",
              textColor: i > 100 ? "#dc2626" : "#3b82f6",
            }),
          }),
        }),
        y.jsxs("div", {
          className: "contenido-presupuesto",
          children: [
            y.jsx("button", {
              className: "reset-app",
              type: "button",
              onClick: p,
              children: "Resetear App",
            }),
            y.jsxs("p", {
              children: [y.jsx("span", { children: "Presupuesto: " }), h(t)],
            }),
            y.jsxs("p", {
              className: `${u < 0 ? "negativo" : ""}`,
              children: [y.jsx("span", { children: "Disponible: " }), h(u)],
            }),
            y.jsxs("p", {
              children: [y.jsx("span", { children: "Gastado: " }), h(a)],
            }),
          ],
        }),
      ],
    });
  },
  Sc = ({ children: e, tipo: t }) =>
    y.jsx("div", { className: `alerta ${t} `, children: e }),
  vp = ({ presupuesto: e, setPresupuesto: t, setIsValidPresupuesto: n }) => {
    const [r, l] = O.useState(""),
      i = (o) => {
        if ((o.preventDefault(), !e || e < 0)) {
          l("Presupuesto Inválido!!!");
          return;
        }
        l(""), n(!0);
      };
    return y.jsx("div", {
      className: "contenedor-presupuesto contenedor sombra",
      children: y.jsxs("form", {
        onSubmit: i,
        className: "formulario",
        children: [
          y.jsxs("div", {
            className: "campo",
            children: [
              y.jsx("label", { children: " Definir Presupúesto" }),
              y.jsx("input", {
                type: "number",
                className: "nuevo-presupuesto",
                placeholder: "Añade tu Presupuesto",
                value: e,
                onChange: (o) => t(Number(o.target.value)),
              }),
            ],
          }),
          y.jsx("input", { type: "submit", value: "Añadir" }),
          r && y.jsx(Sc, { tipo: "error", children: r }),
        ],
      }),
    });
  },
  gp = ({
    gastos: e,
    setGastos: t,
    presupuesto: n,
    setPresupuesto: r,
    isValidPresupuesto: l,
    setIsValidPresupuesto: i,
  }) =>
    y.jsxs("header", {
      children: [
        y.jsx("h1", { children: "Planificador de Gastos" }),
        ";",
        l
          ? y.jsx(hp, {
              presupuesto: n,
              gastos: e,
              setGastos: t,
              setPresupuesto: r,
              setIsValidPresupuesto: i,
            })
          : y.jsx(vp, {
              presupuesto: n,
              setPresupuesto: r,
              setIsValidPresupuesto: i,
            }),
      ],
    });
var L = {},
  yp = {
    get exports() {
      return L;
    },
    set exports(e) {
      L = e;
    },
  },
  wp = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Sp = wp,
  kp = Sp;
function kc() {}
function Ec() {}
Ec.resetWarningCache = kc;
var Ep = function () {
  function e(r, l, i, o, u, s) {
    if (s !== kp) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Ec,
    resetWarningCache: kc,
  };
  return (n.PropTypes = n), n;
};
yp.exports = Ep();
var xp = function (t) {
  var n = t.children;
  return n == null
    ? null
    : Array.isArray(n)
    ? Z.Children.map(n, function (r, l) {
        return Z.cloneElement(r, { leading: !0, main: l === 0 });
      })
    : Z.cloneElement(n, { leading: !0, main: !0 });
};
function xc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ss(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _c(e, t, n) {
  return (
    t && ss(e.prototype, t),
    n && ss(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function F(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Cc(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  Object.defineProperty(e, "prototype", {
    value: Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    }),
    writable: !1,
  }),
    t && bi(e, t);
}
function al(e) {
  return (
    (al = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    al(e)
  );
}
function bi(e, t) {
  return (
    (bi =
      Object.setPrototypeOf ||
      function (r, l) {
        return (r.__proto__ = l), r;
      }),
    bi(e, t)
  );
}
function _p() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function z(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Cp(e, t) {
  if (t && (typeof t == "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return z(e);
}
function Nc(e) {
  var t = _p();
  return function () {
    var r = al(e),
      l;
    if (t) {
      var i = al(this).constructor;
      l = Reflect.construct(r, arguments, i);
    } else l = r.apply(this, arguments);
    return Cp(this, l);
  };
}
function Tc(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Tc(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Nt() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Tc(t)) && (r && (r += " "), (r += n));
  return r;
}
var fe = { ANDROID: Symbol("ANDROID"), IOS: Symbol("IOS"), MS: Symbol("MS") },
  Pc = (function (e) {
    Cc(n, e);
    var t = Nc(n);
    function n(r) {
      var l;
      return (
        xc(this, n),
        (l = t.call(this, r)),
        (l.itemsMap = {}),
        (l.clickedItem = l.clickedItem.bind(z(l))),
        l
      );
    }
    return (
      _c(n, [
        {
          key: "clickedItem",
          value: function (l) {
            var i = this;
            Object.keys(this.itemsMap).forEach(function (o) {
              o !== l && i.itemsMap[o]();
            });
          },
        },
        {
          key: "render",
          value: function () {
            var l = this,
              i = this.props,
              o = i.actionDelay,
              u = o === void 0 ? 0 : o,
              s = i.children,
              a = i.className,
              m = a === void 0 ? "" : a,
              h = i.fullSwipe,
              p = h === void 0 ? !1 : h,
              g = i.destructiveCallbackDelay,
              w = g === void 0 ? 1e3 : g,
              k = i.style,
              P = i.type,
              f = P === void 0 ? fe.ANDROID : P,
              c = i.Tag,
              d = c === void 0 ? "div" : c,
              v = i.scrollStartThreshold,
              E = i.swipeStartThreshold,
              C = i.threshold,
              N = C === void 0 ? 0.5 : C;
            return Z.createElement(
              d,
              { className: Nt("swipeable-list", m), style: k },
              Z.Children.map(s, function (T, V) {
                return Z.cloneElement(T, {
                  actionDelay: u,
                  destructiveCallbackDelay: w,
                  fullSwipe: p,
                  listType: f,
                  scrollStartThreshold: v,
                  swipeStartThreshold: E,
                  threshold: N,
                  clickedCallback: l.clickedItem,
                  id: "listItem-".concat(V),
                  resetState: function (Se) {
                    l.itemsMap["listItem-".concat(V)] = Se;
                  },
                });
              })
            );
          },
        },
      ]),
      n
    );
  })(O.PureComponent);
Pc.propTypes = {
  actionDelay: L.number,
  children: L.node,
  className: L.string,
  fullSwipe: L.bool,
  destructiveCallbackDelay: L.number,
  style: L.object,
  type: L.oneOf(Object.values(fe)),
  Tag: L.string,
  scrollStartThreshold: L.number,
  swipeStartThreshold: L.number,
  threshold: L.number,
};
var Ac = Z.createContext(),
  Nr = {
    RETURN: Symbol("Return"),
    REMOVE: Symbol("Remove"),
    NONE: Symbol("None"),
  },
  je = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right",
    UNKNOWN: "unknown",
  },
  Np = 1e3 / 60,
  as = function (t, n) {
    var r = t.style.width,
      l = t.style.visibility;
    (t.style.width = "auto"), (t.style.visibility = "hidden");
    var i = n(t);
    return (t.style.width = r), (t.style.visibility = l), i;
  },
  cs = {
    leadingFullSwipe: !1,
    trailingFullSwipe: !1,
    triggerAction: !1,
    scaleLeading: !1,
    scaleTrailing: !1,
  },
  Lc = (function (e) {
    Cc(n, e);
    var t = Nc(n);
    function n(r) {
      var l;
      return (
        xc(this, n),
        (l = t.call(this, r)),
        F(z(l), "setLeadingFullSwipeAction", function (i) {
          l.leadingFullSwipeAction = i;
        }),
        F(z(l), "setTrailingFullSwipeAction", function (i) {
          l.trailingFullSwipeAction = i;
        }),
        F(z(l), "resetState", function () {
          (l.dragStartPoint = { x: -1, y: -1 }),
            (l.dragDirection = je.UNKNOWN),
            (l.left = 0),
            (l.previousSwipeDistancePercent = 0),
            (l.leadingActionsOpened = !1),
            (l.trailingActionsOpened = !1);
        }),
        F(z(l), "handleDragStartMouse", function (i) {
          window.addEventListener("mouseup", l.handleDragEndMouse),
            window.addEventListener("mousemove", l.handleMouseMove),
            l.listElement.addEventListener("mouseup", l.handleDragEndMouse),
            l.listElement.addEventListener("mousemove", l.handleMouseMove),
            l.handleDragStart(i);
        }),
        F(z(l), "handleDragStartTouch", function (i) {
          window.addEventListener("touchend", l.handleDragEndTouch);
          var o = i.targetTouches[0];
          l.handleDragStart(o);
        }),
        F(z(l), "handleDragStart", function (i) {
          var o = i.clientX,
            u = i.clientY;
          l.props.clickedCallback && l.props.clickedCallback(l.props.id),
            !l.leadingActionsOpened &&
              !l.trailingActionsOpened &&
              (l.resetState(), l.setState(cs));
          var s = 0;
          l.leadingActionsOpened && (s = -l.leadingActionsWidth),
            l.trailingActionsOpened && (s = l.trailingActionsWidth),
            (l.dragStartPoint = { x: o + s, y: u }),
            (l.listElement.className = "swipeable-list-item__content"),
            l.leadingActionsElement &&
              (l.leadingActionsElement.className =
                "swipeable-list-item__leading-actions"),
            l.trailingActionsElement &&
              (l.trailingActionsElement.className =
                "swipeable-list-item__trailing-actions"),
            (l.startTime = Date.now()),
            l.scheduleUpdatePosition();
        }),
        F(z(l), "handleMouseMove", function (i) {
          if (l.dragStartedWithinItem()) {
            var o = i.clientX,
              u = i.clientY;
            l.setDragDirection(o, u),
              l.isSwiping() &&
                (i.stopPropagation(),
                i.preventDefault(),
                (l.left = o - l.dragStartPoint.x),
                l.scheduleUpdatePosition());
          }
        }),
        F(z(l), "handleTouchMove", function (i) {
          if (l.dragStartedWithinItem()) {
            var o = i.targetTouches[0],
              u = o.clientX,
              s = o.clientY;
            if ((l.setDragDirection(u, s), !i.cancelable)) return;
            l.isSwiping() &&
              (i.stopPropagation(),
              i.preventDefault(),
              (l.left = u - l.dragStartPoint.x),
              l.scheduleUpdatePosition());
          }
        }),
        F(z(l), "handleDragEndMouse", function () {
          window.removeEventListener("mouseup", l.handleDragEndMouse),
            window.removeEventListener("mousemove", l.handleMouseMove),
            l.listElement &&
              (l.listElement.removeEventListener(
                "mouseup",
                l.handleDragEndMouse
              ),
              l.listElement.removeEventListener(
                "mousemove",
                l.handleMouseMove
              )),
            l.handleDragEnd();
        }),
        F(z(l), "handleDragEndTouch", function () {
          window.removeEventListener("touchend", l.handleDragEndTouch),
            l.handleDragEnd();
        }),
        F(z(l), "playReturnAnimationForLeadingActions", function (i) {
          var o = i.to,
            u = i.isIosType,
            s = i.playMsReturnAnimation;
          if (l.leadingActionsElement)
            if (
              ((l.leadingActionsElement.className = Nt(
                "swipeable-list-item__leading-actions",
                s
                  ? "swipeable-list-item__actions--return-ms"
                  : "swipeable-list-item__leading-actions--return"
              )),
              l.leadingActionsOpened &&
                u &&
                (l.leadingActionsElement.className += " test-actions-opened"),
              s)
            ) {
              var a = function m() {
                l.leadingActionsElement.removeEventListener("animationend", m),
                  (l.leadingActionsElement.style.width = 0);
              };
              l.leadingActionsElement.addEventListener("animationend", a);
            } else
              l.leadingActionsElement.style.width = "".concat(
                o === 0 || !u
                  ? 0
                  : l.leadingActionsOpened && u
                  ? l.leadingActionsWidth
                  : 0,
                "px"
              );
        }),
        F(z(l), "playReturnAnimationForTrailingActions", function (i) {
          var o = i.to,
            u = i.isIosType,
            s = i.playMsReturnAnimation;
          if (l.trailingActionsElement)
            if (
              ((l.trailingActionsElement.className = Nt(
                "swipeable-list-item__trailing-actions",
                s
                  ? "swipeable-list-item__actions--return-ms"
                  : "swipeable-list-item__trailing-actions--return"
              )),
              l.trailingActionsOpened &&
                u &&
                (l.trailingActionsElement.className += " test-actions-opened"),
              !s)
            )
              l.trailingActionsElement.style.width = "".concat(
                o === 0 || !u
                  ? 0
                  : l.trailingActionsOpened && u
                  ? l.trailingActionsWidth
                  : 0,
                "px"
              );
            else {
              var a = function m() {
                l.trailingActionsElement.removeEventListener("animationend", m),
                  (l.trailingActionsElement.style.width = 0);
              };
              l.trailingActionsElement.addEventListener("animationend", a);
            }
        }),
        F(z(l), "playReturnAnimation", function () {
          var i =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            o = i.to,
            u = o === void 0 ? 0 : o;
          if (l.left !== 0) {
            var s = z(l),
              a = s.listElement,
              m = l.props.listType,
              h = l.state.triggerAction,
              p = m === fe.IOS,
              g = m === fe.MS,
              w = h && g;
            if (w) {
              var k = function P() {
                a.removeEventListener("animationend", P),
                  (a.style.transform = "translateX(0)");
              };
              a.addEventListener("animationend", k);
            }
            a &&
              ((a.className = Nt(
                "swipeable-list-item__content",
                w
                  ? "swipeable-list-item__content--return-".concat(
                      l.left < 0 ? "trailing" : "leading",
                      "-ms"
                    )
                  : "swipeable-list-item__content--return"
              )),
              w ||
                (a.style.transform = "translateX(".concat(p ? u : 0, "px)"))),
              l.left < 0
                ? l.playReturnAnimationForTrailingActions({
                    to: u,
                    isIosType: p,
                    playMsReturnAnimation: w,
                  })
                : l.playReturnAnimationForLeadingActions({
                    to: u,
                    isIosType: p,
                    playMsReturnAnimation: w,
                  }),
              u === 0 &&
                ((l.leadingActionsOpened = !1),
                (l.trailingActionsOpened = !1),
                l.resetState());
          }
        }),
        F(z(l), "playRemoveAnimation", function () {
          var i = z(l),
            o = i.listElement,
            u = i.wrapperElement,
            s = l.props.listType;
          if (o) {
            (u.className = "swipeable-list-item swipeable-list-item--remove"),
              (o.className =
                "swipeable-list-item__content swipeable-list-item__content--remove");
            var a = s === fe.IOS,
              m = a ? l.leadingActionsOpened : l.dragDirection === je.RIGHT,
              h = a ? l.trailingActionsOpened : l.dragDirection === je.LEFT,
              p = o.offsetWidth * (m ? 1 : -1);
            (o.style.transform = "translateX(".concat(p, "px)")),
              l.setState({ leadingFullSwipe: m, trailingFullSwipe: h }),
              m
                ? ((l.leadingActionsElement.className +=
                    " swipeable-list-item__leading-actions--return"),
                  (l.leadingActionsElement.style.width = "".concat(
                    Math.abs(p),
                    "px"
                  )))
                : h &&
                  ((l.trailingActionsElement.className +=
                    " swipeable-list-item__trailing-actions--return"),
                  (l.trailingActionsElement.style.width = "".concat(
                    Math.abs(p),
                    "px"
                  )));
          }
        }),
        F(z(l), "playActionAnimation", function (i) {
          var o = i.type,
            u = z(l),
            s = u.listElement;
          if (s)
            switch (o) {
              case Nr.REMOVE:
                l.playRemoveAnimation();
                break;
              case Nr.NONE:
                break;
              default:
                l.playReturnAnimation();
            }
        }),
        F(z(l), "handleDragEnd", function () {
          if (
            (l.requestedAnimationFrame &&
              (cancelAnimationFrame(l.requestedAnimationFrame),
              (l.requestedAnimationFrame = null)),
            l.isSwiping())
          ) {
            var i = l.state,
              o = i.leadingFullSwipe,
              u = i.trailingFullSwipe,
              s = i.triggerAction,
              a = l.props.onSwipeEnd;
            if ((a && a(l.dragDirection), s)) {
              if (o) {
                l.leadingFullSwipeAction();
                return;
              }
              if (u) {
                l.trailingFullSwipeAction();
                return;
              }
            }
            l.leadingActionsOpened || l.trailingActionsOpened
              ? (l.leadingActionsOpened
                  ? (l.left = l.leadingActionsWidth)
                  : l.trailingActionsOpened &&
                    (l.left = -l.trailingActionsWidth),
                l.playReturnAnimation({ to: l.left }))
              : (l.playReturnAnimation(), l.resetState());
          }
        }),
        F(z(l), "dragStartedWithinItem", function () {
          var i = l.dragStartPoint,
            o = i.x,
            u = i.y;
          return o !== -1 && u !== -1;
        }),
        F(z(l), "setDragDirection", function (i, o) {
          if (l.dragDirection === je.UNKNOWN) {
            var u = l.dragStartPoint,
              s = u.x,
              a = u.y,
              m = Math.abs(i - s),
              h = Math.abs(o - a);
            if (
              m <= l.dragHorizontalDirectionThreshold &&
              h <= l.dragVerticalDirectionThreshold
            )
              return;
            var p = Math.atan2(o - a, i - s),
              g = Math.round((8 * p) / (2 * Math.PI) + 8) % 8;
            switch (g) {
              case 0:
                l.leadingActionsElement !== null &&
                  m > l.dragHorizontalDirectionThreshold &&
                  (l.dragDirection = je.RIGHT);
                break;
              case 1:
              case 2:
              case 3:
                h > l.dragVerticalDirectionThreshold &&
                  (l.dragDirection = je.DOWN);
                break;
              case 4:
                l.trailingActionsElement !== null &&
                  m > l.dragHorizontalDirectionThreshold &&
                  (l.dragDirection = je.LEFT);
                break;
              case 5:
              case 6:
              case 7:
                h > l.dragVerticalDirectionThreshold &&
                  (l.dragDirection = je.UP);
                break;
              default:
                l.dragDirection = je.UNKNOWN;
            }
            var w = l.props.onSwipeStart;
            w && l.isSwiping() && w(l.dragDirection);
          }
        }),
        F(z(l), "isSwiping", function () {
          var i = l.props.blockSwipe,
            o = l.dragDirection === je.LEFT || l.dragDirection === je.RIGHT;
          return !i && l.dragStartedWithinItem() && o;
        }),
        F(z(l), "scheduleUpdatePosition", function () {
          l.requestedAnimationFrame ||
            (l.requestedAnimationFrame = requestAnimationFrame(function () {
              (l.requestedAnimationFrame = null), l.updatePosition();
            }));
        }),
        F(z(l), "updatePosition", function () {
          if (l.isSwiping()) {
            var i = Date.now() - l.startTime;
            if (!(i <= Np)) {
              var o = l.props,
                u = o.threshold,
                s = o.listType,
                a = l.fullSwipe,
                m = l.left < 0,
                h = l.left > 0;
              if (
                (m &&
                  (l.onlyLeadingActions && (l.left = 0),
                  l.trailingActionsElement &&
                    s === fe.IOS &&
                    ((l.trailingActionsOpened =
                      Math.abs(l.left) > l.trailingActionsWidth),
                    (l.leadingActionsOpened = !1))),
                h &&
                  (l.onlyTrailingActions && (l.left = 0),
                  l.leadingActionsElement &&
                    s === fe.IOS &&
                    ((l.leadingActionsOpened = l.left > l.leadingActionsWidth),
                    (l.trailingActionsOpened = !1))),
                l.leadingActionsElement &&
                  (l.leadingActionsElement.style.width = "".concat(
                    l.left < 0 ? 0 : l.left,
                    "px"
                  )),
                l.trailingActionsElement &&
                  (l.trailingActionsElement.style.width = "".concat(
                    l.left > 0 ? 0 : -l.left,
                    "px"
                  )),
                l.listElement)
              ) {
                if (a) {
                  var p = z(l),
                    g = p.listElement.offsetWidth,
                    w = g * u;
                  l.left < -w
                    ? l.setState({
                        leadingFullSwipe: !1,
                        trailingFullSwipe: !0,
                        triggerAction: !0,
                        scaleTrailing: !0,
                      })
                    : l.left > w
                    ? l.setState({
                        leadingFullSwipe: !0,
                        trailingFullSwipe: !1,
                        triggerAction: !0,
                        scaleLeading: !0,
                      })
                    : l.setState({
                        scaleLeading: !1,
                        scaleTrailing: !1,
                        triggerAction: !1,
                      });
                }
                if (
                  ((l.listElement.style.transform = "translateX(".concat(
                    l.left,
                    "px)"
                  )),
                  l.props.onSwipeProgress)
                ) {
                  var k = l.listElement.offsetWidth,
                    P = l.previousSwipeDistancePercent;
                  if (k !== 0) {
                    var f = Math.max(0, k - Math.abs(l.left));
                    P = 100 - Math.round((100 * f) / k);
                  }
                  l.previousSwipeDistancePercent !== P &&
                    (l.props.onSwipeProgress(P, l.dragDirection),
                    (l.previousSwipeDistancePercent = P));
                }
              }
              l.startTime = Date.now();
            }
          }
        }),
        F(z(l), "onActionTriggered", function (i) {
          l.playActionAnimation({ type: i ? Nr.REMOVE : Nr.RETURN });
        }),
        F(z(l), "bindListElement", function (i) {
          return (l.listElement = i);
        }),
        F(z(l), "bindWrapperElement", function (i) {
          return (l.wrapperElement = i);
        }),
        F(z(l), "bindLeadingActionsElement", function (i) {
          return (l.leadingActionsElement = i);
        }),
        F(z(l), "bindTrailingActionsElement", function (i) {
          return (l.trailingActionsElement = i);
        }),
        F(z(l), "renderActions", function (i, o, u) {
          var s = l.props,
            a = s.actionDelay,
            m = s.destructiveCallbackDelay,
            h = s.listType,
            p = l.state,
            g = p.leadingFullSwipe,
            w = p.trailingFullSwipe,
            k = p.scaleLeading,
            P = p.scaleTrailing,
            f = z(l),
            c = f.onActionTriggered,
            d = f.setLeadingFullSwipeAction,
            v = f.setTrailingFullSwipeAction,
            E =
              h === fe.MS &&
              ((k && o === "leading") || (P && o === "trailing"));
          return Z.createElement(
            "div",
            {
              className: Nt(
                "swipeable-list-item__".concat(o, "-actions"),
                F({}, "swipeable-list-item__".concat(o, "-actions--scaled"), E)
              ),
              "data-testid": "".concat(o, "-actions"),
              ref: u,
            },
            Z.createElement(
              Ac.Provider,
              {
                value: {
                  actionDelay: a,
                  destructiveCallbackDelay: m,
                  listType: h,
                  leadingFullSwipe: g,
                  onActionTriggered: c,
                  scaleLeading: k,
                  scaleTrailing: P,
                  setLeadingFullSwipeAction: d,
                  setTrailingFullSwipeAction: v,
                  trailingFullSwipe: w,
                },
              },
              i
            )
          );
        }),
        (l.state = cs),
        (l.listElement = null),
        (l.leadingActionsElement = null),
        (l.trailingActionsElement = null),
        (l.wrapperElement = null),
        (l.requestedAnimationFrame = null),
        (l.leadingActionsWidth = 0),
        (l.trailingActionsWidth = 0),
        (l.startTime = null),
        (l.previousSwipeDistancePercent = 0),
        (l.leadingFullSwipeAction = null),
        (l.trailingFullSwipeAction = null),
        (l.id = r.id),
        l.resetState(),
        l
      );
    }
    return (
      _c(n, [
        {
          key: "dragHorizontalDirectionThreshold",
          get: function () {
            return this.props.swipeStartThreshold || 10;
          },
        },
        {
          key: "dragVerticalDirectionThreshold",
          get: function () {
            return this.props.scrollStartThreshold || 10;
          },
        },
        {
          key: "fullSwipe",
          get: function () {
            var l = this.props,
              i = l.fullSwipe,
              o = l.listType;
            return o === fe.IOS ? i : !0;
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            this.listElement.addEventListener(
              "mousedown",
              this.handleDragStartMouse
            ),
              this.listElement.addEventListener(
                "touchstart",
                this.handleDragStartTouch,
                { passive: !0 }
              ),
              this.listElement.addEventListener(
                "touchend",
                this.handleDragEndTouch
              ),
              this.listElement.addEventListener(
                "touchmove",
                this.handleTouchMove,
                { capture: !0, passive: !1 }
              ),
              this.leadingActionsElement &&
                (this.leadingActionsWidth = as(
                  this.leadingActionsElement,
                  function (l) {
                    return l.offsetWidth;
                  }
                )),
              this.trailingActionsElement &&
                (this.trailingActionsWidth = as(
                  this.trailingActionsElement,
                  function (l) {
                    return l.offsetWidth;
                  }
                )),
              this.props.resetState &&
                this.props.resetState(this.playReturnAnimation);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.requestedAnimationFrame &&
              (cancelAnimationFrame(this.requestedAnimationFrame),
              (this.requestedAnimationFrame = null)),
              this.listElement.removeEventListener(
                "mousedown",
                this.handleDragStartMouse
              ),
              this.listElement.removeEventListener(
                "touchstart",
                this.handleDragStartTouch
              ),
              this.listElement.removeEventListener(
                "touchend",
                this.handleDragEndTouch
              ),
              this.listElement.removeEventListener(
                "touchmove",
                this.handleTouchMove,
                { capture: !0, passive: !1 }
              );
          },
        },
        {
          key: "onlyLeadingActions",
          get: function () {
            return (
              this.leadingActionsElement !== null &&
              this.trailingActionsElement === null
            );
          },
        },
        {
          key: "onlyTrailingActions",
          get: function () {
            return (
              this.leadingActionsElement === null &&
              this.trailingActionsElement !== null
            );
          },
        },
        {
          key: "render",
          value: function () {
            var l = this.props,
              i = l.children,
              o = l.className,
              u = l.leadingActions,
              s = l.trailingActions,
              a = l.onClick;
            return Z.createElement(
              "div",
              {
                className: Nt("swipeable-list-item", o),
                ref: this.bindWrapperElement,
                onClick:
                  this.leadingActionsOpened || this.trailingActionsOpened
                    ? void 0
                    : a,
              },
              u &&
                this.renderActions(
                  u,
                  "leading",
                  this.bindLeadingActionsElement
                ),
              Z.createElement(
                "div",
                {
                  className: "swipeable-list-item__content",
                  "data-testid": "content",
                  ref: this.bindListElement,
                },
                i
              ),
              s &&
                this.renderActions(
                  s,
                  "trailing",
                  this.bindTrailingActionsElement
                )
            );
          },
        },
      ]),
      n
    );
  })(O.PureComponent);
Lc.propTypes = {
  actionDelay: L.number,
  blockSwipe: L.bool,
  children: L.node,
  className: L.string,
  destructiveCallbackDelay: L.number,
  fullSwipe: L.bool,
  leadingActions: L.node,
  listType: L.oneOf(Object.values(fe)),
  onClick: L.func,
  onSwipeEnd: L.func,
  onSwipeProgress: L.func,
  onSwipeStart: L.func,
  scrollStartThreshold: L.number,
  swipeStartThreshold: L.number,
  threshold: L.number,
  trailingActions: L.node,
  clickedCallback: L.func,
  id: L.string,
  resetState: L.func,
};
var eo = function (t) {
  var n = t.children,
    r = t.className,
    l = t.destructive,
    i = l === void 0 ? !1 : l,
    o = t.main,
    u = o === void 0 ? !1 : o,
    s = t.leading,
    a = t.onClick,
    m = t.trailing,
    h = t.Tag,
    p = h === void 0 ? "span" : h,
    g = Z.useContext(Ac),
    w = g.actionDelay,
    k = g.destructiveCallbackDelay,
    P = g.leadingFullSwipe,
    f = g.listType,
    c = g.onActionTriggered,
    d = g.setLeadingFullSwipeAction,
    v = g.setTrailingFullSwipeAction,
    E = g.trailingFullSwipe,
    C = g.scaleLeading,
    N = g.scaleTrailing,
    T = Z.useCallback(
      function () {
        if (w) {
          window.setTimeout(function () {
            c(i), a();
          }, w);
          return;
        }
        c(i),
          i
            ? window.setTimeout(function () {
                return a();
              }, k)
            : a();
      },
      [w, i, k, c, a]
    );
  return (
    Z.useEffect(
      function () {
        s && u && d(T);
      },
      [s, u, T, d]
    ),
    Z.useEffect(
      function () {
        m && u && v(T);
      },
      [m, u, T, v]
    ),
    Z.createElement(
      p,
      {
        className: Nt(
          "swipe-action",
          {
            "swipe-action__leading": s,
            "swipe-action__trailing": m,
            "swipe-action__leading--full-swipe-rest":
              s && P && !u && f === fe.IOS,
            "swipe-action__leading--full-swipe-main":
              s && P && u && f === fe.IOS,
            "swipe-action__trailing--full-swipe-rest":
              m && E && !u && f === fe.IOS,
            "swipe-action__trailing--full-swipe-main":
              m && E && u && f === fe.IOS,
            "swipe-action__grayed": f === fe.MS && !(C || N),
          },
          r
        ),
        onClick: T,
      },
      n
    )
  );
};
eo.propTypes = {
  children: L.node.isRequired,
  className: L.string,
  destructive: L.bool,
  main: L.bool,
  leading: L.bool,
  onClick: L.func.isRequired,
  trailing: L.bool,
  Tag: L.string,
};
var Tp = function (t) {
  var n = t.children;
  return n == null
    ? null
    : Array.isArray(n)
    ? Z.Children.map(n, function (r, l) {
        return Z.cloneElement(r, { main: l === n.length - 1, trailing: !0 });
      })
    : Z.cloneElement(n, { main: !0, trailing: !0 });
};
const Pp = () => {
    const e = Math.random().toString(36).substring(2),
      t = Date.now().toString(36);
    return e + t;
  },
  Ap = (e) => {
    const t = new Date(e),
      n = { year: "numeric", month: "long", day: "2-digit" };
    return t.toLocaleDateString("es-ES", n);
  },
  Lp = "./assets/icono_ahorro-ff2959d3.svg",
  Op = "./assets/icono_casa-1170ce11.svg",
  Rp = "./assets/icono_comida-db0a9016.svg",
  Dp = "./assets/icono_gastos-e6dea3b0.svg",
  jp = "./assets/icono_ocio-ad5d0e9e.svg",
  zp = "./assets/icono_salud-41ba3136.svg",
  Mp = "./assets/icono_suscripciones-97f04dc8.svg",
  Ip = {
    ahorrro: Lp,
    casa: Op,
    comida: Rp,
    gastos: Dp,
    ocio: jp,
    salud: zp,
    subcripciones: Mp,
  },
  fs = ({ gasto: e, setGastoEditar: t, eliminarGasto: n }) => {
    const { categoria: r, nombre: l, cantidad: i, id: o, fecha: u } = e,
      s = () =>
        y.jsx(xp, {
          children: y.jsx(eo, { onClick: () => t(e), children: "Editar" }),
        }),
      a = () =>
        y.jsx(Tp, {
          children: y.jsx(eo, {
            onClick: () => n(o),
            destructive: !0,
            children: "Eliminar",
          }),
        });
    return y.jsx(Pc, {
      children: y.jsx(Lc, {
        leadingActions: s(),
        trailingActions: a(),
        children: y.jsxs("div", {
          className: "gasto sombra",
          children: [
            y.jsxs("div", {
              className: "contenido-gasto",
              children: [
                y.jsx("img", { src: Ip[r] }),
                y.jsxs("div", {
                  className: "descripcion-gasto",
                  children: [
                    y.jsx("p", { className: "categoria", children: r }),
                    y.jsx("p", { className: "nombre-gasto", children: l }),
                    y.jsxs("p", {
                      className: "fecha-gasto",
                      children: [
                        " ",
                        "Agregado el: ",
                        y.jsx("span", { children: Ap(u) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            y.jsxs("p", { className: "cantidad-gasto", children: ["$", i] }),
          ],
        }),
      }),
    });
  },
  Fp = ({
    gastos: e,
    setGastoEditar: t,
    eliminarGasto: n,
    gastosFiltrrados: r,
    filtros: l,
  }) =>
    y.jsx("div", {
      className: "listado-gastos contenedor",
      children: l
        ? y.jsxs(y.Fragment, {
            children: [
              y.jsx("h2", {
                children: r.length ? "Gastos" : "No Hay Nada Aquí",
              }),
              r.map((i) =>
                y.jsx(
                  fs,
                  { gasto: i, setGastoEditar: t, eliminarGasto: n },
                  i.id
                )
              ),
            ],
          })
        : y.jsxs(y.Fragment, {
            children: [
              y.jsx("h2", {
                children: e.length ? "Gastos" : "No Hay Gastos, No Hay",
              }),
              e.map((i) =>
                y.jsx(
                  fs,
                  { gasto: i, setGastoEditar: t, eliminarGasto: n },
                  i.id
                )
              ),
            ],
          }),
    }),
  Up = "./assets/cerrar-ab3aac92.svg",
  $p = ({
    setModal: e,
    animarModal: t,
    setAnimarModal: n,
    guardarGasto: r,
    gastoEditar: l,
    setGastoEditar: i,
  }) => {
    const [o, u] = O.useState(""),
      [s, a] = O.useState(""),
      [m, h] = O.useState(""),
      [p, g] = O.useState(""),
      [w, k] = O.useState(""),
      [P, f] = O.useState("");
    O.useEffect(() => {
      Object.keys(l).length > 0 &&
        (a(l.nombre), h(l.cantidad), g(l.categoria), k(l.id), f(l.fecha));
    }, [l]);
    const c = () => {
        n(!1),
          i({}),
          setTimeout(() => {
            e(!1);
          }, 1e3);
      },
      d = (v) => {
        v.preventDefault(),
          [s, m, p].includes("") &&
            (u("Todos los Campos son Obligatorios"),
            setTimeout(() => {
              u("");
            }, 3e3)),
          r({ nombre: s, cantidad: m, categoria: p, id: w, fecha: P });
      };
    return y.jsxs("div", {
      className: "modal",
      children: [
        y.jsx("div", {
          className: "cerrar-modal",
          children: y.jsx("img", { src: Up, alt: "cerrarBtn", onClick: c }),
        }),
        y.jsxs("form", {
          className: `formulario ${t ? "animar" : "cerrar"}`,
          onSubmit: d,
          children: [
            y.jsx("legend", {
              children: l.nombre ? "Editar Gasto" : "Nuevo Gasto",
            }),
            o && y.jsx(Sc, { tipo: "error", children: o }),
            y.jsxs("div", {
              className: "campo",
              children: [
                y.jsx("label", { htmlFor: "nombre", children: "Nombre Gasto" }),
                y.jsx("input", {
                  type: "text",
                  id: "nombre",
                  placeholder: "Añade el Nombre del Gasto",
                  value: s,
                  onChange: (v) => a(v.target.value),
                  autoComplete: "off",
                }),
              ],
            }),
            y.jsxs("div", {
              className: "campo",
              children: [
                y.jsx("label", { htmlFor: "cantidad", children: "Cantidad" }),
                y.jsx("input", {
                  type: "number",
                  id: "cantidad",
                  placeholder: "Añade la cantidad del Gasto, ej: $300",
                  value: m,
                  onChange: (v) => h(Number(v.target.value)),
                }),
              ],
            }),
            y.jsxs("div", {
              className: "campo",
              children: [
                y.jsx("label", { htmlFor: "categoria", children: "Categoría" }),
                y.jsxs("select", {
                  name: "categoria",
                  id: "categoria",
                  value: p,
                  onChange: (v) => g(v.target.value),
                  children: [
                    y.jsx("option", {
                      value: "",
                      children: "--- Seleccione Una ---",
                    }),
                    y.jsx("option", { value: "ahorro", children: "Ahorro" }),
                    y.jsx("option", { value: "comida", children: "Comida" }),
                    y.jsx("option", { value: "casa", children: "Casa" }),
                    y.jsx("option", {
                      value: "gastos",
                      children: "Gastos Varios",
                    }),
                    y.jsx("option", {
                      value: "ocio",
                      children: "Tiempo Libre",
                    }),
                    y.jsx("option", { value: "salud", children: "Salud" }),
                    y.jsx("option", {
                      value: "subcripciones",
                      children: "Subcripciones",
                    }),
                    y.jsx("option", {
                      value: "comida",
                      children: "Verduleria",
                    }),
                    y.jsx("option", { value: "comida", children: "Polleria" }),
                  ],
                }),
              ],
            }),
            y.jsx("input", {
              type: "submit",
              value: l.nombre ? "Actualizar Gasto" : "Añadir Gasto",
            }),
          ],
        }),
      ],
    });
  },
  Wp = "./assets/nuevo-gasto-3ab385ce.svg";
function Vp() {
  const [e, t] = O.useState(JSON.parse(localStorage.getItem("gastos")) || []),
    [n, r] = O.useState(Number(localStorage.getItem("presupuesto")) ?? 0),
    [l, i] = O.useState(!1),
    [o, u] = O.useState(!1),
    [s, a] = O.useState(!1),
    [m, h] = O.useState({}),
    [p, g] = O.useState(""),
    [w, k] = O.useState([]);
  O.useEffect(() => {
    Object.keys(m).length > 0 &&
      (u(!0),
      setTimeout(() => {
        a(!0);
      }, 500));
  }, [m]),
    O.useEffect(() => {
      localStorage.setItem("presupuesto", n ?? 0);
    }, [n]),
    O.useEffect(() => {
      localStorage.setItem("gastos", JSON.stringify(e) ?? []);
    }, [e]),
    O.useEffect(() => {
      if (p) {
        const d = e.filter((v) => v.categoria === p);
        k(d);
      }
    }, [p]),
    O.useEffect(() => {
      (Number(localStorage.getItem("presupuesto")) ?? 0) > 0 && i(!0);
    }, []);
  const P = () => {
      u(!0),
        h({}),
        setTimeout(() => {
          a(!0);
        }, 500);
    },
    f = (d) => {
      if (d.id) {
        const v = e.map((E) => (E.id === d.id ? d : E));
        t(v), h({});
      } else (d.id = Pp()), (d.fecha = Date.now()), t([...e, d]);
      a(!1),
        setTimeout(() => {
          u(!1);
        }, 500);
    },
    c = (d) => {
      const v = e.filter((E) => E.id !== d);
      t(v);
    };
  return y.jsxs("div", {
    className: o ? "fijar" : "",
    children: [
      y.jsx(gp, {
        gastos: e,
        setGastos: t,
        presupuesto: n,
        setPresupuesto: r,
        isValidPresupuesto: l,
        setIsValidPresupuesto: i,
      }),
      l &&
        y.jsxs(y.Fragment, {
          children: [
            y.jsxs("main", {
              children: [
                y.jsx(up, { filtros: p, setFiltros: g }),
                y.jsx(Fp, {
                  gastos: e,
                  setGastoEditar: h,
                  eliminarGasto: c,
                  gastosFiltrrados: w,
                  filtros: p,
                }),
              ],
            }),
            y.jsx("div", {
              className: "nuevo-gasto",
              children: y.jsx("img", {
                src: Wp,
                alt: "IconoNuevoGasto",
                onClick: P,
              }),
            }),
          ],
        }),
      o &&
        y.jsx($p, {
          setModal: u,
          animarModal: s,
          setAnimarModal: a,
          guardarGasto: f,
          gastoEditar: m,
          setGastoEditar: h,
        }),
    ],
  });
}
ti.createRoot(document.getElementById("root")).render(
  y.jsx(Z.StrictMode, { children: y.jsx(Vp, {}) })
);
