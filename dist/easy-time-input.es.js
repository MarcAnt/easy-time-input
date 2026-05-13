import * as ae from "react";
import Pt, { useContext as et, createContext as tt, useReducer as It, useRef as Se, useEffect as $e, useCallback as Mt, useState as Ot } from "react";
var ke = { exports: {} }, ge = {};
var Ue;
function jt() {
  if (Ue) return ge;
  Ue = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(t, a, o) {
    var s = null;
    if (o !== void 0 && (s = "" + o), a.key !== void 0 && (s = "" + a.key), "key" in a) {
      o = {};
      for (var c in a)
        c !== "key" && (o[c] = a[c]);
    } else o = a;
    return a = o.ref, {
      $$typeof: e,
      type: t,
      key: s,
      ref: a !== void 0 ? a : null,
      props: o
    };
  }
  return ge.Fragment = r, ge.jsx = n, ge.jsxs = n, ge;
}
var we = {};
var Ye;
function zt() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === U ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case v:
          return "Fragment";
        case z:
          return "Profiler";
        case L:
          return "StrictMode";
        case S:
          return "Suspense";
        case j:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case N:
            return "Portal";
          case F:
            return l.displayName || "Context";
          case V:
            return (l._context.displayName || "Context") + ".Consumer";
          case D:
            var _ = l.render;
            return l = l.displayName, l || (l = _.displayName || _.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case i:
            return _ = l.displayName || null, _ !== null ? _ : e(l.type) || "Memo";
          case h:
            _ = l._payload, l = l._init;
            try {
              return e(l(_));
            } catch {
            }
        }
      return null;
    }
    function r(l) {
      return "" + l;
    }
    function n(l) {
      try {
        r(l);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var T = _.error, A = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return T.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), r(l);
      }
    }
    function t(l) {
      if (l === v) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === h)
        return "<...>";
      try {
        var _ = e(l);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var l = B.A;
      return l === null ? null : l.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function s(l) {
      if (x.call(l, "key")) {
        var _ = Object.getOwnPropertyDescriptor(l, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function c(l, _) {
      function T() {
        u || (u = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: T,
        configurable: !0
      });
    }
    function d() {
      var l = e(this.type);
      return O[l] || (O[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function b(l, _, T, A, J, ne) {
      var k = T.ref;
      return l = {
        $$typeof: M,
        type: l,
        key: _,
        props: T,
        _owner: A
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(l, "ref", { enumerable: !1, value: null }), l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(l, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(l, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function C(l, _, T, A, J, ne) {
      var k = _.children;
      if (k !== void 0)
        if (A)
          if (w(k)) {
            for (A = 0; A < k.length; A++)
              y(k[A]);
            Object.freeze && Object.freeze(k);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(k);
      if (x.call(_, "key")) {
        k = e(l);
        var W = Object.keys(_).filter(function(K) {
          return K !== "key";
        });
        A = 0 < W.length ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}", Z[k + A] || (W = 0 < W.length ? "{" + W.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          k,
          W,
          k
        ), Z[k + A] = !0);
      }
      if (k = null, T !== void 0 && (n(T), k = "" + T), s(_) && (n(_.key), k = "" + _.key), "key" in _) {
        T = {};
        for (var X in _)
          X !== "key" && (T[X] = _[X]);
      } else T = _;
      return k && c(
        T,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), b(
        l,
        k,
        T,
        a(),
        J,
        ne
      );
    }
    function y(l) {
      $(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === h && (l._payload.status === "fulfilled" ? $(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function $(l) {
      return typeof l == "object" && l !== null && l.$$typeof === M;
    }
    var I = Pt, M = /* @__PURE__ */ Symbol.for("react.transitional.element"), N = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), L = /* @__PURE__ */ Symbol.for("react.strict_mode"), z = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), i = /* @__PURE__ */ Symbol.for("react.memo"), h = /* @__PURE__ */ Symbol.for("react.lazy"), H = /* @__PURE__ */ Symbol.for("react.activity"), U = /* @__PURE__ */ Symbol.for("react.client.reference"), B = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, w = Array.isArray, m = console.createTask ? console.createTask : function() {
      return null;
    };
    I = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var u, O = {}, g = I.react_stack_bottom_frame.bind(
      I,
      o
    )(), q = m(t(o)), Z = {};
    we.Fragment = v, we.jsx = function(l, _, T) {
      var A = 1e4 > B.recentlyCreatedOwnerStacks++;
      return C(
        l,
        _,
        T,
        !1,
        A ? Error("react-stack-top-frame") : g,
        A ? m(t(l)) : q
      );
    }, we.jsxs = function(l, _, T) {
      var A = 1e4 > B.recentlyCreatedOwnerStacks++;
      return C(
        l,
        _,
        T,
        !0,
        A ? Error("react-stack-top-frame") : g,
        A ? m(t(l)) : q
      );
    };
  })()), we;
}
var He;
function Dt() {
  return He || (He = 1, process.env.NODE_ENV === "production" ? ke.exports = jt() : ke.exports = zt()), ke.exports;
}
var P = Dt();
const Lt = (e, r, n, t, a) => {
  const { hours: o, minutes: s, seconds: c } = e;
  if (r === "hours" && o.length < 2) {
    if (t) {
      n(
        +o > 12 ? "12" : `${+o + 12}`,
        s,
        c
      );
      return;
    }
    n(`0${o}`, s, c);
    return;
  }
  if (r === "minutes") {
    if (s === "") {
      n(o, s, c);
      return;
    }
    if (s.length < 2) {
      n(o, `0${s}`, c);
      return;
    }
  }
  if (r === "seconds") {
    if (c === "") {
      n(o, s, "00");
      return;
    }
    if (c.length < 2) {
      n(o, s, `0${c}`);
      return;
    }
  }
}, Vt = (e, r, n, t, a, o, s) => {
  const { hours: c, minutes: d, seconds: b } = a;
  if (r === "hours") {
    if (e.key === "Tab") {
      if (n({ type: "INPUT_TYPE", payload: "minutes" }), c === "") {
        t("00", d, b);
        return;
      }
      if (c.length < 2) {
        t(`0${c}`, d, b);
        return;
      }
    }
    if (e.key === "Backspace") {
      t("", d, b);
      return;
    }
  }
  if (r === "minutes") {
    if (e.key === "Tab" && (o || s?.includes("ss"))) {
      if (d === "") {
        n({ type: "INPUT_TYPE", payload: "seconds" }), t(c, "00", b);
        return;
      }
      if (d.length < 2) {
        n({ type: "INPUT_TYPE", payload: "seconds" }), t(c, `0${d}`, b);
        return;
      }
      n({ type: "INPUT_TYPE", payload: "seconds" });
    }
    if (e.key === "Backspace") {
      t(c, "", b);
      return;
    }
  }
  if (r === "seconds") {
    if (e.key === "Tab") {
      if (b === "") {
        t(c, d, "00");
        return;
      }
      if (b.length < 2) {
        t(c, d, `0${b}`);
        return;
      }
      n({ type: "INPUT_TYPE", payload: "seconds" });
    }
    if (e.key === "Backspace") {
      t(c, d, "");
      return;
    }
  }
  return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
}, fe = (e) => {
  e.current?.select(), e.current?.focus();
}, _e = (e, r, n, t) => {
  let a, o, s = !0;
  if (r && r instanceof Date ? a = new Date(r).toLocaleTimeString("en", {
    hour12: !1
  }) : a = r, n && n instanceof Date ? o = new Date(n).toLocaleTimeString("en", {
    hour12: !1
  }) : o = n, a) {
    const c = a.split(":");
    let d = e.split(":");
    d.length === 1 && (d = [d[0], "00"]), c[2] === void 0 && c.push("00");
    const b = new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(c[0]),
      parseInt(c[1]),
      t ? parseInt(c[2]) : 0
    );
    new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(d[0]),
      parseInt(d[1]),
      t ? parseInt(d[2]) : 0
    ).getTime() > b.getTime() && (s = !1);
  }
  if (o) {
    const c = o.split(":");
    let d = e.split(":");
    d.length === 1 && (d = [d[0], "00"]), c[2] === void 0 && c.push("00");
    const b = new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(c[0]),
      parseInt(c[1]),
      t ? parseInt(c[2]) : 0
    );
    new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(d[0]),
      parseInt(d[1]),
      t ? parseInt(d[2]) : 0
    ).getTime() < b.getTime() && (s = !1);
  }
  return s;
}, ce = (e, r, n) => {
  if (!e || e < 0) return 1;
  if (r) {
    if (e > 23 || n && e > 11) return 1;
  } else if (e > 59) return 1;
  return e ? Math.abs(Math.trunc(e)) : 1;
}, ie = (e, r, n, t, a) => {
  if (n === "ArrowDown" || n === "ArrowUp") {
    r.current?.blur();
    return;
  }
  e.length === 2 && (fe(r), a && t && t({ type: "INPUT_TYPE", payload: a }));
}, Ft = (e) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-up", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ ae.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ ae.createElement("path", { d: "M6 15l6 -6l6 6" })), Gt = (e) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-down", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ ae.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ ae.createElement("path", { d: "M6 9l6 6l6 -6" })), Ut = "_ti__mainContainer_1wbo4_3", Yt = "_ti__inputsContainer_1wbo4_55", Ht = "_ti__disabled_1wbo4_105", Wt = "_ti__hourContainer_1wbo4_147", Bt = "_hh_1wbo4_147", qt = "_noValue_1wbo4_147", Jt = "_hyphen_1wbo4_155", Xt = "_noZero_1wbo4_163", Zt = "_ti__minutesContainer_1wbo4_171", Kt = "_mm_1wbo4_171", Qt = "_withSeconds_1wbo4_195", er = "_ti__secondsContainer_1wbo4_211", tr = "_ti__timerContainer_1wbo4_249", rr = "_ti__iconContainer_1wbo4_269", nr = "_ti__arrowsContainer_1wbo4_293", or = "_ti__toggleAmPmContainer_1wbo4_329", R = {
  ti__mainContainer: Ut,
  ti__inputsContainer: Yt,
  ti__disabled: Ht,
  ti__hourContainer: Wt,
  hh: Bt,
  noValue: qt,
  hyphen: Jt,
  noZero: Xt,
  ti__minutesContainer: Zt,
  mm: Kt,
  withSeconds: Qt,
  ti__secondsContainer: er,
  ti__timerContainer: tr,
  ti__iconContainer: rr,
  ti__arrowsContainer: nr,
  ti__toggleAmPmContainer: or
}, sr = (e) => {
  const {
    inputType: r,
    updateTime: n,
    hours: t,
    minutes: a,
    seconds: o,
    hour12: s,
    isAm: c,
    maxTime: d,
    minTime: b,
    format: C,
    stepHours: y,
    stepMinutes: $,
    stepSeconds: I,
    readOnly: M,
    readOnlyHours: N,
    readOnlyMinutes: v,
    readOnlySeconds: L
  } = e;
  let z = ce(y, !0, s), V = ce($, !1, s), F = ce(I, !1, s);
  return { handleAddTime: (j) => {
    if (j.preventDefault(), !M) {
      if (r === "hours") {
        if (N || (d || b) && !_e(
          `${+t + 1}`,
          d,
          b
        ))
          return;
        const i = y ? +t + z : +t + 1;
        let h;
        s ? c ? h = `${i > 11 ? "12" : i}` : h = `${i > 11 ? "12" : i % 12}` : C && C.includes("hh") ? h = `${i > 11 ? "12" : +i % 12}` : i < 0 ? h = "00" : i < 10 ? h = `0${i}` : i < 24 ? h = `${i}` : y ? h = `${i - y}` : h = "23", n(h, a, o);
      }
      if (r === "minutes") {
        if (v) return;
        const i = $ ? +a + V : +a + 1;
        let h;
        i < 10 ? h = `0${i}` : i < 60 ? h = `${i}` : $ ? h = `${i - $}` : h = "59", n(t, h, o);
      }
      if (r === "seconds") {
        if (L) return;
        const i = I ? +o + F : +o + 1;
        let h;
        i < 10 ? h = `0${i}` : i < 60 ? h = `${i}` : I ? h = `${i - I}` : h = "59", n(t, a, h);
      }
    }
  }, handleRemoveTime: (j) => {
    if (j.preventDefault(), !M) {
      if (r === "hours") {
        if (N || (d || b) && !_e(
          `${+t - 1}`,
          d,
          b
        ))
          return;
        const i = y ? +t - y : +t - 1;
        let h;
        s ? c ? h = `${i < 1 ? "1" : i}` : h = `${i < 1 ? "1" : i % 12}` : C && C.includes("hh") ? h = `${i < 1 ? "1" : i}` : h = `${i < 0 ? "00" : i < 10 ? `0${i}` : i}`, n(h, a, o);
      }
      if (r === "minutes") {
        if (v) return;
        const i = $ ? +a - $ : +a - 1, h = `${i < 0 ? "00" : i < 10 ? `0${i}` : i}`;
        n(t, h, o);
      }
      if (r === "seconds") {
        if (L) return;
        const i = I ? +o - I : +o - 1, h = `${i < 0 ? "00" : i < 10 ? `0${i}` : i}`;
        n(t, a, h);
      }
    }
  } };
}, rt = tt(null), ar = ({
  children: e,
  props: r
}) => {
  const { handleAddTime: n, handleRemoveTime: t } = sr(r), { controlsClassName: a, disabled: o, inputType: s } = r;
  return /* @__PURE__ */ P.jsx(
    rt,
    {
      value: {
        controlsClassName: a,
        disabled: o,
        handleAddTime: n,
        handleRemoveTime: t,
        inputType: s
      },
      children: e
    }
  );
}, ir = () => {
  const e = et(rt);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
};
function nt(e) {
  var r, n, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (r = 0; r < a; r++) e[r] && (n = nt(e[r])) && (t && (t += " "), t += n);
  } else for (n in e) e[n] && (t && (t += " "), t += n);
  return t;
}
function lr() {
  for (var e, r, n = 0, t = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (r = nt(e)) && (t && (t += " "), t += r);
  return t;
}
const cr = (e, r) => {
  const n = new Array(e.length + r.length);
  for (let t = 0; t < e.length; t++)
    n[t] = e[t];
  for (let t = 0; t < r.length; t++)
    n[e.length + t] = r[t];
  return n;
}, dr = (e, r) => ({
  classGroupId: e,
  validator: r
}), ot = (e = /* @__PURE__ */ new Map(), r = null, n) => ({
  nextPart: e,
  validators: r,
  classGroupId: n
}), Ce = "-", We = [], ur = "arbitrary..", mr = (e) => {
  const r = pr(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return fr(s);
      const c = s.split(Ce), d = c[0] === "" && c.length > 1 ? 1 : 0;
      return st(c, d, r);
    },
    getConflictingClassGroupIds: (s, c) => {
      if (c) {
        const d = t[s], b = n[s];
        return d ? b ? cr(b, d) : d : b || We;
      }
      return n[s] || We;
    }
  };
}, st = (e, r, n) => {
  if (e.length - r === 0)
    return n.classGroupId;
  const a = e[r], o = n.nextPart.get(a);
  if (o) {
    const b = st(e, r + 1, o);
    if (b) return b;
  }
  const s = n.validators;
  if (s === null)
    return;
  const c = r === 0 ? e.join(Ce) : e.slice(r).join(Ce), d = s.length;
  for (let b = 0; b < d; b++) {
    const C = s[b];
    if (C.validator(c))
      return C.classGroupId;
  }
}, fr = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = e.slice(1, -1), n = r.indexOf(":"), t = r.slice(0, n);
  return t ? ur + t : void 0;
})(), pr = (e) => {
  const {
    theme: r,
    classGroups: n
  } = e;
  return br(n, r);
}, br = (e, r) => {
  const n = ot();
  for (const t in e) {
    const a = e[t];
    je(a, n, t, r);
  }
  return n;
}, je = (e, r, n, t) => {
  const a = e.length;
  for (let o = 0; o < a; o++) {
    const s = e[o];
    hr(s, r, n, t);
  }
}, hr = (e, r, n, t) => {
  if (typeof e == "string") {
    gr(e, r, n);
    return;
  }
  if (typeof e == "function") {
    wr(e, r, n, t);
    return;
  }
  yr(e, r, n, t);
}, gr = (e, r, n) => {
  const t = e === "" ? r : at(r, e);
  t.classGroupId = n;
}, wr = (e, r, n, t) => {
  if (_r(e)) {
    je(e(t), r, n, t);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(dr(n, e));
}, yr = (e, r, n, t) => {
  const a = Object.entries(e), o = a.length;
  for (let s = 0; s < o; s++) {
    const [c, d] = a[s];
    je(d, at(r, c), n, t);
  }
}, at = (e, r) => {
  let n = e;
  const t = r.split(Ce), a = t.length;
  for (let o = 0; o < a; o++) {
    const s = t[o];
    let c = n.nextPart.get(s);
    c || (c = ot(), n.nextPart.set(s, c)), n = c;
  }
  return n;
}, _r = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, xr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, n = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  const a = (o, s) => {
    n[o] = s, r++, r > e && (r = 0, t = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(o) {
      let s = n[o];
      if (s !== void 0)
        return s;
      if ((s = t[o]) !== void 0)
        return a(o, s), s;
    },
    set(o, s) {
      o in n ? n[o] = s : a(o, s);
    }
  };
}, Oe = "!", Be = ":", kr = [], qe = (e, r, n, t, a) => ({
  modifiers: e,
  hasImportantModifier: r,
  baseClassName: n,
  maybePostfixModifierPosition: t,
  isExternal: a
}), vr = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: n
  } = e;
  let t = (a) => {
    const o = [];
    let s = 0, c = 0, d = 0, b;
    const C = a.length;
    for (let N = 0; N < C; N++) {
      const v = a[N];
      if (s === 0 && c === 0) {
        if (v === Be) {
          o.push(a.slice(d, N)), d = N + 1;
          continue;
        }
        if (v === "/") {
          b = N;
          continue;
        }
      }
      v === "[" ? s++ : v === "]" ? s-- : v === "(" ? c++ : v === ")" && c--;
    }
    const y = o.length === 0 ? a : a.slice(d);
    let $ = y, I = !1;
    y.endsWith(Oe) ? ($ = y.slice(0, -1), I = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(Oe) && ($ = y.slice(1), I = !0)
    );
    const M = b && b > d ? b - d : void 0;
    return qe(o, I, $, M);
  };
  if (r) {
    const a = r + Be, o = t;
    t = (s) => s.startsWith(a) ? o(s.slice(a.length)) : qe(kr, !1, s, void 0, !0);
  }
  if (n) {
    const a = t;
    t = (o) => n({
      className: o,
      parseClassName: a
    });
  }
  return t;
}, Tr = (e) => {
  const r = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, t) => {
    r.set(n, 1e6 + t);
  }), (n) => {
    const t = [];
    let a = [];
    for (let o = 0; o < n.length; o++) {
      const s = n[o], c = s[0] === "[", d = r.has(s);
      c || d ? (a.length > 0 && (a.sort(), t.push(...a), a = []), t.push(s)) : a.push(s);
    }
    return a.length > 0 && (a.sort(), t.push(...a)), t;
  };
}, Cr = (e) => ({
  cache: xr(e.cacheSize),
  parseClassName: vr(e),
  sortModifiers: Tr(e),
  ...mr(e)
}), Er = /\s+/, Sr = (e, r) => {
  const {
    parseClassName: n,
    getClassGroupId: t,
    getConflictingClassGroupIds: a,
    sortModifiers: o
  } = r, s = [], c = e.trim().split(Er);
  let d = "";
  for (let b = c.length - 1; b >= 0; b -= 1) {
    const C = c[b], {
      isExternal: y,
      modifiers: $,
      hasImportantModifier: I,
      baseClassName: M,
      maybePostfixModifierPosition: N
    } = n(C);
    if (y) {
      d = C + (d.length > 0 ? " " + d : d);
      continue;
    }
    let v = !!N, L = t(v ? M.substring(0, N) : M);
    if (!L) {
      if (!v) {
        d = C + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (L = t(M), !L) {
        d = C + (d.length > 0 ? " " + d : d);
        continue;
      }
      v = !1;
    }
    const z = $.length === 0 ? "" : $.length === 1 ? $[0] : o($).join(":"), V = I ? z + Oe : z, F = V + L;
    if (s.indexOf(F) > -1)
      continue;
    s.push(F);
    const D = a(L, v);
    for (let S = 0; S < D.length; ++S) {
      const j = D[S];
      s.push(V + j);
    }
    d = C + (d.length > 0 ? " " + d : d);
  }
  return d;
}, $r = (...e) => {
  let r = 0, n, t, a = "";
  for (; r < e.length; )
    (n = e[r++]) && (t = it(n)) && (a && (a += " "), a += t);
  return a;
}, it = (e) => {
  if (typeof e == "string")
    return e;
  let r, n = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (r = it(e[t])) && (n && (n += " "), n += r);
  return n;
}, Ar = (e, ...r) => {
  let n, t, a, o;
  const s = (d) => {
    const b = r.reduce((C, y) => y(C), e());
    return n = Cr(b), t = n.cache.get, a = n.cache.set, o = c, c(d);
  }, c = (d) => {
    const b = t(d);
    if (b)
      return b;
    const C = Sr(d, n);
    return a(d, C), C;
  };
  return o = s, (...d) => o($r(...d));
}, Nr = [], Y = (e) => {
  const r = (n) => n[e] || Nr;
  return r.isThemeGetter = !0, r;
}, lt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ct = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Rr = /^\d+\/\d+$/, Pr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ir = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Mr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Or = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, me = (e) => Rr.test(e), E = (e) => !!e && !Number.isNaN(Number(e)), se = (e) => !!e && Number.isInteger(Number(e)), Ae = (e) => e.endsWith("%") && E(e.slice(0, -1)), re = (e) => Pr.test(e), zr = () => !0, Dr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ir.test(e) && !Mr.test(e)
), dt = () => !1, Lr = (e) => Or.test(e), Vr = (e) => jr.test(e), Fr = (e) => !f(e) && !p(e), Gr = (e) => pe(e, ft, dt), f = (e) => lt.test(e), le = (e) => pe(e, pt, Dr), Ne = (e) => pe(e, Br, E), Je = (e) => pe(e, ut, dt), Ur = (e) => pe(e, mt, Vr), ve = (e) => pe(e, bt, Lr), p = (e) => ct.test(e), ye = (e) => be(e, pt), Yr = (e) => be(e, qr), Xe = (e) => be(e, ut), Hr = (e) => be(e, ft), Wr = (e) => be(e, mt), Te = (e) => be(e, bt, !0), pe = (e, r, n) => {
  const t = lt.exec(e);
  return t ? t[1] ? r(t[1]) : n(t[2]) : !1;
}, be = (e, r, n = !1) => {
  const t = ct.exec(e);
  return t ? t[1] ? r(t[1]) : n : !1;
}, ut = (e) => e === "position" || e === "percentage", mt = (e) => e === "image" || e === "url", ft = (e) => e === "length" || e === "size" || e === "bg-size", pt = (e) => e === "length", Br = (e) => e === "number", qr = (e) => e === "family-name", bt = (e) => e === "shadow", Jr = () => {
  const e = Y("color"), r = Y("font"), n = Y("text"), t = Y("font-weight"), a = Y("tracking"), o = Y("leading"), s = Y("breakpoint"), c = Y("container"), d = Y("spacing"), b = Y("radius"), C = Y("shadow"), y = Y("inset-shadow"), $ = Y("text-shadow"), I = Y("drop-shadow"), M = Y("blur"), N = Y("perspective"), v = Y("aspect"), L = Y("ease"), z = Y("animate"), V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [
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
  ], D = () => [...F(), p, f], S = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], i = () => [p, f, d], h = () => [me, "full", "auto", ...i()], H = () => [se, "none", "subgrid", p, f], U = () => ["auto", {
    span: ["full", se, p, f]
  }, se, p, f], B = () => [se, "auto", p, f], x = () => ["auto", "min", "max", "fr", p, f], w = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], m = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], u = () => ["auto", ...i()], O = () => [me, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...i()], g = () => [e, p, f], q = () => [...F(), Xe, Je, {
    position: [p, f]
  }], Z = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], l = () => ["auto", "cover", "contain", Hr, Gr, {
    size: [p, f]
  }], _ = () => [Ae, ye, le], T = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    b,
    p,
    f
  ], A = () => ["", E, ye, le], J = () => ["solid", "dashed", "dotted", "double"], ne = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], k = () => [E, Ae, Xe, Je], W = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    M,
    p,
    f
  ], X = () => ["none", E, p, f], K = () => ["none", E, p, f], de = () => [E, p, f], Q = () => [me, "full", ...i()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [re],
      breakpoint: [re],
      color: [zr],
      container: [re],
      "drop-shadow": [re],
      ease: ["in", "out", "in-out"],
      font: [Fr],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [re],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [re],
      shadow: [re],
      spacing: ["px", E],
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
        aspect: ["auto", "square", me, f, p, v]
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
        columns: [E, f, p, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: D()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
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
        inset: h()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": h()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": h()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: h()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: h()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: h()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: h()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: h()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: h()
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
        z: [se, "auto", p, f]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [me, "full", "auto", c, ...i()]
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
        flex: [E, me, "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", E, p, f]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", E, p, f]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [se, "first", "last", "none", p, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": H()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: U()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": H()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: U()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": x()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": x()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: i()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": i()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": i()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...w(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...m(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...m()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...w()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...m(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...m(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": w()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...m(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...m()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: i()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: i()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: i()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: i()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: i()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: i()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: i()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: i()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: i()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: u()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: u()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: u()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: u()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: u()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: u()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: u()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: u()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: u()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": i()
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
        "space-y": i()
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
        size: O()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...O()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...O()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [s]
          },
          ...O()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...O()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...O()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...O()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, ye, le]
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
        font: [t, p, Ne]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ae, f]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Yr, f, r]
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
        tracking: [a, p, f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [E, "none", p, Ne]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...i()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", p, f]
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
        list: ["disc", "decimal", "none", p, f]
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
        placeholder: g()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: g()
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
        decoration: [...J(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [E, "from-font", "auto", p, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: g()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [E, "auto", p, f]
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
        indent: i()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", p, f]
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
        content: ["none", p, f]
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
        bg: q()
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
        bg: l()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, se, p, f],
          radial: ["", p, f],
          conic: [se, p, f]
        }, Wr, Ur]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: g()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: _()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: _()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: _()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: g()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: g()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: g()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: T()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": T()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": T()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": T()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": T()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": T()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": T()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": T()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": T()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": T()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": T()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": T()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": T()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": T()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": T()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: A()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": A()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": A()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": A()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": A()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": A()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": A()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": A()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": A()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": A()
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
        "divide-y": A()
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
        border: [...J(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...J(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: g()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": g()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": g()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": g()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": g()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": g()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": g()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": g()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": g()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: g()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...J(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [E, p, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", E, ye, le]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: g()
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
          Te,
          ve
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: g()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, Te, ve]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": g()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: A()
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
        ring: g()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [E, le]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": g()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": A()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": g()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", $, Te, ve]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": g()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [E, p, f]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ne(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ne()
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
        "mask-linear": [E]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": k()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": k()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": g()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": g()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": k()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": k()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": g()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": g()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": k()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": k()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": g()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": g()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": k()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": k()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": g()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": g()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": k()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": k()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": g()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": g()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": k()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": k()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": g()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": g()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": k()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": k()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": g()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": g()
      }],
      "mask-image-radial": [{
        "mask-radial": [p, f]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": k()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": k()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": g()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": g()
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
        "mask-conic": [E]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": k()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": k()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": g()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": g()
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
        mask: q()
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
        mask: l()
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
        mask: ["none", p, f]
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
          p,
          f
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: W()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [E, p, f]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [E, p, f]
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
          I,
          Te,
          ve
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": g()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", E, p, f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [E, p, f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", E, p, f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E, p, f]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", E, p, f]
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
          p,
          f
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": W()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [E, p, f]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [E, p, f]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", E, p, f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [E, p, f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", E, p, f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [E, p, f]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E, p, f]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", E, p, f]
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
        "border-spacing": i()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": i()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": i()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", p, f]
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
        duration: [E, "initial", p, f]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", L, p, f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [E, p, f]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", z, p, f]
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
        perspective: [N, p, f]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": D()
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
        scale: K()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": K()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": K()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": K()
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
        skew: de()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": de()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": de()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [p, f, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: D()
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
        translate: Q()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Q()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Q()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Q()
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
        accent: g()
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
        caret: g()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", p, f]
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
        "scroll-m": i()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": i()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": i()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": i()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": i()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": i()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": i()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": i()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": i()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": i()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": i()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": i()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": i()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": i()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": i()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": i()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": i()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": i()
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
        "will-change": ["auto", "scroll", "contents", "transform", p, f]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...g()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [E, ye, le, Ne]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...g()]
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
}, Xr = /* @__PURE__ */ Ar(Jr), Zr = (e, r) => {
  const [n, t, a] = e.split(":"), o = +n % 12 === 0 ? 12 : +n % 12;
  switch (r) {
    case "HH:mm:ss":
      return `${n}:${t}:${a}`;
    case "HH:mm":
      return `${n}:${t}`;
    case "hh:mm:ss":
      return `${o}:${t}:${a}`;
    case "hh:mm":
      return `${o}:${t}`;
  }
}, G = (...e) => Xr(lr(e)), Re = (e, r, n) => {
  if (!e) return "00";
  if (!isNaN(new Date(e).getTime())) {
    const t = new Date(e).getHours();
    return r ? t.toString() : n && n.includes("hh") ? t < 1 ? "1" : `${t % 12}` : String(t).padStart(2, "0");
  }
  if (e instanceof Date) {
    const t = new Date(e).getHours();
    return t < 10 ? `0${t}` : t.toString();
  }
  if (typeof e == "string" && e.includes(":")) {
    const t = e.split(":")[0];
    if (t === void 0)
      return r ? "1" : "00";
    if (isNaN(parseInt(t)))
      return "";
    const a = Zr(e, n);
    let o = t;
    if (a)
      return o = a.split(":")[0], o;
    if (parseInt(o) < 0)
      return Math.abs(parseInt(o)) < 10 ? `0${Math.abs(parseInt(o))}` : `${Math.abs(parseInt(o))}`;
    if (r) {
      let s;
      return s = `${+o % 12 === 0 ? 12 : +o % 12}`, s;
    } else
      return t.length < 2 ? `0${t}` : t;
  }
  if (typeof e == "string" && !e.includes(":")) {
    if (console.log({ value: e }), e === void 0)
      return r ? "1" : "00";
    if (isNaN(parseInt(e)))
      return "";
    if (parseInt(e) < 0)
      return Math.abs(parseInt(e)) < 10 ? `0${Math.abs(parseInt(e))}` : `${Math.abs(parseInt(e))}`;
    if (r) {
      let t;
      return t = `${+e % 12 === 0 ? 12 : +e % 12}`, t;
    } else
      return e.length < 2 ? `0${e}` : e;
  }
  return r ? "1" : "00";
}, Pe = (e) => {
  if (!e) return "00";
  if (!isNaN(new Date(e).getTime()))
    return String(new Date(e).getMinutes()).padStart(2, "0");
  if (e instanceof Date)
    return e.getMinutes().toString();
  if (typeof e == "string" && e.includes(":")) {
    const r = e.split(":")[1];
    return r === void 0 ? "00" : isNaN(parseInt(r)) ? "" : Math.abs(parseInt(r)) < 10 ? `0${Math.abs(parseInt(r))}` : `${Math.abs(parseInt(r))}`;
  }
  return "00";
}, Ie = (e) => {
  if (!e) return "00";
  if (!isNaN(new Date(e).getTime()))
    return String(new Date(e).getSeconds()).padStart(2, "0");
  if (e instanceof Date)
    return e.getSeconds().toString();
  if (typeof e == "string" && e.includes(":")) {
    const r = e.split(":")[2];
    return r === void 0 ? "00" : isNaN(parseInt(r)) ? "" : Math.abs(parseInt(r)) < 10 ? `0${Math.abs(parseInt(r))}` : `${Math.abs(parseInt(r))}`;
  }
  return "00";
}, Kr = () => {
  const {
    controlsClassName: e,
    disabled: r,
    handleAddTime: n,
    handleRemoveTime: t,
    inputType: a
  } = ir();
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: G(R.ti__arrowsContainer, e),
      "aria-label": `${a}-controls`,
      children: [
        /* @__PURE__ */ P.jsx(
          "button",
          {
            onClick: (o) => n(o),
            disabled: r,
            "aria-label": "add-time",
            tabIndex: 0,
            children: /* @__PURE__ */ P.jsx(Ft, {})
          }
        ),
        /* @__PURE__ */ P.jsx(
          "button",
          {
            disabled: r,
            onClick: (o) => t(o),
            "aria-label": "remove-time",
            tabIndex: 0,
            children: /* @__PURE__ */ P.jsx(Gt, {})
          }
        )
      ]
    }
  );
}, Qr = (e) => /* @__PURE__ */ ae.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", ...e }, /* @__PURE__ */ ae.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" })), ht = tt(
  null
), en = ({
  children: e,
  props: r
}) => {
  const { dispatch: n, amPmAriaLabel: t, disabled: a, isAm: o } = r, s = () => {
    n({ type: "TOGGLE_AM", payload: !o });
  };
  return /* @__PURE__ */ P.jsx(
    ht,
    {
      value: {
        handleToggleAmPm: s,
        amPmAriaLabel: t,
        isAm: o,
        disabled: a
      },
      children: e
    }
  );
}, tn = () => {
  const e = et(ht);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
}, rn = () => {
  const { handleToggleAmPm: e, isAm: r, disabled: n, amPmAriaLabel: t } = tn();
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      id: "toggle-am-pm",
      "aria-label": t,
      onClick: e,
      disabled: n,
      title: "AM/PM button",
      type: "button",
      children: r ? "AM" : "PM"
    }
  );
}, nn = ({
  props: e,
  children: r
}) => {
  const {
    inputType: n,
    isAm: t,
    disabled: a,
    disabledHours: o,
    disabledMinutes: s,
    disabledSeconds: c,
    controlsClassName: d,
    format: b,
    hour12: C,
    amPmAriaLabel: y,
    updateTime: $,
    hours: I,
    minutes: M,
    seconds: N,
    state: v,
    dispatch: L,
    stepHours: z,
    stepMinutes: V,
    stepSeconds: F,
    readOnly: D,
    readOnlyHours: S,
    readOnlyMinutes: j,
    readOnlySeconds: i
  } = e;
  return /* @__PURE__ */ P.jsx(
    ar,
    {
      props: {
        inputType: n,
        disabled: a || o || s || c,
        updateTime: $,
        hours: I,
        minutes: M,
        seconds: N,
        controlsClassName: d,
        format: b,
        hour12: C,
        isAm: t,
        state: v,
        dispatch: L,
        stepHours: z,
        stepMinutes: V,
        stepSeconds: F,
        readOnly: D,
        readOnlyHours: S,
        readOnlyMinutes: j,
        readOnlySeconds: i
      },
      children: /* @__PURE__ */ P.jsx(
        en,
        {
          props: {
            isAm: t,
            amPmAriaLabel: y,
            disabled: a || o || s || c,
            state: v,
            dispatch: L
          },
          children: r
        }
      )
    }
  );
}, on = (e, r) => {
  switch (r.type) {
    case "SET_HOURS":
      return {
        ...e,
        hours: r.payload
      };
    case "SET_MINUTES":
      return { ...e, minutes: r.payload };
    case "SET_SECONDS":
      return { ...e, seconds: r.payload };
    case "TOGGLE_AM":
      return { ...e, isAm: r.payload };
    case "INPUT_TYPE":
      return { ...e, inputType: r.payload };
    default:
      return e;
  }
};
let Ze = !1, Ke = !1;
const sn = ({
  value: e,
  onChange: r,
  hasSeconds: n,
  hour12: t,
  maxTime: a,
  minTime: o,
  format: s,
  onChangedHours: c,
  onChangedMinutes: d,
  onChangedSeconds: b
}) => {
  const [C, y] = It(on, {
    isAm: !1,
    inputType: "hours",
    hours: Re(e, t, s),
    minutes: Pe(e),
    seconds: Ie(e),
    hour12: t,
    format: s
  }), { isAm: $, inputType: I, hours: M, minutes: N, seconds: v } = C, L = Se(null), z = Se(null), V = Se(null), F = `${M}:${N}:${v}`, D = `${Re(
    e,
    t,
    s
  )}:${Pe(e)}:${Ie(e)}`;
  $e(() => {
    if (!Ke) {
      if (!e) return;
      typeof e == "string" && +e?.split(":")[0] < 12 && t && y({ type: "TOGGLE_AM", payload: !0 }), Ke = !0;
    }
  }, []), $e(() => {
    Ze || (!e && r && r(F), Ze = !0);
  }, []), $e(() => {
    if (r) {
      const x = D?.split(":")[0], w = D?.split(":")[1], m = D?.split(":")[2];
      let u = x;
      !$ && t && (u = `${+x % 12}`), r(`${u}:${w}:${m}`);
    }
  }, [$]), e && r && D !== F && (y({
    type: "SET_HOURS",
    payload: Re(e, t, s)
  }), y({
    type: "SET_MINUTES",
    payload: Pe(e)
  }), y({
    type: "SET_SECONDS",
    payload: Ie(e)
  }));
  const S = Mt(
    (x, w, m) => {
      let u;
      if (r && e || e === "" && x && r) {
        if (s && s.includes("ss") ? u = `${x}:${w}:${m}` : u = n ? `${x}:${w}:${m}` : `${x}:${w}`, (a || o) && !_e(
          u,
          a,
          o,
          n
        ))
          return;
        r(u);
        return;
      } else {
        let O;
        if (s && s.includes("ss") ? O = `${x}:${w}:${m}` : O = n ? `${x}:${w}:${m}` : `${x}:${w}`, (a || o) && !_e(
          O,
          a,
          o,
          n
        ))
          return;
        y({ type: "SET_HOURS", payload: x }), y({ type: "SET_MINUTES", payload: w }), y({ type: "SET_SECONDS", payload: m });
        return;
      }
    },
    [r, e, n]
  ), j = (x, w) => {
    const { currentTarget: m } = x;
    if (m.value === "") {
      S(m.value, N, v);
      return;
    }
    if (m.value && m.valueAsNumber < 24 && m.valueAsNumber >= 0) {
      const u = m.value.slice(-2);
      if (r)
        if (t)
          if ($) {
            S(
              +u > 11 ? "12" : `${+u < 1 ? "1" : +u}`,
              N,
              v
            ), ie(u, z, w, y, "minutes");
            return;
          } else {
            S(
              +u > 11 ? "12" : `${+u < 1 ? "1" : +u % 12}`,
              N,
              v
            ), ie(u, z, w, y, "minutes");
            return;
          }
        else {
          if (s && s.includes("hh")) {
            const O = +u > 11 ? "12" : `${+u < 1 ? "1" : +u % 12}`;
            S(O, N, v), ie(u, z, w, y, "minutes");
            return;
          }
          S(
            u.length < 2 ? `0${u}` : u,
            N,
            v
          ), ie(u, z, w, y, "minutes");
          return;
        }
      else {
        if ((a || o) && !_e(
          u,
          a,
          o,
          n
        ))
          return;
        if (s && s.includes("hh")) {
          const O = +u > 11 ? "12" : `${+u < 1 ? "1" : +u % 12}`;
          y({ type: "SET_HOURS", payload: O });
        } else {
          const O = u.length < 2 ? `0${u}` : u;
          y({ type: "SET_HOURS", payload: O });
        }
        ie(u, z, w, y, "minutes");
      }
    }
  }, i = (x, w) => {
    const { currentTarget: m } = x;
    if (m.value === "") {
      S(M, m.value, v);
      return;
    }
    if (m.value && m.valueAsNumber < 60 && m.valueAsNumber >= 0) {
      const u = m.value.slice(-2);
      if (r)
        S(
          M,
          u.length < 2 ? `0${+u}` : `${+u}`,
          v
        ), (n || s?.includes("ss")) && ie(u, V, w, y, "seconds");
      else {
        const O = u.length < 2 ? `0${u}` : u;
        y({ type: "SET_MINUTES", payload: O }), ie(u, V, w, y, "seconds");
      }
    }
  }, h = (x) => {
    const { currentTarget: w } = x;
    if (w.value === "") {
      S(M, N, w.value);
      return;
    }
    if (w.value && w.valueAsNumber < 60 && w.valueAsNumber >= 0) {
      const m = w.value.slice(-2);
      if (r)
        S(
          M,
          N,
          m.length < 2 ? `0${m}` : m
        );
      else {
        const u = m.length < 2 ? `0${m}` : m;
        y({ type: "SET_SECONDS", payload: u });
      }
    }
  };
  return {
    hoursRef: L,
    minutesRef: z,
    secondsRef: V,
    handleHours: j,
    handleMinutes: i,
    handleSeconds: h,
    inputType: I,
    updateTime: S,
    hours: M,
    minutes: N,
    seconds: v,
    isAm: $,
    state: C,
    dispatch: y,
    handleOnChangeHours: (x, w) => {
      if (c) {
        const { currentTarget: m } = x;
        if (m.value && m.valueAsNumber < 24 && m.valueAsNumber >= 0) {
          let u = m.value;
          return t ? $ ? u = +u > 11 ? "12" : `${+u < 1 ? "1" : +u}` : u = +u > 11 ? "12" : `${+u < 1 ? "1" : +u % 12}` : u = u.length < 2 ? `0${+u}` : `${+u}`, s && s.includes("hh") && (u = +u > 11 ? "12" : `${+u < 1 ? "1" : +u % 12}`), j(x, w), c(u);
        }
        return j(x, w), c(m.value);
      } else
        return j(x, w);
    },
    handleOnChangeMinutes: (x, w) => {
      const { currentTarget: m } = x;
      if (d) {
        if (m.value && m.valueAsNumber < 60 && m.valueAsNumber >= 0) {
          const u = m.value, O = u.length < 2 ? `0${+u}` : `${+u}`;
          return i(x, w), d(O);
        }
      } else
        return i(x, w);
    },
    handleOnChangeSeconds: (x) => {
      const { currentTarget: w } = x;
      if (b && w.value && w.valueAsNumber < 60 && w.valueAsNumber >= 0) {
        const m = w.value.slice(-2), u = m.length < 2 ? `0${m}` : m;
        return h(x), b(u);
      }
    }
  };
}, Qe = ({ className: e }) => /* @__PURE__ */ P.jsx("span", { className: e, children: ":" }), an = (e, r) => {
  if (e === "minutes") {
    const {
      inputClassName: V,
      minutesPlaceholder: F,
      minutesAriaLabel: D,
      minutesInputTitle: S,
      readOnlyMinutes: j,
      disabledMinutes: i,
      stepMinutes: h,
      hour12: H,
      name: U,
      required: B,
      id: x,
      ref: w,
      value: m,
      readOnly: u
    } = r;
    return {
      id: x,
      ref: w,
      step: ce(h, !1, H),
      min: 0,
      max: 59,
      readOnly: j || u,
      placeholder: F,
      value: m,
      className: G(i ? R.ti__disabled : "", V),
      pattern: "^([0-5]?[0-9])$",
      required: B,
      title: S,
      ariaLabel: D,
      name: `minutes-${U}`,
      disabled: i
    };
  }
  if (e === "seconds") {
    const {
      inputClassName: V,
      secondsPlaceholder: F,
      secondsAriaLabel: D,
      secondsInputTitle: S,
      readOnlySeconds: j,
      disabledSeconds: i,
      stepSeconds: h,
      hour12: H,
      name: U,
      required: B,
      id: x,
      ref: w,
      value: m,
      readOnly: u
    } = r;
    return {
      id: x,
      ref: w,
      step: ce(h, !1, H),
      min: 0,
      max: 59,
      readOnly: j || u,
      placeholder: F,
      value: m,
      className: G(i ? R.ti__disabled : "", V),
      pattern: "^([0-5]?[0-9])$",
      required: B,
      title: S,
      ariaLabel: D,
      name: `seconds-${U}`,
      disabled: i
    };
  }
  const {
    inputClassName: n,
    hoursPlaceholder: t,
    hoursAriaLabel: a,
    hoursInputTitle: o,
    readOnlyHours: s,
    disabledHours: c,
    stepHours: d,
    hour12: b,
    name: C,
    required: y,
    id: $,
    ref: I,
    value: M,
    readOnly: N,
    format: v
  } = r, L = b && v?.includes("hh") ? 12 : 23, z = b && v?.includes("hh") ? 1 : 0;
  return {
    id: $,
    ref: I,
    step: ce(d, !1, b),
    min: z,
    max: L,
    readOnly: s || N,
    placeholder: t,
    value: M,
    className: G(c ? R.ti__disabled : "", n),
    pattern: "^([0-9]{1,2})$",
    required: y,
    title: o,
    ariaLabel: a,
    name: `hours-${C}`,
    disabled: c
  };
}, Me = (e) => {
  const [r, n] = Ot(""), {
    type: t,
    disabled: a,
    onChange: o,
    ref: s,
    setZeroOnBlur: c,
    updateTime: d,
    hour12: b,
    dispatch: C,
    hasSeconds: y,
    hours: $,
    minutes: I,
    seconds: M,
    format: N
  } = e, {
    id: v,
    step: L,
    min: z,
    max: V,
    readOnly: F,
    placeholder: D,
    value: S,
    className: j,
    pattern: i,
    required: h,
    ...H
  } = an(t, e);
  return /* @__PURE__ */ P.jsx(
    "input",
    {
      type: "number",
      id: v,
      autoComplete: "off",
      step: L,
      min: z,
      max: V,
      readOnly: F,
      placeholder: D,
      value: S,
      className: j,
      pattern: i,
      required: h,
      inputMode: "numeric",
      onChange: (U) => {
        o(U, r);
      },
      onBlur: () => {
        c && Lt({ hours: $, minutes: I, seconds: M }, t, d, b);
      },
      onKeyDown: (U) => {
        U.key === "ArrowDown" || U.key === "ArrowUp" ? n(U.key) : n(""), Vt(
          U,
          t,
          C,
          d,
          { hours: $, minutes: I, seconds: M },
          y,
          N
        );
      },
      onClick: (U) => {
        U.preventDefault(), fe(s), C({ type: "INPUT_TYPE", payload: t });
      },
      tabIndex: 0,
      disabled: a || H.disabled,
      ref: s,
      "aria-label": H.ariaLabel,
      name: H.name,
      title: H.title
    }
  );
}, cn = ({
  id: e,
  value: r,
  dataTestId: n,
  hoursPlaceholder: t = "--",
  minutesPlaceholder: a = "--",
  secondsPlaceholder: o = "--",
  name: s = "time",
  disabled: c,
  required: d,
  onChange: b,
  onChangedHours: C,
  hoursValue: y,
  onChangedMinutes: $,
  minutesValue: I,
  onChangedSeconds: M,
  secondsValue: N,
  className: v,
  inputsContainerClassName: L,
  colonClassName: z,
  iconClockClassName: V,
  amPmButtonClassName: F,
  controlsClassName: D,
  inputClassName: S,
  dividerClassName: j,
  ariaLabel: i = "time",
  iconAriaLabel: h = "clock",
  hoursAriaLabel: H = "hours",
  minutesAriaLabel: U = "minutes",
  secondsAriaLabel: B = "seconds",
  amPmAriaLabel: x = "am-pm",
  hasSeconds: w = !1,
  hour12: m = !1,
  disableFocusOnIcon: u = !1,
  hideIcon: O = !1,
  disabledHours: g,
  disabledMinutes: q,
  disabledSeconds: Z,
  maxTime: l,
  minTime: _,
  hideControls: T = !1,
  hoursInputTitle: A = "Hours input",
  minutesInputTitle: J = "Minutes input",
  secondsInputTitle: ne = "Seconds input",
  setZeroOnBlur: k = !1,
  format: W,
  stepHours: X = 1,
  stepMinutes: K = 1,
  stepSeconds: de = 1,
  readOnly: Q = !1,
  readOnlyHours: ze = !1,
  readOnlyMinutes: De = !1,
  readOnlySeconds: Le = !1,
  hoursId: gt,
  minutesId: wt,
  secondsId: yt
}) => {
  const {
    hoursRef: Ee,
    minutesRef: Ve,
    secondsRef: Fe,
    inputType: _t,
    updateTime: xe,
    // handleHours,
    // handleMinutes,
    // handleSeconds,
    hours: ee,
    minutes: te,
    seconds: ue,
    isAm: xt,
    state: kt,
    dispatch: oe,
    handleOnChangeHours: vt,
    handleOnChangeMinutes: Tt,
    handleOnChangeSeconds: Ct
  } = sn({
    value: r,
    onChange: b,
    hasSeconds: w,
    hour12: m,
    maxTime: l,
    minTime: _,
    format: W,
    onChangedMinutes: $,
    onChangedHours: C,
    onChangedSeconds: M
  }), Et = G(
    R.ti__timerContainer,
    R.ti__hourContainer,
    t === "--" ? R.hyphen : R.hh,
    ee === "" ? R.noValue : "",
    m && +ee < 10 ? R.noZero : ""
  ), St = G(
    R.ti__timerContainer,
    R.ti__minutesContainer,
    w ? R.withSeconds : "",
    a === "--" ? R.hyphen : R.mm,
    te === "" ? R.noValue : "",
    +te > 9 ? R.noZero : ""
  ), $t = G(
    R.ti__timerContainer,
    R.ti__secondsContainer
  ), Ge = W?.includes("ss") || w, At = W?.includes("hh"), Nt = G(
    R.ti__disabled,
    c || g || q ? R.ti__disabled : ""
  ), Rt = G(
    R.ti__disabled,
    c || q || Z ? R.ti__disabled : ""
  );
  return /* @__PURE__ */ P.jsx(
    nn,
    {
      props: {
        hours: ee,
        minutes: te,
        seconds: ue,
        isAm: xt,
        inputType: _t,
        disabled: c,
        controlsClassName: D,
        hour12: m,
        amPmAriaLabel: x,
        updateTime: xe,
        format: At ? "hh" : "HH",
        disabledHours: g,
        disabledMinutes: q,
        disabledSeconds: Z,
        state: kt,
        dispatch: oe,
        stepHours: X,
        stepMinutes: K,
        stepSeconds: de,
        readOnly: Q,
        readOnlyHours: ze,
        readOnlyMinutes: De,
        readOnlySeconds: Le
      },
      children: /* @__PURE__ */ P.jsxs(
        "div",
        {
          className: G(
            `${R.ti__mainContainer} ${c ? R.ti__disabled : ""}`,
            v
          ),
          "data-testid": n,
          role: "textbox",
          tabIndex: 0,
          id: e,
          children: [
            !O && /* @__PURE__ */ P.jsx(
              "div",
              {
                className: G(R.ti__iconContainer, V),
                role: "button",
                onClick: () => {
                  oe({ type: "INPUT_TYPE", payload: "hours" }), !u && fe(Ee);
                },
                "aria-label": h,
                children: /* @__PURE__ */ P.jsx(Qr, {})
              }
            ),
            /* @__PURE__ */ P.jsxs(
              "div",
              {
                className: G(R.ti__inputsContainer, L),
                children: [
                  /* @__PURE__ */ P.jsxs(
                    "div",
                    {
                      className: G(Et),
                      onClick: (he) => {
                        he.preventDefault(), oe({ type: "INPUT_TYPE", payload: "hours" }), fe(Ee);
                      },
                      children: [
                        /* @__PURE__ */ P.jsx(
                          "input",
                          {
                            type: "hidden",
                            name: s,
                            "aria-label": i,
                            value: Ge ? `${ee}:${te}:${ue}` : `${ee}:${te}`
                          }
                        ),
                        /* @__PURE__ */ P.jsx(
                          Me,
                          {
                            type: "hours",
                            value: ee,
                            readOnly: Q,
                            readOnlyHours: ze,
                            setZeroOnBlur: k,
                            stepHours: ce(X, !0, m),
                            hour12: m,
                            name: `hours-${s}`,
                            hoursAriaLabel: H,
                            hoursPlaceholder: t,
                            inputClassName: S || "",
                            disabledHours: g,
                            disabled: c,
                            required: d,
                            format: W,
                            hoursInputTitle: A,
                            className: G(
                              g ? R.ti__disabled : "",
                              S
                            ),
                            updateTime: xe,
                            dispatch: oe,
                            onChange: vt,
                            ref: Ee,
                            hasSeconds: w,
                            id: gt,
                            hours: ee,
                            minutes: te,
                            seconds: ue
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ P.jsx(
                    Qe,
                    {
                      className: G(
                        j,
                        Nt,
                        z
                      )
                    }
                  ),
                  /* @__PURE__ */ P.jsx(
                    "div",
                    {
                      className: G(St),
                      onClick: (he) => {
                        he.preventDefault(), oe({ type: "INPUT_TYPE", payload: "minutes" }), fe(Ve);
                      },
                      children: /* @__PURE__ */ P.jsx(
                        Me,
                        {
                          type: "minutes",
                          value: te,
                          setZeroOnBlur: k,
                          stepMinutes: K,
                          hour12: m,
                          name: `minutes-${s}`,
                          minutesAriaLabel: U,
                          minutesPlaceholder: a,
                          readOnly: Q || De,
                          inputClassName: S || "",
                          disabledMinutes: q,
                          disabled: c,
                          required: d,
                          format: W,
                          minutesInputTitle: J,
                          className: G(
                            q ? R.ti__disabled : "",
                            S
                          ),
                          updateTime: xe,
                          dispatch: oe,
                          onChange: Tt,
                          ref: Ve,
                          hasSeconds: w,
                          id: wt,
                          hours: ee,
                          minutes: te,
                          seconds: ue
                        }
                      )
                    }
                  ),
                  Ge ? /* @__PURE__ */ P.jsxs(P.Fragment, { children: [
                    /* @__PURE__ */ P.jsx(
                      Qe,
                      {
                        className: G(
                          j,
                          Rt,
                          z
                        )
                      }
                    ),
                    /* @__PURE__ */ P.jsx(
                      "div",
                      {
                        className: G($t),
                        onClick: (he) => {
                          he.preventDefault(), oe({ type: "INPUT_TYPE", payload: "seconds" }), fe(Fe);
                        },
                        children: /* @__PURE__ */ P.jsx(
                          Me,
                          {
                            type: "seconds",
                            value: ue,
                            setZeroOnBlur: k,
                            stepSeconds: de,
                            hour12: m,
                            name: `seconds-${s}`,
                            ref: Fe,
                            onChange: Ct,
                            secondsAriaLabel: B,
                            secondsPlaceholder: o,
                            readOnly: Q || Le,
                            inputClassName: S || "",
                            disabledSeconds: Z,
                            disabled: c,
                            required: d,
                            format: W,
                            secondsInputTitle: ne,
                            id: yt,
                            seconds: ue,
                            minutes: te,
                            hours: ee,
                            dispatch: oe,
                            updateTime: xe,
                            className: G(
                              Z ? R.ti__disabled : "",
                              S
                            ),
                            hasSeconds: w
                          }
                        )
                      }
                    )
                  ] }) : null,
                  m && /* @__PURE__ */ P.jsx(
                    "div",
                    {
                      className: G(
                        R.ti__toggleAmPmContainer,
                        F
                      ),
                      title: "AM/PM button",
                      children: /* @__PURE__ */ P.jsx(rn, {})
                    }
                  )
                ]
              }
            ),
            T ? null : /* @__PURE__ */ P.jsx(Kr, {})
          ]
        }
      )
    }
  );
};
export {
  cn as TimeInput
};
