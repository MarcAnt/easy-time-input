import * as ae from "react";
import ft, { useReducer as pt, useRef as _e, useEffect as Ce, useCallback as bt, createContext as Ue, useContext as Ye, memo as gt } from "react";
var xe = { exports: {} }, ge = {};
var je;
function ht() {
  if (je) return ge;
  je = 1;
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
  return ge.Fragment = t, ge.jsx = o, ge.jsxs = o, ge;
}
var he = {};
var Oe;
function wt() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s) {
      if (s == null) return null;
      if (typeof s == "function")
        return s.$$typeof === Z ? null : s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case S:
          return "Fragment";
        case F:
          return "Profiler";
        case O:
          return "StrictMode";
        case V:
          return "Suspense";
        case y:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof s == "object")
        switch (typeof s.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), s.$$typeof) {
          case P:
            return "Portal";
          case G:
            return s.displayName || "Context";
          case N:
            return (s._context.displayName || "Context") + ".Consumer";
          case U:
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
        var h = g.error, k = typeof Symbol == "function" && Symbol.toStringTag && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return h.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), t(s);
      }
    }
    function r(s) {
      if (s === S) return "<>";
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
      var s = K.A;
      return s === null ? null : s.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(s) {
      if (ie.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function u(s, g) {
      function h() {
        Y || (Y = !0, console.error(
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
      return J[s] || (J[s] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), s = this.props.ref, s !== void 0 ? s : null;
    }
    function b(s, g, h, k, q, te) {
      var w = h.ref;
      return s = {
        $$typeof: M,
        type: s,
        key: g,
        props: h,
        _owner: k
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
        value: q
      }), Object.defineProperty(s, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    }
    function v(s, g, h, k, q, te) {
      var w = g.children;
      if (w !== void 0)
        if (k)
          if (le(w)) {
            for (k = 0; k < w.length; k++)
              _(w[k]);
            Object.freeze && Object.freeze(w);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(w);
      if (ie.call(g, "key")) {
        w = e(s);
        var H = Object.keys(g).filter(function(ne) {
          return ne !== "key";
        });
        k = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", oe[w + k] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          w,
          H,
          w
        ), oe[w + k] = !0);
      }
      if (w = null, h !== void 0 && (o(h), w = "" + h), l(g) && (o(g.key), w = "" + g.key), "key" in g) {
        h = {};
        for (var X in g)
          X !== "key" && (h[X] = g[X]);
      } else h = g;
      return w && u(
        h,
        typeof s == "function" ? s.displayName || s.name || "Unknown" : s
      ), b(
        s,
        w,
        h,
        a(),
        q,
        te
      );
    }
    function _(s) {
      T(s) ? s._store && (s._store.validated = 1) : typeof s == "object" && s !== null && s.$$typeof === d && (s._payload.status === "fulfilled" ? T(s._payload.value) && s._payload.value._store && (s._payload.value._store.validated = 1) : s._store && (s._store.validated = 1));
    }
    function T(s) {
      return typeof s == "object" && s !== null && s.$$typeof === M;
    }
    var C = ft, M = /* @__PURE__ */ Symbol.for("react.transitional.element"), P = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), O = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), G = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), V = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.suspense_list"), n = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), Z = /* @__PURE__ */ Symbol.for("react.client.reference"), K = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = Object.prototype.hasOwnProperty, le = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(s) {
        return s();
      }
    };
    var Y, J = {}, p = C.react_stack_bottom_frame.bind(
      C,
      i
    )(), ee = B(r(i)), oe = {};
    he.Fragment = S, he.jsx = function(s, g, h) {
      var k = 1e4 > K.recentlyCreatedOwnerStacks++;
      return v(
        s,
        g,
        h,
        !1,
        k ? Error("react-stack-top-frame") : p,
        k ? B(r(s)) : ee
      );
    }, he.jsxs = function(s, g, h) {
      var k = 1e4 > K.recentlyCreatedOwnerStacks++;
      return v(
        s,
        g,
        h,
        !0,
        k ? Error("react-stack-top-frame") : p,
        k ? B(r(s)) : ee
      );
    };
  })()), he;
}
var ze;
function yt() {
  return ze || (ze = 1, process.env.NODE_ENV === "production" ? xe.exports = ht() : xe.exports = wt()), xe.exports;
}
var E = yt();
const ce = (e) => {
  e.current?.select(), e.current?.focus();
}, ye = (e, t, o, r) => {
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
}, fe = (e, t, o) => {
  if (!e || e < 0) return 1;
  if (t) {
    if (e > 23 || o && e > 11) return 1;
  } else if (e > 59) return 1;
  return e ? Math.abs(Math.trunc(e)) : 1;
};
function He(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (o = He(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function xt() {
  for (var e, t, o = 0, r = "", a = arguments.length; o < a; o++) (e = arguments[o]) && (t = He(e)) && (r && (r += " "), r += t);
  return r;
}
const kt = (e, t) => {
  const o = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    o[r] = e[r];
  for (let r = 0; r < t.length; r++)
    o[e.length + r] = t[r];
  return o;
}, vt = (e, t) => ({
  classGroupId: e,
  validator: t
}), We = (e = /* @__PURE__ */ new Map(), t = null, o) => ({
  nextPart: e,
  validators: t,
  classGroupId: o
}), Te = "-", De = [], Tt = "arbitrary..", _t = (e) => {
  const t = Et(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (l) => {
      if (l.startsWith("[") && l.endsWith("]"))
        return Ct(l);
      const u = l.split(Te), c = u[0] === "" && u.length > 1 ? 1 : 0;
      return Be(u, c, t);
    },
    getConflictingClassGroupIds: (l, u) => {
      if (u) {
        const c = r[l], b = o[l];
        return c ? b ? kt(b, c) : c : b || De;
      }
      return o[l] || De;
    }
  };
}, Be = (e, t, o) => {
  if (e.length - t === 0)
    return o.classGroupId;
  const a = e[t], i = o.nextPart.get(a);
  if (i) {
    const b = Be(e, t + 1, i);
    if (b) return b;
  }
  const l = o.validators;
  if (l === null)
    return;
  const u = t === 0 ? e.join(Te) : e.slice(t).join(Te), c = l.length;
  for (let b = 0; b < c; b++) {
    const v = l[b];
    if (v.validator(u))
      return v.classGroupId;
  }
}, Ct = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), o = t.indexOf(":"), r = t.slice(0, o);
  return r ? Tt + r : void 0;
})(), Et = (e) => {
  const {
    theme: t,
    classGroups: o
  } = e;
  return St(o, t);
}, St = (e, t) => {
  const o = We();
  for (const r in e) {
    const a = e[r];
    Ne(a, o, r, t);
  }
  return o;
}, Ne = (e, t, o, r) => {
  const a = e.length;
  for (let i = 0; i < a; i++) {
    const l = e[i];
    $t(l, t, o, r);
  }
}, $t = (e, t, o, r) => {
  if (typeof e == "string") {
    Rt(e, t, o);
    return;
  }
  if (typeof e == "function") {
    At(e, t, o, r);
    return;
  }
  Pt(e, t, o, r);
}, Rt = (e, t, o) => {
  const r = e === "" ? t : Je(t, e);
  r.classGroupId = o;
}, At = (e, t, o, r) => {
  if (Nt(e)) {
    Ne(e(r), t, o, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(vt(o, e));
}, Pt = (e, t, o, r) => {
  const a = Object.entries(e), i = a.length;
  for (let l = 0; l < i; l++) {
    const [u, c] = a[l];
    Ne(c, Je(t, u), o, r);
  }
}, Je = (e, t) => {
  let o = e;
  const r = t.split(Te), a = r.length;
  for (let i = 0; i < a; i++) {
    const l = r[i];
    let u = o.nextPart.get(l);
    u || (u = We(), o.nextPart.set(l, u)), o = u;
  }
  return o;
}, Nt = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, It = (e) => {
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
}, Pe = "!", Le = ":", Mt = [], Ve = (e, t, o, r, a) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: a
}), jt = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: o
  } = e;
  let r = (a) => {
    const i = [];
    let l = 0, u = 0, c = 0, b;
    const v = a.length;
    for (let P = 0; P < v; P++) {
      const S = a[P];
      if (l === 0 && u === 0) {
        if (S === Le) {
          i.push(a.slice(c, P)), c = P + 1;
          continue;
        }
        if (S === "/") {
          b = P;
          continue;
        }
      }
      S === "[" ? l++ : S === "]" ? l-- : S === "(" ? u++ : S === ")" && u--;
    }
    const _ = i.length === 0 ? a : a.slice(c);
    let T = _, C = !1;
    _.endsWith(Pe) ? (T = _.slice(0, -1), C = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      _.startsWith(Pe) && (T = _.slice(1), C = !0)
    );
    const M = b && b > c ? b - c : void 0;
    return Ve(i, C, T, M);
  };
  if (t) {
    const a = t + Le, i = r;
    r = (l) => l.startsWith(a) ? i(l.slice(a.length)) : Ve(Mt, !1, l, void 0, !0);
  }
  if (o) {
    const a = r;
    r = (i) => o({
      className: i,
      parseClassName: a
    });
  }
  return r;
}, Ot = (e) => {
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
}, zt = (e) => ({
  cache: It(e.cacheSize),
  parseClassName: jt(e),
  sortModifiers: Ot(e),
  ..._t(e)
}), Dt = /\s+/, Lt = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: a,
    sortModifiers: i
  } = t, l = [], u = e.trim().split(Dt);
  let c = "";
  for (let b = u.length - 1; b >= 0; b -= 1) {
    const v = u[b], {
      isExternal: _,
      modifiers: T,
      hasImportantModifier: C,
      baseClassName: M,
      maybePostfixModifierPosition: P
    } = o(v);
    if (_) {
      c = v + (c.length > 0 ? " " + c : c);
      continue;
    }
    let S = !!P, O = r(S ? M.substring(0, P) : M);
    if (!O) {
      if (!S) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (O = r(M), !O) {
        c = v + (c.length > 0 ? " " + c : c);
        continue;
      }
      S = !1;
    }
    const F = T.length === 0 ? "" : T.length === 1 ? T[0] : i(T).join(":"), N = C ? F + Pe : F, G = N + O;
    if (l.indexOf(G) > -1)
      continue;
    l.push(G);
    const U = a(O, S);
    for (let V = 0; V < U.length; ++V) {
      const y = U[V];
      l.push(N + y);
    }
    c = v + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Vt = (...e) => {
  let t = 0, o, r, a = "";
  for (; t < e.length; )
    (o = e[t++]) && (r = qe(o)) && (a && (a += " "), a += r);
  return a;
}, qe = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = qe(e[r])) && (o && (o += " "), o += t);
  return o;
}, Ft = (e, ...t) => {
  let o, r, a, i;
  const l = (c) => {
    const b = t.reduce((v, _) => _(v), e());
    return o = zt(b), r = o.cache.get, a = o.cache.set, i = u, u(c);
  }, u = (c) => {
    const b = r(c);
    if (b)
      return b;
    const v = Lt(c, o);
    return a(c, v), v;
  };
  return i = l, (...c) => i(Vt(...c));
}, Gt = [], L = (e) => {
  const t = (o) => o[e] || Gt;
  return t.isThemeGetter = !0, t;
}, Xe = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ze = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ut = /^\d+\/\d+$/, Yt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ht = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Wt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Bt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, me = (e) => Ut.test(e), x = (e) => !!e && !Number.isNaN(Number(e)), se = (e) => !!e && Number.isInteger(Number(e)), Ee = (e) => e.endsWith("%") && x(e.slice(0, -1)), re = (e) => Yt.test(e), qt = () => !0, Xt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ht.test(e) && !Wt.test(e)
), Ke = () => !1, Zt = (e) => Bt.test(e), Kt = (e) => Jt.test(e), Qt = (e) => !m(e) && !f(e), er = (e) => pe(e, tt, Ke), m = (e) => Xe.test(e), de = (e) => pe(e, rt, Xt), Se = (e) => pe(e, sr, x), Fe = (e) => pe(e, Qe, Ke), tr = (e) => pe(e, et, Kt), ke = (e) => pe(e, ot, Zt), f = (e) => Ze.test(e), we = (e) => be(e, rt), rr = (e) => be(e, ar), Ge = (e) => be(e, Qe), or = (e) => be(e, tt), nr = (e) => be(e, et), ve = (e) => be(e, ot, !0), pe = (e, t, o) => {
  const r = Xe.exec(e);
  return r ? r[1] ? t(r[1]) : o(r[2]) : !1;
}, be = (e, t, o = !1) => {
  const r = Ze.exec(e);
  return r ? r[1] ? t(r[1]) : o : !1;
}, Qe = (e) => e === "position" || e === "percentage", et = (e) => e === "image" || e === "url", tt = (e) => e === "length" || e === "size" || e === "bg-size", rt = (e) => e === "length", sr = (e) => e === "number", ar = (e) => e === "family-name", ot = (e) => e === "shadow", ir = () => {
  const e = L("color"), t = L("font"), o = L("text"), r = L("font-weight"), a = L("tracking"), i = L("leading"), l = L("breakpoint"), u = L("container"), c = L("spacing"), b = L("radius"), v = L("shadow"), _ = L("inset-shadow"), T = L("text-shadow"), C = L("drop-shadow"), M = L("blur"), P = L("perspective"), S = L("aspect"), O = L("ease"), F = L("animate"), N = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], G = () => [
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
  ], U = () => [...G(), f, m], V = () => ["auto", "hidden", "clip", "visible", "scroll"], y = () => ["auto", "contain", "none"], n = () => [f, m, c], d = () => [me, "full", "auto", ...n()], R = () => [se, "none", "subgrid", f, m], Z = () => ["auto", {
    span: ["full", se, f, m]
  }, se, f, m], K = () => [se, "auto", f, m], ie = () => ["auto", "min", "max", "fr", f, m], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], B = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Y = () => ["auto", ...n()], J = () => [me, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...n()], p = () => [e, f, m], ee = () => [...G(), Ge, Fe, {
    position: [f, m]
  }], oe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], s = () => ["auto", "cover", "contain", or, er, {
    size: [f, m]
  }], g = () => [Ee, we, de], h = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    b,
    f,
    m
  ], k = () => ["", x, we, de], q = () => ["solid", "dashed", "dotted", "double"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], w = () => [x, Ee, Ge, Fe], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    M,
    f,
    m
  ], X = () => ["none", x, f, m], ne = () => ["none", x, f, m], z = () => [x, f, m], ue = () => [me, "full", ...n()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [re],
      breakpoint: [re],
      color: [qt],
      container: [re],
      "drop-shadow": [re],
      ease: ["in", "out", "in-out"],
      font: [Qt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [re],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [re],
      shadow: [re],
      spacing: ["px", x],
      text: [re],
      "text-shadow": [re],
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
        aspect: ["auto", "square", me, m, f, S]
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
        columns: [x, m, f, u]
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
        object: U()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: V()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": V()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": V()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: y()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": y()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": y()
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
        basis: [me, "full", "auto", u, ...n()]
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
        flex: [x, me, "auto", "initial", "none", m]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", x, f, m]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", x, f, m]
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
        "grid-cols": R()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: Z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": R()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: Z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        "auto-cols": ie()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ie()
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
        justify: [...le(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...B(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...B()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...le()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...B(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": le()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...B(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...B()]
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
        m: Y()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Y()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Y()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Y()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Y()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Y()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Y()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Y()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Y()
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
        size: J()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...J()]
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
          ...J()
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
          ...J()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...J()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...J()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...J()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, we, de]
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
        font: [r, f, Se]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ee, m]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [rr, m, t]
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
        "line-clamp": [x, "none", f, Se]
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [x, "from-font", "auto", f, de]
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
        "underline-offset": [x, "auto", f, m]
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
        bg: ee()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: oe()
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
        }, nr, tr]
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
        border: k()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": k()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": k()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": k()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": k()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": k()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": k()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": k()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": k()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": k()
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
        "divide-y": k()
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
        "outline-offset": [x, f, m]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", x, we, de]
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
          ve,
          ke
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
        "inset-shadow": ["none", _, ve, ke]
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
        ring: k()
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
        "ring-offset": [x, de]
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
        "inset-ring": k()
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
        "text-shadow": ["none", T, ve, ke]
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
        opacity: [x, f, m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...te(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": te()
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
        "mask-linear": [x]
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
        "mask-radial-at": G()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [x]
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
        mask: ee()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: oe()
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
        blur: H()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [x, f, m]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [x, f, m]
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
          ve,
          ke
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
        grayscale: ["", x, f, m]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [x, f, m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", x, f, m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x, f, m]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", x, f, m]
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
        "backdrop-blur": H()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [x, f, m]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [x, f, m]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", x, f, m]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [x, f, m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", x, f, m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x, f, m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x, f, m]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", x, f, m]
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
        duration: [x, "initial", f, m]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", O, f, m]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [x, f, m]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", F, f, m]
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
        perspective: [P, f, m]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": U()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: X()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": X()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": X()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": X()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ne()
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
        skew: z()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": z()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": z()
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
        origin: U()
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
        translate: ue()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ue()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ue()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ue()
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
        stroke: [x, we, de, Se]
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
}, lr = /* @__PURE__ */ Ft(ir), cr = (e, t) => {
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
}, W = (...e) => lr(xt(e)), $e = (e, t, o) => {
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
    const a = cr(e, o);
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
}, Re = (e) => {
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
}, Ae = (e) => {
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
}, dr = (e, t) => {
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
}, ur = ({
  value: e,
  onChange: t,
  hasSeconds: o,
  hour12: r,
  maxTime: a,
  minTime: i,
  format: l
}) => {
  const [u, c] = pt(dr, {
    isAm: !1,
    inputType: "hours",
    hours: $e(e, r, l),
    minutes: Re(e),
    seconds: Ae(e),
    hour12: r,
    format: l
  }), { isAm: b, inputType: v, hours: _, minutes: T, seconds: C } = u, M = _e(null), P = _e(null), S = _e(null), O = `${_}:${T}:${C}`, F = `${$e(
    e,
    r,
    l
  )}:${Re(e)}:${Ae(e)}`;
  Ce(() => {
    e && typeof e == "string" && +e?.split(":")[0] < 12 && r && c({ type: "TOGGLE_AM", payload: !0 });
  }, []), Ce(() => {
    !e && t && t(O);
  }, []), Ce(() => {
    if (t) {
      const y = F?.split(":")[0], n = F?.split(":")[1], d = F?.split(":")[2];
      let R = y;
      !b && r && +y < 12 && (R = `${+y + 12}`), t(`${R}:${n}:${d}`);
    }
  }, [b]), e && t && F !== O && (c({
    type: "SET_HOURS",
    payload: $e(e, r, l)
  }), c({
    type: "SET_MINUTES",
    payload: Re(e)
  }), c({
    type: "SET_SECONDS",
    payload: Ae(e)
  }));
  const N = bt(
    (y, n, d) => {
      let R;
      if (t && e || e === "" && y && t) {
        if (R = o ? `${y}:${n}:${d}` : `${y}:${n}`, (a || i) && !ye(
          R,
          a,
          i,
          o
        ))
          return;
        t(R);
        return;
      } else {
        let Z;
        if (Z = o ? `${y}:${n}:${d}` : `${y}:${n}`, (a || i) && !ye(
          Z,
          a,
          i,
          o
        ))
          return;
        c({ type: "SET_HOURS", payload: y }), c({ type: "SET_MINUTES", payload: n }), c({ type: "SET_SECONDS", payload: d });
        return;
      }
    },
    [t, e, o]
  );
  return {
    hoursRef: M,
    minutesRef: P,
    secondsRef: S,
    handleHours: (y) => {
      const { currentTarget: n } = y;
      if (n.value === "") {
        N(n.value, T, C);
        return;
      }
      if (n.value && n.valueAsNumber < 24 && n.valueAsNumber >= 0) {
        const d = n.value.slice(-2);
        if (t)
          if (r)
            if (b) {
              N(
                +d % 12 === 0 ? "0" : `${+d}`,
                T,
                C
              );
              return;
            } else {
              N(
                +d % 12 === 0 ? "0" : `${+d + 12}`,
                T,
                C
              );
              return;
            }
          else {
            N(
              d.length < 2 ? `0${d}` : d,
              T,
              C
            );
            return;
          }
        else {
          if ((a || i) && !ye(
            d,
            a,
            i,
            o
          ))
            return;
          if (l && l.includes("hh")) {
            const R = +d > 11 ? "12" : `${+d < 1 ? "1" : +d % 12}`;
            c({ type: "SET_HOURS", payload: R });
          } else {
            const R = d.length < 2 ? `0${d}` : d;
            c({ type: "SET_HOURS", payload: R });
          }
        }
      }
    },
    handleMinutes: (y) => {
      const { currentTarget: n } = y;
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
          const R = d.length < 2 ? `0${d}` : d;
          c({ type: "SET_MINUTES", payload: R });
        }
      }
    },
    handleSeconds: (y) => {
      const { currentTarget: n } = y;
      if (n.value === "") {
        N(_, T, n.value);
        return;
      }
      if (n.value && n.valueAsNumber < 60 && n.valueAsNumber >= 0) {
        const d = n.value.slice(-2);
        if (t)
          N(
            _,
            T,
            d.length < 2 ? `0${d}` : d
          );
        else {
          const R = d.length < 2 ? `0${d}` : d;
          c({ type: "SET_SECONDS", payload: R });
        }
      }
    },
    inputType: v,
    updateTime: N,
    hours: _,
    minutes: T,
    seconds: C,
    isAm: b,
    state: u,
    dispatch: c
  };
}, mr = (e) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-up", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ ae.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ ae.createElement("path", { d: "M6 15l6 -6l6 6" })), fr = (e) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-down", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ ae.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ ae.createElement("path", { d: "M6 9l6 6l6 -6" })), pr = "_inputContainer_9rf1m_2", br = "_timeInputMainContainer_9rf1m_15", gr = "_disabled_9rf1m_43", hr = "_hourContainer_9rf1m_54", wr = "_hh_9rf1m_54", yr = "_noValue_9rf1m_54", xr = "_hyphen_9rf1m_58", kr = "_noZero_9rf1m_62", vr = "_minutesContainer_9rf1m_66", Tr = "_mm_9rf1m_66", _r = "_withSeconds_9rf1m_78", Cr = "_secondsContainer_9rf1m_86", Er = "_timerContainer_9rf1m_105", Sr = "_iconContainer_9rf1m_115", $r = "_arrowsContainer_9rf1m_141", Rr = "_toggleAmPmContainer_9rf1m_159", j = {
  inputContainer: pr,
  timeInputMainContainer: br,
  disabled: gr,
  hourContainer: hr,
  hh: wr,
  noValue: yr,
  hyphen: xr,
  noZero: kr,
  minutesContainer: vr,
  mm: Tr,
  withSeconds: _r,
  secondsContainer: Cr,
  timerContainer: Er,
  iconContainer: Sr,
  arrowsContainer: $r,
  toggleAmPmContainer: Rr
}, Ar = (e) => {
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
    stepMinutes: T,
    stepSeconds: C,
    readOnly: M,
    readOnlyHours: P,
    readOnlyMinutes: S,
    readOnlySeconds: O
  } = e;
  let F = fe(_, !0, l), N = fe(T, !1, l), G = fe(C, !1, l);
  return { handleAddTime: (y) => {
    if (y.preventDefault(), !M) {
      if (t === "hours") {
        if (P || (c || b) && !ye(
          `${+r + 1}`,
          c,
          b
        ))
          return;
        const n = _ ? +r + F : +r + 1;
        let d;
        l ? u ? d = `${n > 11 ? "12" : n}` : d = `${n > 11 ? "00" : n + 12}` : v && v.includes("hh") ? d = `${n > 11 ? "12" : +n % 12}` : d = `${n < 0 ? "00" : n < 10 ? `0${n}` : n < 24 ? n : _ ? n - _ : 23}`, o(d, a, i);
      }
      if (t === "minutes") {
        if (S) return;
        const n = T ? +a + N : +a + 1, d = `${n < 10 ? `0${n}` : n < 60 ? n : T ? n - T : 59}`;
        o(r, d, i);
      }
      if (t === "seconds") {
        if (O) return;
        const n = C ? +i + G : +i + 1, d = `${n < 10 ? `0${n}` : n < 60 ? n : C ? n - C : 59}`;
        o(r, a, d);
      }
    }
  }, handleRemoveTime: (y) => {
    if (y.preventDefault(), !M) {
      if (t === "hours") {
        if (P || (c || b) && !ye(
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
        if (S) return;
        const n = T ? +a - T : +a - 1, d = `${n < 0 ? "00" : n < 10 ? `0${n}` : n}`;
        o(r, d, i);
      }
      if (t === "seconds") {
        if (O) return;
        const n = C ? +i - C : +i - 1, d = `${n < 0 ? "00" : n < 10 ? `0${n}` : n}`;
        o(r, a, d);
      }
    }
  } };
}, nt = Ue(null), Pr = ({
  children: e,
  props: t
}) => {
  const { handleAddTime: o, handleRemoveTime: r } = Ar(t), { controlsClassName: a, disabled: i, inputType: l } = t;
  return /* @__PURE__ */ E.jsx(
    nt,
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
}, Nr = () => {
  const e = Ye(nt);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
}, Ir = gt(function() {
  const {
    controlsClassName: t,
    disabled: o,
    handleAddTime: r,
    handleRemoveTime: a,
    inputType: i
  } = Nr();
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: W(j.arrowsContainer, t),
      "aria-label": `${i}-controls`,
      children: [
        /* @__PURE__ */ E.jsx(
          "button",
          {
            onClick: (l) => r(l),
            disabled: o,
            "aria-label": "add-time",
            tabIndex: 0,
            children: /* @__PURE__ */ E.jsx(mr, {})
          }
        ),
        /* @__PURE__ */ E.jsx(
          "button",
          {
            disabled: o,
            onClick: (l) => a(l),
            "aria-label": "remove-time",
            tabIndex: 0,
            children: /* @__PURE__ */ E.jsx(fr, {})
          }
        )
      ]
    }
  );
}), Mr = (e) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", ...e }, /* @__PURE__ */ ae.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" })), st = Ue(
  null
), jr = ({
  children: e,
  props: t
}) => {
  const { dispatch: o, amPmAriaLabel: r, disabled: a, isAm: i } = t, l = () => {
    o({ type: "TOGGLE_AM", payload: !i });
  };
  return /* @__PURE__ */ E.jsx(
    st,
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
}, Or = () => {
  const e = Ye(st);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
}, zr = () => {
  const { handleToggleAmPm: e, isAm: t, disabled: o, amPmAriaLabel: r } = Or();
  return /* @__PURE__ */ E.jsx(
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
}, Dr = ({
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
    updateTime: T,
    hours: C,
    minutes: M,
    seconds: P,
    state: S,
    dispatch: O,
    stepHours: F,
    stepMinutes: N,
    stepSeconds: G,
    readOnly: U,
    readOnlyHours: V,
    readOnlyMinutes: y,
    readOnlySeconds: n
  } = e;
  return /* @__PURE__ */ E.jsx(
    Pr,
    {
      props: {
        inputType: o,
        disabled: a || i || l || u,
        updateTime: T,
        hours: C,
        minutes: M,
        seconds: P,
        controlsClassName: c,
        format: b,
        hour12: v,
        isAm: r,
        state: S,
        dispatch: O,
        stepHours: F,
        stepMinutes: N,
        stepSeconds: G,
        readOnly: U,
        readOnlyHours: V,
        readOnlyMinutes: y,
        readOnlySeconds: n
      },
      children: /* @__PURE__ */ E.jsx(
        jr,
        {
          props: {
            isAm: r,
            amPmAriaLabel: _,
            disabled: a || i || l || u,
            state: S,
            dispatch: O
          },
          children: t
        }
      )
    }
  );
}, Vr = ({
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
  iconClockClassName: _,
  amPmButtonClassName: T,
  controlsClassName: C,
  inputClassName: M,
  dividerClassName: P,
  ariaLabel: S = "time",
  iconAriaLabel: O = "clock",
  hoursAriaLabel: F = "hours",
  minutesAriaLabel: N = "minutes",
  secondsAriaLabel: G = "seconds",
  amPmAriaLabel: U = "am-pm",
  hasSeconds: V = !1,
  hour12: y = !1,
  disableFocusOnIcon: n = !1,
  disabledHours: d,
  disabledMinutes: R,
  disabledSeconds: Z,
  maxTime: K,
  minTime: ie,
  hideControls: le = !1,
  hoursInputTitle: B = "Hours input",
  minutesInputTitle: Y = "Minutes input",
  secondsInputTitle: J = "Seconds input",
  setZeroOnBlur: p = !1,
  format: ee,
  stepHours: oe = 1,
  stepMinutes: s = 1,
  stepSeconds: g = 1,
  readOnly: h = !1,
  readOnlyHours: k = !1,
  readOnlyMinutes: q = !1,
  readOnlySeconds: te = !1
}) => {
  const {
    hoursRef: w,
    minutesRef: H,
    secondsRef: X,
    inputType: ne,
    updateTime: z,
    handleHours: ue,
    handleMinutes: at,
    handleSeconds: it,
    hours: A,
    minutes: I,
    seconds: D,
    isAm: Ie,
    state: lt,
    dispatch: Q
  } = ur({
    value: t,
    onChange: b,
    hasSeconds: V,
    hour12: y,
    maxTime: K,
    minTime: ie,
    format: ee
  }), ct = `${j.timerContainer} ${j.hourContainer}
  ${r === "--" ? j.hyphen : j.hh} 
  ${A === "" ? j.noValue : ""} 
  ${+A > 9 ? j.noZero : ""}`, dt = `${j.timerContainer} ${j.minutesContainer} ${V ? j.withSeconds : ""}
  ${a === "--" ? j.hyphen : j.mm}  
  ${I === "" ? j.noValue : ""}  
  ${+I > 9 ? j.noZero : ""}`, ut = `${j.timerContainer} ${j.secondsContainer}`, Me = ee?.includes("ss") || V, mt = ee?.includes("hh");
  return /* @__PURE__ */ E.jsx(
    Dr,
    {
      props: {
        hours: A,
        minutes: I,
        seconds: D,
        isAm: Ie,
        inputType: ne,
        disabled: u,
        controlsClassName: C,
        hour12: y,
        amPmAriaLabel: U,
        updateTime: z,
        format: mt ? "hh" : "HH",
        disabledHours: d,
        disabledMinutes: R,
        disabledSeconds: Z,
        state: lt,
        dispatch: Q,
        stepHours: oe,
        stepMinutes: s,
        stepSeconds: g,
        readOnly: h,
        readOnlyHours: k,
        readOnlyMinutes: q,
        readOnlySeconds: te
      },
      children: /* @__PURE__ */ E.jsxs(
        "div",
        {
          className: W(
            `${j.inputContainer} ${u ? j.disabled : ""}`,
            v
          ),
          "data-testid": o,
          role: "textbox",
          tabIndex: 0,
          children: [
            !n && /* @__PURE__ */ E.jsx(
              "div",
              {
                className: W(j.iconContainer, _),
                role: "button",
                onClick: () => {
                  Q({ type: "INPUT_TYPE", payload: "hours" }), ce(w);
                },
                "aria-label": O,
                children: /* @__PURE__ */ E.jsx(Mr, {})
              }
            ),
            /* @__PURE__ */ E.jsxs("div", { className: W(j.timeInputMainContainer), children: [
              /* @__PURE__ */ E.jsxs(
                "div",
                {
                  className: W(ct),
                  onClick: ($) => {
                    $.preventDefault(), Q({ type: "INPUT_TYPE", payload: "hours" }), ce(w);
                  },
                  children: [
                    /* @__PURE__ */ E.jsx(
                      "input",
                      {
                        type: "hidden",
                        name: l,
                        "aria-label": S,
                        value: Me ? `${A}:${I}:${D}` : `${A}:${I}`
                      }
                    ),
                    /* @__PURE__ */ E.jsx(
                      "input",
                      {
                        type: "number",
                        id: e,
                        autoComplete: "off",
                        minLength: 1,
                        maxLength: 2,
                        readOnly: h || k,
                        step: fe(oe, !0, y),
                        min: y ? 1 : 0,
                        max: y ? 12 : 23,
                        inputMode: "numeric",
                        value: A,
                        onChange: ue,
                        pattern: "^(2[0-3]|[01]?[0-9])$",
                        placeholder: r,
                        required: c,
                        className: W(M),
                        onBlur: () => {
                          if (p && A.length < 2) {
                            if (y) {
                              z(
                                +A > 12 ? "12" : Ie ? A : `${+A + 12}`,
                                I,
                                D
                              );
                              return;
                            }
                            z(`0${A}`, I, D);
                            return;
                          }
                        },
                        onKeyDown: ($) => {
                          if ($.key === "Tab") {
                            if (Q({ type: "INPUT_TYPE", payload: "minutes" }), A === "") {
                              z("00", I, D);
                              return;
                            }
                            if (A.length < 2) {
                              z(`0${A}`, I, D);
                              return;
                            }
                          }
                          if ($.key === "Backspace") {
                            z("", I, D);
                            return;
                          }
                          return ["e", "E", "+", "-"].includes($.key) && $.preventDefault();
                        },
                        onClick: ($) => {
                          $.preventDefault(), ce(w), Q({ type: "INPUT_TYPE", payload: "hours" });
                        },
                        tabIndex: 0,
                        disabled: u || d,
                        "aria-label": F,
                        name: `hours-${l}`,
                        ref: w,
                        title: B
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ E.jsx("span", { className: W(P), children: ":" }),
              /* @__PURE__ */ E.jsx(
                "div",
                {
                  className: W(dt),
                  onClick: ($) => {
                    $.preventDefault(), Q({ type: "INPUT_TYPE", payload: "minutes" }), ce(H);
                  },
                  children: /* @__PURE__ */ E.jsx(
                    "input",
                    {
                      type: "number",
                      autoComplete: "off",
                      min: 0,
                      max: 59,
                      step: fe(s, !1, y),
                      size: 2,
                      readOnly: h || q,
                      placeholder: a,
                      value: I,
                      className: W(M),
                      inputMode: "numeric",
                      onChange: at,
                      pattern: "^([0-5]?[0-9])$",
                      required: c,
                      onBlur: () => {
                        if (p) {
                          if (I === "") {
                            z(A, "00", D);
                            return;
                          }
                          if (I.length < 2) {
                            z(A, `0${I}`, D);
                            return;
                          }
                        }
                      },
                      onKeyDown: ($) => {
                        if ($.key === "Tab" && V) {
                          if (I === "") {
                            z(A, "00", D);
                            return;
                          }
                          if (I.length < 2) {
                            z(A, `0${I}`, D);
                            return;
                          }
                          Q({ type: "INPUT_TYPE", payload: "seconds" });
                        }
                        if ($.key === "Backspace") {
                          z(A, "", D);
                          return;
                        }
                        return ["e", "E", "+", "-"].includes($.key) && $.preventDefault();
                      },
                      onClick: ($) => {
                        $.preventDefault(), ce(H), Q({ type: "INPUT_TYPE", payload: "minutes" });
                      },
                      ref: H,
                      tabIndex: 0,
                      disabled: u || R,
                      "aria-label": N,
                      name: `minutes-${l}`,
                      title: Y
                    }
                  )
                }
              ),
              Me ? /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
                /* @__PURE__ */ E.jsx("span", { className: W(P), children: ":" }),
                /* @__PURE__ */ E.jsx(
                  "div",
                  {
                    className: W(ut),
                    onClick: ($) => {
                      $.preventDefault(), Q({ type: "INPUT_TYPE", payload: "seconds" }), ce(X);
                    },
                    children: /* @__PURE__ */ E.jsx(
                      "input",
                      {
                        type: "number",
                        autoComplete: "off",
                        step: fe(g, !1, y),
                        size: 2,
                        min: 0,
                        max: 59,
                        readOnly: h || te,
                        placeholder: i,
                        value: D,
                        className: W(M),
                        pattern: "^([0-5]?[0-9])$",
                        required: c,
                        onBlur: () => {
                          if (p) {
                            if (D === "") {
                              z(A, I, "00");
                              return;
                            }
                            if (D.length < 2) {
                              z(A, I, `0${D}`);
                              return;
                            }
                          }
                        },
                        onKeyDown: ($) => {
                          if ($.key === "Tab") {
                            if (D === "") {
                              z(A, I, "00");
                              return;
                            }
                            if (D.length < 2) {
                              z(A, I, `0${D}`);
                              return;
                            }
                            Q({ type: "INPUT_TYPE", payload: "seconds" });
                          }
                          if ($.key === "Backspace") {
                            z(A, I, "");
                            return;
                          }
                          return ["e", "E", "+", "-"].includes($.key) && $.preventDefault();
                        },
                        onChange: it,
                        onClick: ($) => {
                          $.preventDefault(), ce(X), Q({ type: "INPUT_TYPE", payload: "seconds" });
                        },
                        tabIndex: 0,
                        disabled: u || Z,
                        ref: X,
                        "aria-label": G,
                        name: `seconds-${l}`,
                        title: J
                      }
                    )
                  }
                )
              ] }) : null,
              y && /* @__PURE__ */ E.jsx(
                "div",
                {
                  className: W(j.toggleAmPmContainer, T),
                  title: "AM/PM button",
                  children: /* @__PURE__ */ E.jsx(zr, {})
                }
              )
            ] }),
            le ? null : /* @__PURE__ */ E.jsx(Ir, {})
          ]
        }
      )
    }
  );
};
export {
  Vr as TimeInput
};
