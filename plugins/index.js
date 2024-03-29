!function(e) {
    function t(a) {
        if (n[a])
            return n[a].exports;
        var r = n[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "",
    t(0)
}([function(e, t, n) {
    e.exports = n(12)
}
, , , , , , , , function(e, t, n) {
    var a, r;
    /*!
	 * jQuery JavaScript Library v3.2.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2017-03-20T18:59Z
	 */
    !function(t, n) {
        "use strict";
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, function(n, i) {
        "use strict";
        function s(e, t) {
            t = t || se;
            var n = t.createElement("script");
            n.text = e,
            t.head.appendChild(n).parentNode.removeChild(n)
        }
        function o(e) {
            var t = !!e && "length"in e && e.length
              , n = we.type(e);
            return "function" !== n && !we.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function l(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        function u(e, t, n) {
            return we.isFunction(t) ? we.grep(e, function(e, a) {
                return !!t.call(e, a, e) !== n
            }) : t.nodeType ? we.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? we.grep(e, function(e) {
                return de.call(t, e) > -1 !== n
            }) : Pe.test(t) ? we.filter(t, e, n) : (t = we.filter(t, e),
            we.grep(e, function(e) {
                return de.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }
        function p(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        function d(e) {
            var t = {};
            return we.each(e.match(He) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }
        function c(e) {
            return e
        }
        function f(e) {
            throw e
        }
        function h(e, t, n, a) {
            var r;
            try {
                e && we.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && we.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(a))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        function m() {
            se.removeEventListener("DOMContentLoaded", m),
            n.removeEventListener("load", m),
            we.ready()
        }
        function g() {
            this.expando = we.expando + g.uid++
        }
        function v(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Xe.test(e) ? JSON.parse(e) : e)
        }
        function y(e, t, n) {
            var a;
            if (void 0 === n && 1 === e.nodeType)
                if (a = "data-" + t.replace(Fe, "-$&").toLowerCase(),
                n = e.getAttribute(a),
                "string" == typeof n) {
                    try {
                        n = v(n)
                    } catch (e) {}
                    We.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        function w(e, t, n, a) {
            var r, i = 1, s = 20, o = a ? function() {
                return a.cur()
            }
            : function() {
                return we.css(e, t, "")
            }
            , l = o(), u = n && n[3] || (we.cssNumber[t] ? "" : "px"), p = (we.cssNumber[t] || "px" !== u && +l) && Ye.exec(we.css(e, t));
            if (p && p[3] !== u) {
                u = u || p[3],
                n = n || [],
                p = +l || 1;
                do
                    i = i || ".5",
                    p /= i,
                    we.style(e, t, p + u);
                while (i !== (i = o() / l) && 1 !== i && --s)
            }
            return n && (p = +p || +l || 0,
            r = n[1] ? p + (n[1] + 1) * n[2] : +n[2],
            a && (a.unit = u,
            a.start = p,
            a.end = r)),
            r
        }
        function x(e) {
            var t, n = e.ownerDocument, a = e.nodeName, r = Ue[a];
            return r ? r : (t = n.body.appendChild(n.createElement(a)),
            r = we.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === r && (r = "block"),
            Ue[a] = r,
            r)
        }
        function b(e, t) {
            for (var n, a, r = [], i = 0, s = e.length; i < s; i++)
                a = e[i],
                a.style && (n = a.style.display,
                t ? ("none" === n && (r[i] = Re.get(a, "display") || null,
                r[i] || (a.style.display = "")),
                "" === a.style.display && $e(a) && (r[i] = x(a))) : "none" !== n && (r[i] = "none",
                Re.set(a, "display", n)));
            for (i = 0; i < s; i++)
                null != r[i] && (e[i].style.display = r[i]);
            return e
        }
        function T(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && l(e, t) ? we.merge([e], n) : n
        }
        function C(e, t) {
            for (var n = 0, a = e.length; n < a; n++)
                Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
        }
        function S(e, t, n, a, r) {
            for (var i, s, o, l, u, p, d = t.createDocumentFragment(), c = [], f = 0, h = e.length; f < h; f++)
                if (i = e[f],
                i || 0 === i)
                    if ("object" === we.type(i))
                        we.merge(c, i.nodeType ? [i] : i);
                    else if (et.test(i)) {
                        for (s = s || d.appendChild(t.createElement("div")),
                        o = (Qe.exec(i) || ["", ""])[1].toLowerCase(),
                        l = Je[o] || Je._default,
                        s.innerHTML = l[1] + we.htmlPrefilter(i) + l[2],
                        p = l[0]; p--; )
                            s = s.lastChild;
                        we.merge(c, s.childNodes),
                        s = d.firstChild,
                        s.textContent = ""
                    } else
                        c.push(t.createTextNode(i));
            for (d.textContent = "",
            f = 0; i = c[f++]; )
                if (a && we.inArray(i, a) > -1)
                    r && r.push(i);
                else if (u = we.contains(i.ownerDocument, i),
                s = T(d.appendChild(i), "script"),
                u && C(s),
                n)
                    for (p = 0; i = s[p++]; )
                        Ze.test(i.type || "") && n.push(i);
            return d
        }
        function E() {
            return !0
        }
        function k() {
            return !1
        }
        function M() {
            try {
                return se.activeElement
            } catch (e) {}
        }
        function z(e, t, n, a, r, i) {
            var s, o;
            if ("object" == typeof t) {
                "string" != typeof n && (a = a || n,
                n = void 0);
                for (o in t)
                    z(e, o, n, a, t[o], i);
                return e
            }
            if (null == a && null == r ? (r = n,
            a = n = void 0) : null == r && ("string" == typeof n ? (r = a,
            a = void 0) : (r = a,
            a = n,
            n = void 0)),
            r === !1)
                r = k;
            else if (!r)
                return e;
            return 1 === i && (s = r,
            r = function(e) {
                return we().off(e),
                s.apply(this, arguments)
            }
            ,
            r.guid = s.guid || (s.guid = we.guid++)),
            e.each(function() {
                we.event.add(this, t, r, a, n)
            })
        }
        function P(e, t) {
            return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") ? we(">tbody", e)[0] || e : e
        }
        function D(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function L(e) {
            var t = lt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function A(e, t) {
            var n, a, r, i, s, o, l, u;
            if (1 === t.nodeType) {
                if (Re.hasData(e) && (i = Re.access(e),
                s = Re.set(t, i),
                u = i.events)) {
                    delete s.handle,
                    s.events = {};
                    for (r in u)
                        for (n = 0,
                        a = u[r].length; n < a; n++)
                            we.event.add(t, r, u[r][n])
                }
                We.hasData(e) && (o = We.access(e),
                l = we.extend({}, o),
                We.set(t, l))
            }
        }
        function I(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ke.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function N(e, t, n, a) {
            t = ue.apply([], t);
            var r, i, o, l, u, p, d = 0, c = e.length, f = c - 1, h = t[0], m = we.isFunction(h);
            if (m || c > 1 && "string" == typeof h && !ve.checkClone && ot.test(h))
                return e.each(function(r) {
                    var i = e.eq(r);
                    m && (t[0] = h.call(this, r, i.html())),
                    N(i, t, n, a)
                });
            if (c && (r = S(t, e[0].ownerDocument, !1, e, a),
            i = r.firstChild,
            1 === r.childNodes.length && (r = i),
            i || a)) {
                for (o = we.map(T(r, "script"), D),
                l = o.length; d < c; d++)
                    u = r,
                    d !== f && (u = we.clone(u, !0, !0),
                    l && we.merge(o, T(u, "script"))),
                    n.call(e[d], u, d);
                if (l)
                    for (p = o[o.length - 1].ownerDocument,
                    we.map(o, L),
                    d = 0; d < l; d++)
                        u = o[d],
                        Ze.test(u.type || "") && !Re.access(u, "globalEval") && we.contains(p, u) && (u.src ? we._evalUrl && we._evalUrl(u.src) : s(u.textContent.replace(ut, ""), p))
            }
            return e
        }
        function H(e, t, n) {
            for (var a, r = t ? we.filter(t, e) : e, i = 0; null != (a = r[i]); i++)
                n || 1 !== a.nodeType || we.cleanData(T(a)),
                a.parentNode && (n && we.contains(a.ownerDocument, a) && C(T(a, "script")),
                a.parentNode.removeChild(a));
            return e
        }
        function q(e, t, n) {
            var a, r, i, s, o = e.style;
            return n = n || ct(e),
            n && (s = n.getPropertyValue(t) || n[t],
            "" !== s || we.contains(e.ownerDocument, e) || (s = we.style(e, t)),
            !ve.pixelMarginRight() && dt.test(s) && pt.test(t) && (a = o.width,
            r = o.minWidth,
            i = o.maxWidth,
            o.minWidth = o.maxWidth = o.width = s,
            s = n.width,
            o.width = a,
            o.minWidth = r,
            o.maxWidth = i)),
            void 0 !== s ? s + "" : s
        }
        function B(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }
        function O(e) {
            if (e in yt)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--; )
                if (e = vt[n] + t,
                e in yt)
                    return e
        }
        function j(e) {
            var t = we.cssProps[e];
            return t || (t = we.cssProps[e] = O(e) || e),
            t
        }
        function R(e, t, n) {
            var a = Ye.exec(t);
            return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
        }
        function W(e, t, n, a, r) {
            var i, s = 0;
            for (i = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0; i < 4; i += 2)
                "margin" === n && (s += we.css(e, n + Ve[i], !0, r)),
                a ? ("content" === n && (s -= we.css(e, "padding" + Ve[i], !0, r)),
                "margin" !== n && (s -= we.css(e, "border" + Ve[i] + "Width", !0, r))) : (s += we.css(e, "padding" + Ve[i], !0, r),
                "padding" !== n && (s += we.css(e, "border" + Ve[i] + "Width", !0, r)));
            return s
        }
        function X(e, t, n) {
            var a, r = ct(e), i = q(e, t, r), s = "border-box" === we.css(e, "boxSizing", !1, r);
            return dt.test(i) ? i : (a = s && (ve.boxSizingReliable() || i === e.style[t]),
            "auto" === i && (i = e["offset" + t[0].toUpperCase() + t.slice(1)]),
            i = parseFloat(i) || 0,
            i + W(e, t, n || (s ? "border" : "content"), a, r) + "px")
        }
        function F(e, t, n, a, r) {
            return new F.prototype.init(e,t,n,a,r)
        }
        function G() {
            xt && (se.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(G) : n.setTimeout(G, we.fx.interval),
            we.fx.tick())
        }
        function Y() {
            return n.setTimeout(function() {
                wt = void 0
            }),
            wt = we.now()
        }
        function V(e, t) {
            var n, a = 0, r = {
                height: e
            };
            for (t = t ? 1 : 0; a < 4; a += 2 - t)
                n = Ve[a],
                r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e),
            r
        }
        function $(e, t, n) {
            for (var a, r = (K.tweeners[t] || []).concat(K.tweeners["*"]), i = 0, s = r.length; i < s; i++)
                if (a = r[i].call(n, t, e))
                    return a
        }
        function _(e, t, n) {
            var a, r, i, s, o, l, u, p, d = "width"in t || "height"in t, c = this, f = {}, h = e.style, m = e.nodeType && $e(e), g = Re.get(e, "fxshow");
            n.queue || (s = we._queueHooks(e, "fx"),
            null == s.unqueued && (s.unqueued = 0,
            o = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || o()
            }
            ),
            s.unqueued++,
            c.always(function() {
                c.always(function() {
                    s.unqueued--,
                    we.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (a in t)
                if (r = t[a],
                bt.test(r)) {
                    if (delete t[a],
                    i = i || "toggle" === r,
                    r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[a])
                            continue;
                        m = !0
                    }
                    f[a] = g && g[a] || we.style(e, a)
                }
            if (l = !we.isEmptyObject(t),
            l || !we.isEmptyObject(f)) {
                d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                u = g && g.display,
                null == u && (u = Re.get(e, "display")),
                p = we.css(e, "display"),
                "none" === p && (u ? p = u : (b([e], !0),
                u = e.style.display || u,
                p = we.css(e, "display"),
                b([e]))),
                ("inline" === p || "inline-block" === p && null != u) && "none" === we.css(e, "float") && (l || (c.done(function() {
                    h.display = u
                }),
                null == u && (p = h.display,
                u = "none" === p ? "" : p)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                c.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1;
                for (a in f)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = Re.access(e, "fxshow", {
                        display: u
                    }),
                    i && (g.hidden = !m),
                    m && b([e], !0),
                    c.done(function() {
                        m || b([e]),
                        Re.remove(e, "fxshow");
                        for (a in f)
                            we.style(e, a, f[a])
                    })),
                    l = $(m ? g[a] : 0, a, c),
                    a in g || (g[a] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
            }
        }
        function U(e, t) {
            var n, a, r, i, s;
            for (n in e)
                if (a = we.camelCase(n),
                r = t[a],
                i = e[n],
                Array.isArray(i) && (r = i[1],
                i = e[n] = i[0]),
                n !== a && (e[a] = i,
                delete e[n]),
                s = we.cssHooks[a],
                s && "expand"in s) {
                    i = s.expand(i),
                    delete e[a];
                    for (n in i)
                        n in e || (e[n] = i[n],
                        t[n] = r)
                } else
                    t[a] = r
        }
        function K(e, t, n) {
            var a, r, i = 0, s = K.prefilters.length, o = we.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (r)
                    return !1;
                for (var t = wt || Y(), n = Math.max(0, u.startTime + u.duration - t), a = n / u.duration || 0, i = 1 - a, s = 0, l = u.tweens.length; s < l; s++)
                    u.tweens[s].run(i);
                return o.notifyWith(e, [u, i, n]),
                i < 1 && l ? n : (l || o.notifyWith(e, [u, 1, 0]),
                o.resolveWith(e, [u]),
                !1)
            }, u = o.promise({
                elem: e,
                props: we.extend({}, t),
                opts: we.extend(!0, {
                    specialEasing: {},
                    easing: we.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: wt || Y(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var a = we.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(a),
                    a
                },
                stop: function(t) {
                    var n = 0
                      , a = t ? u.tweens.length : 0;
                    if (r)
                        return this;
                    for (r = !0; n < a; n++)
                        u.tweens[n].run(1);
                    return t ? (o.notifyWith(e, [u, 1, 0]),
                    o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]),
                    this
                }
            }), p = u.props;
            for (U(p, u.opts.specialEasing); i < s; i++)
                if (a = K.prefilters[i].call(u, e, p, u.opts))
                    return we.isFunction(a.stop) && (we._queueHooks(u.elem, u.opts.queue).stop = we.proxy(a.stop, a)),
                    a;
            return we.map(p, $, u),
            we.isFunction(u.opts.start) && u.opts.start.call(e, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            we.fx.timer(we.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })),
            u
        }
        function Q(e) {
            var t = e.match(He) || [];
            return t.join(" ")
        }
        function Z(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function J(e, t, n, a) {
            var r;
            if (Array.isArray(t))
                we.each(t, function(t, r) {
                    n || At.test(e) ? a(e, r) : J(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, a)
                });
            else if (n || "object" !== we.type(t))
                a(e, t);
            else
                for (r in t)
                    J(e + "[" + r + "]", t[r], n, a)
        }
        function ee(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var a, r = 0, i = t.toLowerCase().match(He) || [];
                if (we.isFunction(n))
                    for (; a = i[r++]; )
                        "+" === a[0] ? (a = a.slice(1) || "*",
                        (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
            }
        }
        function te(e, t, n, a) {
            function r(o) {
                var l;
                return i[o] = !0,
                we.each(e[o] || [], function(e, o) {
                    var u = o(t, n, a);
                    return "string" != typeof u || s || i[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                    r(u),
                    !1)
                }),
                l
            }
            var i = {}
              , s = e === Gt;
            return r(t.dataTypes[0]) || !i["*"] && r("*")
        }
        function ne(e, t) {
            var n, a, r = we.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((r[n] ? e : a || (a = {}))[n] = t[n]);
            return a && we.extend(!0, e, a),
            e
        }
        function ae(e, t, n) {
            for (var a, r, i, s, o = e.contents, l = e.dataTypes; "*" === l[0]; )
                l.shift(),
                void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
            if (a)
                for (r in o)
                    if (o[r] && o[r].test(a)) {
                        l.unshift(r);
                        break
                    }
            if (l[0]in n)
                i = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        i = r;
                        break
                    }
                    s || (s = r)
                }
                i = i || s
            }
            if (i)
                return i !== l[0] && l.unshift(i),
                n[i]
        }
        function re(e, t, n, a) {
            var r, i, s, o, l, u = {}, p = e.dataTypes.slice();
            if (p[1])
                for (s in e.converters)
                    u[s.toLowerCase()] = e.converters[s];
            for (i = p.shift(); i; )
                if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                !l && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                l = i,
                i = p.shift())
                    if ("*" === i)
                        i = l;
                    else if ("*" !== l && l !== i) {
                        if (s = u[l + " " + i] || u["* " + i],
                        !s)
                            for (r in u)
                                if (o = r.split(" "),
                                o[1] === i && (s = u[l + " " + o[0]] || u["* " + o[0]])) {
                                    s === !0 ? s = u[r] : u[r] !== !0 && (i = o[0],
                                    p.unshift(o[1]));
                                    break
                                }
                        if (s !== !0)
                            if (s && e.throws)
                                t = s(t);
                            else
                                try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + i
                                    }
                                }
                    }
            return {
                state: "success",
                data: t
            }
        }
        var ie = []
          , se = n.document
          , oe = Object.getPrototypeOf
          , le = ie.slice
          , ue = ie.concat
          , pe = ie.push
          , de = ie.indexOf
          , ce = {}
          , fe = ce.toString
          , he = ce.hasOwnProperty
          , me = he.toString
          , ge = me.call(Object)
          , ve = {}
          , ye = "3.2.1"
          , we = function(e, t) {
            return new we.fn.init(e,t)
        }
          , xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , be = /^-ms-/
          , Te = /-([a-z])/g
          , Ce = function(e, t) {
            return t.toUpperCase()
        };
        we.fn = we.prototype = {
            jquery: ye,
            constructor: we,
            length: 0,
            toArray: function() {
                return le.call(this)
            },
            get: function(e) {
                return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = we.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return we.each(this, e)
            },
            map: function(e) {
                return this.pushStack(we.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(le.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: pe,
            sort: ie.sort,
            splice: ie.splice
        },
        we.extend = we.fn.extend = function() {
            var e, t, n, a, r, i, s = arguments[0] || {}, o = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s,
            s = arguments[o] || {},
            o++),
            "object" == typeof s || we.isFunction(s) || (s = {}),
            o === l && (s = this,
            o--); o < l; o++)
                if (null != (e = arguments[o]))
                    for (t in e)
                        n = s[t],
                        a = e[t],
                        s !== a && (u && a && (we.isPlainObject(a) || (r = Array.isArray(a))) ? (r ? (r = !1,
                        i = n && Array.isArray(n) ? n : []) : i = n && we.isPlainObject(n) ? n : {},
                        s[t] = we.extend(u, i, a)) : void 0 !== a && (s[t] = a));
            return s
        }
        ,
        we.extend({
            expando: "jQuery" + (ye + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === we.type(e)
            },
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = we.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== fe.call(e)) && (!(t = oe(e)) || (n = he.call(t, "constructor") && t.constructor,
                "function" == typeof n && me.call(n) === ge))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ce[fe.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                s(e)
            },
            camelCase: function(e) {
                return e.replace(be, "ms-").replace(Te, Ce)
            },
            each: function(e, t) {
                var n, a = 0;
                if (o(e))
                    for (n = e.length; a < n && t.call(e[a], a, e[a]) !== !1; a++)
                        ;
                else
                    for (a in e)
                        if (t.call(e[a], a, e[a]) === !1)
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(xe, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (o(Object(e)) ? we.merge(n, "string" == typeof e ? [e] : e) : pe.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : de.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, a = 0, r = e.length; a < n; a++)
                    e[r++] = t[a];
                return e.length = r,
                e
            },
            grep: function(e, t, n) {
                for (var a, r = [], i = 0, s = e.length, o = !n; i < s; i++)
                    a = !t(e[i], i),
                    a !== o && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var a, r, i = 0, s = [];
                if (o(e))
                    for (a = e.length; i < a; i++)
                        r = t(e[i], i, n),
                        null != r && s.push(r);
                else
                    for (i in e)
                        r = t(e[i], i, n),
                        null != r && s.push(r);
                return ue.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, a, r;
                if ("string" == typeof t && (n = e[t],
                t = e,
                e = n),
                we.isFunction(e))
                    return a = le.call(arguments, 2),
                    r = function() {
                        return e.apply(t || this, a.concat(le.call(arguments)))
                    }
                    ,
                    r.guid = e.guid = e.guid || we.guid++,
                    r
            },
            now: Date.now,
            support: ve
        }),
        "function" == typeof Symbol && (we.fn[Symbol.iterator] = ie[Symbol.iterator]),
        we.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ce["[object " + t + "]"] = t.toLowerCase()
        });
        var Se = /*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
        function(e) {
            function t(e, t, n, a) {
                var r, i, s, o, l, u, p, c = t && t.ownerDocument, h = t ? t.nodeType : 9;
                if (n = n || [],
                "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                    return n;
                if (!a && ((t ? t.ownerDocument || t : W) !== I && A(t),
                t = t || I,
                H)) {
                    if (11 !== h && (l = ve.exec(e)))
                        if (r = l[1]) {
                            if (9 === h) {
                                if (!(s = t.getElementById(r)))
                                    return n;
                                if (s.id === r)
                                    return n.push(s),
                                    n
                            } else if (c && (s = c.getElementById(r)) && j(t, s) && s.id === r)
                                return n.push(s),
                                n
                        } else {
                            if (l[2])
                                return Z.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((r = l[3]) && T.getElementsByClassName && t.getElementsByClassName)
                                return Z.apply(n, t.getElementsByClassName(r)),
                                n
                        }
                    if (T.qsa && !V[e + " "] && (!q || !q.test(e))) {
                        if (1 !== h)
                            c = t,
                            p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((o = t.getAttribute("id")) ? o = o.replace(be, Te) : t.setAttribute("id", o = R),
                            u = k(e),
                            i = u.length; i--; )
                                u[i] = "#" + o + " " + f(u[i]);
                            p = u.join(","),
                            c = ye.test(e) && d(t.parentNode) || t
                        }
                        if (p)
                            try {
                                return Z.apply(n, c.querySelectorAll(p)),
                                n
                            } catch (e) {} finally {
                                o === R && t.removeAttribute("id")
                            }
                    }
                }
                return z(e.replace(oe, "$1"), t, n, a)
            }
            function n() {
                function e(n, a) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()],
                    e[n + " "] = a
                }
                var t = [];
                return e
            }
            function a(e) {
                return e[R] = !0,
                e
            }
            function r(e) {
                var t = I.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function i(e, t) {
                for (var n = e.split("|"), a = n.length; a--; )
                    C.attrHandle[n[a]] = t
            }
            function s(e, t) {
                var n = t && e
                  , a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (a)
                    return a;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function o(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function u(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && t.disabled === !1 ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function p(e) {
                return a(function(t) {
                    return t = +t,
                    a(function(n, a) {
                        for (var r, i = e([], n.length, t), s = i.length; s--; )
                            n[r = i[s]] && (n[r] = !(a[r] = n[r]))
                    })
                })
            }
            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            function c() {}
            function f(e) {
                for (var t = 0, n = e.length, a = ""; t < n; t++)
                    a += e[t].value;
                return a
            }
            function h(e, t, n) {
                var a = t.dir
                  , r = t.next
                  , i = r || a
                  , s = n && "parentNode" === i
                  , o = F++;
                return t.first ? function(t, n, r) {
                    for (; t = t[a]; )
                        if (1 === t.nodeType || s)
                            return e(t, n, r);
                    return !1
                }
                : function(t, n, l) {
                    var u, p, d, c = [X, o];
                    if (l) {
                        for (; t = t[a]; )
                            if ((1 === t.nodeType || s) && e(t, n, l))
                                return !0
                    } else
                        for (; t = t[a]; )
                            if (1 === t.nodeType || s)
                                if (d = t[R] || (t[R] = {}),
                                p = d[t.uniqueID] || (d[t.uniqueID] = {}),
                                r && r === t.nodeName.toLowerCase())
                                    t = t[a] || t;
                                else {
                                    if ((u = p[i]) && u[0] === X && u[1] === o)
                                        return c[2] = u[2];
                                    if (p[i] = c,
                                    c[2] = e(t, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function m(e) {
                return e.length > 1 ? function(t, n, a) {
                    for (var r = e.length; r--; )
                        if (!e[r](t, n, a))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function g(e, n, a) {
                for (var r = 0, i = n.length; r < i; r++)
                    t(e, n[r], a);
                return a
            }
            function v(e, t, n, a, r) {
                for (var i, s = [], o = 0, l = e.length, u = null != t; o < l; o++)
                    (i = e[o]) && (n && !n(i, a, r) || (s.push(i),
                    u && t.push(o)));
                return s
            }
            function y(e, t, n, r, i, s) {
                return r && !r[R] && (r = y(r)),
                i && !i[R] && (i = y(i, s)),
                a(function(a, s, o, l) {
                    var u, p, d, c = [], f = [], h = s.length, m = a || g(t || "*", o.nodeType ? [o] : o, []), y = !e || !a && t ? m : v(m, c, e, o, l), w = n ? i || (a ? e : h || r) ? [] : s : y;
                    if (n && n(y, w, o, l),
                    r)
                        for (u = v(w, f),
                        r(u, [], o, l),
                        p = u.length; p--; )
                            (d = u[p]) && (w[f[p]] = !(y[f[p]] = d));
                    if (a) {
                        if (i || e) {
                            if (i) {
                                for (u = [],
                                p = w.length; p--; )
                                    (d = w[p]) && u.push(y[p] = d);
                                i(null, w = [], u, l)
                            }
                            for (p = w.length; p--; )
                                (d = w[p]) && (u = i ? ee(a, d) : c[p]) > -1 && (a[u] = !(s[u] = d))
                        }
                    } else
                        w = v(w === s ? w.splice(h, w.length) : w),
                        i ? i(null, s, w, l) : Z.apply(s, w)
                })
            }
            function w(e) {
                for (var t, n, a, r = e.length, i = C.relative[e[0].type], s = i || C.relative[" "], o = i ? 1 : 0, l = h(function(e) {
                    return e === t
                }, s, !0), u = h(function(e) {
                    return ee(t, e) > -1
                }, s, !0), p = [function(e, n, a) {
                    var r = !i && (a || n !== P) || ((t = n).nodeType ? l(e, n, a) : u(e, n, a));
                    return t = null,
                    r
                }
                ]; o < r; o++)
                    if (n = C.relative[e[o].type])
                        p = [h(m(p), n)];
                    else {
                        if (n = C.filter[e[o].type].apply(null, e[o].matches),
                        n[R]) {
                            for (a = ++o; a < r && !C.relative[e[a].type]; a++)
                                ;
                            return y(o > 1 && m(p), o > 1 && f(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(oe, "$1"), n, o < a && w(e.slice(o, a)), a < r && w(e = e.slice(a)), a < r && f(e))
                        }
                        p.push(n)
                    }
                return m(p)
            }
            function x(e, n) {
                var r = n.length > 0
                  , i = e.length > 0
                  , s = function(a, s, o, l, u) {
                    var p, d, c, f = 0, h = "0", m = a && [], g = [], y = P, w = a || i && C.find.TAG("*", u), x = X += null == y ? 1 : Math.random() || .1, b = w.length;
                    for (u && (P = s === I || s || u); h !== b && null != (p = w[h]); h++) {
                        if (i && p) {
                            for (d = 0,
                            s || p.ownerDocument === I || (A(p),
                            o = !H); c = e[d++]; )
                                if (c(p, s || I, o)) {
                                    l.push(p);
                                    break
                                }
                            u && (X = x)
                        }
                        r && ((p = !c && p) && f--,
                        a && m.push(p))
                    }
                    if (f += h,
                    r && h !== f) {
                        for (d = 0; c = n[d++]; )
                            c(m, g, s, o);
                        if (a) {
                            if (f > 0)
                                for (; h--; )
                                    m[h] || g[h] || (g[h] = K.call(l));
                            g = v(g)
                        }
                        Z.apply(l, g),
                        u && !a && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (X = x,
                    P = y),
                    m
                };
                return r ? a(s) : s
            }
            var b, T, C, S, E, k, M, z, P, D, L, A, I, N, H, q, B, O, j, R = "sizzle" + 1 * new Date, W = e.document, X = 0, F = 0, G = n(), Y = n(), V = n(), $ = function(e, t) {
                return e === t && (L = !0),
                0
            }, _ = {}.hasOwnProperty, U = [], K = U.pop, Q = U.push, Z = U.push, J = U.slice, ee = function(e, t) {
                for (var n = 0, a = e.length; n < a; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ae = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", re = "\\[" + ne + "*(" + ae + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ne + "*\\]", ie = ":(" + ae + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", se = new RegExp(ne + "+","g"), oe = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(ie), ce = new RegExp("^" + ae + "$"), fe = {
                ID: new RegExp("^#(" + ae + ")"),
                CLASS: new RegExp("^\\.(" + ae + ")"),
                TAG: new RegExp("^(" + ae + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
                bool: new RegExp("^(?:" + te + ")$","i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
            }, he = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), xe = function(e, t, n) {
                var a = "0x" + t - 65536;
                return a !== a || n ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Te = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, Ce = function() {
                A()
            }, Se = h(function(e) {
                return e.disabled === !0 && ("form"in e || "label"in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                Z.apply(U = J.call(W.childNodes), W.childNodes),
                U[W.childNodes.length].nodeType
            } catch (e) {
                Z = {
                    apply: U.length ? function(e, t) {
                        Q.apply(e, J.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, a = 0; e[n++] = t[a++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            T = t.support = {},
            E = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            A = t.setDocument = function(e) {
                var t, n, a = e ? e.ownerDocument || e : W;
                return a !== I && 9 === a.nodeType && a.documentElement ? (I = a,
                N = I.documentElement,
                H = !E(I),
                W !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
                T.attributes = r(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                T.getElementsByTagName = r(function(e) {
                    return e.appendChild(I.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                T.getElementsByClassName = ge.test(I.getElementsByClassName),
                T.getById = r(function(e) {
                    return N.appendChild(e).id = R,
                    !I.getElementsByName || !I.getElementsByName(R).length
                }),
                T.getById ? (C.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && H) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (C.filter.ID = function(e) {
                    var t = e.replace(we, xe);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && H) {
                        var n, a, r, i = t.getElementById(e);
                        if (i) {
                            if (n = i.getAttributeNode("id"),
                            n && n.value === e)
                                return [i];
                            for (r = t.getElementsByName(e),
                            a = 0; i = r[a++]; )
                                if (n = i.getAttributeNode("id"),
                                n && n.value === e)
                                    return [i]
                        }
                        return []
                    }
                }
                ),
                C.find.TAG = T.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, a = [], r = 0, i = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = i[r++]; )
                            1 === n.nodeType && a.push(n);
                        return a
                    }
                    return i
                }
                ,
                C.find.CLASS = T.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && H)
                        return t.getElementsByClassName(e)
                }
                ,
                B = [],
                q = [],
                (T.qsa = ge.test(I.querySelectorAll)) && (r(function(e) {
                    N.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="),
                    e.querySelectorAll(":checked").length || q.push(":checked"),
                    e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
                }),
                r(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = I.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"),
                    N.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    q.push(",.*:")
                })),
                (T.matchesSelector = ge.test(O = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) {
                    T.disconnectedMatch = O.call(e, "*"),
                    O.call(e, "[s!='']:x"),
                    B.push("!=", ie)
                }),
                q = q.length && new RegExp(q.join("|")),
                B = B.length && new RegExp(B.join("|")),
                t = ge.test(N.compareDocumentPosition),
                j = t || ge.test(N.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , a = t && t.parentNode;
                    return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                $ = t ? function(e, t) {
                    if (e === t)
                        return L = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                    1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === W && j(W, e) ? -1 : t === I || t.ownerDocument === W && j(W, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return L = !0,
                        0;
                    var n, a = 0, r = e.parentNode, i = t.parentNode, o = [e], l = [t];
                    if (!r || !i)
                        return e === I ? -1 : t === I ? 1 : r ? -1 : i ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (r === i)
                        return s(e, t);
                    for (n = e; n = n.parentNode; )
                        o.unshift(n);
                    for (n = t; n = n.parentNode; )
                        l.unshift(n);
                    for (; o[a] === l[a]; )
                        a++;
                    return a ? s(o[a], l[a]) : o[a] === W ? -1 : l[a] === W ? 1 : 0
                }
                ,
                I) : I
            }
            ,
            t.matches = function(e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== I && A(e),
                n = n.replace(pe, "='$1']"),
                T.matchesSelector && H && !V[n + " "] && (!B || !B.test(n)) && (!q || !q.test(n)))
                    try {
                        var a = O.call(e, n);
                        if (a || T.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return a
                    } catch (e) {}
                return t(n, I, null, [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && A(e),
                j(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && A(e);
                var n = C.attrHandle[t.toLowerCase()]
                  , a = n && _.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
                return void 0 !== a ? a : T.attributes || !H ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }
            ,
            t.escape = function(e) {
                return (e + "").replace(be, Te)
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], a = 0, r = 0;
                if (L = !T.detectDuplicates,
                D = !T.sortStable && e.slice(0),
                e.sort($),
                L) {
                    for (; t = e[r++]; )
                        t === e[r] && (a = n.push(r));
                    for (; a--; )
                        e.splice(n[a], 1)
                }
                return D = null,
                e
            }
            ,
            S = t.getText = function(e) {
                var t, n = "", a = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += S(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[a++]; )
                        n += S(t);
                return n
            }
            ,
            C = t.selectors = {
                cacheLength: 50,
                createPseudo: a,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(we, xe),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(we, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = G[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && G(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, a) {
                        return function(r) {
                            var i = t.attr(r, e);
                            return null == i ? "!=" === n : !n || (i += "",
                            "=" === n ? i === a : "!=" === n ? i !== a : "^=" === n ? a && 0 === i.indexOf(a) : "*=" === n ? a && i.indexOf(a) > -1 : "$=" === n ? a && i.slice(-a.length) === a : "~=" === n ? (" " + i.replace(se, " ") + " ").indexOf(a) > -1 : "|=" === n && (i === a || i.slice(0, a.length + 1) === a + "-"))
                        }
                    },
                    CHILD: function(e, t, n, a, r) {
                        var i = "nth" !== e.slice(0, 3)
                          , s = "last" !== e.slice(-4)
                          , o = "of-type" === t;
                        return 1 === a && 0 === r ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, l) {
                            var u, p, d, c, f, h, m = i !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = o && t.nodeName.toLowerCase(), y = !l && !o, w = !1;
                            if (g) {
                                if (i) {
                                    for (; m; ) {
                                        for (c = t; c = c[m]; )
                                            if (o ? c.nodeName.toLowerCase() === v : 1 === c.nodeType)
                                                return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild],
                                s && y) {
                                    for (c = g,
                                    d = c[R] || (c[R] = {}),
                                    p = d[c.uniqueID] || (d[c.uniqueID] = {}),
                                    u = p[e] || [],
                                    f = u[0] === X && u[1],
                                    w = f && u[2],
                                    c = f && g.childNodes[f]; c = ++f && c && c[m] || (w = f = 0) || h.pop(); )
                                        if (1 === c.nodeType && ++w && c === t) {
                                            p[e] = [X, f, w];
                                            break
                                        }
                                } else if (y && (c = t,
                                d = c[R] || (c[R] = {}),
                                p = d[c.uniqueID] || (d[c.uniqueID] = {}),
                                u = p[e] || [],
                                f = u[0] === X && u[1],
                                w = f),
                                w === !1)
                                    for (; (c = ++f && c && c[m] || (w = f = 0) || h.pop()) && ((o ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++w || (y && (d = c[R] || (c[R] = {}),
                                    p = d[c.uniqueID] || (d[c.uniqueID] = {}),
                                    p[e] = [X, w]),
                                    c !== t)); )
                                        ;
                                return w -= r,
                                w === a || w % a === 0 && w / a >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return i[R] ? i(n) : i.length > 1 ? (r = [e, e, "", n],
                        C.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                            for (var a, r = i(e, n), s = r.length; s--; )
                                a = ee(e, r[s]),
                                e[a] = !(t[a] = r[s])
                        }) : function(e) {
                            return i(e, 0, r)
                        }
                        ) : i
                    }
                },
                pseudos: {
                    not: a(function(e) {
                        var t = []
                          , n = []
                          , r = M(e.replace(oe, "$1"));
                        return r[R] ? a(function(e, t, n, a) {
                            for (var i, s = r(e, null, a, []), o = e.length; o--; )
                                (i = s[o]) && (e[o] = !(t[o] = i))
                        }) : function(e, a, i) {
                            return t[0] = e,
                            r(t, null, i, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: a(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: a(function(e) {
                        return e = e.replace(we, xe),
                        function(t) {
                            return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                        }
                    }),
                    lang: a(function(e) {
                        return ce.test(e || "") || t.error("unsupported lang: " + e),
                        e = e.replace(we, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return n = n.toLowerCase(),
                                    n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === N
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: u(!1),
                    disabled: u(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: p(function() {
                        return [0]
                    }),
                    last: p(function(e, t) {
                        return [t - 1]
                    }),
                    eq: p(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: p(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: p(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: p(function(e, t, n) {
                        for (var a = n < 0 ? n + t : n; --a >= 0; )
                            e.push(a);
                        return e
                    }),
                    gt: p(function(e, t, n) {
                        for (var a = n < 0 ? n + t : n; ++a < t; )
                            e.push(a);
                        return e
                    })
                }
            },
            C.pseudos.nth = C.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                C.pseudos[b] = o(b);
            for (b in {
                submit: !0,
                reset: !0
            })
                C.pseudos[b] = l(b);
            return c.prototype = C.filters = C.pseudos,
            C.setFilters = new c,
            k = t.tokenize = function(e, n) {
                var a, r, i, s, o, l, u, p = Y[e + " "];
                if (p)
                    return n ? 0 : p.slice(0);
                for (o = e,
                l = [],
                u = C.preFilter; o; ) {
                    a && !(r = le.exec(o)) || (r && (o = o.slice(r[0].length) || o),
                    l.push(i = [])),
                    a = !1,
                    (r = ue.exec(o)) && (a = r.shift(),
                    i.push({
                        value: a,
                        type: r[0].replace(oe, " ")
                    }),
                    o = o.slice(a.length));
                    for (s in C.filter)
                        !(r = fe[s].exec(o)) || u[s] && !(r = u[s](r)) || (a = r.shift(),
                        i.push({
                            value: a,
                            type: s,
                            matches: r
                        }),
                        o = o.slice(a.length));
                    if (!a)
                        break
                }
                return n ? o.length : o ? t.error(e) : Y(e, l).slice(0)
            }
            ,
            M = t.compile = function(e, t) {
                var n, a = [], r = [], i = V[e + " "];
                if (!i) {
                    for (t || (t = k(e)),
                    n = t.length; n--; )
                        i = w(t[n]),
                        i[R] ? a.push(i) : r.push(i);
                    i = V(e, x(r, a)),
                    i.selector = e
                }
                return i
            }
            ,
            z = t.select = function(e, t, n, a) {
                var r, i, s, o, l, u = "function" == typeof e && e, p = !a && k(e = u.selector || e);
                if (n = n || [],
                1 === p.length) {
                    if (i = p[0] = p[0].slice(0),
                    i.length > 2 && "ID" === (s = i[0]).type && 9 === t.nodeType && H && C.relative[i[1].type]) {
                        if (t = (C.find.ID(s.matches[0].replace(we, xe), t) || [])[0],
                        !t)
                            return n;
                        u && (t = t.parentNode),
                        e = e.slice(i.shift().value.length)
                    }
                    for (r = fe.needsContext.test(e) ? 0 : i.length; r-- && (s = i[r],
                    !C.relative[o = s.type]); )
                        if ((l = C.find[o]) && (a = l(s.matches[0].replace(we, xe), ye.test(i[0].type) && d(t.parentNode) || t))) {
                            if (i.splice(r, 1),
                            e = a.length && f(i),
                            !e)
                                return Z.apply(n, a),
                                n;
                            break
                        }
                }
                return (u || M(e, p))(a, t, !H, n, !t || ye.test(e) && d(t.parentNode) || t),
                n
            }
            ,
            T.sortStable = R.split("").sort($).join("") === R,
            T.detectDuplicates = !!L,
            A(),
            T.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
            }),
            r(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || i("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            T.attributes && r(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || i("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            r(function(e) {
                return null == e.getAttribute("disabled")
            }) || i(te, function(e, t, n) {
                var a;
                if (!n)
                    return e[t] === !0 ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }),
            t
        }(n);
        we.find = Se,
        we.expr = Se.selectors,
        we.expr[":"] = we.expr.pseudos,
        we.uniqueSort = we.unique = Se.uniqueSort,
        we.text = Se.getText,
        we.isXMLDoc = Se.isXML,
        we.contains = Se.contains,
        we.escapeSelector = Se.escape;
        var Ee = function(e, t, n) {
            for (var a = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (r && we(e).is(n))
                        break;
                    a.push(e)
                }
            return a
        }
          , ke = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , Me = we.expr.match.needsContext
          , ze = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
          , Pe = /^.[^:#\[\.,]*$/;
        we.filter = function(e, t, n) {
            var a = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === a.nodeType ? we.find.matchesSelector(a, e) ? [a] : [] : we.find.matches(e, we.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        we.fn.extend({
            find: function(e) {
                var t, n, a = this.length, r = this;
                if ("string" != typeof e)
                    return this.pushStack(we(e).filter(function() {
                        for (t = 0; t < a; t++)
                            if (we.contains(r[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; t < a; t++)
                    we.find(e, r[t], n);
                return a > 1 ? we.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(u(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(u(this, e || [], !0))
            },
            is: function(e) {
                return !!u(this, "string" == typeof e && Me.test(e) ? we(e) : e || [], !1).length
            }
        });
        var De, Le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ae = we.fn.init = function(e, t, n) {
            var a, r;
            if (!e)
                return this;
            if (n = n || De,
            "string" == typeof e) {
                if (a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Le.exec(e),
                !a || !a[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (a[1]) {
                    if (t = t instanceof we ? t[0] : t,
                    we.merge(this, we.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : se, !0)),
                    ze.test(a[1]) && we.isPlainObject(t))
                        for (a in t)
                            we.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                    return this
                }
                return r = se.getElementById(a[2]),
                r && (this[0] = r,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : we.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(we) : we.makeArray(e, this)
        }
        ;
        Ae.prototype = we.fn,
        De = we(se);
        var Ie = /^(?:parents|prev(?:Until|All))/
          , Ne = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        we.fn.extend({
            has: function(e) {
                var t = we(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (we.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, a = 0, r = this.length, i = [], s = "string" != typeof e && we(e);
                if (!Me.test(e))
                    for (; a < r; a++)
                        for (n = this[a]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && we.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            }
                return this.pushStack(i.length > 1 ? we.uniqueSort(i) : i)
            },
            index: function(e) {
                return e ? "string" == typeof e ? de.call(we(e), this[0]) : de.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        we.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return Ee(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Ee(e, "parentNode", n)
            },
            next: function(e) {
                return p(e, "nextSibling")
            },
            prev: function(e) {
                return p(e, "previousSibling")
            },
            nextAll: function(e) {
                return Ee(e, "nextSibling")
            },
            prevAll: function(e) {
                return Ee(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Ee(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Ee(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ke((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ke(e.firstChild)
            },
            contents: function(e) {
                return l(e, "iframe") ? e.contentDocument : (l(e, "template") && (e = e.content || e),
                we.merge([], e.childNodes))
            }
        }, function(e, t) {
            we.fn[e] = function(n, a) {
                var r = we.map(this, t, n);
                return "Until" !== e.slice(-5) && (a = n),
                a && "string" == typeof a && (r = we.filter(a, r)),
                this.length > 1 && (Ne[e] || we.uniqueSort(r),
                Ie.test(e) && r.reverse()),
                this.pushStack(r)
            }
        });
        var He = /[^\x20\t\r\n\f]+/g;
        we.Callbacks = function(e) {
            e = "string" == typeof e ? d(e) : we.extend({}, e);
            var t, n, a, r, i = [], s = [], o = -1, l = function() {
                for (r = r || e.once,
                a = t = !0; s.length; o = -1)
                    for (n = s.shift(); ++o < i.length; )
                        i[o].apply(n[0], n[1]) === !1 && e.stopOnFalse && (o = i.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                r && (i = n ? [] : "")
            }, u = {
                add: function() {
                    return i && (n && !t && (o = i.length - 1,
                    s.push(n)),
                    function t(n) {
                        we.each(n, function(n, a) {
                            we.isFunction(a) ? e.unique && u.has(a) || i.push(a) : a && a.length && "string" !== we.type(a) && t(a)
                        })
                    }(arguments),
                    n && !t && l()),
                    this
                },
                remove: function() {
                    return we.each(arguments, function(e, t) {
                        for (var n; (n = we.inArray(t, i, n)) > -1; )
                            i.splice(n, 1),
                            n <= o && o--
                    }),
                    this
                },
                has: function(e) {
                    return e ? we.inArray(e, i) > -1 : i.length > 0
                },
                empty: function() {
                    return i && (i = []),
                    this
                },
                disable: function() {
                    return r = s = [],
                    i = n = "",
                    this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return r = s = [],
                    n || t || (i = n = ""),
                    this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    s.push(n),
                    t || l()),
                    this
                },
                fire: function() {
                    return u.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!a
                }
            };
            return u
        }
        ,
        we.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", we.Callbacks("memory"), we.Callbacks("memory"), 2], ["resolve", "done", we.Callbacks("once memory"), we.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", we.Callbacks("once memory"), we.Callbacks("once memory"), 1, "rejected"]]
                  , a = "pending"
                  , r = {
                    state: function() {
                        return a
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return we.Deferred(function(n) {
                            we.each(t, function(t, a) {
                                var r = we.isFunction(e[a[4]]) && e[a[4]];
                                i[a[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && we.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this, r ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(e, a, r) {
                        function i(e, t, a, r) {
                            return function() {
                                var o = this
                                  , l = arguments
                                  , u = function() {
                                    var n, u;
                                    if (!(e < s)) {
                                        if (n = a.apply(o, l),
                                        n === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        u = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        we.isFunction(u) ? r ? u.call(n, i(s, t, c, r), i(s, t, f, r)) : (s++,
                                        u.call(n, i(s, t, c, r), i(s, t, f, r), i(s, t, c, t.notifyWith))) : (a !== c && (o = void 0,
                                        l = [n]),
                                        (r || t.resolveWith)(o, l))
                                    }
                                }
                                  , p = r ? u : function() {
                                    try {
                                        u()
                                    } catch (n) {
                                        we.Deferred.exceptionHook && we.Deferred.exceptionHook(n, p.stackTrace),
                                        e + 1 >= s && (a !== f && (o = void 0,
                                        l = [n]),
                                        t.rejectWith(o, l))
                                    }
                                }
                                ;
                                e ? p() : (we.Deferred.getStackHook && (p.stackTrace = we.Deferred.getStackHook()),
                                n.setTimeout(p))
                            }
                        }
                        var s = 0;
                        return we.Deferred(function(n) {
                            t[0][3].add(i(0, n, we.isFunction(r) ? r : c, n.notifyWith)),
                            t[1][3].add(i(0, n, we.isFunction(e) ? e : c)),
                            t[2][3].add(i(0, n, we.isFunction(a) ? a : f))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? we.extend(e, r) : r
                    }
                }
                  , i = {};
                return we.each(t, function(e, n) {
                    var s = n[2]
                      , o = n[5];
                    r[n[1]] = s.add,
                    o && s.add(function() {
                        a = o
                    }, t[3 - e][2].disable, t[0][2].lock),
                    s.add(n[3].fire),
                    i[n[0]] = function() {
                        return i[n[0] + "With"](this === i ? void 0 : this, arguments),
                        this
                    }
                    ,
                    i[n[0] + "With"] = s.fireWith
                }),
                r.promise(i),
                e && e.call(i, i),
                i
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , a = Array(n)
                  , r = le.call(arguments)
                  , i = we.Deferred()
                  , s = function(e) {
                    return function(n) {
                        a[e] = this,
                        r[e] = arguments.length > 1 ? le.call(arguments) : n,
                        --t || i.resolveWith(a, r)
                    }
                };
                if (t <= 1 && (h(e, i.done(s(n)).resolve, i.reject, !t),
                "pending" === i.state() || we.isFunction(r[n] && r[n].then)))
                    return i.then();
                for (; n--; )
                    h(r[n], s(n), i.reject);
                return i.promise()
            }
        });
        var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        we.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && qe.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        we.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        }
        ;
        var Be = we.Deferred();
        we.fn.ready = function(e) {
            return Be.then(e).catch(function(e) {
                we.readyException(e)
            }),
            this
        }
        ,
        we.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (e === !0 ? --we.readyWait : we.isReady) || (we.isReady = !0,
                e !== !0 && --we.readyWait > 0 || Be.resolveWith(se, [we]))
            }
        }),
        we.ready.then = Be.then,
        "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? n.setTimeout(we.ready) : (se.addEventListener("DOMContentLoaded", m),
        n.addEventListener("load", m));
        var Oe = function(e, t, n, a, r, i, s) {
            var o = 0
              , l = e.length
              , u = null == n;
            if ("object" === we.type(n)) {
                r = !0;
                for (o in n)
                    Oe(e, t, o, n[o], !0, i, s)
            } else if (void 0 !== a && (r = !0,
            we.isFunction(a) || (s = !0),
            u && (s ? (t.call(e, a),
            t = null) : (u = t,
            t = function(e, t, n) {
                return u.call(we(e), n)
            }
            )),
            t))
                for (; o < l; o++)
                    t(e[o], n, s ? a : a.call(e[o], o, t(e[o], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : i
        }
          , je = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        g.uid = 1,
        g.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                je(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var a, r = this.cache(e);
                if ("string" == typeof t)
                    r[we.camelCase(t)] = n;
                else
                    for (a in t)
                        r[we.camelCase(a)] = t[a];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][we.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, a = e[this.expando];
                if (void 0 !== a) {
                    if (void 0 !== t) {
                        Array.isArray(t) ? t = t.map(we.camelCase) : (t = we.camelCase(t),
                        t = t in a ? [t] : t.match(He) || []),
                        n = t.length;
                        for (; n--; )
                            delete a[t[n]]
                    }
                    (void 0 === t || we.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !we.isEmptyObject(t)
            }
        };
        var Re = new g
          , We = new g
          , Xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , Fe = /[A-Z]/g;
        we.extend({
            hasData: function(e) {
                return We.hasData(e) || Re.hasData(e)
            },
            data: function(e, t, n) {
                return We.access(e, t, n)
            },
            removeData: function(e, t) {
                We.remove(e, t)
            },
            _data: function(e, t, n) {
                return Re.access(e, t, n)
            },
            _removeData: function(e, t) {
                Re.remove(e, t)
            }
        }),
        we.fn.extend({
            data: function(e, t) {
                var n, a, r, i = this[0], s = i && i.attributes;
                if (void 0 === e) {
                    if (this.length && (r = We.get(i),
                    1 === i.nodeType && !Re.get(i, "hasDataAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && (a = s[n].name,
                            0 === a.indexOf("data-") && (a = we.camelCase(a.slice(5)),
                            y(i, a, r[a])));
                        Re.set(i, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    We.set(this, e)
                }) : Oe(this, function(t) {
                    var n;
                    if (i && void 0 === t) {
                        if (n = We.get(i, e),
                        void 0 !== n)
                            return n;
                        if (n = y(i, e),
                        void 0 !== n)
                            return n
                    } else
                        this.each(function() {
                            We.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    We.remove(this, e)
                })
            }
        }),
        we.extend({
            queue: function(e, t, n) {
                var a;
                if (e)
                    return t = (t || "fx") + "queue",
                    a = Re.get(e, t),
                    n && (!a || Array.isArray(n) ? a = Re.access(e, t, we.makeArray(n)) : a.push(n)),
                    a || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = we.queue(e, t)
                  , a = n.length
                  , r = n.shift()
                  , i = we._queueHooks(e, t)
                  , s = function() {
                    we.dequeue(e, t)
                };
                "inprogress" === r && (r = n.shift(),
                a--),
                r && ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                r.call(e, s, i)),
                !a && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Re.get(e, n) || Re.access(e, n, {
                    empty: we.Callbacks("once memory").add(function() {
                        Re.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        we.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? we.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = we.queue(this, e, t);
                    we._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && we.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    we.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, a = 1, r = we.Deferred(), i = this, s = this.length, o = function() {
                    --a || r.resolveWith(i, [i])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; s--; )
                    n = Re.get(i[s], e + "queueHooks"),
                    n && n.empty && (a++,
                    n.empty.add(o));
                return o(),
                r.promise(t)
            }
        });
        var Ge = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Ye = new RegExp("^(?:([+-])=|)(" + Ge + ")([a-z%]*)$","i")
          , Ve = ["Top", "Right", "Bottom", "Left"]
          , $e = function(e, t) {
            return e = t || e,
            "none" === e.style.display || "" === e.style.display && we.contains(e.ownerDocument, e) && "none" === we.css(e, "display")
        }
          , _e = function(e, t, n, a) {
            var r, i, s = {};
            for (i in t)
                s[i] = e.style[i],
                e.style[i] = t[i];
            r = n.apply(e, a || []);
            for (i in t)
                e.style[i] = s[i];
            return r
        }
          , Ue = {};
        we.fn.extend({
            show: function() {
                return b(this, !0)
            },
            hide: function() {
                return b(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    $e(this) ? we(this).show() : we(this).hide()
                })
            }
        });
        var Ke = /^(?:checkbox|radio)$/i
          , Qe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , Ze = /^$|\/(?:java|ecma)script/i
          , Je = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Je.optgroup = Je.option,
        Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead,
        Je.th = Je.td;
        var et = /<|&#?\w+;/;
        !function() {
            var e = se.createDocumentFragment()
              , t = e.appendChild(se.createElement("div"))
              , n = se.createElement("input");
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            ve.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            ve.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var tt = se.documentElement
          , nt = /^key/
          , at = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , rt = /^([^.]*)(?:\.(.+)|)/;
        we.event = {
            global: {},
            add: function(e, t, n, a, r) {
                var i, s, o, l, u, p, d, c, f, h, m, g = Re.get(e);
                if (g)
                    for (n.handler && (i = n,
                    n = i.handler,
                    r = i.selector),
                    r && we.find.matchesSelector(tt, r),
                    n.guid || (n.guid = we.guid++),
                    (l = g.events) || (l = g.events = {}),
                    (s = g.handle) || (s = g.handle = function(t) {
                        return "undefined" != typeof we && we.event.triggered !== t.type ? we.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    t = (t || "").match(He) || [""],
                    u = t.length; u--; )
                        o = rt.exec(t[u]) || [],
                        f = m = o[1],
                        h = (o[2] || "").split(".").sort(),
                        f && (d = we.event.special[f] || {},
                        f = (r ? d.delegateType : d.bindType) || f,
                        d = we.event.special[f] || {},
                        p = we.extend({
                            type: f,
                            origType: m,
                            data: a,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && we.expr.match.needsContext.test(r),
                            namespace: h.join(".")
                        }, i),
                        (c = l[f]) || (c = l[f] = [],
                        c.delegateCount = 0,
                        d.setup && d.setup.call(e, a, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)),
                        d.add && (d.add.call(e, p),
                        p.handler.guid || (p.handler.guid = n.guid)),
                        r ? c.splice(c.delegateCount++, 0, p) : c.push(p),
                        we.event.global[f] = !0)
            },
            remove: function(e, t, n, a, r) {
                var i, s, o, l, u, p, d, c, f, h, m, g = Re.hasData(e) && Re.get(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(He) || [""],
                    u = t.length; u--; )
                        if (o = rt.exec(t[u]) || [],
                        f = m = o[1],
                        h = (o[2] || "").split(".").sort(),
                        f) {
                            for (d = we.event.special[f] || {},
                            f = (a ? d.delegateType : d.bindType) || f,
                            c = l[f] || [],
                            o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = i = c.length; i--; )
                                p = c[i],
                                !r && m !== p.origType || n && n.guid !== p.guid || o && !o.test(p.namespace) || a && a !== p.selector && ("**" !== a || !p.selector) || (c.splice(i, 1),
                                p.selector && c.delegateCount--,
                                d.remove && d.remove.call(e, p));
                            s && !c.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || we.removeEvent(e, f, g.handle),
                            delete l[f])
                        } else
                            for (f in l)
                                we.event.remove(e, f + t[u], n, a, !0);
                    we.isEmptyObject(l) && Re.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, a, r, i, s, o = we.event.fix(e), l = new Array(arguments.length), u = (Re.get(this, "events") || {})[o.type] || [], p = we.event.special[o.type] || {};
                for (l[0] = o,
                t = 1; t < arguments.length; t++)
                    l[t] = arguments[t];
                if (o.delegateTarget = this,
                !p.preDispatch || p.preDispatch.call(this, o) !== !1) {
                    for (s = we.event.handlers.call(this, o, u),
                    t = 0; (r = s[t++]) && !o.isPropagationStopped(); )
                        for (o.currentTarget = r.elem,
                        n = 0; (i = r.handlers[n++]) && !o.isImmediatePropagationStopped(); )
                            o.rnamespace && !o.rnamespace.test(i.namespace) || (o.handleObj = i,
                            o.data = i.data,
                            a = ((we.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l),
                            void 0 !== a && (o.result = a) === !1 && (o.preventDefault(),
                            o.stopPropagation()));
                    return p.postDispatch && p.postDispatch.call(this, o),
                    o.result
                }
            },
            handlers: function(e, t) {
                var n, a, r, i, s, o = [], l = t.delegateCount, u = e.target;
                if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || u.disabled !== !0)) {
                            for (i = [],
                            s = {},
                            n = 0; n < l; n++)
                                a = t[n],
                                r = a.selector + " ",
                                void 0 === s[r] && (s[r] = a.needsContext ? we(r, this).index(u) > -1 : we.find(r, this, null, [u]).length),
                                s[r] && i.push(a);
                            i.length && o.push({
                                elem: u,
                                handlers: i
                            })
                        }
                return u = this,
                l < t.length && o.push({
                    elem: u,
                    handlers: t.slice(l)
                }),
                o
            },
            addProp: function(e, t) {
                Object.defineProperty(we.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: we.isFunction(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[we.expando] ? e : new we.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== M() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === M() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && l(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return l(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        we.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        we.Event = function(e, t) {
            return this instanceof we.Event ? (e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? E : k,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && we.extend(this, t),
            this.timeStamp = e && e.timeStamp || we.now(),
            void (this[we.expando] = !0)) : new we.Event(e,t)
        }
        ,
        we.Event.prototype = {
            constructor: we.Event,
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = E,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = E,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = E,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        we.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && nt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && at.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, we.event.addProp),
        we.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            we.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, a = this, r = e.relatedTarget, i = e.handleObj;
                    return r && (r === a || we.contains(a, r)) || (e.type = i.origType,
                    n = i.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        we.fn.extend({
            on: function(e, t, n, a) {
                return z(this, e, t, n, a)
            },
            one: function(e, t, n, a) {
                return z(this, e, t, n, a, 1)
            },
            off: function(e, t, n) {
                var a, r;
                if (e && e.preventDefault && e.handleObj)
                    return a = e.handleObj,
                    we(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler),
                    this;
                if ("object" == typeof e) {
                    for (r in e)
                        this.off(r, t, e[r]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t,
                t = void 0),
                n === !1 && (n = k),
                this.each(function() {
                    we.event.remove(this, e, n, t)
                })
            }
        });
        var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , st = /<script|<style|<link/i
          , ot = /checked\s*(?:[^=]|=\s*.checked.)/i
          , lt = /^true\/(.*)/
          , ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        we.extend({
            htmlPrefilter: function(e) {
                return e.replace(it, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var a, r, i, s, o = e.cloneNode(!0), l = we.contains(e.ownerDocument, e);
                if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || we.isXMLDoc(e)))
                    for (s = T(o),
                    i = T(e),
                    a = 0,
                    r = i.length; a < r; a++)
                        I(i[a], s[a]);
                if (t)
                    if (n)
                        for (i = i || T(e),
                        s = s || T(o),
                        a = 0,
                        r = i.length; a < r; a++)
                            A(i[a], s[a]);
                    else
                        A(e, o);
                return s = T(o, "script"),
                s.length > 0 && C(s, !l && T(e, "script")),
                o
            },
            cleanData: function(e) {
                for (var t, n, a, r = we.event.special, i = 0; void 0 !== (n = e[i]); i++)
                    if (je(n)) {
                        if (t = n[Re.expando]) {
                            if (t.events)
                                for (a in t.events)
                                    r[a] ? we.event.remove(n, a) : we.removeEvent(n, a, t.handle);
                            n[Re.expando] = void 0
                        }
                        n[We.expando] && (n[We.expando] = void 0)
                    }
            }
        }),
        we.fn.extend({
            detach: function(e) {
                return H(this, e, !0)
            },
            remove: function(e) {
                return H(this, e)
            },
            text: function(e) {
                return Oe(this, function(e) {
                    return void 0 === e ? we.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return N(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = P(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return N(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = P(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return N(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return N(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (we.cleanData(T(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return we.clone(this, e, t)
                })
            },
            html: function(e) {
                return Oe(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , a = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !st.test(e) && !Je[(Qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = we.htmlPrefilter(e);
                        try {
                            for (; n < a; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (we.cleanData(T(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return N(this, arguments, function(t) {
                    var n = this.parentNode;
                    we.inArray(this, e) < 0 && (we.cleanData(T(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        we.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            we.fn[e] = function(e) {
                for (var n, a = [], r = we(e), i = r.length - 1, s = 0; s <= i; s++)
                    n = s === i ? this : this.clone(!0),
                    we(r[s])[t](n),
                    pe.apply(a, n.get());
                return this.pushStack(a)
            }
        });
        var pt = /^margin/
          , dt = new RegExp("^(" + Ge + ")(?!px)[a-z%]+$","i")
          , ct = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        };
        !function() {
            function e() {
                if (o) {
                    o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    o.innerHTML = "",
                    tt.appendChild(s);
                    var e = n.getComputedStyle(o);
                    t = "1%" !== e.top,
                    i = "2px" === e.marginLeft,
                    a = "4px" === e.width,
                    o.style.marginRight = "50%",
                    r = "4px" === e.marginRight,
                    tt.removeChild(s),
                    o = null
                }
            }
            var t, a, r, i, s = se.createElement("div"), o = se.createElement("div");
            o.style && (o.style.backgroundClip = "content-box",
            o.cloneNode(!0).style.backgroundClip = "",
            ve.clearCloneStyle = "content-box" === o.style.backgroundClip,
            s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            s.appendChild(o),
            we.extend(ve, {
                pixelPosition: function() {
                    return e(),
                    t
                },
                boxSizingReliable: function() {
                    return e(),
                    a
                },
                pixelMarginRight: function() {
                    return e(),
                    r
                },
                reliableMarginLeft: function() {
                    return e(),
                    i
                }
            }))
        }();
        var ft = /^(none|table(?!-c[ea]).+)/
          , ht = /^--/
          , mt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , gt = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , vt = ["Webkit", "Moz", "ms"]
          , yt = se.createElement("div").style;
        we.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = q(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, a) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, i, s, o = we.camelCase(t), l = ht.test(t), u = e.style;
                    return l || (t = j(o)),
                    s = we.cssHooks[t] || we.cssHooks[o],
                    void 0 === n ? s && "get"in s && void 0 !== (r = s.get(e, !1, a)) ? r : u[t] : (i = typeof n,
                    "string" === i && (r = Ye.exec(n)) && r[1] && (n = w(e, t, r),
                    i = "number"),
                    null != n && n === n && ("number" === i && (n += r && r[3] || (we.cssNumber[o] ? "" : "px")),
                    ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    s && "set"in s && void 0 === (n = s.set(e, n, a)) || (l ? u.setProperty(t, n) : u[t] = n)),
                    void 0)
                }
            },
            css: function(e, t, n, a) {
                var r, i, s, o = we.camelCase(t), l = ht.test(t);
                return l || (t = j(o)),
                s = we.cssHooks[t] || we.cssHooks[o],
                s && "get"in s && (r = s.get(e, !0, n)),
                void 0 === r && (r = q(e, t, a)),
                "normal" === r && t in gt && (r = gt[t]),
                "" === n || n ? (i = parseFloat(r),
                n === !0 || isFinite(i) ? i || 0 : r) : r
            }
        }),
        we.each(["height", "width"], function(e, t) {
            we.cssHooks[t] = {
                get: function(e, n, a) {
                    if (n)
                        return !ft.test(we.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? X(e, t, a) : _e(e, mt, function() {
                            return X(e, t, a)
                        })
                },
                set: function(e, n, a) {
                    var r, i = a && ct(e), s = a && W(e, t, a, "border-box" === we.css(e, "boxSizing", !1, i), i);
                    return s && (r = Ye.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                    n = we.css(e, t)),
                    R(e, n, s)
                }
            }
        }),
        we.cssHooks.marginLeft = B(ve.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        we.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            we.cssHooks[e + t] = {
                expand: function(n) {
                    for (var a = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++)
                        r[e + Ve[a] + t] = i[a] || i[a - 2] || i[0];
                    return r
                }
            },
            pt.test(e) || (we.cssHooks[e + t].set = R)
        }),
        we.fn.extend({
            css: function(e, t) {
                return Oe(this, function(e, t, n) {
                    var a, r, i = {}, s = 0;
                    if (Array.isArray(t)) {
                        for (a = ct(e),
                        r = t.length; s < r; s++)
                            i[t[s]] = we.css(e, t[s], !1, a);
                        return i
                    }
                    return void 0 !== n ? we.style(e, t, n) : we.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        we.Tween = F,
        F.prototype = {
            constructor: F,
            init: function(e, t, n, a, r, i) {
                this.elem = e,
                this.prop = n,
                this.easing = r || we.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = a,
                this.unit = i || (we.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : F.propHooks._default.set(this),
                this
            }
        },
        F.prototype.init.prototype = F.prototype,
        F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = we.css(e.elem, e.prop, ""),
                    t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    we.fx.step[e.prop] ? we.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[we.cssProps[e.prop]] && !we.cssHooks[e.prop] ? e.elem[e.prop] = e.now : we.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        we.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        we.fx = F.prototype.init,
        we.fx.step = {};
        var wt, xt, bt = /^(?:toggle|show|hide)$/, Tt = /queueHooks$/;
        we.Animation = we.extend(K, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return w(n.elem, e, Ye.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                we.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.match(He);
                for (var n, a = 0, r = e.length; a < r; a++)
                    n = e[a],
                    K.tweeners[n] = K.tweeners[n] || [],
                    K.tweeners[n].unshift(t)
            },
            prefilters: [_],
            prefilter: function(e, t) {
                t ? K.prefilters.unshift(e) : K.prefilters.push(e)
            }
        }),
        we.speed = function(e, t, n) {
            var a = e && "object" == typeof e ? we.extend({}, e) : {
                complete: n || !n && t || we.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !we.isFunction(t) && t
            };
            return we.fx.off ? a.duration = 0 : "number" != typeof a.duration && (a.duration in we.fx.speeds ? a.duration = we.fx.speeds[a.duration] : a.duration = we.fx.speeds._default),
            null != a.queue && a.queue !== !0 || (a.queue = "fx"),
            a.old = a.complete,
            a.complete = function() {
                we.isFunction(a.old) && a.old.call(this),
                a.queue && we.dequeue(this, a.queue)
            }
            ,
            a
        }
        ,
        we.fn.extend({
            fadeTo: function(e, t, n, a) {
                return this.filter($e).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, a)
            },
            animate: function(e, t, n, a) {
                var r = we.isEmptyObject(e)
                  , i = we.speed(t, n, a)
                  , s = function() {
                    var t = K(this, we.extend({}, e), i);
                    (r || Re.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                r || i.queue === !1 ? this.each(s) : this.queue(i.queue, s)
            },
            stop: function(e, t, n) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , r = null != e && e + "queueHooks"
                      , i = we.timers
                      , s = Re.get(this);
                    if (r)
                        s[r] && s[r].stop && a(s[r]);
                    else
                        for (r in s)
                            s[r] && s[r].stop && Tt.test(r) && a(s[r]);
                    for (r = i.length; r--; )
                        i[r].elem !== this || null != e && i[r].queue !== e || (i[r].anim.stop(n),
                        t = !1,
                        i.splice(r, 1));
                    !t && n || we.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                this.each(function() {
                    var t, n = Re.get(this), a = n[e + "queue"], r = n[e + "queueHooks"], i = we.timers, s = a ? a.length : 0;
                    for (n.finish = !0,
                    we.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = i.length; t--; )
                        i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                        i.splice(t, 1));
                    for (t = 0; t < s; t++)
                        a[t] && a[t].finish && a[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        we.each(["toggle", "show", "hide"], function(e, t) {
            var n = we.fn[t];
            we.fn[t] = function(e, a, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, a, r)
            }
        }),
        we.each({
            slideDown: V("show"),
            slideUp: V("hide"),
            slideToggle: V("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            we.fn[e] = function(e, n, a) {
                return this.animate(t, e, n, a)
            }
        }),
        we.timers = [],
        we.fx.tick = function() {
            var e, t = 0, n = we.timers;
            for (wt = we.now(); t < n.length; t++)
                e = n[t],
                e() || n[t] !== e || n.splice(t--, 1);
            n.length || we.fx.stop(),
            wt = void 0
        }
        ,
        we.fx.timer = function(e) {
            we.timers.push(e),
            we.fx.start()
        }
        ,
        we.fx.interval = 13,
        we.fx.start = function() {
            xt || (xt = !0,
            G())
        }
        ,
        we.fx.stop = function() {
            xt = null
        }
        ,
        we.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        we.fn.delay = function(e, t) {
            return e = we.fx ? we.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, a) {
                var r = n.setTimeout(t, e);
                a.stop = function() {
                    n.clearTimeout(r)
                }
            })
        }
        ,
        function() {
            var e = se.createElement("input")
              , t = se.createElement("select")
              , n = t.appendChild(se.createElement("option"));
            e.type = "checkbox",
            ve.checkOn = "" !== e.value,
            ve.optSelected = n.selected,
            e = se.createElement("input"),
            e.value = "t",
            e.type = "radio",
            ve.radioValue = "t" === e.value
        }();
        var Ct, St = we.expr.attrHandle;
        we.fn.extend({
            attr: function(e, t) {
                return Oe(this, we.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    we.removeAttr(this, e)
                })
            }
        }),
        we.extend({
            attr: function(e, t, n) {
                var a, r, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return "undefined" == typeof e.getAttribute ? we.prop(e, t, n) : (1 === i && we.isXMLDoc(e) || (r = we.attrHooks[t.toLowerCase()] || (we.expr.match.bool.test(t) ? Ct : void 0)),
                    void 0 !== n ? null === n ? void we.removeAttr(e, t) : r && "set"in r && void 0 !== (a = r.set(e, n, t)) ? a : (e.setAttribute(t, n + ""),
                    n) : r && "get"in r && null !== (a = r.get(e, t)) ? a : (a = we.find.attr(e, t),
                    null == a ? void 0 : a))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ve.radioValue && "radio" === t && l(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, a = 0, r = t && t.match(He);
                if (r && 1 === e.nodeType)
                    for (; n = r[a++]; )
                        e.removeAttribute(n)
            }
        }),
        Ct = {
            set: function(e, t, n) {
                return t === !1 ? we.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        we.each(we.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = St[t] || we.find.attr;
            St[t] = function(e, t, a) {
                var r, i, s = t.toLowerCase();
                return a || (i = St[s],
                St[s] = r,
                r = null != n(e, t, a) ? s : null,
                St[s] = i),
                r
            }
        });
        var Et = /^(?:input|select|textarea|button)$/i
          , kt = /^(?:a|area)$/i;
        we.fn.extend({
            prop: function(e, t) {
                return Oe(this, we.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[we.propFix[e] || e]
                })
            }
        }),
        we.extend({
            prop: function(e, t, n) {
                var a, r, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                    return 1 === i && we.isXMLDoc(e) || (t = we.propFix[t] || t,
                    r = we.propHooks[t]),
                    void 0 !== n ? r && "set"in r && void 0 !== (a = r.set(e, n, t)) ? a : e[t] = n : r && "get"in r && null !== (a = r.get(e, t)) ? a : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = we.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Et.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        ve.optSelected || (we.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        we.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            we.propFix[this.toLowerCase()] = this
        }),
        we.fn.extend({
            addClass: function(e) {
                var t, n, a, r, i, s, o, l = 0;
                if (we.isFunction(e))
                    return this.each(function(t) {
                        we(this).addClass(e.call(this, t, Z(this)))
                    });
                if ("string" == typeof e && e)
                    for (t = e.match(He) || []; n = this[l++]; )
                        if (r = Z(n),
                        a = 1 === n.nodeType && " " + Q(r) + " ") {
                            for (s = 0; i = t[s++]; )
                                a.indexOf(" " + i + " ") < 0 && (a += i + " ");
                            o = Q(a),
                            r !== o && n.setAttribute("class", o)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, a, r, i, s, o, l = 0;
                if (we.isFunction(e))
                    return this.each(function(t) {
                        we(this).removeClass(e.call(this, t, Z(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(He) || []; n = this[l++]; )
                        if (r = Z(n),
                        a = 1 === n.nodeType && " " + Q(r) + " ") {
                            for (s = 0; i = t[s++]; )
                                for (; a.indexOf(" " + i + " ") > -1; )
                                    a = a.replace(" " + i + " ", " ");
                            o = Q(a),
                            r !== o && n.setAttribute("class", o)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : we.isFunction(e) ? this.each(function(n) {
                    we(this).toggleClass(e.call(this, n, Z(this), t), t)
                }) : this.each(function() {
                    var t, a, r, i;
                    if ("string" === n)
                        for (a = 0,
                        r = we(this),
                        i = e.match(He) || []; t = i[a++]; )
                            r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || (t = Z(this),
                        t && Re.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Re.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, a = 0;
                for (t = " " + e + " "; n = this[a++]; )
                    if (1 === n.nodeType && (" " + Q(Z(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var Mt = /\r/g;
        we.fn.extend({
            val: function(e) {
                var t, n, a, r = this[0];
                {
                    if (arguments.length)
                        return a = we.isFunction(e),
                        this.each(function(n) {
                            var r;
                            1 === this.nodeType && (r = a ? e.call(this, n, we(this).val()) : e,
                            null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = we.map(r, function(e) {
                                return null == e ? "" : e + ""
                            })),
                            t = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()],
                            t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                        });
                    if (r)
                        return t = we.valHooks[r.type] || we.valHooks[r.nodeName.toLowerCase()],
                        t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
                        "string" == typeof n ? n.replace(Mt, "") : null == n ? "" : n)
                }
            }
        }),
        we.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = we.find.attr(e, "value");
                        return null != t ? t : Q(we.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, a, r = e.options, i = e.selectedIndex, s = "select-one" === e.type, o = s ? null : [], u = s ? i + 1 : r.length;
                        for (a = i < 0 ? u : s ? i : 0; a < u; a++)
                            if (n = r[a],
                            (n.selected || a === i) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                                if (t = we(n).val(),
                                s)
                                    return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function(e, t) {
                        for (var n, a, r = e.options, i = we.makeArray(t), s = r.length; s--; )
                            a = r[s],
                            (a.selected = we.inArray(we.valHooks.option.get(a), i) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        i
                    }
                }
            }
        }),
        we.each(["radio", "checkbox"], function() {
            we.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = we.inArray(we(e).val(), t) > -1
                }
            },
            ve.checkOn || (we.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        });
        var zt = /^(?:focusinfocus|focusoutblur)$/;
        we.extend(we.event, {
            trigger: function(e, t, a, r) {
                var i, s, o, l, u, p, d, c = [a || se], f = he.call(e, "type") ? e.type : e, h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = o = a = a || se,
                3 !== a.nodeType && 8 !== a.nodeType && !zt.test(f + we.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."),
                f = h.shift(),
                h.sort()),
                u = f.indexOf(":") < 0 && "on" + f,
                e = e[we.expando] ? e : new we.Event(f,"object" == typeof e && e),
                e.isTrigger = r ? 2 : 3,
                e.namespace = h.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = a),
                t = null == t ? [e] : we.makeArray(t, [e]),
                d = we.event.special[f] || {},
                r || !d.trigger || d.trigger.apply(a, t) !== !1)) {
                    if (!r && !d.noBubble && !we.isWindow(a)) {
                        for (l = d.delegateType || f,
                        zt.test(l + f) || (s = s.parentNode); s; s = s.parentNode)
                            c.push(s),
                            o = s;
                        o === (a.ownerDocument || se) && c.push(o.defaultView || o.parentWindow || n)
                    }
                    for (i = 0; (s = c[i++]) && !e.isPropagationStopped(); )
                        e.type = i > 1 ? l : d.bindType || f,
                        p = (Re.get(s, "events") || {})[e.type] && Re.get(s, "handle"),
                        p && p.apply(s, t),
                        p = u && s[u],
                        p && p.apply && je(s) && (e.result = p.apply(s, t),
                        e.result === !1 && e.preventDefault());
                    return e.type = f,
                    r || e.isDefaultPrevented() || d._default && d._default.apply(c.pop(), t) !== !1 || !je(a) || u && we.isFunction(a[f]) && !we.isWindow(a) && (o = a[u],
                    o && (a[u] = null),
                    we.event.triggered = f,
                    a[f](),
                    we.event.triggered = void 0,
                    o && (a[u] = o)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var a = we.extend(new we.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                we.event.trigger(a, null, t)
            }
        }),
        we.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    we.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return we.event.trigger(e, t, n, !0)
            }
        }),
        we.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            we.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        we.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        ve.focusin = "onfocusin"in n,
        ve.focusin || we.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                we.event.simulate(t, e.target, we.event.fix(e))
            };
            we.event.special[t] = {
                setup: function() {
                    var a = this.ownerDocument || this
                      , r = Re.access(a, t);
                    r || a.addEventListener(e, n, !0),
                    Re.access(a, t, (r || 0) + 1)
                },
                teardown: function() {
                    var a = this.ownerDocument || this
                      , r = Re.access(a, t) - 1;
                    r ? Re.access(a, t, r) : (a.removeEventListener(e, n, !0),
                    Re.remove(a, t))
                }
            }
        });
        var Pt = n.location
          , Dt = we.now()
          , Lt = /\?/;
        we.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || we.error("Invalid XML: " + e),
            t
        }
        ;
        var At = /\[\]$/
          , It = /\r?\n/g
          , Nt = /^(?:submit|button|image|reset|file)$/i
          , Ht = /^(?:input|select|textarea|keygen)/i;
        we.param = function(e, t) {
            var n, a = [], r = function(e, t) {
                var n = we.isFunction(t) ? t() : t;
                a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !we.isPlainObject(e))
                we.each(e, function() {
                    r(this.name, this.value)
                });
            else
                for (n in e)
                    J(n, e[n], t, r);
            return a.join("&")
        }
        ,
        we.fn.extend({
            serialize: function() {
                return we.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = we.prop(this, "elements");
                    return e ? we.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !we(this).is(":disabled") && Ht.test(this.nodeName) && !Nt.test(e) && (this.checked || !Ke.test(e))
                }).map(function(e, t) {
                    var n = we(this).val();
                    return null == n ? null : Array.isArray(n) ? we.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(It, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(It, "\r\n")
                    }
                }).get()
            }
        });
        var qt = /%20/g
          , Bt = /#.*$/
          , Ot = /([?&])_=[^&]*/
          , jt = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Rt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , Wt = /^(?:GET|HEAD)$/
          , Xt = /^\/\//
          , Ft = {}
          , Gt = {}
          , Yt = "*/".concat("*")
          , Vt = se.createElement("a");
        Vt.href = Pt.href,
        we.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Pt.href,
                type: "GET",
                isLocal: Rt.test(Pt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Yt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": we.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? ne(ne(e, we.ajaxSettings), t) : ne(we.ajaxSettings, e)
            },
            ajaxPrefilter: ee(Ft),
            ajaxTransport: ee(Gt),
            ajax: function(e, t) {
                function a(e, t, a, o) {
                    var u, c, f, x, b, T = t;
                    p || (p = !0,
                    l && n.clearTimeout(l),
                    r = void 0,
                    s = o || "",
                    C.readyState = e > 0 ? 4 : 0,
                    u = e >= 200 && e < 300 || 304 === e,
                    a && (x = ae(h, C, a)),
                    x = re(h, x, C, u),
                    u ? (h.ifModified && (b = C.getResponseHeader("Last-Modified"),
                    b && (we.lastModified[i] = b),
                    b = C.getResponseHeader("etag"),
                    b && (we.etag[i] = b)),
                    204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state,
                    c = x.data,
                    f = x.error,
                    u = !f)) : (f = T,
                    !e && T || (T = "error",
                    e < 0 && (e = 0))),
                    C.status = e,
                    C.statusText = (t || T) + "",
                    u ? v.resolveWith(m, [c, T, C]) : v.rejectWith(m, [C, T, f]),
                    C.statusCode(w),
                    w = void 0,
                    d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, h, u ? c : f]),
                    y.fireWith(m, [C, T]),
                    d && (g.trigger("ajaxComplete", [C, h]),
                    --we.active || we.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var r, i, s, o, l, u, p, d, c, f, h = we.ajaxSetup({}, t), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? we(m) : we.event, v = we.Deferred(), y = we.Callbacks("once memory"), w = h.statusCode || {}, x = {}, b = {}, T = "canceled", C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!o)
                                for (o = {}; t = jt.exec(s); )
                                    o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return p ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e,
                        x[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (h.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p)
                                C.always(e[C.status]);
                            else
                                for (t in e)
                                    w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        return r && r.abort(t),
                        a(0, t),
                        this
                    }
                };
                if (v.promise(C),
                h.url = ((e || h.url || Pt.href) + "").replace(Xt, Pt.protocol + "//"),
                h.type = t.method || t.type || h.method || h.type,
                h.dataTypes = (h.dataType || "*").toLowerCase().match(He) || [""],
                null == h.crossDomain) {
                    u = se.createElement("a");
                    try {
                        u.href = h.url,
                        u.href = u.href,
                        h.crossDomain = Vt.protocol + "//" + Vt.host != u.protocol + "//" + u.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = we.param(h.data, h.traditional)),
                te(Ft, h, t, C),
                p)
                    return C;
                d = we.event && h.global,
                d && 0 === we.active++ && we.event.trigger("ajaxStart"),
                h.type = h.type.toUpperCase(),
                h.hasContent = !Wt.test(h.type),
                i = h.url.replace(Bt, ""),
                h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (f = h.url.slice(i.length),
                h.data && (i += (Lt.test(i) ? "&" : "?") + h.data,
                delete h.data),
                h.cache === !1 && (i = i.replace(Ot, "$1"),
                f = (Lt.test(i) ? "&" : "?") + "_=" + Dt++ + f),
                h.url = i + f),
                h.ifModified && (we.lastModified[i] && C.setRequestHeader("If-Modified-Since", we.lastModified[i]),
                we.etag[i] && C.setRequestHeader("If-None-Match", we.etag[i])),
                (h.data && h.hasContent && h.contentType !== !1 || t.contentType) && C.setRequestHeader("Content-Type", h.contentType),
                C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : h.accepts["*"]);
                for (c in h.headers)
                    C.setRequestHeader(c, h.headers[c]);
                if (h.beforeSend && (h.beforeSend.call(m, C, h) === !1 || p))
                    return C.abort();
                if (T = "abort",
                y.add(h.complete),
                C.done(h.success),
                C.fail(h.error),
                r = te(Gt, h, t, C)) {
                    if (C.readyState = 1,
                    d && g.trigger("ajaxSend", [C, h]),
                    p)
                        return C;
                    h.async && h.timeout > 0 && (l = n.setTimeout(function() {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        p = !1,
                        r.send(x, a)
                    } catch (e) {
                        if (p)
                            throw e;
                        a(-1, e)
                    }
                } else
                    a(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return we.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return we.get(e, void 0, t, "script")
            }
        }),
        we.each(["get", "post"], function(e, t) {
            we[t] = function(e, n, a, r) {
                return we.isFunction(n) && (r = r || a,
                a = n,
                n = void 0),
                we.ajax(we.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: a
                }, we.isPlainObject(e) && e))
            }
        }),
        we._evalUrl = function(e) {
            return we.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        we.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (we.isFunction(e) && (e = e.call(this[0])),
                t = we(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(e) {
                return we.isFunction(e) ? this.each(function(t) {
                    we(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = we(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = we.isFunction(e);
                return this.each(function(n) {
                    we(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    we(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        we.expr.pseudos.hidden = function(e) {
            return !we.expr.pseudos.visible(e)
        }
        ,
        we.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }
        ,
        we.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var $t = {
            0: 200,
            1223: 204
        }
          , _t = we.ajaxSettings.xhr();
        ve.cors = !!_t && "withCredentials"in _t,
        ve.ajax = _t = !!_t,
        we.ajaxTransport(function(e) {
            var t, a;
            if (ve.cors || _t && !e.crossDomain)
                return {
                    send: function(r, i) {
                        var s, o = e.xhr();
                        if (o.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (s in e.xhrFields)
                                o[s] = e.xhrFields[s];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                        e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (s in r)
                            o.setRequestHeader(s, r[s]);
                        t = function(e) {
                            return function() {
                                t && (t = a = o.onload = o.onerror = o.onabort = o.onreadystatechange = null,
                                "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? i(0, "error") : i(o.status, o.statusText) : i($t[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                                    binary: o.response
                                } : {
                                    text: o.responseText
                                }, o.getAllResponseHeaders()))
                            }
                        }
                        ,
                        o.onload = t(),
                        a = o.onerror = t("error"),
                        void 0 !== o.onabort ? o.onabort = a : o.onreadystatechange = function() {
                            4 === o.readyState && n.setTimeout(function() {
                                t && a()
                            })
                        }
                        ,
                        t = t("abort");
                        try {
                            o.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }),
        we.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        we.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return we.globalEval(e),
                    e
                }
            }
        }),
        we.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        we.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(a, r) {
                        t = we("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && r("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        se.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Ut = []
          , Kt = /(=)\?(?=&|$)|\?\?/;
        we.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Ut.pop() || we.expando + "_" + Dt++;
                return this[e] = !0,
                e
            }
        }),
        we.ajaxPrefilter("json jsonp", function(e, t, a) {
            var r, i, s, o = e.jsonp !== !1 && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
            if (o || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = we.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                o ? e[o] = e[o].replace(Kt, "$1" + r) : e.jsonp !== !1 && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                e.converters["script json"] = function() {
                    return s || we.error(r + " was not called"),
                    s[0]
                }
                ,
                e.dataTypes[0] = "json",
                i = n[r],
                n[r] = function() {
                    s = arguments
                }
                ,
                a.always(function() {
                    void 0 === i ? we(n).removeProp(r) : n[r] = i,
                    e[r] && (e.jsonpCallback = t.jsonpCallback,
                    Ut.push(r)),
                    s && we.isFunction(i) && i(s[0]),
                    s = i = void 0
                }),
                "script"
        }),
        ve.createHTMLDocument = function() {
            var e = se.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        }(),
        we.parseHTML = function(e, t, n) {
            if ("string" != typeof e)
                return [];
            "boolean" == typeof t && (n = t,
            t = !1);
            var a, r, i;
            return t || (ve.createHTMLDocument ? (t = se.implementation.createHTMLDocument(""),
            a = t.createElement("base"),
            a.href = se.location.href,
            t.head.appendChild(a)) : t = se),
            r = ze.exec(e),
            i = !n && [],
            r ? [t.createElement(r[1])] : (r = S([e], t, i),
            i && i.length && we(i).remove(),
            we.merge([], r.childNodes))
        }
        ,
        we.fn.load = function(e, t, n) {
            var a, r, i, s = this, o = e.indexOf(" ");
            return o > -1 && (a = Q(e.slice(o)),
            e = e.slice(0, o)),
            we.isFunction(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (r = "POST"),
            s.length > 0 && we.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments,
                s.html(a ? we("<div>").append(we.parseHTML(e)).find(a) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, i || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        we.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            we.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        we.expr.pseudos.animated = function(e) {
            return we.grep(we.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        we.offset = {
            setOffset: function(e, t, n) {
                var a, r, i, s, o, l, u, p = we.css(e, "position"), d = we(e), c = {};
                "static" === p && (e.style.position = "relative"),
                o = d.offset(),
                i = we.css(e, "top"),
                l = we.css(e, "left"),
                u = ("absolute" === p || "fixed" === p) && (i + l).indexOf("auto") > -1,
                u ? (a = d.position(),
                s = a.top,
                r = a.left) : (s = parseFloat(i) || 0,
                r = parseFloat(l) || 0),
                we.isFunction(t) && (t = t.call(e, n, we.extend({}, o))),
                null != t.top && (c.top = t.top - o.top + s),
                null != t.left && (c.left = t.left - o.left + r),
                "using"in t ? t.using.call(e, c) : d.css(c)
            }
        },
        we.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        we.offset.setOffset(this, e, t)
                    });
                var t, n, a, r, i = this[0];
                if (i)
                    return i.getClientRects().length ? (a = i.getBoundingClientRect(),
                    t = i.ownerDocument,
                    n = t.documentElement,
                    r = t.defaultView,
                    {
                        top: a.top + r.pageYOffset - n.clientTop,
                        left: a.left + r.pageXOffset - n.clientLeft
                    }) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0], a = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === we.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                    t = this.offset(),
                    l(e[0], "html") || (a = e.offset()),
                    a = {
                        top: a.top + we.css(e[0], "borderTopWidth", !0),
                        left: a.left + we.css(e[0], "borderLeftWidth", !0)
                    }),
                    {
                        top: t.top - a.top - we.css(n, "marginTop", !0),
                        left: t.left - a.left - we.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === we.css(e, "position"); )
                        e = e.offsetParent;
                    return e || tt
                })
            }
        }),
        we.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            we.fn[e] = function(a) {
                return Oe(this, function(e, a, r) {
                    var i;
                    return we.isWindow(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === r ? i ? i[t] : e[a] : void (i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : e[a] = r)
                }, e, a, arguments.length)
            }
        }),
        we.each(["top", "left"], function(e, t) {
            we.cssHooks[t] = B(ve.pixelPosition, function(e, n) {
                if (n)
                    return n = q(e, t),
                    dt.test(n) ? we(e).position()[t] + "px" : n
            })
        }),
        we.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            we.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, a) {
                we.fn[a] = function(r, i) {
                    var s = arguments.length && (n || "boolean" != typeof r)
                      , o = n || (r === !0 || i === !0 ? "margin" : "border");
                    return Oe(this, function(t, n, r) {
                        var i;
                        return we.isWindow(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                        Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? we.css(t, n, o) : we.style(t, n, r, o)
                    }, t, s ? r : void 0, s)
                }
            })
        }),
        we.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, a) {
                return this.on(t, e, n, a)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        we.holdReady = function(e) {
            e ? we.readyWait++ : we.ready(!0)
        }
        ,
        we.isArray = Array.isArray,
        we.parseJSON = JSON.parse,
        we.nodeName = l,
        a = [],
        r = function() {
            return we
        }
        .apply(t, a),
        !(void 0 !== r && (e.exports = r));
        var Qt = n.jQuery
          , Zt = n.$;
        return we.noConflict = function(e) {
            return n.$ === we && (n.$ = Zt),
            e && n.jQuery === we && (n.jQuery = Qt),
            we
        }
        ,
        i || (n.jQuery = n.$ = we),
        we
    })
}
, function(e, t) {
    "use strict";
    var n = window.navigator.userAgent
      , a = {
        qurl: {
            wwwurl: "https://itunes.apple.com/cn/app/id1345734861",
            apkurl: "https://itunes.apple.com/cn/app/id1345734861",
            iosurl: "https://itunes.apple.com/cn/app/id1345734861",
            yyburl: "https://itunes.apple.com/cn/app/id1345734861"
        },
        qvendor: {
            mobile: /AppleWebKit.*Mobile.*/.test(n),
            android: /android/gi.test(n),
            ios: /(iphone|ipad|ipod)/gi.test(n),
            iphone: /iphone/gi.test(n),
            ipad: /ipad/gi.test(n),
            ipod: /ipod/gi.test(n),
            weixin: /micromessenger/gi.test(n),
            qq: / qq/gi.test(n),
            qqb: /mqqbrowser/gi.test(n),
            weibo: /weibo/gi.test(n)
        },
        qsearch: function(e) {
            var t, n, a, r, i = location.search;
            if (i && (i = i.substr(1)))
                for (n = i.split("&"),
                a = 0; a < n.length; a++)
                    r = n[a].split("="),
                    r && r[0] === e && (t = r[1]);
            return t
        },
        qmask: {
            show: function(e) {
                var t = "https://img.baidu.com/static/img/qmask/qmask-download.png"
                  , n = "https://img.baidu.com/static/img/qmask/qmask-open.png"
                  , a = e ? n : t;
                $(".qmask").find("img").attr("src", a).end().show()
            },
            hide: function() {
                $(".qmask").find("img").attr("src", "").end().hide()
            },
            init: function() {
                $("body").append('<div class="qmask"><img></div>'),
                $(".qmask").css({
                    display: "none",
                    position: "fixed",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    margin: "0 auto",
                    "text-align": "center",
                    "background-color": "rgba(255, 255, 255, 0.9)",
                    "z-index": "1200",
                    cursor: "pointer"
                }),
                $(".qmask img").css({
                    width: "10rem",
                    "margin-top": "3rem",
                    "z-index": "1210"
                }),
                $(document).on("click", ".qmask", function() {
                    $(this).hide().find("img").attr("src", "")
                })
            }
        },
        download: function() {
            if (a.qvendor.mobile) {
                if (a.qvendor.weixin || a.qvendor.qq || a.qvendor.qqb)
                    return a.qvendor.ios && (location.href = a.qurl.yyburl),
                    void (a.qvendor.android && (location.href = a.qurl.yyburl));
                if (a.qvendor.weibo)
                    return a.qvendor.ios && a.qmask.show(),
                    void (a.qvendor.android && (location.href = a.qurl.apkurl));
                a.qvendor.ios && (location.href = a.qurl.iosurl),
                a.qvendor.android && (location.href = a.qurl.apkurl)
            } else
                location.href = a.qurl.wwwurl
        }
    };
    e.exports = a
}
, function(e, t) {
    "use strict";
    var n = window.wx;
    e.exports = {
        init: function(e, t, a, r) {
            e.ajax({
                url: "https://luck.baidu.com/weixin/weixinshare.ashx",
                type: "post",
                data: {
                    url: encodeURIComponent(window.location.href.split("#")[0])
                },
                success: function(e) {
                    n.config({
                        debug: !1,
                        appId: "wx8d6cb27c291ee266",
                        timestamp: e.TimeStamp,
                        nonceStr: e.Nonce,
                        signature: e.Signature,
                        jsApiList: ["checkJsApi", "onMenuShareAppMessage", "onMenuShareTimeline", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
                    })
                }
            }),
            n.ready(function() {
                n.checkJsApi({
                    jsApiList: ["getNetworkType", "previewImage"]
                }),
                n.onMenuShareAppMessage({
                    title: t,
                    desc: a,
                    link: r,
                    imgUrl: "https://www.baidu.com/img/logo/96.png",
                    type: "",
                    dataUrl: "",
                    success: function() {},
                    cancel: function() {}
                }),
                n.onMenuShareTimeline({
                    title: t,
                    link: r,
                    imgUrl: "https://www.baidu.com/img/logo/96.png",
                    success: function() {},
                    cancel: function() {}
                }),
                n.onMenuShareQQ({
                    title: t,
                    desc: a,
                    link: r,
                    imgUrl: "https://www.baidu.com/img/logo/96.png",
                    success: function() {},
                    cancel: function() {}
                }),
                n.onMenuShareWeibo({
                    title: t,
                    desc: a,
                    link: r,
                    imgUrl: "https://www.baidu.com/img/logo/96.png",
                    success: function() {},
                    cancel: function() {}
                }),
                n.onMenuShareQZone({
                    title: t,
                    desc: a,
                    link: r,
                    imgUrl: "https://www.baidu.com/img/logo/96.png",
                    success: function() {},
                    cancel: function() {}
                })
            })
        }
    }
}
, , function(e, t, n) {
    "use strict";
    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    function r() {
        new d.default(".swiper-container",{
            pagination: ".swiper-pagination",
            paginationClickable: !0,
            direction: "vertical",
            grabCursor: !0,
            loop: !0,
            preloadImages: !1
        })
    }
    function i() {
        (0,
        o.default)(".download").on("click", function() {
            u.default.qvendor.android && (location.href = "baidu.scheme://"),
            u.default.qvendor.ios && (location.href = "ngwre://"),
            setTimeout(function() {
                u.default.download()
            }, 500)
        })
    }
    var s = n(8)
      , o = a(s)
      , l = n(9)
      , u = a(l)
      , p = n(13)
      , d = a(p)
      , c = n(10)
      , f = a(c);
    n(14);
    var h = {
        pagetite: "牛股王",
        sharetitle: "牛股王:跟牛人 选牛股",
        shareContent: "高收益牛人云集，手机课程直播，A股/港美股超低佣金交易。",
        shareUrl: "https://h5.baidu.com/luodi/ngw/download/index.html"
    };
    (0,
    o.default)(function() {
        /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) || (window.innerWidth >= 1100 ? window.location : window.onresize = function() {
            
        }
        ),
        i(),
        r(),
        f.default.init(o.default, h.sharetitle, h.shareContent, h.shareUrl)
    })
}
, function(e, t, n) {
    !function() {
        "use strict";
        function e(e) {
            e.fn.swiper = function(t) {
                var a;
                return e(this).each(function() {
                    var e = new n(this,t);
                    a || (a = e)
                }),
                a
            }
        }
        var t, n = function(e, r) {
            function i(e) {
                return Math.floor(e)
            }
            function s() {
                var e = T.params.autoplay
                  , t = T.slides.eq(T.activeIndex);
                t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || T.params.autoplay),
                T.autoplayTimeoutId = setTimeout(function() {
                    T.params.loop ? (T.fixLoop(),
                    T._slideNext(),
                    T.emit("onAutoplay", T)) : T.isEnd ? r.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0),
                    T.emit("onAutoplay", T)) : (T._slideNext(),
                    T.emit("onAutoplay", T))
                }, e)
            }
            function o(e, n) {
                var a = t(e.target);
                if (!a.is(n))
                    if ("string" == typeof n)
                        a = a.parents(n);
                    else if (n.nodeType) {
                        var r;
                        return a.parents().each(function(e, t) {
                            t === n && (r = n)
                        }),
                        r ? n : void 0
                    }
                if (0 !== a.length)
                    return a[0]
            }
            function l(e, t) {
                t = t || {};
                var n = window.MutationObserver || window.WebkitMutationObserver
                  , a = new n(function(e) {
                    e.forEach(function(e) {
                        T.onResize(!0),
                        T.emit("onObserverUpdate", T, e)
                    })
                }
                );
                a.observe(e, {
                    attributes: "undefined" == typeof t.attributes || t.attributes,
                    childList: "undefined" == typeof t.childList || t.childList,
                    characterData: "undefined" == typeof t.characterData || t.characterData
                }),
                T.observers.push(a)
            }
            function u(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === t || !T.isHorizontal() && 40 === t))
                    return !1;
                if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === t || !T.isHorizontal() && 38 === t))
                    return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var n = !1;
                        if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length)
                            return;
                        var a = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        }
                          , r = window.innerWidth
                          , i = window.innerHeight
                          , s = T.container.offset();
                        T.rtl && (s.left = s.left - T.container[0].scrollLeft);
                        for (var o = [[s.left, s.top], [s.left + T.width, s.top], [s.left, s.top + T.height], [s.left + T.width, s.top + T.height]], l = 0; l < o.length; l++) {
                            var u = o[l];
                            u[0] >= a.left && u[0] <= a.left + r && u[1] >= a.top && u[1] <= a.top + i && (n = !0)
                        }
                        if (!n)
                            return
                    }
                    T.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    (39 === t && !T.rtl || 37 === t && T.rtl) && T.slideNext(),
                    (37 === t && !T.rtl || 39 === t && T.rtl) && T.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    40 === t && T.slideNext(),
                    38 === t && T.slidePrev()),
                    T.emit("onKeyPress", T, t)
                }
            }
            function p() {
                var e = "onwheel"
                  , t = e in document;
                if (!t) {
                    var n = document.createElement("div");
                    n.setAttribute(e, "return;"),
                    t = "function" == typeof n[e]
                }
                return !t && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (t = document.implementation.hasFeature("Events.wheel", "3.0")),
                t
            }
            function d(e) {
                var t = 10
                  , n = 40
                  , a = 800
                  , r = 0
                  , i = 0
                  , s = 0
                  , o = 0;
                return "detail"in e && (i = e.detail),
                "wheelDelta"in e && (i = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (r = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (r = i,
                i = 0),
                s = r * t,
                o = i * t,
                "deltaY"in e && (o = e.deltaY),
                "deltaX"in e && (s = e.deltaX),
                (s || o) && e.deltaMode && (1 === e.deltaMode ? (s *= n,
                o *= n) : (s *= a,
                o *= a)),
                s && !r && (r = s < 1 ? -1 : 1),
                o && !i && (i = o < 1 ? -1 : 1),
                {
                    spinX: r,
                    spinY: i,
                    pixelX: s,
                    pixelY: o
                }
            }
            function c(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = 0
                  , n = T.rtl ? -1 : 1
                  , a = d(e);
                if (T.params.mousewheelForceToAxis)
                    if (T.isHorizontal()) {
                        if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY)))
                            return;
                        t = a.pixelX * n
                    } else {
                        if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX)))
                            return;
                        t = a.pixelY
                    }
                else
                    t = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * n : -a.pixelY;
                if (0 !== t) {
                    if (T.params.mousewheelInvert && (t = -t),
                    T.params.freeMode) {
                        var r = T.getWrapperTranslate() + t * T.params.mousewheelSensitivity
                          , i = T.isBeginning
                          , s = T.isEnd;
                        if (r >= T.minTranslate() && (r = T.minTranslate()),
                        r <= T.maxTranslate() && (r = T.maxTranslate()),
                        T.setWrapperTransition(0),
                        T.setWrapperTranslate(r),
                        T.updateProgress(),
                        T.updateActiveIndex(),
                        (!i && T.isBeginning || !s && T.isEnd) && T.updateClasses(),
                        T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout),
                        T.mousewheel.timeout = setTimeout(function() {
                            T.slideReset()
                        }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(),
                        T.emit("onScroll", T, e),
                        T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(),
                        0 === r || r === T.maxTranslate())
                            return
                    } else {
                        if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60)
                            if (t < 0)
                                if (T.isEnd && !T.params.loop || T.animating) {
                                    if (T.params.mousewheelReleaseOnEdges)
                                        return !0
                                } else
                                    T.slideNext(),
                                    T.emit("onScroll", T, e);
                            else if (T.isBeginning && !T.params.loop || T.animating) {
                                if (T.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                T.slidePrev(),
                                T.emit("onScroll", T, e);
                        T.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    !1
                }
            }
            function f(e, n) {
                e = t(e);
                var a, r, i, s = T.rtl ? -1 : 1;
                a = e.attr("data-swiper-parallax") || "0",
                r = e.attr("data-swiper-parallax-x"),
                i = e.attr("data-swiper-parallax-y"),
                r || i ? (r = r || "0",
                i = i || "0") : T.isHorizontal() ? (r = a,
                i = "0") : (i = a,
                r = "0"),
                r = r.indexOf("%") >= 0 ? parseInt(r, 10) * n * s + "%" : r * n * s + "px",
                i = i.indexOf("%") >= 0 ? parseInt(i, 10) * n + "%" : i * n + "px",
                e.transform("translate3d(" + r + ", " + i + ",0px)")
            }
            function h(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                e
            }
            if (!(this instanceof n))
                return new n(e,r);
            var m = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            }
              , g = r && r.virtualTranslate;
            r = r || {};
            var v = {};
            for (var y in r)
                if ("object" != typeof r[y] || null === r[y] || (r[y].nodeType || r[y] === window || r[y] === document || "undefined" != typeof a && r[y]instanceof a || "undefined" != typeof jQuery && r[y]instanceof jQuery))
                    v[y] = r[y];
                else {
                    v[y] = {};
                    for (var w in r[y])
                        v[y][w] = r[y][w]
                }
            for (var x in m)
                if ("undefined" == typeof r[x])
                    r[x] = m[x];
                else if ("object" == typeof r[x])
                    for (var b in m[x])
                        "undefined" == typeof r[x][b] && (r[x][b] = m[x][b]);
            var T = this;
            if (T.params = r,
            T.originalParams = v,
            T.classNames = [],
            "undefined" != typeof t && "undefined" != typeof a && (t = a),
            ("undefined" != typeof t || (t = "undefined" == typeof a ? window.Dom7 || window.Zepto || window.jQuery : a)) && (T.$ = t,
            T.currentBreakpoint = void 0,
            T.getActiveBreakpoint = function() {
                if (!T.params.breakpoints)
                    return !1;
                var e, t = !1, n = [];
                for (e in T.params.breakpoints)
                    T.params.breakpoints.hasOwnProperty(e) && n.push(e);
                n.sort(function(e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
                for (var a = 0; a < n.length; a++)
                    e = n[a],
                    e >= window.innerWidth && !t && (t = e);
                return t || "max"
            }
            ,
            T.setBreakpoint = function() {
                var e = T.getActiveBreakpoint();
                if (e && T.currentBreakpoint !== e) {
                    var t = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams
                      , n = T.params.loop && t.slidesPerView !== T.params.slidesPerView;
                    for (var a in t)
                        T.params[a] = t[a];
                    T.currentBreakpoint = e,
                    n && T.destroyLoop && T.reLoop(!0)
                }
            }
            ,
            T.params.breakpoints && T.setBreakpoint(),
            T.container = t(e),
            0 !== T.container.length)) {
                if (T.container.length > 1) {
                    var C = [];
                    return T.container.each(function() {
                        C.push(new n(this,r))
                    }),
                    C
                }
                T.container[0].swiper = T,
                T.container.data("swiper", T),
                T.classNames.push(T.params.containerModifierClass + T.params.direction),
                T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"),
                T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"),
                T.params.slidesPerColumn = 1),
                T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"),
                (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0),
                T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0),
                ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0,
                T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"),
                "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect),
                "cube" === T.params.effect && (T.params.resistanceRatio = 0,
                T.params.slidesPerView = 1,
                T.params.slidesPerColumn = 1,
                T.params.slidesPerGroup = 1,
                T.params.centeredSlides = !1,
                T.params.spaceBetween = 0,
                T.params.virtualTranslate = !0),
                "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1,
                T.params.slidesPerColumn = 1,
                T.params.slidesPerGroup = 1,
                T.params.watchSlidesProgress = !0,
                T.params.spaceBetween = 0,
                "undefined" == typeof g && (T.params.virtualTranslate = !0)),
                T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1),
                T.wrapper = T.container.children("." + T.params.wrapperClass),
                T.params.pagination && (T.paginationContainer = t(T.params.pagination),
                T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)),
                "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1,
                T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)),
                (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = t(T.params.nextButton),
                T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))),
                T.params.prevButton && (T.prevButton = t(T.params.prevButton),
                T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))),
                T.isHorizontal = function() {
                    return "horizontal" === T.params.direction
                }
                ,
                T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")),
                T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"),
                T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")),
                T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"),
                T.device.android && T.classNames.push(T.params.containerModifierClass + "android"),
                T.container.addClass(T.classNames.join(" ")),
                T.translate = 0,
                T.progress = 0,
                T.velocity = 0,
                T.lockSwipeToNext = function() {
                    T.params.allowSwipeToNext = !1,
                    T.params.allowSwipeToPrev === !1 && T.params.grabCursor && T.unsetGrabCursor()
                }
                ,
                T.lockSwipeToPrev = function() {
                    T.params.allowSwipeToPrev = !1,
                    T.params.allowSwipeToNext === !1 && T.params.grabCursor && T.unsetGrabCursor()
                }
                ,
                T.lockSwipes = function() {
                    T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1,
                    T.params.grabCursor && T.unsetGrabCursor()
                }
                ,
                T.unlockSwipeToNext = function() {
                    T.params.allowSwipeToNext = !0,
                    T.params.allowSwipeToPrev === !0 && T.params.grabCursor && T.setGrabCursor()
                }
                ,
                T.unlockSwipeToPrev = function() {
                    T.params.allowSwipeToPrev = !0,
                    T.params.allowSwipeToNext === !0 && T.params.grabCursor && T.setGrabCursor()
                }
                ,
                T.unlockSwipes = function() {
                    T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0,
                    T.params.grabCursor && T.setGrabCursor()
                }
                ,
                T.setGrabCursor = function(e) {
                    T.container[0].style.cursor = "move",
                    T.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                    T.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                    T.container[0].style.cursor = e ? "grabbing" : "grab"
                }
                ,
                T.unsetGrabCursor = function() {
                    T.container[0].style.cursor = ""
                }
                ,
                T.params.grabCursor && T.setGrabCursor(),
                T.imagesToLoad = [],
                T.imagesLoaded = 0,
                T.loadImage = function(e, t, n, a, r, i) {
                    function s() {
                        i && i()
                    }
                    var o;
                    e.complete && r ? s() : t ? (o = new window.Image,
                    o.onload = s,
                    o.onerror = s,
                    a && (o.sizes = a),
                    n && (o.srcset = n),
                    t && (o.src = t)) : s()
                }
                ,
                T.preloadImages = function() {
                    function e() {
                        "undefined" != typeof T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++,
                        T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(),
                        T.emit("onImagesReady", T)))
                    }
                    T.imagesToLoad = T.container.find("img");
                    for (var t = 0; t < T.imagesToLoad.length; t++)
                        T.loadImage(T.imagesToLoad[t], T.imagesToLoad[t].currentSrc || T.imagesToLoad[t].getAttribute("src"), T.imagesToLoad[t].srcset || T.imagesToLoad[t].getAttribute("srcset"), T.imagesToLoad[t].sizes || T.imagesToLoad[t].getAttribute("sizes"), !0, e)
                }
                ,
                T.autoplayTimeoutId = void 0,
                T.autoplaying = !1,
                T.autoplayPaused = !1,
                T.startAutoplay = function() {
                    return "undefined" == typeof T.autoplayTimeoutId && (!!T.params.autoplay && (!T.autoplaying && (T.autoplaying = !0,
                    T.emit("onAutoplayStart", T),
                    void s())))
                }
                ,
                T.stopAutoplay = function(e) {
                    T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                    T.autoplaying = !1,
                    T.autoplayTimeoutId = void 0,
                    T.emit("onAutoplayStop", T))
                }
                ,
                T.pauseAutoplay = function(e) {
                    T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                    T.autoplayPaused = !0,
                    0 === e ? (T.autoplayPaused = !1,
                    s()) : T.wrapper.transitionEnd(function() {
                        T && (T.autoplayPaused = !1,
                        T.autoplaying ? s() : T.stopAutoplay())
                    }))
                }
                ,
                T.minTranslate = function() {
                    return -T.snapGrid[0]
                }
                ,
                T.maxTranslate = function() {
                    return -T.snapGrid[T.snapGrid.length - 1]
                }
                ,
                T.updateAutoHeight = function() {
                    var e, t = [], n = 0;
                    if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(T.params.slidesPerView); e++) {
                            var a = T.activeIndex + e;
                            if (a > T.slides.length)
                                break;
                            t.push(T.slides.eq(a)[0])
                        }
                    else
                        t.push(T.slides.eq(T.activeIndex)[0]);
                    for (e = 0; e < t.length; e++)
                        if ("undefined" != typeof t[e]) {
                            var r = t[e].offsetHeight;
                            n = r > n ? r : n
                        }
                    n && T.wrapper.css("height", n + "px")
                }
                ,
                T.updateContainerSize = function() {
                    var e, t;
                    e = "undefined" != typeof T.params.width ? T.params.width : T.container[0].clientWidth,
                    t = "undefined" != typeof T.params.height ? T.params.height : T.container[0].clientHeight,
                    0 === e && T.isHorizontal() || 0 === t && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10),
                    t = t - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10),
                    T.width = e,
                    T.height = t,
                    T.size = T.isHorizontal() ? T.width : T.height)
                }
                ,
                T.updateSlidesSize = function() {
                    T.slides = T.wrapper.children("." + T.params.slideClass),
                    T.snapGrid = [],
                    T.slidesGrid = [],
                    T.slidesSizesGrid = [];
                    var e, t = T.params.spaceBetween, n = -T.params.slidesOffsetBefore, a = 0, r = 0;
                    if ("undefined" != typeof T.size) {
                        "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * T.size),
                        T.virtualSize = -t,
                        T.rtl ? T.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : T.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var s;
                        T.params.slidesPerColumn > 1 && (s = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn,
                        "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (s = Math.max(s, T.params.slidesPerView * T.params.slidesPerColumn)));
                        var o, l = T.params.slidesPerColumn, u = s / l, p = u - (T.params.slidesPerColumn * u - T.slides.length);
                        for (e = 0; e < T.slides.length; e++) {
                            o = 0;
                            var d = T.slides.eq(e);
                            if (T.params.slidesPerColumn > 1) {
                                var c, f, h;
                                "column" === T.params.slidesPerColumnFill ? (f = Math.floor(e / l),
                                h = e - f * l,
                                (f > p || f === p && h === l - 1) && ++h >= l && (h = 0,
                                f++),
                                c = f + h * s / l,
                                d.css({
                                    "-webkit-box-ordinal-group": c,
                                    "-moz-box-ordinal-group": c,
                                    "-ms-flex-order": c,
                                    "-webkit-order": c,
                                    order: c
                                })) : (h = Math.floor(e / u),
                                f = e - h * u),
                                d.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== h && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", f).attr("data-swiper-row", h)
                            }
                            "none" !== d.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? d.outerWidth(!0) : d.outerHeight(!0),
                            T.params.roundLengths && (o = i(o))) : (o = (T.size - (T.params.slidesPerView - 1) * t) / T.params.slidesPerView,
                            T.params.roundLengths && (o = i(o)),
                            T.isHorizontal() ? T.slides[e].style.width = o + "px" : T.slides[e].style.height = o + "px"),
                            T.slides[e].swiperSlideSize = o,
                            T.slidesSizesGrid.push(o),
                            T.params.centeredSlides ? (n = n + o / 2 + a / 2 + t,
                            0 === a && 0 !== e && (n = n - T.size / 2 - t),
                            0 === e && (n = n - T.size / 2 - t),
                            Math.abs(n) < .001 && (n = 0),
                            r % T.params.slidesPerGroup === 0 && T.snapGrid.push(n),
                            T.slidesGrid.push(n)) : (r % T.params.slidesPerGroup === 0 && T.snapGrid.push(n),
                            T.slidesGrid.push(n),
                            n = n + o + t),
                            T.virtualSize += o + t,
                            a = o,
                            r++)
                        }
                        T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                        var m;
                        if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                            width: T.virtualSize + T.params.spaceBetween + "px"
                        }),
                        T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                            width: T.virtualSize + T.params.spaceBetween + "px"
                        }) : T.wrapper.css({
                            height: T.virtualSize + T.params.spaceBetween + "px"
                        })),
                        T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * s,
                        T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween,
                        T.isHorizontal() ? T.wrapper.css({
                            width: T.virtualSize + T.params.spaceBetween + "px"
                        }) : T.wrapper.css({
                            height: T.virtualSize + T.params.spaceBetween + "px"
                        }),
                        T.params.centeredSlides)) {
                            for (m = [],
                            e = 0; e < T.snapGrid.length; e++)
                                T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && m.push(T.snapGrid[e]);
                            T.snapGrid = m
                        }
                        if (!T.params.centeredSlides) {
                            for (m = [],
                            e = 0; e < T.snapGrid.length; e++)
                                T.snapGrid[e] <= T.virtualSize - T.size && m.push(T.snapGrid[e]);
                            T.snapGrid = m,
                            Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                        }
                        0 === T.snapGrid.length && (T.snapGrid = [0]),
                        0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                            marginLeft: t + "px"
                        }) : T.slides.css({
                            marginRight: t + "px"
                        }) : T.slides.css({
                            marginBottom: t + "px"
                        })),
                        T.params.watchSlidesProgress && T.updateSlidesOffset()
                    }
                }
                ,
                T.updateSlidesOffset = function() {
                    for (var e = 0; e < T.slides.length; e++)
                        T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft : T.slides[e].offsetTop
                }
                ,
                T.currentSlidesPerView = function() {
                    var e, t, n = 1;
                    if (T.params.centeredSlides) {
                        var a, r = T.slides[T.activeIndex].swiperSlideSize;
                        for (e = T.activeIndex + 1; e < T.slides.length; e++)
                            T.slides[e] && !a && (r += T.slides[e].swiperSlideSize,
                            n++,
                            r > T.size && (a = !0));
                        for (t = T.activeIndex - 1; t >= 0; t--)
                            T.slides[t] && !a && (r += T.slides[t].swiperSlideSize,
                            n++,
                            r > T.size && (a = !0))
                    } else
                        for (e = T.activeIndex + 1; e < T.slides.length; e++)
                            T.slidesGrid[e] - T.slidesGrid[T.activeIndex] < T.size && n++;
                    return n
                }
                ,
                T.updateSlidesProgress = function(e) {
                    if ("undefined" == typeof e && (e = T.translate || 0),
                    0 !== T.slides.length) {
                        "undefined" == typeof T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                        var t = -e;
                        T.rtl && (t = e),
                        T.slides.removeClass(T.params.slideVisibleClass);
                        for (var n = 0; n < T.slides.length; n++) {
                            var a = T.slides[n]
                              , r = (t + (T.params.centeredSlides ? T.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + T.params.spaceBetween);
                            if (T.params.watchSlidesVisibility) {
                                var i = -(t - a.swiperSlideOffset)
                                  , s = i + T.slidesSizesGrid[n]
                                  , o = i >= 0 && i < T.size || s > 0 && s <= T.size || i <= 0 && s >= T.size;
                                o && T.slides.eq(n).addClass(T.params.slideVisibleClass)
                            }
                            a.progress = T.rtl ? -r : r
                        }
                    }
                }
                ,
                T.updateProgress = function(e) {
                    "undefined" == typeof e && (e = T.translate || 0);
                    var t = T.maxTranslate() - T.minTranslate()
                      , n = T.isBeginning
                      , a = T.isEnd;
                    0 === t ? (T.progress = 0,
                    T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / t,
                    T.isBeginning = T.progress <= 0,
                    T.isEnd = T.progress >= 1),
                    T.isBeginning && !n && T.emit("onReachBeginning", T),
                    T.isEnd && !a && T.emit("onReachEnd", T),
                    T.params.watchSlidesProgress && T.updateSlidesProgress(e),
                    T.emit("onProgress", T, T.progress)
                }
                ,
                T.updateActiveIndex = function() {
                    var e, t, n, a = T.rtl ? T.translate : -T.translate;
                    for (t = 0; t < T.slidesGrid.length; t++)
                        "undefined" != typeof T.slidesGrid[t + 1] ? a >= T.slidesGrid[t] && a < T.slidesGrid[t + 1] - (T.slidesGrid[t + 1] - T.slidesGrid[t]) / 2 ? e = t : a >= T.slidesGrid[t] && a < T.slidesGrid[t + 1] && (e = t + 1) : a >= T.slidesGrid[t] && (e = t);
                    T.params.normalizeSlideIndex && (e < 0 || "undefined" == typeof e) && (e = 0),
                    n = Math.floor(e / T.params.slidesPerGroup),
                    n >= T.snapGrid.length && (n = T.snapGrid.length - 1),
                    e !== T.activeIndex && (T.snapIndex = n,
                    T.previousIndex = T.activeIndex,
                    T.activeIndex = e,
                    T.updateClasses(),
                    T.updateRealIndex())
                }
                ,
                T.updateRealIndex = function() {
                    T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10)
                }
                ,
                T.updateClasses = function() {
                    T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
                    var e = T.slides.eq(T.activeIndex);
                    e.addClass(T.params.slideActiveClass),
                    r.loop && (e.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
                    var n = e.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                    T.params.loop && 0 === n.length && (n = T.slides.eq(0),
                    n.addClass(T.params.slideNextClass));
                    var a = e.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                    if (T.params.loop && 0 === a.length && (a = T.slides.eq(-1),
                    a.addClass(T.params.slidePrevClass)),
                    r.loop && (n.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass),
                    a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)),
                    T.paginationContainer && T.paginationContainer.length > 0) {
                        var i, s = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                        if (T.params.loop ? (i = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup),
                        i > T.slides.length - 1 - 2 * T.loopedSlides && (i -= T.slides.length - 2 * T.loopedSlides),
                        i > s - 1 && (i -= s),
                        i < 0 && "bullets" !== T.params.paginationType && (i = s + i)) : i = "undefined" != typeof T.snapIndex ? T.snapIndex : T.activeIndex || 0,
                        "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass),
                        T.paginationContainer.length > 1 ? T.bullets.each(function() {
                            t(this).index() === i && t(this).addClass(T.params.bulletActiveClass)
                        }) : T.bullets.eq(i).addClass(T.params.bulletActiveClass)),
                        "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(i + 1),
                        T.paginationContainer.find("." + T.params.paginationTotalClass).text(s)),
                        "progress" === T.params.paginationType) {
                            var o = (i + 1) / s
                              , l = o
                              , u = 1;
                            T.isHorizontal() || (u = o,
                            l = 1),
                            T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + u + ")").transition(T.params.speed)
                        }
                        "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, i + 1, s)),
                        T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                    }
                    T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass),
                    T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass),
                    T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))),
                    T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass),
                    T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass),
                    T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
                }
                ,
                T.updatePagination = function() {
                    if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === T.params.paginationType) {
                            for (var t = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, n = 0; n < t; n++)
                                e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, n, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                            T.paginationContainer.html(e),
                            T.bullets = T.paginationContainer.find("." + T.params.bulletClass),
                            T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                        }
                        "fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>',
                        T.paginationContainer.html(e)),
                        "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>',
                        T.paginationContainer.html(e)),
                        "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                    }
                }
                ,
                T.update = function(e) {
                    function t() {
                        T.rtl ? -T.translate : T.translate;
                        n = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()),
                        T.setWrapperTranslate(n),
                        T.updateActiveIndex(),
                        T.updateClasses()
                    }
                    if (T) {
                        T.updateContainerSize(),
                        T.updateSlidesSize(),
                        T.updateProgress(),
                        T.updatePagination(),
                        T.updateClasses(),
                        T.params.scrollbar && T.scrollbar && T.scrollbar.set();
                        var n;
                        if (e) {
                            var a;
                            T.controller && T.controller.spline && (T.controller.spline = void 0),
                            T.params.freeMode ? (t(),
                            T.params.autoHeight && T.updateAutoHeight()) : (a = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0),
                            a || t())
                        } else
                            T.params.autoHeight && T.updateAutoHeight()
                    }
                }
                ,
                T.onResize = function(e) {
                    T.params.onBeforeResize && T.params.onBeforeResize(T),
                    T.params.breakpoints && T.setBreakpoint();
                    var t = T.params.allowSwipeToPrev
                      , n = T.params.allowSwipeToNext;
                    T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0,
                    T.updateContainerSize(),
                    T.updateSlidesSize(),
                    ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(),
                    T.params.scrollbar && T.scrollbar && T.scrollbar.set(),
                    T.controller && T.controller.spline && (T.controller.spline = void 0);
                    var a = !1;
                    if (T.params.freeMode) {
                        var r = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                        T.setWrapperTranslate(r),
                        T.updateActiveIndex(),
                        T.updateClasses(),
                        T.params.autoHeight && T.updateAutoHeight()
                    } else
                        T.updateClasses(),
                        a = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                    T.params.lazyLoading && !a && T.lazy && T.lazy.load(),
                    T.params.allowSwipeToPrev = t,
                    T.params.allowSwipeToNext = n,
                    T.params.onAfterResize && T.params.onAfterResize(T)
                }
                ,
                T.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                window.navigator.pointerEnabled ? T.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }),
                T.touchEvents = {
                    start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start,
                    move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move,
                    end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end
                },
                (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction),
                T.initEvents = function(e) {
                    var t = e ? "off" : "on"
                      , n = e ? "removeEventListener" : "addEventListener"
                      , a = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0]
                      , i = T.support.touch ? a : document
                      , s = !!T.params.nested;
                    if (T.browser.ie)
                        a[n](T.touchEvents.start, T.onTouchStart, !1),
                        i[n](T.touchEvents.move, T.onTouchMove, s),
                        i[n](T.touchEvents.end, T.onTouchEnd, !1);
                    else {
                        if (T.support.touch) {
                            var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            a[n](T.touchEvents.start, T.onTouchStart, o),
                            a[n](T.touchEvents.move, T.onTouchMove, s),
                            a[n](T.touchEvents.end, T.onTouchEnd, o)
                        }
                        (r.simulateTouch && !T.device.ios && !T.device.android || r.simulateTouch && !T.support.touch && T.device.ios) && (a[n]("mousedown", T.onTouchStart, !1),
                        document[n]("mousemove", T.onTouchMove, s),
                        document[n]("mouseup", T.onTouchEnd, !1))
                    }
                    window[n]("resize", T.onResize),
                    T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[t]("click", T.onClickNext),
                    T.params.a11y && T.a11y && T.nextButton[t]("keydown", T.a11y.onEnterKey)),
                    T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[t]("click", T.onClickPrev),
                    T.params.a11y && T.a11y && T.prevButton[t]("keydown", T.a11y.onEnterKey)),
                    T.params.pagination && T.params.paginationClickable && (T.paginationContainer[t]("click", "." + T.params.bulletClass, T.onClickIndex),
                    T.params.a11y && T.a11y && T.paginationContainer[t]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)),
                    (T.params.preventClicks || T.params.preventClicksPropagation) && a[n]("click", T.preventClicks, !0)
                }
                ,
                T.attachEvents = function() {
                    T.initEvents()
                }
                ,
                T.detachEvents = function() {
                    T.initEvents(!0)
                }
                ,
                T.allowClick = !0,
                T.preventClicks = function(e) {
                    T.allowClick || (T.params.preventClicks && e.preventDefault(),
                    T.params.preventClicksPropagation && T.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation()))
                }
                ,
                T.onClickNext = function(e) {
                    e.preventDefault(),
                    T.isEnd && !T.params.loop || T.slideNext()
                }
                ,
                T.onClickPrev = function(e) {
                    e.preventDefault(),
                    T.isBeginning && !T.params.loop || T.slidePrev()
                }
                ,
                T.onClickIndex = function(e) {
                    e.preventDefault();
                    var n = t(this).index() * T.params.slidesPerGroup;
                    T.params.loop && (n += T.loopedSlides),
                    T.slideTo(n)
                }
                ,
                T.updateClickedSlide = function(e) {
                    var n = o(e, "." + T.params.slideClass)
                      , a = !1;
                    if (n)
                        for (var r = 0; r < T.slides.length; r++)
                            T.slides[r] === n && (a = !0);
                    if (!n || !a)
                        return T.clickedSlide = void 0,
                        void (T.clickedIndex = void 0);
                    if (T.clickedSlide = n,
                    T.clickedIndex = t(n).index(),
                    T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                        var i, s = T.clickedIndex, l = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;
                        if (T.params.loop) {
                            if (T.animating)
                                return;
                            i = parseInt(t(T.clickedSlide).attr("data-swiper-slide-index"), 10),
                            T.params.centeredSlides ? s < T.loopedSlides - l / 2 || s > T.slides.length - T.loopedSlides + l / 2 ? (T.fixLoop(),
                            s = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                            setTimeout(function() {
                                T.slideTo(s)
                            }, 0)) : T.slideTo(s) : s > T.slides.length - l ? (T.fixLoop(),
                            s = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + i + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                            setTimeout(function() {
                                T.slideTo(s)
                            }, 0)) : T.slideTo(s)
                        } else
                            T.slideTo(s)
                    }
                }
                ;
                var S, E, k, M, z, P, D, L, A, I, N = "input, select, textarea, button, video", H = Date.now(), q = [];
                T.animating = !1,
                T.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var B, O;
                T.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent),
                    B = "touchstart" === e.type,
                    B || !("which"in e) || 3 !== e.which) {
                        if (T.params.noSwiping && o(e, "." + T.params.noSwipingClass))
                            return void (T.allowClick = !0);
                        if (!T.params.swipeHandler || o(e, T.params.swipeHandler)) {
                            var n = T.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX
                              , a = T.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && n <= T.params.iOSEdgeSwipeThreshold)) {
                                if (S = !0,
                                E = !1,
                                k = !0,
                                z = void 0,
                                O = void 0,
                                T.touches.startX = n,
                                T.touches.startY = a,
                                M = Date.now(),
                                T.allowClick = !0,
                                T.updateContainerSize(),
                                T.swipeDirection = void 0,
                                T.params.threshold > 0 && (L = !1),
                                "touchstart" !== e.type) {
                                    var r = !0;
                                    t(e.target).is(N) && (r = !1),
                                    document.activeElement && t(document.activeElement).is(N) && document.activeElement.blur(),
                                    r && e.preventDefault()
                                }
                                T.emit("onTouchStart", T, e)
                            }
                        }
                    }
                }
                ,
                T.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent),
                    !B || "mousemove" !== e.type) {
                        if (e.preventedByNestedSwiper)
                            return T.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            void (T.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                        if (T.params.onlyExternal)
                            return T.allowClick = !1,
                            void (S && (T.touches.startX = T.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            T.touches.startY = T.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            M = Date.now()));
                        if (B && T.params.touchReleaseOnEdges && !T.params.loop)
                            if (T.isHorizontal()) {
                                if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate())
                                    return
                            } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate())
                                return;
                        if (B && document.activeElement && e.target === document.activeElement && t(e.target).is(N))
                            return E = !0,
                            void (T.allowClick = !1);
                        if (k && T.emit("onTouchMove", T, e),
                        !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (T.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            T.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            "undefined" == typeof z) {
                                var n;
                                T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? z = !1 : (n = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI,
                                z = T.isHorizontal() ? n > T.params.touchAngle : 90 - n > T.params.touchAngle)
                            }
                            if (z && T.emit("onTouchMoveOpposite", T, e),
                            "undefined" == typeof O && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (O = !0)),
                            S) {
                                if (z)
                                    return void (S = !1);
                                if (O) {
                                    T.allowClick = !1,
                                    T.emit("onSliderMove", T, e),
                                    e.preventDefault(),
                                    T.params.touchMoveStopPropagation && !T.params.nested && e.stopPropagation(),
                                    E || (r.loop && T.fixLoop(),
                                    D = T.getWrapperTranslate(),
                                    T.setWrapperTransition(0),
                                    T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                    T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()),
                                    I = !1,
                                    !T.params.grabCursor || T.params.allowSwipeToNext !== !0 && T.params.allowSwipeToPrev !== !0 || T.setGrabCursor(!0)),
                                    E = !0;
                                    var a = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;
                                    a *= T.params.touchRatio,
                                    T.rtl && (a = -a),
                                    T.swipeDirection = a > 0 ? "prev" : "next",
                                    P = a + D;
                                    var i = !0;
                                    if (a > 0 && P > T.minTranslate() ? (i = !1,
                                    T.params.resistance && (P = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + D + a, T.params.resistanceRatio))) : a < 0 && P < T.maxTranslate() && (i = !1,
                                    T.params.resistance && (P = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - D - a, T.params.resistanceRatio))),
                                    i && (e.preventedByNestedSwiper = !0),
                                    !T.params.allowSwipeToNext && "next" === T.swipeDirection && P < D && (P = D),
                                    !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && P > D && (P = D),
                                    T.params.threshold > 0) {
                                        if (!(Math.abs(a) > T.params.threshold || L))
                                            return void (P = D);
                                        if (!L)
                                            return L = !0,
                                            T.touches.startX = T.touches.currentX,
                                            T.touches.startY = T.touches.currentY,
                                            P = D,
                                            void (T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY)
                                    }
                                    T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(),
                                    T.params.freeMode && (0 === q.length && q.push({
                                        position: T.touches[T.isHorizontal() ? "startX" : "startY"],
                                        time: M
                                    }),
                                    q.push({
                                        position: T.touches[T.isHorizontal() ? "currentX" : "currentY"],
                                        time: (new window.Date).getTime()
                                    })),
                                    T.updateProgress(P),
                                    T.setWrapperTranslate(P))
                                }
                            }
                        }
                    }
                }
                ,
                T.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent),
                    k && T.emit("onTouchEnd", T, e),
                    k = !1,
                    S) {
                        T.params.grabCursor && E && S && (T.params.allowSwipeToNext === !0 || T.params.allowSwipeToPrev === !0) && T.setGrabCursor(!1);
                        var n = Date.now()
                          , a = n - M;
                        if (T.allowClick && (T.updateClickedSlide(e),
                        T.emit("onTap", T, e),
                        a < 300 && n - H > 300 && (A && clearTimeout(A),
                        A = setTimeout(function() {
                            T && (T.params.paginationHide && T.paginationContainer.length > 0 && !t(e.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass),
                            T.emit("onClick", T, e))
                        }, 300)),
                        a < 300 && n - H < 300 && (A && clearTimeout(A),
                        T.emit("onDoubleTap", T, e))),
                        H = Date.now(),
                        setTimeout(function() {
                            T && (T.allowClick = !0)
                        }, 0),
                        !S || !E || !T.swipeDirection || 0 === T.touches.diff || P === D)
                            return void (S = E = !1);
                        S = E = !1;
                        var r;
                        if (r = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -P,
                        T.params.freeMode) {
                            if (r < -T.minTranslate())
                                return void T.slideTo(T.activeIndex);
                            if (r > -T.maxTranslate())
                                return void (T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                            if (T.params.freeModeMomentum) {
                                if (q.length > 1) {
                                    var i = q.pop()
                                      , s = q.pop()
                                      , o = i.position - s.position
                                      , l = i.time - s.time;
                                    T.velocity = o / l,
                                    T.velocity = T.velocity / 2,
                                    Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0),
                                    (l > 150 || (new window.Date).getTime() - i.time > 300) && (T.velocity = 0)
                                } else
                                    T.velocity = 0;
                                T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio,
                                q.length = 0;
                                var u = 1e3 * T.params.freeModeMomentumRatio
                                  , p = T.velocity * u
                                  , d = T.translate + p;
                                T.rtl && (d = -d);
                                var c, f = !1, h = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                                if (d < T.maxTranslate())
                                    T.params.freeModeMomentumBounce ? (d + T.maxTranslate() < -h && (d = T.maxTranslate() - h),
                                    c = T.maxTranslate(),
                                    f = !0,
                                    I = !0) : d = T.maxTranslate();
                                else if (d > T.minTranslate())
                                    T.params.freeModeMomentumBounce ? (d - T.minTranslate() > h && (d = T.minTranslate() + h),
                                    c = T.minTranslate(),
                                    f = !0,
                                    I = !0) : d = T.minTranslate();
                                else if (T.params.freeModeSticky) {
                                    var m, g = 0;
                                    for (g = 0; g < T.snapGrid.length; g += 1)
                                        if (T.snapGrid[g] > -d) {
                                            m = g;
                                            break
                                        }
                                    d = Math.abs(T.snapGrid[m] - d) < Math.abs(T.snapGrid[m - 1] - d) || "next" === T.swipeDirection ? T.snapGrid[m] : T.snapGrid[m - 1],
                                    T.rtl || (d = -d)
                                }
                                if (0 !== T.velocity)
                                    u = T.rtl ? Math.abs((-d - T.translate) / T.velocity) : Math.abs((d - T.translate) / T.velocity);
                                else if (T.params.freeModeSticky)
                                    return void T.slideReset();
                                T.params.freeModeMomentumBounce && f ? (T.updateProgress(c),
                                T.setWrapperTransition(u),
                                T.setWrapperTranslate(d),
                                T.onTransitionStart(),
                                T.animating = !0,
                                T.wrapper.transitionEnd(function() {
                                    T && I && (T.emit("onMomentumBounce", T),
                                    T.setWrapperTransition(T.params.speed),
                                    T.setWrapperTranslate(c),
                                    T.wrapper.transitionEnd(function() {
                                        T && T.onTransitionEnd()
                                    }))
                                })) : T.velocity ? (T.updateProgress(d),
                                T.setWrapperTransition(u),
                                T.setWrapperTranslate(d),
                                T.onTransitionStart(),
                                T.animating || (T.animating = !0,
                                T.wrapper.transitionEnd(function() {
                                    T && T.onTransitionEnd()
                                }))) : T.updateProgress(d),
                                T.updateActiveIndex()
                            }
                            return void ((!T.params.freeModeMomentum || a >= T.params.longSwipesMs) && (T.updateProgress(),
                            T.updateActiveIndex()))
                        }
                        var v, y = 0, w = T.slidesSizesGrid[0];
                        for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup)
                            "undefined" != typeof T.slidesGrid[v + T.params.slidesPerGroup] ? r >= T.slidesGrid[v] && r < T.slidesGrid[v + T.params.slidesPerGroup] && (y = v,
                            w = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : r >= T.slidesGrid[v] && (y = v,
                            w = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                        var x = (r - T.slidesGrid[y]) / w;
                        if (a > T.params.longSwipesMs) {
                            if (!T.params.longSwipes)
                                return void T.slideTo(T.activeIndex);
                            "next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(y + T.params.slidesPerGroup) : T.slideTo(y)),
                            "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(y + T.params.slidesPerGroup) : T.slideTo(y))
                        } else {
                            if (!T.params.shortSwipes)
                                return void T.slideTo(T.activeIndex);
                            "next" === T.swipeDirection && T.slideTo(y + T.params.slidesPerGroup),
                            "prev" === T.swipeDirection && T.slideTo(y)
                        }
                    }
                }
                ,
                T._slideTo = function(e, t) {
                    return T.slideTo(e, t, !0, !0)
                }
                ,
                T.slideTo = function(e, t, n, a) {
                    "undefined" == typeof n && (n = !0),
                    "undefined" == typeof e && (e = 0),
                    e < 0 && (e = 0),
                    T.snapIndex = Math.floor(e / T.params.slidesPerGroup),
                    T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                    var r = -T.snapGrid[T.snapIndex];
                    if (T.params.autoplay && T.autoplaying && (a || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(t) : T.stopAutoplay()),
                    T.updateProgress(r),
                    T.params.normalizeSlideIndex)
                        for (var i = 0; i < T.slidesGrid.length; i++)
                            -Math.floor(100 * r) >= Math.floor(100 * T.slidesGrid[i]) && (e = i);
                    return !(!T.params.allowSwipeToNext && r < T.translate && r < T.minTranslate()) && (!(!T.params.allowSwipeToPrev && r > T.translate && r > T.maxTranslate() && (T.activeIndex || 0) !== e) && ("undefined" == typeof t && (t = T.params.speed),
                    T.previousIndex = T.activeIndex || 0,
                    T.activeIndex = e,
                    T.updateRealIndex(),
                    T.rtl && -r === T.translate || !T.rtl && r === T.translate ? (T.params.autoHeight && T.updateAutoHeight(),
                    T.updateClasses(),
                    "slide" !== T.params.effect && T.setWrapperTranslate(r),
                    !1) : (T.updateClasses(),
                    T.onTransitionStart(n),
                    0 === t || T.browser.lteIE9 ? (T.setWrapperTranslate(r),
                    T.setWrapperTransition(0),
                    T.onTransitionEnd(n)) : (T.setWrapperTranslate(r),
                    T.setWrapperTransition(t),
                    T.animating || (T.animating = !0,
                    T.wrapper.transitionEnd(function() {
                        T && T.onTransitionEnd(n)
                    }))),
                    !0)))
                }
                ,
                T.onTransitionStart = function(e) {
                    "undefined" == typeof e && (e = !0),
                    T.params.autoHeight && T.updateAutoHeight(),
                    T.lazy && T.lazy.onTransitionStart(),
                    e && (T.emit("onTransitionStart", T),
                    T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T),
                    T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
                }
                ,
                T.onTransitionEnd = function(e) {
                    T.animating = !1,
                    T.setWrapperTransition(0),
                    "undefined" == typeof e && (e = !0),
                    T.lazy && T.lazy.onTransitionEnd(),
                    e && (T.emit("onTransitionEnd", T),
                    T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T),
                    T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))),
                    T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex),
                    T.params.hashnav && T.hashnav && T.hashnav.setHash()
                }
                ,
                T.slideNext = function(e, t, n) {
                    if (T.params.loop) {
                        if (T.animating)
                            return !1;
                        T.fixLoop();
                        T.container[0].clientLeft;
                        return T.slideTo(T.activeIndex + T.params.slidesPerGroup, t, e, n)
                    }
                    return T.slideTo(T.activeIndex + T.params.slidesPerGroup, t, e, n)
                }
                ,
                T._slideNext = function(e) {
                    return T.slideNext(!0, e, !0)
                }
                ,
                T.slidePrev = function(e, t, n) {
                    if (T.params.loop) {
                        if (T.animating)
                            return !1;
                        T.fixLoop();
                        T.container[0].clientLeft;
                        return T.slideTo(T.activeIndex - 1, t, e, n)
                    }
                    return T.slideTo(T.activeIndex - 1, t, e, n)
                }
                ,
                T._slidePrev = function(e) {
                    return T.slidePrev(!0, e, !0)
                }
                ,
                T.slideReset = function(e, t, n) {
                    return T.slideTo(T.activeIndex, t, e)
                }
                ,
                T.disableTouchControl = function() {
                    return T.params.onlyExternal = !0,
                    !0
                }
                ,
                T.enableTouchControl = function() {
                    return T.params.onlyExternal = !1,
                    !0
                }
                ,
                T.setWrapperTransition = function(e, t) {
                    T.wrapper.transition(e),
                    "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e),
                    T.params.parallax && T.parallax && T.parallax.setTransition(e),
                    T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e),
                    T.params.control && T.controller && T.controller.setTransition(e, t),
                    T.emit("onSetTransition", T, e)
                }
                ,
                T.setWrapperTranslate = function(e, t, n) {
                    var a = 0
                      , r = 0
                      , s = 0;
                    T.isHorizontal() ? a = T.rtl ? -e : e : r = e,
                    T.params.roundLengths && (a = i(a),
                    r = i(r)),
                    T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + a + "px, " + r + "px, " + s + "px)") : T.wrapper.transform("translate(" + a + "px, " + r + "px)")),
                    T.translate = T.isHorizontal() ? a : r;
                    var o, l = T.maxTranslate() - T.minTranslate();
                    o = 0 === l ? 0 : (e - T.minTranslate()) / l,
                    o !== T.progress && T.updateProgress(e),
                    t && T.updateActiveIndex(),
                    "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate),
                    T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate),
                    T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate),
                    T.params.control && T.controller && T.controller.setTranslate(T.translate, n),
                    T.emit("onSetTranslate", T, T.translate)
                }
                ,
                T.getTranslate = function(e, t) {
                    var n, a, r, i;
                    return "undefined" == typeof t && (t = "x"),
                    T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (r = window.getComputedStyle(e, null),
                    window.WebKitCSSMatrix ? (a = r.transform || r.webkitTransform,
                    a.split(",").length > 6 && (a = a.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")),
                    i = new window.WebKitCSSMatrix("none" === a ? "" : a)) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                    n = i.toString().split(",")),
                    "x" === t && (a = window.WebKitCSSMatrix ? i.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
                    "y" === t && (a = window.WebKitCSSMatrix ? i.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
                    T.rtl && a && (a = -a),
                    a || 0)
                }
                ,
                T.getWrapperTranslate = function(e) {
                    return "undefined" == typeof e && (e = T.isHorizontal() ? "x" : "y"),
                    T.getTranslate(T.wrapper[0], e)
                }
                ,
                T.observers = [],
                T.initObservers = function() {
                    if (T.params.observeParents)
                        for (var e = T.container.parents(), t = 0; t < e.length; t++)
                            l(e[t]);
                    l(T.container[0], {
                        childList: !1
                    }),
                    l(T.wrapper[0], {
                        attributes: !1
                    })
                }
                ,
                T.disconnectObservers = function() {
                    for (var e = 0; e < T.observers.length; e++)
                        T.observers[e].disconnect();
                    T.observers = []
                }
                ,
                T.createLoop = function() {
                    T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                    var e = T.wrapper.children("." + T.params.slideClass);
                    "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = e.length),
                    T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10),
                    T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides,
                    T.loopedSlides > e.length && (T.loopedSlides = e.length);
                    var n, a = [], r = [];
                    for (e.each(function(n, i) {
                        var s = t(this);
                        n < T.loopedSlides && r.push(i),
                        n < e.length && n >= e.length - T.loopedSlides && a.push(i),
                        s.attr("data-swiper-slide-index", n)
                    }),
                    n = 0; n < r.length; n++)
                        T.wrapper.append(t(r[n].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                    for (n = a.length - 1; n >= 0; n--)
                        T.wrapper.prepend(t(a[n].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
                }
                ,
                T.destroyLoop = function() {
                    T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(),
                    T.slides.removeAttr("data-swiper-slide-index")
                }
                ,
                T.reLoop = function(e) {
                    var t = T.activeIndex - T.loopedSlides;
                    T.destroyLoop(),
                    T.createLoop(),
                    T.updateSlidesSize(),
                    e && T.slideTo(t + T.loopedSlides, 0, !1)
                }
                ,
                T.fixLoop = function() {
                    var e;
                    T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex,
                    e += T.loopedSlides,
                    T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides,
                    e += T.loopedSlides,
                    T.slideTo(e, 0, !1, !0))
                }
                ,
                T.appendSlide = function(e) {
                    if (T.params.loop && T.destroyLoop(),
                    "object" == typeof e && e.length)
                        for (var t = 0; t < e.length; t++)
                            e[t] && T.wrapper.append(e[t]);
                    else
                        T.wrapper.append(e);
                    T.params.loop && T.createLoop(),
                    T.params.observer && T.support.observer || T.update(!0)
                }
                ,
                T.prependSlide = function(e) {
                    T.params.loop && T.destroyLoop();
                    var t = T.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var n = 0; n < e.length; n++)
                            e[n] && T.wrapper.prepend(e[n]);
                        t = T.activeIndex + e.length
                    } else
                        T.wrapper.prepend(e);
                    T.params.loop && T.createLoop(),
                    T.params.observer && T.support.observer || T.update(!0),
                    T.slideTo(t, 0, !1)
                }
                ,
                T.removeSlide = function(e) {
                    T.params.loop && (T.destroyLoop(),
                    T.slides = T.wrapper.children("." + T.params.slideClass));
                    var t, n = T.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var a = 0; a < e.length; a++)
                            t = e[a],
                            T.slides[t] && T.slides.eq(t).remove(),
                            t < n && n--;
                        n = Math.max(n, 0)
                    } else
                        t = e,
                        T.slides[t] && T.slides.eq(t).remove(),
                        t < n && n--,
                        n = Math.max(n, 0);
                    T.params.loop && T.createLoop(),
                    T.params.observer && T.support.observer || T.update(!0),
                    T.params.loop ? T.slideTo(n + T.loopedSlides, 0, !1) : T.slideTo(n, 0, !1)
                }
                ,
                T.removeAllSlides = function() {
                    for (var e = [], t = 0; t < T.slides.length; t++)
                        e.push(t);
                    T.removeSlide(e)
                }
                ,
                T.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < T.slides.length; e++) {
                                var t = T.slides.eq(e)
                                  , n = t[0].swiperSlideOffset
                                  , a = -n;
                                T.params.virtualTranslate || (a -= T.translate);
                                var r = 0;
                                T.isHorizontal() || (r = a,
                                a = 0);
                                var i = T.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({
                                    opacity: i
                                }).transform("translate3d(" + a + "px, " + r + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (T.slides.transition(e),
                            T.params.virtualTranslate && 0 !== e) {
                                var t = !1;
                                T.slides.transitionEnd(function() {
                                    if (!t && T) {
                                        t = !0,
                                        T.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++)
                                            T.wrapper.trigger(e[n])
                                    }
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var e = 0; e < T.slides.length; e++) {
                                var n = T.slides.eq(e)
                                  , a = n[0].progress;
                                T.params.flip.limitRotation && (a = Math.max(Math.min(n[0].progress, 1), -1));
                                var r = n[0].swiperSlideOffset
                                  , i = -180 * a
                                  , s = i
                                  , o = 0
                                  , l = -r
                                  , u = 0;
                                if (T.isHorizontal() ? T.rtl && (s = -s) : (u = l,
                                l = 0,
                                o = -s,
                                s = 0),
                                n[0].style.zIndex = -Math.abs(Math.round(a)) + T.slides.length,
                                T.params.flip.slideShadows) {
                                    var p = T.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top")
                                      , d = T.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                    0 === p.length && (p = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                    n.append(p)),
                                    0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    n.append(d)),
                                    p.length && (p[0].style.opacity = Math.max(-a, 0)),
                                    d.length && (d[0].style.opacity = Math.max(a, 0))
                                }
                                n.transform("translate3d(" + l + "px, " + u + "px, 0px) rotateX(" + o + "deg) rotateY(" + s + "deg)")
                            }
                        },
                        setTransition: function(e) {
                            if (T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                            T.params.virtualTranslate && 0 !== e) {
                                var n = !1;
                                T.slides.eq(T.activeIndex).transitionEnd(function() {
                                    if (!n && T && t(this).hasClass(T.params.slideActiveClass)) {
                                        n = !0,
                                        T.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++)
                                            T.wrapper.trigger(e[a])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, n = 0;
                            T.params.cube.shadow && (T.isHorizontal() ? (e = T.wrapper.find(".swiper-cube-shadow"),
                            0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'),
                            T.wrapper.append(e)),
                            e.css({
                                height: T.width + "px"
                            })) : (e = T.container.find(".swiper-cube-shadow"),
                            0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'),
                            T.container.append(e))));
                            for (var a = 0; a < T.slides.length; a++) {
                                var r = T.slides.eq(a)
                                  , i = 90 * a
                                  , s = Math.floor(i / 360);
                                T.rtl && (i = -i,
                                s = Math.floor(-i / 360));
                                var o = Math.max(Math.min(r[0].progress, 1), -1)
                                  , l = 0
                                  , u = 0
                                  , p = 0;
                                a % 4 === 0 ? (l = 4 * -s * T.size,
                                p = 0) : (a - 1) % 4 === 0 ? (l = 0,
                                p = 4 * -s * T.size) : (a - 2) % 4 === 0 ? (l = T.size + 4 * s * T.size,
                                p = T.size) : (a - 3) % 4 === 0 && (l = -T.size,
                                p = 3 * T.size + 4 * T.size * s),
                                T.rtl && (l = -l),
                                T.isHorizontal() || (u = l,
                                l = 0);
                                var d = "rotateX(" + (T.isHorizontal() ? 0 : -i) + "deg) rotateY(" + (T.isHorizontal() ? i : 0) + "deg) translate3d(" + l + "px, " + u + "px, " + p + "px)";
                                if (o <= 1 && o > -1 && (n = 90 * a + 90 * o,
                                T.rtl && (n = 90 * -a - 90 * o)),
                                r.transform(d),
                                T.params.cube.slideShadows) {
                                    var c = T.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top")
                                      , f = T.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                    0 === c.length && (c = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                    r.append(c)),
                                    0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    r.append(f)),
                                    c.length && (c[0].style.opacity = Math.max(-o, 0)),
                                    f.length && (f[0].style.opacity = Math.max(o, 0))
                                }
                            }
                            if (T.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "transform-origin": "50% 50% -" + T.size / 2 + "px"
                            }),
                            T.params.cube.shadow)
                                if (T.isHorizontal())
                                    e.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90)
                                      , m = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2)
                                      , g = T.params.cube.shadowScale
                                      , v = T.params.cube.shadowScale / m
                                      , y = T.params.cube.shadowOffset;
                                    e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + y) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                                }
                            var w = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                            T.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (T.isHorizontal() ? 0 : n) + "deg) rotateY(" + (T.isHorizontal() ? -n : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                            T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = T.translate, n = T.isHorizontal() ? -e + T.width / 2 : -e + T.height / 2, a = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, r = T.params.coverflow.depth, i = 0, s = T.slides.length; i < s; i++) {
                                var o = T.slides.eq(i)
                                  , l = T.slidesSizesGrid[i]
                                  , u = o[0].swiperSlideOffset
                                  , p = (n - u - l / 2) / l * T.params.coverflow.modifier
                                  , d = T.isHorizontal() ? a * p : 0
                                  , c = T.isHorizontal() ? 0 : a * p
                                  , f = -r * Math.abs(p)
                                  , h = T.isHorizontal() ? 0 : T.params.coverflow.stretch * p
                                  , m = T.isHorizontal() ? T.params.coverflow.stretch * p : 0;
                                Math.abs(m) < .001 && (m = 0),
                                Math.abs(h) < .001 && (h = 0),
                                Math.abs(f) < .001 && (f = 0),
                                Math.abs(d) < .001 && (d = 0),
                                Math.abs(c) < .001 && (c = 0);
                                var g = "translate3d(" + m + "px," + h + "px," + f + "px)  rotateX(" + c + "deg) rotateY(" + d + "deg)";
                                if (o.transform(g),
                                o[0].style.zIndex = -Math.abs(Math.round(p)) + 1,
                                T.params.coverflow.slideShadows) {
                                    var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top")
                                      , y = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                    0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                    o.append(v)),
                                    0 === y.length && (y = t('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                    o.append(y)),
                                    v.length && (v[0].style.opacity = p > 0 ? p : 0),
                                    y.length && (y[0].style.opacity = -p > 0 ? -p : 0)
                                }
                            }
                            if (T.browser.ie) {
                                var w = T.wrapper[0].style;
                                w.perspectiveOrigin = n + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                },
                T.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e, n) {
                        if ("undefined" != typeof e && ("undefined" == typeof n && (n = !0),
                        0 !== T.slides.length)) {
                            var a = T.slides.eq(e)
                              , r = a.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");
                            !a.hasClass(T.params.lazyLoadingClass) || a.hasClass(T.params.lazyStatusLoadedClass) || a.hasClass(T.params.lazyStatusLoadingClass) || (r = r.add(a[0])),
                            0 !== r.length && r.each(function() {
                                var e = t(this);
                                e.addClass(T.params.lazyStatusLoadingClass);
                                var r = e.attr("data-background")
                                  , i = e.attr("data-src")
                                  , s = e.attr("data-srcset")
                                  , o = e.attr("data-sizes");
                                T.loadImage(e[0], i || r, s, o, !1, function() {
                                    if ("undefined" != typeof T && null !== T && T) {
                                        if (r ? (e.css("background-image", 'url("' + r + '")'),
                                        e.removeAttr("data-background")) : (s && (e.attr("srcset", s),
                                        e.removeAttr("data-srcset")),
                                        o && (e.attr("sizes", o),
                                        e.removeAttr("data-sizes")),
                                        i && (e.attr("src", i),
                                        e.removeAttr("data-src"))),
                                        e.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),
                                        a.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(),
                                        T.params.loop && n) {
                                            var t = a.attr("data-swiper-slide-index");
                                            if (a.hasClass(T.params.slideDuplicateClass)) {
                                                var l = T.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                                T.lazy.loadImageInSlide(l.index(), !1)
                                            } else {
                                                var u = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                                T.lazy.loadImageInSlide(u.index(), !1)
                                            }
                                        }
                                        T.emit("onLazyImageReady", T, a[0], e[0])
                                    }
                                }),
                                T.emit("onLazyImageLoad", T, a[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        var e, n = T.params.slidesPerView;
                        if ("auto" === n && (n = 0),
                        T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0),
                        T.params.watchSlidesVisibility)
                            T.wrapper.children("." + T.params.slideVisibleClass).each(function() {
                                T.lazy.loadImageInSlide(t(this).index())
                            });
                        else if (n > 1)
                            for (e = T.activeIndex; e < T.activeIndex + n; e++)
                                T.slides[e] && T.lazy.loadImageInSlide(e);
                        else
                            T.lazy.loadImageInSlide(T.activeIndex);
                        if (T.params.lazyLoadingInPrevNext)
                            if (n > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                                var a = T.params.lazyLoadingInPrevNextAmount
                                  , r = n
                                  , i = Math.min(T.activeIndex + r + Math.max(a, r), T.slides.length)
                                  , s = Math.max(T.activeIndex - Math.max(r, a), 0);
                                for (e = T.activeIndex + n; e < i; e++)
                                    T.slides[e] && T.lazy.loadImageInSlide(e);
                                for (e = s; e < T.activeIndex; e++)
                                    T.slides[e] && T.lazy.loadImageInSlide(e)
                            } else {
                                var o = T.wrapper.children("." + T.params.slideNextClass);
                                o.length > 0 && T.lazy.loadImageInSlide(o.index());
                                var l = T.wrapper.children("." + T.params.slidePrevClass);
                                l.length > 0 && T.lazy.loadImageInSlide(l.index())
                            }
                    },
                    onTransitionStart: function() {
                        T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                    },
                    onTransitionEnd: function() {
                        T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                    }
                },
                T.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(e) {
                        var t = T.scrollbar
                          , n = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                          , a = n - t.track.offset()[T.isHorizontal() ? "left" : "top"] - t.dragSize / 2
                          , r = -T.minTranslate() * t.moveDivider
                          , i = -T.maxTranslate() * t.moveDivider;
                        a < r ? a = r : a > i && (a = i),
                        a = -a / t.moveDivider,
                        T.updateProgress(a),
                        T.setWrapperTranslate(a, !0)
                    },
                    dragStart: function(e) {
                        var t = T.scrollbar;
                        t.isTouched = !0,
                        e.preventDefault(),
                        e.stopPropagation(),
                        t.setDragPosition(e),
                        clearTimeout(t.dragTimeout),
                        t.track.transition(0),
                        T.params.scrollbarHide && t.track.css("opacity", 1),
                        T.wrapper.transition(100),
                        t.drag.transition(100),
                        T.emit("onScrollbarDragStart", T)
                    },
                    dragMove: function(e) {
                        var t = T.scrollbar;
                        t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                        t.setDragPosition(e),
                        T.wrapper.transition(0),
                        t.track.transition(0),
                        t.drag.transition(0),
                        T.emit("onScrollbarDragMove", T))
                    },
                    dragEnd: function(e) {
                        var t = T.scrollbar;
                        t.isTouched && (t.isTouched = !1,
                        T.params.scrollbarHide && (clearTimeout(t.dragTimeout),
                        t.dragTimeout = setTimeout(function() {
                            t.track.css("opacity", 0),
                            t.track.transition(400)
                        }, 1e3)),
                        T.emit("onScrollbarDragEnd", T),
                        T.params.scrollbarSnapOnRelease && T.slideReset())
                    },
                    draggableEvents: function() {
                        return T.params.simulateTouch !== !1 || T.support.touch ? T.touchEvents : T.touchEventsDesktop
                    }(),
                    enableDraggable: function() {
                        var e = T.scrollbar
                          , n = T.support.touch ? e.track : document;
                        t(e.track).on(e.draggableEvents.start, e.dragStart),
                        t(n).on(e.draggableEvents.move, e.dragMove),
                        t(n).on(e.draggableEvents.end, e.dragEnd)
                    },
                    disableDraggable: function() {
                        var e = T.scrollbar
                          , n = T.support.touch ? e.track : document;
                        t(e.track).off(e.draggableEvents.start, e.dragStart),
                        t(n).off(e.draggableEvents.move, e.dragMove),
                        t(n).off(e.draggableEvents.end, e.dragEnd)
                    },
                    set: function() {
                        if (T.params.scrollbar) {
                            var e = T.scrollbar;
                            e.track = t(T.params.scrollbar),
                            T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && e.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (e.track = T.container.find(T.params.scrollbar)),
                            e.drag = e.track.find(".swiper-scrollbar-drag"),
                            0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'),
                            e.track.append(e.drag)),
                            e.drag[0].style.width = "",
                            e.drag[0].style.height = "",
                            e.trackSize = T.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight,
                            e.divider = T.size / T.virtualSize,
                            e.moveDivider = e.divider * (e.trackSize / T.size),
                            e.dragSize = e.trackSize * e.divider,
                            T.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px",
                            e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "",
                            T.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (T.params.scrollbar) {
                            var e, t = T.scrollbar, n = (T.translate || 0,
                            t.dragSize);
                            e = (t.trackSize - t.dragSize) * T.progress,
                            T.rtl && T.isHorizontal() ? (e = -e,
                            e > 0 ? (n = t.dragSize - e,
                            e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : e < 0 ? (n = t.dragSize + e,
                            e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e),
                            T.isHorizontal() ? (T.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"),
                            t.drag[0].style.width = n + "px") : (T.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"),
                            t.drag[0].style.height = n + "px"),
                            T.params.scrollbarHide && (clearTimeout(t.timeout),
                            t.track[0].style.opacity = 1,
                            t.timeout = setTimeout(function() {
                                t.track[0].style.opacity = 0,
                                t.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        T.params.scrollbar && T.scrollbar.drag.transition(e)
                    }
                },
                T.controller = {
                    LinearSpline: function(e, t) {
                        var n = function() {
                            var e, t, n;
                            return function(a, r) {
                                for (t = -1,
                                e = a.length; e - t > 1; )
                                    a[n = e + t >> 1] <= r ? t = n : e = n;
                                return e
                            }
                        }();
                        this.x = e,
                        this.y = t,
                        this.lastIndex = e.length - 1;
                        var a, r;
                        this.x.length;
                        this.interpolate = function(e) {
                            return e ? (r = n(this.x, e),
                            a = r - 1,
                            (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
                        }
                    },
                    getInterpolateFunction: function(e) {
                        T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid,e.snapGrid))
                    },
                    setTranslate: function(e, t) {
                        function a(t) {
                            e = t.rtl && "horizontal" === t.params.direction ? -T.translate : T.translate,
                            "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(t),
                            i = -T.controller.spline.interpolate(-e)),
                            i && "container" !== T.params.controlBy || (r = (t.maxTranslate() - t.minTranslate()) / (T.maxTranslate() - T.minTranslate()),
                            i = (e - T.minTranslate()) * r + t.minTranslate()),
                            T.params.controlInverse && (i = t.maxTranslate() - i),
                            t.updateProgress(i),
                            t.setWrapperTranslate(i, !1, T),
                            t.updateActiveIndex()
                        }
                        var r, i, s = T.params.control;
                        if (Array.isArray(s))
                            for (var o = 0; o < s.length; o++)
                                s[o] !== t && s[o]instanceof n && a(s[o]);
                        else
                            s instanceof n && t !== s && a(s)
                    },
                    setTransition: function(e, t) {
                        function a(t) {
                            t.setWrapperTransition(e, T),
                            0 !== e && (t.onTransitionStart(),
                            t.wrapper.transitionEnd(function() {
                                i && (t.params.loop && "slide" === T.params.controlBy && t.fixLoop(),
                                t.onTransitionEnd())
                            }))
                        }
                        var r, i = T.params.control;
                        if (Array.isArray(i))
                            for (r = 0; r < i.length; r++)
                                i[r] !== t && i[r]instanceof n && a(i[r]);
                        else
                            i instanceof n && t !== i && a(i)
                    }
                },
                T.hashnav = {
                    onHashCange: function(e, t) {
                        var n = document.location.hash.replace("#", "")
                          , a = T.slides.eq(T.activeIndex).attr("data-hash");
                        n !== a && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + n + '"]').index())
                    },
                    attachEvents: function(e) {
                        var n = e ? "off" : "on";
                        t(window)[n]("hashchange", T.hashnav.onHashCange)
                    },
                    setHash: function() {
                        if (T.hashnav.initialized && T.params.hashnav)
                            if (T.params.replaceState && window.history && window.history.replaceState)
                                window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
                            else {
                                var e = T.slides.eq(T.activeIndex)
                                  , t = e.attr("data-hash") || e.attr("data-history");
                                document.location.hash = t || ""
                            }
                    },
                    init: function() {
                        if (T.params.hashnav && !T.params.history) {
                            T.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var t = 0, n = 0, a = T.slides.length; n < a; n++) {
                                    var r = T.slides.eq(n)
                                      , i = r.attr("data-hash") || r.attr("data-history");
                                    if (i === e && !r.hasClass(T.params.slideDuplicateClass)) {
                                        var s = r.index();
                                        T.slideTo(s, t, T.params.runCallbacksOnInit, !0)
                                    }
                                }
                            T.params.hashnavWatchState && T.hashnav.attachEvents()
                        }
                    },
                    destroy: function() {
                        T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
                    }
                },
                T.history = {
                    init: function() {
                        if (T.params.history) {
                            if (!window.history || !window.history.pushState)
                                return T.params.history = !1,
                                void (T.params.hashnav = !0);
                            T.history.initialized = !0,
                            this.paths = this.getPathValues(),
                            (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit),
                            T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                        }
                    },
                    setHistoryPopState: function() {
                        T.history.paths = T.history.getPathValues(),
                        T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
                    },
                    getPathValues: function() {
                        var e = window.location.pathname.slice(1).split("/")
                          , t = e.length
                          , n = e[t - 2]
                          , a = e[t - 1];
                        return {
                            key: n,
                            value: a
                        }
                    },
                    setHistory: function(e, t) {
                        if (T.history.initialized && T.params.history) {
                            var n = T.slides.eq(t)
                              , a = this.slugify(n.attr("data-history"));
                            window.location.pathname.includes(e) || (a = e + "/" + a),
                            T.params.replaceState ? window.history.replaceState(null, null, a) : window.history.pushState(null, null, a)
                        }
                    },
                    slugify: function(e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    scrollToSlide: function(e, t, n) {
                        if (t)
                            for (var a = 0, r = T.slides.length; a < r; a++) {
                                var i = T.slides.eq(a)
                                  , s = this.slugify(i.attr("data-history"));
                                if (s === t && !i.hasClass(T.params.slideDuplicateClass)) {
                                    var o = i.index();
                                    T.slideTo(o, e, n)
                                }
                            }
                        else
                            T.slideTo(0, e, n)
                    }
                },
                T.disableKeyboardControl = function() {
                    T.params.keyboardControl = !1,
                    t(document).off("keydown", u)
                }
                ,
                T.enableKeyboardControl = function() {
                    T.params.keyboardControl = !0,
                    t(document).on("keydown", u)
                }
                ,
                T.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                },
                T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : p() ? "wheel" : "mousewheel"),
                T.disableMousewheelControl = function() {
                    if (!T.mousewheel.event)
                        return !1;
                    var e = T.container;
                    return "container" !== T.params.mousewheelEventsTarged && (e = t(T.params.mousewheelEventsTarged)),
                    e.off(T.mousewheel.event, c),
                    T.params.mousewheelControl = !1,
                    !0
                }
                ,
                T.enableMousewheelControl = function() {
                    if (!T.mousewheel.event)
                        return !1;
                    var e = T.container;
                    return "container" !== T.params.mousewheelEventsTarged && (e = t(T.params.mousewheelEventsTarged)),
                    e.on(T.mousewheel.event, c),
                    T.params.mousewheelControl = !0,
                    !0
                }
                ,
                T.parallax = {
                    setTranslate: function() {
                        T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            f(this, T.progress)
                        }),
                        T.slides.each(function() {
                            var e = t(this);
                            e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var t = Math.min(Math.max(e[0].progress, -1), 1);
                                f(this, t)
                            })
                        })
                    },
                    setTransition: function(e) {
                        "undefined" == typeof e && (e = T.params.speed),
                        T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var n = t(this)
                              , a = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                            0 === e && (a = 0),
                            n.transition(a)
                        })
                    }
                },
                T.zoom = {
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        slide: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        image: void 0,
                        imageWrap: void 0,
                        zoomMax: T.params.zoomMax
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    },
                    getDistanceBetweenTouches: function(e) {
                        if (e.targetTouches.length < 2)
                            return 1;
                        var t = e.targetTouches[0].pageX
                          , n = e.targetTouches[0].pageY
                          , a = e.targetTouches[1].pageX
                          , r = e.targetTouches[1].pageY
                          , i = Math.sqrt(Math.pow(a - t, 2) + Math.pow(r - n, 2));
                        return i
                    },
                    onGestureStart: function(e) {
                        var n = T.zoom;
                        if (!T.support.gestures) {
                            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                                return;
                            n.gesture.scaleStart = n.getDistanceBetweenTouches(e)
                        }
                        return n.gesture.slide && n.gesture.slide.length || (n.gesture.slide = t(this),
                        0 === n.gesture.slide.length && (n.gesture.slide = T.slides.eq(T.activeIndex)),
                        n.gesture.image = n.gesture.slide.find("img, svg, canvas"),
                        n.gesture.imageWrap = n.gesture.image.parent("." + T.params.zoomContainerClass),
                        n.gesture.zoomMax = n.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax,
                        0 !== n.gesture.imageWrap.length) ? (n.gesture.image.transition(0),
                        void (n.isScaling = !0)) : void (n.gesture.image = void 0)
                    },
                    onGestureChange: function(e) {
                        var t = T.zoom;
                        if (!T.support.gestures) {
                            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                                return;
                            t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                        }
                        t.gesture.image && 0 !== t.gesture.image.length && (T.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
                        t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
                        t.scale < T.params.zoomMin && (t.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - t.scale + 1, .5)),
                        t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                    },
                    onGestureEnd: function(e) {
                        var t = T.zoom;
                        !T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), T.params.zoomMin),
                        t.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                        t.currentScale = t.scale,
                        t.isScaling = !1,
                        1 === t.scale && (t.gesture.slide = void 0))
                    },
                    onTouchStart: function(e, t) {
                        var n = e.zoom;
                        n.gesture.image && 0 !== n.gesture.image.length && (n.image.isTouched || ("android" === e.device.os && t.preventDefault(),
                        n.image.isTouched = !0,
                        n.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        n.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                    },
                    onTouchMove: function(e) {
                        var t = T.zoom;
                        if (t.gesture.image && 0 !== t.gesture.image.length && (T.allowClick = !1,
                        t.image.isTouched && t.gesture.slide)) {
                            t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                            t.image.height = t.gesture.image[0].offsetHeight,
                            t.image.startX = T.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                            t.image.startY = T.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                            t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                            t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                            t.gesture.imageWrap.transition(0),
                            T.rtl && (t.image.startX = -t.image.startX),
                            T.rtl && (t.image.startY = -t.image.startY));
                            var n = t.image.width * t.scale
                              , a = t.image.height * t.scale;
                            if (!(n < t.gesture.slideWidth && a < t.gesture.slideHeight)) {
                                if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - n / 2, 0),
                                t.image.maxX = -t.image.minX,
                                t.image.minY = Math.min(t.gesture.slideHeight / 2 - a / 2, 0),
                                t.image.maxY = -t.image.minY,
                                t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                                !t.image.isMoved && !t.isScaling) {
                                    if (T.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x)
                                        return void (t.image.isTouched = !1);
                                    if (!T.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y)
                                        return void (t.image.isTouched = !1)
                                }
                                e.preventDefault(),
                                e.stopPropagation(),
                                t.image.isMoved = !0,
                                t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX,
                                t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY,
                                t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)),
                                t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)),
                                t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)),
                                t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)),
                                t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                                t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                                t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                                t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2,
                                t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2,
                                Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0),
                                Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0),
                                t.velocity.prevPositionX = t.image.touchesCurrent.x,
                                t.velocity.prevPositionY = t.image.touchesCurrent.y,
                                t.velocity.prevTime = Date.now(),
                                t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                            }
                        }
                    },
                    onTouchEnd: function(e, t) {
                        var n = e.zoom;
                        if (n.gesture.image && 0 !== n.gesture.image.length) {
                            if (!n.image.isTouched || !n.image.isMoved)
                                return n.image.isTouched = !1,
                                void (n.image.isMoved = !1);
                            n.image.isTouched = !1,
                            n.image.isMoved = !1;
                            var a = 300
                              , r = 300
                              , i = n.velocity.x * a
                              , s = n.image.currentX + i
                              , o = n.velocity.y * r
                              , l = n.image.currentY + o;
                            0 !== n.velocity.x && (a = Math.abs((s - n.image.currentX) / n.velocity.x)),
                            0 !== n.velocity.y && (r = Math.abs((l - n.image.currentY) / n.velocity.y));
                            var u = Math.max(a, r);
                            n.image.currentX = s,
                            n.image.currentY = l;
                            var p = n.image.width * n.scale
                              , d = n.image.height * n.scale;
                            n.image.minX = Math.min(n.gesture.slideWidth / 2 - p / 2, 0),
                            n.image.maxX = -n.image.minX,
                            n.image.minY = Math.min(n.gesture.slideHeight / 2 - d / 2, 0),
                            n.image.maxY = -n.image.minY,
                            n.image.currentX = Math.max(Math.min(n.image.currentX, n.image.maxX), n.image.minX),
                            n.image.currentY = Math.max(Math.min(n.image.currentY, n.image.maxY), n.image.minY),
                            n.gesture.imageWrap.transition(u).transform("translate3d(" + n.image.currentX + "px, " + n.image.currentY + "px,0)")
                        }
                    },
                    onTransitionEnd: function(e) {
                        var t = e.zoom;
                        t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                        t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                        t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                        t.scale = t.currentScale = 1)
                    },
                    toggleZoom: function(e, n) {
                        var a = e.zoom;
                        if (a.gesture.slide || (a.gesture.slide = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex),
                        a.gesture.image = a.gesture.slide.find("img, svg, canvas"),
                        a.gesture.imageWrap = a.gesture.image.parent("." + e.params.zoomContainerClass)),
                        a.gesture.image && 0 !== a.gesture.image.length) {
                            var r, i, s, o, l, u, p, d, c, f, h, m, g, v, y, w, x, b;
                            "undefined" == typeof a.image.touchesStart.x && n ? (r = "touchend" === n.type ? n.changedTouches[0].pageX : n.pageX,
                            i = "touchend" === n.type ? n.changedTouches[0].pageY : n.pageY) : (r = a.image.touchesStart.x,
                            i = a.image.touchesStart.y),
                            a.scale && 1 !== a.scale ? (a.scale = a.currentScale = 1,
                            a.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                            a.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            a.gesture.slide = void 0) : (a.scale = a.currentScale = a.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax,
                            n ? (x = a.gesture.slide[0].offsetWidth,
                            b = a.gesture.slide[0].offsetHeight,
                            s = a.gesture.slide.offset().left,
                            o = a.gesture.slide.offset().top,
                            l = s + x / 2 - r,
                            u = o + b / 2 - i,
                            c = a.gesture.image[0].offsetWidth,
                            f = a.gesture.image[0].offsetHeight,
                            h = c * a.scale,
                            m = f * a.scale,
                            g = Math.min(x / 2 - h / 2, 0),
                            v = Math.min(b / 2 - m / 2, 0),
                            y = -g,
                            w = -v,
                            p = l * a.scale,
                            d = u * a.scale,
                            p < g && (p = g),
                            p > y && (p = y),
                            d < v && (d = v),
                            d > w && (d = w)) : (p = 0,
                            d = 0),
                            a.gesture.imageWrap.transition(300).transform("translate3d(" + p + "px, " + d + "px,0)"),
                            a.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                        }
                    },
                    attachEvents: function(e) {
                        var n = e ? "off" : "on";
                        if (T.params.zoom) {
                            var a = (T.slides,
                            !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            });
                            T.support.gestures ? (T.slides[n]("gesturestart", T.zoom.onGestureStart, a),
                            T.slides[n]("gesturechange", T.zoom.onGestureChange, a),
                            T.slides[n]("gestureend", T.zoom.onGestureEnd, a)) : "touchstart" === T.touchEvents.start && (T.slides[n](T.touchEvents.start, T.zoom.onGestureStart, a),
                            T.slides[n](T.touchEvents.move, T.zoom.onGestureChange, a),
                            T.slides[n](T.touchEvents.end, T.zoom.onGestureEnd, a)),
                            T[n]("touchStart", T.zoom.onTouchStart),
                            T.slides.each(function(e, a) {
                                t(a).find("." + T.params.zoomContainerClass).length > 0 && t(a)[n](T.touchEvents.move, T.zoom.onTouchMove)
                            }),
                            T[n]("touchEnd", T.zoom.onTouchEnd),
                            T[n]("transitionEnd", T.zoom.onTransitionEnd),
                            T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
                        }
                    },
                    init: function() {
                        T.zoom.attachEvents()
                    },
                    destroy: function() {
                        T.zoom.attachEvents(!0)
                    }
                },
                T._plugins = [];
                for (var j in T.plugins) {
                    var R = T.plugins[j](T, T.params[j]);
                    R && T._plugins.push(R)
                }
                return T.callPlugins = function(e) {
                    for (var t = 0; t < T._plugins.length; t++)
                        e in T._plugins[t] && T._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                ,
                T.emitterEventListeners = {},
                T.emit = function(e) {
                    T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var t;
                    if (T.emitterEventListeners[e])
                        for (t = 0; t < T.emitterEventListeners[e].length; t++)
                            T.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                ,
                T.on = function(e, t) {
                    return e = h(e),
                    T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []),
                    T.emitterEventListeners[e].push(t),
                    T
                }
                ,
                T.off = function(e, t) {
                    var n;
                    if (e = h(e),
                    "undefined" == typeof t)
                        return T.emitterEventListeners[e] = [],
                        T;
                    if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
                        for (n = 0; n < T.emitterEventListeners[e].length; n++)
                            T.emitterEventListeners[e][n] === t && T.emitterEventListeners[e].splice(n, 1);
                        return T
                    }
                }
                ,
                T.once = function(e, t) {
                    e = h(e);
                    var n = function() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                        T.off(e, n)
                    };
                    return T.on(e, n),
                    T
                }
                ,
                T.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"),
                        e
                    },
                    addRole: function(e, t) {
                        return e.attr("role", t),
                        e
                    },
                    addLabel: function(e, t) {
                        return e.attr("aria-label", t),
                        e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0),
                        e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1),
                        e
                    },
                    onEnterKey: function(e) {
                        13 === e.keyCode && (t(e.target).is(T.params.nextButton) ? (T.onClickNext(e),
                        T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : t(e.target).is(T.params.prevButton) && (T.onClickPrev(e),
                        T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)),
                        t(e.target).is("." + T.params.bulletClass) && t(e.target)[0].click())
                    },
                    liveRegion: t('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var t = T.a11y.liveRegion;
                        0 !== t.length && (t.html(""),
                        t.html(e))
                    },
                    init: function() {
                        T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton),
                        T.a11y.addRole(T.nextButton, "button"),
                        T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)),
                        T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton),
                        T.a11y.addRole(T.prevButton, "button"),
                        T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)),
                        t(T.container).append(T.a11y.liveRegion)
                    },
                    initPagination: function() {
                        T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function() {
                            var e = t(this);
                            T.a11y.makeFocusable(e),
                            T.a11y.addRole(e, "button"),
                            T.a11y.addLabel(e, T.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                        })
                    },
                    destroy: function() {
                        T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                    }
                },
                T.init = function() {
                    T.params.loop && T.createLoop(),
                    T.updateContainerSize(),
                    T.updateSlidesSize(),
                    T.updatePagination(),
                    T.params.scrollbar && T.scrollbar && (T.scrollbar.set(),
                    T.params.scrollbarDraggable && T.scrollbar.enableDraggable()),
                    "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(),
                    T.effects[T.params.effect].setTranslate()),
                    T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit),
                    0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(),
                    T.lazy && T.params.lazyLoading && (T.lazy.load(),
                    T.lazy.initialImageLoaded = !0))),
                    T.attachEvents(),
                    T.params.observer && T.support.observer && T.initObservers(),
                    T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(),
                    T.params.zoom && T.zoom && T.zoom.init(),
                    T.params.autoplay && T.startAutoplay(),
                    T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(),
                    T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(),
                    T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState),
                    T.params.history && T.history && T.history.init(),
                    T.params.hashnav && T.hashnav && T.hashnav.init(),
                    T.params.a11y && T.a11y && T.a11y.init(),
                    T.emit("onInit", T)
                }
                ,
                T.cleanupStyles = function() {
                    T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),
                    T.wrapper.removeAttr("style"),
                    T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                    T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass),
                    T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass),
                    T.params.prevButton && t(T.params.prevButton).removeClass(T.params.buttonDisabledClass),
                    T.params.nextButton && t(T.params.nextButton).removeClass(T.params.buttonDisabledClass),
                    T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"),
                    T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
                }
                ,
                T.destroy = function(e, t) {
                    T.detachEvents(),
                    T.stopAutoplay(),
                    T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(),
                    T.params.loop && T.destroyLoop(),
                    t && T.cleanupStyles(),
                    T.disconnectObservers(),
                    T.params.zoom && T.zoom && T.zoom.destroy(),
                    T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(),
                    T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(),
                    T.params.a11y && T.a11y && T.a11y.destroy(),
                    T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState),
                    T.params.hashnav && T.hashnav && T.hashnav.destroy(),
                    T.emit("onDestroy"),
                    e !== !1 && (T = null)
                }
                ,
                T.init(),
                T
            }
        };
        n.prototype = {
            isSafari: function() {
                var e = window.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                lteIE9: function() {
                    var e = document.createElement("div");
                    return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->",
                    1 === e.getElementsByTagName("i").length
                }()
            },
            device: function() {
                var e = window.navigator.userAgent
                  , t = e.match(/(Android);?[\s\/]+([\d.]+)?/)
                  , n = e.match(/(iPad).*OS\s([\d_]+)/)
                  , a = e.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , r = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                return {
                    ios: n || r || a,
                    android: t
                }
            }(),
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch);
                }(),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
                }(),
                flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                        if (t[n]in e)
                            return !0
                }(),
                observer: function() {
                    return "MutationObserver"in window || "WebkitMutationObserver"in window
                }(),
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: function() {
                    return "ongesturestart"in window
                }()
            },
            plugins: {}
        };
        for (var a = (function() {
            var e = function(e) {
                var t = this
                  , n = 0;
                for (n = 0; n < e.length; n++)
                    t[n] = e[n];
                return t.length = e.length,
                this
            }
              , t = function(t, n) {
                var a = []
                  , r = 0;
                if (t && !n && t instanceof e)
                    return t;
                if (t)
                    if ("string" == typeof t) {
                        var i, s, o = t.trim();
                        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                            var l = "div";
                            for (0 === o.indexOf("<li") && (l = "ul"),
                            0 === o.indexOf("<tr") && (l = "tbody"),
                            0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                            0 === o.indexOf("<tbody") && (l = "table"),
                            0 === o.indexOf("<option") && (l = "select"),
                            s = document.createElement(l),
                            s.innerHTML = t,
                            r = 0; r < s.childNodes.length; r++)
                                a.push(s.childNodes[r])
                        } else
                            for (i = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])],
                            r = 0; r < i.length; r++)
                                i[r] && a.push(i[r])
                    } else if (t.nodeType || t === window || t === document)
                        a.push(t);
                    else if (t.length > 0 && t[0].nodeType)
                        for (r = 0; r < t.length; r++)
                            a.push(t[r]);
                return new e(a)
            };
            return e.prototype = {
                addClass: function(e) {
                    if ("undefined" == typeof e)
                        return this;
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var a = 0; a < this.length; a++)
                            this[a].classList.add(t[n]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var a = 0; a < this.length; a++)
                            this[a].classList.remove(t[n]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), n = 0; n < t.length; n++)
                        for (var a = 0; a < this.length; a++)
                            this[a].classList.toggle(t[n]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e)
                        return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var n = 0; n < this.length; n++)
                        if (2 === arguments.length)
                            this[n].setAttribute(e, t);
                        else
                            for (var a in e)
                                this[n][a] = e[a],
                                this[n].setAttribute(a, e[a]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t++)
                        this[t].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    if ("undefined" != typeof t) {
                        for (var n = 0; n < this.length; n++) {
                            var a = this[n];
                            a.dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
                            a.dom7ElementDataStorage[e] = t
                        }
                        return this
                    }
                    if (this[0]) {
                        var r = this[0].getAttribute("data-" + e);
                        return r ? r : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                    }
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var n = this[t].style;
                        n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
                    }
                    return this
                },
                on: function(e, n, a, r) {
                    function i(e) {
                        var r = e.target;
                        if (t(r).is(n))
                            a.call(r, e);
                        else
                            for (var i = t(r).parents(), s = 0; s < i.length; s++)
                                t(i[s]).is(n) && a.call(i[s], e)
                    }
                    var s, o, l = e.split(" ");
                    for (s = 0; s < this.length; s++)
                        if ("function" == typeof n || n === !1)
                            for ("function" == typeof n && (a = arguments[1],
                            r = arguments[2] || !1),
                            o = 0; o < l.length; o++)
                                this[s].addEventListener(l[o], a, r);
                        else
                            for (o = 0; o < l.length; o++)
                                this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []),
                                this[s].dom7LiveListeners.push({
                                    listener: a,
                                    liveListener: i
                                }),
                                this[s].addEventListener(l[o], i, r);
                    return this
                },
                off: function(e, t, n, a) {
                    for (var r = e.split(" "), i = 0; i < r.length; i++)
                        for (var s = 0; s < this.length; s++)
                            if ("function" == typeof t || t === !1)
                                "function" == typeof t && (n = arguments[1],
                                a = arguments[2] || !1),
                                this[s].removeEventListener(r[i], n, a);
                            else if (this[s].dom7LiveListeners)
                                for (var o = 0; o < this[s].dom7LiveListeners.length; o++)
                                    this[s].dom7LiveListeners[o].listener === n && this[s].removeEventListener(r[i], this[s].dom7LiveListeners[o].liveListener, a);
                    return this
                },
                once: function(e, t, n, a) {
                    function r(s) {
                        n(s),
                        i.off(e, t, r, a)
                    }
                    var i = this;
                    "function" == typeof t && (t = !1,
                    n = arguments[1],
                    a = arguments[2]),
                    i.on(e, t, r, a)
                },
                trigger: function(e, t) {
                    for (var n = 0; n < this.length; n++) {
                        var a;
                        try {
                            a = new window.CustomEvent(e,{
                                detail: t,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (n) {
                            a = document.createEvent("Event"),
                            a.initEvent(e, !0, !0),
                            a.detail = t
                        }
                        this[n].dispatchEvent(a)
                    }
                    return this
                },
                transitionEnd: function(e) {
                    function t(i) {
                        if (i.target === this)
                            for (e.call(this, i),
                            n = 0; n < a.length; n++)
                                r.off(a[n], t)
                    }
                    var n, a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = this;
                    if (e)
                        for (n = 0; n < a.length; n++)
                            r.on(a[n], t);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0]
                          , t = e.getBoundingClientRect()
                          , n = document.body
                          , a = e.clientTop || n.clientTop || 0
                          , r = e.clientLeft || n.clientLeft || 0
                          , i = window.pageYOffset || e.scrollTop
                          , s = window.pageXOffset || e.scrollLeft;
                        return {
                            top: t.top + i - a,
                            left: t.left + s - r
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var n;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (n = 0; n < this.length; n++)
                                for (var a in e)
                                    this[n].style[a] = e[a];
                            return this
                        }
                        if (this[0])
                            return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (n = 0; n < this.length; n++)
                            this[n].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var t = 0; t < this.length; t++)
                        e.call(this[t], t, this[t]);
                    return this
                },
                html: function(e) {
                    if ("undefined" == typeof e)
                        return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t++)
                        this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" == typeof e)
                        return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t++)
                        this[t].textContent = e;
                    return this
                },
                is: function(n) {
                    if (!this[0])
                        return !1;
                    var a, r;
                    if ("string" == typeof n) {
                        var i = this[0];
                        if (i === document)
                            return n === document;
                        if (i === window)
                            return n === window;
                        if (i.matches)
                            return i.matches(n);
                        if (i.webkitMatchesSelector)
                            return i.webkitMatchesSelector(n);
                        if (i.mozMatchesSelector)
                            return i.mozMatchesSelector(n);
                        if (i.msMatchesSelector)
                            return i.msMatchesSelector(n);
                        for (a = t(n),
                        r = 0; r < a.length; r++)
                            if (a[r] === this[0])
                                return !0;
                        return !1
                    }
                    if (n === document)
                        return this[0] === document;
                    if (n === window)
                        return this[0] === window;
                    if (n.nodeType || n instanceof e) {
                        for (a = n.nodeType ? [n] : n,
                        r = 0; r < a.length; r++)
                            if (a[r] === this[0])
                                return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], t = 0; null !== (e = e.previousSibling); )
                            1 === e.nodeType && t++;
                        return t
                    }
                },
                eq: function(t) {
                    if ("undefined" == typeof t)
                        return this;
                    var n, a = this.length;
                    return t > a - 1 ? new e([]) : t < 0 ? (n = a + t,
                    new e(n < 0 ? [] : [this[n]])) : new e([this[t]])
                },
                append: function(t) {
                    var n, a;
                    for (n = 0; n < this.length; n++)
                        if ("string" == typeof t) {
                            var r = document.createElement("div");
                            for (r.innerHTML = t; r.firstChild; )
                                this[n].appendChild(r.firstChild)
                        } else if (t instanceof e)
                            for (a = 0; a < t.length; a++)
                                this[n].appendChild(t[a]);
                        else
                            this[n].appendChild(t);
                    return this
                },
                prepend: function(t) {
                    var n, a;
                    for (n = 0; n < this.length; n++)
                        if ("string" == typeof t) {
                            var r = document.createElement("div");
                            for (r.innerHTML = t,
                            a = r.childNodes.length - 1; a >= 0; a--)
                                this[n].insertBefore(r.childNodes[a], this[n].childNodes[0])
                        } else if (t instanceof e)
                            for (a = 0; a < t.length; a++)
                                this[n].insertBefore(t[a], this[n].childNodes[0]);
                        else
                            this[n].insertBefore(t, this[n].childNodes[0]);
                    return this
                },
                insertBefore: function(e) {
                    for (var n = t(e), a = 0; a < this.length; a++)
                        if (1 === n.length)
                            n[0].parentNode.insertBefore(this[a], n[0]);
                        else if (n.length > 1)
                            for (var r = 0; r < n.length; r++)
                                n[r].parentNode.insertBefore(this[a].cloneNode(!0), n[r])
                },
                insertAfter: function(e) {
                    for (var n = t(e), a = 0; a < this.length; a++)
                        if (1 === n.length)
                            n[0].parentNode.insertBefore(this[a], n[0].nextSibling);
                        else if (n.length > 1)
                            for (var r = 0; r < n.length; r++)
                                n[r].parentNode.insertBefore(this[a].cloneNode(!0), n[r].nextSibling)
                },
                next: function(n) {
                    return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(n) {
                    var a = []
                      , r = this[0];
                    if (!r)
                        return new e([]);
                    for (; r.nextElementSibling; ) {
                        var i = r.nextElementSibling;
                        n ? t(i).is(n) && a.push(i) : a.push(i),
                        r = i
                    }
                    return new e(a)
                },
                prev: function(n) {
                    return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(n) {
                    var a = []
                      , r = this[0];
                    if (!r)
                        return new e([]);
                    for (; r.previousElementSibling; ) {
                        var i = r.previousElementSibling;
                        n ? t(i).is(n) && a.push(i) : a.push(i),
                        r = i
                    }
                    return new e(a)
                },
                parent: function(e) {
                    for (var n = [], a = 0; a < this.length; a++)
                        e ? t(this[a].parentNode).is(e) && n.push(this[a].parentNode) : n.push(this[a].parentNode);
                    return t(t.unique(n))
                },
                parents: function(e) {
                    for (var n = [], a = 0; a < this.length; a++)
                        for (var r = this[a].parentNode; r; )
                            e ? t(r).is(e) && n.push(r) : n.push(r),
                            r = r.parentNode;
                    return t(t.unique(n))
                },
                find: function(t) {
                    for (var n = [], a = 0; a < this.length; a++)
                        for (var r = this[a].querySelectorAll(t), i = 0; i < r.length; i++)
                            n.push(r[i]);
                    return new e(n)
                },
                children: function(n) {
                    for (var a = [], r = 0; r < this.length; r++)
                        for (var i = this[r].childNodes, s = 0; s < i.length; s++)
                            n ? 1 === i[s].nodeType && t(i[s]).is(n) && a.push(i[s]) : 1 === i[s].nodeType && a.push(i[s]);
                    return new e(t.unique(a))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++)
                        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    var e, n, a = this;
                    for (e = 0; e < arguments.length; e++) {
                        var r = t(arguments[e]);
                        for (n = 0; n < r.length; n++)
                            a[a.length] = r[n],
                            a.length++
                    }
                    return a
                }
            },
            t.fn = e.prototype,
            t.unique = function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    t.indexOf(e[n]) === -1 && t.push(e[n]);
                return t
            }
            ,
            t
        }()), r = ["jQuery", "Zepto", "Dom7"], i = 0; i < r.length; i++)
            window[r[i]] && e(window[r[i]]);
        var s;
        s = "undefined" == typeof a ? window.Dom7 || window.Zepto || window.jQuery : a,
        s && ("transitionEnd"in s.fn || (s.fn.transitionEnd = function(e) {
            function t(i) {
                if (i.target === this)
                    for (e.call(this, i),
                    n = 0; n < a.length; n++)
                        r.off(a[n], t)
            }
            var n, a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = this;
            if (e)
                for (n = 0; n < a.length; n++)
                    r.on(a[n], t);
            return this
        }
        ),
        "transform"in s.fn || (s.fn.transform = function(e) {
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
            }
            return this
        }
        ),
        "transition"in s.fn || (s.fn.transition = function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
            }
            return this
        }
        ),
        "outerWidth"in s.fn || (s.fn.outerWidth = function(e) {
            return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
        }
        )),
        window.Swiper = n
    }(),
    e.exports = window.Swiper
}
, function(e, t) {}
]);
