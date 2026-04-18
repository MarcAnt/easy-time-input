import * as ne from "react";
import Et, { useContext as Ze, createContext as Ke, useReducer as St, useRef as Se, useEffect as Ae, useCallback as At, useState as $t } from "react";
var ke = { exports: {} }, ge = {};
var Fe;
function Rt() {
  if (Fe) return ge;
  Fe = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(t, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var d in i)
        d !== "key" && (s[d] = i[d]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: t,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return ge.Fragment = r, ge.jsx = n, ge.jsxs = n, ge;
}
var we = {};
var Ge;
function Nt() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(l) {
      if (l == null) return null;
      if (typeof l == "function")
        return l.$$typeof === A ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case k:
          return "Fragment";
        case O:
          return "Profiler";
        case I:
          return "StrictMode";
        case z:
          return "Suspense";
        case x:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof l == "object")
        switch (typeof l.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), l.$$typeof) {
          case $:
            return "Portal";
          case j:
            return l.displayName || "Context";
          case P:
            return (l._context.displayName || "Context") + ".Consumer";
          case L:
            var g = l.render;
            return l = l.displayName, l || (l = g.displayName || g.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
          case o:
            return g = l.displayName || null, g !== null ? g : e(l.type) || "Memo";
          case u:
            g = l._payload, l = l._init;
            try {
              return e(l(g));
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
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var w = g.error, S = typeof Symbol == "function" && Symbol.toStringTag && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return w.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), r(l);
      }
    }
    function t(l) {
      if (l === k) return "<>";
      if (typeof l == "object" && l !== null && l.$$typeof === u)
        return "<...>";
      try {
        var g = e(l);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var l = G.A;
      return l === null ? null : l.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(l) {
      if (Y.call(l, "key")) {
        var g = Object.getOwnPropertyDescriptor(l, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return l.key !== void 0;
    }
    function d(l, g) {
      function w() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(l, "key", {
        get: w,
        configurable: !0
      });
    }
    function c() {
      var l = e(this.type);
      return W[l] || (W[l] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), l = this.props.ref, l !== void 0 ? l : null;
    }
    function p(l, g, w, S, B, J) {
      var y = w.ref;
      return l = {
        $$typeof: M,
        type: l,
        key: g,
        props: w,
        _owner: S
      }, (y !== void 0 ? y : null) !== null ? Object.defineProperty(l, "ref", {
        enumerable: !1,
        get: c
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
        value: B
      }), Object.defineProperty(l, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    }
    function T(l, g, w, S, B, J) {
      var y = g.children;
      if (y !== void 0)
        if (S)
          if (H(y)) {
            for (S = 0; S < y.length; S++)
              E(y[S]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(y);
      if (Y.call(g, "key")) {
        y = e(l);
        var q = Object.keys(g).filter(function(ee) {
          return ee !== "key";
        });
        S = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", se[y + S] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          y,
          q,
          y
        ), se[y + S] = !0);
      }
      if (y = null, w !== void 0 && (n(w), y = "" + w), a(g) && (n(g.key), y = "" + g.key), "key" in g) {
        w = {};
        for (var X in g)
          X !== "key" && (w[X] = g[X]);
      } else w = g;
      return y && d(
        w,
        typeof l == "function" ? l.displayName || l.name || "Unknown" : l
      ), p(
        l,
        y,
        w,
        i(),
        B,
        J
      );
    }
    function E(l) {
      _(l) ? l._store && (l._store.validated = 1) : typeof l == "object" && l !== null && l.$$typeof === u && (l._payload.status === "fulfilled" ? _(l._payload.value) && l._payload.value._store && (l._payload.value._store.validated = 1) : l._store && (l._store.validated = 1));
    }
    function _(l) {
      return typeof l == "object" && l !== null && l.$$typeof === M;
    }
    var C = Et, M = /* @__PURE__ */ Symbol.for("react.transitional.element"), $ = /* @__PURE__ */ Symbol.for("react.portal"), k = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), P = /* @__PURE__ */ Symbol.for("react.consumer"), j = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), z = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.suspense_list"), o = /* @__PURE__ */ Symbol.for("react.memo"), u = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), A = /* @__PURE__ */ Symbol.for("react.client.reference"), G = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, H = Array.isArray, V = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      react_stack_bottom_frame: function(l) {
        return l();
      }
    };
    var U, W = {}, h = C.react_stack_bottom_frame.bind(
      C,
      s
    )(), oe = V(t(s)), se = {};
    we.Fragment = k, we.jsx = function(l, g, w) {
      var S = 1e4 > G.recentlyCreatedOwnerStacks++;
      return T(
        l,
        g,
        w,
        !1,
        S ? Error("react-stack-top-frame") : h,
        S ? V(t(l)) : oe
      );
    }, we.jsxs = function(l, g, w) {
      var S = 1e4 > G.recentlyCreatedOwnerStacks++;
      return T(
        l,
        g,
        w,
        !0,
        S ? Error("react-stack-top-frame") : h,
        S ? V(t(l)) : oe
      );
    };
  })()), we;
}
var Ue;
function Pt() {
  return Ue || (Ue = 1, process.env.NODE_ENV === "production" ? ke.exports = Rt() : ke.exports = Nt()), ke.exports;
}
var N = Pt();
const It = (e, r, n, t, i) => {
  const { hours: s, minutes: a, seconds: d } = e;
  if (r === "hours" && s.length < 2) {
    if (t) {
      n(
        +s > 12 ? "12" : `${+s + 12}`,
        a,
        d
      );
      return;
    }
    n(`0${s}`, a, d);
    return;
  }
  if (r === "minutes") {
    if (a === "") {
      n(s, a, d);
      return;
    }
    if (a.length < 2) {
      n(s, `0${a}`, d);
      return;
    }
  }
  if (r === "seconds") {
    if (d === "") {
      n(s, a, "00");
      return;
    }
    if (d.length < 2) {
      n(s, a, `0${d}`);
      return;
    }
  }
}, Mt = (e, r, n, t, i, s, a) => {
  const { hours: d, minutes: c, seconds: p } = i;
  if (r === "hours") {
    if (e.key === "Tab") {
      if (n({ type: "INPUT_TYPE", payload: "minutes" }), d === "") {
        t("00", c, p);
        return;
      }
      if (d.length < 2) {
        t(`0${d}`, c, p);
        return;
      }
    }
    if (e.key === "Backspace") {
      t("", c, p);
      return;
    }
  }
  if (r === "minutes") {
    if (e.key === "Tab" && (s || a?.includes("ss"))) {
      if (c === "") {
        n({ type: "INPUT_TYPE", payload: "seconds" }), t(d, "00", p);
        return;
      }
      if (c.length < 2) {
        n({ type: "INPUT_TYPE", payload: "seconds" }), t(d, `0${c}`, p);
        return;
      }
      n({ type: "INPUT_TYPE", payload: "seconds" });
    }
    if (e.key === "Backspace") {
      t(d, "", p);
      return;
    }
  }
  if (r === "seconds") {
    if (e.key === "Tab") {
      if (p === "") {
        t(d, c, "00");
        return;
      }
      if (p.length < 2) {
        t(d, c, `0${p}`);
        return;
      }
      n({ type: "INPUT_TYPE", payload: "seconds" });
    }
    if (e.key === "Backspace") {
      t(d, c, "");
      return;
    }
  }
  return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
}, me = (e) => {
  e.current?.select(), e.current?.focus();
}, _e = (e, r, n, t) => {
  let i, s, a = !0;
  if (r && r instanceof Date ? i = new Date(r).toLocaleTimeString("en", {
    hour12: !1
  }) : i = r, n && n instanceof Date ? s = new Date(n).toLocaleTimeString("en", {
    hour12: !1
  }) : s = n, i) {
    const d = i.split(":");
    let c = e.split(":");
    c.length === 1 && (c = [c[0], "00"]), d[2] === void 0 && d.push("00");
    const p = new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(d[0]),
      parseInt(d[1]),
      t ? parseInt(d[2]) : 0
    );
    new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(c[0]),
      parseInt(c[1]),
      t ? parseInt(c[2]) : 0
    ).getTime() > p.getTime() && (a = !1);
  }
  if (s) {
    const d = s.split(":");
    let c = e.split(":");
    c.length === 1 && (c = [c[0], "00"]), d[2] === void 0 && d.push("00");
    const p = new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(d[0]),
      parseInt(d[1]),
      t ? parseInt(d[2]) : 0
    );
    new Date(
      (/* @__PURE__ */ new Date()).getFullYear(),
      (/* @__PURE__ */ new Date()).getMonth(),
      (/* @__PURE__ */ new Date()).getDate(),
      parseInt(c[0]),
      parseInt(c[1]),
      t ? parseInt(c[2]) : 0
    ).getTime() < p.getTime() && (a = !1);
  }
  return a;
}, le = (e, r, n) => {
  if (!e || e < 0) return 1;
  if (r) {
    if (e > 23 || n && e > 11) return 1;
  } else if (e > 59) return 1;
  return e ? Math.abs(Math.trunc(e)) : 1;
}, ae = (e, r, n, t, i) => {
  if (n === "ArrowDown" || n === "ArrowUp") {
    r.current?.blur();
    return;
  }
  e.length === 2 && (me(r), i && t && t({ type: "INPUT_TYPE", payload: i }));
}, Ot = (e) => /* @__PURE__ */ ne.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-up", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ ne.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ ne.createElement("path", { d: "M6 15l6 -6l6 6" })), jt = (e) => /* @__PURE__ */ ne.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-chevron-down", width: 24, height: 24, viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", ...e }, /* @__PURE__ */ ne.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), /* @__PURE__ */ ne.createElement("path", { d: "M6 9l6 6l6 -6" })), zt = "_ti__mainContainer_1wbo4_3", Dt = "_ti__inputsContainer_1wbo4_55", Lt = "_ti__disabled_1wbo4_105", Ft = "_ti__hourContainer_1wbo4_147", Gt = "_hh_1wbo4_147", Ut = "_noValue_1wbo4_147", Vt = "_hyphen_1wbo4_155", Yt = "_noZero_1wbo4_163", Ht = "_ti__minutesContainer_1wbo4_171", Wt = "_mm_1wbo4_171", Bt = "_withSeconds_1wbo4_195", qt = "_ti__secondsContainer_1wbo4_211", Jt = "_ti__timerContainer_1wbo4_249", Xt = "_ti__iconContainer_1wbo4_269", Zt = "_ti__arrowsContainer_1wbo4_293", Kt = "_ti__toggleAmPmContainer_1wbo4_329", R = {
  ti__mainContainer: zt,
  ti__inputsContainer: Dt,
  ti__disabled: Lt,
  ti__hourContainer: Ft,
  hh: Gt,
  noValue: Ut,
  hyphen: Vt,
  noZero: Yt,
  ti__minutesContainer: Ht,
  mm: Wt,
  withSeconds: Bt,
  ti__secondsContainer: qt,
  ti__timerContainer: Jt,
  ti__iconContainer: Xt,
  ti__arrowsContainer: Zt,
  ti__toggleAmPmContainer: Kt
}, Qt = (e) => {
  const {
    inputType: r,
    updateTime: n,
    hours: t,
    minutes: i,
    seconds: s,
    hour12: a,
    isAm: d,
    maxTime: c,
    minTime: p,
    format: T,
    stepHours: E,
    stepMinutes: _,
    stepSeconds: C,
    readOnly: M,
    readOnlyHours: $,
    readOnlyMinutes: k,
    readOnlySeconds: I
  } = e;
  let O = le(E, !0, a), P = le(_, !1, a), j = le(C, !1, a);
  return { handleAddTime: (x) => {
    if (x.preventDefault(), !M) {
      if (r === "hours") {
        if ($ || (c || p) && !_e(
          `${+t + 1}`,
          c,
          p
        ))
          return;
        const o = E ? +t + O : +t + 1;
        let u;
        a ? d ? u = `${o > 11 ? "12" : o}` : u = `${o > 11 ? "12" : o % 12}` : T && T.includes("hh") ? u = `${o > 11 ? "12" : +o % 12}` : o < 0 ? u = "00" : o < 10 ? u = `0${o}` : o < 24 ? u = `${o}` : E ? u = `${o - E}` : u = "23", n(u, i, s);
      }
      if (r === "minutes") {
        if (k) return;
        const o = _ ? +i + P : +i + 1;
        let u;
        o < 10 ? u = `0${o}` : o < 60 ? u = `${o}` : _ ? u = `${o - _}` : u = "59", n(t, u, s);
      }
      if (r === "seconds") {
        if (I) return;
        const o = C ? +s + j : +s + 1;
        let u;
        o < 10 ? u = `0${o}` : o < 60 ? u = `${o}` : C ? u = `${o - C}` : u = "59", n(t, i, u);
      }
    }
  }, handleRemoveTime: (x) => {
    if (x.preventDefault(), !M) {
      if (r === "hours") {
        if ($ || (c || p) && !_e(
          `${+t - 1}`,
          c,
          p
        ))
          return;
        const o = E ? +t - E : +t - 1;
        let u;
        a ? d ? u = `${o < 1 ? "1" : o}` : u = `${o < 1 ? "1" : o % 12}` : T && T.includes("hh") ? u = `${o < 1 ? "1" : o}` : u = `${o < 0 ? "00" : o < 10 ? `0${o}` : o}`, n(u, i, s);
      }
      if (r === "minutes") {
        if (k) return;
        const o = _ ? +i - _ : +i - 1, u = `${o < 0 ? "00" : o < 10 ? `0${o}` : o}`;
        n(t, u, s);
      }
      if (r === "seconds") {
        if (I) return;
        const o = C ? +s - C : +s - 1, u = `${o < 0 ? "00" : o < 10 ? `0${o}` : o}`;
        n(t, i, u);
      }
    }
  } };
}, Qe = Ke(null), er = ({
  children: e,
  props: r
}) => {
  const { handleAddTime: n, handleRemoveTime: t } = Qt(r), { controlsClassName: i, disabled: s, inputType: a } = r;
  return /* @__PURE__ */ N.jsx(
    Qe,
    {
      value: {
        controlsClassName: i,
        disabled: s,
        handleAddTime: n,
        handleRemoveTime: t,
        inputType: a
      },
      children: e
    }
  );
}, tr = () => {
  const e = Ze(Qe);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
};
function et(e) {
  var r, n, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (r = 0; r < i; r++) e[r] && (n = et(e[r])) && (t && (t += " "), t += n);
  } else for (n in e) e[n] && (t && (t += " "), t += n);
  return t;
}
function rr() {
  for (var e, r, n = 0, t = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (r = et(e)) && (t && (t += " "), t += r);
  return t;
}
const nr = (e, r) => {
  const n = new Array(e.length + r.length);
  for (let t = 0; t < e.length; t++)
    n[t] = e[t];
  for (let t = 0; t < r.length; t++)
    n[e.length + t] = r[t];
  return n;
}, or = (e, r) => ({
  classGroupId: e,
  validator: r
}), tt = (e = /* @__PURE__ */ new Map(), r = null, n) => ({
  nextPart: e,
  validators: r,
  classGroupId: n
}), Ce = "-", Ve = [], sr = "arbitrary..", ar = (e) => {
  const r = lr(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return ir(a);
      const d = a.split(Ce), c = d[0] === "" && d.length > 1 ? 1 : 0;
      return rt(d, c, r);
    },
    getConflictingClassGroupIds: (a, d) => {
      if (d) {
        const c = t[a], p = n[a];
        return c ? p ? nr(p, c) : c : p || Ve;
      }
      return n[a] || Ve;
    }
  };
}, rt = (e, r, n) => {
  if (e.length - r === 0)
    return n.classGroupId;
  const i = e[r], s = n.nextPart.get(i);
  if (s) {
    const p = rt(e, r + 1, s);
    if (p) return p;
  }
  const a = n.validators;
  if (a === null)
    return;
  const d = r === 0 ? e.join(Ce) : e.slice(r).join(Ce), c = a.length;
  for (let p = 0; p < c; p++) {
    const T = a[p];
    if (T.validator(d))
      return T.classGroupId;
  }
}, ir = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = e.slice(1, -1), n = r.indexOf(":"), t = r.slice(0, n);
  return t ? sr + t : void 0;
})(), lr = (e) => {
  const {
    theme: r,
    classGroups: n
  } = e;
  return cr(n, r);
}, cr = (e, r) => {
  const n = tt();
  for (const t in e) {
    const i = e[t];
    je(i, n, t, r);
  }
  return n;
}, je = (e, r, n, t) => {
  const i = e.length;
  for (let s = 0; s < i; s++) {
    const a = e[s];
    dr(a, r, n, t);
  }
}, dr = (e, r, n, t) => {
  if (typeof e == "string") {
    ur(e, r, n);
    return;
  }
  if (typeof e == "function") {
    mr(e, r, n, t);
    return;
  }
  fr(e, r, n, t);
}, ur = (e, r, n) => {
  const t = e === "" ? r : nt(r, e);
  t.classGroupId = n;
}, mr = (e, r, n, t) => {
  if (pr(e)) {
    je(e(t), r, n, t);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(or(n, e));
}, fr = (e, r, n, t) => {
  const i = Object.entries(e), s = i.length;
  for (let a = 0; a < s; a++) {
    const [d, c] = i[a];
    je(c, nt(r, d), n, t);
  }
}, nt = (e, r) => {
  let n = e;
  const t = r.split(Ce), i = t.length;
  for (let s = 0; s < i; s++) {
    const a = t[s];
    let d = n.nextPart.get(a);
    d || (d = tt(), n.nextPart.set(a, d)), n = d;
  }
  return n;
}, pr = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, br = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, n = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  const i = (s, a) => {
    n[s] = a, r++, r > e && (r = 0, t = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let a = n[s];
      if (a !== void 0)
        return a;
      if ((a = t[s]) !== void 0)
        return i(s, a), a;
    },
    set(s, a) {
      s in n ? n[s] = a : i(s, a);
    }
  };
}, Oe = "!", Ye = ":", hr = [], He = (e, r, n, t, i) => ({
  modifiers: e,
  hasImportantModifier: r,
  baseClassName: n,
  maybePostfixModifierPosition: t,
  isExternal: i
}), gr = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: n
  } = e;
  let t = (i) => {
    const s = [];
    let a = 0, d = 0, c = 0, p;
    const T = i.length;
    for (let $ = 0; $ < T; $++) {
      const k = i[$];
      if (a === 0 && d === 0) {
        if (k === Ye) {
          s.push(i.slice(c, $)), c = $ + 1;
          continue;
        }
        if (k === "/") {
          p = $;
          continue;
        }
      }
      k === "[" ? a++ : k === "]" ? a-- : k === "(" ? d++ : k === ")" && d--;
    }
    const E = s.length === 0 ? i : i.slice(c);
    let _ = E, C = !1;
    E.endsWith(Oe) ? (_ = E.slice(0, -1), C = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      E.startsWith(Oe) && (_ = E.slice(1), C = !0)
    );
    const M = p && p > c ? p - c : void 0;
    return He(s, C, _, M);
  };
  if (r) {
    const i = r + Ye, s = t;
    t = (a) => a.startsWith(i) ? s(a.slice(i.length)) : He(hr, !1, a, void 0, !0);
  }
  if (n) {
    const i = t;
    t = (s) => n({
      className: s,
      parseClassName: i
    });
  }
  return t;
}, wr = (e) => {
  const r = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, t) => {
    r.set(n, 1e6 + t);
  }), (n) => {
    const t = [];
    let i = [];
    for (let s = 0; s < n.length; s++) {
      const a = n[s], d = a[0] === "[", c = r.has(a);
      d || c ? (i.length > 0 && (i.sort(), t.push(...i), i = []), t.push(a)) : i.push(a);
    }
    return i.length > 0 && (i.sort(), t.push(...i)), t;
  };
}, yr = (e) => ({
  cache: br(e.cacheSize),
  parseClassName: gr(e),
  sortModifiers: wr(e),
  ...ar(e)
}), _r = /\s+/, xr = (e, r) => {
  const {
    parseClassName: n,
    getClassGroupId: t,
    getConflictingClassGroupIds: i,
    sortModifiers: s
  } = r, a = [], d = e.trim().split(_r);
  let c = "";
  for (let p = d.length - 1; p >= 0; p -= 1) {
    const T = d[p], {
      isExternal: E,
      modifiers: _,
      hasImportantModifier: C,
      baseClassName: M,
      maybePostfixModifierPosition: $
    } = n(T);
    if (E) {
      c = T + (c.length > 0 ? " " + c : c);
      continue;
    }
    let k = !!$, I = t(k ? M.substring(0, $) : M);
    if (!I) {
      if (!k) {
        c = T + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (I = t(M), !I) {
        c = T + (c.length > 0 ? " " + c : c);
        continue;
      }
      k = !1;
    }
    const O = _.length === 0 ? "" : _.length === 1 ? _[0] : s(_).join(":"), P = C ? O + Oe : O, j = P + I;
    if (a.indexOf(j) > -1)
      continue;
    a.push(j);
    const L = i(I, k);
    for (let z = 0; z < L.length; ++z) {
      const x = L[z];
      a.push(P + x);
    }
    c = T + (c.length > 0 ? " " + c : c);
  }
  return c;
}, kr = (...e) => {
  let r = 0, n, t, i = "";
  for (; r < e.length; )
    (n = e[r++]) && (t = ot(n)) && (i && (i += " "), i += t);
  return i;
}, ot = (e) => {
  if (typeof e == "string")
    return e;
  let r, n = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (r = ot(e[t])) && (n && (n += " "), n += r);
  return n;
}, vr = (e, ...r) => {
  let n, t, i, s;
  const a = (c) => {
    const p = r.reduce((T, E) => E(T), e());
    return n = yr(p), t = n.cache.get, i = n.cache.set, s = d, d(c);
  }, d = (c) => {
    const p = t(c);
    if (p)
      return p;
    const T = xr(c, n);
    return i(c, T), T;
  };
  return s = a, (...c) => s(kr(...c));
}, Tr = [], F = (e) => {
  const r = (n) => n[e] || Tr;
  return r.isThemeGetter = !0, r;
}, st = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, at = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Cr = /^\d+\/\d+$/, Er = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Sr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ar = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, $r = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Rr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ue = (e) => Cr.test(e), v = (e) => !!e && !Number.isNaN(Number(e)), re = (e) => !!e && Number.isInteger(Number(e)), $e = (e) => e.endsWith("%") && v(e.slice(0, -1)), Q = (e) => Er.test(e), Nr = () => !0, Pr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Sr.test(e) && !Ar.test(e)
), it = () => !1, Ir = (e) => $r.test(e), Mr = (e) => Rr.test(e), Or = (e) => !m(e) && !f(e), jr = (e) => fe(e, dt, it), m = (e) => st.test(e), ie = (e) => fe(e, ut, Pr), Re = (e) => fe(e, Gr, v), We = (e) => fe(e, lt, it), zr = (e) => fe(e, ct, Mr), ve = (e) => fe(e, mt, Ir), f = (e) => at.test(e), ye = (e) => pe(e, ut), Dr = (e) => pe(e, Ur), Be = (e) => pe(e, lt), Lr = (e) => pe(e, dt), Fr = (e) => pe(e, ct), Te = (e) => pe(e, mt, !0), fe = (e, r, n) => {
  const t = st.exec(e);
  return t ? t[1] ? r(t[1]) : n(t[2]) : !1;
}, pe = (e, r, n = !1) => {
  const t = at.exec(e);
  return t ? t[1] ? r(t[1]) : n : !1;
}, lt = (e) => e === "position" || e === "percentage", ct = (e) => e === "image" || e === "url", dt = (e) => e === "length" || e === "size" || e === "bg-size", ut = (e) => e === "length", Gr = (e) => e === "number", Ur = (e) => e === "family-name", mt = (e) => e === "shadow", Vr = () => {
  const e = F("color"), r = F("font"), n = F("text"), t = F("font-weight"), i = F("tracking"), s = F("leading"), a = F("breakpoint"), d = F("container"), c = F("spacing"), p = F("radius"), T = F("shadow"), E = F("inset-shadow"), _ = F("text-shadow"), C = F("drop-shadow"), M = F("blur"), $ = F("perspective"), k = F("aspect"), I = F("ease"), O = F("animate"), P = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [
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
  ], L = () => [...j(), f, m], z = () => ["auto", "hidden", "clip", "visible", "scroll"], x = () => ["auto", "contain", "none"], o = () => [f, m, c], u = () => [ue, "full", "auto", ...o()], b = () => [re, "none", "subgrid", f, m], A = () => ["auto", {
    span: ["full", re, f, m]
  }, re, f, m], G = () => [re, "auto", f, m], Y = () => ["auto", "min", "max", "fr", f, m], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], V = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], U = () => ["auto", ...o()], W = () => [ue, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...o()], h = () => [e, f, m], oe = () => [...j(), Be, We, {
    position: [f, m]
  }], se = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], l = () => ["auto", "cover", "contain", Lr, jr, {
    size: [f, m]
  }], g = () => [$e, ye, ie], w = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    f,
    m
  ], S = () => ["", v, ye, ie], B = () => ["solid", "dashed", "dotted", "double"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], y = () => [v, $e, Be, We], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    M,
    f,
    m
  ], X = () => ["none", v, f, m], ee = () => ["none", v, f, m], be = () => [v, f, m], ce = () => [ue, "full", ...o()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Q],
      breakpoint: [Q],
      color: [Nr],
      container: [Q],
      "drop-shadow": [Q],
      ease: ["in", "out", "in-out"],
      font: [Or],
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
        aspect: ["auto", "square", ue, m, f, k]
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
        columns: [v, m, f, d]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": P()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": P()
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
        object: L()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: x()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": x()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": x()
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
        inset: u()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": u()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": u()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: u()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: u()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: u()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: u()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: u()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: u()
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
        z: [re, "auto", f, m]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ue, "full", "auto", d, ...o()]
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
        flex: [v, ue, "auto", "initial", "none", m]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", v, f, m]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", v, f, m]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [re, "first", "last", "none", f, m]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": b()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: A()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": b()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: A()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": Y()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Y()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: o()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": o()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": o()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...V(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...V()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...V(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...V(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...V()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: o()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: o()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: o()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: o()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: o()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: o()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: o()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: o()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: o()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: U()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: U()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: U()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: U()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: U()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: U()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: U()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: U()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: U()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": o()
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
        "space-y": o()
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
        size: W()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [d, "screen", ...W()]
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
          ...W()
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
            screen: [a]
          },
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, ye, ie]
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
        font: [t, f, Re]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", $e, m]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Dr, m, r]
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
        tracking: [i, f, m]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [v, "none", f, Re]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...o()
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
        placeholder: h()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: h()
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
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [v, "from-font", "auto", f, ie]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: h()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [v, "auto", f, m]
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
        indent: o()
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
        bg: oe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: se()
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
          }, re, f, m],
          radial: ["", f, m],
          conic: [re, f, m]
        }, Fr, zr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: h()
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
        from: h()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: h()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: h()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: w()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": w()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": w()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": w()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": w()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": w()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": w()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": w()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": w()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": w()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": w()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": w()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": w()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": w()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": w()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: S()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": S()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": S()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": S()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": S()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": S()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": S()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": S()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": S()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": S()
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
        "divide-y": S()
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
        border: [...B(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...B(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: h()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": h()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": h()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": h()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": h()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": h()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": h()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": h()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": h()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: h()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...B(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [v, f, m]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", v, ye, ie]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: h()
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
          T,
          Te,
          ve
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: h()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", E, Te, ve]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": h()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: S()
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
        ring: h()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [v, ie]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": h()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": S()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": h()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", _, Te, ve]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": h()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v, f, m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...J(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
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
        "mask-linear-from": y()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": y()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": h()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": h()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": y()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": y()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": h()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": h()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": y()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": y()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": h()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": h()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": y()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": y()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": h()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": h()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": y()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": y()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": h()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": h()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": y()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": y()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": h()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": h()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": y()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": y()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": h()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": h()
      }],
      "mask-image-radial": [{
        "mask-radial": [f, m]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": y()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": y()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": h()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": h()
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
        "mask-radial-at": j()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [v]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": y()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": y()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": h()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": h()
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
        mask: oe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: se()
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
        blur: q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [v, f, m]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [v, f, m]
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
        "drop-shadow": h()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", v, f, m]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v, f, m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", v, f, m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [v, f, m]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", v, f, m]
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
        "backdrop-blur": q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [v, f, m]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [v, f, m]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", v, f, m]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v, f, m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", v, f, m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v, f, m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [v, f, m]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", v, f, m]
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
        "border-spacing": o()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": o()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": o()
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
        duration: [v, "initial", f, m]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", I, f, m]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [v, f, m]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", O, f, m]
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
        perspective: [$, f, m]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": L()
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
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
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
        skew: be()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": be()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": be()
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
        origin: L()
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
        translate: ce()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ce()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ce()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ce()
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
        accent: h()
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
        caret: h()
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
        "scroll-m": o()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": o()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": o()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": o()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": o()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": o()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": o()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": o()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": o()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": o()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": o()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": o()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": o()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": o()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": o()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": o()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": o()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": o()
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
        fill: ["none", ...h()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [v, ye, ie, Re]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...h()]
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
}, Yr = /* @__PURE__ */ vr(Vr), Hr = (e, r) => {
  const [n, t, i] = e.split(":"), s = +n % 12 === 0 ? 12 : +n % 12;
  switch (r) {
    case "HH:mm:ss":
      return `${n}:${t}:${i}`;
    case "HH:mm":
      return `${n}:${t}`;
    case "hh:mm:ss":
      return `${s}:${t}:${i}`;
    case "hh:mm":
      return `${s}:${t}`;
  }
}, D = (...e) => Yr(rr(e)), Ne = (e, r, n) => {
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
    const i = Hr(e, n);
    let s = t;
    if (i)
      return s = i.split(":")[0], s;
    if (parseInt(s) < 0)
      return Math.abs(parseInt(s)) < 10 ? `0${Math.abs(parseInt(s))}` : `${Math.abs(parseInt(s))}`;
    if (r) {
      let a;
      return a = `${+s % 12 === 0 ? 12 : +s % 12}`, a;
    } else
      return t.length < 2 ? `0${t}` : t;
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
}, Wr = () => {
  const {
    controlsClassName: e,
    disabled: r,
    handleAddTime: n,
    handleRemoveTime: t,
    inputType: i
  } = tr();
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      className: D(R.ti__arrowsContainer, e),
      "aria-label": `${i}-controls`,
      children: [
        /* @__PURE__ */ N.jsx(
          "button",
          {
            onClick: (s) => n(s),
            disabled: r,
            "aria-label": "add-time",
            tabIndex: 0,
            children: /* @__PURE__ */ N.jsx(Ot, {})
          }
        ),
        /* @__PURE__ */ N.jsx(
          "button",
          {
            disabled: r,
            onClick: (s) => t(s),
            "aria-label": "remove-time",
            tabIndex: 0,
            children: /* @__PURE__ */ N.jsx(jt, {})
          }
        )
      ]
    }
  );
}, Br = (e) => /* @__PURE__ */ ne.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", ...e }, /* @__PURE__ */ ne.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" })), ft = Ke(
  null
), qr = ({
  children: e,
  props: r
}) => {
  const { dispatch: n, amPmAriaLabel: t, disabled: i, isAm: s } = r, a = () => {
    n({ type: "TOGGLE_AM", payload: !s });
  };
  return /* @__PURE__ */ N.jsx(
    ft,
    {
      value: {
        handleToggleAmPm: a,
        amPmAriaLabel: t,
        isAm: s,
        disabled: i
      },
      children: e
    }
  );
}, Jr = () => {
  const e = Ze(ft);
  if (!e)
    throw new Error("useContext must be used within a ControlsProvider");
  return e;
}, Xr = () => {
  const { handleToggleAmPm: e, isAm: r, disabled: n, amPmAriaLabel: t } = Jr();
  return /* @__PURE__ */ N.jsx(
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
}, Zr = ({
  props: e,
  children: r
}) => {
  const {
    inputType: n,
    isAm: t,
    disabled: i,
    disabledHours: s,
    disabledMinutes: a,
    disabledSeconds: d,
    controlsClassName: c,
    format: p,
    hour12: T,
    amPmAriaLabel: E,
    updateTime: _,
    hours: C,
    minutes: M,
    seconds: $,
    state: k,
    dispatch: I,
    stepHours: O,
    stepMinutes: P,
    stepSeconds: j,
    readOnly: L,
    readOnlyHours: z,
    readOnlyMinutes: x,
    readOnlySeconds: o
  } = e;
  return /* @__PURE__ */ N.jsx(
    er,
    {
      props: {
        inputType: n,
        disabled: i || s || a || d,
        updateTime: _,
        hours: C,
        minutes: M,
        seconds: $,
        controlsClassName: c,
        format: p,
        hour12: T,
        isAm: t,
        state: k,
        dispatch: I,
        stepHours: O,
        stepMinutes: P,
        stepSeconds: j,
        readOnly: L,
        readOnlyHours: z,
        readOnlyMinutes: x,
        readOnlySeconds: o
      },
      children: /* @__PURE__ */ N.jsx(
        qr,
        {
          props: {
            isAm: t,
            amPmAriaLabel: E,
            disabled: i || s || a || d,
            state: k,
            dispatch: I
          },
          children: r
        }
      )
    }
  );
}, Kr = (e, r) => {
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
let qe = !1, Je = !1;
const Qr = ({
  value: e,
  onChange: r,
  hasSeconds: n,
  hour12: t,
  maxTime: i,
  minTime: s,
  format: a
}) => {
  const [d, c] = St(Kr, {
    isAm: !1,
    inputType: "hours",
    hours: Ne(e, t, a),
    minutes: Pe(e),
    seconds: Ie(e),
    hour12: t,
    format: a
  }), { isAm: p, inputType: T, hours: E, minutes: _, seconds: C } = d, M = Se(null), $ = Se(null), k = Se(null), I = `${E}:${_}:${C}`, O = `${Ne(
    e,
    t,
    a
  )}:${Pe(e)}:${Ie(e)}`;
  Ae(() => {
    if (!Je) {
      if (!e) return;
      typeof e == "string" && +e?.split(":")[0] < 12 && t && c({ type: "TOGGLE_AM", payload: !0 }), Je = !0;
    }
  }, []), Ae(() => {
    qe || (!e && r && r(I), qe = !0);
  }, []), Ae(() => {
    if (r) {
      const x = O?.split(":")[0], o = O?.split(":")[1], u = O?.split(":")[2];
      let b = x;
      !p && t && (b = `${+x % 12}`), r(`${b}:${o}:${u}`);
    }
  }, [p]), e && r && O !== I && (c({
    type: "SET_HOURS",
    payload: Ne(e, t, a)
  }), c({
    type: "SET_MINUTES",
    payload: Pe(e)
  }), c({
    type: "SET_SECONDS",
    payload: Ie(e)
  }));
  const P = At(
    (x, o, u) => {
      let b;
      if (r && e || e === "" && x && r) {
        if (a && a.includes("ss") ? b = `${x}:${o}:${u}` : b = n ? `${x}:${o}:${u}` : `${x}:${o}`, (i || s) && !_e(
          b,
          i,
          s,
          n
        ))
          return;
        r(b);
        return;
      } else {
        let A;
        if (a && a.includes("ss") ? A = `${x}:${o}:${u}` : A = n ? `${x}:${o}:${u}` : `${x}:${o}`, (i || s) && !_e(
          A,
          i,
          s,
          n
        ))
          return;
        c({ type: "SET_HOURS", payload: x }), c({ type: "SET_MINUTES", payload: o }), c({ type: "SET_SECONDS", payload: u });
        return;
      }
    },
    [r, e, n]
  );
  return {
    hoursRef: M,
    minutesRef: $,
    secondsRef: k,
    handleHours: (x, o) => {
      const { currentTarget: u } = x;
      if (u.value === "") {
        P(u.value, _, C);
        return;
      }
      if (u.value && u.valueAsNumber < 24 && u.valueAsNumber >= 0) {
        const b = u.value.slice(-2);
        if (r)
          if (t)
            if (p) {
              P(
                +b > 11 ? "12" : `${+b < 1 ? "1" : +b}`,
                _,
                C
              ), ae(b, $, o, c, "minutes");
              return;
            } else {
              P(
                +b > 11 ? "12" : `${+b < 1 ? "1" : +b % 12}`,
                _,
                C
              ), ae(b, $, o, c, "minutes");
              return;
            }
          else {
            if (a && a.includes("hh")) {
              const A = +b > 11 ? "12" : `${+b < 1 ? "1" : +b % 12}`;
              P(A, _, C), ae(b, $, o, c, "minutes");
              return;
            }
            P(
              b.length < 2 ? `0${b}` : b,
              _,
              C
            ), ae(b, $, o, c, "minutes");
            return;
          }
        else {
          if ((i || s) && !_e(
            b,
            i,
            s,
            n
          ))
            return;
          if (a && a.includes("hh")) {
            const A = +b > 11 ? "12" : `${+b < 1 ? "1" : +b % 12}`;
            c({ type: "SET_HOURS", payload: A });
          } else {
            const A = b.length < 2 ? `0${b}` : b;
            c({ type: "SET_HOURS", payload: A });
          }
          ae(b, $, o, c, "minutes");
        }
      }
    },
    handleMinutes: (x, o) => {
      const { currentTarget: u } = x;
      if (u.value === "") {
        P(E, u.value, C);
        return;
      }
      if (u.value && u.valueAsNumber < 60 && u.valueAsNumber >= 0) {
        const b = u.value.slice(-2);
        if (r)
          P(
            E,
            b.length < 2 ? `0${+b}` : `${+b}`,
            C
          ), (n || a?.includes("ss")) && ae(b, k, o, c, "seconds");
        else {
          const A = b.length < 2 ? `0${b}` : b;
          c({ type: "SET_MINUTES", payload: A }), ae(b, k, o, c, "seconds");
        }
      }
    },
    handleSeconds: (x) => {
      const { currentTarget: o } = x;
      if (o.value === "") {
        P(E, _, o.value);
        return;
      }
      if (o.value && o.valueAsNumber < 60 && o.valueAsNumber >= 0) {
        const u = o.value.slice(-2);
        if (r)
          P(
            E,
            _,
            u.length < 2 ? `0${u}` : u
          );
        else {
          const b = u.length < 2 ? `0${u}` : u;
          c({ type: "SET_SECONDS", payload: b });
        }
      }
    },
    inputType: T,
    updateTime: P,
    hours: E,
    minutes: _,
    seconds: C,
    isAm: p,
    state: d,
    dispatch: c
  };
}, Xe = ({ className: e }) => /* @__PURE__ */ N.jsx("span", { className: e, children: ":" }), en = (e, r) => {
  if (e === "minutes") {
    const {
      inputClassName: P,
      minutesPlaceholder: j,
      minutesAriaLabel: L,
      minutesInputTitle: z,
      readOnlyMinutes: x,
      disabledMinutes: o,
      stepMinutes: u,
      hour12: b,
      name: A,
      required: G,
      id: Y,
      ref: H,
      value: V,
      readOnly: U
    } = r;
    return {
      id: Y,
      ref: H,
      step: le(u, !1, b),
      min: 0,
      max: 59,
      readOnly: x || U,
      placeholder: j,
      value: V,
      className: D(o ? R.ti__disabled : "", P),
      pattern: "^([0-5]?[0-9])$",
      required: G,
      title: z,
      ariaLabel: L,
      name: `minutes-${A}`,
      disabled: o
    };
  }
  if (e === "seconds") {
    const {
      inputClassName: P,
      secondsPlaceholder: j,
      secondsAriaLabel: L,
      secondsInputTitle: z,
      readOnlySeconds: x,
      disabledSeconds: o,
      stepSeconds: u,
      hour12: b,
      name: A,
      required: G,
      id: Y,
      ref: H,
      value: V,
      readOnly: U
    } = r;
    return {
      id: Y,
      ref: H,
      step: le(u, !1, b),
      min: 0,
      max: 59,
      readOnly: x || U,
      placeholder: j,
      value: V,
      className: D(o ? R.ti__disabled : "", P),
      pattern: "^([0-5]?[0-9])$",
      required: G,
      title: z,
      ariaLabel: L,
      name: `seconds-${A}`,
      disabled: o
    };
  }
  const {
    inputClassName: n,
    hoursPlaceholder: t,
    hoursAriaLabel: i,
    hoursInputTitle: s,
    readOnlyHours: a,
    disabledHours: d,
    stepHours: c,
    hour12: p,
    name: T,
    required: E,
    id: _,
    ref: C,
    value: M,
    readOnly: $,
    format: k
  } = r, I = p && k?.includes("hh") ? 12 : 23, O = p && k?.includes("hh") ? 1 : 0;
  return {
    id: _,
    ref: C,
    step: le(c, !1, p),
    min: O,
    max: I,
    readOnly: a || $,
    placeholder: t,
    value: M,
    className: D(d ? R.ti__disabled : "", n),
    pattern: "^([0-9]{1,2})$",
    required: E,
    title: s,
    ariaLabel: i,
    name: `hours-${T}`,
    disabled: d
  };
}, Me = (e) => {
  const [r, n] = $t(""), {
    type: t,
    disabled: i,
    onChange: s,
    ref: a,
    setZeroOnBlur: d,
    updateTime: c,
    hour12: p,
    dispatch: T,
    hasSeconds: E,
    hours: _,
    minutes: C,
    seconds: M,
    format: $
  } = e, {
    id: k,
    step: I,
    min: O,
    max: P,
    readOnly: j,
    placeholder: L,
    value: z,
    className: x,
    pattern: o,
    required: u,
    ...b
  } = en(t, e);
  return /* @__PURE__ */ N.jsx(
    "input",
    {
      type: "number",
      id: k,
      autoComplete: "off",
      step: I,
      min: O,
      max: P,
      readOnly: j,
      placeholder: L,
      value: z,
      className: x,
      pattern: o,
      required: u,
      inputMode: "numeric",
      onChange: (A) => {
        s(A, r);
      },
      onBlur: () => {
        d && It({ hours: _, minutes: C, seconds: M }, t, c, p);
      },
      onKeyDown: (A) => {
        A.key === "ArrowDown" || A.key === "ArrowUp" ? n(A.key) : n(""), Mt(
          A,
          t,
          T,
          c,
          { hours: _, minutes: C, seconds: M },
          E,
          $
        );
      },
      onClick: (A) => {
        A.preventDefault(), me(a), T({ type: "INPUT_TYPE", payload: t });
      },
      tabIndex: 0,
      disabled: i || b.disabled,
      ref: a,
      "aria-label": b.ariaLabel,
      name: b.name,
      title: b.title
    }
  );
}, rn = ({
  id: e,
  value: r,
  dataTestId: n,
  hoursPlaceholder: t = "--",
  minutesPlaceholder: i = "--",
  secondsPlaceholder: s = "--",
  name: a = "time",
  disabled: d,
  required: c,
  onChange: p,
  className: T,
  inputsContainerClassName: E,
  colonClassName: _,
  iconClockClassName: C,
  amPmButtonClassName: M,
  controlsClassName: $,
  inputClassName: k,
  dividerClassName: I,
  ariaLabel: O = "time",
  iconAriaLabel: P = "clock",
  hoursAriaLabel: j = "hours",
  minutesAriaLabel: L = "minutes",
  secondsAriaLabel: z = "seconds",
  amPmAriaLabel: x = "am-pm",
  hasSeconds: o = !1,
  hour12: u = !1,
  disableFocusOnIcon: b = !1,
  hideIcon: A = !1,
  disabledHours: G,
  disabledMinutes: Y,
  disabledSeconds: H,
  maxTime: V,
  minTime: U,
  hideControls: W = !1,
  hoursInputTitle: h = "Hours input",
  minutesInputTitle: oe = "Minutes input",
  secondsInputTitle: se = "Seconds input",
  setZeroOnBlur: l = !1,
  format: g,
  stepHours: w = 1,
  stepMinutes: S = 1,
  stepSeconds: B = 1,
  readOnly: J = !1,
  readOnlyHours: y = !1,
  readOnlyMinutes: q = !1,
  readOnlySeconds: X = !1,
  hoursId: ee,
  minutesId: be,
  secondsId: ce
}) => {
  const {
    hoursRef: Ee,
    minutesRef: ze,
    secondsRef: De,
    inputType: pt,
    updateTime: xe,
    handleHours: bt,
    handleMinutes: ht,
    handleSeconds: gt,
    hours: Z,
    minutes: K,
    seconds: de,
    isAm: wt,
    state: yt,
    dispatch: te
  } = Qr({
    value: r,
    onChange: p,
    hasSeconds: o,
    hour12: u,
    maxTime: V,
    minTime: U,
    format: g
  }), _t = D(
    R.ti__timerContainer,
    R.ti__hourContainer,
    t === "--" ? R.hyphen : R.hh,
    Z === "" ? R.noValue : "",
    u && +Z < 10 ? R.noZero : ""
  ), xt = D(
    R.ti__timerContainer,
    R.ti__minutesContainer,
    o ? R.withSeconds : "",
    i === "--" ? R.hyphen : R.mm,
    K === "" ? R.noValue : "",
    +K > 9 ? R.noZero : ""
  ), kt = D(
    R.ti__timerContainer,
    R.ti__secondsContainer
  ), Le = g?.includes("ss") || o, vt = g?.includes("hh"), Tt = D(
    R.ti__disabled,
    d || G || Y ? R.ti__disabled : ""
  ), Ct = D(
    R.ti__disabled,
    d || Y || H ? R.ti__disabled : ""
  );
  return /* @__PURE__ */ N.jsx(
    Zr,
    {
      props: {
        hours: Z,
        minutes: K,
        seconds: de,
        isAm: wt,
        inputType: pt,
        disabled: d,
        controlsClassName: $,
        hour12: u,
        amPmAriaLabel: x,
        updateTime: xe,
        format: vt ? "hh" : "HH",
        disabledHours: G,
        disabledMinutes: Y,
        disabledSeconds: H,
        state: yt,
        dispatch: te,
        stepHours: w,
        stepMinutes: S,
        stepSeconds: B,
        readOnly: J,
        readOnlyHours: y,
        readOnlyMinutes: q,
        readOnlySeconds: X
      },
      children: /* @__PURE__ */ N.jsxs(
        "div",
        {
          className: D(
            `${R.ti__mainContainer} ${d ? R.ti__disabled : ""}`,
            T
          ),
          "data-testid": n,
          role: "textbox",
          tabIndex: 0,
          id: e,
          children: [
            !A && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: D(R.ti__iconContainer, C),
                role: "button",
                onClick: () => {
                  te({ type: "INPUT_TYPE", payload: "hours" }), !b && me(Ee);
                },
                "aria-label": P,
                children: /* @__PURE__ */ N.jsx(Br, {})
              }
            ),
            /* @__PURE__ */ N.jsxs(
              "div",
              {
                className: D(R.ti__inputsContainer, E),
                children: [
                  /* @__PURE__ */ N.jsxs(
                    "div",
                    {
                      className: D(_t),
                      onClick: (he) => {
                        he.preventDefault(), te({ type: "INPUT_TYPE", payload: "hours" }), me(Ee);
                      },
                      children: [
                        /* @__PURE__ */ N.jsx(
                          "input",
                          {
                            type: "hidden",
                            name: a,
                            "aria-label": O,
                            value: Le ? `${Z}:${K}:${de}` : `${Z}:${K}`
                          }
                        ),
                        /* @__PURE__ */ N.jsx(
                          Me,
                          {
                            type: "hours",
                            value: Z,
                            readOnly: J,
                            readOnlyHours: y,
                            setZeroOnBlur: l,
                            stepHours: le(w, !0, u),
                            hour12: u,
                            name: `hours-${a}`,
                            hoursAriaLabel: j,
                            hoursPlaceholder: t,
                            inputClassName: k || "",
                            disabledHours: G,
                            disabled: d,
                            required: c,
                            format: g,
                            hoursInputTitle: h,
                            className: D(
                              G ? R.ti__disabled : "",
                              k
                            ),
                            updateTime: xe,
                            dispatch: te,
                            onChange: bt,
                            ref: Ee,
                            hasSeconds: o,
                            id: ee,
                            hours: Z,
                            minutes: K,
                            seconds: de
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ N.jsx(
                    Xe,
                    {
                      className: D(
                        I,
                        Tt,
                        _
                      )
                    }
                  ),
                  /* @__PURE__ */ N.jsx(
                    "div",
                    {
                      className: D(xt),
                      onClick: (he) => {
                        he.preventDefault(), te({ type: "INPUT_TYPE", payload: "minutes" }), me(ze);
                      },
                      children: /* @__PURE__ */ N.jsx(
                        Me,
                        {
                          type: "minutes",
                          value: K,
                          setZeroOnBlur: l,
                          stepMinutes: S,
                          hour12: u,
                          name: `minutes-${a}`,
                          minutesAriaLabel: L,
                          minutesPlaceholder: i,
                          readOnly: J || q,
                          inputClassName: k || "",
                          disabledMinutes: Y,
                          disabled: d,
                          required: c,
                          format: g,
                          minutesInputTitle: oe,
                          className: D(
                            Y ? R.ti__disabled : "",
                            k
                          ),
                          updateTime: xe,
                          dispatch: te,
                          onChange: ht,
                          ref: ze,
                          hasSeconds: o,
                          id: be,
                          hours: Z,
                          minutes: K,
                          seconds: de
                        }
                      )
                    }
                  ),
                  Le ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
                    /* @__PURE__ */ N.jsx(
                      Xe,
                      {
                        className: D(
                          I,
                          Ct,
                          _
                        )
                      }
                    ),
                    /* @__PURE__ */ N.jsx(
                      "div",
                      {
                        className: D(kt),
                        onClick: (he) => {
                          he.preventDefault(), te({ type: "INPUT_TYPE", payload: "seconds" }), me(De);
                        },
                        children: /* @__PURE__ */ N.jsx(
                          Me,
                          {
                            type: "seconds",
                            value: de,
                            setZeroOnBlur: l,
                            stepSeconds: B,
                            hour12: u,
                            name: `seconds-${a}`,
                            ref: De,
                            onChange: gt,
                            secondsAriaLabel: z,
                            secondsPlaceholder: s,
                            readOnly: J || X,
                            inputClassName: k || "",
                            disabledSeconds: H,
                            disabled: d,
                            required: c,
                            format: g,
                            secondsInputTitle: se,
                            id: ce,
                            seconds: de,
                            minutes: K,
                            hours: Z,
                            dispatch: te,
                            updateTime: xe,
                            className: D(
                              H ? R.ti__disabled : "",
                              k
                            ),
                            hasSeconds: o
                          }
                        )
                      }
                    )
                  ] }) : null,
                  u && /* @__PURE__ */ N.jsx(
                    "div",
                    {
                      className: D(
                        R.ti__toggleAmPmContainer,
                        M
                      ),
                      title: "AM/PM button",
                      children: /* @__PURE__ */ N.jsx(Xr, {})
                    }
                  )
                ]
              }
            ),
            W ? null : /* @__PURE__ */ N.jsx(Wr, {})
          ]
        }
      )
    }
  );
};
export {
  rn as TimeInput
};
