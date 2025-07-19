function sv(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function Sr(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Nf = {
    exports: {}
}
  , ns = {}
  , Rf = {
    exports: {}
}
  , F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko = Symbol.for("react.element")
  , av = Symbol.for("react.portal")
  , lv = Symbol.for("react.fragment")
  , uv = Symbol.for("react.strict_mode")
  , cv = Symbol.for("react.profiler")
  , dv = Symbol.for("react.provider")
  , fv = Symbol.for("react.context")
  , pv = Symbol.for("react.forward_ref")
  , hv = Symbol.for("react.suspense")
  , mv = Symbol.for("react.memo")
  , gv = Symbol.for("react.lazy")
  , ec = Symbol.iterator;
function vv(e) {
    return e === null || typeof e != "object" ? null : (e = ec && e[ec] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Mf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Lf = Object.assign
  , jf = {};
function Tr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = jf,
    this.updater = n || Mf
}
Tr.prototype.isReactComponent = {};
Tr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Tr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Of() {}
Of.prototype = Tr.prototype;
function Ol(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = jf,
    this.updater = n || Mf
}
var Dl = Ol.prototype = new Of;
Dl.constructor = Ol;
Lf(Dl, Tr.prototype);
Dl.isPureReactComponent = !0;
var tc = Array.isArray
  , Df = Object.prototype.hasOwnProperty
  , _l = {
    current: null
}
  , _f = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Vf(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Df.call(t, r) && !_f.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: ko,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: _l.current
    }
}
function yv(e, t) {
    return {
        $$typeof: ko,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Vl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ko
}
function xv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var nc = /\/+/g;
function bs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? xv("" + e.key) : t.toString(36)
}
function ai(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ko:
            case av:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + bs(s, 0) : r,
        tc(o) ? (n = "",
        e != null && (n = e.replace(nc, "$&/") + "/"),
        ai(o, t, n, "", function(u) {
            return u
        })) : o != null && (Vl(o) && (o = yv(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(nc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    tc(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + bs(i, a);
            s += ai(i, t, n, l, o)
        }
    else if (l = vv(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(i = e.next()).done; )
            i = i.value,
            l = r + bs(i, a++),
            s += ai(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Vo(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return ai(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function wv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Re = {
    current: null
}
  , li = {
    transition: null
}
  , Sv = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: li,
    ReactCurrentOwner: _l
};
function If() {
    throw Error("act(...) is not supported in production builds of React.")
}
F.Children = {
    map: Vo,
    forEach: function(e, t, n) {
        Vo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Vo(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Vo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Vl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = Tr;
F.Fragment = lv;
F.Profiler = cv;
F.PureComponent = Ol;
F.StrictMode = uv;
F.Suspense = hv;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sv;
F.act = If;
F.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Lf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = _l.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Df.call(t, l) && !_f.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: ko,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
F.createContext = function(e) {
    return e = {
        $$typeof: fv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: dv,
        _context: e
    },
    e.Consumer = e
}
;
F.createElement = Vf;
F.createFactory = function(e) {
    var t = Vf.bind(null, e);
    return t.type = e,
    t
}
;
F.createRef = function() {
    return {
        current: null
    }
}
;
F.forwardRef = function(e) {
    return {
        $$typeof: pv,
        render: e
    }
}
;
F.isValidElement = Vl;
F.lazy = function(e) {
    return {
        $$typeof: gv,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: wv
    }
}
;
F.memo = function(e, t) {
    return {
        $$typeof: mv,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
F.startTransition = function(e) {
    var t = li.transition;
    li.transition = {};
    try {
        e()
    } finally {
        li.transition = t
    }
}
;
F.unstable_act = If;
F.useCallback = function(e, t) {
    return Re.current.useCallback(e, t)
}
;
F.useContext = function(e) {
    return Re.current.useContext(e)
}
;
F.useDebugValue = function() {}
;
F.useDeferredValue = function(e) {
    return Re.current.useDeferredValue(e)
}
;
F.useEffect = function(e, t) {
    return Re.current.useEffect(e, t)
}
;
F.useId = function() {
    return Re.current.useId()
}
;
F.useImperativeHandle = function(e, t, n) {
    return Re.current.useImperativeHandle(e, t, n)
}
;
F.useInsertionEffect = function(e, t) {
    return Re.current.useInsertionEffect(e, t)
}
;
F.useLayoutEffect = function(e, t) {
    return Re.current.useLayoutEffect(e, t)
}
;
F.useMemo = function(e, t) {
    return Re.current.useMemo(e, t)
}
;
F.useReducer = function(e, t, n) {
    return Re.current.useReducer(e, t, n)
}
;
F.useRef = function(e) {
    return Re.current.useRef(e)
}
;
F.useState = function(e) {
    return Re.current.useState(e)
}
;
F.useSyncExternalStore = function(e, t, n) {
    return Re.current.useSyncExternalStore(e, t, n)
}
;
F.useTransition = function() {
    return Re.current.useTransition()
}
;
F.version = "18.3.1";
Rf.exports = F;
var T = Rf.exports;
const K = Sr(T)
  , Tv = sv({
    __proto__: null,
    default: K
}, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cv = T
  , Pv = Symbol.for("react.element")
  , Ev = Symbol.for("react.fragment")
  , kv = Object.prototype.hasOwnProperty
  , Av = Cv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , bv = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ff(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        kv.call(t, r) && !bv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Pv,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Av.current
    }
}
ns.Fragment = Ev;
ns.jsx = Ff;
ns.jsxs = Ff;
Nf.exports = ns;
var x = Nf.exports
  , va = {}
  , zf = {
    exports: {}
}
  , Ke = {}
  , Bf = {
    exports: {}
}
  , Uf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(b, M) {
        var V = b.length;
        b.push(M);
        e: for (; 0 < V; ) {
            var O = V - 1 >>> 1
              , U = b[O];
            if (0 < o(U, M))
                b[O] = M,
                b[V] = U,
                V = O;
            else
                break e
        }
    }
    function n(b) {
        return b.length === 0 ? null : b[0]
    }
    function r(b) {
        if (b.length === 0)
            return null;
        var M = b[0]
          , V = b.pop();
        if (V !== M) {
            b[0] = V;
            e: for (var O = 0, U = b.length, G = U >>> 1; O < G; ) {
                var Fe = 2 * (O + 1) - 1
                  , zn = b[Fe]
                  , ze = Fe + 1
                  , fn = b[ze];
                if (0 > o(zn, V))
                    ze < U && 0 > o(fn, zn) ? (b[O] = fn,
                    b[ze] = V,
                    O = ze) : (b[O] = zn,
                    b[Fe] = V,
                    O = Fe);
                else if (ze < U && 0 > o(fn, V))
                    b[O] = fn,
                    b[ze] = V,
                    O = ze;
                else
                    break e
            }
        }
        return M
    }
    function o(b, M) {
        var V = b.sortIndex - M.sortIndex;
        return V !== 0 ? V : b.id - M.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , h = !1
      , y = !1
      , v = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(b) {
        for (var M = n(u); M !== null; ) {
            if (M.callback === null)
                r(u);
            else if (M.startTime <= b)
                r(u),
                M.sortIndex = M.expirationTime,
                t(l, M);
            else
                break;
            M = n(u)
        }
    }
    function w(b) {
        if (v = !1,
        m(b),
        !y)
            if (n(l) !== null)
                y = !0,
                B(C);
            else {
                var M = n(u);
                M !== null && ce(w, M.startTime - b)
            }
    }
    function C(b, M) {
        y = !1,
        v && (v = !1,
        g(k),
        k = -1),
        h = !0;
        var V = f;
        try {
            for (m(M),
            d = n(l); d !== null && (!(d.expirationTime > M) || b && !W()); ) {
                var O = d.callback;
                if (typeof O == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var U = O(d.expirationTime <= M);
                    M = e.unstable_now(),
                    typeof U == "function" ? d.callback = U : d === n(l) && r(l),
                    m(M)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var G = !0;
            else {
                var Fe = n(u);
                Fe !== null && ce(w, Fe.startTime - M),
                G = !1
            }
            return G
        } finally {
            d = null,
            f = V,
            h = !1
        }
    }
    var E = !1
      , P = null
      , k = -1
      , L = 5
      , j = -1;
    function W() {
        return !(e.unstable_now() - j < L)
    }
    function D() {
        if (P !== null) {
            var b = e.unstable_now();
            j = b;
            var M = !0;
            try {
                M = P(!0, b)
            } finally {
                M ? re() : (E = !1,
                P = null)
            }
        } else
            E = !1
    }
    var re;
    if (typeof p == "function")
        re = function() {
            p(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var R = new MessageChannel
          , J = R.port2;
        R.port1.onmessage = D,
        re = function() {
            J.postMessage(null)
        }
    } else
        re = function() {
            S(D, 0)
        }
        ;
    function B(b) {
        P = b,
        E || (E = !0,
        re())
    }
    function ce(b, M) {
        k = S(function() {
            b(e.unstable_now())
        }, M)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(b) {
        b.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || h || (y = !0,
        B(C))
    }
    ,
    e.unstable_forceFrameRate = function(b) {
        0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < b ? Math.floor(1e3 / b) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(b) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var M = 3;
            break;
        default:
            M = f
        }
        var V = f;
        f = M;
        try {
            return b()
        } finally {
            f = V
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(b, M) {
        switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            b = 3
        }
        var V = f;
        f = b;
        try {
            return M()
        } finally {
            f = V
        }
    }
    ,
    e.unstable_scheduleCallback = function(b, M, V) {
        var O = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay,
        V = typeof V == "number" && 0 < V ? O + V : O) : V = O,
        b) {
        case 1:
            var U = -1;
            break;
        case 2:
            U = 250;
            break;
        case 5:
            U = 1073741823;
            break;
        case 4:
            U = 1e4;
            break;
        default:
            U = 5e3
        }
        return U = V + U,
        b = {
            id: c++,
            callback: M,
            priorityLevel: b,
            startTime: V,
            expirationTime: U,
            sortIndex: -1
        },
        V > O ? (b.sortIndex = V,
        t(u, b),
        n(l) === null && b === n(u) && (v ? (g(k),
        k = -1) : v = !0,
        ce(w, V - O))) : (b.sortIndex = U,
        t(l, b),
        y || h || (y = !0,
        B(C))),
        b
    }
    ,
    e.unstable_shouldYield = W,
    e.unstable_wrapCallback = function(b) {
        var M = f;
        return function() {
            var V = f;
            f = M;
            try {
                return b.apply(this, arguments)
            } finally {
                f = V
            }
        }
    }
}
)(Uf);
Bf.exports = Uf;
var Nv = Bf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rv = T
  , He = Nv;
function A(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var $f = new Set
  , ro = {};
function Dn(e, t) {
    fr(e, t),
    fr(e + "Capture", t)
}
function fr(e, t) {
    for (ro[e] = t,
    e = 0; e < t.length; e++)
        $f.add(t[e])
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ya = Object.prototype.hasOwnProperty
  , Mv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , rc = {}
  , oc = {};
function Lv(e) {
    return ya.call(oc, e) ? !0 : ya.call(rc, e) ? !1 : Mv.test(e) ? oc[e] = !0 : (rc[e] = !0,
    !1)
}
function jv(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Ov(e, t, n, r) {
    if (t === null || typeof t > "u" || jv(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Me(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    we[e] = new Me(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    we[t] = new Me(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    we[e] = new Me(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    we[e] = new Me(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    we[e] = new Me(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    we[e] = new Me(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    we[e] = new Me(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    we[e] = new Me(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    we[e] = new Me(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Il = /[\-:]([a-z])/g;
function Fl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Il, Fl);
    we[t] = new Me(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Il, Fl);
    we[t] = new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Il, Fl);
    we[t] = new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    we[e] = new Me(e,1,!1,e.toLowerCase(),null,!1,!1)
});
we.xlinkHref = new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    we[e] = new Me(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function zl(e, t, n, r) {
    var o = we.hasOwnProperty(t) ? we[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ov(t, n, o, r) && (n = null),
    r || o === null ? Lv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Dt = Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Io = Symbol.for("react.element")
  , $n = Symbol.for("react.portal")
  , Wn = Symbol.for("react.fragment")
  , Bl = Symbol.for("react.strict_mode")
  , xa = Symbol.for("react.profiler")
  , Wf = Symbol.for("react.provider")
  , Hf = Symbol.for("react.context")
  , Ul = Symbol.for("react.forward_ref")
  , wa = Symbol.for("react.suspense")
  , Sa = Symbol.for("react.suspense_list")
  , $l = Symbol.for("react.memo")
  , zt = Symbol.for("react.lazy")
  , Gf = Symbol.for("react.offscreen")
  , ic = Symbol.iterator;
function Er(e) {
    return e === null || typeof e != "object" ? null : (e = ic && e[ic] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ae = Object.assign, Ns;
function Fr(e) {
    if (Ns === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ns = t && t[1] || ""
        }
    return `
` + Ns + e
}
var Rs = !1;
function Ms(e, t) {
    if (!e || Rs)
        return "";
    Rs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Rs = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Fr(e) : ""
}
function Dv(e) {
    switch (e.tag) {
    case 5:
        return Fr(e.type);
    case 16:
        return Fr("Lazy");
    case 13:
        return Fr("Suspense");
    case 19:
        return Fr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ms(e.type, !1),
        e;
    case 11:
        return e = Ms(e.type.render, !1),
        e;
    case 1:
        return e = Ms(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ta(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Wn:
        return "Fragment";
    case $n:
        return "Portal";
    case xa:
        return "Profiler";
    case Bl:
        return "StrictMode";
    case wa:
        return "Suspense";
    case Sa:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Hf:
            return (e.displayName || "Context") + ".Consumer";
        case Wf:
            return (e._context.displayName || "Context") + ".Provider";
        case Ul:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case $l:
            return t = e.displayName || null,
            t !== null ? t : Ta(e.type) || "Memo";
        case zt:
            t = e._payload,
            e = e._init;
            try {
                return Ta(e(t))
            } catch {}
        }
    return null
}
function _v(e) {
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
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return Ta(t);
    case 8:
        return t === Bl ? "StrictMode" : "Mode";
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
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function rn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Kf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Vv(e) {
    var t = Kf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Fo(e) {
    e._valueTracker || (e._valueTracker = Vv(e))
}
function Yf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Kf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ti(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ca(e, t) {
    var n = t.checked;
    return ae({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function sc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = rn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Qf(e, t) {
    t = t.checked,
    t != null && zl(e, "checked", t, !1)
}
function Pa(e, t) {
    Qf(e, t);
    var n = rn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ea(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ea(e, t.type, rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ac(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ea(e, t, n) {
    (t !== "number" || Ti(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var zr = Array.isArray;
function ir(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + rn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function ka(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(A(91));
    return ae({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function lc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(A(92));
            if (zr(n)) {
                if (1 < n.length)
                    throw Error(A(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: rn(n)
    }
}
function Xf(e, t) {
    var n = rn(t.value)
      , r = rn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function uc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function qf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Aa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? qf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var zo, Zf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (zo = zo || document.createElement("div"),
        zo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = zo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function oo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Wr = {
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
    strokeWidth: !0
}
  , Iv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wr).forEach(function(e) {
    Iv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Wr[t] = Wr[e]
    })
});
function Jf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wr.hasOwnProperty(e) && Wr[e] ? ("" + t).trim() : t + "px"
}
function ep(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Jf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Fv = ae({
    menuitem: !0
}, {
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
    wbr: !0
});
function ba(e, t) {
    if (t) {
        if (Fv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(A(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(A(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(A(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(A(62))
    }
}
function Na(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
        return !0
    }
}
var Ra = null;
function Wl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ma = null
  , sr = null
  , ar = null;
function cc(e) {
    if (e = No(e)) {
        if (typeof Ma != "function")
            throw Error(A(280));
        var t = e.stateNode;
        t && (t = as(t),
        Ma(e.stateNode, e.type, t))
    }
}
function tp(e) {
    sr ? ar ? ar.push(e) : ar = [e] : sr = e
}
function np() {
    if (sr) {
        var e = sr
          , t = ar;
        if (ar = sr = null,
        cc(e),
        t)
            for (e = 0; e < t.length; e++)
                cc(t[e])
    }
}
function rp(e, t) {
    return e(t)
}
function op() {}
var Ls = !1;
function ip(e, t, n) {
    if (Ls)
        return e(t, n);
    Ls = !0;
    try {
        return rp(e, t, n)
    } finally {
        Ls = !1,
        (sr !== null || ar !== null) && (op(),
        np())
    }
}
function io(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = as(n);
    if (r === null)
        return null;
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
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(A(231, t, typeof n));
    return n
}
var La = !1;
if (Rt)
    try {
        var kr = {};
        Object.defineProperty(kr, "passive", {
            get: function() {
                La = !0
            }
        }),
        window.addEventListener("test", kr, kr),
        window.removeEventListener("test", kr, kr)
    } catch {
        La = !1
    }
function zv(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Hr = !1
  , Ci = null
  , Pi = !1
  , ja = null
  , Bv = {
    onError: function(e) {
        Hr = !0,
        Ci = e
    }
};
function Uv(e, t, n, r, o, i, s, a, l) {
    Hr = !1,
    Ci = null,
    zv.apply(Bv, arguments)
}
function $v(e, t, n, r, o, i, s, a, l) {
    if (Uv.apply(this, arguments),
    Hr) {
        if (Hr) {
            var u = Ci;
            Hr = !1,
            Ci = null
        } else
            throw Error(A(198));
        Pi || (Pi = !0,
        ja = u)
    }
}
function _n(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function sp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function dc(e) {
    if (_n(e) !== e)
        throw Error(A(188))
}
function Wv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = _n(e),
        t === null)
            throw Error(A(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return dc(o),
                    e;
                if (i === r)
                    return dc(o),
                    t;
                i = i.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(A(189))
            }
        }
        if (n.alternate !== r)
            throw Error(A(190))
    }
    if (n.tag !== 3)
        throw Error(A(188));
    return n.stateNode.current === n ? e : t
}
function ap(e) {
    return e = Wv(e),
    e !== null ? lp(e) : null
}
function lp(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = lp(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var up = He.unstable_scheduleCallback
  , fc = He.unstable_cancelCallback
  , Hv = He.unstable_shouldYield
  , Gv = He.unstable_requestPaint
  , de = He.unstable_now
  , Kv = He.unstable_getCurrentPriorityLevel
  , Hl = He.unstable_ImmediatePriority
  , cp = He.unstable_UserBlockingPriority
  , Ei = He.unstable_NormalPriority
  , Yv = He.unstable_LowPriority
  , dp = He.unstable_IdlePriority
  , rs = null
  , vt = null;
function Qv(e) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
        try {
            vt.onCommitFiberRoot(rs, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var dt = Math.clz32 ? Math.clz32 : Zv
  , Xv = Math.log
  , qv = Math.LN2;
function Zv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Xv(e) / qv | 0) | 0
}
var Bo = 64
  , Uo = 4194304;
function Br(e) {
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
        return e
    }
}
function ki(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = Br(a) : (i &= s,
        i !== 0 && (r = Br(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = Br(s) : i !== 0 && (r = Br(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - dt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Jv(e, t) {
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
        return -1
    }
}
function ey(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - dt(i)
          , a = 1 << s
          , l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Jv(a, t)) : l <= t && (e.expiredLanes |= a),
        i &= ~a
    }
}
function Oa(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function fp() {
    var e = Bo;
    return Bo <<= 1,
    !(Bo & 4194240) && (Bo = 64),
    e
}
function js(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ao(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - dt(t),
    e[t] = n
}
function ty(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - dt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Gl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - dt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var H = 0;
function pp(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var hp, Kl, mp, gp, vp, Da = !1, $o = [], Kt = null, Yt = null, Qt = null, so = new Map, ao = new Map, $t = [], ny = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function pc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Kt = null;
        break;
    case "dragenter":
    case "dragleave":
        Yt = null;
        break;
    case "mouseover":
    case "mouseout":
        Qt = null;
        break;
    case "pointerover":
    case "pointerout":
        so.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        ao.delete(t.pointerId)
    }
}
function Ar(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = No(t),
    t !== null && Kl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function ry(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Kt = Ar(Kt, e, t, n, r, o),
        !0;
    case "dragenter":
        return Yt = Ar(Yt, e, t, n, r, o),
        !0;
    case "mouseover":
        return Qt = Ar(Qt, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return so.set(i, Ar(so.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        ao.set(i, Ar(ao.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function yp(e) {
    var t = wn(e.target);
    if (t !== null) {
        var n = _n(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = sp(n),
                t !== null) {
                    e.blockedOn = t,
                    vp(e.priority, function() {
                        mp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ui(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = _a(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ra = r,
            n.target.dispatchEvent(r),
            Ra = null
        } else
            return t = No(n),
            t !== null && Kl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function hc(e, t, n) {
    ui(e) && n.delete(t)
}
function oy() {
    Da = !1,
    Kt !== null && ui(Kt) && (Kt = null),
    Yt !== null && ui(Yt) && (Yt = null),
    Qt !== null && ui(Qt) && (Qt = null),
    so.forEach(hc),
    ao.forEach(hc)
}
function br(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Da || (Da = !0,
    He.unstable_scheduleCallback(He.unstable_NormalPriority, oy)))
}
function lo(e) {
    function t(o) {
        return br(o, e)
    }
    if (0 < $o.length) {
        br($o[0], e);
        for (var n = 1; n < $o.length; n++) {
            var r = $o[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Kt !== null && br(Kt, e),
    Yt !== null && br(Yt, e),
    Qt !== null && br(Qt, e),
    so.forEach(t),
    ao.forEach(t),
    n = 0; n < $t.length; n++)
        r = $t[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < $t.length && (n = $t[0],
    n.blockedOn === null); )
        yp(n),
        n.blockedOn === null && $t.shift()
}
var lr = Dt.ReactCurrentBatchConfig
  , Ai = !0;
function iy(e, t, n, r) {
    var o = H
      , i = lr.transition;
    lr.transition = null;
    try {
        H = 1,
        Yl(e, t, n, r)
    } finally {
        H = o,
        lr.transition = i
    }
}
function sy(e, t, n, r) {
    var o = H
      , i = lr.transition;
    lr.transition = null;
    try {
        H = 4,
        Yl(e, t, n, r)
    } finally {
        H = o,
        lr.transition = i
    }
}
function Yl(e, t, n, r) {
    if (Ai) {
        var o = _a(e, t, n, r);
        if (o === null)
            $s(e, t, r, bi, n),
            pc(e, r);
        else if (ry(o, e, t, n, r))
            r.stopPropagation();
        else if (pc(e, r),
        t & 4 && -1 < ny.indexOf(e)) {
            for (; o !== null; ) {
                var i = No(o);
                if (i !== null && hp(i),
                i = _a(e, t, n, r),
                i === null && $s(e, t, r, bi, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            $s(e, t, r, null, n)
    }
}
var bi = null;
function _a(e, t, n, r) {
    if (bi = null,
    e = Wl(r),
    e = wn(e),
    e !== null)
        if (t = _n(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = sp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return bi = e,
    null
}
function xp(e) {
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
        switch (Kv()) {
        case Hl:
            return 1;
        case cp:
            return 4;
        case Ei:
        case Yv:
            return 16;
        case dp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Ht = null
  , Ql = null
  , ci = null;
function wp() {
    if (ci)
        return ci;
    var e, t = Ql, n = t.length, r, o = "value"in Ht ? Ht.value : Ht.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return ci = o.slice(e, 1 < r ? 1 - r : void 0)
}
function di(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Wo() {
    return !0
}
function mc() {
    return !1
}
function Ye(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Wo : mc,
        this.isPropagationStopped = mc,
        this
    }
    return ae(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Wo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Wo)
        },
        persist: function() {},
        isPersistent: Wo
    }),
    t
}
var Cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Xl = Ye(Cr), bo = ae({}, Cr, {
    view: 0,
    detail: 0
}), ay = Ye(bo), Os, Ds, Nr, os = ae({}, bo, {
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
    getModifierState: ql,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (Os = e.screenX - Nr.screenX,
        Ds = e.screenY - Nr.screenY) : Ds = Os = 0,
        Nr = e),
        Os)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ds
    }
}), gc = Ye(os), ly = ae({}, os, {
    dataTransfer: 0
}), uy = Ye(ly), cy = ae({}, bo, {
    relatedTarget: 0
}), _s = Ye(cy), dy = ae({}, Cr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), fy = Ye(dy), py = ae({}, Cr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), hy = Ye(py), my = ae({}, Cr, {
    data: 0
}), vc = Ye(my), gy = {
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
    MozPrintableKey: "Unidentified"
}, vy = {
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
    224: "Meta"
}, yy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function xy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = yy[e]) ? !!t[e] : !1
}
function ql() {
    return xy
}
var wy = ae({}, bo, {
    key: function(e) {
        if (e.key) {
            var t = gy[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = di(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ql,
    charCode: function(e) {
        return e.type === "keypress" ? di(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? di(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Sy = Ye(wy)
  , Ty = ae({}, os, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , yc = Ye(Ty)
  , Cy = ae({}, bo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ql
})
  , Py = Ye(Cy)
  , Ey = ae({}, Cr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , ky = Ye(Ey)
  , Ay = ae({}, os, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , by = Ye(Ay)
  , Ny = [9, 13, 27, 32]
  , Zl = Rt && "CompositionEvent"in window
  , Gr = null;
Rt && "documentMode"in document && (Gr = document.documentMode);
var Ry = Rt && "TextEvent"in window && !Gr
  , Sp = Rt && (!Zl || Gr && 8 < Gr && 11 >= Gr)
  , xc = String.fromCharCode(32)
  , wc = !1;
function Tp(e, t) {
    switch (e) {
    case "keyup":
        return Ny.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Cp(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Hn = !1;
function My(e, t) {
    switch (e) {
    case "compositionend":
        return Cp(t);
    case "keypress":
        return t.which !== 32 ? null : (wc = !0,
        xc);
    case "textInput":
        return e = t.data,
        e === xc && wc ? null : e;
    default:
        return null
    }
}
function Ly(e, t) {
    if (Hn)
        return e === "compositionend" || !Zl && Tp(e, t) ? (e = wp(),
        ci = Ql = Ht = null,
        Hn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Sp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var jy = {
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
    week: !0
};
function Sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!jy[e.type] : t === "textarea"
}
function Pp(e, t, n, r) {
    tp(r),
    t = Ni(t, "onChange"),
    0 < t.length && (n = new Xl("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Kr = null
  , uo = null;
function Oy(e) {
    Dp(e, 0)
}
function is(e) {
    var t = Yn(e);
    if (Yf(t))
        return e
}
function Dy(e, t) {
    if (e === "change")
        return t
}
var Ep = !1;
if (Rt) {
    var Vs;
    if (Rt) {
        var Is = "oninput"in document;
        if (!Is) {
            var Tc = document.createElement("div");
            Tc.setAttribute("oninput", "return;"),
            Is = typeof Tc.oninput == "function"
        }
        Vs = Is
    } else
        Vs = !1;
    Ep = Vs && (!document.documentMode || 9 < document.documentMode)
}
function Cc() {
    Kr && (Kr.detachEvent("onpropertychange", kp),
    uo = Kr = null)
}
function kp(e) {
    if (e.propertyName === "value" && is(uo)) {
        var t = [];
        Pp(t, uo, e, Wl(e)),
        ip(Oy, t)
    }
}
function _y(e, t, n) {
    e === "focusin" ? (Cc(),
    Kr = t,
    uo = n,
    Kr.attachEvent("onpropertychange", kp)) : e === "focusout" && Cc()
}
function Vy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return is(uo)
}
function Iy(e, t) {
    if (e === "click")
        return is(t)
}
function Fy(e, t) {
    if (e === "input" || e === "change")
        return is(t)
}
function zy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var pt = typeof Object.is == "function" ? Object.is : zy;
function co(e, t) {
    if (pt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ya.call(t, o) || !pt(e[o], t[o]))
            return !1
    }
    return !0
}
function Pc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Ec(e, t) {
    var n = Pc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Pc(n)
    }
}
function Ap(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ap(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function bp() {
    for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ti(e.document)
    }
    return t
}
function Jl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function By(e) {
    var t = bp()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ap(n.ownerDocument.documentElement, n)) {
        if (r !== null && Jl(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Ec(n, i);
                var s = Ec(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Uy = Rt && "documentMode"in document && 11 >= document.documentMode
  , Gn = null
  , Va = null
  , Yr = null
  , Ia = !1;
function kc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ia || Gn == null || Gn !== Ti(r) || (r = Gn,
    "selectionStart"in r && Jl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Yr && co(Yr, r) || (Yr = r,
    r = Ni(Va, "onSelect"),
    0 < r.length && (t = new Xl("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Gn)))
}
function Ho(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Kn = {
    animationend: Ho("Animation", "AnimationEnd"),
    animationiteration: Ho("Animation", "AnimationIteration"),
    animationstart: Ho("Animation", "AnimationStart"),
    transitionend: Ho("Transition", "TransitionEnd")
}
  , Fs = {}
  , Np = {};
Rt && (Np = document.createElement("div").style,
"AnimationEvent"in window || (delete Kn.animationend.animation,
delete Kn.animationiteration.animation,
delete Kn.animationstart.animation),
"TransitionEvent"in window || delete Kn.transitionend.transition);
function ss(e) {
    if (Fs[e])
        return Fs[e];
    if (!Kn[e])
        return e;
    var t = Kn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Np)
            return Fs[e] = t[n];
    return e
}
var Rp = ss("animationend")
  , Mp = ss("animationiteration")
  , Lp = ss("animationstart")
  , jp = ss("transitionend")
  , Op = new Map
  , Ac = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ln(e, t) {
    Op.set(e, t),
    Dn(t, [e])
}
for (var zs = 0; zs < Ac.length; zs++) {
    var Bs = Ac[zs]
      , $y = Bs.toLowerCase()
      , Wy = Bs[0].toUpperCase() + Bs.slice(1);
    ln($y, "on" + Wy)
}
ln(Rp, "onAnimationEnd");
ln(Mp, "onAnimationIteration");
ln(Lp, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(jp, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
Dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
function bc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    $v(r, t, void 0, e),
    e.currentTarget = null
}
function Dp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    bc(o, a, u),
                    i = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== i && o.isPropagationStopped())
                        break e;
                    bc(o, a, u),
                    i = l
                }
        }
    }
    if (Pi)
        throw e = ja,
        Pi = !1,
        ja = null,
        e
}
function X(e, t) {
    var n = t[$a];
    n === void 0 && (n = t[$a] = new Set);
    var r = e + "__bubble";
    n.has(r) || (_p(t, e, 2, !1),
    n.add(r))
}
function Us(e, t, n) {
    var r = 0;
    t && (r |= 4),
    _p(n, e, r, t)
}
var Go = "_reactListening" + Math.random().toString(36).slice(2);
function fo(e) {
    if (!e[Go]) {
        e[Go] = !0,
        $f.forEach(function(n) {
            n !== "selectionchange" && (Hy.has(n) || Us(n, !1, e),
            Us(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Go] || (t[Go] = !0,
        Us("selectionchange", !1, t))
    }
}
function _p(e, t, n, r) {
    switch (xp(t)) {
    case 1:
        var o = iy;
        break;
    case 4:
        o = sy;
        break;
    default:
        o = Yl
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !La || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function $s(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || a.nodeType === 8 && a.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = wn(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = i = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    ip(function() {
        var u = i
          , c = Wl(n)
          , d = [];
        e: {
            var f = Op.get(e);
            if (f !== void 0) {
                var h = Xl
                  , y = e;
                switch (e) {
                case "keypress":
                    if (di(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = Sy;
                    break;
                case "focusin":
                    y = "focus",
                    h = _s;
                    break;
                case "focusout":
                    y = "blur",
                    h = _s;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = _s;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = gc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = uy;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = Py;
                    break;
                case Rp:
                case Mp:
                case Lp:
                    h = fy;
                    break;
                case jp:
                    h = ky;
                    break;
                case "scroll":
                    h = ay;
                    break;
                case "wheel":
                    h = by;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = hy;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = yc
                }
                var v = (t & 4) !== 0
                  , S = !v && e === "scroll"
                  , g = v ? f !== null ? f + "Capture" : null : f;
                v = [];
                for (var p = u, m; p !== null; ) {
                    m = p;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w,
                    g !== null && (w = io(p, g),
                    w != null && v.push(po(p, w, m)))),
                    S)
                        break;
                    p = p.return
                }
                0 < v.length && (f = new h(f,y,null,n,c),
                d.push({
                    event: f,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                h = e === "mouseout" || e === "pointerout",
                f && n !== Ra && (y = n.relatedTarget || n.fromElement) && (wn(y) || y[Mt]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                h ? (y = n.relatedTarget || n.toElement,
                h = u,
                y = y ? wn(y) : null,
                y !== null && (S = _n(y),
                y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (h = null,
                y = u),
                h !== y)) {
                    if (v = gc,
                    w = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = yc,
                    w = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    S = h == null ? f : Yn(h),
                    m = y == null ? f : Yn(y),
                    f = new v(w,p + "leave",h,n,c),
                    f.target = S,
                    f.relatedTarget = m,
                    w = null,
                    wn(c) === u && (v = new v(g,p + "enter",y,n,c),
                    v.target = m,
                    v.relatedTarget = S,
                    w = v),
                    S = w,
                    h && y)
                        t: {
                            for (v = h,
                            g = y,
                            p = 0,
                            m = v; m; m = Bn(m))
                                p++;
                            for (m = 0,
                            w = g; w; w = Bn(w))
                                m++;
                            for (; 0 < p - m; )
                                v = Bn(v),
                                p--;
                            for (; 0 < m - p; )
                                g = Bn(g),
                                m--;
                            for (; p--; ) {
                                if (v === g || g !== null && v === g.alternate)
                                    break t;
                                v = Bn(v),
                                g = Bn(g)
                            }
                            v = null
                        }
                    else
                        v = null;
                    h !== null && Nc(d, f, h, v, !1),
                    y !== null && S !== null && Nc(d, S, y, v, !0)
                }
            }
            e: {
                if (f = u ? Yn(u) : window,
                h = f.nodeName && f.nodeName.toLowerCase(),
                h === "select" || h === "input" && f.type === "file")
                    var C = Dy;
                else if (Sc(f))
                    if (Ep)
                        C = Fy;
                    else {
                        C = Vy;
                        var E = _y
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = Iy);
                if (C && (C = C(e, u))) {
                    Pp(d, C, n, c);
                    break e
                }
                E && E(e, f, u),
                e === "focusout" && (E = f._wrapperState) && E.controlled && f.type === "number" && Ea(f, "number", f.value)
            }
            switch (E = u ? Yn(u) : window,
            e) {
            case "focusin":
                (Sc(E) || E.contentEditable === "true") && (Gn = E,
                Va = u,
                Yr = null);
                break;
            case "focusout":
                Yr = Va = Gn = null;
                break;
            case "mousedown":
                Ia = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ia = !1,
                kc(d, n, c);
                break;
            case "selectionchange":
                if (Uy)
                    break;
            case "keydown":
            case "keyup":
                kc(d, n, c)
            }
            var P;
            if (Zl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                    }
                    k = void 0
                }
            else
                Hn ? Tp(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (Sp && n.locale !== "ko" && (Hn || k !== "onCompositionStart" ? k === "onCompositionEnd" && Hn && (P = wp()) : (Ht = c,
            Ql = "value"in Ht ? Ht.value : Ht.textContent,
            Hn = !0)),
            E = Ni(u, k),
            0 < E.length && (k = new vc(k,e,null,n,c),
            d.push({
                event: k,
                listeners: E
            }),
            P ? k.data = P : (P = Cp(n),
            P !== null && (k.data = P)))),
            (P = Ry ? My(e, n) : Ly(e, n)) && (u = Ni(u, "onBeforeInput"),
            0 < u.length && (c = new vc("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = P))
        }
        Dp(d, t)
    })
}
function po(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ni(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = io(e, n),
        i != null && r.unshift(po(e, i, o)),
        i = io(e, t),
        i != null && r.push(po(e, i, o))),
        e = e.return
    }
    return r
}
function Bn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Nc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        o ? (l = io(n, i),
        l != null && s.unshift(po(n, l, a))) : o || (l = io(n, i),
        l != null && s.push(po(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Gy = /\r\n?/g
  , Ky = /\u0000|\uFFFD/g;
function Rc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gy, `
`).replace(Ky, "")
}
function Ko(e, t, n) {
    if (t = Rc(t),
    Rc(e) !== t && n)
        throw Error(A(425))
}
function Ri() {}
var Fa = null
  , za = null;
function Ba(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ua = typeof setTimeout == "function" ? setTimeout : void 0
  , Yy = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Mc = typeof Promise == "function" ? Promise : void 0
  , Qy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mc < "u" ? function(e) {
    return Mc.resolve(null).then(e).catch(Xy)
}
: Ua;
function Xy(e) {
    setTimeout(function() {
        throw e
    })
}
function Ws(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    lo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    lo(t)
}
function Xt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Lc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Pr = Math.random().toString(36).slice(2)
  , gt = "__reactFiber$" + Pr
  , ho = "__reactProps$" + Pr
  , Mt = "__reactContainer$" + Pr
  , $a = "__reactEvents$" + Pr
  , qy = "__reactListeners$" + Pr
  , Zy = "__reactHandles$" + Pr;
function wn(e) {
    var t = e[gt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Mt] || n[gt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Lc(e); e !== null; ) {
                    if (n = e[gt])
                        return n;
                    e = Lc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function No(e) {
    return e = e[gt] || e[Mt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Yn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(A(33))
}
function as(e) {
    return e[ho] || null
}
var Wa = []
  , Qn = -1;
function un(e) {
    return {
        current: e
    }
}
function q(e) {
    0 > Qn || (e.current = Wa[Qn],
    Wa[Qn] = null,
    Qn--)
}
function Y(e, t) {
    Qn++,
    Wa[Qn] = e.current,
    e.current = t
}
var on = {}
  , Ee = un(on)
  , De = un(!1)
  , bn = on;
function pr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return on;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function _e(e) {
    return e = e.childContextTypes,
    e != null
}
function Mi() {
    q(De),
    q(Ee)
}
function jc(e, t, n) {
    if (Ee.current !== on)
        throw Error(A(168));
    Y(Ee, t),
    Y(De, n)
}
function Vp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(A(108, _v(e) || "Unknown", o));
    return ae({}, n, r)
}
function Li(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on,
    bn = Ee.current,
    Y(Ee, e),
    Y(De, De.current),
    !0
}
function Oc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(A(169));
    n ? (e = Vp(e, t, bn),
    r.__reactInternalMemoizedMergedChildContext = e,
    q(De),
    q(Ee),
    Y(Ee, e)) : q(De),
    Y(De, n)
}
var Ct = null
  , ls = !1
  , Hs = !1;
function Ip(e) {
    Ct === null ? Ct = [e] : Ct.push(e)
}
function Jy(e) {
    ls = !0,
    Ip(e)
}
function cn() {
    if (!Hs && Ct !== null) {
        Hs = !0;
        var e = 0
          , t = H;
        try {
            var n = Ct;
            for (H = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ct = null,
            ls = !1
        } catch (o) {
            throw Ct !== null && (Ct = Ct.slice(e + 1)),
            up(Hl, cn),
            o
        } finally {
            H = t,
            Hs = !1
        }
    }
    return null
}
var Xn = []
  , qn = 0
  , ji = null
  , Oi = 0
  , Ze = []
  , Je = 0
  , Nn = null
  , Pt = 1
  , Et = "";
function mn(e, t) {
    Xn[qn++] = Oi,
    Xn[qn++] = ji,
    ji = e,
    Oi = t
}
function Fp(e, t, n) {
    Ze[Je++] = Pt,
    Ze[Je++] = Et,
    Ze[Je++] = Nn,
    Nn = e;
    var r = Pt;
    e = Et;
    var o = 32 - dt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - dt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Pt = 1 << 32 - dt(t) + o | n << o | r,
        Et = i + e
    } else
        Pt = 1 << i | n << o | r,
        Et = e
}
function eu(e) {
    e.return !== null && (mn(e, 1),
    Fp(e, 1, 0))
}
function tu(e) {
    for (; e === ji; )
        ji = Xn[--qn],
        Xn[qn] = null,
        Oi = Xn[--qn],
        Xn[qn] = null;
    for (; e === Nn; )
        Nn = Ze[--Je],
        Ze[Je] = null,
        Et = Ze[--Je],
        Ze[Je] = null,
        Pt = Ze[--Je],
        Ze[Je] = null
}
var We = null
  , $e = null
  , ne = !1
  , ut = null;
function zp(e, t) {
    var n = et(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Dc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        We = e,
        $e = Xt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        We = e,
        $e = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Nn !== null ? {
            id: Pt,
            overflow: Et
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = et(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        We = e,
        $e = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ha(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ga(e) {
    if (ne) {
        var t = $e;
        if (t) {
            var n = t;
            if (!Dc(e, t)) {
                if (Ha(e))
                    throw Error(A(418));
                t = Xt(n.nextSibling);
                var r = We;
                t && Dc(e, t) ? zp(r, n) : (e.flags = e.flags & -4097 | 2,
                ne = !1,
                We = e)
            }
        } else {
            if (Ha(e))
                throw Error(A(418));
            e.flags = e.flags & -4097 | 2,
            ne = !1,
            We = e
        }
    }
}
function _c(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    We = e
}
function Yo(e) {
    if (e !== We)
        return !1;
    if (!ne)
        return _c(e),
        ne = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ba(e.type, e.memoizedProps)),
    t && (t = $e)) {
        if (Ha(e))
            throw Bp(),
            Error(A(418));
        for (; t; )
            zp(e, t),
            t = Xt(t.nextSibling)
    }
    if (_c(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(A(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            $e = Xt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            $e = null
        }
    } else
        $e = We ? Xt(e.stateNode.nextSibling) : null;
    return !0
}
function Bp() {
    for (var e = $e; e; )
        e = Xt(e.nextSibling)
}
function hr() {
    $e = We = null,
    ne = !1
}
function nu(e) {
    ut === null ? ut = [e] : ut.push(e)
}
var e0 = Dt.ReactCurrentBatchConfig;
function Rr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(A(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(A(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(A(284));
        if (!n._owner)
            throw Error(A(290, e))
    }
    return e
}
function Qo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Vc(e) {
    var t = e._init;
    return t(e._payload)
}
function Up(e) {
    function t(g, p) {
        if (e) {
            var m = g.deletions;
            m === null ? (g.deletions = [p],
            g.flags |= 16) : m.push(p)
        }
    }
    function n(g, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(g, p),
            p = p.sibling;
        return null
    }
    function r(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function o(g, p) {
        return g = en(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function i(g, p, m) {
        return g.index = m,
        e ? (m = g.alternate,
        m !== null ? (m = m.index,
        m < p ? (g.flags |= 2,
        p) : m) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function s(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, p, m, w) {
        return p === null || p.tag !== 6 ? (p = Zs(m, g.mode, w),
        p.return = g,
        p) : (p = o(p, m),
        p.return = g,
        p)
    }
    function l(g, p, m, w) {
        var C = m.type;
        return C === Wn ? c(g, p, m.props.children, w, m.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === zt && Vc(C) === p.type) ? (w = o(p, m.props),
        w.ref = Rr(g, p, m),
        w.return = g,
        w) : (w = yi(m.type, m.key, m.props, null, g.mode, w),
        w.ref = Rr(g, p, m),
        w.return = g,
        w)
    }
    function u(g, p, m, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = Js(m, g.mode, w),
        p.return = g,
        p) : (p = o(p, m.children || []),
        p.return = g,
        p)
    }
    function c(g, p, m, w, C) {
        return p === null || p.tag !== 7 ? (p = kn(m, g.mode, w, C),
        p.return = g,
        p) : (p = o(p, m),
        p.return = g,
        p)
    }
    function d(g, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Zs("" + p, g.mode, m),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Io:
                return m = yi(p.type, p.key, p.props, null, g.mode, m),
                m.ref = Rr(g, null, p),
                m.return = g,
                m;
            case $n:
                return p = Js(p, g.mode, m),
                p.return = g,
                p;
            case zt:
                var w = p._init;
                return d(g, w(p._payload), m)
            }
            if (zr(p) || Er(p))
                return p = kn(p, g.mode, m, null),
                p.return = g,
                p;
            Qo(g, p)
        }
        return null
    }
    function f(g, p, m, w) {
        var C = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return C !== null ? null : a(g, p, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Io:
                return m.key === C ? l(g, p, m, w) : null;
            case $n:
                return m.key === C ? u(g, p, m, w) : null;
            case zt:
                return C = m._init,
                f(g, p, C(m._payload), w)
            }
            if (zr(m) || Er(m))
                return C !== null ? null : c(g, p, m, w, null);
            Qo(g, m)
        }
        return null
    }
    function h(g, p, m, w, C) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return g = g.get(m) || null,
            a(p, g, "" + w, C);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Io:
                return g = g.get(w.key === null ? m : w.key) || null,
                l(p, g, w, C);
            case $n:
                return g = g.get(w.key === null ? m : w.key) || null,
                u(p, g, w, C);
            case zt:
                var E = w._init;
                return h(g, p, m, E(w._payload), C)
            }
            if (zr(w) || Er(w))
                return g = g.get(m) || null,
                c(p, g, w, C, null);
            Qo(p, w)
        }
        return null
    }
    function y(g, p, m, w) {
        for (var C = null, E = null, P = p, k = p = 0, L = null; P !== null && k < m.length; k++) {
            P.index > k ? (L = P,
            P = null) : L = P.sibling;
            var j = f(g, P, m[k], w);
            if (j === null) {
                P === null && (P = L);
                break
            }
            e && P && j.alternate === null && t(g, P),
            p = i(j, p, k),
            E === null ? C = j : E.sibling = j,
            E = j,
            P = L
        }
        if (k === m.length)
            return n(g, P),
            ne && mn(g, k),
            C;
        if (P === null) {
            for (; k < m.length; k++)
                P = d(g, m[k], w),
                P !== null && (p = i(P, p, k),
                E === null ? C = P : E.sibling = P,
                E = P);
            return ne && mn(g, k),
            C
        }
        for (P = r(g, P); k < m.length; k++)
            L = h(P, g, k, m[k], w),
            L !== null && (e && L.alternate !== null && P.delete(L.key === null ? k : L.key),
            p = i(L, p, k),
            E === null ? C = L : E.sibling = L,
            E = L);
        return e && P.forEach(function(W) {
            return t(g, W)
        }),
        ne && mn(g, k),
        C
    }
    function v(g, p, m, w) {
        var C = Er(m);
        if (typeof C != "function")
            throw Error(A(150));
        if (m = C.call(m),
        m == null)
            throw Error(A(151));
        for (var E = C = null, P = p, k = p = 0, L = null, j = m.next(); P !== null && !j.done; k++,
        j = m.next()) {
            P.index > k ? (L = P,
            P = null) : L = P.sibling;
            var W = f(g, P, j.value, w);
            if (W === null) {
                P === null && (P = L);
                break
            }
            e && P && W.alternate === null && t(g, P),
            p = i(W, p, k),
            E === null ? C = W : E.sibling = W,
            E = W,
            P = L
        }
        if (j.done)
            return n(g, P),
            ne && mn(g, k),
            C;
        if (P === null) {
            for (; !j.done; k++,
            j = m.next())
                j = d(g, j.value, w),
                j !== null && (p = i(j, p, k),
                E === null ? C = j : E.sibling = j,
                E = j);
            return ne && mn(g, k),
            C
        }
        for (P = r(g, P); !j.done; k++,
        j = m.next())
            j = h(P, g, k, j.value, w),
            j !== null && (e && j.alternate !== null && P.delete(j.key === null ? k : j.key),
            p = i(j, p, k),
            E === null ? C = j : E.sibling = j,
            E = j);
        return e && P.forEach(function(D) {
            return t(g, D)
        }),
        ne && mn(g, k),
        C
    }
    function S(g, p, m, w) {
        if (typeof m == "object" && m !== null && m.type === Wn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Io:
                e: {
                    for (var C = m.key, E = p; E !== null; ) {
                        if (E.key === C) {
                            if (C = m.type,
                            C === Wn) {
                                if (E.tag === 7) {
                                    n(g, E.sibling),
                                    p = o(E, m.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === zt && Vc(C) === E.type) {
                                n(g, E.sibling),
                                p = o(E, m.props),
                                p.ref = Rr(g, E, m),
                                p.return = g,
                                g = p;
                                break e
                            }
                            n(g, E);
                            break
                        } else
                            t(g, E);
                        E = E.sibling
                    }
                    m.type === Wn ? (p = kn(m.props.children, g.mode, w, m.key),
                    p.return = g,
                    g = p) : (w = yi(m.type, m.key, m.props, null, g.mode, w),
                    w.ref = Rr(g, p, m),
                    w.return = g,
                    g = w)
                }
                return s(g);
            case $n:
                e: {
                    for (E = m.key; p !== null; ) {
                        if (p.key === E)
                            if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                n(g, p.sibling),
                                p = o(p, m.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                n(g, p);
                                break
                            }
                        else
                            t(g, p);
                        p = p.sibling
                    }
                    p = Js(m, g.mode, w),
                    p.return = g,
                    g = p
                }
                return s(g);
            case zt:
                return E = m._init,
                S(g, p, E(m._payload), w)
            }
            if (zr(m))
                return y(g, p, m, w);
            if (Er(m))
                return v(g, p, m, w);
            Qo(g, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        p !== null && p.tag === 6 ? (n(g, p.sibling),
        p = o(p, m),
        p.return = g,
        g = p) : (n(g, p),
        p = Zs(m, g.mode, w),
        p.return = g,
        g = p),
        s(g)) : n(g, p)
    }
    return S
}
var mr = Up(!0)
  , $p = Up(!1)
  , Di = un(null)
  , _i = null
  , Zn = null
  , ru = null;
function ou() {
    ru = Zn = _i = null
}
function iu(e) {
    var t = Di.current;
    q(Di),
    e._currentValue = t
}
function Ka(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function ur(e, t) {
    _i = e,
    ru = Zn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0),
    e.firstContext = null)
}
function nt(e) {
    var t = e._currentValue;
    if (ru !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Zn === null) {
            if (_i === null)
                throw Error(A(308));
            Zn = e,
            _i.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Zn = Zn.next = e;
    return t
}
var Sn = null;
function su(e) {
    Sn === null ? Sn = [e] : Sn.push(e)
}
function Wp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    su(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Lt(e, r)
}
function Lt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Bt = !1;
function au(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Hp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function At(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    $ & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Lt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    su(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Lt(e, n)
}
function fi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Gl(e, n)
    }
}
function Ic(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Vi(e, t, n, r) {
    var o = e.updateQueue;
    Bt = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? i = u : s.next = u,
        s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0,
        c = u = l = null,
        a = i;
        do {
            var f = a.lane
              , h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e
                      , v = a;
                    switch (f = t,
                    h = n,
                    v.tag) {
                    case 1:
                        if (y = v.payload,
                        typeof y == "function") {
                            d = y.call(h, d, f);
                            break e
                        }
                        d = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = v.payload,
                        f = typeof y == "function" ? y.call(h, d, f) : y,
                        f == null)
                            break e;
                        d = ae({}, d, f);
                        break e;
                    case 2:
                        Bt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = o.effects,
                f === null ? o.effects = [a] : f.push(a))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = h,
                l = d) : c = c.next = h,
                s |= f;
            if (a = a.next,
            a === null) {
                if (a = o.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                o.lastBaseUpdate = f,
                o.shared.pending = null
            }
        } while (1);
        if (c === null && (l = d),
        o.baseState = l,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Mn |= s,
        e.lanes = s,
        e.memoizedState = d
    }
}
function Fc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(A(191, o));
                o.call(r)
            }
        }
}
var Ro = {}
  , yt = un(Ro)
  , mo = un(Ro)
  , go = un(Ro);
function Tn(e) {
    if (e === Ro)
        throw Error(A(174));
    return e
}
function lu(e, t) {
    switch (Y(go, t),
    Y(mo, e),
    Y(yt, Ro),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Aa(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Aa(t, e)
    }
    q(yt),
    Y(yt, t)
}
function gr() {
    q(yt),
    q(mo),
    q(go)
}
function Gp(e) {
    Tn(go.current);
    var t = Tn(yt.current)
      , n = Aa(t, e.type);
    t !== n && (Y(mo, e),
    Y(yt, n))
}
function uu(e) {
    mo.current === e && (q(yt),
    q(mo))
}
var oe = un(0);
function Ii(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Gs = [];
function cu() {
    for (var e = 0; e < Gs.length; e++)
        Gs[e]._workInProgressVersionPrimary = null;
    Gs.length = 0
}
var pi = Dt.ReactCurrentDispatcher
  , Ks = Dt.ReactCurrentBatchConfig
  , Rn = 0
  , se = null
  , he = null
  , ge = null
  , Fi = !1
  , Qr = !1
  , vo = 0
  , t0 = 0;
function Se() {
    throw Error(A(321))
}
function du(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!pt(e[n], t[n]))
            return !1;
    return !0
}
function fu(e, t, n, r, o, i) {
    if (Rn = i,
    se = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    pi.current = e === null || e.memoizedState === null ? i0 : s0,
    e = n(r, o),
    Qr) {
        i = 0;
        do {
            if (Qr = !1,
            vo = 0,
            25 <= i)
                throw Error(A(301));
            i += 1,
            ge = he = null,
            t.updateQueue = null,
            pi.current = a0,
            e = n(r, o)
        } while (Qr)
    }
    if (pi.current = zi,
    t = he !== null && he.next !== null,
    Rn = 0,
    ge = he = se = null,
    Fi = !1,
    t)
        throw Error(A(300));
    return e
}
function pu() {
    var e = vo !== 0;
    return vo = 0,
    e
}
function mt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ge === null ? se.memoizedState = ge = e : ge = ge.next = e,
    ge
}
function rt() {
    if (he === null) {
        var e = se.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = he.next;
    var t = ge === null ? se.memoizedState : ge.next;
    if (t !== null)
        ge = t,
        he = e;
    else {
        if (e === null)
            throw Error(A(310));
        he = e,
        e = {
            memoizedState: he.memoizedState,
            baseState: he.baseState,
            baseQueue: he.baseQueue,
            queue: he.queue,
            next: null
        },
        ge === null ? se.memoizedState = ge = e : ge = ge.next = e
    }
    return ge
}
function yo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ys(e) {
    var t = rt()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = he
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = i;
        do {
            var c = u.lane;
            if ((Rn & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                s = r) : l = l.next = d,
                se.lanes |= c,
                Mn |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a,
        pt(r, t.memoizedState) || (Oe = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            se.lanes |= i,
            Mn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Qs(e) {
    var t = rt()
      , n = t.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        pt(i, t.memoizedState) || (Oe = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Kp() {}
function Yp(e, t) {
    var n = se
      , r = rt()
      , o = t()
      , i = !pt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Oe = !0),
    r = r.queue,
    hu(qp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ge !== null && ge.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        xo(9, Xp.bind(null, n, r, o, t), void 0, null),
        ve === null)
            throw Error(A(349));
        Rn & 30 || Qp(n, t, o)
    }
    return o
}
function Qp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = se.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    se.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Xp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Zp(t) && Jp(e)
}
function qp(e, t, n) {
    return n(function() {
        Zp(t) && Jp(e)
    })
}
function Zp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !pt(e, n)
    } catch {
        return !0
    }
}
function Jp(e) {
    var t = Lt(e, 1);
    t !== null && ft(t, e, 1, -1)
}
function zc(e) {
    var t = mt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = o0.bind(null, se, e),
    [t.memoizedState, e]
}
function xo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = se.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    se.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function eh() {
    return rt().memoizedState
}
function hi(e, t, n, r) {
    var o = mt();
    se.flags |= e,
    o.memoizedState = xo(1 | t, n, void 0, r === void 0 ? null : r)
}
function us(e, t, n, r) {
    var o = rt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (he !== null) {
        var s = he.memoizedState;
        if (i = s.destroy,
        r !== null && du(r, s.deps)) {
            o.memoizedState = xo(t, n, i, r);
            return
        }
    }
    se.flags |= e,
    o.memoizedState = xo(1 | t, n, i, r)
}
function Bc(e, t) {
    return hi(8390656, 8, e, t)
}
function hu(e, t) {
    return us(2048, 8, e, t)
}
function th(e, t) {
    return us(4, 2, e, t)
}
function nh(e, t) {
    return us(4, 4, e, t)
}
function rh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function oh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    us(4, 4, rh.bind(null, t, e), n)
}
function mu() {}
function ih(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && du(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function sh(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && du(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ah(e, t, n) {
    return Rn & 21 ? (pt(n, t) || (n = fp(),
    se.lanes |= n,
    Mn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Oe = !0),
    e.memoizedState = n)
}
function n0(e, t) {
    var n = H;
    H = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Ks.transition;
    Ks.transition = {};
    try {
        e(!1),
        t()
    } finally {
        H = n,
        Ks.transition = r
    }
}
function lh() {
    return rt().memoizedState
}
function r0(e, t, n) {
    var r = Jt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    uh(e))
        ch(t, n);
    else if (n = Wp(e, t, n, r),
    n !== null) {
        var o = Ne();
        ft(n, e, r, o),
        dh(n, t, r)
    }
}
function o0(e, t, n) {
    var r = Jt(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (uh(e))
        ch(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , a = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = a,
                pt(a, s)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o,
                    su(t)) : (o.next = l.next,
                    l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Wp(e, t, o, r),
        n !== null && (o = Ne(),
        ft(n, e, r, o),
        dh(n, t, r))
    }
}
function uh(e) {
    var t = e.alternate;
    return e === se || t !== null && t === se
}
function ch(e, t) {
    Qr = Fi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function dh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Gl(e, n)
    }
}
var zi = {
    readContext: nt,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1
}
  , i0 = {
    readContext: nt,
    useCallback: function(e, t) {
        return mt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: nt,
    useEffect: Bc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        hi(4194308, 4, rh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return hi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return hi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = mt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = mt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = r0.bind(null, se, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = mt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: zc,
    useDebugValue: mu,
    useDeferredValue: function(e) {
        return mt().memoizedState = e
    },
    useTransition: function() {
        var e = zc(!1)
          , t = e[0];
        return e = n0.bind(null, e[1]),
        mt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = se
          , o = mt();
        if (ne) {
            if (n === void 0)
                throw Error(A(407));
            n = n()
        } else {
            if (n = t(),
            ve === null)
                throw Error(A(349));
            Rn & 30 || Qp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        Bc(qp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        xo(9, Xp.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = mt()
          , t = ve.identifierPrefix;
        if (ne) {
            var n = Et
              , r = Pt;
            n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = vo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = t0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , s0 = {
    readContext: nt,
    useCallback: ih,
    useContext: nt,
    useEffect: hu,
    useImperativeHandle: oh,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: sh,
    useReducer: Ys,
    useRef: eh,
    useState: function() {
        return Ys(yo)
    },
    useDebugValue: mu,
    useDeferredValue: function(e) {
        var t = rt();
        return ah(t, he.memoizedState, e)
    },
    useTransition: function() {
        var e = Ys(yo)[0]
          , t = rt().memoizedState;
        return [e, t]
    },
    useMutableSource: Kp,
    useSyncExternalStore: Yp,
    useId: lh,
    unstable_isNewReconciler: !1
}
  , a0 = {
    readContext: nt,
    useCallback: ih,
    useContext: nt,
    useEffect: hu,
    useImperativeHandle: oh,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: sh,
    useReducer: Qs,
    useRef: eh,
    useState: function() {
        return Qs(yo)
    },
    useDebugValue: mu,
    useDeferredValue: function(e) {
        var t = rt();
        return he === null ? t.memoizedState = e : ah(t, he.memoizedState, e)
    },
    useTransition: function() {
        var e = Qs(yo)[0]
          , t = rt().memoizedState;
        return [e, t]
    },
    useMutableSource: Kp,
    useSyncExternalStore: Yp,
    useId: lh,
    unstable_isNewReconciler: !1
};
function at(e, t) {
    if (e && e.defaultProps) {
        t = ae({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ya(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ae({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var cs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? _n(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ne()
          , o = Jt(e)
          , i = At(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = qt(e, i, o),
        t !== null && (ft(t, e, o, r),
        fi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ne()
          , o = Jt(e)
          , i = At(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = qt(e, i, o),
        t !== null && (ft(t, e, o, r),
        fi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ne()
          , r = Jt(e)
          , o = At(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = qt(e, o, r),
        t !== null && (ft(t, e, r, n),
        fi(t, e, r))
    }
};
function Uc(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !co(n, r) || !co(o, i) : !0
}
function fh(e, t, n) {
    var r = !1
      , o = on
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = nt(i) : (o = _e(t) ? bn : Ee.current,
    r = t.contextTypes,
    i = (r = r != null) ? pr(e, o) : on),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = cs,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function $c(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cs.enqueueReplaceState(t, t.state, null)
}
function Qa(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    au(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = nt(i) : (i = _e(t) ? bn : Ee.current,
    o.context = pr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Ya(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && cs.enqueueReplaceState(o, o.state, null),
    Vi(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function vr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Dv(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Xs(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Xa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var l0 = typeof WeakMap == "function" ? WeakMap : Map;
function ph(e, t, n) {
    n = At(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ui || (Ui = !0,
        sl = r),
        Xa(e, t)
    }
    ,
    n
}
function hh(e, t, n) {
    n = At(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Xa(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Xa(e, t),
        typeof r != "function" && (Zt === null ? Zt = new Set([this]) : Zt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function Wc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new l0;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = T0.bind(null, e, t, n),
    t.then(e, e))
}
function Hc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Gc(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = At(-1, 1),
    t.tag = 2,
    qt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var u0 = Dt.ReactCurrentOwner
  , Oe = !1;
function be(e, t, n, r) {
    t.child = e === null ? $p(t, null, n, r) : mr(t, e.child, n, r)
}
function Kc(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return ur(t, o),
    r = fu(e, t, n, r, i, o),
    n = pu(),
    e !== null && !Oe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    jt(e, t, o)) : (ne && n && eu(t),
    t.flags |= 1,
    be(e, t, r, o),
    t.child)
}
function Yc(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Cu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        mh(e, t, i, r, o)) : (e = yi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : co,
        n(s, r) && e.ref === t.ref)
            return jt(e, t, o)
    }
    return t.flags |= 1,
    e = en(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function mh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (co(i, r) && e.ref === t.ref)
            if (Oe = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Oe = !0);
            else
                return t.lanes = e.lanes,
                jt(e, t, o)
    }
    return qa(e, t, n, r, o)
}
function gh(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Y(er, Be),
            Be |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Y(er, Be),
                Be |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            Y(er, Be),
            Be |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        Y(er, Be),
        Be |= r;
    return be(e, t, o, n),
    t.child
}
function vh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function qa(e, t, n, r, o) {
    var i = _e(n) ? bn : Ee.current;
    return i = pr(t, i),
    ur(t, o),
    n = fu(e, t, n, r, i, o),
    r = pu(),
    e !== null && !Oe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    jt(e, t, o)) : (ne && r && eu(t),
    t.flags |= 1,
    be(e, t, n, o),
    t.child)
}
function Qc(e, t, n, r, o) {
    if (_e(n)) {
        var i = !0;
        Li(t)
    } else
        i = !1;
    if (ur(t, o),
    t.stateNode === null)
        mi(e, t),
        fh(t, n, r),
        Qa(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = nt(u) : (u = _e(n) ? bn : Ee.current,
        u = pr(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && $c(t, s, r, u),
        Bt = !1;
        var f = t.memoizedState;
        s.state = f,
        Vi(t, r, s, o),
        l = t.memoizedState,
        a !== r || f !== l || De.current || Bt ? (typeof c == "function" && (Ya(t, n, c, r),
        l = t.memoizedState),
        (a = Bt || Uc(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Hp(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : at(t.type, a),
        s.props = u,
        d = t.pendingProps,
        f = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = nt(l) : (l = _e(n) ? bn : Ee.current,
        l = pr(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && $c(t, s, r, l),
        Bt = !1,
        f = t.memoizedState,
        s.state = f,
        Vi(t, r, s, o);
        var y = t.memoizedState;
        a !== d || f !== y || De.current || Bt ? (typeof h == "function" && (Ya(t, n, h, r),
        y = t.memoizedState),
        (u = Bt || Uc(t, n, u, r, f, y, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        s.props = r,
        s.state = y,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Za(e, t, n, r, i, o)
}
function Za(e, t, n, r, o, i) {
    vh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && Oc(t, n, !1),
        jt(e, t, i);
    r = t.stateNode,
    u0.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = mr(t, e.child, null, i),
    t.child = mr(t, null, a, i)) : be(e, t, a, i),
    t.memoizedState = r.state,
    o && Oc(t, n, !0),
    t.child
}
function yh(e) {
    var t = e.stateNode;
    t.pendingContext ? jc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && jc(e, t.context, !1),
    lu(e, t.containerInfo)
}
function Xc(e, t, n, r, o) {
    return hr(),
    nu(o),
    t.flags |= 256,
    be(e, t, n, r),
    t.child
}
var Ja = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function el(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function xh(e, t, n) {
    var r = t.pendingProps, o = oe.current, i = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    Y(oe, o & 1),
    e === null)
        return Ga(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = ps(s, r, 0, null),
        e = kn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = el(n),
        t.memoizedState = Ja,
        e) : gu(t, s));
    if (o = e.memoizedState,
    o !== null && (a = o.dehydrated,
    a !== null))
        return c0(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = en(o, l),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        a !== null ? i = en(a, i) : (i = kn(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? el(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Ja,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = en(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function gu(e, t) {
    return t = ps({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Xo(e, t, n, r) {
    return r !== null && nu(r),
    mr(t, e.child, null, n),
    e = gu(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function c0(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Xs(Error(A(422))),
        Xo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = ps({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = kn(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && mr(t, e.child, null, s),
        t.child.memoizedState = el(s),
        t.memoizedState = Ja,
        i);
    if (!(t.mode & 1))
        return Xo(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        i = Error(A(419)),
        r = Xs(i, r, void 0),
        Xo(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Oe || a) {
        if (r = ve,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
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
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Lt(e, o),
            ft(r, e, o, -1))
        }
        return Tu(),
        r = Xs(Error(A(421))),
        Xo(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = C0.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    $e = Xt(o.nextSibling),
    We = t,
    ne = !0,
    ut = null,
    e !== null && (Ze[Je++] = Pt,
    Ze[Je++] = Et,
    Ze[Je++] = Nn,
    Pt = e.id,
    Et = e.overflow,
    Nn = t),
    t = gu(t, r.children),
    t.flags |= 4096,
    t)
}
function qc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ka(e.return, t, n)
}
function qs(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function wh(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (be(e, t, r.children, n),
    r = oe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && qc(e, n, t);
                else if (e.tag === 19)
                    qc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Y(oe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ii(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            qs(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ii(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            qs(t, !0, n, null, i);
            break;
        case "together":
            qs(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function mi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function jt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Mn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(A(153));
    if (t.child !== null) {
        for (e = t.child,
        n = en(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = en(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function d0(e, t, n) {
    switch (t.tag) {
    case 3:
        yh(t),
        hr();
        break;
    case 5:
        Gp(t);
        break;
    case 1:
        _e(t.type) && Li(t);
        break;
    case 4:
        lu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        Y(Di, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Y(oe, oe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? xh(e, t, n) : (Y(oe, oe.current & 1),
            e = jt(e, t, n),
            e !== null ? e.sibling : null);
        Y(oe, oe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return wh(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        Y(oe, oe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        gh(e, t, n)
    }
    return jt(e, t, n)
}
var Sh, tl, Th, Ch;
Sh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
tl = function() {}
;
Th = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Tn(yt.current);
        var i = null;
        switch (n) {
        case "input":
            o = Ca(e, o),
            r = Ca(e, r),
            i = [];
            break;
        case "select":
            o = ae({}, o, {
                value: void 0
            }),
            r = ae({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = ka(e, o),
            r = ka(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ri)
        }
        ba(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (ro.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (ro.hasOwnProperty(u) ? (l != null && u === "onScroll" && X("scroll", e),
                    i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Ch = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Mr(e, t) {
    if (!ne)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function f0(e, t, n) {
    var r = t.pendingProps;
    switch (tu(t),
    t.tag) {
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
        return Te(t),
        null;
    case 1:
        return _e(t.type) && Mi(),
        Te(t),
        null;
    case 3:
        return r = t.stateNode,
        gr(),
        q(De),
        q(Ee),
        cu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Yo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ut !== null && (ul(ut),
        ut = null))),
        tl(e, t),
        Te(t),
        null;
    case 5:
        uu(t);
        var o = Tn(go.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Th(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(A(166));
                return Te(t),
                null
            }
            if (e = Tn(yt.current),
            Yo(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[gt] = t,
                r[ho] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    X("cancel", r),
                    X("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    X("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Ur.length; o++)
                        X(Ur[o], r);
                    break;
                case "source":
                    X("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    X("error", r),
                    X("load", r);
                    break;
                case "details":
                    X("toggle", r);
                    break;
                case "input":
                    sc(r, i),
                    X("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    X("invalid", r);
                    break;
                case "textarea":
                    lc(r, i),
                    X("invalid", r)
                }
                ba(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var a = i[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Ko(r.textContent, a, e),
                        o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Ko(r.textContent, a, e),
                        o = ["children", "" + a]) : ro.hasOwnProperty(s) && a != null && s === "onScroll" && X("scroll", r)
                    }
                switch (n) {
                case "input":
                    Fo(r),
                    ac(r, i, !0);
                    break;
                case "textarea":
                    Fo(r),
                    uc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Ri)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = qf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[gt] = t,
                e[ho] = r,
                Sh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Na(n, r),
                    n) {
                    case "dialog":
                        X("cancel", e),
                        X("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        X("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Ur.length; o++)
                            X(Ur[o], e);
                        o = r;
                        break;
                    case "source":
                        X("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        X("error", e),
                        X("load", e),
                        o = r;
                        break;
                    case "details":
                        X("toggle", e),
                        o = r;
                        break;
                    case "input":
                        sc(e, r),
                        o = Ca(e, r),
                        X("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ae({}, r, {
                            value: void 0
                        }),
                        X("invalid", e);
                        break;
                    case "textarea":
                        lc(e, r),
                        o = ka(e, r),
                        X("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    ba(n, o),
                    a = o;
                    for (i in a)
                        if (a.hasOwnProperty(i)) {
                            var l = a[i];
                            i === "style" ? ep(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Zf(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && oo(e, l) : typeof l == "number" && oo(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (ro.hasOwnProperty(i) ? l != null && i === "onScroll" && X("scroll", e) : l != null && zl(e, i, l, s))
                        }
                    switch (n) {
                    case "input":
                        Fo(e),
                        ac(e, r, !1);
                        break;
                    case "textarea":
                        Fo(e),
                        uc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + rn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? ir(e, !!r.multiple, i, !1) : r.defaultValue != null && ir(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Ri)
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
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Te(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Ch(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(A(166));
            if (n = Tn(go.current),
            Tn(yt.current),
            Yo(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[gt] = t,
                (i = r.nodeValue !== n) && (e = We,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ko(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ko(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[gt] = t,
                t.stateNode = r
        }
        return Te(t),
        null;
    case 13:
        if (q(oe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ne && $e !== null && t.mode & 1 && !(t.flags & 128))
                Bp(),
                hr(),
                t.flags |= 98560,
                i = !1;
            else if (i = Yo(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(A(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(A(317));
                    i[gt] = t
                } else
                    hr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Te(t),
                i = !1
            } else
                ut !== null && (ul(ut),
                ut = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || oe.current & 1 ? me === 0 && (me = 3) : Tu())),
        t.updateQueue !== null && (t.flags |= 4),
        Te(t),
        null);
    case 4:
        return gr(),
        tl(e, t),
        e === null && fo(t.stateNode.containerInfo),
        Te(t),
        null;
    case 10:
        return iu(t.type._context),
        Te(t),
        null;
    case 17:
        return _e(t.type) && Mi(),
        Te(t),
        null;
    case 19:
        if (q(oe),
        i = t.memoizedState,
        i === null)
            return Te(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                Mr(i, !1);
            else {
                if (me !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Ii(e),
                        s !== null) {
                            for (t.flags |= 128,
                            Mr(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Y(oe, oe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && de() > yr && (t.flags |= 128,
                r = !0,
                Mr(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ii(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Mr(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !ne)
                        return Te(t),
                        null
                } else
                    2 * de() - i.renderingStartTime > yr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Mr(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = de(),
        t.sibling = null,
        n = oe.current,
        Y(oe, r ? n & 1 | 2 : n & 1),
        t) : (Te(t),
        null);
    case 22:
    case 23:
        return Su(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Be & 1073741824 && (Te(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(A(156, t.tag))
}
function p0(e, t) {
    switch (tu(t),
    t.tag) {
    case 1:
        return _e(t.type) && Mi(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return gr(),
        q(De),
        q(Ee),
        cu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return uu(t),
        null;
    case 13:
        if (q(oe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(A(340));
            hr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return q(oe),
        null;
    case 4:
        return gr(),
        null;
    case 10:
        return iu(t.type._context),
        null;
    case 22:
    case 23:
        return Su(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var qo = !1
  , Pe = !1
  , h0 = typeof WeakSet == "function" ? WeakSet : Set
  , N = null;
function Jn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                le(e, t, r)
            }
        else
            n.current = null
}
function nl(e, t, n) {
    try {
        n()
    } catch (r) {
        le(e, t, r)
    }
}
var Zc = !1;
function m0(e, t) {
    if (Fa = Ai,
    e = bp(),
    Jl(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var h; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o),
                        d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r),
                        d.nodeType === 3 && (s += d.nodeValue.length),
                        (h = d.firstChild) !== null; )
                            f = d,
                            d = h;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === o && (a = s),
                            f === i && ++c === r && (l = s),
                            (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (za = {
        focusedElem: e,
        selectionRange: n
    },
    Ai = !1,
    N = t; N !== null; )
        if (t = N,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            N = e;
        else
            for (; N !== null; ) {
                t = N;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var v = y.memoizedProps
                                  , S = y.memoizedState
                                  , g = t.stateNode
                                  , p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : at(t.type, v), S);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                        }
                } catch (w) {
                    le(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    N = e;
                    break
                }
                N = t.return
            }
    return y = Zc,
    Zc = !1,
    y
}
function Xr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && nl(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function ds(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function rl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ph(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Ph(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[gt],
    delete t[ho],
    delete t[$a],
    delete t[qy],
    delete t[Zy])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Eh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Jc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Eh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ol(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ri));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ol(e, t, n),
        e = e.sibling; e !== null; )
            ol(e, t, n),
            e = e.sibling
}
function il(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (il(e, t, n),
        e = e.sibling; e !== null; )
            il(e, t, n),
            e = e.sibling
}
var ye = null
  , lt = !1;
function Vt(e, t, n) {
    for (n = n.child; n !== null; )
        kh(e, t, n),
        n = n.sibling
}
function kh(e, t, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
        try {
            vt.onCommitFiberUnmount(rs, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Pe || Jn(n, t);
    case 6:
        var r = ye
          , o = lt;
        ye = null,
        Vt(e, t, n),
        ye = r,
        lt = o,
        ye !== null && (lt ? (e = ye,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
        break;
    case 18:
        ye !== null && (lt ? (e = ye,
        n = n.stateNode,
        e.nodeType === 8 ? Ws(e.parentNode, n) : e.nodeType === 1 && Ws(e, n),
        lo(e)) : Ws(ye, n.stateNode));
        break;
    case 4:
        r = ye,
        o = lt,
        ye = n.stateNode.containerInfo,
        lt = !0,
        Vt(e, t, n),
        ye = r,
        lt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Pe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && nl(n, t, s),
                o = o.next
            } while (o !== r)
        }
        Vt(e, t, n);
        break;
    case 1:
        if (!Pe && (Jn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                le(n, t, a)
            }
        Vt(e, t, n);
        break;
    case 21:
        Vt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Pe = (r = Pe) || n.memoizedState !== null,
        Vt(e, t, n),
        Pe = r) : Vt(e, t, n);
        break;
    default:
        Vt(e, t, n)
    }
}
function ed(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new h0),
        t.forEach(function(r) {
            var o = P0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function ot(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        ye = a.stateNode,
                        lt = !1;
                        break e;
                    case 3:
                        ye = a.stateNode.containerInfo,
                        lt = !0;
                        break e;
                    case 4:
                        ye = a.stateNode.containerInfo,
                        lt = !0;
                        break e
                    }
                    a = a.return
                }
                if (ye === null)
                    throw Error(A(160));
                kh(i, s, o),
                ye = null,
                lt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                le(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Ah(t, e),
            t = t.sibling
}
function Ah(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ot(t, e),
        ht(e),
        r & 4) {
            try {
                Xr(3, e, e.return),
                ds(3, e)
            } catch (v) {
                le(e, e.return, v)
            }
            try {
                Xr(5, e, e.return)
            } catch (v) {
                le(e, e.return, v)
            }
        }
        break;
    case 1:
        ot(t, e),
        ht(e),
        r & 512 && n !== null && Jn(n, n.return);
        break;
    case 5:
        if (ot(t, e),
        ht(e),
        r & 512 && n !== null && Jn(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                oo(o, "")
            } catch (v) {
                le(e, e.return, v)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && i.type === "radio" && i.name != null && Qf(o, i),
                    Na(a, s);
                    var u = Na(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s]
                          , d = l[s + 1];
                        c === "style" ? ep(o, d) : c === "dangerouslySetInnerHTML" ? Zf(o, d) : c === "children" ? oo(o, d) : zl(o, c, d, u)
                    }
                    switch (a) {
                    case "input":
                        Pa(o, i);
                        break;
                    case "textarea":
                        Xf(o, i);
                        break;
                    case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        h != null ? ir(o, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? ir(o, !!i.multiple, i.defaultValue, !0) : ir(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[ho] = i
                } catch (v) {
                    le(e, e.return, v)
                }
        }
        break;
    case 6:
        if (ot(t, e),
        ht(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(A(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (v) {
                le(e, e.return, v)
            }
        }
        break;
    case 3:
        if (ot(t, e),
        ht(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                lo(t.containerInfo)
            } catch (v) {
                le(e, e.return, v)
            }
        break;
    case 4:
        ot(t, e),
        ht(e);
        break;
    case 13:
        ot(t, e),
        ht(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (xu = de())),
        r & 4 && ed(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Pe = (u = Pe) || c,
        ot(t, e),
        Pe = u) : ot(t, e),
        ht(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (N = e,
                c = e.child; c !== null; ) {
                    for (d = N = c; N !== null; ) {
                        switch (f = N,
                        h = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Xr(4, f, f.return);
                            break;
                        case 1:
                            Jn(f, f.return);
                            var y = f.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (v) {
                                    le(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            Jn(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                nd(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f,
                        N = h) : nd(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Jf("display", s))
                        } catch (v) {
                            le(e, e.return, v)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (v) {
                            le(e, e.return, v)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        ot(t, e),
        ht(e),
        r & 4 && ed(e);
        break;
    case 21:
        break;
    default:
        ot(t, e),
        ht(e)
    }
}
function ht(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Eh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (oo(o, ""),
                r.flags &= -33);
                var i = Jc(e);
                il(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = Jc(e);
                ol(e, a, s);
                break;
            default:
                throw Error(A(161))
            }
        } catch (l) {
            le(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function g0(e, t, n) {
    N = e,
    bh(e)
}
function bh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null; ) {
        var o = N
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || qo;
            if (!s) {
                var a = o.alternate
                  , l = a !== null && a.memoizedState !== null || Pe;
                a = qo;
                var u = Pe;
                if (qo = s,
                (Pe = l) && !u)
                    for (N = o; N !== null; )
                        s = N,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? rd(o) : l !== null ? (l.return = s,
                        N = l) : rd(o);
                for (; i !== null; )
                    N = i,
                    bh(i),
                    i = i.sibling;
                N = o,
                qo = a,
                Pe = u
            }
            td(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            N = i) : td(e)
    }
}
function td(e) {
    for (; N !== null; ) {
        var t = N;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Pe || ds(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Pe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Fc(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Fc(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && lo(d)
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
                        throw Error(A(163))
                    }
                Pe || t.flags & 512 && rl(t)
            } catch (f) {
                le(t, t.return, f)
            }
        }
        if (t === e) {
            N = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            N = n;
            break
        }
        N = t.return
    }
}
function nd(e) {
    for (; N !== null; ) {
        var t = N;
        if (t === e) {
            N = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            N = n;
            break
        }
        N = t.return
    }
}
function rd(e) {
    for (; N !== null; ) {
        var t = N;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    ds(4, t)
                } catch (l) {
                    le(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        le(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    rl(t)
                } catch (l) {
                    le(t, i, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    rl(t)
                } catch (l) {
                    le(t, s, l)
                }
            }
        } catch (l) {
            le(t, t.return, l)
        }
        if (t === e) {
            N = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            N = a;
            break
        }
        N = t.return
    }
}
var v0 = Math.ceil
  , Bi = Dt.ReactCurrentDispatcher
  , vu = Dt.ReactCurrentOwner
  , tt = Dt.ReactCurrentBatchConfig
  , $ = 0
  , ve = null
  , pe = null
  , xe = 0
  , Be = 0
  , er = un(0)
  , me = 0
  , wo = null
  , Mn = 0
  , fs = 0
  , yu = 0
  , qr = null
  , je = null
  , xu = 0
  , yr = 1 / 0
  , Tt = null
  , Ui = !1
  , sl = null
  , Zt = null
  , Zo = !1
  , Gt = null
  , $i = 0
  , Zr = 0
  , al = null
  , gi = -1
  , vi = 0;
function Ne() {
    return $ & 6 ? de() : gi !== -1 ? gi : gi = de()
}
function Jt(e) {
    return e.mode & 1 ? $ & 2 && xe !== 0 ? xe & -xe : e0.transition !== null ? (vi === 0 && (vi = fp()),
    vi) : (e = H,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : xp(e.type)),
    e) : 1
}
function ft(e, t, n, r) {
    if (50 < Zr)
        throw Zr = 0,
        al = null,
        Error(A(185));
    Ao(e, n, r),
    (!($ & 2) || e !== ve) && (e === ve && (!($ & 2) && (fs |= n),
    me === 4 && Wt(e, xe)),
    Ve(e, r),
    n === 1 && $ === 0 && !(t.mode & 1) && (yr = de() + 500,
    ls && cn()))
}
function Ve(e, t) {
    var n = e.callbackNode;
    ey(e, t);
    var r = ki(e, e === ve ? xe : 0);
    if (r === 0)
        n !== null && fc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && fc(n),
        t === 1)
            e.tag === 0 ? Jy(od.bind(null, e)) : Ip(od.bind(null, e)),
            Qy(function() {
                !($ & 6) && cn()
            }),
            n = null;
        else {
            switch (pp(r)) {
            case 1:
                n = Hl;
                break;
            case 4:
                n = cp;
                break;
            case 16:
                n = Ei;
                break;
            case 536870912:
                n = dp;
                break;
            default:
                n = Ei
            }
            n = _h(n, Nh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Nh(e, t) {
    if (gi = -1,
    vi = 0,
    $ & 6)
        throw Error(A(327));
    var n = e.callbackNode;
    if (cr() && e.callbackNode !== n)
        return null;
    var r = ki(e, e === ve ? xe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Wi(e, r);
    else {
        t = r;
        var o = $;
        $ |= 2;
        var i = Mh();
        (ve !== e || xe !== t) && (Tt = null,
        yr = de() + 500,
        En(e, t));
        do
            try {
                w0();
                break
            } catch (a) {
                Rh(e, a)
            }
        while (1);
        ou(),
        Bi.current = i,
        $ = o,
        pe !== null ? t = 0 : (ve = null,
        xe = 0,
        t = me)
    }
    if (t !== 0) {
        if (t === 2 && (o = Oa(e),
        o !== 0 && (r = o,
        t = ll(e, o))),
        t === 1)
            throw n = wo,
            En(e, 0),
            Wt(e, r),
            Ve(e, de()),
            n;
        if (t === 6)
            Wt(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !y0(o) && (t = Wi(e, r),
            t === 2 && (i = Oa(e),
            i !== 0 && (r = i,
            t = ll(e, i))),
            t === 1))
                throw n = wo,
                En(e, 0),
                Wt(e, r),
                Ve(e, de()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(A(345));
            case 2:
                gn(e, je, Tt);
                break;
            case 3:
                if (Wt(e, r),
                (r & 130023424) === r && (t = xu + 500 - de(),
                10 < t)) {
                    if (ki(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ne(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Ua(gn.bind(null, e, je, Tt), t);
                    break
                }
                gn(e, je, Tt);
                break;
            case 4:
                if (Wt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - dt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = de() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * v0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ua(gn.bind(null, e, je, Tt), r);
                    break
                }
                gn(e, je, Tt);
                break;
            case 5:
                gn(e, je, Tt);
                break;
            default:
                throw Error(A(329))
            }
        }
    }
    return Ve(e, de()),
    e.callbackNode === n ? Nh.bind(null, e) : null
}
function ll(e, t) {
    var n = qr;
    return e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
    e = Wi(e, t),
    e !== 2 && (t = je,
    je = n,
    t !== null && ul(t)),
    e
}
function ul(e) {
    je === null ? je = e : je.push.apply(je, e)
}
function y0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!pt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Wt(e, t) {
    for (t &= ~yu,
    t &= ~fs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - dt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function od(e) {
    if ($ & 6)
        throw Error(A(327));
    cr();
    var t = ki(e, 0);
    if (!(t & 1))
        return Ve(e, de()),
        null;
    var n = Wi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Oa(e);
        r !== 0 && (t = r,
        n = ll(e, r))
    }
    if (n === 1)
        throw n = wo,
        En(e, 0),
        Wt(e, t),
        Ve(e, de()),
        n;
    if (n === 6)
        throw Error(A(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    gn(e, je, Tt),
    Ve(e, de()),
    null
}
function wu(e, t) {
    var n = $;
    $ |= 1;
    try {
        return e(t)
    } finally {
        $ = n,
        $ === 0 && (yr = de() + 500,
        ls && cn())
    }
}
function Ln(e) {
    Gt !== null && Gt.tag === 0 && !($ & 6) && cr();
    var t = $;
    $ |= 1;
    var n = tt.transition
      , r = H;
    try {
        if (tt.transition = null,
        H = 1,
        e)
            return e()
    } finally {
        H = r,
        tt.transition = n,
        $ = t,
        !($ & 6) && cn()
    }
}
function Su() {
    Be = er.current,
    q(er)
}
function En(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Yy(n)),
    pe !== null)
        for (n = pe.return; n !== null; ) {
            var r = n;
            switch (tu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Mi();
                break;
            case 3:
                gr(),
                q(De),
                q(Ee),
                cu();
                break;
            case 5:
                uu(r);
                break;
            case 4:
                gr();
                break;
            case 13:
                q(oe);
                break;
            case 19:
                q(oe);
                break;
            case 10:
                iu(r.type._context);
                break;
            case 22:
            case 23:
                Su()
            }
            n = n.return
        }
    if (ve = e,
    pe = e = en(e.current, null),
    xe = Be = t,
    me = 0,
    wo = null,
    yu = fs = Mn = 0,
    je = qr = null,
    Sn !== null) {
        for (t = 0; t < Sn.length; t++)
            if (n = Sn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Sn = null
    }
    return e
}
function Rh(e, t) {
    do {
        var n = pe;
        try {
            if (ou(),
            pi.current = zi,
            Fi) {
                for (var r = se.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Fi = !1
            }
            if (Rn = 0,
            ge = he = se = null,
            Qr = !1,
            vo = 0,
            vu.current = null,
            n === null || n.return === null) {
                me = 1,
                wo = t,
                pe = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = xe,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = Hc(s);
                    if (h !== null) {
                        h.flags &= -257,
                        Gc(h, s, a, i, t),
                        h.mode & 1 && Wc(i, u, t),
                        t = h,
                        l = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var v = new Set;
                            v.add(l),
                            t.updateQueue = v
                        } else
                            y.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Wc(i, u, t),
                            Tu();
                            break e
                        }
                        l = Error(A(426))
                    }
                } else if (ne && a.mode & 1) {
                    var S = Hc(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        Gc(S, s, a, i, t),
                        nu(vr(l, a));
                        break e
                    }
                }
                i = l = vr(l, a),
                me !== 4 && (me = 2),
                qr === null ? qr = [i] : qr.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var g = ph(i, l, t);
                        Ic(i, g);
                        break e;
                    case 1:
                        a = l;
                        var p = i.type
                          , m = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Zt === null || !Zt.has(m)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var w = hh(i, a, t);
                            Ic(i, w);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            jh(n)
        } catch (C) {
            t = C,
            pe === n && n !== null && (pe = n = n.return);
            continue
        }
        break
    } while (1)
}
function Mh() {
    var e = Bi.current;
    return Bi.current = zi,
    e === null ? zi : e
}
function Tu() {
    (me === 0 || me === 3 || me === 2) && (me = 4),
    ve === null || !(Mn & 268435455) && !(fs & 268435455) || Wt(ve, xe)
}
function Wi(e, t) {
    var n = $;
    $ |= 2;
    var r = Mh();
    (ve !== e || xe !== t) && (Tt = null,
    En(e, t));
    do
        try {
            x0();
            break
        } catch (o) {
            Rh(e, o)
        }
    while (1);
    if (ou(),
    $ = n,
    Bi.current = r,
    pe !== null)
        throw Error(A(261));
    return ve = null,
    xe = 0,
    me
}
function x0() {
    for (; pe !== null; )
        Lh(pe)
}
function w0() {
    for (; pe !== null && !Hv(); )
        Lh(pe)
}
function Lh(e) {
    var t = Dh(e.alternate, e, Be);
    e.memoizedProps = e.pendingProps,
    t === null ? jh(e) : pe = t,
    vu.current = null
}
function jh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = p0(n, t),
            n !== null) {
                n.flags &= 32767,
                pe = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                me = 6,
                pe = null;
                return
            }
        } else if (n = f0(n, t, Be),
        n !== null) {
            pe = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            pe = t;
            return
        }
        pe = t = e
    } while (t !== null);
    me === 0 && (me = 5)
}
function gn(e, t, n) {
    var r = H
      , o = tt.transition;
    try {
        tt.transition = null,
        H = 1,
        S0(e, t, n, r)
    } finally {
        tt.transition = o,
        H = r
    }
    return null
}
function S0(e, t, n, r) {
    do
        cr();
    while (Gt !== null);
    if ($ & 6)
        throw Error(A(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(A(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (ty(e, i),
    e === ve && (pe = ve = null,
    xe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Zo || (Zo = !0,
    _h(Ei, function() {
        return cr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = tt.transition,
        tt.transition = null;
        var s = H;
        H = 1;
        var a = $;
        $ |= 4,
        vu.current = null,
        m0(e, n),
        Ah(n, e),
        By(za),
        Ai = !!Fa,
        za = Fa = null,
        e.current = n,
        g0(n),
        Gv(),
        $ = a,
        H = s,
        tt.transition = i
    } else
        e.current = n;
    if (Zo && (Zo = !1,
    Gt = e,
    $i = o),
    i = e.pendingLanes,
    i === 0 && (Zt = null),
    Qv(n.stateNode),
    Ve(e, de()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Ui)
        throw Ui = !1,
        e = sl,
        sl = null,
        e;
    return $i & 1 && e.tag !== 0 && cr(),
    i = e.pendingLanes,
    i & 1 ? e === al ? Zr++ : (Zr = 0,
    al = e) : Zr = 0,
    cn(),
    null
}
function cr() {
    if (Gt !== null) {
        var e = pp($i)
          , t = tt.transition
          , n = H;
        try {
            if (tt.transition = null,
            H = 16 > e ? 16 : e,
            Gt === null)
                var r = !1;
            else {
                if (e = Gt,
                Gt = null,
                $i = 0,
                $ & 6)
                    throw Error(A(331));
                var o = $;
                for ($ |= 4,
                N = e.current; N !== null; ) {
                    var i = N
                      , s = i.child;
                    if (N.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (N = u; N !== null; ) {
                                    var c = N;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Xr(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        N = d;
                                    else
                                        for (; N !== null; ) {
                                            c = N;
                                            var f = c.sibling
                                              , h = c.return;
                                            if (Ph(c),
                                            c === u) {
                                                N = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                N = f;
                                                break
                                            }
                                            N = h
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var S = v.sibling;
                                        v.sibling = null,
                                        v = S
                                    } while (v !== null)
                                }
                            }
                            N = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        N = s;
                    else
                        e: for (; N !== null; ) {
                            if (i = N,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Xr(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                N = g;
                                break e
                            }
                            N = i.return
                        }
                }
                var p = e.current;
                for (N = p; N !== null; ) {
                    s = N;
                    var m = s.child;
                    if (s.subtreeFlags & 2064 && m !== null)
                        m.return = s,
                        N = m;
                    else
                        e: for (s = p; N !== null; ) {
                            if (a = N,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ds(9, a)
                                    }
                                } catch (C) {
                                    le(a, a.return, C)
                                }
                            if (a === s) {
                                N = null;
                                break e
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                w.return = a.return,
                                N = w;
                                break e
                            }
                            N = a.return
                        }
                }
                if ($ = o,
                cn(),
                vt && typeof vt.onPostCommitFiberRoot == "function")
                    try {
                        vt.onPostCommitFiberRoot(rs, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            H = n,
            tt.transition = t
        }
    }
    return !1
}
function id(e, t, n) {
    t = vr(n, t),
    t = ph(e, t, 1),
    e = qt(e, t, 1),
    t = Ne(),
    e !== null && (Ao(e, 1, t),
    Ve(e, t))
}
function le(e, t, n) {
    if (e.tag === 3)
        id(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                id(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
                    e = vr(n, e),
                    e = hh(t, e, 1),
                    t = qt(t, e, 1),
                    e = Ne(),
                    t !== null && (Ao(t, 1, e),
                    Ve(t, e));
                    break
                }
            }
            t = t.return
        }
}
function T0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ne(),
    e.pingedLanes |= e.suspendedLanes & n,
    ve === e && (xe & n) === n && (me === 4 || me === 3 && (xe & 130023424) === xe && 500 > de() - xu ? En(e, 0) : yu |= n),
    Ve(e, t)
}
function Oh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Uo,
    Uo <<= 1,
    !(Uo & 130023424) && (Uo = 4194304)) : t = 1);
    var n = Ne();
    e = Lt(e, t),
    e !== null && (Ao(e, t, n),
    Ve(e, n))
}
function C0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Oh(e, n)
}
function P0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(A(314))
    }
    r !== null && r.delete(t),
    Oh(e, n)
}
var Dh;
Dh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || De.current)
            Oe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Oe = !1,
                d0(e, t, n);
            Oe = !!(e.flags & 131072)
        }
    else
        Oe = !1,
        ne && t.flags & 1048576 && Fp(t, Oi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        mi(e, t),
        e = t.pendingProps;
        var o = pr(t, Ee.current);
        ur(t, n),
        o = fu(null, t, r, e, o, n);
        var i = pu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        _e(r) ? (i = !0,
        Li(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        au(t),
        o.updater = cs,
        t.stateNode = o,
        o._reactInternals = t,
        Qa(t, r, e, n),
        t = Za(null, t, r, !0, i, n)) : (t.tag = 0,
        ne && i && eu(t),
        be(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (mi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = k0(r),
            e = at(r, e),
            o) {
            case 0:
                t = qa(null, t, r, e, n);
                break e;
            case 1:
                t = Qc(null, t, r, e, n);
                break e;
            case 11:
                t = Kc(null, t, r, e, n);
                break e;
            case 14:
                t = Yc(null, t, r, at(r.type, e), n);
                break e
            }
            throw Error(A(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : at(r, o),
        qa(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : at(r, o),
        Qc(e, t, r, o, n);
    case 3:
        e: {
            if (yh(t),
            e === null)
                throw Error(A(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Hp(e, t),
            Vi(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = vr(Error(A(423)), t),
                    t = Xc(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = vr(Error(A(424)), t),
                    t = Xc(e, t, r, n, o);
                    break e
                } else
                    for ($e = Xt(t.stateNode.containerInfo.firstChild),
                    We = t,
                    ne = !0,
                    ut = null,
                    n = $p(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (hr(),
                r === o) {
                    t = jt(e, t, n);
                    break e
                }
                be(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Gp(t),
        e === null && Ga(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        Ba(r, o) ? s = null : i !== null && Ba(r, i) && (t.flags |= 32),
        vh(e, t),
        be(e, t, s, n),
        t.child;
    case 6:
        return e === null && Ga(t),
        null;
    case 13:
        return xh(e, t, n);
    case 4:
        return lu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = mr(t, null, r, n) : be(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : at(r, o),
        Kc(e, t, r, o, n);
    case 7:
        return be(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return be(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return be(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            Y(Di, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (pt(i.value, s)) {
                    if (i.children === o.children && !De.current) {
                        t = jt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var a = i.dependencies;
                        if (a !== null) {
                            s = i.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = At(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    Ka(i.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(A(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            Ka(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            be(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        ur(t, n),
        o = nt(o),
        r = r(o),
        t.flags |= 1,
        be(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = at(r, t.pendingProps),
        o = at(r.type, o),
        Yc(e, t, r, o, n);
    case 15:
        return mh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : at(r, o),
        mi(e, t),
        t.tag = 1,
        _e(r) ? (e = !0,
        Li(t)) : e = !1,
        ur(t, n),
        fh(t, r, o),
        Qa(t, r, o, n),
        Za(null, t, r, !0, e, n);
    case 19:
        return wh(e, t, n);
    case 22:
        return gh(e, t, n)
    }
    throw Error(A(156, t.tag))
}
;
function _h(e, t) {
    return up(e, t)
}
function E0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function et(e, t, n, r) {
    return new E0(e,t,n,r)
}
function Cu(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function k0(e) {
    if (typeof e == "function")
        return Cu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ul)
            return 11;
        if (e === $l)
            return 14
    }
    return 2
}
function en(e, t) {
    var n = e.alternate;
    return n === null ? (n = et(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function yi(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Cu(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Wn:
            return kn(n.children, o, i, t);
        case Bl:
            s = 8,
            o |= 8;
            break;
        case xa:
            return e = et(12, n, t, o | 2),
            e.elementType = xa,
            e.lanes = i,
            e;
        case wa:
            return e = et(13, n, t, o),
            e.elementType = wa,
            e.lanes = i,
            e;
        case Sa:
            return e = et(19, n, t, o),
            e.elementType = Sa,
            e.lanes = i,
            e;
        case Gf:
            return ps(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Wf:
                    s = 10;
                    break e;
                case Hf:
                    s = 9;
                    break e;
                case Ul:
                    s = 11;
                    break e;
                case $l:
                    s = 14;
                    break e;
                case zt:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(A(130, e == null ? e : typeof e, ""))
        }
    return t = et(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function kn(e, t, n, r) {
    return e = et(7, e, r, t),
    e.lanes = n,
    e
}
function ps(e, t, n, r) {
    return e = et(22, e, r, t),
    e.elementType = Gf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Zs(e, t, n) {
    return e = et(6, e, null, t),
    e.lanes = n,
    e
}
function Js(e, t, n) {
    return t = et(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function A0(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = js(0),
    this.expirationTimes = js(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = js(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Pu(e, t, n, r, o, i, s, a, l) {
    return e = new A0(e,t,n,a,l),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = et(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    au(i),
    e
}
function b0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: $n,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Vh(e) {
    if (!e)
        return on;
    e = e._reactInternals;
    e: {
        if (_n(e) !== e || e.tag !== 1)
            throw Error(A(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (_e(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(A(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (_e(n))
            return Vp(e, n, t)
    }
    return t
}
function Ih(e, t, n, r, o, i, s, a, l) {
    return e = Pu(n, r, !0, e, o, i, s, a, l),
    e.context = Vh(null),
    n = e.current,
    r = Ne(),
    o = Jt(n),
    i = At(r, o),
    i.callback = t ?? null,
    qt(n, i, o),
    e.current.lanes = o,
    Ao(e, o, r),
    Ve(e, r),
    e
}
function hs(e, t, n, r) {
    var o = t.current
      , i = Ne()
      , s = Jt(o);
    return n = Vh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = At(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = qt(o, t, s),
    e !== null && (ft(e, o, s, i),
    fi(e, o, s)),
    s
}
function Hi(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function sd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Eu(e, t) {
    sd(e, t),
    (e = e.alternate) && sd(e, t)
}
function N0() {
    return null
}
var Fh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ku(e) {
    this._internalRoot = e
}
ms.prototype.render = ku.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(A(409));
    hs(e, t, null, null)
}
;
ms.prototype.unmount = ku.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ln(function() {
            hs(null, e, null, null)
        }),
        t[Mt] = null
    }
}
;
function ms(e) {
    this._internalRoot = e
}
ms.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = gp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++)
            ;
        $t.splice(n, 0, e),
        n === 0 && yp(e)
    }
}
;
function Au(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function gs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ad() {}
function R0(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Hi(s);
                i.call(u)
            }
        }
        var s = Ih(t, r, e, 0, null, !1, !1, "", ad);
        return e._reactRootContainer = s,
        e[Mt] = s.current,
        fo(e.nodeType === 8 ? e.parentNode : e),
        Ln(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Hi(l);
            a.call(u)
        }
    }
    var l = Pu(e, 0, !1, null, null, !1, !1, "", ad);
    return e._reactRootContainer = l,
    e[Mt] = l.current,
    fo(e.nodeType === 8 ? e.parentNode : e),
    Ln(function() {
        hs(t, l, n, r)
    }),
    l
}
function vs(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Hi(s);
                a.call(l)
            }
        }
        hs(t, s, e, o)
    } else
        s = R0(n, t, e, o, r);
    return Hi(s)
}
hp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Br(t.pendingLanes);
            n !== 0 && (Gl(t, n | 1),
            Ve(t, de()),
            !($ & 6) && (yr = de() + 500,
            cn()))
        }
        break;
    case 13:
        Ln(function() {
            var r = Lt(e, 1);
            if (r !== null) {
                var o = Ne();
                ft(r, e, 1, o)
            }
        }),
        Eu(e, 1)
    }
}
;
Kl = function(e) {
    if (e.tag === 13) {
        var t = Lt(e, 134217728);
        if (t !== null) {
            var n = Ne();
            ft(t, e, 134217728, n)
        }
        Eu(e, 134217728)
    }
}
;
mp = function(e) {
    if (e.tag === 13) {
        var t = Jt(e)
          , n = Lt(e, t);
        if (n !== null) {
            var r = Ne();
            ft(n, e, t, r)
        }
        Eu(e, t)
    }
}
;
gp = function() {
    return H
}
;
vp = function(e, t) {
    var n = H;
    try {
        return H = e,
        t()
    } finally {
        H = n
    }
}
;
Ma = function(e, t, n) {
    switch (t) {
    case "input":
        if (Pa(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = as(r);
                    if (!o)
                        throw Error(A(90));
                    Yf(r),
                    Pa(r, o)
                }
            }
        }
        break;
    case "textarea":
        Xf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && ir(e, !!n.multiple, t, !1)
    }
}
;
rp = wu;
op = Ln;
var M0 = {
    usingClientEntryPoint: !1,
    Events: [No, Yn, as, tp, np, wu]
}
  , Lr = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , L0 = {
    bundleType: Lr.bundleType,
    version: Lr.version,
    rendererPackageName: Lr.rendererPackageName,
    rendererConfig: Lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = ap(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Lr.findFiberByHostInstance || N0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jo.isDisabled && Jo.supportsFiber)
        try {
            rs = Jo.inject(L0),
            vt = Jo
        } catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M0;
Ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Au(t))
        throw Error(A(200));
    return b0(e, t, null, n)
}
;
Ke.createRoot = function(e, t) {
    if (!Au(e))
        throw Error(A(299));
    var n = !1
      , r = ""
      , o = Fh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Pu(e, 1, !1, null, null, n, !1, r, o),
    e[Mt] = t.current,
    fo(e.nodeType === 8 ? e.parentNode : e),
    new ku(t)
}
;
Ke.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","),
        Error(A(268, e)));
    return e = ap(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ke.flushSync = function(e) {
    return Ln(e)
}
;
Ke.hydrate = function(e, t, n) {
    if (!gs(t))
        throw Error(A(200));
    return vs(null, e, t, !0, n)
}
;
Ke.hydrateRoot = function(e, t, n) {
    if (!Au(e))
        throw Error(A(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Fh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Ih(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Mt] = t.current,
    fo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new ms(t)
}
;
Ke.render = function(e, t, n) {
    if (!gs(t))
        throw Error(A(200));
    return vs(null, e, t, !1, n)
}
;
Ke.unmountComponentAtNode = function(e) {
    if (!gs(e))
        throw Error(A(40));
    return e._reactRootContainer ? (Ln(function() {
        vs(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Mt] = null
        })
    }),
    !0) : !1
}
;
Ke.unstable_batchedUpdates = wu;
Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!gs(n))
        throw Error(A(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(A(38));
    return vs(e, t, n, !1, r)
}
;
Ke.version = "18.3.1-next-f1338f8080-20240426";
function zh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zh)
        } catch (e) {
            console.error(e)
        }
}
zh(),
zf.exports = Ke;
var ys = zf.exports;
const j0 = Sr(ys);
var ld = ys;
va.createRoot = ld.createRoot,
va.hydrateRoot = ld.hydrateRoot;
var Bh = {
    exports: {}
}
  , O0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , D0 = O0
  , _0 = D0;
function Uh() {}
function $h() {}
$h.resetWarningCache = Uh;
var V0 = function() {
    function e(r, o, i, s, a, l) {
        if (l !== _0) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation",
            u
        }
    }
    e.isRequired = e;
    function t() {
        return e
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
        checkPropTypes: $h,
        resetWarningCache: Uh
    };
    return n.PropTypes = n,
    n
};
Bh.exports = V0();
var I0 = Bh.exports;
const ee = Sr(I0);
function F0(e) {
    return e && typeof e == "object" && "default"in e ? e.default : e
}
var Wh = T
  , z0 = F0(Wh);
function ud(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function B0(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    e.__proto__ = t
}
var U0 = !!(typeof window < "u" && window.document && window.document.createElement);
function $0(e, t, n) {
    if (typeof e != "function")
        throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
        throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (typeof n < "u" && typeof n != "function")
        throw new Error("Expected mapStateOnServer to either be undefined or a function.");
    function r(o) {
        return o.displayName || o.name || "Component"
    }
    return function(i) {
        if (typeof i != "function")
            throw new Error("Expected WrappedComponent to be a React component.");
        var s = [], a;
        function l() {
            a = e(s.map(function(c) {
                return c.props
            })),
            u.canUseDOM ? t(a) : n && (a = n(a))
        }
        var u = function(c) {
            B0(d, c);
            function d() {
                return c.apply(this, arguments) || this
            }
            d.peek = function() {
                return a
            }
            ,
            d.rewind = function() {
                if (d.canUseDOM)
                    throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                var y = a;
                return a = void 0,
                s = [],
                y
            }
            ;
            var f = d.prototype;
            return f.UNSAFE_componentWillMount = function() {
                s.push(this),
                l()
            }
            ,
            f.componentDidUpdate = function() {
                l()
            }
            ,
            f.componentWillUnmount = function() {
                var y = s.indexOf(this);
                s.splice(y, 1),
                l()
            }
            ,
            f.render = function() {
                return z0.createElement(i, this.props)
            }
            ,
            d
        }(Wh.PureComponent);
        return ud(u, "displayName", "SideEffect(" + r(i) + ")"),
        ud(u, "canUseDOM", U0),
        u
    }
}
var W0 = $0;
const H0 = Sr(W0);
var G0 = typeof Element < "u"
  , K0 = typeof Map == "function"
  , Y0 = typeof Set == "function"
  , Q0 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function xi(e, t) {
    if (e === t)
        return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor)
            return !1;
        var n, r, o;
        if (Array.isArray(e)) {
            if (n = e.length,
            n != t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!xi(e[r], t[r]))
                    return !1;
            return !0
        }
        var i;
        if (K0 && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done; )
                if (!t.has(r.value[0]))
                    return !1;
            for (i = e.entries(); !(r = i.next()).done; )
                if (!xi(r.value[1], t.get(r.value[0])))
                    return !1;
            return !0
        }
        if (Y0 && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done; )
                if (!t.has(r.value[0]))
                    return !1;
            return !0
        }
        if (Q0 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length,
            n != t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
            return e.toString() === t.toString();
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(t, o[r]))
                return !1;
        if (G0 && e instanceof Element)
            return !1;
        for (r = n; r-- !== 0; )
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !xi(e[o[r]], t[o[r]]))
                return !1;
        return !0
    }
    return e !== e && t !== t
}
var X0 = function(t, n) {
    try {
        return xi(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"),
            !1;
        throw r
    }
};
const q0 = Sr(X0);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cd = Object.getOwnPropertySymbols
  , Z0 = Object.prototype.hasOwnProperty
  , J0 = Object.prototype.propertyIsEnumerable;
function e1(e) {
    if (e == null)
        throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}
function t1() {
    try {
        if (!Object.assign)
            return !1;
        var e = new String("abc");
        if (e[5] = "de",
        Object.getOwnPropertyNames(e)[0] === "5")
            return !1;
        for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function(i) {
            return t[i]
        });
        if (r.join("") !== "0123456789")
            return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(i) {
            o[i] = i
        }),
        Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var n1 = t1() ? Object.assign : function(e, t) {
    for (var n, r = e1(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var s in n)
            Z0.call(n, s) && (r[s] = n[s]);
        if (cd) {
            o = cd(n);
            for (var a = 0; a < o.length; a++)
                J0.call(n, o[a]) && (r[o[a]] = n[o[a]])
        }
    }
    return r
}
;
const r1 = Sr(n1);
var An = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
}
  , I = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};
Object.keys(I).map(function(e) {
    return I[e]
});
var te = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
}
  , Gi = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
}
  , So = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
}
  , o1 = Object.keys(Gi).reduce(function(e, t) {
    return e[Gi[t]] = t,
    e
}, {})
  , i1 = [I.NOSCRIPT, I.SCRIPT, I.STYLE]
  , ct = "data-react-helmet"
  , s1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e
}
: function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}
  , a1 = function(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
  , l1 = function() {
    function e(t, n) {
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n),
        r && e(t, r),
        t
    }
}()
  , Le = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , u1 = function(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
  , dd = function(e, t) {
    var n = {};
    for (var r in e)
        t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
}
  , c1 = function(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
  , cl = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
}
  , d1 = function(t) {
    var n = dr(t, I.TITLE)
      , r = dr(t, So.TITLE_TEMPLATE);
    if (r && n)
        return r.replace(/%s/g, function() {
            return Array.isArray(n) ? n.join("") : n
        });
    var o = dr(t, So.DEFAULT_TITLE);
    return n || o || void 0
}
  , f1 = function(t) {
    return dr(t, So.ON_CHANGE_CLIENT_STATE) || function() {}
}
  , ea = function(t, n) {
    return n.filter(function(r) {
        return typeof r[t] < "u"
    }).map(function(r) {
        return r[t]
    }).reduce(function(r, o) {
        return Le({}, r, o)
    }, {})
}
  , p1 = function(t, n) {
    return n.filter(function(r) {
        return typeof r[I.BASE] < "u"
    }).map(function(r) {
        return r[I.BASE]
    }).reverse().reduce(function(r, o) {
        if (!r.length)
            for (var i = Object.keys(o), s = 0; s < i.length; s++) {
                var a = i[s]
                  , l = a.toLowerCase();
                if (t.indexOf(l) !== -1 && o[l])
                    return r.concat(o)
            }
        return r
    }, [])
}
  , jr = function(t, n, r) {
    var o = {};
    return r.filter(function(i) {
        return Array.isArray(i[t]) ? !0 : (typeof i[t] < "u" && v1("Helmet: " + t + ' should be of type "Array". Instead found type "' + s1(i[t]) + '"'),
        !1)
    }).map(function(i) {
        return i[t]
    }).reverse().reduce(function(i, s) {
        var a = {};
        s.filter(function(f) {
            for (var h = void 0, y = Object.keys(f), v = 0; v < y.length; v++) {
                var S = y[v]
                  , g = S.toLowerCase();
                n.indexOf(g) !== -1 && !(h === te.REL && f[h].toLowerCase() === "canonical") && !(g === te.REL && f[g].toLowerCase() === "stylesheet") && (h = g),
                n.indexOf(S) !== -1 && (S === te.INNER_HTML || S === te.CSS_TEXT || S === te.ITEM_PROP) && (h = S)
            }
            if (!h || !f[h])
                return !1;
            var p = f[h].toLowerCase();
            return o[h] || (o[h] = {}),
            a[h] || (a[h] = {}),
            o[h][p] ? !1 : (a[h][p] = !0,
            !0)
        }).reverse().forEach(function(f) {
            return i.push(f)
        });
        for (var l = Object.keys(a), u = 0; u < l.length; u++) {
            var c = l[u]
              , d = r1({}, o[c], a[c]);
            o[c] = d
        }
        return i
    }, []).reverse()
}
  , dr = function(t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
        var o = t[r];
        if (o.hasOwnProperty(n))
            return o[n]
    }
    return null
}
  , h1 = function(t) {
    return {
        baseTag: p1([te.HREF, te.TARGET], t),
        bodyAttributes: ea(An.BODY, t),
        defer: dr(t, So.DEFER),
        encode: dr(t, So.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: ea(An.HTML, t),
        linkTags: jr(I.LINK, [te.REL, te.HREF], t),
        metaTags: jr(I.META, [te.NAME, te.CHARSET, te.HTTPEQUIV, te.PROPERTY, te.ITEM_PROP], t),
        noscriptTags: jr(I.NOSCRIPT, [te.INNER_HTML], t),
        onChangeClientState: f1(t),
        scriptTags: jr(I.SCRIPT, [te.SRC, te.INNER_HTML], t),
        styleTags: jr(I.STYLE, [te.CSS_TEXT], t),
        title: d1(t),
        titleAttributes: ea(An.TITLE, t)
    }
}
  , dl = function() {
    var e = Date.now();
    return function(t) {
        var n = Date.now();
        n - e > 16 ? (e = n,
        t(n)) : setTimeout(function() {
            dl(t)
        }, 0)
    }
}()
  , fd = function(t) {
    return clearTimeout(t)
}
  , m1 = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || dl : global.requestAnimationFrame || dl
  , g1 = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || fd : global.cancelAnimationFrame || fd
  , v1 = function(t) {
    return console && typeof console.warn == "function" && console.warn(t)
}
  , Or = null
  , y1 = function(t) {
    Or && g1(Or),
    t.defer ? Or = m1(function() {
        pd(t, function() {
            Or = null
        })
    }) : (pd(t),
    Or = null)
}
  , pd = function(t, n) {
    var r = t.baseTag
      , o = t.bodyAttributes
      , i = t.htmlAttributes
      , s = t.linkTags
      , a = t.metaTags
      , l = t.noscriptTags
      , u = t.onChangeClientState
      , c = t.scriptTags
      , d = t.styleTags
      , f = t.title
      , h = t.titleAttributes;
    fl(I.BODY, o),
    fl(I.HTML, i),
    x1(f, h);
    var y = {
        baseTag: Un(I.BASE, r),
        linkTags: Un(I.LINK, s),
        metaTags: Un(I.META, a),
        noscriptTags: Un(I.NOSCRIPT, l),
        scriptTags: Un(I.SCRIPT, c),
        styleTags: Un(I.STYLE, d)
    }
      , v = {}
      , S = {};
    Object.keys(y).forEach(function(g) {
        var p = y[g]
          , m = p.newTags
          , w = p.oldTags;
        m.length && (v[g] = m),
        w.length && (S[g] = y[g].oldTags)
    }),
    n && n(),
    u(t, v, S)
}
  , Hh = function(t) {
    return Array.isArray(t) ? t.join("") : t
}
  , x1 = function(t, n) {
    typeof t < "u" && document.title !== t && (document.title = Hh(t)),
    fl(I.TITLE, n)
}
  , fl = function(t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
        for (var o = r.getAttribute(ct), i = o ? o.split(",") : [], s = [].concat(i), a = Object.keys(n), l = 0; l < a.length; l++) {
            var u = a[l]
              , c = n[u] || "";
            r.getAttribute(u) !== c && r.setAttribute(u, c),
            i.indexOf(u) === -1 && i.push(u);
            var d = s.indexOf(u);
            d !== -1 && s.splice(d, 1)
        }
        for (var f = s.length - 1; f >= 0; f--)
            r.removeAttribute(s[f]);
        i.length === s.length ? r.removeAttribute(ct) : r.getAttribute(ct) !== a.join(",") && r.setAttribute(ct, a.join(","))
    }
}
  , Un = function(t, n) {
    var r = document.head || document.querySelector(I.HEAD)
      , o = r.querySelectorAll(t + "[" + ct + "]")
      , i = Array.prototype.slice.call(o)
      , s = []
      , a = void 0;
    return n && n.length && n.forEach(function(l) {
        var u = document.createElement(t);
        for (var c in l)
            if (l.hasOwnProperty(c))
                if (c === te.INNER_HTML)
                    u.innerHTML = l.innerHTML;
                else if (c === te.CSS_TEXT)
                    u.styleSheet ? u.styleSheet.cssText = l.cssText : u.appendChild(document.createTextNode(l.cssText));
                else {
                    var d = typeof l[c] > "u" ? "" : l[c];
                    u.setAttribute(c, d)
                }
        u.setAttribute(ct, "true"),
        i.some(function(f, h) {
            return a = h,
            u.isEqualNode(f)
        }) ? i.splice(a, 1) : s.push(u)
    }),
    i.forEach(function(l) {
        return l.parentNode.removeChild(l)
    }),
    s.forEach(function(l) {
        return r.appendChild(l)
    }),
    {
        oldTags: i,
        newTags: s
    }
}
  , Gh = function(t) {
    return Object.keys(t).reduce(function(n, r) {
        var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
        return n ? n + " " + o : o
    }, "")
}
  , w1 = function(t, n, r, o) {
    var i = Gh(r)
      , s = Hh(n);
    return i ? "<" + t + " " + ct + '="true" ' + i + ">" + cl(s, o) + "</" + t + ">" : "<" + t + " " + ct + '="true">' + cl(s, o) + "</" + t + ">"
}
  , S1 = function(t, n, r) {
    return n.reduce(function(o, i) {
        var s = Object.keys(i).filter(function(u) {
            return !(u === te.INNER_HTML || u === te.CSS_TEXT)
        }).reduce(function(u, c) {
            var d = typeof i[c] > "u" ? c : c + '="' + cl(i[c], r) + '"';
            return u ? u + " " + d : d
        }, "")
          , a = i.innerHTML || i.cssText || ""
          , l = i1.indexOf(t) === -1;
        return o + "<" + t + " " + ct + '="true" ' + s + (l ? "/>" : ">" + a + "</" + t + ">")
    }, "")
}
  , Kh = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function(r, o) {
        return r[Gi[o] || o] = t[o],
        r
    }, n)
}
  , T1 = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function(r, o) {
        return r[o1[o] || o] = t[o],
        r
    }, n)
}
  , C1 = function(t, n, r) {
    var o, i = (o = {
        key: n
    },
    o[ct] = !0,
    o), s = Kh(r, i);
    return [K.createElement(I.TITLE, s, n)]
}
  , P1 = function(t, n) {
    return n.map(function(r, o) {
        var i, s = (i = {
            key: o
        },
        i[ct] = !0,
        i);
        return Object.keys(r).forEach(function(a) {
            var l = Gi[a] || a;
            if (l === te.INNER_HTML || l === te.CSS_TEXT) {
                var u = r.innerHTML || r.cssText;
                s.dangerouslySetInnerHTML = {
                    __html: u
                }
            } else
                s[l] = r[a]
        }),
        K.createElement(t, s)
    })
}
  , St = function(t, n, r) {
    switch (t) {
    case I.TITLE:
        return {
            toComponent: function() {
                return C1(t, n.title, n.titleAttributes)
            },
            toString: function() {
                return w1(t, n.title, n.titleAttributes, r)
            }
        };
    case An.BODY:
    case An.HTML:
        return {
            toComponent: function() {
                return Kh(n)
            },
            toString: function() {
                return Gh(n)
            }
        };
    default:
        return {
            toComponent: function() {
                return P1(t, n)
            },
            toString: function() {
                return S1(t, n, r)
            }
        }
    }
}
  , Yh = function(t) {
    var n = t.baseTag
      , r = t.bodyAttributes
      , o = t.encode
      , i = t.htmlAttributes
      , s = t.linkTags
      , a = t.metaTags
      , l = t.noscriptTags
      , u = t.scriptTags
      , c = t.styleTags
      , d = t.title
      , f = d === void 0 ? "" : d
      , h = t.titleAttributes;
    return {
        base: St(I.BASE, n, o),
        bodyAttributes: St(An.BODY, r, o),
        htmlAttributes: St(An.HTML, i, o),
        link: St(I.LINK, s, o),
        meta: St(I.META, a, o),
        noscript: St(I.NOSCRIPT, l, o),
        script: St(I.SCRIPT, u, o),
        style: St(I.STYLE, c, o),
        title: St(I.TITLE, {
            title: f,
            titleAttributes: h
        }, o)
    }
}
  , E1 = function(t) {
    var n, r;
    return r = n = function(o) {
        u1(i, o);
        function i() {
            return a1(this, i),
            c1(this, o.apply(this, arguments))
        }
        return i.prototype.shouldComponentUpdate = function(a) {
            return !q0(this.props, a)
        }
        ,
        i.prototype.mapNestedChildrenToProps = function(a, l) {
            if (!l)
                return null;
            switch (a.type) {
            case I.SCRIPT:
            case I.NOSCRIPT:
                return {
                    innerHTML: l
                };
            case I.STYLE:
                return {
                    cssText: l
                }
            }
            throw new Error("<" + a.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
        }
        ,
        i.prototype.flattenArrayTypeChildren = function(a) {
            var l, u = a.child, c = a.arrayTypeChildren, d = a.newChildProps, f = a.nestedChildren;
            return Le({}, c, (l = {},
            l[u.type] = [].concat(c[u.type] || [], [Le({}, d, this.mapNestedChildrenToProps(u, f))]),
            l))
        }
        ,
        i.prototype.mapObjectTypeChildren = function(a) {
            var l, u, c = a.child, d = a.newProps, f = a.newChildProps, h = a.nestedChildren;
            switch (c.type) {
            case I.TITLE:
                return Le({}, d, (l = {},
                l[c.type] = h,
                l.titleAttributes = Le({}, f),
                l));
            case I.BODY:
                return Le({}, d, {
                    bodyAttributes: Le({}, f)
                });
            case I.HTML:
                return Le({}, d, {
                    htmlAttributes: Le({}, f)
                })
            }
            return Le({}, d, (u = {},
            u[c.type] = Le({}, f),
            u))
        }
        ,
        i.prototype.mapArrayTypeChildrenToProps = function(a, l) {
            var u = Le({}, l);
            return Object.keys(a).forEach(function(c) {
                var d;
                u = Le({}, u, (d = {},
                d[c] = a[c],
                d))
            }),
            u
        }
        ,
        i.prototype.warnOnInvalidChildren = function(a, l) {
            return !0
        }
        ,
        i.prototype.mapChildrenToProps = function(a, l) {
            var u = this
              , c = {};
            return K.Children.forEach(a, function(d) {
                if (!(!d || !d.props)) {
                    var f = d.props
                      , h = f.children
                      , y = dd(f, ["children"])
                      , v = T1(y);
                    switch (u.warnOnInvalidChildren(d, h),
                    d.type) {
                    case I.LINK:
                    case I.META:
                    case I.NOSCRIPT:
                    case I.SCRIPT:
                    case I.STYLE:
                        c = u.flattenArrayTypeChildren({
                            child: d,
                            arrayTypeChildren: c,
                            newChildProps: v,
                            nestedChildren: h
                        });
                        break;
                    default:
                        l = u.mapObjectTypeChildren({
                            child: d,
                            newProps: l,
                            newChildProps: v,
                            nestedChildren: h
                        });
                        break
                    }
                }
            }),
            l = this.mapArrayTypeChildrenToProps(c, l),
            l
        }
        ,
        i.prototype.render = function() {
            var a = this.props
              , l = a.children
              , u = dd(a, ["children"])
              , c = Le({}, u);
            return l && (c = this.mapChildrenToProps(l, c)),
            K.createElement(t, c)
        }
        ,
        l1(i, null, [{
            key: "canUseDOM",
            set: function(a) {
                t.canUseDOM = a
            }
        }]),
        i
    }(K.Component),
    n.propTypes = {
        base: ee.object,
        bodyAttributes: ee.object,
        children: ee.oneOfType([ee.arrayOf(ee.node), ee.node]),
        defaultTitle: ee.string,
        defer: ee.bool,
        encodeSpecialCharacters: ee.bool,
        htmlAttributes: ee.object,
        link: ee.arrayOf(ee.object),
        meta: ee.arrayOf(ee.object),
        noscript: ee.arrayOf(ee.object),
        onChangeClientState: ee.func,
        script: ee.arrayOf(ee.object),
        style: ee.arrayOf(ee.object),
        title: ee.string,
        titleAttributes: ee.object,
        titleTemplate: ee.string
    },
    n.defaultProps = {
        defer: !0,
        encodeSpecialCharacters: !0
    },
    n.peek = t.peek,
    n.rewind = function() {
        var o = t.rewind();
        return o || (o = Yh({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
        })),
        o
    }
    ,
    r
}
  , k1 = function() {
    return null
}
  , A1 = H0(h1, y1, Yh)(k1)
  , pl = E1(A1);
pl.renderStatic = pl.rewind;
const Qh = T.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , xs = T.createContext({})
  , bu = T.createContext(null)
  , ws = typeof document < "u"
  , b1 = ws ? T.useLayoutEffect : T.useEffect
  , Xh = T.createContext({
    strict: !1
})
  , Nu = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  , N1 = "framerAppearId"
  , qh = "data-" + Nu(N1);
function R1(e, t, n, r) {
    const {visualElement: o} = T.useContext(xs)
      , i = T.useContext(Xh)
      , s = T.useContext(bu)
      , a = T.useContext(Qh).reducedMotion
      , l = T.useRef();
    r = r || i.renderer,
    !l.current && r && (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const u = l.current;
    T.useInsertionEffect( () => {
        u && u.update(n, s)
    }
    );
    const c = T.useRef(!!(n[qh] && !window.HandoffComplete));
    return b1( () => {
        u && (u.render(),
        c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    T.useEffect( () => {
        u && (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && (c.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    u
}
function tr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function M1(e, t, n) {
    return T.useCallback(r => {
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : tr(n) && (n.current = r))
    }
    , [t])
}
function To(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Ss(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Ru = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Mu = ["initial", ...Ru];
function Ts(e) {
    return Ss(e.animate) || Mu.some(t => To(e[t]))
}
function Zh(e) {
    return !!(Ts(e) || e.variants)
}
function L1(e, t) {
    if (Ts(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || To(n) ? n : void 0,
            animate: To(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function j1(e) {
    const {initial: t, animate: n} = L1(e, T.useContext(xs));
    return T.useMemo( () => ({
        initial: t,
        animate: n
    }), [hd(t), hd(n)])
}
function hd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const md = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Co = {};
for (const e in md)
    Co[e] = {
        isEnabled: t => md[e].some(n => !!t[n])
    };
function O1(e) {
    for (const t in e)
        Co[t] = {
            ...Co[t],
            ...e[t]
        }
}
const Jh = T.createContext({})
  , em = T.createContext({})
  , D1 = Symbol.for("motionComponentSymbol");
function _1({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o}) {
    e && O1(e);
    function i(a, l) {
        let u;
        const c = {
            ...T.useContext(Qh),
            ...a,
            layoutId: V1(a)
        }
          , {isStatic: d} = c
          , f = j1(a)
          , h = r(a, d);
        if (!d && ws) {
            f.visualElement = R1(o, h, c, t);
            const y = T.useContext(em)
              , v = T.useContext(Xh).strict;
            f.visualElement && (u = f.visualElement.loadFeatures(c, v, e, y))
        }
        return T.createElement(xs.Provider, {
            value: f
        }, u && f.visualElement ? T.createElement(u, {
            visualElement: f.visualElement,
            ...c
        }) : null, n(o, a, M1(h, f.visualElement, l), h, d, f.visualElement))
    }
    const s = T.forwardRef(i);
    return s[D1] = o,
    s
}
function V1({layoutId: e}) {
    const t = T.useContext(Jh).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function I1(e) {
    function t(r, o={}) {
        return _1(e(r, o))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r, o) => (n.has(o) || n.set(o, t(o)),
        n.get(o))
    })
}
const F1 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Lu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(F1.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const Ki = {};
function z1(e) {
    Object.assign(Ki, e)
}
const Mo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Vn = new Set(Mo);
function tm(e, {layout: t, layoutId: n}) {
    return Vn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ki[e] || e === "opacity")
}
const Ie = e => !!(e && e.getVelocity)
  , B1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , U1 = Mo.length;
function $1(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, o) {
    let i = "";
    for (let s = 0; s < U1; s++) {
        const a = Mo[s];
        if (e[a] !== void 0) {
            const l = B1[a] || a;
            i += `${l}(${e[a]}) `
        }
    }
    return t && !e.z && (i += "translateZ(0)"),
    i = i.trim(),
    o ? i = o(e, r ? "" : i) : n && r && (i = "none"),
    i
}
const nm = e => t => typeof t == "string" && t.startsWith(e)
  , rm = nm("--")
  , hl = nm("var(--")
  , W1 = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , H1 = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , sn = (e, t, n) => Math.min(Math.max(n, e), t)
  , In = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Jr = {
    ...In,
    transform: e => sn(0, 1, e)
}
  , ei = {
    ...In,
    default: 1
}
  , eo = e => Math.round(e * 1e5) / 1e5
  , Cs = /(-)?([\d]*\.?[\d])+/g
  , om = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , G1 = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Lo(e) {
    return typeof e == "string"
}
const jo = e => ({
    test: t => Lo(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Ft = jo("deg")
  , xt = jo("%")
  , _ = jo("px")
  , K1 = jo("vh")
  , Y1 = jo("vw")
  , gd = {
    ...xt,
    parse: e => xt.parse(e) / 100,
    transform: e => xt.transform(e * 100)
}
  , vd = {
    ...In,
    transform: Math.round
}
  , im = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    radius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    size: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    rotate: Ft,
    rotateX: Ft,
    rotateY: Ft,
    rotateZ: Ft,
    scale: ei,
    scaleX: ei,
    scaleY: ei,
    scaleZ: ei,
    skew: Ft,
    skewX: Ft,
    skewY: Ft,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: Jr,
    originX: gd,
    originY: gd,
    originZ: _,
    zIndex: vd,
    fillOpacity: Jr,
    strokeOpacity: Jr,
    numOctaves: vd
};
function ju(e, t, n, r) {
    const {style: o, vars: i, transform: s, transformOrigin: a} = e;
    let l = !1
      , u = !1
      , c = !0;
    for (const d in t) {
        const f = t[d];
        if (rm(d)) {
            i[d] = f;
            continue
        }
        const h = im[d]
          , y = H1(f, h);
        if (Vn.has(d)) {
            if (l = !0,
            s[d] = y,
            !c)
                continue;
            f !== (h.default || 0) && (c = !1)
        } else
            d.startsWith("origin") ? (u = !0,
            a[d] = y) : o[d] = y
    }
    if (t.transform || (l || r ? o.transform = $1(e.transform, n, c, r) : o.transform && (o.transform = "none")),
    u) {
        const {originX: d="50%", originY: f="50%", originZ: h=0} = a;
        o.transformOrigin = `${d} ${f} ${h}`
    }
}
const Ou = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function sm(e, t, n) {
    for (const r in t)
        !Ie(t[r]) && !tm(r, n) && (e[r] = t[r])
}
function Q1({transformTemplate: e}, t, n) {
    return T.useMemo( () => {
        const r = Ou();
        return ju(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function X1(e, t, n) {
    const r = e.style || {}
      , o = {};
    return sm(o, r, e),
    Object.assign(o, Q1(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
}
function q1(e, t, n) {
    const r = {}
      , o = X1(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = o,
    r
}
const Z1 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Yi(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Z1.has(e)
}
let am = e => !Yi(e);
function J1(e) {
    e && (am = t => t.startsWith("on") ? !Yi(t) : e(t))
}
try {
    J1(require("@emotion/is-prop-valid").default)
} catch {}
function ex(e, t, n) {
    const r = {};
    for (const o in e)
        o === "values" && typeof e.values == "object" || (am(o) || n === !0 && Yi(o) || !t && !Yi(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
function yd(e, t, n) {
    return typeof e == "string" ? e : _.transform(t + n * e)
}
function tx(e, t, n) {
    const r = yd(t, e.x, e.width)
      , o = yd(n, e.y, e.height);
    return `${r} ${o}`
}
const nx = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , rx = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function ox(e, t, n=1, r=0, o=!0) {
    e.pathLength = 1;
    const i = o ? nx : rx;
    e[i.offset] = _.transform(-r);
    const s = _.transform(t)
      , a = _.transform(n);
    e[i.array] = `${s} ${a}`
}
function Du(e, {attrX: t, attrY: n, attrScale: r, originX: o, originY: i, pathLength: s, pathSpacing: a=1, pathOffset: l=0, ...u}, c, d, f) {
    if (ju(e, u, c, f),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: h, style: y, dimensions: v} = e;
    h.transform && (v && (y.transform = h.transform),
    delete h.transform),
    v && (o !== void 0 || i !== void 0 || y.transform) && (y.transformOrigin = tx(v, o !== void 0 ? o : .5, i !== void 0 ? i : .5)),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && ox(h, s, a, l, !1)
}
const lm = () => ({
    ...Ou(),
    attrs: {}
})
  , _u = e => typeof e == "string" && e.toLowerCase() === "svg";
function ix(e, t, n, r) {
    const o = T.useMemo( () => {
        const i = lm();
        return Du(i, t, {
            enableHardwareAcceleration: !1
        }, _u(r), e.transformTemplate),
        {
            ...i.attrs,
            style: {
                ...i.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const i = {};
        sm(i, e.style, e),
        o.style = {
            ...i,
            ...o.style
        }
    }
    return o
}
function sx(e=!1) {
    return (n, r, o, {latestValues: i}, s) => {
        const l = (Lu(n) ? ix : q1)(r, i, s, n)
          , c = {
            ...ex(r, typeof n == "string", e),
            ...l,
            ref: o
        }
          , {children: d} = r
          , f = T.useMemo( () => Ie(d) ? d.get() : d, [d]);
        return T.createElement(n, {
            ...c,
            children: f
        })
    }
}
function um(e, {style: t, vars: n}, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n)
        e.style.setProperty(i, n[i])
}
const cm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function dm(e, t, n, r) {
    um(e, t, void 0, r);
    for (const o in t.attrs)
        e.setAttribute(cm.has(o) ? o : Nu(o), t.attrs[o])
}
function Vu(e, t) {
    const {style: n} = e
      , r = {};
    for (const o in n)
        (Ie(n[o]) || t.style && Ie(t.style[o]) || tm(o, e)) && (r[o] = n[o]);
    return r
}
function fm(e, t) {
    const n = Vu(e, t);
    for (const r in e)
        if (Ie(e[r]) || Ie(t[r])) {
            const o = Mo.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[o] = e[r]
        }
    return n
}
function Iu(e, t, n, r={}, o={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
}
function ax(e) {
    const t = T.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Qi = e => Array.isArray(e)
  , lx = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , ux = e => Qi(e) ? e[e.length - 1] || 0 : e;
function wi(e) {
    const t = Ie(e) ? e.get() : e;
    return lx(t) ? t.toValue() : t
}
function cx({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, o, i) {
    const s = {
        latestValues: dx(r, o, i, e),
        renderState: t()
    };
    return n && (s.mount = a => n(r, a, s)),
    s
}
const pm = e => (t, n) => {
    const r = T.useContext(xs)
      , o = T.useContext(bu)
      , i = () => cx(e, t, r, o);
    return n ? i() : ax(i)
}
;
function dx(e, t, n, r) {
    const o = {}
      , i = r(e, {});
    for (const f in i)
        o[f] = wi(i[f]);
    let {initial: s, animate: a} = e;
    const l = Ts(e)
      , u = Zh(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    return d && typeof d != "boolean" && !Ss(d) && (Array.isArray(d) ? d : [d]).forEach(h => {
        const y = Iu(e, h);
        if (!y)
            return;
        const {transitionEnd: v, transition: S, ...g} = y;
        for (const p in g) {
            let m = g[p];
            if (Array.isArray(m)) {
                const w = c ? m.length - 1 : 0;
                m = m[w]
            }
            m !== null && (o[p] = m)
        }
        for (const p in v)
            o[p] = v[p]
    }
    ),
    o
}
const ue = e => e;
class xd {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function fx(e) {
    let t = new xd
      , n = new xd
      , r = 0
      , o = !1
      , i = !1;
    const s = new WeakSet
      , a = {
        schedule: (l, u=!1, c=!1) => {
            const d = c && o
              , f = d ? t : n;
            return u && s.add(l),
            f.add(l) && d && o && (r = t.order.length),
            l
        }
        ,
        cancel: l => {
            n.remove(l),
            s.delete(l)
        }
        ,
        process: l => {
            if (o) {
                i = !0;
                return
            }
            if (o = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let u = 0; u < r; u++) {
                    const c = t.order[u];
                    c(l),
                    s.has(c) && (a.schedule(c),
                    e())
                }
            o = !1,
            i && (i = !1,
            a.process(l))
        }
    };
    return a
}
const ti = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , px = 40;
function hx(e, t) {
    let n = !1
      , r = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , i = ti.reduce( (d, f) => (d[f] = fx( () => n = !0),
    d), {})
      , s = d => i[d].process(o)
      , a = () => {
        const d = performance.now();
        n = !1,
        o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, px), 1),
        o.timestamp = d,
        o.isProcessing = !0,
        ti.forEach(s),
        o.isProcessing = !1,
        n && t && (r = !1,
        e(a))
    }
      , l = () => {
        n = !0,
        r = !0,
        o.isProcessing || e(a)
    }
    ;
    return {
        schedule: ti.reduce( (d, f) => {
            const h = i[f];
            return d[f] = (y, v=!1, S=!1) => (n || l(),
            h.schedule(y, v, S)),
            d
        }
        , {}),
        cancel: d => ti.forEach(f => i[f].cancel(d)),
        state: o,
        steps: i
    }
}
const {schedule: Z, cancel: Ot, state: Ce, steps: ta} = hx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ue, !0)
  , mx = {
    useVisualState: pm({
        scrapeMotionValuesFromProps: fm,
        createRenderState: lm,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            Z.read( () => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            Z.render( () => {
                Du(n, r, {
                    enableHardwareAcceleration: !1
                }, _u(t.tagName), e.transformTemplate),
                dm(t, n)
            }
            )
        }
    })
}
  , gx = {
    useVisualState: pm({
        scrapeMotionValuesFromProps: Vu,
        createRenderState: Ou
    })
};
function vx(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...Lu(e) ? mx : gx,
        preloadedFeatures: n,
        useRender: sx(t),
        createVisualElement: r,
        Component: e
    }
}
function kt(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const hm = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Ps(e, t="page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const yx = e => t => hm(t) && e(t, Ps(t));
function bt(e, t, n, r) {
    return kt(e, t, yx(n), r)
}
const xx = (e, t) => n => t(e(n))
  , tn = (...e) => e.reduce(xx);
function mm(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const wd = mm("dragHorizontal")
  , Sd = mm("dragVertical");
function gm(e) {
    let t = !1;
    if (e === "y")
        t = Sd();
    else if (e === "x")
        t = wd();
    else {
        const n = wd()
          , r = Sd();
        n && r ? t = () => {
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function vm() {
    const e = gm(!0);
    return e ? (e(),
    !1) : !0
}
class dn {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function Td(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
      , r = "onHover" + (t ? "Start" : "End")
      , o = (i, s) => {
        if (i.pointerType === "touch" || vm())
            return;
        const a = e.getProps();
        e.animationState && a.whileHover && e.animationState.setActive("whileHover", t),
        a[r] && Z.update( () => a[r](i, s))
    }
    ;
    return bt(e.current, n, o, {
        passive: !e.getProps()[r]
    })
}
class wx extends dn {
    mount() {
        this.unmount = tn(Td(this.node, !0), Td(this.node, !1))
    }
    unmount() {}
}
class Sx extends dn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = tn(kt(this.node.current, "focus", () => this.onFocus()), kt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const ym = (e, t) => t ? e === t ? !0 : ym(e, t.parentElement) : !1;
function na(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, Ps(n))
}
class Tx extends dn {
    constructor() {
        super(...arguments),
        this.removeStartListeners = ue,
        this.removeEndListeners = ue,
        this.removeAccessibleListeners = ue,
        this.startPointerPress = (t, n) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const r = this.node.getProps()
              , i = bt(window, "pointerup", (a, l) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: c, globalTapTarget: d} = this.node.getProps();
                Z.update( () => {
                    !d && !ym(this.node.current, a.target) ? c && c(a, l) : u && u(a, l)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , s = bt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = tn(i, s),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = () => {
            const t = i => {
                if (i.key !== "Enter" || this.isPressing)
                    return;
                const s = a => {
                    a.key !== "Enter" || !this.checkPressEnd() || na("up", (l, u) => {
                        const {onTap: c} = this.node.getProps();
                        c && Z.update( () => c(l, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = kt(this.node.current, "keyup", s),
                na("down", (a, l) => {
                    this.startPress(a, l)
                }
                )
            }
              , n = kt(this.node.current, "keydown", t)
              , r = () => {
                this.isPressing && na("cancel", (i, s) => this.cancelPress(i, s))
            }
              , o = kt(this.node.current, "blur", r);
            this.removeAccessibleListeners = tn(n, o)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: o} = this.node.getProps();
        o && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && Z.update( () => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !vm()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && Z.update( () => r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = bt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = kt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = tn(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const ml = new WeakMap
  , ra = new WeakMap
  , Cx = e => {
    const t = ml.get(e.target);
    t && t(e)
}
  , Px = e => {
    e.forEach(Cx)
}
;
function Ex({root: e, ...t}) {
    const n = e || document;
    ra.has(n) || ra.set(n, {});
    const r = ra.get(n)
      , o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(Px,{
        root: e,
        ...t
    })),
    r[o]
}
function kx(e, t, n) {
    const r = Ex(t);
    return ml.set(e, n),
    r.observe(e),
    () => {
        ml.delete(e),
        r.unobserve(e)
    }
}
const Ax = {
    some: 0,
    all: 1
};
class bx extends dn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: o="some", once: i} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : Ax[o]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            i && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(l)
        }
        ;
        return kx(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(Nx(t, n)) && this.startObserver()
    }
    unmount() {}
}
function Nx({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const Rx = {
    inView: {
        Feature: bx
    },
    tap: {
        Feature: Tx
    },
    focus: {
        Feature: Sx
    },
    hover: {
        Feature: wx
    }
};
function xm(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function Mx(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.get()),
    t
}
function Lx(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.getVelocity()),
    t
}
function Es(e, t, n) {
    const r = e.getProps();
    return Iu(r, t, n !== void 0 ? n : r.custom, Mx(e), Lx(e))
}
let jx = ue
  , Fu = ue;
const nn = e => e * 1e3
  , Nt = e => e / 1e3
  , Ox = {
    current: !1
}
  , wm = e => Array.isArray(e) && typeof e[0] == "number";
function Sm(e) {
    return !!(!e || typeof e == "string" && Tm[e] || wm(e) || Array.isArray(e) && e.every(Sm))
}
const $r = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Tm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: $r([0, .65, .55, 1]),
    circOut: $r([.55, 0, 1, .45]),
    backIn: $r([.31, .01, .66, -.59]),
    backOut: $r([.33, 1.53, .69, .99])
};
function Cm(e) {
    if (e)
        return wm(e) ? $r(e) : Array.isArray(e) ? e.map(Cm) : Tm[e]
}
function Dx(e, t, n, {delay: r=0, duration: o, repeat: i=0, repeatType: s="loop", ease: a, times: l}={}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = Cm(a);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: o,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: i + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
function _x(e, {repeat: t, repeatType: n="loop"}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Pm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Vx = 1e-7
  , Ix = 12;
function Fx(e, t, n, r, o) {
    let i, s, a = 0;
    do
        s = t + (n - t) / 2,
        i = Pm(s, r, o) - e,
        i > 0 ? n = s : t = s;
    while (Math.abs(i) > Vx && ++a < Ix);
    return s
}
function Oo(e, t, n, r) {
    if (e === t && n === r)
        return ue;
    const o = i => Fx(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : Pm(o(i), t, r)
}
const zx = Oo(.42, 0, 1, 1)
  , Bx = Oo(0, 0, .58, 1)
  , Em = Oo(.42, 0, .58, 1)
  , Ux = e => Array.isArray(e) && typeof e[0] != "number"
  , km = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Am = e => t => 1 - e(1 - t)
  , zu = e => 1 - Math.sin(Math.acos(e))
  , bm = Am(zu)
  , $x = km(zu)
  , Nm = Oo(.33, 1.53, .69, .99)
  , Bu = Am(Nm)
  , Wx = km(Bu)
  , Hx = e => (e *= 2) < 1 ? .5 * Bu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Gx = {
    linear: ue,
    easeIn: zx,
    easeInOut: Em,
    easeOut: Bx,
    circIn: zu,
    circInOut: $x,
    circOut: bm,
    backIn: Bu,
    backInOut: Wx,
    backOut: Nm,
    anticipate: Hx
}
  , Cd = e => {
    if (Array.isArray(e)) {
        Fu(e.length === 4);
        const [t,n,r,o] = e;
        return Oo(t, n, r, o)
    } else if (typeof e == "string")
        return Gx[e];
    return e
}
  , Uu = (e, t) => n => !!(Lo(n) && G1.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Rm = (e, t, n) => r => {
    if (!Lo(r))
        return r;
    const [o,i,s,a] = r.match(Cs);
    return {
        [e]: parseFloat(o),
        [t]: parseFloat(i),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , Kx = e => sn(0, 255, e)
  , oa = {
    ...In,
    transform: e => Math.round(Kx(e))
}
  , Cn = {
    test: Uu("rgb", "red"),
    parse: Rm("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + oa.transform(e) + ", " + oa.transform(t) + ", " + oa.transform(n) + ", " + eo(Jr.transform(r)) + ")"
};
function Yx(e) {
    let t = ""
      , n = ""
      , r = ""
      , o = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    o = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    o = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    o += o),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const gl = {
    test: Uu("#"),
    parse: Yx,
    transform: Cn.transform
}
  , nr = {
    test: Uu("hsl", "hue"),
    parse: Rm("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + xt.transform(eo(t)) + ", " + xt.transform(eo(n)) + ", " + eo(Jr.transform(r)) + ")"
}
  , ke = {
    test: e => Cn.test(e) || gl.test(e) || nr.test(e),
    parse: e => Cn.test(e) ? Cn.parse(e) : nr.test(e) ? nr.parse(e) : gl.parse(e),
    transform: e => Lo(e) ? e : e.hasOwnProperty("red") ? Cn.transform(e) : nr.transform(e)
}
  , ie = (e, t, n) => -n * e + n * t + e;
function ia(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Qx({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let o = 0
      , i = 0
      , s = 0;
    if (!t)
        o = i = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        o = ia(l, a, e + 1 / 3),
        i = ia(l, a, e),
        s = ia(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const sa = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
  , Xx = [gl, Cn, nr]
  , qx = e => Xx.find(t => t.test(e));
function Pd(e) {
    const t = qx(e);
    let n = t.parse(e);
    return t === nr && (n = Qx(n)),
    n
}
const Mm = (e, t) => {
    const n = Pd(e)
      , r = Pd(t)
      , o = {
        ...n
    };
    return i => (o.red = sa(n.red, r.red, i),
    o.green = sa(n.green, r.green, i),
    o.blue = sa(n.blue, r.blue, i),
    o.alpha = ie(n.alpha, r.alpha, i),
    Cn.transform(o))
}
;
function Zx(e) {
    var t, n;
    return isNaN(e) && Lo(e) && (((t = e.match(Cs)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(om)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Lm = {
    regex: W1,
    countKey: "Vars",
    token: "${v}",
    parse: ue
}
  , jm = {
    regex: om,
    countKey: "Colors",
    token: "${c}",
    parse: ke.parse
}
  , Om = {
    regex: Cs,
    countKey: "Numbers",
    token: "${n}",
    parse: In.parse
};
function aa(e, {regex: t, countKey: n, token: r, parse: o}) {
    const i = e.tokenised.match(t);
    i && (e["num" + n] = i.length,
    e.tokenised = e.tokenised.replace(t, r),
    e.values.push(...i.map(o)))
}
function Xi(e) {
    const t = e.toString()
      , n = {
        value: t,
        tokenised: t,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && aa(n, Lm),
    aa(n, jm),
    aa(n, Om),
    n
}
function Dm(e) {
    return Xi(e).values
}
function _m(e) {
    const {values: t, numColors: n, numVars: r, tokenised: o} = Xi(e)
      , i = t.length;
    return s => {
        let a = o;
        for (let l = 0; l < i; l++)
            l < r ? a = a.replace(Lm.token, s[l]) : l < r + n ? a = a.replace(jm.token, ke.transform(s[l])) : a = a.replace(Om.token, eo(s[l]));
        return a
    }
}
const Jx = e => typeof e == "number" ? 0 : e;
function ew(e) {
    const t = Dm(e);
    return _m(e)(t.map(Jx))
}
const an = {
    test: Zx,
    parse: Dm,
    createTransformer: _m,
    getAnimatableNone: ew
}
  , Vm = (e, t) => n => `${n > 0 ? t : e}`;
function Im(e, t) {
    return typeof e == "number" ? n => ie(e, t, n) : ke.test(e) ? Mm(e, t) : e.startsWith("var(") ? Vm(e, t) : zm(e, t)
}
const Fm = (e, t) => {
    const n = [...e]
      , r = n.length
      , o = e.map( (i, s) => Im(i, t[s]));
    return i => {
        for (let s = 0; s < r; s++)
            n[s] = o[s](i);
        return n
    }
}
  , tw = (e, t) => {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const o in n)
        e[o] !== void 0 && t[o] !== void 0 && (r[o] = Im(e[o], t[o]));
    return o => {
        for (const i in r)
            n[i] = r[i](o);
        return n
    }
}
  , zm = (e, t) => {
    const n = an.createTransformer(t)
      , r = Xi(e)
      , o = Xi(t);
    return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? tn(Fm(r.values, o.values), n) : Vm(e, t)
}
  , Po = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Ed = (e, t) => n => ie(e, t, n);
function nw(e) {
    return typeof e == "number" ? Ed : typeof e == "string" ? ke.test(e) ? Mm : zm : Array.isArray(e) ? Fm : typeof e == "object" ? tw : Ed
}
function rw(e, t, n) {
    const r = []
      , o = n || nw(e[0])
      , i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let a = o(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || ue : t;
            a = tn(l, a)
        }
        r.push(a)
    }
    return r
}
function Bm(e, t, {clamp: n=!0, ease: r, mixer: o}={}) {
    const i = e.length;
    if (Fu(i === t.length),
    i === 1)
        return () => t[0];
    e[0] > e[i - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const s = rw(t, r, o)
      , a = s.length
      , l = u => {
        let c = 0;
        if (a > 1)
            for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                ;
        const d = Po(e[c], e[c + 1], u);
        return s[c](d)
    }
    ;
    return n ? u => l(sn(e[0], e[i - 1], u)) : l
}
function ow(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = Po(0, t, r);
        e.push(ie(n, 1, o))
    }
}
function iw(e) {
    const t = [0];
    return ow(t, e.length - 1),
    t
}
function sw(e, t) {
    return e.map(n => n * t)
}
function aw(e, t) {
    return e.map( () => t || Em).splice(0, e.length - 1)
}
function qi({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const o = Ux(r) ? r.map(Cd) : Cd(r)
      , i = {
        done: !1,
        value: t[0]
    }
      , s = sw(n && n.length === t.length ? n : iw(t), e)
      , a = Bm(s, t, {
        ease: Array.isArray(o) ? o : aw(t, o)
    });
    return {
        calculatedDuration: e,
        next: l => (i.value = a(l),
        i.done = l >= e,
        i)
    }
}
function Um(e, t) {
    return t ? e * (1e3 / t) : 0
}
const lw = 5;
function $m(e, t, n) {
    const r = Math.max(t - lw, 0);
    return Um(n - e(r), t - r)
}
const la = .001
  , uw = .01
  , kd = 10
  , cw = .05
  , dw = 1;
function fw({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let o, i;
    jx(e <= nn(kd));
    let s = 1 - t;
    s = sn(cw, dw, s),
    e = sn(uw, kd, Nt(e)),
    s < 1 ? (o = u => {
        const c = u * s
          , d = c * e
          , f = c - n
          , h = vl(u, s)
          , y = Math.exp(-d);
        return la - f / h * y
    }
    ,
    i = u => {
        const d = u * s * e
          , f = d * n + n
          , h = Math.pow(s, 2) * Math.pow(u, 2) * e
          , y = Math.exp(-d)
          , v = vl(Math.pow(u, 2), s);
        return (-o(u) + la > 0 ? -1 : 1) * ((f - h) * y) / v
    }
    ) : (o = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -la + c * d
    }
    ,
    i = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const a = 5 / e
      , l = hw(o, i, a);
    if (e = nn(e),
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const pw = 12;
function hw(e, t, n) {
    let r = n;
    for (let o = 1; o < pw; o++)
        r = r - e(r) / t(r);
    return r
}
function vl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const mw = ["duration", "bounce"]
  , gw = ["stiffness", "damping", "mass"];
function Ad(e, t) {
    return t.some(n => e[n] !== void 0)
}
function vw(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Ad(e, gw) && Ad(e, mw)) {
        const n = fw(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function Wm({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const o = e[0]
      , i = e[e.length - 1]
      , s = {
        done: !1,
        value: o
    }
      , {stiffness: a, damping: l, mass: u, duration: c, velocity: d, isResolvedFromDuration: f} = vw({
        ...r,
        velocity: -Nt(r.velocity || 0)
    })
      , h = d || 0
      , y = l / (2 * Math.sqrt(a * u))
      , v = i - o
      , S = Nt(Math.sqrt(a / u))
      , g = Math.abs(v) < 5;
    n || (n = g ? .01 : 2),
    t || (t = g ? .005 : .5);
    let p;
    if (y < 1) {
        const m = vl(S, y);
        p = w => {
            const C = Math.exp(-y * S * w);
            return i - C * ((h + y * S * v) / m * Math.sin(m * w) + v * Math.cos(m * w))
        }
    } else if (y === 1)
        p = m => i - Math.exp(-S * m) * (v + (h + S * v) * m);
    else {
        const m = S * Math.sqrt(y * y - 1);
        p = w => {
            const C = Math.exp(-y * S * w)
              , E = Math.min(m * w, 300);
            return i - C * ((h + y * S * v) * Math.sinh(E) + m * v * Math.cosh(E)) / m
        }
    }
    return {
        calculatedDuration: f && c || null,
        next: m => {
            const w = p(m);
            if (f)
                s.done = m >= c;
            else {
                let C = h;
                m !== 0 && (y < 1 ? C = $m(p, m, w) : C = 0);
                const E = Math.abs(C) <= n
                  , P = Math.abs(i - w) <= t;
                s.done = E && P
            }
            return s.value = s.done ? i : w,
            s
        }
    }
}
function bd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: o=10, bounceStiffness: i=500, modifyTarget: s, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , h = k => a !== void 0 && k < a || l !== void 0 && k > l
      , y = k => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
    let v = n * t;
    const S = d + v
      , g = s === void 0 ? S : s(S);
    g !== S && (v = g - d);
    const p = k => -v * Math.exp(-k / r)
      , m = k => g + p(k)
      , w = k => {
        const L = p(k)
          , j = m(k);
        f.done = Math.abs(L) <= u,
        f.value = f.done ? g : j
    }
    ;
    let C, E;
    const P = k => {
        h(f.value) && (C = k,
        E = Wm({
            keyframes: [f.value, y(f.value)],
            velocity: $m(m, k, f.value),
            damping: o,
            stiffness: i,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return P(0),
    {
        calculatedDuration: null,
        next: k => {
            let L = !1;
            return !E && C === void 0 && (L = !0,
            w(k),
            P(k)),
            C !== void 0 && k > C ? E.next(k - C) : (!L && w(k),
            f)
        }
    }
}
const yw = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => Z.update(t, !0),
        stop: () => Ot(t),
        now: () => Ce.isProcessing ? Ce.timestamp : performance.now()
    }
}
  , Nd = 2e4;
function Rd(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Nd; )
        t += n,
        r = e.next(t);
    return t >= Nd ? 1 / 0 : t
}
const xw = {
    decay: bd,
    inertia: bd,
    tween: qi,
    keyframes: qi,
    spring: Wm
};
function Zi({autoplay: e=!0, delay: t=0, driver: n=yw, keyframes: r, type: o="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: a="loop", onPlay: l, onStop: u, onComplete: c, onUpdate: d, ...f}) {
    let h = 1, y = !1, v, S;
    const g = () => {
        S = new Promise(O => {
            v = O
        }
        )
    }
    ;
    g();
    let p;
    const m = xw[o] || qi;
    let w;
    m !== qi && typeof r[0] != "number" && (w = Bm([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const C = m({
        ...f,
        keyframes: r
    });
    let E;
    a === "mirror" && (E = m({
        ...f,
        keyframes: [...r].reverse(),
        velocity: -(f.velocity || 0)
    }));
    let P = "idle"
      , k = null
      , L = null
      , j = null;
    C.calculatedDuration === null && i && (C.calculatedDuration = Rd(C));
    const {calculatedDuration: W} = C;
    let D = 1 / 0
      , re = 1 / 0;
    W !== null && (D = W + s,
    re = D * (i + 1) - s);
    let R = 0;
    const J = O => {
        if (L === null)
            return;
        h > 0 && (L = Math.min(L, O)),
        h < 0 && (L = Math.min(O - re / h, L)),
        k !== null ? R = k : R = Math.round(O - L) * h;
        const U = R - t * (h >= 0 ? 1 : -1)
          , G = h >= 0 ? U < 0 : U > re;
        R = Math.max(U, 0),
        P === "finished" && k === null && (R = re);
        let Fe = R
          , zn = C;
        if (i) {
            const As = Math.min(R, re) / D;
            let _o = Math.floor(As)
              , pn = As % 1;
            !pn && As >= 1 && (pn = 1),
            pn === 1 && _o--,
            _o = Math.min(_o, i + 1),
            !!(_o % 2) && (a === "reverse" ? (pn = 1 - pn,
            s && (pn -= s / D)) : a === "mirror" && (zn = E)),
            Fe = sn(0, 1, pn) * D
        }
        const ze = G ? {
            done: !1,
            value: r[0]
        } : zn.next(Fe);
        w && (ze.value = w(ze.value));
        let {done: fn} = ze;
        !G && W !== null && (fn = h >= 0 ? R >= re : R <= 0);
        const iv = k === null && (P === "finished" || P === "running" && fn);
        return d && d(ze.value),
        iv && b(),
        ze
    }
      , B = () => {
        p && p.stop(),
        p = void 0
    }
      , ce = () => {
        P = "idle",
        B(),
        v(),
        g(),
        L = j = null
    }
      , b = () => {
        P = "finished",
        c && c(),
        B(),
        v()
    }
      , M = () => {
        if (y)
            return;
        p || (p = n(J));
        const O = p.now();
        l && l(),
        k !== null ? L = O - k : (!L || P === "finished") && (L = O),
        P === "finished" && g(),
        j = L,
        k = null,
        P = "running",
        p.start()
    }
    ;
    e && M();
    const V = {
        then(O, U) {
            return S.then(O, U)
        },
        get time() {
            return Nt(R)
        },
        set time(O) {
            O = nn(O),
            R = O,
            k !== null || !p || h === 0 ? k = O : L = p.now() - O / h
        },
        get duration() {
            const O = C.calculatedDuration === null ? Rd(C) : C.calculatedDuration;
            return Nt(O)
        },
        get speed() {
            return h
        },
        set speed(O) {
            O === h || !p || (h = O,
            V.time = Nt(R))
        },
        get state() {
            return P
        },
        play: M,
        pause: () => {
            P = "paused",
            k = R
        }
        ,
        stop: () => {
            y = !0,
            P !== "idle" && (P = "idle",
            u && u(),
            ce())
        }
        ,
        cancel: () => {
            j !== null && J(j),
            ce()
        }
        ,
        complete: () => {
            P = "finished"
        }
        ,
        sample: O => (L = 0,
        J(O))
    };
    return V
}
function ww(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Sw = ww( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Tw = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , ni = 10
  , Cw = 2e4
  , Pw = (e, t) => t.type === "spring" || e === "backgroundColor" || !Sm(t.ease);
function Ew(e, t, {onUpdate: n, onComplete: r, ...o}) {
    if (!(Sw() && Tw.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
        return !1;
    let s = !1, a, l, u = !1;
    const c = () => {
        l = new Promise(m => {
            a = m
        }
        )
    }
    ;
    c();
    let {keyframes: d, duration: f=300, ease: h, times: y} = o;
    if (Pw(t, o)) {
        const m = Zi({
            ...o,
            repeat: 0,
            delay: 0
        });
        let w = {
            done: !1,
            value: d[0]
        };
        const C = [];
        let E = 0;
        for (; !w.done && E < Cw; )
            w = m.sample(E),
            C.push(w.value),
            E += ni;
        y = void 0,
        d = C,
        f = E - ni,
        h = "linear"
    }
    const v = Dx(e.owner.current, t, d, {
        ...o,
        duration: f,
        ease: h,
        times: y
    })
      , S = () => {
        u = !1,
        v.cancel()
    }
      , g = () => {
        u = !0,
        Z.update(S),
        a(),
        c()
    }
    ;
    return v.onfinish = () => {
        u || (e.set(_x(d, o)),
        r && r(),
        g())
    }
    ,
    {
        then(m, w) {
            return l.then(m, w)
        },
        attachTimeline(m) {
            return v.timeline = m,
            v.onfinish = null,
            ue
        },
        get time() {
            return Nt(v.currentTime || 0)
        },
        set time(m) {
            v.currentTime = nn(m)
        },
        get speed() {
            return v.playbackRate
        },
        set speed(m) {
            v.playbackRate = m
        },
        get duration() {
            return Nt(f)
        },
        play: () => {
            s || (v.play(),
            Ot(S))
        }
        ,
        pause: () => v.pause(),
        stop: () => {
            if (s = !0,
            v.playState === "idle")
                return;
            const {currentTime: m} = v;
            if (m) {
                const w = Zi({
                    ...o,
                    autoplay: !1
                });
                e.setWithVelocity(w.sample(m - ni).value, w.sample(m).value, ni)
            }
            g()
        }
        ,
        complete: () => {
            u || v.finish()
        }
        ,
        cancel: g
    }
}
function kw({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
    const o = () => (n && n(e[e.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: ue,
        pause: ue,
        stop: ue,
        then: i => (i(),
        Promise.resolve()),
        cancel: ue,
        complete: ue
    });
    return t ? Zi({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: o
    }) : o()
}
const Aw = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , bw = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Nw = {
    type: "keyframes",
    duration: .8
}
  , Rw = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , Mw = (e, {keyframes: t}) => t.length > 2 ? Nw : Vn.has(e) ? e.startsWith("scale") ? bw(t[1]) : Aw : Rw
  , yl = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (an.test(t) || t === "0") && !t.startsWith("url("))
  , Lw = new Set(["brightness", "contrast", "saturate", "opacity"]);
function jw(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Cs) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let i = Lw.has(t) ? 1 : 0;
    return r !== n && (i *= 100),
    t + "(" + i + o + ")"
}
const Ow = /([a-z-]*)\(.*?\)/g
  , xl = {
    ...an,
    getAnimatableNone: e => {
        const t = e.match(Ow);
        return t ? t.map(jw).join(" ") : e
    }
}
  , Dw = {
    ...im,
    color: ke,
    backgroundColor: ke,
    outlineColor: ke,
    fill: ke,
    stroke: ke,
    borderColor: ke,
    borderTopColor: ke,
    borderRightColor: ke,
    borderBottomColor: ke,
    borderLeftColor: ke,
    filter: xl,
    WebkitFilter: xl
}
  , $u = e => Dw[e];
function Hm(e, t) {
    let n = $u(e);
    return n !== xl && (n = an),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Gm = e => /^0[^.\s]+$/.test(e);
function _w(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || Gm(e)
}
function Vw(e, t, n, r) {
    const o = yl(t, n);
    let i;
    Array.isArray(n) ? i = [...n] : i = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < i.length; u++)
        i[u] === null && (i[u] = u === 0 ? s : i[u - 1]),
        _w(i[u]) && l.push(u),
        typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (a = i[u]);
    if (o && l.length && a)
        for (let u = 0; u < l.length; u++) {
            const c = l[u];
            i[c] = Hm(t, a)
        }
    return i
}
function Iw({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
function Wu(e, t) {
    return e[t] || e.default || e
}
const Fw = {
    skipAnimations: !1
}
  , Hu = (e, t, n, r={}) => o => {
    const i = Wu(r, e) || {}
      , s = i.delay || r.delay || 0;
    let {elapsed: a=0} = r;
    a = a - nn(s);
    const l = Vw(t, e, n, i)
      , u = l[0]
      , c = l[l.length - 1]
      , d = yl(e, u)
      , f = yl(e, c);
    let h = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...i,
        delay: -a,
        onUpdate: y => {
            t.set(y),
            i.onUpdate && i.onUpdate(y)
        }
        ,
        onComplete: () => {
            o(),
            i.onComplete && i.onComplete()
        }
    };
    if (Iw(i) || (h = {
        ...h,
        ...Mw(e, h)
    }),
    h.duration && (h.duration = nn(h.duration)),
    h.repeatDelay && (h.repeatDelay = nn(h.repeatDelay)),
    !d || !f || Ox.current || i.type === !1 || Fw.skipAnimations)
        return kw(h);
    if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const y = Ew(t, e, h);
        if (y)
            return y
    }
    return Zi(h)
}
;
function Ji(e) {
    return !!(Ie(e) && e.add)
}
const Km = e => /^\-?\d*\.?\d+$/.test(e);
function Gu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Ku(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Yu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Gu(this.subscriptions, t),
        () => Ku(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const s = this.subscriptions[i];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const zw = e => !isNaN(parseFloat(e));
class Bw {
    constructor(t, n={}) {
        this.version = "10.18.0",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r, o=!0) => {
            this.prev = this.current,
            this.current = r;
            const {delta: i, timestamp: s} = Ce;
            this.lastUpdated !== s && (this.timeDelta = i,
            this.lastUpdated = s,
            Z.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = () => Z.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: r}) => {
            r !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = t,
        this.canTrackVelocity = zw(this.current),
        this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Yu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            Z.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = t,
        this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t),
        this.prev = t,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Um(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function xr(e, t) {
    return new Bw(e,t)
}
const Ym = e => t => t.test(e)
  , Uw = {
    test: e => e === "auto",
    parse: e => e
}
  , Qm = [In, _, xt, Ft, Y1, K1, Uw]
  , Dr = e => Qm.find(Ym(e))
  , $w = [...Qm, ke, an]
  , Ww = e => $w.find(Ym(e));
function Hw(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, xr(n))
}
function Gw(e, t) {
    const n = Es(e, t);
    let {transitionEnd: r={}, transition: o={}, ...i} = n ? e.makeTargetAnimatable(n, !1) : {};
    i = {
        ...i,
        ...r
    };
    for (const s in i) {
        const a = ux(i[s]);
        Hw(e, s, a)
    }
}
function Kw(e, t, n) {
    var r, o;
    const i = Object.keys(t).filter(a => !e.hasValue(a))
      , s = i.length;
    if (s)
        for (let a = 0; a < s; a++) {
            const l = i[a]
              , u = t[l];
            let c = null;
            Array.isArray(u) && (c = u[0]),
            c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]),
            c != null && (typeof c == "string" && (Km(c) || Gm(c)) ? c = parseFloat(c) : !Ww(c) && an.test(u) && (c = Hm(l, u)),
            e.addValue(l, xr(c, {
                owner: e
            })),
            n[l] === void 0 && (n[l] = c),
            c !== null && e.setBaseTarget(l, c))
        }
}
function Yw(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function Qw(e, t, n) {
    const r = {};
    for (const o in e) {
        const i = Yw(o, t);
        if (i !== void 0)
            r[o] = i;
        else {
            const s = n.getValue(o);
            s && (r[o] = s.get())
        }
    }
    return r
}
function Xw({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function qw(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n)
                return !0
    } else
        return n !== t
}
function Xm(e, t, {delay: n=0, transitionOverride: r, type: o}={}) {
    let {transition: i=e.getDefaultTransition(), transitionEnd: s, ...a} = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (i = r);
    const u = []
      , c = o && e.animationState && e.animationState.getState()[o];
    for (const d in a) {
        const f = e.getValue(d)
          , h = a[d];
        if (!f || h === void 0 || c && Xw(c, d))
            continue;
        const y = {
            delay: n,
            elapsed: 0,
            ...Wu(i || {}, d)
        };
        if (window.HandoffAppearAnimations) {
            const g = e.getProps()[qh];
            if (g) {
                const p = window.HandoffAppearAnimations(g, d, f, Z);
                p !== null && (y.elapsed = p,
                y.isHandoff = !0)
            }
        }
        let v = !y.isHandoff && !qw(f, h);
        if (y.type === "spring" && (f.getVelocity() || y.velocity) && (v = !1),
        f.animation && (v = !1),
        v)
            continue;
        f.start(Hu(d, f, h, e.shouldReduceMotion && Vn.has(d) ? {
            type: !1
        } : y));
        const S = f.animation;
        Ji(l) && (l.add(d),
        S.then( () => l.remove(d))),
        u.push(S)
    }
    return s && Promise.all(u).then( () => {
        s && Gw(e, s)
    }
    ),
    u
}
function wl(e, t, n={}) {
    const r = Es(e, t, n.custom);
    let {transition: o=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const i = r ? () => Promise.all(Xm(e, r, n)) : () => Promise.resolve()
      , s = e.variantChildren && e.variantChildren.size ? (l=0) => {
        const {delayChildren: u=0, staggerChildren: c, staggerDirection: d} = o;
        return Zw(e, t, u + l, c, d, n)
    }
    : () => Promise.resolve()
      , {when: a} = o;
    if (a) {
        const [l,u] = a === "beforeChildren" ? [i, s] : [s, i];
        return l().then( () => u())
    } else
        return Promise.all([i(), s(n.delay)])
}
function Zw(e, t, n=0, r=0, o=1, i) {
    const s = []
      , a = (e.variantChildren.size - 1) * r
      , l = o === 1 ? (u=0) => u * r : (u=0) => a - u * r;
    return Array.from(e.variantChildren).sort(Jw).forEach( (u, c) => {
        u.notify("AnimationStart", t),
        s.push(wl(u, t, {
            ...i,
            delay: n + l(c)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function Jw(e, t) {
    return e.sortNodePosition(t)
}
function eS(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => wl(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string")
        r = wl(e, t, n);
    else {
        const o = typeof t == "function" ? Es(e, t, n.custom) : t;
        r = Promise.all(Xm(e, o, n))
    }
    return r.then( () => e.notify("AnimationComplete", t))
}
const tS = [...Ru].reverse()
  , nS = Ru.length;
function rS(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => eS(e, n, r)))
}
function oS(e) {
    let t = rS(e);
    const n = sS();
    let r = !0;
    const o = (l, u) => {
        const c = Es(e, u);
        if (c) {
            const {transition: d, transitionEnd: f, ...h} = c;
            l = {
                ...l,
                ...h,
                ...f
            }
        }
        return l
    }
    ;
    function i(l) {
        t = l(e)
    }
    function s(l, u) {
        const c = e.getProps()
          , d = e.getVariantContext(!0) || {}
          , f = []
          , h = new Set;
        let y = {}
          , v = 1 / 0;
        for (let g = 0; g < nS; g++) {
            const p = tS[g]
              , m = n[p]
              , w = c[p] !== void 0 ? c[p] : d[p]
              , C = To(w)
              , E = p === u ? m.isActive : null;
            E === !1 && (v = g);
            let P = w === d[p] && w !== c[p] && C;
            if (P && r && e.manuallyAnimateOnMount && (P = !1),
            m.protectedKeys = {
                ...y
            },
            !m.isActive && E === null || !w && !m.prevProp || Ss(w) || typeof w == "boolean")
                continue;
            let L = iS(m.prevProp, w) || p === u && m.isActive && !P && C || g > v && C
              , j = !1;
            const W = Array.isArray(w) ? w : [w];
            let D = W.reduce(o, {});
            E === !1 && (D = {});
            const {prevResolvedValues: re={}} = m
              , R = {
                ...re,
                ...D
            }
              , J = B => {
                L = !0,
                h.has(B) && (j = !0,
                h.delete(B)),
                m.needsAnimating[B] = !0
            }
            ;
            for (const B in R) {
                const ce = D[B]
                  , b = re[B];
                if (y.hasOwnProperty(B))
                    continue;
                let M = !1;
                Qi(ce) && Qi(b) ? M = !xm(ce, b) : M = ce !== b,
                M ? ce !== void 0 ? J(B) : h.add(B) : ce !== void 0 && h.has(B) ? J(B) : m.protectedKeys[B] = !0
            }
            m.prevProp = w,
            m.prevResolvedValues = D,
            m.isActive && (y = {
                ...y,
                ...D
            }),
            r && e.blockInitialAnimation && (L = !1),
            L && (!P || j) && f.push(...W.map(B => ({
                animation: B,
                options: {
                    type: p,
                    ...l
                }
            })))
        }
        if (h.size) {
            const g = {};
            h.forEach(p => {
                const m = e.getBaseTarget(p);
                m !== void 0 && (g[p] = m)
            }
            ),
            f.push({
                animation: g
            })
        }
        let S = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (S = !1),
        r = !1,
        S ? t(f) : Promise.resolve()
    }
    function a(l, u, c) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
            var y;
            return (y = h.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const f = s(c, l);
        for (const h in n)
            n[h].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n
    }
}
function iS(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !xm(t, e) : !1
}
function hn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function sS() {
    return {
        animate: hn(!0),
        whileInView: hn(),
        whileHover: hn(),
        whileTap: hn(),
        whileDrag: hn(),
        whileFocus: hn(),
        exit: hn()
    }
}
class aS extends dn {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = oS(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        this.unmount(),
        Ss(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let lS = 0;
class uS extends dn {
    constructor() {
        super(...arguments),
        this.id = lS++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n, custom: r} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === o)
            return;
        const i = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const cS = {
    animation: {
        Feature: aS
    },
    exit: {
        Feature: uS
    }
}
  , Md = (e, t) => Math.abs(e - t);
function dS(e, t) {
    const n = Md(e.x, t.x)
      , r = Md(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class qm {
    constructor(t, n, {transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const d = ca(this.lastMoveEventInfo, this.history)
              , f = this.startEvent !== null
              , h = dS(d.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!f && !h)
                return;
            const {point: y} = d
              , {timestamp: v} = Ce;
            this.history.push({
                ...y,
                timestamp: v
            });
            const {onStart: S, onMove: g} = this.handlers;
            f || (S && S(this.lastMoveEvent, d),
            this.startEvent = this.lastMoveEvent),
            g && g(this.lastMoveEvent, d)
        }
        ,
        this.handlePointerMove = (d, f) => {
            this.lastMoveEvent = d,
            this.lastMoveEventInfo = ua(f, this.transformPagePoint),
            Z.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (d, f) => {
            this.end();
            const {onEnd: h, onSessionEnd: y, resumeAnimation: v} = this.handlers;
            if (this.dragSnapToOrigin && v && v(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = ca(d.type === "pointercancel" ? this.lastMoveEventInfo : ua(f, this.transformPagePoint), this.history);
            this.startEvent && h && h(d, S),
            y && y(d, S)
        }
        ,
        !hm(t))
            return;
        this.dragSnapToOrigin = i,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = o || window;
        const s = Ps(t)
          , a = ua(s, this.transformPagePoint)
          , {point: l} = a
          , {timestamp: u} = Ce;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(t, ca(a, this.history)),
        this.removeListeners = tn(bt(this.contextWindow, "pointermove", this.handlePointerMove), bt(this.contextWindow, "pointerup", this.handlePointerUp), bt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Ot(this.updatePoint)
    }
}
function ua(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Ld(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function ca({point: e}, t) {
    return {
        point: e,
        delta: Ld(e, Zm(t)),
        offset: Ld(e, fS(t)),
        velocity: pS(t, .1)
    }
}
function fS(e) {
    return e[0]
}
function Zm(e) {
    return e[e.length - 1]
}
function pS(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const o = Zm(e);
    for (; n >= 0 && (r = e[n],
    !(o.timestamp - r.timestamp > nn(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const i = Nt(o.timestamp - r.timestamp);
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function Ge(e) {
    return e.max - e.min
}
function Sl(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function jd(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = ie(t.min, t.max, e.origin),
    e.scale = Ge(n) / Ge(t),
    (Sl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = ie(n.min, n.max, e.origin) - e.originPoint,
    (Sl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function to(e, t, n, r) {
    jd(e.x, t.x, n.x, r ? r.originX : void 0),
    jd(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Od(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ge(t)
}
function hS(e, t, n) {
    Od(e.x, t.x, n.x),
    Od(e.y, t.y, n.y)
}
function Dd(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ge(t)
}
function no(e, t, n) {
    Dd(e.x, t.x, n.x),
    Dd(e.y, t.y, n.y)
}
function mS(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? ie(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ie(n, e, r.max) : Math.min(e, n)),
    e
}
function _d(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function gS(e, {top: t, left: n, bottom: r, right: o}) {
    return {
        x: _d(e.x, n, o),
        y: _d(e.y, t, r)
    }
}
function Vd(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function vS(e, t) {
    return {
        x: Vd(e.x, t.x),
        y: Vd(e.y, t.y)
    }
}
function yS(e, t) {
    let n = .5;
    const r = Ge(e)
      , o = Ge(t);
    return o > r ? n = Po(t.min, t.max - r, e.min) : r > o && (n = Po(e.min, e.max - o, t.min)),
    sn(0, 1, n)
}
function xS(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Tl = .35;
function wS(e=Tl) {
    return e === !1 ? e = 0 : e === !0 && (e = Tl),
    {
        x: Id(e, "left", "right"),
        y: Id(e, "top", "bottom")
    }
}
function Id(e, t, n) {
    return {
        min: Fd(e, t),
        max: Fd(e, n)
    }
}
function Fd(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const zd = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , rr = () => ({
    x: zd(),
    y: zd()
})
  , Bd = () => ({
    min: 0,
    max: 0
})
  , fe = () => ({
    x: Bd(),
    y: Bd()
});
function qe(e) {
    return [e("x"), e("y")]
}
function Jm({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function SS({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function TS(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function da(e) {
    return e === void 0 || e === 1
}
function Cl({scale: e, scaleX: t, scaleY: n}) {
    return !da(e) || !da(t) || !da(n)
}
function vn(e) {
    return Cl(e) || eg(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function eg(e) {
    return Ud(e.x) || Ud(e.y)
}
function Ud(e) {
    return e && e !== "0%"
}
function es(e, t, n) {
    const r = e - n
      , o = t * r;
    return n + o
}
function $d(e, t, n, r, o) {
    return o !== void 0 && (e = es(e, o, r)),
    es(e, n, r) + t
}
function Pl(e, t=0, n=1, r, o) {
    e.min = $d(e.min, t, n, r, o),
    e.max = $d(e.max, t, n, r, o)
}
function tg(e, {x: t, y: n}) {
    Pl(e.x, t.translate, t.scale, t.originPoint),
    Pl(e.y, n.translate, n.scale, n.originPoint)
}
function CS(e, t, n, r=!1) {
    const o = n.length;
    if (!o)
        return;
    t.x = t.y = 1;
    let i, s;
    for (let a = 0; a < o; a++) {
        i = n[a],
        s = i.projectionDelta;
        const l = i.instance;
        l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && or(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        tg(e, s)),
        r && vn(i.latestValues) && or(e, i.latestValues))
    }
    t.x = Wd(t.x),
    t.y = Wd(t.y)
}
function Wd(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function Ut(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Hd(e, t, [n,r,o]) {
    const i = t[o] !== void 0 ? t[o] : .5
      , s = ie(e.min, e.max, i);
    Pl(e, t[n], t[r], s, t.scale)
}
const PS = ["x", "scaleX", "originX"]
  , ES = ["y", "scaleY", "originY"];
function or(e, t) {
    Hd(e.x, t, PS),
    Hd(e.y, t, ES)
}
function ng(e, t) {
    return Jm(TS(e.getBoundingClientRect(), t))
}
function kS(e, t, n) {
    const r = ng(e, n)
      , {scroll: o} = t;
    return o && (Ut(r.x, o.offset.x),
    Ut(r.y, o.offset.y)),
    r
}
const rg = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , AS = new WeakMap;
class bS {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = fe(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const o = c => {
            const {dragSnapToOrigin: d} = this.getProps();
            d ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Ps(c, "page").point)
        }
          , i = (c, d) => {
            const {drag: f, dragPropagation: h, onDragStart: y} = this.getProps();
            if (f && !h && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = gm(f),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            qe(S => {
                let g = this.getAxisMotionValue(S).get() || 0;
                if (xt.test(g)) {
                    const {projection: p} = this.visualElement;
                    if (p && p.layout) {
                        const m = p.layout.layoutBox[S];
                        m && (g = Ge(m) * (parseFloat(g) / 100))
                    }
                }
                this.originPoint[S] = g
            }
            ),
            y && Z.update( () => y(c, d), !1, !0);
            const {animationState: v} = this.visualElement;
            v && v.setActive("whileDrag", !0)
        }
          , s = (c, d) => {
            const {dragPropagation: f, dragDirectionLock: h, onDirectionLock: y, onDrag: v} = this.getProps();
            if (!f && !this.openGlobalLock)
                return;
            const {offset: S} = d;
            if (h && this.currentDirection === null) {
                this.currentDirection = NS(S),
                this.currentDirection !== null && y && y(this.currentDirection);
                return
            }
            this.updateAxis("x", d.point, S),
            this.updateAxis("y", d.point, S),
            this.visualElement.render(),
            v && v(c, d)
        }
          , a = (c, d) => this.stop(c, d)
          , l = () => qe(c => {
            var d;
            return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new qm(t,{
            onSessionStart: o,
            onStart: i,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: rg(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: o} = n;
        this.startAnimation(o);
        const {onDragEnd: i} = this.getProps();
        i && Z.update( () => i(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: o} = this.getProps();
        if (!r || !ri(t, o, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = mS(s, this.constraints[t], this.elastic[t])),
        i.set(s)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , i = this.constraints;
        n && tr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = gS(o.layoutBox, n) : this.constraints = !1,
        this.elastic = wS(r),
        i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && qe(s => {
            this.getAxisMotionValue(s) && (this.constraints[s] = xS(o.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !tr(t))
            return !1;
        const r = t.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const i = kS(r, o.root, this.visualElement.getTransformPagePoint());
        let s = vS(o.layout.layoutBox, i);
        if (n) {
            const a = n(SS(s));
            this.hasMutatedConstraints = !!a,
            a && (s = Jm(a))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: s, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = qe(c => {
            if (!ri(c, n, this.currentDirection))
                return;
            let d = l && l[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const f = o ? 200 : 1e6
              , h = o ? 40 : 1e7
              , y = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...d
            };
            return this.startAxisValueAnimation(c, y)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(Hu(t, r, 0, n))
    }
    stopAnimation() {
        qe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        qe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase()
          , r = this.visualElement.getProps()
          , o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        qe(n => {
            const {drag: r} = this.getProps();
            if (!ri(n, r, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: s, max: a} = o.layout.layoutBox[n];
                i.set(t[n] - ie(s, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!tr(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        qe(s => {
            const a = this.getAxisMotionValue(s);
            if (a) {
                const l = a.get();
                o[s] = yS({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: i} = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        qe(s => {
            if (!ri(s, t, null))
                return;
            const a = this.getAxisMotionValue(s)
              , {min: l, max: u} = this.constraints[s];
            a.set(ie(l, u, o[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        AS.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = bt(t, "pointerdown", l => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(l)
        }
        )
          , r = () => {
            const {dragConstraints: l} = this.getProps();
            tr(l) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , i = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        r();
        const s = kt(window, "resize", () => this.scalePositionWithinConstraints())
          , a = o.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: u}) => {
            this.isDragging && u && (qe(c => {
                const d = this.getAxisMotionValue(c);
                d && (this.originPoint[c] += l[c].translate,
                d.set(d.get() + l[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            s(),
            n(),
            i(),
            a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: o=!1, dragConstraints: i=!1, dragElastic: s=Tl, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: a
        }
    }
}
function ri(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function NS(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class RS extends dn {
    constructor(t) {
        super(t),
        this.removeGroupControls = ue,
        this.removeListeners = ue,
        this.controls = new bS(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || ue
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Gd = e => (t, n) => {
    e && Z.update( () => e(t, n))
}
;
class MS extends dn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = ue
    }
    onPointerDown(t) {
        this.session = new qm(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: rg(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: Gd(t),
            onStart: Gd(n),
            onMove: r,
            onEnd: (i, s) => {
                delete this.session,
                o && Z.update( () => o(i, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = bt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function LS() {
    const e = T.useContext(bu);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , o = T.useId();
    return T.useEffect( () => r(o), []),
    !t && n ? [!1, () => n && n(o)] : [!0]
}
const Si = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Kd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const _r = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (_.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Kd(e, t.target.x)
          , r = Kd(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , jS = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , o = an.parse(e);
        if (o.length > 5)
            return r;
        const i = an.createTransformer(e)
          , s = typeof o[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        o[0 + s] /= a,
        o[1 + s] /= l;
        const u = ie(a, l, .5);
        return typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
    }
};
class OS extends K.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o} = this.props
          , {projection: i} = t;
        z1(DS),
        i && (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Si.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: o, isPresent: i} = this.props
          , s = r.projection;
        return s && (s.isPresent = i,
        o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== i && (i ? s.promote() : s.relegate() || Z.postRender( () => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        queueMicrotask( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: o} = t;
        o && (o.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(o),
        r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function og(e) {
    const [t,n] = LS()
      , r = T.useContext(Jh);
    return K.createElement(OS, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: T.useContext(em),
        isPresent: t,
        safeToRemove: n
    })
}
const DS = {
    borderRadius: {
        ..._r,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: _r,
    borderTopRightRadius: _r,
    borderBottomLeftRadius: _r,
    borderBottomRightRadius: _r,
    boxShadow: jS
}
  , ig = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , _S = ig.length
  , Yd = e => typeof e == "string" ? parseFloat(e) : e
  , Qd = e => typeof e == "number" || _.test(e);
function VS(e, t, n, r, o, i) {
    o ? (e.opacity = ie(0, n.opacity !== void 0 ? n.opacity : 1, IS(r)),
    e.opacityExit = ie(t.opacity !== void 0 ? t.opacity : 1, 0, FS(r))) : i && (e.opacity = ie(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < _S; s++) {
        const a = `border${ig[s]}Radius`;
        let l = Xd(t, a)
          , u = Xd(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || Qd(l) === Qd(u) ? (e[a] = Math.max(ie(Yd(l), Yd(u), r), 0),
        (xt.test(u) || xt.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = ie(t.rotate || 0, n.rotate || 0, r))
}
function Xd(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const IS = sg(0, .5, bm)
  , FS = sg(.5, .95, ue);
function sg(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Po(e, t, r))
}
function qd(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Xe(e, t) {
    qd(e.x, t.x),
    qd(e.y, t.y)
}
function Zd(e, t, n, r, o) {
    return e -= t,
    e = es(e, 1 / n, r),
    o !== void 0 && (e = es(e, 1 / o, r)),
    e
}
function zS(e, t=0, n=1, r=.5, o, i=e, s=e) {
    if (xt.test(t) && (t = parseFloat(t),
    t = ie(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let a = ie(i.min, i.max, r);
    e === i && (a -= t),
    e.min = Zd(e.min, t, n, a, o),
    e.max = Zd(e.max, t, n, a, o)
}
function Jd(e, t, [n,r,o], i, s) {
    zS(e, t[n], t[r], t[o], t.scale, i, s)
}
const BS = ["x", "scaleX", "originX"]
  , US = ["y", "scaleY", "originY"];
function ef(e, t, n, r) {
    Jd(e.x, t, BS, n ? n.x : void 0, r ? r.x : void 0),
    Jd(e.y, t, US, n ? n.y : void 0, r ? r.y : void 0)
}
function tf(e) {
    return e.translate === 0 && e.scale === 1
}
function ag(e) {
    return tf(e.x) && tf(e.y)
}
function $S(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function lg(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function nf(e) {
    return Ge(e.x) / Ge(e.y)
}
class WS {
    constructor() {
        this.members = []
    }
    add(t) {
        Gu(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Ku(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0)
            return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const i = this.members[o];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: o} = t.options;
            o === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function rf(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x
      , i = e.y.translate / t.y;
    if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {rotate: l, rotateX: u, rotateY: c} = n;
        l && (r += `rotate(${l}deg) `),
        u && (r += `rotateX(${u}deg) `),
        c && (r += `rotateY(${c}deg) `)
    }
    const s = e.x.scale * t.x
      , a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`),
    r || "none"
}
const HS = (e, t) => e.depth - t.depth;
class GS {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Gu(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Ku(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(HS),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function KS(e, t) {
    const n = performance.now()
      , r = ({timestamp: o}) => {
        const i = o - n;
        i >= t && (Ot(r),
        e(i - t))
    }
    ;
    return Z.read(r, !0),
    () => Ot(r)
}
function YS(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function QS(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function XS(e, t, n) {
    const r = Ie(e) ? e : xr(e);
    return r.start(Hu("", r, t, n)),
    r.animation
}
const of = ["", "X", "Y", "Z"]
  , qS = {
    visibility: "hidden"
}
  , sf = 1e3;
let ZS = 0;
const yn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function ug({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o}) {
    return class {
        constructor(s={}, a=t == null ? void 0 : t()) {
            this.id = ZS++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                yn.totalNodes = yn.resolvedTargetDeltas = yn.recalculatedProjection = 0,
                this.nodes.forEach(tT),
                this.nodes.forEach(sT),
                this.nodes.forEach(aT),
                this.nodes.forEach(nT),
                YS(yn)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new GS)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Yu),
            this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = QS(s),
            this.instance = s;
            const {layoutId: l, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (u || l) && (this.isLayoutDirty = !0),
            e) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                    d && d(),
                    d = KS(f, 250),
                    Si.hasAnimatedSinceResize && (Si.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(lf))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: y}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || c.getDefaultTransition() || fT
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: g} = c.getProps()
                  , p = !this.targetLayout || !lg(this.targetLayout, y) || h
                  , m = !f && h;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || f && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(d, m);
                    const w = {
                        ...Wu(v, "layout"),
                        onPlay: S,
                        onComplete: g
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    f || lf(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Ot(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(lT),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(af);
                return
            }
            this.isUpdating || this.nodes.forEach(oT),
            this.isUpdating = !1,
            this.nodes.forEach(iT),
            this.nodes.forEach(JS),
            this.nodes.forEach(eT),
            this.clearAllSnapshots();
            const a = performance.now();
            Ce.delta = sn(0, 1e3 / 60, a - Ce.timestamp),
            Ce.timestamp = a,
            Ce.isProcessing = !0,
            ta.update.process(Ce),
            ta.preRender.process(Ce),
            ta.render.process(Ce),
            Ce.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(rT),
            this.sharedNodes.forEach(uT)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Z.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Z.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = fe(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
            a && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!o)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform
              , a = this.projectionDelta && !ag(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && (a || vn(this.latestValues) || c) && (o(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
            pT(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: s} = this.options;
            if (!s)
                return fe();
            const a = s.measureViewportBox()
              , {scroll: l} = this.root;
            return l && (Ut(a.x, l.offset.x),
            Ut(a.y, l.offset.y)),
            a
        }
        removeElementScroll(s) {
            const a = fe();
            Xe(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l]
                  , {scroll: c, options: d} = u;
                if (u !== this.root && c && d.layoutScroll) {
                    if (c.isRoot) {
                        Xe(a, s);
                        const {scroll: f} = this.root;
                        f && (Ut(a.x, -f.offset.x),
                        Ut(a.y, -f.offset.y))
                    }
                    Ut(a.x, c.offset.x),
                    Ut(a.y, c.offset.y)
                }
            }
            return a
        }
        applyTransform(s, a=!1) {
            const l = fe();
            Xe(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && or(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                vn(c.latestValues) && or(l, c.latestValues)
            }
            return vn(this.latestValues) && or(l, this.latestValues),
            l
        }
        removeTransform(s) {
            const a = fe();
            Xe(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !vn(u.latestValues))
                    continue;
                Cl(u.latestValues) && u.updateSnapshot();
                const c = fe()
                  , d = u.measurePageBox();
                Xe(c, d),
                ef(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return vn(this.latestValues) && ef(a, this.latestValues),
            a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ce.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: d, layoutId: f} = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = Ce.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const h = this.getClosestProjectingParent();
                    h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = fe(),
                    this.relativeTargetOrigin = fe(),
                    no(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
                    Xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = fe(),
                    this.targetWithTransforms = fe()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    hS(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Xe(this.target, this.layout.layoutBox),
                    tg(this.target, this.targetDelta)) : Xe(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const h = this.getClosestProjectingParent();
                        h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = fe(),
                        this.relativeTargetOrigin = fe(),
                        no(this.relativeTargetOrigin, this.target, h.target),
                        Xe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    yn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Cl(this.parent.latestValues) || eg(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead()
              , l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === Ce.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: d} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || d))
                return;
            Xe(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , h = this.treeScale.y;
            CS(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const {target: y} = a;
            if (!y) {
                this.projectionTransform && (this.projectionDelta = rr(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = rr(),
            this.projectionDeltaWithTransform = rr());
            const v = this.projectionTransform;
            to(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
            this.projectionTransform = rf(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== v || this.treeScale.x !== f || this.treeScale.y !== h) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", y)),
            yn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = rr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = fe()
              , h = l ? l.source : void 0
              , y = this.layout ? this.layout.source : void 0
              , v = h !== y
              , S = this.getStack()
              , g = !S || S.members.length <= 1
              , p = !!(v && !g && this.options.crossfade === !0 && !this.path.some(dT));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = w => {
                const C = w / 1e3;
                uf(d.x, s.x, C),
                uf(d.y, s.y, C),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (no(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                cT(this.relativeTarget, this.relativeTargetOrigin, f, C),
                m && $S(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                m || (m = fe()),
                Xe(m, this.relativeTarget)),
                v && (this.animationValues = c,
                VS(c, u, this.latestValues, C, p, g)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Ot(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Z.update( () => {
                Si.hasAnimatedSinceResize = !0,
                this.currentAnimation = XS(0, sf, {
                    ...s,
                    onUpdate: a => {
                        this.mixTargetDelta(a),
                        s.onUpdate && s.onUpdate(a)
                    }
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(sf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && cg(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || fe();
                    const d = Ge(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = Ge(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                    l.y.max = l.y.min + f
                }
                Xe(a, l),
                or(a, c),
                to(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new WS),
            this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: a} = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: a} = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let a = !1;
            const {latestValues: l} = s;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0),
            !a)
                return;
            const u = {};
            for (let c = 0; c < of.length; c++) {
                const d = "rotate" + of[c];
                l[d] && (u[d] = l[d],
                s.setStaticValue(d, 0))
            }
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return qS;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = wi(s == null ? void 0 : s.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const v = {};
                return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                v.pointerEvents = wi(s == null ? void 0 : s.pointerEvents) || ""),
                this.hasProjected && !vn(this.latestValues) && (v.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                v
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
            u.transform = rf(this.projectionDeltaWithTransform, this.treeScale, f),
            c && (u.transform = c(f, u.transform));
            const {x: h, y} = this.projectionDelta;
            u.transformOrigin = `${h.origin * 100}% ${y.origin * 100}% 0`,
            d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const v in Ki) {
                if (f[v] === void 0)
                    continue;
                const {correct: S, applyTo: g} = Ki[v]
                  , p = u.transform === "none" ? f[v] : S(f[v], d);
                if (g) {
                    const m = g.length;
                    for (let w = 0; w < m; w++)
                        u[g[w]] = p
                } else
                    u[v] = p
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? wi(s == null ? void 0 : s.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(af),
            this.root.sharedNodes.clear()
        }
    }
}
function JS(e) {
    e.updateLayout()
}
function eT(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: o} = e.layout
          , {animationType: i} = e.options
          , s = n.source !== e.layout.source;
        i === "size" ? qe(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
              , h = Ge(f);
            f.min = r[d].min,
            f.max = f.min + h
        }
        ) : cg(i, n.layoutBox, r) && qe(d => {
            const f = s ? n.measuredBox[d] : n.layoutBox[d]
              , h = Ge(r[d]);
            f.max = f.min + h,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        }
        );
        const a = rr();
        to(a, r, n.layoutBox);
        const l = rr();
        s ? to(l, e.applyTransform(o, !0), n.measuredBox) : to(l, r, n.layoutBox);
        const u = !ag(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: h} = d;
                if (f && h) {
                    const y = fe();
                    no(y, n.layoutBox, f.layoutBox);
                    const v = fe();
                    no(v, r, h.layoutBox),
                    lg(y, v) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = v,
                    e.relativeTargetOrigin = y,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function tT(e) {
    yn.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function nT(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function rT(e) {
    e.clearSnapshot()
}
function af(e) {
    e.clearMeasurements()
}
function oT(e) {
    e.isLayoutDirty = !1
}
function iT(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function lf(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function sT(e) {
    e.resolveTargetDelta()
}
function aT(e) {
    e.calcProjection()
}
function lT(e) {
    e.resetRotation()
}
function uT(e) {
    e.removeLeadSnapshot()
}
function uf(e, t, n) {
    e.translate = ie(t.translate, 0, n),
    e.scale = ie(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function cf(e, t, n, r) {
    e.min = ie(t.min, n.min, r),
    e.max = ie(t.max, n.max, r)
}
function cT(e, t, n, r) {
    cf(e.x, t.x, n.x, r),
    cf(e.y, t.y, n.y, r)
}
function dT(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const fT = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , df = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e)
  , ff = df("applewebkit/") && !df("chrome/") ? Math.round : ue;
function pf(e) {
    e.min = ff(e.min),
    e.max = ff(e.max)
}
function pT(e) {
    pf(e.x),
    pf(e.y)
}
function cg(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Sl(nf(t), nf(n), .2)
}
const hT = ug({
    attachResizeListener: (e, t) => kt(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , fa = {
    current: void 0
}
  , dg = ug({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!fa.current) {
            const e = new hT({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            fa.current = e
        }
        return fa.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , mT = {
    pan: {
        Feature: MS
    },
    drag: {
        Feature: RS,
        ProjectionNode: dg,
        MeasureLayout: og
    }
}
  , gT = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function vT(e) {
    const t = gT.exec(e);
    if (!t)
        return [, ];
    const [,n,r] = t;
    return [n, r]
}
function El(e, t, n=1) {
    const [r,o] = vT(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return Km(s) ? parseFloat(s) : s
    } else
        return hl(o) ? El(o, t, n + 1) : o
}
function yT(e, {...t}, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.values.forEach(o => {
        const i = o.get();
        if (!hl(i))
            return;
        const s = El(i, r);
        s && o.set(s)
    }
    );
    for (const o in t) {
        const i = t[o];
        if (!hl(i))
            continue;
        const s = El(i, r);
        s && (t[o] = s,
        n || (n = {}),
        n[o] === void 0 && (n[o] = i))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const xT = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , fg = e => xT.has(e)
  , wT = e => Object.keys(e).some(fg)
  , hf = e => e === In || e === _
  , mf = (e, t) => parseFloat(e.split(", ")[t])
  , gf = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const o = r.match(/^matrix3d\((.+)\)$/);
    if (o)
        return mf(o[1], t);
    {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? mf(i[1], e) : 0
    }
}
  , ST = new Set(["x", "y", "z"])
  , TT = Mo.filter(e => !ST.has(e));
function CT(e) {
    const t = [];
    return TT.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t.length && e.render(),
    t
}
const wr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: gf(4, 13),
    y: gf(5, 14)
};
wr.translateX = wr.x;
wr.translateY = wr.y;
const PT = (e, t, n) => {
    const r = t.measureViewportBox()
      , o = t.current
      , i = getComputedStyle(o)
      , {display: s} = i
      , a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
    n.forEach(u => {
        a[u] = wr[u](r, i)
    }
    ),
    t.render();
    const l = t.measureViewportBox();
    return n.forEach(u => {
        const c = t.getValue(u);
        c && c.jump(a[u]),
        e[u] = wr[u](l, i)
    }
    ),
    e
}
  , ET = (e, t, n={}, r={}) => {
    t = {
        ...t
    },
    r = {
        ...r
    };
    const o = Object.keys(t).filter(fg);
    let i = []
      , s = !1;
    const a = [];
    if (o.forEach(l => {
        const u = e.getValue(l);
        if (!e.hasValue(l))
            return;
        let c = n[l]
          , d = Dr(c);
        const f = t[l];
        let h;
        if (Qi(f)) {
            const y = f.length
              , v = f[0] === null ? 1 : 0;
            c = f[v],
            d = Dr(c);
            for (let S = v; S < y && f[S] !== null; S++)
                h ? Fu(Dr(f[S]) === h) : h = Dr(f[S])
        } else
            h = Dr(f);
        if (d !== h)
            if (hf(d) && hf(h)) {
                const y = u.get();
                typeof y == "string" && u.set(parseFloat(y)),
                typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && h === _ && (t[l] = f.map(parseFloat))
            } else
                d != null && d.transform && (h != null && h.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(h.transform(c)) : t[l] = d.transform(f) : (s || (i = CT(e),
                s = !0),
                a.push(l),
                r[l] = r[l] !== void 0 ? r[l] : t[l],
                u.jump(f))
    }
    ),
    a.length) {
        const l = a.indexOf("height") >= 0 ? window.pageYOffset : null
          , u = PT(t, e, a);
        return i.length && i.forEach( ([c,d]) => {
            e.getValue(c).set(d)
        }
        ),
        e.render(),
        ws && l !== null && window.scrollTo({
            top: l
        }),
        {
            target: u,
            transitionEnd: r
        }
    } else
        return {
            target: t,
            transitionEnd: r
        }
}
;
function kT(e, t, n, r) {
    return wT(t) ? ET(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const AT = (e, t, n, r) => {
    const o = yT(e, t, r);
    return t = o.target,
    r = o.transitionEnd,
    kT(e, t, n, r)
}
  , kl = {
    current: null
}
  , pg = {
    current: !1
};
function bT() {
    if (pg.current = !0,
    !!ws)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => kl.current = e.matches;
            e.addListener(t),
            t()
        } else
            kl.current = !1
}
function NT(e, t, n) {
    const {willChange: r} = t;
    for (const o in t) {
        const i = t[o]
          , s = n[o];
        if (Ie(i))
            e.addValue(o, i),
            Ji(r) && r.add(o);
        else if (Ie(s))
            e.addValue(o, xr(i, {
                owner: e
            })),
            Ji(r) && r.remove(o);
        else if (s !== i)
            if (e.hasValue(o)) {
                const a = e.getValue(o);
                !a.hasAnimated && a.set(i)
            } else {
                const a = e.getStaticValue(o);
                e.addValue(o, xr(a !== void 0 ? a : i, {
                    owner: e
                }))
            }
    }
    for (const o in n)
        t[o] === void 0 && e.removeValue(o);
    return t
}
const vf = new WeakMap
  , hg = Object.keys(Co)
  , RT = hg.length
  , yf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , MT = Mu.length;
class LT {
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: i}, s={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => Z.render(this.render, !1, !0);
        const {latestValues: a, renderState: l} = i;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = l,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = s,
        this.isControllingVariants = Ts(n),
        this.isVariantNode = Zh(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: u, ...c} = this.scrapeMotionValuesFromProps(n, {});
        for (const d in c) {
            const f = c[d];
            a[d] !== void 0 && Ie(f) && (f.set(a[d], !1),
            Ji(u) && u.add(d))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
        vf.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        pg.current || bT(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : kl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        vf.delete(this.current),
        this.projection && this.projection.unmount(),
        Ot(this.notifyUpdate),
        Ot(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = Vn.has(t)
          , o = n.on("change", s => {
            this.latestValues[t] = s,
            this.props.onUpdate && Z.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , i = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            o(),
            i()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({children: t, ...n}, r, o, i) {
        let s, a;
        for (let l = 0; l < RT; l++) {
            const u = hg[l]
              , {isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: h} = Co[u];
            f && (s = f),
            c(n) && (!this.features[u] && d && (this.features[u] = new d(this)),
            h && (a = h))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
            this.projection = new s(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: l, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: h} = n;
            this.projection.setOptions({
                layoutId: l,
                layout: u,
                alwaysMeasureLayout: !!c || d && tr(d),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: i,
                layoutScroll: f,
                layoutRoot: h
            })
        }
        return a
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : fe()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n=!0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < yf.length; r++) {
            const o = yf[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const i = t["on" + o];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = NT(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < MT; r++) {
            const o = Mu[r]
              , i = this.props[o];
            (To(i) || i === !1) && (n[o] = i)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
        this.bindToMotionValue(t, n)),
        this.values.set(t, n),
        this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = xr(n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props
          , o = typeof r == "string" || typeof r == "object" ? (n = Iu(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && o !== void 0)
            return o;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Ie(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Yu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class mg extends LT {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    makeTargetAnimatableFromInstance({transition: t, transitionEnd: n, ...r}, {transformValues: o}, i) {
        let s = Qw(r, t || {}, this);
        if (o && (n && (n = o(n)),
        r && (r = o(r)),
        s && (s = o(s))),
        i) {
            Kw(this, r, s);
            const a = AT(this, r, s, n);
            n = a.transitionEnd,
            r = a.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function jT(e) {
    return window.getComputedStyle(e)
}
class OT extends mg {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (Vn.has(n)) {
            const r = $u(n);
            return r && r.default || 0
        } else {
            const r = jT(t)
              , o = (rm(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return ng(t, n)
    }
    build(t, n, r, o) {
        ju(t, n, r, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return Vu(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ie(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, o) {
        um(t, n, r, o)
    }
}
class DT extends mg {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Vn.has(n)) {
            const r = $u(n);
            return r && r.default || 0
        }
        return n = cm.has(n) ? n : Nu(n),
        t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return fe()
    }
    scrapeMotionValuesFromProps(t, n) {
        return fm(t, n)
    }
    build(t, n, r, o) {
        Du(t, n, r, this.isSVGTag, o.transformTemplate)
    }
    renderInstance(t, n, r, o) {
        dm(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = _u(t.tagName),
        super.mount(t)
    }
}
const _T = (e, t) => Lu(e) ? new DT(t,{
    enableHardwareAcceleration: !1
}) : new OT(t,{
    enableHardwareAcceleration: !0
})
  , VT = {
    layout: {
        ProjectionNode: dg,
        MeasureLayout: og
    }
}
  , IT = {
    ...cS,
    ...Rx,
    ...mT,
    ...VT
}
  , it = I1( (e, t) => vx(e, t, IT, _T));
var FT = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const zT = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Qe = (e, t) => {
    const n = T.forwardRef( ({color: r="currentColor", size: o=24, strokeWidth: i=2, absoluteStrokeWidth: s, children: a, ...l}, u) => T.createElement("svg", {
        ref: u,
        ...FT,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(i) * 24 / Number(o) : i,
        className: `lucide lucide-${zT(e)}`,
        ...l
    }, [...t.map( ([c,d]) => T.createElement(c, d)), ...(Array.isArray(a) ? a : [a]) || []]));
    return n.displayName = `${e}`,
    n
}
  , pa = Qe("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]])
  , BT = Qe("Bed", [["path", {
    d: "M2 4v16",
    key: "vw9hq8"
}], ["path", {
    d: "M2 8h18a2 2 0 0 1 2 2v10",
    key: "1dgv2r"
}], ["path", {
    d: "M2 17h20",
    key: "18nfp3"
}], ["path", {
    d: "M6 8v9",
    key: "1yriud"
}]])
  , xf = Qe("CheckCircle", [["path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
    key: "g774vq"
}], ["polyline", {
    points: "22 4 12 14.01 9 11.01",
    key: "6xbx8j"
}]])
  , UT = Qe("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]])
  , $T = Qe("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]])
  , WT = Qe("MapPin", [["path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
    key: "2oe9fu"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]])
  , HT = Qe("MessageSquare", [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]])
  , ha = Qe("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]])
  , GT = Qe("Sofa", [["path", {
    d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",
    key: "1dgpiv"
}], ["path", {
    d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",
    key: "u5qfb7"
}], ["path", {
    d: "M4 18v2",
    key: "jwo5n2"
}], ["path", {
    d: "M20 18v2",
    key: "1ar1qi"
}], ["path", {
    d: "M12 4v9",
    key: "oqhhn3"
}]])
  , KT = Qe("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]])
  , YT = Qe("Truck", [["path", {
    d: "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",
    key: "hs4xqm"
}], ["path", {
    d: "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",
    key: "11fp61"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}]])
  , QT = Qe("User", [["path", {
    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
    key: "975kel"
}], ["circle", {
    cx: "12",
    cy: "7",
    r: "4",
    key: "17ys0d"
}]])
  , XT = Qe("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
function gg(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = gg(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function vg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = gg(e)) && (r && (r += " "),
        r += t);
    return r
}
function qT() {
    for (var e = 0, t, n, r = ""; e < arguments.length; )
        (t = arguments[e++]) && (n = yg(t)) && (r && (r += " "),
        r += n);
    return r
}
function yg(e) {
    if (typeof e == "string")
        return e;
    for (var t, n = "", r = 0; r < e.length; r++)
        e[r] && (t = yg(e[r])) && (n && (n += " "),
        n += t);
    return n
}
var Qu = "-";
function ZT(e) {
    var t = eC(e)
      , n = e.conflictingClassGroups
      , r = e.conflictingClassGroupModifiers
      , o = r === void 0 ? {} : r;
    function i(a) {
        var l = a.split(Qu);
        return l[0] === "" && l.length !== 1 && l.shift(),
        xg(l, t) || JT(a)
    }
    function s(a, l) {
        var u = n[a] || [];
        return l && o[a] ? [].concat(u, o[a]) : u
    }
    return {
        getClassGroupId: i,
        getConflictingClassGroupIds: s
    }
}
function xg(e, t) {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    var n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? xg(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length !== 0) {
        var i = e.join(Qu);
        return (s = t.validators.find(function(a) {
            var l = a.validator;
            return l(i)
        })) == null ? void 0 : s.classGroupId
    }
}
var wf = /^\[(.+)\]$/;
function JT(e) {
    if (wf.test(e)) {
        var t = wf.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
function eC(e) {
    var t = e.theme
      , n = e.prefix
      , r = {
        nextPart: new Map,
        validators: []
    }
      , o = nC(Object.entries(e.classGroups), n);
    return o.forEach(function(i) {
        var s = i[0]
          , a = i[1];
        Al(a, r, s, t)
    }),
    r
}
function Al(e, t, n, r) {
    e.forEach(function(o) {
        if (typeof o == "string") {
            var i = o === "" ? t : Sf(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (tC(o)) {
                Al(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach(function(s) {
            var a = s[0]
              , l = s[1];
            Al(l, Sf(t, a), n, r)
        })
    })
}
function Sf(e, t) {
    var n = e;
    return t.split(Qu).forEach(function(r) {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }),
    n
}
function tC(e) {
    return e.isThemeGetter
}
function nC(e, t) {
    return t ? e.map(function(n) {
        var r = n[0]
          , o = n[1]
          , i = o.map(function(s) {
            return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(a) {
                var l = a[0]
                  , u = a[1];
                return [t + l, u]
            })) : s
        });
        return [r, i]
    }) : e
}
function rC(e) {
    if (e < 1)
        return {
            get: function() {},
            set: function() {}
        };
    var t = 0
      , n = new Map
      , r = new Map;
    function o(i, s) {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    return {
        get: function(s) {
            var a = n.get(s);
            if (a !== void 0)
                return a;
            if ((a = r.get(s)) !== void 0)
                return o(s, a),
                a
        },
        set: function(s, a) {
            n.has(s) ? n.set(s, a) : o(s, a)
        }
    }
}
var wg = "!";
function oC(e) {
    var t = e.separator || ":"
      , n = t.length === 1
      , r = t[0]
      , o = t.length;
    return function(s) {
        for (var a = [], l = 0, u = 0, c, d = 0; d < s.length; d++) {
            var f = s[d];
            if (l === 0) {
                if (f === r && (n || s.slice(d, d + o) === t)) {
                    a.push(s.slice(u, d)),
                    u = d + o;
                    continue
                }
                if (f === "/") {
                    c = d;
                    continue
                }
            }
            f === "[" ? l++ : f === "]" && l--
        }
        var h = a.length === 0 ? s : s.substring(u)
          , y = h.startsWith(wg)
          , v = y ? h.substring(1) : h
          , S = c && c > u ? c - u : void 0;
        return {
            modifiers: a,
            hasImportantModifier: y,
            baseClassName: v,
            maybePostfixModifierPosition: S
        }
    }
}
function iC(e) {
    if (e.length <= 1)
        return e;
    var t = []
      , n = [];
    return e.forEach(function(r) {
        var o = r[0] === "[";
        o ? (t.push.apply(t, n.sort().concat([r])),
        n = []) : n.push(r)
    }),
    t.push.apply(t, n.sort()),
    t
}
function sC(e) {
    return {
        cache: rC(e.cacheSize),
        splitModifiers: oC(e),
        ...ZT(e)
    }
}
var aC = /\s+/;
function lC(e, t) {
    var n = t.splitModifiers
      , r = t.getClassGroupId
      , o = t.getConflictingClassGroupIds
      , i = new Set;
    return e.trim().split(aC).map(function(s) {
        var a = n(s)
          , l = a.modifiers
          , u = a.hasImportantModifier
          , c = a.baseClassName
          , d = a.maybePostfixModifierPosition
          , f = r(d ? c.substring(0, d) : c)
          , h = !!d;
        if (!f) {
            if (!d)
                return {
                    isTailwindClass: !1,
                    originalClassName: s
                };
            if (f = r(c),
            !f)
                return {
                    isTailwindClass: !1,
                    originalClassName: s
                };
            h = !1
        }
        var y = iC(l).join(":")
          , v = u ? y + wg : y;
        return {
            isTailwindClass: !0,
            modifierId: v,
            classGroupId: f,
            originalClassName: s,
            hasPostfixModifier: h
        }
    }).reverse().filter(function(s) {
        if (!s.isTailwindClass)
            return !0;
        var a = s.modifierId
          , l = s.classGroupId
          , u = s.hasPostfixModifier
          , c = a + l;
        return i.has(c) ? !1 : (i.add(c),
        o(l, u).forEach(function(d) {
            return i.add(a + d)
        }),
        !0)
    }).reverse().map(function(s) {
        return s.originalClassName
    }).join(" ")
}
function uC() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    var r, o, i, s = a;
    function a(u) {
        var c = t[0]
          , d = t.slice(1)
          , f = d.reduce(function(h, y) {
            return y(h)
        }, c());
        return r = sC(f),
        o = r.cache.get,
        i = r.cache.set,
        s = l,
        l(u)
    }
    function l(u) {
        var c = o(u);
        if (c)
            return c;
        var d = lC(u, r);
        return i(u, d),
        d
    }
    return function() {
        return s(qT.apply(null, arguments))
    }
}
function Q(e) {
    var t = function(r) {
        return r[e] || []
    };
    return t.isThemeGetter = !0,
    t
}
var Sg = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , cC = /^\d+\/\d+$/
  , dC = new Set(["px", "full", "screen"])
  , fC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , pC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , hC = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function st(e) {
    return Pn(e) || dC.has(e) || cC.test(e) || bl(e)
}
function bl(e) {
    return Fn(e, "length", wC)
}
function mC(e) {
    return Fn(e, "size", Tg)
}
function gC(e) {
    return Fn(e, "position", Tg)
}
function vC(e) {
    return Fn(e, "url", SC)
}
function oi(e) {
    return Fn(e, "number", Pn)
}
function Pn(e) {
    return !Number.isNaN(Number(e))
}
function yC(e) {
    return e.endsWith("%") && Pn(e.slice(0, -1))
}
function Vr(e) {
    return Tf(e) || Fn(e, "number", Tf)
}
function z(e) {
    return Sg.test(e)
}
function Ir() {
    return !0
}
function It(e) {
    return fC.test(e)
}
function xC(e) {
    return Fn(e, "", TC)
}
function Fn(e, t, n) {
    var r = Sg.exec(e);
    return r ? r[1] ? r[1] === t : n(r[2]) : !1
}
function wC(e) {
    return pC.test(e)
}
function Tg() {
    return !1
}
function SC(e) {
    return e.startsWith("url(")
}
function Tf(e) {
    return Number.isInteger(Number(e))
}
function TC(e) {
    return hC.test(e)
}
function CC() {
    var e = Q("colors")
      , t = Q("spacing")
      , n = Q("blur")
      , r = Q("brightness")
      , o = Q("borderColor")
      , i = Q("borderRadius")
      , s = Q("borderSpacing")
      , a = Q("borderWidth")
      , l = Q("contrast")
      , u = Q("grayscale")
      , c = Q("hueRotate")
      , d = Q("invert")
      , f = Q("gap")
      , h = Q("gradientColorStops")
      , y = Q("gradientColorStopPositions")
      , v = Q("inset")
      , S = Q("margin")
      , g = Q("opacity")
      , p = Q("padding")
      , m = Q("saturate")
      , w = Q("scale")
      , C = Q("sepia")
      , E = Q("skew")
      , P = Q("space")
      , k = Q("translate")
      , L = function() {
        return ["auto", "contain", "none"]
    }
      , j = function() {
        return ["auto", "hidden", "clip", "visible", "scroll"]
    }
      , W = function() {
        return ["auto", z, t]
    }
      , D = function() {
        return [z, t]
    }
      , re = function() {
        return ["", st]
    }
      , R = function() {
        return ["auto", Pn, z]
    }
      , J = function() {
        return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
    }
      , B = function() {
        return ["solid", "dashed", "dotted", "double", "none"]
    }
      , ce = function() {
        return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
    }
      , b = function() {
        return ["start", "end", "center", "between", "around", "evenly", "stretch"]
    }
      , M = function() {
        return ["", "0", z]
    }
      , V = function() {
        return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
    }
      , O = function() {
        return [Pn, oi]
    }
      , U = function() {
        return [Pn, z]
    };
    return {
        cacheSize: 500,
        theme: {
            colors: [Ir],
            spacing: [st],
            blur: ["none", "", It, z],
            brightness: O(),
            borderColor: [e],
            borderRadius: ["none", "", "full", It, z],
            borderSpacing: D(),
            borderWidth: re(),
            contrast: O(),
            grayscale: M(),
            hueRotate: U(),
            invert: M(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [yC, bl],
            inset: W(),
            margin: W(),
            opacity: O(),
            padding: D(),
            saturate: O(),
            scale: O(),
            sepia: M(),
            skew: U(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", z]
            }],
            container: ["container"],
            columns: [{
                columns: [It]
            }],
            "break-after": [{
                "break-after": V()
            }],
            "break-before": [{
                "break-before": V()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [].concat(J(), [z])
            }],
            overflow: [{
                overflow: j()
            }],
            "overflow-x": [{
                "overflow-x": j()
            }],
            "overflow-y": [{
                "overflow-y": j()
            }],
            overscroll: [{
                overscroll: L()
            }],
            "overscroll-x": [{
                "overscroll-x": L()
            }],
            "overscroll-y": [{
                "overscroll-y": L()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Vr]
            }],
            basis: [{
                basis: W()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", z]
            }],
            grow: [{
                grow: M()
            }],
            shrink: [{
                shrink: M()
            }],
            order: [{
                order: ["first", "last", "none", Vr]
            }],
            "grid-cols": [{
                "grid-cols": [Ir]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Vr]
                }, z]
            }],
            "col-start": [{
                "col-start": R()
            }],
            "col-end": [{
                "col-end": R()
            }],
            "grid-rows": [{
                "grid-rows": [Ir]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Vr]
                }, z]
            }],
            "row-start": [{
                "row-start": R()
            }],
            "row-end": [{
                "row-end": R()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", z]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", z]
            }],
            gap: [{
                gap: [f]
            }],
            "gap-x": [{
                "gap-x": [f]
            }],
            "gap-y": [{
                "gap-y": [f]
            }],
            "justify-content": [{
                justify: ["normal"].concat(b())
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal"].concat(b(), ["baseline"])
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [].concat(b(), ["baseline"])
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [P]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [P]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", z, t]
            }],
            "min-w": [{
                "min-w": ["min", "max", "fit", z, st]
            }],
            "max-w": [{
                "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                    screen: [It]
                }, It, z]
            }],
            h: [{
                h: [z, t, "auto", "min", "max", "fit"]
            }],
            "min-h": [{
                "min-h": ["min", "max", "fit", z, st]
            }],
            "max-h": [{
                "max-h": [z, t, "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", It, bl]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", oi]
            }],
            "font-family": [{
                font: [Ir]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Pn, oi]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", z, st]
            }],
            "list-image": [{
                "list-image": ["none", z]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", z]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [].concat(B(), ["wavy"])
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", st]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", z, st]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", z]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [].concat(J(), [gC])
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", mC]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, vC]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [y]
            }],
            "gradient-via-pos": [{
                via: [y]
            }],
            "gradient-to-pos": [{
                to: [y]
            }],
            "gradient-from": [{
                from: [h]
            }],
            "gradient-via": [{
                via: [h]
            }],
            "gradient-to": [{
                to: [h]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [].concat(B(), ["hidden"])
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: B()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: [""].concat(B())
            }],
            "outline-offset": [{
                "outline-offset": [z, st]
            }],
            "outline-w": [{
                outline: [st]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: re()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [st]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", It, xC]
            }],
            "shadow-color": [{
                shadow: [Ir]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": ce()
            }],
            "bg-blend": [{
                "bg-blend": ce()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", It, z]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [m]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [m]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", z]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", z]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", z]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [w]
            }],
            "scale-x": [{
                "scale-x": [w]
            }],
            "scale-y": [{
                "scale-y": [w]
            }],
            rotate: [{
                rotate: [Vr, z]
            }],
            "translate-x": [{
                "translate-x": [k]
            }],
            "translate-y": [{
                "translate-y": [k]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", z]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: ["appearance-none"],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "pinch-zoom", "manipulation", {
                    pan: ["x", "left", "right", "y", "up", "down"]
                }]
            }],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", z]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [st, oi]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
var PC = uC(CC);
function _t(...e) {
    return PC(vg(e))
}
function Cf(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function Cg(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Cf(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Cf(e[o], null)
                }
            }
    }
}
function jn(...e) {
    return T.useCallback(Cg(...e), e)
}
function ts(e) {
    const t = kC(e)
      , n = T.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , a = T.Children.toArray(i)
          , l = a.find(bC);
        if (l) {
            const u = l.props.children
              , c = a.map(d => d === l ? T.Children.count(u) > 1 ? T.Children.only(null) : T.isValidElement(u) ? u.props.children : null : d);
            return x.jsx(t, {
                ...s,
                ref: o,
                children: T.isValidElement(u) ? T.cloneElement(u, void 0, c) : null
            })
        }
        return x.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var EC = ts("Slot");
function kC(e) {
    const t = T.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (T.isValidElement(o)) {
            const s = RC(o)
              , a = NC(i, o.props);
            return o.type !== T.Fragment && (a.ref = r ? Cg(r, s) : s),
            T.cloneElement(o, a)
        }
        return T.Children.count(o) > 1 ? T.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var AC = Symbol("radix.slottable");
function bC(e) {
    return T.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === AC
}
function NC(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a),
            l
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function RC(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
const Pf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Ef = vg
  , Pg = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return Ef(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , d = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const f = Pf(c) || Pf(d);
        return o[u][f]
    }
    )
      , a = n && Object.entries(n).reduce( (u, c) => {
        let[d,f] = c;
        return f === void 0 || (u[d] = f),
        u
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: d, className: f, ...h} = c;
        return Object.entries(h).every(y => {
            let[v,S] = y;
            return Array.isArray(S) ? S.includes({
                ...i,
                ...a
            }[v]) : {
                ...i,
                ...a
            }[v] === S
        }
        ) ? [...u, d, f] : u
    }
    , []);
    return Ef(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
  , MC = Pg("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , xn = K.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => {
    const s = r ? EC : "button";
    return x.jsx(s, {
        className: _t(MC({
            variant: t,
            size: n,
            className: e
        })),
        ref: i,
        ...o
    })
}
);
xn.displayName = "Button";
function Ue(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Eg(e, t=[]) {
    let n = [];
    function r(i, s) {
        const a = T.createContext(s)
          , l = n.length;
        n = [...n, s];
        const u = d => {
            var g;
            const {scope: f, children: h, ...y} = d
              , v = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a
              , S = T.useMemo( () => y, Object.values(y));
            return x.jsx(v.Provider, {
                value: S,
                children: h
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(d, f) {
            var v;
            const h = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || a
              , y = T.useContext(h);
            if (y)
                return y;
            if (s !== void 0)
                return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => T.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return T.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return o.scopeName = e,
    [r, LC(o, ...t)]
}
function LC(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (a, {useScope: l, scopeName: u}) => {
                const d = l(i)[`__scope${u}`];
                return {
                    ...a,
                    ...d
                }
            }
            , {});
            return T.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function jC(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Eg(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = v => {
        const {scope: S, children: g} = v
          , p = K.useRef(null)
          , m = K.useRef(new Map).current;
        return x.jsx(o, {
            scope: S,
            itemMap: m,
            collectionRef: p,
            children: g
        })
    }
    ;
    s.displayName = t;
    const a = e + "CollectionSlot"
      , l = ts(a)
      , u = K.forwardRef( (v, S) => {
        const {scope: g, children: p} = v
          , m = i(a, g)
          , w = jn(S, m.collectionRef);
        return x.jsx(l, {
            ref: w,
            children: p
        })
    }
    );
    u.displayName = a;
    const c = e + "CollectionItemSlot"
      , d = "data-radix-collection-item"
      , f = ts(c)
      , h = K.forwardRef( (v, S) => {
        const {scope: g, children: p, ...m} = v
          , w = K.useRef(null)
          , C = jn(S, w)
          , E = i(c, g);
        return K.useEffect( () => (E.itemMap.set(w, {
            ref: w,
            ...m
        }),
        () => void E.itemMap.delete(w))),
        x.jsx(f, {
            [d]: "",
            ref: C,
            children: p
        })
    }
    );
    h.displayName = c;
    function y(v) {
        const S = i(e + "CollectionConsumer", v);
        return K.useCallback( () => {
            const p = S.collectionRef.current;
            if (!p)
                return [];
            const m = Array.from(p.querySelectorAll(`[${d}]`));
            return Array.from(S.itemMap.values()).sort( (E, P) => m.indexOf(E.ref.current) - m.indexOf(P.ref.current))
        }
        , [S.collectionRef, S.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: h
    }, y, r]
}
var OC = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , wt = OC.reduce( (e, t) => {
    const n = ts(`Primitive.${t}`)
      , r = T.forwardRef( (o, i) => {
        const {asChild: s, ...a} = o
          , l = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        x.jsx(l, {
            ...a,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function kg(e, t) {
    e && ys.flushSync( () => e.dispatchEvent(t))
}
function On(e) {
    const t = T.useRef(e);
    return T.useEffect( () => {
        t.current = e
    }
    ),
    T.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function DC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = On(e);
    T.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var _C = "DismissableLayer", Nl = "dismissableLayer.update", VC = "dismissableLayer.pointerDownOutside", IC = "dismissableLayer.focusOutside", kf, Ag = T.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), bg = T.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: a, ...l} = e
      , u = T.useContext(Ag)
      , [c,d] = T.useState(null)
      , f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,h] = T.useState({})
      , y = jn(t, P => d(P))
      , v = Array.from(u.layers)
      , [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = v.indexOf(S)
      , p = c ? v.indexOf(c) : -1
      , m = u.layersWithOutsidePointerEventsDisabled.size > 0
      , w = p >= g
      , C = zC(P => {
        const k = P.target
          , L = [...u.branches].some(j => j.contains(k));
        !w || L || (o == null || o(P),
        s == null || s(P),
        P.defaultPrevented || a == null || a())
    }
    , f)
      , E = BC(P => {
        const k = P.target;
        [...u.branches].some(j => j.contains(k)) || (i == null || i(P),
        s == null || s(P),
        P.defaultPrevented || a == null || a())
    }
    , f);
    return DC(P => {
        p === u.layers.size - 1 && (r == null || r(P),
        !P.defaultPrevented && a && (P.preventDefault(),
        a()))
    }
    , f),
    T.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (kf = f.body.style.pointerEvents,
            f.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Af(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = kf)
            }
    }
    , [c, f, n, u]),
    T.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        Af())
    }
    , [c, u]),
    T.useEffect( () => {
        const P = () => h({});
        return document.addEventListener(Nl, P),
        () => document.removeEventListener(Nl, P)
    }
    , []),
    x.jsx(wt.div, {
        ...l,
        ref: y,
        style: {
            pointerEvents: m ? w ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: Ue(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Ue(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Ue(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
bg.displayName = _C;
var FC = "DismissableLayerBranch"
  , Ng = T.forwardRef( (e, t) => {
    const n = T.useContext(Ag)
      , r = T.useRef(null)
      , o = jn(t, r);
    return T.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    x.jsx(wt.div, {
        ...e,
        ref: o
    })
}
);
Ng.displayName = FC;
function zC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = On(e)
      , r = T.useRef(!1)
      , o = T.useRef( () => {}
    );
    return T.useEffect( () => {
        const i = a => {
            if (a.target && !r.current) {
                let l = function() {
                    Rg(VC, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = l,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function BC(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = On(e)
      , r = T.useRef(!1);
    return T.useEffect( () => {
        const o = i => {
            i.target && !r.current && Rg(IC, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Af() {
    const e = new CustomEvent(Nl);
    document.dispatchEvent(e)
}
function Rg(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? kg(o, i) : o.dispatchEvent(i)
}
var UC = bg
  , $C = Ng
  , Eo = globalThis != null && globalThis.document ? T.useLayoutEffect : () => {}
  , WC = "Portal"
  , Mg = T.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [o,i] = T.useState(!1);
    Eo( () => i(!0), []);
    const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return s ? j0.createPortal(x.jsx(wt.div, {
        ...r,
        ref: t
    }), s) : null
}
);
Mg.displayName = WC;
function HC(e, t) {
    return T.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Lg = e => {
    const {present: t, children: n} = e
      , r = GC(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : T.Children.only(n)
      , i = jn(r.ref, KC(o));
    return typeof n == "function" || r.isPresent ? T.cloneElement(o, {
        ref: i
    }) : null
}
;
Lg.displayName = "Presence";
function GC(e) {
    const [t,n] = T.useState()
      , r = T.useRef(null)
      , o = T.useRef(e)
      , i = T.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [a,l] = HC(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return T.useEffect( () => {
        const u = ii(r.current);
        i.current = a === "mounted" ? u : "none"
    }
    , [a]),
    Eo( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const f = i.current
              , h = ii(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, l]),
    Eo( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , d = h => {
                const v = ii(r.current).includes(h.animationName);
                if (h.target === t && v && (l("ANIMATION_END"),
                !o.current)) {
                    const S = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S)
                    }
                    )
                }
            }
              , f = h => {
                h.target === t && (i.current = ii(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", d),
            t.addEventListener("animationend", d),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", d),
                t.removeEventListener("animationend", d)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: T.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function ii(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function KC(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var YC = Tv[" useInsertionEffect ".trim().toString()] || Eo;
function QC({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = XC({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : o;
    {
        const c = T.useRef(e !== void 0);
        T.useEffect( () => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = a
        }
        , [a, r])
    }
    const u = T.useCallback(c => {
        var d;
        if (a) {
            const f = qC(c) ? c(e) : c;
            f !== e && ((d = s.current) == null || d.call(s, f))
        } else
            i(c)
    }
    , [a, e, i, s]);
    return [l, u]
}
function XC({defaultProp: e, onChange: t}) {
    const [n,r] = T.useState(e)
      , o = T.useRef(n)
      , i = T.useRef(t);
    return YC( () => {
        i.current = t
    }
    , [t]),
    T.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function qC(e) {
    return typeof e == "function"
}
var ZC = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , JC = "VisuallyHidden"
  , Xu = T.forwardRef( (e, t) => x.jsx(wt.span, {
    ...e,
    ref: t,
    style: {
        ...ZC,
        ...e.style
    }
}));
Xu.displayName = JC;
var qu = "ToastProvider"
  , [Zu,eP,tP] = jC("Toast")
  , [jg,NP] = Eg("Toast", [tP])
  , [nP,ks] = jg(qu)
  , Og = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [a,l] = T.useState(null)
      , [u,c] = T.useState(0)
      , d = T.useRef(!1)
      , f = T.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${qu}\`. Expected non-empty \`string\`.`),
    x.jsx(Zu.Provider, {
        scope: t,
        children: x.jsx(nP, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: a,
            onViewportChange: l,
            onToastAdd: T.useCallback( () => c(h => h + 1), []),
            onToastRemove: T.useCallback( () => c(h => h - 1), []),
            isFocusedToastEscapeKeyDownRef: d,
            isClosePausedRef: f,
            children: s
        })
    })
}
;
Og.displayName = qu;
var Dg = "ToastViewport"
  , rP = ["F8"]
  , Rl = "toast.viewportPause"
  , Ml = "toast.viewportResume"
  , _g = T.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=rP, label: o="Notifications ({hotkey})", ...i} = e
      , s = ks(Dg, n)
      , a = eP(n)
      , l = T.useRef(null)
      , u = T.useRef(null)
      , c = T.useRef(null)
      , d = T.useRef(null)
      , f = jn(t, d, s.onViewportChange)
      , h = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , y = s.toastCount > 0;
    T.useEffect( () => {
        const S = g => {
            var m;
            r.length !== 0 && r.every(w => g[w] || g.code === w) && ((m = d.current) == null || m.focus())
        }
        ;
        return document.addEventListener("keydown", S),
        () => document.removeEventListener("keydown", S)
    }
    , [r]),
    T.useEffect( () => {
        const S = l.current
          , g = d.current;
        if (y && S && g) {
            const p = () => {
                if (!s.isClosePausedRef.current) {
                    const E = new CustomEvent(Rl);
                    g.dispatchEvent(E),
                    s.isClosePausedRef.current = !0
                }
            }
              , m = () => {
                if (s.isClosePausedRef.current) {
                    const E = new CustomEvent(Ml);
                    g.dispatchEvent(E),
                    s.isClosePausedRef.current = !1
                }
            }
              , w = E => {
                !S.contains(E.relatedTarget) && m()
            }
              , C = () => {
                S.contains(document.activeElement) || m()
            }
            ;
            return S.addEventListener("focusin", p),
            S.addEventListener("focusout", w),
            S.addEventListener("pointermove", p),
            S.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", m),
            () => {
                S.removeEventListener("focusin", p),
                S.removeEventListener("focusout", w),
                S.removeEventListener("pointermove", p),
                S.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", m)
            }
        }
    }
    , [y, s.isClosePausedRef]);
    const v = T.useCallback( ({tabbingDirection: S}) => {
        const p = a().map(m => {
            const w = m.ref.current
              , C = [w, ...gP(w)];
            return S === "forwards" ? C : C.reverse()
        }
        );
        return (S === "forwards" ? p.reverse() : p).flat()
    }
    , [a]);
    return T.useEffect( () => {
        const S = d.current;
        if (S) {
            const g = p => {
                var C, E, P;
                const m = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !m) {
                    const k = document.activeElement
                      , L = p.shiftKey;
                    if (p.target === S && L) {
                        (C = u.current) == null || C.focus();
                        return
                    }
                    const D = v({
                        tabbingDirection: L ? "backwards" : "forwards"
                    })
                      , re = D.findIndex(R => R === k);
                    ma(D.slice(re + 1)) ? p.preventDefault() : L ? (E = u.current) == null || E.focus() : (P = c.current) == null || P.focus()
                }
            }
            ;
            return S.addEventListener("keydown", g),
            () => S.removeEventListener("keydown", g)
        }
    }
    , [a, v]),
    x.jsxs($C, {
        ref: l,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: {
            pointerEvents: y ? void 0 : "none"
        },
        children: [y && x.jsx(Ll, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const S = v({
                    tabbingDirection: "forwards"
                });
                ma(S)
            }
        }), x.jsx(Zu.Slot, {
            scope: n,
            children: x.jsx(wt.ol, {
                tabIndex: -1,
                ...i,
                ref: f
            })
        }), y && x.jsx(Ll, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const S = v({
                    tabbingDirection: "backwards"
                });
                ma(S)
            }
        })]
    })
}
);
_g.displayName = Dg;
var Vg = "ToastFocusProxy"
  , Ll = T.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = ks(Vg, n);
    return x.jsx(Xu, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const a = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && r()
        }
    })
}
);
Ll.displayName = Vg;
var Do = "Toast"
  , oP = "toast.swipeStart"
  , iP = "toast.swipeMove"
  , sP = "toast.swipeCancel"
  , aP = "toast.swipeEnd"
  , Ig = T.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [a,l] = QC({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: Do
    });
    return x.jsx(Lg, {
        present: n || a,
        children: x.jsx(cP, {
            open: a,
            ...s,
            ref: t,
            onClose: () => l(!1),
            onPause: On(e.onPause),
            onResume: On(e.onResume),
            onSwipeStart: Ue(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: Ue(e.onSwipeMove, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
            }
            ),
            onSwipeCancel: Ue(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: Ue(e.onSwipeEnd, u => {
                const {x: c, y: d} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                l(!1)
            }
            )
        })
    })
}
);
Ig.displayName = Do;
var [lP,uP] = jg(Do, {
    onClose() {}
})
  , cP = T.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: a, onPause: l, onResume: u, onSwipeStart: c, onSwipeMove: d, onSwipeCancel: f, onSwipeEnd: h, ...y} = e
      , v = ks(Do, n)
      , [S,g] = T.useState(null)
      , p = jn(t, R => g(R))
      , m = T.useRef(null)
      , w = T.useRef(null)
      , C = o || v.duration
      , E = T.useRef(0)
      , P = T.useRef(C)
      , k = T.useRef(0)
      , {onToastAdd: L, onToastRemove: j} = v
      , W = On( () => {
        var J;
        (S == null ? void 0 : S.contains(document.activeElement)) && ((J = v.viewport) == null || J.focus()),
        s()
    }
    )
      , D = T.useCallback(R => {
        !R || R === 1 / 0 || (window.clearTimeout(k.current),
        E.current = new Date().getTime(),
        k.current = window.setTimeout(W, R))
    }
    , [W]);
    T.useEffect( () => {
        const R = v.viewport;
        if (R) {
            const J = () => {
                D(P.current),
                u == null || u()
            }
              , B = () => {
                const ce = new Date().getTime() - E.current;
                P.current = P.current - ce,
                window.clearTimeout(k.current),
                l == null || l()
            }
            ;
            return R.addEventListener(Rl, B),
            R.addEventListener(Ml, J),
            () => {
                R.removeEventListener(Rl, B),
                R.removeEventListener(Ml, J)
            }
        }
    }
    , [v.viewport, C, l, u, D]),
    T.useEffect( () => {
        i && !v.isClosePausedRef.current && D(C)
    }
    , [i, C, v.isClosePausedRef, D]),
    T.useEffect( () => (L(),
    () => j()), [L, j]);
    const re = T.useMemo( () => S ? Hg(S) : null, [S]);
    return v.viewport ? x.jsxs(x.Fragment, {
        children: [re && x.jsx(dP, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: re
        }), x.jsx(lP, {
            scope: n,
            onClose: W,
            children: ys.createPortal(x.jsx(Zu.ItemSlot, {
                scope: n,
                children: x.jsx(UC, {
                    asChild: !0,
                    onEscapeKeyDown: Ue(a, () => {
                        v.isFocusedToastEscapeKeyDownRef.current || W(),
                        v.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: x.jsx(wt.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": v.swipeDirection,
                        ...y,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Ue(e.onKeyDown, R => {
                            R.key === "Escape" && (a == null || a(R.nativeEvent),
                            R.nativeEvent.defaultPrevented || (v.isFocusedToastEscapeKeyDownRef.current = !0,
                            W()))
                        }
                        ),
                        onPointerDown: Ue(e.onPointerDown, R => {
                            R.button === 0 && (m.current = {
                                x: R.clientX,
                                y: R.clientY
                            })
                        }
                        ),
                        onPointerMove: Ue(e.onPointerMove, R => {
                            if (!m.current)
                                return;
                            const J = R.clientX - m.current.x
                              , B = R.clientY - m.current.y
                              , ce = !!w.current
                              , b = ["left", "right"].includes(v.swipeDirection)
                              , M = ["left", "up"].includes(v.swipeDirection) ? Math.min : Math.max
                              , V = b ? M(0, J) : 0
                              , O = b ? 0 : M(0, B)
                              , U = R.pointerType === "touch" ? 10 : 2
                              , G = {
                                x: V,
                                y: O
                            }
                              , Fe = {
                                originalEvent: R,
                                delta: G
                            };
                            ce ? (w.current = G,
                            si(iP, d, Fe, {
                                discrete: !1
                            })) : bf(G, v.swipeDirection, U) ? (w.current = G,
                            si(oP, c, Fe, {
                                discrete: !1
                            }),
                            R.target.setPointerCapture(R.pointerId)) : (Math.abs(J) > U || Math.abs(B) > U) && (m.current = null)
                        }
                        ),
                        onPointerUp: Ue(e.onPointerUp, R => {
                            const J = w.current
                              , B = R.target;
                            if (B.hasPointerCapture(R.pointerId) && B.releasePointerCapture(R.pointerId),
                            w.current = null,
                            m.current = null,
                            J) {
                                const ce = R.currentTarget
                                  , b = {
                                    originalEvent: R,
                                    delta: J
                                };
                                bf(J, v.swipeDirection, v.swipeThreshold) ? si(aP, h, b, {
                                    discrete: !0
                                }) : si(sP, f, b, {
                                    discrete: !0
                                }),
                                ce.addEventListener("click", M => M.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), v.viewport)
        })]
    }) : null
}
)
  , dP = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = ks(Do, t)
      , [i,s] = T.useState(!1)
      , [a,l] = T.useState(!1);
    return hP( () => s(!0)),
    T.useEffect( () => {
        const u = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    a ? null : x.jsx(Mg, {
        asChild: !0,
        children: x.jsx(Xu, {
            ...r,
            children: i && x.jsxs(x.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , fP = "ToastTitle"
  , Fg = T.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return x.jsx(wt.div, {
        ...r,
        ref: t
    })
}
);
Fg.displayName = fP;
var pP = "ToastDescription"
  , zg = T.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return x.jsx(wt.div, {
        ...r,
        ref: t
    })
}
);
zg.displayName = pP;
var Bg = "ToastAction"
  , Ug = T.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? x.jsx(Wg, {
        altText: n,
        asChild: !0,
        children: x.jsx(Ju, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Bg}\`. Expected non-empty \`string\`.`),
    null)
}
);
Ug.displayName = Bg;
var $g = "ToastClose"
  , Ju = T.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = uP($g, n);
    return x.jsx(Wg, {
        asChild: !0,
        children: x.jsx(wt.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Ue(e.onClick, o.onClose)
        })
    })
}
);
Ju.displayName = $g;
var Wg = T.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return x.jsx(wt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function Hg(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        mP(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...Hg(r))
        }
    }
    ),
    t
}
function si(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? kg(o, i) : o.dispatchEvent(i)
}
var bf = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function hP(e= () => {}
) {
    const t = On(e);
    Eo( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function mP(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function gP(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function ma(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var vP = Og
  , Gg = _g
  , Kg = Ig
  , Yg = Fg
  , Qg = zg
  , Xg = Ug
  , qg = Ju;
const yP = vP
  , Zg = K.forwardRef( ({className: e, ...t}, n) => x.jsx(Gg, {
    ref: n,
    className: _t("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Zg.displayName = Gg.displayName;
const xP = Pg("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full", {
    variants: {
        variant: {
            default: "bg-background border",
            destructive: "group destructive border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Jg = K.forwardRef( ({className: e, variant: t, ...n}, r) => x.jsx(Kg, {
    ref: r,
    className: _t(xP({
        variant: t
    }), e),
    ...n
}));
Jg.displayName = Kg.displayName;
const wP = K.forwardRef( ({className: e, ...t}, n) => x.jsx(Xg, {
    ref: n,
    className: _t("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
wP.displayName = Xg.displayName;
const ev = K.forwardRef( ({className: e, ...t}, n) => x.jsx(qg, {
    ref: n,
    className: _t("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: x.jsx(XT, {
        className: "h-4 w-4"
    })
}));
ev.displayName = qg.displayName;
const tv = K.forwardRef( ({className: e, ...t}, n) => x.jsx(Yg, {
    ref: n,
    className: _t("text-sm font-semibold", e),
    ...t
}));
tv.displayName = Yg.displayName;
const nv = K.forwardRef( ({className: e, ...t}, n) => x.jsx(Qg, {
    ref: n,
    className: _t("text-sm opacity-90", e),
    ...t
}));
nv.displayName = Qg.displayName;
const SP = 1;
let ga = 0;
function TP() {
    return ga = (ga + 1) % Number.MAX_VALUE,
    ga.toString()
}
const Ae = {
    state: {
        toasts: []
    },
    listeners: [],
    getState: () => Ae.state,
    setState: e => {
        typeof e == "function" ? Ae.state = e(Ae.state) : Ae.state = {
            ...Ae.state,
            ...e
        },
        Ae.listeners.forEach(t => t(Ae.state))
    }
    ,
    subscribe: e => (Ae.listeners.push(e),
    () => {
        Ae.listeners = Ae.listeners.filter(t => t !== e)
    }
    )
}
  , CP = ({...e}) => {
    const t = TP()
      , n = o => Ae.setState(i => ({
        ...i,
        toasts: i.toasts.map(s => s.id === t ? {
            ...s,
            ...o
        } : s)
    }))
      , r = () => Ae.setState(o => ({
        ...o,
        toasts: o.toasts.filter(i => i.id !== t)
    }));
    return Ae.setState(o => ({
        ...o,
        toasts: [{
            ...e,
            id: t,
            dismiss: r
        }, ...o.toasts].slice(0, SP)
    })),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
;
function rv() {
    const [e,t] = T.useState(Ae.getState());
    return T.useEffect( () => Ae.subscribe(r => {
        t(r)
    }
    ), []),
    T.useEffect( () => {
        const n = [];
        return e.toasts.forEach(r => {
            if (r.duration === 1 / 0)
                return;
            const o = setTimeout( () => {
                r.dismiss()
            }
            , r.duration || 5e3);
            n.push(o)
        }
        ),
        () => {
            n.forEach(r => clearTimeout(r))
        }
    }
    , [e.toasts]),
    {
        toast: CP,
        toasts: e.toasts
    }
}
function PP() {
    const {toasts: e} = rv();
    return x.jsxs(yP, {
        children: [e.map( ({id: t, title: n, description: r, action: o, ...i}) => x.jsxs(Jg, {
            ...i,
            children: [x.jsxs("div", {
                className: "grid gap-1",
                children: [n && x.jsx(tv, {
                    children: n
                }), r && x.jsx(nv, {
                    children: r
                })]
            }), o, x.jsx(ev, {})]
        }, t)), x.jsx(Zg, {})]
    })
}
const jl = K.forwardRef( ({className: e, type: t, ...n}, r) => x.jsx("input", {
    type: t,
    className: _t("flex h-12 w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: r,
    ...n
}));
jl.displayName = "Input";
const ov = K.forwardRef( ({className: e, ...t}, n) => x.jsx("textarea", {
    className: _t("flex min-h-[120px] w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
ov.displayName = "Textarea";
const EP = e => {
    const [t,n] = K.useState(e);
    return {
        formData: t,
        handleChange: i => {
            const {name: s, value: a} = i.target;
            n(l => ({
                ...l,
                [s]: a
            }))
        }
        ,
        resetForm: () => {
            n(e)
        }
    }
}
;
function kP() {
    const {toast: e} = rv()
      , t = "https://storage.googleapis.com/hostinger-horizons-assets-prod/0d127c35-9929-4de5-a242-f25ab2981589/ad8e088a7378e08d3194b80c835b1282.png"
      , {formData: n, handleChange: r, resetForm: o} = EP({
        name: "",
        email: "",
        message: ""
    })
      , i = a => {
        a.preventDefault(),
        e({
            title: "✅ Quote Request Sent!",
            description: "Thanks! We'll get back to you shortly. For now, this is just a demo."
        }),
        console.log("Form Data:", n),
        o()
    }
      , s = () => {
        var a;
        (a = document.getElementById("quote-section")) == null || a.scrollIntoView({
            behavior: "smooth"
        })
    }
    ;
    return x.jsxs(x.Fragment, {
        children: [x.jsxs(pl, {
            children: [x.jsx("title", {
                children: "Furniture Removal Brevard County FL | Shaw Robinson Junk Removal"
            }), x.jsx("meta", {
                name: "description",
                content: "Professional furniture removal services in Brevard County, FL. Fast, reliable, and eco-friendly furniture disposal. Same-day service available. Call Shaw Robinson Junk Removal today!"
            })]
        }), x.jsxs("div", {
            className: "min-h-screen bg-gradient-to-br from-brand-dark to-slate-900",
            children: [x.jsx(PP, {}), x.jsx("header", {
                className: "bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50",
                children: x.jsx("div", {
                    className: "container mx-auto px-4 py-2",
                    children: x.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [x.jsxs(it.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            className: "flex items-center space-x-3",
                            children: [x.jsx("img", {
                                src: t,
                                alt: "Shaw Robinson Junk Removal Logo",
                                className: "h-16 w-16"
                            }), x.jsxs("div", {
                                children: [x.jsx("h2", {
                                    className: "text-xl font-bold text-white",
                                    children: "Shaw Robinson"
                                }), x.jsx("p", {
                                    className: "text-brand-green-light text-sm font-semibold",
                                    children: "Junk Removal"
                                })]
                            })]
                        }), x.jsxs(it.div, {
                            initial: {
                                opacity: 0,
                                x: 20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            className: "flex items-center space-x-6",
                            children: [x.jsxs("a", {
                                href: "tel:321-555-5865",
                                className: "hidden md:flex items-center space-x-2 text-white group",
                                children: [x.jsx(ha, {
                                    className: "h-4 w-4 text-brand-green-light group-hover:scale-110 transition-transform"
                                }), x.jsx("span", {
                                    className: "font-semibold group-hover:text-brand-green-light transition-colors",
                                    children: "(321) 555-JUNK"
                                })]
                            }), x.jsx(xn, {
                                asChild: !0,
                                className: "bg-gradient-to-r from-brand-green-light to-brand-green-vibrant hover:from-brand-green-vibrant hover:to-brand-green-light text-brand-dark font-bold px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200",
                                children: x.jsx("a", {
                                    href: "tel:321-555-5865",
                                    children: "Call Now"
                                })
                            })]
                        })]
                    })
                })
            }), x.jsxs("section", {
                className: "relative py-20 overflow-hidden",
                children: [x.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
                }), x.jsx("div", {
                    className: "container mx-auto px-4 relative z-10",
                    children: x.jsxs("div", {
                        className: "grid lg:grid-cols-2 gap-12 items-center",
                        children: [x.jsxs(it.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8
                            },
                            className: "space-y-8",
                            children: [x.jsxs("div", {
                                className: "space-y-4",
                                children: [x.jsxs("div", {
                                    className: "inline-flex items-center space-x-2 bg-brand-green-light/20 text-brand-green-light px-4 py-2 rounded-full border border-brand-green-light/30",
                                    children: [x.jsx(WT, {
                                        className: "h-4 w-4"
                                    }), x.jsx("span", {
                                        className: "text-sm font-medium",
                                        children: "Serving Brevard County, FL"
                                    })]
                                }), x.jsxs("h1", {
                                    className: "text-5xl lg:text-6xl font-bold text-white leading-tight",
                                    children: ["Professional", x.jsx("span", {
                                        className: "block text-transparent bg-clip-text bg-gradient-to-r from-brand-green-light to-brand-green-vibrant",
                                        children: "Furniture Removal"
                                    }), "Services"]
                                }), x.jsx("p", {
                                    className: "text-xl text-gray-300 leading-relaxed",
                                    children: "Fast, reliable, and eco-friendly furniture disposal in Brevard County. We handle everything from single items to complete home cleanouts."
                                })]
                            }), x.jsxs("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: [x.jsxs(xn, {
                                    onClick: s,
                                    size: "lg",
                                    className: "bg-gradient-to-r from-brand-green-light to-brand-green-vibrant hover:from-brand-green-vibrant hover:to-brand-green-light text-brand-dark font-bold px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 text-lg",
                                    children: ["Get Free Quote", x.jsx(pa, {
                                        className: "ml-2 h-5 w-5"
                                    })]
                                }), x.jsx(xn, {
                                    asChild: !0,
                                    variant: "outline",
                                    size: "lg",
                                    className: "border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full backdrop-blur-sm text-lg",
                                    children: x.jsxs("a", {
                                        href: "tel:321-555-5865",
                                        children: [x.jsx(ha, {
                                            className: "mr-2 h-5 w-5"
                                        }), "(321) 555-JUNK"]
                                    })
                                })]
                            }), x.jsxs("div", {
                                className: "flex items-center space-x-6 pt-4",
                                children: [x.jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [x.jsx(UT, {
                                        className: "h-5 w-5 text-brand-green-light"
                                    }), x.jsx("span", {
                                        className: "text-white font-medium",
                                        children: "Same-Day Service"
                                    })]
                                }), x.jsxs("div", {
                                    className: "flex items-center space-x-2",
                                    children: [x.jsx(xf, {
                                        className: "h-5 w-5 text-brand-green-light"
                                    }), x.jsx("span", {
                                        className: "text-white font-medium",
                                        children: "Licensed & Insured"
                                    })]
                                })]
                            })]
                        }), x.jsx(it.div, {
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: .8,
                                delay: .2
                            },
                            className: "relative",
                            children: x.jsxs("div", {
                                className: "relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl",
                                children: [x.jsx("img", {
                                    className: "w-full h-80 object-cover rounded-2xl shadow-lg",
                                    alt: "Professional furniture removal team loading furniture into truck",
                                    src: "https://images.unsplash.com/photo-1562905909-8e35a6e1993a"
                                }), x.jsx("div", {
                                    className: "absolute -bottom-4 -right-4 bg-gradient-to-r from-brand-green-light to-brand-green-vibrant text-white p-4 rounded-2xl shadow-xl",
                                    children: x.jsxs("div", {
                                        className: "flex items-center space-x-2",
                                        children: [x.jsx(KT, {
                                            className: "h-5 w-5 fill-current text-brand-yellow"
                                        }), x.jsxs("div", {
                                            children: [x.jsx("div", {
                                                className: "font-bold text-lg text-brand-dark",
                                                children: "4.9/5"
                                            }), x.jsx("div", {
                                                className: "text-sm opacity-90 text-brand-dark",
                                                children: "Customer Rating"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })]
            }), x.jsx("section", {
                className: "py-20 bg-gradient-to-r from-slate-900/50 to-brand-dark/50 backdrop-blur-sm",
                children: x.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [x.jsxs(it.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        className: "text-center mb-16",
                        children: [x.jsx("h2", {
                            className: "text-4xl lg:text-5xl font-bold text-white mb-6",
                            children: "Furniture We Remove"
                        }), x.jsx("p", {
                            className: "text-xl text-gray-300 max-w-3xl mx-auto",
                            children: "No furniture is too big or too small. We handle all types of furniture removal with care and professionalism throughout Brevard County."
                        })]
                    }), x.jsx("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [{
                            icon: GT,
                            title: "Living Room Furniture",
                            items: ["Sofas & Couches", "Coffee Tables", "Entertainment Centers", "Recliners", "Bookcases"]
                        }, {
                            icon: BT,
                            title: "Bedroom Furniture",
                            items: ["Beds & Mattresses", "Dressers", "Nightstands", "Wardrobes", "Mirrors"]
                        }, {
                            icon: YT,
                            title: "Large Items",
                            items: ["Dining Sets", "Office Furniture", "Appliances", "Exercise Equipment", "Pianos"]
                        }].map( (a, l) => x.jsxs(it.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: l * .1
                            },
                            className: "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-brand-green-light/50 transition-all duration-300 group",
                            children: [x.jsx("div", {
                                className: "bg-gradient-to-r from-brand-green-light to-brand-green-vibrant w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                                children: x.jsx(a.icon, {
                                    className: "h-8 w-8 text-brand-dark"
                                })
                            }), x.jsx("h3", {
                                className: "text-2xl font-bold text-white mb-4",
                                children: a.title
                            }), x.jsx("ul", {
                                className: "space-y-3",
                                children: a.items.map( (u, c) => x.jsxs("li", {
                                    className: "flex items-center space-x-3 text-gray-300",
                                    children: [x.jsx(xf, {
                                        className: "h-4 w-4 text-brand-green-light flex-shrink-0"
                                    }), x.jsx("span", {
                                        children: u
                                    })]
                                }, c))
                            })]
                        }, l))
                    })]
                })
            }), x.jsx("section", {
                id: "quote-section",
                className: "py-20",
                children: x.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [x.jsxs(it.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        className: "text-center mb-16",
                        children: [x.jsx("h2", {
                            className: "text-4xl lg:text-5xl font-bold text-white mb-6",
                            children: "Get a Free, No-Obligation Quote"
                        }), x.jsx("p", {
                            className: "text-xl text-gray-300 max-w-3xl mx-auto",
                            children: "Fill out the form below or give us a call. We'll get back to you with a fair and transparent price."
                        })]
                    }), x.jsx(it.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        className: "max-w-2xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20",
                        children: x.jsxs("form", {
                            onSubmit: i,
                            className: "space-y-6",
                            children: [x.jsxs("div", {
                                className: "relative",
                                children: [x.jsx(QT, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                                }), x.jsx(jl, {
                                    type: "text",
                                    name: "name",
                                    placeholder: "Your Name",
                                    value: n.name,
                                    onChange: r,
                                    required: !0,
                                    className: "pl-10"
                                })]
                            }), x.jsxs("div", {
                                className: "relative",
                                children: [x.jsx($T, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                                }), x.jsx(jl, {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Your Email",
                                    value: n.email,
                                    onChange: r,
                                    required: !0,
                                    className: "pl-10"
                                })]
                            }), x.jsxs("div", {
                                className: "relative",
                                children: [x.jsx(HT, {
                                    className: "absolute left-3 top-5 h-5 w-5 text-gray-400"
                                }), x.jsx(ov, {
                                    name: "message",
                                    placeholder: "Describe the furniture you need removed...",
                                    value: n.message,
                                    onChange: r,
                                    required: !0,
                                    className: "pl-10 pt-4"
                                })]
                            }), x.jsxs(xn, {
                                type: "submit",
                                size: "lg",
                                className: "w-full bg-gradient-to-r from-brand-green-light to-brand-green-vibrant hover:from-brand-green-vibrant hover:to-brand-green-light text-brand-dark font-bold px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 text-lg",
                                children: ["Send Request", x.jsx(pa, {
                                    className: "ml-2 h-5 w-5"
                                })]
                            })]
                        })
                    })]
                })
            }), x.jsx("section", {
                className: "py-20 bg-gradient-to-r from-slate-900/50 to-brand-dark/50 backdrop-blur-sm",
                children: x.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [x.jsxs(it.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        className: "text-center mb-16",
                        children: [x.jsx("h2", {
                            className: "text-4xl lg:text-5xl font-bold text-white mb-6",
                            children: "Why Choose Shaw Robinson?"
                        }), x.jsx("p", {
                            className: "text-xl text-gray-300 max-w-3xl mx-auto",
                            children: "We're Brevard County's trusted furniture removal experts, committed to exceptional service and environmental responsibility."
                        })]
                    }), x.jsx("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                        children: [{
                            title: "Same-Day Service",
                            description: "Quick response times for urgent furniture removal needs",
                            icon: "⚡"
                        }, {
                            title: "Eco-Friendly",
                            description: "We donate and recycle whenever possible",
                            icon: "🌱"
                        }, {
                            title: "Licensed & Insured",
                            description: "Fully licensed and insured for your peace of mind",
                            icon: "🛡️"
                        }, {
                            title: "Fair Pricing",
                            description: "Transparent, upfront pricing with no hidden fees",
                            icon: "💰"
                        }].map( (a, l) => x.jsx(it.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: l * .1
                            },
                            className: "text-center group",
                            children: x.jsxs("div", {
                                className: "bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-brand-green-light/50 transition-all duration-300 group-hover:transform group-hover:scale-105",
                                children: [x.jsx("div", {
                                    className: "text-4xl mb-4",
                                    children: a.icon
                                }), x.jsx("h3", {
                                    className: "text-xl font-bold text-white mb-3",
                                    children: a.title
                                }), x.jsx("p", {
                                    className: "text-gray-300",
                                    children: a.description
                                })]
                            })
                        }, l))
                    })]
                })
            }), x.jsx("section", {
                className: "py-20 bg-gradient-to-r from-brand-green-vibrant to-brand-green-light",
                children: x.jsx("div", {
                    className: "container mx-auto px-4 text-center",
                    children: x.jsxs(it.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        className: "max-w-4xl mx-auto",
                        children: [x.jsx("h2", {
                            className: "text-4xl lg:text-5xl font-bold text-brand-dark mb-6",
                            children: "Ready to Remove Your Furniture?"
                        }), x.jsx("p", {
                            className: "text-xl text-brand-dark/80 mb-8",
                            children: "Get your free quote today and experience Brevard County's best furniture removal service. Same-day service available!"
                        }), x.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [x.jsxs(xn, {
                                onClick: s,
                                size: "lg",
                                className: "bg-brand-dark text-white hover:bg-black font-bold px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 text-lg",
                                children: ["Get Free Quote Now", x.jsx(pa, {
                                    className: "ml-2 h-5 w-5"
                                })]
                            }), x.jsx(xn, {
                                asChild: !0,
                                variant: "outline",
                                size: "lg",
                                className: "border-2 border-brand-dark text-brand-dark hover:bg-black/10 font-semibold px-8 py-4 rounded-full backdrop-blur-sm text-lg",
                                children: x.jsxs("a", {
                                    href: "tel:321-555-5865",
                                    children: [x.jsx(ha, {
                                        className: "mr-2 h-5 w-5"
                                    }), "Call (321) 555-JUNK"]
                                })
                            })]
                        })]
                    })
                })
            }), x.jsx("footer", {
                className: "bg-slate-900 py-12 border-t border-white/10",
                children: x.jsxs("div", {
                    className: "container mx-auto px-4",
                    children: [x.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-8",
                        children: [x.jsxs("div", {
                            children: [x.jsxs("div", {
                                className: "flex items-center space-x-3 mb-4",
                                children: [x.jsx("img", {
                                    src: t,
                                    alt: "Shaw Robinson Junk Removal Logo",
                                    className: "h-16 w-16"
                                }), x.jsxs("div", {
                                    children: [x.jsx("span", {
                                        className: "text-lg font-bold text-white",
                                        children: "Shaw Robinson"
                                    }), x.jsx("p", {
                                        className: "text-brand-green-light text-sm font-semibold",
                                        children: "Junk Removal"
                                    })]
                                })]
                            }), x.jsx("p", {
                                className: "text-gray-400",
                                children: "Brevard County's trusted furniture removal experts. Professional, reliable, and eco-friendly service."
                            })]
                        }), x.jsxs("div", {
                            children: [x.jsx("span", {
                                className: "text-lg font-semibold text-white mb-4 block",
                                children: "Contact Info"
                            }), x.jsxs("div", {
                                className: "space-y-2 text-gray-400",
                                children: [x.jsx("p", {
                                    children: x.jsx("a", {
                                        href: "tel:321-555-5865",
                                        className: "hover:text-brand-green-light transition-colors",
                                        children: "📞 (321) 555-JUNK"
                                    })
                                }), x.jsx("p", {
                                    children: "📧 info@shawrobinsonjunk.com"
                                }), x.jsx("p", {
                                    children: "📍 Serving All of Brevard County, FL"
                                })]
                            })]
                        }), x.jsxs("div", {
                            children: [x.jsx("span", {
                                className: "text-lg font-semibold text-white mb-4 block",
                                children: "Service Hours"
                            }), x.jsxs("div", {
                                className: "space-y-2 text-gray-400",
                                children: [x.jsx("p", {
                                    children: "Monday - Friday: 7AM - 7PM"
                                }), x.jsx("p", {
                                    children: "Saturday: 8AM - 6PM"
                                }), x.jsx("p", {
                                    children: "Sunday: 9AM - 5PM"
                                }), x.jsx("p", {
                                    className: "text-brand-green-light font-medium",
                                    children: "Emergency Service Available"
                                })]
                            })]
                        })]
                    }), x.jsx("div", {
                        className: "border-t border-white/10 mt-8 pt-8 text-center text-gray-400",
                        children: x.jsx("p", {
                            children: "© 2025 Shaw Robinson Junk Removal. All rights reserved. Licensed & Insured in Brevard County, FL."
                        })
                    })]
                })
            })]
        })]
    })
}
va.createRoot(document.getElementById("root")).render(x.jsx(K.StrictMode, {
    children: x.jsx(kP, {})
}));