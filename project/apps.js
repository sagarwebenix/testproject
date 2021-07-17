(() => {
    var gs = Object.create,
        Ae = Object.defineProperty,
        ys = Object.getPrototypeOf,
        ws = Object.prototype.hasOwnProperty,
        bs = Object.getOwnPropertyNames,
        Ts = Object.getOwnPropertyDescriptor,
        ki = (i) => Ae(i, "__esModule", { value: !0 }),
        Ss = (i, e) => () => (e || ((e = { exports: {} }), i(e.exports, e)), e.exports),
        xs = (i, e) => {
            ki(i);
            for (var t in e) Ae(i, t, { get: e[t], enumerable: !0 });
        },
        Es = (i, e, t) => {
            if ((ki(i), (e && typeof e == "object") || typeof e == "function")) for (let r of bs(e)) !ws.call(i, r) && r !== "default" && Ae(i, r, { get: () => e[r], enumerable: !(t = Ts(e, r)) || t.enumerable });
            return i;
        },
        Cs = (i) => (i && i.__esModule ? i : Es(Ae(i != null ? gs(ys(i)) : {}, "default", { value: i, enumerable: !0 }), i)),
        ns = Ss((rs, We) => {
            !(function (i, e) {
                typeof define == "function" && define.amd
                    ? define([], function () {
                          return (i.svg4everybody = e());
                      })
                    : typeof We == "object" && We.exports
                    ? (We.exports = e())
                    : (i.svg4everybody = e());
            })(rs, function () {
                function i(n, s, a) {
                    if (a) {
                        var o = document.createDocumentFragment(),
                            l = !s.hasAttribute("viewBox") && a.getAttribute("viewBox");
                        l && s.setAttribute("viewBox", l);
                        for (var u = a.cloneNode(!0); u.childNodes.length; ) o.appendChild(u.firstChild);
                        n.appendChild(o);
                    }
                }
                function e(n) {
                    (n.onreadystatechange = function () {
                        if (n.readyState === 4) {
                            var s = n._cachedDocument;
                            s || ((s = n._cachedDocument = document.implementation.createHTMLDocument("")), (s.body.innerHTML = n.responseText), (n._cachedTarget = {})),
                                n._embeds.splice(0).map(function (a) {
                                    var o = n._cachedTarget[a.id];
                                    o || (o = n._cachedTarget[a.id] = s.getElementById(a.id)), i(a.parent, a.svg, o);
                                });
                        }
                    }),
                        n.onreadystatechange();
                }
                function t(n) {
                    function s() {
                        for (var C = 0; C < b.length; ) {
                            var w = b[C],
                                v = w.parentNode,
                                p = r(v),
                                g = w.getAttribute("xlink:href") || w.getAttribute("href");
                            if ((!g && o.attributeName && (g = w.getAttribute(o.attributeName)), p && g)) {
                                if (a)
                                    if (!o.validate || o.validate(g, p, w)) {
                                        v.removeChild(w);
                                        var y = g.split("#"),
                                            x = y.shift(),
                                            S = y.join("#");
                                        if (x.length) {
                                            var E = h[x];
                                            E || ((E = h[x] = new XMLHttpRequest()), E.open("GET", x), E.send(), (E._embeds = [])), E._embeds.push({ parent: v, svg: p, id: S }), e(E);
                                        } else i(v, p, document.getElementById(S));
                                    } else ++C, ++T;
                            } else ++C;
                        }
                        (!b.length || b.length - T > 0) && m(s, 67);
                    }
                    var a,
                        o = Object(n),
                        l = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
                        u = /\bAppleWebKit\/(\d+)\b/,
                        c = /\bEdge\/12\.(\d+)\b/,
                        f = /\bEdge\/.(\d+)\b/,
                        d = window.top !== window.self;
                    a = "polyfill" in o ? o.polyfill : l.test(navigator.userAgent) || (navigator.userAgent.match(c) || [])[1] < 10547 || (navigator.userAgent.match(u) || [])[1] < 537 || (f.test(navigator.userAgent) && d);
                    var h = {},
                        m = window.requestAnimationFrame || setTimeout,
                        b = document.getElementsByTagName("use"),
                        T = 0;
                    a && s();
                }
                function r(n) {
                    for (var s = n; s.nodeName.toLowerCase() !== "svg" && (s = s.parentNode); );
                    return s;
                }
                return t;
            });
        });
    function Pe(i) {
        return (
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? (Pe = function (e) {
                      return typeof e;
                  })
                : (Pe = function (e) {
                      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            Pe(i)
        );
    }
    function Mi(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function Li(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
        }
    }
    function Ai(i, e, t) {
        return e && Li(i.prototype, e), t && Li(i, t), i;
    }
    function Pi(i, e, t) {
        return e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i;
    }
    function Oe(i, e) {
        return ks(i) || Ms(i, e) || Oi(i, e) || Ls();
    }
    function Is(i) {
        return As(i) || Ps(i) || Oi(i) || Os();
    }
    function As(i) {
        if (Array.isArray(i)) return Xe(i);
    }
    function ks(i) {
        if (Array.isArray(i)) return i;
    }
    function Ps(i) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(i)) return Array.from(i);
    }
    function Ms(i, e) {
        if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(i))) return;
        var t = [],
            r = !0,
            n = !1,
            s = void 0;
        try {
            for (var a = i[Symbol.iterator](), o; !(r = (o = a.next()).done) && !(t.push(o.value), e && t.length === e); r = !0);
        } catch (l) {
            (n = !0), (s = l);
        } finally {
            try {
                !r && a.return != null && a.return();
            } finally {
                if (n) throw s;
            }
        }
        return t;
    }
    function Oi(i, e) {
        if (!i) return;
        if (typeof i == "string") return Xe(i, e);
        var t = Object.prototype.toString.call(i).slice(8, -1);
        if ((t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set")) return Array.from(i);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Xe(i, e);
    }
    function Xe(i, e) {
        (e == null || e > i.length) && (e = i.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = i[t];
        return r;
    }
    function Os() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function Ls() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var A = (function () {
            function i(e) {
                Mi(this, i), (this.mAttr = "data-" + e.dataName), (this.mCaptureEvents = ["mouseenter", "mouseleave"]), (this.el = e.el);
            }
            return (
                Ai(i, [
                    {
                        key: "mInit",
                        value: function (t) {
                            var r = this;
                            (this.modules = t),
                                (this.mCheckEventTarget = this.mCheckEventTarget.bind(this)),
                                this.events &&
                                    Object.keys(this.events).forEach(function (n) {
                                        return r.mAddEvent(n);
                                    });
                        },
                    },
                    {
                        key: "mUpdate",
                        value: function (t) {
                            this.modules = t;
                        },
                    },
                    {
                        key: "mDestroy",
                        value: function () {
                            var t = this;
                            this.events &&
                                Object.keys(this.events).forEach(function (r) {
                                    return t.mRemoveEvent(r);
                                });
                        },
                    },
                    {
                        key: "mAddEvent",
                        value: function (t) {
                            var r = !!this.mCaptureEvents.includes(t);
                            this.el.addEventListener(t, this.mCheckEventTarget, r);
                        },
                    },
                    {
                        key: "mRemoveEvent",
                        value: function (t) {
                            var r = !!this.mCaptureEvents.includes(t);
                            this.el.removeEventListener(t, this.mCheckEventTarget, r);
                        },
                    },
                    {
                        key: "mCheckEventTarget",
                        value: function (t) {
                            var r = this.events[t.type];
                            if (typeof r == "string") this[r](t);
                            else {
                                var n = "[" + this.mAttr + "]",
                                    s = t.target;
                                if (this.mCaptureEvents.includes(t.type)) s.matches(n) && this.mCallEventMethod(t, r, s);
                                else for (; s && s !== document && !(s.matches(n) && this.mCallEventMethod(t, r, s) != "undefined"); ) s = s.parentNode;
                            }
                        },
                    },
                    {
                        key: "mCallEventMethod",
                        value: function (t, r, n) {
                            var s = n.getAttribute(this.mAttr);
                            if (r.hasOwnProperty(s)) {
                                var a = r[s];
                                t.hasOwnProperty("currentTarget") || Object.defineProperty(t, "currentTarget", { value: n }), t.hasOwnProperty("curTarget") || Object.defineProperty(t, "curTarget", { value: n }), this[a](t);
                            }
                        },
                    },
                    {
                        key: "$",
                        value: function (t, r) {
                            var n = t.indexOf("."),
                                s = t.indexOf("#"),
                                a = t.indexOf("["),
                                o = [n, s, a].filter(function (d) {
                                    return d != -1;
                                }),
                                l = !1,
                                u = t,
                                c = "",
                                f = this.el;
                            return o.length && ((l = Math.min.apply(Math, Is(o))), (u = t.slice(0, l)), (c = t.slice(l))), Pe(r) == "object" && (f = r), f.querySelectorAll("[" + this.mAttr + "=" + u + "]" + c);
                        },
                    },
                    {
                        key: "parent",
                        value: function (t, r) {
                            for (var n = "[" + this.mAttr + "=" + t + "]", s = r.parentNode; s && s !== document; ) {
                                if (s.matches(n)) return s;
                                s = s.parentNode;
                            }
                        },
                    },
                    {
                        key: "getData",
                        value: function (t, r) {
                            var n = r || this.el;
                            return n.getAttribute(this.mAttr + "-" + t);
                        },
                    },
                    {
                        key: "setData",
                        value: function (t, r, n) {
                            var s = n || this.el;
                            return s.setAttribute(this.mAttr + "-" + t, r);
                        },
                    },
                    {
                        key: "call",
                        value: function (t, r, n, s) {
                            var a = this;
                            r && !n && ((n = r), (r = !1)),
                                this.modules[n] &&
                                    (s
                                        ? this.modules[n][s] && this.modules[n][s][t](r)
                                        : Object.keys(this.modules[n]).forEach(function (o) {
                                              a.modules[n][o][t](r);
                                          }));
                        },
                    },
                    {
                        key: "on",
                        value: function (t, r, n, s) {
                            var a = this;
                            this.modules[r] &&
                                (s
                                    ? this.modules[r][s].el.addEventListener(t, function (o) {
                                          return n(o);
                                      })
                                    : Object.keys(this.modules[r]).forEach(function (o) {
                                          a.modules[r][o].el.addEventListener(t, function (l) {
                                              return n(l);
                                          });
                                      }));
                        },
                    },
                    { key: "init", value: function () {} },
                    { key: "destroy", value: function () {} },
                ]),
                i
            );
        })(),
        Ds = (function () {
            function i(e) {
                Mi(this, i), this.app, (this.modules = e.modules), (this.currentModules = {}), (this.activeModules = {}), (this.newModules = {}), (this.moduleId = 0);
            }
            return (
                Ai(i, [
                    {
                        key: "init",
                        value: function (t, r) {
                            var n = this,
                                s = r || document,
                                a = s.querySelectorAll("*");
                            t && !this.app && (this.app = t),
                                (this.activeModules.app = { app: this.app }),
                                a.forEach(function (o) {
                                    Array.from(o.attributes).forEach(function (l) {
                                        if (l.name.startsWith("data-module")) {
                                            var u = !1,
                                                c = l.name.split("-").splice(2),
                                                f = n.toCamel(c);
                                            if ((n.modules[f] ? (u = !0) : n.modules[n.toUpper(f)] && ((f = n.toUpper(f)), (u = !0)), u)) {
                                                var d = { el: o, name: f, dataName: c.join("-") },
                                                    h = new n.modules[f](d),
                                                    m = l.value;
                                                m || (n.moduleId++, (m = "m" + n.moduleId), o.setAttribute(l.name, m)), n.addActiveModule(f, m, h);
                                                var b = f + "-" + m;
                                                r ? (n.newModules[b] = h) : (n.currentModules[b] = h);
                                            }
                                        }
                                    });
                                }),
                                Object.entries(this.currentModules).forEach(function (o) {
                                    var l = Oe(o, 2),
                                        u = l[0],
                                        c = l[1];
                                    if (r) {
                                        var f = u.split("-"),
                                            d = f.shift(),
                                            h = f.pop();
                                        n.addActiveModule(d, h, c);
                                    } else n.initModule(c);
                                });
                        },
                    },
                    {
                        key: "initModule",
                        value: function (t) {
                            t.mInit(this.activeModules), t.init();
                        },
                    },
                    {
                        key: "addActiveModule",
                        value: function (t, r, n) {
                            this.activeModules[t] ? Object.assign(this.activeModules[t], Pi({}, r, n)) : (this.activeModules[t] = Pi({}, r, n));
                        },
                    },
                    {
                        key: "update",
                        value: function (t) {
                            var r = this;
                            this.init(this.app, t),
                                Object.entries(this.currentModules).forEach(function (n) {
                                    var s = Oe(n, 2),
                                        a = s[0],
                                        o = s[1];
                                    o.mUpdate(r.activeModules);
                                }),
                                Object.entries(this.newModules).forEach(function (n) {
                                    var s = Oe(n, 2),
                                        a = s[0],
                                        o = s[1];
                                    r.initModule(o);
                                }),
                                Object.assign(this.currentModules, this.newModules);
                        },
                    },
                    {
                        key: "destroy",
                        value: function (t) {
                            t ? this.destroyScope(t) : this.destroyModules();
                        },
                    },
                    {
                        key: "destroyScope",
                        value: function (t) {
                            var r = this,
                                n = t.querySelectorAll("*");
                            n.forEach(function (s) {
                                Array.from(s.attributes).forEach(function (a) {
                                    if (a.name.startsWith("data-module")) {
                                        var o = a.value,
                                            l = a.name.split("-").splice(2),
                                            u = r.toCamel(l) + "-" + o,
                                            c = !1;
                                        r.currentModules[u] ? (c = !0) : r.currentModules[r.toUpper(u)] && ((u = r.toUpper(u)), (c = !0)), c && (r.destroyModule(r.currentModules[u]), delete r.currentModules[u]);
                                    }
                                });
                            }),
                                (this.activeModules = {}),
                                (this.newModules = {});
                        },
                    },
                    {
                        key: "destroyModules",
                        value: function () {
                            var t = this;
                            Object.entries(this.currentModules).forEach(function (r) {
                                var n = Oe(r, 2),
                                    s = n[0],
                                    a = n[1];
                                t.destroyModule(a);
                            }),
                                (this.currentModules = []);
                        },
                    },
                    {
                        key: "destroyModule",
                        value: function (t) {
                            t.mDestroy(), t.destroy();
                        },
                    },
                    {
                        key: "toCamel",
                        value: function (t) {
                            var r = this;
                            return t.reduce(function (n, s) {
                                return n + r.toUpper(s);
                            });
                        },
                    },
                    {
                        key: "toUpper",
                        value: function (t) {
                            return t.charAt(0).toUpperCase() + t.slice(1);
                        },
                    },
                ]),
                i
            );
        })(),
        Ii = Ds,
        hi = {};
    xs(hi, {
        Accordion: () => Bn,
        Carousel: () => gn,
        CarouselBlockquote: () => Tn,
        CarouselCaseStudy: () => wn,
        CarouselTeam: () => xn,
        ClientModal: () => Wn,
        ClientSelect: () => zn,
        ClientToggler: () => Hn,
        Cursor: () => nr,
        Form: () => $n,
        Load: () => Ni,
        Map: () => Fn,
        Menu: () => Pn,
        NextProjects: () => Gn,
        Scroll: () => tr,
        Split: () => In,
        VideoModal: () => Cn,
        VideoToggler: () => Mn,
        VimeoPlayer: () => is,
    });
    var B = document.documentElement,
        fo = document.body,
        ho = B.hasAttribute("data-debug");
    function Bs(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function Di(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
        }
    }
    function _s(i, e, t) {
        return e && Di(i.prototype, e), t && Di(i, t), i;
    }
    function Fs(i, e) {
        return zs(i) || Ns(i, e) || $s(i, e) || js();
    }
    function zs(i) {
        if (Array.isArray(i)) return i;
    }
    function Ns(i, e) {
        if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(i))) return;
        var t = [],
            r = !0,
            n = !1,
            s = void 0;
        try {
            for (var a = i[Symbol.iterator](), o; !(r = (o = a.next()).done) && !(t.push(o.value), e && t.length === e); r = !0);
        } catch (l) {
            (n = !0), (s = l);
        } finally {
            try {
                !r && a.return != null && a.return();
            } finally {
                if (n) throw s;
            }
        }
        return t;
    }
    function $s(i, e) {
        if (!i) return;
        if (typeof i == "string") return Bi(i, e);
        var t = Object.prototype.toString.call(i).slice(8, -1);
        if ((t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set")) return Array.from(i);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Bi(i, e);
    }
    function Bi(i, e) {
        (e == null || e > i.length) && (e = i.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = i[t];
        return r;
    }
    function js() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var Rs = (function () {
            function i(e) {
                Bs(this, i),
                    (this.defaults = {
                        name: "load",
                        loadingClass: "is-loading",
                        loadedClass: "is-loaded",
                        readyClass: "is-ready",
                        transitionsPrefix: "is-",
                        transitionsHistory: !0,
                        enterDelay: 0,
                        exitDelay: 0,
                        loadedDelay: 0,
                        isLoaded: !1,
                        isEntered: !1,
                        isUrl: !1,
                        transitionContainer: null,
                    }),
                    Object.assign(this, this.defaults, e),
                    (this.options = e),
                    (this.namespace = "modular"),
                    (this.html = document.documentElement),
                    (this.href = window.location.href),
                    (this.container = "data-" + this.name + "-container"),
                    (this.subContainer = !1),
                    (this.prevTransition = null),
                    (this.loadAttributes = ["src", "srcset", "style", "href"]),
                    (this.isInserted = !1),
                    (this.isLoading = !1),
                    (this.enterTimeout = !1),
                    (this.controller = new AbortController()),
                    (this.classContainer = this.html),
                    (this.isChrome = navigator.userAgent.indexOf("Chrome") != -1),
                    this.init();
            }
            return (
                _s(i, [
                    {
                        key: "init",
                        value: function () {
                            var t = this;
                            window.addEventListener(
                                "popstate",
                                function (r) {
                                    return t.checkState(r);
                                },
                                !1
                            ),
                                this.html.addEventListener(
                                    "click",
                                    function (r) {
                                        return t.checkClick(r);
                                    },
                                    !1
                                ),
                                this.loadEls(document);
                        },
                    },
                    {
                        key: "checkClick",
                        value: function (t) {
                            if (!t.ctrlKey && !t.metaKey)
                                for (var r = t.target; r && r !== document; ) {
                                    if (r.matches("a") && r.getAttribute("download") == null) {
                                        var n = r.getAttribute("href");
                                        !n.startsWith("#") && !n.startsWith("mailto:") && !n.startsWith("tel:") && (t.preventDefault(), this.reset(), this.getClickOptions(r));
                                        break;
                                    }
                                    r = r.parentNode;
                                }
                        },
                    },
                    {
                        key: "checkState",
                        value: function () {
                            this.reset(), this.getStateOptions();
                        },
                    },
                    {
                        key: "reset",
                        value: function () {
                            this.isLoading && (this.controller.abort(), (this.isLoading = !1), (this.controller = new AbortController())),
                                window.clearTimeout(this.enterTimeout),
                                this.isInserted && this.removeContainer(),
                                (this.classContainer = this.html),
                                Object.assign(this, this.defaults, this.options);
                        },
                    },
                    {
                        key: "getClickOptions",
                        value: function (t) {
                            (this.transition = t.getAttribute("data-" + this.name)), (this.isUrl = t.getAttribute("data-" + this.name + "-url"));
                            var r = t.getAttribute("href"),
                                n = t.getAttribute("target");
                            if (n == "_blank") {
                                window.open(r, "_blank");
                                return;
                            }
                            if (this.transition == "false") {
                                window.location = r;
                                return;
                            }
                            this.setOptions(r, !0);
                        },
                    },
                    {
                        key: "getStateOptions",
                        value: function () {
                            this.transitionsHistory ? (this.transition = history.state) : (this.transition = !1);
                            var t = window.location.href;
                            this.setOptions(t);
                        },
                    },
                    {
                        key: "goTo",
                        value: function (t, r, n) {
                            this.reset(), (this.transition = r), (this.isUrl = n), this.setOptions(t, !0);
                        },
                    },
                    {
                        key: "setOptions",
                        value: function (t, r) {
                            var n = "[" + this.container + "]",
                                s;
                            this.transition &&
                                this.transition != "true" &&
                                ((this.transitionContainer = "[" + this.container + '="' + this.transition + '"]'),
                                (this.loadingClass = this.transitions[this.transition].loadingClass || this.loadingClass),
                                (this.loadedClass = this.transitions[this.transition].loadedClass || this.loadedClass),
                                (this.readyClass = this.transitions[this.transition].readyClass || this.readyClass),
                                (this.transitionsPrefix = this.transitions[this.transition].transitionsPrefix || this.transitionsPrefix),
                                (this.enterDelay = this.transitions[this.transition].enterDelay || this.enterDelay),
                                (this.exitDelay = this.transitions[this.transition].exitDelay || this.exitDelay),
                                (this.loadedDelay = this.transitions[this.transition].loadedDelay || this.loadedDelay),
                                (s = document.querySelector(this.transitionContainer))),
                                s
                                    ? ((n = this.transitionContainer),
                                      (this.oldContainer = s),
                                      (this.classContainer = this.oldContainer.parentNode),
                                      this.subContainer || history.replaceState(this.transition, null, this.href),
                                      (this.subContainer = !0))
                                    : ((this.oldContainer = document.querySelector(n)), this.subContainer && history.replaceState(this.prevTransition, null, this.href), (this.subContainer = !1)),
                                (this.href = t),
                                (this.parentContainer = this.oldContainer.parentNode),
                                this.isUrl === "" || (this.isUrl != null && this.isUrl != "false" && this.isUrl != !1)
                                    ? history.pushState(this.transition, null, t)
                                    : (this.oldContainer.classList.add("is-old"), this.setLoading(), this.startEnterDelay(), this.loadHref(t, n, r));
                        },
                    },
                    {
                        key: "setLoading",
                        value: function () {
                            this.classContainer.classList.remove(this.loadedClass, this.readyClass),
                                this.classContainer.classList.add(this.loadingClass),
                                this.classContainer.classList.remove(this.transitionsPrefix + this.prevTransition),
                                this.transition && this.classContainer.classList.add(this.transitionsPrefix + this.transition),
                                this.subContainer || (this.prevTransition = this.transition);
                            var t = new Event(this.namespace + "loading");
                            window.dispatchEvent(t);
                        },
                    },
                    {
                        key: "startEnterDelay",
                        value: function () {
                            var t = this;
                            this.enterTimeout = window.setTimeout(function () {
                                (t.isEntered = !0), t.isLoaded && t.transitionContainers();
                            }, this.enterDelay);
                        },
                    },
                    {
                        key: "loadHref",
                        value: function (t, r, n) {
                            var s = this;
                            this.isLoading = !0;
                            var a = this.controller.signal;
                            fetch(t, { signal: a })
                                .then(function (o) {
                                    return o.text();
                                })
                                .then(function (o) {
                                    n && history.pushState(s.transition, null, t);
                                    var l = new DOMParser();
                                    (s.data = l.parseFromString(o, "text/html")),
                                        (s.newContainer = s.data.querySelector(r)),
                                        s.newContainer.classList.add("is-new"),
                                        (s.parentNewContainer = s.newContainer.parentNode),
                                        s.hideContainer(),
                                        s.parentContainer.insertBefore(s.newContainer, s.oldContainer),
                                        (s.isInserted = !0),
                                        s.setSvgs(),
                                        (s.isLoaded = !0),
                                        s.isEntered && s.transitionContainers(),
                                        s.loadEls(s.newContainer),
                                        (s.isLoading = !1);
                                })
                                .catch(function (o) {
                                    window.location = t;
                                });
                        },
                    },
                    {
                        key: "transitionContainers",
                        value: function () {
                            var t = this;
                            this.setAttributes(),
                                this.showContainer(),
                                this.setLoaded(),
                                setTimeout(function () {
                                    t.removeContainer(), t.setReady();
                                }, this.exitDelay);
                        },
                    },
                    {
                        key: "setSvgs",
                        value: function () {
                            if (this.isChrome) {
                                var t = this.newContainer.querySelectorAll("use");
                                t.length &&
                                    t.forEach(function (r) {
                                        var n = r.getAttribute("xlink:href");
                                        if (n) r.parentNode.innerHTML = '<use xlink:href="' + n + '"></use>';
                                        else {
                                            var s = r.getAttribute("href");
                                            s && (r.parentNode.innerHTML = '<use href="' + s + '"></use>');
                                        }
                                    });
                            }
                        },
                    },
                    {
                        key: "setAttributes",
                        value: function () {
                            var t = this,
                                r = this.data.getElementsByTagName("title")[0],
                                n = this.data.head.querySelector('meta[name="description"]'),
                                s = document.head.querySelector('meta[name="description"]'),
                                a,
                                o;
                            this.subContainer ? ((o = this.parentNewContainer), (a = document.querySelector(this.transitionContainer).parentNode)) : ((o = this.data.querySelector("html")), (a = document.querySelector("html")));
                            var l = Object.assign({}, o.dataset);
                            r && (document.title = r.innerText),
                                s && n && s.setAttribute("content", n.getAttribute("content")),
                                l &&
                                    Object.entries(l).forEach(function (u) {
                                        var c = Fs(u, 2),
                                            f = c[0],
                                            d = c[1];
                                        a.setAttribute("data-" + t.toDash(f), d);
                                    });
                        },
                    },
                    {
                        key: "toDash",
                        value: function (t) {
                            return t
                                .split(/(?=[A-Z])/)
                                .join("-")
                                .toLowerCase();
                        },
                    },
                    {
                        key: "hideContainer",
                        value: function () {
                            (this.newContainer.style.visibility = "hidden"), (this.newContainer.style.height = 0), (this.newContainer.style.overflow = "hidden");
                        },
                    },
                    {
                        key: "showContainer",
                        value: function () {
                            (this.newContainer.style.visibility = ""), (this.newContainer.style.height = ""), (this.newContainer.style.overflow = "");
                        },
                    },
                    {
                        key: "loadEls",
                        value: function (t) {
                            var r = this,
                                n = [];
                            this.loadAttributes.forEach(function (s) {
                                var a = "data-" + r.name + "-" + s,
                                    o = t.querySelectorAll("[" + a + "]");
                                o.length &&
                                    o.forEach(function (l) {
                                        var u = l.getAttribute(a);
                                        if ((l.setAttribute(s, u), s == "src" || s == "srcset")) {
                                            var c = new Promise(function (f) {
                                                l.onload = function () {
                                                    return f(l);
                                                };
                                            });
                                            n.push(c);
                                        }
                                    });
                            }),
                                Promise.all(n).then(function (s) {
                                    var a = new Event(r.namespace + "images");
                                    window.dispatchEvent(a);
                                });
                        },
                    },
                    {
                        key: "setLoaded",
                        value: function () {
                            var t = this;
                            this.classContainer.classList.remove(this.loadingClass),
                                setTimeout(function () {
                                    t.classContainer.classList.add(t.loadedClass);
                                }, this.loadedDelay);
                            var r = new Event(this.namespace + "loaded");
                            window.dispatchEvent(r);
                        },
                    },
                    {
                        key: "removeContainer",
                        value: function () {
                            this.parentContainer.removeChild(this.oldContainer), this.newContainer.classList.remove("is-new"), (this.isInserted = !1);
                        },
                    },
                    {
                        key: "setReady",
                        value: function () {
                            this.classContainer.classList.add(this.readyClass);
                            var t = new Event(this.namespace + "ready");
                            window.dispatchEvent(t);
                        },
                    },
                    {
                        key: "on",
                        value: function (t, r) {
                            var n = this;
                            window.addEventListener(
                                this.namespace + t,
                                function () {
                                    switch (t) {
                                        case "loading":
                                            return r(n.transition, n.oldContainer);
                                        case "loaded":
                                            return r(n.transition, n.oldContainer, n.newContainer);
                                        case "ready":
                                            return r(n.transition, n.newContainer);
                                        default:
                                            return r();
                                    }
                                },
                                !1
                            );
                        },
                    },
                ]),
                i
            );
        })(),
        _i = Rs,
        zi = class extends A {
            constructor(i) {
                super(i);
            }
            init() {
                let i = new _i({ enterDelay: 900, transitions: { nextProjects: { enterDelay: 1600 } } });
                i.on("loading", (e, t) => {
                    this.call("close", null, "Menu"), B.classList.remove("is-animated");
                }),
                    i.on("loaded", (e, t, r) => {
                        this.call("destroy", t, "app"),
                            this.call("update", r, "app"),
                            setTimeout(() => {
                                B.classList.add("is-animated");
                            }, 1200);
                    });
            }
        },
        Ni = zi;
    function Ie(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function $i(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
        }
    }
    function De(i, e, t) {
        return e && $i(i.prototype, e), t && $i(i, t), i;
    }
    function Hs(i, e, t) {
        return e in i ? Object.defineProperty(i, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (i[e] = t), i;
    }
    function ji(i, e) {
        var t = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(i);
            e &&
                (r = r.filter(function (n) {
                    return Object.getOwnPropertyDescriptor(i, n).enumerable;
                })),
                t.push.apply(t, r);
        }
        return t;
    }
    function Ue(i) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e] != null ? arguments[e] : {};
            e % 2
                ? ji(Object(t), !0).forEach(function (r) {
                      Hs(i, r, t[r]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
                : ji(Object(t)).forEach(function (r) {
                      Object.defineProperty(i, r, Object.getOwnPropertyDescriptor(t, r));
                  });
        }
        return i;
    }
    function Fi(i, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        (i.prototype = Object.create(e && e.prototype, { constructor: { value: i, writable: !0, configurable: !0 } })), e && Ke(i, e);
    }
    function Q(i) {
        return (
            (Q = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            Q(i)
        );
    }
    function Ke(i, e) {
        return (
            (Ke =
                Object.setPrototypeOf ||
                function (r, n) {
                    return (r.__proto__ = n), r;
                }),
            Ke(i, e)
        );
    }
    function Vs() {
        if (typeof Reflect == "undefined" || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (i) {
            return !1;
        }
    }
    function Ri(i) {
        if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i;
    }
    function Ws(i, e) {
        return e && (typeof e == "object" || typeof e == "function") ? e : Ri(i);
    }
    function Hi(i) {
        var e = Vs();
        return function () {
            var r = Q(i),
                n;
            if (e) {
                var s = Q(this).constructor;
                n = Reflect.construct(r, arguments, s);
            } else n = r.apply(this, arguments);
            return Ws(this, n);
        };
    }
    function qs(i, e) {
        for (; !Object.prototype.hasOwnProperty.call(i, e) && !((i = Q(i)), i === null); );
        return i;
    }
    function J(i, e, t) {
        return (
            typeof Reflect != "undefined" && Reflect.get
                ? (J = Reflect.get)
                : (J = function (n, s, a) {
                      var o = qs(n, s);
                      if (!o) return;
                      var l = Object.getOwnPropertyDescriptor(o, s);
                      return l.get ? l.get.call(a) : l.value;
                  }),
            J(i, e, t || i)
        );
    }
    function ce(i, e) {
        return Gs(i) || Ys(i, e) || Vi(i, e) || Xs();
    }
    function Js(i) {
        return Us(i) || Ks(i) || Vi(i) || Qs();
    }
    function Us(i) {
        if (Array.isArray(i)) return Qe(i);
    }
    function Gs(i) {
        if (Array.isArray(i)) return i;
    }
    function Ks(i) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(i)) return Array.from(i);
    }
    function Ys(i, e) {
        if (typeof Symbol == "undefined" || !(Symbol.iterator in Object(i))) return;
        var t = [],
            r = !0,
            n = !1,
            s = void 0;
        try {
            for (var a = i[Symbol.iterator](), o; !(r = (o = a.next()).done) && !(t.push(o.value), e && t.length === e); r = !0);
        } catch (l) {
            (n = !0), (s = l);
        } finally {
            try {
                !r && a.return != null && a.return();
            } finally {
                if (n) throw s;
            }
        }
        return t;
    }
    function Vi(i, e) {
        if (!i) return;
        if (typeof i == "string") return Qe(i, e);
        var t = Object.prototype.toString.call(i).slice(8, -1);
        if ((t === "Object" && i.constructor && (t = i.constructor.name), t === "Map" || t === "Set")) return Array.from(i);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Qe(i, e);
    }
    function Qe(i, e) {
        (e == null || e > i.length) && (e = i.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = i[t];
        return r;
    }
    function Qs() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function Xs() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var fe = {
            el: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            reloadOnContextChange: !1,
            lerp: 0.1,
            class: "is-inview",
            scrollbarContainer: !1,
            scrollbarClass: "c-scrollbar",
            scrollingClass: "has-scroll-scrolling",
            draggingClass: "has-scroll-dragging",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            getSpeed: !1,
            getDirection: !1,
            scrollFromAnywhere: !1,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            resetNativeScroll: !0,
            tablet: { smooth: !1, direction: "vertical", gestureDirection: "vertical", breakpoint: 1024 },
            smartphone: { smooth: !1, direction: "vertical", gestureDirection: "vertical" },
        },
        Wi = (function () {
            function i() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                Ie(this, i),
                    Object.assign(this, fe, e),
                    (this.smartphone = fe.smartphone),
                    e.smartphone && Object.assign(this.smartphone, e.smartphone),
                    (this.tablet = fe.tablet),
                    e.tablet && Object.assign(this.tablet, e.tablet),
                    (this.namespace = "locomotive"),
                    (this.html = document.documentElement),
                    (this.windowHeight = window.innerHeight),
                    (this.windowWidth = window.innerWidth),
                    (this.windowMiddle = { x: this.windowWidth / 2, y: this.windowHeight / 2 }),
                    (this.els = {}),
                    (this.currentElements = {}),
                    (this.listeners = {}),
                    (this.hasScrollTicking = !1),
                    (this.hasCallEventSet = !1),
                    (this.checkScroll = this.checkScroll.bind(this)),
                    (this.checkResize = this.checkResize.bind(this)),
                    (this.checkEvent = this.checkEvent.bind(this)),
                    (this.instance = { scroll: { x: 0, y: 0 }, limit: { x: this.html.offsetHeight, y: this.html.offsetHeight }, currentElements: this.currentElements }),
                    this.isMobile ? (this.isTablet ? (this.context = "tablet") : (this.context = "smartphone")) : (this.context = "desktop"),
                    this.isMobile && (this.direction = this[this.context].direction),
                    this.direction === "horizontal" ? (this.directionAxis = "x") : (this.directionAxis = "y"),
                    this.getDirection && (this.instance.direction = null),
                    this.getDirection && (this.instance.speed = 0),
                    this.html.classList.add(this.initClass),
                    window.addEventListener("resize", this.checkResize, !1);
            }
            return (
                De(i, [
                    {
                        key: "init",
                        value: function () {
                            this.initEvents();
                        },
                    },
                    {
                        key: "checkScroll",
                        value: function () {
                            this.dispatchScroll();
                        },
                    },
                    {
                        key: "checkResize",
                        value: function () {
                            var t = this;
                            this.resizeTick ||
                                ((this.resizeTick = !0),
                                requestAnimationFrame(function () {
                                    t.resize(), (t.resizeTick = !1);
                                }));
                        },
                    },
                    { key: "resize", value: function () {} },
                    {
                        key: "checkContext",
                        value: function () {
                            if (!this.reloadOnContextChange) return;
                            (this.isMobile =
                                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) || this.windowWidth < this.tablet.breakpoint),
                                (this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint);
                            var t = this.context;
                            if ((this.isMobile ? (this.isTablet ? (this.context = "tablet") : (this.context = "smartphone")) : (this.context = "desktop"), t != this.context)) {
                                var r = t == "desktop" ? this.smooth : this[t].smooth,
                                    n = this.context == "desktop" ? this.smooth : this[this.context].smooth;
                                r != n && window.location.reload();
                            }
                        },
                    },
                    {
                        key: "initEvents",
                        value: function () {
                            var t = this;
                            (this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"))),
                                (this.setScrollTo = this.setScrollTo.bind(this)),
                                this.scrollToEls.forEach(function (r) {
                                    r.addEventListener("click", t.setScrollTo, !1);
                                });
                        },
                    },
                    {
                        key: "setScrollTo",
                        value: function (t) {
                            t.preventDefault(),
                                this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), { offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset")) });
                        },
                    },
                    { key: "addElements", value: function () {} },
                    {
                        key: "detectElements",
                        value: function (t) {
                            var r = this,
                                n = this.instance.scroll.y,
                                s = n + this.windowHeight,
                                a = this.instance.scroll.x,
                                o = a + this.windowWidth;
                            Object.entries(this.els).forEach(function (l) {
                                var u = ce(l, 2),
                                    c = u[0],
                                    f = u[1];
                                if ((f && (!f.inView || t) && (r.direction === "horizontal" ? o >= f.left && a < f.right && r.setInView(f, c) : s >= f.top && n < f.bottom && r.setInView(f, c)), f && f.inView))
                                    if (r.direction === "horizontal") {
                                        var d = f.right - f.left;
                                        (f.progress = (r.instance.scroll.x - (f.left - r.windowWidth)) / (d + r.windowWidth)), (o < f.left || a > f.right) && r.setOutOfView(f, c);
                                    } else {
                                        var h = f.bottom - f.top;
                                        (f.progress = (r.instance.scroll.y - (f.top - r.windowHeight)) / (h + r.windowHeight)), (s < f.top || n > f.bottom) && r.setOutOfView(f, c);
                                    }
                            }),
                                (this.hasScrollTicking = !1);
                        },
                    },
                    {
                        key: "setInView",
                        value: function (t, r) {
                            (this.els[r].inView = !0), t.el.classList.add(t.class), (this.currentElements[r] = t), t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"), t.repeat || (this.els[r].call = !1));
                        },
                    },
                    {
                        key: "setOutOfView",
                        value: function (t, r) {
                            var n = this;
                            (this.els[r].inView = !1),
                                Object.keys(this.currentElements).forEach(function (s) {
                                    s === r && delete n.currentElements[s];
                                }),
                                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                                t.repeat && t.el.classList.remove(t.class);
                        },
                    },
                    {
                        key: "dispatchCall",
                        value: function (t, r) {
                            (this.callWay = r),
                                (this.callValue = t.call.split(",").map(function (s) {
                                    return s.trim();
                                })),
                                (this.callObj = t),
                                this.callValue.length == 1 && (this.callValue = this.callValue[0]);
                            var n = new Event(this.namespace + "call");
                            this.el.dispatchEvent(n);
                        },
                    },
                    {
                        key: "dispatchScroll",
                        value: function () {
                            var t = new Event(this.namespace + "scroll");
                            this.el.dispatchEvent(t);
                        },
                    },
                    {
                        key: "setEvents",
                        value: function (t, r) {
                            this.listeners[t] || (this.listeners[t] = []);
                            var n = this.listeners[t];
                            n.push(r), n.length === 1 && this.el.addEventListener(this.namespace + t, this.checkEvent, !1), t === "call" && ((this.hasCallEventSet = !0), this.detectElements(!0));
                        },
                    },
                    {
                        key: "unsetEvents",
                        value: function (t, r) {
                            if (!this.listeners[t]) return;
                            var n = this.listeners[t],
                                s = n.indexOf(r);
                            if (s < 0) return;
                            n.splice(s, 1), n.index === 0 && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1);
                        },
                    },
                    {
                        key: "checkEvent",
                        value: function (t) {
                            var r = this,
                                n = t.type.replace(this.namespace, ""),
                                s = this.listeners[n];
                            if (!s || s.length === 0) return;
                            s.forEach(function (a) {
                                switch (n) {
                                    case "scroll":
                                        return a(r.instance);
                                    case "call":
                                        return a(r.callValue, r.callWay, r.callObj);
                                    default:
                                        return a();
                                }
                            });
                        },
                    },
                    { key: "startScroll", value: function () {} },
                    { key: "stopScroll", value: function () {} },
                    {
                        key: "setScroll",
                        value: function (t, r) {
                            this.instance.scroll = { x: 0, y: 0 };
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var t = this;
                            window.removeEventListener("resize", this.checkResize, !1),
                                Object.keys(this.listeners).forEach(function (r) {
                                    t.el.removeEventListener(t.namespace + r, t.checkEvent, !1);
                                }),
                                (this.listeners = {}),
                                this.scrollToEls.forEach(function (r) {
                                    r.removeEventListener("click", t.setScrollTo, !1);
                                }),
                                this.html.classList.remove(this.initClass);
                        },
                    },
                ]),
                i
            );
        })(),
        Zs = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    function qi(i, e) {
        return (e = { exports: {} }), i(e, e.exports), e.exports;
    }
    var Gi = qi(function (i, e) {
            (function () {
                function t() {
                    var r = window,
                        n = document;
                    if ("scrollBehavior" in n.documentElement.style && r.__forceSmoothScrollPolyfill__ !== !0) return;
                    var s = r.HTMLElement || r.Element,
                        a = 468,
                        o = { scroll: r.scroll || r.scrollTo, scrollBy: r.scrollBy, elementScroll: s.prototype.scroll || f, scrollIntoView: s.prototype.scrollIntoView },
                        l = r.performance && r.performance.now ? r.performance.now.bind(r.performance) : Date.now;
                    function u(p) {
                        var g = ["MSIE ", "Trident/", "Edge/"];
                        return new RegExp(g.join("|")).test(p);
                    }
                    var c = u(r.navigator.userAgent) ? 1 : 0;
                    function f(p, g) {
                        (this.scrollLeft = p), (this.scrollTop = g);
                    }
                    function d(p) {
                        return 0.5 * (1 - Math.cos(Math.PI * p));
                    }
                    function h(p) {
                        if (p === null || typeof p != "object" || p.behavior === void 0 || p.behavior === "auto" || p.behavior === "instant") return !0;
                        if (typeof p == "object" && p.behavior === "smooth") return !1;
                        throw new TypeError("behavior member of ScrollOptions " + p.behavior + " is not a valid value for enumeration ScrollBehavior.");
                    }
                    function m(p, g) {
                        if (g === "Y") return p.clientHeight + c < p.scrollHeight;
                        if (g === "X") return p.clientWidth + c < p.scrollWidth;
                    }
                    function b(p, g) {
                        var y = r.getComputedStyle(p, null)["overflow" + g];
                        return y === "auto" || y === "scroll";
                    }
                    function T(p) {
                        var g = m(p, "Y") && b(p, "Y"),
                            y = m(p, "X") && b(p, "X");
                        return g || y;
                    }
                    function C(p) {
                        for (; p !== n.body && T(p) === !1; ) p = p.parentNode || p.host;
                        return p;
                    }
                    function w(p) {
                        var g = l(),
                            y,
                            x,
                            S,
                            E = (g - p.startTime) / a;
                        (E = E > 1 ? 1 : E), (y = d(E)), (x = p.startX + (p.x - p.startX) * y), (S = p.startY + (p.y - p.startY) * y), p.method.call(p.scrollable, x, S), (x !== p.x || S !== p.y) && r.requestAnimationFrame(w.bind(r, p));
                    }
                    function v(p, g, y) {
                        var x,
                            S,
                            E,
                            k,
                            j = l();
                        p === n.body ? ((x = r), (S = r.scrollX || r.pageXOffset), (E = r.scrollY || r.pageYOffset), (k = o.scroll)) : ((x = p), (S = p.scrollLeft), (E = p.scrollTop), (k = f)),
                            w({ scrollable: x, method: k, startTime: j, startX: S, startY: E, x: g, y });
                    }
                    (r.scroll = r.scrollTo = function () {
                        if (arguments[0] === void 0) return;
                        if (h(arguments[0]) === !0) {
                            o.scroll.call(
                                r,
                                arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : r.scrollX || r.pageXOffset,
                                arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : r.scrollY || r.pageYOffset
                            );
                            return;
                        }
                        v.call(r, n.body, arguments[0].left !== void 0 ? ~~arguments[0].left : r.scrollX || r.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : r.scrollY || r.pageYOffset);
                    }),
                        (r.scrollBy = function () {
                            if (arguments[0] === void 0) return;
                            if (h(arguments[0])) {
                                o.scrollBy.call(
                                    r,
                                    arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0,
                                    arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0
                                );
                                return;
                            }
                            v.call(r, n.body, ~~arguments[0].left + (r.scrollX || r.pageXOffset), ~~arguments[0].top + (r.scrollY || r.pageYOffset));
                        }),
                        (s.prototype.scroll = s.prototype.scrollTo = function () {
                            if (arguments[0] === void 0) return;
                            if (h(arguments[0]) === !0) {
                                if (typeof arguments[0] == "number" && arguments[1] === void 0) throw new SyntaxError("Value could not be converted");
                                o.elementScroll.call(
                                    this,
                                    arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft,
                                    arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop
                                );
                                return;
                            }
                            var p = arguments[0].left,
                                g = arguments[0].top;
                            v.call(this, this, typeof p == "undefined" ? this.scrollLeft : ~~p, typeof g == "undefined" ? this.scrollTop : ~~g);
                        }),
                        (s.prototype.scrollBy = function () {
                            if (arguments[0] === void 0) return;
                            if (h(arguments[0]) === !0) {
                                o.elementScroll.call(
                                    this,
                                    arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
                                    arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop
                                );
                                return;
                            }
                            this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior });
                        }),
                        (s.prototype.scrollIntoView = function () {
                            if (h(arguments[0]) === !0) {
                                o.scrollIntoView.call(this, arguments[0] === void 0 ? !0 : arguments[0]);
                                return;
                            }
                            var p = C(this),
                                g = p.getBoundingClientRect(),
                                y = this.getBoundingClientRect();
                            p !== n.body
                                ? (v.call(this, p, p.scrollLeft + y.left - g.left, p.scrollTop + y.top - g.top), r.getComputedStyle(p).position !== "fixed" && r.scrollBy({ left: g.left, top: g.top, behavior: "smooth" }))
                                : r.scrollBy({ left: y.left, top: y.top, behavior: "smooth" });
                        });
                }
                i.exports = { polyfill: t };
            })();
        }),
        bo = Gi.polyfill,
        ea = (function (i) {
            Fi(t, i);
            var e = Hi(t);
            function t() {
                var r,
                    n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return (
                    Ie(this, t),
                    (r = e.call(this, n)),
                    r.resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"), window.scrollTo(0, 0)),
                    window.addEventListener("scroll", r.checkScroll, !1),
                    window.smoothscrollPolyfill === void 0 && ((window.smoothscrollPolyfill = Gi), window.smoothscrollPolyfill.polyfill()),
                    r
                );
            }
            return (
                De(t, [
                    {
                        key: "init",
                        value: function () {
                            (this.instance.scroll.y = window.pageYOffset), this.addElements(), this.detectElements(), J(Q(t.prototype), "init", this).call(this);
                        },
                    },
                    {
                        key: "checkScroll",
                        value: function () {
                            var n = this;
                            J(Q(t.prototype), "checkScroll", this).call(this),
                                this.getDirection && this.addDirection(),
                                this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                                (this.instance.scroll.y = window.pageYOffset),
                                Object.entries(this.els).length &&
                                    (this.hasScrollTicking ||
                                        (requestAnimationFrame(function () {
                                            n.detectElements();
                                        }),
                                        (this.hasScrollTicking = !0)));
                        },
                    },
                    {
                        key: "addDirection",
                        value: function () {
                            window.pageYOffset > this.instance.scroll.y
                                ? this.instance.direction !== "down" && (this.instance.direction = "down")
                                : window.pageYOffset < this.instance.scroll.y && this.instance.direction !== "up" && (this.instance.direction = "up");
                        },
                    },
                    {
                        key: "addSpeed",
                        value: function () {
                            window.pageYOffset != this.instance.scroll.y ? (this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs)) : (this.instance.speed = 0);
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            Object.entries(this.els).length && ((this.windowHeight = window.innerHeight), this.updateElements());
                        },
                    },
                    {
                        key: "addElements",
                        value: function () {
                            var n = this;
                            this.els = {};
                            var s = this.el.querySelectorAll("[data-" + this.name + "]");
                            s.forEach(function (a, o) {
                                var l = a.getBoundingClientRect(),
                                    u = a.dataset[n.name + "Class"] || n.class,
                                    c = typeof a.dataset[n.name + "Id"] == "string" ? a.dataset[n.name + "Id"] : o,
                                    f = l.top + n.instance.scroll.y,
                                    d = l.left,
                                    h = l.right,
                                    m = f + a.offsetHeight,
                                    b = typeof a.dataset[n.name + "Offset"] == "string" ? a.dataset[n.name + "Offset"].split(",") : n.offset,
                                    T = a.dataset[n.name + "Repeat"],
                                    C = a.dataset[n.name + "Call"];
                                T == "false" ? (T = !1) : T != null ? (T = !0) : (T = n.repeat);
                                var w = n.getRelativeOffset(b),
                                    v = { el: a, id: c, class: u, top: f + w[0], bottom: m - w[1], left: d, right: h, offset: b, progress: 0, repeat: T, inView: !1, call: C };
                                (n.els[c] = v), a.classList.contains(u) && n.setInView(n.els[c], c);
                            });
                        },
                    },
                    {
                        key: "updateElements",
                        value: function () {
                            var n = this;
                            Object.entries(this.els).forEach(function (s) {
                                var a = ce(s, 2),
                                    o = a[0],
                                    l = a[1],
                                    u = l.el.getBoundingClientRect().top + n.instance.scroll.y,
                                    c = u + l.el.offsetHeight,
                                    f = n.getRelativeOffset(l.offset);
                                (n.els[o].top = u + f[0]), (n.els[o].bottom = c - f[1]);
                            }),
                                (this.hasScrollTicking = !1);
                        },
                    },
                    {
                        key: "getRelativeOffset",
                        value: function (n) {
                            var s = [0, 0];
                            if (n) for (var a = 0; a < n.length; a++) typeof n[a] == "string" ? (n[a].includes("%") ? (s[a] = parseInt((n[a].replace("%", "") * this.windowHeight) / 100)) : (s[a] = parseInt(n[a]))) : (s[a] = n[a]);
                            return s;
                        },
                    },
                    {
                        key: "scrollTo",
                        value: function (n) {
                            var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                                a = parseInt(s.offset) || 0,
                                o = s.callback ? s.callback : !1;
                            if (typeof n == "string") {
                                if (n === "top") n = this.html;
                                else if (n === "bottom") n = this.html.offsetHeight - window.innerHeight;
                                else if (((n = document.querySelector(n)), !n)) return;
                            } else if (typeof n == "number") n = parseInt(n);
                            else if (!(n && n.tagName)) {
                                console.warn("`target` parameter is not valid");
                                return;
                            }
                            if ((typeof n != "number" ? (a = n.getBoundingClientRect().top + a + this.instance.scroll.y) : (a = n + a), o)) {
                                a = a.toFixed();
                                var l = function u() {
                                    window.pageYOffset.toFixed() === a && (window.removeEventListener("scroll", u), o());
                                };
                                window.addEventListener("scroll", l);
                            }
                            window.scrollTo({ top: a, behavior: "smooth" });
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            this.addElements(), this.detectElements();
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            J(Q(t.prototype), "destroy", this).call(this), window.removeEventListener("scroll", this.checkScroll, !1);
                        },
                    },
                ]),
                t
            );
        })(Wi);
    var Yi = Object.getOwnPropertySymbols,
        ta = Object.prototype.hasOwnProperty,
        ia = Object.prototype.propertyIsEnumerable;
    function ra(i) {
        if (i == null) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(i);
    }
    function na() {
        try {
            if (!Object.assign) return !1;
            var i = new String("abc");
            if (((i[5] = "de"), Object.getOwnPropertyNames(i)[0] === "5")) return !1;
            for (var e = {}, t = 0; t < 10; t++) e["_" + String.fromCharCode(t)] = t;
            var r = Object.getOwnPropertyNames(e).map(function (s) {
                return e[s];
            });
            if (r.join("") !== "0123456789") return !1;
            var n = {};
            return (
                "abcdefghijklmnopqrst".split("").forEach(function (s) {
                    n[s] = s;
                }),
                !(Object.keys(Object.assign({}, n)).join("") !== "abcdefghijklmnopqrst")
            );
        } catch (s) {
            return !1;
        }
    }
    var sa = na()
        ? Object.assign
        : function (i, e) {
              for (var t, r = ra(i), n, s = 1; s < arguments.length; s++) {
                  t = Object(arguments[s]);
                  for (var a in t) ta.call(t, a) && (r[a] = t[a]);
                  if (Yi) {
                      n = Yi(t);
                      for (var o = 0; o < n.length; o++) ia.call(t, n[o]) && (r[n[o]] = t[n[o]]);
                  }
              }
              return r;
          };
    function Xi() {}
    Xi.prototype = {
        on: function (i, e, t) {
            var r = this.e || (this.e = {});
            return (r[i] || (r[i] = [])).push({ fn: e, ctx: t }), this;
        },
        once: function (i, e, t) {
            var r = this;
            function n() {
                r.off(i, n), e.apply(t, arguments);
            }
            return (n._ = e), this.on(i, n, t);
        },
        emit: function (i) {
            var e = [].slice.call(arguments, 1),
                t = ((this.e || (this.e = {}))[i] || []).slice(),
                r = 0,
                n = t.length;
            for (r; r < n; r++) t[r].fn.apply(t[r].ctx, e);
            return this;
        },
        off: function (i, e) {
            var t = this.e || (this.e = {}),
                r = t[i],
                n = [];
            if (r && e) for (var s = 0, a = r.length; s < a; s++) r[s].fn !== e && r[s].fn._ !== e && n.push(r[s]);
            return n.length ? (t[i] = n) : delete t[i], this;
        },
    };
    var aa = Xi,
        oa = qi(function (i, e) {
            (function () {
                var t;
                (t = e !== null ? e : this),
                    (t.Lethargy = (function () {
                        function r(n, s, a, o) {
                            (this.stability = n != null ? Math.abs(n) : 8),
                                (this.sensitivity = s != null ? 1 + Math.abs(s) : 100),
                                (this.tolerance = a != null ? 1 + Math.abs(a) : 1.1),
                                (this.delay = o != null ? o : 150),
                                (this.lastUpDeltas = function () {
                                    var l, u, c;
                                    for (c = [], l = 1, u = this.stability * 2; 1 <= u ? l <= u : l >= u; 1 <= u ? l++ : l--) c.push(null);
                                    return c;
                                }.call(this)),
                                (this.lastDownDeltas = function () {
                                    var l, u, c;
                                    for (c = [], l = 1, u = this.stability * 2; 1 <= u ? l <= u : l >= u; 1 <= u ? l++ : l--) c.push(null);
                                    return c;
                                }.call(this)),
                                (this.deltasTimestamp = function () {
                                    var l, u, c;
                                    for (c = [], l = 1, u = this.stability * 2; 1 <= u ? l <= u : l >= u; 1 <= u ? l++ : l--) c.push(null);
                                    return c;
                                }.call(this));
                        }
                        return (
                            (r.prototype.check = function (n) {
                                var s;
                                return (
                                    (n = n.originalEvent || n),
                                    n.wheelDelta != null ? (s = n.wheelDelta) : n.deltaY != null ? (s = n.deltaY * -40) : (n.detail != null || n.detail === 0) && (s = n.detail * -40),
                                    this.deltasTimestamp.push(Date.now()),
                                    this.deltasTimestamp.shift(),
                                    s > 0 ? (this.lastUpDeltas.push(s), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(s), this.lastDownDeltas.shift(), this.isInertia(-1))
                                );
                            }),
                            (r.prototype.isInertia = function (n) {
                                var s, a, o, l, u, c, f;
                                return (
                                    (s = n === -1 ? this.lastDownDeltas : this.lastUpDeltas),
                                    s[0] === null
                                        ? n
                                        : this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && s[0] === s[this.stability * 2 - 1]
                                        ? !1
                                        : ((o = s.slice(0, this.stability)),
                                          (a = s.slice(this.stability, this.stability * 2)),
                                          (f = o.reduce(function (d, h) {
                                              return d + h;
                                          })),
                                          (u = a.reduce(function (d, h) {
                                              return d + h;
                                          })),
                                          (c = f / o.length),
                                          (l = u / a.length),
                                          Math.abs(c) < Math.abs(l * this.tolerance) && this.sensitivity < Math.abs(l) ? n : !1)
                                );
                            }),
                            (r.prototype.showLastUpDeltas = function () {
                                return this.lastUpDeltas;
                            }),
                            (r.prototype.showLastDownDeltas = function () {
                                return this.lastDownDeltas;
                            }),
                            r
                        );
                    })());
            }.call(Zs));
        }),
        W = (function () {
            return {
                hasWheelEvent: "onwheel" in document,
                hasMouseWheelEvent: "onmousewheel" in document,
                hasTouch: "ontouchstart" in window || window.TouchEvent || (window.DocumentTouch && document instanceof DocumentTouch),
                hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
                hasPointer: !!window.navigator.msPointerEnabled,
                hasKeyDown: "onkeydown" in document,
                isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
            };
        })(),
        la = Object.prototype.toString,
        ua = Object.prototype.hasOwnProperty,
        fa = function (i) {
            if (!i) return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (e.length === 0) for (var t in i) ua.call(i, t) && typeof i[t] == "function" && la.call(i[t]) == "[object Function]" && e.push(t);
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                i[n] = ca(i[n], i);
            }
        };
    function ca(i, e) {
        return function () {
            return i.apply(e, arguments);
        };
    }
    var da = oa.Lethargy,
        ae = "virtualscroll",
        ha = q,
        ge = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 };
    function q(i) {
        fa(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
            (this.el = window),
            i && i.el && ((this.el = i.el), delete i.el),
            (this.options = sa({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: !1, unpreventTouchClass: "vs-touchmove-allowed", limitInertia: !1, useKeyboard: !0, useTouch: !0 }, i)),
            this.options.limitInertia && (this._lethargy = new da()),
            (this._emitter = new aa()),
            (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
            (this.touchStartX = null),
            (this.touchStartY = null),
            (this.bodyTouchAction = null),
            this.options.passive !== void 0 && (this.listenerOptions = { passive: this.options.passive });
    }
    q.prototype._notify = function (i) {
        var e = this._event;
        (e.x += e.deltaX), (e.y += e.deltaY), this._emitter.emit(ae, { x: e.x, y: e.y, deltaX: e.deltaX, deltaY: e.deltaY, originalEvent: i });
    };
    q.prototype._onWheel = function (i) {
        var e = this.options;
        if (this._lethargy && this._lethargy.check(i) === !1) return;
        var t = this._event;
        (t.deltaX = i.wheelDeltaX || i.deltaX * -1),
            (t.deltaY = i.wheelDeltaY || i.deltaY * -1),
            W.isFirefox && i.deltaMode == 1 && ((t.deltaX *= e.firefoxMultiplier), (t.deltaY *= e.firefoxMultiplier)),
            (t.deltaX *= e.mouseMultiplier),
            (t.deltaY *= e.mouseMultiplier),
            this._notify(i);
    };
    q.prototype._onMouseWheel = function (i) {
        if (this.options.limitInertia && this._lethargy.check(i) === !1) return;
        var e = this._event;
        (e.deltaX = i.wheelDeltaX ? i.wheelDeltaX : 0), (e.deltaY = i.wheelDeltaY ? i.wheelDeltaY : i.wheelDelta), this._notify(i);
    };
    q.prototype._onTouchStart = function (i) {
        var e = i.targetTouches ? i.targetTouches[0] : i;
        (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    };
    q.prototype._onTouchMove = function (i) {
        var e = this.options;
        e.preventTouch && !i.target.classList.contains(e.unpreventTouchClass) && i.preventDefault();
        var t = this._event,
            r = i.targetTouches ? i.targetTouches[0] : i;
        (t.deltaX = (r.pageX - this.touchStartX) * e.touchMultiplier), (t.deltaY = (r.pageY - this.touchStartY) * e.touchMultiplier), (this.touchStartX = r.pageX), (this.touchStartY = r.pageY), this._notify(i);
    };
    q.prototype._onKeyDown = function (i) {
        var e = this._event;
        e.deltaX = e.deltaY = 0;
        var t = window.innerHeight - 40;
        switch (i.keyCode) {
            case ge.LEFT:
            case ge.UP:
                e.deltaY = this.options.keyStep;
                break;
            case ge.RIGHT:
            case ge.DOWN:
                e.deltaY = -this.options.keyStep;
                break;
            case i.shiftKey:
                e.deltaY = t;
                break;
            case ge.SPACE:
                e.deltaY = -t;
                break;
            default:
                return;
        }
        this._notify(i);
    };
    q.prototype._bind = function () {
        W.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
            W.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
            W.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions), this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
            W.hasPointer &&
                W.hasTouchWin &&
                ((this.bodyTouchAction = document.body.style.msTouchAction),
                (document.body.style.msTouchAction = "none"),
                this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
                this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
            W.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown);
    };
    q.prototype._unbind = function () {
        W.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
            W.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
            W.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart), this.el.removeEventListener("touchmove", this._onTouchMove)),
            W.hasPointer &&
                W.hasTouchWin &&
                ((document.body.style.msTouchAction = this.bodyTouchAction), this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0), this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
            W.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown);
    };
    q.prototype.on = function (i, e) {
        this._emitter.on(ae, i, e);
        var t = this._emitter.e;
        t && t[ae] && t[ae].length === 1 && this._bind();
    };
    q.prototype.off = function (i, e) {
        this._emitter.off(ae, i, e);
        var t = this._emitter.e;
        (!t[ae] || t[ae].length <= 0) && this._unbind();
    };
    q.prototype.reset = function () {
        var i = this._event;
        (i.x = 0), (i.y = 0);
    };
    q.prototype.destroy = function () {
        this._emitter.off(), this._unbind();
    };
    function Je(i, e, t) {
        return (1 - t) * i + t * e;
    }
    function Y(i) {
        var e = {};
        if (!window.getComputedStyle) return;
        var t = getComputedStyle(i),
            r = t.transform || t.webkitTransform || t.mozTransform,
            n = r.match(/^matrix3d\((.+)\)$/);
        return (
            n
                ? ((e.x = n ? parseFloat(n[1].split(", ")[12]) : 0), (e.y = n ? parseFloat(n[1].split(", ")[13]) : 0))
                : ((n = r.match(/^matrix\((.+)\)$/)), (e.x = n ? parseFloat(n[1].split(", ")[4]) : 0), (e.y = n ? parseFloat(n[1].split(", ")[5]) : 0)),
            e
        );
    }
    function Ze(i) {
        for (var e = []; i && i !== document; i = i.parentNode) e.push(i);
        return e;
    }
    var pa = 4,
        va = 0.001,
        ma = 1e-7,
        ga = 10,
        ye = 11,
        Be = 1 / (ye - 1),
        ya = typeof Float32Array == "function";
    function Ui(i, e) {
        return 1 - 3 * e + 3 * i;
    }
    function Ki(i, e) {
        return 3 * e - 6 * i;
    }
    function Qi(i) {
        return 3 * i;
    }
    function _e(i, e, t) {
        return ((Ui(e, t) * i + Ki(e, t)) * i + Qi(e)) * i;
    }
    function Ji(i, e, t) {
        return 3 * Ui(e, t) * i * i + 2 * Ki(e, t) * i + Qi(e);
    }
    function wa(i, e, t, r, n) {
        var s,
            a,
            o = 0;
        do (a = e + (t - e) / 2), (s = _e(a, r, n) - i), s > 0 ? (t = a) : (e = a);
        while (Math.abs(s) > ma && ++o < ga);
        return a;
    }
    function ba(i, e, t, r) {
        for (var n = 0; n < pa; ++n) {
            var s = Ji(e, t, r);
            if (s === 0) return e;
            var a = _e(e, t, r) - i;
            e -= a / s;
        }
        return e;
    }
    function Ta(i) {
        return i;
    }
    var Sa = function (e, t, r, n) {
            if (!(0 <= e && e <= 1 && 0 <= r && r <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            if (e === t && r === n) return Ta;
            for (var s = ya ? new Float32Array(ye) : new Array(ye), a = 0; a < ye; ++a) s[a] = _e(a * Be, e, r);
            function o(l) {
                for (var u = 0, c = 1, f = ye - 1; c !== f && s[c] <= l; ++c) u += Be;
                --c;
                var d = (l - s[c]) / (s[c + 1] - s[c]),
                    h = u + d * Be,
                    m = Ji(h, e, r);
                return m >= va ? ba(l, h, e, r) : m === 0 ? h : wa(l, u, u + Be, e, r);
            }
            return function (u) {
                return u === 0 ? 0 : u === 1 ? 1 : _e(o(u), t, n);
            };
        },
        Z = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32, TAB: 9, PAGEUP: 33, PAGEDOWN: 34, HOME: 36, END: 35 },
        xa = (function (i) {
            Fi(t, i);
            var e = Hi(t);
            function t() {
                var r,
                    n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return (
                    Ie(this, t),
                    history.scrollRestoration && (history.scrollRestoration = "manual"),
                    window.scrollTo(0, 0),
                    (r = e.call(this, n)),
                    r.inertia && (r.lerp = r.inertia * 0.1),
                    (r.isScrolling = !1),
                    (r.isDraggingScrollbar = !1),
                    (r.isTicking = !1),
                    (r.hasScrollTicking = !1),
                    (r.parallaxElements = {}),
                    (r.stop = !1),
                    (r.scrollbarContainer = n.scrollbarContainer),
                    (r.checkKey = r.checkKey.bind(Ri(r))),
                    window.addEventListener("keydown", r.checkKey, !1),
                    r
                );
            }
            return (
                De(t, [
                    {
                        key: "init",
                        value: function () {
                            var n = this;
                            this.html.classList.add(this.smoothClass),
                                this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                                (this.instance = Ue({ delta: { x: 0, y: 0 } }, this.instance)),
                                (this.vs = new ha({
                                    el: this.scrollFromAnywhere ? document : this.el,
                                    mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                                    firefoxMultiplier: this.firefoxMultiplier,
                                    touchMultiplier: this.touchMultiplier,
                                    useKeyboard: !1,
                                    passive: !0,
                                })),
                                this.vs.on(function (s) {
                                    if (n.stop) return;
                                    n.isDraggingScrollbar ||
                                        requestAnimationFrame(function () {
                                            n.updateDelta(s), n.isScrolling || n.startScrolling();
                                        });
                                }),
                                this.setScrollLimit(),
                                this.initScrollBar(),
                                this.addSections(),
                                this.addElements(),
                                this.checkScroll(!0),
                                this.transformElements(!0, !0),
                                J(Q(t.prototype), "init", this).call(this);
                        },
                    },
                    {
                        key: "setScrollLimit",
                        value: function () {
                            if (((this.instance.limit.y = this.el.offsetHeight - this.windowHeight), this.direction === "horizontal")) {
                                for (var n = 0, s = this.el.children, a = 0; a < s.length; a++) n += s[a].offsetWidth;
                                this.instance.limit.x = n - this.windowWidth;
                            }
                        },
                    },
                    {
                        key: "startScrolling",
                        value: function () {
                            (this.startScrollTs = Date.now()), (this.isScrolling = !0), this.checkScroll(), this.html.classList.add(this.scrollingClass);
                        },
                    },
                    {
                        key: "stopScrolling",
                        value: function () {
                            cancelAnimationFrame(this.checkScrollRaf),
                                this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf), (this.scrollToRaf = null)),
                                (this.isScrolling = !1),
                                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                                this.html.classList.remove(this.scrollingClass);
                        },
                    },
                    {
                        key: "checkKey",
                        value: function (n) {
                            var s = this;
                            if (this.stop) {
                                n.keyCode == Z.TAB &&
                                    requestAnimationFrame(function () {
                                        (s.html.scrollTop = 0), (document.body.scrollTop = 0), (s.html.scrollLeft = 0), (document.body.scrollLeft = 0);
                                    });
                                return;
                            }
                            switch (n.keyCode) {
                                case Z.TAB:
                                    requestAnimationFrame(function () {
                                        (s.html.scrollTop = 0), (document.body.scrollTop = 0), (s.html.scrollLeft = 0), (document.body.scrollLeft = 0), s.scrollTo(document.activeElement, { offset: -window.innerHeight / 2 });
                                    });
                                    break;
                                case Z.UP:
                                    this.instance.delta[this.directionAxis] -= 240;
                                    break;
                                case Z.DOWN:
                                    this.instance.delta[this.directionAxis] += 240;
                                    break;
                                case Z.PAGEUP:
                                    this.instance.delta[this.directionAxis] -= window.innerHeight;
                                    break;
                                case Z.PAGEDOWN:
                                    this.instance.delta[this.directionAxis] += window.innerHeight;
                                    break;
                                case Z.HOME:
                                    this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                    break;
                                case Z.END:
                                    this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                    break;
                                case Z.SPACE:
                                    !(document.activeElement instanceof HTMLInputElement) &&
                                        !(document.activeElement instanceof HTMLTextAreaElement) &&
                                        (n.shiftKey ? (this.instance.delta[this.directionAxis] -= window.innerHeight) : (this.instance.delta[this.directionAxis] += window.innerHeight));
                                    break;
                                default:
                                    return;
                            }
                            this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                                this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                                this.stopScrolling(),
                                (this.isScrolling = !0),
                                this.checkScroll(),
                                this.html.classList.add(this.scrollingClass);
                        },
                    },
                    {
                        key: "checkScroll",
                        value: function () {
                            var n = this,
                                s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                            if (s || this.isScrolling || this.isDraggingScrollbar) {
                                this.hasScrollTicking ||
                                    ((this.checkScrollRaf = requestAnimationFrame(function () {
                                        return n.checkScroll();
                                    })),
                                    (this.hasScrollTicking = !0)),
                                    this.updateScroll();
                                var a = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]),
                                    o = Date.now() - this.startScrollTs;
                                if (
                                    (!this.animatingScroll && o > 100 && ((a < 0.5 && this.instance.delta[this.directionAxis] != 0) || (a < 0.5 && this.instance.delta[this.directionAxis] == 0)) && this.stopScrolling(),
                                    Object.entries(this.sections).forEach(function (u) {
                                        var c = ce(u, 2),
                                            f = c[0],
                                            d = c[1];
                                        d.persistent || (n.instance.scroll[n.directionAxis] > d.offset[n.directionAxis] && n.instance.scroll[n.directionAxis] < d.limit[n.directionAxis])
                                            ? (n.direction === "horizontal" ? n.transform(d.el, -n.instance.scroll[n.directionAxis], 0) : n.transform(d.el, 0, -n.instance.scroll[n.directionAxis]),
                                              d.inView || ((d.inView = !0), (d.el.style.opacity = 1), (d.el.style.pointerEvents = "all"), d.el.setAttribute("data-".concat(n.name, "-section-inview"), "")))
                                            : (d.inView && ((d.inView = !1), (d.el.style.opacity = 0), (d.el.style.pointerEvents = "none"), d.el.removeAttribute("data-".concat(n.name, "-section-inview"))), n.transform(d.el, 0, 0));
                                    }),
                                    this.getDirection && this.addDirection(),
                                    this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                                    this.detectElements(),
                                    this.transformElements(),
                                    this.hasScrollbar)
                                ) {
                                    var l = (this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis]) * this.scrollBarLimit[this.directionAxis];
                                    this.direction === "horizontal" ? this.transform(this.scrollbarThumb, l, 0) : this.transform(this.scrollbarThumb, 0, l);
                                }
                                J(Q(t.prototype), "checkScroll", this).call(this), (this.hasScrollTicking = !1);
                            }
                        },
                    },
                    {
                        key: "resize",
                        value: function () {
                            (this.windowHeight = window.innerHeight), (this.windowWidth = window.innerWidth), this.checkContext(), (this.windowMiddle = { x: this.windowWidth / 2, y: this.windowHeight / 2 }), this.update();
                        },
                    },
                    {
                        key: "updateDelta",
                        value: function (n) {
                            var s,
                                a = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                            a === "both" ? (s = n.deltaX + n.deltaY) : a === "vertical" ? (s = n.deltaY) : a === "horizontal" ? (s = n.deltaX) : (s = n.deltaY),
                                (this.instance.delta[this.directionAxis] -= s * this.multiplier),
                                this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                                this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]);
                        },
                    },
                    {
                        key: "updateScroll",
                        value: function (n) {
                            this.isScrolling || this.isDraggingScrollbar
                                ? (this.instance.scroll[this.directionAxis] = Je(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp))
                                : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]
                                ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis])
                                : this.instance.scroll.y < 0
                                ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                                : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
                        },
                    },
                    {
                        key: "addDirection",
                        value: function () {
                            this.instance.delta.y > this.instance.scroll.y
                                ? this.instance.direction !== "down" && (this.instance.direction = "down")
                                : this.instance.delta.y < this.instance.scroll.y && this.instance.direction !== "up" && (this.instance.direction = "up"),
                                this.instance.delta.x > this.instance.scroll.x
                                    ? this.instance.direction !== "right" && (this.instance.direction = "right")
                                    : this.instance.delta.x < this.instance.scroll.x && this.instance.direction !== "left" && (this.instance.direction = "left");
                        },
                    },
                    {
                        key: "addSpeed",
                        value: function () {
                            this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]
                                ? (this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs))
                                : (this.instance.speed = 0);
                        },
                    },
                    {
                        key: "initScrollBar",
                        value: function () {
                            if (
                                ((this.scrollbar = document.createElement("span")),
                                (this.scrollbarThumb = document.createElement("span")),
                                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                                this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                                this.scrollbar.append(this.scrollbarThumb),
                                this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                                (this.getScrollBar = this.getScrollBar.bind(this)),
                                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                                this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                                window.addEventListener("mouseup", this.releaseScrollBar),
                                window.addEventListener("mousemove", this.moveScrollBar),
                                (this.hasScrollbar = !1),
                                this.direction == "horizontal")
                            ) {
                                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                            } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                            (this.hasScrollbar = !0),
                                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                                (this.scrollbarHeight = this.scrollbarBCR.height),
                                (this.scrollbarWidth = this.scrollbarBCR.width),
                                this.direction === "horizontal"
                                    ? (this.scrollbarThumb.style.width = "".concat((this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth), "px"))
                                    : (this.scrollbarThumb.style.height = "".concat((this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight), "px")),
                                (this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
                                (this.scrollBarLimit = { x: this.scrollbarWidth - this.scrollbarThumbBCR.width, y: this.scrollbarHeight - this.scrollbarThumbBCR.height });
                        },
                    },
                    {
                        key: "reinitScrollBar",
                        value: function () {
                            if (((this.hasScrollbar = !1), this.direction == "horizontal")) {
                                if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                            } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                            (this.hasScrollbar = !0),
                                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                                (this.scrollbarHeight = this.scrollbarBCR.height),
                                (this.scrollbarWidth = this.scrollbarBCR.width),
                                this.direction === "horizontal"
                                    ? (this.scrollbarThumb.style.width = "".concat((this.scrollbarWidth * this.scrollbarWidth) / (this.instance.limit.x + this.scrollbarWidth), "px"))
                                    : (this.scrollbarThumb.style.height = "".concat((this.scrollbarHeight * this.scrollbarHeight) / (this.instance.limit.y + this.scrollbarHeight), "px")),
                                (this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
                                (this.scrollBarLimit = { x: this.scrollbarWidth - this.scrollbarThumbBCR.width, y: this.scrollbarHeight - this.scrollbarThumbBCR.height });
                        },
                    },
                    {
                        key: "destroyScrollBar",
                        value: function () {
                            this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                                window.removeEventListener("mouseup", this.releaseScrollBar),
                                window.removeEventListener("mousemove", this.moveScrollBar),
                                this.scrollbar.remove();
                        },
                    },
                    {
                        key: "getScrollBar",
                        value: function (n) {
                            (this.isDraggingScrollbar = !0), this.checkScroll(), this.html.classList.remove(this.scrollingClass), this.html.classList.add(this.draggingClass);
                        },
                    },
                    {
                        key: "releaseScrollBar",
                        value: function (n) {
                            (this.isDraggingScrollbar = !1), this.html.classList.add(this.scrollingClass), this.html.classList.remove(this.draggingClass);
                        },
                    },
                    {
                        key: "moveScrollBar",
                        value: function (n) {
                            var s = this;
                            this.isDraggingScrollbar &&
                                requestAnimationFrame(function () {
                                    var a = ((((n.clientX - s.scrollbarBCR.left) * 100) / s.scrollbarWidth) * s.instance.limit.x) / 100,
                                        o = ((((n.clientY - s.scrollbarBCR.top) * 100) / s.scrollbarHeight) * s.instance.limit.y) / 100;
                                    o > 0 && o < s.instance.limit.y && (s.instance.delta.y = o), a > 0 && a < s.instance.limit.x && (s.instance.delta.x = a);
                                });
                        },
                    },
                    {
                        key: "addElements",
                        value: function () {
                            var n = this;
                            (this.els = {}), (this.parallaxElements = {});
                            var s = this.el.querySelectorAll("[data-".concat(this.name, "]"));
                            s.forEach(function (a, o) {
                                var l = Ze(a),
                                    u = Object.entries(n.sections)
                                        .map(function (le) {
                                            var H = ce(le, 2),
                                                Ce = H[0],
                                                ve = H[1];
                                            return ve;
                                        })
                                        .find(function (le) {
                                            return l.includes(le.el);
                                        }),
                                    c = a.dataset[n.name + "Class"] || n.class,
                                    f = typeof a.dataset[n.name + "Id"] == "string" ? a.dataset[n.name + "Id"] : "el" + o,
                                    d,
                                    h,
                                    m = a.dataset[n.name + "Repeat"],
                                    b = a.dataset[n.name + "Call"],
                                    T = a.dataset[n.name + "Position"],
                                    C = a.dataset[n.name + "Delay"],
                                    w = a.dataset[n.name + "Direction"],
                                    v = typeof a.dataset[n.name + "Sticky"] == "string",
                                    p = a.dataset[n.name + "Speed"] ? parseFloat(a.dataset[n.name + "Speed"]) / 10 : !1,
                                    g = typeof a.dataset[n.name + "Offset"] == "string" ? a.dataset[n.name + "Offset"].split(",") : n.offset,
                                    y = a.dataset[n.name + "Target"],
                                    x;
                                y !== void 0 ? (x = document.querySelector("".concat(y))) : (x = a);
                                var S = x.getBoundingClientRect();
                                u === null || u.inView ? ((d = S.top + n.instance.scroll.y - Y(x).y), (h = S.left + n.instance.scroll.x - Y(x).x)) : ((d = S.top - Y(u.el).y - Y(x).y), (h = S.left - Y(u.el).x - Y(x).x));
                                var E = d + x.offsetHeight,
                                    k = h + x.offsetWidth,
                                    j = { x: (k - h) / 2 + h, y: (E - d) / 2 + d };
                                if (v) {
                                    var O = a.getBoundingClientRect(),
                                        _ = O.top,
                                        N = O.left,
                                        R = { x: N - h, y: _ - d };
                                    (d += window.innerHeight),
                                        (h += window.innerWidth),
                                        (E = _ + x.offsetHeight - a.offsetHeight - R[n.directionAxis]),
                                        (k = N + x.offsetWidth - a.offsetWidth - R[n.directionAxis]),
                                        (j = { x: (k - h) / 2 + h, y: (E - d) / 2 + d });
                                }
                                m == "false" ? (m = !1) : m != null ? (m = !0) : (m = n.repeat);
                                var z = [0, 0];
                                if (g)
                                    if (n.direction === "horizontal") {
                                        for (var I = 0; I < g.length; I++) typeof g[I] == "string" ? (g[I].includes("%") ? (z[I] = parseInt((g[I].replace("%", "") * n.windowWidth) / 100)) : (z[I] = parseInt(g[I]))) : (z[I] = g[I]);
                                        (h = h + z[0]), (k = k - z[1]);
                                    } else {
                                        for (var I = 0; I < g.length; I++) typeof g[I] == "string" ? (g[I].includes("%") ? (z[I] = parseInt((g[I].replace("%", "") * n.windowHeight) / 100)) : (z[I] = parseInt(g[I]))) : (z[I] = g[I]);
                                        (d = d + z[0]), (E = E - z[1]);
                                    }
                                var se = {
                                    el: a,
                                    id: f,
                                    class: c,
                                    section: u,
                                    top: d,
                                    middle: j,
                                    bottom: E,
                                    left: h,
                                    right: k,
                                    offset: g,
                                    progress: 0,
                                    repeat: m,
                                    inView: !1,
                                    call: b,
                                    speed: p,
                                    delay: C,
                                    position: T,
                                    target: x,
                                    direction: w,
                                    sticky: v,
                                };
                                (n.els[f] = se), a.classList.contains(c) && n.setInView(n.els[f], f), (p !== !1 || v) && (n.parallaxElements[f] = se);
                            });
                        },
                    },
                    {
                        key: "addSections",
                        value: function () {
                            var n = this;
                            this.sections = {};
                            var s = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                            s.length === 0 && (s = [this.el]),
                                s.forEach(function (a, o) {
                                    var l = typeof a.dataset[n.name + "Id"] == "string" ? a.dataset[n.name + "Id"] : "section" + o,
                                        u = a.getBoundingClientRect(),
                                        c = { x: u.left - window.innerWidth * 1.5 - Y(a).x, y: u.top - window.innerHeight * 1.5 - Y(a).y },
                                        f = { x: c.x + u.width + window.innerWidth * 2, y: c.y + u.height + window.innerHeight * 2 },
                                        d = typeof a.dataset[n.name + "Persistent"] == "string";
                                    a.setAttribute("data-scroll-section-id", l);
                                    var h = { el: a, offset: c, limit: f, inView: !1, persistent: d, id: l };
                                    n.sections[l] = h;
                                });
                        },
                    },
                    {
                        key: "transform",
                        value: function (n, s, a, o) {
                            var l;
                            if (!o) l = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s, ",").concat(a, ",0,1)");
                            else {
                                var u = Y(n),
                                    c = Je(u.x, s, o),
                                    f = Je(u.y, a, o);
                                l = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(c, ",").concat(f, ",0,1)");
                            }
                            (n.style.webkitTransform = l), (n.style.msTransform = l), (n.style.transform = l);
                        },
                    },
                    {
                        key: "transformElements",
                        value: function (n) {
                            var s = this,
                                a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                                o = this.instance.scroll.x + this.windowWidth,
                                l = this.instance.scroll.y + this.windowHeight,
                                u = { x: this.instance.scroll.x + this.windowMiddle.x, y: this.instance.scroll.y + this.windowMiddle.y };
                            Object.entries(this.parallaxElements).forEach(function (c) {
                                var f = ce(c, 2),
                                    d = f[0],
                                    h = f[1],
                                    m = !1;
                                if ((n && (m = 0), h.inView || a))
                                    switch (h.position) {
                                        case "top":
                                            m = s.instance.scroll[s.directionAxis] * -h.speed;
                                            break;
                                        case "elementTop":
                                            m = (l - h.top) * -h.speed;
                                            break;
                                        case "bottom":
                                            m = (s.instance.limit[s.directionAxis] - l + s.windowHeight) * h.speed;
                                            break;
                                        case "left":
                                            m = s.instance.scroll[s.directionAxis] * -h.speed;
                                            break;
                                        case "elementLeft":
                                            m = (o - h.left) * -h.speed;
                                            break;
                                        case "right":
                                            m = (s.instance.limit[s.directionAxis] - o + s.windowHeight) * h.speed;
                                            break;
                                        default:
                                            m = (u[s.directionAxis] - h.middle[s.directionAxis]) * -h.speed;
                                            break;
                                    }
                                h.sticky &&
                                    (h.inView
                                        ? s.direction === "horizontal"
                                            ? (m = s.instance.scroll.x - h.left + window.innerWidth)
                                            : (m = s.instance.scroll.y - h.top + window.innerHeight)
                                        : s.direction === "horizontal"
                                        ? s.instance.scroll.x < h.left - window.innerWidth && s.instance.scroll.x < h.left - window.innerWidth / 2
                                            ? (m = 0)
                                            : s.instance.scroll.x > h.right && s.instance.scroll.x > h.right + 100
                                            ? (m = h.right - h.left + window.innerWidth)
                                            : (m = !1)
                                        : s.instance.scroll.y < h.top - window.innerHeight && s.instance.scroll.y < h.top - window.innerHeight / 2
                                        ? (m = 0)
                                        : s.instance.scroll.y > h.bottom && s.instance.scroll.y > h.bottom + 100
                                        ? (m = h.bottom - h.top + window.innerHeight)
                                        : (m = !1)),
                                    m !== !1 && (h.direction === "horizontal" || (s.direction === "horizontal" && h.direction !== "vertical") ? s.transform(h.el, m, 0, n ? !1 : h.delay) : s.transform(h.el, 0, m, n ? !1 : h.delay));
                            });
                        },
                    },
                    {
                        key: "scrollTo",
                        value: function (n) {
                            var s = this,
                                a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                                o = parseInt(a.offset) || 0,
                                l = a.duration || 1e3,
                                u = a.easing || [0.25, 0, 0.35, 1],
                                c = !!a.disableLerp,
                                f = a.callback ? a.callback : !1;
                            if (((u = Sa.apply(void 0, Js(u))), typeof n == "string")) {
                                if (n === "top") n = 0;
                                else if (n === "bottom") n = this.instance.limit.y;
                                else if (n === "left") n = 0;
                                else if (n === "right") n = this.instance.limit.x;
                                else if (((n = document.querySelector(n)), !n)) return;
                            } else if (typeof n == "number") n = parseInt(n);
                            else if (!(n && n.tagName)) {
                                console.warn("`target` parameter is not valid");
                                return;
                            }
                            if (typeof n != "number") {
                                var d = Ze(n).includes(this.el);
                                if (!d) return;
                                var h = n.getBoundingClientRect(),
                                    m = h.top,
                                    b = h.left,
                                    T = Ze(n),
                                    C = T.find(function (E) {
                                        return Object.entries(s.sections)
                                            .map(function (k) {
                                                var j = ce(k, 2),
                                                    O = j[0],
                                                    _ = j[1];
                                                return _;
                                            })
                                            .find(function (k) {
                                                return k.el == E;
                                            });
                                    }),
                                    w = 0;
                                C ? (w = Y(C)[this.directionAxis]) : (w = -this.instance.scroll[this.directionAxis]), this.direction === "horizontal" ? (o = b + o - w) : (o = m + o - w);
                            } else o = n + o;
                            var v = parseFloat(this.instance.delta[this.directionAxis]),
                                p = Math.max(0, Math.min(o, this.instance.limit[this.directionAxis])),
                                g = p - v,
                                y = function (k) {
                                    c ? (s.direction === "horizontal" ? s.setScroll(v + g * k, s.instance.delta.y) : s.setScroll(s.instance.delta.x, v + g * k)) : (s.instance.delta[s.directionAxis] = v + g * k);
                                };
                            (this.animatingScroll = !0), this.stopScrolling(), this.startScrolling();
                            var x = Date.now(),
                                S = function E() {
                                    var k = (Date.now() - x) / l;
                                    k > 1 ? (y(1), (s.animatingScroll = !1), l == 0 && s.update(), f && f()) : ((s.scrollToRaf = requestAnimationFrame(E)), y(u(k)));
                                };
                            S();
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            this.setScrollLimit(), this.addSections(), this.addElements(), this.detectElements(), this.updateScroll(), this.transformElements(!0), this.reinitScrollBar(), this.checkScroll(!0);
                        },
                    },
                    {
                        key: "startScroll",
                        value: function () {
                            this.stop = !1;
                        },
                    },
                    {
                        key: "stopScroll",
                        value: function () {
                            this.stop = !0;
                        },
                    },
                    {
                        key: "setScroll",
                        value: function (n, s) {
                            this.instance = Ue(Ue({}, this.instance), {}, { scroll: { x: n, y: s }, delta: { x: n, y: s }, speed: 0 });
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            J(Q(t.prototype), "destroy", this).call(this),
                                this.stopScrolling(),
                                this.html.classList.remove(this.smoothClass),
                                this.vs.destroy(),
                                this.destroyScrollBar(),
                                window.removeEventListener("keydown", this.checkKey, !1);
                        },
                    },
                ]),
                t
            );
        })(Wi),
        Ea = (function () {
            function i() {
                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                Ie(this, i),
                    (this.options = e),
                    Object.assign(this, fe, e),
                    (this.smartphone = fe.smartphone),
                    e.smartphone && Object.assign(this.smartphone, e.smartphone),
                    (this.tablet = fe.tablet),
                    e.tablet && Object.assign(this.tablet, e.tablet),
                    !this.smooth && this.direction == "horizontal" && console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible"),
                    !this.tablet.smooth && this.tablet.direction == "horizontal" && console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),
                    !this.smartphone.smooth && this.smartphone.direction == "horizontal" && console.warn("\u{1F6A8} `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),
                    this.init();
            }
            return (
                De(i, [
                    {
                        key: "init",
                        value: function () {
                            if (
                                ((this.options.isMobile =
                                    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) || window.innerWidth < this.tablet.breakpoint),
                                (this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint),
                                (this.smooth && !this.options.isMobile) || (this.tablet.smooth && this.options.isTablet) || (this.smartphone.smooth && this.options.isMobile && !this.options.isTablet)
                                    ? (this.scroll = new xa(this.options))
                                    : (this.scroll = new ea(this.options)),
                                this.scroll.init(),
                                window.location.hash)
                            ) {
                                var t = window.location.hash.slice(1, window.location.hash.length),
                                    r = document.getElementById(t);
                                r && this.scroll.scrollTo(r);
                            }
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            this.scroll.update();
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            this.scroll.startScroll();
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            this.scroll.stopScroll();
                        },
                    },
                    {
                        key: "scrollTo",
                        value: function (t, r) {
                            this.scroll.scrollTo(t, r);
                        },
                    },
                    {
                        key: "setScroll",
                        value: function (t, r) {
                            this.scroll.setScroll(t, r);
                        },
                    },
                    {
                        key: "on",
                        value: function (t, r) {
                            this.scroll.setEvents(t, r);
                        },
                    },
                    {
                        key: "off",
                        value: function (t, r) {
                            this.scroll.unsetEvents(t, r);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            this.scroll.destroy();
                        },
                    },
                ]),
                i
            );
        })(),
        Zi = Ea,
        er = class extends A {
            constructor(i) {
                super(i);
            }
            init() {
                setTimeout(() => {
                    (this.scroll = new Zi({ el: this.el, smooth: !0 })),
                        this.scroll.on("call", (i, e, t, r) => {
                            this.call(i[0], { way: e, obj: t }, i[1], i[2]);
                        }),
                        this.scroll.on("scroll", (i) => {});
                }, 300);
            }
            toggleLazy(i) {
                let e = this.getData("lazy", i.obj.el);
                e.length && (i.obj.el.tagName == "IMG" ? (i.obj.el.src = e) : (i.obj.el.style.backgroundImage = `url(${e})`), this.setData("lazy", "", i.obj.el));
            }
            menuLight(i) {
                i.way === "enter" && B.classList.add("has-menu-light"), i.way === "exit" && B.classList.remove("has-menu-light");
            }
            update() {
                this.scroll.update();
            }
            scrollTo(i) {
                this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(i[0], { offset: i[1] });
            }
            destroy() {
                B.classList.remove("has-menu-light"), this.scroll.destroy();
            }
        },
        tr = er;
    function et(i, e, t) {
        return (1 - t) * i + t * e;
    }
    function ir(i, e) {
        (i.style.webkitTransform = e), (i.style.msTransform = e), (i.style.transform = e);
    }
    var rr = class extends A {
            constructor(i) {
                super(i);
            }
            init() {
                if (window.isMobile) return;
                (this.hasMoved = !1),
                    (this.mouse = { x: 0, y: 0, lerpedX: 0, lerpedY: 0 }),
                    this.animate(),
                    (this.bindMousemove = this.mousemove.bind(this)),
                    window.addEventListener("mousemove", this.bindMousemove),
                    (this.bindEnter = this.hover.bind(this)),
                    (this.bindLeave = this.leave.bind(this)),
                    (this.hoverElements = document.querySelectorAll("a, button, .js-hover, .js-hover-video, .js-hover-drag")),
                    this.hoverElements.forEach((i) => {
                        i.addEventListener("mouseenter", this.bindEnter), i.addEventListener("mouseleave", this.bindLeave);
                    });
            }
            animate() {
                (this.raf = requestAnimationFrame(() => this.animate())),
                    (this.mouse.lerpedX = et(this.mouse.lerpedX, this.mouse.x, 0.1)),
                    (this.mouse.lerpedY = et(this.mouse.lerpedY, this.mouse.y, 0.1)),
                    ir(this.el, `translate3d(${this.mouse.lerpedX}px,${this.mouse.lerpedY}px,0)`);
            }
            mousemove(i) {
                this.hasMoved || ((this.hasMoved = !0), this.el.classList.add("has-moved")), (this.mouse.x = i.clientX), (this.mouse.y = i.clientY);
            }
            hover(i) {
                i.currentTarget.classList.contains("js-hover-video") && this.el.classList.add("has-hover-video"),
                    i.currentTarget.classList.contains("js-hover-drag") && this.el.classList.add("has-hover-drag"),
                    i.currentTarget.classList.contains("js-hover-element") && this.el.classList.add("has-element-hover"),
                    this.el.classList.add("has-hover");
            }
            leave(i) {
                i.currentTarget.classList.contains("js-hover-video") && this.el.classList.remove("has-hover-video"),
                    i.currentTarget.classList.contains("js-hover-drag") && this.el.classList.remove("has-hover-drag"),
                    i.currentTarget.classList.contains("js-hover-element") && this.el.classList.remove("has-element-hover"),
                    this.el.classList.remove("has-hover");
            }
            destroy() {
                if (window.isMobile) return;
                window.removeEventListener("mousemove", this.bindmousemove),
                    this.hoverElements.forEach((i) => {
                        i.removeEventListener("mouseenter", this.bindEnter), i.removeEventListener("mouseleave", this.bindLeave);
                    }),
                    cancelAnimationFrame(this.raf);
            }
        },
        nr = rr;
    function sr(i) {
        return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
    }
    function tt(i, e) {
        i === void 0 && (i = {}),
            e === void 0 && (e = {}),
            Object.keys(e).forEach(function (t) {
                typeof i[t] == "undefined" ? (i[t] = e[t]) : sr(e[t]) && sr(i[t]) && Object.keys(e[t]).length > 0 && tt(i[t], e[t]);
            });
    }
    var ar = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
            return null;
        },
        querySelectorAll: function () {
            return [];
        },
        getElementById: function () {
            return null;
        },
        createEvent: function () {
            return { initEvent: function () {} };
        },
        createElement: function () {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                    return [];
                },
            };
        },
        createElementNS: function () {
            return {};
        },
        importNode: function () {
            return null;
        },
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
    };
    function F() {
        var i = typeof document != "undefined" ? document : {};
        return tt(i, ar), i;
    }
    var Ca = {
        document: ar,
        navigator: { userAgent: "" },
        location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
        history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
        CustomEvent: function () {
            return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return "";
                },
            };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
            return {};
        },
        requestAnimationFrame: function (i) {
            return typeof setTimeout == "undefined" ? (i(), null) : setTimeout(i, 0);
        },
        cancelAnimationFrame: function (i) {
            if (typeof setTimeout == "undefined") return;
            clearTimeout(i);
        },
    };
    function D() {
        var i = typeof window != "undefined" ? window : {};
        return tt(i, Ca), i;
    }
    function ka(i, e) {
        (i.prototype = Object.create(e.prototype)), (i.prototype.constructor = i), (i.__proto__ = e);
    }
    function it(i) {
        return (
            (it = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            it(i)
        );
    }
    function ze(i, e) {
        return (
            (ze =
                Object.setPrototypeOf ||
                function (r, n) {
                    return (r.__proto__ = n), r;
                }),
            ze(i, e)
        );
    }
    function Ma() {
        if (typeof Reflect == "undefined" || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (i) {
            return !1;
        }
    }
    function Ne(i, e, t) {
        return (
            Ma()
                ? (Ne = Reflect.construct)
                : (Ne = function (n, s, a) {
                      var o = [null];
                      o.push.apply(o, s);
                      var l = Function.bind.apply(n, o),
                          u = new l();
                      return a && ze(u, a.prototype), u;
                  }),
            Ne.apply(null, arguments)
        );
    }
    function La(i) {
        return Function.toString.call(i).indexOf("[native code]") !== -1;
    }
    function rt(i) {
        var e = typeof Map == "function" ? new Map() : void 0;
        return (
            (rt = function (r) {
                if (r === null || !La(r)) return r;
                if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
                if (typeof e != "undefined") {
                    if (e.has(r)) return e.get(r);
                    e.set(r, n);
                }
                function n() {
                    return Ne(r, arguments, it(this).constructor);
                }
                return (n.prototype = Object.create(r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })), ze(n, r);
            }),
            rt(i)
        );
    }
    function Aa(i) {
        if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i;
    }
    function Pa(i) {
        var e = i.__proto__;
        Object.defineProperty(i, "__proto__", {
            get: function () {
                return e;
            },
            set: function (r) {
                e.__proto__ = r;
            },
        });
    }
    var te = (function (i) {
        ka(e, i);
        function e(t) {
            var r;
            return (r = i.call.apply(i, [this].concat(t)) || this), Pa(Aa(r)), r;
        }
        return e;
    })(rt(Array));
    function we(i) {
        i === void 0 && (i = []);
        var e = [];
        return (
            i.forEach(function (t) {
                Array.isArray(t) ? e.push.apply(e, we(t)) : e.push(t);
            }),
            e
        );
    }
    function or(i, e) {
        return Array.prototype.filter.call(i, e);
    }
    function Oa(i) {
        for (var e = [], t = 0; t < i.length; t += 1) e.indexOf(i[t]) === -1 && e.push(i[t]);
        return e;
    }
    function Ia(i, e) {
        if (typeof i != "string") return [i];
        for (var t = [], r = e.querySelectorAll(i), n = 0; n < r.length; n += 1) t.push(r[n]);
        return t;
    }
    function M(i, e) {
        var t = D(),
            r = F(),
            n = [];
        if (!e && i instanceof te) return i;
        if (!i) return new te(n);
        if (typeof i == "string") {
            var s = i.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                var a = "div";
                s.indexOf("<li") === 0 && (a = "ul"),
                    s.indexOf("<tr") === 0 && (a = "tbody"),
                    (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (a = "tr"),
                    s.indexOf("<tbody") === 0 && (a = "table"),
                    s.indexOf("<option") === 0 && (a = "select");
                var o = r.createElement(a);
                o.innerHTML = s;
                for (var l = 0; l < o.childNodes.length; l += 1) n.push(o.childNodes[l]);
            } else n = Ia(i.trim(), e || r);
        } else if (i.nodeType || i === t || i === r) n.push(i);
        else if (Array.isArray(i)) {
            if (i instanceof te) return i;
            n = i;
        }
        return new te(Oa(n));
    }
    M.fn = te.prototype;
    function lr() {
        for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
        var r = we(
            e.map(function (n) {
                return n.split(" ");
            })
        );
        return (
            this.forEach(function (n) {
                var s;
                (s = n.classList).add.apply(s, r);
            }),
            this
        );
    }
    function ur() {
        for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
        var r = we(
            e.map(function (n) {
                return n.split(" ");
            })
        );
        return (
            this.forEach(function (n) {
                var s;
                (s = n.classList).remove.apply(s, r);
            }),
            this
        );
    }
    function cr() {
        for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
        var r = we(
            e.map(function (n) {
                return n.split(" ");
            })
        );
        this.forEach(function (n) {
            r.forEach(function (s) {
                n.classList.toggle(s);
            });
        });
    }
    function fr() {
        for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
        var r = we(
            e.map(function (n) {
                return n.split(" ");
            })
        );
        return (
            or(this, function (n) {
                return (
                    r.filter(function (s) {
                        return n.classList.contains(s);
                    }).length > 0
                );
            }).length > 0
        );
    }
    function dr(i, e) {
        if (arguments.length === 1 && typeof i == "string") return this[0] ? this[0].getAttribute(i) : void 0;
        for (var t = 0; t < this.length; t += 1)
            if (arguments.length === 2) this[t].setAttribute(i, e);
            else for (var r in i) (this[t][r] = i[r]), this[t].setAttribute(r, i[r]);
        return this;
    }
    function hr(i) {
        for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(i);
        return this;
    }
    function pr(i) {
        for (var e = 0; e < this.length; e += 1) this[e].style.transform = i;
        return this;
    }
    function vr(i) {
        for (var e = 0; e < this.length; e += 1) this[e].style.transitionDuration = typeof i != "string" ? i + "ms" : i;
        return this;
    }
    function mr() {
        for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
        var r = e[0],
            n = e[1],
            s = e[2],
            a = e[3];
        typeof e[1] == "function" && ((r = e[0]), (s = e[1]), (a = e[2]), (n = void 0)), a || (a = !1);
        function o(b) {
            var T = b.target;
            if (!T) return;
            var C = b.target.dom7EventData || [];
            if ((C.indexOf(b) < 0 && C.unshift(b), M(T).is(n))) s.apply(T, C);
            else for (var w = M(T).parents(), v = 0; v < w.length; v += 1) M(w[v]).is(n) && s.apply(w[v], C);
        }
        function l(b) {
            var T = b && b.target ? b.target.dom7EventData || [] : [];
            T.indexOf(b) < 0 && T.unshift(b), s.apply(this, T);
        }
        for (var u = r.split(" "), c, f = 0; f < this.length; f += 1) {
            var d = this[f];
            if (n)
                for (c = 0; c < u.length; c += 1) {
                    var m = u[c];
                    d.dom7LiveListeners || (d.dom7LiveListeners = {}), d.dom7LiveListeners[m] || (d.dom7LiveListeners[m] = []), d.dom7LiveListeners[m].push({ listener: s, proxyListener: o }), d.addEventListener(m, o, a);
                }
            else
                for (c = 0; c < u.length; c += 1) {
                    var h = u[c];
                    d.dom7Listeners || (d.dom7Listeners = {}), d.dom7Listeners[h] || (d.dom7Listeners[h] = []), d.dom7Listeners[h].push({ listener: s, proxyListener: l }), d.addEventListener(h, l, a);
                }
        }
        return this;
    }
    function gr() {
        for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++) e[t] = arguments[t];
        var r = e[0],
            n = e[1],
            s = e[2],
            a = e[3];
        typeof e[1] == "function" && ((r = e[0]), (s = e[1]), (a = e[2]), (n = void 0)), a || (a = !1);
        for (var o = r.split(" "), l = 0; l < o.length; l += 1)
            for (var u = o[l], c = 0; c < this.length; c += 1) {
                var f = this[c],
                    d = void 0;
                if ((!n && f.dom7Listeners ? (d = f.dom7Listeners[u]) : n && f.dom7LiveListeners && (d = f.dom7LiveListeners[u]), d && d.length))
                    for (var h = d.length - 1; h >= 0; h -= 1) {
                        var m = d[h];
                        (s && m.listener === s) || (s && m.listener && m.listener.dom7proxy && m.listener.dom7proxy === s)
                            ? (f.removeEventListener(u, m.proxyListener, a), d.splice(h, 1))
                            : s || (f.removeEventListener(u, m.proxyListener, a), d.splice(h, 1));
                    }
            }
        return this;
    }
    function yr() {
        for (var i = D(), e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        for (var n = t[0].split(" "), s = t[1], a = 0; a < n.length; a += 1)
            for (var o = n[a], l = 0; l < this.length; l += 1) {
                var u = this[l];
                if (i.CustomEvent) {
                    var c = new i.CustomEvent(o, { detail: s, bubbles: !0, cancelable: !0 });
                    (u.dom7EventData = t.filter(function (f, d) {
                        return d > 0;
                    })),
                        u.dispatchEvent(c),
                        (u.dom7EventData = []),
                        delete u.dom7EventData;
                }
            }
        return this;
    }
    function wr(i) {
        var e = this;
        function t(r) {
            if (r.target !== this) return;
            i.call(this, r), e.off("transitionend", t);
        }
        return i && e.on("transitionend", t), this;
    }
    function br(i) {
        if (this.length > 0) {
            if (i) {
                var e = this.styles();
                return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
            }
            return this[0].offsetWidth;
        }
        return null;
    }
    function Tr(i) {
        if (this.length > 0) {
            if (i) {
                var e = this.styles();
                return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
            }
            return this[0].offsetHeight;
        }
        return null;
    }
    function Sr() {
        if (this.length > 0) {
            var i = D(),
                e = F(),
                t = this[0],
                r = t.getBoundingClientRect(),
                n = e.body,
                s = t.clientTop || n.clientTop || 0,
                a = t.clientLeft || n.clientLeft || 0,
                o = t === i ? i.scrollY : t.scrollTop,
                l = t === i ? i.scrollX : t.scrollLeft;
            return { top: r.top + o - s, left: r.left + l - a };
        }
        return null;
    }
    function xr() {
        var i = D();
        return this[0] ? i.getComputedStyle(this[0], null) : {};
    }
    function Er(i, e) {
        var t = D(),
            r;
        if (arguments.length === 1)
            if (typeof i == "string") {
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(i);
            } else {
                for (r = 0; r < this.length; r += 1) for (var n in i) this[r].style[n] = i[n];
                return this;
            }
        if (arguments.length === 2 && typeof i == "string") {
            for (r = 0; r < this.length; r += 1) this[r].style[i] = e;
            return this;
        }
        return this;
    }
    function Cr(i) {
        return i
            ? (this.forEach(function (e, t) {
                  i.apply(e, [e, t]);
              }),
              this)
            : this;
    }
    function kr(i) {
        var e = or(this, i);
        return M(e);
    }
    function Mr(i) {
        if (typeof i == "undefined") return this[0] ? this[0].innerHTML : null;
        for (var e = 0; e < this.length; e += 1) this[e].innerHTML = i;
        return this;
    }
    function Lr(i) {
        if (typeof i == "undefined") return this[0] ? this[0].textContent.trim() : null;
        for (var e = 0; e < this.length; e += 1) this[e].textContent = i;
        return this;
    }
    function Ar(i) {
        var e = D(),
            t = F(),
            r = this[0],
            n,
            s;
        if (!r || typeof i == "undefined") return !1;
        if (typeof i == "string") {
            if (r.matches) return r.matches(i);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(i);
            if (r.msMatchesSelector) return r.msMatchesSelector(i);
            for (n = M(i), s = 0; s < n.length; s += 1) if (n[s] === r) return !0;
            return !1;
        }
        if (i === t) return r === t;
        if (i === e) return r === e;
        if (i.nodeType || i instanceof te) {
            for (n = i.nodeType ? [i] : i, s = 0; s < n.length; s += 1) if (n[s] === r) return !0;
            return !1;
        }
        return !1;
    }
    function Pr() {
        var i = this[0],
            e;
        if (i) {
            for (e = 0; (i = i.previousSibling) !== null; ) i.nodeType === 1 && (e += 1);
            return e;
        }
        return;
    }
    function Or(i) {
        if (typeof i == "undefined") return this;
        var e = this.length;
        if (i > e - 1) return M([]);
        if (i < 0) {
            var t = e + i;
            return t < 0 ? M([]) : M([this[t]]);
        }
        return M([this[i]]);
    }
    function Ir() {
        for (var i, e = F(), t = 0; t < arguments.length; t += 1) {
            i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            for (var r = 0; r < this.length; r += 1)
                if (typeof i == "string") {
                    var n = e.createElement("div");
                    for (n.innerHTML = i; n.firstChild; ) this[r].appendChild(n.firstChild);
                } else if (i instanceof te) for (var s = 0; s < i.length; s += 1) this[r].appendChild(i[s]);
                else this[r].appendChild(i);
        }
        return this;
    }
    function Dr(i) {
        var e = F(),
            t,
            r;
        for (t = 0; t < this.length; t += 1)
            if (typeof i == "string") {
                var n = e.createElement("div");
                for (n.innerHTML = i, r = n.childNodes.length - 1; r >= 0; r -= 1) this[t].insertBefore(n.childNodes[r], this[t].childNodes[0]);
            } else if (i instanceof te) for (r = 0; r < i.length; r += 1) this[t].insertBefore(i[r], this[t].childNodes[0]);
            else this[t].insertBefore(i, this[t].childNodes[0]);
        return this;
    }
    function Br(i) {
        return this.length > 0 ? (i ? (this[0].nextElementSibling && M(this[0].nextElementSibling).is(i) ? M([this[0].nextElementSibling]) : M([])) : this[0].nextElementSibling ? M([this[0].nextElementSibling]) : M([])) : M([]);
    }
    function _r(i) {
        var e = [],
            t = this[0];
        if (!t) return M([]);
        for (; t.nextElementSibling; ) {
            var r = t.nextElementSibling;
            i ? M(r).is(i) && e.push(r) : e.push(r), (t = r);
        }
        return M(e);
    }
    function zr(i) {
        if (this.length > 0) {
            var e = this[0];
            return i ? (e.previousElementSibling && M(e.previousElementSibling).is(i) ? M([e.previousElementSibling]) : M([])) : e.previousElementSibling ? M([e.previousElementSibling]) : M([]);
        }
        return M([]);
    }
    function Nr(i) {
        var e = [],
            t = this[0];
        if (!t) return M([]);
        for (; t.previousElementSibling; ) {
            var r = t.previousElementSibling;
            i ? M(r).is(i) && e.push(r) : e.push(r), (t = r);
        }
        return M(e);
    }
    function $r(i) {
        for (var e = [], t = 0; t < this.length; t += 1) this[t].parentNode !== null && (i ? M(this[t].parentNode).is(i) && e.push(this[t].parentNode) : e.push(this[t].parentNode));
        return M(e);
    }
    function jr(i) {
        for (var e = [], t = 0; t < this.length; t += 1) for (var r = this[t].parentNode; r; ) i ? M(r).is(i) && e.push(r) : e.push(r), (r = r.parentNode);
        return M(e);
    }
    function Fr(i) {
        var e = this;
        return typeof i == "undefined" ? M([]) : (e.is(i) || (e = e.parents(i).eq(0)), e);
    }
    function Rr(i) {
        for (var e = [], t = 0; t < this.length; t += 1) for (var r = this[t].querySelectorAll(i), n = 0; n < r.length; n += 1) e.push(r[n]);
        return M(e);
    }
    function Hr(i) {
        for (var e = [], t = 0; t < this.length; t += 1) for (var r = this[t].children, n = 0; n < r.length; n += 1) (!i || M(r[n]).is(i)) && e.push(r[n]);
        return M(e);
    }
    function Vr() {
        for (var i = 0; i < this.length; i += 1) this[i].parentNode && this[i].parentNode.removeChild(this[i]);
        return this;
    }
    var Da = "resize scroll".split(" ");
    function $(i) {
        function e() {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            if (typeof r[0] == "undefined") {
                for (var s = 0; s < this.length; s += 1) Da.indexOf(i) < 0 && (i in this[s] ? this[s][i]() : M(this[s]).trigger(i));
                return this;
            }
            return this.on.apply(this, [i].concat(r));
        }
        return e;
    }
    var Bo = $("click"),
        _o = $("blur"),
        zo = $("focus"),
        No = $("focusin"),
        $o = $("focusout"),
        jo = $("keyup"),
        Fo = $("keydown"),
        Ro = $("keypress"),
        Ho = $("submit"),
        Vo = $("change"),
        Wo = $("mousedown"),
        qo = $("mousemove"),
        Go = $("mouseup"),
        Yo = $("mouseenter"),
        Xo = $("mouseleave"),
        Uo = $("mouseout"),
        Ko = $("mouseover"),
        Qo = $("touchstart"),
        Jo = $("touchend"),
        Zo = $("touchmove"),
        el = $("resize"),
        tl = $("scroll"),
        Wr = {
            addClass: lr,
            removeClass: ur,
            hasClass: fr,
            toggleClass: cr,
            attr: dr,
            removeAttr: hr,
            transform: pr,
            transition: vr,
            on: mr,
            off: gr,
            trigger: yr,
            transitionEnd: wr,
            outerWidth: br,
            outerHeight: Tr,
            styles: xr,
            offset: Sr,
            css: Er,
            each: Cr,
            html: Mr,
            text: Lr,
            is: Ar,
            index: Pr,
            eq: Or,
            append: Ir,
            prepend: Dr,
            next: Br,
            nextAll: _r,
            prev: zr,
            prevAll: Nr,
            parent: $r,
            parents: jr,
            closest: Fr,
            find: Rr,
            children: Hr,
            filter: kr,
            remove: Vr,
        };
    Object.keys(Wr).forEach(function (i) {
        M.fn[i] = Wr[i];
    });
    var L = M;
    function qr(i) {
        var e = i;
        Object.keys(e).forEach(function (t) {
            try {
                e[t] = null;
            } catch (r) {}
            try {
                delete e[t];
            } catch (r) {}
        });
    }
    function oe(i, e) {
        return e === void 0 && (e = 0), setTimeout(i, e);
    }
    function X() {
        return Date.now();
    }
    function Gr(i, e) {
        e === void 0 && (e = "x");
        var t = D(),
            r,
            n,
            s,
            a = t.getComputedStyle(i, null);
        return (
            t.WebKitCSSMatrix
                ? ((n = a.transform || a.webkitTransform),
                  n.split(",").length > 6 &&
                      (n = n
                          .split(", ")
                          .map(function (o) {
                              return o.replace(",", ".");
                          })
                          .join(", ")),
                  (s = new t.WebKitCSSMatrix(n === "none" ? "" : n)))
                : ((s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (r = s.toString().split(","))),
            e === "x" && (t.WebKitCSSMatrix ? (n = s.m41) : r.length === 16 ? (n = parseFloat(r[12])) : (n = parseFloat(r[4]))),
            e === "y" && (t.WebKitCSSMatrix ? (n = s.m42) : r.length === 16 ? (n = parseFloat(r[13])) : (n = parseFloat(r[5]))),
            n || 0
        );
    }
    function be(i) {
        return typeof i == "object" && i !== null && i.constructor && i.constructor === Object;
    }
    function P() {
        for (var i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = 1; e < arguments.length; e += 1) {
            var t = e < 0 || arguments.length <= e ? void 0 : arguments[e];
            if (t != null)
                for (var r = Object.keys(Object(t)), n = 0, s = r.length; n < s; n += 1) {
                    var a = r[n],
                        o = Object.getOwnPropertyDescriptor(t, a);
                    o !== void 0 && o.enumerable && (be(i[a]) && be(t[a]) ? P(i[a], t[a]) : !be(i[a]) && be(t[a]) ? ((i[a] = {}), P(i[a], t[a])) : (i[a] = t[a]));
                }
        }
        return i;
    }
    function U(i, e) {
        Object.keys(e).forEach(function (t) {
            be(e[t]) &&
                Object.keys(e[t]).forEach(function (r) {
                    typeof e[t][r] == "function" && (e[t][r] = e[t][r].bind(i));
                }),
                (i[t] = e[t]);
        });
    }
    var nt;
    function Ba() {
        var i = D(),
            e = F();
        return {
            touch: !!("ontouchstart" in i || (i.DocumentTouch && e instanceof i.DocumentTouch)),
            pointerEvents: !!i.PointerEvent && "maxTouchPoints" in i.navigator && i.navigator.maxTouchPoints >= 0,
            observer: (function () {
                return "MutationObserver" in i || "WebkitMutationObserver" in i;
            })(),
            passiveListener: (function () {
                var r = !1;
                try {
                    var n = Object.defineProperty({}, "passive", {
                        get: function () {
                            r = !0;
                        },
                    });
                    i.addEventListener("testPassiveListener", null, n);
                } catch (s) {}
                return r;
            })(),
            gestures: (function () {
                return "ongesturestart" in i;
            })(),
        };
    }
    function $e() {
        return nt || (nt = Ba()), nt;
    }
    var st;
    function _a(i) {
        var e = i === void 0 ? {} : i,
            t = e.userAgent,
            r = $e(),
            n = D(),
            s = n.navigator.platform,
            a = t || n.navigator.userAgent,
            o = { ios: !1, android: !1 },
            l = n.screen.width,
            u = n.screen.height,
            c = a.match(/(Android);?[\s\/]+([\d.]+)?/),
            f = a.match(/(iPad).*OS\s([\d_]+)/),
            d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !f && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = s === "Win32",
            b = s === "MacIntel",
            T = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
        return (
            !f && b && r.touch && T.indexOf(l + "x" + u) >= 0 && ((f = a.match(/(Version)\/([\d.]+)/)), f || (f = [0, 1, "13_0_0"]), (b = !1)),
            c && !m && ((o.os = "android"), (o.android = !0)),
            (f || h || d) && ((o.os = "ios"), (o.ios = !0)),
            o
        );
    }
    function Yr(i) {
        return i === void 0 && (i = {}), st || (st = _a(i)), st;
    }
    var at;
    function za() {
        var i = D();
        function e() {
            var t = i.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
        }
        return { isEdge: !!i.navigator.userAgent.match(/Edge/g), isSafari: e(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent) };
    }
    function Xr() {
        return at || (at = za()), at;
    }
    var Ur = {
        name: "resize",
        create: function () {
            var e = this;
            P(e, {
                resize: {
                    resizeHandler: function () {
                        if (!e || e.destroyed || !e.initialized) return;
                        e.emit("beforeResize"), e.emit("resize");
                    },
                    orientationChangeHandler: function () {
                        if (!e || e.destroyed || !e.initialized) return;
                        e.emit("orientationchange");
                    },
                },
            });
        },
        on: {
            init: function (e) {
                var t = D();
                t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler);
            },
            destroy: function (e) {
                var t = D();
                t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
            },
        },
    };
    function ot() {
        return (
            (ot =
                Object.assign ||
                function (i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
                    }
                    return i;
                }),
            ot.apply(this, arguments)
        );
    }
    var Na = {
            attach: function (e, t) {
                t === void 0 && (t = {});
                var r = D(),
                    n = this,
                    s = r.MutationObserver || r.WebkitMutationObserver,
                    a = new s(function (o) {
                        if (o.length === 1) {
                            n.emit("observerUpdate", o[0]);
                            return;
                        }
                        var l = function () {
                            n.emit("observerUpdate", o[0]);
                        };
                        r.requestAnimationFrame ? r.requestAnimationFrame(l) : r.setTimeout(l, 0);
                    });
                a.observe(e, {
                    attributes: typeof t.attributes == "undefined" ? !0 : t.attributes,
                    childList: typeof t.childList == "undefined" ? !0 : t.childList,
                    characterData: typeof t.characterData == "undefined" ? !0 : t.characterData,
                }),
                    n.observer.observers.push(a);
            },
            init: function () {
                var e = this;
                if (!e.support.observer || !e.params.observer) return;
                if (e.params.observeParents) for (var t = e.$el.parents(), r = 0; r < t.length; r += 1) e.observer.attach(t[r]);
                e.observer.attach(e.$el[0], { childList: e.params.observeSlideChildren }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
            },
            destroy: function () {
                var e = this;
                e.observer.observers.forEach(function (t) {
                    t.disconnect();
                }),
                    (e.observer.observers = []);
            },
        },
        Kr = {
            name: "observer",
            params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
            create: function () {
                var e = this;
                U(e, { observer: ot({}, Na, { observers: [] }) });
            },
            on: {
                init: function (e) {
                    e.observer.init();
                },
                destroy: function (e) {
                    e.observer.destroy();
                },
            },
        },
        Qr = {
            useParams: function (e) {
                var t = this;
                if (!t.modules) return;
                Object.keys(t.modules).forEach(function (r) {
                    var n = t.modules[r];
                    n.params && P(e, n.params);
                });
            },
            useModules: function (e) {
                e === void 0 && (e = {});
                var t = this;
                if (!t.modules) return;
                Object.keys(t.modules).forEach(function (r) {
                    var n = t.modules[r],
                        s = e[r] || {};
                    n.on &&
                        t.on &&
                        Object.keys(n.on).forEach(function (a) {
                            t.on(a, n.on[a]);
                        }),
                        n.create && n.create.bind(t)(s);
                });
            },
        },
        Jr = {
            on: function (e, t, r) {
                var n = this;
                if (typeof t != "function") return n;
                var s = r ? "unshift" : "push";
                return (
                    e.split(" ").forEach(function (a) {
                        n.eventsListeners[a] || (n.eventsListeners[a] = []), n.eventsListeners[a][s](t);
                    }),
                    n
                );
            },
            once: function (e, t, r) {
                var n = this;
                if (typeof t != "function") return n;
                function s() {
                    n.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                    for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                    t.apply(n, o);
                }
                return (s.__emitterProxy = t), n.on(e, s, r);
            },
            onAny: function (e, t) {
                var r = this;
                if (typeof e != "function") return r;
                var n = t ? "unshift" : "push";
                return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r;
            },
            offAny: function (e) {
                var t = this;
                if (!t.eventsAnyListeners) return t;
                var r = t.eventsAnyListeners.indexOf(e);
                return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
            },
            off: function (e, t) {
                var r = this;
                return (
                    r.eventsListeners &&
                        e.split(" ").forEach(function (n) {
                            typeof t == "undefined"
                                ? (r.eventsListeners[n] = [])
                                : r.eventsListeners[n] &&
                                  r.eventsListeners[n].forEach(function (s, a) {
                                      (s === t || (s.__emitterProxy && s.__emitterProxy === t)) && r.eventsListeners[n].splice(a, 1);
                                  });
                        }),
                    r
                );
            },
            emit: function () {
                var e = this;
                if (!e.eventsListeners) return e;
                for (var t, r, n, s = arguments.length, a = new Array(s), o = 0; o < s; o++) a[o] = arguments[o];
                typeof a[0] == "string" || Array.isArray(a[0]) ? ((t = a[0]), (r = a.slice(1, a.length)), (n = e)) : ((t = a[0].events), (r = a[0].data), (n = a[0].context || e)), r.unshift(n);
                var l = Array.isArray(t) ? t : t.split(" ");
                return (
                    l.forEach(function (u) {
                        e.eventsAnyListeners &&
                            e.eventsAnyListeners.length &&
                            e.eventsAnyListeners.forEach(function (c) {
                                c.apply(n, [u].concat(r));
                            }),
                            e.eventsListeners &&
                                e.eventsListeners[u] &&
                                e.eventsListeners[u].forEach(function (c) {
                                    c.apply(n, r);
                                });
                    }),
                    e
                );
            },
        };
    function lt() {
        var i = this,
            e,
            t,
            r = i.$el;
        if (
            (typeof i.params.width != "undefined" && i.params.width !== null ? (e = i.params.width) : (e = r[0].clientWidth),
            typeof i.params.height != "undefined" && i.params.height !== null ? (t = i.params.height) : (t = r[0].clientHeight),
            (e === 0 && i.isHorizontal()) || (t === 0 && i.isVertical()))
        )
            return;
        (e = e - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10)),
            (t = t - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10)),
            Number.isNaN(e) && (e = 0),
            Number.isNaN(t) && (t = 0),
            P(i, { width: e, height: t, size: i.isHorizontal() ? e : t });
    }
    function ut() {
        var i = this,
            e = D(),
            t = i.params,
            r = i.$wrapperEl,
            n = i.size,
            s = i.rtlTranslate,
            a = i.wrongRTL,
            o = i.virtual && t.virtual.enabled,
            l = o ? i.virtual.slides.length : i.slides.length,
            u = r.children("." + i.params.slideClass),
            c = o ? i.virtual.slides.length : u.length,
            f = [],
            d = [],
            h = [];
        function m(G, me) {
            return t.cssMode ? !(me === u.length - 1) : !0;
        }
        var b = t.slidesOffsetBefore;
        typeof b == "function" && (b = t.slidesOffsetBefore.call(i));
        var T = t.slidesOffsetAfter;
        typeof T == "function" && (T = t.slidesOffsetAfter.call(i));
        var C = i.snapGrid.length,
            w = i.slidesGrid.length,
            v = t.spaceBetween,
            p = -b,
            g = 0,
            y = 0;
        if (typeof n == "undefined") return;
        typeof v == "string" && v.indexOf("%") >= 0 && (v = (parseFloat(v.replace("%", "")) / 100) * n), (i.virtualSize = -v), s ? u.css({ marginLeft: "", marginTop: "" }) : u.css({ marginRight: "", marginBottom: "" });
        var x;
        t.slidesPerColumn > 1 &&
            (Math.floor(c / t.slidesPerColumn) === c / i.params.slidesPerColumn ? (x = c) : (x = Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
            t.slidesPerView !== "auto" && t.slidesPerColumnFill === "row" && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
        for (var S, E = t.slidesPerColumn, k = x / E, j = Math.floor(c / t.slidesPerColumn), O = 0; O < c; O += 1) {
            S = 0;
            var _ = u.eq(O);
            if (t.slidesPerColumn > 1) {
                var N = void 0,
                    R = void 0,
                    z = void 0;
                if (t.slidesPerColumnFill === "row" && t.slidesPerGroup > 1) {
                    var I = Math.floor(O / (t.slidesPerGroup * t.slidesPerColumn)),
                        se = O - t.slidesPerColumn * t.slidesPerGroup * I,
                        le = I === 0 ? t.slidesPerGroup : Math.min(Math.ceil((c - I * E * t.slidesPerGroup) / E), t.slidesPerGroup);
                    (z = Math.floor(se / le)), (R = se - z * le + I * t.slidesPerGroup), (N = R + (z * x) / E), _.css({ "-webkit-box-ordinal-group": N, "-moz-box-ordinal-group": N, "-ms-flex-order": N, "-webkit-order": N, order: N });
                } else t.slidesPerColumnFill === "column" ? ((R = Math.floor(O / E)), (z = O - R * E), (R > j || (R === j && z === E - 1)) && ((z += 1), z >= E && ((z = 0), (R += 1)))) : ((z = Math.floor(O / k)), (R = O - z * k));
                _.css("margin-" + (i.isHorizontal() ? "top" : "left"), z !== 0 && t.spaceBetween && t.spaceBetween + "px");
            }
            if (_.css("display") === "none") continue;
            if (t.slidesPerView === "auto") {
                var H = e.getComputedStyle(_[0], null),
                    Ce = _[0].style.transform,
                    ve = _[0].style.webkitTransform;
                if ((Ce && (_[0].style.transform = "none"), ve && (_[0].style.webkitTransform = "none"), t.roundLengths)) S = i.isHorizontal() ? _.outerWidth(!0) : _.outerHeight(!0);
                else if (i.isHorizontal()) {
                    var pi = parseFloat(H.getPropertyValue("width") || 0),
                        us = parseFloat(H.getPropertyValue("padding-left") || 0),
                        cs = parseFloat(H.getPropertyValue("padding-right") || 0),
                        vi = parseFloat(H.getPropertyValue("margin-left") || 0),
                        mi = parseFloat(H.getPropertyValue("margin-right") || 0),
                        gi = H.getPropertyValue("box-sizing");
                    if (gi && gi === "border-box") S = pi + vi + mi;
                    else {
                        var yi = _[0],
                            fs = yi.clientWidth,
                            ds = yi.offsetWidth;
                        S = pi + us + cs + vi + mi + (ds - fs);
                    }
                } else {
                    var wi = parseFloat(H.getPropertyValue("height") || 0),
                        hs = parseFloat(H.getPropertyValue("padding-top") || 0),
                        ps = parseFloat(H.getPropertyValue("padding-bottom") || 0),
                        bi = parseFloat(H.getPropertyValue("margin-top") || 0),
                        Ti = parseFloat(H.getPropertyValue("margin-bottom") || 0),
                        Si = H.getPropertyValue("box-sizing");
                    if (Si && Si === "border-box") S = wi + bi + Ti;
                    else {
                        var xi = _[0],
                            vs = xi.clientHeight,
                            ms = xi.offsetHeight;
                        S = wi + hs + ps + bi + Ti + (ms - vs);
                    }
                }
                Ce && (_[0].style.transform = Ce), ve && (_[0].style.webkitTransform = ve), t.roundLengths && (S = Math.floor(S));
            } else (S = (n - (t.slidesPerView - 1) * v) / t.slidesPerView), t.roundLengths && (S = Math.floor(S)), u[O] && (i.isHorizontal() ? (u[O].style.width = S + "px") : (u[O].style.height = S + "px"));
            u[O] && (u[O].swiperSlideSize = S),
                h.push(S),
                t.centeredSlides
                    ? ((p = p + S / 2 + g / 2 + v),
                      g === 0 && O !== 0 && (p = p - n / 2 - v),
                      O === 0 && (p = p - n / 2 - v),
                      Math.abs(p) < 1 / 1e3 && (p = 0),
                      t.roundLengths && (p = Math.floor(p)),
                      y % t.slidesPerGroup === 0 && f.push(p),
                      d.push(p))
                    : (t.roundLengths && (p = Math.floor(p)), (y - Math.min(i.params.slidesPerGroupSkip, y)) % i.params.slidesPerGroup === 0 && f.push(p), d.push(p), (p = p + S + v)),
                (i.virtualSize += S + v),
                (g = S),
                (y += 1);
        }
        i.virtualSize = Math.max(i.virtualSize, n) + T;
        var ue;
        if (
            (s && a && (t.effect === "slide" || t.effect === "coverflow") && r.css({ width: i.virtualSize + t.spaceBetween + "px" }),
            t.setWrapperSize && (i.isHorizontal() ? r.css({ width: i.virtualSize + t.spaceBetween + "px" }) : r.css({ height: i.virtualSize + t.spaceBetween + "px" })),
            t.slidesPerColumn > 1 &&
                ((i.virtualSize = (S + t.spaceBetween) * x),
                (i.virtualSize = Math.ceil(i.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                i.isHorizontal() ? r.css({ width: i.virtualSize + t.spaceBetween + "px" }) : r.css({ height: i.virtualSize + t.spaceBetween + "px" }),
                t.centeredSlides))
        ) {
            ue = [];
            for (var ke = 0; ke < f.length; ke += 1) {
                var qe = f[ke];
                t.roundLengths && (qe = Math.floor(qe)), f[ke] < i.virtualSize + f[0] && ue.push(qe);
            }
            f = ue;
        }
        if (!t.centeredSlides) {
            ue = [];
            for (var Me = 0; Me < f.length; Me += 1) {
                var Ge = f[Me];
                t.roundLengths && (Ge = Math.floor(Ge)), f[Me] <= i.virtualSize - n && ue.push(Ge);
            }
            (f = ue), Math.floor(i.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(i.virtualSize - n);
        }
        if (
            (f.length === 0 && (f = [0]),
            t.spaceBetween !== 0 && (i.isHorizontal() ? (s ? u.filter(m).css({ marginLeft: v + "px" }) : u.filter(m).css({ marginRight: v + "px" })) : u.filter(m).css({ marginBottom: v + "px" })),
            t.centeredSlides && t.centeredSlidesBounds)
        ) {
            var Ye = 0;
            h.forEach(function (G) {
                Ye += G + (t.spaceBetween ? t.spaceBetween : 0);
            }),
                (Ye -= t.spaceBetween);
            var Ei = Ye - n;
            f = f.map(function (G) {
                return G < 0 ? -b : G > Ei ? Ei + T : G;
            });
        }
        if (t.centerInsufficientSlides) {
            var Le = 0;
            if (
                (h.forEach(function (G) {
                    Le += G + (t.spaceBetween ? t.spaceBetween : 0);
                }),
                (Le -= t.spaceBetween),
                Le < n)
            ) {
                var Ci = (n - Le) / 2;
                f.forEach(function (G, me) {
                    f[me] = G - Ci;
                }),
                    d.forEach(function (G, me) {
                        d[me] = G + Ci;
                    });
            }
        }
        P(i, { slides: u, snapGrid: f, slidesGrid: d, slidesSizesGrid: h }),
            c !== l && i.emit("slidesLengthChange"),
            f.length !== C && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")),
            d.length !== w && i.emit("slidesGridLengthChange"),
            (t.watchSlidesProgress || t.watchSlidesVisibility) && i.updateSlidesOffset();
    }
    function ct(i) {
        var e = this,
            t = [],
            r = 0,
            n;
        if ((typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed), e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1))
            if (e.params.centeredSlides)
                e.visibleSlides.each(function (o) {
                    t.push(o);
                });
            else
                for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
                    var s = e.activeIndex + n;
                    if (s > e.slides.length) break;
                    t.push(e.slides.eq(s)[0]);
                }
        else t.push(e.slides.eq(e.activeIndex)[0]);
        for (n = 0; n < t.length; n += 1)
            if (typeof t[n] != "undefined") {
                var a = t[n].offsetHeight;
                r = a > r ? a : r;
            }
        r && e.$wrapperEl.css("height", r + "px");
    }
    function ft() {
        for (var i = this, e = i.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = i.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
    }
    function dt(i) {
        i === void 0 && (i = (this && this.translate) || 0);
        var e = this,
            t = e.params,
            r = e.slides,
            n = e.rtlTranslate;
        if (r.length === 0) return;
        typeof r[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
        var s = -i;
        n && (s = i), r.removeClass(t.slideVisibleClass), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
        for (var a = 0; a < r.length; a += 1) {
            var o = r[a],
                l = (s + (t.centeredSlides ? e.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);
            if (t.watchSlidesVisibility || (t.centeredSlides && t.autoHeight)) {
                var u = -(s - o.swiperSlideOffset),
                    c = u + e.slidesSizesGrid[a],
                    f = (u >= 0 && u < e.size - 1) || (c > 1 && c <= e.size) || (u <= 0 && c >= e.size);
                f && (e.visibleSlides.push(o), e.visibleSlidesIndexes.push(a), r.eq(a).addClass(t.slideVisibleClass));
            }
            o.progress = n ? -l : l;
        }
        e.visibleSlides = L(e.visibleSlides);
    }
    function ht(i) {
        var e = this;
        if (typeof i == "undefined") {
            var t = e.rtlTranslate ? -1 : 1;
            i = (e && e.translate && e.translate * t) || 0;
        }
        var r = e.params,
            n = e.maxTranslate() - e.minTranslate(),
            s = e.progress,
            a = e.isBeginning,
            o = e.isEnd,
            l = a,
            u = o;
        n === 0 ? ((s = 0), (a = !0), (o = !0)) : ((s = (i - e.minTranslate()) / n), (a = s <= 0), (o = s >= 1)),
            P(e, { progress: s, isBeginning: a, isEnd: o }),
            (r.watchSlidesProgress || r.watchSlidesVisibility || (r.centeredSlides && r.autoHeight)) && e.updateSlidesProgress(i),
            a && !l && e.emit("reachBeginning toEdge"),
            o && !u && e.emit("reachEnd toEdge"),
            ((l && !a) || (u && !o)) && e.emit("fromEdge"),
            e.emit("progress", s);
    }
    function pt() {
        var i = this,
            e = i.slides,
            t = i.params,
            r = i.$wrapperEl,
            n = i.activeIndex,
            s = i.realIndex,
            a = i.virtual && t.virtual.enabled;
        e.removeClass(t.slideActiveClass + " " + t.slideNextClass + " " + t.slidePrevClass + " " + t.slideDuplicateActiveClass + " " + t.slideDuplicateNextClass + " " + t.slideDuplicatePrevClass);
        var o;
        a ? (o = i.$wrapperEl.find("." + t.slideClass + '[data-swiper-slide-index="' + n + '"]')) : (o = e.eq(n)),
            o.addClass(t.slideActiveClass),
            t.loop &&
                (o.hasClass(t.slideDuplicateClass)
                    ? r.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(t.slideDuplicateActiveClass)
                    : r.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(t.slideDuplicateActiveClass));
        var l = o
            .nextAll("." + t.slideClass)
            .eq(0)
            .addClass(t.slideNextClass);
        t.loop && l.length === 0 && ((l = e.eq(0)), l.addClass(t.slideNextClass));
        var u = o
            .prevAll("." + t.slideClass)
            .eq(0)
            .addClass(t.slidePrevClass);
        t.loop && u.length === 0 && ((u = e.eq(-1)), u.addClass(t.slidePrevClass)),
            t.loop &&
                (l.hasClass(t.slideDuplicateClass)
                    ? r.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(t.slideDuplicateNextClass)
                    : r.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(t.slideDuplicateNextClass),
                u.hasClass(t.slideDuplicateClass)
                    ? r.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(t.slideDuplicatePrevClass)
                    : r.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(t.slideDuplicatePrevClass)),
            i.emitSlidesClasses();
    }
    function vt(i) {
        var e = this,
            t = e.rtlTranslate ? e.translate : -e.translate,
            r = e.slidesGrid,
            n = e.snapGrid,
            s = e.params,
            a = e.activeIndex,
            o = e.realIndex,
            l = e.snapIndex,
            u = i,
            c;
        if (typeof u == "undefined") {
            for (var f = 0; f < r.length; f += 1) typeof r[f + 1] != "undefined" ? (t >= r[f] && t < r[f + 1] - (r[f + 1] - r[f]) / 2 ? (u = f) : t >= r[f] && t < r[f + 1] && (u = f + 1)) : t >= r[f] && (u = f);
            s.normalizeSlideIndex && (u < 0 || typeof u == "undefined") && (u = 0);
        }
        if (n.indexOf(t) >= 0) c = n.indexOf(t);
        else {
            var d = Math.min(s.slidesPerGroupSkip, u);
            c = d + Math.floor((u - d) / s.slidesPerGroup);
        }
        if ((c >= n.length && (c = n.length - 1), u === a)) {
            c !== l && ((e.snapIndex = c), e.emit("snapIndexChange"));
            return;
        }
        var h = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
        P(e, { snapIndex: c, realIndex: h, previousIndex: a, activeIndex: u }),
            e.emit("activeIndexChange"),
            e.emit("snapIndexChange"),
            o !== h && e.emit("realIndexChange"),
            (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
    }
    function mt(i) {
        var e = this,
            t = e.params,
            r = L(i.target).closest("." + t.slideClass)[0],
            n = !1;
        if (r) for (var s = 0; s < e.slides.length; s += 1) e.slides[s] === r && (n = !0);
        if (r && n) (e.clickedSlide = r), e.virtual && e.params.virtual.enabled ? (e.clickedIndex = parseInt(L(r).attr("data-swiper-slide-index"), 10)) : (e.clickedIndex = L(r).index());
        else {
            (e.clickedSlide = void 0), (e.clickedIndex = void 0);
            return;
        }
        t.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide();
    }
    var Zr = { updateSize: lt, updateSlides: ut, updateAutoHeight: ct, updateSlidesOffset: ft, updateSlidesProgress: dt, updateProgress: ht, updateSlidesClasses: pt, updateActiveIndex: vt, updateClickedSlide: mt };
    function gt(i) {
        i === void 0 && (i = this.isHorizontal() ? "x" : "y");
        var e = this,
            t = e.params,
            r = e.rtlTranslate,
            n = e.translate,
            s = e.$wrapperEl;
        if (t.virtualTranslate) return r ? -n : n;
        if (t.cssMode) return n;
        var a = Gr(s[0], i);
        return r && (a = -a), a || 0;
    }
    function yt(i, e) {
        var t = this,
            r = t.rtlTranslate,
            n = t.params,
            s = t.$wrapperEl,
            a = t.wrapperEl,
            o = t.progress,
            l = 0,
            u = 0,
            c = 0;
        t.isHorizontal() ? (l = r ? -i : i) : (u = i),
            n.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
            n.cssMode ? (a[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -u) : n.virtualTranslate || s.transform("translate3d(" + l + "px, " + u + "px, " + c + "px)"),
            (t.previousTranslate = t.translate),
            (t.translate = t.isHorizontal() ? l : u);
        var f,
            d = t.maxTranslate() - t.minTranslate();
        d === 0 ? (f = 0) : (f = (i - t.minTranslate()) / d), f !== o && t.updateProgress(i), t.emit("setTranslate", t.translate, e);
    }
    function wt() {
        return -this.snapGrid[0];
    }
    function bt() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }
    function Tt(i, e, t, r, n) {
        i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = !0);
        var s = this,
            a = s.params,
            o = s.wrapperEl;
        if (s.animating && a.preventInteractionOnTransition) return !1;
        var l = s.minTranslate(),
            u = s.maxTranslate(),
            c;
        if ((r && i > l ? (c = l) : r && i < u ? (c = u) : (c = i), s.updateProgress(c), a.cssMode)) {
            var f = s.isHorizontal();
            if (e === 0) o[f ? "scrollLeft" : "scrollTop"] = -c;
            else if (o.scrollTo) {
                var d;
                o.scrollTo(((d = {}), (d[f ? "left" : "top"] = -c), (d.behavior = "smooth"), d));
            } else o[f ? "scrollLeft" : "scrollTop"] = -c;
            return !0;
        }
        return (
            e === 0
                ? (s.setTransition(0), s.setTranslate(c), t && (s.emit("beforeTransitionStart", e, n), s.emit("transitionEnd")))
                : (s.setTransition(e),
                  s.setTranslate(c),
                  t && (s.emit("beforeTransitionStart", e, n), s.emit("transitionStart")),
                  s.animating ||
                      ((s.animating = !0),
                      s.onTranslateToWrapperTransitionEnd ||
                          (s.onTranslateToWrapperTransitionEnd = function (m) {
                              if (!s || s.destroyed) return;
                              if (m.target !== this) return;
                              s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                                  s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd),
                                  (s.onTranslateToWrapperTransitionEnd = null),
                                  delete s.onTranslateToWrapperTransitionEnd,
                                  t && s.emit("transitionEnd");
                          }),
                      s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                      s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))),
            !0
        );
    }
    var en = { getTranslate: gt, setTranslate: yt, minTranslate: wt, maxTranslate: bt, translateTo: Tt };
    function St(i, e) {
        var t = this;
        t.params.cssMode || t.$wrapperEl.transition(i), t.emit("setTransition", i, e);
    }
    function xt(i, e) {
        i === void 0 && (i = !0);
        var t = this,
            r = t.activeIndex,
            n = t.params,
            s = t.previousIndex;
        if (n.cssMode) return;
        n.autoHeight && t.updateAutoHeight();
        var a = e;
        if ((a || (r > s ? (a = "next") : r < s ? (a = "prev") : (a = "reset")), t.emit("transitionStart"), i && r !== s)) {
            if (a === "reset") {
                t.emit("slideResetTransitionStart");
                return;
            }
            t.emit("slideChangeTransitionStart"), a === "next" ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart");
        }
    }
    function Et(i, e) {
        i === void 0 && (i = !0);
        var t = this,
            r = t.activeIndex,
            n = t.previousIndex,
            s = t.params;
        if (((t.animating = !1), s.cssMode)) return;
        t.setTransition(0);
        var a = e;
        if ((a || (r > n ? (a = "next") : r < n ? (a = "prev") : (a = "reset")), t.emit("transitionEnd"), i && r !== n)) {
            if (a === "reset") {
                t.emit("slideResetTransitionEnd");
                return;
            }
            t.emit("slideChangeTransitionEnd"), a === "next" ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd");
        }
    }
    var tn = { setTransition: St, transitionStart: xt, transitionEnd: Et };
    function Ct(i, e, t, r) {
        if ((i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i != "number" && typeof i != "string"))
            throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof i + "] given.");
        if (typeof i == "string") {
            var n = parseInt(i, 10),
                s = isFinite(n);
            if (!s) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + i + "] given.");
            i = n;
        }
        var a = this,
            o = i;
        o < 0 && (o = 0);
        var l = a.params,
            u = a.snapGrid,
            c = a.slidesGrid,
            f = a.previousIndex,
            d = a.activeIndex,
            h = a.rtlTranslate,
            m = a.wrapperEl;
        if (a.animating && l.preventInteractionOnTransition) return !1;
        var b = Math.min(a.params.slidesPerGroupSkip, o),
            T = b + Math.floor((o - b) / a.params.slidesPerGroup);
        T >= u.length && (T = u.length - 1), (d || l.initialSlide || 0) === (f || 0) && t && a.emit("beforeSlideChangeStart");
        var C = -u[T];
        if ((a.updateProgress(C), l.normalizeSlideIndex)) for (var w = 0; w < c.length; w += 1) -Math.floor(C * 100) >= Math.floor(c[w] * 100) && (o = w);
        if (a.initialized && o !== d) {
            if (!a.allowSlideNext && C < a.translate && C < a.minTranslate()) return !1;
            if (!a.allowSlidePrev && C > a.translate && C > a.maxTranslate() && (d || 0) !== o) return !1;
        }
        var v;
        if ((o > d ? (v = "next") : o < d ? (v = "prev") : (v = "reset"), (h && -C === a.translate) || (!h && C === a.translate)))
            return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), l.effect !== "slide" && a.setTranslate(C), v !== "reset" && (a.transitionStart(t, v), a.transitionEnd(t, v)), !1;
        if (l.cssMode) {
            var p = a.isHorizontal(),
                g = -C;
            if ((h && (g = m.scrollWidth - m.offsetWidth - g), e === 0)) m[p ? "scrollLeft" : "scrollTop"] = g;
            else if (m.scrollTo) {
                var y;
                m.scrollTo(((y = {}), (y[p ? "left" : "top"] = g), (y.behavior = "smooth"), y));
            } else m[p ? "scrollLeft" : "scrollTop"] = g;
            return !0;
        }
        return (
            e === 0
                ? (a.setTransition(0), a.setTranslate(C), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", e, r), a.transitionStart(t, v), a.transitionEnd(t, v))
                : (a.setTransition(e),
                  a.setTranslate(C),
                  a.updateActiveIndex(o),
                  a.updateSlidesClasses(),
                  a.emit("beforeTransitionStart", e, r),
                  a.transitionStart(t, v),
                  a.animating ||
                      ((a.animating = !0),
                      a.onSlideToWrapperTransitionEnd ||
                          (a.onSlideToWrapperTransitionEnd = function (S) {
                              if (!a || a.destroyed) return;
                              if (S.target !== this) return;
                              a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                                  a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd),
                                  (a.onSlideToWrapperTransitionEnd = null),
                                  delete a.onSlideToWrapperTransitionEnd,
                                  a.transitionEnd(t, v);
                          }),
                      a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd),
                      a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))),
            !0
        );
    }
    function kt(i, e, t, r) {
        i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
        var n = this,
            s = i;
        return n.params.loop && (s += n.loopedSlides), n.slideTo(s, e, t, r);
    }
    function Mt(i, e, t) {
        i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
        var r = this,
            n = r.params,
            s = r.animating,
            a = r.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
        if (n.loop) {
            if (s && n.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
        }
        return r.slideTo(r.activeIndex + a, i, e, t);
    }
    function Lt(i, e, t) {
        i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
        var r = this,
            n = r.params,
            s = r.animating,
            a = r.snapGrid,
            o = r.slidesGrid,
            l = r.rtlTranslate;
        if (n.loop) {
            if (s && n.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
        }
        var u = l ? r.translate : -r.translate;
        function c(T) {
            return T < 0 ? -Math.floor(Math.abs(T)) : Math.floor(T);
        }
        var f = c(u),
            d = a.map(function (T) {
                return c(T);
            }),
            h = a[d.indexOf(f)],
            m = a[d.indexOf(f) - 1];
        typeof m == "undefined" &&
            n.cssMode &&
            a.forEach(function (T) {
                !m && f >= T && (m = T);
            });
        var b;
        return typeof m != "undefined" && ((b = o.indexOf(m)), b < 0 && (b = r.activeIndex - 1)), r.slideTo(b, i, e, t);
    }
    function At(i, e, t) {
        i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
        var r = this;
        return r.slideTo(r.activeIndex, i, e, t);
    }
    function Pt(i, e, t, r) {
        i === void 0 && (i = this.params.speed), e === void 0 && (e = !0), r === void 0 && (r = 0.5);
        var n = this,
            s = n.activeIndex,
            a = Math.min(n.params.slidesPerGroupSkip, s),
            o = a + Math.floor((s - a) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
            var u = n.snapGrid[o],
                c = n.snapGrid[o + 1];
            l - u > (c - u) * r && (s += n.params.slidesPerGroup);
        } else {
            var f = n.snapGrid[o - 1],
                d = n.snapGrid[o];
            l - f <= (d - f) * r && (s -= n.params.slidesPerGroup);
        }
        return (s = Math.max(s, 0)), (s = Math.min(s, n.slidesGrid.length - 1)), n.slideTo(s, i, e, t);
    }
    function Ot() {
        var i = this,
            e = i.params,
            t = i.$wrapperEl,
            r = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView,
            n = i.clickedIndex,
            s;
        if (e.loop) {
            if (i.animating) return;
            (s = parseInt(L(i.clickedSlide).attr("data-swiper-slide-index"), 10)),
                e.centeredSlides
                    ? n < i.loopedSlides - r / 2 || n > i.slides.length - i.loopedSlides + r / 2
                        ? (i.loopFix(),
                          (n = t
                              .children("." + e.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + e.slideDuplicateClass + ")")
                              .eq(0)
                              .index()),
                          oe(function () {
                              i.slideTo(n);
                          }))
                        : i.slideTo(n)
                    : n > i.slides.length - r
                    ? (i.loopFix(),
                      (n = t
                          .children("." + e.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + e.slideDuplicateClass + ")")
                          .eq(0)
                          .index()),
                      oe(function () {
                          i.slideTo(n);
                      }))
                    : i.slideTo(n);
        } else i.slideTo(n);
    }
    var rn = { slideTo: Ct, slideToLoop: kt, slideNext: Mt, slidePrev: Lt, slideReset: At, slideToClosest: Pt, slideToClickedSlide: Ot };
    function It() {
        var i = this,
            e = F(),
            t = i.params,
            r = i.$wrapperEl;
        r.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
        var n = r.children("." + t.slideClass);
        if (t.loopFillGroupWithBlank) {
            var s = t.slidesPerGroup - (n.length % t.slidesPerGroup);
            if (s !== t.slidesPerGroup) {
                for (var a = 0; a < s; a += 1) {
                    var o = L(e.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                    r.append(o);
                }
                n = r.children("." + t.slideClass);
            }
        }
        t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = n.length),
            (i.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10))),
            (i.loopedSlides += t.loopAdditionalSlides),
            i.loopedSlides > n.length && (i.loopedSlides = n.length);
        var l = [],
            u = [];
        n.each(function (d, h) {
            var m = L(d);
            h < i.loopedSlides && u.push(d), h < n.length && h >= n.length - i.loopedSlides && l.push(d), m.attr("data-swiper-slide-index", h);
        });
        for (var c = 0; c < u.length; c += 1) r.append(L(u[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
        for (var f = l.length - 1; f >= 0; f -= 1) r.prepend(L(l[f].cloneNode(!0)).addClass(t.slideDuplicateClass));
    }
    function Dt() {
        var i = this;
        i.emit("beforeLoopFix");
        var e = i.activeIndex,
            t = i.slides,
            r = i.loopedSlides,
            n = i.allowSlidePrev,
            s = i.allowSlideNext,
            a = i.snapGrid,
            o = i.rtlTranslate,
            l;
        (i.allowSlidePrev = !0), (i.allowSlideNext = !0);
        var u = -a[e],
            c = u - i.getTranslate();
        if (e < r) {
            (l = t.length - r * 3 + e), (l += r);
            var f = i.slideTo(l, 0, !1, !0);
            f && c !== 0 && i.setTranslate((o ? -i.translate : i.translate) - c);
        } else if (e >= t.length - r) {
            (l = -t.length + e + r), (l += r);
            var d = i.slideTo(l, 0, !1, !0);
            d && c !== 0 && i.setTranslate((o ? -i.translate : i.translate) - c);
        }
        (i.allowSlidePrev = n), (i.allowSlideNext = s), i.emit("loopFix");
    }
    function Bt() {
        var i = this,
            e = i.$wrapperEl,
            t = i.params,
            r = i.slides;
        e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), r.removeAttr("data-swiper-slide-index");
    }
    var nn = { loopCreate: It, loopFix: Dt, loopDestroy: Bt };
    function _t(i) {
        var e = this;
        if (e.support.touch || !e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode) return;
        var t = e.el;
        (t.style.cursor = "move"), (t.style.cursor = i ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = i ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = i ? "grabbing" : "grab");
    }
    function zt() {
        var i = this;
        if (i.support.touch || (i.params.watchOverflow && i.isLocked) || i.params.cssMode) return;
        i.el.style.cursor = "";
    }
    var sn = { setGrabCursor: _t, unsetGrabCursor: zt };
    function Nt(i) {
        var e = this,
            t = e.$wrapperEl,
            r = e.params;
        if ((r.loop && e.loopDestroy(), typeof i == "object" && "length" in i)) for (var n = 0; n < i.length; n += 1) i[n] && t.append(i[n]);
        else t.append(i);
        r.loop && e.loopCreate(), (r.observer && e.support.observer) || e.update();
    }
    function $t(i) {
        var e = this,
            t = e.params,
            r = e.$wrapperEl,
            n = e.activeIndex;
        t.loop && e.loopDestroy();
        var s = n + 1;
        if (typeof i == "object" && "length" in i) {
            for (var a = 0; a < i.length; a += 1) i[a] && r.prepend(i[a]);
            s = n + i.length;
        } else r.prepend(i);
        t.loop && e.loopCreate(), (t.observer && e.support.observer) || e.update(), e.slideTo(s, 0, !1);
    }
    function jt(i, e) {
        var t = this,
            r = t.$wrapperEl,
            n = t.params,
            s = t.activeIndex,
            a = s;
        n.loop && ((a -= t.loopedSlides), t.loopDestroy(), (t.slides = r.children("." + n.slideClass)));
        var o = t.slides.length;
        if (i <= 0) {
            t.prependSlide(e);
            return;
        }
        if (i >= o) {
            t.appendSlide(e);
            return;
        }
        for (var l = a > i ? a + 1 : a, u = [], c = o - 1; c >= i; c -= 1) {
            var f = t.slides.eq(c);
            f.remove(), u.unshift(f);
        }
        if (typeof e == "object" && "length" in e) {
            for (var d = 0; d < e.length; d += 1) e[d] && r.append(e[d]);
            l = a > i ? a + e.length : a;
        } else r.append(e);
        for (var h = 0; h < u.length; h += 1) r.append(u[h]);
        n.loop && t.loopCreate(), (n.observer && t.support.observer) || t.update(), n.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
    }
    function Ft(i) {
        var e = this,
            t = e.params,
            r = e.$wrapperEl,
            n = e.activeIndex,
            s = n;
        t.loop && ((s -= e.loopedSlides), e.loopDestroy(), (e.slides = r.children("." + t.slideClass)));
        var a = s,
            o;
        if (typeof i == "object" && "length" in i) {
            for (var l = 0; l < i.length; l += 1) (o = i[l]), e.slides[o] && e.slides.eq(o).remove(), o < a && (a -= 1);
            a = Math.max(a, 0);
        } else (o = i), e.slides[o] && e.slides.eq(o).remove(), o < a && (a -= 1), (a = Math.max(a, 0));
        t.loop && e.loopCreate(), (t.observer && e.support.observer) || e.update(), t.loop ? e.slideTo(a + e.loopedSlides, 0, !1) : e.slideTo(a, 0, !1);
    }
    function Rt() {
        for (var i = this, e = [], t = 0; t < i.slides.length; t += 1) e.push(t);
        i.removeSlide(e);
    }
    var an = { appendSlide: Nt, prependSlide: $t, addSlide: jt, removeSlide: Ft, removeAllSlides: Rt };
    function Ht(i) {
        var e = this,
            t = F(),
            r = D(),
            n = e.touchEventsData,
            s = e.params,
            a = e.touches;
        if (e.animating && s.preventInteractionOnTransition) return;
        var o = i;
        o.originalEvent && (o = o.originalEvent);
        var l = L(o.target);
        if (s.touchEventsTarget === "wrapper" && !l.closest(e.wrapperEl).length) return;
        if (((n.isTouchEvent = o.type === "touchstart"), !n.isTouchEvent && "which" in o && o.which === 3)) return;
        if (!n.isTouchEvent && "button" in o && o.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        var u = !!s.noSwipingClass && s.noSwipingClass !== "";
        if ((u && o.target && o.target.shadowRoot && i.path && i.path[0] && (l = L(i.path[0])), s.noSwiping && l.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0])) {
            e.allowClick = !0;
            return;
        }
        if (s.swipeHandler && !l.closest(s.swipeHandler)[0]) return;
        (a.currentX = o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX), (a.currentY = o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY);
        var c = a.currentX,
            f = a.currentY,
            d = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
            h = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (d && (c <= h || c >= r.innerWidth - h)) return;
        if (
            (P(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
            (a.startX = c),
            (a.startY = f),
            (n.touchStartTime = X()),
            (e.allowClick = !0),
            e.updateSize(),
            (e.swipeDirection = void 0),
            s.threshold > 0 && (n.allowThresholdMove = !1),
            o.type !== "touchstart")
        ) {
            var m = !0;
            l.is(n.formElements) && (m = !1), t.activeElement && L(t.activeElement).is(n.formElements) && t.activeElement !== l[0] && t.activeElement.blur();
            var b = m && e.allowTouchMove && s.touchStartPreventDefault;
            (s.touchStartForcePreventDefault || b) && !l[0].isContentEditable && o.preventDefault();
        }
        e.emit("touchStart", o);
    }
    function Vt(i) {
        var e = F(),
            t = this,
            r = t.touchEventsData,
            n = t.params,
            s = t.touches,
            a = t.rtlTranslate,
            o = i;
        if ((o.originalEvent && (o = o.originalEvent), !r.isTouched)) {
            r.startMoving && r.isScrolling && t.emit("touchMoveOpposite", o);
            return;
        }
        if (r.isTouchEvent && o.type !== "touchmove") return;
        var l = o.type === "touchmove" && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
            u = o.type === "touchmove" ? l.pageX : o.pageX,
            c = o.type === "touchmove" ? l.pageY : o.pageY;
        if (o.preventedByNestedSwiper) {
            (s.startX = u), (s.startY = c);
            return;
        }
        if (!t.allowTouchMove) {
            (t.allowClick = !1), r.isTouched && (P(s, { startX: u, startY: c, currentX: u, currentY: c }), (r.touchStartTime = X()));
            return;
        }
        if (r.isTouchEvent && n.touchReleaseOnEdges && !n.loop) {
            if (t.isVertical()) {
                if ((c < s.startY && t.translate <= t.maxTranslate()) || (c > s.startY && t.translate >= t.minTranslate())) {
                    (r.isTouched = !1), (r.isMoved = !1);
                    return;
                }
            } else if ((u < s.startX && t.translate <= t.maxTranslate()) || (u > s.startX && t.translate >= t.minTranslate())) return;
        }
        if (r.isTouchEvent && e.activeElement && o.target === e.activeElement && L(o.target).is(r.formElements)) {
            (r.isMoved = !0), (t.allowClick = !1);
            return;
        }
        if ((r.allowTouchCallbacks && t.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1)) return;
        (s.currentX = u), (s.currentY = c);
        var f = s.currentX - s.startX,
            d = s.currentY - s.startY;
        if (t.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(d, 2)) < t.params.threshold) return;
        if (typeof r.isScrolling == "undefined") {
            var h;
            (t.isHorizontal() && s.currentY === s.startY) || (t.isVertical() && s.currentX === s.startX)
                ? (r.isScrolling = !1)
                : f * f + d * d >= 25 && ((h = (Math.atan2(Math.abs(d), Math.abs(f)) * 180) / Math.PI), (r.isScrolling = t.isHorizontal() ? h > n.touchAngle : 90 - h > n.touchAngle));
        }
        if ((r.isScrolling && t.emit("touchMoveOpposite", o), typeof r.startMoving == "undefined" && (s.currentX !== s.startX || s.currentY !== s.startY) && (r.startMoving = !0), r.isScrolling)) {
            r.isTouched = !1;
            return;
        }
        if (!r.startMoving) return;
        (t.allowClick = !1),
            !n.cssMode && o.cancelable && o.preventDefault(),
            n.touchMoveStopPropagation && !n.nested && o.stopPropagation(),
            r.isMoved ||
                (n.loop && t.loopFix(),
                (r.startTranslate = t.getTranslate()),
                t.setTransition(0),
                t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                (r.allowMomentumBounce = !1),
                n.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0),
                t.emit("sliderFirstMove", o)),
            t.emit("sliderMove", o),
            (r.isMoved = !0);
        var m = t.isHorizontal() ? f : d;
        (s.diff = m), (m *= n.touchRatio), a && (m = -m), (t.swipeDirection = m > 0 ? "prev" : "next"), (r.currentTranslate = m + r.startTranslate);
        var b = !0,
            T = n.resistanceRatio;
        if (
            (n.touchReleaseOnEdges && (T = 0),
            m > 0 && r.currentTranslate > t.minTranslate()
                ? ((b = !1), n.resistance && (r.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + r.startTranslate + m, T)))
                : m < 0 && r.currentTranslate < t.maxTranslate() && ((b = !1), n.resistance && (r.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - r.startTranslate - m, T))),
            b && (o.preventedByNestedSwiper = !0),
            !t.allowSlideNext && t.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
            !t.allowSlidePrev && t.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
            n.threshold > 0)
        )
            if (Math.abs(m) > n.threshold || r.allowThresholdMove) {
                if (!r.allowThresholdMove) {
                    (r.allowThresholdMove = !0), (s.startX = s.currentX), (s.startY = s.currentY), (r.currentTranslate = r.startTranslate), (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                    return;
                }
            } else {
                r.currentTranslate = r.startTranslate;
                return;
            }
        if (!n.followFinger || n.cssMode) return;
        (n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()),
            n.freeMode &&
                (r.velocities.length === 0 && r.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: r.touchStartTime }), r.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: X() })),
            t.updateProgress(r.currentTranslate),
            t.setTranslate(r.currentTranslate);
    }
    function Wt(i) {
        var e = this,
            t = e.touchEventsData,
            r = e.params,
            n = e.touches,
            s = e.rtlTranslate,
            a = e.$wrapperEl,
            o = e.slidesGrid,
            l = e.snapGrid,
            u = i;
        if ((u.originalEvent && (u = u.originalEvent), t.allowTouchCallbacks && e.emit("touchEnd", u), (t.allowTouchCallbacks = !1), !t.isTouched)) {
            t.isMoved && r.grabCursor && e.setGrabCursor(!1), (t.isMoved = !1), (t.startMoving = !1);
            return;
        }
        r.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
        var c = X(),
            f = c - t.touchStartTime;
        if (
            (e.allowClick && (e.updateClickedSlide(u), e.emit("tap click", u), f < 300 && c - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", u)),
            (t.lastClickTime = X()),
            oe(function () {
                e.destroyed || (e.allowClick = !0);
            }),
            !t.isTouched || !t.isMoved || !e.swipeDirection || n.diff === 0 || t.currentTranslate === t.startTranslate)
        ) {
            (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
            return;
        }
        (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
        var d;
        if ((r.followFinger ? (d = s ? e.translate : -e.translate) : (d = -t.currentTranslate), r.cssMode)) return;
        if (r.freeMode) {
            if (d < -e.minTranslate()) {
                e.slideTo(e.activeIndex);
                return;
            }
            if (d > -e.maxTranslate()) {
                e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
                return;
            }
            if (r.freeModeMomentum) {
                if (t.velocities.length > 1) {
                    var h = t.velocities.pop(),
                        m = t.velocities.pop(),
                        b = h.position - m.position,
                        T = h.time - m.time;
                    (e.velocity = b / T), (e.velocity /= 2), Math.abs(e.velocity) < r.freeModeMinimumVelocity && (e.velocity = 0), (T > 150 || X() - h.time > 300) && (e.velocity = 0);
                } else e.velocity = 0;
                (e.velocity *= r.freeModeMomentumVelocityRatio), (t.velocities.length = 0);
                var C = 1e3 * r.freeModeMomentumRatio,
                    w = e.velocity * C,
                    v = e.translate + w;
                s && (v = -v);
                var p = !1,
                    g,
                    y = Math.abs(e.velocity) * 20 * r.freeModeMomentumBounceRatio,
                    x;
                if (v < e.maxTranslate())
                    r.freeModeMomentumBounce ? (v + e.maxTranslate() < -y && (v = e.maxTranslate() - y), (g = e.maxTranslate()), (p = !0), (t.allowMomentumBounce = !0)) : (v = e.maxTranslate()), r.loop && r.centeredSlides && (x = !0);
                else if (v > e.minTranslate())
                    r.freeModeMomentumBounce ? (v - e.minTranslate() > y && (v = e.minTranslate() + y), (g = e.minTranslate()), (p = !0), (t.allowMomentumBounce = !0)) : (v = e.minTranslate()), r.loop && r.centeredSlides && (x = !0);
                else if (r.freeModeSticky) {
                    for (var S, E = 0; E < l.length; E += 1)
                        if (l[E] > -v) {
                            S = E;
                            break;
                        }
                    Math.abs(l[S] - v) < Math.abs(l[S - 1] - v) || e.swipeDirection === "next" ? (v = l[S]) : (v = l[S - 1]), (v = -v);
                }
                if (
                    (x &&
                        e.once("transitionEnd", function () {
                            e.loopFix();
                        }),
                    e.velocity !== 0)
                ) {
                    if ((s ? (C = Math.abs((-v - e.translate) / e.velocity)) : (C = Math.abs((v - e.translate) / e.velocity)), r.freeModeSticky)) {
                        var k = Math.abs((s ? -v : v) - e.translate),
                            j = e.slidesSizesGrid[e.activeIndex];
                        k < j ? (C = r.speed) : k < 2 * j ? (C = r.speed * 1.5) : (C = r.speed * 2.5);
                    }
                } else if (r.freeModeSticky) {
                    e.slideToClosest();
                    return;
                }
                r.freeModeMomentumBounce && p
                    ? (e.updateProgress(g),
                      e.setTransition(C),
                      e.setTranslate(v),
                      e.transitionStart(!0, e.swipeDirection),
                      (e.animating = !0),
                      a.transitionEnd(function () {
                          if (!e || e.destroyed || !t.allowMomentumBounce) return;
                          e.emit("momentumBounce"),
                              e.setTransition(r.speed),
                              setTimeout(function () {
                                  e.setTranslate(g),
                                      a.transitionEnd(function () {
                                          if (!e || e.destroyed) return;
                                          e.transitionEnd();
                                      });
                              }, 0);
                      }))
                    : e.velocity
                    ? (e.updateProgress(v),
                      e.setTransition(C),
                      e.setTranslate(v),
                      e.transitionStart(!0, e.swipeDirection),
                      e.animating ||
                          ((e.animating = !0),
                          a.transitionEnd(function () {
                              if (!e || e.destroyed) return;
                              e.transitionEnd();
                          })))
                    : e.updateProgress(v),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
            } else if (r.freeModeSticky) {
                e.slideToClosest();
                return;
            }
            (!r.freeModeMomentum || f >= r.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
            return;
        }
        for (var O = 0, _ = e.slidesSizesGrid[0], N = 0; N < o.length; N += N < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            var R = N < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            typeof o[N + R] != "undefined" ? d >= o[N] && d < o[N + R] && ((O = N), (_ = o[N + R] - o[N])) : d >= o[N] && ((O = N), (_ = o[o.length - 1] - o[o.length - 2]));
        }
        var z = (d - o[O]) / _,
            I = O < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (f > r.longSwipesMs) {
            if (!r.longSwipes) {
                e.slideTo(e.activeIndex);
                return;
            }
            e.swipeDirection === "next" && (z >= r.longSwipesRatio ? e.slideTo(O + I) : e.slideTo(O)), e.swipeDirection === "prev" && (z > 1 - r.longSwipesRatio ? e.slideTo(O + I) : e.slideTo(O));
        } else {
            if (!r.shortSwipes) {
                e.slideTo(e.activeIndex);
                return;
            }
            var se = e.navigation && (u.target === e.navigation.nextEl || u.target === e.navigation.prevEl);
            se ? (u.target === e.navigation.nextEl ? e.slideTo(O + I) : e.slideTo(O)) : (e.swipeDirection === "next" && e.slideTo(O + I), e.swipeDirection === "prev" && e.slideTo(O));
        }
    }
    function Te() {
        var i = this,
            e = i.params,
            t = i.el;
        if (t && t.offsetWidth === 0) return;
        e.breakpoints && i.setBreakpoint();
        var r = i.allowSlideNext,
            n = i.allowSlidePrev,
            s = i.snapGrid;
        (i.allowSlideNext = !0),
            (i.allowSlidePrev = !0),
            i.updateSize(),
            i.updateSlides(),
            i.updateSlidesClasses(),
            (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0),
            i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.run(),
            (i.allowSlidePrev = n),
            (i.allowSlideNext = r),
            i.params.watchOverflow && s !== i.snapGrid && i.checkOverflow();
    }
    function qt(i) {
        var e = this;
        e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation()));
    }
    function Gt() {
        var i = this,
            e = i.wrapperEl,
            t = i.rtlTranslate;
        (i.previousTranslate = i.translate),
            i.isHorizontal() ? (t ? (i.translate = e.scrollWidth - e.offsetWidth - e.scrollLeft) : (i.translate = -e.scrollLeft)) : (i.translate = -e.scrollTop),
            i.translate === -0 && (i.translate = 0),
            i.updateActiveIndex(),
            i.updateSlidesClasses();
        var r,
            n = i.maxTranslate() - i.minTranslate();
        n === 0 ? (r = 0) : (r = (i.translate - i.minTranslate()) / n), r !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1);
    }
    var on = !1;
    function $a() {}
    function ja() {
        var i = this,
            e = F(),
            t = i.params,
            r = i.touchEvents,
            n = i.el,
            s = i.wrapperEl,
            a = i.device,
            o = i.support;
        (i.onTouchStart = Ht.bind(i)), (i.onTouchMove = Vt.bind(i)), (i.onTouchEnd = Wt.bind(i)), t.cssMode && (i.onScroll = Gt.bind(i)), (i.onClick = qt.bind(i));
        var l = !!t.nested;
        if (!o.touch && o.pointerEvents) n.addEventListener(r.start, i.onTouchStart, !1), e.addEventListener(r.move, i.onTouchMove, l), e.addEventListener(r.end, i.onTouchEnd, !1);
        else {
            if (o.touch) {
                var u = r.start === "touchstart" && o.passiveListener && t.passiveListeners ? { passive: !0, capture: !1 } : !1;
                n.addEventListener(r.start, i.onTouchStart, u),
                    n.addEventListener(r.move, i.onTouchMove, o.passiveListener ? { passive: !1, capture: l } : l),
                    n.addEventListener(r.end, i.onTouchEnd, u),
                    r.cancel && n.addEventListener(r.cancel, i.onTouchEnd, u),
                    on || (e.addEventListener("touchstart", $a), (on = !0));
            }
            ((t.simulateTouch && !a.ios && !a.android) || (t.simulateTouch && !o.touch && a.ios)) &&
                (n.addEventListener("mousedown", i.onTouchStart, !1), e.addEventListener("mousemove", i.onTouchMove, l), e.addEventListener("mouseup", i.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", i.onClick, !0),
            t.cssMode && s.addEventListener("scroll", i.onScroll),
            t.updateOnWindowResize ? i.on(a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Te, !0) : i.on("observerUpdate", Te, !0);
    }
    function Fa() {
        var i = this,
            e = F(),
            t = i.params,
            r = i.touchEvents,
            n = i.el,
            s = i.wrapperEl,
            a = i.device,
            o = i.support,
            l = !!t.nested;
        if (!o.touch && o.pointerEvents) n.removeEventListener(r.start, i.onTouchStart, !1), e.removeEventListener(r.move, i.onTouchMove, l), e.removeEventListener(r.end, i.onTouchEnd, !1);
        else {
            if (o.touch) {
                var u = r.start === "onTouchStart" && o.passiveListener && t.passiveListeners ? { passive: !0, capture: !1 } : !1;
                n.removeEventListener(r.start, i.onTouchStart, u), n.removeEventListener(r.move, i.onTouchMove, l), n.removeEventListener(r.end, i.onTouchEnd, u), r.cancel && n.removeEventListener(r.cancel, i.onTouchEnd, u);
            }
            ((t.simulateTouch && !a.ios && !a.android) || (t.simulateTouch && !o.touch && a.ios)) &&
                (n.removeEventListener("mousedown", i.onTouchStart, !1), e.removeEventListener("mousemove", i.onTouchMove, l), e.removeEventListener("mouseup", i.onTouchEnd, !1));
        }
        (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", i.onClick, !0),
            t.cssMode && s.removeEventListener("scroll", i.onScroll),
            i.off(a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Te);
    }
    var ln = { attachEvents: ja, detachEvents: Fa };
    function Yt() {
        var i = this,
            e = i.activeIndex,
            t = i.initialized,
            r = i.loopedSlides,
            n = r === void 0 ? 0 : r,
            s = i.params,
            a = i.$el,
            o = s.breakpoints;
        if (!o || (o && Object.keys(o).length === 0)) return;
        var l = i.getBreakpoint(o);
        if (l && i.currentBreakpoint !== l) {
            var u = l in o ? o[l] : void 0;
            u &&
                ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (b) {
                    var T = u[b];
                    if (typeof T == "undefined") return;
                    b === "slidesPerView" && (T === "AUTO" || T === "auto") ? (u[b] = "auto") : b === "slidesPerView" ? (u[b] = parseFloat(T)) : (u[b] = parseInt(T, 10));
                });
            var c = u || i.originalParams,
                f = s.slidesPerColumn > 1,
                d = c.slidesPerColumn > 1;
            f && !d
                ? (a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column"), i.emitContainerClasses())
                : !f && d && (a.addClass(s.containerModifierClass + "multirow"), c.slidesPerColumnFill === "column" && a.addClass(s.containerModifierClass + "multirow-column"), i.emitContainerClasses());
            var h = c.direction && c.direction !== s.direction,
                m = s.loop && (c.slidesPerView !== s.slidesPerView || h);
            h && t && i.changeDirection(),
                P(i.params, c),
                P(i, { allowTouchMove: i.params.allowTouchMove, allowSlideNext: i.params.allowSlideNext, allowSlidePrev: i.params.allowSlidePrev }),
                (i.currentBreakpoint = l),
                i.emit("_beforeBreakpoint", c),
                m && t && (i.loopDestroy(), i.loopCreate(), i.updateSlides(), i.slideTo(e - n + i.loopedSlides, 0, !1)),
                i.emit("breakpoint", c);
        }
    }
    function Xt(i) {
        var e = D();
        if (!i) return;
        var t = !1,
            r = Object.keys(i).map(function (l) {
                if (typeof l == "string" && l.indexOf("@") === 0) {
                    var u = parseFloat(l.substr(1)),
                        c = e.innerHeight * u;
                    return { value: c, point: l };
                }
                return { value: l, point: l };
            });
        r.sort(function (l, u) {
            return parseInt(l.value, 10) - parseInt(u.value, 10);
        });
        for (var n = 0; n < r.length; n += 1) {
            var s = r[n],
                a = s.point,
                o = s.value;
            o <= e.innerWidth && (t = a);
        }
        return t || "max";
    }
    var un = { setBreakpoint: Yt, getBreakpoint: Xt };
    function Ut() {
        var i = this,
            e = i.classNames,
            t = i.params,
            r = i.rtl,
            n = i.$el,
            s = i.device,
            a = [];
        a.push("initialized"),
            a.push(t.direction),
            t.freeMode && a.push("free-mode"),
            t.autoHeight && a.push("autoheight"),
            r && a.push("rtl"),
            t.slidesPerColumn > 1 && (a.push("multirow"), t.slidesPerColumnFill === "column" && a.push("multirow-column")),
            s.android && a.push("android"),
            s.ios && a.push("ios"),
            t.cssMode && a.push("css-mode"),
            a.forEach(function (o) {
                e.push(t.containerModifierClass + o);
            }),
            n.addClass(e.join(" ")),
            i.emitContainerClasses();
    }
    function Kt() {
        var i = this,
            e = i.$el,
            t = i.classNames;
        e.removeClass(t.join(" ")), i.emitContainerClasses();
    }
    var cn = { addClasses: Ut, removeClasses: Kt };
    function Qt(i, e, t, r, n, s) {
        var a = D(),
            o;
        function l() {
            s && s();
        }
        var u = L(i).parent("picture")[0];
        !u && (!i.complete || !n) && e ? ((o = new a.Image()), (o.onload = l), (o.onerror = l), r && (o.sizes = r), t && (o.srcset = t), e && (o.src = e)) : l();
    }
    function Jt() {
        var i = this;
        i.imagesToLoad = i.$el.find("img");
        function e() {
            if (typeof i == "undefined" || i === null || !i || i.destroyed) return;
            i.imagesLoaded !== void 0 && (i.imagesLoaded += 1), i.imagesLoaded === i.imagesToLoad.length && (i.params.updateOnImagesReady && i.update(), i.emit("imagesReady"));
        }
        for (var t = 0; t < i.imagesToLoad.length; t += 1) {
            var r = i.imagesToLoad[t];
            i.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, e);
        }
    }
    var fn = { loadImage: Qt, preloadImages: Jt };
    function Ra() {
        var i = this,
            e = i.params,
            t = i.isLocked,
            r = i.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (i.slides.length - 1) + i.slides[0].offsetWidth * i.slides.length;
        e.slidesOffsetBefore && e.slidesOffsetAfter && r ? (i.isLocked = r <= i.size) : (i.isLocked = i.snapGrid.length === 1),
            (i.allowSlideNext = !i.isLocked),
            (i.allowSlidePrev = !i.isLocked),
            t !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock"),
            t && t !== i.isLocked && ((i.isEnd = !1), i.navigation && i.navigation.update());
    }
    var dn = { checkOverflow: Ra },
        Zt = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            nested: !1,
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
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
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
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
            loopPreventsSlide: !0,
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
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        };
    function hn(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
        }
    }
    function Ha(i, e, t) {
        return e && hn(i.prototype, e), t && hn(i, t), i;
    }
    var ei = { modular: Qr, eventsEmitter: Jr, update: Zr, translate: en, transition: tn, slide: rn, loop: nn, grabCursor: sn, manipulation: an, events: ln, breakpoints: un, checkOverflow: dn, classes: cn, images: fn },
        ti = {},
        ii = (function () {
            function i() {
                for (var t, r, n = arguments.length, s = new Array(n), a = 0; a < n; a++) s[a] = arguments[a];
                s.length === 1 && s[0].constructor && s[0].constructor === Object ? (r = s[0]) : ((t = s[0]), (r = s[1])), r || (r = {}), (r = P({}, r)), t && !r.el && (r.el = t);
                var o = this;
                (o.support = $e()),
                    (o.device = Yr({ userAgent: r.userAgent })),
                    (o.browser = Xr()),
                    (o.eventsListeners = {}),
                    (o.eventsAnyListeners = []),
                    typeof o.modules == "undefined" && (o.modules = {}),
                    Object.keys(o.modules).forEach(function (d) {
                        var h = o.modules[d];
                        if (h.params) {
                            var m = Object.keys(h.params)[0],
                                b = h.params[m];
                            if (typeof b != "object" || b === null) return;
                            if (!(m in r && "enabled" in b)) return;
                            r[m] === !0 && (r[m] = { enabled: !0 }), typeof r[m] == "object" && !("enabled" in r[m]) && (r[m].enabled = !0), r[m] || (r[m] = { enabled: !1 });
                        }
                    });
                var l = P({}, Zt);
                o.useParams(l),
                    (o.params = P({}, l, ti, r)),
                    (o.originalParams = P({}, o.params)),
                    (o.passedParams = P({}, r)),
                    o.params &&
                        o.params.on &&
                        Object.keys(o.params.on).forEach(function (d) {
                            o.on(d, o.params.on[d]);
                        }),
                    o.params && o.params.onAny && o.onAny(o.params.onAny),
                    (o.$ = L);
                var u = L(o.params.el);
                if (((t = u[0]), !t)) return;
                if (u.length > 1) {
                    var c = [];
                    return (
                        u.each(function (d) {
                            var h = P({}, r, { el: d });
                            c.push(new i(h));
                        }),
                        c
                    );
                }
                t.swiper = o;
                var f;
                return (
                    t && t.shadowRoot && t.shadowRoot.querySelector
                        ? ((f = L(t.shadowRoot.querySelector("." + o.params.wrapperClass))),
                          (f.children = function (d) {
                              return u.children(d);
                          }))
                        : (f = u.children("." + o.params.wrapperClass)),
                    P(o, {
                        $el: u,
                        el: t,
                        $wrapperEl: f,
                        wrapperEl: f[0],
                        classNames: [],
                        slides: L(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return o.params.direction === "horizontal";
                        },
                        isVertical: function () {
                            return o.params.direction === "vertical";
                        },
                        rtl: t.dir.toLowerCase() === "rtl" || u.css("direction") === "rtl",
                        rtlTranslate: o.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || u.css("direction") === "rtl"),
                        wrongRTL: f.css("display") === "-webkit-box",
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: o.params.allowSlideNext,
                        allowSlidePrev: o.params.allowSlidePrev,
                        touchEvents: (function () {
                            var h = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                m = ["mousedown", "mousemove", "mouseup"];
                            return (
                                o.support.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]),
                                (o.touchEventsTouch = { start: h[0], move: h[1], end: h[2], cancel: h[3] }),
                                (o.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }),
                                o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop
                            );
                        })(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video, label",
                            lastClickTime: X(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: o.params.allowTouchMove,
                        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    o.useModules(),
                    o.emit("_swiper"),
                    o.params.init && o.init(),
                    o
                );
            }
            var e = i.prototype;
            return (
                (e.emitContainerClasses = function () {
                    var r = this;
                    if (!r.params._emitClasses || !r.el) return;
                    var n = r.el.className.split(" ").filter(function (s) {
                        return s.indexOf("swiper-container") === 0 || s.indexOf(r.params.containerModifierClass) === 0;
                    });
                    r.emit("_containerClasses", n.join(" "));
                }),
                (e.getSlideClasses = function (r) {
                    var n = this;
                    return r.className
                        .split(" ")
                        .filter(function (s) {
                            return s.indexOf("swiper-slide") === 0 || s.indexOf(n.params.slideClass) === 0;
                        })
                        .join(" ");
                }),
                (e.emitSlidesClasses = function () {
                    var r = this;
                    if (!r.params._emitClasses || !r.el) return;
                    r.slides.each(function (n) {
                        var s = r.getSlideClasses(n);
                        r.emit("_slideClass", n, s);
                    });
                }),
                (e.slidesPerViewDynamic = function () {
                    var r = this,
                        n = r.params,
                        s = r.slides,
                        a = r.slidesGrid,
                        o = r.size,
                        l = r.activeIndex,
                        u = 1;
                    if (n.centeredSlides) {
                        for (var c = s[l].swiperSlideSize, f, d = l + 1; d < s.length; d += 1) s[d] && !f && ((c += s[d].swiperSlideSize), (u += 1), c > o && (f = !0));
                        for (var h = l - 1; h >= 0; h -= 1) s[h] && !f && ((c += s[h].swiperSlideSize), (u += 1), c > o && (f = !0));
                    } else for (var m = l + 1; m < s.length; m += 1) a[m] - a[l] < o && (u += 1);
                    return u;
                }),
                (e.update = function () {
                    var r = this;
                    if (!r || r.destroyed) return;
                    var n = r.snapGrid,
                        s = r.params;
                    s.breakpoints && r.setBreakpoint(), r.updateSize(), r.updateSlides(), r.updateProgress(), r.updateSlidesClasses();
                    function a() {
                        var l = r.rtlTranslate ? r.translate * -1 : r.translate,
                            u = Math.min(Math.max(l, r.maxTranslate()), r.minTranslate());
                        r.setTranslate(u), r.updateActiveIndex(), r.updateSlidesClasses();
                    }
                    var o;
                    r.params.freeMode
                        ? (a(), r.params.autoHeight && r.updateAutoHeight())
                        : ((r.params.slidesPerView === "auto" || r.params.slidesPerView > 1) && r.isEnd && !r.params.centeredSlides ? (o = r.slideTo(r.slides.length - 1, 0, !1, !0)) : (o = r.slideTo(r.activeIndex, 0, !1, !0)), o || a()),
                        s.watchOverflow && n !== r.snapGrid && r.checkOverflow(),
                        r.emit("update");
                }),
                (e.changeDirection = function (r, n) {
                    n === void 0 && (n = !0);
                    var s = this,
                        a = s.params.direction;
                    return (
                        r || (r = a === "horizontal" ? "vertical" : "horizontal"),
                        r === a ||
                            (r !== "horizontal" && r !== "vertical") ||
                            (s.$el.removeClass("" + s.params.containerModifierClass + a).addClass("" + s.params.containerModifierClass + r),
                            s.emitContainerClasses(),
                            (s.params.direction = r),
                            s.slides.each(function (o) {
                                r === "vertical" ? (o.style.width = "") : (o.style.height = "");
                            }),
                            s.emit("changeDirection"),
                            n && s.update()),
                        s
                    );
                }),
                (e.init = function () {
                    var r = this;
                    if (r.initialized) return;
                    r.emit("beforeInit"),
                        r.params.breakpoints && r.setBreakpoint(),
                        r.addClasses(),
                        r.params.loop && r.loopCreate(),
                        r.updateSize(),
                        r.updateSlides(),
                        r.params.watchOverflow && r.checkOverflow(),
                        r.params.grabCursor && r.setGrabCursor(),
                        r.params.preloadImages && r.preloadImages(),
                        r.params.loop ? r.slideTo(r.params.initialSlide + r.loopedSlides, 0, r.params.runCallbacksOnInit) : r.slideTo(r.params.initialSlide, 0, r.params.runCallbacksOnInit),
                        r.attachEvents(),
                        (r.initialized = !0),
                        r.emit("init"),
                        r.emit("afterInit");
                }),
                (e.destroy = function (r, n) {
                    r === void 0 && (r = !0), n === void 0 && (n = !0);
                    var s = this,
                        a = s.params,
                        o = s.$el,
                        l = s.$wrapperEl,
                        u = s.slides;
                    return (
                        typeof s.params == "undefined" ||
                            s.destroyed ||
                            (s.emit("beforeDestroy"),
                            (s.initialized = !1),
                            s.detachEvents(),
                            a.loop && s.loopDestroy(),
                            n &&
                                (s.removeClasses(),
                                o.removeAttr("style"),
                                l.removeAttr("style"),
                                u && u.length && u.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                            s.emit("destroy"),
                            Object.keys(s.eventsListeners).forEach(function (c) {
                                s.off(c);
                            }),
                            r !== !1 && ((s.$el[0].swiper = null), qr(s)),
                            (s.destroyed = !0)),
                        null
                    );
                }),
                (i.extendDefaults = function (r) {
                    P(ti, r);
                }),
                (i.installModule = function (r) {
                    i.prototype.modules || (i.prototype.modules = {});
                    var n = r.name || Object.keys(i.prototype.modules).length + "_" + X();
                    i.prototype.modules[n] = r;
                }),
                (i.use = function (r) {
                    return Array.isArray(r)
                        ? (r.forEach(function (n) {
                              return i.installModule(n);
                          }),
                          i)
                        : (i.installModule(r), i);
                }),
                Ha(i, null, [
                    {
                        key: "extendedDefaults",
                        get: function () {
                            return ti;
                        },
                    },
                    {
                        key: "defaults",
                        get: function () {
                            return Zt;
                        },
                    },
                ]),
                i
            );
        })();
    Object.keys(ei).forEach(function (i) {
        Object.keys(ei[i]).forEach(function (e) {
            ii.prototype[e] = ei[i][e];
        });
    });
    ii.use([Ur, Kr]);
    var V = ii;
    function ri() {
        return (
            (ri =
                Object.assign ||
                function (i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
                    }
                    return i;
                }),
            ri.apply(this, arguments)
        );
    }
    var Va = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (e.params.loop) return;
                var r = e.navigation,
                    n = r.$nextEl,
                    s = r.$prevEl;
                s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                    n && n.length > 0 && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
            },
            onPrevClick: function (e) {
                var t = this;
                if ((e.preventDefault(), t.isBeginning && !t.params.loop)) return;
                t.slidePrev();
            },
            onNextClick: function (e) {
                var t = this;
                if ((e.preventDefault(), t.isEnd && !t.params.loop)) return;
                t.slideNext();
            },
            init: function () {
                var e = this,
                    t = e.params.navigation;
                if (!(t.nextEl || t.prevEl)) return;
                var r, n;
                t.nextEl && ((r = L(t.nextEl)), e.params.uniqueNavElements && typeof t.nextEl == "string" && r.length > 1 && e.$el.find(t.nextEl).length === 1 && (r = e.$el.find(t.nextEl))),
                    t.prevEl && ((n = L(t.prevEl)), e.params.uniqueNavElements && typeof t.prevEl == "string" && n.length > 1 && e.$el.find(t.prevEl).length === 1 && (n = e.$el.find(t.prevEl))),
                    r && r.length > 0 && r.on("click", e.navigation.onNextClick),
                    n && n.length > 0 && n.on("click", e.navigation.onPrevClick),
                    P(e.navigation, { $nextEl: r, nextEl: r && r[0], $prevEl: n, prevEl: n && n[0] });
            },
            destroy: function () {
                var e = this,
                    t = e.navigation,
                    r = t.$nextEl,
                    n = t.$prevEl;
                r && r.length && (r.off("click", e.navigation.onNextClick), r.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass));
            },
        },
        je = {
            name: "navigation",
            params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
            create: function () {
                var e = this;
                U(e, { navigation: ri({}, Va) });
            },
            on: {
                init: function (e) {
                    e.navigation.init(), e.navigation.update();
                },
                toEdge: function (e) {
                    e.navigation.update();
                },
                fromEdge: function (e) {
                    e.navigation.update();
                },
                destroy: function (e) {
                    e.navigation.destroy();
                },
                click: function (e, t) {
                    var r = e.navigation,
                        n = r.$nextEl,
                        s = r.$prevEl;
                    if (e.params.navigation.hideOnClick && !L(t.target).is(s) && !L(t.target).is(n)) {
                        var a;
                        n ? (a = n.hasClass(e.params.navigation.hiddenClass)) : s && (a = s.hasClass(e.params.navigation.hiddenClass)),
                            a === !0 ? e.emit("navigationShow") : e.emit("navigationHide"),
                            n && n.toggleClass(e.params.navigation.hiddenClass),
                            s && s.toggleClass(e.params.navigation.hiddenClass);
                    }
                },
            },
        };
    function ni() {
        return (
            (ni =
                Object.assign ||
                function (i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
                    }
                    return i;
                }),
            ni.apply(this, arguments)
        );
    }
    var Wa = {
            update: function () {
                var e = this,
                    t = e.rtl,
                    r = e.params.pagination;
                if (!r.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
                var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    s = e.pagination.$el,
                    a,
                    o = e.params.loop ? Math.ceil((n - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (
                    (e.params.loop
                        ? ((a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)),
                          a > n - 1 - e.loopedSlides * 2 && (a -= n - e.loopedSlides * 2),
                          a > o - 1 && (a -= o),
                          a < 0 && e.params.paginationType !== "bullets" && (a = o + a))
                        : typeof e.snapIndex != "undefined"
                        ? (a = e.snapIndex)
                        : (a = e.activeIndex || 0),
                    r.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0)
                ) {
                    var l = e.pagination.bullets,
                        u,
                        c,
                        f;
                    if (
                        (r.dynamicBullets &&
                            ((e.pagination.bulletSize = l.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                            s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (r.dynamicMainBullets + 4) + "px"),
                            r.dynamicMainBullets > 1 &&
                                e.previousIndex !== void 0 &&
                                ((e.pagination.dynamicBulletIndex += a - e.previousIndex),
                                e.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1 ? (e.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1) : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                            (u = a - e.pagination.dynamicBulletIndex),
                            (c = u + (Math.min(l.length, r.dynamicMainBullets) - 1)),
                            (f = (c + u) / 2)),
                        l.removeClass(r.bulletActiveClass + " " + r.bulletActiveClass + "-next " + r.bulletActiveClass + "-next-next " + r.bulletActiveClass + "-prev " + r.bulletActiveClass + "-prev-prev " + r.bulletActiveClass + "-main"),
                        s.length > 1)
                    )
                        l.each(function (E) {
                            var k = L(E),
                                j = k.index();
                            j === a && k.addClass(r.bulletActiveClass),
                                r.dynamicBullets &&
                                    (j >= u && j <= c && k.addClass(r.bulletActiveClass + "-main"),
                                    j === u &&
                                        k
                                            .prev()
                                            .addClass(r.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(r.bulletActiveClass + "-prev-prev"),
                                    j === c &&
                                        k
                                            .next()
                                            .addClass(r.bulletActiveClass + "-next")
                                            .next()
                                            .addClass(r.bulletActiveClass + "-next-next"));
                        });
                    else {
                        var d = l.eq(a),
                            h = d.index();
                        if ((d.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                            for (var m = l.eq(u), b = l.eq(c), T = u; T <= c; T += 1) l.eq(T).addClass(r.bulletActiveClass + "-main");
                            if (e.params.loop)
                                if (h >= l.length - r.dynamicMainBullets) {
                                    for (var C = r.dynamicMainBullets; C >= 0; C -= 1) l.eq(l.length - C).addClass(r.bulletActiveClass + "-main");
                                    l.eq(l.length - r.dynamicMainBullets - 1).addClass(r.bulletActiveClass + "-prev");
                                } else
                                    m
                                        .prev()
                                        .addClass(r.bulletActiveClass + "-prev")
                                        .prev()
                                        .addClass(r.bulletActiveClass + "-prev-prev"),
                                        b
                                            .next()
                                            .addClass(r.bulletActiveClass + "-next")
                                            .next()
                                            .addClass(r.bulletActiveClass + "-next-next");
                            else
                                m
                                    .prev()
                                    .addClass(r.bulletActiveClass + "-prev")
                                    .prev()
                                    .addClass(r.bulletActiveClass + "-prev-prev"),
                                    b
                                        .next()
                                        .addClass(r.bulletActiveClass + "-next")
                                        .next()
                                        .addClass(r.bulletActiveClass + "-next-next");
                        }
                    }
                    if (r.dynamicBullets) {
                        var w = Math.min(l.length, r.dynamicMainBullets + 4),
                            v = (e.pagination.bulletSize * w - e.pagination.bulletSize) / 2 - f * e.pagination.bulletSize,
                            p = t ? "right" : "left";
                        l.css(e.isHorizontal() ? p : "top", v + "px");
                    }
                }
                if ((r.type === "fraction" && (s.find("." + r.currentClass).text(r.formatFractionCurrent(a + 1)), s.find("." + r.totalClass).text(r.formatFractionTotal(o))), r.type === "progressbar")) {
                    var g;
                    r.progressbarOpposite ? (g = e.isHorizontal() ? "vertical" : "horizontal") : (g = e.isHorizontal() ? "horizontal" : "vertical");
                    var y = (a + 1) / o,
                        x = 1,
                        S = 1;
                    g === "horizontal" ? (x = y) : (S = y),
                        s
                            .find("." + r.progressbarFillClass)
                            .transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + S + ")")
                            .transition(e.params.speed);
                }
                r.type === "custom" && r.renderCustom ? (s.html(r.renderCustom(e, a + 1, o)), e.emit("paginationRender", s[0])) : e.emit("paginationUpdate", s[0]),
                    s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](r.lockClass);
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
                var r = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                    n = e.pagination.$el,
                    s = "";
                if (t.type === "bullets") {
                    for (var a = e.params.loop ? Math.ceil((r - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length, o = 0; o < a; o += 1)
                        t.renderBullet ? (s += t.renderBullet.call(e, o, t.bulletClass)) : (s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                    n.html(s), (e.pagination.bullets = n.find("." + t.bulletClass.replace(/ /g, ".")));
                }
                t.type === "fraction" &&
                    (t.renderFraction ? (s = t.renderFraction.call(e, t.currentClass, t.totalClass)) : (s = '<span class="' + t.currentClass + '"></span> / ' + ('<span class="' + t.totalClass + '"></span>')), n.html(s)),
                    t.type === "progressbar" && (t.renderProgressbar ? (s = t.renderProgressbar.call(e, t.progressbarFillClass)) : (s = '<span class="' + t.progressbarFillClass + '"></span>'), n.html(s)),
                    t.type !== "custom" && e.emit("paginationRender", e.pagination.$el[0]);
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (!t.el) return;
                var r = L(t.el);
                if (r.length === 0) return;
                e.params.uniqueNavElements && typeof t.el == "string" && r.length > 1 && (r = e.$el.find(t.el)),
                    t.type === "bullets" && t.clickable && r.addClass(t.clickableClass),
                    r.addClass(t.modifierClass + t.type),
                    t.type === "bullets" && t.dynamicBullets && (r.addClass("" + t.modifierClass + t.type + "-dynamic"), (e.pagination.dynamicBulletIndex = 0), t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                    t.type === "progressbar" && t.progressbarOpposite && r.addClass(t.progressbarOppositeClass),
                    t.clickable &&
                        r.on("click", "." + t.bulletClass.replace(/ /g, "."), function (s) {
                            s.preventDefault();
                            var a = L(this).index() * e.params.slidesPerGroup;
                            e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                        }),
                    P(e.pagination, { $el: r, el: r[0] });
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
                var r = e.pagination.$el;
                r.removeClass(t.hiddenClass), r.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && r.off("click", "." + t.bulletClass.replace(/ /g, "."));
            },
        },
        de = {
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
                        return e;
                    },
                    formatFractionTotal: function (e) {
                        return e;
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
                    lockClass: "swiper-pagination-lock",
                },
            },
            create: function () {
                var e = this;
                U(e, { pagination: ni({ dynamicBulletIndex: 0 }, Wa) });
            },
            on: {
                init: function (e) {
                    e.pagination.init(), e.pagination.render(), e.pagination.update();
                },
                activeIndexChange: function (e) {
                    (e.params.loop || typeof e.snapIndex == "undefined") && e.pagination.update();
                },
                snapIndexChange: function (e) {
                    e.params.loop || e.pagination.update();
                },
                slidesLengthChange: function (e) {
                    e.params.loop && (e.pagination.render(), e.pagination.update());
                },
                snapGridLengthChange: function (e) {
                    e.params.loop || (e.pagination.render(), e.pagination.update());
                },
                destroy: function (e) {
                    e.pagination.destroy();
                },
                click: function (e, t) {
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !L(t.target).hasClass(e.params.pagination.bulletClass)) {
                        var r = e.pagination.$el.hasClass(e.params.pagination.hiddenClass);
                        r === !0 ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
                    }
                },
            },
        };
    function si() {
        return (
            (si =
                Object.assign ||
                function (i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
                    }
                    return i;
                }),
            si.apply(this, arguments)
        );
    }
    var qa = {
            setTransform: function (e, t) {
                var r = this,
                    n = r.rtl,
                    s = L(e),
                    a = n ? -1 : 1,
                    o = s.attr("data-swiper-parallax") || "0",
                    l = s.attr("data-swiper-parallax-x"),
                    u = s.attr("data-swiper-parallax-y"),
                    c = s.attr("data-swiper-parallax-scale"),
                    f = s.attr("data-swiper-parallax-opacity");
                if (
                    (l || u ? ((l = l || "0"), (u = u || "0")) : r.isHorizontal() ? ((l = o), (u = "0")) : ((u = o), (l = "0")),
                    l.indexOf("%") >= 0 ? (l = parseInt(l, 10) * t * a + "%") : (l = l * t * a + "px"),
                    u.indexOf("%") >= 0 ? (u = parseInt(u, 10) * t + "%") : (u = u * t + "px"),
                    typeof f != "undefined" && f !== null)
                ) {
                    var d = f - (f - 1) * (1 - Math.abs(t));
                    s[0].style.opacity = d;
                }
                if (typeof c == "undefined" || c === null) s.transform("translate3d(" + l + ", " + u + ", 0px)");
                else {
                    var h = c - (c - 1) * (1 - Math.abs(t));
                    s.transform("translate3d(" + l + ", " + u + ", 0px) scale(" + h + ")");
                }
            },
            setTranslate: function () {
                var e = this,
                    t = e.$el,
                    r = e.slides,
                    n = e.progress,
                    s = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (a) {
                    e.parallax.setTransform(a, n);
                }),
                    r.each(function (a, o) {
                        var l = a.progress;
                        e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (l += Math.ceil(o / 2) - n * (s.length - 1)),
                            (l = Math.min(Math.max(l, -1), 1)),
                            L(a)
                                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                .each(function (u) {
                                    e.parallax.setTransform(u, l);
                                });
                    });
            },
            setTransition: function (e) {
                e === void 0 && (e = this.params.speed);
                var t = this,
                    r = t.$el;
                r.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (n) {
                    var s = L(n),
                        a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    e === 0 && (a = 0), s.transition(a);
                });
            },
        },
        ie = {
            name: "parallax",
            params: { parallax: { enabled: !1 } },
            create: function () {
                var e = this;
                U(e, { parallax: si({}, qa) });
            },
            on: {
                beforeInit: function (e) {
                    if (!e.params.parallax.enabled) return;
                    (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0);
                },
                init: function (e) {
                    if (!e.params.parallax.enabled) return;
                    e.parallax.setTranslate();
                },
                setTranslate: function (e) {
                    if (!e.params.parallax.enabled) return;
                    e.parallax.setTranslate();
                },
                setTransition: function (e, t) {
                    if (!e.params.parallax.enabled) return;
                    e.parallax.setTransition(t);
                },
            },
        };
    function ai() {
        return (
            (ai =
                Object.assign ||
                function (i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
                    }
                    return i;
                }),
            ai.apply(this, arguments)
        );
    }
    var oi = {
            LinearSpline: function (e, t) {
                var r = (function () {
                    var o, l, u;
                    return function (c, f) {
                        for (l = -1, o = c.length; o - l > 1; ) (u = (o + l) >> 1), c[u] <= f ? (l = u) : (o = u);
                        return o;
                    };
                })();
                (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
                var n, s;
                return (
                    (this.interpolate = function (o) {
                        return o ? ((s = r(this.x, o)), (n = s - 1), ((o - this.x[n]) * (this.y[s] - this.y[n])) / (this.x[s] - this.x[n]) + this.y[n]) : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new oi.LinearSpline(t.slidesGrid, e.slidesGrid) : new oi.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
                var r = this,
                    n = r.controller.control,
                    s,
                    a,
                    o = r.constructor;
                function l(c) {
                    var f = r.rtlTranslate ? -r.translate : r.translate;
                    r.params.controller.by === "slide" && (r.controller.getInterpolateFunction(c), (a = -r.controller.spline.interpolate(-f))),
                        (!a || r.params.controller.by === "container") && ((s = (c.maxTranslate() - c.minTranslate()) / (r.maxTranslate() - r.minTranslate())), (a = (f - r.minTranslate()) * s + c.minTranslate())),
                        r.params.controller.inverse && (a = c.maxTranslate() - a),
                        c.updateProgress(a),
                        c.setTranslate(a, r),
                        c.updateActiveIndex(),
                        c.updateSlidesClasses();
                }
                if (Array.isArray(n)) for (var u = 0; u < n.length; u += 1) n[u] !== t && n[u] instanceof o && l(n[u]);
                else n instanceof o && t !== n && l(n);
            },
            setTransition: function (e, t) {
                var r = this,
                    n = r.constructor,
                    s = r.controller.control,
                    a;
                function o(l) {
                    l.setTransition(e, r),
                        e !== 0 &&
                            (l.transitionStart(),
                            l.params.autoHeight &&
                                oe(function () {
                                    l.updateAutoHeight();
                                }),
                            l.$wrapperEl.transitionEnd(function () {
                                if (!s) return;
                                l.params.loop && r.params.controller.by === "slide" && l.loopFix(), l.transitionEnd();
                            }));
                }
                if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== t && s[a] instanceof n && o(s[a]);
                else s instanceof n && t !== s && o(s);
            },
        },
        pn = {
            name: "controller",
            params: { controller: { control: void 0, inverse: !1, by: "slide" } },
            create: function () {
                var e = this;
                U(e, { controller: ai({ control: e.params.controller.control }, oi) });
            },
            on: {
                update: function (e) {
                    if (!e.controller.control) return;
                    e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                },
                resize: function (e) {
                    if (!e.controller.control) return;
                    e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                },
                observerUpdate: function (e) {
                    if (!e.controller.control) return;
                    e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                },
                setTranslate: function (e, t, r) {
                    if (!e.controller.control) return;
                    e.controller.setTranslate(t, r);
                },
                setTransition: function (e, t, r) {
                    if (!e.controller.control) return;
                    e.controller.setTransition(t, r);
                },
            },
        };
    function li() {
        return (
            (li =
                Object.assign ||
                function (i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
                    }
                    return i;
                }),
            li.apply(this, arguments)
        );
    }
    var Ga = {
            setTranslate: function () {
                for (var e = this, t = e.slides, r = 0; r < t.length; r += 1) {
                    var n = e.slides.eq(r),
                        s = n[0].swiperSlideOffset,
                        a = -s;
                    e.params.virtualTranslate || (a -= e.translate);
                    var o = 0;
                    e.isHorizontal() || ((o = a), (a = 0));
                    var l = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                    n.css({ opacity: l }).transform("translate3d(" + a + "px, " + o + "px, 0px)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    r = t.slides,
                    n = t.$wrapperEl;
                if ((r.transition(e), t.params.virtualTranslate && e !== 0)) {
                    var s = !1;
                    r.transitionEnd(function () {
                        if (s) return;
                        if (!t || t.destroyed) return;
                        (s = !0), (t.animating = !1);
                        for (var a = ["webkitTransitionEnd", "transitionend"], o = 0; o < a.length; o += 1) n.trigger(a[o]);
                    });
                }
            },
        },
        vn = {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create: function () {
                var e = this;
                U(e, { fadeEffect: li({}, Ga) });
            },
            on: {
                beforeInit: function (e) {
                    if (e.params.effect !== "fade") return;
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                    P(e.params, t), P(e.originalParams, t);
                },
                setTranslate: function (e) {
                    if (e.params.effect !== "fade") return;
                    e.fadeEffect.setTranslate();
                },
                setTransition: function (e, t) {
                    if (e.params.effect !== "fade") return;
                    e.fadeEffect.setTransition(t);
                },
            },
        },
        mn = class extends A {
            constructor(i) {
                super(i);
            }
            init() {
                V.use([ie, de]),
                    (this.container = this.$("container")[0]),
                    (this.pagination = this.$("pagination")[0]),
                    (this.carousel = new V(this.container, {
                        speed: 900,
                        loop: !0,
                        spaceBetween: 0,
                        grabCursor: !0,
                        loopedSlides: 2,
                        spaceBetween: 0,
                        parallax: !0,
                        threshold: 3,
                        navigation: { prevEl: this.arrowPrev, nextEl: this.arrowNext },
                        pagination: { el: this.pagination, type: "fraction" },
                    }));
            }
            destroy() {
                this.carousel && this.carousel.destroy && this.carousel.destroy();
            }
        },
        gn = mn;
    var ui = { HOVER: "is-hover" },
        yn = class extends A {
            constructor(i) {
                super(i);
                (this.arrowNext = this.$("next")[0]), (this.arrowPrev = this.$("prev")[0]), (this.events = { mouseenter: { link: "toggleHover" }, mouseleave: { link: "toggleHover" } });
            }
            init() {
                V.use([je, ie, pn, vn]),
                    (this.CarouselSmallImage = new V(this.$("CarouselSmallImage")[0], {
                        speed: 1e3,
                        loop: !1,
                        spaceBetween: 0,
                        grabCursor: !1,
                        spaceBetween: 0,
                        parallax: !0,
                        threshold: 3,
                        simulateTouch: !1,
                        draggable: !1,
                        allowTouchMove: !1,
                    })),
                    (this.CarouselBigImage = new V(this.$("CarouselBigImage")[0], {
                        speed: 1e3,
                        loop: !1,
                        spaceBetween: 0,
                        grabCursor: !0,
                        spaceBetween: 0,
                        parallax: !0,
                        threshold: 3,
                        navigation: { nextEl: this.arrowNext, prevEl: this.arrowPrev },
                    })),
                    (this.CarouselText = new V(this.$("CarouselText")[0], {
                        speed: 1e3,
                        loop: !1,
                        spaceBetween: 0,
                        grabCursor: !1,
                        spaceBetween: 0,
                        threshold: 3,
                        simulateTouch: !1,
                        draggable: !1,
                        effect: "fade",
                        allowTouchMove: !1,
                        fadeEffect: { crossFade: !0 },
                    }));
                let i = window.innerWidth || document.documentElement.clientWidth;
                i > 1e3 ? (this.CarouselBigImage.controller.control = [this.CarouselSmallImage, this.CarouselText]) : (this.CarouselBigImage.controller.control = [this.CarouselText]);
            }
            toggleHover(i) {
                let e = i.curTarget,
                    t = this.parent("container", e);
                t.classList.contains(ui.HOVER) ? t.classList.remove(ui.HOVER) : t.classList.add(ui.HOVER);
            }
            destroy() {
                this.CarouselBigImage && this.CarouselBigImage.destroy && this.CarouselBigImage.destroy(),
                    this.CarouselSmallImage && this.CarouselSmallImage.destroy && this.CarouselSmallImage.destroy(),
                    this.CarouselText && this.CarouselText.destroy && this.CarouselText.destroy();
            }
        },
        wn = yn;
    var bn = class extends A {
            constructor(i) {
                super(i);
            }
            init() {
                if (this.$("slide").length < 2) {
                    this.el.classList.add("has-no-carousel");
                    return;
                }
                V.use([je, ie, de]),
                    (this.container = this.$("container")[0]),
                    (this.arrowNext = this.$("next")[0]),
                    (this.arrowPrev = this.$("prev")[0]),
                    (this.pagination = this.$("pagination")[0]),
                    (this.carousel = new V(this.container, {
                        speed: 900,
                        loop: !0,
                        spaceBetween: 0,
                        grabCursor: !0,
                        spaceBetween: 0,
                        parallax: !0,
                        threshold: 3,
                        navigation: { prevEl: this.arrowPrev, nextEl: this.arrowNext },
                        pagination: { el: this.pagination, clickable: !0 },
                    }));
            }
            destroy() {
                this.carousel && this.carousel.destroy && this.carousel.destroy();
            }
        },
        Tn = bn;
    var Sn = class extends A {
            constructor(i) {
                super(i);
            }
            init() {
                V.use([ie, de]),
                    (this.container = this.$("container")[0]),
                    (this.pagination = this.$("pagination")[0]),
                    (this.arrowNext = this.$("next")[0]),
                    (this.carousel = new V(this.container, {
                        speed: 900,
                        loop: !0,
                        spaceBetween: 0,
                        grabCursor: !0,
                        loopedSlides: 2,
                        slidesPerView: 1,
                        spaceBetween: 0,
                        threshold: 3,
                        navigation: { prevEl: this.arrowPrev, nextEl: this.arrowNext },
                        breakpoints: { 700: { loopedSlides: 2, slidesPerView: 2 }, 1e3: { loopedSlides: 4, slidesPerView: 3 } },
                    }));
            }
            destroy() {
                this.carousel && this.carousel.destroy && this.carousel.destroy();
            }
        },
        xn = Sn;
    var En = class extends A {
            constructor(i) {
                super(i);
                (this.events = { click: { close: "close" } }), (this.inner = this.$("inner")[0]);
            }
            init() {
                (this.closeBind = (i) => {
                    i.key === "Escape" && this.close();
                }),
                    document.addEventListener("keyup", this.closeBind);
            }
            openVideo(i) {
                this.emptyTimeout && clearTimeout(this.emptyTimeout),
                    (this.appendDelay = setTimeout(() => {
                        switch (i.host) {
                            case "youtube":
                                this.inner.innerHTML = `<iframe src="https://www.youtube.com/embed/${i.id}?&autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
                                break;
                            case "vimeo":
                                this.inner.innerHTML = `<iframe src="https://player.vimeo.com/video/${i.id}?autoplay=1&loop=1&autopause=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
                                break;
                            default:
                                break;
                        }
                    }, 500)),
                    this.el.classList.add("is-active");
            }
            close() {
                clearTimeout(this.appendDelay),
                    this.el.classList.remove("is-active"),
                    (this.emptyTimeout = setTimeout(() => {
                        this.inner.innerHTML = "";
                    }, 250));
            }
            destroy() {
                document.removeEventListener("keyup", this.closeBind);
            }
        },
        Cn = En;
    var kn = class extends A {
            constructor(i) {
                super(i);
                this.events = { click: { toggler: "videoClick" } };
            }
            init() {}
            videoClick(i) {
                i.preventDefault();
                let e = i.curTarget,
                    t = this.getData("id", e),
                    r = this.getData("host", e);
                this.call("openVideo", { id: t, host: r }, "VideoModal");
            }
        },
        Mn = kn;
    var Ln = { OPENNAV: "has-nav-open" },
        An = class extends A {
            constructor(i) {
                super(i);
                this.events = { click: { menu: "toggleNav" } };
            }
            init() {
                (this.isOpen = !1),
                    (this.closeBind = (i) => {
                        i.key === "Escape" && this.close();
                    }),
                    document.addEventListener("keyup", this.closeBind);
            }
            toggleNav() {
                this.isOpen ? this.close() : this.open();
            }
            open() {
                (this.isOpen = !0), B.classList.add(Ln.OPENNAV);
            }
            close() {
                (this.isOpen = !1), B.classList.remove(Ln.OPENNAV);
            }
            destroy() {
                document.removeEventListener("keyup", this.closeBind);
            }
        },
        Pn = An;
    var On = class extends A {
            constructor(i) {
                super(i);
            }
            init() {
                let i = new SplitText(this.el, { type: this.getData("type") !== null ? this.getData("type") : "lines" }),
                    e = this.el.querySelectorAll("div");
                for (let t = 0; t < e.length; t++) {
                    let r = e[t],
                        n = r.innerHTML;
                    (r.innerHTML = "<div></div>"), (r.querySelector("div").innerHTML = n);
                }
            }
        },
        In = On;
    var Dn = class extends A {
            constructor(i) {
                super(i);
                this.events = { click: { toggler: "toggle" } };
            }
            init() {}
            toggle(i) {
                let e = i.curTarget,
                    t = this.parent("item", e);
                t.classList.contains("is-open") ? this.close() : (this.close(), this.open(t));
            }
            open(i) {
                let e = this.$("content", i)[0];
                i.classList.add("is-open"),
                    gsap.to(e, 0.3, {
                        height: this.compute(this.$("inner", i)[0]).height,
                        onComplete: () => {
                            this.call("update", "Scroll");
                        },
                    });
            }
            close() {
                this.$("item").forEach((i) => {
                    i.classList.remove("is-open");
                    let e = this.$("content", i)[0];
                    e &&
                        gsap.to(e, 0.3, {
                            height: 0,
                            onComplete: () => {
                                this.call("update", "Scroll");
                            },
                        });
                });
            }
            compute(i) {
                return i.getBoundingClientRect();
            }
        },
        Bn = Dn;
    var ci = { ACTIVE: "is-active" },
        _n = class extends A {
            constructor(i) {
                super(i);
                this.events = { change: { filter: "handleFilter" } };
            }
            init() {
                this.items = Array.from(this.$("item"));
            }
            handleFilter(i) {
                this.$("list")[0].classList.add("has-change"),
                    this.$("item").forEach((e) => {
                        i.currentTarget.value == "all"
                            ? (e.classList.add(ci.ACTIVE), this.$("list")[0].classList.remove("has-change"))
                            : e.getAttribute("data-clients-category") !== null && e.getAttribute("data-clients-category").includes(i.currentTarget.value)
                            ? e.classList.add(ci.ACTIVE)
                            : e.classList.remove(ci.ACTIVE);
                    });
            }
        },
        zn = _n;
    function Fe(i, e = () => {}) {
        var t = document.createElement("script"),
            r = document.querySelector(".c-preloader");
        (t.async = 1),
            (t.onload = t.onreadystatechange = (n, s) => {
                (s || !t.readyState || /loaded|complete/.test(t.readyState)) && ((t.onload = t.onreadystatechange = null), (t = void 0), s || (e && e()));
            }),
            (t.src = i),
            r.parentNode.insertBefore(t, r);
    }
    var re = { IS_SUCCESS: "is-success", IS_LOADING: "is-loading", IS_ERROR: "is-error" },
        Nn = class extends A {
            constructor(i) {
                super(i);
                (this.isRecaptchaEnabled = !1),
                    (this.events = { submit: "submit", click: { input: "enableRecaptcha" }, change: { input: "inputClearState", inputPreference: "inputClearStatePreference", inputCategories: "inputClearStateCategeories" } });
            }
            enableRecaptcha() {
                if (window.grecaptcha && typeof window.grecaptcha.render == "function") {
                    if (this.isRecaptchaEnabled) return;
                    this.isRecaptchaEnabled = !0;
                    let i = this.el.querySelector(".g-recaptcha");
                    if (i && !i.getAttribute("data-grecaptcha-id")) {
                        let e = grecaptcha.render(i, { sitekey: i.getAttribute("data-sitekey") });
                        i.setAttribute("data-grecaptcha-id", e);
                    }
                }
            }
            resetRecaptcha() {
                this.recaptchaId !== null && window.grecaptcha.reset();
            }
            init() {
                Fe("https://www.google.com/recaptcha/api.js?render=explicit"),
                    (this.action = this.el.action),
                    (this.confirmMessage = this.getData("confirm-message")),
                    (this.errorMessage = this.getData("error-message")),
                    (this.inputErrorMessage = this.getData("input-error-message"));
            }
            inputClearState(i) {
                i.curTarget.classList.remove("is-error");
            }
            inputClearStateCategeories() {
                this.$("categories")[0].classList.remove("is-error");
            }
            inputClearStatePreference() {
                this.$("preference")[0].classList.remove("is-error");
            }
            setLoadingState() {
                this.el.classList.add(re.IS_LOADING);
            }
            setConfirmationState(i) {
                this.clearState(),
                    this.el.reset(),
                    this.el.classList.add(re.IS_SUCCESS),
                    (this.$("feedback")[0].innerHTML = i),
                    this.updateScroll(),
                    setTimeout(() => {
                        this.call("scrollTo", [this.$("feedback")[0], -210], "Scroll", "main");
                    }, 100);
            }
            setErrorState(i) {
                this.clearState(),
                    this.el.classList.add(re.IS_ERROR),
                    (this.$("feedback")[0].innerHTML = i),
                    this.updateScroll(),
                    setTimeout(() => {
                        this.call("scrollTo", [this.$("feedback")[0], -60], "Scroll", "main");
                    }, 100);
            }
            setInputErrorState(i) {
                this.clearState(),
                    this.el.classList.add(re.IS_ERROR),
                    (this.$("feedback")[0].innerHTML = i),
                    this.updateScroll(),
                    setTimeout(() => {
                        this.call("scrollTo", [this.$("feedback")[0], -60], "Scroll", "main");
                    }, 100);
            }
            setErrorInput(i) {
                let e = !1;
                for (let t in i) {
                    let r = "input";
                    if ((t === "description" && (r = "textarea"), t === "g-recaptcha-response")) continue;
                    i[t] ? this.el.querySelector(`${r}[name="${t}"]`).classList.remove("is-error") : (this.el.querySelector(`${r}[name="${t}"]`).classList.add("is-error"), (e = !0), this.setInputErrorState(this.inputErrorMessage)),
                        t === "email" && !this.validateEmail(i[t]) && (this.el.querySelector(`${r}[name="${t}"]`).classList.add("is-error"), (e = !0), this.setInputErrorState(this.inputErrorMessage));
                }
                return (
                    i.categories.length || ((e = !0), this.setInputErrorState(this.inputErrorMessage), this.$("categories")[0].classList.add("is-error")),
                    typeof i.communication == "undefined" && ((e = !0), this.setInputErrorState(this.inputErrorMessage), this.$("preference")[0].classList.add("is-error")),
                    e
                );
            }
            validateEmail(i) {
                let e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return e.test(String(i).toLowerCase());
            }
            clearState() {
                this.el.classList.remove(re.IS_SUCCESS), this.el.classList.remove(re.IS_LOADING), this.el.classList.remove(re.IS_ERROR), (this.$("feedback")[0].innerHTML = ""), this.updateScroll();
            }
            updateScroll() {
                requestAnimationFrame(() => {
                    this.call("update", null, "Scroll");
                });
            }
            submit(i) {
                try {
                    i.preventDefault(), this.clearState();
                    let e = event.target,
                        t = new FormData(e),
                        r = { categories: [] };
                    for (let [a, o] of t) a === "categories" ? r[a].push(o) : (r[a] = o);
                    let n = this.setErrorInput(r);
                    if (n) return !1;
                    this.setLoadingState();
                    let s = !1;
                    fetch(this.action, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) })
                        .then((a) => (a.status !== 200 && a.status !== 202 && (s = !0), a.json()))
                        .then((a) => {
                            s ? this.setErrorState(this.errorMessage) : this.setConfirmationState(this.confirmMessage);
                        })
                        .finally(() => {
                            this.el.classList.remove(re.IS_LOADING);
                        });
                } catch (e) {
                    console.error(e);
                }
            }
        },
        $n = Nn;
    var Re = { OPENNAV: "has-sidebar-open" },
        jn = class extends A {
            constructor(i) {
                super(i);
                (this.opts = i), (this.places = {}), (this.isOpen = !1), (this.template = !1), (this.map = !1), (this.events = { click: { toggler: "toggleSidebar" } });
            }
            init() {
                (this.mapEl = this.el.querySelector(".c-map_wrap")), (this.categories = this.el.querySelectorAll(".js-map-selector")), (this.apiKey = this.getData("api-key")), (this.category = this.getData("category"));
                let i = JSON.parse(this.getData("endpoints"));
                (this.optionsEndpoint = i.options),
                    (this.locationEndpoint = i.location),
                    this.categories.forEach((e) => {
                        e.addEventListener("click", (t) => this.toggleDropdownItem(t));
                    }),
                    this.initMap();
            }
            toggleDropdownItem(i) {
                B.classList.remove("has-map-filters-open"),
                    this.categories.forEach((t) => {
                        t.classList.remove("is-active");
                    }),
                    i.currentTarget.classList.add("is-active");
                let e = i.currentTarget.getAttribute("data-id");
                this.fetchLocations(e, i);
            }
            initMap() {
                if (typeof google == "undefined")
                    return (
                        (window._tmp_google_onload = () => {
                            this.initMap();
                        }),
                        Fe(`https://maps.googleapis.com/maps/api/js?v=3.44&callback=_tmp_google_onload&key=${this.apiKey}`),
                        !1
                    );
                if (typeof BB.gmap == "undefined") throw new Error("BB.gmap seems to be undefined. Map cannot be instanciated.");
                fetch(this.optionsEndpoint)
                    .then((i) => i.json())
                    .then((i) => {
                        if (!i.success) throw new Error("An error occured when retrieving map options");
                        i.options.onfocus = (t, r) => {};
                        let e = new BB.gmap.controller(this.mapEl, i.options).init();
                        this.setMapInstance(e), this.fetchLocations(this.category);
                    })
                    .catch((i) => console.error(i));
            }
            fetchLocations(i, e = null) {
                if ((this.mapInstance().reset(), typeof this.places[i] != "undefined")) return this.setMapData(i, e), this;
                let t = this.locationEndpoint;
                return (
                    typeof i != "undefined" && i !== "all" && (t += `?category=${i}`),
                    fetch(t)
                        .then((r) => r.json())
                        .then((r) => {
                            (this.places[i] = r.places), this.setMapData(i, e);
                        })
                        .catch((r) => console.error(r)),
                    this
                );
            }
            setMapData(i, e = null) {
                let t = i || "all",
                    r = JSON.parse(JSON.stringify(this.places[t]));
                this.mapInstance().add_places(r), this.fitBounds();
            }
            fitBounds() {
                let i = {};
                window.innerWidth >= 1e3 && (i = { left: 0, right: 0, top: 80, bottom: 0 });
                var e = new google.maps.LatLngBounds(),
                    t = 0;
                if (
                    (this.mapInstance()._loop_all(function (s) {
                        var a = s.get_position();
                        if (!a) return !1;
                        var o;
                        if (s.object().map == null) return !1;
                        if ((s.show(), a instanceof google.maps.LatLng)) e.extend(a);
                        else
                            for (var l = 0; l < a.getLength(); l++) {
                                o = a.getAt(l);
                                for (var u = 0; u < o.getLength(); u++) e.extend(o.getAt(u));
                            }
                        t++;
                    }),
                    t > 0 && (this.mapInstance().map().fitBounds(e, i), this.mapInstance().data("max_fitbounds_zoom")))
                ) {
                    var r = this.mapInstance().data("max_fitbounds_zoom"),
                        n = this.mapInstance().map().getZoom();
                    n > r && this.mapInstance().map().setZoom(r);
                }
            }
            openCard(i, e = !0) {
                if (e) {
                    let t = i.currentTarget.querySelector(".js-map-marker");
                    t && t.classList.add("is-active");
                }
                (this.isOpen = !0),
                    B.classList.add(Re.OPENNAV),
                    setTimeout(() => {
                        B.classList.add("has-map-card-open");
                    }, 150);
            }
            closeCard() {
                (this.isOpen = !1), B.classList.remove(Re.OPENNAV), this.el.querySelector(".js-map-marker.is-active").classList.remove("is-active");
            }
            setMapInstance(i) {
                this.map = i;
            }
            mapInstance() {
                return this.map;
            }
            toggleSidebar() {
                this.isOpen ? this.close() : this.open();
            }
            open() {
                (this.isOpen = !0), B.classList.add(Re.OPENNAV);
            }
            close() {
                (this.isOpen = !1), B.classList.remove(Re.OPENNAV);
            }
        },
        Fn = jn;
    var Rn = class extends A {
            constructor(i) {
                super(i);
                this.events = { click: { toggler: "clientClick" } };
            }
            init() {}
            clientClick(i) {
                i.preventDefault();
                let e = i.curTarget,
                    t = this.getData("id", e);
                this.call("openClient", { id: t }, "ClientModal");
            }
        },
        Hn = Rn;
    var Vn = class extends A {
            constructor(i) {
                super(i);
                (this.events = { click: { close: "close" } }), (this.items = this.$("item"));
            }
            init() {
                (this.closeBind = (i) => {
                    i.key === "Escape" && this.close();
                }),
                    document.addEventListener("keyup", this.closeBind);
            }
            openClient(i) {
                this.el.classList.add("is-active"), this.setActive(i.id);
            }
            setActive(i) {
                this.items.forEach((e) => {
                    e.classList.remove("is-active");
                }),
                    this.items.forEach((e) => {
                        e.getAttribute("data-id") == i && e.classList.add("is-active");
                    });
            }
            close() {
                this.el.classList.remove("is-active");
            }
            destroy() {
                document.removeEventListener("keyup", this.closeBind);
            }
        },
        Wn = Vn;
    var qn = class extends A {
            constructor(i) {
                super(i);
            }
            init() {}
            fill(i) {
                this.$("container")[0].innerHTML = i.innerHTML;
            }
        },
        Gn = qn;
    function Ya(i, e) {
        if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function Yn(i, e) {
        for (var t = 0; t < e.length; t++) {
            var r = e[t];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(i, r.key, r);
        }
    }
    function Xa(i, e, t) {
        return e && Yn(i.prototype, e), t && Yn(i, t), i;
    }
    var Xn = typeof global != "undefined" && {}.toString.call(global) === "[object global]";
    function Un(i, e) {
        return i.indexOf(e.toLowerCase()) === 0 ? i : "".concat(e.toLowerCase()).concat(i.substr(0, 1).toUpperCase()).concat(i.substr(1));
    }
    function Ua(i) {
        return Boolean(i && i.nodeType === 1 && "nodeName" in i && i.ownerDocument && i.ownerDocument.defaultView);
    }
    function Ka(i) {
        return !isNaN(parseFloat(i)) && isFinite(i) && Math.floor(i) == i;
    }
    function Se(i) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(i);
    }
    function Kn() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            e = i.id,
            t = i.url,
            r = e || t;
        if (!r) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (Ka(r)) return "https://vimeo.com/".concat(r);
        if (Se(r)) return r.replace("http:", "https:");
        throw e ? new TypeError("\u201C".concat(e, "\u201D is not a valid video id.")) : new TypeError("\u201C".concat(r, "\u201D is not a vimeo.com url."));
    }
    var Qa = typeof Array.prototype.indexOf != "undefined",
        Ja = typeof window != "undefined" && typeof window.postMessage != "undefined";
    if (!Xn && (!Qa || !Ja)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var he = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    function Za(i, e) {
        return (e = { exports: {} }), i(e, e.exports), e.exports;
    }
    (function (i) {
        if (i.WeakMap) return;
        var e = Object.prototype.hasOwnProperty,
            t = function (n, s, a) {
                Object.defineProperty ? Object.defineProperty(n, s, { configurable: !0, writable: !0, value: a }) : (n[s] = a);
            };
        i.WeakMap = (function () {
            function n() {
                if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
                if ((t(this, "_id", a("_WeakMap")), arguments.length > 0)) throw new TypeError("WeakMap iterable is not supported");
            }
            t(n.prototype, "delete", function (l) {
                if ((s(this, "delete"), !r(l))) return !1;
                var u = l[this._id];
                return u && u[0] === l ? (delete l[this._id], !0) : !1;
            }),
                t(n.prototype, "get", function (l) {
                    if ((s(this, "get"), !r(l))) return;
                    var u = l[this._id];
                    return u && u[0] === l ? u[1] : void 0;
                }),
                t(n.prototype, "has", function (l) {
                    if ((s(this, "has"), !r(l))) return !1;
                    var u = l[this._id];
                    return !!(u && u[0] === l);
                }),
                t(n.prototype, "set", function (l, u) {
                    if ((s(this, "set"), !r(l))) throw new TypeError("Invalid value used as weak map key");
                    var c = l[this._id];
                    return c && c[0] === l ? ((c[1] = u), this) : (t(l, this._id, [l, u]), this);
                });
            function s(l, u) {
                if (!r(l) || !e.call(l, "_id")) throw new TypeError(u + " method called on incompatible receiver " + typeof l);
            }
            function a(l) {
                return l + "_" + o() + "." + o();
            }
            function o() {
                return Math.random().toString().substring(2);
            }
            return t(n, "_polyfill", !0), n;
        })();
        function r(n) {
            return Object(n) === n;
        }
    })(typeof self != "undefined" ? self : typeof window != "undefined" ? window : (typeof he != "undefined", he));
    var ne = Za(function (i) {
            (function (t, r, n) {
                (r[t] = r[t] || n()), i.exports && (i.exports = r[t]);
            })("Promise", (typeof he != "undefined", he), function () {
                var t,
                    r,
                    n,
                    s = Object.prototype.toString,
                    a =
                        typeof setImmediate != "undefined"
                            ? function (v) {
                                  return setImmediate(v);
                              }
                            : setTimeout;
                try {
                    Object.defineProperty({}, "x", {}),
                        (t = function (v, p, g, y) {
                            return Object.defineProperty(v, p, { value: g, writable: !0, configurable: y !== !1 });
                        });
                } catch (w) {
                    t = function (p, g, y) {
                        return (p[g] = y), p;
                    };
                }
                n = (function () {
                    var v, p, g;
                    function y(x, S) {
                        (this.fn = x), (this.self = S), (this.next = void 0);
                    }
                    return {
                        add: function (S, E) {
                            (g = new y(S, E)), p ? (p.next = g) : (v = g), (p = g), (g = void 0);
                        },
                        drain: function () {
                            var S = v;
                            for (v = p = r = void 0; S; ) S.fn.call(S.self), (S = S.next);
                        },
                    };
                })();
                function o(w, v) {
                    n.add(w, v), r || (r = a(n.drain));
                }
                function l(w) {
                    var v,
                        p = typeof w;
                    return w != null && (p == "object" || p == "function") && (v = w.then), typeof v == "function" ? v : !1;
                }
                function u() {
                    for (var w = 0; w < this.chain.length; w++) c(this, this.state === 1 ? this.chain[w].success : this.chain[w].failure, this.chain[w]);
                    this.chain.length = 0;
                }
                function c(w, v, p) {
                    var g, y;
                    try {
                        v === !1 ? p.reject(w.msg) : (v === !0 ? (g = w.msg) : (g = v.call(void 0, w.msg)), g === p.promise ? p.reject(TypeError("Promise-chain cycle")) : (y = l(g)) ? y.call(g, p.resolve, p.reject) : p.resolve(g));
                    } catch (x) {
                        p.reject(x);
                    }
                }
                function f(w) {
                    var v,
                        p = this;
                    if (p.triggered) return;
                    (p.triggered = !0), p.def && (p = p.def);
                    try {
                        (v = l(w))
                            ? o(function () {
                                  var g = new m(p);
                                  try {
                                      v.call(
                                          w,
                                          function () {
                                              f.apply(g, arguments);
                                          },
                                          function () {
                                              d.apply(g, arguments);
                                          }
                                      );
                                  } catch (y) {
                                      d.call(g, y);
                                  }
                              })
                            : ((p.msg = w), (p.state = 1), p.chain.length > 0 && o(u, p));
                    } catch (g) {
                        d.call(new m(p), g);
                    }
                }
                function d(w) {
                    var v = this;
                    if (v.triggered) return;
                    (v.triggered = !0), v.def && (v = v.def), (v.msg = w), (v.state = 2), v.chain.length > 0 && o(u, v);
                }
                function h(w, v, p, g) {
                    for (var y = 0; y < v.length; y++)
                        (function (S) {
                            w.resolve(v[S]).then(function (k) {
                                p(S, k);
                            }, g);
                        })(y);
                }
                function m(w) {
                    (this.def = w), (this.triggered = !1);
                }
                function b(w) {
                    (this.promise = w), (this.state = 0), (this.triggered = !1), (this.chain = []), (this.msg = void 0);
                }
                function T(w) {
                    if (typeof w != "function") throw TypeError("Not a function");
                    if (this.__NPO__ !== 0) throw TypeError("Not a promise");
                    this.__NPO__ = 1;
                    var v = new b(this);
                    (this.then = function (g, y) {
                        var x = { success: typeof g == "function" ? g : !0, failure: typeof y == "function" ? y : !1 };
                        return (
                            (x.promise = new this.constructor(function (E, k) {
                                if (typeof E != "function" || typeof k != "function") throw TypeError("Not a function");
                                (x.resolve = E), (x.reject = k);
                            })),
                            v.chain.push(x),
                            v.state !== 0 && o(u, v),
                            x.promise
                        );
                    }),
                        (this.catch = function (g) {
                            return this.then(void 0, g);
                        });
                    try {
                        w.call(
                            void 0,
                            function (g) {
                                f.call(v, g);
                            },
                            function (g) {
                                d.call(v, g);
                            }
                        );
                    } catch (p) {
                        d.call(v, p);
                    }
                }
                var C = t({}, "constructor", T, !1);
                return (
                    (T.prototype = C),
                    t(C, "__NPO__", 0, !1),
                    t(T, "resolve", function (v) {
                        var p = this;
                        return v && typeof v == "object" && v.__NPO__ === 1
                            ? v
                            : new p(function (y, x) {
                                  if (typeof y != "function" || typeof x != "function") throw TypeError("Not a function");
                                  y(v);
                              });
                    }),
                    t(T, "reject", function (v) {
                        return new this(function (g, y) {
                            if (typeof g != "function" || typeof y != "function") throw TypeError("Not a function");
                            y(v);
                        });
                    }),
                    t(T, "all", function (v) {
                        var p = this;
                        return s.call(v) != "[object Array]"
                            ? p.reject(TypeError("Not an array"))
                            : v.length === 0
                            ? p.resolve([])
                            : new p(function (y, x) {
                                  if (typeof y != "function" || typeof x != "function") throw TypeError("Not a function");
                                  var S = v.length,
                                      E = Array(S),
                                      k = 0;
                                  h(
                                      p,
                                      v,
                                      function (O, _) {
                                          (E[O] = _), ++k === S && y(E);
                                      },
                                      x
                                  );
                              });
                    }),
                    t(T, "race", function (v) {
                        var p = this;
                        return s.call(v) != "[object Array]"
                            ? p.reject(TypeError("Not an array"))
                            : new p(function (y, x) {
                                  if (typeof y != "function" || typeof x != "function") throw TypeError("Not a function");
                                  h(
                                      p,
                                      v,
                                      function (E, k) {
                                          y(k);
                                      },
                                      x
                                  );
                              });
                    }),
                    T
                );
            });
        }),
        ee = new WeakMap();
    function xe(i, e, t) {
        var r = ee.get(i.element) || {};
        e in r || (r[e] = []), r[e].push(t), ee.set(i.element, r);
    }
    function He(i, e) {
        var t = ee.get(i.element) || {};
        return t[e] || [];
    }
    function Ve(i, e, t) {
        var r = ee.get(i.element) || {};
        if (!r[e]) return !0;
        if (!t) return (r[e] = []), ee.set(i.element, r), !0;
        var n = r[e].indexOf(t);
        return n !== -1 && r[e].splice(n, 1), ee.set(i.element, r), r[e] && r[e].length === 0;
    }
    function eo(i, e) {
        var t = He(i, e);
        if (t.length < 1) return !1;
        var r = t.shift();
        return Ve(i, e, r), r;
    }
    function to(i, e) {
        var t = ee.get(i);
        ee.set(e, t), ee.delete(i);
    }
    var io = [
        "autopause",
        "autoplay",
        "background",
        "byline",
        "color",
        "controls",
        "dnt",
        "height",
        "id",
        "loop",
        "maxheight",
        "maxwidth",
        "muted",
        "playsinline",
        "portrait",
        "responsive",
        "speed",
        "texttrack",
        "title",
        "transparent",
        "url",
        "width",
    ];
    function Qn(i) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return io.reduce(function (t, r) {
            var n = i.getAttribute("data-vimeo-".concat(r));
            return (n || n === "") && (t[r] = n === "" ? 1 : n), t;
        }, e);
    }
    function fi(i, e) {
        var t = i.html;
        if (!e) throw new TypeError("An element must be provided");
        if (e.getAttribute("data-vimeo-initialized") !== null) return e.querySelector("iframe");
        var r = document.createElement("div");
        return (r.innerHTML = t), e.appendChild(r.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe");
    }
    function Jn(i) {
        var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            t = arguments.length > 2 ? arguments[2] : void 0;
        return new Promise(function (r, n) {
            if (!Se(i)) throw new TypeError("\u201C".concat(i, "\u201D is not a vimeo.com url."));
            var s = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(i));
            for (var a in e) e.hasOwnProperty(a) && (s += "&".concat(a, "=").concat(encodeURIComponent(e[a])));
            var o = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
            o.open("GET", s, !0),
                (o.onload = function () {
                    if (o.status === 404) {
                        n(new Error("\u201C".concat(i, "\u201D was not found.")));
                        return;
                    }
                    if (o.status === 403) {
                        n(new Error("\u201C".concat(i, "\u201D is not embeddable.")));
                        return;
                    }
                    try {
                        var l = JSON.parse(o.responseText);
                        if (l.domain_status_code === 403) {
                            fi(l, t), n(new Error("\u201C".concat(i, "\u201D is not embeddable.")));
                            return;
                        }
                        r(l);
                    } catch (u) {
                        n(u);
                    }
                }),
                (o.onerror = function () {
                    var l = o.status ? " (".concat(o.status, ")") : "";
                    n(new Error("There was an error fetching the embed code from Vimeo".concat(l, ".")));
                }),
                o.send();
        });
    }
    function ro() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document,
            e = [].slice.call(i.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
            t = function (n) {
                "console" in window && console.error && console.error("There was an error creating an embed: ".concat(n));
            };
        e.forEach(function (r) {
            try {
                if (r.getAttribute("data-vimeo-defer") !== null) return;
                var n = Qn(r),
                    s = Kn(n);
                Jn(s, n, r)
                    .then(function (a) {
                        return fi(a, r);
                    })
                    .catch(t);
            } catch (a) {
                t(a);
            }
        });
    }
    function no() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
        if (window.VimeoPlayerResizeEmbeds_) return;
        window.VimeoPlayerResizeEmbeds_ = !0;
        var e = function (r) {
            if (!Se(r.origin)) return;
            if (!r.data || r.data.event !== "spacechange") return;
            for (var n = i.querySelectorAll("iframe"), s = 0; s < n.length; s++) {
                if (n[s].contentWindow !== r.source) continue;
                var a = n[s].parentElement;
                a.style.paddingBottom = "".concat(r.data.data[0].bottom, "px");
                break;
            }
        };
        window.addEventListener("message", e);
    }
    function Zn(i) {
        if (typeof i == "string")
            try {
                i = JSON.parse(i);
            } catch (e) {
                return console.warn(e), {};
            }
        return i;
    }
    function Ee(i, e, t) {
        if (!i.element.contentWindow || !i.element.contentWindow.postMessage) return;
        var r = { method: e };
        t !== void 0 && (r.value = t);
        var n = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
        n >= 8 && n < 10 && (r = JSON.stringify(r)), i.element.contentWindow.postMessage(r, i.origin);
    }
    function so(i, e) {
        e = Zn(e);
        var t = [],
            r;
        if (e.event) {
            if (e.event === "error") {
                var n = He(i, e.data.method);
                n.forEach(function (a) {
                    var o = new Error(e.data.message);
                    (o.name = e.data.name), a.reject(o), Ve(i, e.data.method, a);
                });
            }
            (t = He(i, "event:".concat(e.event))), (r = e.data);
        } else if (e.method) {
            var s = eo(i, e.method);
            s && (t.push(s), (r = e.value));
        }
        t.forEach(function (a) {
            try {
                if (typeof a == "function") {
                    a.call(i, r);
                    return;
                }
                a.resolve(r);
            } catch (o) {}
        });
    }
    function ao() {
        var i = (function () {
                for (
                    var r,
                        n = [
                            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"],
                        ],
                        s = 0,
                        a = n.length,
                        o = {};
                    s < a;
                    s++
                )
                    if (((r = n[s]), r && r[1] in document)) {
                        for (s = 0; s < r.length; s++) o[n[0][s]] = r[s];
                        return o;
                    }
                return !1;
            })(),
            e = { fullscreenchange: i.fullscreenchange, fullscreenerror: i.fullscreenerror },
            t = {
                request: function (n) {
                    return new Promise(function (s, a) {
                        var o = function u() {
                            t.off("fullscreenchange", u), s();
                        };
                        t.on("fullscreenchange", o), (n = n || document.documentElement);
                        var l = n[i.requestFullscreen]();
                        l instanceof Promise && l.then(o).catch(a);
                    });
                },
                exit: function () {
                    return new Promise(function (n, s) {
                        if (!t.isFullscreen) {
                            n();
                            return;
                        }
                        var a = function l() {
                            t.off("fullscreenchange", l), n();
                        };
                        t.on("fullscreenchange", a);
                        var o = document[i.exitFullscreen]();
                        o instanceof Promise && o.then(a).catch(s);
                    });
                },
                on: function (n, s) {
                    var a = e[n];
                    a && document.addEventListener(a, s);
                },
                off: function (n, s) {
                    var a = e[n];
                    a && document.removeEventListener(a, s);
                },
            };
        return (
            Object.defineProperties(t, {
                isFullscreen: {
                    get: function () {
                        return Boolean(document[i.fullscreenElement]);
                    },
                },
                element: {
                    enumerable: !0,
                    get: function () {
                        return document[i.fullscreenElement];
                    },
                },
                isEnabled: {
                    enumerable: !0,
                    get: function () {
                        return Boolean(document[i.fullscreenEnabled]);
                    },
                },
            }),
            t
        );
    }
    var pe = new WeakMap(),
        di = new WeakMap(),
        K = {},
        oo = (function () {
            function i(e) {
                var t = this,
                    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (
                    (Ya(this, i),
                    window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), (e = e[0])),
                    typeof document != "undefined" && typeof e == "string" && (e = document.getElementById(e)),
                    !Ua(e))
                )
                    throw new TypeError("You must pass either a valid element or a valid id.");
                if (e.nodeName !== "IFRAME") {
                    var n = e.querySelector("iframe");
                    n && (e = n);
                }
                if (e.nodeName === "IFRAME" && !Se(e.getAttribute("src") || "")) throw new Error("The player element passed isn\u2019t a Vimeo embed.");
                if (pe.has(e)) return pe.get(e);
                (this._window = e.ownerDocument.defaultView), (this.element = e), (this.origin = "*");
                var s = new ne(function (o, l) {
                    if (
                        ((t._onMessage = function (f) {
                            if (!Se(f.origin) || t.element.contentWindow !== f.source) return;
                            t.origin === "*" && (t.origin = f.origin);
                            var d = Zn(f.data),
                                h = d && d.event === "error",
                                m = h && d.data && d.data.method === "ready";
                            if (m) {
                                var b = new Error(d.data.message);
                                (b.name = d.data.name), l(b);
                                return;
                            }
                            var T = d && d.event === "ready",
                                C = d && d.method === "ping";
                            if (T || C) {
                                t.element.setAttribute("data-ready", "true"), o();
                                return;
                            }
                            so(t, d);
                        }),
                        t._window.addEventListener("message", t._onMessage),
                        t.element.nodeName !== "IFRAME")
                    ) {
                        var u = Qn(e, r),
                            c = Kn(u);
                        Jn(c, u, e)
                            .then(function (f) {
                                var d = fi(f, e);
                                return (t.element = d), (t._originalElement = e), to(e, d), pe.set(t.element, t), f;
                            })
                            .catch(l);
                    }
                });
                if ((di.set(this, s), pe.set(this.element, this), this.element.nodeName === "IFRAME" && Ee(this, "ping"), K.isEnabled)) {
                    var a = function () {
                        return K.exit();
                    };
                    K.on("fullscreenchange", function () {
                        K.isFullscreen ? xe(t, "event:exitFullscreen", a) : Ve(t, "event:exitFullscreen", a),
                            t.ready().then(function () {
                                Ee(t, "fullscreenchange", K.isFullscreen);
                            });
                    });
                }
                return this;
            }
            return (
                Xa(i, [
                    {
                        key: "callMethod",
                        value: function (t) {
                            var r = this,
                                n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return new ne(function (s, a) {
                                return r
                                    .ready()
                                    .then(function () {
                                        xe(r, t, { resolve: s, reject: a }), Ee(r, t, n);
                                    })
                                    .catch(a);
                            });
                        },
                    },
                    {
                        key: "get",
                        value: function (t) {
                            var r = this;
                            return new ne(function (n, s) {
                                return (
                                    (t = Un(t, "get")),
                                    r
                                        .ready()
                                        .then(function () {
                                            xe(r, t, { resolve: n, reject: s }), Ee(r, t);
                                        })
                                        .catch(s)
                                );
                            });
                        },
                    },
                    {
                        key: "set",
                        value: function (t, r) {
                            var n = this;
                            return new ne(function (s, a) {
                                if (((t = Un(t, "set")), r == null)) throw new TypeError("There must be a value to set.");
                                return n
                                    .ready()
                                    .then(function () {
                                        xe(n, t, { resolve: s, reject: a }), Ee(n, t, r);
                                    })
                                    .catch(a);
                            });
                        },
                    },
                    {
                        key: "on",
                        value: function (t, r) {
                            if (!t) throw new TypeError("You must pass an event name.");
                            if (!r) throw new TypeError("You must pass a callback function.");
                            if (typeof r != "function") throw new TypeError("The callback must be a function.");
                            var n = He(this, "event:".concat(t));
                            n.length === 0 && this.callMethod("addEventListener", t).catch(function () {}), xe(this, "event:".concat(t), r);
                        },
                    },
                    {
                        key: "off",
                        value: function (t, r) {
                            if (!t) throw new TypeError("You must pass an event name.");
                            if (r && typeof r != "function") throw new TypeError("The callback must be a function.");
                            var n = Ve(this, "event:".concat(t), r);
                            n && this.callMethod("removeEventListener", t).catch(function (s) {});
                        },
                    },
                    {
                        key: "loadVideo",
                        value: function (t) {
                            return this.callMethod("loadVideo", t);
                        },
                    },
                    {
                        key: "ready",
                        value: function () {
                            var t =
                                di.get(this) ||
                                new ne(function (r, n) {
                                    n(new Error("Unknown player. Probably unloaded."));
                                });
                            return ne.resolve(t);
                        },
                    },
                    {
                        key: "addCuePoint",
                        value: function (t) {
                            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                            return this.callMethod("addCuePoint", { time: t, data: r });
                        },
                    },
                    {
                        key: "removeCuePoint",
                        value: function (t) {
                            return this.callMethod("removeCuePoint", t);
                        },
                    },
                    {
                        key: "enableTextTrack",
                        value: function (t, r) {
                            if (!t) throw new TypeError("You must pass a language.");
                            return this.callMethod("enableTextTrack", { language: t, kind: r });
                        },
                    },
                    {
                        key: "disableTextTrack",
                        value: function () {
                            return this.callMethod("disableTextTrack");
                        },
                    },
                    {
                        key: "pause",
                        value: function () {
                            return this.callMethod("pause");
                        },
                    },
                    {
                        key: "play",
                        value: function () {
                            return this.callMethod("play");
                        },
                    },
                    {
                        key: "requestFullscreen",
                        value: function () {
                            return K.isEnabled ? K.request(this.element) : this.callMethod("requestFullscreen");
                        },
                    },
                    {
                        key: "exitFullscreen",
                        value: function () {
                            return K.isEnabled ? K.exit() : this.callMethod("exitFullscreen");
                        },
                    },
                    {
                        key: "getFullscreen",
                        value: function () {
                            return K.isEnabled ? ne.resolve(K.isFullscreen) : this.get("fullscreen");
                        },
                    },
                    {
                        key: "requestPictureInPicture",
                        value: function () {
                            return this.callMethod("requestPictureInPicture");
                        },
                    },
                    {
                        key: "exitPictureInPicture",
                        value: function () {
                            return this.callMethod("exitPictureInPicture");
                        },
                    },
                    {
                        key: "getPictureInPicture",
                        value: function () {
                            return this.get("pictureInPicture");
                        },
                    },
                    {
                        key: "unload",
                        value: function () {
                            return this.callMethod("unload");
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            var t = this;
                            return new ne(function (r) {
                                if (
                                    (di.delete(t),
                                    pe.delete(t.element),
                                    t._originalElement && (pe.delete(t._originalElement), t._originalElement.removeAttribute("data-vimeo-initialized")),
                                    t.element && t.element.nodeName === "IFRAME" && t.element.parentNode && t.element.parentNode.removeChild(t.element),
                                    t.element && t.element.nodeName === "DIV" && t.element.parentNode)
                                ) {
                                    t.element.removeAttribute("data-vimeo-initialized");
                                    var n = t.element.querySelector("iframe");
                                    n && n.parentNode && n.parentNode.removeChild(n);
                                }
                                t._window.removeEventListener("message", t._onMessage), r();
                            });
                        },
                    },
                    {
                        key: "getAutopause",
                        value: function () {
                            return this.get("autopause");
                        },
                    },
                    {
                        key: "setAutopause",
                        value: function (t) {
                            return this.set("autopause", t);
                        },
                    },
                    {
                        key: "getBuffered",
                        value: function () {
                            return this.get("buffered");
                        },
                    },
                    {
                        key: "getCameraProps",
                        value: function () {
                            return this.get("cameraProps");
                        },
                    },
                    {
                        key: "setCameraProps",
                        value: function (t) {
                            return this.set("cameraProps", t);
                        },
                    },
                    {
                        key: "getChapters",
                        value: function () {
                            return this.get("chapters");
                        },
                    },
                    {
                        key: "getCurrentChapter",
                        value: function () {
                            return this.get("currentChapter");
                        },
                    },
                    {
                        key: "getColor",
                        value: function () {
                            return this.get("color");
                        },
                    },
                    {
                        key: "setColor",
                        value: function (t) {
                            return this.set("color", t);
                        },
                    },
                    {
                        key: "getCuePoints",
                        value: function () {
                            return this.get("cuePoints");
                        },
                    },
                    {
                        key: "getCurrentTime",
                        value: function () {
                            return this.get("currentTime");
                        },
                    },
                    {
                        key: "setCurrentTime",
                        value: function (t) {
                            return this.set("currentTime", t);
                        },
                    },
                    {
                        key: "getDuration",
                        value: function () {
                            return this.get("duration");
                        },
                    },
                    {
                        key: "getEnded",
                        value: function () {
                            return this.get("ended");
                        },
                    },
                    {
                        key: "getLoop",
                        value: function () {
                            return this.get("loop");
                        },
                    },
                    {
                        key: "setLoop",
                        value: function (t) {
                            return this.set("loop", t);
                        },
                    },
                    {
                        key: "setMuted",
                        value: function (t) {
                            return this.set("muted", t);
                        },
                    },
                    {
                        key: "getMuted",
                        value: function () {
                            return this.get("muted");
                        },
                    },
                    {
                        key: "getPaused",
                        value: function () {
                            return this.get("paused");
                        },
                    },
                    {
                        key: "getPlaybackRate",
                        value: function () {
                            return this.get("playbackRate");
                        },
                    },
                    {
                        key: "setPlaybackRate",
                        value: function (t) {
                            return this.set("playbackRate", t);
                        },
                    },
                    {
                        key: "getPlayed",
                        value: function () {
                            return this.get("played");
                        },
                    },
                    {
                        key: "getQualities",
                        value: function () {
                            return this.get("qualities");
                        },
                    },
                    {
                        key: "getQuality",
                        value: function () {
                            return this.get("quality");
                        },
                    },
                    {
                        key: "setQuality",
                        value: function (t) {
                            return this.set("quality", t);
                        },
                    },
                    {
                        key: "getSeekable",
                        value: function () {
                            return this.get("seekable");
                        },
                    },
                    {
                        key: "getSeeking",
                        value: function () {
                            return this.get("seeking");
                        },
                    },
                    {
                        key: "getTextTracks",
                        value: function () {
                            return this.get("textTracks");
                        },
                    },
                    {
                        key: "getVideoEmbedCode",
                        value: function () {
                            return this.get("videoEmbedCode");
                        },
                    },
                    {
                        key: "getVideoId",
                        value: function () {
                            return this.get("videoId");
                        },
                    },
                    {
                        key: "getVideoTitle",
                        value: function () {
                            return this.get("videoTitle");
                        },
                    },
                    {
                        key: "getVideoWidth",
                        value: function () {
                            return this.get("videoWidth");
                        },
                    },
                    {
                        key: "getVideoHeight",
                        value: function () {
                            return this.get("videoHeight");
                        },
                    },
                    {
                        key: "getVideoUrl",
                        value: function () {
                            return this.get("videoUrl");
                        },
                    },
                    {
                        key: "getVolume",
                        value: function () {
                            return this.get("volume");
                        },
                    },
                    {
                        key: "setVolume",
                        value: function (t) {
                            return this.set("volume", t);
                        },
                    },
                ]),
                i
            );
        })();
    Xn || ((K = ao()), ro(), no());
    var es = oo,
        ts = class extends A {
            constructor(i) {
                super(i);
                (this.isLoad = !1), (this.onlyOnDesktop = this.getData("desktop") === "true"), (this.autoplay = this.getData("autoplay") === "true");
            }
            init() {
                this.autoplay && this.load(), (window.firstVimeoPlayerInstancied = !0), this.timeout;
            }
            load(i) {
                if ((this.onlyOnDesktop && window.isMobile) || this.isLoad) {
                    i !== void 0 && i();
                    return;
                }
                this.autoplay || this.el.setAttribute("src", this.el.getAttribute("data-src")),
                    (this.player = new es(this.el)),
                    this.player.on("playing", () => {
                        this.isPlaying || this.el.classList.add("is-loaded"), (this.isPlaying = !0);
                    }),
                    this.player.on("loaded", () => {
                        i !== void 0 && i(), (this.isLoad = !0);
                    });
            }
            trigger(i) {
                i.way == "enter"
                    ? this.isLoad
                        ? this.player.play()
                        : new Promise((e) => {
                              this.load(e);
                          }).then(() => {
                              setTimeout(() => {
                                  this.player.play();
                              });
                          })
                    : this.isLoad
                    ? this.player.pause()
                    : new Promise((e) => {
                          this.load(e);
                      }).then(() => {
                          this.player.pause();
                      });
            }
            play() {
                this.isLoad || this.load(), clearTimeout(this.timeout), this.player.play();
            }
            pause() {
                this.player.pause();
            }
            destroy() {
                (window.firstVimeoPlayerInstancied = void 0), this.player !== void 0 && this.player.destroy();
            }
        },
        is = ts;
    var ss = Cs(ns());
    function as() {
        ss.default(),
            window.addEventListener("resize", () => {
                let e = window.innerHeight * 0.01;
                document.documentElement.style.setProperty("--vh", `${e}px`);
            });
        let i = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${i}px`);
    }
    var os = new Ii({ modules: hi });
    window.onload = (i) => {
        let e = document.getElementById("stylesheet"),
            t = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
        (window.isMobile = t),
            window.isMobile && B.classList.add("is-mobile"),
            e.isLoaded
                ? ls()
                : e.addEventListener("load", (r) => {
                      ls();
                  });
    };
    function ls() {
        as(),
            os.init(os),
            setTimeout(() => {
                B.classList.add("has-intro-start");
            }, 50),
            setTimeout(() => {
                B.classList.add("is-first-loaded");
            }, 1100),
            setTimeout(() => {
                B.classList.add("is-loaded"), B.classList.add("is-ready"), B.classList.remove("is-loading");
            }, 2e3),
            setTimeout(() => {
                B.classList.remove("has-intro-start");
            }, 2400);
    }
})();
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
/*! @vimeo/player v2.15.0 | (c) 2021 Vimeo | MIT License | https://github.com/vimeo/player.js */
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
/*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
//# sourceMappingURL=app.js.map
