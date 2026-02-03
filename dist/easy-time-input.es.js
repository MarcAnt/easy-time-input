import * as re from "react";
import st, { useReducer as at, useRef as xe, useEffect as ke, useCallback as it, createContext as De, useContext as Le, memo as lt } from "react";
var ge = { exports: {} }, me = {};
var Ae;
function ct() {
  if (Ae) return me;
  Ae = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, s, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      a = {};
      for (var d in s)
        d !== "key" && (a[d] = s[d]);
    } else a = s;
    return s = a.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: s !== void 0 ? s : null,
      props: a
    };
  }
  return me.Fragment = t, me.jsx = o, me.jsxs = o, me;
}
var fe = {};
var Pe;
function dt() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === B ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case P:
          return "Fragment";
        case F:
          return "Profiler";
        case D:
          return "StrictMode";
        case L:
          return "Suspense";
        case _:
          return "SuspenseList";
        case M:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case y:
            return "Portal";
          case H:
            return n.displayName || "Context";
          case O:
            return (n._context.displayName || "Context") + ".Consumer";
          case W:
            var h = n.render;
            return n = n.displayName, n || (n = h.displayName || h.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case c:
            return h = n.displayName || null, h !== null ? h : e(n.type) || "Memo";
          case b:
            h = n._payload, n = n._init;
            try {
              return e(n(h));
            } catch {
            }
        }
      return null;
    }
    function t(n) {
      return "" + n;
    }
    function o(n) {
      try {
        t(n);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var x = h.error, g = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return x.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          g
        ), t(n);
      }
    }
    function r(n) {
      if (n === P) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === b)
        return "<...>";
      try {
        var h = e(n);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var n = J.A;
      return n === null ? null : n.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(n) {
      if (oe.call(n, "key")) {
        var h = Object.getOwnPropertyDescriptor(n, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function d(n, h) {
      function x() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      x.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: x,
        configurable: !0
      });
    }
    function l() {
      var n = e(this.type);
      return Y[n] || (Y[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function w(n, h, x, g, q, ee) {
      var k = x.ref;
      return n = {
        $$typeof: f,
        type: n,
        key: h,
        props: x,
        _owner: g
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function C(n, h, x, g, q, ee) {
      var k = h.children;
      if (k !== void 0)
        if (g)
          if (ne(k)) {
            for (g = 0; g < k.length; g++)
              A(k[g]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(k);
      if (oe.call(h, "key")) {
        k = e(n);
        var T = Object.keys(h).filter(function(N) {
          return N !== "key";
        });
        g = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", Z[k + g] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          g,
          k,
          T,
          k
        ), Z[k + g] = !0);
      }
      if (k = null, x !== void 0 && (o(x), k = "" + x), i(h) && (o(h.key), k = "" + h.key), "key" in h) {
        x = {};
        for (var E in h)
          E !== "key" && (x[E] = h[E]);
      } else x = h;
      return k && d(
        x,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), w(
        n,
        k,
        x,
        s(),
        q,
        ee
      );
    }
    function A(n) {
      R(n) ? n._store && (n._store.validated = 1) : typeof n == "object" && n !== null && n.$$typeof === b && (n._payload.status === "fulfilled" ? R(n._payload.value) && n._payload.value._store && (n._payload.value._store.validated = 1) : n._store && (n._store.validated = 1));
    }
    function R(n) {
      return typeof n == "object" && n !== null && n.$$typeof === f;
    }
    var S = st, f = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), D = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), O = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), c = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), M = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), J = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = Object.prototype.hasOwnProperty, ne = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var V, Y = {}, p = S.react_stack_bottom_frame.bind(
      S,
      a
    )(), K = U(r(a)), Z = {};
    fe.Fragment = P, fe.jsx = function(n, h, x) {
      var g = 1e4 > J.recentlyCreatedOwnerStacks++;
      return C(
        n,
        h,
        x,
        !1,
        g ? Error("react-stack-top-frame") : p,
        g ? U(r(n)) : K
      );
    }, fe.jsxs = function(n, h, x) {
      var g = 1e4 > J.recentlyCreatedOwnerStacks++;
      return C(
        n,
        h,
        x,
        !0,
        g ? Error("react-stack-top-frame") : p,
        g ? U(r(n)) : K
      );
    };
  })()), fe;
}
var Ne;
function ut() {
  return Ne || (Ne = 1, process.env.NODE_ENV === "production" ? ge.exports = ct() : ge.exports = dt()), ge.exports;
}
var $ = ut();
const se = (e) => {
  e.current?.select(), e.current?.focus();
}, be = (e, t, o) => {
  let r, s, a = !0;
  if (t && t instanceof Date ? r = new Date(t).toLocaleTimeString("en", {
    hour12: !1
  }) : r = t, o && o instanceof Date ? s = new Date(o).toLocaleTimeString("en", {
    hour12: !1
  }) : s = o, r) {
    const i = r.split(":");
    let d = e.split(":");
    d.length === 1 && (d = [d[0], "00"]);
    const l = new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(i[0]),
      parseInt(i[1])
    );
    new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(d[0]),
      parseInt(d[1])
    ).getTime() > l.getTime() && (a = !1);
  }
  if (s) {
    const i = s.split(":");
    let d = e.split(":");
    d.length === 1 && (d = [d[0], "00"]);
    const l = new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(i[0]),
      parseInt(i[1])
    );
    new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(d[0]),
      parseInt(d[1])
    ).getTime() < l.getTime() && (a = !1);
  }
  return a;
};
function Ve(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (o = Ve(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function mt() {
  for (var e, t, o = 0, r = "", s = arguments.length; o < s; o++) (e = arguments[o]) && (t = Ve(e)) && (r && (r += " "), r += t);
  return r;
}
const ft = (e, t) => {
  const o = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    o[r] = e[r];
  for (let r = 0; r < t.length; r++)
    o[e.length + r] = t[r];
  return o;
}, pt = (e, t) => ({
  classGroupId: e,
  validator: t
}), Fe = (e = /* @__PURE__ */ new Map(), t = null, o) => ({
  nextPart: e,
  validators: t,
  classGroupId: o
}), ye = "-", Ie = [], bt = "arbitrary..", gt = (e) => {
  const t = wt(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return ht(i);
      const d = i.split(ye), l = d[0] === "" && d.length > 1 ? 1 : 0;
      return Ge(d, l, t);
    },
    getConflictingClassGroupIds: (i, d) => {
      if (d) {
        const l = r[i], w = o[i];
        return l ? w ? ft(w, l) : l : w || Ie;
      }
      return o[i] || Ie;
    }
  };
}, Ge = (e, t, o) => {
  if (e.length - t === 0)
    return o.classGroupId;
  const s = e[t], a = o.nextPart.get(s);
  if (a) {
    const w = Ge(e, t + 1, a);
    if (w) return w;
  }
  const i = o.validators;
  if (i === null)
    return;
  const d = t === 0 ? e.join(ye) : e.slice(t).join(ye), l = i.length;
  for (let w = 0; w < l; w++) {
    const C = i[w];
    if (C.validator(d))
      return C.classGroupId;
  }
}, ht = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), o = t.indexOf(":"), r = t.slice(0, o);
  return r ? bt + r : void 0;
})(), wt = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e;
  return yt(o, t);
}, yt = (e, t) => {
  const o = Fe();
  for (const r in e) {
    const s = e[r];
    $e(s, o, r, t);
  }
  return o;
}, $e = (e, t, o, r) => {
  const s = e.length;
  for (let a = 0; a < s; a++) {
    const i = e[a];
    xt(i, t, o, r);
  }
}, xt = (e, t, o, r) => {
  if (typeof e == "string") {
    kt(e, t, o);
    return;
  }
  if (typeof e == "function") {
    vt(e, t, o, r);
    return;
  }
  Tt(e, t, o, r);
}, kt = (e, t, o) => {
  const r = e === "" ? t : Ue(t, e);
  r.classGroupId = o;
}, vt = (e, t, o, r) => {
  if (_t(e)) {
    $e(e(r), t, o, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(pt(o, e));
}, Tt = (e, t, o, r) => {
  const s = Object.entries(e), a = s.length;
  for (let i = 0; i < a; i++) {
    const [d, l] = s[i];
    $e(l, Ue(t, d), o, r);
  }
}, Ue = (e, t) => {
  let o = e;
  const r = t.split(ye), s = r.length;
  for (let a = 0; a < s; a++) {
    const i = r[a];
    let d = o.nextPart.get(i);
    d || (d = Fe(), o.nextPart.set(i, d)), o = d;
  }
  return o;
}, _t = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Ct = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const s = (a, i) => {
    o[a] = i, t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let i = o[a];
      if (i !== void 0)
        return i;
      if ((i = r[a]) !== void 0)
        return s(a, i), i;
    },
    set(a, i) {
      a in o ? o[a] = i : s(a, i);
    }
  };
}, Se = "!", Me = ":", Et = [], je = (e, t, o, r, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: s
}), St = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (s) => {
    const a = [];
    let i = 0, d = 0, l = 0, w;
    const C = s.length;
    for (let y = 0; y < C; y++) {
      const P = s[y];
      if (i === 0 && d === 0) {
        if (P === Me) {
          a.push(s.slice(l, y)), l = y + 1;
          continue;
        }
        if (P === "/") {
          w = y;
          continue;
        }
      }
      P === "[" ? i++ : P === "]" ? i-- : P === "(" ? d++ : P === ")" && d--;
    }
    const A = a.length === 0 ? s : s.slice(l);
    let R = A, S = !1;
    A.endsWith(Se) ? (R = A.slice(0, -1), S = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      A.startsWith(Se) && (R = A.slice(1), S = !0)
    );
    const f = w && w > l ? w - l : void 0;
    return je(a, S, R, f);
  };
  if (t) {
    const s = t + Me, a = r;
    r = (i) => i.startsWith(s) ? a(i.slice(s.length)) : je(Et, !1, i, void 0, !0);
  }
  if (o) {
    const s = r;
    r = (a) => o({
      className: a,
      parseClassName: s
    });
  }
  return r;
}, $t = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((o, r) => {
    t.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let s = [];
    for (let a = 0; a < o.length; a++) {
      const i = o[a], d = i[0] === "[", l = t.has(i);
      d || l ? (s.length > 0 && (s.sort(), r.push(...s), s = []), r.push(i)) : s.push(i);
    }
    return s.length > 0 && (s.sort(), r.push(...s)), r;
  };
}, Rt = (e) => ({
  cache: Ct(e.cacheSize),
  parseClassName: St(e),
  sortModifiers: $t(e),
  ...gt(e)
}), At = /\s+/, Pt = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: s,
    sortModifiers: a
  } = t, i = [], d = e.trim().split(At);
  let l = "";
  for (let w = d.length - 1; w >= 0; w -= 1) {
    const C = d[w], {
      isExternal: A,
      modifiers: R,
      hasImportantModifier: S,
      baseClassName: f,
      maybePostfixModifierPosition: y
    } = o(C);
    if (A) {
      l = C + (l.length > 0 ? " " + l : l);
      continue;
    }
    let P = !!y, D = r(P ? f.substring(0, y) : f);
    if (!D) {
      if (!P) {
        l = C + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (D = r(f), !D) {
        l = C + (l.length > 0 ? " " + l : l);
        continue;
      }
      P = !1;
    }
    const F = R.length === 0 ? "" : R.length === 1 ? R[0] : a(R).join(":"), O = S ? F + Se : F, H = O + D;
    if (i.indexOf(H) > -1)
      continue;
    i.push(H);
    const W = s(D, P);
    for (let L = 0; L < W.length; ++L) {
      const _ = W[L];
      i.push(O + _);
    }
    l = C + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Nt = (...e) => {
  let t = 0, o, r, s = "";
  for (; t < e.length; )
    (o = e[t++]) && (r = Ye(o)) && (s && (s += " "), s += r);
  return s;
}, Ye = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ye(e[r])) && (o && (o += " "), o += t);
  return o;
}, It = (e, ...t) => {
  let o, r, s, a;
  const i = (l) => {
    const w = t.reduce((C, A) => A(C), e());
    return o = Rt(w), r = o.cache.get, s = o.cache.set, a = d, d(l);
  }, d = (l) => {
    const w = r(l);
    if (w)
      return w;
    const C = Pt(l, o);
    return s(l, C), C;
  };
  return a = i, (...l) => a(Nt(...l));
}, Mt = [], z = (e) => {
  const t = (o) => o[e] || Mt;
  return t.isThemeGetter = !0, t;
}, He = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, We = /^\((?:(\w[\w-]*):)?(.+)\)$/i, jt = /^\d+\/\d+$/, Ot = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Dt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Lt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ce = (e) => jt.test(e), v = (e) => !!e && !Number.isNaN(Number(e)), te = (e) => !!e && Number.isInteger(Number(e)), ve = (e) => e.endsWith("%") && v(e.slice(0, -1)), Q = (e) => Ot.test(e), Ft = () => !0, Gt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  zt.test(e) && !Dt.test(e)
), Be = () => !1, Ut = (e) => Lt.test(e), Yt = (e) => Vt.test(e), Ht = (e) => !u(e) && !m(e), Wt = (e) => de(e, Xe, Be), u = (e) => He.test(e), ae = (e) => de(e, Ze, Gt), Te = (e) => de(e, Zt, v), Oe = (e) => de(e, Je, Be), Bt = (e) => de(e, qe, Yt), he = (e) => de(e, Ke, Ut), m = (e) => We.test(e), pe = (e) => ue(e, Ze), Jt = (e) => ue(e, Kt), ze = (e) => ue(e, Je), qt = (e) => ue(e, Xe), Xt = (e) => ue(e, qe), we = (e) => ue(e, Ke, !0), de = (e, t, o) => {
  const r = He.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, ue = (e, t, o = !1) => {
  const r = We.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, Je = (e) => e === "position" || e === "percentage", qe = (e) => e === "image" || e === "url", Xe = (e) => e === "length" || e === "size" || e === "bg-size", Ze = (e) => e === "length", Zt = (e) => e === "number", Kt = (e) => e === "family-name", Ke = (e) => e === "shadow", Qt = () => {
  const e = z("color"), t = z("font"), o = z("text"), r = z("font-weight"), s = z("tracking"), a = z("leading"), i = z("breakpoint"), d = z("container"), l = z("spacing"), w = z("radius"), C = z("shadow"), A = z("inset-shadow"), R = z("text-shadow"), S = z("drop-shadow"), f = z("blur"), y = z("perspective"), P = z("aspect"), D = z("ease"), F = z("animate"), O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [
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
  ], W = () => [...H(), m, u], L = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", "contain", "none"], c = () => [m, u, l], b = () => [ce, "full", "auto", ...c()], M = () => [te, "none", "subgrid", m, u], B = () => ["auto", {
    span: ["full", te, m, u]
  }, te, m, u], J = () => [te, "auto", m, u], oe = () => ["auto", "min", "max", "fr", m, u], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...c()], Y = () => [ce, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...c()], p = () => [e, m, u], K = () => [...H(), ze, Oe, {
    position: [m, u]
  }], Z = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], n = () => ["auto", "cover", "contain", qt, Wt, {
    size: [m, u]
  }], h = () => [ve, pe, ae], x = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    w,
    m,
    u
  ], g = () => ["", v, pe, ae], q = () => ["solid", "dashed", "dotted", "double"], ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [v, ve, ze, Oe], T = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    f,
    m,
    u
  ], E = () => ["none", v, m, u], N = () => ["none", v, m, u], ie = () => [v, m, u], le = () => [ce, "full", ...c()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Q],
      breakpoint: [Q],
      color: [Ft],
      container: [Q],
      "drop-shadow": [Q],
      ease: ["in", "out", "in-out"],
      font: [Ht],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Q],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Q],
      shadow: [Q],
      spacing: ["px", v],
      text: [Q],
      "text-shadow": [Q],
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
        aspect: ["auto", "square", ce, u, m, P]
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
        columns: [v, u, m, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
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
        object: W()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _()
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
        inset: b()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": b()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": b()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: b()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: b()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: b()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: b()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: b()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: b()
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
        z: [te, "auto", m, u]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ce, "full", "auto", d, ...c()]
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
        flex: [v, ce, "auto", "initial", "none", u]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", v, m, u]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", v, m, u]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [te, "first", "last", "none", m, u]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": M()
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
        "col-start": J()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": J()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": M()
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
        "row-start": J()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": J()
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
        "auto-cols": oe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": oe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: c()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": c()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": c()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ne(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...U(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...U()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ne()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...U(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...U()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: c()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: c()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: c()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: c()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: c()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: c()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: c()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: c()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: c()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: V()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": c()
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
        "space-y": c()
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
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          d,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, pe, ae]
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
        font: [r, m, Te]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ve, u]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Jt, u, t]
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
        tracking: [s, m, u]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [v, "none", m, Te]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...c()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", m, u]
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
        list: ["disc", "decimal", "none", m, u]
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [v, "from-font", "auto", m, ae]
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
        "underline-offset": [v, "auto", m, u]
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
        indent: c()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", m, u]
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
        content: ["none", m, u]
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
        bg: K()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Z()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: n()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, te, m, u],
          radial: ["", m, u],
          conic: [te, m, u]
        }, Xt, Bt]
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
        from: h()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: h()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: h()
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
        rounded: x()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": x()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": x()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": x()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": x()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": x()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": x()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": x()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": x()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": x()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": x()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": x()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": x()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": x()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": x()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: g()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": g()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": g()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": g()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": g()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": g()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": g()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": g()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": g()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": g()
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
        "divide-y": g()
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
        border: [...q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...q(), "hidden", "none"]
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
        outline: [...q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [v, m, u]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", v, pe, ae]
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
          C,
          we,
          he
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
        "inset-shadow": ["none", A, we, he]
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
        ring: g()
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
        "ring-offset": [v, ae]
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
        "inset-ring": g()
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
        "text-shadow": ["none", R, we, he]
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
        opacity: [v, m, u]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ee()
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
        "mask-linear": [v]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": k()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": p()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": p()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": k()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": p()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": p()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": k()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": p()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": p()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": k()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": p()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": p()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": k()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": p()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": p()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": k()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": p()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": p()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": k()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": p()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": p()
      }],
      "mask-image-radial": [{
        "mask-radial": [m, u]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": k()
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
        "mask-radial-at": H()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [v]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": k()
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
        mask: K()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Z()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: n()
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
        mask: ["none", m, u]
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
          m,
          u
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: T()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [v, m, u]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [v, m, u]
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
          S,
          we,
          he
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
        grayscale: ["", v, m, u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v, m, u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", v, m, u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [v, m, u]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", v, m, u]
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
          m,
          u
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": T()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [v, m, u]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [v, m, u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", v, m, u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v, m, u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", v, m, u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v, m, u]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [v, m, u]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", v, m, u]
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
        "border-spacing": c()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": c()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": c()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", m, u]
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
        duration: [v, "initial", m, u]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, m, u]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [v, m, u]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", F, m, u]
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
        perspective: [y, m, u]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": W()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: E()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": E()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": E()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": E()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: N()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": N()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": N()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": N()
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
        skew: ie()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ie()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ie()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [m, u, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: W()
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
        translate: le()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": le()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": le()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": le()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", m, u]
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
        "scroll-m": c()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": c()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": c()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": c()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": c()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": c()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": c()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": c()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": c()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": c()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": c()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": c()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": c()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": c()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": c()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": c()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": c()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": c()
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
        "will-change": ["auto", "scroll", "contents", "transform", m, u]
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
        stroke: [v, pe, ae, Te]
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
}, er = /* @__PURE__ */ It(Qt), tr = (e, t) => {
  const [o, r, s] = e.split(":"), a = +o % 12 === 0 ? 12 : +o % 12;
  switch (t) {
    case "HH:mm:ss":
      return `${o}:${r}:${s}`;
    case "HH:mm":
      return `${o}:${r}`;
    case "hh:mm:ss":
      return `${a}:${r}:${s}`;
    case "hh:mm":
      return `${a}:${r}`;
  }
}, G = (...e) => er(mt(e)), _e = (e, t, o) => {
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
    const s = tr(e, o);
    let a = r;
    if (s)
      return a = s.split(":")[0], a;
    if (parseInt(a) < 0)
      return Math.abs(parseInt(a)) < 10 ? `0${Math.abs(parseInt(a))}` : `${Math.abs(parseInt(a))}`;
    if (t) {
      let i;
      return i = `${+a % 12 === 0 ? 12 : +a % 12}`, i;
    } else
      return r.length < 2 ? `0${r}` : r;
  }
  return t ? "1" : "00";
}, Ce = (e) => {
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
}, Ee = (e) => {
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
}, rr = (e, t) => {
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
}, or = ({
  value: e,
  onChange: t,
  hasSeconds: o,
  hour12: r,
  maxTime: s,
  minTime: a,
  format: i
}) => {
  const [d, l] = at(rr, {
    isAm: !1,
    inputType: "hours",
    hours: _e(e, r, i),
    minutes: Ce(e),
    seconds: Ee(e),
    hour12: r,
    format: i
  }), { isAm: w, inputType: C, hours: A, minutes: R, seconds: S } = d, f = xe(null), y = xe(null), P = xe(null), D = `${A}:${R}:${S}`, F = `${_e(
    e,
    r,
    i
  )}:${Ce(e)}:${Ee(e)}`;
  ke(() => {
    e && typeof e == "string" && +e?.split(":")[0] < 12 && r && l({ type: "TOGGLE_AM", payload: !0 });
  }, []), ke(() => {
    !e && t && t(D);
  }, []), ke(() => {
    if (t) {
      const _ = F?.split(":")[0], c = F?.split(":")[1], b = F?.split(":")[2];
      let M = _;
      !w && r && +_ < 12 && (M = `${+_ + 12}`), t(`${M}:${c}:${b}`);
    }
  }, [w]), e && t && F !== D && (l({
    type: "SET_HOURS",
    payload: _e(e, r, i)
  }), l({
    type: "SET_MINUTES",
    payload: Ce(e)
  }), l({
    type: "SET_SECONDS",
    payload: Ee(e)
  }));
  const O = it(
    (_, c, b) => {
      let M;
      if (t && e || e === "" && _ && t) {
        if (M = o ? `${_}:${c}:${b}` : `${_}:${c}`, (s || a) && !be(M, s, a))
          return;
        t(M);
        return;
      } else {
        let B;
        if (B = o ? `${_}:${c}:${b}` : `${_}:${c}`, (s || a) && !be(B, s, a))
          return;
        l({ type: "SET_HOURS", payload: _ }), l({ type: "SET_MINUTES", payload: c }), l({ type: "SET_SECONDS", payload: b });
        return;
      }
    },
    [t, e, o]
  );
  return {
    hoursRef: f,
    minutesRef: y,
    secondsRef: P,
    handleHours: (_) => {
      const { currentTarget: c } = _;
      if (c.value === "") {
        O(c.value, R, S);
        return;
      }
      if (c.value && c.valueAsNumber < 24 && c.valueAsNumber >= 0) {
        const b = c.value.slice(-2);
        if (t)
          if (r)
            if (w) {
              O(
                +b % 12 === 0 ? "0" : `${+b}`,
                R,
                S
              );
              return;
            } else {
              O(
                +b % 12 === 0 ? "0" : `${+b + 12}`,
                R,
                S
              );
              return;
            }
          else {
            O(
              b.length < 2 ? `0${b}` : b,
              R,
              S
            );
            return;
          }
        else {
          if ((s || a) && !be(
            b,
            s,
            a
          ))
            return;
          if (i && i.includes("hh")) {
            const M = +b > 11 ? "12" : `${+b < 1 ? "1" : +b % 12}`;
            l({ type: "SET_HOURS", payload: M });
          } else {
            const M = b.length < 2 ? `0${b}` : b;
            l({ type: "SET_HOURS", payload: M });
          }
        }
      }
    },
    handleMinutes: (_) => {
      const { currentTarget: c } = _;
      if (c.value === "") {
        O(A, c.value, S);
        return;
      }
      if (c.value && c.valueAsNumber < 60 && c.valueAsNumber >= 0) {
        const b = c.value.slice(-2);
        if (t)
          O(
            A,
            b.length < 2 ? `0${b}` : b,
            S
          );
        else {
          const M = b.length < 2 ? `0${b}` : b;
          l({ type: "SET_MINUTES", payload: M });
        }
      }
    },
    handleSeconds: (_) => {
      const { currentTarget: c } = _;
      if (c.value === "") {
        O(A, R, c.value);
        return;
      }
      if (c.value && c.valueAsNumber < 60 && c.valueAsNumber >= 0) {
        const b = c.value.slice(-2);
        if (t)
          O(
            A,
            R,
            b.length < 2 ? `0${b}` : b
          );
        else {
          const M = b.length < 2 ? `0${b}` : b;
          l({ type: "SET_SECONDS", payload: M });
        }
      }
    },
    inputType: C,
    updateTime: O,
    hours: A,
    minutes: R,
    seconds: S,
    isAm: w,
    state: d,
    dispatch: l
  };
}, nr = (e) => /* @__PURE__ */ re.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-up", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ re.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ re.createElement("path", { d: "M6 15l6 -6l6 6" })), sr = (e) => /* @__PURE__ */ re.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-down", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ re.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ re.createElement("path", { d: "M6 9l6 6l6 -6" })), ar = "_inputContainer_9rf1m_2", ir = "_timeInputMainContainer_9rf1m_15", lr = "_disabled_9rf1m_43", cr = "_hourContainer_9rf1m_54", dr = "_hh_9rf1m_54", ur = "_noValue_9rf1m_54", mr = "_hyphen_9rf1m_58", fr = "_noZero_9rf1m_62", pr = "_minutesContainer_9rf1m_66", br = "_mm_9rf1m_66", gr = "_withSeconds_9rf1m_78", hr = "_secondsContainer_9rf1m_86", wr = "_timerContainer_9rf1m_105", yr = "_iconContainer_9rf1m_115", xr = "_arrowsContainer_9rf1m_141", kr = "_toggleAmPmContainer_9rf1m_159", j = {
  inputContainer: ar,
  timeInputMainContainer: ir,
  disabled: lr,
  hourContainer: cr,
  hh: dr,
  noValue: ur,
  hyphen: mr,
  noZero: fr,
  minutesContainer: pr,
  mm: br,
  withSeconds: gr,
  secondsContainer: hr,
  timerContainer: wr,
  iconContainer: yr,
  arrowsContainer: xr,
  toggleAmPmContainer: kr
}, vr = (e) => {
  const {
    inputType: t,
    updateTime: o,
    hours: r,
    minutes: s,
    seconds: a,
    hour12: i,
    isAm: d,
    maxTime: l,
    minTime: w,
    format: C
  } = e;
  return { handleAddTime: (S) => {
    if (S.preventDefault(), t === "hours") {
      if ((l || w) && !be(
        `${+r + 1}`,
        l,
        w
      ))
        return;
      const f = +r + 1;
      let y;
      i ? d ? y = `${f > 11 ? "12" : f}` : y = `${f > 11 ? "00" : f + 12}` : C && C.includes("hh") ? y = `${f > 11 ? "12" : +f % 12}` : y = `${f < 0 ? "00" : f < 10 ? `0${f}` : f < 24 ? f : 23}`, o(y, s, a);
    }
    if (t === "minutes") {
      const f = +s + 1, y = `${f < 10 ? `0${f}` : f < 60 ? f : 59}`;
      o(r, y, a);
    }
    if (t === "seconds") {
      const f = +a + 1, y = `${f < 10 ? `0${f}` : f < 60 ? f : 59}`;
      o(r, s, y);
    }
  }, handleRemoveTime: (S) => {
    if (S.preventDefault(), t === "hours") {
      if ((l || w) && !be(
        `${+r - 1}`,
        l,
        w
      ))
        return;
      const f = +r - 1;
      let y;
      i ? d ? y = `${f < 1 ? "1" : f}` : y = `${f < 1 ? "13" : f + 12}` : C && C.includes("hh") ? y = `${f < 1 ? "1" : f}` : y = `${f < 0 ? "00" : f < 10 ? `0${f}` : f}`, o(y, s, a);
    }
    if (t === "minutes") {
      const f = +s - 1, y = `${f < 0 ? "00" : f < 10 ? `0${f}` : f}`;
      o(r, y, a);
    }
    if (t === "seconds") {
      const f = +a - 1, y = `${f < 0 ? "00" : f < 10 ? `0${f}` : f}`;
      o(r, s, y);
    }
  } };
}, Qe = De(null), Tr = ({
  children: e,
  props: t
}) => {
  const { handleAddTime: o, handleRemoveTime: r } = vr(t), { controlsClassName: s, disabled: a, inputType: i } = t;
  return /* @__PURE__ */ $.jsx(
    Qe,
    {
      value: {
        controlsClassName: s,
        disabled: a,
        handleAddTime: o,
        handleRemoveTime: r,
        inputType: i
      },
      children: e
    }
  );
}, _r = () => {
  const e = Le(Qe);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
}, Cr = lt(function() {
  const {
    controlsClassName: t,
    disabled: o,
    handleAddTime: r,
    handleRemoveTime: s,
    inputType: a
  } = _r();
  return /* @__PURE__ */ $.jsxs(
    "div",
    {
      className: G(j.arrowsContainer, t),
      "aria-label": `${a}-controls`,
      children: [
        /* @__PURE__ */ $.jsx(
          "button",
          {
            onClick: (i) => r(i),
            disabled: o,
            "aria-label": "add-time",
            children: /* @__PURE__ */ $.jsx(nr, {})
          }
        ),
        /* @__PURE__ */ $.jsx(
          "button",
          {
            disabled: o,
            onClick: (i) => s(i),
            "aria-label": "remove-time",
            children: /* @__PURE__ */ $.jsx(sr, {})
          }
        )
      ]
    }
  );
}), Er = (e) => /* @__PURE__ */ re.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", ...e }, /* @__PURE__ */ re.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" })), et = De(
  null
), Sr = ({
  children: e,
  props: t
}) => {
  const { dispatch: o, amPmAriaLabel: r, disabled: s, isAm: a } = t, i = () => {
    o({ type: "TOGGLE_AM", payload: !a });
  };
  return /* @__PURE__ */ $.jsx(
    et,
    {
      value: {
        handleToggleAmPm: i,
        amPmAriaLabel: r,
        isAm: a,
        disabled: s
      },
      children: e
    }
  );
}, $r = () => {
  const e = Le(et);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
}, Rr = () => {
  const { handleToggleAmPm: e, isAm: t, disabled: o, amPmAriaLabel: r } = $r();
  return /* @__PURE__ */ $.jsx(
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
}, Ar = ({
  props: e,
  children: t
}) => {
  const {
    inputType: o,
    isAm: r,
    disabled: s,
    disabledHours: a,
    disabledMinutes: i,
    disabledSeconds: d,
    controlsClassName: l,
    format: w,
    hour12: C,
    amPmAriaLabel: A,
    updateTime: R,
    hours: S,
    minutes: f,
    seconds: y,
    state: P,
    dispatch: D
  } = e;
  return /* @__PURE__ */ $.jsx(
    Tr,
    {
      props: {
        inputType: o,
        disabled: s || a || i || d,
        updateTime: R,
        hours: S,
        minutes: f,
        seconds: y,
        controlsClassName: l,
        format: w,
        hour12: C,
        isAm: r,
        state: P,
        dispatch: D
      },
      children: /* @__PURE__ */ $.jsx(
        Sr,
        {
          props: {
            isAm: r,
            amPmAriaLabel: A,
            disabled: s || a || i || d,
            state: P,
            dispatch: D
          },
          children: t
        }
      )
    }
  );
}, Nr = ({
  id: e,
  value: t,
  dataTestId: o,
  hoursPlaceholder: r = "--",
  minutesPlaceholder: s = "--",
  secondsPlaceholder: a = "--",
  name: i = "time",
  disabled: d,
  required: l,
  onChange: w,
  className: C,
  iconClockClassName: A,
  amPmButtonClassName: R,
  controlsClassName: S,
  inputClassName: f,
  dividerClassName: y,
  ariaLabel: P = "time",
  iconAriaLabel: D = "clock",
  hoursAriaLabel: F = "hours",
  minutesAriaLabel: O = "minutes",
  secondsAriaLabel: H = "seconds",
  amPmAriaLabel: W = "am-pm",
  hasSeconds: L = !1,
  hour12: _ = !1,
  disableFocusOnIcon: c = !1,
  disabledHours: b,
  disabledMinutes: M,
  disabledSeconds: B,
  maxTime: J,
  minTime: oe,
  hideControls: ne = !1,
  hoursInputTitle: U = "Hours input",
  minutesInputTitle: V = "Minutes input",
  secondsInputTitle: Y = "Seconds input",
  setZeroOnBlur: p = !1,
  format: K
}) => {
  const {
    hoursRef: Z,
    minutesRef: n,
    secondsRef: h,
    inputType: x,
    updateTime: g,
    handleHours: q,
    handleMinutes: ee,
    handleSeconds: k,
    hours: T,
    minutes: E,
    seconds: N,
    isAm: ie,
    state: le,
    dispatch: X
  } = or({
    value: t,
    onChange: w,
    hasSeconds: L,
    hour12: _,
    maxTime: J,
    minTime: oe,
    format: K
  }), tt = `${j.timerContainer} ${j.hourContainer}
  ${r === "--" ? j.hyphen : j.hh} 
  ${T === "" ? j.noValue : ""} 
  ${+T > 9 ? j.noZero : ""}`, rt = `${j.timerContainer} ${j.minutesContainer} ${L ? j.withSeconds : ""}
  ${s === "--" ? j.hyphen : j.mm}  
  ${E === "" ? j.noValue : ""}  
  ${+E > 9 ? j.noZero : ""}`, ot = `${j.timerContainer} ${j.secondsContainer}`, Re = K?.includes("ss") || L, nt = K?.includes("hh");
  return /* @__PURE__ */ $.jsx(
    Ar,
    {
      props: {
        hours: T,
        minutes: E,
        seconds: N,
        isAm: ie,
        inputType: x,
        disabled: d,
        controlsClassName: S,
        hour12: _,
        amPmAriaLabel: W,
        updateTime: g,
        format: nt ? "hh" : "HH",
        disabledHours: b,
        disabledMinutes: M,
        disabledSeconds: B,
        state: le,
        dispatch: X
      },
      children: /* @__PURE__ */ $.jsxs(
        "div",
        {
          className: G(
            `${j.inputContainer} ${d ? j.disabled : ""}`,
            C
          ),
          "data-testid": o,
          role: "textbox",
          tabIndex: 0,
          children: [
            !c && /* @__PURE__ */ $.jsx(
              "div",
              {
                className: G(j.iconContainer, A),
                role: "button",
                onClick: () => {
                  X({ type: "INPUT_TYPE", payload: "hours" }), se(Z);
                },
                "aria-label": D,
                children: /* @__PURE__ */ $.jsx(Er, {})
              }
            ),
            /* @__PURE__ */ $.jsxs("div", { className: G(j.timeInputMainContainer), children: [
              /* @__PURE__ */ $.jsxs(
                "div",
                {
                  className: G(tt),
                  onClick: (I) => {
                    I.preventDefault(), X({ type: "INPUT_TYPE", payload: "hours" }), se(Z);
                  },
                  children: [
                    /* @__PURE__ */ $.jsx(
                      "input",
                      {
                        type: "hidden",
                        name: i,
                        "aria-label": P,
                        value: Re ? `${T}:${E}:${N}` : `${T}:${E}`
                      }
                    ),
                    /* @__PURE__ */ $.jsx(
                      "input",
                      {
                        type: "number",
                        id: e,
                        autoComplete: "off",
                        minLength: 1,
                        maxLength: 2,
                        step: 1,
                        min: _ ? 1 : 0,
                        max: _ ? 12 : 23,
                        inputMode: "numeric",
                        value: T,
                        onChange: q,
                        pattern: "^(2[0-3]|[01]?[0-9]){1,1}$",
                        placeholder: r,
                        required: l,
                        className: G(f),
                        onBlur: () => {
                          if (p && T.length < 2) {
                            if (_) {
                              g(
                                +T > 12 ? "12" : ie ? T : `${+T + 12}`,
                                E,
                                N
                              );
                              return;
                            }
                            g(`0${T}`, E, N);
                            return;
                          }
                        },
                        onKeyDown: (I) => {
                          if (I.key === "Tab") {
                            if (X({ type: "INPUT_TYPE", payload: "minutes" }), T === "") {
                              g("00", E, N);
                              return;
                            }
                            if (T.length < 2) {
                              g(`0${T}`, E, N);
                              return;
                            }
                          }
                          if (I.key === "Backspace") {
                            g("", E, N);
                            return;
                          }
                          return ["e", "E", "+", "-"].includes(I.key) && I.preventDefault();
                        },
                        onClick: (I) => {
                          I.preventDefault(), se(Z), X({ type: "INPUT_TYPE", payload: "hours" });
                        },
                        tabIndex: 0,
                        disabled: d || b,
                        "aria-label": F,
                        name: `hours-${i}`,
                        ref: Z,
                        title: U
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ $.jsx("span", { className: G(y), children: ":" }),
              /* @__PURE__ */ $.jsx(
                "div",
                {
                  className: G(rt),
                  onClick: (I) => {
                    I.preventDefault(), X({ type: "INPUT_TYPE", payload: "minutes" }), se(n);
                  },
                  children: /* @__PURE__ */ $.jsx(
                    "input",
                    {
                      type: "number",
                      autoComplete: "off",
                      min: 0,
                      max: 59,
                      step: 1,
                      size: 2,
                      placeholder: s,
                      value: E,
                      className: G(f),
                      inputMode: "numeric",
                      onChange: ee,
                      pattern: "/^([0-5]){1,1}([0-9]){1,1}$/",
                      required: l,
                      onBlur: () => {
                        if (p) {
                          if (E === "") {
                            g(T, "00", N);
                            return;
                          }
                          if (E.length < 2) {
                            g(T, `0${E}`, N);
                            return;
                          }
                        }
                      },
                      onKeyDown: (I) => {
                        if (I.key === "Tab" && L) {
                          if (E === "") {
                            g(T, "00", N);
                            return;
                          }
                          if (E.length < 2) {
                            g(T, `0${E}`, N);
                            return;
                          }
                          X({ type: "INPUT_TYPE", payload: "seconds" });
                        }
                        if (I.key === "Backspace") {
                          g(T, "", N);
                          return;
                        }
                        return ["e", "E", "+", "-"].includes(I.key) && I.preventDefault();
                      },
                      onClick: (I) => {
                        I.preventDefault(), se(n), X({ type: "INPUT_TYPE", payload: "minutes" });
                      },
                      ref: n,
                      tabIndex: 0,
                      disabled: d || M,
                      "aria-label": O,
                      name: `minutes-${i}`,
                      title: V
                    }
                  )
                }
              ),
              Re ? /* @__PURE__ */ $.jsxs($.Fragment, { children: [
                /* @__PURE__ */ $.jsx("span", { className: G(y), children: ":" }),
                /* @__PURE__ */ $.jsx(
                  "div",
                  {
                    className: G(ot),
                    onClick: (I) => {
                      I.preventDefault(), X({ type: "INPUT_TYPE", payload: "seconds" }), se(h);
                    },
                    children: /* @__PURE__ */ $.jsx(
                      "input",
                      {
                        type: "number",
                        autoComplete: "off",
                        step: 1,
                        size: 2,
                        min: 0,
                        max: 59,
                        placeholder: a,
                        value: N,
                        className: G(f),
                        pattern: "/^([0-5]){1,1}([0-9]){1,1}$/",
                        required: l,
                        onBlur: () => {
                          if (p) {
                            if (N === "") {
                              g(T, E, "00");
                              return;
                            }
                            if (N.length < 2) {
                              g(T, E, `0${N}`);
                              return;
                            }
                          }
                        },
                        onKeyDown: (I) => {
                          if (I.key === "Tab") {
                            if (N === "") {
                              g(T, E, "00");
                              return;
                            }
                            if (N.length < 2) {
                              g(T, E, `0${N}`);
                              return;
                            }
                            X({ type: "INPUT_TYPE", payload: "seconds" });
                          }
                          if (I.key === "Backspace") {
                            g(T, E, "");
                            return;
                          }
                          return ["e", "E", "+", "-"].includes(I.key) && I.preventDefault();
                        },
                        onChange: k,
                        onClick: (I) => {
                          I.preventDefault(), se(h), X({ type: "INPUT_TYPE", payload: "seconds" });
                        },
                        tabIndex: 0,
                        disabled: d || B,
                        ref: h,
                        "aria-label": H,
                        name: `seconds-${i}`,
                        title: Y
                      }
                    )
                  }
                )
              ] }) : null,
              _ && /* @__PURE__ */ $.jsx(
                "div",
                {
                  className: G(j.toggleAmPmContainer, R),
                  title: "AM/PM button",
                  children: /* @__PURE__ */ $.jsx(Rr, {})
                }
              )
            ] }),
            ne ? null : /* @__PURE__ */ $.jsx(Cr, {})
          ]
        }
      )
    }
  );
};
export {
  Nr as TimeInput
};
