import u from "vue";
const m = u.extend({
  name: "App",
  data() {
    return {
      msg: "Hello TypeScript with Vue 2!"
    };
  },
  components: {
    HelloWorld: () => import("./HelloWorld-2af12ff9.js")
  }
});
var C = function() {
  var n = this, r = n.$createElement, _ = n._self._c || r;
  return _("div", [n._v(" " + n._s(n.msg) + " "), _("HelloWorld", {
    attrs: {
      msg: "Hello Vue 2 + TypeScript + Vite"
    }
  })], 1);
}, $ = [];
function g(n, r, _, d, i, s, a, c) {
  var e = typeof n == "function" ? n.options : n;
  r && (e.render = r, e.staticRenderFns = _, e._compiled = !0), d && (e.functional = !0), s && (e._scopeId = "data-v-" + s);
  var o;
  if (a ? (o = function(t) {
    t = t || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !t && typeof __VUE_SSR_CONTEXT__ < "u" && (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a);
  }, e._ssrRegister = o) : i && (o = c ? function() {
    i.call(
      this,
      (e.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : i), o)
    if (e.functional) {
      e._injectStyles = o;
      var v = e.render;
      e.render = function(h, f) {
        return o.call(f), v(h, f);
      };
    } else {
      var l = e.beforeCreate;
      e.beforeCreate = l ? [].concat(l, o) : [o];
    }
  return {
    exports: n,
    options: e
  };
}
const p = {};
var R = /* @__PURE__ */ g(
  m,
  C,
  $,
  !1,
  T,
  "f03c2cf0",
  null,
  null
);
function T(n) {
  for (let r in p)
    this[r] = p[r];
}
const V = /* @__PURE__ */ function() {
  return R.exports;
}();
new u({
  render: (n) => n(V)
}).$mount("#app");
export {
  g as n
};
