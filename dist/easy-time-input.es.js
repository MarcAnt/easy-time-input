import * as ae from "react";
import ht, { useReducer as wt, useRef as Ce, useEffect as Ee, useCallback as yt, createContext as Ye, useContext as He, memo as xt } from "react";
var ke = { exports: {} }, he = {};
var Oe;
function kt() {
  if (Oe) return he;
  Oe = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, a, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      i = {};
      for (var u in a)
        u !== "key" && (i[u] = a[u]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: r,
      key: l,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return he.Fragment = t, he.jsx = o, he.jsxs = o, he;
}
var we = {};
var ze;
function vt() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === B ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case E:
          return "Fragment";
        case L:
          return "Profiler";
        case j:
          return "StrictMode";
        case G:
          return "Suspense";
        case T:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case I:
            return "Portal";
          case F:
            return s.displayName || "Context";
          case N:
            return (s._context.displayName || "Context") + ".Consumer";
          case Y:
            var g = s.render;
            return s = s.displayName, s || (s = g.displayName || g.name || "", s = s !== "" ? "ForwardRef(" + s + ")" : "ForwardRef"), s;
          case n:
            return g = s.displayName || null, g !== null ? g : e(s.type) || "Memo";
          case d:
            g = s._payload, s = s._init;
            try {
              return e(s(g));
            } catch {
            }
        }
      return null;
    }
    function t(s) {
      return "" + s;
    }
    function o(s) {
      try {
        t(s);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var h = g.error, x = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return h.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          x
        ), t(s);
      }
    }
    function r(s) {
      if (s === E) return "<>";
      if (typeof s == "object" && s !== null && s.$$typeof === d)
        return "<...>";
      try {
        var g = e(s);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var s = U.A;
      return s === null ? null : s.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(s) {
      if (ee.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function u(s, g) {
      function h() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      h.isReactWarning = !0, Object.defineProperty(s, "key", {
        get: h,
        configurable: !0
      });
    }
    function c() {
      var s = e(this.type);
      return Z[s] || (Z[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function b(s, g, h, x, W, oe) {
      var w = h.ref;
      return s = {
        $$typeof: O,
        type: s,
        key: g,
        props: h,
        _owner: x
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(s, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(s, "ref", { enumerable: !1, value: null }), s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(s, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(s, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function v(s, g, h, x, W, oe) {
      var w = g.children;
      if (w !== void 0)
        if (x)
          if (ie(w)) {
            for (x = 0; x < w.length; x++)
              _(w[x]);
            Object.freeze && Object.freeze(w);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(w);
      if (ee.call(g, "key")) {
        w = e(s);
        var K = Object.keys(g).filter(function(te) {
          return te !== "key";
        });
        x = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", re[w + x] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          x,
          w,
          K,
          w
        ), re[w + x] = !0);
      }
      if (w = null, h !== void 0 && (o(h), w = "" + h), l(g) && (o(g.key), w = "" + g.key), "key" in g) {
        h = {};
        for (var J in g)
          J !== "key" && (h[J] = g[J]);
      } else h = g;
      return w && u(
        h,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), b(
        s,
        w,
        h,
        a(),
        W,
        oe
      );
    }
    function _(s) {
      k(s) ? s._store && (s._store.validated = 1) : typeof s == "object" && s !== null && s.$$typeof === d && (s._payload.status === "fulfilled" ? k(s._payload.value) && s._payload.value._store && (s._payload.value._store.validated = 1) : s._store && (s._store.validated = 1));
    }
    function k(s) {
      return typeof s == "object" && s !== null && s.$$typeof === O;
    }
    var C = ht, O = /* @__PURE__ */ Symbol.for("react.transitional.element"), I = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), j = /* @__PURE__ */ Symbol.for("react.strict_mode"), L = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), Y = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.suspense_list"), n = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), U = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, ie = Array.isArray, X = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var H, Z = {}, p = C.react_stack_bottom_frame.bind(
      C,
      i
    )(), le = X(r(i)), re = {};
    we.Fragment = E, we.jsx = function(s, g, h) {
      var x = 1e4 > U.recentlyCreatedOwnerStacks++;
      return v(
        s,
        g,
        h,
        !1,
        x ? Error("react-stack-top-frame") : p,
        x ? X(r(s)) : le
      );
    }, we.jsxs = function(s, g, h) {
      var x = 1e4 > U.recentlyCreatedOwnerStacks++;
      return v(
        s,
        g,
        h,
        !0,
        x ? Error("react-stack-top-frame") : p,
        x ? X(r(s)) : le
      );
    };
  })()), we;
}
var De;
function Tt() {
  return De || (De = 1, process.env.NODE_ENV === "production" ? ke.exports = kt() : ke.exports = vt()), ke.exports;
}
var S = Tt();
const de = (e) => {
  e.current?.select(), e.current?.focus();
}, xe = (e, t, o, r) => {
  let a, i, l = !0;
  if (t && t instanceof Date ? a = new Date(t).toLocaleTimeString("en", {
    hour12: !1
  }) : a = t, o && o instanceof Date ? i = new Date(o).toLocaleTimeString("en", {
    hour12: !1
  }) : i = o, a) {
    const u = a.split(":");
    let c = e.split(":");
    c.length === 1 && (c = [c[0], "00"]), u[2] === void 0 && u.push("00");
    const b = new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(u[0]),
      parseInt(u[1]),
      r ? parseInt(u[2]) : 0
    );
    new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(c[0]),
      parseInt(c[1]),
      r ? parseInt(c[2]) : 0
    ).getTime() > b.getTime() && (l = !1);
  }
  if (i) {
    const u = i.split(":");
    let c = e.split(":");
    c.length === 1 && (c = [c[0], "00"]), u[2] === void 0 && u.push("00");
    const b = new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(u[0]),
      parseInt(u[1]),
      r ? parseInt(u[2]) : 0
    );
    new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(c[0]),
      parseInt(c[1]),
      r ? parseInt(c[2]) : 0
    ).getTime() < b.getTime() && (l = !1);
  }
  return l;
}, pe = (e, t, o) => {
  if (!e || e < 0) return 1;
  if (t) {
    if (e > 23 || o && e > 11) return 1;
  } else if (e > 59) return 1;
  return e ? Math.abs(Math.trunc(e)) : 1;
};
function We(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (o = We(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function _t() {
  for (var e, t, o = 0, r = "", a = arguments.length; o < a; o++) (e = arguments[o]) && (t = We(e)) && (r && (r += " "), r += t);
  return r;
}
const Ct = (e, t) => {
  const o = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    o[r] = e[r];
  for (let r = 0; r < t.length; r++)
    o[e.length + r] = t[r];
  return o;
}, Et = (e, t) => ({
  classGroupId: e,
  validator: t
}), Be = (e = /* @__PURE__ */ new Map(), t = null, o) => ({
  nextPart: e,
  validators: t,
  classGroupId: o
}), _e = "-", Le = [], St = "arbitrary..", $t = (e) => {
  const t = At(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return Rt(l);
      const u = l.split(_e), c = u[0] === "" && u.length > 1 ? 1 : 0;
      return Je(u, c, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const c = r[l], b = o[l];
        return c ? b ? Ct(b, c) : c : b || Le;
      }
      return o[l] || Le;
    }
  };
}, Je = (e, t, o) => {
  if (e.length - t === 0)
    return o.classGroupId;
  const a = e[t], i = o.nextPart.get(a);
  if (i) {
    const b = Je(e, t + 1, i);
    if (b) return b;
  }
  const l = o.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(_e) : e.slice(t).join(_e), c = l.length;
  for (let b = 0; b < c; b++) {
    const v = l[b];
    if (v.validator(u))
      return v.classGroupId;
  }
}, Rt = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), o = t.indexOf(":"), r = t.slice(0, o);
  return r ? St + r : void 0;
})(), At = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e;
  return Pt(o, t);
}, Pt = (e, t) => {
  const o = Be();
  for (const r in e) {
    const a = e[r];
    Ie(a, o, r, t);
  }
  return o;
}, Ie = (e, t, o, r) => {
  const a = e.length;
  for (let i = 0; i < a; i++) {
    const l = e[i];
    Nt(l, t, o, r);
  }
}, Nt = (e, t, o, r) => {
  if (typeof e == "string") {
    It(e, t, o);
    return;
  }
  if (typeof e == "function") {
    Mt(e, t, o, r);
    return;
  }
  jt(e, t, o, r);
}, It = (e, t, o) => {
  const r = e === "" ? t : qe(t, e);
  r.classGroupId = o;
}, Mt = (e, t, o, r) => {
  if (Ot(e)) {
    Ie(e(r), t, o, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Et(o, e));
}, jt = (e, t, o, r) => {
  const a = Object.entries(e), i = a.length;
  for (let l = 0; l < i; l++) {
    const [u, c] = a[l];
    Ie(c, qe(t, u), o, r);
  }
}, qe = (e, t) => {
  let o = e;
  const r = t.split(_e), a = r.length;
  for (let i = 0; i < a; i++) {
    const l = r[i];
    let u = o.nextPart.get(l);
    u || (u = Be(), o.nextPart.set(l, u)), o = u;
  }
  return o;
}, Ot = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, zt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const a = (i, l) => {
    o[i] = l, t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(i) {
      let l = o[i];
      if (l !== void 0)
        return l;
      if ((l = r[i]) !== void 0)
        return a(i, l), l;
    },
    set(i, l) {
      i in o ? o[i] = l : a(i, l);
    }
  };
}, Ne = "!", Ve = ":", Dt = [], Fe = (e, t, o, r, a) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: a
}), Lt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (a) => {
    const i = [];
    let l = 0, u = 0, c = 0, b;
    const v = a.length;
    for (let I = 0; I < v; I++) {
      const E = a[I];
      if (l === 0 && u === 0) {
        if (E === Ve) {
          i.push(a.slice(c, I)), c = I + 1;
          continue;
        }
        if (E === "/") {
          b = I;
          continue;
        }
      }
      E === "[" ? l++ : E === "]" ? l-- : E === "(" ? u++ : E === ")" && u--;
    }
    const _ = i.length === 0 ? a : a.slice(c);
    let k = _, C = !1;
    _.endsWith(Ne) ? (k = _.slice(0, -1), C = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      _.startsWith(Ne) && (k = _.slice(1), C = !0)
    );
    const O = b && b > c ? b - c : void 0;
    return Fe(i, C, k, O);
  };
  if (t) {
    const a = t + Ve, i = r;
    r = (l) => l.startsWith(a) ? i(l.slice(a.length)) : Fe(Dt, !1, l, void 0, !0);
  }
  if (o) {
    const a = r;
    r = (i) => o({
      className: i,
      parseClassName: a
    });
  }
  return r;
}, Vt = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((o, r) => {
    t.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let a = [];
    for (let i = 0; i < o.length; i++) {
      const l = o[i], u = l[0] === "[", c = t.has(l);
      u || c ? (a.length > 0 && (a.sort(), r.push(...a), a = []), r.push(l)) : a.push(l);
    }
    return a.length > 0 && (a.sort(), r.push(...a)), r;
  };
}, Ft = (e) => ({
  cache: zt(e.cacheSize),
  parseClassName: Lt(e),
  sortModifiers: Vt(e),
  ...$t(e)
}), Gt = /\s+/, Ut = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: a,
    sortModifiers: i
  } = t, l = [], u = e.trim().split(Gt);
  let c = "";
  for (let b = u.length - 1; b >= 0; b -= 1) {
    const v = u[b], {
      isExternal: _,
      modifiers: k,
      hasImportantModifier: C,
      baseClassName: O,
      maybePostfixModifierPosition: I
    } = o(v);
    if (_) {
      c = v + (c.length > 0 ? " " + c : c);
      continue;
    }
    let E = !!I, j = r(E ? O.substring(0, I) : O);
    if (!j) {
      if (!E) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (j = r(O), !j) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      E = !1;
    }
    const L = k.length === 0 ? "" : k.length === 1 ? k[0] : i(k).join(":"), N = C ? L + Ne : L, F = N + j;
    if (l.indexOf(F) > -1)
      continue;
    l.push(F);
    const Y = a(j, E);
    for (let G = 0; G < Y.length; ++G) {
      const T = Y[G];
      l.push(N + T);
    }
    c = v + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Yt = (...e) => {
  let t = 0, o, r, a = "";
  for (; t < e.length; )
    (o = e[t++]) && (r = Xe(o)) && (a && (a += " "), a += r);
  return a;
}, Xe = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Xe(e[r])) && (o && (o += " "), o += t);
  return o;
}, Ht = (e, ...t) => {
  let o, r, a, i;
  const l = (c) => {
    const b = t.reduce((v, _) => _(v), e());
    return o = Ft(b), r = o.cache.get, a = o.cache.set, i = u, u(c);
  }, u = (c) => {
    const b = r(c);
    if (b)
      return b;
    const v = Ut(c, o);
    return a(c, v), v;
  };
  return i = l, (...c) => i(Yt(...c));
}, Wt = [], D = (e) => {
  const t = (o) => o[e] || Wt;
  return t.isThemeGetter = !0, t;
}, Ze = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ke = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Bt = /^\d+\/\d+$/, Jt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Zt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Kt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, fe = (e) => Bt.test(e), y = (e) => !!e && !Number.isNaN(Number(e)), se = (e) => !!e && Number.isInteger(Number(e)), Se = (e) => e.endsWith("%") && y(e.slice(0, -1)), ne = (e) => Jt.test(e), Qt = () => !0, er = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qt.test(e) && !Xt.test(e)
), Qe = () => !1, tr = (e) => Zt.test(e), rr = (e) => Kt.test(e), or = (e) => !m(e) && !f(e), nr = (e) => be(e, rt, Qe), m = (e) => Ze.test(e), ue = (e) => be(e, ot, er), $e = (e) => be(e, cr, y), Ge = (e) => be(e, et, Qe), sr = (e) => be(e, tt, rr), ve = (e) => be(e, nt, tr), f = (e) => Ke.test(e), ye = (e) => ge(e, ot), ar = (e) => ge(e, dr), Ue = (e) => ge(e, et), ir = (e) => ge(e, rt), lr = (e) => ge(e, tt), Te = (e) => ge(e, nt, !0), be = (e, t, o) => {
  const r = Ze.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, ge = (e, t, o = !1) => {
  const r = Ke.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, et = (e) => e === "position" || e === "percentage", tt = (e) => e === "image" || e === "url", rt = (e) => e === "length" || e === "size" || e === "bg-size", ot = (e) => e === "length", cr = (e) => e === "number", dr = (e) => e === "family-name", nt = (e) => e === "shadow", ur = () => {
  const e = D("color"), t = D("font"), o = D("text"), r = D("font-weight"), a = D("tracking"), i = D("leading"), l = D("breakpoint"), u = D("container"), c = D("spacing"), b = D("radius"), v = D("shadow"), _ = D("inset-shadow"), k = D("text-shadow"), C = D("drop-shadow"), O = D("blur"), I = D("perspective"), E = D("aspect"), j = D("ease"), L = D("animate"), N = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], Y = () => [...F(), f, m], G = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", "contain", "none"], n = () => [f, m, c], d = () => [fe, "full", "auto", ...n()], A = () => [se, "none", "subgrid", f, m], B = () => ["auto", {
    span: ["full", se, f, m]
  }, se, f, m], U = () => [se, "auto", f, m], ee = () => ["auto", "min", "max", "fr", f, m], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], X = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ...n()], Z = () => [fe, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...n()], p = () => [e, f, m], le = () => [...F(), Ue, Ge, {
    position: [f, m]
  }], re = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], s = () => ["auto", "cover", "contain", ir, nr, {
    size: [f, m]
  }], g = () => [Se, ye, ue], h = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    b,
    f,
    m
  ], x = () => ["", y, ye, ue], W = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], w = () => [y, Se, Ue, Ge], K = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    O,
    f,
    m
  ], J = () => ["none", y, f, m], te = () => ["none", y, f, m], ce = () => [y, f, m], me = () => [fe, "full", ...n()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ne],
      breakpoint: [ne],
      color: [Qt],
      container: [ne],
      "drop-shadow": [ne],
      ease: ["in", "out", "in-out"],
      font: [or],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ne],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ne],
      shadow: [ne],
      spacing: ["px", y],
      text: [ne],
      "text-shadow": [ne],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", fe, m, f, E]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [y, m, f, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": N()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": N()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: Y()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: T()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": T()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": T()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: d()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": d()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": d()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: d()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: d()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: d()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: d()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: d()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: d()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [se, "auto", f, m]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [fe, "full", "auto", u, ...n()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [y, fe, "auto", "initial", "none", m]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", y, f, m]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", y, f, m]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [se, "first", "last", "none", f, m]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: B()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: B()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ee()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ee()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: n()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": n()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": n()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ie(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...X(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...X()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ie()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ie()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...X(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...X()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: n()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: n()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: n()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: n()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: n()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: n()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: n()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: n()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: n()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: H()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: H()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: H()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: H()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: H()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: H()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: H()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: H()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: H()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": n()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": n()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...Z()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Z()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          u,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...Z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, ye, ue]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, f, $e]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Se, m]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ar, m, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [a, f, m]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [y, "none", f, $e]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...n()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", f, m]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", f, m]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: p()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: p()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [y, "from-font", "auto", f, ue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: p()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [y, "auto", f, m]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: n()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", f, m]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", f, m]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: le()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: re()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: s()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, se, f, m],
          radial: ["", f, m],
          conic: [se, f, m]
        }, lr, sr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: p()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: g()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: g()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: g()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: p()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: p()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: p()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: h()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": h()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": h()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": h()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": h()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": h()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": h()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": h()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": h()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": h()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": h()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": h()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": h()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": h()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": h()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: x()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": x()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": x()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": x()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": x()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": x()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": x()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": x()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": x()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": x()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": x()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...W(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...W(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: p()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": p()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": p()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": p()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": p()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": p()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": p()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": p()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": p()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: p()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...W(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [y, f, m]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", y, ye, ue]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: p()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          Te,
          ve
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: p()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", _, Te, ve]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": p()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: x()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: p()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [y, ue]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": p()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": x()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": p()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", k, Te, ve]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": p()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y, f, m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [y]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": w()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": w()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": p()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": p()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": w()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": w()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": p()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": p()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": w()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": w()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": p()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": p()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": w()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": w()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": p()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": p()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": w()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": w()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": p()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": p()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": w()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": w()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": p()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": p()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": w()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": w()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": p()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": p()
      }],
      "mask-image-radial": [{
        "mask-radial": [f, m]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": w()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": w()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": p()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": p()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": F()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [y]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": w()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": w()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": p()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": p()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: le()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: re()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: s()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", f, m]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          f,
          m
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: K()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [y, f, m]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [y, f, m]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          C,
          Te,
          ve
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": p()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", y, f, m]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [y, f, m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", y, f, m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y, f, m]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", y, f, m]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          f,
          m
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": K()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [y, f, m]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [y, f, m]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", y, f, m]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [y, f, m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", y, f, m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y, f, m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y, f, m]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", y, f, m]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": n()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": n()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": n()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", f, m]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [y, "initial", f, m]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", j, f, m]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [y, f, m]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", L, f, m]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [I, f, m]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Y()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: te()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": te()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": te()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": te()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ce()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ce()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ce()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [f, m, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Y()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: me()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": me()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": me()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": me()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: p()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: p()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", f, m]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": n()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": n()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": n()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": n()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": n()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": n()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": n()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": n()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": n()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": n()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": n()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": n()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": n()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": n()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": n()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": n()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": n()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": n()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", f, m]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...p()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [y, ye, ue, $e]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...p()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
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
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, mr = /* @__PURE__ */ Ht(ur), fr = (e, t) => {
  const [o, r, a] = e.split(":"), i = +o % 12 === 0 ? 12 : +o % 12;
  switch (t) {
    case "HH:mm:ss":
      return `${o}:${r}:${a}`;
    case "HH:mm":
      return `${o}:${r}`;
    case "hh:mm:ss":
      return `${i}:${r}:${a}`;
    case "hh:mm":
      return `${i}:${r}`;
  }
}, q = (...e) => mr(_t(e)), Re = (e, t, o) => {
  if (!e) return "00";
  if (!isNaN(new Date(e).getTime())) {
    const r = new Date(e).getHours();
    return t ? r.toString() : o && o.includes("hh") ? r < 1 ? "1" : `${r % 12}` : r < 10 ? `0${r}` : r.toString();
  }
  if (e instanceof Date) {
    const r = new Date(e).getHours();
    return r < 10 ? `0${r}` : r.toString();
  }
  if (typeof e == "string" && e.includes(":")) {
    const r = e.split(":")[0];
    if (r === void 0)
      return t ? "1" : "00";
    if (isNaN(parseInt(r)))
      return "";
    const a = fr(e, o);
    let i = r;
    if (a)
      return i = a.split(":")[0], i;
    if (parseInt(i) < 0)
      return Math.abs(parseInt(i)) < 10 ? `0${Math.abs(parseInt(i))}` : `${Math.abs(parseInt(i))}`;
    if (t) {
      let l;
      return l = `${+i % 12 === 0 ? 12 : +i % 12}`, l;
    } else
      return r.length < 2 ? `0${r}` : r;
  }
  return t ? "1" : "00";
}, Ae = (e) => {
  if (!e) return "00";
  if (!isNaN(new Date(e).getTime())) {
    const t = new Date(e).getMinutes();
    return t < 10 ? `0${t}` : t.toString();
  }
  if (e instanceof Date)
    return e.getMinutes().toString();
  if (typeof e == "string" && e.includes(":")) {
    const t = e.split(":")[1];
    return t === void 0 ? "00" : isNaN(parseInt(t)) ? "" : Math.abs(parseInt(t)) < 10 ? `0${Math.abs(parseInt(t))}` : `${Math.abs(parseInt(t))}`;
  }
  return "00";
}, Pe = (e) => {
  if (!e) return "00";
  if (!isNaN(new Date(e).getTime())) {
    const t = new Date(e).getSeconds();
    return t < 10 ? `0${t}` : t.toString();
  }
  if (e instanceof Date)
    return e.getSeconds().toString();
  if (typeof e == "string" && e.includes(":")) {
    const t = e.split(":")[2];
    return t === void 0 ? "00" : isNaN(parseInt(t)) ? "" : Math.abs(parseInt(t)) < 10 ? `0${Math.abs(parseInt(t))}` : `${Math.abs(parseInt(t))}`;
  }
  return "00";
}, pr = (e, t) => {
  switch (t.type) {
    case "SET_HOURS":
      return {
        ...e,
        hours: t.payload
      };
    case "SET_MINUTES":
      return { ...e, minutes: t.payload };
    case "SET_SECONDS":
      return { ...e, seconds: t.payload };
    case "TOGGLE_AM":
      return { ...e, isAm: t.payload };
    case "INPUT_TYPE":
      return { ...e, inputType: t.payload };
    default:
      return e;
  }
}, br = ({
  value: e,
  onChange: t,
  hasSeconds: o,
  hour12: r,
  maxTime: a,
  minTime: i,
  format: l
}) => {
  const [u, c] = wt(pr, {
    isAm: !1,
    inputType: "hours",
    hours: Re(e, r, l),
    minutes: Ae(e),
    seconds: Pe(e),
    hour12: r,
    format: l
  }), { isAm: b, inputType: v, hours: _, minutes: k, seconds: C } = u, O = Ce(null), I = Ce(null), E = Ce(null), j = `${_}:${k}:${C}`, L = `${Re(
    e,
    r,
    l
  )}:${Ae(e)}:${Pe(e)}`;
  Ee(() => {
    e && typeof e == "string" && +e?.split(":")[0] < 12 && r && c({ type: "TOGGLE_AM", payload: !0 });
  }, []), Ee(() => {
    !e && t && t(j);
  }, []), Ee(() => {
    if (t) {
      const T = L?.split(":")[0], n = L?.split(":")[1], d = L?.split(":")[2];
      let A = T;
      !b && r && +T < 12 && (A = `${+T + 12}`), t(`${A}:${n}:${d}`);
    }
  }, [b]), e && t && L !== j && (c({
    type: "SET_HOURS",
    payload: Re(e, r, l)
  }), c({
    type: "SET_MINUTES",
    payload: Ae(e)
  }), c({
    type: "SET_SECONDS",
    payload: Pe(e)
  }));
  const N = yt(
    (T, n, d) => {
      let A;
      if (t && e || e === "" && T && t) {
        if (A = o ? `${T}:${n}:${d}` : `${T}:${n}`, (a || i) && !xe(
          A,
          a,
          i,
          o
        ))
          return;
        t(A);
        return;
      } else {
        let B;
        if (B = o ? `${T}:${n}:${d}` : `${T}:${n}`, (a || i) && !xe(
          B,
          a,
          i,
          o
        ))
          return;
        c({ type: "SET_HOURS", payload: T }), c({ type: "SET_MINUTES", payload: n }), c({ type: "SET_SECONDS", payload: d });
        return;
      }
    },
    [t, e, o]
  );
  return {
    hoursRef: O,
    minutesRef: I,
    secondsRef: E,
    handleHours: (T) => {
      const { currentTarget: n } = T;
      if (n.value === "") {
        N(n.value, k, C);
        return;
      }
      if (n.value && n.valueAsNumber < 24 && n.valueAsNumber >= 0) {
        const d = n.value.slice(-2);
        if (t)
          if (r)
            if (b) {
              N(
                +d % 12 === 0 ? "0" : `${+d}`,
                k,
                C
              );
              return;
            } else {
              N(
                +d % 12 === 0 ? "0" : `${+d + 12}`,
                k,
                C
              );
              return;
            }
          else {
            N(
              d.length < 2 ? `0${d}` : d,
              k,
              C
            );
            return;
          }
        else {
          if ((a || i) && !xe(
            d,
            a,
            i,
            o
          ))
            return;
          if (l && l.includes("hh")) {
            const A = +d > 11 ? "12" : `${+d < 1 ? "1" : +d % 12}`;
            c({ type: "SET_HOURS", payload: A });
          } else {
            const A = d.length < 2 ? `0${d}` : d;
            c({ type: "SET_HOURS", payload: A });
          }
        }
      }
    },
    handleMinutes: (T) => {
      const { currentTarget: n } = T;
      if (n.value === "") {
        N(_, n.value, C);
        return;
      }
      if (n.value && n.valueAsNumber < 60 && n.valueAsNumber >= 0) {
        const d = n.value.slice(-2);
        if (t)
          N(
            _,
            d.length < 2 ? `0${+d}` : `${+d}`,
            C
          );
        else {
          const A = d.length < 2 ? `0${d}` : d;
          c({ type: "SET_MINUTES", payload: A });
        }
      }
    },
    handleSeconds: (T) => {
      const { currentTarget: n } = T;
      if (n.value === "") {
        N(_, k, n.value);
        return;
      }
      if (n.value && n.valueAsNumber < 60 && n.valueAsNumber >= 0) {
        const d = n.value.slice(-2);
        if (t)
          N(
            _,
            k,
            d.length < 2 ? `0${d}` : d
          );
        else {
          const A = d.length < 2 ? `0${d}` : d;
          c({ type: "SET_SECONDS", payload: A });
        }
      }
    },
    inputType: v,
    updateTime: N,
    hours: _,
    minutes: k,
    seconds: C,
    isAm: b,
    state: u,
    dispatch: c
  };
}, gr = (e) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-up", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ ae.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ ae.createElement("path", { d: "M6 15l6 -6l6 6" })), hr = (e) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-down", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ ae.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ ae.createElement("path", { d: "M6 9l6 6l6 -6" })), wr = "_mainContainer_1wywx_2", yr = "_inputsContainer_1wywx_15", xr = "_disabled_1wywx_38", kr = "_hourContainer_1wywx_57", vr = "_hh_1wywx_57", Tr = "_noValue_1wywx_57", _r = "_hyphen_1wywx_61", Cr = "_noZero_1wywx_65", Er = "_minutesContainer_1wywx_69", Sr = "_mm_1wywx_69", $r = "_withSeconds_1wywx_81", Rr = "_secondsContainer_1wywx_89", Ar = "_timerContainer_1wywx_108", Pr = "_iconContainer_1wywx_118", Nr = "_arrowsContainer_1wywx_130", Ir = "_toggleAmPmContainer_1wywx_148", R = {
  mainContainer: wr,
  inputsContainer: yr,
  disabled: xr,
  hourContainer: kr,
  hh: vr,
  noValue: Tr,
  hyphen: _r,
  noZero: Cr,
  minutesContainer: Er,
  mm: Sr,
  withSeconds: $r,
  secondsContainer: Rr,
  timerContainer: Ar,
  iconContainer: Pr,
  arrowsContainer: Nr,
  toggleAmPmContainer: Ir
}, Mr = (e) => {
  const {
    inputType: t,
    updateTime: o,
    hours: r,
    minutes: a,
    seconds: i,
    hour12: l,
    isAm: u,
    maxTime: c,
    minTime: b,
    format: v,
    stepHours: _,
    stepMinutes: k,
    stepSeconds: C,
    readOnly: O,
    readOnlyHours: I,
    readOnlyMinutes: E,
    readOnlySeconds: j
  } = e;
  let L = pe(_, !0, l), N = pe(k, !1, l), F = pe(C, !1, l);
  return { handleAddTime: (T) => {
    if (T.preventDefault(), !O) {
      if (t === "hours") {
        if (I || (c || b) && !xe(
          `${+r + 1}`,
          c,
          b
        ))
          return;
        const n = _ ? +r + L : +r + 1;
        let d;
        l ? u ? d = `${n > 11 ? "12" : n}` : d = `${n > 11 ? "00" : n + 12}` : v && v.includes("hh") ? d = `${n > 11 ? "12" : +n % 12}` : d = `${n < 0 ? "00" : n < 10 ? `0${n}` : n < 24 ? n : _ ? n - _ : 23}`, o(d, a, i);
      }
      if (t === "minutes") {
        if (E) return;
        const n = k ? +a + N : +a + 1, d = `${n < 10 ? `0${n}` : n < 60 ? n : k ? n - k : 59}`;
        o(r, d, i);
      }
      if (t === "seconds") {
        if (j) return;
        const n = C ? +i + F : +i + 1, d = `${n < 10 ? `0${n}` : n < 60 ? n : C ? n - C : 59}`;
        o(r, a, d);
      }
    }
  }, handleRemoveTime: (T) => {
    if (T.preventDefault(), !O) {
      if (t === "hours") {
        if (I || (c || b) && !xe(
          `${+r - 1}`,
          c,
          b
        ))
          return;
        const n = _ ? +r - _ : +r - 1;
        let d;
        l ? u ? d = `${n < 1 ? "1" : n}` : d = `${n < 1 ? "13" : n + 12}` : v && v.includes("hh") ? d = `${n < 1 ? "1" : n}` : d = `${n < 0 ? "00" : n < 10 ? `0${n}` : n}`, o(d, a, i);
      }
      if (t === "minutes") {
        if (E) return;
        const n = k ? +a - k : +a - 1, d = `${n < 0 ? "00" : n < 10 ? `0${n}` : n}`;
        o(r, d, i);
      }
      if (t === "seconds") {
        if (j) return;
        const n = C ? +i - C : +i - 1, d = `${n < 0 ? "00" : n < 10 ? `0${n}` : n}`;
        o(r, a, d);
      }
    }
  } };
}, st = Ye(null), jr = ({
  children: e,
  props: t
}) => {
  const { handleAddTime: o, handleRemoveTime: r } = Mr(t), { controlsClassName: a, disabled: i, inputType: l } = t;
  return /* @__PURE__ */ S.jsx(
    st,
    {
      value: {
        controlsClassName: a,
        disabled: i,
        handleAddTime: o,
        handleRemoveTime: r,
        inputType: l
      },
      children: e
    }
  );
}, Or = () => {
  const e = He(st);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
}, zr = xt(function() {
  const {
    controlsClassName: t,
    disabled: o,
    handleAddTime: r,
    handleRemoveTime: a,
    inputType: i
  } = Or();
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: q(R.arrowsContainer, t),
      "aria-label": `${i}-controls`,
      children: [
        /* @__PURE__ */ S.jsx(
          "button",
          {
            onClick: (l) => r(l),
            disabled: o,
            "aria-label": "add-time",
            tabIndex: 0,
            children: /* @__PURE__ */ S.jsx(gr, {})
          }
        ),
        /* @__PURE__ */ S.jsx(
          "button",
          {
            disabled: o,
            onClick: (l) => a(l),
            "aria-label": "remove-time",
            tabIndex: 0,
            children: /* @__PURE__ */ S.jsx(hr, {})
          }
        )
      ]
    }
  );
}), Dr = (e) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", ...e }, /* @__PURE__ */ ae.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" })), at = Ye(
  null
), Lr = ({
  children: e,
  props: t
}) => {
  const { dispatch: o, amPmAriaLabel: r, disabled: a, isAm: i } = t, l = () => {
    o({ type: "TOGGLE_AM", payload: !i });
  };
  return /* @__PURE__ */ S.jsx(
    at,
    {
      value: {
        handleToggleAmPm: l,
        amPmAriaLabel: r,
        isAm: i,
        disabled: a
      },
      children: e
    }
  );
}, Vr = () => {
  const e = He(at);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
}, Fr = () => {
  const { handleToggleAmPm: e, isAm: t, disabled: o, amPmAriaLabel: r } = Vr();
  return /* @__PURE__ */ S.jsx(
    "button",
    {
      id: "toggle-am-pm",
      "aria-label": r,
      onClick: e,
      disabled: o,
      title: "AM/PM button",
      type: "button",
      children: t ? "AM" : "PM"
    }
  );
}, Gr = ({
  props: e,
  children: t
}) => {
  const {
    inputType: o,
    isAm: r,
    disabled: a,
    disabledHours: i,
    disabledMinutes: l,
    disabledSeconds: u,
    controlsClassName: c,
    format: b,
    hour12: v,
    amPmAriaLabel: _,
    updateTime: k,
    hours: C,
    minutes: O,
    seconds: I,
    state: E,
    dispatch: j,
    stepHours: L,
    stepMinutes: N,
    stepSeconds: F,
    readOnly: Y,
    readOnlyHours: G,
    readOnlyMinutes: T,
    readOnlySeconds: n
  } = e;
  return /* @__PURE__ */ S.jsx(
    jr,
    {
      props: {
        inputType: o,
        disabled: a || i || l || u,
        updateTime: k,
        hours: C,
        minutes: O,
        seconds: I,
        controlsClassName: c,
        format: b,
        hour12: v,
        isAm: r,
        state: E,
        dispatch: j,
        stepHours: L,
        stepMinutes: N,
        stepSeconds: F,
        readOnly: Y,
        readOnlyHours: G,
        readOnlyMinutes: T,
        readOnlySeconds: n
      },
      children: /* @__PURE__ */ S.jsx(
        Lr,
        {
          props: {
            isAm: r,
            amPmAriaLabel: _,
            disabled: a || i || l || u,
            state: E,
            dispatch: j
          },
          children: t
        }
      )
    }
  );
}, Yr = ({
  id: e,
  value: t,
  dataTestId: o,
  hoursPlaceholder: r = "--",
  minutesPlaceholder: a = "--",
  secondsPlaceholder: i = "--",
  name: l = "time",
  disabled: u,
  required: c,
  onChange: b,
  className: v,
  inputsContainerClassName: _,
  colonClassName: k,
  iconClockClassName: C,
  amPmButtonClassName: O,
  controlsClassName: I,
  inputClassName: E,
  dividerClassName: j,
  ariaLabel: L = "time",
  iconAriaLabel: N = "clock",
  hoursAriaLabel: F = "hours",
  minutesAriaLabel: Y = "minutes",
  secondsAriaLabel: G = "seconds",
  amPmAriaLabel: T = "am-pm",
  hasSeconds: n = !1,
  hour12: d = !1,
  disableFocusOnIcon: A = !1,
  disabledHours: B,
  disabledMinutes: U,
  disabledSeconds: ee,
  maxTime: ie,
  minTime: X,
  hideControls: H = !1,
  hoursInputTitle: Z = "Hours input",
  minutesInputTitle: p = "Minutes input",
  secondsInputTitle: le = "Seconds input",
  setZeroOnBlur: re = !1,
  format: s,
  stepHours: g = 1,
  stepMinutes: h = 1,
  stepSeconds: x = 1,
  readOnly: W = !1,
  readOnlyHours: oe = !1,
  readOnlyMinutes: w = !1,
  readOnlySeconds: K = !1
}) => {
  const {
    hoursRef: J,
    minutesRef: te,
    secondsRef: ce,
    inputType: me,
    updateTime: V,
    handleHours: it,
    handleMinutes: lt,
    handleSeconds: ct,
    hours: P,
    minutes: M,
    seconds: z,
    isAm: Me,
    state: dt,
    dispatch: Q
  } = br({
    value: t,
    onChange: b,
    hasSeconds: n,
    hour12: d,
    maxTime: ie,
    minTime: X,
    format: s
  }), ut = `${R.timerContainer} ${R.hourContainer}
  ${r === "--" ? R.hyphen : R.hh} 
  ${P === "" ? R.noValue : ""} 
  ${d && +P < 10 ? R.noZero : ""} `, mt = `${R.timerContainer} ${R.minutesContainer} ${n ? R.withSeconds : ""}
  ${a === "--" ? R.hyphen : R.mm}  
  ${M === "" ? R.noValue : ""}  
  ${+M > 9 ? R.noZero : ""}`, ft = `${R.timerContainer} ${R.secondsContainer}`, je = s?.includes("ss") || n, pt = s?.includes("hh"), bt = ` ${u || B || U ? R.disabled : ""}  `, gt = ` ${u || U || ee ? R.disabled : ""}  `;
  return /* @__PURE__ */ S.jsx(
    Gr,
    {
      props: {
        hours: P,
        minutes: M,
        seconds: z,
        isAm: Me,
        inputType: me,
        disabled: u,
        controlsClassName: I,
        hour12: d,
        amPmAriaLabel: T,
        updateTime: V,
        format: pt ? "hh" : "HH",
        disabledHours: B,
        disabledMinutes: U,
        disabledSeconds: ee,
        state: dt,
        dispatch: Q,
        stepHours: g,
        stepMinutes: h,
        stepSeconds: x,
        readOnly: W,
        readOnlyHours: oe,
        readOnlyMinutes: w,
        readOnlySeconds: K
      },
      children: /* @__PURE__ */ S.jsxs(
        "div",
        {
          className: q(
            `${R.mainContainer} ${u ? R.disabled : ""}`,
            v
          ),
          "data-testid": o,
          role: "textbox",
          tabIndex: 0,
          children: [
            !A && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: q(R.iconContainer, C),
                role: "button",
                onClick: () => {
                  Q({ type: "INPUT_TYPE", payload: "hours" }), de(J);
                },
                "aria-label": N,
                children: /* @__PURE__ */ S.jsx(Dr, {})
              }
            ),
            /* @__PURE__ */ S.jsxs("div", { className: q(R.inputsContainer, _), children: [
              /* @__PURE__ */ S.jsxs(
                "div",
                {
                  className: q(ut),
                  onClick: ($) => {
                    $.preventDefault(), Q({ type: "INPUT_TYPE", payload: "hours" }), de(J);
                  },
                  children: [
                    /* @__PURE__ */ S.jsx(
                      "input",
                      {
                        type: "hidden",
                        name: l,
                        "aria-label": L,
                        value: je ? `${P}:${M}:${z}` : `${P}:${M}`
                      }
                    ),
                    /* @__PURE__ */ S.jsx(
                      "input",
                      {
                        type: "number",
                        id: e,
                        autoComplete: "off",
                        minLength: 1,
                        maxLength: 2,
                        readOnly: W || oe,
                        step: pe(g, !0, d),
                        min: d ? 1 : 0,
                        max: d ? 12 : 23,
                        inputMode: "numeric",
                        value: P,
                        onChange: it,
                        pattern: "^(2[0-3]|[01]?[0-9])$",
                        placeholder: r,
                        required: c,
                        className: q(
                          B ? R.disabled : "",
                          E
                        ),
                        onBlur: () => {
                          if (re && P.length < 2) {
                            if (d) {
                              V(
                                +P > 12 ? "12" : Me ? P : `${+P + 12}`,
                                M,
                                z
                              );
                              return;
                            }
                            V(`0${P}`, M, z);
                            return;
                          }
                        },
                        onKeyDown: ($) => {
                          if ($.key === "Tab") {
                            if (Q({ type: "INPUT_TYPE", payload: "minutes" }), P === "") {
                              V("00", M, z);
                              return;
                            }
                            if (P.length < 2) {
                              V(`0${P}`, M, z);
                              return;
                            }
                          }
                          if ($.key === "Backspace") {
                            V("", M, z);
                            return;
                          }
                          return ["e", "E", "+", "-"].includes($.key) && $.preventDefault();
                        },
                        onClick: ($) => {
                          $.preventDefault(), de(J), Q({ type: "INPUT_TYPE", payload: "hours" });
                        },
                        tabIndex: 0,
                        disabled: u || B,
                        "aria-label": F,
                        name: `hours-${l}`,
                        ref: J,
                        title: Z
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ S.jsx(
                "span",
                {
                  className: q(
                    j,
                    bt,
                    k
                  ),
                  children: ":"
                }
              ),
              /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: q(mt),
                  onClick: ($) => {
                    $.preventDefault(), Q({ type: "INPUT_TYPE", payload: "minutes" }), de(te);
                  },
                  children: /* @__PURE__ */ S.jsx(
                    "input",
                    {
                      type: "number",
                      autoComplete: "off",
                      min: 0,
                      max: 59,
                      step: pe(h, !1, d),
                      size: 2,
                      readOnly: W || w,
                      placeholder: a,
                      value: M,
                      className: q(
                        U ? R.disabled : "",
                        E
                      ),
                      inputMode: "numeric",
                      onChange: lt,
                      pattern: "^([0-5]?[0-9])$",
                      required: c,
                      onBlur: () => {
                        if (re) {
                          if (M === "") {
                            V(P, "00", z);
                            return;
                          }
                          if (M.length < 2) {
                            V(P, `0${M}`, z);
                            return;
                          }
                        }
                      },
                      onKeyDown: ($) => {
                        if ($.key === "Tab" && n) {
                          if (M === "") {
                            V(P, "00", z);
                            return;
                          }
                          if (M.length < 2) {
                            V(P, `0${M}`, z);
                            return;
                          }
                          Q({ type: "INPUT_TYPE", payload: "seconds" });
                        }
                        if ($.key === "Backspace") {
                          V(P, "", z);
                          return;
                        }
                        return ["e", "E", "+", "-"].includes($.key) && $.preventDefault();
                      },
                      onClick: ($) => {
                        $.preventDefault(), de(te), Q({ type: "INPUT_TYPE", payload: "minutes" });
                      },
                      ref: te,
                      tabIndex: 0,
                      disabled: u || U,
                      "aria-label": Y,
                      name: `minutes-${l}`,
                      title: p
                    }
                  )
                }
              ),
              je ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
                /* @__PURE__ */ S.jsx(
                  "span",
                  {
                    className: q(
                      j,
                      gt,
                      k
                    ),
                    children: ":"
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  "div",
                  {
                    className: q(ft),
                    onClick: ($) => {
                      $.preventDefault(), Q({ type: "INPUT_TYPE", payload: "seconds" }), de(ce);
                    },
                    children: /* @__PURE__ */ S.jsx(
                      "input",
                      {
                        type: "number",
                        autoComplete: "off",
                        step: pe(x, !1, d),
                        size: 2,
                        min: 0,
                        max: 59,
                        readOnly: W || K,
                        placeholder: i,
                        value: z,
                        className: q(
                          ee ? R.disabled : "",
                          E
                        ),
                        pattern: "^([0-5]?[0-9])$",
                        required: c,
                        onBlur: () => {
                          if (re) {
                            if (z === "") {
                              V(P, M, "00");
                              return;
                            }
                            if (z.length < 2) {
                              V(P, M, `0${z}`);
                              return;
                            }
                          }
                        },
                        onKeyDown: ($) => {
                          if ($.key === "Tab") {
                            if (z === "") {
                              V(P, M, "00");
                              return;
                            }
                            if (z.length < 2) {
                              V(P, M, `0${z}`);
                              return;
                            }
                            Q({ type: "INPUT_TYPE", payload: "seconds" });
                          }
                          if ($.key === "Backspace") {
                            V(P, M, "");
                            return;
                          }
                          return ["e", "E", "+", "-"].includes($.key) && $.preventDefault();
                        },
                        onChange: ct,
                        onClick: ($) => {
                          $.preventDefault(), de(ce), Q({ type: "INPUT_TYPE", payload: "seconds" });
                        },
                        tabIndex: 0,
                        disabled: u || ee,
                        ref: ce,
                        "aria-label": G,
                        name: `seconds-${l}`,
                        title: le
                      }
                    )
                  }
                )
              ] }) : null,
              d && /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: q(R.toggleAmPmContainer, O),
                  title: "AM/PM button",
                  children: /* @__PURE__ */ S.jsx(Fr, {})
                }
              )
            ] }),
            H ? null : /* @__PURE__ */ S.jsx(zr, {})
          ]
        }
      )
    }
  );
};
export {
  Yr as TimeInput
};
