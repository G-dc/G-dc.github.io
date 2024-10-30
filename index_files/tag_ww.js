(function() {
  try {
      (function() {
          function nf(a, c, b, d) {
              var e = this;
              return D(window, "c.i", function() {
                  function f(F) {
                      (F = of(l, m, "", F)(l, m)) && (O(F.then) ? F.then(g) : g(F));
                      return F
                  }
                  function g(F) {
                      F && (O(F) ? p.push(F) : ia(F) && x(function(R) {
                          var P = R[0];
                          R = R[1];
                          O(R) && ("u" === P ? p.push(R) : h(R, P))
                      }, za(F)))
                  }
                  function h(F, R, P) {
                      e[R] = pm(l, m, P || q, R, F)
                  }
                  var k, l = window;
                  (!l || isNaN(a) && !a) && be();
                  var m = qm(a, ce, c, b, d)
                    , p = []
                    , q = [uh, of, vh];
                  q.unshift(rm);
                  var r = z(Q, Ua)
                    , t = L(m);
                  m.id || Va(Aa("Invalid Metrika id: " + m.id, !0));
                  var y = gd.C("counters", {});
                  if (y[t])
                      return Lb(l, t, "dc", (k = {},
                      k.key = t,
                      k)),
                      y[t];
                  sm(l, t, wh(a, c, b, d));
                  y[t] = e;
                  gd.D("counters", y);
                  gd.Ja("counter", e);
                  x(function(F) {
                      F(l, m)
                  }, pf);
                  x(f, hd);
                  f(tm);
                  h(um(l, m, p), "destruct", [uh, vh]);
                  Tb(l, E([l, r, f, 1, "a.i"], xh));
                  x(f, aa)
              })()
          }
          function uh(a, c, b, d) {
              return D(a, "cm." + b, d)
          }
          function vh(a, c, b, d) {
              return function() {
                  var e = Pa(arguments);
                  e = d.apply(void 0, e);
                  return T(e) ? Ka(a, c) : e
              }
          }
          function vm(a, c) {
              delete J(a).C("cok", {})[c]
          }
          function sm(a, c, b) {
              a = J(a);
              var d = a.C("cok", {});
              d[c] = b;
              a.D("cok", d)
          }
          function wm(a, c) {
              var b = "" + c
                , d = {
                  id: 1,
                  ba: "0"
              }
                , e = xm(b);
              e ? d.id = e : -1 === pb(b, ":") ? (b = Da(b),
              d.id = b) : (b = b.split(":"),
              e = b[1],
              d.id = Da(b[0]),
              d.ba = de(e) ? "1" : "0");
              return [Ka(a, d), d]
          }
          function yh(a, c, b, d) {
              zh(a, Ah + "/" + c + ".js?ver=" + ua.hb, function() {
                  var e = J(a).C("ytmm");
                  (e = n(e, c + ".init")) && e(b, d, ua.hb)
              })
          }
          function zm(a, c) {
              function b(e) {
                  var f = fa(d, e.fa) && d[e.fa];
                  if (f) {
                      var g = Bh(e, c);
                      if (Qa(function(h) {
                          try {
                              return !1 === h(g, c)
                          } catch (k) {
                              return !0
                          }
                      }, f))
                          return !1
                  }
                  return Am(a, e)
              }
              var d = {};
              return {
                  Ej: function(e, f) {
                      fa(d, e) || (d[e] = []);
                      d[e].push(f)
                  },
                  checkPermission: function(e) {
                      if (!b(e)) {
                          e = Bh(e, c);
                          var f = Error("Permission denied for " + e.fa);
                          f.Gj = e;
                          Va(f)
                      }
                  },
                  xf: b
              }
          }
          function Bh(a, c) {
              return {
                  containerId: c,
                  fa: a.fa,
                  L: a.L
              }
          }
          function Am(a, c) {
              var b = c.fa
                , d = c.permissions
                , e = c.L;
              if ("globals" === b || "localStorage" === b || "dataLayer" === b) {
                  var f = e.key;
                  e = e.Ca;
                  fa(d, b) ? (d = d[b],
                  b = "dataLayer" === b && fa(d, "ytm.ks.*") && d["ytm.ks.*"] & e ? !0 : fa(d, f) ? !!(d[f] & e) : !1) : b = !1
              } else
                  "url" === b || "referrer" === b ? (f = e.gk,
                  e = e.hk,
                  fa(d, b) ? (b = d[b],
                  b = "queryVars" === f ? fa(b, f) && e ? H(e, b[f]) : !1 : !!b[f]) : b = !1) : "log" === b ? (b = e.Vj,
                  b = fa(d, "log") ? b >= d.log : !1) : "loadScript" === b || "pixel" === b || "iframe" === b ? (f = e.url,
                  fa(d, b) && fa(d[b], "allow") ? (b = d[b],
                  b = Qa(E([a, f], Bm), b.allow)) : b = !1) : b = "cookies" === b ? Cm(d, e.name, e.Ca, e.options) : "readTitle" === b ? fa(d, "readTitle") ? d.readTitle : !1 : !1;
              return b
          }
          function Cm(a, c, b, d) {
              if (!fa(a, "cookies"))
                  return !1;
              var e = a.cookies;
              a = fa(e, c) ? e[c] : {
                  access: 0
              };
              if (2 === b)
                  return fa(e, "ytm.ks.*") || !!(a.access & b);
              if (1 === b) {
                  if (!fa(e, c) || !d)
                      return !1;
                  c = a.access;
                  e = a.domain;
                  var f = a.path
                    , g = a.secure
                    , h = a.ck
                    , k = !ba(d.expires) || !ba(d["max-age"]);
                  if (fa(a, "session") && h)
                      if (1 === h) {
                          if (k)
                              return !1
                      } else if (!k)
                          return !1;
                  return !(c & b) || fa(a, "domain") && e !== d.domain || fa(a, "path") && f !== d.path || fa(a, "secure") && (1 === g && !d.secure || 2 === g && d.secure) ? !1 : !0
              }
              return !1
          }
          function Bm(a, c, b) {
              c = Ub(a, c);
              if (!c.protocol || "https:" !== c.protocol)
                  return !1;
              a = Ub(a, b);
              return c.host && a.host && (xc(a.host, "*.") ? Ch(c.host, a.host.substring(2)) : c.host === a.host) ? "/" === a.pathname ? !0 : Ch(a.pathname, "/*") ? xc(c.pathname, a.pathname.substring(0, a.pathname.length - 2)) : a.pathname === c.pathname : !1
          }
          function Ch(a, c) {
              return c.length > a.length ? !1 : a.substring(a.length - c.length) === c
          }
          function Dm(a, c, b) {
              var d = c.triggers
                , e = c.variables;
              return {
                  dispatchEvent: function(f) {
                      var g = N(function(h, k) {
                          Qa(function(l) {
                              return !Em(a, f, l, e)
                          }, k.conditions) || x(function(l) {
                              H(l, h) || h.push(l)
                          }, k.tags);
                          return h
                      }, [], d);
                      0 === g.length || Fm(a, c, f, g, b)
                  }
              }
          }
          function Fm(a, c, b, d, e) {
              x(ee("t.e", function(f) {
                  var g = c.tags[f]
                    , h = c.permissions[f];
                  if (!g || !h)
                      throw Aa("i.conf." + c.containerVersion + "-" + f);
                  h = {
                      na: e,
                      permissions: h
                  };
                  "pro" === g.type ? Gm(a, c, b, g, h) : "pix" === g.type && (f = h.na,
                  h = h.permissions,
                  g = g.data.pixelUrl,
                  S(g) && (f.checkPermission({
                      permissions: h,
                      fa: "pixel",
                      L: {
                          url: g
                      }
                  }),
                  Hm(a, g)))
              }), id(function(f, g) {
                  return f - g
              }, d))
          }
          function Gm(a, c, b, d, e) {
              c = d.data;
              e = Im(e.permissions, e.na);
              d = N(function(f, g) {
                  var h = g[0]
                    , k = g[1];
                  k = (T(k),
                  k);
                  f[h] = jd(a, k);
                  return f
              }, {}, za(d.settings || {}));
              Jm(a, c, {
                  na: e,
                  data: d,
                  event: b
              })
          }
          function Im(a, c) {
              return {
                  checkPermission: function(b) {
                      b = A({
                          permissions: a
                      }, b);
                      c.checkPermission(b)
                  },
                  xf: function(b) {
                      b = A({
                          permissions: a
                      }, b);
                      return c.xf(b)
                  }
              }
          }
          function Jm(a, c, b) {
              var d, e;
              c = c.slice(2);
              a = {
                  na: b.na,
                  l: a,
                  event: b.event
              };
              b = A(b.data, (d = {},
              d.ytmOnFailure = C,
              d.ytmOnSuccess = C,
              d));
              d = qf([], (e = {},
              e.undefined = {
                  kind: 0,
                  value: void 0
              },
              e.require = {
                  kind: 0,
                  value: w(Km, Xa(va)(a))
              },
              e.data = {
                  kind: 0,
                  value: b
              },
              e));
              fe(d, kd([3], c))
          }
          function fe(a, c, b, d) {
              c = c.slice(1);
              a = qf(a, b, d);
              b = a[a.length - 1];
              for (d = 0; d < c.length && b.rc; d += 1)
                  ge(a, c[d])
          }
          function ge(a, c) {
              if (M(c) && 3 === c[0])
                  fe(a, c);
              else if (Dh(c))
                  Eh(a, c);
              else if (M(c) && 2 === c[0])
                  Ya(a, c[1]);
              else if (M(c) && 7 === c[0]) {
                  var b = c[2]
                    , d = c[3];
                  Ya(a, c[1]) ? ge(a, b) : d && ge(a, d)
              } else if (8 === c[0]) {
                  b = c.slice(2);
                  for (var e = d = !1, f = [], g = [], h = Ya(a, c[1]), k = 0; k < b.length; k += 1) {
                      var l = b[k]
                        , m = l[1];
                      l = l.slice(2);
                      var p = Ra(m);
                      e = e || p;
                      p || (d = d || Ya(a, m) === h);
                      d && (f = f.concat(l));
                      e && (g = g.concat(l))
                  }
                  fe(a, kd([3], d ? f : g), {}, {
                      "break": C
                  })
              } else if (M(c) && 4 === c[0])
                  Lm(a, c);
              else if (M(c) && 5 === c[0])
                  rf(a, "break", "ibs");
              else if (M(c) && 6 === c[0])
                  rf(a, "continue", "ics");
              else if (M(c) && 15 === c[0])
                  for (g = c[1],
                  b = c[2],
                  d = c[3],
                  e = c[4],
                  f = Mm(a),
                  g && (Dh(g) ? Eh(f.stack, g) : Ya(f.stack, g)),
                  g = !0; g && (!b || Ya(f.stack, b)); )
                      g = f,
                      h = g.fh,
                      ge(g.stack, e),
                      g.od && (h.rc = !0,
                      g.od = !1),
                      g = h.rc,
                      d && g && Ya(f.stack, d)
          }
          function Mm(a, c) {
              var b = {
                  od: !1
              }
                , d = qf(a, c, {
                  "continue": function() {
                      b.od = !0
                  },
                  "break": C
              });
              b.stack = d;
              b.fh = d[d.length - 1];
              return b
          }
          function Lm(a, c) {
              var b = c[1];
              rf(a, "return", "irs", function() {
                  return T(b) ? b : Ya(a, b)
              })
          }
          function Eh(a, c) {
              var b = 18 === c[0];
              x(function(d) {
                  var e = d[0]
                    , f = d[1];
                  if (b && 1 === d.length)
                      throw Aa("mca");
                  d = a[a.length - 1].Qe;
                  if (fa(d, e))
                      throw Aa("vr");
                  f = T(f) ? f : Ya(a, f);
                  d[e] = {
                      kind: b ? 0 : 1,
                      value: f
                  }
              }, c.slice(1))
          }
          function Dh(a) {
              return M(a) && (18 === a[0] || 19 === a[0])
          }
          function Ya(a, c) {
              if (S(c) || "[object Number]" === Object.prototype.toString.call(c) || !!c === c || Fh(c))
                  return Fh(c) ? null : c;
              if (M(c) && 40 === c[0]) {
                  a: {
                      var b = c[1];
                      for (var d = a.length; 0 < d; ) {
                          var e = a[--d];
                          if (fa(e.Qe, b)) {
                              b = e.Qe[b];
                              break a
                          }
                      }
                      b = void 0
                  }
                  if (!b)
                      throw Aa("vnd");
                  return b.value
              }
              if (M(c) && 37 === c[0]) {
                  d = c.slice(2);
                  b = Ya(a, c[1]);
                  if (!O(b))
                      throw Aa("tenf");
                  d = z(u(a, Ya), d);
                  return b.apply(null, d)
              }
              if (M(c) && 24 === c[0])
                  return Nm(a, c);
              if (M(c) && 35 === c[0]) {
                  d = c[2];
                  b = Ya(a, c[1]);
                  d = Ya(a, d);
                  if (!b)
                      throw Aa("noma");
                  return b["" + d]
              }
              if (M(c) && 23 === c[0])
                  return Om(a, c);
              if (M(c) && 22 === c[0])
                  return Pm(a, c)
          }
          function Pm(a, c) {
              return z(function(b) {
                  return Ya(a, b)
              }, c.slice(1))
          }
          function Om(a, c) {
              return N(function(b, d) {
                  var e = d[1]
                    , f = Ya(a, d[0]);
                  e = Ya(a, e);
                  b["" + f] = e;
                  return b
              }, {}, c.slice(1))
          }
          function Fh(a) {
              return M(a) && 42 === a[0]
          }
          function Nm(a, c) {
              var b = c[1]
                , d = c[2]
                , e = c[3]
                , f = z(Q, a);
              return function() {
                  var g = arguments
                    , h = N(function(l, m, p) {
                      if (l[m])
                          throw Aa("da");
                      l[m] = {
                          kind: 1,
                          value: g[p]
                      };
                      return l
                  }, {}, d);
                  b && !H(b, d) && (h[b] = {
                      kind: 0,
                      value: b
                  });
                  var k;
                  fe(f, e, h, {
                      "return": function(l) {
                          k = l
                      }
                  });
                  return k
              }
          }
          function rf(a, c, b, d) {
              for (var e = a.length - 1; 0 <= e; --e) {
                  var f = a[e];
                  f.rc = !1;
                  if (fa(f.methods, c)) {
                      f.methods[c](d ? d() : void 0);
                      return
                  }
              }
              throw Aa(b);
          }
          function qf(a, c, b) {
              void 0 === c && (c = {});
              void 0 === b && (b = {});
              var d = a.concat;
              void 0 === c && (c = {});
              void 0 === b && (b = {});
              return d.call(a, {
                  Qe: c,
                  methods: b,
                  rc: !0
              })
          }
          function Km(a) {
              return fa(Gh, a) ? Gh[a] : void 0
          }
          function Hm(a, c, b, d) {
              void 0 === b && (b = C);
              void 0 === d && (d = C);
              var e = qb(a)("img");
              e.src = c;
              e.onerror = d;
              Nc(a) ? (a = gc(a),
              e.onload = function(f) {
                  b(f);
                  hc(e)
              }
              ,
              A(e.style, {
                  position: "absolute",
                  visibility: "hidden",
                  width: "0px",
                  height: "0px"
              }),
              a.appendChild(e)) : e.onload = b
          }
          function zh(a, c, b, d) {
              function e() {
                  g.state = 1;
                  b()
              }
              function f() {
                  g.state = 2;
                  d && d()
              }
              var g = Qm(a, c);
              c = g.Vi;
              var h = g.state;
              c && 2 !== h ? 1 === h ? e() : (a = la(a),
              a.F(c, ["load"], e),
              a.F(c, ["error"], f)) : f()
          }
          function Qm(a, c) {
              sf[c] || (sf[c] = {
                  Vi: ld(a, {
                      src: c
                  }),
                  state: 0
              });
              return sf[c]
          }
          function tf(a, c) {
              var b = c.split(".")
                , d = b.pop();
              b = b.length ? n(a, G(".", b)) : a;
              if (!b)
                  throw Aa("noma");
              return {
                  value: n(b, d),
                  parent: b,
                  ue: d
              }
          }
          function jd(a, c) {
              if (ba(c) || !!c === c || Mb(a, c) || S(c))
                  return c;
              if (ia(c))
                  return N(function(b, d) {
                      b[d[0]] = jd(a, d[1]);
                      return b
                  }, {}, za(c));
              if (M(c))
                  return z(u(a, jd), c)
          }
          function md(a) {
              if (!S(a))
                  throw Aa("gppns");
              if (H(a.split(".")[0], Rm))
                  throw Aa("rwp");
          }
          function Sm(a, c) {
              if ("eq" === c)
                  return Tm;
              if ("more" === c)
                  return u(a, Um);
              if ("less" === c)
                  return u(a, Vm);
              if ("regex" === c)
                  return Wm;
              if ("inc" === c)
                  return Xm
          }
          function Hh(a, c, b) {
              var d = c.key;
              c = c.defaultValue;
              b && b.na.checkPermission({
                  permissions: b.permissions,
                  fa: "dataLayer",
                  L: {
                      key: d,
                      Ca: 2
                  }
              });
              a = n(a, d);
              return T(a) ? c : a
          }
          function Xm(a, c) {
              return M(a) ? H(c, a) : S(a) ? ab(a, "" + c) : !1
          }
          function Wm(a, c) {
              if (!S(a) || !S(c))
                  return !1;
              try {
                  return (new RegExp(c)).test(a)
              } catch (b) {
                  return !1
              }
          }
          function Vm(a, c, b) {
              return he(a, c) && he(a, b) ? c < b : !1
          }
          function Um(a, c, b) {
              return he(a, c) && he(a, b) ? c > b : !1
          }
          function Tm(a, c) {
              return a === c
          }
          function Ym(a) {
              Zm(a, function(c, b) {
                  Oc(a, "ytm." + c, b)
              })
          }
          function ee(a, c, b) {
              return function() {
                  try {
                      return c.apply(null, arguments)
                  } catch (d) {
                      Ih(a, d)
                  }
                  return b
              }
          }
          function $m(a, c, b, d) {
              void 0 === d && (d = "dataLayer");
              var e = []
                , f = [];
              x(function(g) {
                  g.startsWith("ytm.") ? (g = an(a, g, c)) && e.push(g) : f.push(g)
              }, b);
              b = n(a, d);
              b || (b = [],
              a[d] = b);
              nd(a, b, function(g) {
                  g.ra.F(function(h) {
                      var k = n(h, "event");
                      S(k) && H(k, f) && c(h)
                  });
                  e.push(g.unsubscribe)
              });
              return function() {
                  return x(va, e)
              }
          }
          function an(a, c, b) {
              if ("ytm.linkClick" === c)
                  return bn(a, b);
              b = E([a, b], cn);
              if ("ytm.click" === c)
                  return b("ytm.click", ["click"]);
              if ("ytm.dom" === c)
                  return b("ytm.dom", ["DOMContentLoaded"]);
              if ("ytm.load" === c)
                  return b("ytm.load", ["load"], a);
              if ("ytm.formSubmit" === c)
                  return b("ytm.formSubmit", ["submit"])
          }
          function cn(a, c, b, d, e) {
              void 0 === e && (e = a.document);
              return la(a).F(e, d, function(f) {
                  c(uf(a, b, f.target))
              })
          }
          function bn(a, c) {
              return la(a).F(a.document, ["click"], function(b) {
                  "A" === b.target.nodeName && c(uf(a, "ytm.linkClick", b.target))
              })
          }
          function uf(a, c, b) {
              return dn.includes(c) ? (a = {
                  element: b,
                  elementClasses: od(b.classList),
                  elementText: b.innerText,
                  elementId: b.getAttribute("id"),
                  elementUrl: null
              },
              a.elementUrl = "ytm.formSubmit" === c ? b.getAttribute("action") : b.getAttribute("href"),
              {
                  event: c,
                  ytm: a
              }) : "ytm.init" === c ? {
                  event: c,
                  ytm: {
                      timestamp: ja(a)(ca)
                  }
              } : {
                  event: c,
                  ytm: {}
              }
          }
          function Jh(a) {
              var c = a[1];
              return "bp" === a[0] ? ["p", Kh(vf(c))] : a
          }
          function Lh(a) {
              return {
                  Pi: Nb(a.element),
                  Ad: a.Ad
              }
          }
          function en(a) {
              if (!a)
                  return "";
              a = a.match(fn);
              if (!a || 0 === a.length)
                  return "";
              var c = gn();
              return "//HTML/BODY/" + N(function(b, d) {
                  var e = d[0]
                    , f = Da(d.slice(1));
                  return "/" + c[e] + (f ? "[" + (f + 1) + "]" : "") + b
              }, "", a)
          }
          function hn(a) {
              return Mh(a) || jn(a)
          }
          function kn(a, c) {
              var b = c.patterns;
              return 0 === b.length ? !1 : Qa(u(a, Nh), b)
          }
          function ln(a, c) {
              var b = c.patterns;
              if (0 === b.length)
                  return !1;
              if (1 === b.length)
                  return Nh(a, b[0]);
              b = N(function(f, g) {
                  var h = g[0]
                    , k = g[1]
                    , l = a[h];
                  l === k && (f.zd += 1,
                  "i" === h || "c" === h ? f.Cf = !0 : "p" === h && Oh(l) === Oh(k) && (f.Df = !0));
                  return f
              }, {
                  zd: 0,
                  Cf: !1,
                  Df: !1
              }, b);
              var d = b.Cf
                , e = b.Df;
              return 2 <= b.zd || d && e
          }
          function Nh(a, c) {
              var b = a[c[0]];
              return !(!b || b !== c[1])
          }
          function mn(a) {
              x(function(c) {
                  var b = c.event;
                  c = c.data;
                  var d = u(b, nn);
                  "bidTimeout" === b ? x(d, c) : d(c)
              }, a)
          }
          function nn(a, c) {
              if (H(a, on)) {
                  var b = n(c, "auctionId") || n(c, "bid.auctionId") || void 0;
                  if (b) {
                      ic[b] || (ic[b] = {
                          Oc: {}
                      });
                      b = ic[b];
                      var d = "auctionInit" === a
                        , e = "auctionEnd" === a
                        , f = "adRenderFailed" === a || "adRenderSucceeded" === a;
                      f || b.Yc && !d || (b.Yc = n(c, "auctionStart") || void 0,
                      !b.Yc && d && (b.Yc = c.timestamp));
                      var g = E([a, b], pn);
                      "bidRequested" === a ? x(g, c.bids) : f ? qn(a, b, c) : e ? (b.af = c.auctionEnd || c.timestamp,
                      b.Si = ka(function(h, k, l) {
                          return ie(h, l) === k
                      }, z(V("bidderCode"), c.bidderRequests))) : d || g(c);
                      b.af && (b.da = !0)
                  }
              }
          }
          function qn(a, c, b) {
              var d, e = b.bid, f = e.bidderCode || e.bidder;
              e = e.adUnitCode;
              f && e && (c = Ph(c, e),
              c.Rb || (c.Rb = {}),
              a = "adRenderSucceeded" === a,
              c.Rb[f] = (d = {},
              d.success = a,
              d),
              a || (c.Rb[f].reason = b.reason,
              c.Rb[f].message = b.message))
          }
          function pn(a, c, b) {
              var d = b.adUnitCode
                , e = b.bidderCode || b.bidder;
              if (e && d) {
                  var f = Ph(c, d);
                  !f.de && b.mediaTypes && (f.de = {},
                  x(function(g) {
                      var h = g[0];
                      g = g[1];
                      var k;
                      M(g) ? k = g : g.sizes ? k = g.sizes : g.playerSize && (k = g.playerSize);
                      k && (f.de[h] = k)
                  }, za(b.mediaTypes)));
                  "bidTimeout" === a ? (f.timeout || (f.timeout = {}),
                  f.timeout[e] = !0) : (f.pc[a] || (f.pc[a] = {}),
                  f.pc[a][e] = N(function(g, h) {
                      ba(b[h]) || (g[h] = Qh[h] ? Qh[h](b[h]) : b[h]);
                      return g
                  }, {}, rn))
              }
          }
          function Ph(a, c) {
              a.Oc[c] || (a.Oc[c] = {
                  pc: {}
              });
              return a.Oc[c]
          }
          function sn(a, c) {
              x(function(b) {
                  ic[b].da && tn(a, c, b)
              }, ha(ic))
          }
          function tn(a, c, b) {
              var d = ic[b];
              d.da = !1;
              d.Ra && ma(a, d.Ra);
              d.Ra = W(a, function() {
                  var e, f, g = un(b);
                  c((e = {},
                  e.__ym = (f = {},
                  f.pbjs = g,
                  f),
                  e));
                  delete ic[b]
              }, 2E3)
          }
          function un(a) {
              var c = ic[a]
                , b = c.Yc
                , d = c.af
                , e = c.Si;
              return z(function(f) {
                  var g, h = f[0], k = f[1];
                  f = k.Rb;
                  var l = k.de
                    , m = k.timeout;
                  k = k.pc;
                  return A((g = {},
                  g.renderState = f,
                  g.mediaTypes = l,
                  g.auctionId = a,
                  g.adUnitCode = h,
                  g.startStamp = b,
                  g.endStamp = d,
                  g.requestedBidders = e,
                  g.bidTimeout = m,
                  g), k)
              }, za(c.Oc))
          }
          function vn(a) {
              var c = n(a, "featurePolicy");
              return c ? "browsingTopics"in a && c.allowsFeature("browsing-topics") : !1
          }
          function wn(a, c, b, d) {
              var e = n(d, "data");
              if (S(e)) {
                  var f = e.split("*");
                  e = f[0];
                  var g = f[1];
                  f = f[2];
                  "sc.topics-response" === e ? (g && ("1" === g && f ? (a = Vb(a, f),
                  M(a) && c.D("cta", a)) : c.D("cta.e", g)),
                  b()) : "sc.frame" === e && d.source && d.source.postMessage("sc.topics", "*")
              }
          }
          function xn(a, c) {
              var b;
              if ("https://oauth.yandex.ru" === n(c, "origin") && n(c, "source.window") && "_ym_uid_request" === n(c.data, "_ym")) {
                  var d = c.source
                    , e = (b = {},
                  b._ym_uid = a,
                  b);
                  d.postMessage(e, "https://oauth.yandex.ru")
              }
          }
          function Rh(a, c) {
              void 0 === c && (c = !0);
              var b = jc("canvas", a.document);
              if (b && (b = Pc(b))) {
                  var d = je(a) || Qc(a)
                    , e = d[0];
                  d = d[1];
                  if (.3 <= Sh(a, b, {
                      h: d,
                      w: e
                  }) / (d * e)) {
                      J(a).D("hc", 1);
                      return
                  }
              }
              c && W(a, E([a, !1], Rh), 3E3)
          }
          function Th(a) {
              return {
                  O: function(c, b) {
                      yn(a).then(function(d) {
                          c.J || (c.J = {});
                          c.J.uah = d;
                          b()
                      }, b)
                  }
              }
          }
          function zn(a) {
              var c = N(function(b, d) {
                  var e = d[1]
                    , f = An(a[d[0]]);
                  f && b.push("" + e + "\n" + f);
                  return b
              }, [], za(Bn));
              return G("\n", c)
          }
          function Cn(a) {
              return "che\n" + a
          }
          function An(a) {
              return S(a) ? a : M(a) ? G(",", z(function(c) {
                  return '"' + c.brand + '";v="' + c.version + '"'
              }, a)) : ba(a) ? "" : a ? "?1" : "?0"
          }
          function wf(a) {
              var c = Dn(a);
              return {
                  O: function(b, d) {
                      b.ja || (b.ja = {});
                      b.ja.ai = c(Uh);
                      d()
                  },
                  sa: function(b, d) {
                      var e = b.Ui;
                      T(e) || c(En(e));
                      d()
                  }
              }
          }
          function Uh(a) {
              var c = a.Se
                , b = a.$h;
              x(function(f, g) {
                  1 < b[g] && (a.sd = g)
              }, c);
              var d = a.sd
                , e = c.slice().splice(d - 1, 1);
              e.unshift(c[d]);
              return e
          }
          function Fn(a, c) {
              c.cookie.D("hostIndex", G(",", z(function(b, d) {
                  return G("-", [d, b])
              }, a)), 1440)
          }
          function Vh(a, c) {
              var b = a.C("hostIndex");
              return b ? z(function(d) {
                  return Da(d.split("-")[1])
              }, b.split(",")) : z(u(0, Q), c)
          }
          function Gn(a, c) {
              var b = Hn(a)
                , d = [In(a) || Jn(a)];
              Kn(a) && d.push(b);
              d.unshift("mc.webvisor.org");
              var e = ja(a);
              b = Wa(a);
              var f = b.C("synced", {});
              d = ka(function(g) {
                  if (c[g]) {
                      var h = (f[g] || 1) + 1440 < e(rb);
                      h && delete f[g];
                      return h
                  }
              }, d);
              b.D("synced", f);
              return z(function(g) {
                  return {
                      ej: c[g],
                      wi: g
                  }
              }, d)
          }
          function Jn(a) {
              a = Ln(a);
              return Mn[a] || a
          }
          function Hn(a) {
              a = Wh(a);
              return Nn[a] || "ru"
          }
          function On(a, c, b, d) {
              if (!b.K || de(c.ba))
                  d();
              else {
                  var e = ke(a)
                    , f = u(e, Pn)
                    , g = pd(a, "")
                    , h = function() {
                      var q = G(",", z(Qn(xf), le(e)));
                      q = "" + q + Rn(q, g);
                      me(b, "gdpr", q);
                      d()
                  };
                  if (c.wj)
                      f("31"),
                      h();
                  else if (3 === c.id)
                      h();
                  else {
                      var k = J(a)
                        , l = k.C("f1");
                      if (l)
                          l(h);
                      else if (l = le(e),
                      Qa(yc(xf), l))
                          h();
                      else if (g.C("yandex_login"))
                          f("13"),
                          g.D("gdpr", Rc, 525600),
                          h();
                      else {
                          l = ne(a);
                          var m = X(a);
                          var p = /(^|\w+\.)yango(\.yandex)?\.com$/.test(m.hostname) ? {
                              url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                              version: 2,
                              Gf: Sn,
                              Nf: "_inversed_buttons"
                          } : void 0;
                          l || p ? (l = g.C("gdpr"),
                          H(l, zc) ? (f(l === yf ? "12" : "3"),
                          h()) : zf(a) || Tn(a) ? (f("17"),
                          h()) : Un(a).then(Q, C).then(function(q) {
                              q ? (f("28"),
                              h()) : (Xh(h),
                              k.D("f1", Xh),
                              (0,
                              Af[0])(a).then(V("params.eu")).then(function(r) {
                                  if (r || ab(m.href, "yagdprcheck=1") || g.C("yaGdprCheck")) {
                                      g.D("gdpr_popup", yf);
                                      Vn(a, c);
                                      if (sb(a))
                                          return Wn(a, f, c);
                                      var t = Yh(a, e);
                                      if (t)
                                          return r = Xn(a, f, t, c, p),
                                          r.then(E([a, c], Yn)),
                                          r
                                  }
                                  r || f("8");
                                  return K.resolve({
                                      value: Rc,
                                      Vd: !0
                                  })
                              }).then(function(r) {
                                  g.lc("gdpr_popup");
                                  if (r) {
                                      var t = r.value;
                                      r = r.Vd;
                                      H(t, zc) && g.D("gdpr", t, r ? void 0 : 525600)
                                  }
                                  t = kc(Zh, va);
                                  qd(a, t, 20)(bb(D(a, "gdr"), C));
                                  k.D("f1", va)
                              })["catch"](D(a, "gdp.a")))
                          })) : (f("14"),
                          h())
                      }
                  }
              }
          }
          function Yn(a, c) {
              if (ne(a)) {
                  var b = ke(a)
                    , d = Ka(a, c);
                  d = d && d.params;
                  b = z(u(Zn, n), le(b));
                  d && b.length && d("gdpr", Ea(b))
              }
          }
          function Wn(a, c, b) {
              var d = oe(a, b);
              return new K(function(e) {
                  var f;
                  if (d) {
                      var g = d.$
                        , h = w(u("4", c), u(null, e))
                        , k = W(a, h, 2E3, "gdp.f.t");
                      d.gg((f = {},
                      f.type = "isYandex",
                      f)).then(function(l) {
                          l.isYandex ? (c("5"),
                          g.F($h, function(m) {
                              e({
                                  value: ai(m[1].type)
                              })
                          })) : (c("6"),
                          e(null))
                      })["catch"](h).then(E([a, k], ma))
                  } else
                      e({
                          value: yf,
                          Vd: !0
                      })
              }
              )
          }
          function Vn(a, c) {
              var b = oe(a, c);
              b && b.$.F(["isYandex"], function() {
                  var d;
                  return d = {
                      type: "isYandex"
                  },
                  d.isYandex = ne(a),
                  d
              });
              return b
          }
          function $n(a, c, b) {
              a = b || Wh(a);
              return H(a, c) ? a : "en"
          }
          function ai(a) {
              if (H(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]))
                  return Rc;
              a = a.replace("GDPR-ok-view-detailed-", "");
              return H(a, zc) ? a : Rc
          }
          function bi(a, c, b) {
              var d = n(a, "AppMetricaInitializer")
                , e = n(d, "init");
              if (e)
                  try {
                      I(e, d)(Ob(a, c))
                  } catch (f) {}
              else
                  ci = W(a, E([a, c, 2 * b], bi), b, "ai.d");
              return function() {
                  return ma(a, ci)
              }
          }
          function di(a, c, b, d) {
              var e, f, g, h = b.ni, k = b.ii, l = b.isTrusted;
              b = b.Wd;
              a = Bf(a, k);
              k = k.readOnly;
              d = (e = {},
              e.fi = Cf((f = {},
              f.a = h ? 1 : 0,
              f.b = a,
              f.c = d || 0,
              f.d = k ? 1 : null,
              f.e = b ? 1 : null,
              f)).Ia(),
              e);
              ba(l) || (d.ite = tb(l));
              c.params((g = {},
              g.__ym = d,
              g))
          }
          function ei(a, c) {
              var b = n(c, "target");
              if (b) {
                  var d = n(b, "value");
                  if ((d = cb(d)) && !(100 <= hb(d))) {
                      var e = "tel" === n(b, "type")
                        , f = 0 < pb(d, "@") && !e
                        , g = pe(d);
                      g = hb(g);
                      if (f || !f && (e || g))
                          if (d = f ? fi(d) : gi(a, d))
                              return e = n(c, "isTrusted"),
                              {
                                  ii: b,
                                  ni: f,
                                  ji: d,
                                  isTrusted: e,
                                  Wd: c.Wd
                              }
                  }
              }
          }
          function hi(a, c, b, d, e) {
              if (!rd(a))
                  return C;
              var f = []
                , g = la(a);
              Ac(a)(bb(C, function() {
                  var h = ib(c, a.document.body);
                  e && (h = ka(e, h));
                  x(function(l) {
                      f.push(g.F(l, b, d))
                  }, h);
                  if (La("MutationObserver", a.MutationObserver)) {
                      var k = c.toUpperCase();
                      h = new a.MutationObserver(D(a, "de.m", function(l) {
                          x(function(m) {
                              var p = m.addedNodes;
                              m = m.removedNodes;
                              p && p.length && x(function(q) {
                                  qe(a, q, function(r) {
                                      r.nodeName !== k || e && !e(r) || f.push(g.F(r, b, d))
                                  }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                              }, p);
                              m && m.length && x(function(q) {
                                  qe(a, q, function(r) {
                                      r.nodeName !== k || e && !e(r) || g.Ab(r, b, d)
                                  }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                              }, m)
                          }, l)
                      }));
                      h.observe(a.document.body, {
                          childList: !0,
                          subtree: !0
                      });
                      f.push(I(h.disconnect, h))
                  }
              }));
              return E([va, f], x)
          }
          function ao(a) {
              var c = n(a, "speechSynthesis.getVoices");
              if (c)
                  return a = I(c, a.speechSynthesis),
                  lc(function(b) {
                      return z(u(b, n), bo)
                  }, a())
          }
          function co(a, c, b) {
              return G("x", z(w(Q, Ma("concat", "" + a), u(b, n)), c))
          }
          function eo(a, c) {
              var b = c.Sg;
              if (!fo(a, b))
                  return "";
              var d = [];
              a: {
                  var e = go(a, b);
                  try {
                      var f = E(e, w)()();
                      break a
                  } catch (F) {
                      if ("ccf" === F.message) {
                          f = null;
                          break a
                      }
                      Va(F)
                  }
                  f = void 0
              }
              if (Ra(f))
                  var g = "";
              else
                  try {
                      g = f.toDataURL()
                  } catch (F) {
                      g = ""
                  }
              (f = g) && d.push(f);
              var h = b.getContextAttributes();
              try {
                  var k = pa(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
              } catch (F) {
                  k = []
              }
              k = G(";", k);
              f = Df(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
              e = Df(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
              g = b.getParameter(b.ALPHA_BITS);
              h = h && h.antialias ? "yes" : "no";
              var l = b.getParameter(b.BLUE_BITS)
                , m = b.getParameter(b.DEPTH_BITS)
                , p = b.getParameter(b.GREEN_BITS)
                , q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
              if (q) {
                  var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                  0 === r && (r = 2)
              }
              r = {
                  Kj: k,
                  "webgl aliased line width range": f,
                  "webgl aliased point size range": e,
                  "webgl alpha bits": g,
                  "webgl antialiasing": h,
                  "webgl blue bits": l,
                  "webgl depth bits": m,
                  "webgl green bits": p,
                  "webgl max anisotropy": q ? r : null,
                  "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                  "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                  "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                  "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                  "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                  "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                  "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                  "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                  "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                  "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                  "webgl max viewport dims": Df(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                  "webgl red bits": b.getParameter(b.RED_BITS),
                  "webgl renderer": b.getParameter(b.RENDERER),
                  "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                  "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                  "webgl vendor": b.getParameter(b.VENDOR),
                  "webgl version": b.getParameter(b.VERSION)
              };
              Ef(d, r, ": ");
              a: {
                  try {
                      var t = b.getExtension("WEBGL_debug_renderer_info");
                      if (t) {
                          var y = {
                              "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                              "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                          };
                          break a
                      }
                  } catch (F) {}
                  y = {}
              }
              Ef(d, y);
              if (!b.getShaderPrecisionFormat)
                  return G("~", d);
              Ef(d, ho(b));
              return G("~", d)
          }
          function Ef(a, c, b) {
              void 0 === b && (b = ":");
              x(function(d) {
                  return a.push("" + d[0] + b + d[1])
              }, za(c))
          }
          function io(a, c, b, d) {
              c = d.C("cc");
              d = E(["cc", ""], d.D);
              if (c) {
                  var e = c.split("&");
                  c = e[0];
                  (e = (e = e[1]) && Da(e)) && 1440 < ja(a)(rb) - e ? d() : b.D("cc", c)
              } else
                  Fa(0)(c) || d()
          }
          function jo(a, c, b, d) {
              return na(c, function(e) {
                  if (!sd(e) && !re(a))
                      if (e = d.C("zzlc"),
                      T(e) || Ra(e) || "na" === e) {
                          var f = qb(a);
                          if (f && (e = Bc(a))) {
                              var g = f("iframe");
                              A(g.style, {
                                  display: "none",
                                  width: "1px",
                                  height: "1px",
                                  visibility: "hidden"
                              });
                              f = Ff(a, 68);
                              var h = Gf(a, 79);
                              g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + vf("L21ldHJpa2EvenpsYy5odG1s");
                              e.appendChild(g);
                              var k = 0
                                , l = la(a).F(a, ["message"], D(a, "zz.m", function(m) {
                                  (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (hc(g),
                                  m = m.substr(8),
                                  d.D("zzlc", m),
                                  b.D("zzlc", m),
                                  l(),
                                  ma(a, k))
                              }));
                              k = W(a, w(l, u(g, hc)), 3E3)
                          }
                      } else
                          b.D("zzlc", e)
              })
          }
          function ko(a, c, b) {
              var d, e;
              c = jb(u(a, n), lo);
              c = T(c) ? null : n(a, c);
              if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                  var f = new c((d = {},
                  d.iceServers = [],
                  d));
                  a = n(f, "createDataChannel");
                  O(a) && (I(a, f, "y.metrika")(),
                  a = n(f, "createOffer"),
                  O(a) && !a.length && (a = I(a, f)(),
                  d = n(a, "then"),
                  O(d) && I(d, a, function(g) {
                      var h = n(f, "setLocalDescription");
                      O(h) && I(h, f, g, C, C)()
                  })(),
                  A(f, (e = {},
                  e.onicecandidate = function() {
                      var g, h = n(f, "close");
                      if (O(h)) {
                          h = I(h, f);
                          try {
                              var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                          } catch (l) {
                              f.onicecandidate = C;
                              "closed" !== f.iceConnectionState && h();
                              return
                          }
                          k && 0 < k.length && (g = mc(k[1]),
                          b.D("pp", g));
                          f.onicecandidate = C;
                          h()
                      }
                  }
                  ,
                  e))))
              }
          }
          function mo(a, c, b) {
              var d, e = td(a, c);
              if (e) {
                  e.$.F(["gpu-get"], function() {
                      var h;
                      return h = {},
                      h.type = "gpu-get",
                      h.pu = b.C("pu"),
                      h
                  });
                  var f = n(a, "opener");
                  if (f) {
                      var g = W(a, E([a, c, b], ii), 200, "pu.m");
                      e.ye(f, (d = {},
                      d.type = "gpu-get",
                      d), function(h, k) {
                          var l = n(k, "pu");
                          l && (ma(a, g),
                          b.D("pu", l))
                      })
                  } else
                      ii(a, c, b)
              }
          }
          function ii(a, c, b) {
              var d = n(a, "location.host");
              a = ud(a, c);
              b.D("pu", "" + mc(d) + a)
          }
          function no(a) {
              a = qb(a);
              if (!a)
                  return "";
              a = a("video");
              try {
                  var c = Ma("canPlayType", a)
                    , b = lc(function(d) {
                      return z(w(Q, Ma("concat", d + "; codecs=")), oo)
                  }, ji);
                  return z(c, ji.concat(b))
              } catch (d) {
                  return "canPlayType"
              }
          }
          function po(a) {
              var c = n(a, "matchMedia");
              if (c && La("matchMedia", c)) {
                  var b = Ma("matchMedia", a);
                  return N(function(d, e) {
                      d[e] = b("(" + e + ")");
                      return d
                  }, {}, qo)
              }
          }
          function ho(a) {
              return N(function(c, b) {
                  var d = b[0]
                    , e = b[1];
                  c[d + " precision"] = n(e, "precision") || "n";
                  c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                  c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                  return c
              }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
          }
          function go(a, c) {
              return [function() {
                  var b = c.createBuffer();
                  b && c.getParameter && La("getParameter", c.getParameter) || Hf();
                  c.bindBuffer(c.ARRAY_BUFFER, b);
                  var d = new a.Float32Array(ro);
                  c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                  b.ri = 3;
                  b.Ai = 3;
                  d = c.createProgram();
                  var e = c.createShader(c.VERTEX_SHADER);
                  d && e || Hf();
                  return {
                      te: d,
                      vj: e,
                      uj: b
                  }
              }
              , function(b) {
                  var d = b.te
                    , e = b.vj;
                  c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                  c.compileShader(e);
                  c.attachShader(d, e);
                  (d = c.createShader(c.FRAGMENT_SHADER)) || Hf();
                  return A(b, {
                      Bh: d
                  })
              }
              , function(b) {
                  var d = b.te
                    , e = b.Bh;
                  c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                  c.compileShader(e);
                  c.attachShader(d, e);
                  c.linkProgram(d);
                  c.useProgram(d);
                  return b
              }
              , function(b) {
                  var d = b.te;
                  b = b.uj;
                  d.tj = c.getAttribLocation(d, "attrVertex");
                  d.Ci = c.getUniformLocation(d, "uniformOffset");
                  c.enableVertexAttribArray(d.ik);
                  c.vertexAttribPointer(d.tj, b.ri, c.FLOAT, !1, 0, 0);
                  c.uniform2f(d.Ci, 1, 1);
                  c.drawArrays(c.TRIANGLE_STRIP, 0, b.Ai);
                  return c.canvas
              }
              ]
          }
          function fo(a, c) {
              if (!O(a.Float32Array))
                  return !1;
              var b = n(c, "canvas");
              if (!b || !La("toDataUrl", b.toDataURL))
                  return !1;
              try {
                  c.createBuffer()
              } catch (d) {
                  return !1
              }
              return !0
          }
          function Df(a, c) {
              c.clearColor(0, 0, 0, 1);
              c.enable(c.DEPTH_TEST);
              c.depthFunc(c.LEQUAL);
              c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
              return "[" + n(a, "0") + ", " + n(a, "1") + "]"
          }
          function so(a, c) {
              if (n(c, "settings.ins")) {
                  var b = J(a);
                  if (!b.C("scip")) {
                      var d = Wa(a)
                        , e = ja(a)(rb)
                        , f = se(d.C("sci"));
                      if (!(f && 1440 >= e - f)) {
                          f = qa(a, "ci");
                          var g = ["sync.cook.int"]
                            , h = function(l) {
                              l = b.C("scip", "") + l;
                              b.D("scip", l)
                          }
                            , k = u("a", h);
                          b.D("scip", "0");
                          return f({
                              V: {
                                  ha: g,
                                  Qa: 3E3,
                                  gb: !0
                              }
                          }, ["https://an.yandex.ru/sync_cookie"]).then(function(l) {
                              l = n(l.fb, "CookieMatchUrls");
                              if (M(l) && hb(l)) {
                                  h("1");
                                  var m = qa(a, "c");
                                  l = z(function(p, q) {
                                      return m({
                                          V: {
                                              ha: g,
                                              Qa: 3E3
                                          }
                                      }, ["https://" + p])["catch"](w(u("b", h), u("" + q, h)))
                                  }, ka(S, l));
                                  return K.all(l)
                              }
                              k()
                          }, k).then(function() {
                              var l = b.C("scip");
                              !l || ab(l, "a") || ab(l, "b") || (d.D("sci", e),
                              h("2"))
                          }, C)
                      }
                  }
              }
          }
          function ki(a) {
              return {
                  O: function(c, b) {
                      if (!c.K)
                          return b();
                      var d = J(a).C("fid");
                      !li && d && (me(c, "fid", d),
                      li = !0);
                      return b()
                  }
              }
          }
          function to(a, c) {
              var b = a.document;
              if (H(b.readyState, ["interactive", "complete"]))
                  Tb(a, c);
              else {
                  var d = la(a)
                    , e = d.F
                    , f = d.Ab
                    , g = function() {
                      f(b, ["DOMContentLoaded"], g);
                      f(a, ["load"], g);
                      c()
                  };
                  e(b, ["DOMContentLoaded"], g);
                  e(a, ["load"], g)
              }
          }
          function If(a) {
              return {
                  O: function(c, b) {
                      var d = c.K;
                      if (d) {
                          var e = J(a).C("adBlockEnabled");
                          e && d.D("adb", e)
                      }
                      b()
                  }
              }
          }
          function uo(a) {
              var c = D(a, "i.clch", vo);
              la(a).F(a.document, ["click"], u(a, c), {
                  passive: !1
              });
              return function(b) {
                  var d = ua.Na
                    , e = a.Ya[ua.fc]
                    , f = !!e._informer;
                  e._informer = A({
                      domain: "metrika-informer.com"
                  }, b);
                  f || ld(a, {
                      src: d + "//metrika-informer.com/metrika/informer.js"
                  })
              }
          }
          function wo(a, c) {
              var b = Wa(a)
                , d = b.C
                , e = b.D;
              if ("" === d("cc")) {
                  e("cc", 0);
                  var f = ja(a)
                    , g = J(a);
                  qa(a, "6", c)({
                      V: {
                          gb: !0,
                          cd: !1
                      }
                  }, ["https://mc.yandex.md/cc"]).then(function(h) {
                      h = n(h.fb, "c");
                      e("cc", h + "&" + f(rb));
                      g.D("cc", h)
                  })["catch"](function(h) {
                      var k = f(rb);
                      e("cc", "&" + k);
                      Oc(a, "cc", h)
                  })
              }
          }
          function te(a, c) {
              if (!c)
                  return !1;
              var b = X(a);
              return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
          }
          function xo(a, c) {
              return na(c, function(b) {
                  var d = n(b, "settings.dr");
                  return {
                      jh: yo(a, d),
                      isEnabled: n(b, "settings.auto_goals")
                  }
              })
          }
          function zo(a, c, b, d, e) {
              b = Jf(a.document.body, b);
              d = Jf(a.document.body, d);
              H(e.target, [b, d]) && Kf(a, c)
          }
          function mi(a, c, b, d) {
              (b = Ao(a, d, b)) && Kf(a, c, b)
          }
          function ni(a, c) {
              var b = oi(a, c);
              return Bo(a, b)
          }
          function oi(a, c) {
              var b = Jf(a.document.body, c);
              return b ? Co(a, b) : ""
          }
          function Kf(a, c, b) {
              if (c = Ka(a, c))
                  a = ue(["dr", b || "" + Za(a, 10, 99)]),
                  c.params(ue(["__ym", a]))
          }
          function Jf(a, c) {
              var b = null;
              try {
                  b = c ? jc(c, a) : b
              } catch (d) {}
              return b
          }
          function pi(a) {
              a = Ha(vf(a));
              return z(function(c) {
                  c = c.charCodeAt(0).toString(2);
                  return qi("0", 8, c)
              }, a)
          }
          function Co(a, c) {
              if (!c)
                  return "";
              var b = []
                , d = n(a, "document");
              qe(a, c, function(e) {
                  if (e.nodeType === d.TEXT_NODE)
                      var f = e.textContent;
                  else
                      e instanceof a.HTMLImageElement ? f = e.alt : e instanceof a.HTMLInputElement && (f = e.value);
                  (f = f && cb(f)) && b.push(f)
              });
              return 0 === b.length ? "" : G(" ", b)
          }
          function Do(a, c, b) {
              a = Pa(b);
              b = a[1];
              "track" === a[0] && c({
                  version: "0",
                  oc: b
              })
          }
          function Eo(a, c, b) {
              if (b) {
                  var d = b.version;
                  (b = n(Fo, d + "." + b.oc)) && (c && H(b, Go) || a("ym-" + b + "-" + d))
              }
          }
          function Ho(a, c, b) {
              if ("rt" === b)
                  return "https://" + ri(a, c) + ".mc.yandex.ru/watch/3/1";
              if ("mf" === b) {
                  b = X(a);
                  b = ve(b.protocol + "//" + b.hostname + b.pathname);
                  c = ud(a, c);
                  var d = "";
                  do
                      d += Za(a);
                  while (d.length < c.length);
                  d = d.slice(0, c.length);
                  a = "";
                  for (var e = 0; e < c.length; e += 1)
                      a += (c.charCodeAt(e) + d.charCodeAt(e) - 96) % 10;
                  a = [d, a];
                  return "https://adstat.yandex.ru/track?service=metrika&id=" + a[1] + "&mask=" + a[0] + "&ref=" + b
              }
          }
          function Io(a, c, b) {
              var d, e = Lf(c).Qb;
              return qa(a, "pi", c)({
                  K: Ia((d = {},
                  d[e] = 1,
                  d))
              }, [b])
          }
          function Jo(a, c, b) {
              return new K(function(d, e) {
                  if (si(a, we, "isp")) {
                      var f = C
                        , g = function(h) {
                          ("1" === h ? d : e)();
                          f();
                          ti(we, "isp")
                      };
                      f = la(a).F(a, ["message"], E([b, g], D(a, "isp.stat.m", Ko)));
                      W(a, g, 1500)
                  } else
                      e()
              }
              )
          }
          function Ko(a, c, b) {
              var d = n(b, "data");
              if (S(d)) {
                  var e = d.split("*");
                  d = e[0];
                  var f = e[1];
                  e = e[2];
                  "sc.frame" === d && b.source ? b.source.postMessage("sc.images*" + a, "*") : "sc.image" === d && f === a && c(e)
              }
          }
          function Lo(a, c) {
              var b = Wa(a)
                , d = "wv2rf:" + L(c)
                , e = c.dc
                , f = Mf(a)
                , g = b.C(d)
                , h = c.mj;
              return T(f) || Ra(g) ? Ba(function(k, l) {
                  na(c, function(m) {
                      var p = !!n(m, "settings.webvisor.forms");
                      p = !n(m, "settings.x3") && p;
                      f = Mf(a) || n(m, "settings.eu");
                      b.D(d, tb(p));
                      l({
                          dc: e,
                          Ud: !!f,
                          Qf: p,
                          vg: h
                      })
                  })
              }) : Nf({
                  dc: e,
                  Ud: f,
                  Qf: !!Da(g),
                  vg: h
              })
          }
          function Mo() {
              var a = N(function(c, b) {
                  c[b[0]] = {
                      jd: 0,
                      Qg: 1 / b[1]
                  };
                  return c
              }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove", .5132], ["scroll", .4795], ["selection", .0109], ["touchcancel", 2E-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]);
              return {
                  Mg: function(c) {
                      if (c.length)
                          return {
                              type: "activity",
                              data: N(function(b, d) {
                                  var e = a[d];
                                  return Math.round(b + e.jd * e.Qg)
                              }, 0, ha(a))
                          }
                  },
                  Di: function(c) {
                      c && (c = a[c.data.type || c.event]) && (c.jd += 1)
                  }
              }
          }
          function No(a) {
              return {
                  Dh: function() {
                      var c = a.document.querySelector("base[href]");
                      return c ? c.getAttribute("href") : null
                  },
                  Fh: function() {
                      if (a.document.doctype) {
                          var c = A({
                              name: "html",
                              publicId: "",
                              systemId: ""
                          }, a.document.doctype)
                            , b = c.publicId
                            , d = c.systemId;
                          return "<!DOCTYPE " + G("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                      }
                      return null
                  }
              }
          }
          function Oo(a, c, b) {
              var d = vd(a)
                , e = la(a)
                , f = sb(a)
                , g = c.Gd()
                , h = !n(a, "postMessage") || f && !n(a, "parent.postMessage")
                , k = u(d, Q);
              if (h) {
                  if (!g)
                      return W(a, I(d.aa, d, "i", {
                          ya: !1
                      }), 10),
                      {
                          Fd: k,
                          cg: C,
                          stop: C
                      };
                  Va(Sa())
              }
              d.F(["sr"], function(r) {
                  var t, y = ui(a, r.source);
                  y && Of(a, r.source, (t = {},
                  t.type = "\u043d",
                  t.frameId = c.wa().Z(y),
                  t))
              });
              d.F(["sd"], function(r) {
                  var t = r.data;
                  r = r.source;
                  (a === r || ui(a, r)) && d.aa("sdr", {
                      data: t.data,
                      frameId: t.frameId
                  })
              });
              if (f && !g) {
                  var l = !1
                    , m = 0
                    , p = function() {
                      var r;
                      Of(a, a.parent, (r = {},
                      r.type = "sr",
                      r));
                      m = W(a, p, 100, "if.i")
                  };
                  p();
                  var q = function(r) {
                      d.ia(["\u043d"], q);
                      ma(a, m);
                      var t = Ub(a, r.origin).host;
                      l || r.source !== a.parent || !r.data.frameId || "about:blank" !== X(a).host && !H(t, b) || (l = !0,
                      d.aa("i", {
                          frameId: r.data.frameId,
                          ya: !0
                      }))
                  };
                  d.F(["\u043d"], q);
                  W(a, function() {
                      d.ia(["\u043d"], q);
                      ma(a, m);
                      l || (l = !0,
                      d.aa("i", {
                          ya: !1
                      }))
                  }, 2E3, "if.r")
              }
              e = e.F(a, ["message"], function(r) {
                  var t = Vb(a, r.data);
                  t && t.type && H(t.type, Po) && d.aa(t.type, {
                      data: t,
                      source: r.source,
                      origin: r.origin
                  })
              });
              return {
                  Fd: k,
                  cg: function(r) {
                      var t;
                      return Of(a, a.parent, (t = {},
                      t.frameId = c.Gd(),
                      t.data = r,
                      t.type = "sd",
                      t))
                  },
                  stop: e
              }
          }
          function ui(a, c) {
              try {
                  return jb(w(V("contentWindow"), Fa(c)), Ha(a.document.querySelectorAll("iframe")))
              } catch (b) {
                  return null
              }
          }
          function Of(a, c, b) {
              c || Va(Sa());
              a = Ob(a, b);
              c.postMessage(a, "*")
          }
          function vi() {
              return nc() + nc() + "-" + nc() + "-" + nc() + "-" + nc() + "-" + nc() + nc() + nc()
          }
          function nc() {
              return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
          }
          function Qo(a, c) {
              if (S(c))
                  return c;
              var b = a.textContent;
              if (S(b))
                  return b;
              b = a.data;
              if (S(b))
                  return b;
              b = a.nodeValue;
              return S(b) ? b : ""
          }
          function Ro(a, c, b, d, e) {
              void 0 === d && (d = {});
              void 0 === e && (e = Na(c));
              var f = A(N(function(h, k) {
                  h[k.name] = k.value;
                  return h
              }, {}, Ha(c.attributes)), d);
              A(f, So(c, e, f));
              var g = (d = Cb(function(h, k) {
                  var l = k[0]
                    , m = xe(a, c, l, k[1], b, e)
                    , p = m.value;
                  ba(p) ? delete f[l] : f[l] = p;
                  return h || m.sb
              }, !1, za(f))) && Pc(c);
              g && (f.width = g.width,
              f.height = g.height);
              return {
                  sb: d,
                  Ng: f
              }
          }
          function So(a, c, b) {
              var d = {};
              Pf(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
              return d
          }
          function xe(a, c, b, d, e, f) {
              void 0 === f && (f = Na(c));
              var g = {
                  sb: !1,
                  value: d
              };
              if (Pf(c))
                  "value" === b ? !ba(d) && "" !== d && (b = e.Ud,
                  f = e.Qf,
                  e = wd(a, c),
                  f ? (b = Sc(a, c, b),
                  a = b.tb,
                  c = b.kb,
                  b = b.Za,
                  g.sb = !c && (e || a)) : (g.sb = e,
                  b = !(c && oc("ym-record-keys", c))),
                  b || e) && (d = "" + d,
                  g.value = 0 < d.length ? wi("\u2022", d.length) : "") : "checked" === b && H((c.getAttribute("type") || "").toLowerCase(), To) ? g.value = c.checked ? "checked" : null : Uo.test(b) && Qf(a, c) && (g.value = null);
              else if ("IMG" === f && "src" === b)
                  (e = wd(a, c)) ? (g.sb = e,
                  g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
              else if ("A" === f && "href" === b)
                  g.value = d ? "#" : "";
              else if (H(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === pb(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && H(b, ["src", "type"]))
                  g.value = null;
              return g
          }
          function Rf(a, c, b, d) {
              void 0 === d && (d = "wv2");
              return {
                  H: function(e, f) {
                      return D(a, d + "." + b + "." + f, e, void 0, c)
                  }
              }
          }
          function Vo(a, c, b, d, e) {
              function f() {
                  l && l.stop()
              }
              if (!c.Cb)
                  return K.resolve(C);
              var g = qa(a, "4", c)
                , h = {
                  K: Ia()
              }
                , k = new Wo(a,b,function(m, p, q) {
                  if (!g)
                      return K.resolve();
                  var r = "wv-data=" + xd(m, !0)
                    , t = D(a, "m.n.m.s");
                  p = {};
                  p["wv-part"] = "" + q;
                  q = m.length;
                  for (var y = 0, F = 255, R = 255, P, Ca, Ga; q; ) {
                      P = 21 < q ? 21 : q;
                      q -= P;
                      do
                          Ca = "string" === typeof m ? m.charCodeAt(y) : m[y],
                          y += 1,
                          255 < Ca && (Ga = Ca >> 8,
                          Ca &= 255,
                          Ca ^= Ga),
                          F += Ca,
                          R += F;
                      while (--P);
                      F = (F & 255) + (F >> 8);
                      R = (R & 255) + (R >> 8)
                  }
                  m = (F & 255) + (F >> 8) << 8 | (R & 255) + (R >> 8);
                  return g(A({}, h, {
                      V: {
                          ca: r
                      },
                      J: (p["wv-check"] = "" + (65535 === m ? 0 : m),
                      p["wv-type"] = b.type,
                      p)
                  }), c)["catch"](t)
              }
              )
                , l = Xo(a, k, d, e);
              return na(c, function(m) {
                  m && J(a).D("isEU", n(m, "settings.eu"));
                  J(a).C("oo") || l && xi(a, m) && l.start();
                  return f
              })
          }
          function Xo(a, c, b, d) {
              var e = a.document
                , f = []
                , g = la(a)
                , h = ":submit" + Math.random()
                , k = []
                , l = I(c.flush, c)
                , m = oa(function(r, t) {
                  D(a, "hfv." + r, function() {
                      try {
                          var y = t.type
                      } catch (F) {
                          return
                      }
                      y = H(y, d);
                      c.push(t, {
                          type: r
                      });
                      y && l()
                  })()
              })
                , p = D(a, "sfv", function() {
                  var r = b(a)
                    , t = Yo(a);
                  x(function(y) {
                      f.push(g.F(y.target, [y.event], m(y.type)))
                  }, r);
                  x(function(y) {
                      f.push(g.F(y.target, [y.event], D(a, "hff." + y.type + "." + y.event, function(F) {
                          x(Ba({
                              l: a,
                              qa: F,
                              flush: l
                          }), y.R)
                      })))
                  }, t);
                  k = yi(a, "form", e);
                  e.attachEvent && (r = yi(a, "form *", e),
                  x(function(y) {
                      f.push(g.F(y, ["submit"], m("form")))
                  }, k),
                  x(function(y) {
                      Sf(y) && f.push(g.F(y, ["change"], m("formInput")))
                  }, r));
                  x(function(y) {
                      var F = y.submit;
                      if (O(F) || "object" === typeof F && Zo.test("" + F))
                          y[h] = F,
                          y.submit = D(a, "fv", function() {
                              var R = {
                                  target: y,
                                  type: "submit"
                              };
                              m("document")(R);
                              return y[h]()
                          })
                  }, k)
              })
                , q = D(a, "ufv", function() {
                  x(va, f);
                  x(function(r) {
                      r && (r.submit = r[h])
                  }, k);
                  c.flush()
              });
              return {
                  start: p,
                  stop: q
              }
          }
          function $o(a, c) {
              var b = ka(function(e) {
                  return 0 < e.R.length
              }, c)
                , d = zi({
                  target: a.document,
                  type: "document"
              });
              return z(w(Q, d, ap(a)), b)
          }
          function Ai(a, c) {
              var b = a.l
                , d = []
                , e = c.form;
              if (!c[$a] && e) {
                  var f = e.elements;
                  e = e.length;
                  for (var g = 0; g < e; g += 1) {
                      var h = f[g];
                      ye(h) && !h[$a] && xa(d, Cc(b, h))
                  }
              } else
                  xa(d, Cc(b, c));
              return d
          }
          function Tf(a) {
              if (yd) {
                  yd = !1;
                  var c = Db(a.l)
                    , b = [];
                  kb(a.l, b, 15) ? a = [] : (U(b, c),
                  a = b);
                  return a
              }
          }
          function Bi(a) {
              if (!yd) {
                  yd = !0;
                  a = Db(a.l);
                  var c = [];
                  Wb(c, 14);
                  U(c, a);
                  return c
              }
          }
          function bp(a, c, b) {
              var d = c[$a];
              if (d) {
                  a: {
                      var e = Db(a)
                        , f = c[$a];
                      if (0 < f) {
                          var g = [];
                          c = Uf(a, c);
                          var h = Dc[f]
                            , k = c[0] + "x" + c[1]
                            , l = c[2] + "x" + c[3];
                          if (k !== h.Mf) {
                              h.Mf = k;
                              if (kb(a, g, 9)) {
                                  a = [];
                                  break a
                              }
                              U(g, e);
                              U(g, f);
                              U(g, c[0]);
                              U(g, c[1])
                          }
                          if (l !== h.size) {
                              h.size = l;
                              if (kb(a, g, 10)) {
                                  a = [];
                                  break a
                              }
                              U(g, e);
                              U(g, f);
                              U(g, c[2]);
                              U(g, c[3])
                          }
                          if (g.length) {
                              a = g;
                              break a
                          }
                      }
                      a = []
                  }
                  xa(b, a)
              }
              return d
          }
          function Sc(a, c, b) {
              void 0 === b && (b = !1);
              if (!c)
                  return {
                      Za: !1,
                      kb: !1,
                      tb: !1
                  };
              var d = c.getAttribute("type") || c.type;
              if ("button" === d)
                  return {
                      Za: !1,
                      kb: !1,
                      tb: !1
                  };
              var e = ka(Ci, [c.className, c.id, c.name])
                , f = c && oc("ym-record-keys", c);
              d = d && H(d, Di) || Qa(lb(cp), e);
              var g;
              (g = d) || (g = c.placeholder,
              g = Qa(lb(dp), e) || Ci(g) && ep.test(g || ""));
              e = g;
              return {
                  Za: !f && (Vf(a, c) || e && b || e && !d && !b),
                  kb: f,
                  tb: e
              }
          }
          function Vf(a, c) {
              return Qf(a, c) || zd(a, c) ? !0 : wd(a, c)
          }
          function Ci(a) {
              return !!(a && 2 < a.length)
          }
          function Pf(a) {
              try {
                  var c = Na(a);
                  if (H(c, Wf)) {
                      if ("INPUT" === c) {
                          var b = a.type;
                          return !b || H(b.toLocaleLowerCase(), fp)
                      }
                      return !0
                  }
              } catch (d) {}
              return !1
          }
          function Ei(a, c) {
              return c && oc("(ym-disable-submit|-metrika-noform)", c)
          }
          function gp(a, c) {
              return G("", z(function(b) {
                  return a.isNaN(b) ? hp.test(b) ? (b = b.toUpperCase() === b ? ip : jp,
                  String.fromCharCode(Za(a, b[0], b[1]))) : b : "" + Za(a, 0, 9)
              }, c.split("")))
          }
          function wd(a, c) {
              if (ba(c))
                  return !1;
              if (Xf(c)) {
                  var b = c.parentNode;
                  return (ba(b) ? 0 : 11 === b.nodeType) ? !1 : wd(a, c.parentNode)
              }
              b = Fi(a);
              if (!b)
                  return !1;
              var d = b.call(c, ".ym-hide-content,.ym-hide-content *");
              return d && b.call(c, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
          }
          function xi(a, c) {
              var b = Ec(a)
                , d = b.C("visorc");
              H(d, ["w", "b"]) || (d = "");
              Gi(a) && Hi(a, Ad, "visorc") && !kp.test(ub(a) || "") || (d = "b");
              var e = n(c, "settings.webvisor.recp");
              if (!a.isFinite(e) || 0 > e || 1 < e)
                  d = "w";
              d || (d = J(a).C("hitId") % 1E4 / 1E4 < e ? "w" : "b");
              b.D("visorc", d, 30);
              return "w" === d
          }
          function Ii(a, c, b) {
              if (Ji.isEnabled(a))
                  return new Ji(a,c);
              if (Ki.isEnabled(a))
                  return new Ki(a,b)
          }
          function Li(a, c) {
              var b = c[1][3]
                , d = 0
                , e = new a.Uint8Array(c[0]);
              return kc([b], function(f, g) {
                  if (!f)
                      return e;
                  f[0](a, f[2], e, d);
                  d += f[1];
                  g.push(f[3]);
                  return e
              })
          }
          function Mi(a, c, b) {
              a = c(b);
              c = [C, 0, 0];
              var d = [0, c, c, void 0];
              return kc(a, function(e, f) {
                  var g = e[0]
                    , h = e[1]
                    , k = e[2];
                  if (0 === g)
                      return k(d, h),
                      d;
                  if (void 0 === h || null === h)
                      return d;
                  var l = g >> 3;
                  if (g & 1)
                      Fc(d, Y(l)),
                      h = k(h),
                      l & 2 && Fc(d, Y(h[1])),
                      Fc(d, h);
                  else if (g & 4)
                      for (g = h.length - 1; 0 <= g; ) {
                          var m = k(h[g]);
                          m.push([0, 0, Yf]);
                          m.push([0, Y(l), Fc]);
                          m.unshift([0, 0, Zf]);
                          xa(f, m);
                          --g
                      }
                  else if (g & 2) {
                      k = e[2];
                      var p = e[3]
                        , q = e[4]
                        , r = e[5]
                        , t = ha(h);
                      for (g = t.length - 1; 0 <= g; )
                          m = t[g],
                          m = [[0, 0, Zf], [q, h[m], r], [k, m, p], [0, 0, Yf], [0, Y(l), Fc]],
                          xa(f, m),
                          --g
                  } else
                      m = k(h),
                      m.push([0, 0, Yf]),
                      m.push([0, Y(l), Fc]),
                      m.unshift([0, 0, Zf]),
                      xa(f, m);
                  return d
              })
          }
          function Zf(a) {
              var c = a[1]
                , b = a[0]
                , d = a[2];
              a[3] ? (a[0] = a[3][0],
              a[1] = a[3][1],
              a[2] = a[3][2],
              a[3] = a[3][3]) : (a[0] = 0,
              a[1] = [C, 0, 0],
              a[2] = a[1]);
              Fc(a, Y(b));
              b && (a[2][3] = c[3],
              a[2] = d,
              a[0] += b)
          }
          function Yf(a) {
              a[3] = [a[0], a[1], a[2], a[3]];
              a[1] = [C, 0, 0];
              a[2] = a[1];
              a[0] = 0
          }
          function Fc(a, c) {
              a[0] += c[1];
              a[2][3] = c;
              a[2] = c
          }
          function Ni(a) {
              return [[1857, a.partsTotal, Y], [1793, a.activity, Y], [1744, a.textChangeMutation, lp], [1680, a.removedNodesMutation, mp], [1616, a.addedNodesMutation, np], [1552, a.attributesChangeMutation, op], [1488, a.publishersHeader, pp], [1424, a.articleInfo, qp], [1360, a.focusEvent, rp], [1296, a.fatalErrorEvent, sp], [1232, a.deviceRotationEvent, tp], [1168, a.keystrokesEvent, up], [1104, a.resizeEvent, vp], [1040, a.zoomEvent, wp], [976, a.touchEvent, xp], [912, a.changeEvent, yp], [848, a.selectionEvent, zp], [784, a.scrollEvent, Ap], [720, a.mouseEvent, Bp], [656, a.dk, Cp], [592, a.page, Dp], [513, a.end, Gc], [449, a.partNum, Y], [401, a.chunk, Ep], [257, a.frameId, ta], [193, a.event, Y], [129, a.type, Y], [65, a.stamp, Y]]
          }
          function Fp(a) {
              return [[84, a.Qi, Ni]]
          }
          function Gp(a) {
              return [[129, a.position, ta], [81, a.name, ea]]
          }
          function Hp(a) {
              return [[81, a.name, ea]]
          }
          function Ip(a) {
              return [[81, a.name, ea]]
          }
          function qp(a) {
              return [[593, a.updateDate, ea], [532, a.rubric, Gp], [449, a.chars, ta], [401, a.publicationDate, ea], [340, a.topics, Hp], [276, a.authors, Ip], [209, a.pageTitle, ea], [145, a.pageUrlCanonical, ea], [65, a.id, Y]]
          }
          function Jp(a) {
              return [[513, a.chars, ta], [489, a.maxScrolled, Bd], [385, a.involvedTime, ta], [321, a.height, ta], [257, a.width, ta], [193, a.y, ta], [129, a.x, ta], [65, a.id, Y]]
          }
          function pp(a) {
              return [[129, a.involvedTime, ta], [84, a.articleMeta, Jp]]
          }
          function rp(a) {
              return [[65, a.target, ta]]
          }
          function sp(a) {
              return [[209, a.stack, ea], [145, a.oh, ea], [81, a.code, ea]]
          }
          function tp(a) {
              return [[193, a.orientation, ta], [129, a.height, Y], [65, a.width, Y]]
          }
          function up(a) {
              return [[84, a.keystrokes, Kp]]
          }
          function Kp(a) {
              return [[273, a.modifier, ea], [193, a.isMeta, Gc], [145, a.key, ea], [65, a.id, Y]]
          }
          function vp(a) {
              return [[257, a.pageHeight, Y], [193, a.pageWidth, Y], [129, a.height, Y], [65, a.width, Y]]
          }
          function wp(a) {
              return [[193, a.y, ta], [129, a.x, ta], [105, a.level, Bd]]
          }
          function xp(a) {
              return [[129, a.target, ta], [84, a.touches, Lp]]
          }
          function Lp(a) {
              return [[297, a.force, Bd], [233, a.y, Bd], [169, a.x, Bd], [81, a.id, ea]]
          }
          function yp(a) {
              return [[257, a.target, ta], [193, a.hidden, Gc], [129, a.checked, Gc], [81, a.value, ea]]
          }
          function zp(a) {
              return [[257, a.endNode, Y], [193, a.startNode, Y], [129, a.end, ta], [65, a.start, ta]]
          }
          function Ap(a) {
              return [[257, a.target, ta], [193, a.page, Gc], [129, a.y, ta], [65, a.x, ta]]
          }
          function Bp(a) {
              return [[193, a.target, ta], [129, a.y, Y], [65, a.x, Y]]
          }
          function Cp(a) {
              return [[148, a.changes, Mp], [65, a.target, ta]]
          }
          function Mp(a) {
              return [[193, a.index, Y], [145, a.op, ea], [81, a.style, ea]]
          }
          function lp(a) {
              return [[209, a.value, ea], [129, a.index, Y], [65, a.target, Y]]
          }
          function mp(a) {
              return [[129, a.index, Y], [69, a.nodes, ta]]
          }
          function np(a) {
              return [[129, a.index, Y], [84, a.nodes, Oi]]
          }
          function op(a) {
              return [[210, a.attributes, 81, ea, 145, ea], [129, a.index, Y], [65, a.target, Y]]
          }
          function Dp(a) {
              return [[852, a.content, Oi], [785, a.tabId, ea], [705, a.recordStamp, Np], [656, a.location, Op], [592, a.viewport, Pi], [528, a.screen, Pi], [449, a.hasBase, Gc], [401, a.base, ea], [337, a.referrer, ea], [273, a.ua, ea], [209, a.address, ea], [145, a.title, ea], [81, a.doctype, ea]]
          }
          function Op(a) {
              return [[209, a.path, ea], [145, a.protocol, ea], [81, a.host, ea]]
          }
          function Pi(a) {
              return [[129, a.height, ta], [65, a.width, ta]]
          }
          function Oi(a) {
              return [[513, a.hidden, Gc], [449, a.prev, Y], [385, a.next, Y], [337, a.content, ea], [257, a.parent, Y], [210, a.attributes, 81, ea, 145, ea], [145, a.name, ea], [65, a.id, Y]]
          }
          function ea(a) {
              var c = Pp({}, a, [], 0);
              return c ? [Qp, c, a] : [Qi, 0, 0]
          }
          function Ep(a) {
              return [Rp, a.length, a]
          }
          function Gc(a) {
              return [Qi, 1, a ? 1 : 0]
          }
          function Np(a) {
              a = Ri(a);
              var c = a[0]
                , b = a[1]
                , d = (b >>> 28 | c << 4) >>> 0;
              c >>>= 24;
              return [Si, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
          }
          function Bd(a) {
              return [Sp, 4, a]
          }
          function ta(a) {
              return 0 > a ? [Si, 10, Ri(a)] : Y(a)
          }
          function Y(a) {
              return [Tp, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
          }
          function Tp(a, c, b, d) {
              for (a = c; 127 < a; )
                  b[d++] = a & 127 | 128,
                  a >>>= 7;
              b[d] = a
          }
          function Qi(a, c, b, d) {
              b[d] = c
          }
          function Rp(a, c, b, d) {
              for (a = 0; a < c.length; ++a)
                  b[d + a] = c[a]
          }
          function Ti(a) {
              return function(c, b, d, e) {
                  for (var f, g = 0, h = 0; h < b.length; ++h)
                      if (c = b.charCodeAt(h),
                      128 > c)
                          a ? g += 1 : d[e++] = c;
                      else {
                          if (2048 > c) {
                              if (a) {
                                  g += 2;
                                  continue
                              }
                              d[e++] = c >> 6 | 192
                          } else {
                              if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h + 1)) & 64512)) {
                                  if (a) {
                                      g += 4;
                                      continue
                                  }
                                  c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                  ++h;
                                  d[e++] = c >> 18 | 240;
                                  d[e++] = c >> 12 & 63 | 128
                              } else {
                                  if (a) {
                                      g += 3;
                                      continue
                                  }
                                  d[e++] = c >> 12 | 224
                              }
                              d[e++] = c >> 6 & 63 | 128
                          }
                          d[e++] = c & 63 | 128
                      }
                  return a ? g : e
              }
          }
          function Sp(a, c, b, d) {
              return Up(a)(a, c, b, d)
          }
          function Vp(a, c, b, d) {
              var e = 0 > c ? 1 : 0;
              e && (c = -c);
              if (0 === c)
                  Cd(0 < 1 / c ? 0 : 2147483648, b, d);
              else if (a.isNaN(c))
                  Cd(2143289344, b, d);
              else if (3.4028234663852886E38 < c)
                  Cd((e << 31 | 2139095040) >>> 0, b, d);
              else if (1.1754943508222875E-38 > c)
                  Cd((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>> 0, b, d);
              else {
                  var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                  Cd((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
              }
          }
          function Cd(a, c, b) {
              c[b] = a & 255;
              c[b + 1] = a >>> 8 & 255;
              c[b + 2] = a >>> 16 & 255;
              c[b + 3] = a >>> 24
          }
          function Si(a, c, b, d) {
              a = c[0];
              for (c = c[1]; a; )
                  b[d++] = c & 127 | 128,
                  c = (c >>> 7 | a << 25) >>> 0,
                  a >>>= 7;
              for (; 127 < c; )
                  b[d++] = c & 127 | 128,
                  c >>>= 7;
              b[d++] = c
          }
          function Ri(a) {
              if (!a)
                  return [0, 0];
              var c = 0 > a;
              c && (a = -a);
              var b = a >>> 0;
              a = (a - b) / 4294967296 >>> 0;
              c && (a = ~a >>> 0,
              b = ~b >>> 0,
              4294967295 < ++b && (b = 0,
              4294967295 < ++a && (a = 0)));
              return [a, b]
          }
          function Ui(a, c, b, d) {
              var e, f = b.J;
              f.wmode = "0";
              f["wv-hit"] = f["wv-hit"] || "" + Hc(a);
              f["page-url"] = f["page-url"] || X(a).href;
              d && (f[d] = f[d] || "" + Za(a));
              a = {
                  ja: {
                      Da: "webvisor/" + c.id
                  },
                  V: A(b.V || {}, {
                      bb: (e = {},
                      e["Content-Type"] = "text/plain",
                      e),
                      bd: "POST"
                  }),
                  J: f
              };
              A(b, a)
          }
          function Wp(a, c) {
              return na(c, function(b) {
                  var d = J(a)
                    , e = d.C
                    , f = u("dSync", d.D);
                  L(c);
                  if (e("dSync", !1))
                      f(1);
                  else
                      return f(!0),
                      Vi(a, b, {
                          ib: c,
                          Qb: "s",
                          $d: "ds",
                          Xc: f,
                          cj: function(g, h, k) {
                              var l = g.fb;
                              g = g.host;
                              if (n(l, "settings"))
                                  return Va(Sa("ds.e"));
                              h = h(ca) - k;
                              k = g[1];
                              var m, p;
                              l = Ia((m = {},
                              m.di = l,
                              m.dit = h,
                              m.dip = k,
                              m));
                              m = (p = {},
                              p["page-url"] = X(a).href,
                              p);
                              return qa(a, "S", Wi)({
                                  K: l,
                                  J: m
                              }, Wi).then(u(10, f), D(a, "ds.rs"))
                          }
                      })
              })
          }
          function Vi(a, c, b) {
              var d, e = b.ib, f = b.Xc;
              f = void 0 === f ? C : f;
              var g = ja(a)
                , h = Xp(a, c.userData, e)
                , k = Yp(a)
                , l = w(Xi, E([Zp, $p], ze))(a)
                , m = n(c, "settings.sbp");
              b.Xc = f;
              m && (b.data = A({}, m, (d = {},
              d.c = e.id,
              d)));
              return k.length ? aq(a, g, h, c, l, b).then(function() {
                  return bq(a, k, h, g, l, b)
              }, C) : (f(2),
              K.resolve())
          }
          function Yp(a) {
              var c = Ae(a);
              a = w(Yi, yc(["iPhone", "iPad"]))(a);
              return c ? cq : a ? dq : []
          }
          function bq(a, c, b, d, e, f) {
              e = f.cj;
              var g = void 0 === e ? C : e
                , h = f.$d;
              e = f.Xc;
              var k = void 0 === e ? C : e
                , l = d(ca);
              return eq(a, c, f)(bb(function(m) {
                  k(6);
                  x(function(p) {
                      p && Oc(a, h + ".s", p)
                  }, m);
                  m = d(rb);
                  b.D(h, m).then(u(7, k))
              }, function(m) {
                  k(8);
                  b.D(h, d(rb)).then(u(9, k));
                  g(m, d, l)
              }))
          }
          function aq(a, c, b, d, e, f) {
              var g = f.$d
                , h = f.ib
                , k = f.Xc;
              return new K(function(l, m) {
                  var p = b.C(g, 0);
                  p = parseInt("" + p, 10);
                  return c(rb) - p <= e.og ? (k(3),
                  m()) : fq(a) ? l(void 0) : sd(d) ? (k(4),
                  m()) : l(gq(a, h)["catch"](w(Tc(u(5, k)), Va)))
              }
              )
          }
          function eq(a, c, b) {
              var d = b.Qb
                , e = b.data
                , f = qa(a, d, b.ib);
              a = A({}, Zi);
              e && A(a.J, e);
              return hq(z(function(g) {
                  return iq(f(A({
                      V: {
                          cd: !1,
                          Sc: !0
                      }
                  }, Zi), z(function(h) {
                      var k = h[1]
                        , l = h[2];
                      h = G("", z(function(m) {
                          return String.fromCharCode(m.charCodeAt(0) + 10)
                      }, h[0].split("")));
                      return "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + jq[d]
                  }, g)).then(function(h) {
                      return A({}, h, {
                          host: g[h.xg]
                      })
                  }))
              }, c))
          }
          function Xp(a, c, b) {
              var d = c || {}
                , e = qa(a, "u", b)
                , f = Wa(a);
              return {
                  C: function(g, h) {
                      return T(d[g]) ? f.C(g, h) : d[g]
                  },
                  D: function(g, h) {
                      var k, l = "" + h;
                      d[g] = l;
                      f.D(g, l);
                      return e({
                          J: (k = {},
                          k.key = g,
                          k.value = l,
                          k)
                      }, [ua.Na + "//" + Xb + "/user_storage_set"], {})["catch"](D(a, "u.d.s.s"))
                  }
              }
          }
          function kq(a, c) {
              try {
                  var b = c[0];
                  var d = b[1]
              } catch (e) {
                  return function() {
                      return K.resolve()
                  }
              }
              return function(e) {
                  var f, g = (f = {},
                  f["browser-info"] = lq,
                  f["page-url"] = a.location && "" + a.location.href,
                  f);
                  return d && (e = Ob(a, e)) ? d(mq, {
                      cb: g,
                      ha: [],
                      ca: "site-info=" + ve(e)
                  })["catch"](C) : K.resolve()
              }
          }
          function nq(a, c) {
              var b = id(function(d, e) {
                  return d[1].ea > e[1].ea ? 1 : -1
              }, za(ce));
              b = z(function(d) {
                  var e = d[0]
                    , f = d[1].Xa;
                  d = fa(c, e) && !ba(c[e]);
                  e = c[e] !== (f || Q)(void 0);
                  return tb(d && e)
              }, b);
              return Be(G("", b))
          }
          function oq(a) {
              if (Dd(a))
                  return null;
              var c = pq(a)
                , b = c.Pf;
              T(b) && (c.Pf = null,
              qq(a).then(function(d) {
                  c.Pf = d
              }));
              return b ? 1 : null
          }
          function rq(a, c, b) {
              b = b.J;
              if ((void 0 === b ? {} : b).nohit)
                  return null;
              a = Ed(a);
              if (!a)
                  return null;
              var d = b = null;
              n(a, "getEntriesByType") && (d = n(a.getEntriesByType("navigation"), "0")) && (b = sq);
              if (!b) {
                  var e = n(a, "timing");
                  e && (b = tq,
                  d = e)
              }
              if (!b)
                  return null;
              a = uq(a, d, b);
              c = L(c);
              c = vq(c);
              return (c = wq(c, a)) && G(",", c)
          }
          function wq(a, c) {
              var b = a.length ? z(function(d, e) {
                  var f = c[e];
                  return f === d ? null : f
              }, a) : c;
              a.length = 0;
              x(w(Q, Ma("push", a)), c);
              return ka(Fa(null), b).length === a.length ? null : b
          }
          function uq(a, c, b) {
              return z(function(d) {
                  var e = d[0]
                    , f = d[1];
                  if (O(e))
                      return e(a, c) || null;
                  if (1 === d.length)
                      return c[e] ? Math.round(c[e]) : null;
                  var g;
                  !(g = c[e] && c[f]) && (g = 0 === c[e] && 0 === c[f]) && (g = d[1],
                  g = !($i[d[0]] || $i[g]));
                  if (!g)
                      return null;
                  d = Math.round(c[e]) - Math.round(c[f]);
                  return 0 > d || 36E5 < d ? null : d
              }, b)
          }
          function Ce(a, c) {
              try {
                  var b = c.localStorage.getItem(a);
                  return b && xd(De(b))
              } catch (d) {}
              return null
          }
          function xq(a) {
              var c = n(a, "webOS.service.request");
              return O(c) ? new K(function(b) {
                  var d, e;
                  c("luna://com.webos.service.sm", (d = {},
                  d.method = "deviceid/getIDs",
                  d.parameters = (e = {},
                  e.idType = ["LGUDID"],
                  e),
                  d.onSuccess = function(f) {
                      b(Fd(n(f, "idList.0.idValue")))
                  }
                  ,
                  d))
              }
              ) : K.resolve(null)
          }
          function yq(a) {
              if (!$f(a))
                  return null;
              a = n(a, "tizen.systeminfo.getCapabilities");
              try {
                  if (O(a))
                      return Fd(n(a(), "duid"))
              } catch (c) {}
              return null
          }
          function zq(a) {
              if (!$f(a))
                  return null;
              a = n(a, "tizen.systeminfo.getCapability");
              if (O(a))
                  try {
                      return Fd(a("http://tizen.org/system/tizenid"))
                  } catch (c) {}
              return null
          }
          function Aq(a) {
              if (!$f(a))
                  return null;
              a = n(a, "webapis.adinfo.getTIFA");
              if (O(a))
                  try {
                      return Fd(a())
                  } catch (c) {}
              return null
          }
          function Fd(a) {
              return a ? xd(De(a)) : null
          }
          function De(a) {
              for (var c = [], b = 0; b < a.length; b++) {
                  var d = a.charCodeAt(b);
                  128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224),
                  c.push(d >> 6 & 63 | 128)),
                  c.push(d & 63 | 128))
              }
              return c
          }
          function Kh(a) {
              for (var c = "", b = 0; b < a.length; ) {
                  var d = a.charCodeAt(b);
                  if (128 > d)
                      c += String.fromCharCode(d),
                      b++;
                  else if (191 < d && 224 > d) {
                      var e = a.charCodeAt(b + 1);
                      c += String.fromCharCode((d & 31) << 6 | e & 63);
                      b += 2
                  } else
                      e = a.charCodeAt(b + 1),
                      c += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | a.charCodeAt(b + 2) & 63),
                      b += 3
              }
              return c
          }
          function xd(a, c) {
              void 0 === c && (c = !1);
              for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                  var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                  e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
              }
              switch (b - d) {
              case 1:
                  b = a[d] << 4;
                  e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=", "=");
                  break;
              case 2:
                  b = (a[d] << 10) + (a[d + 1] << 2),
                  e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[b & 63], "=")
              }
              e = G("", e);
              return c ? aj(e, !0) : e
          }
          function vf(a, c) {
              void 0 === c && (c = !1);
              var b = a
                , d = ""
                , e = 0;
              if (!b)
                  return "";
              for (c && (b = aj(b)); b.length % 4; )
                  b += "=";
              do {
                  var f = pc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++))
                    , g = pc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++))
                    , h = pc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++))
                    , k = pc("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", b.charAt(e++));
                  if (0 > f || 0 > g || 0 > h || 0 > k)
                      return "";
                  var l = f << 18 | g << 12 | h << 6 | k;
                  f = l >> 16 & 255;
                  g = l >> 8 & 255;
                  l &= 255;
                  d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
              } while (e < b.length);
              return d
          }
          function aj(a, c) {
              void 0 === c && (c = !1);
              return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                  return Bq[b] || b
              }) : ""
          }
          function Cq(a) {
              try {
                  var c = hb(a) ? a : [];
                  return G(",", [a.name, a.description, w(Ha, Ea, Eb(Dq), Ee(","))(c)])
              } catch (b) {
                  return ""
              }
          }
          function Dq(a) {
              return G(",", [a.description, a.suffixes, a.type])
          }
          function Eq(a, c) {
              for (var b = "", d = 0; d < c; d += 1)
                  b += a;
              return b
          }
          function Fq(a, c, b, d, e, f, g, h) {
              var k = b.C(f);
              ba(k) && (b.D(f, g),
              e(a, c, b, d),
              k = b.C(f, g));
              T(h) || h.Vb(f, "" + k);
              return k
          }
          function Gq(a, c) {
              if (Nc(a)) {
                  var b = ub(a).match(Hq);
                  if (b && b.length)
                      return b[1] === c
              }
              return !1
          }
          function Fe(a, c, b) {
              return function(d) {
                  var e, f, g = Ka(c, b);
                  g && Iq(a, d, c) && (g = I(g.params, g),
                  (d = ag({
                      event: a,
                      La: "products",
                      Aa: qc,
                      Sh: "goods"
                  }, d)) && g && g((e = {},
                  e.__ym = (f = {},
                  f.ecommerce = [d],
                  f),
                  e)))
              }
          }
          function Iq(a, c, b) {
              var d = !1
                , e = "";
              if (!ia(c))
                  return Lb(b, "", "ecomeo"),
                  d;
              var f = c.goods;
              switch (a) {
              case "detail":
              case "add":
              case "remove":
                  M(f) && f.length ? (d = bj(function(g) {
                      return ia(g) && (S(g.id) || Mb(b, g.id) || S(g.name))
                  }, f)) || (e = "ecomgi") : e = "ecomgei";
                  break;
              case "purchase":
                  Mb(b, c.id) || S(c.id) ? d = !0 : e = "ecompi"
              }
              Lb(b, "", e);
              return d
          }
          function Gd(a, c) {
              return {
                  O: function(b, d) {
                      bg(b) ? d() : na(c, function(e) {
                          var f;
                          if (e = n(e, "settings.hittoken"))
                              e = (f = {},
                              f.hittoken = e,
                              f),
                              b.J = A(b.J || {}, e);
                          d()
                      })
                  }
              }
          }
          function Jq(a, c, b) {
              var d, e, f;
              void 0 === b && (b = "");
              var g = J(a)
                , h = {};
              h.getCachedTags = cg;
              h.form = (d = {},
              d.closest = u(a, cj),
              d.select = Kq,
              d.getData = u(a, dj),
              d);
              h.button = (e = {},
              e.closest = u(a, ej),
              e.select = fj,
              e.getData = u(a, gj),
              e);
              h.status = (f = {},
              f.checkStatus = E([a, Da(b)], Lq),
              f);
              g.D("_u", h);
              c && ld(a, {
                  src: c
              })
          }
          function Lq(a) {
              var c, b = hj(a);
              a = J(a).C("getCounters", Hd)();
              a = z(V("id"), a);
              return c = {
                  id: b
              },
              c.counterFound = !!b && H(b, a),
              c
          }
          function ij(a, c, b, d) {
              if (c) {
                  var e = [];
                  c && (a.document.documentElement.contains(c) ? qe(a, c, Ma("push", e), d) : xa(e, jj(a, c, d)));
                  x(b, e)
              }
          }
          function qe(a, c, b, d, e, f) {
              function g(k) {
                  return O(d) ? d(k) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
              }
              void 0 === e && (e = -1);
              void 0 === f && (f = !1);
              var h = g(c);
              if (O(b) && (f || h === a.NodeFilter.FILTER_ACCEPT) && (h && b(c),
              !Xf(c)))
                  for (c = a.document.createTreeWalker(c, e, d ? {
                      acceptNode: g
                  } : null, !1); c.nextNode() && !1 !== b(c.currentNode); )
                      ;
          }
          function jj(a, c, b) {
              var d = []
                , e = w(Q, Ma("push", d));
              O(b) ? (b = b(c),
              (ba(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
              if (c.childNodes && 0 < c.childNodes.length) {
                  c = c.childNodes;
                  b = 0;
                  for (var f = c.length; b < f; b += 1) {
                      var g = jj(a, c[b]);
                      x(e, g)
                  }
              }
              return d
          }
          function kj(a, c, b) {
              var d;
              a = [lj(a, c, function(e) {
                  d = e;
                  e.ra.F(b)
              }), function() {
                  d && d.unsubscribe()
              }
              ];
              return E([Ge, a], x)
          }
          function Mq(a, c, b, d) {
              var e, f, g;
              if (b) {
                  var h = n(d, "ecommerce") || {};
                  var k = n(d, "event") || "";
                  h = ia(h) && S(k) ? ag(k, h) : void 0;
                  if (!h)
                      a: {
                          var l = d;
                          !M(d) && Mb(a, hb(d)) && (l = Pa(l));
                          if (M(l) && (h = l[0],
                          k = l[1],
                          l = l[2],
                          S(k) && ia(l) && "event" === h)) {
                              h = ag(k, l);
                              break a
                          }
                          h = void 0
                      }
                  if (d = h || Nq(d))
                      vb(a, (e = {},
                      e.counterKey = c,
                      e.name = "ecommerce",
                      e.data = d,
                      e)),
                      b((f = {},
                      f.__ym = (g = {},
                      g.ecommerce = [d],
                      g),
                      f))
              }
          }
          function Nq(a) {
              var c = n(a, "ecommerce");
              if (ia(c))
                  return a = ka(yc(Oq), ha(c)),
                  a = N(function(b, d) {
                      b[d] = c[d];
                      return b
                  }, {}, a),
                  0 === ha(a).length ? void 0 : a
          }
          function ag(a, c) {
              var b, d, e = S(a) ? Pq[a] : a;
              if (e) {
                  var f = e.event
                    , g = e.La
                    , h = e.Sh
                    , k = void 0 === h ? "items" : h
                    , l = c.purchase || c;
                  if (h = l[k]) {
                      e = z(u(e.Aa, Qq), h);
                      var m = (b = {},
                      b[f] = g ? (d = {},
                      d[g] = e,
                      d) : e,
                      b);
                      b = ha(l);
                      g && 1 < b.length && (m[f].actionField = Cb(function(p, q) {
                          if (q === k)
                              return p;
                          if ("currency" === q)
                              return m.currencyCode = l.currency,
                              p;
                          p[Rq[q] || dg[q] || q] = l[q];
                          return p
                      }, {}, b));
                      return m
                  }
              }
          }
          function Qq(a, c) {
              var b = {};
              x(function(d) {
                  var e = a[d] || dg[d] || d;
                  -1 !== pb(d, "item_category") ? (e = dg.item_category,
                  b[e] = b[e] ? b[e] + ("/" + c[d]) : c[d]) : b[e] = c[d]
              }, ha(c));
              return b
          }
          function Sq(a, c, b) {
              var d, e, f, g = n(b, "target");
              if (g && (g = ej(a, g),
              g = gj(a, g))) {
                  g = "?" + Ic(g);
                  var h = rc(a, c, "gbn", (d = {},
                  d.id = c.id,
                  d.query = g,
                  d));
                  b = n(b, "isTrusted");
                  b = ba(b) ? void 0 : (e = {},
                  e.__ym = (f = {},
                  f.ite = tb(b),
                  f),
                  e);
                  He(a, c, "btn", h).reachGoal(g, b)
              }
          }
          function of(a, c, b, d) {
              return function() {
                  if (Ka(a, c)) {
                      var e = Pa(arguments);
                      return d.apply(void 0, e)
                  }
              }
          }
          function Tq(a, c, b, d) {
              var e = n(d, "target");
              e && (d = n(d, "isTrusted"),
              (e = Yb("button,input", a, e)) && "submit" === e.type && (e = cj(a, e))) && (b.push(e),
              W(a, E([!1, a, c, b, e, d], mj), 300))
          }
          function mj(a, c, b, d, e, f) {
              var g, h, k, l = Pb(c)(e, d), m = -1 !== l;
              if (a || m)
                  m && d.splice(l, 1),
                  a = dj(c, e),
                  a = "?" + Ic(a),
                  d = E([c, b, "fg", (g = {},
                  g.id = b.id,
                  g.query = a,
                  g)], nj),
                  f = ba(f) ? void 0 : (h = {},
                  h.__ym = (k = {},
                  k.ite = tb(f),
                  k),
                  h),
                  He(c, b, "form", d).reachGoal(a, f)
          }
          function nj(a, c, b, d) {
              return Uq(a, c).then(w(E([rc(a, c, b, d), C], ze), va))
          }
          function dj(a, c, b) {
              return oj(a, c, ["i", "n", "p"], void 0, b)
          }
          function Vq(a, c) {
              var b;
              a((b = {},
              b.clickmap = T(c) ? !0 : c,
              b))
          }
          function Wq(a, c, b, d, e) {
              var f, g = "clmap/" + e.id;
              c = (f = {},
              f["page-url"] = c,
              f["pointer-click"] = b,
              f);
              f = {
                  K: Ia(),
                  J: c,
                  ja: {
                      Da: g
                  }
              };
              d(f, e)["catch"](D(a, "c.s.c"))
          }
          function Xq(a, c, b, d, e) {
              if (fa(a, "ymDisabledClickmap") || !c || !c.element)
                  return !1;
              a = Na(c.element);
              if (e && !e(c.element, a) || H(c.button, [2, 3]) && "A" !== a || Qa(Fa(a), d))
                  return !1;
              d = c.element;
              if (c && b) {
                  if (50 > c.time - b.time)
                      return !1;
                  e = Math.abs(b.position.x - c.position.x);
                  a = Math.abs(b.position.y - c.position.y);
                  c = c.time - b.time;
                  if (b.element === d && 2 > e && 2 > a && 1E3 > c)
                      return !1
              }
              for (; d; ) {
                  if (Yq(d))
                      return !1;
                  d = d.parentElement
              }
              return !0
          }
          function Zq(a, c) {
              var b = null;
              try {
                  if (b = c.target || c.srcElement)
                      !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
              } catch (d) {}
              return b
          }
          function $q(a) {
              var c = a.which;
              a = a.button;
              return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
          }
          function pj(a, c) {
              var b = Bc(a)
                , d = eg(a);
              return {
                  x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                  y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
              }
          }
          function Ie(a, c) {
              return {
                  O: function(b, d) {
                      var e, f = b.K, g = b.Ka, h = b.J, k = b.V;
                      k = void 0 === k ? {} : k;
                      if (f && h) {
                          var l = ja(a);
                          f.Vb("rqnl", 1);
                          for (var m = Id(a), p = 1; m[p]; )
                              p += 1;
                          b.N || (b.N = {});
                          b.N.Sb = p;
                          m[p] = (e = {},
                          e.protocol = ua.Na,
                          e.host = Xb,
                          e.resource = b.ja.Da,
                          e.postParams = k.ca,
                          e.time = l(ca),
                          e.counterType = c.ba,
                          e.params = h,
                          e.browserInfo = f.l(),
                          e.counterId = c.id,
                          e.ghid = Hc(a),
                          e);
                          g && (m[p].telemetry = g.l());
                          fg(a)
                      }
                      d()
                  },
                  sa: function(b, d) {
                      qj(a, b);
                      d()
                  }
              }
          }
          function qj(a, c) {
              var b = Id(a);
              c.K && !Ra(b) && c.N && (delete b[c.N.Sb],
              fg(a))
          }
          function fg(a) {
              var c = Id(a);
              Wa(a).D("retryReqs", c)
          }
          function ar(a, c) {
              if (a.kj()) {
                  var b = rj(c);
                  if (b && !oc("ym-disable-tracklink", b)) {
                      var d = a.l
                        , e = a.ah
                        , f = a.ib
                        , g = a.sender
                        , h = a.rh
                        , k = f.vc
                        , l = b.href;
                      var m = cb(b.innerHTML && b.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                      m || (m = (m = b.querySelector("img")) ? cb(m.getAttribute("title") || m.getAttribute("alt")) : "");
                      m = l === m ? "" : m;
                      var p = n(c, "isTrusted");
                      if (oc("ym-external-link", b))
                          Je(d, f, {
                              url: l,
                              rb: !0,
                              title: m,
                              Ec: p,
                              sender: g
                          });
                      else {
                          k = k ? Ub(d, k).hostname : X(d).hostname;
                          h = RegExp("\\.(" + G("|", z(br, h)) + ")$", "i");
                          var q = b.protocol + "//" + b.hostname + b.pathname;
                          h = sj.test(q) || sj.test(l) || h.test(l) || h.test(q);
                          b = b.hostname;
                          Ke(k) === Ke(b) ? h ? Je(d, f, {
                              url: l,
                              Cc: !0,
                              Ec: p,
                              title: m,
                              sender: g
                          }) : m && e.D("il", cb(m).slice(0, 100)) : l && cr.test(l) || Je(d, f, {
                              url: l,
                              Gc: !0,
                              rb: !0,
                              Cc: h,
                              Ec: p,
                              title: m,
                              sender: g
                          })
                      }
                  }
              }
          }
          function Je(a, c, b) {
              var d, e, f, g, h = Ia();
              void 0 !== b.Ec && h.D("ite", tb(b.Ec));
              b.Cc && h.D("dl", 1);
              b.rb && h.D("ln", 1);
              var k = b.zg || {};
              h = {
                  K: h,
                  N: {
                      title: k.title || b.title,
                      Gc: !!b.Gc,
                      L: k.params
                  },
                  J: (d = {},
                  d["page-url"] = b.url,
                  d["page-ref"] = c.vc || X(a).href,
                  d)
              };
              d = "Link";
              b.Cc ? d = b.rb ? "Ext link - File" : "File" : b.rb && (d = "Ext link");
              vb(a, (e = {},
              e.counterKey = L(c),
              e.name = "event",
              e.data = (f = {},
              f.schema = "Link click",
              f.name = (b.rb ? "external" : "internal") + " url: " + b.url,
              f),
              e));
              c = b.sender(h, c).then(rc(a, c, "lcl", (g = {},
              g.prefix = d,
              g.id = c.id,
              g.url = b.url,
              g), b.zg));
              return Uc(a, "cl.p.s", c, k.callback || C, k.ctx)
          }
          function dr(a, c) {
              var b, d, e = (b = {},
              b.string = !0,
              b.object = !0,
              b["boolean"] = c,
              b)[typeof c] || !1;
              a((d = {},
              d.trackLinks = e,
              d))
          }
          function er(a, c, b, d) {
              var e = X(a)
                , f = e.hostname;
              e = e.href;
              if (c = Jd(c).url)
                  a = Ub(a, c),
                  f = a.hostname,
                  e = a.href;
              return [d + "://" + f + "/" + b, e || ""]
          }
          function fr(a, c, b, d) {
              var e;
              if (a = Ka(a, b)) {
                  var f = d.data;
                  b = "" + b.id;
                  var g = d.sended || [];
                  d.sended || (d.sended = g);
                  H(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f),
                  g.push(b),
                  d.parent && c.gg((e = {},
                  e.type = "params",
                  e.data = f,
                  e)))
              }
          }
          function Yh(a, c, b) {
              void 0 === b && (b = Q);
              var d = vd(a);
              b(d);
              var e = u(d, gr);
              nd(a, c, function(f) {
                  f.ra.F(e)
              });
              return d
          }
          function gr(a, c) {
              var b = n(c, "ymetrikaEvent");
              b && a.aa(n(b, "type"), b)
          }
          function nd(a, c, b, d) {
              void 0 === b && (b = C);
              void 0 === d && (d = !1);
              var e = tj(a);
              if (c && O(c.push)) {
                  var f = c.push;
                  c.push = function() {
                      var g = Pa(arguments)
                        , h = g[0];
                      d && e.aa(h);
                      g = f.apply(c, g);
                      d || e.aa(h);
                      return g
                  }
                  ;
                  a = {
                      ra: e,
                      unsubscribe: function() {
                          c.push = f
                      }
                  };
                  b(a);
                  x(e.aa, c);
                  return a
              }
          }
          function ke(a) {
              a = J(a);
              var c = a.C("dataLayer", []);
              a.D("dataLayer", c);
              return c
          }
          function Pn(a, c) {
              var b, d;
              H(c, z(V("ymetrikaEvent.type"), a)) || a.push((b = {},
              b.ymetrikaEvent = (d = {},
              d.type = c,
              d),
              b))
          }
          function uj(a, c) {
              var b = td(a, c)
                , d = []
                , e = [];
              if (!b)
                  return null;
              var f = E([a, b.ye], hr)
                , g = u(f, ir);
              b.$.F(["initToParent"], function(h) {
                  g(d, b.children[h[1].counterId])
              }).F(["parentConnect"], function(h) {
                  g(e, b.Ha[h[1].counterId])
              });
              return {
                  $: b.$,
                  bk: function(h, k) {
                      return new K(function(l, m) {
                          b.ye(h, k, function(p, q) {
                              l([p, q])
                          });
                          W(a, u(Sa(), m), 5100, "is.o")
                      }
                      )
                  },
                  fg: function(h) {
                      var k = {
                          ig: [],
                          Ke: [],
                          data: h
                      };
                      d.push(k);
                      return f(b.children, k, h)
                  },
                  gg: function(h) {
                      var k = {
                          ig: [],
                          Ke: [],
                          data: h
                      };
                      e.push(k);
                      return f(b.Ha, k, h)
                  }
              }
          }
          function ir(a, c, b) {
              c = ka(function(d) {
                  return !H(b.info.counterId, d.Ke)
              }, c);
              x(function(d) {
                  var e;
                  b.info.counterId && a((e = {},
                  e[b.info.counterId] = b,
                  e), d, d.data)
              }, c)
          }
          function hr(a, c, b, d, e) {
              return (new K(function(f, g) {
                  var h = ha(b)
                    , k = w(d.resolve || Q, Tc(f))
                    , l = w(d.reject || Q, Tc(g));
                  d.resolve = k;
                  d.reject = l;
                  x(function(m) {
                      var p;
                      d.Ke.push(+m);
                      var q = b[m]
                        , r = W(a, u(Sa(), l), 5100, "is.m");
                      c(q.window, A(e, (p = {},
                      p.toCounter = Da(m),
                      p)), function(t, y) {
                          ma(a, r);
                          d.ig.push(m);
                          d.resolve && d.resolve(y)
                      })
                  }, h)
              }
              ))["catch"](D(a, "if.b"))
          }
          function jr(a) {
              var c = C
                , b = null
                , d = a.length;
              if (0 !== a.length && a[0]) {
                  var e = a.slice(-1)[0];
                  O(e) && (c = e,
                  d = a.length + -1);
                  var f = a.slice(-2)[0];
                  O(f) && (c = f,
                  b = e,
                  d = a.length + -2);
                  d = a.slice(0, d);
                  return {
                      dh: b,
                      $b: c,
                      L: 1 === d.length ? a[0] : ue(d)
                  }
              }
          }
          function Uc(a, c, b, d, e) {
              var f = E([a, d, e], gg);
              return b.then(f, function(g) {
                  f();
                  Oc(a, c, g)
              })
          }
          function hg(a, c) {
              return {
                  O: function(b, d) {
                      var e, f, g = (b.N || {}).L, h = b.V;
                      h = void 0 === h ? {} : h;
                      if (g && (vj(c, g),
                      !h.ca && b.K && b.J)) {
                          var k = Ob(a, g)
                            , l = wj(a)
                            , m = b.K.C("pv");
                          k && !b.J.nohit && (vb(a, (e = {},
                          e.counterKey = L(c),
                          e.name = "params",
                          e.data = (f = {},
                          f.val = g,
                          f),
                          e)),
                          m ? encodeURIComponent(k).length > ua.Eg ? l.push([b.K, g]) : b.J["site-info"] = k : (h.ca = k,
                          b.V = h,
                          b.Pc || (b.Pc = {}),
                          b.Pc.zi = !0))
                      }
                      d()
                  },
                  sa: function(b, d) {
                      var e = wj(a)
                        , f = Ka(a, c)
                        , g = f && f.params;
                      g && (f = ka(w(Kd, Fa(b.K)), e),
                      x(function(h) {
                          g(h[1]);
                          h = Le(a)(h, e);
                          e.splice(h, 1)
                      }, f));
                      d()
                  }
              }
          }
          function Me(a, c) {
              return function(b) {
                  ig(a, c, b)
              }
          }
          function kr(a, c) {
              jg(a)(function(b) {
                  delete b[c]
              })
          }
          function ig(a, c, b) {
              jg(a)(function(d) {
                  d[c] = A(d[c] || {}, b)
              })
          }
          function jg(a) {
              a = J(a);
              var c = a.C("dsjf") || Ba({});
              a.Ja("dsjf", c);
              return c
          }
          function lr(a, c) {
              return function(b) {
                  var d, e, f = Ka(a, c);
                  if (f) {
                      var g = sc(a, L(c));
                      ia(b) ? hb(ha(b)) ? (b = xj(a, b)) && hb(b) && f.params((d = {},
                      d.__ym = (e = {},
                      e.fpmh = b,
                      e),
                      d)) : g.log("fpeo") : g.log("fpno")
                  }
              }
          }
          function xj(a, c) {
              return N(function(b, d) {
                  var e = d[0]
                    , f = d[1]
                    , g = f;
                  f = ia(f);
                  if (!f && (Mb(a, g) && (g = "" + g),
                  !S(g)))
                      return b;
                  g = f ? xj(a, g) : g;
                  hb(g) && b.push([e, g]);
                  return b
              }, [], za(c))
          }
          function yj(a, c, b) {
              void 0 === b && (b = 0);
              c = za(c);
              c = N(function(d, e) {
                  var f = e[0]
                    , g = e[1]
                    , h = ia(g);
                  if (!h && (Mb(a, g) && (g = "" + g),
                  !S(g)))
                      return d;
                  if (h)
                      g = yj(a, g, b + 1);
                  else if (!b && H(f, mr))
                      g = K.resolve(g);
                  else {
                      "phone_number" === f ? g = gi(a, g) : "email" === f && (g = fi(g));
                      if (!g)
                          return d;
                      g = zj(a, g)
                  }
                  d.push(g.then(function(k) {
                      return [f, k]
                  }));
                  return d
              }, [], c);
              return K.all(c)
          }
          function zj(a, c) {
              return new K(function(b, d) {
                  var e = (new a.TextEncoder).encode(c);
                  a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                      f = new a.Blob([f],{
                          type: "application/octet-binary"
                      });
                      var g = new a.FileReader;
                      g.onload = function(h) {
                          h = n(h, "target.result") || "";
                          var k = pb(h, ",");
                          -1 !== k ? b(h.substring(k + 1)) : d(Aa("fpm.i"))
                      }
                      ;
                      g.readAsDataURL(f)
                  }, d)
              }
              )
          }
          function gi(a, c) {
              var b = pe(c)
                , d = b.length;
              if (!(nr.test(c) || c.length - d > d || 10 > d || 16 < d)) {
                  d = b[0];
                  var e = c[1];
                  if ("+" !== c[0] || e === d)
                      return d = or(c),
                      10 > b.length || 13 < b.length || d.startsWith("+8") ? cb(c) : "8" === d[0] ? "7" + b.slice(1) : "+" === d[0] || Mb(a, +d[0]) ? b : "7" + b
              }
          }
          function fi(a) {
              var c = cb(a).replace(/^\++/gm, "").toLowerCase()
                , b = c.lastIndexOf("@");
              if (-1 === b)
                  return kg(c);
              a = c.substr(0, b);
              b = c.substr(b + 1);
              if (!b || !pr(a))
                  return kg(c);
              b = b.replace("googlemail.com", "gmail.com");
              Aj(b) && (b = "yandex.ru");
              "yandex.ru" === b ? a = a.replace(lg, "-") : "gmail.com" === b && (a = a.replace(lg, ""));
              c = pb(a, "+");
              -1 !== c && (a = a.slice(0, c));
              return kg(a + "@" + b)
          }
          function kg(a) {
              var c = a.length;
              return 5 > c || 100 < c ? void 0 : a
          }
          function pr(a) {
              var c = a.length;
              return 1 > c || 64 < c ? !1 : bj(function(b) {
                  var d = b.length;
                  if (1 > d)
                      b = !1;
                  else if ('"' === b[0] && '"' === b[d - 1] && 2 < d)
                      a: {
                          for (d = 1; d + 2 < b.length; d += 1) {
                              var e = b.charCodeAt(d);
                              if (32 > e || 34 === e || 126 < e) {
                                  b = !1;
                                  break a
                              }
                              if (92 === e) {
                                  if (d + 2 === b.length || 32 > b.charCodeAt(d + 1)) {
                                      b = !1;
                                      break a
                                  }
                                  d += 1
                              }
                          }
                          b = !0
                      }
                  else
                      b = qr.test(b) ? !0 : !1;
                  return b
              }, a.split("."))
          }
          function rm(a, c, b, d) {
              var e = Bj[b];
              return e ? function() {
                  var f = Pa(arguments);
                  f = d.apply(void 0, f);
                  var g = J(a);
                  g.Ja("mt", {});
                  g = g.C("mt");
                  var h = g[e];
                  g[e] = h ? h + 1 : 1;
                  return f
              }
              : d
          }
          function Ka(a, c) {
              var b = J(a).C("counters", {})
                , d = L(c);
              return b[d]
          }
          function rc(a, c, b, d, e) {
              return E([a, L(c), e ? [b + ".p", e] : b, d], Lb)
          }
          function Lb(a, c, b, d) {
              sc(a, c).log(b, d)
          }
          function rr(a, c) {
              function b(d, e, f) {
                  var g, h;
                  vb(a, (g = {},
                  g.name = "log",
                  g.counterKey = c,
                  g.data = (h = {},
                  h.args = M(e) ? e : [e],
                  h.type = d,
                  h.variables = f,
                  h),
                  g))
              }
              return {
                  log: u("log", b),
                  error: u("error", b),
                  warn: u("warn", b)
              }
          }
          function na(a, c) {
              var b = L(a);
              return Cj()(sr(b)).then(c)
          }
          function tr(a, c, b) {
              var d, e;
              c = L(c);
              var f = mg(a);
              b = A({
                  th: f(ca)
              }, b);
              vb(a, (d = {},
              d.counterKey = c,
              d.name = "counterSettings",
              d.data = (e = {},
              e.settings = b,
              e),
              d));
              return Cj()(ur(c, b))
          }
          function ur(a, c) {
              return function(b) {
                  var d = b[a];
                  d ? (d.Uf = !0,
                  d.Tf(c)) : b[a] = {
                      promise: K.resolve(c),
                      Uf: !0,
                      Tf: C
                  }
              }
          }
          function ng(a) {
              return !Dd(a) && og(a)
          }
          function Ld(a) {
              return qb(a) ? u(a, vr) : !1
          }
          function Fb(a) {
              if (a.fetch) {
                  var c = n(a, "AbortController");
                  return E([a, c ? new c : void 0], wr)
              }
              return !1
          }
          function og(a) {
              var c = n(a, "navigator.sendBeacon");
              return c && La("sendBeacon", c) ? E([a, I(c, n(a, "navigator"))], xr) : !1
          }
          function xr(a, c, b, d) {
              return new K(function(e, f) {
                  var g;
                  if (!n(a, "navigator.onLine"))
                      return f();
                  var h = A(d.cb, (g = {},
                  g["force-urlencoded"] = 1,
                  g));
                  g = b + "?" + Ic(h) + (d.ca ? "&" + d.ca : "");
                  return 2E3 < g.length ? f(Sa("sb.tlq")) : c(g) ? e("") : f()
              }
              )
          }
          function vr(a, c, b) {
              return new K(function(d, e) {
                  var f, g, h = "_ymjsp" + Za(a), k = A((f = {},
                  f.callback = h,
                  f), b.cb), l = E([a, h], yr);
                  a[h] = function(p) {
                      try {
                          l(),
                          hc(m),
                          d(p)
                      } catch (q) {
                          e(q)
                      }
                  }
                  ;
                  k.wmode = "5";
                  var m = ld(a, (g = {},
                  g.src = Dj(c, b, k),
                  g));
                  if (!m)
                      return l(),
                      e(Aa("jp.s"));
                  f = u(m, hc);
                  f = w(f, u(Sa(b.ha), e));
                  g = Md(a, f, b.Qa || 1E4);
                  g = E([a, g], ma);
                  m.onload = g;
                  m.onerror = w(l, g, f)
              }
              )
          }
          function yr(a, c) {
              try {
                  delete a[c]
              } catch (b) {
                  a[c] = void 0
              }
          }
          function Vc(a) {
              var c = qb(a);
              return c ? E([a, c], zr) : !1
          }
          function zr(a, c, b, d) {
              return new K(function(e, f) {
                  var g = Bc(a)
                    , h = c("img")
                    , k = w(u(h, hc), u(Sa(d.ha), f))
                    , l = Md(a, k, d.Qa || 3E3);
                  h.onerror = k;
                  h.onload = w(u(h, hc), u(null, e), E([a, l], ma));
                  k = A({}, d.cb);
                  delete k.wmode;
                  h.src = Dj(b, d, k);
                  Nc(a) && (A(h.style, {
                      position: "absolute",
                      visibility: "hidden",
                      width: "0px",
                      height: "0px"
                  }),
                  g.appendChild(h))
              }
              )
          }
          function wr(a, c, b, d) {
              var e, f = A(d.gb ? (e = {},
              e.wmode = "7",
              e) : {}, d.cb), g = c || {
                  signal: void 0,
                  abort: C
              }, h = a.fetch(Ne(b, Ic(f)), {
                  method: d.bd,
                  body: d.ca,
                  credentials: !1 === d.cd ? "omit" : "include",
                  headers: d.bb,
                  signal: g.signal
              }), k = u(d.ha, Sa);
              return new K(function(l, m) {
                  d.Qa && Md(a, function() {
                      try {
                          g.abort()
                      } catch (p) {}
                      m(k())
                  }, d.Qa);
                  return h.then(function(p) {
                      if (!p.ok) {
                          if (d.Sc)
                              return Va(Ej(p));
                          be(d.ha)
                      }
                      return d.Sc ? p.text() : d.gb ? p.json() : null
                  }).then(l)["catch"](u(k(), m))
              }
              )
          }
          function Gb(a) {
              var c;
              if (c = n(a, "XMLHttpRequest"))
                  if (c = "withCredentials"in new a.XMLHttpRequest) {
                      a: {
                          if (Ar.test(a.location.host) && a.opera && O(a.opera.version) && (c = a.opera.version(),
                          "string" === typeof c && "12" === c.split(".")[0])) {
                              c = !0;
                              break a
                          }
                          c = !1
                      }
                      c = !c
                  }
              return c ? u(a, Br) : !1
          }
          function Br(a, c, b) {
              var d, e = new a.XMLHttpRequest, f = b.ca, g = A(b.gb ? (d = {},
              d.wmode = "7",
              d) : {}, b.cb);
              return new K(function(h, k) {
                  e.open(b.bd || "GET", Ne(c, Ic(g)), !0);
                  e.withCredentials = !1 !== b.cd;
                  b.Qa && (e.timeout = b.Qa);
                  Cr(za, Eb(function(m) {
                      e.setRequestHeader(m[0], m[1])
                  }))(b.bb);
                  var l = E([a, e, Sa(b.ha), b.gb, b.Sc, h, k], Dr);
                  e.onreadystatechange = l;
                  try {
                      e.send(f)
                  } catch (m) {}
              }
              )
          }
          function Dr(a, c, b, d, e, f, g, h) {
              if (4 === c.readyState)
                  if (200 === c.status || e || g(b),
                  e)
                      200 === c.status ? f(c.responseText) : g(Ej(c));
                  else {
                      e = null;
                      if (d)
                          try {
                              (e = Vb(a, c.responseText)) || g(b)
                          } catch (k) {
                              g(b)
                          }
                      f(e)
                  }
              return h
          }
          function Dj(a, c, b) {
              (b = Ic(b)) && (a = Ne(a, b));
              c.ca && (a = Ne(a, c.ca));
              return a
          }
          function Ne(a, c) {
              if (!c || !c.length)
                  return a;
              var b = a.split("#")
                , d = b[0];
              b = (b = G("#", b.slice(1))) ? "#" + b : "";
              return ab(a, "?") ? d + "&" + c + b : d + "?" + c + b
          }
          function Fj(a) {
              return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
          }
          function Er(a, c, b) {
              var d = z(Kd, Zb[c] || $b);
              x(function(e) {
                  return d.unshift(e)
              }, pg);
              return z(w(Oe([a, b]), va), d)
          }
          function Gj(a) {
              return {
                  O: function(c, b) {
                      var d = c.J;
                      if (!c.K || !d)
                          return b();
                      var e = d["page-ref"]
                        , f = d["page-url"];
                      e && f !== e ? d["page-ref"] = Hj(a, e) : delete d["page-ref"];
                      d["page-url"] = Hj(a, f).slice(0, ua.Gg);
                      return b()
                  }
              }
          }
          function Hj(a, c) {
              var b = X(a)
                , d = b.href
                , e = b.host
                , f = -1;
              if (!S(c) || T(c))
                  return d;
              b = c.replace(Ij, "");
              if (-1 !== b.search(Fr))
                  return b;
              var g = b.charAt(0);
              if ("?" === g && (f = d.search(/\?/),
              -1 === f) || "#" === g && (f = d.search(/#/),
              -1 === f))
                  return d + b;
              if (-1 !== f)
                  return d.substr(0, f) + b;
              if ("/" === g) {
                  if (f = pb(d, e),
                  -1 !== f)
                      return d.substr(0, f + e.length) + b
              } else
                  return d = d.split("/"),
                  d[d.length - 1] = b,
                  G("/", d);
              return ""
          }
          function Pe(a, c) {
              return {
                  O: function(b, d) {
                      var e = Jj(c);
                      e = E([b, e, d], Gr);
                      Hr(a, c, e)
                  },
                  sa: function(b, d) {
                      var e = b.K
                        , f = Jj(c);
                      if (e) {
                          var g = f.xa;
                          f.hf === e && g && (x(va, g),
                          f.xa = null)
                      }
                      d()
                  }
              }
          }
          function Gr(a, c, b) {
              var d = a.K;
              d ? bg(a) ? (c.hf = d,
              b()) : c.xa ? c.xa.push(b) : b() : b()
          }
          function bg(a) {
              return (a = a.K) && a.C("pv") && !a.C("ar")
          }
          function Hr(a, c, b) {
              if (Qe(a) && sb(a)) {
                  var d = Ir(c);
                  if (!d.li) {
                      d.li = !0;
                      c = td(a, c);
                      if (!c) {
                          b();
                          return
                      }
                      d.xa = [];
                      var e = function() {
                          d.xa && (x(va, d.xa),
                          d.xa = null)
                      };
                      W(a, e, 3E3);
                      c.$.F(["initToChild"], e)
                  }
                  d.xa ? d.xa.push(b) : b()
              } else
                  b()
          }
          function Kj(a, c) {
              return {
                  O: function(b, d) {
                      var e = b.K;
                      if (e && (!c || c.eg)) {
                          var f = a.document.title;
                          b.N && b.N.title && (f = b.N.title);
                          var g = Jc("getElementsByTagName", a.document);
                          "string" !== typeof f && g && (f = g("title"),
                          f = (f = n(f, "0.innerHtml")) ? f : "");
                          f = f.slice(0, ua.Fg);
                          e.D("t", f)
                      }
                      d()
                  }
              }
          }
          function Qb(a) {
              return function(c, b) {
                  return {
                      O: function(d, e) {
                          var f = d.K
                            , g = d.J;
                          f && g && x(function(h) {
                              var k = Nd[h]
                                , l = "bi"
                                , m = f;
                              k || (k = qg[h],
                              l = "tel",
                              m = me(d));
                              k && (k = B(l + ":" + h, k, null)(c, b, d),
                              m.Vb(h, k))
                          }, a || Jr());
                          e()
                      }
                  }
              }
          }
          function Kr(a, c) {
              var b = Od(a);
              c.F(["initToParent"], function(d) {
                  var e = d[0];
                  d = d[1];
                  window.window && (b.children[d.counterId] = {
                      info: d,
                      window: e.source
                  })
              }).F(["initToChild"], function(d) {
                  var e = d[0];
                  d = d[1];
                  e.source === a.parent && c.aa("parentConnect", [e, d])
              }).F(["parentConnect"], function(d) {
                  var e = d[1];
                  e.counterId && (b.Ha[e.counterId] = {
                      info: e,
                      window: d[0].source
                  })
              })
          }
          function Lr(a) {
              if (La("MutationObserver", a.MutationObserver)) {
                  var c = Od(a).children
                    , b = new a.MutationObserver(function() {
                      x(function(d) {
                          n(c[d], "window.window") || delete c[d]
                      }, ha(c))
                  }
                  );
                  Ac(a)(bb(C, function() {
                      b.observe(a.document.body, {
                          subtree: !0,
                          childList: !0
                      })
                  }))
              }
          }
          function Mr(a, c) {
              return function(b, d) {
                  var e, f = {
                      kc: ja(a)(ca),
                      key: a.Math.random(),
                      dir: 0
                  };
                  b.length && (f.kc = Da(b[0]),
                  f.key = parseFloat(b[1]),
                  f.dir = Da(b[2]));
                  A(d, c);
                  var g = (e = {
                      data: d
                  },
                  e.__yminfo = G(":", ["__yminfo", f.kc, f.key, f.dir]),
                  e);
                  return {
                      meta: f,
                      lg: Ob(a, g) || ""
                  }
              }
          }
          function Ac(a, c) {
              function b(e) {
                  n(c, d) ? e() : W(a, u(e, b), 100)
              }
              void 0 === c && (c = a);
              var d = (c.nodeType ? "contentWindow." : "") + "document.body";
              return Ba(function(e, f) {
                  b(f)
              })
          }
          function Pd(a, c) {
              var b = c.ae
                , d = b || "uid";
              b = b ? a.location.hostname : void 0;
              var e = Ec(a)
                , f = Wa(a)
                , g = ja(a)(rg)
                , h = Lj(a, c)
                , k = h[0];
              h = h[1];
              var l = e.C("d");
              Mj(a, c);
              var m = !1;
              !h && k && (h = k,
              m = !0);
              if (!h)
                  h = G("", [g, Za(a, 1E6, 999999999)]),
                  m = !0;
              else if (!l || 15768E3 < g - Da(l))
                  m = !0;
              m && !c.Wa && (e.D(d, h, 525600, b),
              e.D("d", "" + g, 525600, b));
              f.D(d, h);
              return h
          }
          function Nr(a, c) {
              return !c.Wa && Mj(a, c)
          }
          function Lj(a, c) {
              var b = Wa(a)
                , d = Ec(a)
                , e = c.ae || "uid";
              return [b.C(e), d.C(e)]
          }
          function Hc(a) {
              var c = J(a)
                , b = c.C("hitId");
              b || (b = Za(a),
              c.D("hitId", b));
              return b
          }
          function gj(a, c, b) {
              var d = Na(c);
              return d && oj(a, c, Ea(["p", Or[d], "c"]), fj, b)
          }
          function ej(a, c) {
              var b = Yb(sg, a, c);
              if (!b) {
                  var d = Yb("div", a, c);
                  d && (ib(sg + ",div", d).length || (b = d))
              }
              return b
          }
          function oj(a, c, b, d, e) {
              return N(function(f, g) {
                  var h = null;
                  g in Nj ? h = c.getAttribute && c.getAttribute(Nj[g]) : g in Re && (h = "p" === g ? Re[g](a, c, e) : "c" === g ? Re[g](a, c, d) : Re[g](a, c));
                  h && (h = h.slice(0, Oj[g] || 100),
                  f[g] = tg[g] ? "" + mc(h) : h);
                  return f
              }, {}, b)
          }
          function rj(a) {
              var c = null;
              try {
                  c = a.target || a.srcElement
              } catch (b) {}
              if (c) {
                  3 === c.nodeType && (c = c.parentNode);
                  for (a = c && c.nodeName && ("" + c.nodeName).toLowerCase(); n(c, "parentNode.nodeName") && ("a" !== a && "area" !== a || !c.href && !c.getAttribute("xlink:href")); )
                      a = (c = c.parentNode) && c.nodeName && ("" + c.nodeName).toLowerCase();
                  return c.href ? c : null
              }
              return null
          }
          function ld(a, c) {
              var b = qb(a);
              if (b) {
                  var d = a.document
                    , e = b("script");
                  e.src = c.src;
                  e.type = c.type || "text/javascript";
                  e.charset = c.charset || "utf-8";
                  e.async = c.async || !0;
                  try {
                      var f = d.getElementsByTagName("head")[0];
                      if (!f) {
                          var g = d.getElementsByTagName("html")[0];
                          f = b("head");
                          g && g.appendChild(f)
                      }
                      f.insertBefore(e, f.firstChild);
                      return e
                  } catch (h) {}
              }
          }
          function ti(a, c) {
              var b = Pj(a);
              H(c, b.vb) && (b.vb = ka(w(Fa(c), Kc), b.vb),
              b.vb.length || (hc(b.lb),
              b.lb = null))
          }
          function si(a, c, b) {
              var d = Pj(c);
              H(b, d.vb) || d.vb.push(b);
              if (Ra(d.lb)) {
                  b = qb(a);
                  if (!b)
                      return null;
                  b = b("iframe");
                  A(b.style, {
                      display: "none",
                      width: "1px",
                      height: "1px",
                      visibility: "hidden"
                  });
                  b.src = c;
                  a = Bc(a);
                  if (!a)
                      return null;
                  a.appendChild(b);
                  d.lb = b
              } else
                  (a = n(d.lb, "contentWindow")) && a.postMessage("frameReinit", "*");
              return d.lb
          }
          function Pr(a, c) {
              var b = M(a) ? a : [a];
              c = c || document;
              if (c.querySelectorAll) {
                  var d = G(", ", z(function(e) {
                      return "." + e
                  }, b));
                  return Ha(c.querySelectorAll(d))
              }
              if (c.getElementsByClassName)
                  return lc(w(Ma("getElementsByClassName", c), Ha), b);
              d = c.getElementsByTagName("*");
              b = "(" + G("|", b) + ")";
              return ka(u(b, oc), Ha(d))
          }
          function Bf(a, c, b) {
              for (var d = "", e = cg(), f = Na(c) || "*"; c && c.parentNode && !H(f, ["BODY", "HTML"]); )
                  d += e[f] || "*",
                  d += Qj(a, c, b) || "",
                  c = c.parentElement,
                  f = Na(c) || "*";
              return cb(d, 128)
          }
          function Qj(a, c, b) {
              if (a = Se(a, c)) {
                  a = a.childNodes;
                  for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                      if (d === (a[f] && a[f].nodeName)) {
                          if (c === a[f])
                              return e;
                          b && a[f] === b || (e += 1)
                      }
              }
              return 0
          }
          function Se(a, c) {
              var b = n(a, "document");
              return c && c !== b.documentElement ? c === gc(a) ? b.documentElement : n(c, "parentNode") : null
          }
          function Uf(a, c) {
              var b = ug(a, c)
                , d = b.left;
              b = b.top;
              var e = Te(a, c);
              return [d, b, e[0], e[1]]
          }
          function Te(a, c) {
              var b = n(a, "document");
              if (c === gc(a) || c === b.documentElement) {
                  b = Bc(a);
                  var d = Qc(a);
                  return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
              }
              return (b = Pc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
          }
          function ug(a, c) {
              var b = c
                , d = n(a, "document")
                , e = Na(b);
              if (!b || !b.ownerDocument || "PARAM" === e || b === gc(a) || b === d.documentElement)
                  return {
                      left: 0,
                      top: 0
                  };
              if (d = Pc(b))
                  return b = eg(a),
                  {
                      left: Math.round(d.left + b.x),
                      top: Math.round(d.top + b.y)
                  };
              for (e = d = 0; b; )
                  d += b.offsetLeft,
                  e += b.offsetTop,
                  b = b.offsetParent;
              return {
                  left: d,
                  top: e
              }
          }
          function yi(a, c, b) {
              if (rd(a))
                  return Ha(b.querySelectorAll(c));
              var d = Rj(c.split(" "), b);
              return ka(function(e, f) {
                  return Pb(a)(e, d) === f
              }, d)
          }
          function Rj(a, c) {
              var b = xa([], a)
                , d = b.shift();
              if (!d)
                  return [];
              d = c.getElementsByTagName(d);
              return b.length ? lc(u(b, Rj), Ha(d)) : Ha(d)
          }
          function jc(a, c) {
              if (c.querySelector)
                  return c.querySelector(a);
              var b = ib(a, c);
              return b && b.length ? b[0] : null
          }
          function ib(a, c) {
              if (!c || !c.querySelectorAll)
                  return [];
              var b = c.querySelectorAll(a);
              return b ? Ha(b) : []
          }
          function Sj(a, c) {
              return fa(c, "isConnected") ? !c.isConnected : Yb("html", a, c) !== a.document.documentElement
          }
          function Yb(a, c, b) {
              if (!(c && c.Element && c.Element.prototype && c.document && b))
                  return null;
              if (c.Element.prototype.closest && La("closest", c.Element.prototype.closest) && b.closest)
                  return b.closest(a);
              var d = Fi(c);
              if (d) {
                  for (; b && 1 === b.nodeType && !d.call(b, a); )
                      b = b.parentElement || b.parentNode;
                  return b && 1 === b.nodeType ? b : null
              }
              if (rd(c)) {
                  for (a = Ha((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === Pb(c)(b, a); )
                      b = b.parentElement || b.parentNode;
                  return b && 1 === b.nodeType ? b : null
              }
              return null
          }
          function rd(a) {
              return !(!La("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
          }
          function Sh(a, c, b) {
              var d = c.top
                , e = c.bottom
                , f = c.left
                , g = b.w;
              b = b.h;
              a = a.Math;
              c = a.min(a.max(c.right, 0), g) - a.min(a.max(f, 0), g);
              return (a.min(a.max(e, 0), b) - a.min(a.max(d, 0), b)) * c
          }
          function Tj(a) {
              return Ue(a) && !Qa(Fa(a.type), Qr) ? Ve(a) ? !a.checked : !a.value : Rr(a) ? !a.value : Sr(a) ? 0 > a.selectedIndex : !0
          }
          function Na(a) {
              if (a)
                  try {
                      var c = a.nodeName;
                      if (S(c))
                          return c;
                      c = a.tagName;
                      if (S(c))
                          return c
                  } catch (b) {}
          }
          function Uj(a, c) {
              var b = a.document.getElementsByTagName("form");
              return Pb(a)(c, Ha(b))
          }
          function Tr(a, c, b) {
              b = Jc("dispatchEvent", b || a.document);
              var d = null
                , e = n(a, "Event.prototype.constructor");
              if (e && (La("(Event|Object|constructor)", e) || vg(a) && "[object Event]" === "" + e))
                  try {
                      d = new a.Event(c)
                  } catch (f) {
                      if ((a = Jc("createEvent", n(a, "document"))) && O(a)) {
                          try {
                              d = a(c)
                          } catch (g) {}
                          d && d.initEvent && d.initEvent(c, !1, !1)
                      }
                  }
              d && b(d)
          }
          function Pc(a) {
              try {
                  return a.getBoundingClientRect && a.getBoundingClientRect()
              } catch (c) {
                  return "object" === typeof c && null !== c && 16389 === (c.Kf && c.Kf & 65535) ? {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: 0,
                      right: 0
                  } : null
              }
          }
          function eg(a) {
              var c = gc(a)
                , b = n(a, "document");
              return {
                  x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                  y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
              }
          }
          function Qc(a) {
              var c = je(a);
              if (c) {
                  var b = c[2];
                  return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
              }
              c = Bc(a);
              return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
          }
          function je(a) {
              var c = n(a, "visualViewport.width")
                , b = n(a, "visualViewport.height");
              a = n(a, "visualViewport.scale");
              return ba(c) || ba(b) ? null : [Math.floor(c), Math.floor(b), a]
          }
          function Bc(a) {
              var c = n(a, "document") || {}
                , b = c.documentElement;
              return "CSS1Compat" === c.compatMode ? b : gc(a) || b
          }
          function gc(a) {
              a = n(a, "document");
              try {
                  return a.getElementsByTagName("body")[0]
              } catch (c) {
                  return null
              }
          }
          function oc(a, c) {
              try {
                  return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
              } catch (b) {
                  return !1
              }
          }
          function Lc(a) {
              var c;
              try {
                  if (c = a.target || a.srcElement)
                      !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== document && (c = null)
              } catch (b) {}
              return c
          }
          function hc(a) {
              var c = a && a.parentNode;
              c && c.removeChild(a)
          }
          function Nb(a) {
              return a ? a.innerText || "" : ""
          }
          function Xf(a) {
              if (ba(a))
                  return !1;
              a = a.nodeType;
              return 3 === a || 8 === a
          }
          function Vj(a, c, b) {
              void 0 === c && (c = "");
              void 0 === b && (b = "_ym");
              var d = "" + b + c;
              d && (d += "_");
              return {
                  Td: Ur(a),
                  C: function(e, f) {
                      var g = Wj(a, "" + d + e);
                      return Ra(g) && !T(f) ? f : g
                  },
                  D: function(e, f) {
                      Xj(a, "" + d + e, f);
                      return this
                  },
                  lc: function(e) {
                      Yj(a, "" + d + e);
                      return this
                  }
              }
          }
          function Xj(a, c, b) {
              var d = wg(a);
              a = Ob(a, b);
              if (!Ra(a))
                  try {
                      d.setItem(c, a)
                  } catch (e) {}
          }
          function Wj(a, c) {
              var b = wg(a);
              try {
                  return Vb(a, b.getItem(c))
              } catch (d) {}
              return null
          }
          function Yj(a, c) {
              var b = wg(a);
              try {
                  b.removeItem(c)
              } catch (d) {}
          }
          function wg(a) {
              try {
                  return a.localStorage
              } catch (c) {}
              return null
          }
          function Ob(a, c, b) {
              try {
                  return a.JSON.stringify(c, null, b)
              } catch (d) {
                  return null
              }
          }
          function me(a, c, b) {
              void 0 === b && (b = null);
              a.Ka || (a.Ka = Cf());
              c && a.Ka.Vb(c, b);
              return a.Ka
          }
          function We(a) {
              return {
                  O: function(c, b) {
                      var d = a.document
                        , e = c.K;
                      if (e && xg(a)) {
                          var f = la(a)
                            , g = function(h) {
                              xg(a) || (f.Ab(d, Zj, g),
                              b());
                              return h
                          };
                          f.F(d, Zj, g);
                          e.D("pr", "1")
                      } else
                          b()
                  }
              }
          }
          function Qd(a) {
              return function(c, b, d) {
                  return function(e, f) {
                      var g = z(w(Kd, Oe([c, f]), va), ak[a] || []);
                      g = xa(g, d);
                      return bk(c, b, g)(e)
                  }
              }
          }
          function bk(a, c, b) {
              var d = wb(a, c);
              return function(e) {
                  return ck(b, e, !0).then(function() {
                      var f = e.ja || {}
                        , g = f.Zh
                        , h = void 0 === g ? "" : g;
                      g = f.Da;
                      var k = void 0 === g ? "" : g;
                      f = f.ai;
                      f = z(function(l) {
                          return ua.Na + "//" + ("" + h + l || Xb) + "/" + k
                      }, void 0 === f ? [Xb] : f);
                      return d(e, f)
                  }).then(function(f) {
                      var g = f.fb;
                      f = f.xg;
                      e.Ti = g;
                      e.Ui = f;
                      return ck(b, e).then(u(g, Q))
                  })
              }
          }
          function wb(a, c) {
              return function(b, d) {
                  return dk(a, c, d, b)
              }
          }
          function dk(a, c, b, d, e, f) {
              var g;
              void 0 === e && (e = 0);
              void 0 === f && (f = 0);
              var h = A({
                  ha: []
              }, d.V)
                , k = c[f]
                , l = k[0];
              k = k[1];
              var m = b[e];
              h.bb && h.bb["Content-Type"] || !h.ca || (h.bb = A({}, h.bb, (g = {},
              g["Content-Type"] = "application/x-www-form-urlencoded",
              g)),
              h.ca = "site-info=" + ve(h.ca));
              h.bd = h.ca ? "POST" : "GET";
              h.cb = Vr(a, d, l);
              h.Da = (d.ja || {}).Da;
              h.ha.push(l);
              A(d.V, h);
              g = "" + m + (d.Pc && d.Pc.zi ? "/1" : "");
              var p = 0;
              p = Wr(a, g, h);
              return k(g, h).then(function(q) {
                  var r = p, t, y;
                  vb(a, (t = {},
                  t.name = "requestSuccess",
                  t.data = (y = {},
                  y.body = q,
                  y.requestId = r,
                  y),
                  t));
                  return {
                      fb: q,
                      xg: e
                  }
              })["catch"](function(q) {
                  var r = p, t, y;
                  vb(a, (t = {},
                  t.name = "requestFail",
                  t.data = (y = {},
                  y.error = q,
                  y.requestId = r,
                  y),
                  t));
                  r = f + 1 >= c.length;
                  t = e + 1 >= b.length;
                  r && t && Va(q);
                  return dk(a, c, b, d, !t && r ? e + 1 : e, r ? 0 : f + 1)
              })
          }
          function Vr(a, c, b) {
              var d = A({}, c.J);
              a = ja(a);
              c.K && (d["browser-info"] = Ia(c.K.l()).D("st", a(rg)).Ia());
              !d.t && (c = c.Ka) && (c.D("ti", b),
              d.t = c.Ia());
              return d
          }
          function Wr(a, c, b) {
              var d, e, f, g = Za(a), h = b.ha, k = b.ca, l = b.bb, m = b.cb;
              b = b.bd;
              vb(a, (d = {},
              d.name = "request",
              d.data = (e = {},
              e.url = c,
              e.requestId = g,
              e.senderParams = (f = {},
              f.rBody = k,
              f.debugStack = h,
              f.rHeaders = l,
              f.rQuery = m,
              f.verb = b,
              f),
              e),
              d));
              return g
          }
          function ek(a, c, b, d) {
              a[c] || (a[c] = []);
              b && !ba(d) && fk(a[c], b, d)
          }
          function fk(a, c, b) {
              for (var d = [c, b], e = -1E4, f = 0; f < a.length; f += 1) {
                  var g = a[f]
                    , h = g[0];
                  g = g[1];
                  if (b === g && h === c)
                      return;
                  if (b < g && b >= e) {
                      a.splice(f, 0, d);
                      return
                  }
                  e = g
              }
              a.push(d)
          }
          function ck(a, c, b) {
              void 0 === b && (b = !1);
              return new K(function(d, e) {
                  function f(k, l) {
                      l();
                      d()
                  }
                  var g = a.slice();
                  g.push({
                      O: f,
                      sa: f
                  });
                  var h = kc(g, function(k, l) {
                      var m = b ? k.O : k.sa;
                      if (m)
                          try {
                              m(c, l)
                          } catch (p) {
                              h(Xr),
                              e(p)
                          }
                      else
                          l()
                  });
                  h(gk)
              }
              )
          }
          function Tb(a, c, b) {
              var d = b || "as";
              if (a.postMessage && !a.attachEvent) {
                  b = la(a);
                  var e = "__ym__promise_" + Za(a) + "_" + Za(a)
                    , f = C;
                  d = D(a, d, function(g) {
                      try {
                          var h = g.data
                      } catch (k) {
                          return
                      }
                      h === e && (f(),
                      g.stopPropagation && g.stopPropagation(),
                      c())
                  });
                  f = b.F(a, ["message"], d);
                  a.postMessage(e, "*")
              } else
                  W(a, c, 0, d)
          }
          function xh(a, c, b, d, e) {
              void 0 === d && (d = 1);
              void 0 === e && (e = "itc");
              c = kc(c, b);
              qd(a, c, d)(bb(D(a, e), C))
          }
          function qd(a, c, b, d) {
              void 0 === b && (b = 1);
              void 0 === d && (d = hk);
              yg = Infinity === b;
              return Ba(function(e, f) {
                  function g() {
                      try {
                          var k = c(d(a, b));
                          h = h.concat(k)
                      } catch (l) {
                          return e(l)
                      }
                      c(Yr);
                      if (c(Rd))
                          return f(h),
                          ik(a);
                      yg ? (c(d(a, 1E4)),
                      f(h),
                      ik(a)) : W(a, g, 100)
                  }
                  var h = [];
                  Zr(g)
              })
          }
          function ik(a) {
              if (zg.length) {
                  var c = zg.shift();
                  yg ? c() : W(a, c, 100)
              } else
                  Ag = !1
          }
          function Zr(a) {
              Ag ? zg.push(a) : (Ag = !0,
              a())
          }
          function Nf(a) {
              return Ba(function(c, b) {
                  b(a)
              })
          }
          function iq(a) {
              return Ba(function(c, b) {
                  a.then(b, c)
              })
          }
          function $r(a) {
              var c = []
                , b = 0;
              return Ba(function(d, e) {
                  x(function(f, g) {
                      f(bb(d, function(h) {
                          try {
                              c[g] = h,
                              b += 1,
                              b === a.length && e(c)
                          } catch (k) {
                              d(k)
                          }
                      }))
                  }, a)
              })
          }
          function hq(a) {
              var c = []
                , b = !1;
              return Ba(function(d, e) {
                  function f(g) {
                      c.push(g) === a.length && d(c)
                  }
                  x(function(g) {
                      g(bb(f, function(h) {
                          if (!b)
                              try {
                                  e(h),
                                  b = !0
                              } catch (k) {
                                  f(k)
                              }
                      }))
                  }, a)
              })
          }
          function bb(a, c) {
              return function(b) {
                  return b(a, c)
              }
          }
          function kc(a, c) {
              return Ba({
                  Va: a,
                  Xd: c || Q,
                  Ee: !1,
                  za: 0
              })
          }
          function gk(a) {
              function c() {
                  function d() {
                      b = !0;
                      a.za += 1
                  }
                  b = !1;
                  a.Xd(a.Va[a.za], function() {
                      d()
                  });
                  b || (a.za += 1,
                  d = u(a, gk))
              }
              for (var b = !0; !Rd(a) && b; )
                  c()
          }
          function hk(a, c) {
              return function(b) {
                  var d = ja(a)
                    , e = d(ca);
                  return jk(function(f, g) {
                      d(ca) - e >= c && g(kk)
                  })(b)
              }
          }
          function Bg(a, c) {
              return function(b) {
                  var d = ja(a)
                    , e = d(ca);
                  return Cg(function(f) {
                      d(ca) - e >= c && kk(f)
                  })(b)
              }
          }
          function Cg(a) {
              return function(c) {
                  for (var b; c.Va.length && !Rd(c); )
                      b = c.Va.pop(),
                      b = c.Xd(b, c.Va),
                      a(c);
                  return b
              }
          }
          function as(a) {
              Rd(a) && Va(Aa("i"));
              var c = a.Xd(a.Va[a.za]);
              a.za += 1;
              return c
          }
          function Yr(a) {
              a.Ee = !1
          }
          function kk(a) {
              a.Ee = !0
          }
          function Xr(a) {
              a.za = a.Va.length
          }
          function Rd(a) {
              return a.Ee || a.Va.length <= a.za
          }
          function Db(a) {
              a = ja(a);
              return Math.round(a(lk) / 50)
          }
          function lk(a) {
              var c = a.Nc
                , b = c[1];
              a = c[0] && b ? b() : ca(a) - a.bi;
              return Math.round(a)
          }
          function rg(a) {
              return Math.round(ca(a) / 1E3)
          }
          function rb(a) {
              return Math.floor(ca(a) / 1E3 / 60)
          }
          function ca(a) {
              var c = a.Me;
              return 0 !== c ? c : Dg(a.l, a.Nc)
          }
          function mg(a) {
              var c = la(a)
                , b = mk(a)
                , d = {
                  l: a,
                  Me: 0,
                  Nc: b,
                  bi: Dg(a, b)
              }
                , e = b[1];
              b[0] && e || c.F(a, ["beforeunload", "unload"], function() {
                  0 === d.Me && (d.Me = Dg(a, d.Nc))
              });
              return Ba(d)
          }
          function bs(a) {
              return (10 > a ? "0" : "") + a
          }
          function cs(a, c) {
              return a.clearInterval(c)
          }
          function ds(a, c, b, d) {
              return a.setInterval(D(a, "i.err." + (d || "def"), c), b)
          }
          function W(a, c, b, d) {
              return Md(a, D(a, "d.err." + (d || "def"), c), b)
          }
          function vd(a) {
              var c = {};
              return {
                  F: function(b, d) {
                      x(function(e) {
                          n(c, e) || (c[e] = tj(a));
                          c[e].F(d)
                      }, b);
                      return this
                  },
                  ia: function(b, d) {
                      x(function(e) {
                          n(c, e) && c[e].ia(d)
                      }, b);
                      return this
                  },
                  aa: function(b, d) {
                      return n(c, b) ? D(a, "e." + d, c[b].aa)(d) : []
                  }
              }
          }
          function tj(a) {
              var c = []
                , b = {};
              b.Uj = c;
              b.F = w(Ma("push", c), u(b, Q));
              b.ia = w(Xa(Pb(a))(c), Xa(Ma("splice", c))(1), u(b, Q));
              b.aa = w(Q, Xa(va), es(c));
              return b
          }
          function nk(a, c, b, d, e, f) {
              a = fs(a);
              var g = a.F
                , h = a.ia;
              f = f ? h : g;
              if (c[f])
                  if (a.dj)
                      if (e)
                          c[f](b, d, e);
                      else
                          c[f](b, d);
                  else
                      c[f]("on" + b, d)
          }
          function B(a, c, b) {
              return function() {
                  return D(arguments[0], a, c, b).apply(this, arguments)
              }
          }
          function D(a, c, b, d, e) {
              var f = b || Va;
              return function() {
                  var g = d;
                  try {
                      g = f.apply(e || null, arguments)
                  } catch (h) {
                      Oc(a, c, h)
                  }
                  return g
              }
          }
          function Dg(a, c) {
              var b = c || mk(a)
                , d = b[0];
              b = b[1];
              return !isNaN(d) && O(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
          }
          function mk(a) {
              a = Ed(a);
              var c = n(a, "timing.navigationStart")
                , b = n(a, "now");
              b && (b = I(b, a));
              return [c, b]
          }
          function Ed(a) {
              return n(a, "performance") || n(a, "webkitPerformance")
          }
          function Oc(a, c, b) {
              var d = "u.a.e"
                , e = "";
              b && ("object" === typeof b ? (b.unk && Va(b),
              d = b.message,
              e = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + b);
              gs(d) || Qa(u(d, ab), hs) || is(d) && .1 <= a.Math.random() || x(w(Q, Oe(["jserrs", d, c, e]), va), ok)
          }
          function be() {
              var a = Pa(arguments);
              return Va(Sa(a))
          }
          function Sa(a) {
              var c = "";
              M(a) ? c = G(".", a) : S(a) && (c = a);
              return Aa("err.kn(" + ua.hb + ")" + c)
          }
          function Ej(a) {
              return Aa("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
          }
          function js(a) {
              this.message = a
          }
          function vb(a, c) {
              if (Xe(a)) {
                  var b = c.counterKey;
                  if (b) {
                      var d = b.split(":");
                      b = d[1];
                      d = Eg(se(d[0]));
                      if ("1" === b || d)
                          return
                  }
                  b = ks(a);
                  1E3 === b.length && b.shift();
                  b.push(c)
              }
          }
          function Gi(a, c, b) {
              Ye(a, "metrika_enabled", "1", 0, c, b, !0);
              var d = pk(a);
              (d = d && d.metrika_enabled) && qk(a, "metrika_enabled", c, b, !0);
              return !!d
          }
          function Ye(a, c, b, d, e, f, g) {
              void 0 === g && (g = !1);
              if (Hi(a, Ad, c)) {
                  var h = c + "=" + encodeURIComponent(b) + ";";
                  h += "" + ls(a);
                  if (d) {
                      var k = new Date;
                      k.setTime(k.getTime() + 6E4 * d);
                      h += "expires=" + k.toUTCString() + ";"
                  }
                  e && (d = e.replace(ms, ""),
                  h += "domain=" + d + ";");
                  try {
                      a.document.cookie = h + ("path=" + (f || "/")),
                      g || (rk(a)[c] = b)
                  } catch (l) {}
              }
          }
          function Ad(a, c) {
              var b = rk(a);
              return b ? b[c] || null : null
          }
          function pk(a) {
              try {
                  var c = a.document.cookie;
                  if (!ba(c)) {
                      var b = {};
                      x(function(d) {
                          d = d.split("=");
                          var e = d[1];
                          b[cb(d[0])] = cb(sk(e))
                      }, (c || "").split(";"));
                      return b
                  }
              } catch (d) {}
              return null
          }
          function Hi(a, c, b) {
              return !Fg.length || H(b, Ze) ? !0 : N(function(d, e) {
                  return d && e(a, c, b)
              }, !0, Fg)
          }
          function Ic(a) {
              return a ? w(za, tk(function(c, b) {
                  var d = b[0]
                    , e = b[1];
                  T(e) || ba(e) || c.push(d + "=" + ve(e));
                  return c
              }, []), Ee("&"))(a) : ""
          }
          function uk(a) {
              return a ? w(Eb(function(c) {
                  c = c.split("=");
                  var b = c[1];
                  return [c[0], ba(b) ? void 0 : sk(b)]
              }), tk(function(c, b) {
                  c[b[0]] = b[1];
                  return c
              }, {}))(a.split("&")) : {}
          }
          function sk(a) {
              var c = "";
              try {
                  c = decodeURIComponent(a)
              } catch (b) {}
              return c
          }
          function ve(a) {
              try {
                  return encodeURIComponent(a)
              } catch (c) {}
              a = G("", ka(function(c) {
                  return 55296 >= c.charCodeAt(0)
              }, a.split("")));
              return encodeURIComponent(a)
          }
          function cb(a, c) {
              if (a) {
                  var b = vk ? vk.call(a) : ("" + a).replace(Ij, "");
                  return c && b.length > c ? b.substring(0, c) : b
              }
              return ""
          }
          function Aj(a) {
              var c = a.match(wk);
              if (c) {
                  a = c[1];
                  if (c = c[2])
                      return H(c, Gg) ? c : !1;
                  if (a)
                      return Gg[0]
              }
              return !1
          }
          function X(a) {
              return N(function(c, b) {
                  var d = n(a, "location." + b);
                  c[b] = d ? "" + d : "";
                  return c
              }, {}, ns)
          }
          function xk(a) {
              return N(function(c, b) {
                  c[ce[b[0]].ea] = b[1];
                  return c
              }, {}, za(a))
          }
          function ac(a) {
              A(ce, a)
          }
          function qm(a, c, b, d, e) {
              var f = wh(a, b, d, e);
              a = N(function(g, h) {
                  var k = h[1]
                    , l = k.Xa;
                  k = f[k.ea];
                  g[h[0]] = l ? l(k) : k;
                  return g
              }, {}, za(c));
              vj(a, a.L || {});
              return a
          }
          function wh(a, c, b, d) {
              var e;
              return ia(a) ? a : (e = {},
              e.id = a,
              e.type = b,
              e.defer = d,
              e.params = c,
              e)
          }
          function os(a) {
              a = L(a);
              return tc[a] && tc[a].jj || null
          }
          function yk(a) {
              a = L(a);
              return tc[a] && tc[a].ij
          }
          function vj(a, c) {
              var b = L(a)
                , d = n(c, "__ym.turbo_page")
                , e = n(c, "__ym.turbo_page_id");
              tc[b] || (tc[b] = {});
              if (d || e)
                  tc[b].ij = d,
                  tc[b].jj = e
          }
          function Ff(a, c) {
              if (Sd(a) && c) {
                  var b = ub(a).match(Hg);
                  if (b && b.length)
                      return +b[1] >= c
              }
              return !1
          }
          function Gf(a, c) {
              var b = ub(a);
              return b && (b = b.match(ps)) && 1 < b.length ? Da(b[1]) >= c : !1
          }
          function xg(a) {
              return H("prerender", z(u(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
          }
          function Za(a, c, b) {
              var d = T(b);
              T(c) && d ? (d = 1,
              c = 1073741824) : d ? d = 1 : (d = c,
              c = b);
              return a.Math.floor(a.Math.random() * (c - d)) + d
          }
          function qs() {
              var a = Pa(arguments)
                , c = a[0];
              for (a = a.slice(1); a.length; ) {
                  var b = a.shift(), d;
                  for (d in b)
                      fa(b, d) && (c[d] = b[d]);
                  fa(b, "toString") && (c.toString = b.toString)
              }
              return c
          }
          function rs(a) {
              return function(c) {
                  return c ? a(c) : []
              }
          }
          function zk(a) {
              return T(a) ? [] : Ig(function(c, b) {
                  c.push([b, a[b]]);
                  return c
              }, [], Ak(a))
          }
          function Ak(a) {
              var c = [], b;
              for (b in a)
                  fa(a, b) && c.push(b);
              return c
          }
          function he(a, c) {
              return Ra(c) || T(c) || Mb(a, c) || S(c) || !!c === c
          }
          function se(a) {
              try {
                  return parseInt(a, 10)
              } catch (c) {
                  return null
              }
          }
          function Mb(a, c) {
              return a.isFinite(c) && !a.isNaN(c) && "[object Number]" === Object.prototype.toString.call(c)
          }
          function ss(a) {
              for (var c = [], b = a.length - 1; 0 <= b; --b)
                  c[a.length - 1 - b] = a[b];
              return c
          }
          function xa(a, c) {
              x(w(Q, Ma("push", a)), c);
              return a
          }
          function id(a, c) {
              return Array.prototype.sort.call(c, a)
          }
          function $e(a) {
              return a.splice(0, a.length)
          }
          function Ha(a) {
              return a ? M(a) ? a : od ? od(a) : "number" === typeof a.length && 0 <= a.length ? Bk(a) : [] : []
          }
          function ts(a, c) {
              for (var b = 0; b < c.length; b += 1)
                  if (b in c && a.call(c, c[b], b))
                      return !0;
              return !1
          }
          function us(a, c) {
              return N(function(b, d, e) {
                  d = a(d, e);
                  return b.concat(M(d) ? d : [d])
              }, [], c)
          }
          function Ck(a, c) {
              return N(function(b, d, e) {
                  b.push(a(d, e));
                  return b
              }, [], c)
          }
          function vs(a, c) {
              if (!Sd(a))
                  return !0;
              try {
                  c.call({
                      0: !0,
                      length: -Math.pow(2, 32) + 1
                  }, function() {
                      throw 1;
                  })
              } catch (b) {
                  return !1
              }
              return !0
          }
          function Jg(a, c) {
              return -1 !== (n(c, "navigator.userAgent") || "").toLowerCase().search(a)
          }
          function ws(a, c) {
              for (var b = "", d = 0; d < c.length; d += 1)
                  b += "" + (d ? a : "") + c[d];
              return b
          }
          function xs(a, c) {
              return 1 <= Dk(Fa(a), c).length
          }
          function ys(a, c) {
              for (var b = 0; b < c.length; b += 1)
                  if (a.call(c, c[b], b))
                      return c[b]
          }
          function Dk(a, c) {
              return Ig(function(b, d, e) {
                  a(d, e) && b.push(d);
                  return b
              }, [], c)
          }
          function ze(a, c, b) {
              return b ? a : c
          }
          function zs(a, c) {
              return N(function(b, d, e) {
                  return b ? !!a(d, e) : !1
              }, !0, c)
          }
          function gg(a, c, b) {
              try {
                  if (O(c)) {
                      var d = Pa(arguments).slice(3);
                      c.apply(ba(b) ? null : b, d)
                  }
              } catch (e) {
                  Md(a, u(e, Va), 0)
              }
          }
          function Va(a) {
              throw a;
          }
          function Md(a, c, b) {
              return Jc("setTimeout", a)(c, b)
          }
          function ma(a, c) {
              return Jc("clearTimeout", a)(c)
          }
          function Hd() {
              return []
          }
          function uc() {
              return {}
          }
          function Jc(a, c) {
              var b = n(c, a)
                , d = n(c, "constructor.prototype." + a) || b;
              try {
                  if (d && d.apply)
                      return function() {
                          return d.apply(c, arguments)
                      }
              } catch (e) {
                  return b
              }
              return d
          }
          function Hb(a, c, b) {
              return function() {
                  var d = J(arguments[0])
                    , e = b ? "global" : "m1491"
                    , f = d.C(e, {})
                    , g = n(f, a);
                  g || (g = v(c),
                  f[a] = g,
                  d.D(e, f));
                  return g.apply(null, arguments)
              }
          }
          function ue(a, c) {
              void 0 === c && (c = {});
              if (!a || 1 > a.length)
                  return c;
              Cb(function(b, d, e) {
                  if (e === a.length - 1)
                      return b;
                  e === a.length - 2 ? b[d] = a[e + 1] : fa(b, d) || (b[d] = {});
                  return b[d]
              }, c, a);
              return c
          }
          function af(a) {
              a = a.Ya = a.Ya || {};
              var c = a._metrika = a._metrika || {};
              return {
                  Ja: function(b, d) {
                      Kg.call(c, b) || (c[b] = d);
                      return this
                  },
                  D: function(b, d) {
                      c[b] = d;
                      return this
                  },
                  C: function(b, d) {
                      var e = c[b];
                      return Kg.call(c, b) || T(d) ? e : d
                  }
              }
          }
          function fa(a, c) {
              return ba(a) ? !1 : Kg.call(a, c)
          }
          function v(a, c) {
              var b = []
                , d = [];
              var e = c ? c : Q;
              return function() {
                  var f = Pa(arguments)
                    , g = e.apply(void 0, f)
                    , h = ie(g, d);
                  if (-1 !== h)
                      return b[h];
                  f = a.apply(void 0, f);
                  b.push(f);
                  d.push(g);
                  return f
              }
          }
          function Pb(a) {
              if (Lg)
                  return Lg;
              var c = !1;
              try {
                  c = [].indexOf && 0 === [void 0].indexOf(void 0)
              } catch (d) {}
              var b = a.Array && a.Array.prototype && pa(a.Array.prototype.indexOf, "indexOf");
              a = void 0;
              return Lg = a = c && b ? function(d, e) {
                  return b.call(e, d)
              }
              : As
          }
          function As(a, c) {
              for (var b = 0; b < c.length; b += 1)
                  if (c[b] === a)
                      return b;
              return -1
          }
          function va(a, c) {
              return c ? a(c) : a()
          }
          function w() {
              var a = Pa(arguments)
                , c = a.shift();
              return function() {
                  var b = c.apply(void 0, arguments);
                  return N(Ek, b, a)
              }
          }
          function tk(a, c) {
              return E([a, c], N)
          }
          function Ig(a, c, b) {
              for (var d = 0, e = b.length; d < e; )
                  c = a(c, b[d], d),
                  d += 1;
              return c
          }
          function lb(a) {
              return Ma("test", a)
          }
          function Ma(a, c) {
              return I(c[a], c)
          }
          function u(a, c) {
              return I(c, null, a)
          }
          function E(a, c) {
              return I.apply(void 0, kd([c, null], a))
          }
          function Bs(a) {
              return function() {
                  var c = Pa(arguments);
                  return a.apply(c[0], [c[1]].concat(c.slice(2)))
              }
          }
          function Cs() {
              var a = Pa(arguments)
                , c = a[0]
                , b = a[1]
                , d = a.slice(2);
              return function() {
                  var e = kd(d, Pa(arguments));
                  if (Function.prototype.call)
                      return Function.prototype.call.apply(c, kd([b], e));
                  if (b) {
                      for (var f = "_b"; b[f]; )
                          f += "_" + f.length;
                      b[f] = c;
                      e = b[f] && Fk(f, e, b);
                      delete b[f];
                      return e
                  }
                  return Fk(c, e)
              }
          }
          function Fk(a, c, b) {
              void 0 === c && (c = []);
              b = b || {};
              var d = c.length
                , e = a;
              O(e) && (e = "d",
              b[e] = a);
              var f;
              d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
              return f
          }
          function Pa(a) {
              if (od)
                  try {
                      return od(a)
                  } catch (c) {}
              return Bk(a)
          }
          function Bk(a) {
              for (var c = a.length, b = [], d = 0; d < c; d += 1)
                  b.push(a[d]);
              return b
          }
          function ia(a) {
              return !Ra(a) && !T(a) && "[object Object]" === Object.prototype.toString.call(a)
          }
          function ba(a) {
              return T(a) || Ra(a)
          }
          function O(a) {
              return "function" === typeof a
          }
          function Xa(a) {
              return function(c) {
                  return function(b) {
                      return a(b, c)
                  }
              }
          }
          function oa(a) {
              return function(c) {
                  return function(b) {
                      return a(c, b)
                  }
              }
          }
          function Ek(a, c) {
              return c(a)
          }
          function br(a) {
              return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(lg, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
          }
          function Ds(a) {
              return "" + a
          }
          function ab(a, c) {
              return !(!a || -1 === pb(a, c))
          }
          function pc(a, c) {
              return pb(a, c)
          }
          function Es(a, c) {
              for (var b = 0, d = a.length - c.length, e = 0; e < a.length; e += 1) {
                  b = a[e] === c[b] ? b + 1 : 0;
                  if (b === c.length)
                      return e - c.length + 1;
                  if (!b && e > d)
                      break
              }
              return -1
          }
          function S(a) {
              return "string" === typeof a
          }
          function pa(a, c) {
              return La(c, a) && a
          }
          function La(a, c) {
              var b = bf(a, c);
              c && !b && Mg.push([a, c]);
              return b
          }
          function bf(a, c) {
              if (!c || "function" !== typeof c)
                  return !1;
              try {
                  var b = "" + c
              } catch (h) {
                  return !1
              }
              var d = b.length;
              if (d > 35 + a.length)
                  return !1;
              for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
                  f = "[native code]"[f] === b[g] || 7 === f && "-" === b[g] ? f + 1 : 0;
                  if (12 === f)
                      return !0;
                  if (!f && g > e)
                      break
              }
              return !1
          }
          function C() {}
          function Ng(a, c) {
              Ng = Object.setPrototypeOf || {
                  __proto__: []
              }instanceof Array && function(b, d) {
                  b.__proto__ = d
              }
              || function(b, d) {
                  for (var e in d)
                      d.hasOwnProperty(e) && (b[e] = d[e])
              }
              ;
              return Ng(a, c)
          }
          function Kc(a) {
              return !a
          }
          function fb(a, c) {
              return c
          }
          function Q(a) {
              return a
          }
          function Oa(a, c) {
              function b() {
                  this.constructor = a
              }
              Ng(a, c);
              a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype,
              new b)
          }
          function kd() {
              for (var a = 0, c = 0, b = arguments.length; c < b; c++)
                  a += arguments[c].length;
              a = Array(a);
              var d = 0;
              for (c = 0; c < b; c++)
                  for (var e = arguments[c], f = 0, g = e.length; f < g; f++,
                  d++)
                      a[d] = e[f];
              return a
          }
          function n(a, c) {
              return a ? N(function(b, d) {
                  if (ba(b))
                      return b;
                  try {
                      return b[d]
                  } catch (e) {}
                  return null
              }, a, c.split(".")) : null
          }
          function Fs(a) {
              return "[object Array]" === Object.prototype.toString.call(a)
          }
          function Gs() {}
          function Hs(a, c) {
              return function() {
                  a.apply(c, arguments)
              }
          }
          function Ja(a) {
              if (!(this instanceof Ja))
                  throw new TypeError("Promises must be constructed via new");
              if ("function" !== typeof a)
                  throw new TypeError("not a function");
              this.Ma = 0;
              this.Te = !1;
              this.Sa = void 0;
              this.Db = [];
              Gk(a, this)
          }
          function Hk(a, c) {
              for (; 3 === a.Ma; )
                  a = a.Sa;
              0 === a.Ma ? a.Db.push(c) : (a.Te = !0,
              Ja.Ue(function() {
                  var b = 1 === a.Ma ? c.Ei : c.Ii;
                  if (null === b)
                      (1 === a.Ma ? Og : Td)(c.promise, a.Sa);
                  else {
                      try {
                          var d = b(a.Sa)
                      } catch (e) {
                          Td(c.promise, e);
                          return
                      }
                      Og(c.promise, d)
                  }
              }))
          }
          function Og(a, c) {
              try {
                  if (c === a)
                      throw new TypeError("A promise cannot be resolved with itself.");
                  if (c && ("object" === typeof c || "function" === typeof c)) {
                      var b = c.then;
                      if (c instanceof Ja) {
                          a.Ma = 3;
                          a.Sa = c;
                          Pg(a);
                          return
                      }
                      if ("function" === typeof b) {
                          Gk(Hs(b, c), a);
                          return
                      }
                  }
                  a.Ma = 1;
                  a.Sa = c;
                  Pg(a)
              } catch (d) {
                  Td(a, d)
              }
          }
          function Td(a, c) {
              a.Ma = 2;
              a.Sa = c;
              Pg(a)
          }
          function Pg(a) {
              2 === a.Ma && 0 === a.Db.length && Ja.Ue(function() {
                  a.Te || Ja.Lg(a.Sa)
              });
              for (var c = 0, b = a.Db.length; c < b; c++)
                  Hk(a, a.Db[c]);
              a.Db = null
          }
          function Is(a, c, b) {
              this.Ei = "function" === typeof a ? a : null;
              this.Ii = "function" === typeof c ? c : null;
              this.promise = b
          }
          function Gk(a, c) {
              var b = !1;
              try {
                  a(function(d) {
                      b || (b = !0,
                      Og(c, d))
                  }, function(d) {
                      b || (b = !0,
                      Td(c, d))
                  })
              } catch (d) {
                  b || (b = !0,
                  Td(c, d))
              }
          }
          function qk(a, c, b, d, e) {
              void 0 === e && (e = !1);
              return Ye(a, c, "", -100, b, d, e)
          }
          function pd(a, c, b) {
              void 0 === c && (c = "_ym_");
              void 0 === b && (b = "");
              var d = Js(a)
                , e = 1 === (d || "").split(".").length ? d : "." + d
                , f = b ? "_" + b : "";
              return {
                  lc: function(g, h, k) {
                      qk(a, "" + c + g + f, h || e, k);
                      return this
                  },
                  C: function(g) {
                      return Ad(a, "" + c + g + f)
                  },
                  D: function(g, h, k, l, m) {
                      Ye(a, "" + c + g + f, h, k, l || e, m);
                      return this
                  }
              }
          }
          function Vb(a, c) {
              if (!c)
                  return null;
              try {
                  return a.JSON.parse(c)
              } catch (b) {
                  return null
              }
          }
          function mc(a) {
              a = "" + a;
              for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1)
                  c ^= a.charCodeAt(d),
                  c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
              return c >>> 0
          }
          function Ub(a, c) {
              var b = Ks(a);
              return b ? (b.href = c,
              {
                  protocol: b.protocol,
                  host: b.host,
                  port: b.port,
                  hostname: b.hostname,
                  hash: b.hash,
                  search: b.search,
                  query: b.search.replace(/^\?/, ""),
                  pathname: b.pathname || "/",
                  path: (b.pathname || "/") + b.search,
                  href: b.href
              }) : {}
          }
          function Ik(a) {
              return (a = X(a).hash.split("#")[1]) ? a.split("?")[0] : ""
          }
          function Ls(a, c) {
              var b = Ik(a);
              Jk = ds(a, function() {
                  var d = Ik(a);
                  d !== b && (c(),
                  b = d)
              }, 200, "t.h");
              return I(cs, null, a, Jk)
          }
          function Ms(a, c, b, d) {
              var e, f, g = c.ba, h = c.Pe, k = c.vc, l = J(a), m = Ia((e = {},
              e.wh = 1,
              e.pv = 1,
              e));
              e = n(d, "isTrusted");
              d && !ba(e) && m.D("ite", tb(e));
              de(g) && a.Ya && a.Ya.Direct && m.D("ad", "1");
              h && m.D("ut", "1");
              g = l.C("lastReferrer");
              d = X(a).href;
              k = {
                  J: (f = {},
                  f["page-url"] = k || d,
                  f["page-ref"] = g,
                  f),
                  K: m
              };
              b(k, c)["catch"](D(a, "g.s"));
              l.D("lastReferrer", d)
          }
          function Ns(a, c, b) {
              function d() {
                  r || (q = !0,
                  t = !1,
                  r = !0,
                  f())
              }
              function e() {
                  m = !0;
                  k(!1);
                  c()
              }
              function f() {
                  ma(a, l);
                  if (m)
                      k(!1);
                  else {
                      var P = Math.max(0, b - (t ? y : y + p(ca) - F));
                      P ? l = W(a, e, P, "u.t.d.c") : e()
                  }
              }
              function g() {
                  t = q = r = !0;
                  y += p(ca) - F;
                  F = p(ca);
                  f()
              }
              function h() {
                  q || r || (y = 0);
                  F = p(ca);
                  q = r = !0;
                  t = !1;
                  f()
              }
              function k(P) {
                  P = P ? R.F : R.Ab;
                  P(a, ["blur"], g);
                  P(a, ["focus"], h);
                  P(a.document, ["click", "mousemove", "keydown", "scroll"], d)
              }
              var l = 0
                , m = !1;
              if (vg(a))
                  return l = W(a, c, b, "u.t.d"),
                  E([a, l], ma);
              var p = ja(a)
                , q = !1
                , r = !1
                , t = !0
                , y = 0
                , F = p(ca)
                , R = la(a);
              k(!0);
              f();
              return function() {
                  ma(a, l);
                  k(!1)
              }
          }
          function xb(a, c) {
              a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
              c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
              var b = [0, 0, 0, 0];
              b[3] += a[3] * c[3];
              b[2] += b[3] >>> 16;
              b[3] &= 65535;
              b[2] += a[2] * c[3];
              b[1] += b[2] >>> 16;
              b[2] &= 65535;
              b[2] += a[3] * c[2];
              b[1] += b[2] >>> 16;
              b[2] &= 65535;
              b[1] += a[1] * c[3];
              b[0] += b[1] >>> 16;
              b[1] &= 65535;
              b[1] += a[2] * c[2];
              b[0] += b[1] >>> 16;
              b[1] &= 65535;
              b[1] += a[3] * c[1];
              b[0] += b[1] >>> 16;
              b[1] &= 65535;
              b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
              b[0] &= 65535;
              return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
          }
          function vc(a, c) {
              a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
              c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
              var b = [0, 0, 0, 0];
              b[3] += a[3] + c[3];
              b[2] += b[3] >>> 16;
              b[3] &= 65535;
              b[2] += a[2] + c[2];
              b[1] += b[2] >>> 16;
              b[2] &= 65535;
              b[1] += a[1] + c[1];
              b[0] += b[1] >>> 16;
              b[1] &= 65535;
              b[0] += a[0] + c[0];
              b[0] &= 65535;
              return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
          }
          function Wc(a, c) {
              c %= 64;
              if (32 === c)
                  return [a[1], a[0]];
              if (32 > c)
                  return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
              c -= 32;
              return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
          }
          function mb(a, c) {
              c %= 64;
              return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
          }
          function ya(a, c) {
              return [a[0] ^ c[0], a[1] ^ c[1]]
          }
          function Kk(a) {
              a = ya(a, [0, a[0] >>> 1]);
              a = xb(a, [4283543511, 3981806797]);
              a = ya(a, [0, a[0] >>> 1]);
              a = xb(a, [3301882366, 444984403]);
              return a = ya(a, [0, a[0] >>> 1])
          }
          function Os(a, c) {
              void 0 === c && (c = 210);
              var b = a || ""
                , d = c || 0
                , e = b.length - b.length % 16;
              d = {
                  X: [0, d],
                  Y: [0, d]
              };
              for (var f = 0; f < e; f += 16) {
                  var g = d
                    , h = [a.charCodeAt(f + 4) & 255 | (a.charCodeAt(f + 5) & 255) << 8 | (a.charCodeAt(f + 6) & 255) << 16 | (a.charCodeAt(f + 7) & 255) << 24, a.charCodeAt(f) & 255 | (a.charCodeAt(f + 1) & 255) << 8 | (a.charCodeAt(f + 2) & 255) << 16 | (a.charCodeAt(f + 3) & 255) << 24]
                    , k = [a.charCodeAt(f + 12) & 255 | (a.charCodeAt(f + 13) & 255) << 8 | (a.charCodeAt(f + 14) & 255) << 16 | (a.charCodeAt(f + 15) & 255) << 24, a.charCodeAt(f + 8) & 255 | (a.charCodeAt(f + 9) & 255) << 8 | (a.charCodeAt(f + 10) & 255) << 16 | (a.charCodeAt(f + 11) & 255) << 24];
                  h = xb(h, cf);
                  h = Wc(h, 31);
                  h = xb(h, df);
                  g.X = ya(g.X, h);
                  g.X = Wc(g.X, 27);
                  g.X = vc(g.X, g.Y);
                  g.X = vc(xb(g.X, [0, 5]), [0, 1390208809]);
                  k = xb(k, df);
                  k = Wc(k, 33);
                  k = xb(k, cf);
                  g.Y = ya(g.Y, k);
                  g.Y = Wc(g.Y, 31);
                  g.Y = vc(g.Y, g.X);
                  g.Y = vc(xb(g.Y, [0, 5]), [0, 944331445])
              }
              e = b.length % 16;
              f = b.length - e;
              g = [0, 0];
              h = [0, 0];
              switch (e) {
              case 15:
                  h = ya(h, mb([0, b.charCodeAt(f + 14)], 48));
              case 14:
                  h = ya(h, mb([0, b.charCodeAt(f + 13)], 40));
              case 13:
                  h = ya(h, mb([0, b.charCodeAt(f + 12)], 32));
              case 12:
                  h = ya(h, mb([0, b.charCodeAt(f + 11)], 24));
              case 11:
                  h = ya(h, mb([0, b.charCodeAt(f + 10)], 16));
              case 10:
                  h = ya(h, mb([0, b.charCodeAt(f + 9)], 8));
              case 9:
                  h = ya(h, [0, b.charCodeAt(f + 8)]),
                  h = xb(h, df),
                  h = Wc(h, 33),
                  h = xb(h, cf),
                  d.Y = ya(d.Y, h);
              case 8:
                  g = ya(g, mb([0, b.charCodeAt(f + 7)], 56));
              case 7:
                  g = ya(g, mb([0, b.charCodeAt(f + 6)], 48));
              case 6:
                  g = ya(g, mb([0, b.charCodeAt(f + 5)], 40));
              case 5:
                  g = ya(g, mb([0, b.charCodeAt(f + 4)], 32));
              case 4:
                  g = ya(g, mb([0, b.charCodeAt(f + 3)], 24));
              case 3:
                  g = ya(g, mb([0, b.charCodeAt(f + 2)], 16));
              case 2:
                  g = ya(g, mb([0, b.charCodeAt(f + 1)], 8));
              case 1:
                  g = ya(g, [0, b.charCodeAt(f)]),
                  g = xb(g, cf),
                  g = Wc(g, 31),
                  g = xb(g, df),
                  d.X = ya(d.X, g)
              }
              d.X = ya(d.X, [0, b.length]);
              d.Y = ya(d.Y, [0, b.length]);
              d.X = vc(d.X, d.Y);
              d.Y = vc(d.Y, d.X);
              d.X = Kk(d.X);
              d.Y = Kk(d.Y);
              d.X = vc(d.X, d.Y);
              d.Y = vc(d.Y, d.X);
              return ("00000000" + (d.X[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.X[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.Y[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d.Y[1] >>> 0).toString(16)).slice(-8)
          }
          function Ud(a, c, b) {
              var d = c.getAttribute("itemtype");
              b = ib('[itemprop~="' + b + '"]', c);
              return d ? ka(function(e) {
                  return e.parentNode && Yb("[itemtype]", a, e.parentNode) === c
              }, b) : b
          }
          function gb(a, c, b) {
              return (a = Ud(a, c, b)) && a.length ? a[0] : null
          }
          function db(a) {
              if (!a)
                  return "";
              a = M(a) ? a : [a];
              return a.length ? a[0].getAttribute("content") || Nb(a[0]) : ""
          }
          function Lk(a) {
              return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") : db(a) : ""
          }
          function zd(a, c, b) {
              a = c && (ab(c.className, "ym-disable-keys") || ab(c.className, "-metrika-nokeys"));
              return b && c ? a || !!Pr(["ym-disable-keys", "-metrika-nokeys"], c).length : a
          }
          function Qf(a, c) {
              return Ue(c) ? "password" === c.type || c.name && H(c.name.toLowerCase(), Mk) || c.id && H(c.id.toLowerCase(), Mk) : !1
          }
          function Nk(a, c) {
              var b = Math.max(0, Math.min(c, 65535));
              xa(a, [b >> 8, b & 255])
          }
          function Wb(a, c) {
              xa(a, [c & 255])
          }
          function kb(a, c, b) {
              return -1 !== Pb(a)(b, Ps) ? (Wb(c, b),
              !1) : !0
          }
          function U(a, c) {
              for (var b = Math.max(0, c | 0); 127 < b; )
                  xa(a, [b & 127 | 128]),
                  b >>= 7;
              xa(a, [b])
          }
          function Qg(a, c) {
              U(a, c.length);
              for (var b = 0; b < c.length; b += 1)
                  U(a, c.charCodeAt(b))
          }
          function Rg(a, c) {
              var b = c;
              255 < b.length && (b = b.substr(0, 255));
              a.push(b.length);
              for (var d = 0; d < b.length; d += 1)
                  Nk(a, b.charCodeAt(d))
          }
          function Qs(a, c) {
              var b = [];
              if (kb(a, b, 27))
                  return [];
              U(b, c);
              return b
          }
          function Rs(a, c) {
              var b = Na(c);
              if (!b)
                  return c[$a] = -1,
                  null;
              var d = +c[$a];
              if (!isFinite(d) || 0 >= d)
                  return null;
              if (c.attributes)
                  for (var e = c; e; ) {
                      if (e.attributes.Dj)
                          return null;
                      e = e.parentElement
                  }
              e = 64;
              var f = Se(a, c)
                , g = f && f[$a] ? f[$a] : 0;
              0 > g && (g = 0);
              b = (b || "").toUpperCase();
              var h = Ss()[b];
              h || (e |= 2);
              var k = Qj(a, c);
              k || (e |= 4);
              var l = Uf(a, c);
              (f = f ? Uf(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
              Dc[d].Mf = l[0] + "x" + l[1];
              Dc[d].size = l[2] + "x" + l[3];
              c.id && "string" === typeof c.id && (e |= 32);
              f = [];
              if (kb(a, f, 1))
                  return null;
              U(f, d);
              Wb(f, e);
              U(f, g);
              h ? Wb(f, h) : Rg(f, b);
              k && U(f, k);
              e & 8 || (U(f, l[0]),
              U(f, l[1]),
              U(f, l[2]),
              U(f, l[3]));
              e & 32 && Rg(f, c.id);
              Wb(f, 0);
              return f
          }
          function Ts(a, c) {
              var b = c[$a];
              if (!b || 0 > b || !Sf(c) || !c.form || Ei(a, c.form))
                  return [];
              var d = Uj(a, c.form);
              if (0 > d)
                  return [];
              if (Ue(c)) {
                  var e = {
                      text: 0,
                      color: 0,
                      kc: 0,
                      Jj: 0,
                      "datetime-local": 0,
                      email: 0,
                      Kf: 0,
                      ak: 0,
                      search: 0,
                      fk: 0,
                      time: 0,
                      url: 0,
                      month: 0,
                      jk: 0,
                      password: 2,
                      $j: 3,
                      Hj: 4,
                      file: 6,
                      image: 7
                  };
                  e = e[c.type]
              } else {
                  e = {
                      Aj: 1,
                      Bj: 5
                  };
                  var f = Na(c);
                  e = T(f) ? "" : e[f]
              }
              if ("number" !== typeof e)
                  return [];
              f = -1;
              for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                  if (g[k].name === c.name) {
                      if (g[k] === c) {
                          f = l;
                          break
                      }
                      l += 1
                  }
              if (0 > f)
                  return [];
              g = [];
              if (kb(a, g, 7))
                  return [];
              U(g, b);
              U(g, d);
              U(g, e);
              Qg(g, c.name || "");
              U(g, f);
              return g
          }
          function Cc(a, c, b) {
              void 0 === b && (b = []);
              for (var d = []; c && !bp(a, c, b); c = Se(a, c))
                  d.push(c);
              x(function(e) {
                  Dc.counter += 1;
                  var f = Dc.counter;
                  e[$a] = f;
                  Dc[f] = {};
                  f = Rs(a, e);
                  e = Ts(a, e);
                  f && e && (xa(b, f),
                  xa(b, e))
              }, Us(d));
              return b
          }
          function Vs(a) {
              var c = a.qa;
              if (!yd || c && !c.fromElement)
                  return Bi(a)
          }
          function Ws(a) {
              var c = a.qa;
              if (c && !c.toElement)
                  return Tf(a)
          }
          function Ok(a) {
              var c = Lc(a.qa);
              if (c && ye(c)) {
                  var b = Ai(a, c)
                    , d = b.concat;
                  var e = Db(a.l)
                    , f = [];
                  kb(a.l, f, 17) ? a = [] : (U(f, e),
                  U(f, c[$a]),
                  a = f);
                  return d.call(b, a)
              }
          }
          function Pk(a) {
              var c = a.l
                , b = a.qa.target;
              if (b && ye(b)) {
                  c = Cc(c, b);
                  var d = c.concat;
                  var e = Db(a.l)
                    , f = [];
                  kb(a.l, f, 18) ? a = [] : (U(f, e),
                  U(f, b[$a]),
                  a = f);
                  return d.call(c, a)
              }
          }
          function Qk(a) {
              var c = a.l
                , b = Lc(a.qa);
              if (!b || Qf(c, b) || zd(c, b))
                  return [];
              if (Sf(b)) {
                  var d = J(c).C("isEU")
                    , e = Sc(c, b, d)
                    , f = e.Za;
                  d = e.tb;
                  e = e.kb;
                  if (Ve(b))
                      var g = b.checked;
                  else
                      g = b.value,
                      g = f ? G("", Rk(g.split(""))) : g;
                  c = Cc(c, b);
                  f = c.concat;
                  var h = Db(a.l);
                  d = d && !e;
                  e = [];
                  kb(a.l, e, 39) ? a = [] : (U(e, h),
                  U(e, b[$a]),
                  Rg(e, String(g)),
                  Wb(e, d ? 1 : 0),
                  a = e);
                  return f.call(c, a)
              }
          }
          function ef(a) {
              var c = a.l
                , b = a.qa
                , d = Lc(b);
              if (!d || "SCROLLBAR" === d.nodeName)
                  return [];
              var e = []
                , f = u(e, xa);
              d && ye(d) ? f(Ai(a, d)) : f(Cc(c, d));
              var g = pj(c, b);
              f = e.concat;
              a = Db(a.l);
              var h = b.type
                , k = [g.x, g.y];
              g = b.which;
              b = b.button;
              var l;
              var m = Te(c, d);
              var p = m[0];
              for (m = m[1]; d && (!p || !m); )
                  if (d = Se(c, d))
                      m = Te(c, d),
                      p = m[0],
                      m = m[1];
              d ? (p = d[$a],
              !p || 0 > p ? c = [] : (m = (l = {},
              l.mousemove = 2,
              l.click = 32,
              l.dblclick = 33,
              l.mousedown = 4,
              l.mouseup = 30,
              l.touch = 12,
              l)[h]) ? (l = [],
              d = ug(c, d),
              kb(c, l, m) ? c = [] : (U(l, a),
              U(l, p),
              U(l, Math.max(0, k[0] - d.left)),
              U(l, Math.max(0, k[1] - d.top)),
              /^mouse(up|down)|click$/.test(h) && (c = g || b,
              Wb(l, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)),
              c = l)) : c = []) : c = [];
              return f.call(e, c)
          }
          function Xs(a) {
              var c = null
                , b = a.l
                , d = b.document;
              if (b.getSelection) {
                  d = void 0;
                  try {
                      d = b.getSelection()
                  } catch (g) {
                      return []
                  }
                  if (Ra(d))
                      return [];
                  var e = "" + d;
                  c = d.anchorNode
              } else
                  d.selection && d.selection.createRange && (d = d.selection.createRange(),
                  e = d.text,
                  c = d.parentElement());
              if ("string" !== typeof e)
                  return [];
              try {
                  for (; c && 1 !== c.nodeType; )
                      c = c.parentNode
              } catch (g) {
                  return []
              }
              if (!c)
                  return [];
              d = Sc(b, c).Za || zd(b, c, !0);
              c = c.getElementsByTagName("*");
              for (var f = 0; f < c.length && !d; )
                  d = c[f],
                  d = Sc(b, d).Za || zd(b, d, !0),
                  f += 1;
              if (e !== Sg)
                  return Sg = e,
                  d = d ? G("", Rk(e.split(""))) : e,
                  e = Db(a.l),
                  0 === d.length ? d = b = "" : 100 >= d.length ? (b = d,
                  d = "") : 200 >= d.length ? (b = d.substr(0, 100),
                  d = d.substr(100)) : (b = d.substr(0, 97),
                  d = d.substr(d.length - 97)),
                  c = [],
                  kb(a.l, c, 29) ? a = [] : (U(c, e),
                  Qg(c, b),
                  Qg(c, d),
                  a = c),
                  a
          }
          function Ys(a) {
              return ef(a).concat(Xs(a) || [])
          }
          function Sk(a) {
              return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
          }
          function Tk(a) {
              var c = [];
              Tg || (Tg = !0,
              Sg && xa(c, Qs(a.l, Db(a.l))),
              Tb(a.l, function() {
                  Tg = !1
              }, "fv.c"));
              return c
          }
          function Uk(a, c, b, d) {
              c = Lc(c);
              if (!c || Vf(a, c))
                  return [];
              var e = Sc(a, c)
                , f = e.tb
                , g = e.kb;
              e = e.Za;
              var h = J(a);
              if (!g && (f && h.C("isEU") || zd(a, c)))
                  a = [];
              else {
                  f = Cc(a, c);
                  g = f.concat;
                  var k = Db(a);
                  h = [];
                  if (kb(a, h, 38))
                      a = [];
                  else {
                      U(h, k);
                      Nk(h, b);
                      Wb(h, d);
                      a = c[$a];
                      if (!a || 0 > a)
                          a = 0;
                      U(h, a);
                      Wb(h, e ? 1 : 0);
                      a = h
                  }
                  a = g.call(f, a)
              }
              return a
          }
          function Zs(a) {
              var c = a.l
                , b = a.qa
                , d = b.keyCode
                , e = Sk(b)
                , f = []
                , g = u(f, xa);
              if ({
                  3: 1,
                  8: 1,
                  9: 1,
                  13: 1,
                  16: 1,
                  17: 1,
                  18: 1,
                  19: 1,
                  20: 1,
                  27: 1,
                  33: 1,
                  34: 1,
                  35: 1,
                  36: 1,
                  37: 1,
                  38: 1,
                  39: 1,
                  40: 1,
                  45: 1,
                  46: 1,
                  91: 1,
                  92: 1,
                  93: 1,
                  106: 1,
                  110: 1,
                  111: 1,
                  144: 1,
                  145: 1
              }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16)
                  19 === d && 4 === (e & -17) && (d = 144),
                  g(Uk(c, b, d, e | 16)),
                  Ug = !1,
                  Tb(c, function() {
                      Ug = !0
                  }, "fv.kd"),
                  !(67 === d && e & 4) || e & 1 || e & 2 || g(Tk(a));
              return f
          }
          function $s(a) {
              var c = a.l;
              a = a.qa;
              var b = [];
              Ug && !Vg && 0 !== a.which && (xa(b, Uk(c, a, a.charCode || a.keyCode, Sk(a))),
              Vg = !0,
              Tb(c, function() {
                  Vg = !1
              }, "fv.kp"));
              return b
          }
          function Vk(a) {
              var c = a.l
                , b = Lc(a.qa);
              if (!b || Ei(c, b))
                  return [];
              var d = [];
              if ("FORM" === b.nodeName) {
                  for (var e = b.elements, f = 0; f < e.length; f += 1)
                      Tj(e[f]) || xa(d, Cc(c, e[f]));
                  a = Db(a.l);
                  e = Uj(c, b);
                  if (0 > e)
                      c = [];
                  else {
                      f = b.elements;
                      var g = f.length;
                      b = [];
                      for (var h = 0; h < g; h += 1)
                          if (!Tj(f[h])) {
                              var k = f[h][$a];
                              k && 0 < k && b.push(k)
                          }
                      f = [];
                      if (kb(c, f, 11))
                          c = [];
                      else {
                          U(f, a);
                          U(f, e);
                          U(f, b.length);
                          for (c = 0; c < b.length; c += 1)
                              U(f, b[c]);
                          c = f
                      }
                  }
                  xa(d, c)
              }
              return d
          }
          function at(a) {
              var c = a.flush;
              a = Lc(a.qa);
              "BODY" === Na(a) && c()
          }
          function vo(a, c) {
              var b, d = Lc(c), e = ua.fc, f = af(a);
              if (d && oc("ym-advanced-informer", d)) {
                  var g = f.C("ifc", 0) + 1;
                  f.D("ifc", g);
                  g = d.getAttribute("data-lang");
                  var h = Da(d.getAttribute("data-cid") || "");
                  if (h || 0 === h)
                      (e = n(a, "Ya." + e + ".informer")) ? e((b = {},
                      b.i = d,
                      b.id = h,
                      b.lang = g,
                      b)) : f.D("ib", !0),
                      b = c || window.event,
                      b.preventDefault ? b.preventDefault() : b.returnValue = !1
              }
          }
          function pm(a, c, b, d, e) {
              if (!b.length)
                  return e;
              b = z(function(f) {
                  return E([a, c, d], f)
              }, b);
              return w.apply(void 0, b)(e)
          }
          var Xc = {
              construct: "Metrika2",
              callbackPostfix: "2",
              version: "1f7b5mkfsgz4vwc12da0vg4ht5r",
              host: "mc.yandex.ru"
          }, Mg = [], lg = /\./g, Wk = pa(String.prototype.indexOf, "indexOf"), pb = Wk ? function(a, c) {
              return Wk.call(a, c)
          }
          : Es, Fa = oa(function(a, c) {
              return a === c
          }), Tc = oa(function(a, c) {
              a(c);
              return c
          }), Ba = oa(Ek), Ra = Fa(null), T = Fa(void 0), od = pa(Array.from, "from"), Xk = pa(Function.prototype.bind, "bind"), I = Xk ? Bs(Xk) : Cs, Yk = pa(Array.prototype.reduce, "reduce"), Cb = Yk ? function(a, c, b) {
              return Yk.call(b, a, c)
          }
          : Ig, N = Cb, Cr = w, Ge = w(Q, va), Lg, ie = Pb(window), Qn = Xa(ie), Kg = Object.prototype.hasOwnProperty, J = v(af), V = Xa(n), hb = V("length"), Oe = oa(E), bt = oa(Ma), Zk = pa(Array.prototype.every, "every"), bj = Zk ? function(a, c) {
              return Zk.call(c, a)
          }
          : zs, Rb = E([1, null], ze), tb = E([1, 0], ze), yb = Boolean, $k = pa(Array.prototype.filter, "filter"), ka = $k ? function(a, c) {
              return $k.call(c, a)
          }
          : Dk, Ea = u(yb, ka), ct = oa(ka), al = pa(Array.prototype.find, "find"), jb = al ? function(a, c) {
              return al.call(c, a)
          }
          : ys, bl = pa(Array.prototype.includes, "includes"), H = bl ? function(a, c, b) {
              return bl.call(c, a, b)
          }
          : xs, yc = Xa(H), cl = pa(Array.prototype.join, "join"), G = cl ? function(a, c) {
              return cl.call(c, a)
          }
          : ws, Ee = oa(G), dl = v(function(a) {
              var c = n(a, "navigator") || {};
              a = n(c, "userAgent") || "";
              c = n(c, "vendor") || "";
              return {
                  Bf: -1 < pb(c, "Apple"),
                  yg: a
              }
          }), ub = v(V("navigator.userAgent")), Hg = /Firefox\/([0-9]+)/i, Sd = v(function(a) {
              var c = n(a, "document.documentElement.style")
                , b = n(a, "InstallTrigger");
              a = Jg(Hg, a);
              Hg.lastIndex = 0;
              return !(!(c && "MozAppearance"in c) || ba(b)) || a
          }), el = pa(Array.isArray, "isArray"), M = el ? function(a) {
              return el(a)
          }
          : Fs, fl = pa(Array.prototype.map, "map"), gl = fl && vs(window, Array.prototype.map) ? function(a, c) {
              return c && 0 < c.length ? fl.call(c, a) : []
          }
          : Ck, z = gl, x = gl, hl = pa(Array.prototype.flatMap, "flatMap"), lc = hl ? function(a, c) {
              return hl.call(c, a)
          }
          : us, Eb = oa(z), es = Xa(z), il = pa(Array.prototype.some, "some"), Qa = il ? function(a, c) {
              return il.call(c, a)
          }
          : ts, Le = v(Pb), Kd = V("0"), dt = oa(id), jl = pa(Array.prototype.reverse, "reverse"), Us = jl ? function(a) {
              return jl.call(a)
          }
          : ss, kl = Xa(parseInt), Da = kl(10), Be = kl(2), ll = pa(Object.keys, "keys"), ml = pa(Object.entries, "entries"), za = ml ? rs(ml) : zk, ha = ll ? function(a) {
              return ll(a)
          }
          : Ak, nl = pa(Object.values, "values"), et = w(zk, u(V("1"), Ck)), ft = nl ? function(a) {
              return nl(a)
          }
          : et, A = Object.assign || qs, zi = oa(function(a, c) {
              return A({}, a, c)
          }), re = v(w(V("String.fromCharCode"), u("fromCharCode", La), Kc)), Wg = v(w(ub, lb(/ipad|iphone|ipod/i))), Yi = v(function(a) {
              return n(a, "navigator.platform") || ""
          }), Nc = v(function(a) {
              a = dl(a);
              var c = a.yg;
              return a.Bf && !c.match("CriOS")
          }), gt = lb(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/), ht = lb(/; wv\)/), Dd = v(function(a) {
              a = ub(a);
              return ht(a) || gt(a)
          }), it = /Chrome\/(\d+)\./, jt = v(function(a) {
              return (a = (n(a, "navigator.userAgent") || "").match(it)) && a.length ? 76 <= Da(a[1]) : !1
          }), Ae = v(function(a) {
              a = (ub(a) || "").toLowerCase();
              return ab(a, "android") && ab(a, "mobile")
          }), kt = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "), lt = v(function(a) {
              var c = n(a, "navigator.connection.type");
              if (T(c))
                  return null;
              a = Le(a)(c, kt);
              return -1 === a ? c : "" + a
          }), vg = v(w(V("document.addEventListener"), Kc)), ol = v(function(a) {
              var c = n(a, "navigator") || {};
              return N(function(b, d) {
                  return b || n(c, d)
              }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
          }), Wh = v(function(a) {
              var c = n(a, "navigator") || {};
              a = ol(a);
              S(a) || (a = "",
              c = n(c, "languages.0"),
              S(c) && (a = c));
              return a.toLowerCase().split("-")[0]
          }), sb = v(function(a) {
              return (n(a, "top") || a) !== a
          }), mt = v(V("top.contentWindow")), nt = v(function(a) {
              var c = !1;
              try {
                  c = a.navigator.javaEnabled()
              } catch (b) {}
              return c
          }), ot = v(function(a) {
              var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" ")
                , b = n(a, "external");
              b = n(b, "toString") ? "" + b.toString() : "";
              b = -1 !== pb(b, "Sequentum");
              var d = n(a, "document.documentElement")
                , e = ["selenium", "webdriver", "driver"];
              return !!(Qa(u(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Qa(u(n(a, "document"), n), c) || b || d && Qa(I(d.getAttribute, d), e))
          }), pt = v(function(a) {
              return !!(Qa(u(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(ub(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
          }), qt = v(function(a) {
              return !(!n(a, "ia_document.shareURL") || !n(a, "ia_document.referrer"))
          }), Vd = v(function(a) {
              var c = ub(a) || ""
                , b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
              b = b ? [+b[1], +b[2]] : [0, 0];
              c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
              return 14 <= (c ? +c[1] : 0) ? !0 : (Wg(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Nc(a)
          }), ps = /Edg\/(\d+)\./, Qe = v(function(a) {
              return Vd(a) || Ff(a, 68) || Gf(a, 79)
          }), rt = Xc.construct, Xb = Xc.host, Xg = vg(window), ua = {
              Hg: 24226447,
              Bg: 26302566,
              Kg: 51533966,
              yj: 65446441,
              Na: "https:",
              hb: "1491",
              fc: rt,
              Gg: Xg ? 512 : 2048,
              Eg: Xg ? 512 : 2048,
              Fg: Xg ? 100 : 400,
              zj: 100,
              Ig: "noindex"
          }, Wd = [], L = v(function(a) {
              return a.id + ":" + a.ba
          }), tc = {}, de = Fa("1"), st = setTimeout;
          Ja.prototype["catch"] = function(a) {
              return this.then(null, a)
          }
          ;
          Ja.prototype.then = function(a, c) {
              var b = new this.constructor(Gs);
              Hk(this, new Is(a,c,b));
              return b
          }
          ;
          Ja.prototype["finally"] = function(a) {
              var c = this.constructor;
              return this.then(function(b) {
                  return c.resolve(a()).then(function() {
                      return b
                  })
              }, function(b) {
                  return c.resolve(a()).then(function() {
                      return c.reject(b)
                  })
              })
          }
          ;
          Ja.all = function(a) {
              return new Ja(function(c, b) {
                  function d(h, k) {
                      try {
                          if (k && ("object" === typeof k || "function" === typeof k)) {
                              var l = k.then;
                              if ("function" === typeof l) {
                                  l.call(k, function(m) {
                                      d(h, m)
                                  }, b);
                                  return
                              }
                          }
                          e[h] = k;
                          0 === --f && c(e)
                      } catch (m) {
                          b(m)
                      }
                  }
                  if (!a || "undefined" === typeof a.length)
                      return b(new TypeError("Promise.all accepts an array"));
                  var e = Array.prototype.slice.call(a);
                  if (0 === e.length)
                      return c([]);
                  for (var f = e.length, g = 0; g < e.length; g++)
                      d(g, e[g])
              }
              )
          }
          ;
          Ja.resolve = function(a) {
              return a && "object" === typeof a && a.constructor === Ja ? a : new Ja(function(c) {
                  c(a)
              }
              )
          }
          ;
          Ja.reject = function(a) {
              return new Ja(function(c, b) {
                  b(a)
              }
              )
          }
          ;
          Ja.race = function(a) {
              return new Ja(function(c, b) {
                  if (!a || "undefined" === typeof a.length)
                      return b(new TypeError("Promise.race accepts an array"));
                  for (var d = 0, e = a.length; d < e; d++)
                      Ja.resolve(a[d]).then(c, b)
              }
              )
          }
          ;
          Ja.Ue = "function" === typeof setImmediate && function(a) {
              setImmediate(a)
          }
          || function(a) {
              st(a, 0)
          }
          ;
          Ja.Lg = function(a) {
              "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
          }
          ;
          var K = window.Promise
            , tt = pa(K, "Promise")
            , pl = pa(n(K, "resolve"), "resolve")
            , ql = pa(n(K, "reject"), "reject")
            , rl = pa(n(K, "all"), "all");
          if (tt && pl && ql && rl) {
              var ff = function(a) {
                  return new Promise(a)
              };
              ff.resolve = I(pl, K);
              ff.reject = I(ql, K);
              ff.all = I(rl, K);
              K = ff
          } else
              K = Ja;
          var pf = []
            , hd = []
            , aa = []
            , Ua = []
            , Yg = []
            , Yc = []
            , Eg = yc([26812653])
            , ut = v(w(V("id"), Eg), L)
            , bc = {
              id: "id",
              Pe: "ut",
              ba: "type",
              ae: "ldc",
              Wa: "nck",
              vc: "url",
              Ah: "referrer"
          }
            , vt = /^\d+$/
            , Zc = {
              id: function(a) {
                  a = "" + (a || "0");
                  vt.test(a) || (a = "0");
                  try {
                      var c = Da(a)
                  } catch (b) {
                      c = 0
                  }
                  return c
              },
              ba: function(a) {
                  return "" + (a || 0 === a ? a : "0")
              },
              Wa: yb,
              Pe: yb
          };
          bc.pd = "defer";
          Zc.pd = yb;
          bc.L = "params";
          Zc.L = function(a) {
              return ia(a) || M(a) ? a : null
          }
          ;
          bc.Oe = "userParams";
          bc.ug = "triggerEvent";
          Zc.ug = yb;
          bc.eg = "sendTitle";
          Zc.eg = function(a) {
              return !!a || T(a)
          }
          ;
          bc.Je = "trackHash";
          Zc.Je = yb;
          bc.sg = "trackLinks";
          bc.kh = "enableAll";
          var ce = N(function(a, c) {
              var b = c[0];
              a[b] = {
                  ea: c[1],
                  Xa: Zc[b]
              };
              return a
          }, {}, za(bc)), ns = "hash host hostname href pathname port protocol search".split(" "), Gg = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" "), wk = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/, Ke = v(function(a) {
              return (a ? a.replace(/^www\./, "") : "").toLowerCase()
          }), Xi = v(function(a) {
              a = X(a).hostname;
              var c = !1;
              a && (c = -1 !== a.search(wk));
              return c
          }), sl = w(X, V("protocol"), Fa("https:")), ls = v(function(a) {
              return jt(a) && sl(a) ? "SameSite=None;Secure;" : ""
          }), Ij = /^\s+|\s+$/g, vk = pa(String.prototype.trim, "trim"), gf = oa(function(a, c) {
              return c.replace(a, "")
          }), wt = gf(/\s/g), pe = gf(/\D/g), Oh = gf(/\d/g), Ze = ["metrika_enabled"], Fg = [], rk = Hb("gsc", pk), ms = /:\d+$/, Js = v(function(a) {
              var c = (X(a).host || "").split(".");
              return 1 === c.length ? c[0] : N(function(b, d, e) {
                  e += 1;
                  2 <= e && !b && (e = G(".", c.slice(-e)),
                  Gi(a, e) && (b = e));
                  return b
              }, "", c)
          }), Ec = v(pd), Xe = v(function(a) {
              var c = Ec(a)
                , b = "1" === c.C("debug")
                , d = -1 < pc(X(a).href, "_ym_debug=1") || -1 < pc(X(a).href, "_ym_debug=2")
                , e = a._ym_debug;
              !e && !d || b || (a = X(a),
              c.D("debug", "1", void 0, a.host));
              return !!(b || e || d)
          }), ks = Hb("debuggerEvents", Hd, !0), hs = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], Xd, Aa = function(a) {
              return function(c, b) {
                  void 0 === b && (b = !1);
                  if (Xd)
                      var d = new Xd(c);
                  else
                      La("Error", a.Error) ? (Xd = a.Error,
                      d = new a.Error(c)) : (Xd = js,
                      d = new Xd(c));
                  b && (d.unk = !0);
                  return d
              }
          }(window), is = lb(/^http./), gs = lb(/^err.kn/), ok = [], fs = v(function(a) {
              a = !(!a.addEventListener || !a.removeEventListener);
              return {
                  dj: a,
                  F: a ? "addEventListener" : "attachEvent",
                  ia: a ? "removeEventListener" : "detachEvent"
              }
          }), xt = v(function(a) {
              var c = !1;
              if (!a.addEventListener)
                  return c;
              try {
                  var b = Object.defineProperty({}, "passive", {
                      get: function() {
                          c = !0;
                          return 1
                      }
                  });
                  a.addEventListener("test", C, b)
              } catch (d) {}
              return c
          }), yt = oa(function(a, c) {
              if (null !== c)
                  return a ? A({
                      capture: !0,
                      passive: !0
                  }, c || {}) : !!c
          }), la = v(function(a) {
              var c = xt(a)
                , b = yt(c)
                , d = {};
              return A(d, {
                  F: function(e, f, g, h) {
                      x(function(k) {
                          var l = b(h);
                          nk(a, e, k, g, l, !1)
                      }, f);
                      return I(d.Ab, d, e, f, g, h)
                  },
                  Ab: function(e, f, g, h) {
                      x(function(k) {
                          var l = b(h);
                          nk(a, e, k, g, l, !0)
                      }, f)
                  }
              })
          }), ja = v(mg), jk = oa(function(a, c) {
              for (var b = []; !Rd(c); ) {
                  var d = as(c);
                  a(d, function(e) {
                      return e(c)
                  });
                  b.push(d)
              }
              return b
          }), tl = oa(function(a, c) {
              return Ba(function(b, d) {
                  return c(b, function(e) {
                      try {
                          d(a(e))
                      } catch (f) {
                          b(f)
                      }
                  })
              })
          }), Zg = oa(function(a, c) {
              return Ba(function(b, d) {
                  return c(b, function(e) {
                      try {
                          a(e)(bb(b, d))
                      } catch (f) {
                          b(f)
                      }
                  })
              })
          }), zg = [], Ag = !1, yg = !1, ul = oa(function(a, c) {
              var b = c || {};
              return {
                  l: u(b, Q),
                  C: function(d, e) {
                      var f = b[d];
                      return T(f) && !T(e) ? e : f
                  },
                  D: function(d, e) {
                      b[d] = e;
                      return this
                  },
                  Vb: function(d, e) {
                      return "" === e || ba(e) ? this : this.D(d, e)
                  },
                  Ia: u(b, a)
              }
          }), Ia = ul(function(a) {
              var c = "";
              a = Cb(function(b, d) {
                  var e = d[0]
                    , f = "" + e + ":" + d[1];
                  "t" === e ? c = f : b.push(f);
                  return b
              }, [], za(a));
              c && a.push(c);
              return G(":", a)
          }), $g, ak = ($g = {},
          $g.w = [[function(a, c) {
              return {
                  O: function(b, d) {
                      var e, f = b.J;
                      f = (e = {},
                      e["page-url"] = f && f["page-url"] || "",
                      e.charset = "utf-8",
                      e);
                      "0" !== c.ba && (f["cnt-class"] = c.ba);
                      b.K || (b.K = Ia());
                      e = b.K;
                      var g = b.V;
                      f = {
                          ja: {
                              Da: "watch/" + c.id
                          },
                          V: A(void 0 === g ? {} : g, {
                              gb: !!e.C("pv") && !e.C("ar") && !e.C("wh")
                          }),
                          J: A(b.J || {}, f)
                      };
                      A(b, f);
                      d()
                  }
              }
          }
          , 1]],
          $g), $c = u(ak, ek), nb = Qd("w"), Zj = ["webkitvisibilitychange", "visibilitychange"], Cf = ul(function(a) {
              a = za(a);
              return G("", z(function(c) {
                  var b = c[0];
                  c = c[1];
                  return Ra(c) ? "" : b + "(" + c + ")"
              }, a))
          }), vl = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "), cr = /^\s*(data|javascript):/i, sj = new RegExp(G("", ["\\.(" + G("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]),"i"), Ta, Bj = (Ta = {},
          Ta.hit = "h",
          Ta.params = "p",
          Ta.reachGoal = "g",
          Ta.userParams = "up",
          Ta.trackHash = "th",
          Ta.accurateTrackBounce = "atb",
          Ta.notBounce = "nb",
          Ta.addFileExtension = "fe",
          Ta.extLink = "el",
          Ta.file = "fc",
          Ta.trackLinks = "tl",
          Ta.destruct = "d",
          Ta.setUserID = "ui",
          Ta.getClientID = "ci",
          Ta.clickmap = "cm",
          Ta.enableAll = "ea",
          Ta), zt = v(function() {
              var a = 0;
              return function() {
                  return a += 1
              }
          }), At = w(L, zt, va), qg = {
              mc: function(a) {
                  a = af(a).C("mt", {});
                  a = za(a);
                  return a.length ? N(function(c, b, d) {
                      return "" + c + (d ? "-" : "") + b[0] + "-" + b[1]
                  }, "", a) : null
              },
              clc: function(a) {
                  var c = J(a).C("cls", {
                      ec: 0,
                      x: 0,
                      y: 0
                  })
                    , b = c.ec
                    , d = c.x;
                  c = c.y;
                  return b ? b + "-" + a.Math.floor(d / b) + "-" + a.Math.floor(c / b) : b + "-" + d + "-" + c
              },
              rqnt: function(a, c, b) {
                  a = b.J;
                  return !a || a.nohit ? null : At(c)
              }
          }, Ur = v(function(a) {
              Xj(a, "_ymBRC", "1");
              var c = "1" !== Wj(a, "_ymBRC");
              c || Yj(a, "_ymBRC");
              return c
          }), Wa = v(Vj), ad = v(Vj, function(a, c, b) {
              return "" + c + b
          }), Bt = v(V("document.documentElement")), Ct = v(function(a) {
              a = n(a, "document") || {};
              return ("" + (a.characterSet || a.charset || "")).toLowerCase()
          }), qb = v(w(V("document"), u("createElement", Jc))), Fi = v(function(a) {
              var c = n(a, "Element.prototype");
              return c ? (a = jb(function(b) {
                  var d = c[b];
                  return !!d && La(b, d)
              }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? c[a] : null : null
          }), Dt = Fa("INPUT"), Ue = w(Na, Dt), Et = Fa("TEXTAREA"), Rr = w(Na, Et), Ft = Fa("SELECT"), Sr = w(Na, Ft), Ve = w(V("type"), lb(/^(checkbox|radio)$/)), Sf = w(Na, lb(/^INPUT|SELECT|TEXTAREA$/)), ye = w(Na, lb(/^INPUT|SELECT|TEXTAREA|BUTTON$/)), Wf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "), Qr = ["submit", "image", "hidden"], cg = v(function() {
              for (var a = 59, c = {}, b = 0; b < vl.length; b += 1)
                  c[vl[b]] = String.fromCharCode(a),
                  a += 1;
              return c
          }), Pj = v(function(a) {
              return {
                  Mj: a,
                  lb: null,
                  vb: []
              }
          }), Oj = {}, tg = {};
          Oj.p = 500;
          var Nj = {
              i: "id",
              n: "name",
              h: "href",
              ty: "type"
          };
          tg.h = !0;
          tg.c = !0;
          var Re = {
              p: function(a, c, b) {
                  if (c && Sj(a, c) && c._ymp)
                      return c._ymp;
                  a = Bf(a, c, b);
                  c && (c._ymp = a);
                  return a
              },
              c: function(a, c, b) {
                  (a = cb(n(c, "textContent"))) && b && (b = b(c),
                  b.length && Qa(w(V("textContent"), cb, Fa(a)), b) && (a = ""));
                  Ue(c) && (a = cb(c.getAttribute && c.getAttribute("value") || a));
                  return a
              }
          }, bd, sg = "button," + G(",", z(function(a) {
              return 'input[type="' + a + '"]'
          }, ["button", "submit", "reset", "file"])) + ",a", fj = u(sg, ib), Or = (bd = {},
          bd.A = "h",
          bd.BUTTON = "i",
          bd.DIV = "i",
          bd.INPUT = "ty",
          bd), wl = /\/$/, Mj = Hb("r", function(a, c) {
              var b = Lj(a, c)
                , d = b[0];
              return !b[1] && d
          }), Od = v(function() {
              return {
                  Ha: {},
                  pending: {},
                  children: {}
              }
          }), ah = V("postMessage"), Gt = B("s.f", function(a, c, b, d, e) {
              c = c(d);
              var f = Od(a)
                , g = G(":", [c.meta.kc, c.meta.key]);
              if (ah(b)) {
                  f.pending[g] = e;
                  try {
                      b.postMessage(c.lg, "*")
                  } catch (h) {
                      delete f.pending[g];
                      return
                  }
                  W(a, function() {
                      delete f.pending[g]
                  }, 5E3, "if.s")
              }
          }), Ht = B("s.fh", function(a, c, b, d, e, f) {
              var g = null
                , h = null
                , k = Od(a)
                , l = null;
              try {
                  g = Vb(a, f.data),
                  h = g.__yminfo,
                  l = g.data
              } catch (m) {
                  return
              }
              if (!ba(h) && h.substring && "__yminfo" === h.substring(0, 8) && !ba(l) && (g = h.split(":"),
              4 === g.length))
                  if (h = c.id,
                  c = g[1],
                  a = g[2],
                  g = g[3],
                  !M(l) && l.type && "0" === g && l.counterId) {
                      if (!l.toCounter || l.toCounter == h) {
                          k = null;
                          try {
                              k = f.source
                          } catch (m) {}
                          !Ra(k) && ah(k) && (f = d.aa(l.type, [f, l]),
                          e = z(w(Q, zi(e)), f.concat([{}])),
                          l = b([c, a, l.counterId], e),
                          k.postMessage(l.lg, "*"))
                      }
                  } else
                      g === "" + h && M(l) && ka(function(m) {
                          return !(!m.hid || !m.counterId)
                      }, l).length === l.length && (b = k.pending[G(":", [c, a])]) && b.apply(null, [f].concat(l))
          }), td = v(function(a, c) {
              var b, d = Jc("getElementsByTagName", n(a, "document")), e = Od(a), f = ah(a), g = vd(a), h = la(a);
              if (!d || !f)
                  return null;
              d = d.call(a.document, "iframe");
              f = (b = {},
              b.counterId = c.id,
              b.hid = "" + Hc(a),
              b);
              Qe(a) && (f.duid = Pd(a, c));
              Kr(a, g);
              Lr(a);
              b = Mr(a, f);
              var k = E([a, u([], b)], Gt);
              x(function(l) {
                  var m = null;
                  try {
                      m = l.contentWindow
                  } catch (p) {}
                  m && k(m, {
                      type: "initToChild"
                  }, function(p, q) {
                      g.aa("initToParent", [p, q])
                  })
              }, d);
              sb(a) && k(a.parent, {
                  type: "initToParent"
              }, function(l, m) {
                  g.aa("parentConnect", [l, m])
              });
              h.F(a, ["message"], E([a, c, b, g, f], Ht));
              return {
                  $: g,
                  Ha: e.Ha,
                  children: e.children,
                  ye: k
              }
          }, w(fb, L)), ud = v(function(a, c) {
              if (!Qe(a) || !sb(a))
                  return Pd(a, c);
              var b = td(a, c);
              return b && b.Ha[c.id] ? b.Ha[c.id].info.duid || Pd(a, c) : Pd(a, c)
          }, function(a, c) {
              return "{" + c.ae + c.Wa
          }), It = v(w(ja, Ba(function(a) {
              return -(new a.l.Date).getTimezoneOffset()
          }))), Jt = w(ja, Ba(function(a) {
              a = new a.l.Date;
              return G("", z(bs, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
          })), Kt = w(ja, Ba(rg)), xl = v(w(ja, Ba(function(a) {
              return a.Nc[0]
          }))), Lt = v(function(a) {
              a = J(a);
              var c = a.C("counterNum", 0) + 1;
              a.D("counterNum", c);
              return c
          }, w(fb, L)), ra, Nd = (ra = {},
          ra.vf = u(Xc.version, Q),
          ra.nt = lt,
          ra.fu = function(a, c, b) {
              var d = b.J;
              if (!d)
                  return null;
              c = (n(a, "document.referrer") || "").replace(wl, "");
              b = (d["page-ref"] || "").replace(wl, "");
              d = d["page-url"];
              a = X(a).href !== d;
              c = c !== b;
              b = 0;
              a && c ? b = 3 : c ? b = 1 : a && (b = 2);
              return b
          }
          ,
          ra.en = Ct,
          ra.la = ol,
          ra.ut = function(a, c, b) {
              var d = b.N;
              b = b.J;
              d = d && d.Gc;
              b && (Xi(a) || c.Pe || d) && (b.ut = ua.Ig);
              return null
          }
          ,
          ra.v = u(ua.hb, Q),
          ra.cn = Lt,
          ra.dp = function(a) {
              var c = J(a)
                , b = c.C("bt", {});
              if (T(c.C("bt"))) {
                  var d = n(a, "navigator.getBattery");
                  try {
                      b.p = d && d.call(a.navigator)
                  } catch (e) {}
                  c.D("bt", b);
                  b.p && b.p.then && b.p.then(D(a, "bi:dp.p", function(e) {
                      b.rj = n(e, "charging") && 0 === n(e, "chargingTime")
                  }))
              }
              return tb(b.rj)
          }
          ,
          ra.ls = v(function(a, c) {
              var b = ad(a, c.id)
                , d = ja(a)
                , e = b.C("lsid");
              return +e ? e : (d = Za(a, 0, d(ca)),
              b.D("lsid", d),
              d)
          }, fb),
          ra.hid = Hc,
          ra.phid = function(a, c) {
              if (!sb(a))
                  return null;
              var b = td(a, c);
              if (!b)
                  return null;
              var d = ha(b.Ha);
              return d.length ? b.Ha[d[0]].info.hid : null
          }
          ,
          ra.z = It,
          ra.i = Jt,
          ra.et = Kt,
          ra.c = w(V("navigator.cookieEnabled"), Rb),
          ra.rn = w(Q, Za),
          ra.rqn = function(a, c, b) {
              b = b.J;
              if (!b || b.nohit)
                  return null;
              c = L(c);
              a = ad(a, c);
              c = (a.C("reqNum", 0) || 0) + 1;
              a.D("reqNum", c);
              if (a.C("reqNum") === c)
                  return c;
              a.lc("reqNum");
              return null
          }
          ,
          ra.u = ud,
          ra.w = function(a) {
              a = Qc(a);
              return a[0] + "x" + a[1]
          }
          ,
          ra.s = function(a) {
              var c = n(a, "screen");
              if (c) {
                  a = n(c, "width");
                  var b = n(c, "height");
                  c = n(c, "colorDepth") || n(c, "pixelDepth");
                  return G("x", [a, b, c])
              }
              return null
          }
          ,
          ra.sk = V("devicePixelRatio"),
          ra.ifr = w(sb, Rb),
          ra.j = w(nt, Rb),
          ra.sti = function(a) {
              return sb(a) && mt(a) ? "1" : null
          }
          ,
          ra), Jr = v(function() {
              return xa(ha(Nd), ha(qg))
          }), Ir = v(uc, L), Jj = v(function() {
              return {
                  hf: null,
                  xa: []
              }
          }, L), Fr = /^[a-z][\w.+-]+:/i, bh, $b = [[We, 1], [Pe, 2], [Qb(), 3], [Kj, 4]], pg = [], zb = u($b, fk), Zb = (bh = {},
          bh.h = $b,
          bh), Z = u(Zb, ek);
          zb(Gj, -100);
          var Ks = v(function(a) {
              if (a = qb(a))
                  return a("a")
          }), Ar = /[^a-z0-9.:-]/, ch, dh = {}, yl = Ea([ng && [ng, 0], Fb && [Fb, 1], [Gb, 2], Ld && [Ld, 3], [Vc, 4]]), cc = Ea([ng, Fb, Gb, Ld, Vc]), eh = [Gb];
          eh.unshift(Fb);
          eh.push(Ld);
          var zl = Ea(eh), cd = Ea([Vc]), Al = Ea([Fb, Gb]), Bl = Ea([Fb, Vc]), Mt = Ea([Fb, Gb, Ld, Vc]), sa = (ch = {},
          ch.h = zl,
          ch), hf = v(function(a, c) {
              var b = dh["*"] ? dh["*"] : c && dh[c];
              b || (b = c ? sa[c] || [] : cc);
              b = N(function(d, e) {
                  var f = e(a);
                  if (f) {
                      var g = jb(w(Kd, Fa(e)), yl);
                      g && d.push([g[1], f])
                  }
                  return d
              }, [], b);
              b.length || be();
              return b
          }, fb), fh, Nt = I(K.reject, K, Sa()), wa = (fh = {},
          fh.h = nb,
          fh), qa = B("g.sen", function(a, c, b) {
              var d = hf(a, c);
              b = b ? Er(a, c, b) : [];
              var e = wa[c]
                , f = e ? e(a, d, b) : nb(a, d, b);
              return function() {
                  var g = Pa(arguments)
                    , h = g[0];
                  g = g.slice(1);
                  var k = h.V;
                  h = A(h, {
                      V: A(void 0 === k ? {} : k, {
                          ha: [c]
                      })
                  });
                  return f.apply(null, [h].concat(g))
              }
          }, Nt), sr = oa(function(a, c) {
              if (!c[a]) {
                  var b, d = new K(function(e) {
                      b = e
                  }
                  );
                  c[a] = {
                      Tf: b,
                      promise: d,
                      Uf: !1
                  }
              }
              return c[a].promise
          }), Cj = v(w(uc, Ba)), Ot = B("dc.init", function(a, c) {
              return c && Eg(se(c.split(":")[0])) ? {
                  log: C,
                  warn: C,
                  error: C
              } : rr(a, c)
          }), sc = v(Ot, fb), tm = B("h.p", function(a, c) {
              var b, d, e = qa(a, "h", c), f = c.vc || "" + X(a).href, g = c.Ah || a.document.referrer, h = {
                  K: Ia((b = {},
                  b.pv = 1,
                  b)),
                  J: (d = {},
                  d["page-url"] = f,
                  d["page-ref"] = g,
                  d),
                  N: {}
              };
              h.N.L = c.L;
              h.N.Oe = c.Oe;
              c.pd && h.J && (h.J.nohit = "1");
              return e(h, c).then(function(k) {
                  var l;
                  k && (c.pd || rc(a, c, "h", (l = {},
                  l.id = c.id,
                  l.url = f,
                  l.ref = g,
                  l), c.L)(),
                  Tb(a, E([a, c, k], tr)))
              })["catch"](D(a, "h.g.s"))
          }), gh = ["yandex_metrika_callback" + Xc.callbackPostfix, "yandex_metrika_callbacks" + Xc.callbackPostfix], Pt = B("cb.i", function(a) {
              var c = gh[0]
                , b = gh[1];
              if (O(a[c]))
                  a[c]();
              "object" === typeof a[b] && x(function(d, e) {
                  a[b][e] = null;
                  gg(a, d)
              }, a[b]);
              x(function(d) {
                  try {
                      delete a[d]
                  } catch (e) {
                      a[d] = void 0
                  }
              }, gh)
          }), qr = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/, or = gf(/[^\d+()]/g), nr = /[a-z\u0430-\u044f\u0451,.]/gi, Cl = v(function(a) {
              return !!n(a, "crypto.subtle.digest") && !!n(a, "TextEncoder") && !!n(a, "FileReader") && !!n(a, "Blob")
          }), mr = ["yandex_cid", "yandex_public_id"], Qt = B("fpm", function(a, c) {
              if (!sl(a))
                  return C;
              var b = L(c);
              if (!Cl(a))
                  return Lb(a, b, "ns"),
                  C;
              var d = Ka(a, c);
              return d ? function(e) {
                  return (new K(function(f, g) {
                      return ia(e) ? ha(e).length ? f(yj(a, e).then(function(h) {
                          var k, l;
                          h && h.length && d.params((k = {},
                          k.__ym = (l = {},
                          l.fpp = h,
                          l),
                          k))
                      }, C)) : g(Sa("fpm.l")) : g(Sa("fpm.o"))
                  }
                  ))["catch"](D(a, "fpm.en"))
              }
              : C
          }), jf = oa(function(a, c) {
              var b = {};
              jg(a)(function(d) {
                  b = d[c] || {}
              });
              return b
          }), Rt = B("c.c.cc", function(a) {
              var c = J(a)
                , b = w(jf(a), function(d) {
                  var e, f = (e = {},
                  e.clickmap = !!d.clickmap,
                  e);
                  return A({}, d, f)
              });
              return D(a, "g.c.cc", w(I(c.C, c, "counters", {}), ha, Eb(b)))
          }), St = B("gt.c.rs", function(a, c) {
              var b, d = L(c), e = c.id, f = c.ba, g = c.Xg, h = c.Je, k = E([a, d], kr);
              ig(a, d, (b = {},
              b.id = e,
              b.type = +f,
              b.clickmap = g,
              b.trackHash = !!h,
              b));
              return k
          }), wj = v(Hd), Jd = v(uc, L), Tt = B("pa.int", function(a, c) {
              var b;
              return b = {},
              b.params = function() {
                  var d, e, f, g = Pa(arguments), h = jr(g);
                  if (!h)
                      return null;
                  g = h.dh;
                  var k = h.L;
                  h = h.$b;
                  if (!ia(k) && !M(k))
                      return null;
                  var l = qa(a, "1", c)
                    , m = Jd(c).url
                    , p = !ut(c)
                    , q = "pa"
                    , r = (d = {},
                  d.id = c.id,
                  d);
                  d = k;
                  var t = "";
                  if (t = n(k, "__ym.user_id"))
                      q = "pau",
                      r.uid = t;
                  H("__ymu", ha(k)) && (q = "paup");
                  d.__ym && (d = A({}, k),
                  d.__ym = N(function(y, F) {
                      var R = n(k, "__ym." + F);
                      R && (y[F] = R);
                      return y
                  }, {}, Wd),
                  ha(d.__ym).length || delete d.__ym,
                  p = !!ha(d).length);
                  d = t ? void 0 : JSON.stringify(d);
                  d = rc(a, c, q, r, d);
                  l = l({
                      N: {
                          L: k
                      },
                      K: Ia((e = {},
                      e.pa = 1,
                      e.ar = 1,
                      e)),
                      J: (f = {},
                      f["page-url"] = m || X(a).href,
                      f)
                  }, c).then(p ? d : C);
                  return Uc(a, "p.s", l, h, g)
              }
              ,
              b
          }), oe = v(uj, w(fb, L)), Ut = B("y.p", function(a, c) {
              var b = uj(a, c);
              if (b) {
                  var d = ke(a)
                    , e = E([a, b, c], fr);
                  Yh(a, d, function(f) {
                      f.F(["params"], e)
                  });
                  b.$.F(["params"], w(V("1"), e))
              }
          }), Dl = {
              Qj: lb(/[/&=?#]/)
          }, He = B("go.in", function(a, c, b, d) {
              var e;
              void 0 === b && (b = "goal");
              return e = {},
              e.reachGoal = function(f, g, h, k) {
                  var l, m, p;
                  if (!f || Dl[b] && Dl[b](f))
                      return null;
                  var q = g
                    , r = h || C;
                  O(g) && (r = g,
                  q = void 0,
                  k = h);
                  var t = rc(a, c, "gr", (l = {},
                  l.id = c.id,
                  l.goal = f,
                  l), q)
                    , y = "goal" === b;
                  g = qa(a, "g", c);
                  l = er(a, c, f, b);
                  h = l[0];
                  l = l[1];
                  q = g({
                      N: {
                          L: q
                      },
                      K: Ia((m = {},
                      m.ar = 1,
                      m)),
                      J: (p = {},
                      p["page-url"] = h,
                      p["page-ref"] = l,
                      p)
                  }, c).then(function() {
                      var F, R;
                      y && t();
                      vb(a, (F = {},
                      F.counterKey = L(c),
                      F.name = "event",
                      F.data = (R = {},
                      R.schema = b,
                      R.name = f,
                      R),
                      F));
                      d && d()
                  });
                  return Uc(a, "g.s", q, r, k)
              }
              ,
              e
          }), Vt = B("guid.int", function(a, c) {
              var b;
              return b = {},
              b.getClientID = function(d) {
                  var e = Pd(a, c);
                  d && gg(a, d, null, e);
                  return e
              }
              ,
              b
          }), Jk, Wt = B("th.e", function(a, c) {
              function b() {
                  g || (k = fa(a, "onhashchange") ? la(a).F(a, ["hashchange"], h) : Ls(a, h))
              }
              var d, e = qa(a, "t", c), f = Me(a, L(c)), g = !1, h = D(a, "h.h.ch", I(Ms, null, a, c, e)), k = C;
              c.Je && (b(),
              g = !0);
              e = D(a, "tr.hs.h", function(l) {
                  var m;
                  l ? b() : k();
                  g = !!l;
                  f((m = {},
                  m.trackHash = g,
                  m))
              });
              return d = {},
              d.trackHash = e,
              d.u = k,
              d
          }), Xt = oa(function(a, c) {
              S(c) ? a.push(c) : x(w(Q, Ma("push", a)), c)
          }), Id = Hb("retryReqs", function(a) {
              var c = Wa(a)
                , b = c.C("retryReqs", {})
                , d = ja(a)(ca);
              x(function(e) {
                  var f = e[0];
                  e = e[1];
                  (!e || !e.time || e.time + 864E5 < d) && delete b[f]
              }, za(b));
              c.D("retryReqs", b);
              return b
          }, !0), xc = w(pc, Fa(0)), El = Xa(xc), Yt = [El("watch"), El("clmap")], Zt = B("g.r", function(a) {
              var c = ja(a)
                , b = Id(a)
                , d = c(ca)
                , e = Hc(a);
              return Cb(function(f, g) {
                  var h = g[0]
                    , k = g[1];
                  k && Qa(Ba(k.resource), Yt) && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1,
                  h = {
                      protocol: k.protocol,
                      host: k.host,
                      Da: k.resource,
                      Ni: k.postParams,
                      L: k.params,
                      Pg: k.browserInfo,
                      Oj: k.ghid,
                      time: k.time,
                      Sb: Da(h),
                      $g: k.counterId,
                      ba: k.counterType
                  },
                  k.telemetry && (h.Ka = k.telemetry),
                  f.push(h));
                  return f
              }, [], za(b))
          }), $t = B("nb.p", function(a, c) {
              function b(F) {
                  l() || (F = "number" === typeof F ? F : 15E3,
                  y = Ns(a, d(!1), F),
                  m())
              }
              function d(F) {
                  return function(R) {
                      var P, Ca, Ga;
                      void 0 === R && (R = (P = {},
                      P.ctx = {},
                      P.callback = C,
                      P));
                      if (F || !r && !k.Td) {
                          r = !0;
                          m();
                          y && y();
                          var dc = p(ca);
                          P = (Da(k.C("lastHit")) || 0) < dc - 18E5;
                          var hh = .1 > Math.random();
                          k.D("lastHit", dc);
                          dc = Ia((Ca = {},
                          Ca.nb = 1,
                          Ca.cl = t,
                          Ca.ar = 1,
                          Ca));
                          Ca = Jd(c);
                          Ca = {
                              J: (Ga = {},
                              Ga["page-url"] = Ca.url || X(a).href,
                              Ga),
                              K: dc,
                              N: {
                                  force: F
                              }
                          };
                          Ga = sc(a, L(c)).warn;
                          !R.callback && R.ctx && Ga("nbnc");
                          (Ga = F || P || hh) || (Ga = a.location.href,
                          P = a.document.referrer,
                          Ga = !(Ga && P ? Fj(Ga) === Fj(P) : !Ga && !P));
                          if (Ga)
                              return Ga = g(Ca, c),
                              Uc(a, "l.o.l", Ga, R.callback, R.ctx)
                      }
                      return null
                  }
              }
              var e, f, g = qa(a, "n", c), h = L(c), k = ad(a, c.id), l = u(u(h, jf(a)), w(va, V("accurateTrackBounce"))), m = u((e = {},
              e.accurateTrackBounce = !0,
              e), Me(a, h)), p = ja(a), q = p(ca), r = !1, t = 0, y;
              na(c, function(F) {
                  t = F.th - q
              });
              c.Ve && b(c.Ve);
              e = (f = {},
              f.notBounce = d(!0),
              f.u = y,
              f);
              e.accurateTrackBounce = b;
              return e
          }), Yq = oa(oc)("(ym-disable-clickmap|ym-clickmap-ignore)"), au = B("clm.p", function(a, c) {
              if (re(a))
                  return C;
              var b = qa(a, "m", c), d = L(c), e = ja(a), f = e(ca), g = u(u(d, jf(a)), w(va, V("clickmap"))), h, k = null;
              d = D(a, "clm.p.c", function(l) {
                  var m = g();
                  if (m) {
                      var p = J(a)
                        , q = p.C("cls", {
                          ec: 0,
                          x: 0,
                          y: 0
                      });
                      p.D("cls", {
                          ec: q.ec + 1,
                          x: q.x + l.clientX,
                          y: q.y + l.clientY
                      });
                      p = "object" === typeof m ? m : {};
                      q = p.filter;
                      m = p.isTrackHash || !1;
                      var r = z(function(y) {
                          return ("" + y).toUpperCase()
                      }, p.ignoreTags || []);
                      T(h) && (h = p.quota || null);
                      var t = !!p.quota;
                      l = {
                          element: Zq(a, l),
                          position: pj(a, l),
                          button: $q(l),
                          time: e(ca)
                      };
                      p = X(a).href;
                      if (Xq(a, l, k, r, q)) {
                          if (t) {
                              if (!h)
                                  return;
                              --h
                          }
                          r = Te(a, l.element);
                          q = r[0];
                          r = r[1];
                          t = ug(a, l.element);
                          q = ["rn", Za(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", Bf(a, l.element), "X", l.position.x, "Y", l.position.y];
                          q = G(":", q);
                          m && (q += ":wh:1");
                          Wq(a, p, q, b, c);
                          k = l
                      }
                  }
              });
              return la(a).F(n(a, "document"), ["click"], d)
          }), bu = B("trigger.in", function(a, c) {
              c.ug && Tb(a, E([a, "yacounter" + c.id + "inited"], Tr), "t.i")
          }), cu = B("c.m.p", function(a, c) {
              var b, d = L(c);
              return b = {},
              b.clickmap = u(Me(a, d), Vq),
              b
          }), cj = u("form", Yb), Kq = u("form", ib), Uq = v(w(fb, Xa(na)(V("settings.form_goals"))), fb), du = B("s.f.i", function(a, c) {
              var b, d = [], e = [], f = la(a);
              d.push(f.F(a, ["click"], D(a, "s.f.c", E([a, c, e], Tq))));
              d.push(f.F(a, ["submit"], D(a, "s.f.e", function(g) {
                  var h = n(g, "target");
                  g = n(g, "isTrusted");
                  mj(!0, a, c, e, h, g)
              })));
              nj(a, c, "fgi", (b = {},
              b.id = c.id,
              b));
              return E([Ge, d], x)
          }), eu = B("s.f.i", function(a, c) {
              return na(c, function(b) {
                  var d;
                  if (n(b, "settings.button_goals"))
                      return b = la(a).F(a, ["click"], D(a, "c.t.c", w(E([a, c], of(a, c, "", Sq))))),
                      rc(a, c, "gbi", (d = {},
                      d.id = c.id,
                      d))(),
                      b
              })
          }), ec, Yd, ih, dd, Ib, dg = (ec = {},
          ec.transaction_id = "id",
          ec.item_brand = "brand",
          ec.index = "position",
          ec.item_variant = "variant",
          ec.value = "revenue",
          ec.item_category = "category",
          ec.item_list_name = "list",
          ec), qc = (Yd = {},
          Yd.item_id = "id",
          Yd.item_name = "name",
          Yd.promotion_name = "coupon",
          Yd), Rq = (ih = {},
          ih.promotion_name = "name",
          ih), Fl = (dd = {},
          dd.promotion_name = "name",
          dd.promotion_id = "id",
          dd.item_id = "product_id",
          dd.item_name = "product_name",
          dd), Oq = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" "), Pq = (Ib = {},
          Ib.view_item = {
              event: "detail",
              Aa: qc,
              La: "products"
          },
          Ib.add_to_cart = {
              event: "add",
              Aa: qc,
              La: "products"
          },
          Ib.remove_from_cart = {
              event: "remove",
              Aa: qc,
              La: "products"
          },
          Ib.begin_checkout = {
              event: "checkout",
              Aa: qc,
              La: "products"
          },
          Ib.purchase = {
              event: "purchase",
              Aa: qc,
              La: "products"
          },
          Ib.view_item_list = {
              event: "impressions",
              Aa: qc
          },
          Ib.select_item = {
              event: "click",
              La: "products",
              Aa: qc
          },
          Ib.view_promotion = {
              event: "promoView",
              La: "promotions",
              Aa: Fl
          },
          Ib.select_promotion = {
              event: "promoClick",
              La: "promotions",
              Aa: Fl
          },
          Ib), lj = B("dl.w", function(a, c, b) {
              function d() {
                  var g = n(a, c);
                  (e = M(g) && nd(a, g, b)) || (f = W(a, d, 1E3, "ec.dl"))
              }
              var e, f = 0;
              d();
              return function() {
                  return ma(a, f)
              }
          }), fu = B("p.e", function(a, c) {
              var b = Ka(a, c);
              if (b) {
                  var d = J(a);
                  b = b.params;
                  var e = D(a, "h.ee", E([a, L(c), b], Mq));
                  return c.xd ? (d.D("ecs", 0),
                  kj(a, c.xd, e)) : na(c, function(f) {
                      if ((f = n(f, "settings.ecommerce")) && S(f))
                          return d.D("ecs", 1),
                          kj(a, f, e)
                  })
              }
          }), Gl = v(function(a) {
              a = X(a);
              a = uk(a.search.substring(1));
              a["_ym_status-check"] = a["_ym_status-check"] || "";
              a._ym_lang = a._ym_lang || "ru";
              return a
          }), hj = w(Gl, V("_ym_status-check"), Da), gu = w(Gl, V("_ym_lang")), hu = lb(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/), iu = ["form", "button", "status"], ju = B("cs.init", function(a, c) {
              var b, d = hj(a);
              if (d && c.id === d && "0" === c.ba) {
                  var e = (b = {},
                  b.lang = gu(a),
                  b.fileId = "status",
                  b);
                  b = e.lang;
                  b = void 0 === b ? "" : b;
                  var f = e.appVersion;
                  f = void 0 === f ? "" : f;
                  var g = e.fileId;
                  g = void 0 === g ? "" : g;
                  e = e.beta;
                  e = void 0 === e ? !1 : e;
                  f = G(".", ka(oa(Mb)(a), z(w(Q, Da), f.split("."))));
                  H(g, iu) && H(b, ["ru", "en", "tr"]) ? (b = (e ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (f ? "/" + f : "") + "/form-selector/" + (g + "_" + b + ".js"),
                  b = hu(b) ? b : "") : b = "";
                  W(a, E([a, b, "" + d], Jq), 0, "cs")
              }
          }), ku = B("suid.int", function(a, c) {
              var b;
              return b = {},
              b.setUserID = function(d, e, f) {
                  if (S(d) || Mb(a, d)) {
                      var g = Ka(a, c);
                      d = ue(["__ym", "user_id", d]);
                      g.params(d, e || C, f)
                  } else
                      sc(a, L(c)).error("wuid")
              }
              ,
              b
          }), lu = B("up.int", function(a, c) {
              var b;
              return b = {},
              b.userParams = D(a, "up.c", function(d, e, f) {
                  var g, h = Ka(a, c), k = sc(a, L(c)).warn;
                  h ? ia(d) ? (d = (g = {},
                  g.__ymu = d,
                  g),
                  (g = h.params) && g(d, e || C, f)) : k("wup") : k("nci")
              }),
              b
          }), mu = /[\*\.\?\(\)]/g, nu = v(function(a, c, b) {
              var d;
              try {
                  var e = b.replace("\\s", " ").replace(mu, "");
                  sc(a, "").warn("nnw", (d = {},
                  d.name = e,
                  d))
              } catch (f) {}
          }, fb), ou = B("r.nn", function(a) {
              Xe(a) && nd(a, Mg, function(c) {
                  c.ra.F(function(b) {
                      nu(a, b[1], b[0]);
                      Mg.splice(100)
                  })
              })
          }), pu = B("e.a.p", function(a, c) {
              var b, d = Ka(a, c);
              d = E([w(Q, Ba(!0)), Ea(z(u(d, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], z);
              c.kh && d();
              return b = {},
              b.enableAll = d,
              b
          }), qu = v(uc, L), ru = B("fpi", function(a) {
              var c = Ed(a);
              if (c && !a.document.hidden) {
                  var b = J(a).Ja;
                  b("fpe", 1);
                  var d = la(a).F(a, ["visibilitychange", "webkitvisibilitychange"], function() {
                      a.document.hidden && (b("fht", c.now()),
                      d())
                  })
              }
          }), su = v(function(a) {
              a = n(a, "console");
              var c = n(a, "log");
              c = bf("log", c) ? I(c, a) : C;
              var b = n(a, "warn");
              b = bf("warn", b) ? I(b, a) : c;
              var d = n(a, "error");
              a = bf("error", d) ? I(d, a) : c;
              return {
                  log: c,
                  error: a,
                  warn: b
              }
          }), tu = u("add", Fe), uu = u("remove", Fe), vu = u("detail", Fe), wu = u("purchase", Fe), xu = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" "), zf = v(function(a) {
              var c = dl(a);
              a = c.yg;
              if (!c.Bf)
                  return !1;
              c = Ma("indexOf", a);
              c = Qa(w(c, Fa(-1), Kc), xu);
              var b = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a)
                , d = /YaBrowser\/[\d.]+/.test(a)
                , e = /Mobile/.test(a);
              return c || b || d && e || !/Safari/.test(a) && e
          }), Tn = v(function(a) {
              var c = ub(a);
              return c ? ab(c, "YangoEats") || Dd(a) : !1
          }), Hq = /([0-9\\.]+) Safari/, yu = /\sYptp\/\d\.(\d+)\s/, Hl = v(function(a) {
              var c;
              a: {
                  if ((c = ub(a)) && (c = yu.exec(c)) && 1 < c.length) {
                      c = Da(c[1]);
                      break a
                  }
                  c = 0
              }
              return 50 <= c && 99 >= c || Gf(a, 79) ? !1 : !Vd(a) || zf(a)
          }), Il = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"), zu = v(function(a) {
              a = qb(a)("canvas");
              var c = n(a, "getContext");
              if (!c)
                  return null;
              try {
                  var b = I(c, a)("2d");
                  b.font = "72px mmmmmmmmmmlli";
                  var d = b.measureText("mmmmmmmmmmlli").width;
                  return function(e) {
                      b.font = "72px " + e;
                      return b.measureText("mmmmmmmmmmlli").width === d
                  }
              } catch (e) {
                  return null
              }
          }), Jl = pa(String.prototype.repeat, "repeat"), wi = Jl ? function(a, c) {
              return Jl.call(a, c)
          }
          : Eq, qi = u(!0, function(a, c, b, d) {
              b = c.length && (b - d.length) / c.length;
              if (0 >= b)
                  return d;
              c = wi(c, b);
              return a ? c + d : d + c
          }), cf = [2277735313, 289559509], df = [1291169091, 658871167], Au = B("p.cd", function(a) {
              if (Ae(a) || Wg(a)) {
                  var c = Wa(a);
                  if (ba(c.C("jn"))) {
                      c.D("jn", !1);
                      var b = a.chrome || Nc(a) ? function() {}
                      : /./;
                      a = su(a);
                      b.toString = function() {
                          c.D("jn", !0);
                          return "Yandex.Metrika counter is initialized"
                      }
                      ;
                      a.log("%c%s", "color: inherit", b)
                  }
              }
          }), Bu = v(function(a) {
              a = n(a, "navigator.plugins");
              return !!(a && hb(a) && Qa(w(V("name"), lb(/Chrome PDF Viewer/)), a))
          }), Ab = oa(function(a, c) {
              return J(c).C(a, null)
          }), Bq = {
              "*": "+",
              "-": "/",
              Cj: "=",
              "+": "*",
              "/": "-",
              "=": "_"
          }, $f = v(function(a) {
              return Jg(/tizen/i, a)
          }), Cu = v(function(a) {
              return Jg(/webos|web0s/i, a)
          }), Du = v(function(a) {
              return O(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
          }), Eu = v(u("panoramaId", Ce)), Fu = v(function(a) {
              return Ce("pubcid.org", a) || Ce("_pubCommonId", a)
          }), Gu = v(u("_sharedid", Ce)), Hu = v(function(a, c) {
              if (c.Wa)
                  return null;
              var b = pd(a, "").C("_ga");
              return b && xd(De(b))
          }, w(fb, L)), tq = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function(a, c) {
              return n(c, "redirectCount") || n(a, "navigation.redirectCount")
          }
          ], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]], Bb, sq = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]], $i = (Bb = {},
          Bb.responseEnd = 1,
          Bb.domInteractive = 1,
          Bb.domContentLoadedEventStart = 1,
          Bb.domContentLoadedEventEnd = 1,
          Bb.domComplete = 1,
          Bb.loadEventStart = 1,
          Bb.loadEventEnd = 1,
          Bb.unloadEventStart = 1,
          Bb.unloadEventEnd = 1,
          Bb.secureConnectionStart = 1,
          Bb), vq = v(Hd), pq = v(uc), qq = v(function(a) {
              var c = n(a, "webkitRequestFileSystem");
              if (O(c) && !Ae(a))
                  return (new K(I(c, a, 0, 0))).then(function() {
                      var d = n(a, "navigator.storage") || {};
                      return d.estimate ? d.estimate() : {}
                  }).then(function(d) {
                      return (d = d.quota) && 12E7 > d ? !0 : !1
                  })["catch"](u(!0, Q));
              if (Sd(a))
                  return c = n(a, "navigator.serviceWorker"),
                  K.resolve(T(c));
              c = n(a, "openDatabase");
              if (Nc(a) && O(c)) {
                  var b = !1;
                  try {
                      c(null, null, null, null)
                  } catch (d) {
                      b = !0
                  }
                  return K.resolve(b)
              }
              return K.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
          }), Iu = /(\?|&)turbo_uid=([\w\d]+)($|&)/, Ju = v(function(a, c) {
              var b = Ec(a)
                , d = X(a).search.match(Iu);
              return d && 2 <= d.length ? (d = d[2],
              c.Wa || b.D("turbo_uid", d),
              d) : (b = b.C("turbo_uid")) ? b : ""
          }), cq = [[["'(-$&$&$'", 30102, 0], ["'(-$&$&$'", 29009, 0]], [["oWdZ[nc[jh_YW$Yec", 30103, 1], ["oWdZ[nc[jh_YW$Yec", 29010, 1]]], dq = [[["oWdZ[nc[jh_YW$Yec", 30103, 1]], [["oWdZ[nc[jh_YW$Yec", 29010, 1]]], Zi = {
              J: {
                  t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
              }
          }, $p = {
              og: 60,
              error: 15
          }, Zp = {
              og: 5,
              error: 1
          }, Wi = {
              id: 42822899,
              ba: "0"
          }, Ku = B("pa.plgn", function(a, c) {
              var b = oe(a, c);
              b && b.$.F(["pluginInfo"], D(a, "c.plgn", function() {
                  var d = J(a);
                  d.D("cmc", d.C("cmc", 0) + 1);
                  return xk(c)
              }))
          }), Sb, ob, Mn = (Sb = {},
          Sb.am = "com.am",
          Sb.tr = "com.tr",
          Sb.ge = "com.ge",
          Sb.il = "co.il",
          Sb["\u0440\u0444"] = "ru",
          Sb["xn--p1ai"] = "ru",
          Sb["\u0431\u0435\u043b"] = "by",
          Sb["xn--90ais"] = "by",
          Sb), Kl = {
              "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
              "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
              "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
          }, Nn = (ob = {},
          ob.ka = "ge",
          ob.ro = "md",
          ob.tg = "tj",
          ob.tk = "tm",
          ob.et = "ee",
          ob.hy = "com.am",
          ob.he = "co.li",
          ob.ky = "kg",
          ob.be = "by",
          ob.tr = "com.tr",
          ob.kk = "kz",
          ob), Ll = /^https?:\/\//, Lu = {
              1882689622: 1,
              2318205080: 1,
              3115871109: 1,
              3604875100: 1,
              339366994: 1,
              849340123: 1,
              3735661796: 1,
              3082499531: 1,
              2343947156: 1,
              655012937: 1,
              3724710748: 1,
              3364370932: 1,
              1996539654: 1,
              2065498185: 1,
              823651274: 1,
              12282461: 1,
              1555719328: 1,
              1417229093: 1,
              138396985: 1,
              3015043526: 1
          }, Ml = v(function() {
              return N(function(a, c) {
                  var b = mc(c + "/tag_ww.js");
                  a[b] = 1;
                  return a
              }, {}, ["mc.yandex.ru/metrika", "mc.yandex.com/metrika", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
          }), Mu = v(function(a) {
              a = Ed(a);
              if (!a || !O(a.getEntriesByType))
                  return null;
              a = a.getEntriesByType("resource");
              var c = Ml();
              return (a = jb(function(b) {
                  b = b.name.replace(Ll, "").split("?")[0];
                  b = mc(b);
                  return c[b]
              }, a)) ? tb(a.transferSize) : null
          }), lq = "ar:1:pv:1:v:" + ua.hb + ":vf:" + Xc.version, mq = ua.Na + "//" + Xb + "/watch/" + ua.Bg, Nl = {}, Nu = B("exps.int", function(a, c) {
              var b;
              return b = {},
              b.experiments = function(d, e, f) {
                  var g, h;
                  if (S(d) && !(0 >= d.length)) {
                      var k = qa(a, "e", c)
                        , l = Jd(c).url;
                      d = k({
                          K: Ia((g = {},
                          g.ex = 1,
                          g.ar = 1,
                          g)),
                          J: (h = {},
                          h["page-url"] = l || X(a).href,
                          h.exp = d,
                          h)
                      }, c);
                      return Uc(a, "exps.s", d, e || C, f)
                  }
              }
              ,
              b
          }), Af = [], Ou = B("p.fh", function(a, c) {
              var b, d;
              void 0 === c && (c = !0);
              var e = Wa(a)
                , f = ja(a)
                , g = e.C("wasSynced")
                , h = {
                  id: 3,
                  ba: "0"
              };
              return c && g && g.time + 864E5 > f(ca) ? K.resolve(g) : qa(a, "f", h)({
                  K: Ia((b = {},
                  b.pv = 1,
                  b)),
                  J: (d = {},
                  d["page-url"] = X(a).href,
                  d["page-ref"] = a.document.referrer,
                  d)
              }, h).then(function(k) {
                  var l;
                  k = (l = {},
                  l.time = f(ca),
                  l.params = n(k, "settings"),
                  l.bkParams = n(k, "userData"),
                  l);
                  e.D("wasSynced", k);
                  return k
              })["catch"](D(a, "f.h"))
          }), Pu = oa(function(a, c) {
              0 === parseFloat(n(c, "settings.c_recp")) && (a.ce.D("ymoo" + a.va, a.qg(rb)),
              a.qd && a.qd.destruct && a.qd.destruct())
          }), sd = w(V("settings.pcs"), Fa("1")), Ol = Xb.split("."), Qu = Ol.pop(), Pl = G(".", Ol), Ln = v(function(a) {
              a = X(a).hostname.split(".");
              return a[a.length - 1]
          }), Kn = v(function(a) {
              return -1 !== X(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
          }), Ru = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|.*\.yandex|turbopages\.org|turbo\.site|diplodoc\.(com|tech)|datalens\.tech|white-label\.yango-tech\.com|al-sadhan\.com|spar\.sa)$/, ne = v(function(a) {
              a = X(a).hostname;
              var c = !1;
              a && (c = -1 !== a.search(Ru));
              return c
          }), Su = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/, fq = v(function(a) {
              a = X(a).hostname;
              var c = !1;
              a && (c = -1 !== a.search(Su));
              return c
          }), Ah = ua.Na + "//" + Xb + "/metrika", we = Ah + "/metrika_match.html", kf, jq = (kf = {},
          kf.s = "p",
          kf["8"] = "i",
          kf), gq = Hb("csp", function(a, c) {
              return qa(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
          }), jh = "et w v z i u vf".split(" "), Ql = Qd("wv"), Tu = Qd("pub"), Ki = function() {
              function a(c, b) {
                  this.l = c;
                  this.type = b
              }
              a.isEnabled = function(c) {
                  return !!c.JSON
              }
              ;
              a.prototype.Ia = function(c) {
                  return Nf(Ob(this.l, c))
              }
              ;
              a.prototype.xb = function(c) {
                  var b = c.data;
                  "string" !== typeof b && (b = Ob(this.l, c.data));
                  return b
              }
              ;
              a.prototype.pb = function(c) {
                  return encodeURIComponent(c).length
              }
              ;
              a.prototype.Be = function(c, b) {
                  for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1)
                      e.push(c.slice(f * d, d * (f + 1)));
                  return e
              }
              ;
              return a
          }(), Up = v(function(a) {
              function c(f, g, h, k) {
                  d[0] = g;
                  h[k] = e[3];
                  h[k + 1] = e[2];
                  h[k + 2] = e[1];
                  h[k + 3] = e[0]
              }
              function b(f, g, h, k) {
                  d[0] = g;
                  h[k] = e[0];
                  h[k + 1] = e[1];
                  h[k + 2] = e[2];
                  h[k + 3] = e[3]
              }
              if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array)
                  return Vp;
              var d = new Float32Array([-0])
                , e = new Uint8Array(d.buffer);
              return 128 === e[3] ? b : c
          }), Qp = Ti(!1), Pp = Ti(!0), da, Mc, Rl = (da = {},
          da.mousemove = 0,
          da.mouseup = 1,
          da.mousedown = 2,
          da.click = 3,
          da.scroll = 4,
          da.windowblur = 5,
          da.windowfocus = 6,
          da.focus = 7,
          da.blur = 8,
          da.eof = 9,
          da.selection = 10,
          da.change = 11,
          da.input = 12,
          da.touchmove = 13,
          da.touchstart = 14,
          da.touchend = 15,
          da.touchcancel = 16,
          da.touchforcechange = 17,
          da.zoom = 18,
          da.resize = 19,
          da.keystroke = 20,
          da.deviceRotation = 21,
          da.fatalError = 22,
          da.hashchange = 23,
          da.stylechange = 24,
          da.articleInfo = 25,
          da.publishersHeader = 26,
          da.pageData = 27,
          da.mutationAdd = 28,
          da.mutationRemove = 29,
          da.mutationTextChange = 30,
          da.mutationAttributesChange = 31,
          da), Sl = (Mc = {},
          Mc.page = 0,
          Mc.event = 1,
          Mc.mutation = 2,
          Mc.publishers = 3,
          Mc.activity = 4,
          Mc), Ji = function() {
              function a(c, b) {
                  var d, e, f = this;
                  this.isSync = !1;
                  this.Hb = [];
                  this.mh = (d = {},
                  d.ad = "mutationAdd",
                  d.re = "mutationRemove",
                  d.tc = "mutationTextChange",
                  d.ac = "mutationAttributesChange",
                  d.page = "pageData",
                  d);
                  this.gh = (e = {},
                  e.ad = "addedNodesMutation",
                  e.re = "removedNodesMutation",
                  e.tc = "textChangeMutation",
                  e.ac = "attributesChangeMutation",
                  e.touchmove = "touchEvent",
                  e.touchstart = "touchEvent",
                  e.touchend = "touchEvent",
                  e.touchforcechange = "touchEvent",
                  e.touchcancel = "touchEvent",
                  e.resize = "resizeEvent",
                  e.scroll = "scrollEvent",
                  e.change = "changeEvent",
                  e.mousemove = "mouseEvent",
                  e.mousedown = "mouseEvent",
                  e.mouseup = "mouseEvent",
                  e.click = "mouseEvent",
                  e.focus = "focusEvent",
                  e.blur = "focusEvent",
                  e.deviceRotation = "deviceRotationEvent",
                  e.zoom = "zoomEvent",
                  e.keystroke = "keystrokesEvent",
                  e.selection = "selectionEvent",
                  e.stylechange = "styleChangeEvent",
                  e.fatalError = "fatalErrorEvent",
                  e.pageData = "page",
                  e);
                  this.Hh = function(g) {
                      var h = g.type;
                      return g.event || "publishersHeader" !== h && "articleInfo" !== h ? {
                          type: Sl[h],
                          event: Rl[f.mh[g.event] || g.event]
                      } : {
                          type: Sl.publishers,
                          event: Rl[h]
                      }
                  }
                  ;
                  this.Jf = function(g) {
                      var h = !T(g.partNum)
                        , k = f.Hh(g);
                      k = {
                          stamp: g.stamp,
                          type: k.type,
                          event: k.event,
                          frameId: g.frameId,
                          chunk: h ? g.data : void 0,
                          partNum: g.partNum,
                          end: g.end
                      };
                      !h && g.data && (h = f.gh[g.event] || g.event || g.type) && (k[h] = g.data);
                      return k
                  }
                  ;
                  this.l = c;
                  this.type = b
              }
              a.prototype.Ia = function(c, b) {
                  var d = this;
                  void 0 === b && (b = !1);
                  var e = kc(c, this.Jf)
                    , f = this.isSync || b ? Infinity : 10;
                  e = qd(this.l, e, f);
                  var g = [e];
                  this.Hb.push(e);
                  return e(Zg(function(h) {
                      h = Mi(d.l, Fp, {
                          Qi: h
                      });
                      h = qd(d.l, h, f, Bg);
                      g.push(h);
                      d.Hb.push(h);
                      return h
                  }))(Zg(function(h) {
                      h = Li(d.l, h.slice(-4));
                      h = qd(d.l, h, f, Bg);
                      g.push(h);
                      d.Hb.push(h);
                      return h
                  }))(tl(function(h) {
                      h = h[h.length - 1];
                      x(function(k) {
                          k = Le(d.l)(k, d.Hb);
                          d.Hb.splice(k, 1)
                      }, g);
                      return h
                  }))
              }
              ;
              a.prototype.xb = function(c) {
                  return Mi(this.l, Ni, this.Jf(c))(Cg(C))
              }
              ;
              a.prototype.pb = function(c) {
                  return c[0]
              }
              ;
              a.prototype.Be = function(c, b) {
                  for (var d = Li(this.l, c)(Cg(C)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1)
                      f.push(d.slice(g * e, e * (g + 1)));
                  return f
              }
              ;
              a.isEnabled = function(c) {
                  var b = Xe(c)
                    , d = !1;
                  try {
                      d = (d = 2 === (new c.Blob(["\u00e4"])).size) && 2 === (new c.Blob([new c.Uint8Array([1, 2])])).size
                  } catch (e) {}
                  return !b && d && !(!c.Uint8Array || !n(c, "Uint8Array.prototype.slice"))
              }
              ;
              return a
          }(), Tl = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "), Uu = "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(" "), Vu = function() {
              function a(c, b, d, e, f) {
                  var g = this;
                  this.Dc = !1;
                  this.meta = {};
                  this.scroll = {
                      x: 0,
                      y: 0
                  };
                  this.involvedTime = this.Hf = 0;
                  this.ee = this.Of = "";
                  this.ga = [];
                  this.ze = this.Ra = 0;
                  this.Bb = {
                      h: 0,
                      w: 0
                  };
                  this.buffer = [];
                  this.Cg = Uu;
                  this.flush = function() {
                      g.ze = W(g.l, g.flush, 2500);
                      var h = g.Id();
                      if (g.buffer.length || h) {
                          var k = $e(g.buffer);
                          h && k.push(h);
                          g.Of = g.ee;
                          g.oa.Ia(k)(bb(D(g.l, "p.b.st"), function(l) {
                              l && g.Ub(l)
                          }))
                      }
                  }
                  ;
                  this.Ub = e;
                  this.oa = d;
                  this.Zb = I(this.Zb, this);
                  this.Id = I(this.Id, this);
                  this.flush = I(this.flush, this);
                  this.l = c;
                  this.va = f;
                  this.Tc = b;
                  this.Yd = "pai" + b.id;
                  this.Lb();
                  this.cf = la(this.l);
                  this.time = ja(this.l);
                  this.wg();
                  this.Ld = J(this.l);
                  this.Ne = null
              }
              a.prototype.start = function() {
                  this.ze = W(this.l, this.flush, 2500);
                  if (!this.Dc) {
                      this.bj();
                      var c = this.Ld.C(this.Yd, [])
                        , b = !c.length;
                      c.push(I(this.ti, this));
                      this.Ld.Ja(this.Yd, c);
                      b && this.Xf();
                      this.Ne = la(this.l).F(this.l, ["click"], I(this.$i, this));
                      this.Zb({
                          type: "page",
                          target: this.l
                      })
                  }
              }
              ;
              a.prototype.stop = function() {
                  this.oj();
                  this.Dc = !0;
                  this.flush();
                  ma(this.l, this.ze)
              }
              ;
              a.prototype.Ef = function(c) {
                  return Yb("html", this.l, c) !== this.l.document.documentElement
              }
              ;
              a.prototype.Xf = function() {
                  var c = this;
                  D(this.l, "p.ic" + this.Tc.id, function() {
                      if (!c.Dc) {
                          var b = c.Ld.C(c.Yd)
                            , d = c.Tc.sh();
                          x(function(e) {
                              var f = z(function(g) {
                                  return A({}, g)
                              }, d);
                              O(e) && e(f)
                          }, b);
                          c.Ra = W(c.l, I(c.Xf, c), 1E3, "p")
                      }
                  })()
              }
              ;
              a.prototype.ti = function(c) {
                  this.Dc || (this.pj(c),
                  this.qj(),
                  this.Tg())
              }
              ;
              a.prototype.Yg = function(c, b) {
                  return (c.we || 0) <= (b.we || 0) ? b : c
              }
              ;
              a.prototype.$i = function(c) {
                  if (this.ga.length) {
                      c = rj(c);
                      var b = X(this.l).hostname, d;
                      if (d = c)
                          d = Ke(c.hostname) === Ke(b);
                      d && (c = N(this.Yg, this.ga[0], this.ga).id,
                      b = Hc(this.l),
                      ad(this.l, this.va.split(":")[0]).D("pai", c + "-" + b))
                  }
              }
              ;
              a.prototype.Zb = function(c) {
                  var b = this;
                  D(this.l, "p.ec." + this.Tc.id, function() {
                      var d, e;
                      try {
                          var f = c.type;
                          var g = c.target
                      } catch (p) {
                          return
                      }
                      var h = "page" === f;
                      if ("scroll" === f || h) {
                          var k = [b.l, b.l.document, b.l.document.documentElement, gc(b.l)];
                          H(g, k) && b.Lb()
                      }
                      ("resize" === f || h) && b.wg();
                      f = b.time(ca);
                      var l = Math.min(f - b.Hf, 5E3);
                      b.involvedTime += Math.round(l);
                      b.Hf = f;
                      if (b.meta && b.scroll && b.Bb) {
                          var m = b.Bb.h * b.Bb.w;
                          b.ga = z(function(p) {
                              var q = A({}, p)
                                , r = b.meta[q.id]
                                , t = Pc(p.Gb);
                              if (!r || b.Ef(q.element) || !t)
                                  return q;
                              p = b.l.Math;
                              r = p.max((b.scroll.y + b.Bb.h - r.y) / r.height, 0);
                              var y = t.height * t.width;
                              t = Sh(b.l, t, b.Bb);
                              q.we = t / m;
                              q.visibility = t / y;
                              if (.9 <= q.visibility || .1 <= q.we)
                                  q.involvedTime += l;
                              q.maxScrolled = p.round(1E4 * r) / 1E4;
                              return q
                          }, b.ga);
                          vb(b.l, (d = {},
                          d.name = "publishers",
                          d.counterKey = b.va,
                          d.data = (e = {},
                          e.involvedTime = b.involvedTime,
                          e.contentItems = z(function(p) {
                              var q;
                              return A((q = {},
                              q.contentElement = p.Gb,
                              q), p)
                          }, b.ga),
                          e),
                          d))
                      }
                  })()
              }
              ;
              a.prototype.pj = function(c) {
                  var b = z(function(d) {
                      return d.id
                  }, this.ga);
                  this.ga = this.ga.concat(ka(function(d) {
                      return !H(d.id, b)
                  }, c))
              }
              ;
              a.prototype.wg = function() {
                  var c = je(this.l) || Qc(this.l);
                  this.Bb = {
                      w: c[0],
                      h: c[1]
                  }
              }
              ;
              a.prototype.qj = function() {
                  var c = this;
                  D(this.l, "p.um." + this.Tc.id, function() {
                      var b = [];
                      c.Lb();
                      c.meta = Cb(function(d, e) {
                          var f;
                          if (c.Ef(e.element))
                              return b.push(e),
                              delete d[e.id],
                              d;
                          var g = (f = {},
                          f.id = e.id,
                          f.involvedTime = Math.max(e.involvedTime, 0),
                          f.maxScrolled = e.maxScrolled || 0,
                          f.chars = e.update ? e.update("chars") || 0 : 0,
                          f);
                          e.Gb && (f = Pc(e.Gb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0),
                          g.y = Math.max(Math.round(f.top) + c.scroll.y, 0),
                          g.width = Math.round(f.width),
                          g.height = Math.round(f.height));
                          d[e.id] = g;
                          return d
                      }, {}, c.ga);
                      x(function(d) {
                          d = Le(c.l)(d, c.ga);
                          c.ga.splice(d, 1)
                      }, b)
                  })()
              }
              ;
              a.prototype.Id = function() {
                  var c, b, d = z(u(this.meta, n), ha(this.meta));
                  return d.length && (this.ee = Ob(this.l, d),
                  this.Of !== this.ee) ? (c = {},
                  c.type = "publishersHeader",
                  c.data = (b = {},
                  b.articleMeta = d || [],
                  b.involvedTime = this.involvedTime,
                  b),
                  c) : null
              }
              ;
              a.prototype.Tg = function() {
                  var c = this;
                  if (this.ga.length) {
                      var b = z(function(d) {
                          var e, f = N(function(g, h) {
                              d[h] && (g[h] = d[h]);
                              return g
                          }, {}, c.Cg);
                          d.hg = !0;
                          return e = {},
                          e.type = "articleInfo",
                          e.stamp = f.stamp,
                          e.data = f,
                          e
                      }, ka(function(d) {
                          return !d.hg
                      }, this.ga));
                      b.length && (this.buffer = this.buffer.concat(b),
                      Lb(this.l, this.va, ["pdf", b]))
                  }
              }
              ;
              a.prototype.bj = function() {
                  this.cf.F(this.l, Tl, this.Zb)
              }
              ;
              a.prototype.oj = function() {
                  this.Ne && this.Ne();
                  this.cf.Ab(this.l, Tl, this.Zb)
              }
              ;
              a.prototype.Lb = function() {
                  this.scroll = {
                      x: this.l.pageXOffset || n(this.l, "document.documentElement.scrollLeft") || 0,
                      y: this.l.pageYOffset || n(this.l, "document.documentElement.scrollLeft") || 0
                  }
              }
              ;
              return a
          }(), Zd, kh = (Zd = {},
          Zd[1] = 500,
          Zd[2] = 500,
          Zd[3] = 0,
          Zd), Wu = ["topics", "rubric", "authors"], lh = function() {
              function a(c, b) {
                  var d, e = this;
                  this.id = "a";
                  this.Sd = !1;
                  this.Ib = {};
                  this.wb = {
                      "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                      Lf: ["article"]
                  };
                  this.Le = (d = {},
                  d.Answer = 3,
                  d.Review = 2,
                  d);
                  this.ff = v(function(f, g, h) {
                      var k;
                      Lb(e.l, e.va, "pfi", (k = {},
                      k.field = f,
                      k.itemField = g,
                      k.value = h,
                      k))
                  }, function(f, g, h) {
                      return "" + f + g + h
                  });
                  this.sj = function(f) {
                      x(function(g) {
                          f[g] && (f[g] = N(function(h, k) {
                              var l = k.name
                                , m = k.position;
                              if (!l)
                                  return e.ff(g, "name", l),
                                  h;
                              if ("string" === typeof m) {
                                  l = se(m);
                                  if (null === l || e.l.isNaN(l))
                                      return e.ff(g, "position", m),
                                      h;
                                  k.position = l
                              }
                              h.push(k);
                              return h
                          }, [], f[g]))
                      }, Wu);
                      return f
                  }
                  ;
                  this.Zg = v(function(f, g) {
                      var h;
                      Lb(e.l, e.va, ["pcs", g], (h = {},
                      h.chars = g.chars,
                      h.limit = kh[g.type],
                      h))
                  });
                  this.l = c;
                  this.root = Bc(c);
                  this.va = b
              }
              a.prototype.Oa = function(c) {
                  return c.element
              }
              ;
              a.prototype.pf = function(c, b) {
                  var d = this, e;
                  D(this.l, "P.s." + b, function() {
                      e = d.Ib[b].call(d, c)
                  })();
                  return e
              }
              ;
              a.prototype.Oi = function(c) {
                  var b = A({}, c);
                  this.Sd && !b.id && H(c.type, [3, 2]) && (c = G(", ", z(V("name"), b.authors || [])),
                  b.pageTitle = c + ": " + b.pageTitle);
                  b.pageTitle || (b.pageTitle = this.Qh(b.Gb));
                  b.pageUrlCanonical || (c = b.id,
                  b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Oh());
                  b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                  return b
              }
              ;
              a.prototype.Fa = function(c) {
                  var b = this
                    , d = {}
                    , e = this.Oa(c);
                  if (!e)
                      return null;
                  d.type = c.type;
                  x(function(g) {
                      d[g] = b.pf(c, g)
                  }, ha(this.Ib));
                  var f = ja(this.l);
                  d.stamp = f(lk);
                  d.element = c.element;
                  d.Gb = e;
                  d = this.sj(this.Oi(d));
                  d.id = d.id ? mc(d.id) : 1;
                  d.update = function(g) {
                      return b.Oa(c) ? b.pf(c, g) : void 0
                  }
                  ;
                  return d
              }
              ;
              a.prototype.Qh = function(c) {
                  for (var b = 1; 5 >= b; b += 1) {
                      var d = db(jc("h" + b, c));
                      if (d)
                          return d
                  }
              }
              ;
              a.prototype.Oh = function() {
                  var c = jc('[rel="canonical"]', this.root);
                  if (c)
                      return c.href
              }
              ;
              a.prototype.uf = function() {
                  return 1
              }
              ;
              a.prototype.uc = function() {
                  return []
              }
              ;
              a.prototype.sh = function() {
                  var c = this
                    , b = this.uc()
                    , d = 1;
                  return Cb(function(e, f) {
                      var g = c.Fa({
                          element: f,
                          type: c.uf(f)
                      }) || [];
                      M(g) || (g = [g]);
                      g = Cb(function(h, k) {
                          var l = h.values
                            , m = h.yf;
                          k && k.chars > kh[k.type] && !H(k.id, m) ? (l.push(k),
                          m.push(k.id)) : k && k.chars <= kh[k.type] && c.Zg(k.id, k);
                          return {
                              values: l,
                              yf: m
                          }
                      }, {
                          values: [],
                          yf: z(V("id"), e)
                      }, g).values;
                      return e.concat(z(function(h) {
                          var k;
                          h = A((k = {
                              index: d,
                              hg: !1
                          },
                          k.involvedTime = 0,
                          k), h);
                          d += 1;
                          return h
                      }, g))
                  }, [], b)
              }
              ;
              return a
          }(), Ul = function(a) {
              function c() {
                  var b, d = null !== a && a.apply(this, arguments) || this;
                  d.id = "j";
                  d.Sd = !0;
                  d.Ze = G(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                  d.Ib = (b = {},
                  b.id = function(e) {
                      var f = e.data["@id"];
                      e = e.data.mainEntity || e.data.mainEntityOfPage;
                      !f && ia(e) && (f = e["@id"]);
                      return f
                  }
                  ,
                  b.chars = function(e) {
                      var f = e.data;
                      return S(f.text) ? f.text.length : Nb(this.Oa(e)).length
                  }
                  ,
                  b.authors = function(e) {
                      e = e.data;
                      var f = [];
                      f = f.concat(this.sc(e, "author"));
                      f = f.concat(this.sc(e.mainEntity, "author"));
                      return f.concat(this.sc(e.mainEntityOfPage, "author"))
                  }
                  ,
                  b.pageTitle = function(e) {
                      var f = e.data
                        , g = f.headline || "";
                      f.alternativeHeadline && (g += " " + f.alternativeHeadline);
                      "" === g && (f.name ? g = f.name : f.itemReviewed && (g = f.itemReviewed));
                      3 === e.type && ia(f.parentItem) && (g = f.parentItem.text);
                      return g
                  }
                  ,
                  b.updateDate = function(e) {
                      return e.data.dateModified || ""
                  }
                  ,
                  b.publicationDate = function(e) {
                      return e.data.datePublished || ""
                  }
                  ,
                  b.pageUrlCanonical = function(e) {
                      return e.data.url
                  }
                  ,
                  b.topics = function(e) {
                      return this.sc(e.data, "about", ["name", "alternateName"])
                  }
                  ,
                  b.rubric = function(e) {
                      var f = this
                        , g = this.Oa(e);
                      e = Ea(z(function(h) {
                          h = Vb(f.l, Nb(h));
                          if (ia(h) || M(h)) {
                              var k = f.qf(h);
                              if (k)
                                  return N(function(l, m) {
                                      return l ? l : ia(m) && "BreadcrumbList" === m["@type"] ? m : l
                                  }, null, k);
                              if ("BreadcrumbList" === h["@type"])
                                  return h
                          }
                          return null
                      }, [e.element].concat(ib(this.Ze, document.body === g ? document.documentElement : g))));
                      return e.length && (e = e[0].itemListElement,
                      M(e)) ? Ea(z(function(h) {
                          return ia(h) && h.item && ia(h.item) && !f.l.isNaN(h.position) ? {
                              name: h.item.name || h.name,
                              position: h.position
                          } : null
                      }, e)) : []
                  }
                  ,
                  b);
                  return d
              }
              Oa(c, a);
              c.prototype.sc = function(b, d, e) {
                  void 0 === e && (e = ["name"]);
                  if (!ia(b) || !b[d])
                      return [];
                  b = b[d];
                  b = M(b) ? b : [b];
                  b = Ea(z(function(f) {
                      return f ? "string" === typeof f ? f : ia(f) ? N(function(g, h) {
                          return g || "" + f[h]
                      }, "", e) : null : null
                  }, b));
                  return z(function(f) {
                      var g;
                      return g = {},
                      g.name = f,
                      g
                  }, b)
              }
              ;
              c.prototype.Oa = function(b) {
                  var d = b.element
                    , e = b.data || {};
                  b = e["@id"];
                  var f = e.url;
                  e = null;
                  f && S(f) && (e = this.ef(f));
                  !e && b && S(b) && (e = this.ef(b));
                  e || (e = b = d.parentNode,
                  !Yb("head", this.l, d) && b && 0 !== Nb(b).length) || (e = this.l.document.body);
                  return e
              }
              ;
              c.prototype.ef = function(b) {
                  try {
                      var d = Ub(this.l, b).hash;
                      if (d) {
                          var e = jc(d, this.l.document.body);
                          if (e)
                              return e
                      }
                  } catch (f) {}
                  return null
              }
              ;
              c.prototype.me = function(b) {
                  return this.Le[b["@type"]] || 1
              }
              ;
              c.prototype.Fa = function(b) {
                  var d = this
                    , e = b.element
                    , f = b.data;
                  if (!f && (f = Vb(this.l, Nb(e)),
                  !f || !/schema\.org/.test(f["@context"]) && !M(f)))
                      return null;
                  var g = this.qf(f);
                  if (g)
                      return z(function(k) {
                          return ia(k) && H(k["@type"], d.wb["schema.org"]) ? a.prototype.Fa.call(d, {
                              element: e,
                              data: k,
                              type: d.me(k)
                          }) : null
                      }, g);
                  b.data = f;
                  if ("QAPage" === b.data["@type"]) {
                      var h = b.data.mainEntity || b.data.mainEntityOfPage;
                      if (!h)
                          return null
                  }
                  "Question" === b.data["@type"] && (h = b.data);
                  return h ? (b = lc(u(h, n), ["acceptedAnswer", "suggestedAnswer"]),
                  z(function(k) {
                      var l;
                      if (!ia(k) || !H(k["@type"], d.wb["schema.org"]))
                          return null;
                      k = {
                          element: e,
                          type: d.me(k),
                          data: A((l = {},
                          l.parentItem = h,
                          l), k)
                      };
                      return a.prototype.Fa.call(d, k)
                  }, b)) : H(b.data["@type"], this.wb["schema.org"]) ? a.prototype.Fa.call(this, A(b, {
                      type: this.me(b.data)
                  })) : null
              }
              ;
              c.prototype.uc = function() {
                  return ib(this.Ze, this.root)
              }
              ;
              c.prototype.qf = function(b) {
                  if (M(b))
                      return b;
                  if (b && M(b["@graph"]))
                      return b["@graph"]
              }
              ;
              return c
          }(lh), mh = function(a) {
              function c() {
                  var b, d = null !== a && a.apply(this, arguments) || this;
                  d.id = "s";
                  d.Sd = !0;
                  d.nj = Ma("exec", new RegExp("schema.org\\/(" + G("|", ha(d.Le)) + ")$"));
                  d.Ib = (b = {},
                  b.id = function(e) {
                      e = e.element;
                      var f = gb(this.l, e, "identifier");
                      return f ? db(f) : (f = gb(this.l, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                  }
                  ,
                  b.chars = function(e) {
                      var f = 0;
                      e = e.element;
                      for (var g = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], h = 0; h < g.length; h += 1) {
                          var k = gb(this.l, e, g[h]);
                          if (k) {
                              f = db(k).length;
                              break
                          }
                      }
                      e = Nb(e);
                      0 === f && e && (f += e.length);
                      return f
                  }
                  ,
                  b.topics = function(e) {
                      var f = this
                        , g = Ud(this.l, e.element, "about");
                      return z(function(h) {
                          var k = {
                              name: db(h)
                          };
                          if (g = gb(f.l, h, "name"))
                              k.name = db(g);
                          return k
                      }, g)
                  }
                  ,
                  b.rubric = function(e) {
                      var f = this;
                      (e = jc('[itemtype$="schema.org/BreadcrumbList"]', e.element)) || (e = jc('[itemtype$="schema.org/BreadcrumbList"]', this.root));
                      return e ? z(function(g) {
                          return {
                              name: db(gb(f.l, g, "name")),
                              position: db(gb(f.l, g, "position"))
                          }
                      }, Ud(this.l, e, "itemListElement")) : []
                  }
                  ,
                  b.updateDate = function(e) {
                      return (e = gb(this.l, e.element, "dateModified")) ? Lk(e) : ""
                  }
                  ,
                  b.publicationDate = function(e) {
                      return (e = gb(this.l, e.element, "datePublished")) ? Lk(e) : ""
                  }
                  ,
                  b.pageUrlCanonical = function(e) {
                      e = Ud(this.l, e.element, "url");
                      if (e.length) {
                          var f = e[0];
                          return f.href ? f.href : db(e)
                      }
                      return null
                  }
                  ,
                  b.pageTitle = function(e) {
                      var f = ""
                        , g = e.element
                        , h = gb(this.l, g, "headline");
                      h && (f += db(h));
                      (h = gb(this.l, g, "alternativeHeadline")) && (f += " " + db(h));
                      "" === f && ((h = gb(this.l, g, "name")) || (h = gb(this.l, g, "itemReviewed")),
                      h && (f += db(h)));
                      3 === e.type && (e = Yb('[itemtype$="schema.org/Question"]', this.l, g)) && (e = gb(this.l, e, "text")) && (f += db(e));
                      return f
                  }
                  ,
                  b.authors = function(e) {
                      var f = this;
                      e = Ud(this.l, e.element, "author");
                      return z(function(g) {
                          var h, k = (h = {},
                          h.name = "",
                          h);
                          /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = gb(f.l, g, "name")) && (k.name = db(h));
                          k.name || (k.name = g.getAttribute("content") || Nb(g) || g.getAttribute("href"));
                          return k
                      }, e)
                  }
                  ,
                  b);
                  return d
              }
              Oa(c, a);
              c.prototype.uf = function(b) {
                  b = b.getAttribute("itemtype") || "";
                  return (b = this.nj(b)) ? this.Le[b[1]] : 1
              }
              ;
              c.prototype.Fa = function(b) {
                  return b.element && Nb(b.element).length ? a.prototype.Fa.call(this, b) : null
              }
              ;
              c.prototype.uc = function() {
                  var b = G(",", z(function(d) {
                      return '[itemtype$="schema.org/' + d + '"]'
                  }, this.wb["schema.org"]));
                  return ib(b, this.root)
              }
              ;
              return c
          }(lh), Vl = function(a) {
              function c(b, d) {
                  var e, f = a.call(this, b, d) || this;
                  f.id = "o";
                  f.Ib = (e = {},
                  e.chars = function(g) {
                      g = this.Oa(g);
                      return Nb(g).length
                  }
                  ,
                  e.authors = function(g) {
                      return this.Ed(g.data.author)
                  }
                  ,
                  e.pageTitle = function(g) {
                      return this.yc(g.data.title) || ""
                  }
                  ,
                  e.updateDate = function(g) {
                      return this.yc(g.data.modified_time)
                  }
                  ,
                  e.publicationDate = function(g) {
                      return this.yc(g.data.published_time)
                  }
                  ,
                  e.pageUrlCanonical = function(g) {
                      return this.yc(g.data.url)
                  }
                  ,
                  e.rubric = function(g) {
                      return this.Ed(g.data.section)
                  }
                  ,
                  e.topics = function(g) {
                      return this.Ed(g.data.tag)
                  }
                  ,
                  e);
                  f.lh = new RegExp("^(og:)?((" + G("|", f.wb.Lf) + "):)?");
                  return f
              }
              Oa(c, a);
              c.prototype.Ed = function(b) {
                  var d;
                  return b ? M(b) ? z(function(e) {
                      var f;
                      return f = {},
                      f.name = e ? "" + e : null,
                      f
                  }, b) : [(d = {},
                  d.name = b ? "" + b : null,
                  d)] : []
              }
              ;
              c.prototype.yc = function(b) {
                  return M(b) ? b.length ? "" + b[0] : null : b ? "" + b : null
              }
              ;
              c.prototype.uc = function() {
                  var b = ib('meta[property="og:type"]', this.l.document.body);
                  return [this.l.document.head].concat(b)
              }
              ;
              c.prototype.Gh = function(b) {
                  var d = this
                    , e = b.element
                    , f = {}
                    , g = this.Oa(b);
                  e = ib("meta[property]", e === this.l.document.head ? e : g);
                  if (e.length)
                      x(function(h) {
                          try {
                              if (h.parentNode === g || h.parentNode === d.l.document.head) {
                                  var k = h.getAttribute("property").replace(d.lh, "")
                                    , l = db(h);
                                  f[k] ? M(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                              }
                          } catch (m) {
                              Oc(d.l, "og.ed", m)
                          }
                      }, e);
                  else
                      return null;
                  return H(f.type, this.wb.Lf) ? A(b, {
                      data: f
                  }) : null
              }
              ;
              c.prototype.Oa = function(b) {
                  b = b.element;
                  var d = this.l.document;
                  return b === d.head ? d.body : b.parentNode
              }
              ;
              c.prototype.Fa = function(b) {
                  return (b = this.Gh(b)) ? a.prototype.Fa.call(this, b) : null
              }
              ;
              return c
          }(lh), $d = {};
          Ul && ($d.json_ld = Ul);
          mh && ($d.schema = mh,
          $d.microdata = mh);
          Vl && ($d.opengraph = Vl);
          var Xu = B("p.p", function(a, c) {
              function b(m) {
                  var p = A({}, l);
                  p.V.ca = m;
                  return f(p, c)["catch"](D(a, "s.ww.p"))
              }
              var d, e = Ii(a, "9", "8");
              if (!La("querySelectorAll", a.document.querySelectorAll) || !e)
                  return K.resolve();
              var f = qa(a, "p", c)
                , g = Ia()
                , h = ad(a, c.id)
                , k = h.C("pai");
              k && (h.lc("pai"),
              g.D("pai", k));
              var l = {
                  J: (d = {},
                  d["wv-type"] = e.type,
                  d),
                  K: g,
                  V: {}
              };
              return na(c, D(a, "ps.s", function(m) {
                  var p;
                  if (m = n(m, "settings.publisher.schema")) {
                      yk(c) && (m = "microdata");
                      var q = $d[m];
                      if (q && e) {
                          var r = L(c);
                          q = new q(a,r);
                          q = new Vu(a,q,e,b,r);
                          q.start();
                          Lb(a, r, "ps", (p = {},
                          p.schema = m,
                          p));
                          return I(q.stop, q)
                      }
                  }
              }))
          }), Yu = function() {
              function a(c, b) {
                  this.type = "0";
                  this.l = c;
                  this.Eh = b
              }
              a.prototype.Ia = function(c) {
                  return Nf(lc(I(this.xb, this), c))
              }
              ;
              a.prototype.xb = function(c, b) {
                  var d = this
                    , e = []
                    , f = this.Eh(this.l, b && b.type, c.type);
                  f && (e = lc(function(g) {
                      return g({
                          l: d.l,
                          qa: c
                      }) || []
                  }, f));
                  return e
              }
              ;
              a.prototype.pb = function(c) {
                  return c.length
              }
              ;
              a.prototype.Be = function(c) {
                  return [c]
              }
              ;
              a.prototype.isEnabled = function() {
                  return !0
              }
              ;
              return a
          }(), Wl = function() {
              function a(c, b, d) {
                  this.$e = 0;
                  this.ne = 1;
                  this.dd = 5E3;
                  this.l = c;
                  this.oa = b;
                  this.Ub = d
              }
              a.prototype.Wc = function() {
                  this.$e = W(this.l, w(I(this.flush, this), I(this.Wc, this)), this.dd, "b.f")
              }
              ;
              a.prototype.send = function(c, b) {
                  var d = this.Ub(c, b || [], this.ne);
                  this.ne += 1;
                  return d
              }
              ;
              a.prototype.push = function() {}
              ;
              a.prototype.flush = function() {}
              ;
              return a
          }(), Wo = function(a) {
              function c(b, d, e) {
                  b = a.call(this, b, d, e) || this;
                  b.buffer = [];
                  b.Dg = 7500;
                  b.dd = 3E4;
                  b.Wc();
                  return b
              }
              Oa(c, a);
              c.prototype.push = function(b, d) {
                  var e = this.oa.xb(b, d);
                  xa(this.buffer, e);
                  this.oa.pb(this.buffer) > this.Dg && this.flush()
              }
              ;
              c.prototype.flush = function() {
                  var b = this.buffer;
                  b.length && (this.send(b),
                  this.buffer = [])
              }
              ;
              return c
          }(Wl), kp = /opera mini/i, Di = ["phone", "email"], Xl = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "), hp = /^[\w\u0410-\u042f\u0430-\u044f]$/, ip = [65, 90], jp = [97, 122], fp = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "), dp = new RegExp("(" + G("|", Xl) + ")","i"), cp = new RegExp("(" + G("|", Di) + ")","i"), Mk = ["password", "passwd", "pswd"], ep = new RegExp("(" + G("|", Xl.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) + ")","i"), $a = "metrikaId_" + Math.random(), Dc = {
              counter: 0
          }, Ss = v(function() {
              var a;
              return a = {},
              a.A = 1,
              a.ABBR = 2,
              a.ACRONYM = 3,
              a.ADDRESS = 4,
              a.APPLET = 5,
              a.AREA = 6,
              a.B = 7,
              a.BASE = 8,
              a.BASEFONT = 9,
              a.BDO = 10,
              a.BIG = 11,
              a.BLOCKQUOTE = 12,
              a.BODY = 13,
              a.BR = 14,
              a.BUTTON = 15,
              a.CAPTION = 16,
              a.CENTER = 17,
              a.CITE = 18,
              a.CODE = 19,
              a.COL = 20,
              a.COLGROUP = 21,
              a.DD = 22,
              a.DEL = 23,
              a.DFN = 24,
              a.DIR = 25,
              a.DIV = 26,
              a.DL = 27,
              a.DT = 28,
              a.EM = 29,
              a.FIELDSET = 30,
              a.FONT = 31,
              a.FORM = 32,
              a.FRAME = 33,
              a.FRAMESET = 34,
              a.H1 = 35,
              a.H2 = 36,
              a.H3 = 37,
              a.H4 = 38,
              a.H5 = 39,
              a.H6 = 40,
              a.HEAD = 41,
              a.HR = 42,
              a.HTML = 43,
              a.I = 44,
              a.IFRAME = 45,
              a.IMG = 46,
              a.INPUT = 47,
              a.INS = 48,
              a.ISINDEX = 49,
              a.KBD = 50,
              a.LABEL = 51,
              a.LEGEND = 52,
              a.LI = 53,
              a.LINK = 54,
              a.MAP = 55,
              a.MENU = 56,
              a.META = 57,
              a.NOFRAMES = 58,
              a.NOSCRIPT = 59,
              a.OBJECT = 60,
              a.OL = 61,
              a.OPTGROUP = 62,
              a.OPTION = 63,
              a.P = 64,
              a.PARAM = 65,
              a.PRE = 66,
              a.Q = 67,
              a.S = 68,
              a.SAMP = 69,
              a.SCRIPT = 70,
              a.SELECT = 71,
              a.SMALL = 72,
              a.SPAN = 73,
              a.STRIKE = 74,
              a.STRONG = 75,
              a.STYLE = 76,
              a.SUB = 77,
              a.SUP = 78,
              a.TABLE = 79,
              a.TBODY = 80,
              a.TD = 81,
              a.TEXTAREA = 82,
              a.TFOOT = 83,
              a.TH = 84,
              a.THEAD = 85,
              a.TITLE = 86,
              a.TR = 87,
              a.TT = 88,
              a.U = 89,
              a.UL = 90,
              a.VAR = 91,
              a.NOINDEX = 100,
              a
          }), Ps = [17, 18, 38, 32, 39, 15, 11, 7, 1], Zu = function() {
              var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
              return {
                  Nj: new RegExp("(" + G("|", a) + ")","i"),
                  Zj: new RegExp("(" + G("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) + ")","i"),
                  Lj: /ym-record-keys/i,
                  Bi: "\u2022",
                  Wj: 88
              }
          }(), Rk = Eb(u(Zu.Bi, Q)), yd = !0, Sg = "", Tg = !1, Ug = !0, Vg = !1, ap = oa(function(a, c) {
              var b = E([a, "efv." + c.event], D);
              c.R = z(w(Q, b), c.R);
              return c
          }), Yl = v(function(a) {
              var c = []
                , b = []
                , d = [];
              a.document.attachEvent && !a.opera && (c.push(Tf),
              b.push(Vs),
              b.push(Ws));
              a.document.addEventListener ? c.push(Pk) : (b.push(Ok),
              d.push(Pk));
              return $o(a, ("onpagehide"in a ? [] : [{
                  target: a,
                  type: "window",
                  event: "beforeunload",
                  R: [C]
              }, {
                  target: a,
                  type: "window",
                  event: "unload",
                  R: [C]
              }]).concat([{
                  event: "click",
                  R: [ef]
              }, {
                  event: "dblclick",
                  R: [ef]
              }, {
                  event: "mousedown",
                  R: [ef]
              }, {
                  event: "mouseup",
                  R: [Ys]
              }, {
                  event: "keydown",
                  R: [Zs]
              }, {
                  event: "keypress",
                  R: [$s]
              }, {
                  event: "copy",
                  R: [Tk]
              }, {
                  event: "blur",
                  R: c
              }, {
                  event: "focusin",
                  R: b
              }, {
                  event: "focusout",
                  R: d
              }]).concat(!a.document.attachEvent || a.opera ? [{
                  target: a,
                  type: "window",
                  event: "focus",
                  R: [Bi]
              }, {
                  target: a,
                  type: "window",
                  event: "blur",
                  R: [Tf]
              }] : []).concat(a.document.addEventListener ? [{
                  event: "focus",
                  R: [Ok]
              }, {
                  event: "change",
                  R: [Qk]
              }, {
                  event: "submit",
                  R: [Vk]
              }] : [{
                  type: "formInput",
                  event: "change",
                  R: [Qk]
              }, {
                  type: "form",
                  event: "submit",
                  R: [Vk]
              }]))
          }), Yo = v(function(a) {
              var c = [];
              gc(a) && c.push({
                  target: a,
                  type: "document",
                  event: "mouseleave",
                  R: [at]
              });
              "onpagehide"in a && c.push({
                  target: a,
                  type: "window",
                  event: "pagehide",
                  R: [function(b) {
                      b = b.flush;
                      b()
                  }
                  ]
              });
              return c
          }), $u = ["submit", "beforeunload", "unload"], av = v(function(a, c) {
              var b = c(a);
              return N(function(d, e) {
                  d[e.type + ":" + e.event] = e.R;
                  return d
              }, {}, b)
          }), bv = u(Yl, function(a, c, b, d) {
              return av(c, a)[b + ":" + d] || []
          }), Zo = /^\s*function submit\(\)/, cv = B("fw.p", function(a, c) {
              var b;
              if (!(b = c.hh || !c.Cb)) {
                  var d = J(a)
                    , e = !1;
                  b = d.C("hitParam", {});
                  var f = L(c);
                  b[f] && (d = d.C("counters", {}),
                  e = de(c.ba) && !d[f]);
                  b[f] = 1;
                  b = e
              }
              if (b)
                  return K.resolve(C);
              b = new Yu(a,bv);
              return Vo(a, c, b, Yl, $u)
          }), nh, Zl = (nh = function(a) {
              function c(b, d, e, f) {
                  void 0 === f && (f = 0);
                  d = a.call(this, b, d, e) || this;
                  d.Ie = 0;
                  d.Eb = 0;
                  d.He = 0;
                  d.buffer = [];
                  d.dd = 2E3;
                  d.$ = vd(b);
                  d.Wc();
                  d.He = f;
                  return d
              }
              Oa(c, a);
              c.prototype.mf = function(b) {
                  return Ea(this.$.aa("ag", b))
              }
              ;
              c.prototype.lf = function(b, d) {
                  var e = this;
                  b(bb(D(this.l, "wv2.b.st"), function(f) {
                      e.send(f, d)
                  }))
              }
              ;
              c.prototype.aj = function(b, d) {
                  var e = this;
                  ma(this.l, this.$e);
                  var f = Math.ceil(this.oa.pb(d) / 63E4)
                    , g = this.oa.Be(d, f);
                  x(function(h, k) {
                      var l, m = A({}, b, (l = {},
                      l.data = h,
                      l.partNum = k + 1,
                      l.end = k + 1 === f,
                      l.partsTotal = g.length,
                      l));
                      l = e.oa.Ia([m], !1);
                      e.lf(l, [m])
                  }, g);
                  this.Wc()
              }
              ;
              c.prototype.send = function(b, d) {
                  var e = this;
                  this.$.aa("se", d);
                  return a.prototype.send.call(this, b, d).then(Q, function() {
                      e.$.aa("see", d)
                  })
              }
              ;
              c.nf = function(b, d, e, f, g) {
                  c.gd["" + b + d] || (this.gd[d] = new c(g,f,e,"m" === d ? 31457280 : 0));
                  return this.gd[d]
              }
              ;
              c.prototype.oi = function() {
                  return this.He && this.Ie >= this.He
              }
              ;
              c.prototype.push = function(b) {
                  var d = this;
                  if (!this.oi()) {
                      this.$.aa("p", b);
                      var e = this.oa.xb(b)
                        , f = this.oa.pb(e);
                      7E5 < f ? this.aj(b, e) : (e = this.mf(this.buffer.concat([b])),
                      e = Cb(function(g, h) {
                          return g + d.oa.pb(d.oa.xb(h))
                      }, 0, e),
                      this.Eb + e + f >= 7E5 * .7 && this.flush(),
                      this.buffer.push(b),
                      this.Eb += f)
                  }
              }
              ;
              c.prototype.F = function(b, d) {
                  this.$.F([b], d)
              }
              ;
              c.prototype.ia = function(b, d) {
                  this.$.ia([b], d)
              }
              ;
              c.prototype.flush = function(b) {
                  var d = this.buffer.concat(this.mf(this.buffer));
                  d.length && (this.buffer = [],
                  this.Ie += this.Eb,
                  this.Eb = 0,
                  b = this.oa.Ia(d, b),
                  this.lf(b, d))
              }
              ;
              return c
          }(Wl),
          nh.gd = {},
          nh), eb = function() {
              function a(c, b, d) {
                  this.vi = "wv2.c";
                  this.ub = [];
                  this.ma = [];
                  this.l = c;
                  this.M = Rf(c, this, d, this.vi);
                  this.G = b;
                  this.Ta = this.G.Jh();
                  this.start = this.M.H(this.start, "st");
                  this.stop = this.M.H(this.stop, "sp")
              }
              a.prototype.start = function() {
                  var c = this;
                  this.ub = z(function(b) {
                      var d = b[0]
                        , e = b[2];
                      b = I(c.M.H(b[1], d[0]), c);
                      return c.Ta.F(e || c.l, d, b)
                  }, this.ma)
              }
              ;
              a.prototype.stop = function() {
                  x(va, this.ub)
              }
              ;
              a.prototype.Z = function(c) {
                  return this.G.wa().Z(c)
              }
              ;
              return a
          }(), To = ["checkbox", "radio"], Uo = /pwd|value|password/i, oh = V("location.href"), dv = function(a) {
              function c(b, d, e) {
                  d = a.call(this, b, d, e) || this;
                  d.ta = {
                      elements: [],
                      attributes: []
                  };
                  d.index = 0;
                  d.ie = d.M.H(d.ie, "o");
                  d.rd = d.M.H(d.rd, "io");
                  d.ed = d.M.H(d.ed, "ao");
                  d.qe = d.M.H(d.qe, "a");
                  d.oe = d.M.H(d.oe, "at");
                  d.se = d.M.H(d.se, "r");
                  d.pe = d.M.H(d.pe, "c");
                  d.ra = new b.MutationObserver(d.ie);
                  return d
              }
              Oa(c, a);
              c.prototype.start = function() {
                  this.ra.observe(this.l.document.documentElement, {
                      attributes: !0,
                      characterData: !0,
                      childList: !0,
                      subtree: !0,
                      attributeOldValue: !0,
                      characterDataOldValue: !0
                  })
              }
              ;
              c.prototype.stop = function() {
                  this.ra.disconnect()
              }
              ;
              c.prototype.ed = function(b) {
                  var d = b.target
                    , e = b.attributeName
                    , f = b.oldValue;
                  b = d.getAttribute(e);
                  if (b === f)
                      return !1;
                  f = Pb(this.l)(d, this.ta.elements);
                  -1 === f && (f = this.ta.elements.push(d) - 1,
                  this.ta.attributes[f] = {});
                  this.ta.attributes[f] || (this.ta.attributes[f] = {});
                  this.ta.attributes[f][e] = xe(this.l, d, e, b, this.G.Kb()).value;
                  return !0
              }
              ;
              c.prototype.rd = function(b) {
                  function d(k) {
                      var l = Pb(e.l)(k, f);
                      return -1 === l ? (f.push(k),
                      k = {
                          Cd: {}
                      },
                      g.push(k),
                      k) : g[l]
                  }
                  var e = this
                    , f = []
                    , g = [];
                  x(function(k) {
                      var l = k.attributeName
                        , m = k.removedNodes
                        , p = k.oldValue
                        , q = k.target
                        , r = k.nextSibling
                        , t = k.previousSibling;
                      switch (k.type) {
                      case "attributes":
                          if (e.ed(k)) {
                              var y = d(q);
                              y.Cd[l] || (y.Cd[l] = xe(e.l, q, l, p, e.G.Kb()).value)
                          }
                          break;
                      case "childList":
                          m && x(function(F) {
                              y = d(F);
                              y.jf || A(y, {
                                  jf: q,
                                  yh: r ? r : void 0,
                                  zh: t ? t : void 0
                              })
                          }, Ha(m));
                          break;
                      case "characterData":
                          y = d(q),
                          y.kf || (y.kf = p)
                      }
                  }, b);
                  var h = this.G.wa();
                  x(function(k, l) {
                      h.Ae(k, g[l])
                  }, f)
              }
              ;
              c.prototype.ie = function(b) {
                  var d = this;
                  if (oh(this.l)) {
                      var e = this.G.stamp();
                      this.rd(b);
                      x(function(f) {
                          var g = f.addedNodes
                            , h = f.removedNodes
                            , k = f.target;
                          switch (f.type) {
                          case "childList":
                              h && h.length && d.se(Ha(h), e);
                              g && g.length && d.qe(Ha(g), e);
                              break;
                          case "characterData":
                              d.pe(k, e)
                          }
                      }, b);
                      this.oe(e)
                  } else
                      this.stop()
              }
              ;
              c.prototype.oe = function(b) {
                  var d = this;
                  x(function(e, f) {
                      var g = d.wc();
                      d.G.T("mutation", {
                          index: g,
                          attributes: d.ta.attributes[f],
                          target: d.Z(e)
                      }, "ac", b)
                  }, this.ta.elements);
                  this.ta.elements = [];
                  this.ta.attributes = []
              }
              ;
              c.prototype.qe = function(b, d) {
                  var e = this
                    , f = this.wc();
                  this.G.wa().Ac({
                      nodes: b,
                      Vc: function(g) {
                          g = z(function(h) {
                              h.node = void 0;
                              return h
                          }, g);
                          e.G.T("mutation", {
                              index: f,
                              nodes: g
                          }, "ad", d)
                      }
                  })
              }
              ;
              c.prototype.se = function(b, d) {
                  var e = this
                    , f = this.wc()
                    , g = this.G.wa()
                    , h = z(function(k) {
                      var l = g.removeNode(k);
                      ij(e.l, k, function(m) {
                          g.removeNode(m)
                      });
                      return l
                  }, b);
                  this.G.T("mutation", {
                      index: f,
                      nodes: h
                  }, "re", d)
              }
              ;
              c.prototype.pe = function(b, d) {
                  var e = this.wc();
                  this.G.T("mutation", {
                      value: b.textContent,
                      target: this.Z(b),
                      index: e
                  }, "tc", d)
              }
              ;
              c.prototype.wc = function() {
                  var b = this.index;
                  this.index += 1;
                  return b
              }
              ;
              return c
          }(eb), ev = function() {
              function a(c, b) {
                  var d = this;
                  this.qc = [];
                  this.jb = [];
                  this.fe = 1;
                  this.Xe = this.dg = 0;
                  this.Ba = {};
                  this.Ua = {};
                  this.Jb = [];
                  this.Pd = function(f) {
                      return d.jb.length ? H(f, d.jb) : !1
                  }
                  ;
                  this.removeNode = function(f) {
                      var g = d.Z(f)
                        , h = Na(f);
                      if (h)
                          return h = "NR:" + h.toLowerCase(),
                          d.Pd(h) && d.$.aa(h, {
                              data: {
                                  node: f,
                                  id: g
                              }
                          }),
                          g
                  }
                  ;
                  this.ob = function(f) {
                      var g = Na(f);
                      if (g) {
                          var h = f.__ym_indexer;
                          return h ? h : (h = d.fe,
                          f.__ym_indexer = h,
                          d.fe += 1,
                          g = "NA:" + g.toLowerCase(),
                          d.Pd(g) && d.$.aa(g, {
                              data: {
                                  node: f,
                                  id: h
                              }
                          }),
                          h)
                      }
                      return null
                  }
                  ;
                  this.Yf = function() {
                      d.dg = W(d.l, w(I(d.da, d, !1), d.Yf), 50, "i.s")
                  }
                  ;
                  this.Wf = function() {
                      d.Xe = W(d.l, w(I(d.kd, d, !1), d.Wf), 50, "i.g")
                  }
                  ;
                  this.Ri = function(f) {
                      null === d.Ba[f] && delete d.Ba[f];
                      null === d.Ua[f] && delete d.Ua[f]
                  }
                  ;
                  this.l = c;
                  var e = Rf(c, this, "i");
                  this.$ = vd(c);
                  this.options = b;
                  this.start = e.H(this.start, "st");
                  this.stop = e.H(this.stop, "sp");
                  this.Z = e.H(this.Z, "i");
                  this.Ae = e.H(this.Ae, "o");
                  this.Ac = e.H(this.Ac, "a");
                  this.removeNode = e.H(this.removeNode, "r");
                  this.da = e.H(this.da, "s");
                  this.kd = e.H(this.kd, "g")
              }
              a.prototype.Ae = function(c, b) {
                  var d = this.ob(c);
                  Ra(d) || (this.Ua[d] && this.Z(c),
                  this.Ua[d] = b)
              }
              ;
              a.prototype.F = function(c, b, d) {
                  c = "" + b + c;
                  this.jb.push(c);
                  this.Pd(c) || this.jb.push(c);
                  this.$.F([c], d)
              }
              ;
              a.prototype.ia = function(c, b, d) {
                  var e = "" + b + c;
                  this.jb = ka(function(f) {
                      return f !== e
                  }, this.jb);
                  this.$.ia([e], d)
              }
              ;
              a.prototype.start = function() {
                  this.Yf();
                  this.Wf()
              }
              ;
              a.prototype.stop = function() {
                  this.flush();
                  ma(this.l, this.Xe);
                  ma(this.l, this.dg);
                  this.qc = [];
                  this.Jb = [];
                  this.Ba = {};
                  this.Ua = {}
              }
              ;
              a.prototype.Ac = function(c) {
                  var b = this
                    , d = []
                    , e = 0
                    , f = {
                      Vc: c.Vc,
                      result: [],
                      Bc: 0,
                      nodes: d
                  };
                  this.qc.push(f);
                  x(function(g) {
                      ij(b.l, g, function(h) {
                          var k = b.ob(h);
                          Ra(k) || (d.push(h),
                          b.Ba[k] && b.Z(h),
                          b.Ba[k] = {
                              node: h,
                              event: f,
                              lj: e
                          },
                          e += 1)
                      })
                  }, c.nodes)
              }
              ;
              a.prototype.Z = function(c) {
                  if (c === this.l)
                      return 0;
                  var b = this.ob(c)
                    , d = this.Ba[b]
                    , e = this.Ch(b)
                    , f = e.jf
                    , g = e.Cd
                    , h = e.kf
                    , k = e.yh
                    , l = e.zh;
                  if (d) {
                      e = d.event;
                      d = d.lj;
                      var m = Bt(this.l) === c;
                      k = k || c.nextSibling;
                      var p = l || c.previousSibling;
                      l = !m && k ? this.ob(k) : null;
                      p = !m && p ? this.ob(p) : null;
                      m = this.l;
                      k = this.options;
                      f = this.ob(f || c.parentNode || c.parentElement) || 0;
                      var q = g
                        , r = void 0;
                      void 0 === p && (p = null);
                      void 0 === l && (l = null);
                      void 0 === q && (q = {});
                      void 0 === r && (r = Na(c));
                      if (T(r))
                          c = void 0;
                      else {
                          g = {
                              id: b,
                              prev: p !== f ? p : null,
                              next: l !== f ? l : null,
                              parent: f,
                              name: r.toLowerCase(),
                              node: c
                          };
                          if (Xf(c)) {
                              if (h = Qo(c, h),
                              g.attributes = {},
                              g.content = h)
                                  if (c = wd(m, c))
                                      g.content = "" !== cb(h) ? gp(m, h) : h,
                                      g.hidden = c
                          } else
                              h = Ro(m, c, k, q, r),
                              m = h.sb,
                              g.attributes = h.Ng,
                              m && (g.hidden = m),
                              c.namespaceURI && ab(c.namespaceURI, "svg") && (g.namespace = c.namespaceURI);
                          c = g
                      }
                      if (T(c))
                          return;
                      this.Ba[b] = null;
                      this.Jb.push(b);
                      e.result[d] = c;
                      e.Bc += 1;
                      e.nodes.length === e.Bc && e.Vc(e.result)
                  }
                  return b
              }
              ;
              a.prototype.flush = function() {
                  this.da(!0)
              }
              ;
              a.prototype.kd = function() {
                  if (this.Jb.length) {
                      var c = kc(this.Jb, this.Ri)
                        , b = Bg(this.l, 30);
                      c(b)
                  }
              }
              ;
              a.prototype.da = function(c) {
                  var b = this;
                  if (oh(this.l)) {
                      var d = ha(this.Ba);
                      d = N(function(e, f) {
                          b.Ba[f] && e.push(b.Ba[f].node);
                          return e
                      }, [], d);
                      d = kc(d, this.Z);
                      c = c ? jk(C) : hk(this.l, 20);
                      d(c);
                      this.qc = ka(function(e) {
                          return e.Bc !== e.result.length
                      }, this.qc)
                  }
              }
              ;
              a.prototype.Ch = function(c) {
                  if (Ra(c))
                      return {};
                  var b = this.Ua[c];
                  return b ? (this.Ua[c] = null,
                  this.Jb.push(c),
                  b) : {}
              }
              ;
              return a
          }(), fv = ["input", "change", "keyup", "paste", "cut"], gv = function(a) {
              function c(b, d, e) {
                  b = a.call(this, b, d, e) || this;
                  b.inputs = {};
                  b.wd = !1;
                  b.Ic = b.M.H(b.Ic, "ii");
                  b.Jc = b.M.H(b.Jc, "ir");
                  b.Qc = b.M.H(b.Qc, "ri");
                  b.$c = b.M.H(b.$c, "ur");
                  b.Nd = b.M.H(b.Nd, "ce");
                  b.zc = b.M.H(b.zc, "vc");
                  return b
              }
              Oa(c, a);
              c.prototype.start = function() {
                  var b = this
                    , d = this.G.wa();
                  this.wd = this.Ug();
                  x(function(e) {
                      e = e.toLowerCase();
                      d.F(e, "NA:", I(b.Ic, b));
                      d.F(e, "NR:", I(b.Jc, b))
                  }, Wf);
                  this.ub = [this.Ta.F(this.l.document, fv, I(this.Nd, this)), function() {
                      x(function(e) {
                          e = e.toLowerCase();
                          d.ia(e, "NA:", b.Ic);
                          d.ia(e, "NR:", b.Jc)
                      }, Wf);
                      x(b.$c, ha(b.inputs))
                  }
                  ]
              }
              ;
              c.prototype.$c = function(b) {
                  var d = this.inputs[b];
                  if (d) {
                      if (this.wd) {
                          var e = d.Li;
                          d = d.element;
                          e && this.l.Object.defineProperty(d, this.xc(d), e)
                      }
                      delete this.inputs[b]
                  }
              }
              ;
              c.prototype.Jc = function(b) {
                  b && this.$c(b.data.id)
              }
              ;
              c.prototype.Ic = function(b) {
                  b && (b = b.data,
                  this.Qc(b.node, b.id))
              }
              ;
              c.prototype.xc = function(b) {
                  return Ve(b) ? "checked" : "value"
              }
              ;
              c.prototype.Nd = function(b) {
                  if (b = b.target) {
                      var d = this.xc(b);
                      this.zc(b[d], b)
                  }
              }
              ;
              c.prototype.zc = function(b, d) {
                  var e = this.Z(d)
                    , f = this.inputs[e];
                  if (!f && (f = this.Qc(f, e),
                  !f))
                      return;
                  e = f.Wg;
                  var g = f.value
                    , h = this.xc(d)
                    , k = !b || H(typeof b, ["string", "boolean", "number"])
                    , l = this.G.Kb().Ud;
                  k && b !== g && (g = xe(this.l, d, h, b, this.G.Kb()).value,
                  e ? this.G.T("event", {
                      target: this.Z(d),
                      checked: !!b
                  }, "change") : (e = Sc(this.l, d, l),
                  l = e.kb,
                  this.G.T("event", {
                      value: g,
                      hidden: e.tb && !l,
                      target: this.Z(d)
                  }, "change")),
                  f.value = b)
              }
              ;
              c.prototype.Qc = function(b, d) {
                  var e = this;
                  if (!Pf(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d])
                      return null;
                  var f = Ve(b)
                    , g = this.xc(b)
                    , h = {
                      element: b,
                      Wg: f,
                      value: b[g]
                  };
                  this.inputs[d] = h;
                  this.wd && Tb(this.l, function() {
                      var k = e.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {}
                        , l = e.l.Object.getOwnPropertyDescriptor(b, g) || {}
                        , m = A({}, k, l);
                      if (La("((set)?(\\s?" + g + ")?)?", m.set)) {
                          try {
                              e.l.Object.defineProperty(b, g, A({}, m, {
                                  configurable: !0,
                                  set: function(p) {
                                      e.zc(p, this);
                                      return m.set.call(this, p)
                                  }
                              }))
                          } catch (p) {}
                          h.Li = m
                      }
                  });
                  return h
              }
              ;
              c.prototype.Ug = function() {
                  var b = !0
                    , d = qb(this.l)("input");
                  try {
                      d = qb(this.l)("input");
                      d.value = "INPUT_VALUE";
                      d.style.setProperty("display", "none", "important");
                      d.setAttribute("type", "text");
                      d.setAttribute("class", "__ym_input_override_test");
                      var e = this.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d), "value") || {}
                        , f = this.l.Object.getOwnPropertyDescriptor(d, "value") || {}
                        , g = A({}, e, f);
                      this.l.Object.defineProperty(d, "value", A({}, g, {
                          configurable: !0,
                          set: function(h) {
                              return g.set.call(d, h)
                          }
                      }));
                      "INPUT_VALUE" !== d.value && (b = !1);
                      d.value = "INPUT_TEST";
                      "INPUT_TEST" !== d.value && (b = !1)
                  } catch (h) {
                      b = !1
                  }
                  return b
              }
              ;
              return c
          }(eb), hv = function(a) {
              function c(b, d, e) {
                  b = a.call(this, b, d, e) || this;
                  b.ab = {
                      width: 0,
                      height: 0,
                      pageHeight: 0,
                      pageWidth: 0,
                      orientation: 0
                  };
                  b.ma.push([["resize"], b.Ji]);
                  b.ma.push([["orientationchange"], b.Hi]);
                  return b
              }
              Oa(c, a);
              c.prototype.start = function() {
                  a.prototype.start.call(this);
                  this.ag()
              }
              ;
              c.prototype.Ji = function() {
                  var b = this.Kd();
                  this.Yh(b) && (this.ab = b,
                  this.bg(b))
              }
              ;
              c.prototype.Hi = function() {
                  var b = this.Kd();
                  this.ab.orientation !== b.orientation && (this.ab = b,
                  this.Xi(b))
              }
              ;
              c.prototype.Ff = function(b) {
                  return !b.height || !b.width || !b.pageWidth || !b.pageHeight
              }
              ;
              c.prototype.Yh = function(b) {
                  return b.height !== this.ab.height || b.width !== this.ab.width
              }
              ;
              c.prototype.Kd = function() {
                  var b = this.G.mb()
                    , d = Qc(this.l)
                    , e = d[0];
                  d = d[1];
                  b = b.Jd();
                  return {
                      width: e,
                      height: d,
                      pageWidth: b ? b.scrollWidth : 0,
                      pageHeight: b ? b.scrollHeight : 0,
                      orientation: this.G.mb().Lh()
                  }
              }
              ;
              c.prototype.Xi = function(b) {
                  var d;
                  void 0 === d && (d = this.G.stamp());
                  this.G.T("event", {
                      width: b.width,
                      height: b.height,
                      orientation: b.orientation
                  }, "deviceRotation", d)
              }
              ;
              c.prototype.bg = function(b, d) {
                  void 0 === d && (d = this.G.stamp());
                  this.G.T("event", {
                      width: b.width,
                      height: b.height,
                      pageWidth: b.pageWidth,
                      pageHeight: b.pageHeight
                  }, "resize", d)
              }
              ;
              c.prototype.ag = function() {
                  var b = this.Kd();
                  this.Ff(b) ? W(this.l, I(this.ag, this), 300) : (this.Ff(this.ab) && (this.ab = b),
                  this.bg(b, 0))
              }
              ;
              return c
          }(eb), lf = function() {
              function a(c) {
                  this.index = 0;
                  this.zb = {};
                  this.l = c
              }
              a.prototype.jc = function(c, b, d) {
                  void 0 === d && (d = {});
                  var e = ja(this.l)
                    , f = this.index;
                  this.index += 1;
                  this.zb[f] = {
                      Ra: 0,
                      Tb: !1,
                      fn: c,
                      fd: [],
                      Zd: e(ca)
                  };
                  var g = this;
                  return function() {
                      var h = Pa(arguments)
                        , k = d.gf && !g.zb[f].Tb
                        , l = g.zb[f];
                      ma(g.l, l.Ra);
                      l.fd = h;
                      l.Tb = !0;
                      var m = e(ca);
                      if (k || m - l.Zd >= b)
                          c.apply(void 0, h),
                          l.Zd = m;
                      l.Ra = W(g.l, function() {
                          k || (c.apply(void 0, h),
                          l.Zd = e(ca));
                          l.Tb = !1;
                          l.fd = []
                      }, b, "th")
                  }
              }
              ;
              a.prototype.flush = function() {
                  var c = this;
                  x(function(b) {
                      var d = c.zb[b]
                        , e = d.Ra
                        , f = d.fn
                        , g = d.fd;
                      d.Tb && (c.zb[b].Tb = !1,
                      f.apply(void 0, g),
                      ma(c.l, e))
                  }, ha(this.zb))
              }
              ;
              return a
          }(), iv = function(a) {
              function c(b, d, e) {
                  d = a.call(this, b, d, e) || this;
                  d.pg = [];
                  d.Re = {
                      x: 0,
                      y: 0
                  };
                  d.Ea = new lf(b);
                  d.Mc = d.M.H(d.Mc, "o");
                  d.ma.push([["scroll"], d.Ki]);
                  return d
              }
              Oa(c, a);
              c.prototype.start = function() {
                  a.prototype.start.call(this);
                  this.G.T("event", {
                      x: Math.max(this.l.scrollX, 0),
                      y: Math.max(this.l.scrollY, 0),
                      page: !0,
                      target: -1
                  }, "scroll", 0)
              }
              ;
              c.prototype.stop = function() {
                  a.prototype.stop.call(this);
                  this.Ea.flush()
              }
              ;
              c.prototype.Ki = function(b) {
                  if (this.G.mb().Af())
                      this.Mc(b);
                  else {
                      var d = b.target
                        , e = ka(function(f) {
                          return f[0] === d
                      }, this.pg).pop();
                      e ? e = e[1] : (e = this.Ea.jc(I(this.Mc, this), 100, {
                          gf: !0
                      }),
                      this.pg.push([d, e]));
                      e(b)
                  }
              }
              ;
              c.prototype.Mc = function(b) {
                  var d = this.G.mb().Jd();
                  b = b.target;
                  var e = this.Lb(b);
                  d = d === b || this.l === b || this.l.document === b;
                  var f = Math.max(e.left, 0);
                  e = Math.max(e.top, 0);
                  if (d) {
                      if (this.Re.x === f && this.Re.y === e)
                          return;
                      this.Re = {
                          x: f,
                          y: e
                      }
                  }
                  this.G.T("event", {
                      x: f,
                      y: e,
                      page: d,
                      target: d ? -1 : this.Z(b)
                  }, "scroll")
              }
              ;
              c.prototype.Lb = function(b) {
                  var d = {
                      left: 0,
                      top: 0
                  };
                  if (!b)
                      return d;
                  if (b.window === b)
                      return {
                          top: b.scrollY || 0,
                          left: b.scrollX || 0
                      };
                  var e = b.ownerDocument || b
                    , f = b.documentElement
                    , g = e.defaultView || e.parentWindow
                    , h = e.body;
                  return b !== e || (b = this.G.mb().Jd(),
                  b) ? H(b, [f, h]) ? {
                      top: b.scrollTop || g.scrollY,
                      left: b.scrollLeft || g.scrollX
                  } : {
                      top: b.scrollTop || 0,
                      left: b.scrollLeft || 0
                  } : d
              }
              ;
              return c
          }(eb), jv = ["mousemove", "mousedown", "mouseup", "click"], kv = function(a) {
              function c(b, d, e) {
                  d = a.call(this, b, d, e) || this;
                  d.ma.push([jv, d.Gi]);
                  d.Ea = new lf(b);
                  d.Hc = d.M.H(d.Hc, "n");
                  d.fj = d.M.H(d.Ea.jc(I(d.Hc, d), 100), "t");
                  return d
              }
              Oa(c, a);
              c.prototype.stop = function() {
                  a.prototype.stop.call(this);
                  this.Ea.flush()
              }
              ;
              c.prototype.Gi = function(b) {
                  var d = null;
                  try {
                      d = b.type
                  } catch (e) {
                      return
                  }
                  "mousemove" === d ? this.fj(b) : this.Hc(b)
              }
              ;
              c.prototype.Hc = function(b) {
                  var d = b.type
                    , e = b.clientX;
                  e = void 0 === e ? null : e;
                  var f = b.clientY;
                  f = void 0 === f ? null : f;
                  b = b.target || this.l.document.elementFromPoint(e, f);
                  this.G.T("event", {
                      x: e || 0,
                      y: f || 0,
                      target: this.Z(b)
                  }, d)
              }
              ;
              return c
          }(eb), lv = ["focus", "blur"], mv = function(a) {
              function c(b, d, e) {
                  b = a.call(this, b, d, e) || this;
                  b.ma.push([lv, b.xh]);
                  return b
              }
              Oa(c, a);
              c.prototype.xh = function(b) {
                  var d = b.target;
                  b = b.type;
                  this.G.T("event", {
                      target: this.Z(d === this.l ? this.l.document.documentElement : d)
                  }, b)
              }
              ;
              return c
          }(eb), nv = v(function(a) {
              var c = pa(a.getSelection, "getSelection");
              return c ? I(c, a) : C
          }), ov = w(nv, va), pv = ["mousemove", "touchmove", "mousedown", "touchdown", "select"], qv = /text|search|password|tel|url/, rv = function(a) {
              function c(b, d, e) {
                  b = a.call(this, b, d, e) || this;
                  b.Qd = !1;
                  b.ma.push([pv, b.Wh]);
                  return b
              }
              Oa(c, a);
              c.prototype.Wh = function(b) {
                  var d = this.G
                    , e = b.type
                    , f = b.which;
                  b = b.target;
                  if ("mousemove" !== e || 1 === f)
                      (e = "select" === e ? this.Ph(b) : this.Nh()) && e.start !== e.end ? (this.Qd = !0,
                      d.T("event", e, "selection")) : this.Qd && (this.Qd = !1,
                      d.T("event", {
                          start: 0,
                          end: 0
                      }, "selection"))
              }
              ;
              c.prototype.Nh = function() {
                  var b = ov(this.l);
                  if (b && 0 < b.rangeCount) {
                      b = b.getRangeAt(0) || this.l.document.createRange();
                      var d = this.Z(b.startContainer)
                        , e = this.Z(b.endContainer);
                      if (!T(d) && !T(e))
                          return {
                              start: b.startOffset,
                              end: b.endOffset,
                              startNode: d,
                              endNode: e
                          }
                  }
              }
              ;
              c.prototype.Ph = function(b) {
                  if (qv.test(b.type || "")) {
                      var d = this.Z(b);
                      if (!T(d))
                          return {
                              start: b.selectionStart,
                              end: b.selectionEnd,
                              target: d
                          }
                  }
              }
              ;
              return c
          }(eb), $l = {
              focus: "windowfocus",
              blur: "windowblur",
              Yj: "windowfocus",
              Xj: "windowblur"
          }, sv = function(a) {
              function c(b, d, e) {
                  b = a.call(this, b, d, e) || this;
                  b.visibility = null;
                  T(b.l.document.hidden) ? T(b.l.document.msHidden) ? T(b.l.document.webkitHidden) || (b.visibility = {
                      hidden: "webkitHidden",
                      event: "webkitvisibilitychange"
                  }) : b.visibility = {
                      hidden: "msHidden",
                      event: "msvisibilitychange"
                  } : b.visibility = {
                      hidden: "hidden",
                      event: "visibilitychange"
                  };
                  b.Md = b.M.H(b.Md, "fbe");
                  b.Od = b.M.H(b.Od, "she");
                  return b
              }
              Oa(c, a);
              c.prototype.start = function() {
                  this.ub = [this.Ta.F(this.l, this.visibility ? [this.visibility.event] : ["focus", "blur"], I(this.Md, this))];
                  "onpagehide"in this.l && this.ub.push(this.Ta.F(this.l, ["pageshow", "pagehide"], I(this.Od, this), null))
              }
              ;
              c.prototype.Od = function(b) {
                  this.G.T("event", {}, $l[b.type])
              }
              ;
              c.prototype.Md = function(b) {
                  this.G.T("event", {}, $l[this.visibility ? this.l.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
              }
              ;
              return c
          }(eb), tv = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], uv = function(a) {
              function c(b, d, e) {
                  d = a.call(this, b, d, e) || this;
                  d.Zc = {};
                  d.scrolling = !1;
                  d.Zf = 0;
                  d.ma.push([["scroll"], d.Wi, d.l.document]);
                  d.ma.push([tv, d.hj, d.l.document]);
                  d.Ea = new lf(b);
                  d.Ob = d.M.H(d.Ob, "nh");
                  d.gj = d.M.H(d.Ea.jc(d.Ob, d.G.mb().Af() ? 0 : 50, {
                      gf: !0
                  }), "th");
                  return d
              }
              Oa(c, a);
              c.prototype.Wi = function() {
                  var b = this;
                  this.scrolling = !0;
                  ma(this.l, this.Zf);
                  this.Zf = W(this.l, function() {
                      b.scrolling = !1
                  }, 150)
              }
              ;
              c.prototype.hj = function(b) {
                  var d = this
                    , e = "touchcancel" === b.type || "touchend" === b.type;
                  b.changedTouches && 0 < b.changedTouches.length && x(function(f) {
                      var g = d.Rh(f);
                      f.__ym_touch_id = g;
                      e && delete d.Zc[f.identifier]
                  }, Ha(b.changedTouches));
                  "touchmove" === b.type ? this.scrolling ? this.Ob(b) : this.gj(b, this.G.stamp()) : this.Ob(b)
              }
              ;
              c.prototype.Rh = function(b) {
                  this.Zc[b.identifier] || (this.Zc[b.identifier] = vi());
                  return this.Zc[b.identifier]
              }
              ;
              c.prototype.Ob = function(b, d) {
                  void 0 === d && (d = this.G.stamp());
                  var e = b.type
                    , f = z(function(g) {
                      return {
                          id: g.__ym_touch_id,
                          x: Math.round(g.clientX),
                          y: Math.round(g.clientY),
                          force: g.force
                      }
                  }, Ha(b.changedTouches));
                  0 < f.length && this.G.T("event", {
                      touches: f,
                      target: this.Z(b.target)
                  }, e, d)
              }
              ;
              return c
          }(eb), vv = function(a) {
              function c(b, d, e) {
                  b = a.call(this, b, d, e) || this;
                  b.ma.push([["load"], b.Fi, b.l.document]);
                  return b
              }
              Oa(c, a);
              c.prototype.Fi = function(b) {
                  b = b.target;
                  "IMG" === Na(b) && b.getAttribute("srcset") && this.G.T("mutation", {
                      target: this.Z(b),
                      attributes: {
                          src: b.currentSrc
                      }
                  }, "ac")
              }
              ;
              return c
          }(eb), wv = function(a) {
              function c(b, d, e) {
                  d = a.call(this, b, d, e) || this;
                  d.Ag = 1;
                  d.Ea = new lf(b);
                  d.cc = d.M.H(d.cc, "z");
                  return d
              }
              Oa(c, a);
              c.prototype.start = function() {
                  if (this.wf()) {
                      a.prototype.start.call(this);
                      this.cc();
                      var b = this.Ta.F(n(this.l, "visualViewport"), ["resize"], this.Ea.jc(this.cc, 10));
                      this.ub.push(b)
                  }
              }
              ;
              c.prototype.stop = function() {
                  a.prototype.stop.call(this);
                  this.Ea.flush()
              }
              ;
              c.prototype.cc = function() {
                  var b = this.wf();
                  b && b !== this.Ag && (this.Ag = b,
                  this.Yi(b))
              }
              ;
              c.prototype.wf = function() {
                  var b = je(this.l);
                  return b ? b[2] : null
              }
              ;
              c.prototype.Yi = function(b) {
                  var d = eg(this.l);
                  this.G.T("event", {
                      x: d.x,
                      y: d.y,
                      level: b
                  }, "zoom")
              }
              ;
              return c
          }(eb), ae, mf = {
              91: "super",
              93: "super",
              224: "super",
              18: "alt",
              17: "ctrl",
              16: "shift",
              9: "tab",
              8: "backspace",
              46: "delete"
          }, am = {
              "super": 1,
              Ij: 2,
              alt: 3,
              shift: 4,
              ek: 5,
              "delete": 6,
              Fj: 6
          }, xv = [4, 9, 8, 32, 37, 38, 39, 40, 46], bm = (ae = {},
          ae["1"] = {
              91: "&#8984;",
              93: "&#8984;",
              224: "&#8984;",
              18: "&#8997;",
              17: "&#8963;",
              16: "&#8679;",
              9: "&#8677;",
              8: "&#9003;",
              46: "&#9003;"
          },
          ae["2"] = {
              91: "&#xff;",
              93: "&#xff;",
              224: "&#xff;",
              18: "Alt",
              17: "Ctrl",
              16: "Shift",
              9: "Tab",
              8: "Backspace",
              46: "Delete"
          },
          ae.xi = {
              32: "SPACEBAR",
              37: "&larr;",
              38: "&uarr;",
              39: "&rarr;",
              40: "&darr;",
              13: "Enter"
          },
          ae), yv = /flash/, zv = /ym-disable-keys/, Av = /^&#/, Bv = function(a) {
              function c(b, d, e) {
                  d = a.call(this, b, d, e) || this;
                  d.qb = {};
                  d.Pa = 0;
                  d.Ga = [];
                  d.ng = [];
                  d.nc = 0;
                  d.Sf = 0;
                  d.ma.push([["keydown"], d.Th]);
                  d.ma.push([["keyup"], d.Uh]);
                  d.Jg = -1 !== pc(n(b, "navigator.appVersion") || "", "Mac") ? "1" : "2";
                  d.Fc = d.M.H(d.Fc, "v");
                  d.yd = d.M.H(d.yd, "ec");
                  d.Uc = d.M.H(d.Uc, "sk");
                  d.Hd = d.M.H(d.Hd, "gk");
                  d.Ce = d.M.H(d.Ce, "sc");
                  d.bc = d.M.H(d.bc, "cc");
                  d.reset = d.M.H(d.reset, "r");
                  d.Rc = d.M.H(d.Rc, "rs");
                  return d
              }
              Oa(c, a);
              c.prototype.Th = function(b) {
                  if (this.Fc(b) && !this.mi(b)) {
                      var d = b.keyCode;
                      b.repeat || this.qb[d] || (this.qb[b.keyCode] = !0,
                      mf[b.keyCode] && !this.Pa ? (this.Pa += 1,
                      this.Ce(b),
                      this.reset(300)) : this.Pa ? (this.Rg(),
                      this.ve(b),
                      this.yd()) : (this.reset(),
                      this.ve(b)))
                  }
              }
              ;
              c.prototype.Uh = function(b) {
                  if (this.Fc(b)) {
                      var d = b.keyCode
                        , e = mf[b.keyCode];
                      this.qb[b.keyCode] && (this.qb[d] = !1);
                      e && this.Pa && (this.Pa = 0,
                      this.qb = {});
                      1 === this.Ga.length && (b = this.Ga[0],
                      H(b.keyCode, xv) && (this.Uc([b], !0),
                      this.reset()));
                      this.Ga = ka(w(V("keyCode"), Fa(d), Kc), this.Ga);
                      ma(this.l, this.nc)
                  }
              }
              ;
              c.prototype.Fc = function(b) {
                  var d = this.l.document.activeElement;
                  d = d && "OBJECT" === d.nodeName && yv.test(d.getAttribute("type") || "");
                  b = b.target;
                  if (!b)
                      return !d;
                  b = "INPUT" === b.nodeName && "password" === b.getAttribute("type") && zv.test(b.className);
                  return !d && !b
              }
              ;
              c.prototype.yd = function() {
                  this.ng = this.Ga.slice(0);
                  ma(this.l, this.nc);
                  this.nc = W(this.l, u(this.ng, I(this.Uc, this)), 0, "e.c")
              }
              ;
              c.prototype.Uc = function(b, d) {
                  void 0 === d && (d = !1);
                  if (1 < b.length || d) {
                      var e = this.Hd(b);
                      this.G.T("event", {
                          keystrokes: e
                      }, "keystroke")
                  }
              }
              ;
              c.prototype.Hd = function(b) {
                  var d = this;
                  b = z(function(e) {
                      e = e.keyCode;
                      var f = mf[e]
                        , g = d.Kh(e);
                      return {
                          id: e,
                          key: g,
                          isMeta: !!f && Av.test(g),
                          modifier: f
                      }
                  }, b);
                  return id(function(e, f) {
                      return (am[e.modifier] || 100) - (am[f.modifier] || 100)
                  }, b)
              }
              ;
              c.prototype.Kh = function(b) {
                  return bm[this.Jg][b] || bm.xi[b] || String.fromCharCode(b)
              }
              ;
              c.prototype.ve = function(b) {
                  H(b, this.Ga) || this.Ga.push(b)
              }
              ;
              c.prototype.Ce = function(b) {
                  this.ve(b);
                  this.bc()
              }
              ;
              c.prototype.bc = function() {
                  this.Pa ? W(this.l, this.bc, 100) : this.Ga = []
              }
              ;
              c.prototype.Rg = function() {
                  ma(this.l, this.Sf)
              }
              ;
              c.prototype.reset = function(b) {
                  b ? this.Sf = W(this.l, I(this.Rc, this), b) : this.Rc()
              }
              ;
              c.prototype.Rc = function() {
                  this.Pa = 0;
                  this.Ga = [];
                  this.qb = {};
                  ma(this.l, this.nc)
              }
              ;
              c.prototype.mi = function(b) {
                  return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === mf[b.keyCode] : !1
              }
              ;
              return c
          }(eb), Po = ["sr", "sd", "\u043d"], Cv = /allow-same-origin/, Dv = function(a) {
              function c(b, d, e) {
                  d = a.call(this, b, d, e) || this;
                  d.Wb = [];
                  d.Dd = {};
                  d.je = d.M.H(d.je, "fi");
                  d.ke = d.M.H(d.ke, "sd");
                  d.le = d.M.H(d.le, "src");
                  d.ra = new b.MutationObserver(d.le);
                  return d
              }
              Oa(c, a);
              c.prototype.start = function() {
                  a.prototype.start.call(this);
                  this.G.Kb().dc && this.G.wa().F("iframe", "NA:", I(this.je, this));
                  this.G.rf().Fd().F(["sdr"], I(this.ke, this))
              }
              ;
              c.prototype.stop = function() {
                  a.prototype.stop.call(this);
                  x(function(b) {
                      b.G.stop()
                  }, this.Wb)
              }
              ;
              c.prototype.le = function(b) {
                  var d = b.pop().target;
                  if (b = jb(function(f) {
                      return f.zf === d
                  }, this.Wb)) {
                      this.Wb = ka(function(f) {
                          return f.zf !== d
                      }, this.Wb);
                      var e = b.G.Gd();
                      try {
                          b.G.stop()
                      } catch (f) {}
                      this.ic(d, e)
                  }
              }
              ;
              c.prototype.je = function(b) {
                  if (b) {
                      var d = b.data.node;
                      this.ra.observe(d, {
                          attributes: !0,
                          attributeFilter: ["src"]
                      });
                      this.ic(d, b.data.id)
                  }
              }
              ;
              c.prototype.ic = function(b, d) {
                  var e = this;
                  this.ki(b) && Ac(this.l, b)(bb(C, function() {
                      var f = e.G.ic(b.contentWindow, d);
                      e.Wb.push({
                          G: f,
                          zf: b
                      })
                  }))
              }
              ;
              c.prototype.ke = function(b) {
                  var d = this
                    , e = b.frameId;
                  b = b.data;
                  this.Dd[e] || (this.Dd[e] = {
                      data: []
                  });
                  var f = this.Dd[e];
                  f.data = f.data.concat(b);
                  this.l.isNaN(f.vd) && x(function(g) {
                      "page" === g.type && (f.vd = g.data.recordStamp - d.G.sf())
                  }, f.data);
                  this.l.isNaN(f.vd) || (this.G.da(z(function(g) {
                      g.stamp += f.vd;
                      g.stamp = d.l.Math.max(0, g.stamp);
                      return g
                  }, f.data)),
                  f.data = [])
              }
              ;
              c.prototype.ki = function(b) {
                  var d = b.getAttribute("src")
                    , e = b.getAttribute("sandbox");
                  return b.getAttribute("_ym_ignore") || e && !e.match(Cv) || d && "about:blank" !== d && (d = Ub(this.l, d).host) && X(this.l).host !== d ? !1 : n(b, "contentWindow.location.href")
              }
              ;
              return c
          }(eb), Ev = v(function(a) {
              var c = n(a, "sessionStorage");
              if (!c)
                  return null;
              try {
                  var b = c.getItem("__ym_tab_guid");
                  c = !1;
                  var d = n(a, "opener.sessionStorage");
                  try {
                      c = !!d && b === d.getItem("__ym_tab_guid")
                  } catch (e) {
                      c = !0
                  }
                  if (!b || c)
                      b = vi(),
                      a.sessionStorage.setItem("__ym_tab_guid", b);
                  return b
              } catch (e) {
                  return null
              }
          }), Fv = function(a) {
              function c(b, d, e) {
                  b = a.call(this, b, d, e) || this;
                  b.xe = b.M.H(b.xe, "ps");
                  return b
              }
              Oa(c, a);
              c.prototype.start = function() {
                  this.G.wa().Ac({
                      nodes: [this.l.document.documentElement],
                      Vc: this.xe
                  })
              }
              ;
              c.prototype.xe = function(b) {
                  var d = this.G.Mh()
                    , e = d.Dh()
                    , f = X(this.l)
                    , g = f.host
                    , h = f.protocol;
                  f = f.pathname;
                  var k = Qc(this.l)
                    , l = k[0];
                  k = k[1];
                  this.G.T("page", {
                      content: z(function(m) {
                          m.node = void 0;
                          return m
                      }, b),
                      base: e || "",
                      hasBase: !!e,
                      viewport: {
                          width: l,
                          height: k
                      },
                      title: this.l.document.title,
                      doctype: d.Fh() || "",
                      address: this.l.location.href,
                      ua: this.l.navigator.userAgent,
                      referrer: this.l.document.referrer,
                      screen: {
                          width: this.l.screen.width,
                          height: this.l.screen.height
                      },
                      location: {
                          host: g,
                          protocol: h,
                          path: f
                      },
                      recordStamp: this.G.sf(),
                      tabId: Ev(this.l)
                  }, "page", 0)
              }
              ;
              return c
          }(eb), Gv = ["addRule", "removeRule", "insertRule", "deleteRule"], ph = [[function(a) {
              function c(b, d, e) {
                  b = a.call(this, b, d, e) || this;
                  b.eb = {};
                  b.Xb = {};
                  b.We = 0;
                  b.Kc = b.M.H(b.Kc, "a");
                  b.yb = b.M.H(b.yb, "sr");
                  b.Lc = b.M.H(b.Lc, "r");
                  b.da = b.M.H(b.da, "d");
                  return b
              }
              Oa(c, a);
              c.prototype.start = function() {
                  var b = this.G.wa();
                  b.F("style", "NA:", this.Kc);
                  b.F("style", "NR:", this.Lc);
                  this.da()
              }
              ;
              c.prototype.stop = function() {
                  var b = this;
                  a.prototype.stop.call(this);
                  var d = this.G.wa();
                  d.ia("style", "NA:", this.Kc);
                  d.ia("style", "NR:", this.Lc);
                  this.da();
                  ma(this.l, this.We);
                  x(function(e) {
                      b.eb[e].sheet && b.Vf(b.eb[e].sheet)
                  }, ha(this.eb));
                  this.eb = {}
              }
              ;
              c.prototype.da = function() {
                  var b = this;
                  x(function(d) {
                      var e = d[0];
                      d = d[1];
                      if (d.length) {
                          for (var f = [], g = d[0].stamp, h = [], k = 0; k < d.length; k += 1) {
                              var l = d[k]
                                , m = l.stamp;
                              delete l.stamp;
                              m <= g + 50 ? f.push(l) : (h.push(f),
                              g = m,
                              f = [l])
                          }
                          f.length && h.push(f);
                          h.length && x(function(p) {
                              b.G.T("event", {
                                  target: Da(e),
                                  changes: p
                              }, "stylechange", g)
                          }, h);
                          delete b.Xb[e]
                      }
                  }, za(this.Xb));
                  this.We = W(this.l, this.da, 100)
              }
              ;
              c.prototype.yb = function(b, d, e, f, g) {
                  void 0 === f && (f = "");
                  void 0 === g && (g = -1);
                  this.Xb[b] || (this.Xb[b] = []);
                  this.Xb[b].push({
                      op: d,
                      style: f,
                      index: g,
                      stamp: e
                  })
              }
              ;
              c.prototype.Mi = function(b, d) {
                  var e = this
                    , f = b.addRule
                    , g = b.removeRule
                    , h = b.insertRule
                    , k = b.deleteRule;
                  O(f) && (b.addRule = function(l, m, p) {
                      e.yb(d, "a", e.G.stamp(), l + "{" + m + "}", p);
                      return f.call(b, l, m, p)
                  }
                  );
                  O(g) && (b.removeRule = function(l) {
                      e.yb(d, "r", e.G.stamp(), "", l);
                      return g.call(b, l)
                  }
                  );
                  O(h) && (b.insertRule = function(l, m) {
                      e.yb(d, "a", e.G.stamp(), l, m);
                      return h.call(b, l, m)
                  }
                  );
                  O(k) && (b.deleteRule = function(l) {
                      e.yb(d, "r", e.G.stamp(), "", l);
                      return k.call(b, l)
                  }
                  )
              }
              ;
              c.prototype.Vf = function(b) {
                  var d = this;
                  x(function(e) {
                      var f = d.l.CSSStyleSheet.prototype[e];
                      O(f) && (b[e] = I(f, b))
                  }, Gv)
              }
              ;
              c.prototype.ph = function(b) {
                  try {
                      return b.cssRules || b.rules
                  } catch (d) {
                      return null
                  }
              }
              ;
              c.prototype.Kc = function(b) {
                  var d = b.data;
                  b = d.id;
                  d = d.node;
                  if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                      var e = d.sheet
                        , f = this.ph(e);
                      if (f && f.length) {
                          for (var g = [], h = 0; h < f.length; h += 1)
                              g.push({
                                  style: f[h].cssText,
                                  index: h,
                                  op: "a"
                              });
                          this.G.T("event", {
                              changes: g,
                              target: b
                          }, "stylechange")
                      }
                      this.Mi(e, b);
                      this.eb[b] = d
                  }
              }
              ;
              c.prototype.Lc = function(b) {
                  b = b.data.id;
                  var d = this.eb[b];
                  d && (delete this.eb[b],
                  d.sheet && this.Vf(d.sheet))
              }
              ;
              return c
          }(eb), "ss"], [gv, "in"], [dv, "mu"], [hv, "r"], [iv, "sc"], [kv, "mo"], [mv, "f"], [rv, "se"], [sv, "wf"], [uv, "t"], [vv, "src"], [wv, "z"], [Bv, "ks"]];
          ph.push([Dv, "if"]);
          ph.push([Fv, "pa"]);
          var Hv = v(function(a) {
              var c = a.document;
              return {
                  Jd: function() {
                      if (c.scrollingElement)
                          return c.scrollingElement;
                      var b = 0 === pb(c.compatMode, "CSS1") ? c.documentElement : c.body;
                      return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                  },
                  Lh: function() {
                      var b = a.screen;
                      if (!b)
                          return 0;
                      var d = jb(u(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                      return n(b, d + ".angle") || 0
                  },
                  Tj: u(a, sb),
                  Af: u(a, Ae),
                  Sj: u(a, Wg)
              }
          }), Iv = function() {
              function a(c, b) {
                  var d = this;
                  this.Nb = 0;
                  this.ud = [];
                  this.Mb = null;
                  this.ya = this.Yb = this.kg = !1;
                  this.recordStamp = 0;
                  this.stopped = !1;
                  this.Mh = function() {
                      return d.page
                  }
                  ;
                  this.Gd = function() {
                      return d.Nb
                  }
                  ;
                  this.sf = function() {
                      return d.recordStamp
                  }
                  ;
                  this.Jh = function() {
                      return d.Ta
                  }
                  ;
                  this.rf = function() {
                      return d.Mb
                  }
                  ;
                  this.wa = function() {
                      return d.Rd
                  }
                  ;
                  this.stamp = function() {
                      return d.Ge ? d.l.Math.max(d.Ge(ca) - d.recordStamp, 0) : 0
                  }
                  ;
                  this.Kb = function() {
                      return d.options
                  }
                  ;
                  this.mb = function() {
                      return d.Og
                  }
                  ;
                  this.T = function(f, g, h, k) {
                      void 0 === k && (k = d.stamp());
                      f = d.Ih(f, g, h, k);
                      d.da(f)
                  }
                  ;
                  this.Ih = function(f, g, h, k) {
                      void 0 === k && (k = d.stamp());
                      return {
                          type: f,
                          data: g,
                          stamp: k,
                          frameId: d.Nb,
                          event: h
                      }
                  }
                  ;
                  this.da = function(f) {
                      f = M(f) ? f : [f];
                      d.kg && !d.Yb ? d.ya ? (f = z(function(g) {
                          return g.frameId ? g : A(g, {
                              frameId: d.Nb
                          })
                      }, f),
                      d.rf().cg(f)) : d.Ub(f) : d.ud = d.ud.concat(f)
                  }
                  ;
                  this.l = c;
                  var e = Rf(c, this, "R");
                  this.De = e.H(this.De, "s");
                  this.da = e.H(this.da, "sd");
                  e = J(c);
                  e.C("wv2e") && be();
                  e.D("wv2e", !0);
                  this.options = b;
                  this.Ta = la(c);
                  this.Rd = new ev(this.l,b);
                  this.Og = Hv(c);
                  this.Ye = z(function(f) {
                      return new f[0](c,d,f[1])
                  }, ph);
                  this.hi();
                  this.page = No(this.l);
                  this.De()
              }
              a.prototype.start = function(c) {
                  this.kg = !0;
                  this.Ub = c;
                  this.$f()
              }
              ;
              a.prototype.stop = function() {
                  this.stopped || (this.stopped = !0,
                  oh(this.l) && (x(function(c) {
                      return c.stop()
                  }, this.Ye),
                  this.Rd.stop(),
                  this.Mb && this.Mb.stop(),
                  this.ya || this.T("event", {}, "eof")))
              }
              ;
              a.prototype.ic = function(c, b) {
                  var d = new a(c,A({}, this.options, {
                      frameId: b
                  }));
                  d.start(C);
                  return d
              }
              ;
              a.prototype.hi = function() {
                  var c = this;
                  this.ya = !!this.options.frameId;
                  this.Nb = this.options.frameId || 0;
                  this.Yb = !this.ya;
                  var b = this.options.vg || [];
                  b.push(X(this.l).host);
                  this.Mb = Oo(this.l, this, b);
                  b = this.Mb.Fd();
                  sb(this.l) ? this.Yb && b.F(["i"], function(d) {
                      c.ya = d.ya;
                      c.Yb = !1;
                      d.frameId && (c.Nb = d.frameId);
                      c.$f()
                  }) : this.Yb = this.ya = !1
              }
              ;
              a.prototype.$f = function() {
                  var c = $e(this.ud);
                  this.da(c)
              }
              ;
              a.prototype.De = function() {
                  this.Ge = mg(this.l);
                  this.recordStamp = this.Ge(ca);
                  x(function(c) {
                      c.start()
                  }, this.Ye);
                  this.Rd.start()
              }
              ;
              return a
          }(), Jv = function() {
              return function(a, c, b) {
                  var d = this;
                  this.hd = this.Pb = !1;
                  this.$a = [];
                  this.If = [];
                  this.bf = [];
                  this.send = function(e, f, g) {
                      e = d.sender(e, d.bh);
                      f && g && e.then(f, g);
                      return e
                  }
                  ;
                  this.Fe = function(e, f, g) {
                      return new K(function(h, k) {
                          e.push([f, h, k, g])
                      }
                      )
                  }
                  ;
                  this.Xh = function() {
                      d.$a = id(function(g, h) {
                          return g[3].partNum - h[3].partNum
                      }, d.$a);
                      var e = N(function(g, h, k) {
                          h = h[3];
                          return g && k + 1 === h.partNum
                      }, !0, d.$a)
                        , f = !!d.$a[d.$a.length - 1][3].end;
                      return e && f
                  }
                  ;
                  this.Bd = function(e) {
                      xh(d.l, e.slice(), function(f) {
                          d.send(f[0], f[1], f[2])
                      }, 20, "s.w2.sf.fes");
                      $e(e)
                  }
                  ;
                  this.vh = function() {
                      d.hd || (d.hd = !0,
                      d.Bd(d.If),
                      d.Bd(d.bf))
                  }
                  ;
                  this.Vg = function(e) {
                      return N(function(f, g) {
                          var h = "page" === g.type && !g.frameId
                            , k = "eof" === g.data.type || "eof" === g.event
                            , l = h && !!g.partNum;
                          return {
                              nd: f.nd || l,
                              md: f.md || h,
                              ld: f.ld || k
                          }
                      }, {
                          md: !1,
                          ld: !1,
                          nd: !1
                      }, e)
                  }
                  ;
                  this.Vh = function(e, f, g) {
                      g ? (e = d.Fe(d.$a, e, f[0]),
                      d.Xh() && (d.Bd(d.$a),
                      d.Pb = !0)) : (d.Pb = !0,
                      e = d.send(e));
                      return e
                  }
                  ;
                  this.tf = function(e, f, g) {
                      var h;
                      f = {
                          J: (h = {},
                          h["wv-part"] = "" + g,
                          h["wv-type"] = d.Zi,
                          h),
                          K: Ia(),
                          V: {
                              ca: f
                          }
                      };
                      e && f.K.D("bt", 1);
                      return f
                  }
                  ;
                  this.nh = function(e, f, g) {
                      e = d.tf(!1, e, g);
                      return d.Pb ? d.send(e) : d.Fe(d.bf, e, f)
                  }
                  ;
                  this.yi = function(e, f, g) {
                      e = d.tf(!0, e, g);
                      if (d.Pb)
                          return d.send(e);
                      var h = d.Vg(f);
                      g = h.md;
                      var k = h.ld;
                      h = h.nd;
                      var l;
                      g && (l = d.Vh(e, f, h));
                      d.hd ? g || (l = d.send(e)) : (g || (l = d.Fe(d.If, e, f)),
                      (d.Pb || k) && d.vh());
                      return l
                  }
                  ;
                  this.l = a;
                  this.Zi = b;
                  this.sender = qa(a, "W", c);
                  this.bh = c
              }
          }(), cm = v(function(a) {
              var c = J(a)
                , b = c.C("isEU");
              if (T(b)) {
                  var d = Da(Ad(a, "is_gdpr") || "");
                  if (H(d, [0, 1]))
                      c.D("isEU", d),
                      b = !!d;
                  else if (a = Wa(a).C("wasSynced"),
                  a = n(a, "params.eu"))
                      c.D("isEU", a),
                      b = !!a
              }
              return b
          }, function(a) {
              return J(a).C("isEU")
          }), Mf = B("i.e", cm), Kv = B("i.ep", function(a) {
              cm(a)
          }), Lv = B("w2", function(a, c) {
              function b() {
                  h = !0
              }
              var d = J(a)
                , e = L(c);
              if (!c.Cb || re(a) || !a.MutationObserver || !La("Element", a.Element))
                  return C;
              La("MutationObserver", a.MutationObserver) || sc(a, e).warn("w2mo");
              var f = Ba(function(k, l) {
                  na(c, l)["catch"](k)
              })
                , g = Ac(a)(Zg(E([a, c], Lo)))(tl(function(k) {
                  return new Iv(a,k)
              }))
                , h = !1;
              $r([g, f])(bb(D(a, "wv2.R.c"), function(k) {
                  var l = k[0];
                  k = k[1];
                  if (!h) {
                      b = I(l.stop, l);
                      var m = d.C("wv2Counter");
                      if (!xi(a, k) || m)
                          b();
                      else if (d.D("wv2Counter", e),
                      d.D("stopRecorder", b),
                      k = Ii(a, "7", "6")) {
                          m = new Jv(a,c,k.type);
                          var p = Zl.nf(e, "m", I(m.yi, m), k, a)
                            , q = Zl.nf(e, "e", I(m.nh, m), k, a);
                          "onpagehide"in a ? la(a).F(a, ["pagehide"], function(t) {
                              t.persisted ? (p.flush(!0),
                              q.flush(!0)) : b()
                          }, null) : la(a).F(a, ["beforeunload", "unload"], b);
                          k = Mo();
                          m = k.Di;
                          q.F("ag", k.Mg);
                          q.F("p", m);
                          p.F("see", function(t) {
                              var y = !1;
                              x(function(F) {
                                  "page" === F.type && (y = !0)
                              }, t);
                              y && (h || q.push({
                                  type: "event",
                                  event: "fatalError",
                                  data: {
                                      code: "invalid-snapshot",
                                      oh: "p.s.f",
                                      stack: ""
                                  }
                              }),
                              b())
                          });
                          var r = Eb(function(t) {
                              "eof" === n(t, "data.type") || "eof" === t.event ? (q.push(t),
                              p.push(t),
                              q.flush(!0),
                              p.flush(!0)) : ("event" === t.type ? q : p).push(t)
                          });
                          W(a, b, 864E5);
                          Tb(a, function() {
                              var t, y;
                              vb(a, (t = {},
                              t.counterKey = e,
                              t.name = "webvisor",
                              t.data = (y = {},
                              y.version = 2,
                              y),
                              t));
                              l.start(r)
                          })
                      }
                  }
              }));
              return function() {
                  return b()
              }
          }), Mv = B("w2.cs", function(a, c) {
              var b, d = L(c);
              ig(a, d, (b = {},
              b.webvisor = !!c.Cb,
              b))
          }), Nv = ["rt", "mf"], Lf = v(uc, L), ri = w(ud, mc), Ov = Hb("isp", function(a, c) {
              na(c, function(b) {
                  var d = jb(function(h) {
                      return n(b, "settings." + h)
                  }, Nv);
                  if (d && Vd(a)) {
                      var e = sd(b) && !ne(a)
                        , f = Lf(c);
                      A(f, {
                          Qb: d,
                          status: e ? 3 : 4
                      });
                      if (!e) {
                          e = Ho(a, c, d);
                          var g = function(h) {
                              f.status = h
                          };
                          return ("mf" === d ? Jo : Io)(a, c, e).then(u(1, g))["catch"](u(2, g))
                      }
                  }
              })["catch"](D(a, "l.isp"))
          }), dm = B("fbq.o", function(a, c, b) {
              var d = n(a, "fbq");
              if (d && d.callMethod) {
                  var e = function() {
                      var g = Pa(arguments)
                        , h = d.apply(void 0, g);
                      c(g);
                      return h
                  };
                  A(e, d);
                  b && x(c, b);
                  a.fbq = e
              } else
                  var f = W(a, E([a, c].concat(Ha(d && d.queue)), dm), 1E3, "fbq.d");
              return I(ma, null, a, f)
          }), ed, Jb, fd, qh = (ed = {},
          ed.add_to_wishlist = "add-to-wishlist",
          ed.begin_checkout = "begin-checkout",
          ed.generate_lead = "submit-lead",
          ed.add_payment_info = "add-payment-info",
          ed), rh = (Jb = {},
          Jb.AddToCart = "add-to-cart",
          Jb.Lead = "submit-lead",
          Jb.InitiateCheckout = "begin-checkout",
          Jb.Purchase = "purchase",
          Jb.CompleteRegistration = "register",
          Jb.Contact = "submit-contact",
          Jb.AddPaymentInfo = "add-payment-info",
          Jb.AddToWishlist = "add-to-wishlist",
          Jb.Subscribe = "subscribe",
          Jb), Fo = (fd = {},
          fd["1"] = qh,
          fd["2"] = qh,
          fd["3"] = qh,
          fd["0"] = rh,
          fd), Go = [rh.AddToCart, rh.Purchase], Pv = oa(function(a, c) {
              var b = n(c, "ecommerce")
                , d = n(c, "event") || "";
              if (!(b = b && d && {
                  version: "3",
                  oc: d
              }))
                  a: {
                      if (M(c) || hb(c))
                          if (b = Pa(c),
                          d = b[1],
                          "event" === b[0] && d) {
                              b = {
                                  version: "2",
                                  oc: d
                              };
                              break a
                          }
                      b = void 0
                  }
              b || (b = (b = n(c, "ecommerce")) && {
                  version: "1",
                  oc: G(",", ha(b))
              });
              b && a(b)
          }), Qv = B("ag.e", function(a, c) {
              if ("0" === c.ba) {
                  var b = []
                    , d = D(a, "ag.s", E([va, b], x));
                  na(c, function(e) {
                      if (n(e, "settings.auto_goals") && Ka(a, c) && (e = He(a, c, "autogoal").reachGoal)) {
                          e = E([e, c.xd], Eo);
                          var f = Pv(e);
                          e = E([a, e], Do);
                          b.push(dm(a, e));
                          b.push(lj(a, "dataLayer", function(g) {
                              g.ra.F(f)
                          }))
                      }
                  });
                  return d
              }
          }), Rv = /[^\d.,]/g, Sv = /[.,]$/, Bo = B("ep.pp", function(a, c) {
              if (!c)
                  return 0;
              a: {
                  var b = c.replace(Rv, "").replace(Sv, "");
                  var d = "0" === b[b.length - 1];
                  for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                      var f = b[e - 1];
                      if (H(f, [",", "."])) {
                          d = f;
                          break a
                      }
                  }
                  d = ""
              }
              b = d ? c.split(d) : [c];
              d = d ? b[1] : "00";
              b = parseFloat(pe(b[0]) + "." + pe(d));
              d = Math.pow(10, 8) - .01;
              a.isNaN(b) ? b = 0 : (b = a.Math.min(b, d),
              b = a.Math.max(b, 0));
              return b
          }), Tv = [[["EUR", "\u20ac"], "978"], [["USD", "\u0423\\.\u0415\\.", "\\$"], "840"], [["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"], ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"], [["GBP", "\u00a3", "UKL"], "826"], ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]], Uv = v(function(a) {
              return new RegExp(G("|", a),"i")
          }), Vv = B("ep.cp", function(a) {
              if (!a)
                  return "643";
              var c = wt(a);
              return (a = jb(function(b) {
                  return Uv(b[0]).test(c)
              }, Tv)) ? a[1] : "643"
          }), Wv = v(function() {
              function a() {
                  var k = h + "0"
                    , l = h + "1";
                  f[k] ? f[l] ? (h = h.slice(0, -1),
                  --g) : (e[l] = b(8),
                  f[l] = 1) : (e[k] = b(8),
                  f[k] = 1)
              }
              function c() {
                  var k = h + "1";
                  f[h + "0"] ? f[k] ? (h = h.slice(0, -1),
                  --g) : (h += "1",
                  f[h] = 1) : (h += "0",
                  f[h] = 1)
              }
              function b(k) {
                  void 0 === k && (k = 1);
                  var l = d.slice(g, g + k);
                  g += k;
                  return l
              }
              for (var d = G("", pi("Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==")), e = {}, f = {}, g = 1, h = ""; g < d.length - 1; )
                  ("0" === b() ? c : a)();
              return e
          }), yo = B("ep.dec", function(a, c) {
              if (!c || re(a))
                  return [];
              var b = pi(c)
                , d = b[1]
                , e = b[2]
                , f = b.slice(3);
              if (2 !== Be(b[0]))
                  return [];
              b = Wv();
              f = G("", f);
              d = Be(d + e);
              for (var g = e = "", h = 0; g.length < d && f[h]; )
                  e += f[h],
                  b[e] && (g += String.fromCharCode(Be(b[e])),
                  e = ""),
                  h += 1;
              b = Vb(a, Kh(g));
              return M(b) ? z(Ds, b) : []
          }), Ao = B("ep.ent", function(a, c, b) {
              a = "" + Za(a, 10, 99);
              b = "" + 100 * c + b + a;
              if (16 < hb(b))
                  return "";
              b = qi("0", 16, b);
              c = b.slice(0, 8);
              b = b.slice(-8);
              c = (+c ^ 92844).toString(35);
              b = (+b ^ 92844).toString(35);
              return "" + c + "z" + b
          }), em = w(oi, Vv), fm = B("ep.ctp", function(a, c, b, d) {
              var e = em(a, b)
                , f = ni(a, d);
              mi(a, c, e, f);
              La("MutationObserver", a.MutationObserver) && (new a.MutationObserver(function() {
                  var g = em(a, b)
                    , h = ni(a, d);
                  if (e !== g || f !== h)
                      e = g,
                      f = h,
                      mi(a, c, e, f)
              }
              )).observe(a.document.body, {
                  attributes: !0,
                  childList: !0,
                  subtree: !0,
                  characterData: !0
              })
          }), Xv = B("ep.chp", function(a, c, b, d, e) {
              b && Kf(a, c);
              return d || e ? la(a).F(a.document, ["click"], D(a, "ep.chp.cl", E([a, c, d, e], zo))) : C
          }), bw = B("ep.i", function(a, c) {
              if (rd(a))
                  return xo(a, c).then(function(b) {
                      var d = b.jh
                        , e = d[0]
                        , f = d[1]
                        , g = d[2]
                        , h = d[3]
                        , k = d[4]
                        , l = d[5]
                        , m = d[6]
                        , p = d[7]
                        , q = d[8]
                        , r = d[9]
                        , t = d[10]
                        , y = d[11]
                        , F = d[12]
                        , R = d[13]
                        , P = d[14]
                        , Ca = d[15];
                      if (!b.isEnabled)
                          return K.resolve(C);
                      var Ga = te(a, e)
                        , dc = te(a, h)
                        , hh = te(a, m)
                        , Yv = te(a, q)
                        , Zv = "" + e + f + g === "" + h + k + l;
                      return new K(function($v, aw) {
                          Ac(a)(bb(aw, function() {
                              Ga && fm(a, c, f, g, t, y, F);
                              dc && !Zv && fm(a, c, k, l, R, P, Ca);
                              $v(Xv(a, c, hh || Yv, p, r))
                          }))
                      }
                      )
                  })
          }), lo = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"], cw = B("cc.i", function(a, c) {
              var b = E([a, c], wo);
              b = E([a, b, 300, void 0], W);
              na(c, b)
          }), dw = u("9-d5ve+.r%7", Q), ew = B("ad", function(a, c) {
              if (!c.Wa) {
                  var b = J(a);
                  if (!b.C("adBlockEnabled")) {
                      var d = function(m) {
                          H(m, ["2", "1"]) && b.D("adBlockEnabled", m)
                      }
                        , e = Ec(a)
                        , f = e.C("isad");
                      if (f)
                          d(f);
                      else {
                          var g = u("adStatus", b.D)
                            , h = function(m) {
                              m = m ? "1" : "2";
                              d(m);
                              g("complete");
                              e.D("isad", m, 1200);
                              return m
                          }
                            , k = qa(a, "adb", c);
                          if (!b.C("adStatus")) {
                              g("process");
                              var l = "metrika/a" + dw().replace(/[^a-v]+/g, "") + "t.gif";
                              to(a, function() {
                                  return k({
                                      ja: {
                                          Da: l
                                      }
                                  }).then(u(!1, h))["catch"](u(!0, h))
                              })
                          }
                      }
                  }
              }
          }), fw = B("pr.p", function(a, c) {
              var b, d;
              if (xg(a)) {
                  var e = qa(a, "5", c)
                    , f = Ia((b = {},
                  b.pq = 1,
                  b.ar = 1,
                  b));
                  e({
                      K: f,
                      J: (d = {},
                      d["page-url"] = X(a).href,
                      d["page-ref"] = n(a, "document.referrer") || "",
                      d)
                  }, c)["catch"](D(a, "pr.p.s"))
              }
          }), li = !1, gw = B("fid", function(a) {
              var c, b = C;
              if (!O(a.PerformanceObserver))
                  return b;
              var d = J(a);
              if (d.C("fido"))
                  return b;
              d.D("fido", !0);
              var e = new a.PerformanceObserver(D(a, "fid", function(f) {
                  f = f.getEntries()[0];
                  d.D("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                  b()
              }));
              b = function() {
                  return e.disconnect()
              }
              ;
              try {
                  e.observe((c = {},
                  c.type = "first-input",
                  c.buffered = !0,
                  c))
              } catch (f) {}
              return b
          }), hw = v(w(V("performance.memory.jsHeapSizeLimit"), Ma("concat", ""))), iw = ["availWidth", "availHeight", "availTop"], jw = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "), kw = ["webgl", "experimental-webgl"], ro = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0], Hf = u(Sa("ccf"), Va), qo = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"), ji = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "), oo = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "), sh = v(function(a, c) {
              var b = J(a)
                , d = Wa(a)
                , e = []
                , f = E([a, c, b, d], Fq);
              Dd(a) || Gq(a, "14.1") || e.push(E([ko, "pp", ""], f));
              var g = !Hl(a) || Ff(a, 68);
              g && e.push(E([mo, "pu", ""], f));
              !g || d.Td || Vd(a) || (e.push(E([jo, "zzlc", "na"], f)),
              e.push(E([io, "cc", ""], f)));
              return e.length ? {
                  sa: function(h, k) {
                      if (0 === b.C("isEU"))
                          try {
                              x(Ge, e)
                          } catch (l) {}
                      k()
                  },
                  O: function(h, k) {
                      var l = h.K;
                      if (l && 0 === b.C("isEU"))
                          try {
                              x(Ba(l), e)
                          } catch (m) {}
                      k()
                  }
              } : {}
          }, w(fb, L)), lw = w(function(a) {
              return (a = n(a, "navigator.plugins")) && hb(a) ? w(Ha, Ea, dt(function(c, b) {
                  return c.name > b.name ? 1 : 2
              }), Eb(Cq))(a) : ""
          }, Ee(",")), mw = function(a) {
              return function(c) {
                  var b = qb(c);
                  if (!b)
                      return "";
                  b = b("canvas");
                  var d = []
                    , e = a()
                    , f = e.qh;
                  e = e.eh;
                  try {
                      var g = Ma("getContext", b);
                      d = z(w(Q, g), e)
                  } catch (h) {
                      return ""
                  }
                  return (g = jb(Q, d)) ? f(c, {
                      canvas: b,
                      Sg: g
                  }) : ""
              }
          }(function() {
              return {
                  eh: kw,
                  qh: eo
              }
          }), bo = ["name", "lang", "localService", "voiceURI", "default"], nw = B("ice", function(a, c, b) {
              if (c = Ka(a, c))
                  if (b = ei(a, b))
                      return di(a, c, b),
                      !0
          }), ow = B("ice", function(a, c, b) {
              if (c = Ka(a, c))
                  if (b = ei(a, b))
                      return zj(a, b.ji).then(E([a, c, b], di), D(a, "ice.s")),
                      !0
          }), pw = ["text", "email", "tel"], qw = ["cc-", "name", "shipping"], rw = B("icei", function(a, c) {
              if (Cl(a)) {
                  var b = !1
                    , d = C
                    , e = C;
                  na(c, function(f) {
                      if (!(Mf(a) || n(f, "settings.eu") || b)) {
                          f = n(f, "settings.cf") ? ow : nw;
                          var g = E([a, c], f)
                            , h = function(k) {
                              return Vf(a, k) || !H(k.type, pw) || Qa(yb, z(u(k.autocomplete, ab), qw)) ? !1 : !0
                          };
                          d = hi(a, "input", ["blur"], g, h);
                          e = hi(a, "form", ["submit"], function(k) {
                              var l = k.target;
                              if (l) {
                                  l = ib("input", l);
                                  var m = 0;
                                  x(function(p) {
                                      20 <= m || !h(p) || g({
                                          target: p,
                                          isTrusted: k.isTrusted,
                                          Wd: !0
                                      }) && (m += 1)
                                  }, l)
                              }
                          })
                      }
                  });
                  return function() {
                      b = !0;
                      d();
                      e()
                  }
              }
          }), ci, sw = B("p.ai", function(a, c) {
              if (Dd(a) || zf(a))
                  return na(c, function(b) {
                      var d;
                      if (b = n(b, "settings.sbp"))
                          return bi(a, A({}, b, (d = {},
                          d.c = c.id,
                          d)), 10)
                  })
          }), tw = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" "), gm = Hb("uah", function(a) {
              if (!La("getHighEntropyValues", n(a, "navigator.userAgentData.getHighEntropyValues")))
                  return K.reject("0");
              try {
                  return a.navigator.userAgentData.getHighEntropyValues(tw).then(function(c) {
                      if (!ia(c))
                          throw "2";
                      return c
                  }, function() {
                      throw "1";
                  })
              } catch (c) {
                  return K.reject("3")
              }
          }), hm = new RegExp(G("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")), Un = v(function(a) {
              var c = ub(a);
              return (c = hm.test(c)) ? K.resolve(c) : gm(a).then(function(b) {
                  try {
                      return N(function(d, e) {
                          return d || hm.test(e.brand)
                      }, !1, b.brands)
                  } catch (d) {
                      return !1
                  }
              }, u(!1, Q))
          }), zc = ["0", "1", "2", "3"], Rc = zc[0], yf = zc[1], uw = zc[2], im = ["GDPR-ok-view-detailed-0", "GDPR-ok-view-detailed-1", "GDPR-ok-view-detailed-2", "GDPR-ok-view-detailed-3"], $h = ["GDPR-ok-view-default", "GDPR-ok-view-detailed"].concat(im), xf = "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" ").concat(im).concat(["28", "29", "30", "31"]), vw = "3 13 14 31 15 16 17 28".split(" "), le = w(Eb(V("ymetrikaEvent.type")), ct(yc(xf))), ww = {
              ui: !0,
              url: "https://yastatic.net/s3/gdpr/v3/gdpr",
              Nf: "",
              Gf: "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz cs da de el hr it nl pl sk sv".split(" ")
          }, Xn = Hb("gdpr", function(a, c, b, d, e) {
              function f(p) {
                  c("10");
                  b.F($h, function(q) {
                      var r;
                      q = q.type;
                      l.fg((r = {},
                      r.type = q,
                      r));
                      p({
                          value: ai(q)
                      })
                  })
              }
              var g = void 0 === e ? ww : e;
              e = g.url;
              var h = g.Nf
                , k = g.ui;
              g = $n(a, g.Gf, d.xj);
              var l = oe(a, d);
              if (!l)
                  return K.resolve({
                      value: Rc,
                      Vd: !0
                  });
              if (a._yaGdprLoaded)
                  return new K(function(p) {
                      c("7");
                      f(p)
                  }
                  );
              var m = ld(a, {
                  src: "" + e + (k ? "" : g) + h + ".js"
              });
              return new K(function(p, q) {
                  m ? (c("7"),
                  m.onerror = function() {
                      var r;
                      c("9");
                      l.fg((r = {},
                      r.type = "GDPR-ok-view-default",
                      r));
                      p(null)
                  }
                  ,
                  m.onload = u(p, f)) : (c("9"),
                  q(Sa("gdp.e")))
              }
              )
          }), fc, Zn = (fc = {},
          fc["GDPR-ok"] = "ok",
          fc["GDPR-ok-view-default"] = "ok-default",
          fc["GDPR-ok-view-detailed"] = "ok-detailed",
          fc["GDPR-ok-view-detailed-0"] = "ok-detailed-all",
          fc["GDPR-ok-view-detailed-1"] = "ok-detailed-tech",
          fc["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics",
          fc["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other",
          fc), Sn = "az be en es et fi fr hy ka kk ky lt lv no pt ro ru sl tg tr uz ar he sr uk zh".split(" "), Zh = [], Xh = Ma("push", Zh), Rn = v(function(a, c) {
              var b = c.C("gdpr");
              return H(b, zc) ? "-" + b : ""
          }), jm = v(Hd), xw = v(function() {
              var a = N(function(c, b) {
                  "ru" !== b && (c[b] = Pl + "." + b);
                  return c
              }, {}, Gg);
              x(function(c) {
                  a[c] = c
              }, ha(Kl));
              a["mc.webvisor.org"] = "mc.webvisor.org";
              return a
          }), In = v(function(a) {
              a = X(a).hostname;
              return (a = jb(w(V("1"), bt("test"), Xa(va)(a)), za(Kl))) && a[0]
          }), km = function(a, c) {
              return function(b, d) {
                  var e = L(d);
                  e = xw(e);
                  var f = Gn(b, e)
                    , g = J(b)
                    , h = sb(b);
                  return Vd(b) || Sd(b) ? {} : {
                      O: function(k, l) {
                          var m = k.K;
                          m = !(m && m.C("pv"));
                          if (h || m || !f.length)
                              return l();
                          if (g.C("startSync"))
                              jm(b).push(l);
                          else {
                              g.D("startSync", !0);
                              m = E([b, f, C, !1], a);
                              var p = Af[0];
                              if (!p)
                                  return l();
                              l();
                              p(b).then(m).then(C, w(Tc(C), D(b, c)))["catch"](C)
                          }
                      }
                  }
              }
          }(function(a, c, b, d) {
              var e = ja(a)
                , f = J(a)
                , g = Wa(a);
              b = hf(a, "c");
              var h = wb(a, b);
              return Cb(function(k, l) {
                  function m() {
                      var r = g.C("synced");
                      f.D("startSync", !1);
                      r && (r[l.wi] = p,
                      g.D("synced", r));
                      r = jm(a);
                      x(va, r);
                      $e(r)
                  }
                  var p, q = h({
                      V: {
                          ha: ["sync.cook"],
                          Qa: 1500
                      }
                  }, [ua.Na + "//" + l.ej + "/sync_cookie_image_check" + (d ? "_secondary" : "")]).then(function() {
                      p = e(rb);
                      m()
                  })["catch"](function() {
                      p = e(rb) - 1435;
                      m()
                  });
                  q = u(q, Q);
                  return k.then(q)
              }, K.resolve(), c)["catch"](D(a, "ctl"))
          }, "sy.c"), En = oa(function(a, c) {
              var b = c.sd
                , d = c.Se
                , e = c.cookie
                , f = Uh(c)[a];
              f = ie(f, d);
              b !== f && (b = Vh(e, d),
              b[f] += 1,
              Fn(b, c))
          }), yw = v(function(a) {
              var c;
              (c = n(a, "document.referrer")) ? (c = Ub(a, c).host,
              c = Aj(c),
              c = Pl + "." + (c || Qu)) : c = Xb;
              c = ["mc.webvisor.org", c];
              a = Ec(a);
              return {
                  cookie: a,
                  Se: c,
                  sd: c.length - 1,
                  $h: Vh(a, c)
              }
          }), Dn = w(yw, Ba), Kb, Bn = (Kb = {},
          Kb.brands = "chu",
          Kb.architecture = "cha",
          Kb.bitness = "chb",
          Kb.uaFullVersion = "chf",
          Kb.fullVersionList = "chl",
          Kb.mobile = "chm",
          Kb.model = "cho",
          Kb.platform = "chp",
          Kb.platformVersion = "chv",
          Kb), yn = v(function(a) {
              return gm(a).then(zn, Cn)
          }), zw = Hb("ot", function(a, c) {
              if (Qe(a)) {
                  var b = la(a);
                  return na(c, D(a, "ot.s", function(d) {
                      if (n(d, "settings.oauth")) {
                          var e = []
                            , f = ud(a, c);
                          e.push(b.F(a, ["message"], D(a, "ot.m", u(f, xn))));
                          Ac(a)(bb(C, D(a, "ot.b", function() {
                              function g(q) {
                                  var r, t = q.href;
                                  t && xc(t, "https://oauth.yandex.ru/") && !ab(t, "_ym_uid=") && (t = ab(t, "?") ? "&" : "?",
                                  q.href += "" + t + Ic((r = {},
                                  r._ym_uid = f,
                                  r.mc = "v",
                                  r)),
                                  b.F(q, ["click"], D(a, "ot.click", function() {
                                      var y = "et=" + l(ca);
                                      q.href += "&" + y
                                  })))
                              }
                              var h, k = a.document.body, l = ja(a), m = ib("a", k);
                              x(g, m);
                              if (La("MutationObserver", a.MutationObserver)) {
                                  m = new a.MutationObserver(D(a, "ot.m", u(function(q) {
                                      q = q.addedNodes;
                                      for (var r = 0; r < q.length; r += 1) {
                                          var t = q[r];
                                          "A" === t.nodeName && g(t)
                                      }
                                  }, x)));
                                  var p = (h = {},
                                  h.childList = !0,
                                  h.subtree = !0,
                                  h);
                                  m.observe(k, p);
                                  e.push(I(m.disconnect, m))
                              }
                          })));
                          return E([Ge, e], x)
                      }
                  }))
              }
          }), Aw = B("p.cta", function(a) {
              Ac(a)(bb(C, function() {
                  var c = J(a);
                  if (vn(a.document)) {
                      var b = 0;
                      if (si(a, we, "cta")) {
                          var d = C
                            , e = function() {
                              ti(we, "cta");
                              d();
                              ma(a, b)
                          };
                          d = la(a).F(a, ["message"], B("p.cta.o", E([a, c, e], wn)));
                          b = W(a, e, 1500)
                      } else
                          c.D("cta.e", "if")
                  } else
                      c.D("cta.e", "ns")
              }))
          }), th, on = "bidRequested bidAdjustment bidWon bidResponse bidTimeout auctionInit auctionEnd adRenderSucceeded adRenderFailed".split(" "), rn = ["cpm", "currency", "netRevenue", "requestTimestamp", "responseTimestamp"], Qh = (th = {},
          th.netRevenue = function(a) {
              return S(a) ? "net" === a : !!a
          }
          ,
          th), ic = {}, Bw = B("pj", function(a, c) {
              var b, d = Ka(a, c), e = d && d.params;
              return e ? (b = {},
              b.pbjs = function(f) {
                  M(f) && (f = ka(yb, z(function(g) {
                      if (ia(g) && g.data && g.event && (ia(g.data) || M(g.data))) {
                          var h = n(g, "data.args");
                          return h ? {
                              event: g.event,
                              data: h
                          } : g
                      }
                  }, f)),
                  mn(f),
                  sn(a, e))
              }
              ,
              b) : C
          }), Mh = Xa(xc)("btn:"), jn = Xa(xc)("form:"), gn = v(function() {
              var a = cg();
              return N(function(c, b) {
                  c[a[b]] = b;
                  return c
              }, {}, ha(a))
          }), fn = /(\D\d*)/g, Cw = v(uc), Dw = Eb(function(a) {
              a.patterns = z(Jh, a.patterns);
              a.price_patterns = z(Jh, a.price_patterns);
              return a
          }), dn = ["ytm.click", "ytm.linkClick", "ytm.formSubmit"], Ih = C, Zm = v(function(a, c) {
              Ih = c
          }), Em = ee("c.ch", function(a, c, b, d) {
              d = d[b["var"]];
              if (!d)
                  throw Aa("var: " + b["var"]);
              c = "event" === d.type ? Hh(c, {
                  type: "dataLayer",
                  key: "event"
              }, void 0) : "dataLayer" === d.type ? Hh(c, d, void 0) : "cnst" === d.type ? d.value : void 0;
              d = b.target;
              a = Sm(a, b.fn);
              if (!a)
                  throw Aa("fn: " + b.fn);
              return a(c, d)
          }, !1), Rm = "close stop focus blur open alert confirm prompt print postMessage captureEvents releaseEvents getSelection getComputedStyle matchMedia moveTo moveBy resizeTo resizeBy scroll scrollTo scrollBy getDefaultComputedStyle scrollByLines scrollByPages find dump requestIdleCallback cancelIdleCallback requestAnimationFrame cancelAnimationFrame reportError setTimeout clearTimeout setInterval clearInterval queueMicrotask fetch self globalThis this history customElements event frames opener parent frameElement navigator clientInformation external performance visualViewport crypto speechSynthesis localStorage origin indexedDB caches sessionStorage window document location top".split(" "), sf = {}, wc, Gh = (wc = {},
          wc.copyFromWindow = function(a) {
              var c = a.l
                , b = a.na;
              return function(d) {
                  md(d);
                  if (xc(d, "on"))
                      throw Aa("rwp");
                  b.checkPermission({
                      fa: "globals",
                      L: {
                          Ca: 2,
                          key: d
                      }
                  });
                  d = n(c, d);
                  return jd(c, d)
              }
          }
          ,
          wc.loadScript = function(a) {
              var c = a.l
                , b = a.na;
              return function(d, e, f) {
                  b.checkPermission({
                      fa: "loadScript",
                      L: {
                          url: d
                      }
                  });
                  var g = O(e) ? ee("ls.ol", function() {
                      return e.apply(null)
                  }) : C
                    , h = O(f) ? ee("ls.ol", function() {
                      return f.apply(null)
                  }) : void 0;
                  zh(c, d, g, h)
              }
          }
          ,
          wc.callInWindow = function(a) {
              var c = a.l
                , b = a.na;
              return function(d) {
                  for (var e = [], f = 1; f < arguments.length; f++)
                      e[f - 1] = arguments[f];
                  md(d);
                  b.checkPermission({
                      fa: "globals",
                      L: {
                          key: d,
                          Ca: 4
                      }
                  });
                  f = n(c, d);
                  if (!O(f))
                      throw Aa("ca.c.wenf");
                  return f.apply(void 0, e)
              }
          }
          ,
          wc.createArgumentsQueue = function(a) {
              var c = a.l
                , b = a.na;
              return function(d, e) {
                  function f() {
                      for (var k = 0; k < arguments.length; k++)
                          ;
                      return g.push(arguments)
                  }
                  b.checkPermission({
                      fa: "globals",
                      L: {
                          key: d,
                          Ca: 2
                      }
                  });
                  b.checkPermission({
                      fa: "globals",
                      L: {
                          key: d,
                          Ca: 1
                      }
                  });
                  b.checkPermission({
                      fa: "globals",
                      L: {
                          key: e,
                          Ca: 2
                      }
                  });
                  b.checkPermission({
                      fa: "globals",
                      L: {
                          key: e,
                          Ca: 1
                      }
                  });
                  md(d);
                  md(e);
                  var g = []
                    , h = tf(c, d);
                  h.value || (h.parent[h.ue] = f);
                  h = tf(c, e);
                  if (h.value) {
                      if (!M(h.value))
                          throw Aa("ca.akna");
                      g = h.value
                  } else
                      h.parent[h.ue] = g;
                  return f
              }
          }
          ,
          wc.copyFromDataLayer = function(a) {
              var c = a.l
                , b = a.na
                , d = a.event;
              return function(e) {
                  if (!d)
                      throw Aa("No dataLayer data");
                  b.checkPermission({
                      fa: "dataLayer",
                      L: {
                          key: e,
                          Ca: 2
                      }
                  });
                  return jd(c, n(d, e))
              }
          }
          ,
          wc.setInWindow = function(a) {
              var c = a.l
                , b = a.na;
              return function(d, e, f) {
                  void 0 === f && (f = !1);
                  b.checkPermission({
                      fa: "globals",
                      L: {
                          key: d,
                          Ca: 1
                      }
                  });
                  md(d);
                  try {
                      var g = tf(c, d)
                        , h = g.parent
                        , k = g.ue;
                      if (!f && fa(h, k))
                          return !1;
                      h[k] = e;
                      return !0
                  } catch (l) {
                      return !1
                  }
              }
          }
          ,
          wc), Ew = ["ytm.dom", "ytm.load", "ytm.click", "ytm.linkClick", "ytm.formSubmit"], Fw = B("p.ips", function(a, c) {
              na(c, function(b) {
                  (n(b, "settings.phchange") || n(b, "settings.phhide")) && yh(a, "tag_phone", L(c), b)
              })
          }), Gw = B("p.suic", function(a, c) {
              return na(c, function(b) {
                  var d = af(a);
                  if (!d.C("pic") && !sd(b) && (b = n(b, "settings.pic"))) {
                      var e = qa(a, "pic");
                      d.D("pic", 1);
                      return e({
                          V: {
                              cd: !1,
                              Sc: !0
                          }
                      }, [b]).then(function(f) {
                          S(f.fb) && (f = Vb(a, f.fb)) && (f = n(f, "ymaf"),
                          S(f) && f && Ye(a, "_ym_fa", f, 43200))
                      })
                  }
              })["catch"](D(a, "pic"))
          }), Hw = B("p.tv", function(a) {
              if (Cu(a)) {
                  var c = J(a);
                  xq(a).then(function(b) {
                      c.D("lgguid", b)
                  }, D(a, "p.tv.p"))
              }
          }), lm = {}, mm = v(uc), xm = w(Ma("exec", /counterID=(\d+)/), V("1")), nm = oa(function(a, c) {
              var b, d = mm(a), e = Ha(c), f = e[0], g = e[1], h = e.slice(2);
              if (g) {
                  e = wm(a, f);
                  var k = e[0]
                    , l = e[1];
                  e = L(l);
                  d[e] || (d[e] = {});
                  d = d[e];
                  c.df || lm[g] && N(function(m, p) {
                      return m || !!p(a, l, h, k)
                  }, !1, lm[g]) || ("init" === g ? (c.df = !0,
                  k ? Lb(a, "" + f, "dc", (b = {},
                  b.key = f,
                  b)) : a["yaCounter" + l.id] = new a.Ya[ua.fc](A({}, h[0], l))) : k && k[g] && d.ei ? (k[g].apply(k, h),
                  c.df = !0) : (b = d.jg,
                  b || (b = [],
                  d.jg = b),
                  b.push(xa([f, g], h))))
              }
          }), um = B("destruct.e", function(a, c, b) {
              return function() {
                  var d = J(a)
                    , e = c.id;
                  x(function(f, g) {
                      return O(f) && D(a, "dest.fr." + g, f)()
                  }, b);
                  vm(a, L(c));
                  delete d.C("counters")[L(c)];
                  delete a["yaCounter" + e]
              }
          }), gd = J(window);
          gd.Ja("hitParam", {});
          gd.Ja("lastReferrer", window.location.href);
          (function() {
              aa.push(function(a, c) {
                  var b;
                  return b = {},
                  b.firstPartyParams = Qt(a, c),
                  b.firstPartyParamsHashed = lr(a, c),
                  b
              });
              Wd.push("fpp");
              Wd.push("fpmh")
          }
          )();
          (function() {
              var a = J(window);
              a.Ja("getCounters", Rt(window));
              hd.push(St);
              Yg.push(function(c, b) {
                  b.counters = a.C("getCounters")
              })
          }
          )();
          (function() {
              aa.push(function(a, c) {
                  var b;
                  vb(a, (b = {},
                  b.counterKey = L(c),
                  b.name = "counter",
                  b.data = xk(c),
                  b))
              })
          }
          )();
          wa["1"] = nb;
          aa.push(Tt);
          sa["1"] = cc;
          zb(hg, -1);
          Zb["1"] = [[hg, -1], [We, 1], [Pe, 2], [Qb(), 3], [Gj, 4]];
          aa.push(Ut);
          aa.push(B("p.ar", function(a, c) {
              var b, d = qa(a, "a", c);
              return b = {},
              b.hit = function(e, f, g, h, k, l) {
                  var m, p, q, r = {
                      J: {},
                      K: Ia((m = {},
                      m.pv = 1,
                      m.ar = 1,
                      m))
                  };
                  f = ia(f) ? {
                      title: f.title,
                      Rf: f.referer,
                      L: f.params,
                      $b: f.callback,
                      l: f.ctx
                  } : {
                      title: f,
                      Rf: g,
                      L: h,
                      $b: k,
                      l: l
                  };
                  h = Jd(c);
                  g = e || X(a).href;
                  h.url !== g && (h.ref = h.url,
                  h.url = e);
                  e = f.Rf || h.ref || a.document.referrer;
                  h = rc(a, c, "pv", (p = {},
                  p.id = c.id,
                  p.url = g,
                  p.ref = e,
                  p), f.L);
                  p = A(r.N || {}, {
                      L: f.L,
                      title: f.title
                  });
                  r = d(A(r, {
                      N: p,
                      J: A(r.J || {}, (q = {},
                      q["page-url"] = g,
                      q["page-ref"] = e,
                      q))
                  }), c).then(h);
                  return Uc(a, "p.ar.s", r, f.$b || C, f.l)
              }
              ,
              b
          }));
          wa.a = nb;
          Zb.a = $b;
          sa.a = cc;
          aa.push(He);
          wa.g = nb;
          sa.g = cc;
          Zb.g = $b;
          aa.push(Vt);
          aa.push(Wt);
          Zb.t = $b;
          wa.t = nb;
          sa.t = cc;
          aa.push(B("cl.p", function(a, c) {
              function b(p, q, r, t) {
                  void 0 === t && (t = {});
                  r ? Je(a, c, {
                      url: r,
                      rb: !0,
                      Cc: p,
                      Gc: q,
                      sender: e,
                      zg: t
                  }) : h.warn("clel")
              }
              var d, e = qa(a, "2", c), f = [], g = L(c), h = sc(a, g), k = D(a, "s.s.tr", u(Me(a, g), dr));
              g = {
                  l: a,
                  ib: c,
                  rh: f,
                  sender: e,
                  Pj: J(a),
                  ah: ad(a, c.id),
                  Rj: Hc(a),
                  kj: u(u(g, jf(a)), w(va, V("trackLinks")))
              };
              g = D(a, "cl.p.c", u(g, ar));
              g = la(a).F(a, ["click"], g);
              c.sg && k(c.sg);
              var l = D(a, "file.clc", E([!0, !1], b))
                , m = D(a, "e.l.l.clc", E([!1, !0], b));
              f = D(a, "add.f.e.clc", Xt(f));
              return d = {},
              d.file = l,
              d.extLink = m,
              d.addFileExtension = f,
              d.trackLinks = k,
              d.u = g,
              d
          }));
          Zb["2"] = $b;
          wa["2"] = nb;
          sa["2"] = cc;
          wa.r = Qd("r");
          sa.r = Mt;
          Ua.push(B("p.r", function(a, c) {
              var b = Zt(a)
                , d = qa(a, "r", c)
                , e = D(a, "rts.p");
              return na(c, E([function(f, g) {
                  var h = {
                      id: g.$g,
                      ba: g.ba
                  }
                    , k = {
                      V: {
                          ca: g.Ni
                      },
                      K: Ia(g.Pg),
                      J: g.L,
                      N: {
                          Sb: g.Sb
                      },
                      ja: {
                          Da: g.Da
                      }
                  };
                  g.Ka && (k.Ka = Cf(g.Ka));
                  h = d(k, h)["catch"](e);
                  return f.then(u(h, Q))
              }
              , K.resolve(), b], N))["catch"](e)
          }));
          Z("r", function(a) {
              return {
                  O: function(c, b) {
                      var d = c.K
                        , e = void 0 === d ? Ia() : d
                        , f = c.N.Sb
                        , g = Id(a);
                      d = e.C("rqnl", 0) + 1;
                      e.D("rqnl", d);
                      if (e = n(g, G(".", [f, "browserInfo"])))
                          e.rqnl = d,
                          fg(a);
                      b()
                  },
                  sa: function(c, b) {
                      qj(a, c);
                      b()
                  }
              }
          }, 1);
          zb(Ie, 100);
          Z("1", Ie, 100);
          aa.push($t);
          Z("n", We, 1);
          Z("n", Pe, 2);
          Z("n", Qb(), 3);
          Z("n", Ie, 100);
          wa.n = nb;
          sa.n = cc;
          ac({
              Ve: {
                  ea: "accurateTrackBounce"
              }
          });
          aa.push(au);
          wa.m = Qd("cm");
          sa.m = Bl;
          Z("m", Qb(["u", "v", "vf"]), 1);
          Z("m", Ie, 2);
          ac({
              Xg: {
                  ea: "clickmap"
              }
          });
          aa.push(bu);
          aa.push(cu);
          aa.push(du);
          aa.push(eu);
          (function() {
              aa.push(fu);
              Wd.push("ecommerce");
              ac({
                  xd: {
                      ea: "ecommerce",
                      Xa: function(a) {
                          if (a)
                              return !0 === a ? "dataLayer" : "" + a
                      }
                  }
              })
          }
          )();
          Ua.push(ju);
          aa.push(ku);
          Wd.push("user_id");
          aa.push(lu);
          zb(function(a, c) {
              return {
                  sa: function(b, d) {
                      var e = Ka(a, c);
                      e = e && e.userParams;
                      var f = (b.N || {}).Oe;
                      e && f && e(f);
                      d()
                  }
              }
          }, 0);
          Ze.push("_ym_debug");
          Yc.unshift(ou);
          aa.push(pu);
          (function() {
              var a, c = (a = {},
              a.tp = w(fb, yk, Rb),
              a.tpid = w(fb, os),
              a);
              A(Nd, c)
          }
          )();
          zb(Gd, 20);
          Z("n", Gd, 20);
          Z("1", Gd, 20);
          Yc.unshift(ru);
          Nd.fp = function(a, c, b) {
              if (b.J && b.J.nohit)
                  return null;
              b = J(a).C;
              if (!b("fpe"))
                  return null;
              c = qu(c);
              if (c.uh)
                  return null;
              b = b("fht", Infinity);
              a: {
                  var d = n(a, "performance.getEntriesByType");
                  if (O(d)) {
                      if (a = ka(w(Q, V("name"), Fa("first-contentful-paint")), d.call(a.performance, "paint")),
                      a.length) {
                          a = a[0].startTime;
                          break a
                      }
                  } else {
                      var e = n(a, "chrome.loadTimes");
                      d = xl(a);
                      if (O(e) && (e = e.call(a.chrome),
                      e = n(e, "firstPaintTime"),
                      d && e)) {
                          a = 1E3 * e - d;
                          break a
                      }
                      if (a = n(a, "performance.timing.msFirstPaint")) {
                          a -= d;
                          break a
                      }
                  }
                  a = void 0
              }
              return a && b > a ? (c.uh = a,
              Math.round(a)) : null
          }
          ;
          aa.push(function(a, c) {
              var b;
              return b = {},
              b.ecommerceAdd = B("ecm.a", tu(a, c)),
              b.ecommerceRemove = B("ecm.r", uu(a, c)),
              b.ecommerceDetail = B("ecm.d", vu(a, c)),
              b.ecommercePurchase = B("ecm.p", wu(a, c)),
              b
          });
          (function() {
              var a, c = {};
              c.bu = Du;
              c.pri = oq;
              c.wv = u(2, Q);
              c.ds = rq;
              c.co = function(b) {
                  return tb(J(b).C("jn"))
              }
              ;
              c.td = Ju;
              A(c, (a = {},
              a.iss = w(ot, Rb),
              a.hdl = w(pt, Rb),
              a.iia = w(qt, Rb),
              a.cpf = w(Bu, Rb),
              a.ntf = v(function(b) {
                  b = n(b, "Notification.permission");
                  b = "denied" === b ? !1 : "granted" === b ? !0 : null;
                  return Ra(b) ? null : b ? 2 : 1
              }),
              a.eu = Ab("isEU"),
              a.ns = xl,
              a.np = function(b) {
                  return Za(b, 0, 100) ? null : Fd(cb(Yi(b), 100))
              }
              ,
              a));
              c.pani = Eu;
              c.pci = Fu;
              c.si = Gu;
              c.gi = Hu;
              c.pic = Xa(Ad)("_ym_fa");
              c.stlgg = Ab("lgguid");
              c.sttdi = yq;
              c.stti = zq;
              c.sttifa = Aq;
              A(Nd, c)
          }
          )();
          (function() {
              var a = {};
              a.hc = Ab("hc");
              a.oo = Ab("oo");
              a.pmc = Ab("cmc");
              a.re = w(Nr, Rb);
              a.aw = function(c) {
                  c = jb(w(ba, Kc), [c.document.hidden, c.document.msHidden, c.document.webkitHidden]);
                  return ba(c) ? null : tb(!c)
              }
              ;
              a.rcm = Mu;
              a.yu = function(c) {
                  return (c = pd(c, "").C("yandexuid")) && c.substring(0, 25)
              }
              ;
              a.ifc = Ab("ifc");
              a.ifb = Ab("ifb");
              a.ecs = Ab("ecs");
              a.csi = Ab("scip");
              a.cdl = Ab("cdl");
              a.eco = v(nq, w(fb, L));
              a.dss = Ab("dSync");
              a.pis = Ab("pis");
              a.ucs = function(c) {
                  return (c = pd(c).C("ucs")) && c.substring(0, 25)
              }
              ;
              A(qg, a)
          }
          )();
          sa.er = cd;
          (function(a) {
              try {
                  var c = hf(a, "er")
                    , b = kq(a, c);
                  ok.push(function(d, e, f, g) {
                      var h, k, l, m, p;
                      .01 >= a.Math.random() || b((h = {},
                      h[d] = (k = {},
                      k[ua.hb] = (l = {},
                      l[e] = (m = {},
                      m[f] = g ? (p = {},
                      p[a.location.href] = g,
                      p) : a.location.href,
                      m),
                      l),
                      k),
                      h))
                  })
              } catch (d) {}
          }
          )(window);
          pf.push(function(a, c) {
              if (n(a, "disableYaCounter" + c.id) || n(a, "Ya.disableMetrica")) {
                  var b = L(c);
                  delete J(a).C("counters", {})[b];
                  Va(Sa("oo.e"))
              }
          });
          pg.unshift(function(a) {
              return {
                  O: function(c, b) {
                      J(a).C("oo") || b()
                  }
              }
          });
          zb(function(a, c) {
              return {
                  O: function(b, d) {
                      var e = b.J
                        , f = b.K;
                      !Nl[c.id] && f.C("pv") && c.exp && !e.nohit && (e.exp = c.exp,
                      Nl[c.id] = !0);
                      d()
                  }
              }
          }, -99);
          aa.push(Nu);
          Zb.e = $b;
          wa.e = nb;
          sa.e = cc;
          ac({
              exp: {
                  ea: "experiments"
              }
          });
          Bj.experiments = "ex";
          (function() {
              var a;
              Af.push(Ou);
              wa.f = nb;
              A(sa, (a = {},
              a.f = zl,
              a));
              Z("f", Qb(), 1);
              Z("f", Kj, 2);
              Z("f", Gd, 20)
          }
          )();
          pf.push(function(a, c) {
              var b = {
                  va: L(c),
                  qd: Ka(a, c),
                  qg: ja(a),
                  ce: Wa(a)
              }
                , d = b.qg(rb);
              if (!b.ce.Td) {
                  var e = b.ce.C("ymoo" + b.va);
                  if (e && 30 > d - e)
                      b = b.va,
                      delete J(a).C("counters", {})[b],
                      Va(Sa("uws"));
                  else
                      na(c, Pu(b))["catch"](D(a, "d.f"))
              }
          });
          (function() {
              var a, c, b = [Gb];
              A(sa, (a = {},
              a.s = b,
              a.S = b,
              a.u = cd,
              a));
              A(wa, (c = {},
              c.s = wb,
              c.S = nb,
              c.u = wb,
              c));
              Z("s");
              Z("u");
              Z("S", Qb(["v", "hid", "u", "vf", "rn"]), 1);
              aa.push(B("s", Wp))
          }
          )();
          wa["8"] = wb;
          sa["8"] = [og];
          yl.push([og, 0]);
          aa.push(B("p.us", function(a, c) {
              return na(c, function(b) {
                  if (n(b, "settings.sbp"))
                      return Vi(a, b, {
                          ib: c,
                          Qb: "8",
                          $d: "cs"
                      })
              })
          }));
          Z("p", Qb(jh), 1);
          $c("pub", function(a, c) {
              return {
                  O: function(b, d) {
                      Ui(a, c, b);
                      d()
                  }
              }
          }, 1);
          wa.p = Tu;
          sa.p = Ea([Fb, Gb]);
          Ua.push(Xu);
          ac({
              Cb: {
                  ea: "webvisor",
                  Xa: yb
              },
              hh: {
                  ea: "disableFormAnalytics",
                  Xa: yb
              }
          });
          Z("4", Qb(jh), 1);
          wa["4"] = Ql;
          sa["4"] = Ea([Fb, Gb, Vc]);
          Ua.push(cv);
          Z("W", Qb(jh), 1);
          $c("wv", function(a, c) {
              return {
                  O: function(b, d) {
                      b.K.Vb("we", Rb(c.Cb));
                      Ui(a, c, b, "rn");
                      d()
                  }
              }
          }, 1);
          sa.W = Ea([Fb, Gb]);
          wa.W = Ql;
          Ua.push(Lv);
          aa.push(Mv);
          ac({
              Cb: {
                  ea: "webvisor"
              }
          });
          ac({
              mj: {
                  ea: "trustedDomains"
              },
              dc: {
                  ea: "childIframe",
                  Xa: yb
              }
          });
          aa.push(Ov);
          Z("pi");
          wa.pi = wb;
          sa.pi = cd;
          $c("w", function(a, c) {
              return {
                  O: function(b, d) {
                      if (b.K) {
                          var e = Lf(c)
                            , f = e.status;
                          "rt" === e.Qb && f && (b.K.D("rt", f),
                          b.ja || (b.ja = {}),
                          b.ja.Zh = 1 === f ? ri(a, c) + "." : "")
                      }
                      d()
                  }
              }
          }, 2);
          aa.push(Qv);
          aa.push(bw);
          sa["6"] = Ea([Fb, Gb]);
          wa["6"] = wb;
          aa.push(cw);
          aa.push(Ku);
          (function() {
              Yg.push(function(a, c) {
                  c.informer = uo(a)
              })
          }
          )();
          zb(If, 6);
          Z("1", If, 6);
          Z("adb");
          Z("n", If, 4);
          sa.adb = cd;
          wa.adb = bk;
          hd.push(ew);
          sa["5"] = cc;
          wa["5"] = nb;
          Zb["5"] = ka(w(Kd, yc([We, Pe]), Kc), $b);
          aa.push(fw);
          Z("5", Gd, 20);
          zb(ki, 7);
          Z("n", ki, 6);
          Ua.push(gw);
          wa.d = nb;
          Z("d", Qb(["hid", "u", "v", "vf"]), 1);
          sa.d = cd;
          Z("n", function(a, c) {
              return {
                  sa: function(b, d) {
                      if (!b.N || !b.N.force) {
                          var e = .002, f = c.id === ua.Hg ? 1 : .002, g, h, k, l, m;
                          void 0 === e && (e = 1);
                          void 0 === f && (f = 1);
                          var p = Ed(a);
                          if (p && O(p.getEntriesByType) && (e = Math.random() > e,
                          f = Math.random() > f,
                          !e || !f)) {
                              p = p.getEntriesByType("resource");
                              for (var q = {}, r = {}, t = {}, y = Ml(), F = X(a).href, R = 0; R < p.length; R += 1) {
                                  var P = p[R]
                                    , Ca = P.name.replace(Ll, "").split("?")[0]
                                    , Ga = mc(Ca)
                                    , dc = (g = {},
                                  g.dns = Math.round(P.domainLookupEnd - P.domainLookupStart),
                                  g.tcp = Math.round(P.connectEnd - P.connectStart),
                                  g.duration = Math.round(P.duration),
                                  g.response = Math.round(P.responseEnd - P.requestStart),
                                  g);
                                  "script" !== P.initiatorType || e || (r[Ca] = A(dc, (h = {},
                                  h.name = P.name,
                                  h.decodedBodySize = P.decodedBodySize,
                                  h.transferSize = Math.round(P.transferSize),
                                  h)));
                                  !Lu[Ga] && !y[Ga] || q[Ca] || f || (q[Ca] = A(dc, (k = {},
                                  k.pages = F,
                                  k)))
                              }
                              ha(q).length && (t.timings8 = q);
                              ha(r).length && (t.scripts = r);
                              if (ha(t).length)
                                  qa(a, "d", c)({
                                      K: Ia((l = {},
                                      l.ar = 1,
                                      l.pv = 1,
                                      l)),
                                      V: {
                                          ca: Ob(a, t) || void 0
                                      },
                                      J: (m = {},
                                      m["page-url"] = F,
                                      m)
                                  }, {
                                      id: ua.Kg,
                                      ba: "0"
                                  })["catch"](D(a, "r.tim.ng2"))
                          }
                      }
                      d()
                  }
              }
          }, 7);
          sa.ci = [Gb];
          wa.ci = wb;
          Ua.push(B("p.sci", function(a, c) {
              return na(c, u(a, so))["catch"](D(a, "ins.cs"))
          }));
          Ua.push(Au);
          zb(sh, 8);
          Z("f", sh, 3);
          Z("n", sh, 5);
          hd.push(function(a) {
              return B("fip", function(c) {
                  if (!Hl(c) || Sd(c)) {
                      var b = Wa(c);
                      if (!b.C("fip")) {
                          var d = w(Eb(w(function(e, f) {
                              return B("fip." + f, e)(c)
                          }, I(Os, null))), Ee("-"))(a);
                          b.D("fip", d)
                      }
                  }
              })
          }([mw, lw, function(a) {
              var c = n(a, "ApplePaySession")
                , b = X(a).protocol;
              a = c && "https:" === b && !sb(a) ? c : void 0;
              c = "";
              if (!a)
                  return c;
              try {
                  c = "" + a.canMakePayments();
                  b = "";
                  var d = a.supportsVersion;
                  if (O(d))
                      for (var e = 1; 20 >= e; e += 1)
                          b += d.call(a, e) ? "" + e : "0";
                  return b + c
              } catch (f) {
                  return c
              }
          }
          , function(a) {
              a = n(a, "navigator") || {};
              return a.doNotTrack || a.msDoNotTrack || "unknown"
          }
          , function(a) {
              if (a = zu(a))
                  try {
                      for (var c = [], b = 0; b < Il.length; b += 1) {
                          var d = a(Il[b]);
                          c.push(d)
                      }
                      var e = c
                  } catch (f) {
                      e = []
                  }
              else
                  e = [];
              return e ? G("x", e) : ""
          }
          , function(a) {
              var c = void 0;
              void 0 === c && (c = jw);
              var b = n(a, "navigator") || {};
              c = z(u(b, n), c);
              c = G("x", c);
              try {
                  var d = n(a, "navigator.getGamepads");
                  var e = pa(d, "getGamepads") && a.navigator.getGamepads() || []
              } catch (f) {
                  e = []
              }
              return c + "x" + hb(e)
          }
          , hw, function(a) {
              a = n(a, "screen") || {};
              return G("x", z(u(a, n), iw))
          }
          , function(a) {
              return G("x", ao(a) || [])
          }
          , function(a) {
              a = no(a);
              return M(a) ? G("x", a) : a
          }
          , function(a) {
              return (a = po(a)) ? G("x", z(E(["", ["matches", "media"]], co), Ea(ft(a)))) : ""
          }
          ]));
          zb(function(a) {
              return {
                  O: function(c, b) {
                      var d = c.K
                        , e = Wa(a).C("fip");
                      e && d && (d.D("fip", e),
                      me(c, "fip", tb(e)));
                      b()
                  }
              }
          }, 9);
          Z("h", function(a) {
              return {
                  sa: function(c, b) {
                      var d = c.Ti;
                      bg(c) && d && J(a).D("isEU", n(d, "settings.eu"));
                      b()
                  }
              }
          }, 3);
          hd.push(Kv);
          Ua.push(rw);
          aa.push(sw);
          ac({
              wj: {
                  ea: "yaDisableGDPR"
              },
              xj: {
                  ea: "yaGDPRLang"
              }
          });
          pg.push(function(a, c) {
              return {
                  O: E([a, c], On)
              }
          });
          Ze.push("gdpr");
          Ze.push("gdpr_popup");
          Fg.push(function(a, c) {
              var b = ke(a);
              b = le(b);
              if (ka(yc(vw), b).length)
                  return !0;
              b = c(a, "gdpr");
              return H(b, [Rc, uw])
          });
          zb(km, 5);
          Z("1", km, 6);
          sa.c = cd;
          wa.c = wb;
          $c("w", wf, 3);
          $c("cm", wf, 1);
          $c("wv", wf, 1);
          Z("1", Th, 7);
          zb(Th, 7);
          Yc.push(B("hcp", Rh));
          Ua.push(B("p.ot", zw));
          Ua.push(Hb("cta", Aw, !0));
          Z("n", function(a) {
              var c = J(a);
              return {
                  O: function(b, d) {
                      var e = b.N || {}
                        , f = c.C("cta")
                        , g = c.C("cta.e");
                      if (f || g) {
                          e.L || (e.L = {});
                          e.L.__ym || (e.L.__ym = {});
                          var h = {};
                          f ? (f = z(function(k) {
                              var l, m = n(k, "topic");
                              k = n(k, "version");
                              return l = {},
                              l.topic = m,
                              l.version = k,
                              l
                          }, f),
                          h.ct = f) : g && (h["ct.e"] = g);
                          A(e.L.__ym, h);
                          b.N = A(b.N || {}, e)
                      }
                      d()
                  }
              }
          }, 7);
          Z("n", hg, 8);
          aa.push(Bw);
          Z("g", function(a, c) {
              return {
                  O: function(b, d) {
                      var e = b.J;
                      if (e && e["page-url"]) {
                          var f = e["page-url"];
                          if (hn(f))
                              na(c, function(g) {
                                  var h, k, l = n(g, "settings.goal_values");
                                  if (l) {
                                      var m = (g = Ub(a, f).query) ? uk(g) : void 0;
                                      if (m) {
                                          g = b.N || {};
                                          g.L || (g.L = {});
                                          g.L.__ym || (g.L.__ym = {});
                                          var p = Mh(f) ? ln : kn;
                                          l = Dw(l);
                                          if (m = jb(u(m, p), l)) {
                                              l = (h = {},
                                              h.cgd = (k = {},
                                              k.rg = m.id,
                                              k),
                                              h);
                                              a: {
                                                  if (h = a.document.body) {
                                                      k = m.price_patterns;
                                                      m = Cw(m.id);
                                                      if (m.Fb) {
                                                          if (!Sj(a, m.Fb.element)) {
                                                              h = Lh(m.Fb);
                                                              break a
                                                          }
                                                          m.Fb = void 0
                                                      }
                                                      var q = null
                                                        , r = null;
                                                      for (p = 0; p < k.length; p += 1) {
                                                          var t = k[p]
                                                            , y = t[1];
                                                          "p" === t[0] ? (q = a,
                                                          q = (y = en(y)) ? n(q, "document.evaluate") ? q.document.evaluate(y, q.document, null, q.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null,
                                                          r = "x") : rd(a) && (q = jc(y, h),
                                                          r = "c");
                                                          if (q && r) {
                                                              m.Fb = {
                                                                  element: q,
                                                                  Ad: r
                                                              };
                                                              h = Lh(m.Fb);
                                                              break a
                                                          }
                                                      }
                                                  }
                                                  h = void 0
                                              }
                                              h && (l.cgd.gp = xd(De(h.Pi)),
                                              l.cgd.mg = h.Ad);
                                              A(g.L.__ym, l);
                                              b.N = A(b.N || {}, g)
                                          }
                                      }
                                  }
                                  d()
                              })["catch"](w(Tc(d), D(a, "a.g.v")));
                          else
                              d()
                      } else
                          d()
                  }
              }
          }, -2);
          Yc.push(B("cdl", function(a) {
              var c = J(a).Ja;
              if (a = n(a, "navigator.cookieDeprecationLabel"))
                  try {
                      a.getValue().then(u("cdl", c), E(["cdl", "e"], c))
                  } catch (b) {
                      c("cdl", "d")
                  }
              else
                  c("cdl", "na")
          }));
          ac({
              ih: {
                  ea: "disableYtm",
                  Xa: yb
              }
          });
          sa.ytm = Al;
          Ua.push(B("p.ytm", function(a, c) {
              if (!c.ih)
                  return na(c, function(b) {
                      if (n(b, "settings.aytm"))
                          return Ym(a),
                          b = hf(a, "ytm"),
                          wb(a, b)({
                              V: {
                                  ha: ["ytm"],
                                  gb: !0
                              }
                          }, [ua.Na + "//" + Xb + "/ytm-config/" + c.id]).then(function(d) {
                              var e = d.fb;
                              if (!ia(e))
                                  return C;
                              d = lc(w(V("conditions"), Eb(function(g) {
                                  var h = e.variables[g["var"]];
                                  g = g.target;
                                  return h && "event" === h.type && S(g) && H(g, Ew) && g
                              }), Ea), e.triggers);
                              var f = zm(a, "" + c.id);
                              f = Dm(a, e, f).dispatchEvent;
                              d = $m(a, f, d);
                              f(uf(a, "ytm.init"));
                              return d
                          })
                  })["catch"](D(a, "ytm.s"))
          }));
          Ua.push(Fw);
          sa.pis = Bl;
          wa.pis = wb;
          Ua.push(B("p.sci", function(a, c) {
              return na(c, function(b) {
                  var d = n(b, "settings.pis");
                  if (d && !sd(b)) {
                      b = J(a);
                      var e = b.C;
                      b = b.D;
                      e = e("pis");
                      if (ba(e))
                          return e = qa(a, "pis"),
                          b("pis", "0"),
                          e({
                              V: {
                                  ha: ["pis"]
                              }
                          }, [d]).then(E(["pis", "1"], b), Tc(E(["pis", "a"], b)))
                  }
              })["catch"](D(a, "pis"))
          }));
          sa.pic = Al;
          wa.pic = wb;
          Ua.push(Gw);
          Yc.push(Hw);
          aa.push(function(a, c) {
              var b = mm(a)
                , d = L(c)
                , e = b[d];
              e || (e = {},
              b[d] = e);
              e.ei = !0;
              if (b = e.jg)
                  d = nm(a),
                  x(d, b)
          });
          Ua.unshift(Hb("is", function(a, c) {
              na(c, function(b) {
                  (Xe(a) || n(b, "settings.sm")) && yh(a, "tag_debug", L(c), b)
              })
          }));
          x(Xa(va)(window), Yc);
          if (window.Ya && nf) {
              var om = ua.fc;
              window.Ya[om] = nf;
              Pt(window);
              x(w(Oe([window, window.Ya[om]]), va), Yg)
          }
          (function(a) {
              var c = n(a, "ym");
              if (c) {
                  var b = n(c, "a");
                  b || (c.a = [],
                  b = c.a);
                  var d = nm(a);
                  nd(a, b, function(e) {
                      e.ra.F(d)
                  }, !0)
              }
          }
          )(window)
      }
      )()
  } catch (nf) {}
  ;
}
).call(this)
