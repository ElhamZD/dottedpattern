/*function ParticleSlider(a){var b=this;if(b.sliderId="particle-slider",b.color="#fff",b.hoverColor="#88f",b.width=0,b.height=0,b.ptlGap=0,b.ptlSize=1,b.slideDelay=10,b.arrowPadding=10,b.showArrowControls=!0,b.onNextSlide=null,b.onWidthChange=null,b.onHeightChange=null,b.onSizeChange=null,b.monochrome=!1,b.mouseForce=1e4,b.restless=!0,b.imgs=[],a)for(var c=["color","hoverColor","width","height","ptlGap","ptlSize","slideDelay","arrowPadding","sliderId","showArrowControls","onNextSlide","monochrome","mouseForce","restless","imgs","onSizeChange","onWidthChange","onHeightChange"],d=0,e=c.length;e>d;d++)a[c[d]]&&(b[c[d]]=a[c[d]]);if(b.$container=b.$("#"+b.sliderId),b.$$children=b.$container.childNodes,b.$controlsContainer=b.$(".controls"),b.$$slides=b.$(".slide",b.$(".slides").childNodes,!0),b.$controlLeft=null,b.$controlRight=null,b.$canv=b.$(".draw"),b.$srcCanv=document.createElement("canvas"),b.$srcCanv.style.display="none",b.$container.appendChild(b.$srcCanv),b.$prevCanv=document.createElement("canvas"),b.$prevCanv.style.display="none",b.$container.appendChild(b.$prevCanv),b.$nextCanv=document.createElement("canvas"),b.$nextCanv.style.display="none",b.$container.appendChild(b.$nextCanv),b.$overlay=document.createElement("p"),b.$container.appendChild(b.$overlay),b.imgControlPrev=null,b.imgControlNext=null,b.$$slides.length<=1&&(b.showArrowControls=!1),b.$controlsContainer&&b.$controlsContainer.childNodes&&1==b.showArrowControls?(b.$controlLeft=b.$(".left",b.$controlsContainer.childNodes),b.$controlRight=b.$(".right",b.$controlsContainer.childNodes),b.imgControlPrev=new Image,b.imgControlNext=new Image,b.imgControlPrev.onload=function(){b.$prevCanv.height=this.height,b.$prevCanv.width=this.width,b.loadingStep()},b.imgControlNext.onload=function(){b.$nextCanv.height=this.height,b.$nextCanv.width=this.width,b.loadingStep()},b.imgControlPrev.src=b.$controlLeft.getAttribute("data-src"),b.imgControlNext.src=b.$controlRight.getAttribute("data-src")):b.showArrowControls=!1,b.width<=0&&(b.width=b.$container.clientWidth),b.height<=0&&(b.height=b.$container.clientHeight),b.mouseDownRegion=0,b.colorArr=b.parseColor(b.color),b.hoverColorArr=b.parseColor(b.hoverColor),b.mx=-1,b.my=-1,b.swipeOffset=0,b.cw=b.getCw(),b.ch=b.getCh(),b.frame=0,b.nextSlideTimer=!1,b.currImg=0,b.lastImg=0,b.imagesLoaded=0,b.pxlBuffer={first:null},b.recycleBuffer={first:null},b.ctx=b.$canv.getContext("2d"),b.srcCtx=b.$srcCanv.getContext("2d"),b.prevCtx=b.$prevCanv.getContext("2d"),b.nextCtx=b.$nextCanv.getContext("2d"),b.$canv.width=b.cw,b.$canv.height=b.ch,b.shuffle=function(){for(var a,b,c=0,d=this.length;d>c;c++)b=Math.floor(Math.random()*d),a=this[c],this[c]=this[b],this[b]=a},Array.prototype.shuffle=b.shuffle,b.$canv.onmouseout=function(){b.mx=-1,b.my=-1,b.mouseDownRegion=0},b.$canv.onmousemove=function(a){function c(a){var c=0,d=0,e="string"==typeof a?b.$(a):a;if(e){c=e.offsetLeft,d=e.offsetTop;for(var f=document.getElementsByTagName("body")[0];e.offsetParent&&e!=f;)c+=e.offsetParent.offsetLeft,d+=e.offsetParent.offsetTop,e=e.offsetParent}this.x=c,this.y=d}var d=new c(b.$container);b.mx=a.clientX-d.x+document.body.scrollLeft+document.documentElement.scrollLeft,b.my=a.clientY-d.y+document.body.scrollTop+document.documentElement.scrollTop},b.$canv.onmousedown=function(){if(b.imgs.length>1){var a=0;b.mx>=0&&b.mx<2*b.arrowPadding+b.$prevCanv.width?a=-1:b.mx>0&&b.mx>b.cw-(2*b.arrowPadding+b.$nextCanv.width)&&(a=1),b.mouseDownRegion=a}},b.$canv.onmouseup=function(){if(b.imgs.length>1){var a="";b.mx>=0&&b.mx<2*b.arrowPadding+b.$prevCanv.width?a=-1:b.mx>0&&b.mx>b.cw-(2*b.arrowPadding+b.$nextCanv.width)&&(a=1),0!=a&&0!=b.mouseDownRegion&&(a!=b.mouseDownRegion&&(a*=-1),b.nextSlideTimer&&clearTimeout(b.nextSlideTimer),b.nextSlide(a)),b.mouseDownRegion=0}},0==b.imgs.length)for(var d=0,e=b.$$slides.length;e>d;d++){var f=new Image;b.imgs.push(f),f.src=b.$$slides[d].getAttribute("data-src")}b.imgs.length>0&&(b.imgs[0].onload=function(){b.loadingStep()}),b.requestAnimationFrame(function(){b.nextFrame()})}*/
if (function(a, b) {
        function c(a) {
            var b = a.length,
                c = kb.type(a);
            return kb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }

        function d(a) {
            var b = zb[a] = {};
            return kb.each(a.match(mb) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function e(a, c, d, e) {
            if (kb.acceptData(a)) {
                var f, g, h = kb.expando,
                    i = a.nodeType,
                    j = i ? kb.cache : a,
                    k = i ? a[h] : a[h] && h;
                if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = bb.pop() || kb.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: kb.noop
                }), ("object" == typeof c || "function" == typeof c) && (e ? j[k] = kb.extend(j[k], c) : j[k].data = kb.extend(j[k].data, c)), g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[kb.camelCase(c)] = d), "string" == typeof c ? (f = g[c], null == f && (f = g[kb.camelCase(c)])) : f = g, f
            }
        }

        function f(a, b, c) {
            if (kb.acceptData(a)) {
                var d, e, f = a.nodeType,
                    g = f ? kb.cache : a,
                    i = f ? a[kb.expando] : kb.expando;
                if (g[i]) {
                    if (b && (d = c ? g[i] : g[i].data)) {
                        kb.isArray(b) ? b = b.concat(kb.map(b, kb.camelCase)) : b in d ? b = [b] : (b = kb.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        for (; e--;) delete d[b[e]];
                        if (c ? !h(d) : !kb.isEmptyObject(d)) return
                    }(c || (delete g[i].data, h(g[i]))) && (f ? kb.cleanData([a], !0) : kb.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null)
                }
            }
        }

        function g(a, c, d) {
            if (d === b && 1 === a.nodeType) {
                var e = "data-" + c.replace(Bb, "-$1").toLowerCase();
                if (d = a.getAttribute(e), "string" == typeof d) {
                    try {
                        d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Ab.test(d) ? kb.parseJSON(d) : d
                    } catch (f) {}
                    kb.data(a, c, d)
                } else d = b
            }
            return d
        }

        function h(a) {
            var b;
            for (b in a)
                if (("data" !== b || !kb.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function i() {
            return !0
        }

        function j() {
            return !1
        }

        function k() {
            try {
                return Y.activeElement
            } catch (a) {}
        }

        function l(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }

        function m(a, b, c) {
            if (kb.isFunction(b)) return kb.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return kb.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (Qb.test(b)) return kb.filter(b, a, c);
                b = kb.filter(b, a)
            }
            return kb.grep(a, function(a) {
                return kb.inArray(a, b) >= 0 !== c
            })
        }

        function n(a) {
            var b = Ub.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;) c.createElement(b.pop());
            return c
        }

        function o(a, b) {
            return kb.nodeName(a, "table") && kb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function p(a) {
            return a.type = (null !== kb.find.attr(a, "type")) + "/" + a.type, a
        }

        function q(a) {
            var b = ec.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function r(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) kb._data(c, "globalEval", !b || kb._data(b[d], "globalEval"))
        }

        function s(a, b) {
            if (1 === b.nodeType && kb.hasData(a)) {
                var c, d, e, f = kb._data(a),
                    g = kb._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) kb.event.add(b, c, h[c][d])
                }
                g.data && (g.data = kb.extend({}, g.data))
            }
        }

        function t(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !kb.support.noCloneEvent && b[kb.expando]) {
                    e = kb._data(b);
                    for (d in e.events) kb.removeEvent(b, d, e.handle);
                    b.removeAttribute(kb.expando)
                }
                "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), kb.support.html5Clone && a.innerHTML && !kb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }

        function u(a, c) {
            var d, e, f = 0,
                g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
            if (!g)
                for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || kb.nodeName(e, c) ? g.push(e) : kb.merge(g, u(e, c));
            return c === b || c && kb.nodeName(a, c) ? kb.merge([a], g) : g
        }

        function v(a) {
            bc.test(a.type) && (a.defaultChecked = a.checked)
        }

        function w(a, b) {
            if (b in a) return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--;)
                if (b = yc[e] + c, b in a) return b;
            return d
        }

        function x(a, b) {
            return a = b || a, "none" === kb.css(a, "display") || !kb.contains(a.ownerDocument, a)
        }

        function y(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = kb._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = kb._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), (c && "none" !== c || !e) && kb._data(d, "olddisplay", e ? c : kb.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function z(a, b, c) {
            var d = rc.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function A(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += kb.css(a, c + xc[f], !0, e)), d ? ("content" === c && (g -= kb.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= kb.css(a, "border" + xc[f] + "Width", !0, e))) : (g += kb.css(a, "padding" + xc[f], !0, e), "padding" !== c && (g += kb.css(a, "border" + xc[f] + "Width", !0, e)));
            return g
        }

        function B(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = kc(a),
                g = kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
                d = g && (kb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function C(a) {
            var b = Y,
                c = uc[a];
            return c || (c = D(a, b), "none" !== c && c || (jc = (jc || kb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = D(a, b), jc.detach()), uc[a] = c), c
        }

        function D(a, b) {
            var c = kb(b.createElement(a)).appendTo(b.body),
                d = kb.css(c[0], "display");
            return c.remove(), d
        }

        function E(a, b, c, d) {
            var e;
            if (kb.isArray(b)) kb.each(b, function(b, e) {
                c || Ac.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== kb.type(b)) d(a, b);
            else
                for (e in b) E(a + "[" + e + "]", b[e], c, d)
        }

        function F(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(mb) || [];
                if (kb.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function G(a, c, d, e) {
            function f(i) {
                var j;
                return g[i] = !0, kb.each(a[i] || [], function(a, i) {
                    var k = i(c, d, e);
                    return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1)
                }), j
            }
            var g = {},
                h = a === Rc;
            return f(c.dataTypes[0]) || !g["*"] && f("*")
        }

        function H(a, c) {
            var d, e, f = kb.ajaxSettings.flatOptions || {};
            for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
            return d && kb.extend(!0, a, d), a
        }

        function I(a, c, d) {
            for (var e, f, g, h, i = a.contents, j = a.dataTypes;
                "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
            if (f)
                for (h in i)
                    if (i[h] && i[h].test(f)) {
                        j.unshift(h);
                        break
                    }
            if (j[0] in d) g = j[0];
            else {
                for (h in d) {
                    if (!j[0] || a.converters[h + " " + j[0]]) {
                        g = h;
                        break
                    }
                    e || (e = h)
                }
                g = g || e
            }
            return g ? (g !== j[0] && j.unshift(g), d[g]) : b
        }

        function J(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function K() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function L() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }

        function M() {
            return setTimeout(function() {
                $c = b
            }), $c = kb.now()
        }

        function N(a, b, c) {
            for (var d, e = (ed[b] || []).concat(ed["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function O(a, b, c) {
            var d, e, f = 0,
                g = dd.length,
                h = kb.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = $c || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: kb.extend({}, b),
                    opts: kb.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: $c || M(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = kb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (P(k, j.opts.specialEasing); g > f; f++)
                if (d = dd[f].call(j, a, k, j.opts)) return d;
            return kb.map(k, N, j), kb.isFunction(j.opts.start) && j.opts.start.call(a, j), kb.fx.timer(kb.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function P(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = kb.camelCase(c), e = b[d], f = a[c], kb.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = kb.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function Q(a, b, c) {
            var d, e, f, g, h, i, j = this,
                k = {},
                l = a.style,
                m = a.nodeType && x(a),
                n = kb._data(a, "fxshow");
            c.queue || (h = kb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, j.always(function() {
                j.always(function() {
                    h.unqueued--, kb.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [l.overflow, l.overflowX, l.overflowY], "inline" === kb.css(a, "display") && "none" === kb.css(a, "float") && (kb.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), c.overflow && (l.overflow = "hidden", kb.support.shrinkWrapBlocks || j.always(function() {
                l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], ad.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
                    k[d] = n && n[d] || kb.style(a, d)
                }
            if (!kb.isEmptyObject(k)) {
                n ? "hidden" in n && (m = n.hidden) : n = kb._data(a, "fxshow", {}), f && (n.hidden = !m), m ? kb(a).show() : j.done(function() {
                    kb(a).hide()
                }), j.done(function() {
                    var b;
                    kb._removeData(a, "fxshow");
                    for (b in k) kb.style(a, b, k[b])
                });
                for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function R(a, b, c, d, e) {
            return new R.prototype.init(a, b, c, d, e)
        }

        function S(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function T(a) {
            return kb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var U, V, W = typeof b,
            X = a.location,
            Y = a.document,
            Z = Y.documentElement,
            $ = a.jQuery,
            _ = a.$,
            ab = {},
            bb = [],
            cb = "1.10.1",
            db = bb.concat,
            eb = bb.push,
            fb = bb.slice,
            gb = bb.indexOf,
            hb = ab.toString,
            ib = ab.hasOwnProperty,
            jb = cb.trim,
            kb = function(a, b) {
                return new kb.fn.init(a, b, V)
            },
            lb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            mb = /\S+/g,
            nb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ob = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            pb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            qb = /^[\],:{}\s]*$/,
            rb = /(?:^|:|,)(?:\s*\[)+/g,
            sb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            tb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            ub = /^-ms-/,
            vb = /-([\da-z])/gi,
            wb = function(a, b) {
                return b.toUpperCase()
            },
            xb = function(a) {
                (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (yb(), kb.ready())
            },
            yb = function() {
                Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xb, !1), a.removeEventListener("load", xb, !1)) : (Y.detachEvent("onreadystatechange", xb), a.detachEvent("onload", xb))
            };
        kb.fn = kb.prototype = {
                jquery: cb,
                constructor: kb,
                init: function(a, c, d) {
                    var e, f;
                    if (!a) return this;
                    if ("string" == typeof a) {
                        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ob.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                        if (e[1]) {
                            if (c = c instanceof kb ? c[0] : c, kb.merge(this, kb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), pb.test(e[1]) && kb.isPlainObject(c))
                                for (e in c) kb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                            return this
                        }
                        if (f = Y.getElementById(e[2]), f && f.parentNode) {
                            if (f.id !== e[2]) return d.find(a);
                            this.length = 1, this[0] = f
                        }
                        return this.context = Y, this.selector = a, this
                    }
                    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : kb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), kb.makeArray(a, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return fb.call(this)
                },
                get: function(a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function(a) {
                    var b = kb.merge(this.constructor(), a);
                    return b.prevObject = this, b.context = this.context, b
                },
                each: function(a, b) {
                    return kb.each(this, a, b)
                },
                ready: function(a) {
                    return kb.ready.promise().done(a), this
                },
                slice: function() {
                    return this.pushStack(fb.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(a) {
                    var b = this.length,
                        c = +a + (0 > a ? b : 0);
                    return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
                },
                map: function(a) {
                    return this.pushStack(kb.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: eb,
                sort: [].sort,
                splice: [].splice
            }, kb.fn.init.prototype = kb.fn, kb.extend = kb.fn.extend = function() {
                var a, c, d, e, f, g, h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || kb.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
                    if (null != (f = arguments[i]))
                        for (e in f) a = h[e], d = f[e], h !== d && (k && d && (kb.isPlainObject(d) || (c = kb.isArray(d))) ? (c ? (c = !1, g = a && kb.isArray(a) ? a : []) : g = a && kb.isPlainObject(a) ? a : {}, h[e] = kb.extend(k, g, d)) : d !== b && (h[e] = d));
                return h
            }, kb.extend({
                expando: "jQuery" + (cb + Math.random()).replace(/\D/g, ""),
                noConflict: function(b) {
                    return a.$ === kb && (a.$ = _), b && a.jQuery === kb && (a.jQuery = $), kb
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? kb.readyWait++ : kb.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 ? !--kb.readyWait : !kb.isReady) {
                        if (!Y.body) return setTimeout(kb.ready);
                        kb.isReady = !0, a !== !0 && --kb.readyWait > 0 || (U.resolveWith(Y, [kb]), kb.fn.trigger && kb(Y).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(a) {
                    return "function" === kb.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === kb.type(a)
                },
                isWindow: function(a) {
                    return null != a && a == a.window
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ab[hb.call(a)] || "object" : typeof a
                },
                isPlainObject: function(a) {
                    var c;
                    if (!a || "object" !== kb.type(a) || a.nodeType || kb.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !ib.call(a, "constructor") && !ib.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (d) {
                        return !1
                    }
                    if (kb.support.ownLast)
                        for (c in a) return ib.call(a, c);
                    for (c in a);
                    return c === b || ib.call(a, c)
                },
                isEmptyObject: function(a) {
                    var b;
                    for (b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw Error(a)
                },
                parseHTML: function(a, b, c) {
                    if (!a || "string" != typeof a) return null;
                    "boolean" == typeof b && (c = b, b = !1), b = b || Y;
                    var d = pb.exec(a),
                        e = !c && [];
                    return d ? [b.createElement(d[1])] : (d = kb.buildFragment([a], b, e), e && kb(e).remove(), kb.merge([], d.childNodes))
                },
                parseJSON: function(c) {
                    return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = kb.trim(c), c && qb.test(c.replace(sb, "@").replace(tb, "]").replace(rb, ""))) ? Function("return " + c)() : (kb.error("Invalid JSON: " + c), b)
                },
                parseXML: function(c) {
                    var d, e;
                    if (!c || "string" != typeof c) return null;
                    try {
                        a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (f) {
                        d = b
                    }
                    return d && d.documentElement && !d.getElementsByTagName("parsererror").length || kb.error("Invalid XML: " + c), d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && kb.trim(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(ub, "ms-").replace(vb, wb)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                },
                each: function(a, b, d) {
                    var e, f = 0,
                        g = a.length,
                        h = c(a);
                    if (d) {
                        if (h)
                            for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                        else
                            for (f in a)
                                if (e = b.apply(a[f], d), e === !1) break
                    } else if (h)
                        for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.call(a[f], f, a[f]), e === !1) break;
                    return a
                },
                trim: jb && !jb.call("﻿ ") ? function(a) {
                    return null == a ? "" : jb.call(a)
                } : function(a) {
                    return null == a ? "" : (a + "").replace(nb, "")
                },
                makeArray: function(a, b) {
                    var d = b || [];
                    return null != a && (c(Object(a)) ? kb.merge(d, "string" == typeof a ? [a] : a) : eb.call(d, a)), d
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (gb) return gb.call(b, a, c);
                        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = c.length,
                        e = a.length,
                        f = 0;
                    if ("number" == typeof d)
                        for (; d > f; f++) a[e++] = c[f];
                    else
                        for (; c[f] !== b;) a[e++] = c[f++];
                    return a.length = e, a
                },
                grep: function(a, b, c) {
                    var d, e = [],
                        f = 0,
                        g = a.length;
                    for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                    return e
                },
                map: function(a, b, d) {
                    var e, f = 0,
                        g = a.length,
                        h = c(a),
                        i = [];
                    if (h)
                        for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
                    else
                        for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
                    return db.apply([], i)
                },
                guid: 1,
                proxy: function(a, c) {
                    var d, e, f;
                    return "string" == typeof c && (f = a[c], c = a, a = f), kb.isFunction(a) ? (d = fb.call(arguments, 2), e = function() {
                        return a.apply(c || this, d.concat(fb.call(arguments)))
                    }, e.guid = a.guid = a.guid || kb.guid++, e) : b
                },
                access: function(a, c, d, e, f, g, h) {
                    var i = 0,
                        j = a.length,
                        k = null == d;
                    if ("object" === kb.type(d)) {
                        f = !0;
                        for (i in d) kb.access(a, c, i, d[i], !0, g, h)
                    } else if (e !== b && (f = !0, kb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                            return k.call(kb(a), c)
                        })), c))
                        for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
                    return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(a, b, c, d) {
                    var e, f, g = {};
                    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                    e = c.apply(a, d || []);
                    for (f in b) a.style[f] = g[f];
                    return e
                }
            }), kb.ready.promise = function(b) {
                if (!U)
                    if (U = kb.Deferred(), "complete" === Y.readyState) setTimeout(kb.ready);
                    else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xb, !1), a.addEventListener("load", xb, !1);
                else {
                    Y.attachEvent("onreadystatechange", xb), a.attachEvent("onload", xb);
                    var c = !1;
                    try {
                        c = null == a.frameElement && Y.documentElement
                    } catch (d) {}
                    c && c.doScroll && function e() {
                        if (!kb.isReady) {
                            try {
                                c.doScroll("left")
                            } catch (a) {
                                return setTimeout(e, 50)
                            }
                            yb(), kb.ready()
                        }
                    }()
                }
                return U.promise(b)
            }, kb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
                ab["[object " + b + "]"] = b.toLowerCase()
            }), V = kb(Y),
            function(a, b) {
                function c(a, b, c, d) {
                    var e, f, g, h, i, j, k, l, m, n;
                    if ((b ? b.ownerDocument || b : S) !== K && J(b), b = b || K, c = c || [], !a || "string" != typeof a) return c;
                    if (1 !== (h = b.nodeType) && 9 !== h) return [];
                    if (M && !d) {
                        if (e = xb.exec(a))
                            if (g = e[1]) {
                                if (9 === h) {
                                    if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                    if (f.id === g) return c.push(f), c
                                } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && Q(b, f) && f.id === g) return c.push(f), c
                            } else {
                                if (e[2]) return eb.apply(c, b.getElementsByTagName(a)), c;
                                if ((g = e[3]) && B.getElementsByClassName && b.getElementsByClassName) return eb.apply(c, b.getElementsByClassName(g)), c
                            }
                        if (B.qsa && (!N || !N.test(a))) {
                            if (l = k = R, m = b, n = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                                for (j = p(a), (k = b.getAttribute("id")) ? l = k.replace(Ab, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + q(j[i]);
                                m = rb.test(a) && b.parentNode || b, n = j.join(",")
                            }
                            if (n) try {
                                return eb.apply(c, m.querySelectorAll(n)), c
                            } catch (o) {} finally {
                                k || b.removeAttribute("id")
                            }
                        }
                    }
                    return y(a.replace(ob, "$1"), b, c, d)
                }

                function d(a) {
                    return wb.test(a + "")
                }

                function e() {
                    function a(c, d) {
                        return b.push(c += " ") > D.cacheLength && delete a[b.shift()], a[c] = d
                    }
                    var b = [];
                    return a
                }

                function f(a) {
                    return a[R] = !0, a
                }

                function g(a) {
                    var b = K.createElement("div");
                    try {
                        return !!a(b)
                    } catch (c) {
                        return !1
                    } finally {
                        b.parentNode && b.parentNode.removeChild(b), b = null
                    }
                }

                function h(a, b, c) {
                    a = a.split("|");
                    for (var d, e = a.length, f = c ? null : b; e--;)(d = D.attrHandle[a[e]]) && d !== b || (D.attrHandle[a[e]] = f)
                }

                function i(a, b) {
                    var c = a.getAttributeNode(b);
                    return c && c.specified ? c.value : a[b] === !0 ? b.toLowerCase() : null
                }

                function j(a, b) {
                    return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }

                function k(a) {
                    return "input" === a.nodeName.toLowerCase() ? a.defaultValue : b
                }

                function l(a, b) {
                    var c = b && a,
                        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || _) - (~a.sourceIndex || _);
                    if (d) return d;
                    if (c)
                        for (; c = c.nextSibling;)
                            if (c === b) return -1;
                    return a ? 1 : -1
                }

                function m(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return "input" === c && b.type === a
                    }
                }

                function n(a) {
                    return function(b) {
                        var c = b.nodeName.toLowerCase();
                        return ("input" === c || "button" === c) && b.type === a
                    }
                }

                function o(a) {
                    return f(function(b) {
                        return b = +b, f(function(c, d) {
                            for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                        })
                    })
                }

                function p(a, b) {
                    var d, e, f, g, h, i, j, k = W[a + " "];
                    if (k) return b ? 0 : k.slice(0);
                    for (h = a, i = [], j = D.preFilter; h;) {
                        (!d || (e = pb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = qb.exec(h)) && (d = e.shift(), f.push({
                            value: d,
                            type: e[0].replace(ob, " ")
                        }), h = h.slice(d.length));
                        for (g in D.filter) !(e = vb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                            value: d,
                            type: g,
                            matches: e
                        }), h = h.slice(d.length));
                        if (!d) break
                    }
                    return b ? h.length : h ? c.error(a) : W(a, i).slice(0)
                }

                function q(a) {
                    for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                    return d
                }

                function r(a, b, c) {
                    var d = b.dir,
                        e = c && "parentNode" === d,
                        f = U++;
                    return b.first ? function(b, c, f) {
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) return a(b, c, f)
                    } : function(b, c, g) {
                        var h, i, j, k = T + " " + f;
                        if (g) {
                            for (; b = b[d];)
                                if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                        } else
                            for (; b = b[d];)
                                if (1 === b.nodeType || e)
                                    if (j = b[R] || (b[R] = {}), (i = j[d]) && i[0] === k) {
                                        if ((h = i[1]) === !0 || h === C) return h === !0
                                    } else if (i = j[d] = [k], i[1] = a(b, c, g) || C, i[1] === !0) return !0
                    }
                }

                function s(a) {
                    return a.length > 1 ? function(b, c, d) {
                        for (var e = a.length; e--;)
                            if (!a[e](b, c, d)) return !1;
                        return !0
                    } : a[0]
                }

                function t(a, b, c, d, e) {
                    for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                    return g
                }

                function u(a, b, c, d, e, g) {
                    return d && !d[R] && (d = u(d)), e && !e[R] && (e = u(e, g)), f(function(f, g, h, i) {
                        var j, k, l, m = [],
                            n = [],
                            o = g.length,
                            p = f || x(b || "*", h.nodeType ? [h] : h, []),
                            q = !a || !f && b ? p : t(p, m, a, h, i),
                            r = c ? e || (f ? a : o || d) ? [] : g : q;
                        if (c && c(q, r, h, i), d)
                            for (j = t(r, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                        if (f) {
                            if (e || a) {
                                if (e) {
                                    for (j = [], k = r.length; k--;)(l = r[k]) && j.push(q[k] = l);
                                    e(null, r = [], j, i)
                                }
                                for (k = r.length; k--;)(l = r[k]) && (j = e ? gb.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                            }
                        } else r = t(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : eb.apply(g, r)
                    })
                }

                function v(a) {
                    for (var b, c, d, e = a.length, f = D.relative[a[0].type], g = f || D.relative[" "], h = f ? 1 : 0, i = r(function(a) {
                            return a === b
                        }, g, !0), j = r(function(a) {
                            return gb.call(b, a) > -1
                        }, g, !0), k = [function(a, c, d) {
                            return !f && (d || c !== H) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                        }]; e > h; h++)
                        if (c = D.relative[a[h].type]) k = [r(s(k), c)];
                        else {
                            if (c = D.filter[a[h].type].apply(null, a[h].matches), c[R]) {
                                for (d = ++h; e > d && !D.relative[a[d].type]; d++);
                                return u(h > 1 && s(k), h > 1 && q(a.slice(0, h - 1).concat({
                                    value: " " === a[h - 2].type ? "*" : ""
                                })).replace(ob, "$1"), c, d > h && v(a.slice(h, d)), e > d && v(a = a.slice(d)), e > d && q(a))
                            }
                            k.push(c)
                        }
                    return s(k)
                }

                function w(a, b) {
                    var d = 0,
                        e = b.length > 0,
                        g = a.length > 0,
                        h = function(f, h, i, j, k) {
                            var l, m, n, o = [],
                                p = 0,
                                q = "0",
                                r = f && [],
                                s = null != k,
                                u = H,
                                v = f || g && D.find.TAG("*", k && h.parentNode || h),
                                w = T += null == u ? 1 : Math.random() || .1;
                            for (s && (H = h !== K && h, C = d); null != (l = v[q]); q++) {
                                if (g && l) {
                                    for (m = 0; n = a[m++];)
                                        if (n(l, h, i)) {
                                            j.push(l);
                                            break
                                        }
                                    s && (T = w, C = ++d)
                                }
                                e && ((l = !n && l) && p--, f && r.push(l))
                            }
                            if (p += q, e && q !== p) {
                                for (m = 0; n = b[m++];) n(r, o, h, i);
                                if (f) {
                                    if (p > 0)
                                        for (; q--;) r[q] || o[q] || (o[q] = cb.call(j));
                                    o = t(o)
                                }
                                eb.apply(j, o), s && !f && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                            }
                            return s && (T = w, H = u), r
                        };
                    return e ? f(h) : h
                }

                function x(a, b, d) {
                    for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
                    return d
                }

                function y(a, b, c, d) {
                    var e, f, g, h, i, j = p(a);
                    if (!d && 1 === j.length) {
                        if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && B.getById && 9 === b.nodeType && M && D.relative[f[1].type]) {
                            if (b = (D.find.ID(g.matches[0].replace(Bb, Cb), b) || [])[0], !b) return c;
                            a = a.slice(f.shift().value.length)
                        }
                        for (e = vb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !D.relative[h = g.type]);)
                            if ((i = D.find[h]) && (d = i(g.matches[0].replace(Bb, Cb), rb.test(f[0].type) && b.parentNode || b))) {
                                if (f.splice(e, 1), a = d.length && q(f), !a) return eb.apply(c, d), c;
                                break
                            }
                    }
                    return G(a, j)(d, b, !M, c, rb.test(a)), c
                }

                function z() {}
                var A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R = "sizzle" + -new Date,
                    S = a.document,
                    T = 0,
                    U = 0,
                    V = e(),
                    W = e(),
                    X = e(),
                    Y = !1,
                    Z = function() {
                        return 0
                    },
                    $ = typeof b,
                    _ = 1 << 31,
                    ab = {}.hasOwnProperty,
                    bb = [],
                    cb = bb.pop,
                    db = bb.push,
                    eb = bb.push,
                    fb = bb.slice,
                    gb = bb.indexOf || function(a) {
                        for (var b = 0, c = this.length; c > b; b++)
                            if (this[b] === a) return b;
                        return -1
                    },
                    hb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ib = "[\\x20\\t\\r\\n\\f]",
                    jb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    lb = jb.replace("w", "w#"),
                    mb = "\\[" + ib + "*(" + jb + ")" + ib + "*(?:([*^$|!~]?=)" + ib + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + lb + ")|)|)" + ib + "*\\]",
                    nb = ":(" + jb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + mb.replace(3, 8) + ")*)|.*)\\)|)",
                    ob = RegExp("^" + ib + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ib + "+$", "g"),
                    pb = RegExp("^" + ib + "*," + ib + "*"),
                    qb = RegExp("^" + ib + "*([>+~]|" + ib + ")" + ib + "*"),
                    rb = RegExp(ib + "*[+~]"),
                    sb = RegExp("=" + ib + "*([^\\]'\"]*)" + ib + "*\\]", "g"),
                    tb = RegExp(nb),
                    ub = RegExp("^" + lb + "$"),
                    vb = {
                        ID: RegExp("^#(" + jb + ")"),
                        CLASS: RegExp("^\\.(" + jb + ")"),
                        TAG: RegExp("^(" + jb.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + mb),
                        PSEUDO: RegExp("^" + nb),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ib + "*(even|odd|(([+-]|)(\\d*)n|)" + ib + "*(?:([+-]|)" + ib + "*(\\d+)|))" + ib + "*\\)|)", "i"),
                        bool: RegExp("^(?:" + hb + ")$", "i"),
                        needsContext: RegExp("^" + ib + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ib + "*((?:-\\d)?\\d*)" + ib + "*\\)|)(?=[^-]|$)", "i")
                    },
                    wb = /^[^{]+\{\s*\[native \w/,
                    xb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    yb = /^(?:input|select|textarea|button)$/i,
                    zb = /^h\d$/i,
                    Ab = /'|\\/g,
                    Bb = RegExp("\\\\([\\da-f]{1,6}" + ib + "?|(" + ib + ")|.)", "ig"),
                    Cb = function(a, b, c) {
                        var d = "0x" + b - 65536;
                        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
                    };
                try {
                    eb.apply(bb = fb.call(S.childNodes), S.childNodes), bb[S.childNodes.length].nodeType
                } catch (Db) {
                    eb = {
                        apply: bb.length ? function(a, b) {
                            db.apply(a, fb.call(b))
                        } : function(a, b) {
                            for (var c = a.length, d = 0; a[c++] = b[d++];);
                            a.length = c - 1
                        }
                    }
                }
                F = c.isXML = function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1
                }, B = c.support = {}, J = c.setDocument = function(a) {
                    var c = a ? a.ownerDocument || a : S,
                        e = c.parentWindow;
                    return c !== K && 9 === c.nodeType && c.documentElement ? (K = c, L = c.documentElement, M = !F(c), e && e.frameElement && e.attachEvent("onbeforeunload", function() {
                        J()
                    }), B.attributes = g(function(a) {
                        return a.innerHTML = "<a href='#'></a>", h("type|href|height|width", j, "#" === a.firstChild.getAttribute("href")), h(hb, i, null == a.getAttribute("disabled")), a.className = "i", !a.getAttribute("className")
                    }), B.input = g(function(a) {
                        return a.innerHTML = "<input>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                    }), h("value", k, B.attributes && B.input), B.getElementsByTagName = g(function(a) {
                        return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
                    }), B.getElementsByClassName = g(function(a) {
                        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                    }), B.getById = g(function(a) {
                        return L.appendChild(a).id = R, !c.getElementsByName || !c.getElementsByName(R).length
                    }), B.getById ? (D.find.ID = function(a, b) {
                        if (typeof b.getElementById !== $ && M) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [c] : []
                        }
                    }, D.filter.ID = function(a) {
                        var b = a.replace(Bb, Cb);
                        return function(a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete D.find.ID, D.filter.ID = function(a) {
                        var b = a.replace(Bb, Cb);
                        return function(a) {
                            var c = typeof a.getAttributeNode !== $ && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), D.find.TAG = B.getElementsByTagName ? function(a, c) {
                        return typeof c.getElementsByTagName !== $ ? c.getElementsByTagName(a) : b
                    } : function(a, b) {
                        var c, d = [],
                            e = 0,
                            f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, D.find.CLASS = B.getElementsByClassName && function(a, c) {
                        return typeof c.getElementsByClassName !== $ && M ? c.getElementsByClassName(a) : b
                    }, O = [], N = [], (B.qsa = d(c.querySelectorAll)) && (g(function(a) {
                        a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || N.push("\\[" + ib + "*(?:value|" + hb + ")"), a.querySelectorAll(":checked").length || N.push(":checked")
                    }), g(function(a) {
                        var b = c.createElement("input");
                        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && N.push("[*^$]=" + ib + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), N.push(",.*:")
                    })), (B.matchesSelector = d(P = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && g(function(a) {
                        B.disconnectedMatch = P.call(a, "div"), P.call(a, "[s!='']:x"), O.push("!=", nb)
                    }), N = N.length && RegExp(N.join("|")), O = O.length && RegExp(O.join("|")), Q = d(L.contains) || L.compareDocumentPosition ? function(a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                            d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, B.sortDetached = g(function(a) {
                        return 1 & a.compareDocumentPosition(c.createElement("div"))
                    }), Z = L.compareDocumentPosition ? function(a, b) {
                        if (a === b) return Y = !0, 0;
                        var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                        return d ? 1 & d || !B.sortDetached && b.compareDocumentPosition(a) === d ? a === c || Q(S, a) ? -1 : b === c || Q(S, b) ? 1 : I ? gb.call(I, a) - gb.call(I, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                    } : function(a, b) {
                        var d, e = 0,
                            f = a.parentNode,
                            g = b.parentNode,
                            h = [a],
                            i = [b];
                        if (a === b) return Y = !0, 0;
                        if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : I ? gb.call(I, a) - gb.call(I, b) : 0;
                        if (f === g) return l(a, b);
                        for (d = a; d = d.parentNode;) h.unshift(d);
                        for (d = b; d = d.parentNode;) i.unshift(d);
                        for (; h[e] === i[e];) e++;
                        return e ? l(h[e], i[e]) : h[e] === S ? -1 : i[e] === S ? 1 : 0
                    }, c) : K
                }, c.matches = function(a, b) {
                    return c(a, null, null, b)
                }, c.matchesSelector = function(a, b) {
                    if ((a.ownerDocument || a) !== K && J(a), b = b.replace(sb, "='$1']"), !(!B.matchesSelector || !M || O && O.test(b) || N && N.test(b))) try {
                        var d = P.call(a, b);
                        if (d || B.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                    } catch (e) {}
                    return c(b, K, null, [a]).length > 0
                }, c.contains = function(a, b) {
                    return (a.ownerDocument || a) !== K && J(a), Q(a, b)
                }, c.attr = function(a, c) {
                    (a.ownerDocument || a) !== K && J(a);
                    var d = D.attrHandle[c.toLowerCase()],
                        e = d && ab.call(D.attrHandle, c.toLowerCase()) ? d(a, c, !M) : b;
                    return e === b ? B.attributes || !M ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
                }, c.error = function(a) {
                    throw Error("Syntax error, unrecognized expression: " + a)
                }, c.uniqueSort = function(a) {
                    var b, c = [],
                        d = 0,
                        e = 0;
                    if (Y = !B.detectDuplicates, I = !B.sortStable && a.slice(0), a.sort(Z), Y) {
                        for (; b = a[e++];) b === a[e] && (d = c.push(e));
                        for (; d--;) a.splice(c[d], 1)
                    }
                    return a
                }, E = c.getText = function(a) {
                    var b, c = "",
                        d = 0,
                        e = a.nodeType;
                    if (e) {
                        if (1 === e || 9 === e || 11 === e) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += E(a)
                        } else if (3 === e || 4 === e) return a.nodeValue
                    } else
                        for (; b = a[d]; d++) c += E(b);
                    return c
                }, D = c.selectors = {
                    cacheLength: 50,
                    createPseudo: f,
                    match: vb,
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
                        ATTR: function(a) {
                            return a[1] = a[1].replace(Bb, Cb), a[3] = (a[4] || a[5] || "").replace(Bb, Cb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                        },
                        CHILD: function(a) {
                            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                        },
                        PSEUDO: function(a) {
                            var c, d = !a[5] && a[2];
                            return vb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && tb.test(d) && (c = p(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(a) {
                            var b = a.replace(Bb, Cb).toLowerCase();
                            return "*" === a ? function() {
                                return !0
                            } : function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b
                            }
                        },
                        CLASS: function(a) {
                            var b = V[a + " "];
                            return b || (b = RegExp("(^|" + ib + ")" + a + "(" + ib + "|$)")) && V(a, function(a) {
                                return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== $ && a.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(a, b, d) {
                            return function(e) {
                                var f = c.attr(e, a);
                                return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                            }
                        },
                        CHILD: function(a, b, c, d, e) {
                            var f = "nth" !== a.slice(0, 3),
                                g = "last" !== a.slice(-4),
                                h = "of-type" === b;
                            return 1 === d && 0 === e ? function(a) {
                                return !!a.parentNode
                            } : function(b, c, i) {
                                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                    q = b.parentNode,
                                    r = h && b.nodeName.toLowerCase(),
                                    s = !i && !h;
                                if (q) {
                                    if (f) {
                                        for (; p;) {
                                            for (l = b; l = l[p];)
                                                if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                            o = p = "only" === a && !o && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                        for (k = q[R] || (q[R] = {}), j = k[a] || [], n = j[0] === T && j[1], m = j[0] === T && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                            if (1 === l.nodeType && ++m && l === b) {
                                                k[a] = [T, n, m];
                                                break
                                            }
                                    } else if (s && (j = (b[R] || (b[R] = {}))[a]) && j[0] === T) m = j[1];
                                    else
                                        for (;
                                            (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[R] || (l[R] = {}))[a] = [T, m]), l !== b)););
                                    return m -= e, m === d || 0 === m % d && m / d >= 0
                                }
                            }
                        },
                        PSEUDO: function(a, b) {
                            var d, e = D.pseudos[a] || D.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                            return e[R] ? e(b) : e.length > 1 ? (d = [a, a, "", b], D.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
                                for (var d, f = e(a, b), g = f.length; g--;) d = gb.call(a, f[g]), a[d] = !(c[d] = f[g])
                            }) : function(a) {
                                return e(a, 0, d)
                            }) : e
                        }
                    },
                    pseudos: {
                        not: f(function(a) {
                            var b = [],
                                c = [],
                                d = G(a.replace(ob, "$1"));
                            return d[R] ? f(function(a, b, c, e) {
                                for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                            }) : function(a, e, f) {
                                return b[0] = a, d(b, null, f, c), !c.pop()
                            }
                        }),
                        has: f(function(a) {
                            return function(b) {
                                return c(a, b).length > 0
                            }
                        }),
                        contains: f(function(a) {
                            return function(b) {
                                return (b.textContent || b.innerText || E(b)).indexOf(a) > -1
                            }
                        }),
                        lang: f(function(a) {
                            return ub.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(Bb, Cb).toLowerCase(),
                                function(b) {
                                    var c;
                                    do
                                        if (c = M ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                    return !1
                                }
                        }),
                        target: function(b) {
                            var c = a.location && a.location.hash;
                            return c && c.slice(1) === b.id
                        },
                        root: function(a) {
                            return a === L
                        },
                        focus: function(a) {
                            return a === K.activeElement && (!K.hasFocus || K.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                        },
                        enabled: function(a) {
                            return a.disabled === !1
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && !!a.checked || "option" === b && !!a.selected
                        },
                        selected: function(a) {
                            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        },
                        empty: function(a) {
                            for (a = a.firstChild; a; a = a.nextSibling)
                                if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                            return !0
                        },
                        parent: function(a) {
                            return !D.pseudos.empty(a)
                        },
                        header: function(a) {
                            return zb.test(a.nodeName)
                        },
                        input: function(a) {
                            return yb.test(a.nodeName)
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return "input" === b && "button" === a.type || "button" === b
                        },
                        text: function(a) {
                            var b;
                            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                        },
                        first: o(function() {
                            return [0]
                        }),
                        last: o(function(a, b) {
                            return [b - 1]
                        }),
                        eq: o(function(a, b, c) {
                            return [0 > c ? c + b : c]
                        }),
                        even: o(function(a, b) {
                            for (var c = 0; b > c; c += 2) a.push(c);
                            return a
                        }),
                        odd: o(function(a, b) {
                            for (var c = 1; b > c; c += 2) a.push(c);
                            return a
                        }),
                        lt: o(function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                            return a
                        }),
                        gt: o(function(a, b, c) {
                            for (var d = 0 > c ? c + b : c; b > ++d;) a.push(d);
                            return a
                        })
                    }
                };
                for (A in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) D.pseudos[A] = m(A);
                for (A in {
                        submit: !0,
                        reset: !0
                    }) D.pseudos[A] = n(A);
                G = c.compile = function(a, b) {
                    var c, d = [],
                        e = [],
                        f = X[a + " "];
                    if (!f) {
                        for (b || (b = p(a)), c = b.length; c--;) f = v(b[c]), f[R] ? d.push(f) : e.push(f);
                        f = X(a, w(e, d))
                    }
                    return f
                }, D.pseudos.nth = D.pseudos.eq, z.prototype = D.filters = D.pseudos, D.setFilters = new z, B.sortStable = R.split("").sort(Z).join("") === R, J(), [0, 0].sort(Z), B.detectDuplicates = Y, kb.find = c, kb.expr = c.selectors, kb.expr[":"] = kb.expr.pseudos, kb.unique = c.uniqueSort, kb.text = c.getText, kb.isXMLDoc = c.isXML, kb.contains = c.contains
            }(a);
        var zb = {};
        kb.Callbacks = function(a) {
            a = "string" == typeof a ? zb[a] || d(a) : kb.extend({}, a);
            var c, e, f, g, h, i, j = [],
                k = !a.once && [],
                l = function(b) {
                    for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
                        if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                            e = !1;
                            break
                        }
                    c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable())
                },
                m = {
                    add: function() {
                        if (j) {
                            var b = j.length;
                            ! function d(b) {
                                kb.each(b, function(b, c) {
                                    var e = kb.type(c);
                                    "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                                })
                            }(arguments), c ? g = j.length : e && (i = b, l(e))
                        }
                        return this
                    },
                    remove: function() {
                        return j && kb.each(arguments, function(a, b) {
                            for (var d;
                                (d = kb.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--)
                        }), this
                    },
                    has: function(a) {
                        return a ? kb.inArray(a, j) > -1 : !(!j || !j.length)
                    },
                    empty: function() {
                        return j = [], g = 0, this
                    },
                    disable: function() {
                        return j = k = e = b, this
                    },
                    disabled: function() {
                        return !j
                    },
                    lock: function() {
                        return k = b, e || m.disable(), this
                    },
                    locked: function() {
                        return !k
                    },
                    fireWith: function(a, b) {
                        return b = b || [], b = [a, b.slice ? b.slice() : b], !j || f && !k || (c ? k.push(b) : l(b)), this
                    },
                    fire: function() {
                        return m.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!f
                    }
                };
            return m
        }, kb.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", kb.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", kb.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", kb.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return kb.Deferred(function(c) {
                                kb.each(b, function(b, f) {
                                    var g = f[0],
                                        h = kb.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = h && h.apply(this, arguments);
                                        a && kb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? kb.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, kb.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = fb.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && kb.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : kb.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? fb.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && kb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        }), kb.support = function(b) {
            var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
            if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
            f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, b.htmlSerialize = !!l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), b.cssFloat = !!d.style.cssFloat, b.checkOn = !!e.value, b.optSelected = h.selected, b.enctype = !!Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
            try {
                delete l.test
            } catch (m) {
                b.deleteExpando = !1
            }
            e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function() {
                b.noCloneEvent = !1
            }), l.cloneNode(!0).click());
            for (k in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
            l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip;
            for (k in kb(b)) break;
            return b.ownLast = "0" !== k, kb(function() {
                var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    g = Y.getElementsByTagName("body")[0];
                g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", kb.swap(g, null != g.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    b.boxSizing = 4 === l.offsetWidth
                }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                    width: "4px"
                }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null)
            }), c = f = g = h = d = e = null, b
        }({});
        var Ab = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Bb = /([A-Z])/g;
        kb.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? kb.cache[a[kb.expando]] : a[kb.expando], !!a && !h(a)
            },
            data: function(a, b, c) {
                return e(a, b, c)
            },
            removeData: function(a, b) {
                return f(a, b)
            },
            _data: function(a, b, c) {
                return e(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return f(a, b, !0)
            },
            acceptData: function(a) {
                if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
                var b = a.nodeName && kb.noData[a.nodeName.toLowerCase()];
                return !b || b !== !0 && a.getAttribute("classid") === b
            }
        }), kb.fn.extend({
            data: function(a, c) {
                var d, e, f = null,
                    h = 0,
                    i = this[0];
                if (a === b) {
                    if (this.length && (f = kb.data(i), 1 === i.nodeType && !kb._data(i, "parsedAttrs"))) {
                        for (d = i.attributes; d.length > h; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = kb.camelCase(e.slice(5)), g(i, e, f[e]));
                        kb._data(i, "parsedAttrs", !0)
                    }
                    return f
                }
                return "object" == typeof a ? this.each(function() {
                    kb.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    kb.data(this, a, c)
                }) : i ? g(i, a, kb.data(i, a)) : null
            },
            removeData: function(a) {
                return this.each(function() {
                    kb.removeData(this, a)
                })
            }
        }), kb.extend({
            queue: function(a, c, d) {
                var e;
                return a ? (c = (c || "fx") + "queue", e = kb._data(a, c), d && (!e || kb.isArray(d) ? e = kb._data(a, c, kb.makeArray(d)) : e.push(d)), e || []) : b
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = kb.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = kb._queueHooks(a, b),
                    g = function() {
                        kb.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return kb._data(a, c) || kb._data(a, c, {
                    empty: kb.Callbacks("once memory").add(function() {
                        kb._removeData(a, b + "queue"), kb._removeData(a, c)
                    })
                })
            }
        }), kb.fn.extend({
            queue: function(a, c) {
                var d = 2;
                return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? kb.queue(this[0], a) : c === b ? this : this.each(function() {
                    var b = kb.queue(this, a, c);
                    kb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && kb.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    kb.dequeue(this, a)
                })
            },
            delay: function(a, b) {
                return a = kb.fx ? kb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, c) {
                var d, e = 1,
                    f = kb.Deferred(),
                    g = this,
                    h = this.length,
                    i = function() {
                        --e || f.resolveWith(g, [g])
                    };
                for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = kb._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
                return i(), f.promise(c)
            }
        });
        var Cb, Db, Eb = /[\t\r\n\f]/g,
            Fb = /\r/g,
            Gb = /^(?:input|select|textarea|button|object)$/i,
            Hb = /^(?:a|area)$/i,
            Ib = /^(?:checked|selected)$/i,
            Jb = kb.support.getSetAttribute,
            Kb = kb.support.input;
        kb.fn.extend({
            attr: function(a, b) {
                return kb.access(this, kb.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    kb.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return kb.access(this, kb.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return a = kb.propFix[a] || a, this.each(function() {
                    try {
                        this[a] = b, delete this[a]
                    } catch (c) {}
                })
            },
            addClass: function(a) {
                var b, c, d, e, f, g = 0,
                    h = this.length,
                    i = "string" == typeof a && a;
                if (kb.isFunction(a)) return this.each(function(b) {
                    kb(this).addClass(a.call(this, b, this.className))
                });
                if (i)
                    for (b = (a || "").match(mb) || []; h > g; g++)
                        if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                            for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                            c.className = kb.trim(d)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g = 0,
                    h = this.length,
                    i = 0 === arguments.length || "string" == typeof a && a;
                if (kb.isFunction(a)) return this.each(function(b) {
                    kb(this).removeClass(a.call(this, b, this.className))
                });
                if (i)
                    for (b = (a || "").match(mb) || []; h > g; g++)
                        if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            c.className = a ? kb.trim(d) : ""
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a,
                    d = "boolean" == typeof b;
                return this.each(kb.isFunction(a) ? function(c) {
                    kb(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function() {
                    if ("string" === c)
                        for (var e, f = 0, g = kb(this), h = b, i = a.match(mb) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                    else(c === W || "boolean" === c) && (this.className && kb._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : kb._data(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0) return !0;
                return !1
            },
            val: function(a) {
                var c, d, e, f = this[0];
                return arguments.length ? (e = kb.isFunction(a), this.each(function(c) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, c, kb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : kb.isArray(f) && (f = kb.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), d = kb.valHooks[this.type] || kb.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f))
                })) : f ? (d = kb.valHooks[f.type] || kb.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Fb, "") : null == c ? "" : c)) : void 0
            }
        }), kb.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = kb.find.attr(a, "value");
                        return null != b ? b : a.text
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], !(!c.selected && i !== e || (kb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && kb.nodeName(c.parentNode, "optgroup"))) {
                                if (b = kb(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = kb.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = kb.inArray(kb(d).val(), f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            },
            attr: function(a, c, d) {
                var e, f, g = a.nodeType;
                return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === W ? kb.prop(a, c, d) : (1 === g && kb.isXMLDoc(a) || (c = c.toLowerCase(), e = kb.attrHooks[c] || (kb.expr.match.bool.test(c) ? Db : Cb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = kb.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : (kb.removeAttr(a, c), b)) : void 0
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(mb);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = kb.propFix[c] || c, kb.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[kb.camelCase("default-" + c)] = a[d] = !1 : kb.attr(a, c, ""), a.removeAttribute(Jb ? c : d)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!kb.support.radioValue && "radio" === b && kb.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, c, d) {
                var e, f, g, h = a.nodeType;
                return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !kb.isXMLDoc(a), g && (c = kb.propFix[c] || c, f = kb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var b = kb.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Gb.test(a.nodeName) || Hb.test(a.nodeName) && a.href ? 0 : -1
                    }
                }
            }
        }), Db = {
            set: function(a, b, c) {
                return b === !1 ? kb.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && kb.propFix[c] || c, c) : a[kb.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, kb.each(kb.expr.match.bool.source.match(/\w+/g), function(a, c) {
            var d = kb.expr.attrHandle[c] || kb.find.attr;
            kb.expr.attrHandle[c] = Kb && Jb || !Ib.test(c) ? function(a, c, e) {
                var f = kb.expr.attrHandle[c],
                    g = e ? b : (kb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
                return kb.expr.attrHandle[c] = f, g
            } : function(a, c, d) {
                return d ? b : a[kb.camelCase("default-" + c)] ? c.toLowerCase() : null
            }
        }), Kb && Jb || (kb.attrHooks.value = {
            set: function(a, c, d) {
                return kb.nodeName(a, "input") ? (a.defaultValue = c, b) : Cb && Cb.set(a, c, d)
            }
        }), Jb || (Cb = {
            set: function(a, c, d) {
                var e = a.getAttributeNode(d);
                return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b
            }
        }, kb.expr.attrHandle.id = kb.expr.attrHandle.name = kb.expr.attrHandle.coords = function(a, c, d) {
            var e;
            return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null
        }, kb.valHooks.button = {
            get: function(a, c) {
                var d = a.getAttributeNode(c);
                return d && d.specified ? d.value : b
            },
            set: Cb.set
        }, kb.attrHooks.contenteditable = {
            set: function(a, b, c) {
                Cb.set(a, "" === b ? !1 : b, c)
            }
        }, kb.each(["width", "height"], function(a, c) {
            kb.attrHooks[c] = {
                set: function(a, d) {
                    return "" === d ? (a.setAttribute(c, "auto"), d) : b
                }
            }
        })), kb.support.hrefNormalized || kb.each(["href", "src"], function(a, b) {
            kb.propHooks[b] = {
                get: function(a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), kb.support.style || (kb.attrHooks.style = {
            get: function(a) {
                return a.style.cssText || b
            },
            set: function(a, b) {
                return a.style.cssText = b + ""
            }
        }), kb.support.optSelected || (kb.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        }), kb.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            kb.propFix[this.toLowerCase()] = this
        }), kb.support.enctype || (kb.propFix.enctype = "encoding"), kb.each(["radio", "checkbox"], function() {
            kb.valHooks[this] = {
                set: function(a, c) {
                    return kb.isArray(c) ? a.checked = kb.inArray(kb(a).val(), c) >= 0 : b
                }
            }, kb.support.checkOn || (kb.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var Lb = /^(?:input|select|textarea)$/i,
            Mb = /^key/,
            Nb = /^(?:mouse|contextmenu)|click/,
            Ob = /^(?:focusinfocus|focusoutblur)$/,
            Pb = /^([^.]*)(?:\.(.+)|)$/;
        kb.event = {
            global: {},
            add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q, r = kb._data(a);
                if (r) {
                    for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = kb.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                            return typeof kb === W || a && kb.event.triggered === a.type ? b : kb.event.dispatch.apply(l.elem, arguments)
                        }, l.elem = a), c = (c || "").match(mb) || [""], i = c.length; i--;) g = Pb.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = kb.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = kb.event.special[o] || {}, m = kb.extend({
                        type: o,
                        origType: q,
                        data: e,
                        handler: d,
                        guid: d.guid,
                        selector: f,
                        needsContext: f && kb.expr.match.needsContext.test(f),
                        namespace: p.join(".")
                    }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), kb.event.global[o] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = kb.hasData(a) && kb._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(mb) || [""], j = b.length; j--;)
                        if (h = Pb.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = kb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || kb.removeEvent(a, n, q.handle), delete k[n])
                        } else
                            for (n in k) kb.event.remove(a, n + b[j], c, d, !0);
                    kb.isEmptyObject(k) && (delete q.handle, kb._removeData(a, "events"))
                }
            },
            trigger: function(c, d, e, f) {
                var g, h, i, j, k, l, m, n = [e || Y],
                    o = ib.call(c, "type") ? c.type : c,
                    p = ib.call(c, "namespace") ? c.namespace.split(".") : [];
                if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Ob.test(o + kb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[kb.expando] ? c : new kb.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : kb.makeArray(d, [c]), k = kb.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                    if (!f && !k.noBubble && !kb.isWindow(e)) {
                        for (j = k.delegateType || o, Ob.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                        l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a)
                    }
                    for (m = 0;
                        (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (kb._data(i, "events") || {})[c.type] && kb._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && kb.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                    if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && kb.acceptData(e) && h && e[o] && !kb.isWindow(e)) {
                        l = e[h], l && (e[h] = null), kb.event.triggered = o;
                        try {
                            e[o]()
                        } catch (q) {}
                        kb.event.triggered = b, l && (e[h] = l)
                    }
                    return c.result
                }
            },
            dispatch: function(a) {
                a = kb.event.fix(a);
                var c, d, e, f, g, h = [],
                    i = fb.call(arguments),
                    j = (kb._data(this, "events") || {})[a.type] || [],
                    k = kb.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    for (h = kb.event.handlers.call(this, a, j), c = 0;
                        (f = h[c++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = f.elem, g = 0;
                            (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((kb.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, c) {
                var d, e, f, g, h = [],
                    i = c.delegateCount,
                    j = a.target;
                if (i && j.nodeType && (!a.button || "click" !== a.type))
                    for (; j != this; j = j.parentNode || this)
                        if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                            for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? kb(d, this).index(j) >= 0 : kb.find(d, this, null, [j]).length), f[d] && f.push(e);
                            f.length && h.push({
                                elem: j,
                                handlers: f
                            })
                        }
                return c.length > i && h.push({
                    elem: this,
                    handlers: c.slice(i)
                }), h
            },
            fix: function(a) {
                if (a[kb.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Nb.test(e) ? this.mouseHooks : Mb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new kb.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, c) {
                    var d, e, f, g = c.button,
                        h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== k() && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === k() && this.blur ? (this.blur(), !1) : b
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return kb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b
                    },
                    _default: function(a) {
                        return kb.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        a.result !== b && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = kb.extend(new kb.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? kb.event.trigger(e, null, b) : kb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, kb.removeEvent = Y.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c))
        }, kb.Event = function(a, c) {
            return this instanceof kb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, c && kb.extend(this, c), this.timeStamp = a && a.timeStamp || kb.now(), this[kb.expando] = !0, b) : new kb.Event(a, c)
        }, kb.Event.prototype = {
            isDefaultPrevented: j,
            isPropagationStopped: j,
            isImmediatePropagationStopped: j,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = i, this.stopPropagation()
            }
        }, kb.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            kb.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !kb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), kb.support.submitBubbles || (kb.event.special.submit = {
            setup: function() {
                return kb.nodeName(this, "form") ? !1 : (kb.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = kb.nodeName(c, "input") || kb.nodeName(c, "button") ? c.form : b;
                    d && !kb._data(d, "submitBubbles") && (kb.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), kb._data(d, "submitBubbles", !0))
                }), b)
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && kb.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                return kb.nodeName(this, "form") ? !1 : (kb.event.remove(this, "._submit"), b)
            }
        }), kb.support.changeBubbles || (kb.event.special.change = {
            setup: function() {
                return Lb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (kb.event.add(this, "propertychange._change", function(a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), kb.event.add(this, "click._change", function(a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), kb.event.simulate("change", this, a, !0)
                })), !1) : (kb.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    Lb.test(b.nodeName) && !kb._data(b, "changeBubbles") && (kb.event.add(b, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || kb.event.simulate("change", this.parentNode, a, !0)
                    }), kb._data(b, "changeBubbles", !0))
                }), b)
            },
            handle: function(a) {
                var c = a.target;
                return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b
            },
            teardown: function() {
                return kb.event.remove(this, "._change"), !Lb.test(this.nodeName)
            }
        }), kb.support.focusinBubbles || kb.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = 0,
                d = function(a) {
                    kb.event.simulate(b, a.target, kb.event.fix(a), !0)
                };
            kb.event.special[b] = {
                setup: function() {
                    0 === c++ && Y.addEventListener(a, d, !0)
                },
                teardown: function() {
                    0 === --c && Y.removeEventListener(a, d, !0)
                }
            }
        }), kb.fn.extend({
            on: function(a, c, d, e, f) {
                var g, h;
                if ("object" == typeof a) {
                    "string" != typeof c && (d = d || c, c = b);
                    for (g in a) this.on(g, c, d, a[g], f);
                    return this
                }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
                else if (!e) return this;
                return 1 === f && (h = e, e = function(a) {
                    return kb().off(a), h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = kb.guid++)), this.each(function() {
                    kb.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, kb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if ("object" == typeof a) {
                    for (f in a) this.off(f, c, a[f]);
                    return this
                }
                return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function() {
                    kb.event.remove(this, a, d, c)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    kb.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, c) {
                var d = this[0];
                return d ? kb.event.trigger(a, c, d, !0) : b
            }
        });
        var Qb = /^.[^:#\[\.,]*$/,
            Rb = /^(?:parents|prev(?:Until|All))/,
            Sb = kb.expr.match.needsContext,
            Tb = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        kb.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(kb(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (kb.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) kb.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? kb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            has: function(a) {
                var b, c = kb(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (kb.contains(this, c[b])) return !0
                })
            },
            not: function(a) {
                return this.pushStack(m(this, a || [], !0))
            },
            filter: function(a) {
                return this.pushStack(m(this, a || [], !1))
            },
            is: function(a) {
                return !!m(this, "string" == typeof a && Sb.test(a) ? kb(a) : a || [], !1).length
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? kb(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && kb.find.matchesSelector(c, a))) {
                            c = f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? kb.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? kb.inArray(this[0], kb(a)) : kb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                var c = "string" == typeof a ? kb(a, b) : kb.makeArray(a && a.nodeType ? [a] : a),
                    d = kb.merge(this.get(), c);
                return this.pushStack(kb.unique(d))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), kb.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return kb.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return kb.dir(a, "parentNode", c)
            },
            next: function(a) {
                return l(a, "nextSibling")
            },
            prev: function(a) {
                return l(a, "previousSibling")
            },
            nextAll: function(a) {
                return kb.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return kb.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return kb.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return kb.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return kb.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return kb.sibling(a.firstChild)
            },
            contents: function(a) {
                return kb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : kb.merge([], a.childNodes)
            }
        }, function(a, b) {
            kb.fn[a] = function(c, d) {
                var e = kb.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = kb.filter(d, e)), this.length > 1 && (Tb[a] || (e = kb.unique(e)), Rb.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        }), kb.extend({
            filter: function(a, b, c) {
                var d = b[0];
                return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? kb.find.matchesSelector(d, a) ? [d] : [] : kb.find.matches(a, kb.grep(b, function(a) {
                    return 1 === a.nodeType
                }))
            },
            dir: function(a, c, d) {
                for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !kb(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
                return e
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        });
        var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Vb = / jQuery\d+="(?:null|\d+)"/g,
            Wb = RegExp("<(?:" + Ub + ")[\\s/>]", "i"),
            Xb = /^\s+/,
            Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Zb = /<([\w:]+)/,
            $b = /<tbody/i,
            _b = /<|&#?\w+;/,
            ac = /<(?:script|style|link)/i,
            bc = /^(?:checkbox|radio)$/i,
            cc = /checked\s*(?:[^=]|=\s*.checked.)/i,
            dc = /^$|\/(?:java|ecma)script/i,
            ec = /^true\/(.*)/,
            fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            gc = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: kb.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            hc = n(Y),
            ic = hc.appendChild(Y.createElement("div"));
        gc.optgroup = gc.option, gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead, gc.th = gc.td, kb.fn.extend({
            text: function(a) {
                return kb.access(this, function(a) {
                    return a === b ? kb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = o(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = o(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? kb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || kb.cleanData(u(c)), c.parentNode && (b && kb.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && kb.cleanData(u(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                    a.options && kb.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return kb.clone(this, a, b)
                })
            },
            html: function(a) {
                return kb.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                    if (!("string" != typeof a || ac.test(a) || !kb.support.htmlSerialize && Wb.test(a) || !kb.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(Yb, "<$1></$2>");
                        try {
                            for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (kb.cleanData(u(c, !1)), c.innerHTML = a);
                            c = 0
                        } catch (f) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = kb.map(this, function(a) {
                        return [a.nextSibling, a.parentNode]
                    }),
                    b = 0;
                return this.domManip(arguments, function(c) {
                    var d = a[b++],
                        e = a[b++];
                    e && (d && d.parentNode !== e && (d = this.nextSibling), kb(this).remove(), e.insertBefore(c, d))
                }, !0), b ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b, c) {
                a = db.apply([], a);
                var d, e, f, g, h, i, j = 0,
                    k = this.length,
                    l = this,
                    m = k - 1,
                    n = a[0],
                    o = kb.isFunction(n);
                if (o || !(1 >= k || "string" != typeof n || kb.support.checkClone) && cc.test(n)) return this.each(function(d) {
                    var e = l.eq(d);
                    o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c)
                });
                if (k && (i = kb.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 1 === i.childNodes.length && (i = d), d)) {
                    for (g = kb.map(u(i, "script"), p), f = g.length; k > j; j++) e = i, j !== m && (e = kb.clone(e, !0, !0), f && kb.merge(g, u(e, "script"))), b.call(this[j], e, j);
                    if (f)
                        for (h = g[g.length - 1].ownerDocument, kb.map(g, q), j = 0; f > j; j++) e = g[j], dc.test(e.type || "") && !kb._data(e, "globalEval") && kb.contains(h, e) && (e.src ? kb._evalUrl(e.src) : kb.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fc, "")));
                    i = d = null
                }
                return this
            }
        }), kb.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            kb.fn[a] = function(a) {
                for (var c, d = 0, e = [], f = kb(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), kb(f[d])[b](c), eb.apply(e, c.get());
                return this.pushStack(e)
            }
        }), kb.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h, i = kb.contains(a.ownerDocument, a);
                if (kb.support.html5Clone || kb.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, ic.removeChild(f = ic.firstChild)), !(kb.support.noCloneEvent && kb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || kb.isXMLDoc(a)))
                    for (d = u(f), h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]);
                    else s(a, f);
                return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, f
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++)
                    if (f = a[p], f || 0 === f)
                        if ("object" === kb.type(f)) kb.merge(o, f.nodeType ? [f] : f);
                        else if (_b.test(f)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Zb.exec(f) || ["", ""])[1].toLowerCase(), k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                    if (!kb.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), !kb.support.tbody)
                        for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) kb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    for (kb.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = m.lastChild
                } else o.push(b.createTextNode(f));
                for (h && m.removeChild(h), kb.support.appendChecked || kb.grep(u(o, "input"), v), p = 0; f = o[p++];)
                    if ((!d || -1 === kb.inArray(f, d)) && (g = kb.contains(f.ownerDocument, f), h = u(m.appendChild(f), "script"), g && r(h), c))
                        for (e = 0; f = h[e++];) dc.test(f.type || "") && c.push(f);
                return h = null, m
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0, h = kb.expando, i = kb.cache, j = kb.support.deleteExpando, k = kb.event.special; null != (c = a[g]); g++)
                    if ((b || kb.acceptData(c)) && (e = c[h], f = e && i[e])) {
                        if (f.events)
                            for (d in f.events) k[d] ? kb.event.remove(c, d) : kb.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, bb.push(e))
                    }
            },
            _evalUrl: function(a) {
                return kb.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), kb.fn.extend({
            wrapAll: function(a) {
                if (kb.isFunction(a)) return this.each(function(b) {
                    kb(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = kb(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return this.each(kb.isFunction(a) ? function(b) {
                    kb(this).wrapInner(a.call(this, b))
                } : function() {
                    var b = kb(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = kb.isFunction(a);
                return this.each(function(c) {
                    kb(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    kb.nodeName(this, "body") || kb(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var jc, kc, lc, mc = /alpha\([^)]*\)/i,
            nc = /opacity\s*=\s*([^)]*)/,
            oc = /^(top|right|bottom|left)$/,
            pc = /^(none|table(?!-c[ea]).+)/,
            qc = /^margin/,
            rc = RegExp("^(" + lb + ")(.*)$", "i"),
            sc = RegExp("^(" + lb + ")(?!px)[a-z%]+$", "i"),
            tc = RegExp("^([+-])=(" + lb + ")", "i"),
            uc = {
                BODY: "block"
            },
            vc = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            wc = {
                letterSpacing: 0,
                fontWeight: 400
            },
            xc = ["Top", "Right", "Bottom", "Left"],
            yc = ["Webkit", "O", "Moz", "ms"];
        kb.fn.extend({
            css: function(a, c) {
                return kb.access(this, function(a, c, d) {
                    var e, f, g = {},
                        h = 0;
                    if (kb.isArray(c)) {
                        for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = kb.css(a, c[h], !1, f);
                        return g
                    }
                    return d !== b ? kb.style(a, c, d) : kb.css(a, c)
                }, a, c, arguments.length > 1)
            },
            show: function() {
                return y(this, !0)
            },
            hide: function() {
                return y(this)
            },
            toggle: function(a) {
                var b = "boolean" == typeof a;
                return this.each(function() {
                    (b ? a : x(this)) ? kb(this).show(): kb(this).hide()
                })
            }
        }), kb.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = lc(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": kb.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g, h, i = kb.camelCase(c),
                        j = a.style;
                    if (c = kb.cssProps[i] || (kb.cssProps[i] = w(j, i)), h = kb.cssHooks[c] || kb.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                    if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(kb.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || kb.cssNumber[i] || (d += "px"), kb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                        j[c] = d
                    } catch (k) {}
                }
            },
            css: function(a, c, d, e) {
                var f, g, h, i = kb.camelCase(c);
                return c = kb.cssProps[i] || (kb.cssProps[i] = w(a.style, i)), h = kb.cssHooks[c] || kb.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lc(a, c, e)), "normal" === g && c in wc && (g = wc[c]), "" === d || d ? (f = parseFloat(g), d === !0 || kb.isNumeric(f) ? f || 0 : g) : g
            }
        }), a.getComputedStyle ? (kc = function(b) {
            return a.getComputedStyle(b, null)
        }, lc = function(a, c, d) {
            var e, f, g, h = d || kc(a),
                i = h ? h.getPropertyValue(c) || h[c] : b,
                j = a.style;
            return h && ("" !== i || kb.contains(a.ownerDocument, a) || (i = kb.style(a, c)), sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
        }) : Y.documentElement.currentStyle && (kc = function(a) {
            return a.currentStyle
        }, lc = function(a, c, d) {
            var e, f, g, h = d || kc(a),
                i = h ? h[c] : b,
                j = a.style;
            return null == i && j && j[c] && (i = j[c]), sc.test(i) && !oc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i
        }), kb.each(["height", "width"], function(a, c) {
            kb.cssHooks[c] = {
                get: function(a, d, e) {
                    return d ? 0 === a.offsetWidth && pc.test(kb.css(a, "display")) ? kb.swap(a, vc, function() {
                        return B(a, c, e)
                    }) : B(a, c, e) : b
                },
                set: function(a, b, d) {
                    var e = d && kc(a);
                    return z(a, b, d ? A(a, c, d, kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), kb.support.opacity || (kb.cssHooks.opacity = {
            get: function(a, b) {
                return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = kb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === kb.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e)
            }
        }), kb(function() {
            kb.support.reliableMarginRight || (kb.cssHooks.marginRight = {
                get: function(a, c) {
                    return c ? kb.swap(a, {
                        display: "inline-block"
                    }, lc, [a, "marginRight"]) : b
                }
            }), !kb.support.pixelPosition && kb.fn.position && kb.each(["top", "left"], function(a, c) {
                kb.cssHooks[c] = {
                    get: function(a, d) {
                        return d ? (d = lc(a, c), sc.test(d) ? kb(a).position()[c] + "px" : d) : b
                    }
                }
            })
        }), kb.expr && kb.expr.filters && (kb.expr.filters.hidden = function(a) {
            return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !kb.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || kb.css(a, "display"))
        }, kb.expr.filters.visible = function(a) {
            return !kb.expr.filters.hidden(a)
        }), kb.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            kb.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, qc.test(a) || (kb.cssHooks[a + b].set = z)
        });
        var zc = /%20/g,
            Ac = /\[\]$/,
            Bc = /\r?\n/g,
            Cc = /^(?:submit|button|image|reset|file)$/i,
            Dc = /^(?:input|select|textarea|keygen)/i;
        kb.fn.extend({
            serialize: function() {
                return kb.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = kb.prop(this, "elements");
                    return a ? kb.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !kb(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a))
                }).map(function(a, b) {
                    var c = kb(this).val();
                    return null == c ? null : kb.isArray(c) ? kb.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(Bc, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Bc, "\r\n")
                    }
                }).get()
            }
        }), kb.param = function(a, c) {
            var d, e = [],
                f = function(a, b) {
                    b = kb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = kb.ajaxSettings && kb.ajaxSettings.traditional), kb.isArray(a) || a.jquery && !kb.isPlainObject(a)) kb.each(a, function() {
                f(this.name, this.value)
            });
            else
                for (d in a) E(d, a[d], c, f);
            return e.join("&").replace(zc, "+")
        }, kb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            kb.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), kb.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var Ec, Fc, Gc = kb.now(),
            Hc = /\?/,
            Ic = /#.*$/,
            Jc = /([?&])_=[^&]*/,
            Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Mc = /^(?:GET|HEAD)$/,
            Nc = /^\/\//,
            Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Pc = kb.fn.load,
            Qc = {},
            Rc = {},
            Sc = "*/".concat("*");
        try {
            Fc = X.href
        } catch (Tc) {
            Fc = Y.createElement("a"), Fc.href = "", Fc = Fc.href
        }
        Ec = Oc.exec(Fc.toLowerCase()) || [], kb.fn.load = function(a, c, d) {
            if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
            var e, f, g, h = this,
                i = a.indexOf(" ");
            return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), kb.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && kb.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c
            }).done(function(a) {
                f = arguments, h.html(e ? kb("<div>").append(kb.parseHTML(a)).find(e) : a)
            }).complete(d && function(a, b) {
                h.each(d, f || [a.responseText, b, a])
            }), this
        }, kb.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            kb.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), kb.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Fc,
                type: "GET",
                isLocal: Lc.test(Ec[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Sc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": kb.parseJSON,
                    "text xml": kb.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? H(H(a, kb.ajaxSettings), b) : H(kb.ajaxSettings, a)
            },
            ajaxPrefilter: F(Qc),
            ajaxTransport: F(Rc),
            ajax: function(a, c) {
                function d(a, c, d, e) {
                    var f, l, s, t, v, x = c;
                    2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (kb.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (kb.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --kb.active || kb.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (c = a, a = b), c = c || {};
                var e, f, g, h, i, j, k, l, m = kb.ajaxSetup({}, c),
                    n = m.context || m,
                    o = m.context && (n.nodeType || n.jquery) ? kb(n) : kb.event,
                    p = kb.Deferred(),
                    q = kb.Callbacks("once memory"),
                    r = m.statusCode || {},
                    s = {},
                    t = {},
                    u = 0,
                    v = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === u) {
                                if (!l)
                                    for (l = {}; b = Kc.exec(h);) l[b[1].toLowerCase()] = b[2];
                                b = l[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === u ? h : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return u || (a = t[c] = t[c] || a, s[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return u || (m.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > u)
                                    for (b in a) r[b] = [r[b], a[b]];
                                else w.always(a[w.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || v;
                            return k && k.abort(b), d(0, b), this
                        }
                    };
                if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = kb.trim(m.dataType || "*").toLowerCase().match(mb) || [""], null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Ec[3] || ("http:" === Ec[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = kb.param(m.data, m.traditional)), G(Qc, m, c, w), 2 === u) return w;
                j = m.global, j && 0 === kb.active++ && kb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mc.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)), m.ifModified && (kb.lastModified[g] && w.setRequestHeader("If-Modified-Since", kb.lastModified[g]), kb.etag[g] && w.setRequestHeader("If-None-Match", kb.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
                for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
                if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
                v = "abort";
                for (f in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[f](m[f]);
                if (k = G(Rc, m, c, w)) {
                    w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                        w.abort("timeout")
                    }, m.timeout));
                    try {
                        u = 1, k.send(s, d)
                    } catch (x) {
                        if (!(2 > u)) throw x;
                        d(-1, x)
                    }
                } else d(-1, "No Transport");
                return w
            },
            getJSON: function(a, b, c) {
                return kb.get(a, b, c, "json")
            },
            getScript: function(a, c) {
                return kb.get(a, b, c, "script")
            }
        }), kb.each(["get", "post"], function(a, c) {
            kb[c] = function(a, d, e, f) {
                return kb.isFunction(d) && (f = f || e, e = d, d = b), kb.ajax({
                    url: a,
                    type: c,
                    dataType: f,
                    data: d,
                    success: e
                })
            }
        }), kb.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return kb.globalEval(a), a
                }
            }
        }), kb.ajaxPrefilter("script", function(a) {
            a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), kb.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var c, d = Y.head || kb("head")[0] || Y.documentElement;
                return {
                    send: function(b, e) {
                        c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                            (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"))
                        }, d.insertBefore(c, d.firstChild)
                    },
                    abort: function() {
                        c && c.onload(b, !0)
                    }
                }
            }
        });
        var Uc = [],
            Vc = /(=)\?(?=&|$)|\?\?/;
        kb.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Uc.pop() || kb.expando + "_" + Gc++;
                return this[a] = !0, a
            }
        }), kb.ajaxPrefilter("json jsonp", function(c, d, e) {
            var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
            return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = kb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
                return h || kb.error(f + " was not called"), h[0]
            }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
                h = arguments
            }, e.always(function() {
                a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)), h && kb.isFunction(g) && g(h[0]), h = g = b
            }), "script") : b
        });
        var Wc, Xc, Yc = 0,
            Zc = a.ActiveXObject && function() {
                var a;
                for (a in Wc) Wc[a](b, !0)
            };
        kb.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && K() || L()
        } : K, Xc = kb.ajaxSettings.xhr(), kb.support.cors = !!Xc && "withCredentials" in Xc, Xc = kb.support.ajax = !!Xc, Xc && kb.ajaxTransport(function(c) {
            if (!c.crossDomain || kb.support.cors) {
                var d;
                return {
                    send: function(e, f) {
                        var g, h, i = c.xhr();
                        if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                            for (h in c.xhrFields) i[h] = c.xhrFields[h];
                        c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (h in e) i.setRequestHeader(h, e[h])
                        } catch (j) {}
                        i.send(c.hasContent && c.data || null), d = function(a, e) {
                            var h, j, k, l;
                            try {
                                if (d && (e || 4 === i.readyState))
                                    if (d = b, g && (i.onreadystatechange = kb.noop, Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort();
                                    else {
                                        l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                        try {
                                            k = i.statusText
                                        } catch (m) {
                                            k = ""
                                        }
                                        h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                    }
                            } catch (n) {
                                e || f(-1, n)
                            }
                            l && f(h, k, l, j)
                        }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {}, kb(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d()
                    },
                    abort: function() {
                        d && d(b, !0)
                    }
                }
            }
        });
        var $c, _c, ad = /^(?:toggle|show|hide)$/,
            bd = RegExp("^(?:([+-])=|)(" + lb + ")([a-z%]*)$", "i"),
            cd = /queueHooks$/,
            dd = [Q],
            ed = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = bd.exec(b),
                        f = e && e[3] || (kb.cssNumber[a] ? "" : "px"),
                        g = (kb.cssNumber[a] || "px" !== f && +d) && bd.exec(kb.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, kb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        kb.Animation = kb.extend(O, {
            tweener: function(a, b) {
                kb.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ed[c] = ed[c] || [], ed[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? dd.unshift(a) : dd.push(a)
            }
        }), kb.Tween = R, R.prototype = {
            constructor: R,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (kb.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = R.propHooks[this.prop];
                return a && a.get ? a.get(this) : R.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = R.propHooks[this.prop];
                return this.pos = b = this.options.duration ? kb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = kb.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    kb.fx.step[a.prop] ? kb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[kb.cssProps[a.prop]] || kb.cssHooks[a.prop]) ? kb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, kb.each(["toggle", "show", "hide"], function(a, b) {
            var c = kb.fn[b];
            kb.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e)
            }
        }), kb.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(x).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = kb.isEmptyObject(a),
                    f = kb.speed(b, c, d),
                    g = function() {
                        var b = O(this, kb.extend({}, a), f);
                        (e || kb._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, c, d) {
                var e = function(a) {
                    var b = a.stop;
                    delete a.stop, b(d)
                };
                return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        c = null != a && a + "queueHooks",
                        f = kb.timers,
                        g = kb._data(this);
                    if (c) g[c] && g[c].stop && e(g[c]);
                    else
                        for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                    for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                    (b || !d) && kb.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = kb._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = kb.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, kb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), kb.each({
            slideDown: S("show"),
            slideUp: S("hide"),
            slideToggle: S("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            kb.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), kb.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? kb.extend({}, a) : {
                complete: c || !c && b || kb.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !kb.isFunction(b) && b
            };
            return d.duration = kb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in kb.fx.speeds ? kb.fx.speeds[d.duration] : kb.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                kb.isFunction(d.old) && d.old.call(this), d.queue && kb.dequeue(this, d.queue)
            }, d
        }, kb.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, kb.timers = [], kb.fx = R.prototype.init, kb.fx.tick = function() {
            var a, c = kb.timers,
                d = 0;
            for ($c = kb.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
            c.length || kb.fx.stop(), $c = b
        }, kb.fx.timer = function(a) {
            a() && kb.timers.push(a) && kb.fx.start()
        }, kb.fx.interval = 13, kb.fx.start = function() {
            _c || (_c = setInterval(kb.fx.tick, kb.fx.interval))
        }, kb.fx.stop = function() {
            clearInterval(_c), _c = null
        }, kb.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, kb.fx.step = {}, kb.expr && kb.expr.filters && (kb.expr.filters.animated = function(a) {
            return kb.grep(kb.timers, function(b) {
                return a === b.elem
            }).length
        }), kb.fn.offset = function(a) {
            if (arguments.length) return a === b ? this : this.each(function(b) {
                kb.offset.setOffset(this, a, b)
            });
            var c, d, e = {
                    top: 0,
                    left: 0
                },
                f = this[0],
                g = f && f.ownerDocument;
            return g ? (c = g.documentElement, kb.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), d = T(g), {
                top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
                left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
            }) : e) : void 0
        }, kb.offset = {
            setOffset: function(a, b, c) {
                var d = kb.css(a, "position");
                "static" === d && (a.style.position = "relative");
                var e, f, g = kb(a),
                    h = g.offset(),
                    i = kb.css(a, "top"),
                    j = kb.css(a, "left"),
                    k = ("absolute" === d || "fixed" === d) && kb.inArray("auto", [i, j]) > -1,
                    l = {},
                    m = {};
                k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), kb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
            }
        }, kb.fn.extend({
            position: function() {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === kb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), kb.nodeName(a[0], "html") || (c = a.offset()), c.top += kb.css(a[0], "borderTopWidth", !0), c.left += kb.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - kb.css(d, "marginTop", !0),
                        left: b.left - c.left - kb.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || Z; a && !kb.nodeName(a, "html") && "static" === kb.css(a, "position");) a = a.offsetParent;
                    return a || Z
                })
            }
        }), kb.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, c) {
            var d = /Y/.test(c);
            kb.fn[a] = function(e) {
                return kb.access(this, function(a, e, f) {
                    var g = T(a);
                    return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? kb(g).scrollLeft() : f, d ? f : kb(g).scrollTop()) : a[e] = f, b)
                }, a, e, arguments.length, null)
            }
        }), kb.each({
            Height: "height",
            Width: "width"
        }, function(a, c) {
            kb.each({
                padding: "inner" + a,
                content: c,
                "": "outer" + a
            }, function(d, e) {
                kb.fn[e] = function(e, f) {
                    var g = arguments.length && (d || "boolean" != typeof e),
                        h = d || (e === !0 || f === !0 ? "margin" : "border");
                    return kb.access(this, function(c, d, e) {
                        var f;
                        return kb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? kb.css(c, d, h) : kb.style(c, d, e, h)
                    }, c, g ? e : b, g, null)
                }
            })
        }), kb.fn.size = function() {
            return this.length
        }, kb.fn.andSelf = kb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = kb : (a.jQuery = a.$ = kb, "function" == typeof define && define.amd && define("jquery", [], function() {
            return kb
        }))
    }(window), function() {
        function a(a, b, c) {
            c = (c || 0) - 1;
            for (var d = a ? a.length : 0; ++c < d;)
                if (a[c] === b) return c;
            return -1
        }

        function b(b, c) {
            var d = typeof c;
            if (b = b.l, "boolean" == d || null == c) return b[c] ? 0 : -1;
            "number" != d && "string" != d && (d = "object");
            var e = "number" == d ? c : r + c;
            return b = (b = b[d]) && b[e], "object" == d ? b && -1 < a(b, c) ? 0 : -1 : b ? 0 : -1
        }

        function c(a) {
            var b = this.l,
                c = typeof a;
            if ("boolean" == c || null == a) b[a] = !0;
            else {
                "number" != c && "string" != c && (c = "object");
                var d = "number" == c ? a : r + a,
                    b = b[c] || (b[c] = {});
                "object" == c ? (b[d] || (b[d] = [])).push(a) : b[d] = !0
            }
        }

        function d(a) {
            return a.charCodeAt(0)
        }

        function e(a, b) {
            for (var c = a.m, d = b.m, e = -1, f = c.length; ++e < f;) {
                var g = c[e],
                    h = d[e];
                if (g !== h) {
                    if (g > h || "undefined" == typeof g) return 1;
                    if (h > g || "undefined" == typeof h) return -1
                }
            }
            return a.n - b.n
        }

        function f(a) {
            var b = -1,
                d = a.length,
                e = a[0],
                f = a[d / 2 | 0],
                g = a[d - 1];
            if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g) return !1;
            for (e = i(), e["false"] = e["null"] = e["true"] = e.undefined = !1, f = i(), f.k = a, f.l = e, f.push = c; ++b < d;) f.push(a[b]);
            return f
        }

        function g(a) {
            return "\\" + U[a]
        }

        function h() {
            return o.pop() || []
        }

        function i() {
            return p.pop() || {
                k: null,
                l: null,
                m: null,
                "false": !1,
                n: 0,
                "null": !1,
                number: null,
                object: null,
                push: null,
                string: null,
                "true": !1,
                undefined: !1,
                o: null
            }
        }

        function j(a) {
            a.length = 0, o.length < t && o.push(a)
        }

        function k(a) {
            var b = a.l;
            b && k(b), a.k = a.l = a.m = a.object = a.number = a.string = a.o = null, p.length < t && p.push(a)
        }

        function l(a, b, c) {
            b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
            var d = -1;
            c = c - b || 0;
            for (var e = Array(0 > c ? 0 : c); ++d < c;) e[d] = a[b + d];
            return e
        }

        function m(c) {
            function o(a, b, c) {
                if (!a || !T[typeof a]) return a;
                b = b && "undefined" == typeof c ? b : bb(b, c, 3);
                for (var d = -1, e = T[typeof a] && Kc(a), f = e ? e.length : 0; ++d < f && (c = e[d], !1 !== b(a[c], c, a)););
                return a
            }

            function p(a, b, c) {
                var d;
                if (!a || !T[typeof a]) return a;
                b = b && "undefined" == typeof c ? b : bb(b, c, 3);
                for (d in a)
                    if (!1 === b(a[d], d, a)) break;
                return a
            }

            function t(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                for (var g = arguments, h = 0, i = "number" == typeof c ? 2 : g.length; ++h < i;)
                    if ((e = g[h]) && T[typeof e])
                        for (var j = -1, k = T[typeof e] && Kc(e), l = k ? k.length : 0; ++j < l;) d = k[j], "undefined" == typeof f[d] && (f[d] = e[d]);
                return f
            }

            function U(a, b, c) {
                var d, e = a,
                    f = e;
                if (!e) return f;
                var g = arguments,
                    h = 0,
                    i = "number" == typeof c ? 2 : g.length;
                if (i > 3 && "function" == typeof g[i - 2]) var j = bb(g[--i - 1], g[i--], 2);
                else i > 2 && "function" == typeof g[i - 1] && (j = g[--i]);
                for (; ++h < i;)
                    if ((e = g[h]) && T[typeof e])
                        for (var k = -1, l = T[typeof e] && Kc(e), m = l ? l.length : 0; ++k < m;) d = l[k], f[d] = j ? j(f[d], e[d]) : e[d];
                return f
            }

            function W(a) {
                var b, c = [];
                if (!a || !T[typeof a]) return c;
                for (b in a) rc.call(a, b) && c.push(b);
                return c
            }

            function X(a) {
                return a && "object" == typeof a && !Jc(a) && rc.call(a, "__wrapped__") ? a : new Y(a)
            }

            function Y(a, b) {
                this.__chain__ = !!b, this.__wrapped__ = a
            }

            function Z(a) {
                function b() {
                    if (d) {
                        var a = l(d);
                        sc.apply(a, arguments)
                    }
                    if (this instanceof b) {
                        var f = ab(c.prototype),
                            a = c.apply(f, a || arguments);
                        return vb(a) ? a : f
                    }
                    return c.apply(e, a || arguments)
                }
                var c = a[0],
                    d = a[2],
                    e = a[4];
                return Ic(b, a), b
            }

            function _(a, b, c, d, e) {
                if (c) {
                    var f = c(a);
                    if ("undefined" != typeof f) return f
                }
                if (!vb(a)) return a;
                var g = kc.call(a);
                if (!Q[g]) return a;
                var i = Gc[g];
                switch (g) {
                    case J:
                    case K:
                        return new i(+a);
                    case M:
                    case P:
                        return new i(a);
                    case O:
                        return f = i(a.source, z.exec(a)), f.lastIndex = a.lastIndex, f
                }
                if (g = Jc(a), b) {
                    var k = !d;
                    d || (d = h()), e || (e = h());
                    for (var m = d.length; m--;)
                        if (d[m] == a) return e[m];
                    f = g ? i(a.length) : {}
                } else f = g ? l(a) : U({}, a);
                return g && (rc.call(a, "index") && (f.index = a.index), rc.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (g ? Db : o)(a, function(a, g) {
                    f[g] = _(a, b, c, d, e)
                }), k && (j(d), j(e)), f) : f
            }

            function ab(a) {
                return vb(a) ? xc(a) : {}
            }

            function bb(a, b, c) {
                if ("function" != typeof a) return Ub;
                if ("undefined" == typeof b || !("prototype" in a)) return a;
                var d = a.__bindData__;
                if ("undefined" == typeof d && (Hc.funcNames && (d = !a.name), d = d || !Hc.funcDecomp, !d)) {
                    var e = pc.call(a);
                    Hc.funcNames || (d = !A.test(e)), d || (d = E.test(e), Ic(a, d))
                }
                if (!1 === d || !0 !== d && 1 & d[1]) return a;
                switch (c) {
                    case 1:
                        return function(c) {
                            return a.call(b, c)
                        };
                    case 2:
                        return function(c, d) {
                            return a.call(b, c, d)
                        };
                    case 3:
                        return function(c, d, e) {
                            return a.call(b, c, d, e)
                        };
                    case 4:
                        return function(c, d, e, f) {
                            return a.call(b, c, d, e, f)
                        }
                }
                return Sb(a, b)
            }

            function cb(a) {
                function b() {
                    var a = i ? g : this;
                    if (e) {
                        var o = l(e);
                        sc.apply(o, arguments)
                    }
                    return (f || k) && (o || (o = l(arguments)), f && sc.apply(o, f), k && o.length < h) ? (d |= 16, cb([c, m ? d : -4 & d, o, null, g, h])) : (o || (o = arguments), j && (c = a[n]), this instanceof b ? (a = ab(c.prototype), o = c.apply(a, o), vb(o) ? o : a) : c.apply(a, o))
                }
                var c = a[0],
                    d = a[1],
                    e = a[2],
                    f = a[3],
                    g = a[4],
                    h = a[5],
                    i = 1 & d,
                    j = 2 & d,
                    k = 4 & d,
                    m = 8 & d,
                    n = c;
                return Ic(b, a), b
            }

            function db(c, d) {
                var e = -1,
                    g = mb(),
                    h = c ? c.length : 0,
                    i = h >= s && g === a,
                    j = [];
                if (i) {
                    var l = f(d);
                    l ? (g = b, d = l) : i = !1
                }
                for (; ++e < h;) l = c[e], 0 > g(d, l) && j.push(l);
                return i && k(d), j
            }

            function eb(a, b, c, d) {
                d = (d || 0) - 1;
                for (var e = a ? a.length : 0, f = []; ++d < e;) {
                    var g = a[d];
                    if (g && "object" == typeof g && "number" == typeof g.length && (Jc(g) || qb(g))) {
                        b || (g = eb(g, b, c));
                        var h = -1,
                            i = g.length,
                            j = f.length;
                        for (f.length += i; ++h < i;) f[j++] = g[h]
                    } else c || f.push(g)
                }
                return f
            }

            function fb(a, b, c, d, e, f) {
                if (c) {
                    var g = c(a, b);
                    if ("undefined" != typeof g) return !!g
                }
                if (a === b) return 0 !== a || 1 / a == 1 / b;
                if (a === a && !(a && T[typeof a] || b && T[typeof b])) return !1;
                if (null == a || null == b) return a === b;
                var i = kc.call(a),
                    k = kc.call(b);
                if (i == H && (i = N), k == H && (k = N), i != k) return !1;
                switch (i) {
                    case J:
                    case K:
                        return +a == +b;
                    case M:
                        return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                    case O:
                    case P:
                        return a == fc(b)
                }
                if (k = i == I, !k) {
                    var l = rc.call(a, "__wrapped__"),
                        m = rc.call(b, "__wrapped__");
                    if (l || m) return fb(l ? a.__wrapped__ : a, m ? b.__wrapped__ : b, c, d, e, f);
                    if (i != N) return !1;
                    if (i = a.constructor, l = b.constructor, i != l && !(ub(i) && i instanceof i && ub(l) && l instanceof l) && "constructor" in a && "constructor" in b) return !1
                }
                for (i = !e, e || (e = h()), f || (f = h()), l = e.length; l--;)
                    if (e[l] == a) return f[l] == b;
                var n = 0,
                    g = !0;
                if (e.push(a), f.push(b), k) {
                    if (l = a.length, n = b.length, (g = n == l) || d)
                        for (; n--;)
                            if (k = l, m = b[n], d)
                                for (; k-- && !(g = fb(a[k], m, c, d, e, f)););
                            else if (!(g = fb(a[n], m, c, d, e, f))) break
                } else p(b, function(b, h, i) {
                    return rc.call(i, h) ? (n++, g = rc.call(a, h) && fb(a[h], b, c, d, e, f)) : void 0
                }), g && !d && p(a, function(a, b, c) {
                    return rc.call(c, b) ? g = -1 < --n : void 0
                });
                return e.pop(), f.pop(), i && (j(e), j(f)), g
            }

            function gb(a, b, c, d, e) {
                (Jc(b) ? Db : o)(b, function(b, f) {
                    var g, h, i = b,
                        j = a[f];
                    if (b && ((h = Jc(b)) || Pc(b))) {
                        for (i = d.length; i--;)
                            if (g = d[i] == b) {
                                j = e[i];
                                break
                            }
                        if (!g) {
                            var k;
                            c && (i = c(j, b), k = "undefined" != typeof i) && (j = i), k || (j = h ? Jc(j) ? j : [] : Pc(j) ? j : {}), d.push(b), e.push(j), k || gb(j, b, c, d, e)
                        }
                    } else c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
                    a[f] = j
                })
            }

            function hb(a, b) {
                return a + oc(Fc() * (b - a + 1))
            }

            function ib(c, d, e) {
                var g = -1,
                    i = mb(),
                    l = c ? c.length : 0,
                    m = [],
                    n = !d && l >= s && i === a,
                    o = e || n ? h() : m;
                for (n && (o = f(o), i = b); ++g < l;) {
                    var p = c[g],
                        q = e ? e(p, g, c) : p;
                    (d ? !g || o[o.length - 1] !== q : 0 > i(o, q)) && ((e || n) && o.push(q), m.push(p))
                }
                return n ? (j(o.k), k(o)) : e && j(o), m
            }

            function jb(a) {
                return function(b, c, d) {
                    var e = {};
                    c = X.createCallback(c, d, 3), d = -1;
                    var f = b ? b.length : 0;
                    if ("number" == typeof f)
                        for (; ++d < f;) {
                            var g = b[d];
                            a(e, g, c(g, d, b), b)
                        } else o(b, function(b, d, f) {
                            a(e, b, c(b, d, f), f)
                        });
                    return e
                }
            }

            function kb(a, b, c, d, e, f) {
                var g = 1 & b,
                    h = 4 & b,
                    i = 16 & b,
                    j = 32 & b;
                if (!(2 & b || ub(a))) throw new gc;
                i && !c.length && (b &= -17, i = c = !1), j && !d.length && (b &= -33, j = d = !1);
                var k = a && a.__bindData__;
                return k && !0 !== k ? (k = l(k), k[2] && (k[2] = l(k[2])), k[3] && (k[3] = l(k[3])), !g || 1 & k[1] || (k[4] = e), !g && 1 & k[1] && (b |= 8), !h || 4 & k[1] || (k[5] = f), i && sc.apply(k[2] || (k[2] = []), c), j && vc.apply(k[3] || (k[3] = []), d), k[1] |= b, kb.apply(null, k)) : (1 == b || 17 === b ? Z : cb)([a, b, c, d, e, f])
            }

            function lb(a) {
                return Lc[a]
            }

            function mb() {
                var b = (b = X.indexOf) === Mb ? a : b;
                return b
            }

            function nb(a) {
                return "function" == typeof a && lc.test(a)
            }

            function ob(a) {
                var b, c;
                return a && kc.call(a) == N && (b = a.constructor, !ub(b) || b instanceof b) ? (p(a, function(a, b) {
                    c = b
                }), "undefined" == typeof c || rc.call(a, c)) : !1
            }

            function pb(a) {
                return Mc[a]
            }

            function qb(a) {
                return a && "object" == typeof a && "number" == typeof a.length && kc.call(a) == H || !1
            }

            function rb(a, b, c) {
                var d = Kc(a),
                    e = d.length;
                for (b = bb(b, c, 3); e-- && (c = d[e], !1 !== b(a[c], c, a)););
                return a
            }

            function sb(a) {
                var b = [];
                return p(a, function(a, c) {
                    ub(a) && b.push(c)
                }), b.sort()
            }

            function tb(a) {
                for (var b = -1, c = Kc(a), d = c.length, e = {}; ++b < d;) {
                    var f = c[b];
                    e[a[f]] = f
                }
                return e
            }

            function ub(a) {
                return "function" == typeof a
            }

            function vb(a) {
                return !(!a || !T[typeof a])
            }

            function wb(a) {
                return "number" == typeof a || a && "object" == typeof a && kc.call(a) == M || !1
            }

            function xb(a) {
                return "string" == typeof a || a && "object" == typeof a && kc.call(a) == P || !1
            }

            function yb(a) {
                for (var b = -1, c = Kc(a), d = c.length, e = Zb(d); ++b < d;) e[b] = a[c[b]];
                return e
            }

            function zb(a, b, c) {
                var d = -1,
                    e = mb(),
                    f = a ? a.length : 0,
                    g = !1;
                return c = (0 > c ? Cc(0, f + c) : c) || 0, Jc(a) ? g = -1 < e(a, b, c) : "number" == typeof f ? g = -1 < (xb(a) ? a.indexOf(b, c) : e(a, b, c)) : o(a, function(a) {
                    return ++d < c ? void 0 : !(g = a === b)
                }), g
            }

            function Ab(a, b, c) {
                var d = !0;
                b = X.createCallback(b, c, 3), c = -1;
                var e = a ? a.length : 0;
                if ("number" == typeof e)
                    for (; ++c < e && (d = !!b(a[c], c, a)););
                else o(a, function(a, c, e) {
                    return d = !!b(a, c, e)
                });
                return d
            }

            function Bb(a, b, c) {
                var d = [];
                b = X.createCallback(b, c, 3), c = -1;
                var e = a ? a.length : 0;
                if ("number" == typeof e)
                    for (; ++c < e;) {
                        var f = a[c];
                        b(f, c, a) && d.push(f)
                    } else o(a, function(a, c, e) {
                        b(a, c, e) && d.push(a)
                    });
                return d
            }

            function Cb(a, b, c) {
                b = X.createCallback(b, c, 3), c = -1;
                var d = a ? a.length : 0;
                if ("number" != typeof d) {
                    var e;
                    return o(a, function(a, c, d) {
                        return b(a, c, d) ? (e = a, !1) : void 0
                    }), e
                }
                for (; ++c < d;) {
                    var f = a[c];
                    if (b(f, c, a)) return f
                }
            }

            function Db(a, b, c) {
                var d = -1,
                    e = a ? a.length : 0;
                if (b = b && "undefined" == typeof c ? b : bb(b, c, 3), "number" == typeof e)
                    for (; ++d < e && !1 !== b(a[d], d, a););
                else o(a, b);
                return a
            }

            function Eb(a, b, c) {
                var d = a ? a.length : 0;
                if (b = b && "undefined" == typeof c ? b : bb(b, c, 3), "number" == typeof d)
                    for (; d-- && !1 !== b(a[d], d, a););
                else {
                    var e = Kc(a),
                        d = e.length;
                    o(a, function(a, c, f) {
                        return c = e ? e[--d] : --d, b(f[c], c, f)
                    })
                }
                return a
            }

            function Fb(a, b, c) {
                var d = -1,
                    e = a ? a.length : 0;
                if (b = X.createCallback(b, c, 3), "number" == typeof e)
                    for (var f = Zb(e); ++d < e;) f[d] = b(a[d], d, a);
                else f = [], o(a, function(a, c, e) {
                    f[++d] = b(a, c, e)
                });
                return f
            }

            function Gb(a, b, c) {
                var e = -1 / 0,
                    f = e;
                if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Jc(a)) {
                    c = -1;
                    for (var g = a.length; ++c < g;) {
                        var h = a[c];
                        h > f && (f = h)
                    }
                } else b = null == b && xb(a) ? d : X.createCallback(b, c, 3), Db(a, function(a, c, d) {
                    c = b(a, c, d), c > e && (e = c, f = a)
                });
                return f
            }

            function Hb(a, b, c, d) {
                if (!a) return c;
                var e = 3 > arguments.length;
                b = X.createCallback(b, d, 4);
                var f = -1,
                    g = a.length;
                if ("number" == typeof g)
                    for (e && (c = a[++f]); ++f < g;) c = b(c, a[f], f, a);
                else o(a, function(a, d, f) {
                    c = e ? (e = !1, a) : b(c, a, d, f)
                });
                return c
            }

            function Ib(a, b, c, d) {
                var e = 3 > arguments.length;
                return b = X.createCallback(b, d, 4), Eb(a, function(a, d, f) {
                    c = e ? (e = !1, a) : b(c, a, d, f)
                }), c
            }

            function Jb(a) {
                var b = -1,
                    c = a ? a.length : 0,
                    d = Zb("number" == typeof c ? c : 0);
                return Db(a, function(a) {
                    var c = hb(0, ++b);
                    d[b] = d[c], d[c] = a
                }), d
            }

            function Kb(a, b, c) {
                var d;
                b = X.createCallback(b, c, 3), c = -1;
                var e = a ? a.length : 0;
                if ("number" == typeof e)
                    for (; ++c < e && !(d = b(a[c], c, a)););
                else o(a, function(a, c, e) {
                    return !(d = b(a, c, e))
                });
                return !!d
            }

            function Lb(a, b, c) {
                var d = 0,
                    e = a ? a.length : 0;
                if ("number" != typeof b && null != b) {
                    var f = -1;
                    for (b = X.createCallback(b, c, 3); ++f < e && b(a[f], f, a);) d++
                } else if (d = b, null == d || c) return a ? a[0] : n;
                return l(a, 0, Dc(Cc(0, d), e))
            }

            function Mb(b, c, d) {
                if ("number" == typeof d) {
                    var e = b ? b.length : 0;
                    d = 0 > d ? Cc(0, e + d) : d || 0
                } else if (d) return d = Ob(b, c), b[d] === c ? d : -1;
                return a(b, c, d)
            }

            function Nb(a, b, c) {
                if ("number" != typeof b && null != b) {
                    var d = 0,
                        e = -1,
                        f = a ? a.length : 0;
                    for (b = X.createCallback(b, c, 3); ++e < f && b(a[e], e, a);) d++
                } else d = null == b || c ? 1 : Cc(0, b);
                return l(a, d)
            }

            function Ob(a, b, c, d) {
                var e = 0,
                    f = a ? a.length : e;
                for (c = c ? X.createCallback(c, d, 1) : Ub, b = c(b); f > e;) d = e + f >>> 1, c(a[d]) < b ? e = d + 1 : f = d;
                return e
            }

            function Pb(a, b, c, d) {
                return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (c = X.createCallback(c, d, 3)), ib(a, b, c)
            }

            function Qb() {
                for (var a = 1 < arguments.length ? arguments : arguments[0], b = -1, c = a ? Gb(Tc(a, "length")) : 0, d = Zb(0 > c ? 0 : c); ++b < c;) d[b] = Tc(a, b);
                return d
            }

            function Rb(a, b) {
                var c = -1,
                    d = a ? a.length : 0,
                    e = {};
                for (b || !d || Jc(a[0]) || (b = []); ++c < d;) {
                    var f = a[c];
                    b ? e[f] = b[c] : f && (e[f[0]] = f[1])
                }
                return e
            }

            function Sb(a, b) {
                return 2 < arguments.length ? kb(a, 17, l(arguments, 2), null, b) : kb(a, 1, null, null, b)
            }

            function Tb(a, b, c) {
                function d() {
                    k && nc(k), g = k = l = n, (p || o !== b) && (m = Uc(), h = a.apply(j, f), k || g || (f = j = null))
                }

                function e() {
                    var c = b - (Uc() - i);
                    c > 0 ? k = tc(e, c) : (g && nc(g), c = l, g = k = l = n, c && (m = Uc(), h = a.apply(j, f), k || g || (f = j = null)))
                }
                var f, g, h, i, j, k, l, m = 0,
                    o = !1,
                    p = !0;
                if (!ub(a)) throw new gc;
                if (b = Cc(0, b) || 0, !0 === c) var q = !0,
                    p = !1;
                else vb(c) && (q = c.leading, o = "maxWait" in c && (Cc(b, c.maxWait) || 0), p = "trailing" in c ? c.trailing : p);
                return function() {
                    if (f = arguments, i = Uc(), j = this, l = p && (k || !q), !1 === o) var c = q && !k;
                    else {
                        g || q || (m = i);
                        var n = o - (i - m),
                            r = 0 >= n;
                        r ? (g && (g = nc(g)), m = i, h = a.apply(j, f)) : g || (g = tc(d, n))
                    }
                    return r && k ? k = nc(k) : k || b === o || (k = tc(e, b)), c && (r = !0, h = a.apply(j, f)), !r || k || g || (f = j = null), h
                }
            }

            function Ub(a) {
                return a
            }

            function Vb(a, b, c) {
                var d = !0,
                    e = b && sb(b);
                b && (c || e.length) || (null == c && (c = b), f = Y, b = a, a = X, e = sb(b)), !1 === c ? d = !1 : vb(c) && "chain" in c && (d = c.chain);
                var f = a,
                    g = ub(f);
                Db(e, function(c) {
                    var e = a[c] = b[c];
                    g && (f.prototype[c] = function() {
                        var b = this.__chain__,
                            c = this.__wrapped__,
                            g = [c];
                        if (sc.apply(g, arguments), g = e.apply(a, g), d || b) {
                            if (c === g && vb(g)) return this;
                            g = new f(g), g.__chain__ = b
                        }
                        return g
                    })
                })
            }

            function Wb() {}

            function Xb(a) {
                return function(b) {
                    return b[a]
                }
            }

            function Yb() {
                return this.__wrapped__
            }
            c = c ? $.defaults(V.Object(), c, $.pick(V, G)) : V;
            var Zb = c.Array,
                $b = c.Boolean,
                _b = c.Date,
                ac = c.Function,
                bc = c.Math,
                cc = c.Number,
                dc = c.Object,
                ec = c.RegExp,
                fc = c.String,
                gc = c.TypeError,
                hc = [],
                ic = dc.prototype,
                jc = c._,
                kc = ic.toString,
                lc = ec("^" + fc(kc).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                mc = bc.ceil,
                nc = c.clearTimeout,
                oc = bc.floor,
                pc = ac.prototype.toString,
                qc = nb(qc = dc.getPrototypeOf) && qc,
                rc = ic.hasOwnProperty,
                sc = hc.push,
                tc = c.setTimeout,
                uc = hc.splice,
                vc = hc.unshift,
                wc = function() {
                    try {
                        var a = {},
                            b = nb(b = dc.defineProperty) && b,
                            c = b(a, a, a) && b
                    } catch (d) {}
                    return c
                }(),
                xc = nb(xc = dc.create) && xc,
                yc = nb(yc = Zb.isArray) && yc,
                zc = c.isFinite,
                Ac = c.isNaN,
                Bc = nb(Bc = dc.keys) && Bc,
                Cc = bc.max,
                Dc = bc.min,
                Ec = c.parseInt,
                Fc = bc.random,
                Gc = {};
            Gc[I] = Zb, Gc[J] = $b, Gc[K] = _b, Gc[L] = ac, Gc[N] = dc, Gc[M] = cc, Gc[O] = ec, Gc[P] = fc, Y.prototype = X.prototype;
            var Hc = X.support = {};
            Hc.funcDecomp = !nb(c.a) && E.test(m), Hc.funcNames = "string" == typeof ac.name, X.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: B,
                variable: "",
                imports: {
                    _: X
                }
            }, xc || (ab = function() {
                function a() {}
                return function(b) {
                    if (vb(b)) {
                        a.prototype = b;
                        var d = new a;
                        a.prototype = null
                    }
                    return d || c.Object()
                }
            }());
            var Ic = wc ? function(a, b) {
                    S.value = b, wc(a, "__bindData__", S)
                } : Wb,
                Jc = yc || function(a) {
                    return a && "object" == typeof a && "number" == typeof a.length && kc.call(a) == I || !1
                },
                Kc = Bc ? function(a) {
                    return vb(a) ? Bc(a) : []
                } : W,
                Lc = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                Mc = tb(Lc),
                Nc = ec("(" + Kc(Mc).join("|") + ")", "g"),
                Oc = ec("[" + Kc(Lc).join("") + "]", "g"),
                Pc = qc ? function(a) {
                    if (!a || kc.call(a) != N) return !1;
                    var b = a.valueOf,
                        c = nb(b) && (c = qc(b)) && qc(c);
                    return c ? a == c || qc(a) == c : ob(a)
                } : ob,
                Qc = jb(function(a, b, c) {
                    rc.call(a, c) ? a[c]++ : a[c] = 1
                }),
                Rc = jb(function(a, b, c) {
                    (rc.call(a, c) ? a[c] : a[c] = []).push(b)
                }),
                Sc = jb(function(a, b, c) {
                    a[c] = b
                }),
                Tc = Fb,
                Uc = nb(Uc = _b.now) && Uc || function() {
                    return (new _b).getTime()
                },
                Vc = 8 == Ec(u + "08") ? Ec : function(a, b) {
                    return Ec(xb(a) ? a.replace(C, "") : a, b || 0)
                };
            return X.after = function(a, b) {
                if (!ub(b)) throw new gc;
                return function() {
                    return 1 > --a ? b.apply(this, arguments) : void 0
                }
            }, X.assign = U, X.at = function(a) {
                for (var b = arguments, c = -1, d = eb(b, !0, !1, 1), b = b[2] && b[2][b[1]] === a ? 1 : d.length, e = Zb(b); ++c < b;) e[c] = a[d[c]];
                return e
            }, X.bind = Sb, X.bindAll = function(a) {
                for (var b = 1 < arguments.length ? eb(arguments, !0, !1, 1) : sb(a), c = -1, d = b.length; ++c < d;) {
                    var e = b[c];
                    a[e] = kb(a[e], 1, null, null, a)
                }
                return a
            }, X.bindKey = function(a, b) {
                return 2 < arguments.length ? kb(b, 19, l(arguments, 2), null, a) : kb(b, 3, null, null, a)
            }, X.chain = function(a) {
                return a = new Y(a), a.__chain__ = !0, a
            }, X.compact = function(a) {
                for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                    var e = a[b];
                    e && d.push(e)
                }
                return d
            }, X.compose = function() {
                for (var a = arguments, b = a.length; b--;)
                    if (!ub(a[b])) throw new gc;
                return function() {
                    for (var b = arguments, c = a.length; c--;) b = [a[c].apply(this, b)];
                    return b[0]
                }
            }, X.constant = function(a) {
                return function() {
                    return a
                }
            }, X.countBy = Qc, X.create = function(a, b) {
                var c = ab(a);
                return b ? U(c, b) : c
            }, X.createCallback = function(a, b, c) {
                var d = typeof a;
                if (null == a || "function" == d) return bb(a, b, c);
                if ("object" != d) return Xb(a);
                var e = Kc(a),
                    f = e[0],
                    g = a[f];
                return 1 != e.length || g !== g || vb(g) ? function(b) {
                    for (var c = e.length, d = !1; c-- && (d = fb(b[e[c]], a[e[c]], null, !0)););
                    return d
                } : function(a) {
                    return a = a[f], g === a && (0 !== g || 1 / g == 1 / a)
                }
            }, X.curry = function(a, b) {
                return b = "number" == typeof b ? b : +b || a.length, kb(a, 4, null, null, null, b)
            }, X.debounce = Tb, X.defaults = t, X.defer = function(a) {
                if (!ub(a)) throw new gc;
                var b = l(arguments, 1);
                return tc(function() {
                    a.apply(n, b)
                }, 1)
            }, X.delay = function(a, b) {
                if (!ub(a)) throw new gc;
                var c = l(arguments, 2);
                return tc(function() {
                    a.apply(n, c)
                }, b)
            }, X.difference = function(a) {
                return db(a, eb(arguments, !0, !0, 1))
            }, X.filter = Bb, X.flatten = function(a, b, c, d) {
                return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (a = Fb(a, c, d)), eb(a, b)
            }, X.forEach = Db, X.forEachRight = Eb, X.forIn = p, X.forInRight = function(a, b, c) {
                var d = [];
                p(a, function(a, b) {
                    d.push(b, a)
                });
                var e = d.length;
                for (b = bb(b, c, 3); e-- && !1 !== b(d[e--], d[e], a););
                return a
            }, X.forOwn = o, X.forOwnRight = rb, X.functions = sb, X.groupBy = Rc, X.indexBy = Sc, X.initial = function(a, b, c) {
                var d = 0,
                    e = a ? a.length : 0;
                if ("number" != typeof b && null != b) {
                    var f = e;
                    for (b = X.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++
                } else d = null == b || c ? 1 : b || d;
                return l(a, 0, Dc(Cc(0, e - d), e))
            }, X.intersection = function() {
                for (var c = [], d = -1, e = arguments.length, g = h(), i = mb(), l = i === a, m = h(); ++d < e;) {
                    var n = arguments[d];
                    (Jc(n) || qb(n)) && (c.push(n), g.push(l && n.length >= s && f(d ? c[d] : m)))
                }
                var l = c[0],
                    o = -1,
                    p = l ? l.length : 0,
                    q = [];
                a: for (; ++o < p;) {
                    var r = g[0],
                        n = l[o];
                    if (0 > (r ? b(r, n) : i(m, n))) {
                        for (d = e, (r || m).push(n); --d;)
                            if (r = g[d], 0 > (r ? b(r, n) : i(c[d], n))) continue a;
                        q.push(n)
                    }
                }
                for (; e--;)(r = g[e]) && k(r);
                return j(g), j(m), q
            }, X.invert = tb, X.invoke = function(a, b) {
                var c = l(arguments, 2),
                    d = -1,
                    e = "function" == typeof b,
                    f = a ? a.length : 0,
                    g = Zb("number" == typeof f ? f : 0);
                return Db(a, function(a) {
                    g[++d] = (e ? b : a[b]).apply(a, c)
                }), g
            }, X.keys = Kc, X.map = Fb, X.mapValues = function(a, b, c) {
                var d = {};
                return b = X.createCallback(b, c, 3), o(a, function(a, c, e) {
                    d[c] = b(a, c, e)
                }), d
            }, X.max = Gb, X.memoize = function(a, b) {
                function c() {
                    var d = c.cache,
                        e = b ? b.apply(this, arguments) : r + arguments[0];
                    return rc.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
                }
                if (!ub(a)) throw new gc;
                return c.cache = {}, c
            }, X.merge = function(a) {
                var b = arguments,
                    c = 2;
                if (!vb(a)) return a;
                if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2]) var d = bb(b[--c - 1], b[c--], 2);
                else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
                for (var b = l(arguments, 1, c), e = -1, f = h(), g = h(); ++e < c;) gb(a, b[e], d, f, g);
                return j(f), j(g), a
            }, X.min = function(a, b, c) {
                var e = 1 / 0,
                    f = e;
                if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Jc(a)) {
                    c = -1;
                    for (var g = a.length; ++c < g;) {
                        var h = a[c];
                        f > h && (f = h)
                    }
                } else b = null == b && xb(a) ? d : X.createCallback(b, c, 3), Db(a, function(a, c, d) {
                    c = b(a, c, d), e > c && (e = c, f = a)
                });
                return f
            }, X.omit = function(a, b, c) {
                var d = {};
                if ("function" != typeof b) {
                    var e = [];
                    p(a, function(a, b) {
                        e.push(b)
                    });
                    for (var e = db(e, eb(arguments, !0, !1, 1)), f = -1, g = e.length; ++f < g;) {
                        var h = e[f];
                        d[h] = a[h]
                    }
                } else b = X.createCallback(b, c, 3), p(a, function(a, c, e) {
                    b(a, c, e) || (d[c] = a)
                });
                return d
            }, X.once = function(a) {
                var b, c;
                if (!ub(a)) throw new gc;
                return function() {
                    return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
                }
            }, X.pairs = function(a) {
                for (var b = -1, c = Kc(a), d = c.length, e = Zb(d); ++b < d;) {
                    var f = c[b];
                    e[b] = [f, a[f]]
                }
                return e
            }, X.partial = function(a) {
                return kb(a, 16, l(arguments, 1))
            }, X.partialRight = function(a) {
                return kb(a, 32, null, l(arguments, 1))
            }, X.pick = function(a, b, c) {
                var d = {};
                if ("function" != typeof b)
                    for (var e = -1, f = eb(arguments, !0, !1, 1), g = vb(a) ? f.length : 0; ++e < g;) {
                        var h = f[e];
                        h in a && (d[h] = a[h])
                    } else b = X.createCallback(b, c, 3), p(a, function(a, c, e) {
                        b(a, c, e) && (d[c] = a)
                    });
                return d
            }, X.pluck = Tc, X.property = Xb, X.pull = function(a) {
                for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)
                    for (var f = -1, g = b[c]; ++f < e;) a[f] === g && (uc.call(a, f--, 1), e--);
                return a
            }, X.range = function(a, b, c) {
                a = +a || 0, c = "number" == typeof c ? c : +c || 1, null == b && (b = a, a = 0);
                var d = -1;
                b = Cc(0, mc((b - a) / (c || 1)));
                for (var e = Zb(b); ++d < b;) e[d] = a, a += c;
                return e
            }, X.reject = function(a, b, c) {
                return b = X.createCallback(b, c, 3), Bb(a, function(a, c, d) {
                    return !b(a, c, d)
                })
            }, X.remove = function(a, b, c) {
                var d = -1,
                    e = a ? a.length : 0,
                    f = [];
                for (b = X.createCallback(b, c, 3); ++d < e;) c = a[d], b(c, d, a) && (f.push(c), uc.call(a, d--, 1), e--);
                return f
            }, X.rest = Nb, X.shuffle = Jb, X.sortBy = function(a, b, c) {
                var d = -1,
                    f = Jc(b),
                    g = a ? a.length : 0,
                    l = Zb("number" == typeof g ? g : 0);
                for (f || (b = X.createCallback(b, c, 3)), Db(a, function(a, c, e) {
                        var g = l[++d] = i();
                        f ? g.m = Fb(b, function(b) {
                            return a[b]
                        }) : (g.m = h())[0] = b(a, c, e), g.n = d, g.o = a
                    }), g = l.length, l.sort(e); g--;) a = l[g], l[g] = a.o, f || j(a.m), k(a);
                return l
            }, X.tap = function(a, b) {
                return b(a), a
            }, X.throttle = function(a, b, c) {
                var d = !0,
                    e = !0;
                if (!ub(a)) throw new gc;
                return !1 === c ? d = !1 : vb(c) && (d = "leading" in c ? c.leading : d, e = "trailing" in c ? c.trailing : e), R.leading = d, R.maxWait = b, R.trailing = e, Tb(a, b, R)
            }, X.times = function(a, b, c) {
                a = -1 < (a = +a) ? a : 0;
                var d = -1,
                    e = Zb(a);
                for (b = bb(b, c, 1); ++d < a;) e[d] = b(d);
                return e
            }, X.toArray = function(a) {
                return a && "number" == typeof a.length ? l(a) : yb(a)
            }, X.transform = function(a, b, c, d) {
                var e = Jc(a);
                if (null == c)
                    if (e) c = [];
                    else {
                        var f = a && a.constructor;
                        c = ab(f && f.prototype)
                    }
                return b && (b = X.createCallback(b, d, 4), (e ? Db : o)(a, function(a, d, e) {
                    return b(c, a, d, e)
                })), c
            }, X.union = function() {
                return ib(eb(arguments, !0, !0))
            }, X.uniq = Pb, X.values = yb, X.where = Bb, X.without = function(a) {
                return db(a, l(arguments, 1))
            }, X.wrap = function(a, b) {
                return kb(b, 16, [a])
            }, X.xor = function() {
                for (var a = -1, b = arguments.length; ++a < b;) {
                    var c = arguments[a];
                    if (Jc(c) || qb(c)) var d = d ? ib(db(d, c).concat(db(c, d))) : c
                }
                return d || []
            }, X.zip = Qb, X.zipObject = Rb, X.collect = Fb, X.drop = Nb, X.each = Db, X.eachRight = Eb, X.extend = U, X.methods = sb, X.object = Rb, X.select = Bb, X.tail = Nb, X.unique = Pb, X.unzip = Qb, Vb(X), X.clone = function(a, b, c, d) {
                return "boolean" != typeof b && null != b && (d = c, c = b, b = !1), _(a, b, "function" == typeof c && bb(c, d, 1))
            }, X.cloneDeep = function(a, b, c) {
                return _(a, !0, "function" == typeof b && bb(b, c, 1))
            }, X.contains = zb, X.escape = function(a) {
                return null == a ? "" : fc(a).replace(Oc, lb)
            }, X.every = Ab, X.find = Cb, X.findIndex = function(a, b, c) {
                var d = -1,
                    e = a ? a.length : 0;
                for (b = X.createCallback(b, c, 3); ++d < e;)
                    if (b(a[d], d, a)) return d;
                return -1
            }, X.findKey = function(a, b, c) {
                var d;
                return b = X.createCallback(b, c, 3), o(a, function(a, c, e) {
                    return b(a, c, e) ? (d = c, !1) : void 0
                }), d
            }, X.findLast = function(a, b, c) {
                var d;
                return b = X.createCallback(b, c, 3), Eb(a, function(a, c, e) {
                    return b(a, c, e) ? (d = a, !1) : void 0
                }), d
            }, X.findLastIndex = function(a, b, c) {
                var d = a ? a.length : 0;
                for (b = X.createCallback(b, c, 3); d--;)
                    if (b(a[d], d, a)) return d;
                return -1
            }, X.findLastKey = function(a, b, c) {
                var d;
                return b = X.createCallback(b, c, 3), rb(a, function(a, c, e) {
                    return b(a, c, e) ? (d = c, !1) : void 0
                }), d
            }, X.has = function(a, b) {
                return a ? rc.call(a, b) : !1
            }, X.identity = Ub, X.indexOf = Mb, X.isArguments = qb, X.isArray = Jc, X.isBoolean = function(a) {
                return !0 === a || !1 === a || a && "object" == typeof a && kc.call(a) == J || !1
            }, X.isDate = function(a) {
                return a && "object" == typeof a && kc.call(a) == K || !1
            }, X.isElement = function(a) {
                return a && 1 === a.nodeType || !1
            }, X.isEmpty = function(a) {
                var b = !0;
                if (!a) return b;
                var c = kc.call(a),
                    d = a.length;
                return c == I || c == P || c == H || c == N && "number" == typeof d && ub(a.splice) ? !d : (o(a, function() {
                    return b = !1
                }), b)
            }, X.isEqual = function(a, b, c, d) {
                return fb(a, b, "function" == typeof c && bb(c, d, 2))
            }, X.isFinite = function(a) {
                return zc(a) && !Ac(parseFloat(a))
            }, X.isFunction = ub, X.isNaN = function(a) {
                return wb(a) && a != +a
            }, X.isNull = function(a) {
                return null === a
            }, X.isNumber = wb, X.isObject = vb, X.isPlainObject = Pc, X.isRegExp = function(a) {
                return a && "object" == typeof a && kc.call(a) == O || !1
            }, X.isString = xb, X.isUndefined = function(a) {
                return "undefined" == typeof a
            }, X.lastIndexOf = function(a, b, c) {
                var d = a ? a.length : 0;
                for ("number" == typeof c && (d = (0 > c ? Cc(0, d + c) : Dc(c, d - 1)) + 1); d--;)
                    if (a[d] === b) return d;
                return -1
            }, X.mixin = Vb, X.noConflict = function() {
                return c._ = jc, this
            }, X.noop = Wb, X.now = Uc, X.parseInt = Vc, X.random = function(a, b, c) {
                var d = null == a,
                    e = null == b;
                return null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1 ? (c = Fc(), Dc(a + c * (b - a + parseFloat("1e-" + ((c + "").length - 1))), b)) : hb(a, b)
            }, X.reduce = Hb, X.reduceRight = Ib, X.result = function(a, b) {
                if (a) {
                    var c = a[b];
                    return ub(c) ? a[b]() : c
                }
            }, X.runInContext = m, X.size = function(a) {
                var b = a ? a.length : 0;
                return "number" == typeof b ? b : Kc(a).length
            }, X.some = Kb, X.sortedIndex = Ob, X.template = function(a, b, c) {
                var d = X.templateSettings;
                a = fc(a || ""), c = t({}, c, d);
                var e, f = t({}, c.imports, d.imports),
                    d = Kc(f),
                    f = yb(f),
                    h = 0,
                    i = c.interpolate || D,
                    j = "__p+='",
                    i = ec((c.escape || D).source + "|" + i.source + "|" + (i === B ? y : D).source + "|" + (c.evaluate || D).source + "|$", "g");
                a.replace(i, function(b, c, d, f, i, k) {
                    return d || (d = f), j += a.slice(h, k).replace(F, g), c && (j += "'+__e(" + c + ")+'"), i && (e = !0, j += "';" + i + ";\n__p+='"), d && (j += "'+((__t=(" + d + "))==null?'':__t)+'"), h = k + b.length, b
                }), j += "';", i = c = c.variable, i || (c = "obj", j = "with(" + c + "){" + j + "}"), j = (e ? j.replace(v, "") : j).replace(w, "$1").replace(x, "$1;"), j = "function(" + c + "){" + (i ? "" : c + "||(" + c + "={});") + "var __t,__p='',__e=_.escape" + (e ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + j + "return __p}";
                try {
                    var k = ac(d, "return " + j).apply(n, f)
                } catch (l) {
                    throw l.source = j, l
                }
                return b ? k(b) : (k.source = j, k)
            }, X.unescape = function(a) {
                return null == a ? "" : fc(a).replace(Nc, pb)
            }, X.uniqueId = function(a) {
                var b = ++q;
                return fc(null == a ? "" : a) + b
            }, X.all = Ab, X.any = Kb, X.detect = Cb, X.findWhere = Cb, X.foldl = Hb, X.foldr = Ib, X.include = zb, X.inject = Hb, Vb(function() {
                var a = {};
                return o(X, function(b, c) {
                    X.prototype[c] || (a[c] = b)
                }), a
            }(), !1), X.first = Lb, X.last = function(a, b, c) {
                var d = 0,
                    e = a ? a.length : 0;
                if ("number" != typeof b && null != b) {
                    var f = e;
                    for (b = X.createCallback(b, c, 3); f-- && b(a[f], f, a);) d++
                } else if (d = b, null == d || c) return a ? a[e - 1] : n;
                return l(a, Cc(0, e - d))
            }, X.sample = function(a, b, c) {
                return a && "number" != typeof a.length && (a = yb(a)), null == b || c ? a ? a[hb(0, a.length - 1)] : n : (a = Jb(a), a.length = Dc(Cc(0, b), a.length), a)
            }, X.take = Lb, X.head = Lb, o(X, function(a, b) {
                var c = "sample" !== b;
                X.prototype[b] || (X.prototype[b] = function(b, d) {
                    var e = this.__chain__,
                        f = a(this.__wrapped__, b, d);
                    return e || null != b && (!d || c && "function" == typeof b) ? new Y(f, e) : f
                })
            }), X.VERSION = "2.4.1", X.prototype.chain = function() {
                return this.__chain__ = !0, this
            }, X.prototype.toString = function() {
                return fc(this.__wrapped__)
            }, X.prototype.value = Yb, X.prototype.valueOf = Yb, Db(["join", "pop", "shift"], function(a) {
                var b = hc[a];
                X.prototype[a] = function() {
                    var a = this.__chain__,
                        c = b.apply(this.__wrapped__, arguments);
                    return a ? new Y(c, a) : c
                }
            }), Db(["push", "reverse", "sort", "unshift"], function(a) {
                var b = hc[a];
                X.prototype[a] = function() {
                    return b.apply(this.__wrapped__, arguments), this
                }
            }), Db(["concat", "slice", "splice"], function(a) {
                var b = hc[a];
                X.prototype[a] = function() {
                    return new Y(b.apply(this.__wrapped__, arguments), this.__chain__)
                }
            }), X
        }
        var n, o = [],
            p = [],
            q = 0,
            r = +new Date + "",
            s = 75,
            t = 40,
            u = "   \f ﻿\n\r\u2028\u2029 ᠎             　",
            v = /\b__p\+='';/g,
            w = /\b(__p\+=)''\+/g,
            x = /(__e\(.*?\)|\b__t\))\+'';/g,
            y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            z = /\w*$/,
            A = /^\s*function[ \n\r\t]+\w/,
            B = /<%=([\s\S]+?)%>/g,
            C = RegExp("^[" + u + "]*0+(?=.$)"),
            D = /($^)/,
            E = /\bthis\b/,
            F = /['\n\r\t\u2028\u2029\\]/g,
            G = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),
            H = "[object Arguments]",
            I = "[object Array]",
            J = "[object Boolean]",
            K = "[object Date]",
            L = "[object Function]",
            M = "[object Number]",
            N = "[object Object]",
            O = "[object RegExp]",
            P = "[object String]",
            Q = {};
        Q[L] = !1, Q[H] = Q[I] = Q[J] = Q[K] = Q[M] = Q[N] = Q[O] = Q[P] = !0;
        var R = {
                leading: !1,
                maxWait: 0,
                trailing: !1
            },
            S = {
                configurable: !1,
                enumerable: !1,
                value: null,
                writable: !1
            },
            T = {
                "boolean": !1,
                "function": !0,
                object: !0,
                number: !1,
                string: !1,
                undefined: !1
            },
            U = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "   ": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            V = T[typeof window] && window || this,
            W = T[typeof exports] && exports && !exports.nodeType && exports,
            X = T[typeof module] && module && !module.nodeType && module,
            Y = X && X.exports === W && W,
            Z = T[typeof global] && global;
        !Z || Z.global !== Z && Z.window !== Z || (V = Z);
        var $ = m();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (V._ = $, define(function() {
            return $
        })) : W && X ? Y ? (X.exports = $)._ = $ : W._ = $ : V._ = $
    }.call(this), function(a) {
        function b(a, b, c) {
            switch (arguments.length) {
                case 2:
                    return null != a ? a : b;
                case 3:
                    return null != a ? a : null != b ? b : c;
                default:
                    throw new Error("Implement me")
            }
        }

        function c(a, b) {
            return zb.call(a, b)
        }

        function d() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function e(a) {
            tb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a)
        }

        function f(a, b) {
            var c = !0;
            return m(function() {
                return c && (e(a), c = !1), b.apply(this, arguments)
            }, b)
        }

        function g(a, b) {
            qc[a] || (e(b), qc[a] = !0)
        }

        function h(a, b) {
            return function(c) {
                return p(a.call(this, c), b)
            }
        }

        function i(a, b) {
            return function(c) {
                return this.localeData().ordinal(a.call(this, c), b)
            }
        }

        function j() {}

        function k(a, b) {
            b !== !1 && F(a), n(this, a), this._d = new Date(+a._d)
        }

        function l(a) {
            var b = y(a),
                c = b.year || 0,
                d = b.quarter || 0,
                e = b.month || 0,
                f = b.week || 0,
                g = b.day || 0,
                h = b.hour || 0,
                i = b.minute || 0,
                j = b.second || 0,
                k = b.millisecond || 0;
            this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = tb.localeData(), this._bubble()
        }

        function m(a, b) {
            for (var d in b) c(b, d) && (a[d] = b[d]);
            return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a
        }

        function n(a, b) {
            var c, d, e;
            if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Ib.length > 0)
                for (c in Ib) d = Ib[c], e = b[d], "undefined" != typeof e && (a[d] = e);
            return a
        }

        function o(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }

        function p(a, b, c) {
            for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
            return (e ? c ? "+" : "" : "-") + d
        }

        function q(a, b) {
            var c = {
                milliseconds: 0,
                months: 0
            };
            return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
        }

        function r(a, b) {
            var c;
            return b = K(b, a), a.isBefore(b) ? c = q(a, b) : (c = q(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
        }

        function s(a, b) {
            return function(c, d) {
                var e, f;
                return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = tb.duration(c, d), t(this, e, a), this
            }
        }

        function t(a, b, c, d) {
            var e = b._milliseconds,
                f = b._days,
                g = b._months;
            d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && nb(a, "Date", mb(a, "Date") + f * c), g && lb(a, mb(a, "Month") + g * c), d && tb.updateOffset(a, f || g)
        }

        function u(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }

        function v(a) {
            return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
        }

        function w(a, b, c) {
            var d, e = Math.min(a.length, b.length),
                f = Math.abs(a.length - b.length),
                g = 0;
            for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && A(a[d]) !== A(b[d])) && g++;
            return g + f
        }

        function x(a) {
            if (a) {
                var b = a.toLowerCase().replace(/(.)s$/, "$1");
                a = jc[a] || kc[b] || b
            }
            return a
        }

        function y(a) {
            var b, d, e = {};
            for (d in a) c(a, d) && (b = x(d), b && (e[b] = a[d]));
            return e
        }

        function z(b) {
            var c, d;
            if (0 === b.indexOf("week")) c = 7, d = "day";
            else {
                if (0 !== b.indexOf("month")) return;
                c = 12, d = "month"
            }
            tb[b] = function(e, f) {
                var g, h, i = tb._locale[b],
                    j = [];
                if ("number" == typeof e && (f = e, e = a), h = function(a) {
                        var b = tb().utc().set(d, a);
                        return i.call(tb._locale, b, e || "")
                    }, null != f) return h(f);
                for (g = 0; c > g; g++) j.push(h(g));
                return j
            }
        }

        function A(a) {
            var b = +a,
                c = 0;
            return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
        }

        function B(a, b) {
            return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
        }

        function C(a, b, c) {
            return hb(tb([a, 11, 31 + b - c]), b, c).week
        }

        function D(a) {
            return E(a) ? 366 : 365
        }

        function E(a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        }

        function F(a) {
            var b;
            a._a && -2 === a._pf.overflow && (b = a._a[Bb] < 0 || a._a[Bb] > 11 ? Bb : a._a[Cb] < 1 || a._a[Cb] > B(a._a[Ab], a._a[Bb]) ? Cb : a._a[Db] < 0 || a._a[Db] > 24 || 24 === a._a[Db] && (0 !== a._a[Eb] || 0 !== a._a[Fb] || 0 !== a._a[Gb]) ? Db : a._a[Eb] < 0 || a._a[Eb] > 59 ? Eb : a._a[Fb] < 0 || a._a[Fb] > 59 ? Fb : a._a[Gb] < 0 || a._a[Gb] > 999 ? Gb : -1, a._pf._overflowDayOfYear && (Ab > b || b > Cb) && (b = Cb), a._pf.overflow = b)
        }

        function G(b) {
            return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)), b._isValid
        }

        function H(a) {
            return a ? a.toLowerCase().replace("_", "-") : a
        }

        function I(a) {
            for (var b, c, d, e, f = 0; f < a.length;) {
                for (e = H(a[f]).split("-"), b = e.length, c = H(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                    if (d = J(e.slice(0, b).join("-"))) return d;
                    if (c && c.length >= b && w(e, c, !0) >= b - 1) break;
                    b--
                }
                f++
            }
            return null
        }

        function J(a) {
            var b = null;
            if (!Hb[a] && Jb) try {
                b = tb.locale(), require("./locale/" + a), tb.locale(b)
            } catch (c) {}
            return Hb[a]
        }

        function K(a, b) {
            var c, d;
            return b._isUTC ? (c = b.clone(), d = (tb.isMoment(a) || v(a) ? +a : +tb(a)) - +c, c._d.setTime(+c._d + d), tb.updateOffset(c, !1), c) : tb(a).local()
        }

        function L(a) {
            return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
        }

        function M(a) {
            var b, c, d = a.match(Nb);
            for (b = 0, c = d.length; c > b; b++) d[b] = pc[d[b]] ? pc[d[b]] : L(d[b]);
            return function(e) {
                var f = "";
                for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                return f
            }
        }

        function N(a, b) {
            return a.isValid() ? (b = O(b, a.localeData()), lc[b] || (lc[b] = M(b)), lc[b](a)) : a.localeData().invalidDate()
        }

        function O(a, b) {
            function c(a) {
                return b.longDateFormat(a) || a
            }
            var d = 5;
            for (Ob.lastIndex = 0; d >= 0 && Ob.test(a);) a = a.replace(Ob, c), Ob.lastIndex = 0, d -= 1;
            return a
        }

        function P(a, b) {
            var c, d = b._strict;
            switch (a) {
                case "Q":
                    return Zb;
                case "DDDD":
                    return _b;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return d ? ac : Rb;
                case "Y":
                case "G":
                case "g":
                    return cc;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return d ? bc : Sb;
                case "S":
                    if (d) return Zb;
                case "SS":
                    if (d) return $b;
                case "SSS":
                    if (d) return _b;
                case "DDD":
                    return Qb;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return Ub;
                case "a":
                case "A":
                    return b._locale._meridiemParse;
                case "x":
                    return Xb;
                case "X":
                    return Yb;
                case "Z":
                case "ZZ":
                    return Vb;
                case "T":
                    return Wb;
                case "SSSS":
                    return Tb;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return d ? $b : Pb;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return Pb;
                case "Do":
                    return d ? b._locale._ordinalParse : b._locale._ordinalParseLenient;
                default:
                    return c = new RegExp(Y(X(a.replace("\\", "")), "i"))
            }
        }

        function Q(a) {
            a = a || "";
            var b = a.match(Vb) || [],
                c = b[b.length - 1] || [],
                d = (c + "").match(hc) || ["-", 0, 0],
                e = +(60 * d[1]) + A(d[2]);
            return "+" === d[0] ? -e : e
        }

        function R(a, b, c) {
            var d, e = c._a;
            switch (a) {
                case "Q":
                    null != b && (e[Bb] = 3 * (A(b) - 1));
                    break;
                case "M":
                case "MM":
                    null != b && (e[Bb] = A(b) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    d = c._locale.monthsParse(b, a, c._strict), null != d ? e[Bb] = d : c._pf.invalidMonth = b;
                    break;
                case "D":
                case "DD":
                    null != b && (e[Cb] = A(b));
                    break;
                case "Do":
                    null != b && (e[Cb] = A(parseInt(b.match(/\d{1,2}/)[0], 10)));
                    break;
                case "DDD":
                case "DDDD":
                    null != b && (c._dayOfYear = A(b));
                    break;
                case "YY":
                    e[Ab] = tb.parseTwoDigitYear(b);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    e[Ab] = A(b);
                    break;
                case "a":
                case "A":
                    c._isPm = c._locale.isPM(b);
                    break;
                case "h":
                case "hh":
                    c._pf.bigHour = !0;
                case "H":
                case "HH":
                    e[Db] = A(b);
                    break;
                case "m":
                case "mm":
                    e[Eb] = A(b);
                    break;
                case "s":
                case "ss":
                    e[Fb] = A(b);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    e[Gb] = A(1e3 * ("0." + b));
                    break;
                case "x":
                    c._d = new Date(A(b));
                    break;
                case "X":
                    c._d = new Date(1e3 * parseFloat(b));
                    break;
                case "Z":
                case "ZZ":
                    c._useUTC = !0, c._tzm = Q(b);
                    break;
                case "dd":
                case "ddd":
                case "dddd":
                    d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b;
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "e":
                case "E":
                    a = a.substr(0, 1);
                case "gggg":
                case "GGGG":
                case "GGGGG":
                    a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = A(b));
                    break;
                case "gg":
                case "GG":
                    c._w = c._w || {}, c._w[a] = tb.parseTwoDigitYear(b)
            }
        }

        function S(a) {
            var c, d, e, f, g, h, i;
            c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Ab], hb(tb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Ab], hb(tb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = ib(d, e, f, h, g), a._a[Ab] = i.year, a._dayOfYear = i.dayOfYear
        }

        function T(a) {
            var c, d, e, f, g = [];
            if (!a._d) {
                for (e = V(a), a._w && null == a._a[Cb] && null == a._a[Bb] && S(a), a._dayOfYear && (f = b(a._a[Ab], e[Ab]), a._dayOfYear > D(f) && (a._pf._overflowDayOfYear = !0), d = db(f, 0, a._dayOfYear), a._a[Bb] = d.getUTCMonth(), a._a[Cb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) a._a[c] = g[c] = e[c];
                for (; 7 > c; c++) a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c];
                24 === a._a[Db] && 0 === a._a[Eb] && 0 === a._a[Fb] && 0 === a._a[Gb] && (a._nextDay = !0, a._a[Db] = 0), a._d = (a._useUTC ? db : cb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() + a._tzm), a._nextDay && (a._a[Db] = 24)
            }
        }

        function U(a) {
            var b;
            a._d || (b = y(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], T(a))
        }

        function V(a) {
            var b = new Date;
            return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
        }

        function W(b) {
            if (b._f === tb.ISO_8601) return void $(b);
            b._a = [], b._pf.empty = !0;
            var c, d, e, f, g, h = "" + b._i,
                i = h.length,
                j = 0;
            for (e = O(b._f, b._locale).match(Nb) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), pc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), R(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f);
            b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[Db] <= 12 && (b._pf.bigHour = a), b._isPm && b._a[Db] < 12 && (b._a[Db] += 12), b._isPm === !1 && 12 === b._a[Db] && (b._a[Db] = 0), T(b), F(b)
        }

        function X(a) {
            return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
                return b || c || d || e
            })
        }

        function Y(a) {
            return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function Z(a) {
            var b, c, e, f, g;
            if (0 === a._f.length) return a._pf.invalidFormat = !0, void(a._d = new Date(0 / 0));
            for (f = 0; f < a._f.length; f++) g = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], W(b), G(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b));
            m(a, c || b)
        }

        function $(a) {
            var b, c, d = a._i,
                e = dc.exec(d);
            if (e) {
                for (a._pf.iso = !0, b = 0, c = fc.length; c > b; b++)
                    if (fc[b][1].exec(d)) {
                        a._f = fc[b][0] + (e[6] || " ");
                        break
                    }
                for (b = 0, c = gc.length; c > b; b++)
                    if (gc[b][1].exec(d)) {
                        a._f += gc[b][0];
                        break
                    }
                d.match(Vb) && (a._f += "Z"), W(a)
            } else a._isValid = !1
        }

        function _(a) {
            $(a), a._isValid === !1 && (delete a._isValid, tb.createFromInputFallback(a))
        }

        function ab(a, b) {
            var c, d = [];
            for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
            return d
        }

        function bb(b) {
            var c, d = b._i;
            d === a ? b._d = new Date : v(d) ? b._d = new Date(+d) : null !== (c = Kb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? _(b) : u(d) ? (b._a = ab(d.slice(0), function(a) {
                return parseInt(a, 10)
            }), T(b)) : "object" == typeof d ? U(b) : "number" == typeof d ? b._d = new Date(d) : tb.createFromInputFallback(b)
        }

        function cb(a, b, c, d, e, f, g) {
            var h = new Date(a, b, c, d, e, f, g);
            return 1970 > a && h.setFullYear(a), h
        }

        function db(a) {
            var b = new Date(Date.UTC.apply(null, arguments));
            return 1970 > a && b.setUTCFullYear(a), b
        }

        function eb(a, b) {
            if ("string" == typeof a)
                if (isNaN(a)) {
                    if (a = b.weekdaysParse(a), "number" != typeof a) return null
                } else a = parseInt(a, 10);
            return a
        }

        function fb(a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d)
        }

        function gb(a, b, c) {
            var d = tb.duration(a).abs(),
                e = yb(d.as("s")),
                f = yb(d.as("m")),
                g = yb(d.as("h")),
                h = yb(d.as("d")),
                i = yb(d.as("M")),
                j = yb(d.as("y")),
                k = e < mc.s && ["s", e] || 1 === f && ["m"] || f < mc.m && ["mm", f] || 1 === g && ["h"] || g < mc.h && ["hh", g] || 1 === h && ["d"] || h < mc.d && ["dd", h] || 1 === i && ["M"] || i < mc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
            return k[2] = b, k[3] = +a > 0, k[4] = c, fb.apply({}, k)
        }

        function hb(a, b, c) {
            var d, e = c - b,
                f = c - a.day();
            return f > e && (f -= 7), e - 7 > f && (f += 7), d = tb(a).add(f, "d"), {
                week: Math.ceil(d.dayOfYear() / 7),
                year: d.year()
            }
        }

        function ib(a, b, c, d, e) {
            var f, g, h = db(a, 0, 1).getUTCDay();
            return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
                year: g > 0 ? a : a - 1,
                dayOfYear: g > 0 ? g : D(a - 1) + g
            }
        }

        function jb(b) {
            var c, d = b._i,
                e = b._f;
            return b._locale = b._locale || tb.localeData(b._l), null === d || e === a && "" === d ? tb.invalid({
                nullInput: !0
            }) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), tb.isMoment(d) ? new k(d, !0) : (e ? u(e) ? Z(b) : W(b) : bb(b), c = new k(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c))
        }

        function kb(a, b) {
            var c, d;
            if (1 === b.length && u(b[0]) && (b = b[0]), !b.length) return tb();
            for (c = b[0], d = 1; d < b.length; ++d) b[d][a](c) && (c = b[d]);
            return c
        }

        function lb(a, b) {
            var c;
            return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), B(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
        }

        function mb(a, b) {
            return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
        }

        function nb(a, b, c) {
            return "Month" === b ? lb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
        }

        function ob(a, b) {
            return function(c) {
                return null != c ? (nb(this, a, c), tb.updateOffset(this, b), this) : mb(this, a)
            }
        }

        function pb(a) {
            return 400 * a / 146097
        }

        function qb(a) {
            return 146097 * a / 400
        }

        function rb(a) {
            tb.duration.fn[a] = function() {
                return this._data[a]
            }
        }

        function sb(a) {
            "undefined" == typeof ender && (ub = xb.moment, xb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", tb) : tb)
        }
        for (var tb, ub, vb, wb = "2.8.4", xb = "undefined" != typeof global ? global : this, yb = Math.round, zb = Object.prototype.hasOwnProperty, Ab = 0, Bb = 1, Cb = 2, Db = 3, Eb = 4, Fb = 5, Gb = 6, Hb = {}, Ib = [], Jb = "undefined" != typeof module && module && module.exports, Kb = /^\/?Date\((\-?\d+)/i, Lb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Mb = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Nb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Ob = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Pb = /\d\d?/, Qb = /\d{1,3}/, Rb = /\d{1,4}/, Sb = /[+\-]?\d{1,6}/, Tb = /\d+/, Ub = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Vb = /Z|[\+\-]\d\d:?\d\d/gi, Wb = /T/i, Xb = /[\+\-]?\d+/, Yb = /[\+\-]?\d+(\.\d{1,3})?/, Zb = /\d/, $b = /\d\d/, _b = /\d{3}/, ac = /\d{4}/, bc = /[+-]?\d{6}/, cc = /[+-]?\d+/, dc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ec = "YYYY-MM-DDTHH:mm:ssZ", fc = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ], gc = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ], hc = /([\+\-]|\d\d)/gi, ic = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
                Milliseconds: 1,
                Seconds: 1e3,
                Minutes: 6e4,
                Hours: 36e5,
                Days: 864e5,
                Months: 2592e6,
                Years: 31536e6
            }), jc = {
                ms: "millisecond",
                s: "second",
                m: "minute",
                h: "hour",
                d: "day",
                D: "date",
                w: "week",
                W: "isoWeek",
                M: "month",
                Q: "quarter",
                y: "year",
                DDD: "dayOfYear",
                e: "weekday",
                E: "isoWeekday",
                gg: "weekYear",
                GG: "isoWeekYear"
            }, kc = {
                dayofyear: "dayOfYear",
                isoweekday: "isoWeekday",
                isoweek: "isoWeek",
                weekyear: "weekYear",
                isoweekyear: "isoWeekYear"
            }, lc = {}, mc = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }, nc = "DDD w W M D d".split(" "), oc = "M D H h m s w W".split(" "), pc = {
                M: function() {
                    return this.month() + 1
                },
                MMM: function(a) {
                    return this.localeData().monthsShort(this, a)
                },
                MMMM: function(a) {
                    return this.localeData().months(this, a)
                },
                D: function() {
                    return this.date()
                },
                DDD: function() {
                    return this.dayOfYear()
                },
                d: function() {
                    return this.day()
                },
                dd: function(a) {
                    return this.localeData().weekdaysMin(this, a)
                },
                ddd: function(a) {
                    return this.localeData().weekdaysShort(this, a)
                },
                dddd: function(a) {
                    return this.localeData().weekdays(this, a)
                },
                w: function() {
                    return this.week()
                },
                W: function() {
                    return this.isoWeek()
                },
                YY: function() {
                    return p(this.year() % 100, 2)
                },
                YYYY: function() {
                    return p(this.year(), 4)
                },
                YYYYY: function() {
                    return p(this.year(), 5)
                },
                YYYYYY: function() {
                    var a = this.year(),
                        b = a >= 0 ? "+" : "-";
                    return b + p(Math.abs(a), 6)
                },
                gg: function() {
                    return p(this.weekYear() % 100, 2)
                },
                gggg: function() {
                    return p(this.weekYear(), 4)
                },
                ggggg: function() {
                    return p(this.weekYear(), 5)
                },
                GG: function() {
                    return p(this.isoWeekYear() % 100, 2)
                },
                GGGG: function() {
                    return p(this.isoWeekYear(), 4)
                },
                GGGGG: function() {
                    return p(this.isoWeekYear(), 5)
                },
                e: function() {
                    return this.weekday()
                },
                E: function() {
                    return this.isoWeekday()
                },
                a: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !0)
                },
                A: function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), !1)
                },
                H: function() {
                    return this.hours()
                },
                h: function() {
                    return this.hours() % 12 || 12
                },
                m: function() {
                    return this.minutes()
                },
                s: function() {
                    return this.seconds()
                },
                S: function() {
                    return A(this.milliseconds() / 100)
                },
                SS: function() {
                    return p(A(this.milliseconds() / 10), 2)
                },
                SSS: function() {
                    return p(this.milliseconds(), 3)
                },
                SSSS: function() {
                    return p(this.milliseconds(), 3)
                },
                Z: function() {
                    var a = -this.zone(),
                        b = "+";
                    return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + ":" + p(A(a) % 60, 2)
                },
                ZZ: function() {
                    var a = -this.zone(),
                        b = "+";
                    return 0 > a && (a = -a, b = "-"), b + p(A(a / 60), 2) + p(A(a) % 60, 2)
                },
                z: function() {
                    return this.zoneAbbr()
                },
                zz: function() {
                    return this.zoneName()
                },
                x: function() {
                    return this.valueOf()
                },
                X: function() {
                    return this.unix()
                },
                Q: function() {
                    return this.quarter()
                }
            }, qc = {}, rc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; nc.length;) vb = nc.pop(), pc[vb + "o"] = i(pc[vb], vb);
        for (; oc.length;) vb = oc.pop(), pc[vb + vb] = h(pc[vb], 2);
        pc.DDDD = h(pc.DDD, 3), m(j.prototype, {
            set: function(a) {
                var b, c;
                for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(a) {
                return this._months[a.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(a) {
                return this._monthsShort[a.month()]
            },
            monthsParse: function(a, b, c) {
                var d, e, f;
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
                    if (e = tb.utc([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
                    if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                    if (!c && this._monthsParse[d].test(a)) return d
                }
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(a) {
                return this._weekdays[a.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(a) {
                return this._weekdaysShort[a.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(a) {
                return this._weekdaysMin[a.day()]
            },
            weekdaysParse: function(a) {
                var b, c, d;
                for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
                    if (this._weekdaysParse[b] || (c = tb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
            },
            _longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            longDateFormat: function(a) {
                var b = this._longDateFormat[a];
                return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                    return a.slice(1)
                }), this._longDateFormat[a] = b), b
            },
            isPM: function(a) {
                return "p" === (a + "").toLowerCase().charAt(0)
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(a, b, c) {
                return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(a, b, c) {
                var d = this._calendar[a];
                return "function" == typeof d ? d.apply(b, [c]) : d
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(a, b, c, d) {
                var e = this._relativeTime[c];
                return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
            },
            pastFuture: function(a, b) {
                var c = this._relativeTime[a > 0 ? "future" : "past"];
                return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
            },
            ordinal: function(a) {
                return this._ordinal.replace("%d", a)
            },
            _ordinal: "%d",
            _ordinalParse: /\d{1,2}/,
            preparse: function(a) {
                return a
            },
            postformat: function(a) {
                return a
            },
            week: function(a) {
                return hb(a, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            _invalidDate: "Invalid date",
            invalidDate: function() {
                return this._invalidDate
            }
        }), tb = function(b, c, e, f) {
            var g;
            return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), jb(g)
        }, tb.suppressDeprecationWarnings = !1, tb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
        }), tb.min = function() {
            var a = [].slice.call(arguments, 0);
            return kb("isBefore", a)
        }, tb.max = function() {
            var a = [].slice.call(arguments, 0);
            return kb("isAfter", a)
        }, tb.utc = function(b, c, e, f) {
            var g;
            return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), jb(g).utc()
        }, tb.unix = function(a) {
            return tb(1e3 * a)
        }, tb.duration = function(a, b) {
            var d, e, f, g, h = a,
                i = null;
            return tb.isDuration(a) ? h = {
                ms: a._milliseconds,
                d: a._days,
                M: a._months
            } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Lb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = {
                y: 0,
                d: A(i[Cb]) * d,
                h: A(i[Db]) * d,
                m: A(i[Eb]) * d,
                s: A(i[Fb]) * d,
                ms: A(i[Gb]) * d
            }) : (i = Mb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function(a) {
                var b = a && parseFloat(a.replace(",", "."));
                return (isNaN(b) ? 0 : b) * d
            }, h = {
                y: f(i[2]),
                M: f(i[3]),
                d: f(i[4]),
                h: f(i[5]),
                m: f(i[6]),
                s: f(i[7]),
                w: f(i[8])
            }) : "object" == typeof h && ("from" in h || "to" in h) && (g = r(tb(h.from), tb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new l(h), tb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e
        }, tb.version = wb, tb.defaultFormat = ec, tb.ISO_8601 = function() {}, tb.momentProperties = Ib, tb.updateOffset = function() {}, tb.relativeTimeThreshold = function(b, c) {
            return mc[b] === a ? !1 : c === a ? mc[b] : (mc[b] = c, !0)
        }, tb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function(a, b) {
            return tb.locale(a, b)
        }), tb.locale = function(a, b) {
            var c;
            return a && (c = "undefined" != typeof b ? tb.defineLocale(a, b) : tb.localeData(a), c && (tb.duration._locale = tb._locale = c)), tb._locale._abbr
        }, tb.defineLocale = function(a, b) {
            return null !== b ? (b.abbr = a, Hb[a] || (Hb[a] = new j), Hb[a].set(b), tb.locale(a), Hb[a]) : (delete Hb[a], null)
        }, tb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function(a) {
            return tb.localeData(a)
        }), tb.localeData = function(a) {
            var b;
            if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return tb._locale;
            if (!u(a)) {
                if (b = J(a)) return b;
                a = [a]
            }
            return I(a)
        }, tb.isMoment = function(a) {
            return a instanceof k || null != a && c(a, "_isAMomentObject")
        }, tb.isDuration = function(a) {
            return a instanceof l
        };
        for (vb = rc.length - 1; vb >= 0; --vb) z(rc[vb]);
        tb.normalizeUnits = function(a) {
            return x(a)
        }, tb.invalid = function(a) {
            var b = tb.utc(0 / 0);
            return null != a ? m(b._pf, a) : b._pf.userInvalidated = !0, b
        }, tb.parseZone = function() {
            return tb.apply(null, arguments).parseZone()
        }, tb.parseTwoDigitYear = function(a) {
            return A(a) + (A(a) > 68 ? 1900 : 2e3)
        }, m(tb.fn = k.prototype, {
            clone: function() {
                return tb(this)
            },
            valueOf: function() {
                return +this._d + 6e4 * (this._offset || 0)
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function() {
                var a = tb(this).utc();
                return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : N(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : N(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var a = this;
                return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
            },
            isValid: function() {
                return G(this)
            },
            isDSTShifted: function() {
                return this._a ? this.isValid() && w(this._a, (this._isUTC ? tb.utc(this._a) : tb(this._a)).toArray()) > 0 : !1
            },
            parsingFlags: function() {
                return m({}, this._pf)
            },
            invalidAt: function() {
                return this._pf.overflow
            },
            utc: function(a) {
                return this.zone(0, a)
            },
            local: function(a) {
                return this._isUTC && (this.zone(0, a), this._isUTC = !1, a && this.add(this._dateTzOffset(), "m")), this
            },
            format: function(a) {
                var b = N(this, a || tb.defaultFormat);
                return this.localeData().postformat(b)
            },
            add: s(1, "add"),
            subtract: s(-1, "subtract"),
            diff: function(a, b, c) {
                var d, e, f, g = K(a, this),
                    h = 6e4 * (this.zone() - g.zone());
                return b = x(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + g.daysInMonth()), e = 12 * (this.year() - g.year()) + (this.month() - g.month()), f = this - tb(this).startOf("month") - (g - tb(g).startOf("month")), f -= 6e4 * (this.zone() - tb(this).startOf("month").zone() - (g.zone() - tb(g).startOf("month").zone())), e += f / d, "year" === b && (e /= 12)) : (d = this - g, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - h) / 864e5 : "week" === b ? (d - h) / 6048e5 : d), c ? e : o(e)
            },
            from: function(a, b) {
                return tb.duration({
                    to: this,
                    from: a
                }).locale(this.locale()).humanize(!b)
            },
            fromNow: function(a) {
                return this.from(tb(), a)
            },
            calendar: function(a) {
                var b = a || tb(),
                    c = K(b, this).startOf("day"),
                    d = this.diff(c, "days", !0),
                    e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(e, this, tb(b)))
            },
            isLeapYear: function() {
                return E(this.year())
            },
            isDST: function() {
                return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
            },
            day: function(a) {
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != a ? (a = eb(a, this.localeData()), this.add(a - b, "d")) : b
            },
            month: ob("Month", !0),
            startOf: function(a) {
                switch (a = x(a)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
            },
            endOf: function(b) {
                return b = x(b), b === a || "millisecond" === b ? this : this.startOf(b).add(1, "isoWeek" === b ? "week" : b).subtract(1, "ms")
            },
            isAfter: function(a, b) {
                var c;
                return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +this > +a) : (c = tb.isMoment(a) ? +a : +tb(a), c < +this.clone().startOf(b))
            },
            isBefore: function(a, b) {
                var c;
                return b = x("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +a > +this) : (c = tb.isMoment(a) ? +a : +tb(a), +this.clone().endOf(b) < c)
            },
            isSame: function(a, b) {
                var c;
                return b = x(b || "millisecond"), "millisecond" === b ? (a = tb.isMoment(a) ? a : tb(a), +this === +a) : (c = +tb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
            },
            min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(a) {
                return a = tb.apply(null, arguments), this > a ? this : a
            }),
            max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(a) {
                return a = tb.apply(null, arguments), a > this ? this : a
            }),
            zone: function(a, b) {
                var c, d = this._offset || 0;
                return null == a ? this._isUTC ? d : this._dateTzOffset() : ("string" == typeof a && (a = Q(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateTzOffset()), this._offset = a, this._isUTC = !0, null != c && this.subtract(c, "m"), d !== a && (!b || this._changeInProgress ? t(this, tb.duration(d - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, tb.updateOffset(this, !0), this._changeInProgress = null)), this)
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function() {
                return this._tzm ? this.zone(this._tzm) : "string" == typeof this._i && this.zone(this._i), this
            },
            hasAlignedHourOffset: function(a) {
                return a = a ? tb(a).zone() : 0, (this.zone() - a) % 60 === 0
            },
            daysInMonth: function() {
                return B(this.year(), this.month())
            },
            dayOfYear: function(a) {
                var b = yb((tb(this).startOf("day") - tb(this).startOf("year")) / 864e5) + 1;
                return null == a ? b : this.add(a - b, "d")
            },
            quarter: function(a) {
                return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
            },
            weekYear: function(a) {
                var b = hb(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return null == a ? b : this.add(a - b, "y")
            },
            isoWeekYear: function(a) {
                var b = hb(this, 1, 4).year;
                return null == a ? b : this.add(a - b, "y")
            },
            week: function(a) {
                var b = this.localeData().week(this);
                return null == a ? b : this.add(7 * (a - b), "d")
            },
            isoWeek: function(a) {
                var b = hb(this, 1, 4).week;
                return null == a ? b : this.add(7 * (a - b), "d")
            },
            weekday: function(a) {
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == a ? b : this.add(a - b, "d")
            },
            isoWeekday: function(a) {
                return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
            },
            isoWeeksInYear: function() {
                return C(this.year(), 1, 4)
            },
            weeksInYear: function() {
                var a = this.localeData()._week;
                return C(this.year(), a.dow, a.doy)
            },
            get: function(a) {
                return a = x(a), this[a]()
            },
            set: function(a, b) {
                return a = x(a), "function" == typeof this[a] && this[a](b), this
            },
            locale: function(b) {
                var c;
                return b === a ? this._locale._abbr : (c = tb.localeData(b), null != c && (this._locale = c), this)
            },
            lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(b) {
                return b === a ? this.localeData() : this.locale(b)
            }),
            localeData: function() {
                return this._locale
            },
            _dateTzOffset: function() {
                return 15 * Math.round(this._d.getTimezoneOffset() / 15)
            }
        }), tb.fn.millisecond = tb.fn.milliseconds = ob("Milliseconds", !1), tb.fn.second = tb.fn.seconds = ob("Seconds", !1), tb.fn.minute = tb.fn.minutes = ob("Minutes", !1), tb.fn.hour = tb.fn.hours = ob("Hours", !0), tb.fn.date = ob("Date", !0), tb.fn.dates = f("dates accessor is deprecated. Use date instead.", ob("Date", !0)), tb.fn.year = ob("FullYear", !0), tb.fn.years = f("years accessor is deprecated. Use year instead.", ob("FullYear", !0)), tb.fn.days = tb.fn.day, tb.fn.months = tb.fn.month, tb.fn.weeks = tb.fn.week, tb.fn.isoWeeks = tb.fn.isoWeek, tb.fn.quarters = tb.fn.quarter, tb.fn.toJSON = tb.fn.toISOString, m(tb.duration.fn = l.prototype, {
            _bubble: function() {
                var a, b, c, d = this._milliseconds,
                    e = this._days,
                    f = this._months,
                    g = this._data,
                    h = 0;
                g.milliseconds = d % 1e3, a = o(d / 1e3), g.seconds = a % 60, b = o(a / 60), g.minutes = b % 60, c = o(b / 60), g.hours = c % 24, e += o(c / 24), h = o(pb(e)), e -= o(qb(h)), f += o(e / 30), e %= 30, h += o(f / 12), f %= 12, g.days = e, g.months = f, g.years = h
            },
            abs: function() {
                return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
            },
            weeks: function() {
                return o(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * A(this._months / 12)
            },
            humanize: function(a) {
                var b = gb(this, !a, this.localeData());
                return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b)
            },
            add: function(a, b) {
                var c = tb.duration(a, b);
                return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
            },
            subtract: function(a, b) {
                var c = tb.duration(a, b);
                return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
            },
            get: function(a) {
                return a = x(a), this[a.toLowerCase() + "s"]()
            },
            as: function(a) {
                var b, c;
                if (a = x(a), "month" === a || "year" === a) return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * pb(b), "month" === a ? c : c / 12;
                switch (b = this._days + Math.round(qb(this._months / 12)), a) {
                    case "week":
                        return b / 7 + this._milliseconds / 6048e5;
                    case "day":
                        return b + this._milliseconds / 864e5;
                    case "hour":
                        return 24 * b + this._milliseconds / 36e5;
                    case "minute":
                        return 24 * b * 60 + this._milliseconds / 6e4;
                    case "second":
                        return 24 * b * 60 * 60 + this._milliseconds / 1e3;
                    case "millisecond":
                        return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds;
                    default:
                        throw new Error("Unknown unit " + a)
                }
            },
            lang: tb.fn.lang,
            locale: tb.fn.locale,
            toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                return this.toISOString()
            }),
            toISOString: function() {
                var a = Math.abs(this.years()),
                    b = Math.abs(this.months()),
                    c = Math.abs(this.days()),
                    d = Math.abs(this.hours()),
                    e = Math.abs(this.minutes()),
                    f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
            },
            localeData: function() {
                return this._locale
            }
        }), tb.duration.fn.toString = tb.duration.fn.toISOString;
        for (vb in ic) c(ic, vb) && rb(vb.toLowerCase());
        tb.duration.fn.asMilliseconds = function() {
            return this.as("ms")
        }, tb.duration.fn.asSeconds = function() {
            return this.as("s")
        }, tb.duration.fn.asMinutes = function() {
            return this.as("m")
        }, tb.duration.fn.asHours = function() {
            return this.as("h")
        }, tb.duration.fn.asDays = function() {
            return this.as("d")
        }, tb.duration.fn.asWeeks = function() {
            return this.as("weeks")
        }, tb.duration.fn.asMonths = function() {
            return this.as("M")
        }, tb.duration.fn.asYears = function() {
            return this.as("y")
        }, tb.locale("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(a) {
                var b = a % 10,
                    c = 1 === A(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }), Jb ? module.exports = tb : "function" == typeof define && define.amd ? (define("moment", function(a, b, c) {
            return c.config && c.config() && c.config().noGlobal === !0 && (xb.moment = ub), tb
        }), sb(!0)) : sb()
    }.call(this), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b()
    })
}(jQuery), + function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
        c = function(c) {
            a(c).on("click", b, this.close)
        };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, b.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, b.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function(b) {
        var c = this,
            d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active")
        })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
            e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                i.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this)
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
                g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this),
            e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
            f = a.extend({}, e.data(), d.data()),
            g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : d.data(),
            i = d.attr("data-parent"),
            j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        a(d).remove(), a(e).each(function() {
            var d = c(a(this)),
                e = {
                    relatedTarget: this
                };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        })
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    var d = ".dropdown-backdrop",
        e = "[data-toggle=dropdown]",
        f = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus()
            }
            return !1
        }
    }, f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d),
                    g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = " li:not(.divider):visible a",
                    i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }, b.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this),
            d = c.attr("href"),
            e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(d) && d
            }, e.data(), c.data());
        c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open")
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, b.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this,
                d = this.tip();
            this.setContent(), this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
                f = /\s?auto?\s?/i,
                g = f.test(e);
            g && (e = e.replace(f, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(),
                i = d[0].offsetWidth,
                j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(),
                    l = e,
                    m = document.documentElement.scrollTop || document.body.scrollTop,
                    n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
                    o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
                    p = "body" == this.options.container ? 0 : k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e), this.hoverState = null;
            var r = function() {
                c.$element.trigger("shown.bs." + c.type)
            };
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
        }
    }, b.prototype.applyPlacement = function(b, c) {
        var d, e = this.tip(),
            f = e[0].offsetWidth,
            g = e[0].offsetHeight,
            h = parseInt(e.css("margin-top"), 10),
            i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
            using: function(a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), e.addClass("in");
        var j = e[0].offsetWidth,
            k = e[0].offsetHeight;
        if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
        } else this.replaceArrow(k - g, k, "top");
        d && e.offset(b)
    }, b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function() {
        return this.getTitle()
    }, b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, b.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function() {
        this.enabled = !0
    }, b.prototype.disable = function() {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this
    }
}(jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            c.offsets.push(this[0]), c.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            d = c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    };
    b.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show")
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0
    }, b.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(b.RESET).addClass("affix");
        var a = this.$window.scrollTop(),
            c = this.$element.offset();
        return this.pinnedOffset = c.top - a
    }, b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(),
                d = this.$window.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "top" == this.affixed && (e.top += d), "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""),
                    k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: c - h - this.$element.height()
                }))
            }
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this),
                c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(jQuery),
function(a, b, c) {
    "use strict";

    function d(a) {
        return function() {
            var b, c = arguments[0];
            for (b = "[" + (a ? a + ":" : "") + c + "] http://errors.angularjs.org/1.3.13/" + (a ? a + "/" : "") + c, c = 1; c < arguments.length; c++) {
                b = b + (1 == c ? "?" : "&") + "p" + (c - 1) + "=";
                var d, e = encodeURIComponent;
                d = arguments[c], d = "function" == typeof d ? d.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof d ? "undefined" : "string" != typeof d ? JSON.stringify(d) : d, b += e(d)
            }
            return Error(b)
        }
    }

    function e(a) {
        if (null == a || y(a)) return !1;
        var b = a.length;
        return a.nodeType === Od && b ? !0 : t(a) || Hd(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function f(a, b, c) {
        var d, g;
        if (a)
            if (w(a))
                for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
            else if (Hd(a) || e(a)) {
            var h = "object" != typeof a;
            for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
        } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
        else
            for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
        return a
    }

    function g(a, b, c) {
        for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d
    }

    function h(a) {
        return function(b, c) {
            a(c, b)
        }
    }

    function i() {
        return ++Fd
    }

    function j(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function k(a) {
        for (var b = a.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
            var e = arguments[c];
            if (e)
                for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                    var i = f[g];
                    a[i] = e[i]
                }
        }
        return j(a, b), a
    }

    function l(a) {
        return parseInt(a, 10)
    }

    function m(a, b) {
        return k(Object.create(a), b)
    }

    function n() {}

    function o(a) {
        return a
    }

    function p(a) {
        return function() {
            return a
        }
    }

    function q(a) {
        return "undefined" == typeof a
    }

    function r(a) {
        return "undefined" != typeof a
    }

    function s(a) {
        return null !== a && "object" == typeof a
    }

    function t(a) {
        return "string" == typeof a
    }

    function u(a) {
        return "number" == typeof a
    }

    function v(a) {
        return "[object Date]" === Cd.call(a)
    }

    function w(a) {
        return "function" == typeof a
    }

    function x(a) {
        return "[object RegExp]" === Cd.call(a)
    }

    function y(a) {
        return a && a.window === a
    }

    function z(a) {
        return a && a.$evalAsync && a.$watch
    }

    function A(a) {
        return "boolean" == typeof a
    }

    function B(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function C(a) {
        var b = {};
        a = a.split(",");
        var c;
        for (c = 0; c < a.length; c++) b[a[c]] = !0;
        return b
    }

    function D(a) {
        return wd(a.nodeName || a[0] && a[0].nodeName)
    }

    function E(a, b) {
        var c = a.indexOf(b);
        return c >= 0 && a.splice(c, 1), b
    }

    function F(a, b, c, d) {
        if (y(a) || z(a)) throw Dd("cpws");
        if (b) {
            if (a === b) throw Dd("cpi");
            if (c = c || [], d = d || [], s(a)) {
                var e = c.indexOf(a);
                if (-1 !== e) return d[e];
                c.push(a), d.push(b)
            }
            if (Hd(a))
                for (var g = b.length = 0; g < a.length; g++) e = F(a[g], null, c, d), s(a[g]) && (c.push(a[g]), d.push(e)), b.push(e);
            else {
                var h = b.$$hashKey;
                Hd(b) ? b.length = 0 : f(b, function(a, c) {
                    delete b[c]
                });
                for (g in a) a.hasOwnProperty(g) && (e = F(a[g], null, c, d), s(a[g]) && (c.push(a[g]), d.push(e)), b[g] = e);
                j(b, h)
            }
        } else(b = a) && (Hd(a) ? b = F(a, [], c, d) : v(a) ? b = new Date(a.getTime()) : x(a) ? (b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex) : s(a) && (e = Object.create(Object.getPrototypeOf(a)), b = F(a, e, c, d)));
        return b
    }

    function G(a, b) {
        if (Hd(a)) {
            b = b || [];
            for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
        } else if (s(a))
            for (c in b = b || {}, a)("$" !== c.charAt(0) || "$" !== c.charAt(1)) && (b[c] = a[c]);
        return b || a
    }

    function H(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d, e = typeof a;
        if (e == typeof b && "object" == e) {
            if (!Hd(a)) {
                if (v(a)) return v(b) ? H(a.getTime(), b.getTime()) : !1;
                if (x(a) && x(b)) return a.toString() == b.toString();
                if (z(a) || z(b) || y(a) || y(b) || Hd(b)) return !1;
                e = {};
                for (d in a)
                    if ("$" !== d.charAt(0) && !w(a[d])) {
                        if (!H(a[d], b[d])) return !1;
                        e[d] = !0
                    }
                for (d in b)
                    if (!e.hasOwnProperty(d) && "$" !== d.charAt(0) && b[d] !== c && !w(b[d])) return !1;
                return !0
            }
            if (!Hd(b)) return !1;
            if ((e = a.length) == b.length) {
                for (d = 0; e > d; d++)
                    if (!H(a[d], b[d])) return !1;
                return !0
            }
        }
        return !1
    }

    function I(a, b, c) {
        return a.concat(zd.call(b, c))
    }

    function J(a, b) {
        var c = 2 < arguments.length ? zd.call(arguments, 2) : [];
        return !w(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, I(c, arguments, 0)) : b.apply(a, c)
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function K(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : y(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : z(d) && (e = "$SCOPE"), e
    }

    function L(a, b) {
        return "undefined" == typeof a ? c : (u(b) || (b = b ? 2 : null), JSON.stringify(a, K, b))
    }

    function M(a) {
        return t(a) ? JSON.parse(a) : a
    }

    function N(a) {
        a = sd(a).clone();
        try {
            a.empty()
        } catch (b) {}
        var c = sd("<div>").append(a).html();
        try {
            return a[0].nodeType === Pd ? wd(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + wd(b)
            })
        } catch (d) {
            return wd(c)
        }
    }

    function O(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {}
    }

    function P(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function(a) {
            a && (b = a.replace(/\+/g, "%20").split("="), c = O(b[0]), r(c) && (a = r(b[1]) ? O(b[1]) : !0, xd.call(d, c) ? Hd(d[c]) ? d[c].push(a) : d[c] = [d[c], a] : d[c] = a))
        }), d
    }

    function Q(a) {
        var b = [];
        return f(a, function(a, c) {
            Hd(a) ? f(a, function(a) {
                b.push(S(c, !0) + (!0 === a ? "" : "=" + S(a, !0)))
            }) : b.push(S(c, !0) + (!0 === a ? "" : "=" + S(a, !0)))
        }), b.length ? b.join("&") : ""
    }

    function R(a) {
        return S(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function S(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function T(a, b) {
        var c, d, e = Ld.length;
        for (a = sd(a), d = 0; e > d; ++d)
            if (c = Ld[d] + b, t(c = a.attr(c))) return c;
        return null
    }

    function U(a, b) {
        var c, d, e = {};
        f(Ld, function(b) {
            b += "app", !c && a.hasAttribute && a.hasAttribute(b) && (c = a, d = a.getAttribute(b))
        }), f(Ld, function(b) {
            b += "app";
            var e;
            !c && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(b))
        }), c && (e.strictDi = null !== T(c, "strict-di"), b(c, d ? [d] : [], e))
    }

    function V(c, d, e) {
        s(e) || (e = {}), e = k({
            strictDi: !1
        }, e);
        var g = function() {
                if (c = sd(c), c.injector()) {
                    var a = c[0] === b ? "document" : N(c);
                    throw Dd("btstrpd", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                return d = d || [], d.unshift(["$provide", function(a) {
                    a.value("$rootElement", c)
                }]), e.debugInfoEnabled && d.push(["$compileProvider", function(a) {
                    a.debugInfoEnabled(!0)
                }]), d.unshift("ng"), a = Gb(d, e.strictDi), a.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                    a.$apply(function() {
                        b.data("$injector", d), c(b)(a)
                    })
                }]), a
            },
            h = /^NG_ENABLE_DEBUG_INFO!/,
            i = /^NG_DEFER_BOOTSTRAP!/;
        return a && h.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(h, "")), a && !i.test(a.name) ? g() : (a.name = a.name.replace(i, ""), Ed.resumeBootstrap = function(a) {
            return f(a, function(a) {
                d.push(a)
            }), g()
        }, void(w(Ed.resumeDeferredBootstrap) && Ed.resumeDeferredBootstrap()))
    }

    function W() {
        a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }

    function X(a) {
        if (a = Ed.element(a).injector(), !a) throw Dd("test");
        return a.get("$$testability")
    }

    function Y(a, b) {
        return b = b || "_", a.replace(Md, function(a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function Z() {
        var b;
        Nd || ((td = a.jQuery) && td.fn.on ? (sd = td, k(td.fn, {
            scope: ae.scope,
            isolateScope: ae.isolateScope,
            controller: ae.controller,
            injector: ae.injector,
            inheritedData: ae.inheritedData
        }), b = td.cleanData, td.cleanData = function(a) {
            var c;
            if (Gd) Gd = !1;
            else
                for (var d, e = 0; null != (d = a[e]); e++)(c = td._data(d, "events")) && c.$destroy && td(d).triggerHandler("$destroy");
            b(a)
        }) : sd = jb, Ed.element = sd, Nd = !0)
    }

    function $(a, b, c) {
        if (!a) throw Dd("areq", b || "?", c || "required");
        return a
    }

    function _(a, b, c) {
        return c && Hd(a) && (a = a[a.length - 1]), $(w(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function ab(a, b) {
        if ("hasOwnProperty" === a) throw Dd("badname", b)
    }

    function bb(a, b, c) {
        if (!b) return a;
        b = b.split(".");
        for (var d, e = a, f = b.length, g = 0; f > g; g++) d = b[g], a && (a = (e = a)[d]);
        return !c && w(a) ? J(e, a) : a
    }

    function cb(a) {
        var b = a[0];
        a = a[a.length - 1];
        var c = [b];
        do {
            if (b = b.nextSibling, !b) break;
            c.push(b)
        } while (b !== a);
        return sd(c)
    }

    function db() {
        return Object.create(null)
    }

    function eb(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }
        var c = d("$injector"),
            e = d("ng");
        return a = b(a, "angular", Object), a.$$minErr = a.$$minErr || d, b(a, "module", function() {
            var a = {};
            return function(d, f, g) {
                if ("hasOwnProperty" === d) throw e("badname", "module");
                return f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                    function a(a, c, d, e) {
                        return e || (e = b),
                            function() {
                                return e[d || "push"]([a, c, arguments]), j
                            }
                    }
                    if (!f) throw c("nomod", d);
                    var b = [],
                        e = [],
                        h = [],
                        i = a("$injector", "invoke", "push", e),
                        j = {
                            _invokeQueue: b,
                            _configBlocks: e,
                            _runBlocks: h,
                            requires: f,
                            name: d,
                            provider: a("$provide", "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            animation: a("$animateProvider", "register"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: i,
                            run: function(a) {
                                return h.push(a), this
                            }
                        };
                    return g && i(g), j
                })
            }
        })
    }

    function fb(b) {
        k(b, {
            bootstrap: V,
            copy: F,
            extend: k,
            equals: H,
            element: sd,
            forEach: f,
            injector: Gb,
            noop: n,
            bind: J,
            toJson: L,
            fromJson: M,
            identity: o,
            isUndefined: q,
            isDefined: r,
            isString: t,
            isFunction: w,
            isObject: s,
            isNumber: u,
            isElement: B,
            isArray: Hd,
            version: Qd,
            isDate: v,
            lowercase: wd,
            uppercase: yd,
            callbacks: {
                counter: 0
            },
            getTestability: X,
            $$minErr: d,
            $$csp: Kd,
            reloadWithDebugInfo: W
        }), ud = eb(a);
        try {
            ud("ngLocale")
        } catch (c) {
            ud("ngLocale", []).provider("$locale", cc)
        }
        ud("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider({
                $$sanitizeUri: Gc
            }), a.provider("$compile", Nb).directive({
                a: Ue,
                input: jf,
                textarea: jf,
                form: Ye,
                script: Wf,
                select: Zf,
                style: _f,
                option: $f,
                ngBind: mf,
                ngBindHtml: of ,
                ngBindTemplate: nf,
                ngClass: qf,
                ngClassEven: sf,
                ngClassOdd: rf,
                ngCloak: tf,
                ngController: uf,
                ngForm: Ze,
                ngHide: Qf,
                ngIf: xf,
                ngInclude: yf,
                ngInit: Af,
                ngNonBindable: Mf,
                ngPluralize: Nf,
                ngRepeat: Of,
                ngShow: Pf,
                ngStyle: Rf,
                ngSwitch: Sf,
                ngSwitchWhen: Tf,
                ngSwitchDefault: Uf,
                ngOptions: Yf,
                ngTransclude: Vf,
                ngModel: Jf,
                ngList: Bf,
                ngChange: pf,
                pattern: bg,
                ngPattern: bg,
                required: ag,
                ngRequired: ag,
                minlength: dg,
                ngMinlength: dg,
                maxlength: cg,
                ngMaxlength: cg,
                ngValue: lf,
                ngModelOptions: Lf
            }).directive({
                ngInclude: zf
            }).directive(Ve).directive(vf), a.provider({
                $anchorScroll: Hb,
                $animate: ke,
                $browser: Kb,
                $cacheFactory: Lb,
                $controller: Rb,
                $document: Sb,
                $exceptionHandler: Tb,
                $filter: Sc,
                $interpolate: ac,
                $interval: bc,
                $http: Yb,
                $httpBackend: $b,
                $location: pc,
                $log: qc,
                $parse: Ac,
                $rootScope: Fc,
                $q: Bc,
                $$q: Cc,
                $sce: Kc,
                $sceDelegate: Jc,
                $sniffer: Lc,
                $templateCache: Mb,
                $templateRequest: Mc,
                $$testability: Nc,
                $timeout: Oc,
                $window: Rc,
                $$rAF: Ec,
                $$asyncCallback: Ib,
                $$jqLite: Cb
            })
        }])
    }

    function gb(a) {
        return a.replace(Td, function(a, b, c, d) {
            return d ? c.toUpperCase() : c
        }).replace(Ud, "Moz$1")
    }

    function hb(a) {
        return a = a.nodeType, a === Od || !a || 9 === a
    }

    function ib(a, b) {
        var c, d, e = b.createDocumentFragment(),
            g = [];
        if (Yd.test(a)) {
            for (c = c || e.appendChild(b.createElement("div")), d = (Zd.exec(a) || ["", ""])[1].toLowerCase(), d = _d[d] || _d._default, c.innerHTML = d[1] + a.replace($d, "<$1></$2>") + d[2], d = d[0]; d--;) c = c.lastChild;
            g = I(g, c.childNodes), c = e.firstChild, c.textContent = ""
        } else g.push(b.createTextNode(a));
        return e.textContent = "", e.innerHTML = "", f(g, function(a) {
            e.appendChild(a)
        }), e
    }

    function jb(a) {
        if (a instanceof jb) return a;
        var c;
        if (t(a) && (a = Id(a), c = !0), !(this instanceof jb)) {
            if (c && "<" != a.charAt(0)) throw Wd("nosel");
            return new jb(a)
        }
        if (c) {
            c = b;
            var d;
            a = (d = Xd.exec(a)) ? [c.createElement(d[1])] : (d = ib(a, c)) ? d.childNodes : []
        }
        tb(this, a)
    }

    function kb(a) {
        return a.cloneNode(!0)
    }

    function lb(a, b) {
        if (b || nb(a), a.querySelectorAll)
            for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) nb(c[d])
    }

    function mb(a, b, c, d) {
        if (r(d)) throw Wd("offargs");
        var e = (d = ob(a)) && d.events,
            g = d && d.handle;
        if (g)
            if (b) f(b.split(" "), function(b) {
                if (r(c)) {
                    var d = e[b];
                    if (E(d || [], c), d && 0 < d.length) return
                }
                a.removeEventListener(b, g, !1), delete e[b]
            });
            else
                for (b in e) "$destroy" !== b && a.removeEventListener(b, g, !1), delete e[b]
    }

    function nb(a, b) {
        var d = a.ng339,
            e = d && Rd[d];
        e && (b ? delete e.data[b] : (e.handle && (e.events.$destroy && e.handle({}, "$destroy"), mb(a)), delete Rd[d], a.ng339 = c))
    }

    function ob(a, b) {
        var d = a.ng339,
            d = d && Rd[d];
        return b && !d && (a.ng339 = d = ++Sd, d = Rd[d] = {
            events: {},
            data: {},
            handle: c
        }), d
    }

    function pb(a, b, c) {
        if (hb(a)) {
            var d = r(c),
                e = !d && b && !s(b),
                f = !b;
            if (a = (a = ob(a, !e)) && a.data, d) a[b] = c;
            else {
                if (f) return a;
                if (e) return a && a[b];
                k(a, b)
            }
        }
    }

    function qb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
    }

    function rb(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", Id((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Id(b) + " ", " ")))
        })
    }

    function sb(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = Id(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            }), a.setAttribute("class", Id(c))
        }
    }

    function tb(a, b) {
        if (b)
            if (b.nodeType) a[a.length++] = b;
            else {
                var c = b.length;
                if ("number" == typeof c && b.window !== b) {
                    if (c)
                        for (var d = 0; c > d; d++) a[a.length++] = b[d]
                } else a[a.length++] = b
            }
    }

    function ub(a, b) {
        return vb(a, "$" + (b || "ngController") + "Controller")
    }

    function vb(a, b, d) {
        for (9 == a.nodeType && (a = a.documentElement), b = Hd(b) ? b : [b]; a;) {
            for (var e = 0, f = b.length; f > e; e++)
                if ((d = sd.data(a, b[e])) !== c) return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }

    function wb(a) {
        for (lb(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function xb(a, b) {
        b || lb(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }

    function yb(b, c) {
        c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : sd(c).on("load", b)
    }

    function zb(a, b) {
        var c = be[b.toLowerCase()];
        return c && ce[D(a)] && c
    }

    function Ab(a, b) {
        var c = a.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && de[b]
    }

    function Bb(a, b) {
        var c = function(c, d) {
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            };
            var e = b[d || c.type],
                f = e ? e.length : 0;
            if (f) {
                if (q(c.immediatePropagationStopped)) {
                    var g = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function() {
                        c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function() {
                    return !0 === c.immediatePropagationStopped
                }, f > 1 && (e = G(e));
                for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c)
            }
        };
        return c.elem = a, c
    }

    function Cb() {
        this.$get = function() {
            return k(jb, {
                hasClass: function(a, b) {
                    return a.attr && (a = a[0]), qb(a, b)
                },
                addClass: function(a, b) {
                    return a.attr && (a = a[0]), sb(a, b)
                },
                removeClass: function(a, b) {
                    return a.attr && (a = a[0]), rb(a, b)
                }
            })
        }
    }

    function Db(a, b) {
        var c = a && a.$$hashKey;
        return c ? ("function" == typeof c && (c = a.$$hashKey()), c) : (c = typeof a, c = "function" == c || "object" == c && null !== a ? a.$$hashKey = c + ":" + (b || i)() : c + ":" + a)
    }

    function Eb(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c
            }
        }
        f(a, this.put, this)
    }

    function Fb(a) {
        return (a = a.toString().replace(he, "").match(ee)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Gb(a, b) {
        function d(a) {
            return function(b, c) {
                return s(b) ? void f(b, h(a)) : a(b, c)
            }
        }

        function e(a, b) {
            if (ab(a, "service"), (w(b) || Hd(b)) && (b = u.instantiate(b)), !b.$get) throw ie("pget", a);
            return r[a + "Provider"] = b
        }

        function g(a, b) {
            return function() {
                var c = x.invoke(b, this);
                if (q(c)) throw ie("undef", a);
                return c
            }
        }

        function i(a, b, c) {
            return e(a, {
                $get: !1 !== c ? g(a, b) : b
            })
        }

        function j(a) {
            var b, c = [];
            return f(a, function(a) {
                function d(a) {
                    var b, c;
                    for (b = 0, c = a.length; c > b; b++) {
                        var d = a[b],
                            e = u.get(d[0]);
                        e[d[1]].apply(e, d[2])
                    }
                }
                if (!o.get(a)) {
                    o.put(a, !0);
                    try {
                        t(a) ? (b = ud(a), c = c.concat(j(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : w(a) ? c.push(u.invoke(a)) : Hd(a) ? c.push(u.invoke(a)) : _(a, "module")
                    } catch (e) {
                        throw Hd(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), ie("modulerr", a, e.stack || e.message || e)
                    }
                }
            }), c
        }

        function k(a, c) {
            function d(b, d) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === l) throw ie("cdep", b + " <- " + m.join(" <- "));
                    return a[b]
                }
                try {
                    return m.unshift(b), a[b] = l, a[b] = c(b, d)
                } catch (e) {
                    throw a[b] === l && delete a[b], e
                } finally {
                    m.shift()
                }
            }

            function e(a, c, e, f) {
                "string" == typeof e && (f = e, e = null);
                var g, h, i, j = [],
                    k = Gb.$$annotate(a, b, f);
                for (h = 0, g = k.length; g > h; h++) {
                    if (i = k[h], "string" != typeof i) throw ie("itkn", i);
                    j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                }
                return Hd(a) && (a = a[g]), a.apply(c, j)
            }
            return {
                invoke: e,
                instantiate: function(a, b, c) {
                    var d = Object.create((Hd(a) ? a[a.length - 1] : a).prototype || null);
                    return a = e(a, d, b, c), s(a) || w(a) ? a : d
                },
                get: d,
                annotate: Gb.$$annotate,
                has: function(b) {
                    return r.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
                }
            }
        }
        b = !0 === b;
        var l = {},
            m = [],
            o = new Eb([], !0),
            r = {
                $provide: {
                    provider: d(e),
                    factory: d(i),
                    service: d(function(a, b) {
                        return i(a, ["$injector", function(a) {
                            return a.instantiate(b)
                        }])
                    }),
                    value: d(function(a, b) {
                        return i(a, p(b), !1)
                    }),
                    constant: d(function(a, b) {
                        ab(a, "constant"), r[a] = b, v[a] = b
                    }),
                    decorator: function(a, b) {
                        var c = u.get(a + "Provider"),
                            d = c.$get;
                        c.$get = function() {
                            var a = x.invoke(d, c);
                            return x.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            },
            u = r.$injector = k(r, function(a, b) {
                throw Ed.isString(b) && m.push(b), ie("unpr", m.join(" <- "))
            }),
            v = {},
            x = v.$injector = k(v, function(a, b) {
                var d = u.get(a + "Provider", b);
                return x.invoke(d.$get, d, c, a)
            });
        return f(j(a), function(a) {
            x.invoke(a || n)
        }), x
    }

    function Hb() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1
        }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                return Array.prototype.some.call(a, function(a) {
                    return "a" === D(a) ? (b = a, !0) : void 0
                }), b
            }

            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset, w(c) ? c = c() : B(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : u(c) || (c = 0), c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
                } else b.scrollTo(0, 0)
            }

            function g() {
                var a, b = c.hash();
                b ? (a = h.getElementById(b)) ? f(a) : (a = e(h.getElementsByName(b))) ? f(a) : "top" === b && f(null) : f(null)
            }
            var h = b.document;
            return a && d.$watch(function() {
                return c.hash()
            }, function(a, b) {
                a === b && "" === a || yb(function() {
                    d.$evalAsync(g)
                })
            }), g
        }]
    }

    function Ib() {
        this.$get = ["$$rAF", "$timeout", function(a, b) {
            return a.supported ? function(b) {
                return a(b)
            } : function(a) {
                return b(a, 0, !1)
            }
        }]
    }

    function Jb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, zd.call(arguments, 1))
            } finally {
                if (w--, 0 === w)
                    for (; x.length;) try {
                        x.pop()()
                    } catch (b) {
                        d.error(b)
                    }
            }
        }

        function h(a, b) {
            ! function c() {
                f(z, function(a) {
                    a()
                }), y = b(c, a)
            }()
        }

        function i() {
            j(), k()
        }

        function j() {
            A = a.history.state, A = q(A) ? null : A, H(A, I) && (A = I), I = A
        }

        function k() {
            (C !== m.url() || B !== A) && (C = m.url(), B = A, f(F, function(a) {
                a(m.url(), A)
            }))
        }

        function l(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }
        var m = this,
            o = b[0],
            p = a.location,
            r = a.history,
            s = a.setTimeout,
            u = a.clearTimeout,
            v = {};
        m.isMock = !1;
        var w = 0,
            x = [];
        m.$$completeOutstandingRequest = g, m.$$incOutstandingRequestCount = function() {
            w++
        }, m.notifyWhenNoOutstandingRequests = function(a) {
            f(z, function(a) {
                a()
            }), 0 === w ? a() : x.push(a)
        };
        var y, z = [];
        m.addPollFn = function(a) {
            return q(y) && h(100, s), z.push(a), a
        };
        var A, B, C = p.href,
            D = b.find("base"),
            E = null;
        j(), B = A, m.url = function(b, c, d) {
            if (q(d) && (d = null), p !== a.location && (p = a.location), r !== a.history && (r = a.history), b) {
                var f = B === d;
                if (C === b && (!e.history || f)) return m;
                var g = C && hc(C) === hc(b);
                return C = b, B = d, !e.history || g && f ? (g || (E = b), c ? p.replace(b) : g ? (c = p, d = b.indexOf("#"), b = -1 === d ? "" : b.substr(d + 1), c.hash = b) : p.href = b) : (r[c ? "replaceState" : "pushState"](d, "", b), j(), B = A), m
            }
            return E || p.href.replace(/%27/g, "'")
        }, m.state = function() {
            return A
        };
        var F = [],
            G = !1,
            I = null;
        m.onUrlChange = function(b) {
            return G || (e.history && sd(a).on("popstate", i), sd(a).on("hashchange", i), G = !0), F.push(b), b
        }, m.$$checkUrlChange = k, m.baseHref = function() {
            var a = D.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var J = {},
            K = "",
            L = m.baseHref();
        m.cookies = function(a, b) {
            var e, f, g, h;
            if (!a) {
                if (o.cookie !== K)
                    for (K = o.cookie, e = K.split("; "), J = {}, g = 0; g < e.length; g++) f = e[g], h = f.indexOf("="), h > 0 && (a = l(f.substring(0, h)), J[a] === c && (J[a] = l(f.substring(h + 1))));
                return J
            }
            b === c ? o.cookie = encodeURIComponent(a) + "=;path=" + L + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : t(b) && (e = (o.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + L).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
        }, m.defer = function(a, b) {
            var c;
            return w++, c = s(function() {
                delete v[c], g(a)
            }, b || 0), v[c] = !0, c
        }, m.defer.cancel = function(a) {
            return v[a] ? (delete v[a], u(a), g(n), !0) : !1
        }
    }

    function Kb() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new Jb(a, d, b, c)
        }]
    }

    function Lb() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (a in b) throw d("$cacheFactory")("iid", a);
                var g = 0,
                    h = k({}, c, {
                        id: a
                    }),
                    i = {},
                    j = c && c.capacity || Number.MAX_VALUE,
                    l = {},
                    m = null,
                    n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (j < Number.MAX_VALUE) {
                            var c = l[a] || (l[a] = {
                                key: a
                            });
                            e(c)
                        }
                        return q(b) ? void 0 : (a in i || g++, i[a] = b, g > j && this.remove(n.key), b)
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            e(b)
                        }
                        return i[a]
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete l[a]
                        }
                        delete i[a], g--
                    },
                    removeAll: function() {
                        i = {}, g = 0, l = {}, m = n = null
                    },
                    destroy: function() {
                        l = h = i = null, delete b[a]
                    },
                    info: function() {
                        return k({}, h, {
                            size: g
                        })
                    }
                }
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info()
                }), a
            }, a.get = function(a) {
                return b[a]
            }, a
        }
    }

    function Mb() {
        this.$get = ["$cacheFactory", function(a) {
            return a("templates")
        }]
    }

    function Nb(a, d) {
        function e(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                d = {};
            return f(a, function(a, e) {
                var f = a.match(c);
                if (!f) throw le("iscp", b, e, a);
                d[e] = {
                    mode: f[1][0],
                    collection: "*" === f[2],
                    optional: "?" === f[3],
                    attrName: f[4] || e
                }
            }), d
        }
        var g = {},
            i = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            j = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            l = C("ngSrc,ngSrcset,src,srcset"),
            q = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            u = /^(on[a-z]+|formaction)$/;
        this.directive = function x(b, c) {
            return ab(b, "directive"), t(b) ? ($(c, "directiveFactory"), g.hasOwnProperty(b) || (g[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(g[b], function(f, g) {
                    try {
                        var h = a.invoke(f);
                        w(h) ? h = {
                            compile: p(h)
                        } : !h.compile && h.link && (h.compile = p(h.link)), h.priority = h.priority || 0, h.index = g, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA", s(h.scope) && (h.$$isolateBindings = e(h.scope, h.name)), d.push(h)
                    } catch (i) {
                        c(i)
                    }
                }), d
            }])), g[b].push(c)) : f(b, h(x)), this
        }, this.aHrefSanitizationWhitelist = function(a) {
            return r(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return r(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
        };
        var v = !0;
        this.debugInfoEnabled = function(a) {
            return r(a) ? (v = a, this) : v
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, h, p, r, x, y, A, B, C) {
            function F(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function G(a, b, c, d, e) {
                a instanceof sd || (a = sd(a)), f(a, function(b, c) {
                    b.nodeType == Pd && b.nodeValue.match(/\S+/) && (a[c] = sd(b).wrap("<span></span>").parent()[0])
                });
                var g = I(a, b, a, c, d, e);
                G.$$addScopeClass(a);
                var h = null;
                return function(b, c, d) {
                    $(b, "scope"), d = d || {};
                    var e = d.parentBoundTranscludeFn,
                        f = d.transcludeControllers;
                    if (d = d.futureParentElement, e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = (d = d && d[0]) && "foreignobject" !== D(d) && d.toString().match(/SVG/) ? "svg" : "html"), d = "html" !== h ? sd(X(h, sd("<div>").append(a).html())) : c ? ae.clone.call(a) : a, f)
                        for (var i in f) d.data("$" + i + "Controller", f[i].instance);
                    return G.$$addScopeInfo(d, b), c && c(d, b), g && g(b, d, d, e), d
                }
            }

            function I(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, o;
                    if (m)
                        for (o = Array(d.length), j = 0; j < n.length; j += 3) g = n[j], o[g] = d[g];
                    else o = d;
                    for (j = 0, k = n.length; k > j;) h = o[n[j++]], d = n[j++], g = n[j++], d ? (d.scope ? (i = a.$new(), G.$$addScopeInfo(sd(h), i)) : i = a, l = d.transcludeOnThisElement ? J(a, d.transclude, f, d.elementTranscludeOnThisElement) : !d.templateOnThisElement && f ? f : !f && b ? J(a, b) : null, d(g, i, h, e, l)) : g && g(a, h.childNodes, c, f)
                }
                for (var i, j, k, l, m, n = [], o = 0; o < a.length; o++) i = new eb, j = K(a[o], [], i, 0 === o ? e : c, f), (g = j.length ? O(j, a[o], i, b, d, null, [], [], g) : null) && g.scope && G.$$addScopeClass(i.$$element), i = g && g.terminal || !(k = a[o].childNodes) || !k.length ? null : I(k, g ? (g.transcludeOnThisElement || !g.templateOnThisElement) && g.transclude : b), (g || i) && (n.push(o, g, i), l = !0, m = m || g), g = null;
                return l ? h : null
            }

            function J(a, b, c) {
                return function(d, e, f, g, h) {
                    return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                        parentBoundTranscludeFn: c,
                        transcludeControllers: f,
                        futureParentElement: g
                    })
                }
            }

            function K(a, b, c, d, e) {
                var f, g = c.$attr;
                switch (a.nodeType) {
                    case Od:
                        Q(b, Ob(D(a)), "E", d, e);
                        for (var h, k, l, m = a.attributes, n = 0, o = m && m.length; o > n; n++) {
                            var p = !1,
                                q = !1;
                            h = m[n], f = h.name, k = Id(h.value), h = Ob(f), (l = ib.test(h)) && (f = f.replace(me, "").substr(8).replace(/_(.)/g, function(a, b) {
                                return b.toUpperCase()
                            }));
                            var r = h.replace(/(Start|End)$/, "");
                            R(r) && h === r + "Start" && (p = f, q = f.substr(0, f.length - 5) + "end", f = f.substr(0, f.length - 6)), h = Ob(f.toLowerCase()), g[h] = f, (l || !c.hasOwnProperty(h)) && (c[h] = k, zb(a, h) && (c[h] = !0)), _(a, b, k, h, l), Q(b, h, "A", d, e, p, q)
                        }
                        if (a = a.className, s(a) && (a = a.animVal), t(a) && "" !== a)
                            for (; f = j.exec(a);) h = Ob(f[2]), Q(b, h, "C", d, e) && (c[h] = Id(f[3])), a = a.substr(f.index + f[0].length);
                        break;
                    case Pd:
                        W(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            (f = i.exec(a.nodeValue)) && (h = Ob(f[1]), Q(b, h, "M", d, e) && (c[h] = Id(f[2])))
                        } catch (u) {}
                }
                return b.sort(U), b
            }

            function L(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw le("uterdir", b, c);
                        a.nodeType == Od && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                    } while (e > 0)
                } else d.push(a);
                return sd(d)
            }

            function M(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = L(e[0], b, c), a(d, e, f, g, h)
                }
            }

            function O(a, g, h, i, j, k, l, m, n) {
                function o(a, b, c, d) {
                    a && (c && (a = M(a, c, d)), a.require = A.require, a.directiveName = B, (I === A || A.$$isolateScope) && (a = bb(a, {
                        isolateScope: !0
                    })), l.push(a)), b && (c && (b = M(b, c, d)), b.require = A.require, b.directiveName = B, (I === A || A.$$isolateScope) && (b = bb(b, {
                        isolateScope: !0
                    })), m.push(b))
                }

                function u(a, b, c, d) {
                    var e, g, h = "data",
                        i = !1,
                        j = c;
                    if (t(b)) {
                        if (g = b.match(q), b = b.substring(g[0].length), g[3] && (g[1] ? g[3] = null : g[1] = g[3]), "^" === g[1] ? h = "inheritedData" : "^^" === g[1] && (h = "inheritedData", j = c.parent()), "?" === g[2] && (i = !0), e = null, d && "data" === h && (e = d[b]) && (e = e.instance), e = e || j[h]("$" + b + "Controller"), !e && !i) throw le("ctreq", b, a);
                        return e || null
                    }
                    return Hd(b) && (e = [], f(b, function(b) {
                        e.push(u(a, b, c, d))
                    })), e
                }

                function v(a, b, e, i, j) {
                    function k(a, b, d) {
                        var e;
                        return z(a) || (d = b, b = a, a = c), U && (e = t), d || (d = U ? w.parent() : w), j(a, b, e, d, B)
                    }
                    var n, o, q, s, t, v, w, x;
                    if (g === e ? (x = h, w = h.$$element) : (w = sd(e), x = new eb(w, h)), I && (s = b.$new(!0)), j && (v = k, v.$$boundTransclude = j), F && (y = {}, t = {}, f(F, function(a) {
                            var c = {
                                $scope: a === I || a.$$isolateScope ? s : b,
                                $element: w,
                                $attrs: x,
                                $transclude: v
                            };
                            q = a.controller, "@" == q && (q = x[a.name]), c = r(q, c, !0, a.controllerAs), t[a.name] = c, U || w.data("$" + a.name + "Controller", c.instance), y[a.name] = c
                        })), I) {
                        G.$$addScopeInfo(w, s, !0, !(J && (J === I || J === I.$$originalDirective))), G.$$addScopeClass(w, !0), i = y && y[I.name];
                        var A = s;
                        i && i.identifier && !0 === I.bindToController && (A = i.instance), f(s.$$isolateBindings = I.$$isolateBindings, function(a, c) {
                            var e, f, g, h, i = a.attrName,
                                j = a.optional;
                            switch (a.mode) {
                                case "@":
                                    x.$observe(i, function(a) {
                                        A[c] = a
                                    }), x.$$observers[i].$$scope = b, x[i] && (A[c] = d(x[i])(b));
                                    break;
                                case "=":
                                    if (j && !x[i]) break;
                                    f = p(x[i]), h = f.literal ? H : function(a, b) {
                                        return a === b || a !== a && b !== b
                                    }, g = f.assign || function() {
                                        throw e = A[c] = f(b), le("nonassign", x[i], I.name)
                                    }, e = A[c] = f(b), j = function(a) {
                                        return h(a, A[c]) || (h(a, e) ? g(b, a = A[c]) : A[c] = a), e = a
                                    }, j.$stateful = !0, j = a.collection ? b.$watchCollection(x[i], j) : b.$watch(p(x[i], j), null, f.literal), s.$on("$destroy", j);
                                    break;
                                case "&":
                                    f = p(x[i]), A[c] = function(a) {
                                        return f(b, a)
                                    }
                            }
                        })
                    }
                    for (y && (f(y, function(a) {
                            a()
                        }), y = null), i = 0, n = l.length; n > i; i++) o = l[i], cb(o, o.isolateScope ? s : b, w, x, o.require && u(o.directiveName, o.require, w, t), v);
                    var B = b;
                    for (I && (I.template || null === I.templateUrl) && (B = s), a && a(B, e.childNodes, c, j), i = m.length - 1; i >= 0; i--) o = m[i], cb(o, o.isolateScope ? s : b, w, x, o.require && u(o.directiveName, o.require, w, t), v)
                }
                n = n || {};
                for (var x, y, A, B, C, D, E = -Number.MAX_VALUE, F = n.controllerDirectives, I = n.newIsolateScopeDirective, J = n.templateDirective, O = n.nonTlbTranscludeDirective, Q = !1, R = !1, U = n.hasElementTranscludeDirective, W = h.$$element = sd(g), Y = i, Z = 0, $ = a.length; $ > Z; Z++) {
                    A = a[Z];
                    var _ = A.$$start,
                        db = A.$$end;
                    if (_ && (W = L(g, _, db)), C = c, E > A.priority) break;
                    if ((C = A.scope) && (A.templateUrl || (s(C) ? (V("new/isolated scope", I || x, A, W), I = A) : V("new/isolated scope", I, A, W)), x = x || A), B = A.name, !A.templateUrl && A.controller && (C = A.controller, F = F || {}, V("'" + B + "' controller", F[B], A, W), F[B] = A), (C = A.transclude) && (Q = !0, A.$$tlb || (V("transclusion", O, A, W), O = A), "element" == C ? (U = !0, E = A.priority, C = W, W = h.$$element = sd(b.createComment(" " + B + ": " + h[B] + " ")), g = W[0], ab(j, zd.call(C, 0), g), Y = G(C, i, E, k && k.name, {
                            nonTlbTranscludeDirective: O
                        })) : (C = sd(kb(g)).contents(), W.empty(), Y = G(C, i))), A.template)
                        if (R = !0, V("template", J, A, W), J = A, C = w(A.template) ? A.template(W, h) : A.template, C = hb(C), A.replace) {
                            if (k = A, C = Yd.test(C) ? Qb(X(A.templateNamespace, Id(C))) : [], g = C[0], 1 != C.length || g.nodeType !== Od) throw le("tplrt", B, "");
                            ab(j, W, g), $ = {
                                $attr: {}
                            }, C = K(g, [], $);
                            var fb = a.splice(Z + 1, a.length - (Z + 1));
                            I && P(C), a = a.concat(C).concat(fb), S(h, $), $ = a.length
                        } else W.html(C);
                    if (A.templateUrl) R = !0, V("template", J, A, W), J = A, A.replace && (k = A), v = T(a.splice(Z, a.length - Z), W, h, j, Q && Y, l, m, {
                        controllerDirectives: F,
                        newIsolateScopeDirective: I,
                        templateDirective: J,
                        nonTlbTranscludeDirective: O
                    }), $ = a.length;
                    else if (A.compile) try {
                        D = A.compile(W, h, Y), w(D) ? o(null, D, _, db) : D && o(D.pre, D.post, _, db)
                    } catch (gb) {
                        e(gb, N(W))
                    }
                    A.terminal && (v.terminal = !0, E = Math.max(E, A.priority))
                }
                return v.scope = x && !0 === x.scope, v.transcludeOnThisElement = Q, v.elementTranscludeOnThisElement = U, v.templateOnThisElement = R, v.transclude = Y, n.hasElementTranscludeDirective = U, v
            }

            function P(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = m(a[b], {
                    $$isolateScope: !0
                })
            }

            function Q(b, d, f, h, i, j, k) {
                if (d === i) return null;
                if (i = null, g.hasOwnProperty(d)) {
                    var l;
                    d = a.get(d + "Directive");
                    for (var n = 0, o = d.length; o > n; n++) try {
                        l = d[n], (h === c || h > l.priority) && -1 != l.restrict.indexOf(f) && (j && (l = m(l, {
                            $$start: j,
                            $$end: k
                        })), b.push(l), i = l)
                    } catch (p) {
                        e(p)
                    }
                }
                return i
            }

            function R(b) {
                if (g.hasOwnProperty(b))
                    for (var c = a.get(b + "Directive"), d = 0, e = c.length; e > d; d++)
                        if (b = c[d], b.multiElement) return !0;
                return !1
            }

            function S(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                }), f(b, function(b, f) {
                    "class" == f ? (F(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function T(a, b, c, d, e, g, i, j) {
                var k, l, n = [],
                    o = b[0],
                    p = a.shift(),
                    q = m(p, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: p
                    }),
                    r = w(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                    t = p.templateNamespace;
                return b.empty(), h(A.getTrustedResourceUrl(r)).then(function(h) {
                        var m, u;
                        if (h = hb(h), p.replace) {
                            if (h = Yd.test(h) ? Qb(X(t, Id(h))) : [], m = h[0], 1 != h.length || m.nodeType !== Od) throw le("tplrt", p.name, r);
                            h = {
                                $attr: {}
                            }, ab(d, b, m);
                            var v = K(m, [], h);
                            s(p.scope) && P(v), a = v.concat(a), S(c, h)
                        } else m = o, b.html(h);
                        for (a.unshift(q), k = O(a, m, c, e, b, p, g, i, j), f(d, function(a, c) {
                                a == m && (d[c] = b[0])
                            }), l = I(b[0].childNodes, e); n.length;) {
                            h = n.shift(), u = n.shift();
                            var w = n.shift(),
                                x = n.shift(),
                                v = b[0];
                            if (!h.$$destroyed) {
                                if (u !== o) {
                                    var y = u.className;
                                    j.hasElementTranscludeDirective && p.replace || (v = kb(m)), ab(w, sd(u), v), F(sd(v), y)
                                }
                                u = k.transcludeOnThisElement ? J(h, k.transclude, x) : x, k(l, h, v, d, u)
                            }
                        }
                        n = null
                    }),
                    function(a, b, c, d, e) {
                        a = e, b.$$destroyed || (n ? n.push(b, c, d, a) : (k.transcludeOnThisElement && (a = J(b, k.transclude, e)), k(l, b, c, d, a)))
                    }
            }

            function U(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function V(a, b, c, d) {
                if (b) throw le("multidir", b.name, c.name, a, N(d))
            }

            function W(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        a = a.parent();
                        var b = !!a.length;
                        return b && G.$$addBindingClass(a),
                            function(a, d) {
                                var e = d.parent();
                                b || G.$$addBindingClass(e), G.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                    d[0].nodeValue = a
                                })
                            }
                    }
                })
            }

            function X(a, c) {
                switch (a = wd(a || "html")) {
                    case "svg":
                    case "math":
                        var d = b.createElement("div");
                        return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                    default:
                        return c
                }
            }

            function Z(a, b) {
                if ("srcdoc" == b) return A.HTML;
                var c = D(a);
                return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? A.RESOURCE_URL : void 0
            }

            function _(a, b, c, e, f) {
                var g = Z(a, e);
                f = l[e] || f;
                var h = d(c, !0, g, f);
                if (h) {
                    if ("multiple" === e && "select" === D(a)) throw le("selmulti", N(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(a, b, i) {
                                    if (b = i.$$observers || (i.$$observers = {}), u.test(e)) throw le("nodomevents");
                                    var j = i[e];
                                    j !== c && (h = j && d(j, !0, g, f), c = j), h && (i[e] = h(a), (b[e] || (b[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                        "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ab(a, c, d) {
                var e, f, g = c[0],
                    h = c.length,
                    i = g.parentNode;
                if (a)
                    for (e = 0, f = a.length; f > e; e++)
                        if (a[e] == g) {
                            a[e++] = d, f = e + h - 1;
                            for (var j = a.length; j > e; e++, f++) j > f ? a[e] = a[f] : delete a[e];
                            a.length -= h - 1, a.context === g && (a.context = d);
                            break
                        }
                for (i && i.replaceChild(d, g), a = b.createDocumentFragment(), a.appendChild(g), sd(d).data(sd(g).data()), td ? (Gd = !0, td.cleanData([g])) : delete sd.cache[g[sd.expando]], g = 1, h = c.length; h > g; g++) i = c[g], sd(i).remove(), a.appendChild(i), delete c[g];
                c[0] = d, c.length = 1
            }

            function bb(a, b) {
                return k(function() {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function cb(a, b, c, d, f, g) {
                try {
                    a(b, c, d, f, g)
                } catch (h) {
                    e(h, N(c))
                }
            }
            var eb = function(a, b) {
                if (b) {
                    var c, d, e, f = Object.keys(b);
                    for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
                } else this.$attr = {};
                this.$$element = a
            };
            eb.prototype = {
                $normalize: Ob,
                $addClass: function(a) {
                    a && 0 < a.length && B.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a && 0 < a.length && B.removeClass(this.$$element, a)
                },
                $updateClass: function(a, b) {
                    var c = Pb(a, b);
                    c && c.length && B.addClass(this.$$element, c), (c = Pb(b, a)) && c.length && B.removeClass(this.$$element, c)
                },
                $set: function(a, b, d, g) {
                    var h = this.$$element[0],
                        i = zb(h, a),
                        j = Ab(h, a),
                        h = a;
                    if (i ? (this.$$element.prop(a, b), g = i) : j && (this[j] = b, h = j), this[a] = b, g ? this.$attr[a] = g : (g = this.$attr[a]) || (this.$attr[a] = g = Y(a, "-")), i = D(this.$$element), "a" === i && "href" === a || "img" === i && "src" === a) this[a] = b = C(b, "src" === a);
                    else if ("img" === i && "srcset" === a) {
                        for (var i = "", j = Id(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(j) ? k : /(,)/, j = j.split(k), k = Math.floor(j.length / 2), l = 0; k > l; l++) var m = 2 * l,
                            i = i + C(Id(j[m]), !0),
                            i = i + (" " + Id(j[m + 1]));
                        j = Id(j[2 * l]).split(/\s/), i += C(Id(j[0]), !0), 2 === j.length && (i += " " + Id(j[1])), this[a] = b = i
                    }!1 !== d && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b)), (a = this.$$observers) && f(a[h], function(a) {
                        try {
                            a(b)
                        } catch (c) {
                            e(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = db()),
                        e = d[a] || (d[a] = []);
                    return e.push(b), x.$evalAsync(function() {
                            !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                        }),
                        function() {
                            E(e, b)
                        }
                }
            };
            var fb = d.startSymbol(),
                gb = d.endSymbol(),
                hb = "{{" == fb || "}}" == gb ? o : function(a) {
                    return a.replace(/\{\{/g, fb).replace(/}}/g, gb)
                },
                ib = /^ngAttr[A-Z]/;
            return G.$$addBindingInfo = v ? function(a, b) {
                var c = a.data("$binding") || [];
                Hd(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
            } : n, G.$$addBindingClass = v ? function(a) {
                F(a, "ng-binding")
            } : n, G.$$addScopeInfo = v ? function(a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : n, G.$$addScopeClass = v ? function(a, b) {
                F(a, b ? "ng-isolate-scope" : "ng-scope")
            } : n, G
        }]
    }

    function Ob(a) {
        return gb(a.replace(me, ""))
    }

    function Pb(a, b) {
        var c = "",
            d = a.split(/\s+/),
            e = b.split(/\s+/),
            f = 0;
        a: for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Qb(a) {
        a = sd(a);
        var b = a.length;
        if (1 >= b) return a;
        for (; b--;) 8 === a[b].nodeType && Ad.call(a, b, 1);
        return a
    }

    function Rb() {
        var a = {},
            b = !1,
            e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            ab(b, "controller"), s(b) ? k(a, b) : a[b] = c
        }, this.allowGlobals = function() {
            b = !0
        }, this.$get = ["$injector", "$window", function(f, g) {
            function h(a, b, c, e) {
                if (!a || !s(a.$scope)) throw d("$controller")("noscp", e, b);
                a.$scope[b] = c
            }
            return function(d, i, j, l) {
                var m, n, o;
                if (j = !0 === j, l && t(l) && (o = l), t(d)) {
                    if (l = d.match(e), !l) throw ne("ctrlfmt", d);
                    n = l[1], o = o || l[3], d = a.hasOwnProperty(n) ? a[n] : bb(i.$scope, n, !0) || (b ? bb(g, n, !0) : c), _(d, n, !0)
                }
                return j ? (j = (Hd(d) ? d[d.length - 1] : d).prototype, m = Object.create(j || null), o && h(i, o, m, n || d.name), k(function() {
                    return f.invoke(d, m, i, n), m
                }, {
                    instance: m,
                    identifier: o
                })) : (m = f.instantiate(d, i, n), o && h(i, o, m, n || d.name), m)
            }
        }]
    }

    function Sb() {
        this.$get = ["$window", function(a) {
            return sd(a.document)
        }]
    }

    function Tb() {
        this.$get = ["$log", function(a) {
            return function() {
                a.error.apply(a, arguments)
            }
        }]
    }

    function Ub(a, b) {
        if (t(a)) {
            var c = a.replace(se, "").trim();
            if (c) {
                var d = b("Content-Type");
                (d = d && 0 === d.indexOf(oe)) || (d = (d = c.match(qe)) && re[d[0]].test(c)), d && (a = M(c))
            }
        }
        return a
    }

    function Vb(a) {
        var b, c, d, e = db();
        return a ? (f(a.split("\n"), function(a) {
            d = a.indexOf(":"), b = wd(Id(a.substr(0, d))), c = Id(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c)
        }), e) : e
    }

    function Wb(a) {
        var b = s(a) ? a : c;
        return function(c) {
            return b || (b = Vb(a)), c ? (c = b[wd(c)], void 0 === c && (c = null), c) : b
        }
    }

    function Xb(a, b, c, d) {
        return w(d) ? d(a, b, c) : (f(d, function(d) {
            a = d(a, b, c)
        }), a)
    }

    function Yb() {
        var a = this.defaults = {
                transformResponse: [Ub],
                transformRequest: [function(a) {
                    return s(a) && "[object File]" !== Cd.call(a) && "[object Blob]" !== Cd.call(a) && "[object FormData]" !== Cd.call(a) ? L(a) : a
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: G(pe),
                    put: G(pe),
                    patch: G(pe)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            b = !1;
        this.useApplyAsync = function(a) {
            return r(a) ? (b = !!a, this) : b
        };
        var e = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(h, i, j, l, m, n) {
            function o(b) {
                function e(a) {
                    var b = k({}, a);
                    return b.data = a.data ? Xb(a.data, a.headers, a.status, h.transformResponse) : a.data, a = a.status, a >= 200 && 300 > a ? b : m.reject(b)
                }

                function g(a) {
                    var b, c = {};
                    return f(a, function(a, d) {
                        w(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                    }), c
                }
                if (!Ed.isObject(b)) throw d("$http")("badreq", b);
                var h = k({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse
                }, b);
                h.headers = function(b) {
                    var c, d, e = a.headers,
                        f = k({}, b.headers),
                        e = k({}, e.common, e[wd(b.method)]);
                    a: for (c in e) {
                        b = wd(c);
                        for (d in f)
                            if (wd(d) === b) continue a;
                        f[c] = e[c]
                    }
                    return g(f)
                }(b), h.method = yd(h.method);
                var i = [function(b) {
                        var d = b.headers,
                            g = Xb(b.data, Wb(d), c, b.transformRequest);
                        return q(g) && f(d, function(a, b) {
                            "content-type" === wd(b) && delete d[b]
                        }), q(b.withCredentials) && !q(a.withCredentials) && (b.withCredentials = a.withCredentials), p(b, g).then(e, e)
                    }, c],
                    j = m.when(h);
                for (f(y, function(a) {
                        (a.request || a.requestError) && i.unshift(a.request, a.requestError), (a.response || a.responseError) && i.push(a.response, a.responseError)
                    }); i.length;) {
                    b = i.shift();
                    var l = i.shift(),
                        j = j.then(b, l)
                }
                return j.success = function(a) {
                    return j.then(function(b) {
                        a(b.data, b.status, b.headers, h)
                    }), j
                }, j.error = function(a) {
                    return j.then(null, function(b) {
                        a(b.data, b.status, b.headers, h)
                    }), j
                }, j
            }

            function p(d, e) {
                function f(a, c, d, e) {
                    function f() {
                        g(c, a, d, e)
                    }
                    n && (a >= 200 && 300 > a ? n.put(z, [a, c, Vb(d), e]) : n.remove(z)), b ? l.$applyAsync(f) : (f(), l.$$phase || l.$apply())
                }

                function g(a, b, c, e) {
                    b = Math.max(b, 0), (b >= 200 && 300 > b ? t.resolve : t.reject)({
                        data: a,
                        status: b,
                        headers: Wb(c),
                        config: d,
                        statusText: e
                    })
                }

                function j(a) {
                    g(a.data, a.status, G(a.headers()), a.statusText)
                }

                function k() {
                    var a = o.pendingRequests.indexOf(d); - 1 !== a && o.pendingRequests.splice(a, 1)
                }
                var n, p, t = m.defer(),
                    v = t.promise,
                    y = d.headers,
                    z = u(d.url, d.params);
                return o.pendingRequests.push(d), v.then(k, k), !d.cache && !a.cache || !1 === d.cache || "GET" !== d.method && "JSONP" !== d.method || (n = s(d.cache) ? d.cache : s(a.cache) ? a.cache : x), n && (p = n.get(z), r(p) ? p && w(p.then) ? p.then(j, j) : Hd(p) ? g(p[1], p[0], G(p[2]), p[3]) : g(p, 200, {}, "OK") : n.put(z, v)), q(p) && ((p = Qc(d.url) ? i.cookies()[d.xsrfCookieName || a.xsrfCookieName] : c) && (y[d.xsrfHeaderName || a.xsrfHeaderName] = p), h(d.method, z, e, f, y, d.timeout, d.withCredentials, d.responseType)), v
            }

            function u(a, b) {
                if (!b) return a;
                var c = [];
                return g(b, function(a, b) {
                    null === a || q(a) || (Hd(a) || (a = [a]), f(a, function(a) {
                        s(a) && (a = v(a) ? a.toISOString() : L(a)), c.push(S(b) + "=" + S(a))
                    }))
                }), 0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
            }
            var x = j("$http"),
                y = [];
            return f(e, function(a) {
                    y.unshift(t(a) ? n.get(a) : n.invoke(a))
                }), o.pendingRequests = [],
                function() {
                    f(arguments, function(a) {
                        o[a] = function(b, c) {
                            return o(k(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                }("get", "delete", "head", "jsonp"),
                function() {
                    f(arguments, function(a) {
                        o[a] = function(b, c, d) {
                            return o(k(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                }("post", "put", "patch"), o.defaults = a, o
        }]
    }

    function Zb() {
        return new a.XMLHttpRequest
    }

    function $b() {
        this.$get = ["$browser", "$window", "$document", function(a, b, c) {
            return _b(a, Zb, a.defer, b.angular.callbacks, c[0])
        }]
    }

    function _b(a, b, d, e, g) {
        function h(a, b, c) {
            var d = g.createElement("script"),
                f = null;
            return d.type = "text/javascript", d.src = a, d.async = !0, f = function(a) {
                d.removeEventListener("load", f, !1), d.removeEventListener("error", f, !1), g.body.removeChild(d), d = null;
                var h = -1,
                    i = "unknown";
                a && ("load" !== a.type || e[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
            }, d.addEventListener("load", f, !1), d.addEventListener("error", f, !1), g.body.appendChild(d), f
        }
        return function(g, i, j, k, l, m, o, p) {
            function q() {
                u && u(), v && v.abort()
            }

            function s(b, e, f, g, h) {
                y !== c && d.cancel(y), u = v = null, b(e, f, g, h), a.$$completeOutstandingRequest(n)
            }
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == wd(g)) {
                var t = "_" + (e.counter++).toString(36);
                e[t] = function(a) {
                    e[t].data = a, e[t].called = !0
                };
                var u = h(i.replace("JSON_CALLBACK", "angular.callbacks." + t), t, function(a, b) {
                    s(k, a, e[t].data, "", b), e[t] = n
                })
            } else {
                var v = b();
                if (v.open(g, i, !0), f(l, function(a, b) {
                        r(a) && v.setRequestHeader(b, a)
                    }), v.onload = function() {
                        var a = v.statusText || "",
                            b = "response" in v ? v.response : v.responseText,
                            c = 1223 === v.status ? 204 : v.status;
                        0 === c && (c = b ? 200 : "file" == Pc(i).protocol ? 404 : 0), s(k, c, b, v.getAllResponseHeaders(), a)
                    }, g = function() {
                        s(k, -1, null, null, "")
                    }, v.onerror = g, v.onabort = g, o && (v.withCredentials = !0), p) try {
                    v.responseType = p
                } catch (x) {
                    if ("json" !== p) throw x
                }
                v.send(j || null)
            }
            if (m > 0) var y = d(q, m);
            else m && w(m.then) && m.then(q)
        }
    }

    function ac() {
        var a = "{{",
            b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(f, g, m, n) {
                function o(c) {
                    return c.replace(j, a).replace(l, b)
                }

                function p(a) {
                    try {
                        var b = a;
                        a = m ? e.getTrusted(m, b) : e.valueOf(b);
                        var c;
                        if (n && !r(a)) c = a;
                        else if (null == a) c = "";
                        else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = L(a)
                            }
                            c = a
                        }
                        return c
                    } catch (g) {
                        c = te("interr", f, g.toString()), d(c)
                    }
                }
                n = !!n;
                for (var s, t, u = 0, v = [], x = [], y = f.length, z = [], A = []; y > u;) {
                    if (-1 == (s = f.indexOf(a, u)) || -1 == (t = f.indexOf(b, s + h))) {
                        u !== y && z.push(o(f.substring(u)));
                        break
                    }
                    u !== s && z.push(o(f.substring(u, s))), u = f.substring(s + h, t), v.push(u), x.push(c(u, p)), u = t + i, A.push(z.length), z.push("")
                }
                if (m && 1 < z.length) throw te("noconcat", f);
                if (!g || v.length) {
                    var B = function(a) {
                        for (var b = 0, c = v.length; c > b; b++) {
                            if (n && q(a[b])) return;
                            z[A[b]] = a[b]
                        }
                        return z.join("")
                    };
                    return k(function(a) {
                        var b = 0,
                            c = v.length,
                            e = Array(c);
                        try {
                            for (; c > b; b++) e[b] = x[b](a);
                            return B(e)
                        } catch (g) {
                            a = te("interr", f, g.toString()), d(a)
                        }
                    }, {
                        exp: f,
                        expressions: v,
                        $$watchDelegate: function(a, b, c) {
                            var d;
                            return a.$watchGroup(x, function(c, e) {
                                var f = B(c);
                                w(b) && b.call(this, f, c !== e ? d : f, a), d = f
                            }, c)
                        }
                    })
                }
            }
            var h = a.length,
                i = b.length,
                j = new RegExp(a.replace(/./g, f), "g"),
                l = new RegExp(b.replace(/./g, f), "g");
            return g.startSymbol = function() {
                return a
            }, g.endSymbol = function() {
                return b
            }, g
        }]
    }

    function bc() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
            function e(e, g, h, i) {
                var j = b.setInterval,
                    k = b.clearInterval,
                    l = 0,
                    m = r(i) && !i,
                    n = (m ? d : c).defer(),
                    o = n.promise;
                return h = r(h) ? h : 0, o.then(null, null, e), o.$$intervalId = j(function() {
                    n.notify(l++), h > 0 && l >= h && (n.resolve(l), k(o.$$intervalId), delete f[o.$$intervalId]), m || a.$apply()
                }, g), f[o.$$intervalId] = n, o
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
            }, e
        }]
    }

    function cc() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(a) {
                    return 1 === a ? "one" : "other"
                }
            }
        }
    }

    function dc(a) {
        a = a.split("/");
        for (var b = a.length; b--;) a[b] = R(a[b]);
        return a.join("/")
    }

    function ec(a, b) {
        var c = Pc(a);
        b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = l(c.port) || ve[c.protocol] || null
    }

    function fc(a, b) {
        var c = "/" !== a.charAt(0);
        c && (a = "/" + a);
        var d = Pc(a);
        b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = P(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function gc(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
    }

    function hc(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function ic(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function jc(a) {
        return a.substr(0, hc(a).lastIndexOf("/") + 1)
    }

    function kc(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = jc(a);
        ec(a, this), this.$$parse = function(a) {
            var b = gc(d, a);
            if (!t(b)) throw we("ipthprfx", a, d);
            fc(b, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function() {
            var a = Q(this.$$search),
                b = this.$$hash ? "#" + R(this.$$hash) : "";
            this.$$url = dc(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function(e, f) {
            if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
            var g, h;
            return (g = gc(a, e)) !== c ? (h = g, h = (g = gc(b, g)) !== c ? d + (gc("/", g) || g) : a + h) : (g = gc(d, e)) !== c ? h = d + g : d == e + "/" && (h = d), h && this.$$parse(h), !!h
        }
    }

    function lc(a, b) {
        var c = jc(a);
        ec(a, this), this.$$parse = function(d) {
            d = gc(a, d) || gc(c, d);
            var e;
            "#" === d.charAt(0) ? (e = gc(b, d), q(e) && (e = d)) : e = this.$$html5 ? d : "", fc(e, this), d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(a) && (e = e.replace(a, "")), f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d), this.$$path = d, this.$$compose()
        }, this.$$compose = function() {
            var c = Q(this.$$search),
                d = this.$$hash ? "#" + R(this.$$hash) : "";
            this.$$url = dc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
        }, this.$$parseLinkUrl = function(b) {
            return hc(a) == hc(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function mc(a, b) {
        this.$$html5 = !0, lc.apply(this, arguments);
        var c = jc(a);
        this.$$parseLinkUrl = function(d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            return a == hc(d) ? f = d : (g = gc(c, d)) ? f = a + b + g : c === d + "/" && (f = c), f && this.$$parse(f), !!f
        }, this.$$compose = function() {
            var c = Q(this.$$search),
                d = this.$$hash ? "#" + R(this.$$hash) : "";
            this.$$url = dc(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
        }
    }

    function nc(a) {
        return function() {
            return this[a]
        }
    }

    function oc(a, b) {
        return function(c) {
            return q(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
        }
    }

    function pc() {
        var a = "",
            b = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function(b) {
            return r(b) ? (a = b, this) : a
        }, this.html5Mode = function(a) {
            return A(a) ? (b.enabled = a, this) : s(a) ? (A(a.enabled) && (b.enabled = a.enabled), A(a.requireBase) && (b.requireBase = a.requireBase), A(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
            function h(a, b, c) {
                var e = j.url(),
                    f = j.$$state;
                try {
                    d.url(a, b, c), j.$$state = d.state()
                } catch (g) {
                    throw j.url(e), j.$$state = f, g
                }
            }

            function i(a, b) {
                c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
            }
            var j, k;
            k = d.baseHref();
            var l, m = d.url();
            if (b.enabled) {
                if (!k && b.requireBase) throw we("nobase");
                l = m.substring(0, m.indexOf("/", m.indexOf("//") + 2)) + (k || "/"), k = e.history ? kc : mc
            } else l = hc(m), k = lc;
            j = new k(l, "#" + a), j.$$parseLinkUrl(m, m), j.$$state = d.state();
            var n = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = sd(a.target);
                        "a" !== D(e[0]);)
                        if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"),
                        i = e.attr("href") || e.attr("xlink:href");
                    s(h) && "[object SVGAnimatedString]" === h.toString() && (h = Pc(h.animVal).href), n.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !j.$$parseLinkUrl(h, i) || (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            }), ic(j.absUrl()) != ic(m) && d.url(j.absUrl(), !0);
            var o = !0;
            return d.onUrlChange(function(a, b) {
                c.$evalAsync(function() {
                    var d, e = j.absUrl(),
                        f = j.$$state;
                    j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (o = !1, i(e, f)))
                }), c.$$phase || c.$digest()
            }), c.$watch(function() {
                var a = ic(d.url()),
                    b = ic(j.absUrl()),
                    f = d.state(),
                    g = j.$$replace,
                    k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                (o || k) && (o = !1, c.$evalAsync(function() {
                    var b = j.absUrl(),
                        d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                    j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                })), j.$$replace = !1
            }), j
        }]
    }

    function qc() {
        var a = !0,
            b = this;
        this.debugEnabled = function(b) {
            return r(b) ? (a = b, this) : a
        }, this.$get = ["$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
            }

            function e(a) {
                var b = c.console || {},
                    e = b[a] || b.log || n;
                a = !1;
                try {
                    a = !!e.apply
                } catch (g) {}
                return a ? function() {
                    var a = [];
                    return f(arguments, function(b) {
                        a.push(d(b))
                    }), e.apply(b, a)
                } : function(a, b) {
                    e(a, null == b ? "" : b)
                }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function rc(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ye("isecfld", b);
        return a
    }

    function sc(a, b) {
        if (a) {
            if (a.constructor === a) throw ye("isecfn", b);
            if (a.window === a) throw ye("isecwindow", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ye("isecdom", b);
            if (a === Object) throw ye("isecobj", b)
        }
        return a
    }

    function tc(a) {
        return a.constant
    }

    function uc(a, b, c, d, e) {
        sc(a, e), sc(b, e), c = c.split(".");
        for (var f, g = 0; 1 < c.length; g++) {
            f = rc(c.shift(), e);
            var h = 0 === g && b && b[f] || a[f];
            h || (h = {}, a[f] = h), a = sc(h, e)
        }
        return f = rc(c.shift(), e), sc(a[f], e), a[f] = d
    }

    function vc(a) {
        return "constructor" == a
    }

    function wc(a, b, d, e, f, g, h) {
        rc(a, g), rc(b, g), rc(d, g), rc(e, g), rc(f, g);
        var i = function(a) {
                return sc(a, g)
            },
            j = h || vc(a) ? i : o,
            k = h || vc(b) ? i : o,
            l = h || vc(d) ? i : o,
            m = h || vc(e) ? i : o,
            n = h || vc(f) ? i : o;
        return function(g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = j(i[a]), b ? null == i ? c : (i = k(i[b]), d ? null == i ? c : (i = l(i[d]), e ? null == i ? c : (i = m(i[e]), f ? null == i ? c : i = n(i[f]) : i) : i) : i) : i)
        }
    }

    function xc(a, b) {
        return function(c, d) {
            return a(c, d, sc, b)
        }
    }

    function yc(a, b, d) {
        var e = b.expensiveChecks,
            g = e ? Ie : He,
            h = g[a];
        if (h) return h;
        var i = a.split("."),
            j = i.length;
        if (b.csp) h = 6 > j ? wc(i[0], i[1], i[2], i[3], i[4], d, e) : function(a, b) {
            var f, g = 0;
            do f = wc(i[g++], i[g++], i[g++], i[g++], i[g++], d, e)(a, b), b = c, a = f; while (j > g);
            return f
        };
        else {
            var k = "";
            e && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var l = e;
            f(i, function(a, b) {
                rc(a, d);
                var c = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                (e || vc(a)) && (c = "eso(" + c + ", fe)", l = !0), k += "if(s == null) return undefined;\ns=" + c + ";\n"
            }), k += "return s;", b = new Function("s", "l", "eso", "fe", k), b.toString = p(k), l && (b = xc(b, d)), h = b
        }
        return h.sharedGetter = !0, h.assign = function(b, c, d) {
            return uc(b, d, a, c, a)
        }, g[a] = h
    }

    function zc(a) {
        return w(a.valueOf) ? a.valueOf() : Je.call(a)
    }

    function Ac() {
        var a = db(),
            b = db();
        this.$get = ["$filter", "$sniffer", function(c, d) {
            function e(a) {
                var b = a;
                return a.sharedGetter && (b = function(b, c) {
                    return a(b, c)
                }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign), b
            }

            function g(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? g(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                }
                return b
            }

            function h(a, b) {
                return null == a || null == b ? a === b : "object" == typeof a && (a = zc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function i(a, b, c, d) {
                var e, f = d.$$inputs || (d.$$inputs = g(d.inputs, []));
                if (1 === f.length) {
                    var i = h,
                        f = f[0];
                    return a.$watch(function(a) {
                        var b = f(a);
                        return h(b, i) || (e = d(a), i = b && zc(b)), e
                    }, b, c)
                }
                for (var j = [], k = 0, l = f.length; l > k; k++) j[k] = h;
                return a.$watch(function(a) {
                    for (var b = !1, c = 0, g = f.length; g > c; c++) {
                        var i = f[c](a);
                        (b || (b = !h(i, j[c]))) && (j[c] = i && zc(i))
                    }
                    return b && (e = d(a)), e
                }, b, c)
            }

            function j(a, b, c, d) {
                var e, f;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    f = a, w(b) && b.apply(this, arguments), r(a) && d.$$postDigest(function() {
                        r(f) && e()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    return f(a, function(a) {
                        r(a) || (b = !1)
                    }), b
                }
                var g, h;
                return g = a.$watch(function(a) {
                    return d(a)
                }, function(a, c, d) {
                    h = a, w(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                        e(h) && g()
                    })
                }, c)
            }

            function l(a, b, c, d) {
                var e;
                return e = a.$watch(function(a) {
                    return d(a)
                }, function() {
                    w(b) && b.apply(this, arguments), e()
                }, c)
            }

            function m(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate,
                    c = c !== k && c !== j ? function(c, d) {
                        var e = a(c, d);
                        return b(e, c, d)
                    } : function(c, d) {
                        var e = a(c, d),
                            f = b(e, c, d);
                        return r(e) ? f : e
                    };
                return a.$$watchDelegate && a.$$watchDelegate !== i ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = i, c.inputs = [a]), c
            }
            var o = {
                    csp: d.csp,
                    expensiveChecks: !1
                },
                p = {
                    csp: d.csp,
                    expensiveChecks: !0
                };
            return function(d, f, g) {
                var h, q, r;
                switch (typeof d) {
                    case "string":
                        r = d = d.trim();
                        var s = g ? b : a;
                        return h = s[r], h || (":" === d.charAt(0) && ":" === d.charAt(1) && (q = !0, d = d.substring(2)), g = g ? p : o, h = new Fe(g), h = new Ge(h, c, g).parse(d), h.constant ? h.$$watchDelegate = l : q ? (h = e(h), h.$$watchDelegate = h.literal ? k : j) : h.inputs && (h.$$watchDelegate = i), s[r] = h), m(h, f);
                    case "function":
                        return m(d, f);
                    default:
                        return m(n, f)
                }
            }
        }]
    }

    function Bc() {
        this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
            return Dc(function(b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function Cc() {
        this.$get = ["$browser", "$exceptionHandler", function(a, b) {
            return Dc(function(b) {
                a.defer(b)
            }, b)
        }]
    }

    function Dc(a, b) {
        function e(a, b, c) {
            function d(b) {
                return function(c) {
                    e || (e = !0, b.call(a, c))
                }
            }
            var e = !1;
            return [d(b), d(c)]
        }

        function g() {
            this.$$state = {
                status: 0
            }
        }

        function h(a, b) {
            return function(c) {
                b.call(a, c)
            }
        }

        function i(d) {
            !d.processScheduled && d.pending && (d.processScheduled = !0, a(function() {
                var a, e, f;
                f = d.pending, d.processScheduled = !1, d.pending = c;
                for (var g = 0, h = f.length; h > g; ++g) {
                    e = f[g][0], a = f[g][d.status];
                    try {
                        w(a) ? e.resolve(a(d.value)) : 1 === d.status ? e.resolve(d.value) : e.reject(d.value)
                    } catch (i) {
                        e.reject(i), b(i)
                    }
                }
            }))
        }

        function j() {
            this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
        }
        var k = d("$q", TypeError);
        g.prototype = {
            then: function(a, b, c) {
                var d = new j;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), 0 < this.$$state.status && i(this.$$state), d.promise
            },
            "catch": function(a) {
                return this.then(null, a)
            },
            "finally": function(a, b) {
                return this.then(function(b) {
                    return m(b, !0, a)
                }, function(b) {
                    return m(b, !1, a)
                }, b)
            }
        }, j.prototype = {
            resolve: function(a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(k("qcycle", a)) : this.$$resolve(a))
            },
            $$resolve: function(a) {
                var c, d;
                d = e(this, this.$$resolve, this.$$reject);
                try {
                    (s(a) || w(a)) && (c = a && a.then), w(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, i(this.promise.$$state))
                } catch (f) {
                    d[1](f), b(f)
                }
            },
            reject: function(a) {
                this.promise.$$state.status || this.$$reject(a)
            },
            $$reject: function(a) {
                this.promise.$$state.value = a, this.promise.$$state.status = 2, i(this.promise.$$state)
            },
            notify: function(c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && a(function() {
                    for (var a, e, f = 0, g = d.length; g > f; f++) {
                        e = d[f][0], a = d[f][3];
                        try {
                            e.notify(w(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        };
        var l = function(a, b) {
                var c = new j;
                return b ? c.resolve(a) : c.reject(a), c.promise
            },
            m = function(a, b, c) {
                var d = null;
                try {
                    w(c) && (d = c())
                } catch (e) {
                    return l(e, !1)
                }
                return d && w(d.then) ? d.then(function() {
                    return l(a, b)
                }, function(a) {
                    return l(a, !1)
                }) : l(a, b)
            },
            n = function(a, b, c, d) {
                var e = new j;
                return e.resolve(a), e.promise.then(b, c, d)
            },
            o = function p(a) {
                if (!w(a)) throw k("norslvr", a);
                if (!(this instanceof p)) return new p(a);
                var b = new j;
                return a(function(a) {
                    b.resolve(a)
                }, function(a) {
                    b.reject(a)
                }), b.promise
            };
        return o.defer = function() {
            return new j
        }, o.reject = function(a) {
            var b = new j;
            return b.reject(a), b.promise
        }, o.when = n, o.all = function(a) {
            var b = new j,
                c = 0,
                d = Hd(a) ? [] : {};
            return f(a, function(a, e) {
                c++, n(a).then(function(a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function(a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            }), 0 === c && b.resolve(d), b.promise
        }, o
    }

    function Ec() {
        this.$get = ["$window", "$timeout", function(a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                e = !!c,
                f = e ? function(a) {
                    var b = c(a);
                    return function() {
                        d(b)
                    }
                } : function(a) {
                    var c = b(a, 16.66, !1);
                    return function() {
                        b.cancel(c)
                    }
                };
            return f.supported = e, f
        }]
    }

    function Fc() {
        var a = 10,
            b = d("$rootScope"),
            c = null,
            g = null;
        this.digestTtl = function(b) {
            return arguments.length && (a = b), a
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, h, i, j) {
            function k() {
                this.$id = ++Fd, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
            }

            function l(a) {
                if (t.$$phase) throw b("inprog", t.$$phase);
                t.$$phase = a
            }

            function m(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function o() {}

            function p() {
                for (; x.length;) try {
                    x.shift()()
                } catch (a) {
                    h(a)
                }
                g = null
            }

            function r() {
                null === g && (g = j.defer(function() {
                    t.$apply(p)
                }))
            }
            k.prototype = {
                constructor: k,
                $new: function(a, b) {
                    function c() {
                        d.$$destroyed = !0
                    }
                    var d;
                    return b = b || this, a ? (d = new k, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = ++Fd, this.$$ChildScope = null
                    }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope), d.$parent = b, d.$$prevSibling = b.$$childTail, b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d, (a || b != this) && d.$on("$destroy", c), d
                },
                $watch: function(a, b, d) {
                    var e = i(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, d, e);
                    var f = this.$$watchers,
                        g = {
                            fn: b,
                            last: o,
                            get: e,
                            exp: a,
                            eq: !!d
                        };
                    return c = null, w(b) || (g.fn = n), f || (f = this.$$watchers = []), f.unshift(g),
                        function() {
                            E(f, g), c = null
                        }
                },
                $watchGroup: function(a, b) {
                    function c() {
                        i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                    }
                    var d = Array(a.length),
                        e = Array(a.length),
                        g = [],
                        h = this,
                        i = !1,
                        j = !0;
                    if (!a.length) {
                        var k = !0;
                        return h.$evalAsync(function() {
                                k && b(e, e, h)
                            }),
                            function() {
                                k = !1
                            }
                    }
                    return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                        e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                    }) : (f(a, function(a, b) {
                        var f = h.$watch(a, function(a, f) {
                            e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                        });
                        g.push(f)
                    }), function() {
                        for (; g.length;) g.shift()()
                    })
                },
                $watchCollection: function(a, b) {
                    function c(a) {
                        d = a;
                        var b, c, g, h;
                        if (!q(d)) {
                            if (s(d))
                                if (e(d))
                                    for (f !== m && (f = m, p = f.length = 0, k++), a = d.length, p !== a && (k++, f.length = p = a), b = 0; a > b; b++) h = f[b], g = d[b], c = h !== h && g !== g, c || h === g || (k++, f[b] = g);
                                else {
                                    f !== n && (f = n = {}, p = 0, k++), a = 0;
                                    for (b in d) d.hasOwnProperty(b) && (a++, g = d[b], h = f[b], b in f ? (c = h !== h && g !== g, c || h === g || (k++, f[b] = g)) : (p++, f[b] = g, k++));
                                    if (p > a)
                                        for (b in k++, f) d.hasOwnProperty(b) || (p--, delete f[b])
                                }
                            else f !== d && (f = d, k++);
                            return k
                        }
                    }
                    c.$stateful = !0;
                    var d, f, g, h = this,
                        j = 1 < b.length,
                        k = 0,
                        l = i(a, c),
                        m = [],
                        n = {},
                        o = !0,
                        p = 0;
                    return this.$watch(l, function() {
                        if (o ? (o = !1, b(d, d, h)) : b(d, g, h), j)
                            if (s(d))
                                if (e(d)) {
                                    g = Array(d.length);
                                    for (var a = 0; a < d.length; a++) g[a] = d[a]
                                } else
                                    for (a in g = {}, d) xd.call(d, a) && (g[a] = d[a]);
                        else g = d
                    })
                },
                $digest: function() {
                    var d, e, f, i, k, m, n, q, r, s = a,
                        x = [];
                    l("$digest"), j.$$checkUrlChange(), this === t && null !== g && (j.defer.cancel(g), p()), c = null;
                    do {
                        for (m = !1, n = this; u.length;) {
                            try {
                                r = u.shift(), r.scope.$eval(r.expression, r.locals)
                            } catch (y) {
                                h(y)
                            }
                            c = null
                        }
                        a: do {
                            if (i = n.$$watchers)
                                for (k = i.length; k--;) try {
                                    if (d = i[k])
                                        if ((e = d.get(n)) === (f = d.last) || (d.eq ? H(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                            if (d === c) {
                                                m = !1;
                                                break a
                                            }
                                        } else m = !0, c = d, d.last = d.eq ? F(e, null) : e, d.fn(e, f === o ? e : f, n), 5 > s && (q = 4 - s, x[q] || (x[q] = []), x[q].push({
                                            msg: w(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp,
                                            newVal: e,
                                            oldVal: f
                                        }))
                                } catch (z) {
                                    h(z)
                                }
                            if (!(i = n.$$childHead || n !== this && n.$$nextSibling))
                                for (; n !== this && !(i = n.$$nextSibling);) n = n.$parent
                        } while (n = i);
                        if ((m || u.length) && !s--) throw t.$$phase = null, b("infdig", a, x)
                    } while (m || u.length);
                    for (t.$$phase = null; v.length;) try {
                        v.shift()()
                    } catch (A) {
                        h(A)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== t) {
                            for (var b in this.$$listenerCount) m(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = n, this.$on = this.$watch = this.$watchGroup = function() {
                                return n
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                },
                $eval: function(a, b) {
                    return i(a)(this, b)
                },
                $evalAsync: function(a, b) {
                    t.$$phase || u.length || j.defer(function() {
                        u.length && t.$digest()
                    }), u.push({
                        scope: this,
                        expression: a,
                        locals: b
                    })
                },
                $$postDigest: function(a) {
                    v.push(a)
                },
                $apply: function(a) {
                    try {
                        return l("$apply"), this.$eval(a)
                    } catch (b) {
                        h(b)
                    } finally {
                        t.$$phase = null;
                        try {
                            t.$digest()
                        } catch (c) {
                            throw h(c), c
                        }
                    }
                },
                $applyAsync: function(a) {
                    function b() {
                        c.$eval(a)
                    }
                    var c = this;
                    a && x.push(b), r()
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = c.indexOf(b); - 1 !== d && (c[d] = null, m(e, 1, a))
                    }
                },
                $emit: function(a) {
                    var b, c, d, e = [],
                        f = this,
                        g = !1,
                        i = {
                            name: a,
                            targetScope: f,
                            stopPropagation: function() {
                                g = !0
                            },
                            preventDefault: function() {
                                i.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        j = I([i], arguments, 1);
                    do {
                        for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++)
                            if (b[c]) try {
                                b[c].apply(null, j)
                            } catch (k) {
                                h(k)
                            } else b.splice(c, 1), c--, d--;
                        if (g) return i.currentScope = null, i;
                        f = f.$parent
                    } while (f);
                    return i.currentScope = null, i
                },
                $broadcast: function(a) {
                    var b = this,
                        c = this,
                        d = {
                            name: a,
                            targetScope: this,
                            preventDefault: function() {
                                d.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[a]) return d;
                    for (var e, f, g = I([d], arguments, 1); b = c;) {
                        for (d.currentScope = b, c = b.$$listeners[a] || [], e = 0, f = c.length; f > e; e++)
                            if (c[e]) try {
                                c[e].apply(null, g)
                            } catch (i) {
                                h(i)
                            } else c.splice(e, 1), e--, f--;
                        if (!(c = b.$$listenerCount[a] && b.$$childHead || b !== this && b.$$nextSibling))
                            for (; b !== this && !(c = b.$$nextSibling);) b = b.$parent
                    }
                    return d.currentScope = null, d
                }
            };
            var t = new k,
                u = t.$$asyncQueue = [],
                v = t.$$postDigestQueue = [],
                x = t.$$applyAsyncQueue = [];
            return t
        }]
    }

    function Gc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/,
            b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return r(b) ? (a = b, this) : a
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return r(a) ? (b = a, this) : b
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return e = Pc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
            }
        }
    }

    function Hc(a) {
        if ("self" === a) return a;
        if (t(a)) {
            if (-1 < a.indexOf("***")) throw Ke("iwcard", a);
            return a = Jd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
        }
        if (x(a)) return new RegExp("^" + a.source + "$");
        throw Ke("imatcher")
    }

    function Ic(a) {
        var b = [];
        return r(a) && f(a, function(a) {
            b.push(Hc(a))
        }), b
    }

    function Jc() {
        this.SCE_CONTEXTS = Le;
        var a = ["self"],
            b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = Ic(b)), a
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = Ic(a)), b
        }, this.$get = ["$injector", function(d) {
            function e(a, b) {
                return "self" === a ? Qc(b) : !!a.exec(b.href)
            }

            function f(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                return a && (b.prototype = new a), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                }, b
            }
            var g = function() {
                throw Ke("unsafe")
            };
            d.has("$sanitize") && (g = d.get("$sanitize"));
            var h = f(),
                i = {};
            return i[Le.HTML] = f(h), i[Le.CSS] = f(h), i[Le.URL] = f(h), i[Le.JS] = f(h), i[Le.RESOURCE_URL] = f(i[Le.URL]), {
                trustAs: function(a, b) {
                    var d = i.hasOwnProperty(a) ? i[a] : null;
                    if (!d) throw Ke("icontext", a, b);
                    if (null === b || b === c || "" === b) return b;
                    if ("string" != typeof b) throw Ke("itype", a);
                    return new d(b)
                },
                getTrusted: function(d, f) {
                    if (null === f || f === c || "" === f) return f;
                    var h = i.hasOwnProperty(d) ? i[d] : null;
                    if (h && f instanceof h) return f.$$unwrapTrustedValue();
                    if (d === Le.RESOURCE_URL) {
                        var j, k, h = Pc(f.toString()),
                            l = !1;
                        for (j = 0, k = a.length; k > j; j++)
                            if (e(a[j], h)) {
                                l = !0;
                                break
                            }
                        if (l)
                            for (j = 0, k = b.length; k > j; j++)
                                if (e(b[j], h)) {
                                    l = !1;
                                    break
                                }
                        if (l) return f;
                        throw Ke("insecurl", f.toString())
                    }
                    if (d === Le.HTML) return g(f);
                    throw Ke("unsafe")
                },
                valueOf: function(a) {
                    return a instanceof h ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function Kc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a
        }, this.$get = ["$parse", "$sceDelegate", function(b, c) {
            if (a && 8 > rd) throw Ke("iequirks");
            var d = G(Le);
            d.isEnabled = function() {
                return a
            }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
                return b
            }, d.valueOf = o), d.parseAs = function(a, c) {
                var e = b(c);
                return e.literal && e.constant ? e : b(c, function(b) {
                    return d.getTrusted(a, b)
                })
            };
            var e = d.parseAs,
                g = d.getTrusted,
                h = d.trustAs;
            return f(Le, function(a, b) {
                var c = wd(b);
                d[gb("parse_as_" + c)] = function(b) {
                    return e(a, b)
                }, d[gb("get_trusted_" + c)] = function(b) {
                    return g(a, b)
                }, d[gb("trust_as_" + c)] = function(b) {
                    return h(a, b)
                }
            }), d
        }]
    }

    function Lc() {
        this.$get = ["$window", "$document", function(a, b) {
            var c, d = {},
                e = l((/android (\d+)/.exec(wd((a.navigator || {}).userAgent)) || [])[1]),
                f = /Boxee/i.test((a.navigator || {}).userAgent),
                g = b[0] || {},
                h = /^(Moz|webkit|ms)(?=[A-Z])/,
                i = g.body && g.body.style,
                j = !1,
                k = !1;
            if (i) {
                for (var m in i)
                    if (j = h.exec(m)) {
                        c = j[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                        break
                    }
                c || (c = "WebkitOpacity" in i && "webkit"), j = !!("transition" in i || c + "Transition" in i), k = !!("animation" in i || c + "Animation" in i), !e || j && k || (j = t(g.body.style.webkitTransition), k = t(g.body.style.webkitAnimation))
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > e || f),
                hasEvent: function(a) {
                    if ("input" === a && 11 >= rd) return !1;
                    if (q(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b
                    }
                    return d[a]
                },
                csp: Kd(),
                vendorPrefix: c,
                transitions: j,
                animations: k,
                android: e
            }
        }]
    }

    function Mc() {
        this.$get = ["$templateCache", "$http", "$q", function(a, b, c) {
            function d(e, f) {
                d.totalPendingRequests++;
                var g = b.defaults && b.defaults.transformResponse;
                return Hd(g) ? g = g.filter(function(a) {
                    return a !== Ub
                }) : g === Ub && (g = null), b.get(e, {
                    cache: a,
                    transformResponse: g
                })["finally"](function() {
                    d.totalPendingRequests--
                }).then(function(a) {
                    return a.data
                }, function(a) {
                    if (!f) throw le("tpload", e);
                    return c.reject(a)
                })
            }
            return d.totalPendingRequests = 0, d
        }]
    }

    function Nc() {
        this.$get = ["$rootScope", "$browser", "$location", function(a, b, c) {
            return {
                findBindings: function(a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var d = [];
                    return f(a, function(a) {
                        var e = Ed.element(a).data("$binding");
                        e && f(e, function(e) {
                            c ? new RegExp("(^|\\s)" + Jd(b) + "(\\s|\\||$)").test(e) && d.push(a) : -1 != e.indexOf(b) && d.push(a)
                        })
                    }), d
                },
                findModels: function(a, b, c) {
                    for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                        var f = a.querySelectorAll("[" + d[e] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (f.length) return f
                    }
                },
                getLocation: function() {
                    return c.url()
                },
                setLocation: function(b) {
                    b !== c.url() && (c.url(b), a.$digest())
                },
                whenStable: function(a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }]
    }

    function Oc() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
            function f(f, h, i) {
                var j = r(i) && !i,
                    k = (j ? d : c).defer(),
                    l = k.promise;
                return h = b.defer(function() {
                    try {
                        k.resolve(f())
                    } catch (b) {
                        k.reject(b), e(b)
                    } finally {
                        delete g[l.$$timeoutId]
                    }
                    j || a.$apply()
                }, h), l.$$timeoutId = h, g[h] = k, l
            }
            var g = {};
            return f.cancel = function(a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            }, f
        }]
    }

    function Pc(a) {
        return rd && (Me.setAttribute("href", a), a = Me.href), Me.setAttribute("href", a), {
            href: Me.href,
            protocol: Me.protocol ? Me.protocol.replace(/:$/, "") : "",
            host: Me.host,
            search: Me.search ? Me.search.replace(/^\?/, "") : "",
            hash: Me.hash ? Me.hash.replace(/^#/, "") : "",
            hostname: Me.hostname,
            port: Me.port,
            pathname: "/" === Me.pathname.charAt(0) ? Me.pathname : "/" + Me.pathname
        }
    }

    function Qc(a) {
        return a = t(a) ? Pc(a) : a, a.protocol === Ne.protocol && a.host === Ne.host
    }

    function Rc() {
        this.$get = p(a)
    }

    function Sc(a) {
        function b(c, d) {
            if (s(c)) {
                var e = {};
                return f(c, function(a, c) {
                    e[c] = b(c, a)
                }), e
            }
            return a.factory(c + "Filter", d)
        }
        this.register = b, this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + "Filter")
            }
        }], b("currency", Wc), b("date", cd), b("filter", Tc), b("json", dd), b("limitTo", ed), b("lowercase", Se), b("number", Xc), b("orderBy", fd), b("uppercase", Te)
    }

    function Tc() {
        return function(a, b, c) {
            if (!Hd(a)) return a;
            var d;
            switch (typeof b) {
                case "function":
                    break;
                case "boolean":
                case "number":
                case "string":
                    d = !0;
                case "object":
                    b = Uc(b, c, d);
                    break;
                default:
                    return a
            }
            return a.filter(b)
        }
    }

    function Uc(a, b, c) {
        var d = s(a) && "$" in a;
        return !0 === b ? b = H : w(b) || (b = function(a, b) {
                return s(a) || s(b) ? !1 : (a = wd("" + a), b = wd("" + b), -1 !== a.indexOf(b))
            }),
            function(e) {
                return d && !s(e) ? Vc(e, a.$, b, !1) : Vc(e, a, b, c)
            }
    }

    function Vc(a, b, c, d, e) {
        var f = typeof a,
            g = typeof b;
        if ("string" === g && "!" === b.charAt(0)) return !Vc(a, b.substring(1), c, d);
        if (Hd(a)) return a.some(function(a) {
            return Vc(a, b, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in a)
                        if ("$" !== h.charAt(0) && Vc(a[h], b, c, !0)) return !0;
                    return e ? !1 : Vc(a, b, c, !1)
                }
                if ("object" === g) {
                    for (h in b)
                        if (e = b[h], !w(e) && (f = "$" === h, !Vc(f ? a : a[h], e, c, f, f))) return !1;
                    return !0
                }
                return c(a, b);
            case "function":
                return !1;
            default:
                return c(a, b)
        }
    }

    function Wc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c, d) {
            return q(c) && (c = b.CURRENCY_SYM), q(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Yc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
        }
    }

    function Xc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return null == a ? a : Yc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function Yc(a, b, c, d, e) {
        if (!isFinite(a) || s(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "",
            h = "",
            i = [],
            j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? a = 0 : (h = g, j = !0)
        }
        if (j) e > 0 && 1 > a && (h = a.toFixed(e), a = parseFloat(h));
        else {
            g = (g.split(Oe)[1] || "").length, q(e) && (e = Math.min(Math.max(b.minFrac, g), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + a).split(Oe),
                j = g[0],
                g = g[1] || "",
                l = 0,
                m = b.lgSize,
                n = b.gSize;
            if (j.length >= m + n)
                for (l = j.length - m, k = 0; l > k; k++) 0 === (l - k) % n && 0 !== k && (h += c), h += j.charAt(k);
            for (k = l; k < j.length; k++) 0 === (j.length - k) % m && 0 !== k && (h += c), h += j.charAt(k);
            for (; g.length < e;) g += "0";
            e && "0" !== e && (h += d + g.substr(0, e))
        }
        return 0 === a && (f = !1), i.push(f ? b.negPre : b.posPre, h, f ? b.negSuf : b.posSuf), i.join("")
    }

    function Zc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a
    }

    function $c(a, b, c, d) {
        return c = c || 0,
            function(e) {
                return e = e["get" + a](), (c > 0 || e > -c) && (e += c), 0 === e && -12 == c && (e = 12), Zc(e, b, d)
            }
    }

    function _c(a, b) {
        return function(c, d) {
            var e = c["get" + a](),
                f = yd(b ? "SHORT" + a : a);
            return d[f][e]
        }
    }

    function ad(a) {
        var b = new Date(a, 0, 1).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function bd(a) {
        return function(b) {
            var c = ad(b.getFullYear());
            return b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +c, b = 1 + Math.round(b / 6048e5), Zc(b, a)
        }
    }

    function cd(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var d = 0,
                    e = 0,
                    f = b[8] ? a.setUTCFullYear : a.setFullYear,
                    g = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (d = l(b[9] + b[10]), e = l(b[9] + b[11])), f.call(a, l(b[1]), l(b[2]) - 1, l(b[3])), d = l(b[4] || 0) - d, e = l(b[5] || 0) - e, f = l(b[6] || 0), b = Math.round(1e3 * parseFloat("0." + (b[7] || 0))), g.call(a, d, e, f, b)
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d, e) {
            var g, h, i = "",
                j = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, t(c) && (c = Re.test(c) ? l(c) : b(c)), u(c) && (c = new Date(c)), !v(c)) return c;
            for (; d;)(h = Qe.exec(d)) ? (j = I(j, h, 1), d = j.pop()) : (j.push(d), d = null);
            return e && "UTC" === e && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), f(j, function(b) {
                g = Pe[b], i += g ? g(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), i
        }
    }

    function dd() {
        return function(a, b) {
            return q(b) && (b = 2), L(a, b)
        }
    }

    function ed() {
        return function(a, b) {
            return u(a) && (a = a.toString()), Hd(a) || t(a) ? (b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : l(b)) ? b > 0 ? a.slice(0, b) : a.slice(b) : t(a) ? "" : [] : a
        }
    }

    function fd(a) {
        return function(b, c, d) {
            function f(a, b) {
                return b ? function(b, c) {
                    return a(c, b)
                } : a
            }

            function g(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function h(a) {
                return null === a ? "null" : "function" == typeof a.valueOf && (a = a.valueOf(), g(a)) || "function" == typeof a.toString && (a = a.toString(), g(a)) ? a : ""
            }

            function i(a, b) {
                var c = typeof a,
                    d = typeof b;
                return c === d && "object" === c && (a = h(a), b = h(b)), c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
            }
            return e(b) ? (c = Hd(c) ? c : [c], 0 === c.length && (c = ["+"]), c = c.map(function(b) {
                var c = !1,
                    d = b || o;
                if (t(b)) {
                    if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), "" === b) return f(i, c);
                    if (d = a(b), d.constant) {
                        var e = d();
                        return f(function(a, b) {
                            return i(a[e], b[e])
                        }, c)
                    }
                }
                return f(function(a, b) {
                    return i(d(a), d(b))
                }, c)
            }), zd.call(b).sort(f(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }, d))) : b
        }
    }

    function gd(a) {
        return w(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", p(a)
    }

    function hd(a, b, d, e, g) {
        var h = this,
            i = [],
            j = h.$$parentForm = a.parent().controller("form") || We;
        h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, j.$addControl(h), h.$rollbackViewValue = function() {
            f(i, function(a) {
                a.$rollbackViewValue()
            })
        }, h.$commitViewValue = function() {
            f(i, function(a) {
                a.$commitViewValue()
            })
        }, h.$addControl = function(a) {
            ab(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a)
        }, h.$$renameControl = function(a, b) {
            var c = a.$name;
            h[c] === a && delete h[c], h[b] = a, a.$name = b
        }, h.$removeControl = function(a) {
            a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$error, function(b, c) {
                h.$setValidity(c, null, a)
            }), f(h.$$success, function(b, c) {
                h.$setValidity(c, null, a)
            }), E(i, a)
        }, pd({
            ctrl: this,
            $element: a,
            set: function(a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            },
            unset: function(a, b, c) {
                var d = a[b];
                d && (E(d, c), 0 === d.length && delete a[b])
            },
            parentForm: j,
            $animate: e
        }), h.$setDirty = function() {
            e.removeClass(a, Ef), e.addClass(a, Ff), h.$dirty = !0, h.$pristine = !1, j.$setDirty()
        }, h.$setPristine = function() {
            e.setClass(a, Ef, Ff + " ng-submitted"), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function(a) {
                a.$setPristine()
            })
        }, h.$setUntouched = function() {
            f(i, function(a) {
                a.$setUntouched()
            })
        }, h.$setSubmitted = function() {
            e.addClass(a, "ng-submitted"), h.$submitted = !0, j.$setSubmitted()
        }
    }

    function id(a) {
        a.$formatters.push(function(b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function jd(a, b, c, d, e, f) {
        var g = wd(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function() {
                h = !0
            }), b.on("compositionend", function() {
                h = !1, i()
            })
        }
        var i = function(a) {
            if (j && (f.defer.cancel(j), j = null), !h) {
                var e = b.val();
                a = a && a.type, "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Id(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, a)
            }
        };
        if (e.hasEvent("input")) b.on("input", i);
        else {
            var j, k = function(a, b, c) {
                j || (j = f.defer(function() {
                    j = null, b && b.value === c || i(a)
                }))
            };
            b.on("keydown", function(a) {
                var b = a.keyCode;
                91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
            }), e.hasEvent("paste") && b.on("paste cut", k)
        }
        b.on("change", i), d.$render = function() {
            b.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function kd(a, b) {
        return function(c, d) {
            var e, g;
            if (v(c)) return c;
            if (t(c)) {
                if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), $e.test(c)) return new Date(c);
                if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, f(e, function(a, c) {
                    c < b.length && (g[b[c]] = +a)
                }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
            }
            return 0 / 0
        }
    }

    function ld(a, b, d, e) {
        return function(f, g, h, i, j, k, l) {
            function m(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function n(a) {
                return r(a) ? v(a) ? a : d(a) : c
            }
            md(f, g, h, i), jd(f, g, h, i, j, k);
            var o, p = i && i.$options && i.$options.timezone;
            if (i.$$parserName = a, i.$parsers.push(function(a) {
                    return i.$isEmpty(a) ? null : b.test(a) ? (a = d(a, o), "UTC" === p && a.setMinutes(a.getMinutes() - a.getTimezoneOffset()), a) : c
                }), i.$formatters.push(function(a) {
                    if (a && !v(a)) throw Hf("datefmt", a);
                    if (m(a)) {
                        if ((o = a) && "UTC" === p) {
                            var b = 6e4 * o.getTimezoneOffset();
                            o = new Date(o.getTime() + b)
                        }
                        return l("date")(a, e, p)
                    }
                    return o = null, ""
                }), r(h.min) || h.ngMin) {
                var s;
                i.$validators.min = function(a) {
                    return !m(a) || q(s) || d(a) >= s
                }, h.$observe("min", function(a) {
                    s = n(a), i.$validate()
                })
            }
            if (r(h.max) || h.ngMax) {
                var t;
                i.$validators.max = function(a) {
                    return !m(a) || q(t) || d(a) <= t
                }, h.$observe("max", function(a) {
                    t = n(a), i.$validate()
                })
            }
        }
    }

    function md(a, b, d, e) {
        (e.$$hasNativeValidators = s(b[0].validity)) && e.$parsers.push(function(a) {
            var d = b.prop("validity") || {};
            return d.badInput && !d.typeMismatch ? c : a
        })
    }

    function nd(a, b, c, e, f) {
        if (r(e)) {
            if (a = a(e), !a.constant) throw d("ngModel")("constexpr", c, e);
            return a(b)
        }
        return f
    }

    function od(a, b) {
        return a = "ngClass" + a, ["$animate", function(c) {
            function d(a, b) {
                var c = [],
                    d = 0;
                a: for (; d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++)
                        if (e == b[f]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (!Hd(a)) {
                    if (t(a)) return a.split(" ");
                    if (s(a)) {
                        var b = [];
                        return f(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")))
                        }), b
                    }
                }
                return a
            }
            return {
                restrict: "AC",
                link: function(g, h, i) {
                    function j(a, b) {
                        var c = h.data("$classCounts") || {},
                            d = [];
                        return f(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                        }), h.data("$classCounts", c), d.join(" ")
                    }

                    function k(a) {
                        if (!0 === b || g.$index % 2 === b) {
                            var f = e(a || []);
                            if (l) {
                                if (!H(a, l)) {
                                    var k = e(l),
                                        m = d(f, k),
                                        f = d(k, f),
                                        m = j(m, 1),
                                        f = j(f, -1);
                                    m && m.length && c.addClass(h, m), f && f.length && c.removeClass(h, f)
                                }
                            } else {
                                var m = j(f, 1);
                                i.$addClass(m)
                            }
                        }
                        l = G(a)
                    }
                    var l;
                    g.$watch(i[a], k, !0), i.$observe("class", function() {
                        k(g.$eval(i[a]))
                    }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? (f = j(h, 1), i.$addClass(f)) : (f = j(h, -1), i.$removeClass(f))
                        }
                    })
                }
            }
        }]
    }

    function pd(a) {
        function b(a, b) {
            b && !g[a] ? (k.addClass(f, a), g[a] = !0) : !b && g[a] && (k.removeClass(f, a), g[a] = !1)
        }

        function d(a, c) {
            a = a ? "-" + Y(a, "-") : "", b(Cf + a, !0 === c), b(Df + a, !1 === c)
        }
        var e = a.ctrl,
            f = a.$element,
            g = {},
            h = a.set,
            i = a.unset,
            j = a.parentForm,
            k = a.$animate;
        g[Df] = !(g[Cf] = f.hasClass(Cf)), e.$setValidity = function(a, f, g) {
            f === c ? (e.$pending || (e.$pending = {}), h(e.$pending, a, g)) : (e.$pending && i(e.$pending, a, g), qd(e.$pending) && (e.$pending = c)), A(f) ? f ? (i(e.$error, a, g), h(e.$$success, a, g)) : (h(e.$error, a, g), i(e.$$success, a, g)) : (i(e.$error, a, g), i(e.$$success, a, g)), e.$pending ? (b(Gf, !0), e.$valid = e.$invalid = c, d("", null)) : (b(Gf, !1), e.$valid = qd(e.$error), e.$invalid = !e.$valid, d("", e.$valid)), f = e.$pending && e.$pending[a] ? c : e.$error[a] ? !1 : e.$$success[a] ? !0 : null, d(a, f), j.$setValidity(a, f, e)
        }
    }

    function qd(a) {
        if (a)
            for (var b in a) return !1;
        return !0
    }
    var rd, sd, td, ud, vd = /^\/(.+)\/([a-z]*)$/,
        wd = function(a) {
            return t(a) ? a.toLowerCase() : a
        },
        xd = Object.prototype.hasOwnProperty,
        yd = function(a) {
            return t(a) ? a.toUpperCase() : a
        },
        zd = [].slice,
        Ad = [].splice,
        Bd = [].push,
        Cd = Object.prototype.toString,
        Dd = d("ng"),
        Ed = a.angular || (a.angular = {}),
        Fd = 0;
    rd = b.documentMode, n.$inject = [], o.$inject = [];
    var Gd, Hd = Array.isArray,
        Id = function(a) {
            return t(a) ? a.trim() : a
        },
        Jd = function(a) {
            return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        Kd = function() {
            if (r(Kd.isActive_)) return Kd.isActive_;
            var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
            if (!a) try {
                new Function("")
            } catch (c) {
                a = !0
            }
            return Kd.isActive_ = a
        },
        Ld = ["ng-", "data-ng-", "ng:", "x-ng-"],
        Md = /[A-Z]/g,
        Nd = !1,
        Od = 1,
        Pd = 3,
        Qd = {
            full: "1.3.13",
            major: 1,
            minor: 3,
            dot: 13,
            codeName: "meticulous-riffleshuffle"
        };
    jb.expando = "ng339";
    var Rd = jb.cache = {},
        Sd = 1;
    jb._data = function(a) {
        return this.cache[a[this.expando]] || {}
    };
    var Td = /([\:\-\_]+(.))/g,
        Ud = /^moz([A-Z])/,
        Vd = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        Wd = d("jqLite"),
        Xd = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Yd = /<|&#?\w+;/,
        Zd = /<([\w:]+)/,
        $d = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        _d = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    _d.optgroup = _d.option, _d.tbody = _d.tfoot = _d.colgroup = _d.caption = _d.thead, _d.th = _d.td;
    var ae = jb.prototype = {
            ready: function(c) {
                function d() {
                    e || (e = !0, c())
                }
                var e = !1;
                "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), jb(a).on("load", d))
            },
            toString: function() {
                var a = [];
                return f(this, function(b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            },
            eq: function(a) {
                return sd(a >= 0 ? this[a] : this[this.length + a])
            },
            length: 0,
            push: Bd,
            sort: [].sort,
            splice: [].splice
        },
        be = {};
    f("multiple selected checked disabled readOnly required open".split(" "), function(a) {
        be[wd(a)] = a
    });
    var ce = {};
    f("input select option textarea button form details".split(" "), function(a) {
        ce[a] = !0
    });
    var de = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    f({
        data: pb,
        removeData: nb
    }, function(a, b) {
        jb[b] = a
    }), f({
        data: pb,
        inheritedData: vb,
        scope: function(a) {
            return sd.data(a, "$scope") || vb(a.parentNode || a, ["$isolateScope", "$scope"])
        },
        isolateScope: function(a) {
            return sd.data(a, "$isolateScope") || sd.data(a, "$isolateScopeNoTemplate")
        },
        controller: ub,
        injector: function(a) {
            return vb(a, "$injector")
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b)
        },
        hasClass: qb,
        css: function(a, b, c) {
            return b = gb(b), r(c) ? void(a.style[b] = c) : a.style[b]
        },
        attr: function(a, b, d) {
            var e = wd(b);
            if (be[e]) {
                if (!r(d)) return a[b] || (a.attributes.getNamedItem(b) || n).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
            } else if (r(d)) a.setAttribute(b, d);
            else if (a.getAttribute) return a = a.getAttribute(b, 2), null === a ? c : a
        },
        prop: function(a, b, c) {
            return r(c) ? void(a[b] = c) : a[b]
        },
        text: function() {
            function a(a, b) {
                if (q(b)) {
                    var c = a.nodeType;
                    return c === Od || c === Pd ? a.textContent : ""
                }
                a.textContent = b
            }
            return a.$dv = "", a
        }(),
        val: function(a, b) {
            if (q(b)) {
                if (a.multiple && "select" === D(a)) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    }), 0 === c.length ? null : c
                }
                return a.value
            }
            a.value = b
        },
        html: function(a, b) {
            return q(b) ? a.innerHTML : (lb(a, !0), void(a.innerHTML = b))
        },
        empty: wb
    }, function(a, b) {
        jb.prototype[b] = function(b, d) {
            var e, f, g = this.length;
            if (a !== wb && (2 == a.length && a !== qb && a !== ub ? b : d) === c) {
                if (s(b)) {
                    for (e = 0; g > e; e++)
                        if (a === pb) a(this[e], b);
                        else
                            for (f in b) a(this[e], f, b[f]);
                    return this
                }
                for (e = a.$dv, g = e === c ? Math.min(g, 1) : g, f = 0; g > f; f++) {
                    var h = a(this[f], b, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; g > e; e++) a(this[e], b, d);
            return this
        }
    }), f({
        removeData: nb,
        on: function eg(a, b, c, d) {
            if (r(d)) throw Wd("onargs");
            if (hb(a)) {
                var e = ob(a, !0);
                d = e.events;
                var f = e.handle;
                f || (f = e.handle = Bb(a, d));
                for (var e = 0 <= b.indexOf(" ") ? b.split(" ") : [b], g = e.length; g--;) {
                    b = e[g];
                    var h = d[b];
                    h || (d[b] = [], "mouseenter" === b || "mouseleave" === b ? eg(a, Vd[b], function(a) {
                        var c = a.relatedTarget;
                        c && (c === this || this.contains(c)) || f(a, b)
                    }) : "$destroy" !== b && a.addEventListener(b, f, !1), h = d[b]), h.push(c)
                }
            }
        },
        off: mb,
        one: function(a, b, c) {
            a = sd(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d)
            }), a.on(b, c)
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            lb(a), f(new jb(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
            })
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                a.nodeType === Od && b.push(a)
            }), b
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, b) {
            var c = a.nodeType;
            if (c === Od || 11 === c) {
                b = new jb(b);
                for (var c = 0, d = b.length; d > c; c++) a.appendChild(b[c])
            }
        },
        prepend: function(a, b) {
            if (a.nodeType === Od) {
                var c = a.firstChild;
                f(new jb(b), function(b) {
                    a.insertBefore(b, c)
                })
            }
        },
        wrap: function(a, b) {
            b = sd(b).eq(0).clone()[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a)
        },
        remove: xb,
        detach: function(a) {
            xb(a, !0)
        },
        after: function(a, b) {
            var c = a,
                d = a.parentNode;
            b = new jb(b);
            for (var e = 0, f = b.length; f > e; e++) {
                var g = b[e];
                d.insertBefore(g, c.nextSibling), c = g
            }
        },
        addClass: sb,
        removeClass: rb,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                q(d) && (d = !qb(a, b)), (d ? sb : rb)(a, b)
            })
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function(a) {
            return a.nextElementSibling
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        },
        clone: kb,
        triggerHandler: function(a, b, c) {
            var d, e, g = b.type || b,
                h = ob(a);
            (h = (h = h && h.events) && h[g]) && (d = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function() {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function() {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: n,
                type: g,
                target: a
            }, b.type && (d = k(d, b)), b = G(h), e = c ? [d].concat(c) : [d], f(b, function(b) {
                d.isImmediatePropagationStopped() || b.apply(a, e)
            }))
        }
    }, function(a, b) {
        jb.prototype[b] = function(b, c, d) {
            for (var e, f = 0, g = this.length; g > f; f++) q(e) ? (e = a(this[f], b, c, d), r(e) && (e = sd(e))) : tb(e, a(this[f], b, c, d));
            return r(e) ? e : this
        }, jb.prototype.bind = jb.prototype.on, jb.prototype.unbind = jb.prototype.off
    }), Eb.prototype = {
        put: function(a, b) {
            this[Db(a, this.nextUid)] = b
        },
        get: function(a) {
            return this[Db(a, this.nextUid)]
        },
        remove: function(a) {
            var b = this[a = Db(a, this.nextUid)];
            return delete this[a], b
        }
    };
    var ee = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        fe = /,/,
        ge = /^\s*(_?)(\S+?)\1\s*$/,
        he = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        ie = d("$injector");
    Gb.$$annotate = function(a, b, c) {
        var d;
        if ("function" == typeof a) {
            if (!(d = a.$inject)) {
                if (d = [], a.length) {
                    if (b) throw t(c) && c || (c = a.name || Fb(a)), ie("strictdi", c);
                    b = a.toString().replace(he, ""), b = b.match(ee), f(b[1].split(fe), function(a) {
                        a.replace(ge, function(a, b, c) {
                            d.push(c)
                        })
                    })
                }
                a.$inject = d
            }
        } else Hd(a) ? (b = a.length - 1, _(a[b], "fn"), d = a.slice(0, b)) : _(a, "fn", !0);
        return d
    };
    var je = d("$animate"),
        ke = ["$provide", function(a) {
            this.$$selectors = {}, this.register = function(b, c) {
                var d = b + "-animation";
                if (b && "." != b.charAt(0)) throw je("notcsel", b);
                this.$$selectors[b.substr(1)] = d, a.factory(d, c)
            }, this.classNameFilter = function(a) {
                return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
            }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(a, b, c) {
                function d(b) {
                    var d, e = a.defer();
                    return e.promise.$$cancelFn = function() {
                        d && d()
                    }, c.$$postDigest(function() {
                        d = b(function() {
                            e.resolve()
                        })
                    }), e.promise
                }

                function e(a, b) {
                    var c = [],
                        d = [],
                        e = db();
                    return f((a.attr("class") || "").split(/\s+/), function(a) {
                        e[a] = !0
                    }), f(b, function(a, b) {
                        var f = e[b];
                        !1 === a && f ? d.push(b) : !0 !== a || f || c.push(b)
                    }), 0 < c.length + d.length && [c.length ? c : null, d.length ? d : null]
                }

                function g(a, b, c) {
                    for (var d = 0, e = b.length; e > d; ++d) a[b[d]] = c
                }

                function h() {
                    return j || (j = a.defer(), b(function() {
                        j.resolve(), j = null
                    })), j.promise
                }

                function i(a, b) {
                    if (Ed.isObject(b)) {
                        var c = k(b.from || {}, b.to || {});
                        a.css(c)
                    }
                }
                var j;
                return {
                    animate: function(a, b, c) {
                        return i(a, {
                            from: b,
                            to: c
                        }), h()
                    },
                    enter: function(a, b, c, d) {
                        return i(a, d), c ? c.after(a) : b.prepend(a), h()
                    },
                    leave: function(a) {
                        return a.remove(), h()
                    },
                    move: function(a, b, c, d) {
                        return this.enter(a, b, c, d)
                    },
                    addClass: function(a, b, c) {
                        return this.setClass(a, b, [], c)
                    },
                    $$addClassImmediately: function(a, b, c) {
                        return a = sd(a), b = t(b) ? b : Hd(b) ? b.join(" ") : "", f(a, function(a) {
                            sb(a, b)
                        }), i(a, c), h()
                    },
                    removeClass: function(a, b, c) {
                        return this.setClass(a, [], b, c)
                    },
                    $$removeClassImmediately: function(a, b, c) {
                        return a = sd(a), b = t(b) ? b : Hd(b) ? b.join(" ") : "", f(a, function(a) {
                            rb(a, b)
                        }), i(a, c), h()
                    },
                    setClass: function(a, b, c, f) {
                        var h = this,
                            i = !1;
                        a = sd(a);
                        var j = a.data("$$animateClasses");
                        return j ? f && j.options && (j.options = Ed.extend(j.options || {}, f)) : (j = {
                            classes: {},
                            options: f
                        }, i = !0), f = j.classes, b = Hd(b) ? b : b.split(" "), c = Hd(c) ? c : c.split(" "), g(f, b, !0), g(f, c, !1), i && (j.promise = d(function(b) {
                            var c = a.data("$$animateClasses");
                            if (a.removeData("$$animateClasses"), c) {
                                var d = e(a, c.classes);
                                d && h.$$setClassImmediately(a, d[0], d[1], c.options)
                            }
                            b()
                        }), a.data("$$animateClasses", j)), j.promise
                    },
                    $$setClassImmediately: function(a, b, c, d) {
                        return b && this.$$addClassImmediately(a, b), c && this.$$removeClassImmediately(a, c), i(a, d), h()
                    },
                    enabled: n,
                    cancel: n
                }
            }]
        }],
        le = d("$compile");
    Nb.$inject = ["$provide", "$$sanitizeUriProvider"];
    var me = /^((?:x|data)[\:\-_])/i,
        ne = d("$controller"),
        oe = "application/json",
        pe = {
            "Content-Type": oe + ";charset=utf-8"
        },
        qe = /^\[|^\{(?!\{)/,
        re = {
            "[": /]$/,
            "{": /}$/
        },
        se = /^\)\]\}',?\n/,
        te = d("$interpolate"),
        ue = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        ve = {
            http: 80,
            https: 443,
            ftp: 21
        },
        we = d("$location"),
        xe = {
            $$html5: !1,
            $$replace: !1,
            absUrl: nc("$$absUrl"),
            url: function(a) {
                if (q(a)) return this.$$url;
                var b = ue.exec(a);
                return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
            },
            protocol: nc("$$protocol"),
            host: nc("$$host"),
            port: nc("$$port"),
            path: oc("$$path", function(a) {
                return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
            }),
            search: function(a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (t(a) || u(a)) a = a.toString(), this.$$search = P(a);
                        else {
                            if (!s(a)) throw we("isrcharg");
                            a = F(a, {}), f(a, function(b, c) {
                                null == b && delete a[c]
                            }), this.$$search = a
                        }
                        break;
                    default:
                        q(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                return this.$$compose(), this
            },
            hash: oc("$$hash", function(a) {
                return null !== a ? a.toString() : ""
            }),
            replace: function() {
                return this.$$replace = !0, this
            }
        };
    f([mc, lc, kc], function(a) {
        a.prototype = Object.create(xe), a.prototype.state = function(b) {
            if (!arguments.length) return this.$$state;
            if (a !== kc || !this.$$html5) throw we("nostate");
            return this.$$state = q(b) ? null : b, this
        }
    });
    var ye = d("$parse"),
        ze = Function.prototype.call,
        Ae = Function.prototype.apply,
        Be = Function.prototype.bind,
        Ce = db();
    f({
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: function() {}
    }, function(a, b) {
        a.constant = a.literal = a.sharedGetter = !0, Ce[b] = a
    }), Ce["this"] = function(a) {
        return a
    }, Ce["this"].sharedGetter = !0;
    var De = k(db(), {
            "+": function(a, b, d, e) {
                return d = d(a, b), e = e(a, b), r(d) ? r(e) ? d + e : d : r(e) ? e : c
            },
            "-": function(a, b, c, d) {
                return c = c(a, b), d = d(a, b), (r(c) ? c : 0) - (r(d) ? d : 0)
            },
            "*": function(a, b, c, d) {
                return c(a, b) * d(a, b)
            },
            "/": function(a, b, c, d) {
                return c(a, b) / d(a, b)
            },
            "%": function(a, b, c, d) {
                return c(a, b) % d(a, b)
            },
            "===": function(a, b, c, d) {
                return c(a, b) === d(a, b)
            },
            "!==": function(a, b, c, d) {
                return c(a, b) !== d(a, b)
            },
            "==": function(a, b, c, d) {
                return c(a, b) == d(a, b)
            },
            "!=": function(a, b, c, d) {
                return c(a, b) != d(a, b)
            },
            "<": function(a, b, c, d) {
                return c(a, b) < d(a, b)
            },
            ">": function(a, b, c, d) {
                return c(a, b) > d(a, b)
            },
            "<=": function(a, b, c, d) {
                return c(a, b) <= d(a, b)
            },
            ">=": function(a, b, c, d) {
                return c(a, b) >= d(a, b)
            },
            "&&": function(a, b, c, d) {
                return c(a, b) && d(a, b)
            },
            "||": function(a, b, c, d) {
                return c(a, b) || d(a, b)
            },
            "!": function(a, b, c) {
                return !c(a, b)
            },
            "=": !0,
            "|": !0
        }),
        Ee = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "    ",
            v: "",
            "'": "'",
            '"': '"'
        },
        Fe = function(a) {
            this.options = a
        };
    Fe.prototype = {
        constructor: Fe,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;)
                if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a);
                else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdent(a)) this.readIdent();
            else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++;
            else if (this.isWhitespace(a)) this.index++;
            else {
                var b = a + this.peek(),
                    c = b + this.peek(2),
                    d = De[b],
                    e = De[c];
                De[a] || d || e ? (a = e ? c : d ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function(a, b) {
            return -1 !== b.indexOf(a)
        },
        peek: function(a) {
            return a = a || 1, this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a && "string" == typeof a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || " " === a || "\n" === a || "" === a || " " === a
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, b, c) {
            throw c = c || this.index, b = r(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c, ye("lexerr", a, b, this.text)
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var c = wd(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c;
                else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c;
                    else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                    else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: b,
                text: a,
                constant: !0,
                value: Number(a)
            })
        },
        readIdent: function() {
            for (var a = this.index; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b)) break;
                this.index++
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index),
                identifier: !0
            })
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index),
                    d = d + f;
                if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, c += String.fromCharCode(parseInt(e, 16))) : c += Ee[f] || f, e = !1;
                else if ("\\" === f) e = !0;
                else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        constant: !0,
                        value: c
                    });
                    c += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var Ge = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c
    };
    Ge.ZERO = k(function() {
        return 0
    }, {
        sharedGetter: !0,
        constant: !0
    }), Ge.prototype = {
        constructor: Ge,
        parse: function(a) {
            return this.text = a, this.tokens = this.lexer.lex(a), a = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), a.literal = !!a.literal, a.constant = !!a.constant, a
        },
        primary: function() {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in Ce ? a = Ce[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b, c; b = this.expect("(", "[", ".");) "(" === b.text ? (a = this.functionCall(a, c), c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },
        throwError: function(a, b) {
            throw ye("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw ye("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(a, b, c, d) {
            return this.peekAhead(0, a, b, c, d)
        },
        peekAhead: function(a, b, c, d, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === c || f === d || f === e || !(b || c || d || e)) return a
            }
            return !1
        },
        expect: function(a, b, c, d) {
            return (a = this.peek(a, b, c, d)) ? (this.tokens.shift(), a) : !1
        },
        consume: function(a) {
            if (0 === this.tokens.length) throw ye("ueoe", this.text);
            var b = this.expect(a);
            return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
        },
        unaryFn: function(a, b) {
            var c = De[a];
            return k(function(a, d) {
                return c(a, d, b)
            }, {
                constant: b.constant,
                inputs: [b]
            })
        },
        binaryFn: function(a, b, c, d) {
            var e = De[b];
            return k(function(b, d) {
                return e(b, d, a, c)
            }, {
                constant: a.constant && c.constant,
                inputs: !d && [a, c]
            })
        },
        identifier: function() {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;
            return yc(a, this.options, this.text)
        },
        constant: function() {
            var a = this.consume().value;
            return k(function() {
                return a
            }, {
                constant: !0,
                literal: !0
            })
        },
        statements: function() {
            for (var a = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                    for (var d, e = 0, f = a.length; f > e; e++) d = a[e](b, c);
                    return d
                }
        },
        filterChain: function() {
            for (var a = this.expression(); this.expect("|");) a = this.filter(a);
            return a
        },
        filter: function(a) {
            var b, d, e = this.$filter(this.consume().text);
            if (this.peek(":"))
                for (b = [], d = []; this.expect(":");) b.push(this.expression());
            var f = [a].concat(b || []);
            return k(function(f, g) {
                var h = a(f, g);
                if (d) {
                    for (d[0] = h, h = b.length; h--;) d[h + 1] = b[h](f, g);
                    return e.apply(c, d)
                }
                return e(h)
            }, {
                constant: !e.$stateful && f.every(tc),
                inputs: !e.$stateful && f
            })
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), k(function(b, d) {
                return c.assign(b, a(b, d), d)
            }, {
                inputs: [c, a]
            })) : c
        },
        ternary: function() {
            var a, b = this.logicalOR();
            if (this.expect("?") && (a = this.assignment(), this.consume(":"))) {
                var c = this.assignment();
                return k(function(d, e) {
                    return b(d, e) ? a(d, e) : c(d, e)
                }, {
                    constant: b.constant && a.constant && c.constant
                })
            }
            return b
        },
        logicalOR: function() {
            for (var a, b = this.logicalAND(); a = this.expect("||");) b = this.binaryFn(b, a.text, this.logicalAND(), !0);
            return b
        },
        logicalAND: function() {
            for (var a, b = this.equality(); a = this.expect("&&");) b = this.binaryFn(b, a.text, this.equality(), !0);
            return b
        },
        equality: function() {
            for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = this.binaryFn(b, a.text, this.relational());
            return b
        },
        relational: function() {
            for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = this.binaryFn(b, a.text, this.additive());
            return b
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.text, this.multiplicative());
            return b
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.text, this.unary());
            return b
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(Ge.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
        },
        fieldAccess: function(a) {
            var b = this.identifier();
            return k(function(d, e, f) {
                return d = f || a(d, e), null == d ? c : b(d)
            }, {
                assign: function(c, d, e) {
                    var f = a(c, e);
                    return f || a.assign(c, f = {}, e), b.assign(f, d)
                }
            })
        },
        objectIndex: function(a) {
            var b = this.text,
                d = this.expression();
            return this.consume("]"), k(function(e, f) {
                var g = a(e, f),
                    h = d(e, f);
                return rc(h, b), g ? sc(g[h], b) : c
            }, {
                assign: function(c, e, f) {
                    var g = rc(d(c, f), b),
                        h = sc(a(c, f), b);
                    return h || a.assign(c, h = {}, f), h[g] = e
                }
            })
        },
        functionCall: function(a, b) {
            var d = [];
            if (")" !== this.peekToken().text)
                do d.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var e = this.text,
                f = d.length ? [] : null;
            return function(g, h) {
                var i = b ? b(g, h) : r(b) ? c : g,
                    j = a(g, h, i) || n;
                if (f)
                    for (var k = d.length; k--;) f[k] = sc(d[k](g, h), e);
                if (sc(i, e), j) {
                    if (j.constructor === j) throw ye("isecfn", e);
                    if (j === ze || j === Ae || j === Be) throw ye("isecff", e)
                }
                return i = j.apply ? j.apply(i, f) : j(f[0], f[1], f[2], f[3], f[4]), f && (f.length = 0), sc(i, e)
            }
        },
        arrayDeclaration: function() {
            var a = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), k(function(b, c) {
                for (var d = [], e = 0, f = a.length; f > e; e++) d.push(a[e](b, c));
                return d
            }, {
                literal: !0,
                constant: a.every(tc),
                inputs: a
            })
        },
        object: function() {
            var a = [],
                b = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    var c = this.consume();
                    c.constant ? a.push(c.value) : c.identifier ? a.push(c.text) : this.throwError("invalid key", c), this.consume(":"), b.push(this.expression())
                } while (this.expect(","));
            return this.consume("}"), k(function(c, d) {
                for (var e = {}, f = 0, g = b.length; g > f; f++) e[a[f]] = b[f](c, d);
                return e
            }, {
                literal: !0,
                constant: b.every(tc),
                inputs: b
            })
        }
    };
    var He = db(),
        Ie = db(),
        Je = Object.prototype.valueOf,
        Ke = d("$sce"),
        Le = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        le = d("$compile"),
        Me = b.createElement("a"),
        Ne = Pc(a.location.href);
    Sc.$inject = ["$provide"], Wc.$inject = ["$locale"], Xc.$inject = ["$locale"];
    var Oe = ".",
        Pe = {
            yyyy: $c("FullYear", 4),
            yy: $c("FullYear", 2, 0, !0),
            y: $c("FullYear", 1),
            MMMM: _c("Month"),
            MMM: _c("Month", !0),
            MM: $c("Month", 2, 1),
            M: $c("Month", 1, 1),
            dd: $c("Date", 2),
            d: $c("Date", 1),
            HH: $c("Hours", 2),
            H: $c("Hours", 1),
            hh: $c("Hours", 2, -12),
            h: $c("Hours", 1, -12),
            mm: $c("Minutes", 2),
            m: $c("Minutes", 1),
            ss: $c("Seconds", 2),
            s: $c("Seconds", 1),
            sss: $c("Milliseconds", 3),
            EEEE: _c("Day"),
            EEE: _c("Day", !0),
            a: function(a, b) {
                return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
            },
            Z: function(a) {
                return a = -1 * a.getTimezoneOffset(), a = (a >= 0 ? "+" : "") + (Zc(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + Zc(Math.abs(a % 60), 2))
            },
            ww: bd(2),
            w: bd(1)
        },
        Qe = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
        Re = /^\-?\d+$/;
    cd.$inject = ["$locale"];
    var Se = p(wd),
        Te = p(yd);
    fd.$inject = ["$parse"];
    var Ue = p({
            restrict: "E",
            compile: function(a, b) {
                return b.href || b.xlinkHref || b.name ? void 0 : function(a, b) {
                    if ("a" === b[0].nodeName.toLowerCase()) {
                        var c = "[object SVGAnimatedString]" === Cd.call(b.prop("href")) ? "xlink:href" : "href";
                        b.on("click", function(a) {
                            b.attr(c) || a.preventDefault()
                        })
                    }
                }
            }
        }),
        Ve = {};
    f(be, function(a, b) {
        if ("multiple" != a) {
            var c = Ob("ng-" + b);
            Ve[c] = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    link: function(a, d, e) {
                        a.$watch(e[c], function(a) {
                            e.$set(b, !!a)
                        })
                    }
                }
            }
        }
    }), f(de, function(a, b) {
        Ve[b] = function() {
            return {
                priority: 100,
                link: function(a, c, d) {
                    return "ngPattern" === b && "/" == d.ngPattern.charAt(0) && (c = d.ngPattern.match(vd)) ? void d.$set("ngPattern", new RegExp(c[1], c[2])) : void a.$watch(d[b], function(a) {
                        d.$set(b, a)
                    })
                }
            }
        }
    }), f(["src", "srcset", "href"], function(a) {
        var b = Ob("ng-" + a);
        Ve[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a,
                        g = a;
                    "href" === a && "[object SVGAnimatedString]" === Cd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        b ? (e.$set(g, b), rd && f && d.prop(f, e[g])) : "href" === a && e.$set(g, null)
                    })
                }
            }
        }
    });
    var We = {
        $addControl: n,
        $$renameControl: function(a, b) {
            a.$name = b
        },
        $removeControl: n,
        $setValidity: n,
        $setDirty: n,
        $setPristine: n,
        $setSubmitted: n
    };
    hd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Xe = function(a) {
            return ["$timeout", function(b) {
                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    controller: hd,
                    compile: function(a) {
                        return a.addClass(Ef).addClass(Cf), {
                            pre: function(a, d, e, f) {
                                if (!("action" in e)) {
                                    var g = function(b) {
                                        a.$apply(function() {
                                            f.$commitViewValue(), f.$setSubmitted()
                                        }), b.preventDefault()
                                    };
                                    d[0].addEventListener("submit", g, !1), d.on("$destroy", function() {
                                        b(function() {
                                            d[0].removeEventListener("submit", g, !1)
                                        }, 0, !1)
                                    })
                                }
                                var h = f.$$parentForm,
                                    i = f.$name;
                                i && (uc(a, null, i, f, i), e.$observe(e.name ? "name" : "ngForm", function(b) {
                                    i !== b && (uc(a, null, i, c, i), i = b, uc(a, null, i, f, i), h.$$renameControl(f, i))
                                })), d.on("$destroy", function() {
                                    h.$removeControl(f), i && uc(a, null, i, c, i), k(f, We)
                                })
                            }
                        }
                    }
                }
            }]
        },
        Ye = Xe(),
        Ze = Xe(!0),
        $e = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        _e = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        af = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        bf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        cf = /^(\d{4})-(\d{2})-(\d{2})$/,
        df = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        ef = /^(\d{4})-W(\d\d)$/,
        ff = /^(\d{4})-(\d\d)$/,
        gf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        hf = {
            text: function(a, b, c, d, e, f) {
                jd(a, b, c, d, e, f), id(d)
            },
            date: ld("date", cf, kd(cf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": ld("datetimelocal", df, kd(df, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: ld("time", gf, kd(gf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: ld("week", ef, function(a, b) {
                if (v(a)) return a;
                if (t(a)) {
                    ef.lastIndex = 0;
                    var c = ef.exec(a);
                    if (c) {
                        var d = +c[1],
                            e = +c[2],
                            f = c = 0,
                            g = 0,
                            h = 0,
                            i = ad(d),
                            e = 7 * (e - 1);
                        return b && (c = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds()), new Date(d, 0, i.getDate() + e, c, f, g, h)
                    }
                }
                return 0 / 0
            }, "yyyy-Www"),
            month: ld("month", ff, kd(ff, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(a, b, d, e, f, g) {
                if (md(a, b, d, e), jd(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
                        return e.$isEmpty(a) ? null : bf.test(a) ? parseFloat(a) : c
                    }), e.$formatters.push(function(a) {
                        if (!e.$isEmpty(a)) {
                            if (!u(a)) throw Hf("numfmt", a);
                            a = a.toString()
                        }
                        return a
                    }), d.min || d.ngMin) {
                    var h;
                    e.$validators.min = function(a) {
                        return e.$isEmpty(a) || q(h) || a >= h
                    }, d.$observe("min", function(a) {
                        r(a) && !u(a) && (a = parseFloat(a, 10)), h = u(a) && !isNaN(a) ? a : c, e.$validate()
                    })
                }
                if (d.max || d.ngMax) {
                    var i;
                    e.$validators.max = function(a) {
                        return e.$isEmpty(a) || q(i) || i >= a
                    }, d.$observe("max", function(a) {
                        r(a) && !u(a) && (a = parseFloat(a, 10)), i = u(a) && !isNaN(a) ? a : c, e.$validate()
                    })
                }
            },
            url: function(a, b, c, d, e, f) {
                jd(a, b, c, d, e, f), id(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
                    var c = a || b;
                    return d.$isEmpty(c) || _e.test(c)
                }
            },
            email: function(a, b, c, d, e, f) {
                jd(a, b, c, d, e, f), id(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
                    var c = a || b;
                    return d.$isEmpty(c) || af.test(c)
                }
            },
            radio: function(a, b, c, d) {
                q(c.name) && b.attr("name", ++Fd), b.on("click", function(a) {
                    b[0].checked && d.$setViewValue(c.value, a && a.type)
                }), d.$render = function() {
                    b[0].checked = c.value == d.$viewValue
                }, c.$observe("value", d.$render)
            },
            checkbox: function(a, b, c, d, e, f, g, h) {
                var i = nd(h, a, "ngTrueValue", c.ngTrueValue, !0),
                    j = nd(h, a, "ngFalseValue", c.ngFalseValue, !1);
                b.on("click", function(a) {
                    d.$setViewValue(b[0].checked, a && a.type)
                }), d.$render = function() {
                    b[0].checked = d.$viewValue
                }, d.$isEmpty = function(a) {
                    return !1 === a
                }, d.$formatters.push(function(a) {
                    return H(a, i)
                }), d.$parsers.push(function(a) {
                    return a ? i : j
                })
            },
            hidden: n,
            button: n,
            submit: n,
            reset: n,
            file: n
        },
        jf = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function(e, f, g, h) {
                        h[0] && (hf[wd(g.type)] || hf.text)(e, f, g, h[0], b, a, c, d)
                    }
                }
            }
        }],
        kf = /^(true|false|\d+)$/,
        lf = function() {
            return {
                restrict: "A",
                priority: 100,
                compile: function(a, b) {
                    return kf.test(b.ngValue) ? function(a, b, c) {
                        c.$set("value", a.$eval(c.ngValue))
                    } : function(a, b, c) {
                        a.$watch(c.ngValue, function(a) {
                            c.$set("value", a)
                        })
                    }
                }
            }
        },
        mf = ["$compile", function(a) {
            return {
                restrict: "AC",
                compile: function(b) {
                    return a.$$addBindingClass(b),
                        function(b, d, e) {
                            a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function(a) {
                                d.textContent = a === c ? "" : a
                            })
                        }
                }
            }
        }],
        nf = ["$interpolate", "$compile", function(a, b) {
            return {
                compile: function(d) {
                    return b.$$addBindingClass(d),
                        function(d, e, f) {
                            d = a(e.attr(f.$attr.ngBindTemplate)), b.$$addBindingInfo(e, d.expressions), e = e[0], f.$observe("ngBindTemplate", function(a) {
                                e.textContent = a === c ? "" : a
                            })
                        }
                }
            }
        }],
        of = ["$sce", "$parse", "$compile", function(a, b, c) {
            return {
                restrict: "A",
                compile: function(d, e) {
                    var f = b(e.ngBindHtml),
                        g = b(e.ngBindHtml, function(a) {
                            return (a || "").toString()
                        });
                    return c.$$addBindingClass(d),
                        function(b, d, e) {
                            c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                                d.html(a.getTrustedHtml(f(b)) || "")
                            })
                        }
                }
            }
        }],
        pf = p({
            restrict: "A",
            require: "ngModel",
            link: function(a, b, c, d) {
                d.$viewChangeListeners.push(function() {
                    a.$eval(c.ngChange)
                })
            }
        }),
        qf = od("", !0),
        rf = od("Odd", 0),
        sf = od("Even", 1),
        tf = gd({
            compile: function(a, b) {
                b.$set("ngCloak", c), a.removeClass("ng-cloak")
            }
        }),
        uf = [function() {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        vf = {},
        wf = {
            blur: !0,
            focus: !0
        };
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = Ob("ng-" + a);
        vf[b] = ["$parse", "$rootScope", function(c, d) {
            return {
                restrict: "A",
                compile: function(e, f) {
                    var g = c(f[b], null, !0);
                    return function(b, c) {
                        c.on(a, function(c) {
                            var e = function() {
                                g(b, {
                                    $event: c
                                })
                            };
                            wf[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var xf = ["$animate", function(a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(c, d, e, f, g) {
                    var h, i, j;
                    c.$watch(e.ngIf, function(c) {
                        c ? i || g(function(c, f) {
                            i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                                clone: c
                            }, a.enter(c, d.parent(), d)
                        }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = cb(h.clone), a.leave(j).then(function() {
                            j = null
                        }), h = null))
                    })
                }
            }
        }],
        yf = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, b, c, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Ed.noop,
                compile: function(e, f) {
                    var g = f.ngInclude || f.src,
                        h = f.onload || "",
                        i = f.autoscroll;
                    return function(e, f, j, k, l) {
                        var m, n, o, p = 0,
                            q = function() {
                                n && (n.remove(), n = null), m && (m.$destroy(), m = null), o && (c.leave(o).then(function() {
                                    n = null
                                }), n = o, o = null)
                            };
                        e.$watch(d.parseAsResourceUrl(g), function(d) {
                            var g = function() {
                                    !r(i) || i && !e.$eval(i) || b()
                                },
                                j = ++p;
                            d ? (a(d, !0).then(function(a) {
                                if (j === p) {
                                    var b = e.$new();
                                    k.template = a, a = l(b, function(a) {
                                        q(), c.enter(a, null, f).then(g)
                                    }), m = b, o = a, m.$emit("$includeContentLoaded", d), e.$eval(h)
                                }
                            }, function() {
                                j === p && (q(), e.$emit("$includeContentError", d))
                            }), e.$emit("$includeContentRequested", d)) : (q(), k.template = null)
                        })
                    }
                }
            }
        }],
        zf = ["$compile", function(a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(c, d, e, f) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(ib(f.template, b).childNodes)(c, function(a) {
                        d.append(a)
                    }, {
                        futureParentElement: d
                    })) : (d.html(f.template), a(d.contents())(c))
                }
            }
        }],
        Af = gd({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, b, c) {
                        a.$eval(c.ngInit)
                    }
                }
            }
        }),
        Bf = function() {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function(a, b, d, e) {
                    var g = b.attr(d.$attr.ngList) || ", ",
                        h = "false" !== d.ngTrim,
                        i = h ? Id(g) : g;
                    e.$parsers.push(function(a) {
                        if (!q(a)) {
                            var b = [];
                            return a && f(a.split(i), function(a) {
                                a && b.push(h ? Id(a) : a)
                            }), b
                        }
                    }), e.$formatters.push(function(a) {
                        return Hd(a) ? a.join(g) : c
                    }), e.$isEmpty = function(a) {
                        return !a || !a.length
                    }
                }
            }
        },
        Cf = "ng-valid",
        Df = "ng-invalid",
        Ef = "ng-pristine",
        Ff = "ng-dirty",
        Gf = "ng-pending",
        Hf = new d("ngModel"),
        If = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
            this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a);
            var m = g(d.ngModel),
                o = m.assign,
                p = m,
                s = o,
                t = null,
                v = this;
            this.$$setOptions = function(a) {
                if ((v.$options = a) && a.getterSetter) {
                    var b = g(d.ngModel + "()"),
                        c = g(d.ngModel + "($$$p)");
                    p = function(a) {
                        var c = m(a);
                        return w(c) && (c = b(a)), c
                    }, s = function(a) {
                        w(m(a)) ? c(a, {
                            $$$p: v.$modelValue
                        }) : o(a, v.$modelValue)
                    }
                } else if (!m.assign) throw Hf("nonassign", d.ngModel, N(e))
            }, this.$render = n, this.$isEmpty = function(a) {
                return q(a) || "" === a || null === a || a !== a
            };
            var x = e.inheritedData("$formController") || We,
                y = 0;
            pd({
                ctrl: this,
                $element: e,
                set: function(a, b) {
                    a[b] = !0
                },
                unset: function(a, b) {
                    delete a[b]
                },
                parentForm: x,
                $animate: h
            }), this.$setPristine = function() {
                v.$dirty = !1, v.$pristine = !0, h.removeClass(e, Ff), h.addClass(e, Ef)
            }, this.$setDirty = function() {
                v.$dirty = !0, v.$pristine = !1, h.removeClass(e, Ef), h.addClass(e, Ff), x.$setDirty()
            }, this.$setUntouched = function() {
                v.$touched = !1, v.$untouched = !0, h.setClass(e, "ng-untouched", "ng-touched")
            }, this.$setTouched = function() {
                v.$touched = !0, v.$untouched = !1, h.setClass(e, "ng-touched", "ng-untouched")
            }, this.$rollbackViewValue = function() {
                i.cancel(t), v.$viewValue = v.$$lastCommittedViewValue, v.$render()
            }, this.$validate = function() {
                if (!u(v.$modelValue) || !isNaN(v.$modelValue)) {
                    var a = v.$$rawModelValue,
                        b = v.$valid,
                        d = v.$modelValue,
                        e = v.$options && v.$options.allowInvalid;
                    v.$$runValidators(v.$error[v.$$parserName || "parse"] ? !1 : c, a, v.$$lastCommittedViewValue, function(f) {
                        e || b === f || (v.$modelValue = f ? a : c, v.$modelValue !== d && v.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function(a, b, d, e) {
                function g() {
                    var a = !0;
                    return f(v.$validators, function(c, e) {
                        var f = c(b, d);
                        a = a && f, i(e, f)
                    }), a ? !0 : (f(v.$asyncValidators, function(a, b) {
                        i(b, null)
                    }), !1)
                }

                function h() {
                    var a = [],
                        e = !0;
                    f(v.$asyncValidators, function(f, g) {
                        var h = f(b, d);
                        if (!h || !w(h.then)) throw Hf("$asyncValidators", h);
                        i(g, c), a.push(h.then(function() {
                            i(g, !0)
                        }, function() {
                            e = !1, i(g, !1)
                        }))
                    }), a.length ? k.all(a).then(function() {
                        j(e)
                    }, n) : j(!0)
                }

                function i(a, b) {
                    l === y && v.$setValidity(a, b)
                }

                function j(a) {
                    l === y && e(a)
                }
                y++;
                var l = y;
                (function(a) {
                    var b = v.$$parserName || "parse";
                    if (a === c) i(b, null);
                    else if (i(b, a), !a) return f(v.$validators, function(a, b) {
                        i(b, null)
                    }), f(v.$asyncValidators, function(a, b) {
                        i(b, null)
                    }), !1;
                    return !0
                })(a) && g() ? h() : j(!1)
            }, this.$commitViewValue = function() {
                var a = v.$viewValue;
                i.cancel(t), (v.$$lastCommittedViewValue !== a || "" === a && v.$$hasNativeValidators) && (v.$$lastCommittedViewValue = a, v.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function() {
                var b = v.$$lastCommittedViewValue,
                    d = q(b) ? c : !0;
                if (d)
                    for (var e = 0; e < v.$parsers.length; e++)
                        if (b = v.$parsers[e](b), q(b)) {
                            d = !1;
                            break
                        }
                u(v.$modelValue) && isNaN(v.$modelValue) && (v.$modelValue = p(a));
                var f = v.$modelValue,
                    g = v.$options && v.$options.allowInvalid;
                v.$$rawModelValue = b, g && (v.$modelValue = b, v.$modelValue !== f && v.$$writeModelToScope()), v.$$runValidators(d, b, v.$$lastCommittedViewValue, function(a) {
                    g || (v.$modelValue = a ? b : c, v.$modelValue !== f && v.$$writeModelToScope())
                })
            }, this.$$writeModelToScope = function() {
                s(a, v.$modelValue), f(v.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            }, this.$setViewValue = function(a, b) {
                v.$viewValue = a, v.$options && !v.$options.updateOnDefault || v.$$debounceViewValueCommit(b)
            }, this.$$debounceViewValueCommit = function(b) {
                var c = 0,
                    d = v.$options;
                d && r(d.debounce) && (d = d.debounce, u(d) ? c = d : u(d[b]) ? c = d[b] : u(d["default"]) && (c = d["default"])), i.cancel(t), c ? t = i(function() {
                    v.$commitViewValue()
                }, c) : j.$$phase ? v.$commitViewValue() : a.$apply(function() {
                    v.$commitViewValue()
                })
            }, a.$watch(function() {
                var b = p(a);
                if (b !== v.$modelValue) {
                    v.$modelValue = v.$$rawModelValue = b;
                    for (var d = v.$formatters, e = d.length, f = b; e--;) f = d[e](f);
                    v.$viewValue !== f && (v.$viewValue = v.$$lastCommittedViewValue = f, v.$render(), v.$$runValidators(c, b, f, n))
                }
                return b
            })
        }],
        Jf = ["$rootScope", function(a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: If,
                priority: 1,
                compile: function(b) {
                    return b.addClass(Ef).addClass("ng-untouched").addClass(Cf), {
                        pre: function(a, b, c, d) {
                            var e = d[0],
                                f = d[1] || We;
                            e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                                e.$name !== a && f.$$renameControl(e, a)
                            }), a.$on("$destroy", function() {
                                f.$removeControl(e)
                            })
                        },
                        post: function(b, c, d, e) {
                            var f = e[0];
                            f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                                f.$$debounceViewValueCommit(a && a.type)
                            }), c.on("blur", function() {
                                f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        Kf = /(\s+|^)default(\s+|$)/,
        Lf = function() {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function(a, b) {
                    var d = this;
                    this.$options = a.$eval(b.ngModelOptions), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Id(this.$options.updateOn.replace(Kf, function() {
                        return d.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        Mf = gd({
            terminal: !0,
            priority: 1e3
        }),
        Nf = ["$locale", "$interpolate", function(a, b) {
            var c = /{}/g,
                d = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA",
                link: function(e, g, h) {
                    function i(a) {
                        g.text(a || "")
                    }
                    var j, k = h.count,
                        l = h.$attr.when && g.attr(h.$attr.when),
                        m = h.offset || 0,
                        n = e.$eval(l) || {},
                        o = {},
                        l = b.startSymbol(),
                        p = b.endSymbol(),
                        q = l + k + "-" + m + p,
                        r = Ed.noop;
                    f(h, function(a, b) {
                        var c = d.exec(b);
                        c && (c = (c[1] ? "-" : "") + wd(c[2]), n[c] = g.attr(h.$attr[b]))
                    }), f(n, function(a, d) {
                        o[d] = b(a.replace(c, q))
                    }), e.$watch(k, function(b) {
                        b = parseFloat(b);
                        var c = isNaN(b);
                        c || b in n || (b = a.pluralCat(b - m)), b === j || c && isNaN(j) || (r(), r = e.$watch(o[b], i), j = b)
                    })
                }
            }
        }],
        Of = ["$parse", "$animate", function(a, g) {
            var h = d("ngRepeat"),
                i = function(a, b, c, d, e, f, g) {
                    a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function(d, j) {
                    var k = j.ngRepeat,
                        l = b.createComment(" end ngRepeat: " + k + " "),
                        m = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!m) throw h("iexp", k);
                    var n = m[1],
                        o = m[2],
                        p = m[3],
                        q = m[4],
                        m = n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!m) throw h("iidexp", n);
                    var r = m[3] || m[1],
                        s = m[2];
                    if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw h("badident", p);
                    var t, u, v, w, x = {
                        $id: Db
                    };
                    return q ? t = a(q) : (v = function(a, b) {
                            return Db(b)
                        }, w = function(a) {
                            return a
                        }),
                        function(a, b, d, j, m) {
                            t && (u = function(b, c, d) {
                                return s && (x[s] = b), x[r] = c, x.$index = d, t(a, x)
                            });
                            var n = db();
                            a.$watchCollection(o, function(d) {
                                var j, o, q, t, x, y, z, A, B, C, D = b[0],
                                    E = db();
                                if (p && (a[p] = d), e(d)) A = d, o = u || v;
                                else {
                                    o = u || w, A = [];
                                    for (C in d) d.hasOwnProperty(C) && "$" != C.charAt(0) && A.push(C);
                                    A.sort()
                                }
                                for (t = A.length, C = Array(t), j = 0; t > j; j++)
                                    if (x = d === A ? j : A[j], y = d[x], z = o(x, y, j), n[z]) B = n[z], delete n[z], E[z] = B, C[j] = B;
                                    else {
                                        if (E[z]) throw f(C, function(a) {
                                            a && a.scope && (n[a.id] = a)
                                        }), h("dupes", k, z, y);
                                        C[j] = {
                                            id: z,
                                            scope: c,
                                            clone: c
                                        }, E[z] = !0
                                    }
                                for (q in n) {
                                    if (B = n[q], z = cb(B.clone), g.leave(z), z[0].parentNode)
                                        for (j = 0, o = z.length; o > j; j++) z[j].$$NG_REMOVED = !0;
                                    B.scope.$destroy()
                                }
                                for (j = 0; t > j; j++)
                                    if (x = d === A ? j : A[j], y = d[x], B = C[j], B.scope) {
                                        q = D;
                                        do q = q.nextSibling; while (q && q.$$NG_REMOVED);
                                        B.clone[0] != q && g.move(cb(B.clone), null, sd(D)), D = B.clone[B.clone.length - 1], i(B.scope, j, r, y, s, x, t)
                                    } else m(function(a, b) {
                                        B.scope = b;
                                        var c = l.cloneNode(!1);
                                        a[a.length++] = c, g.enter(a, null, sd(D)), D = c, B.clone = a, E[B.id] = B, i(B.scope, j, r, y, s, x, t)
                                    });
                                n = E
                            })
                        }
                }
            }
        }],
        Pf = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, c, d) {
                    b.$watch(d.ngShow, function(b) {
                        a[b ? "removeClass" : "addClass"](c, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Qf = ["$animate", function(a) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function(b, c, d) {
                    b.$watch(d.ngHide, function(b) {
                        a[b ? "addClass" : "removeClass"](c, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Rf = gd(function(a, b, c) {
            a.$watchCollection(c.ngStyle, function(a, c) {
                c && a !== c && f(c, function(a, c) {
                    b.css(c, "")
                }), a && b.css(a)
            })
        }),
        Sf = ["$animate", function(a) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(c, d, e, g) {
                    var h = [],
                        i = [],
                        j = [],
                        k = [],
                        l = function(a, b) {
                            return function() {
                                a.splice(b, 1)
                            }
                        };
                    c.$watch(e.ngSwitch || e.on, function(c) {
                        var d, e;
                        for (d = 0, e = j.length; e > d; ++d) a.cancel(j[d]);
                        for (d = j.length = 0, e = k.length; e > d; ++d) {
                            var m = cb(i[d].clone);
                            k[d].$destroy(), (j[d] = a.leave(m)).then(l(j, d))
                        }
                        i.length = 0, k.length = 0, (h = g.cases["!" + c] || g.cases["?"]) && f(h, function(c) {
                            c.transclude(function(d, e) {
                                k.push(e);
                                var f = c.element;
                                d[d.length++] = b.createComment(" end ngSwitchWhen: "), i.push({
                                    clone: d
                                }), a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }],
        Tf = gd({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, c, d, e) {
                d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        Uf = gd({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, b, c, d, e) {
                d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                    transclude: e,
                    element: b
                })
            }
        }),
        Vf = gd({
            restrict: "EAC",
            link: function(a, b, c, e, f) {
                if (!f) throw d("ngTransclude")("orphan", N(b));
                f(function(a) {
                    b.empty(), b.append(a)
                })
            }
        }),
        Wf = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(b, c) {
                    "text/ng-template" == c.type && a.put(c.id, b[0].text)
                }
            }
        }],
        Xf = d("ngOptions"),
        Yf = p({
            restrict: "A",
            terminal: !0
        }),
        Zf = ["$compile", "$parse", function(a, d) {
            var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                g = {
                    $setViewValue: n
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(a, b, c) {
                    var d, e = this,
                        f = {},
                        h = g;
                    e.databound = c.ngModel, e.init = function(a, b, c) {
                        h = a, d = c
                    }, e.addOption = function(b, c) {
                        ab(b, '"option value"'), f[b] = !0, h.$viewValue == b && (a.val(b), d.parent() && d.remove()), c && c[0].hasAttribute("selected") && (c[0].selected = !0)
                    }, e.removeOption = function(a) {
                        this.hasOption(a) && (delete f[a], h.$viewValue === a && this.renderUnknownOption(a))
                    }, e.renderUnknownOption = function(b) {
                        b = "? " + Db(b) + " ?", d.val(b), a.prepend(d), a.val(b), d.prop("selected", !0)
                    }, e.hasOption = function(a) {
                        return f.hasOwnProperty(a)
                    }, b.$on("$destroy", function() {
                        e.renderUnknownOption = n
                    })
                }],
                link: function(g, h, i, j) {
                    function k(a, b, c, d) {
                        c.$render = function() {
                            var a = c.$viewValue;
                            d.hasOption(a) ? (x.parent() && x.remove(), b.val(a), "" === a && o.prop("selected", !0)) : q(a) && o ? b.val("") : d.renderUnknownOption(a)
                        }, b.on("change", function() {
                            a.$apply(function() {
                                x.parent() && x.remove(), c.$setViewValue(b.val())
                            })
                        })
                    }

                    function l(a, b, c) {
                        var d;
                        c.$render = function() {
                            var a = new Eb(c.$viewValue);
                            f(b.find("option"), function(b) {
                                b.selected = r(a.get(b.value))
                            })
                        }, a.$watch(function() {
                            H(d, c.$viewValue) || (d = G(c.$viewValue), c.$render())
                        }), b.on("change", function() {
                            a.$apply(function() {
                                var a = [];
                                f(b.find("option"), function(b) {
                                    b.selected && a.push(b.value)
                                }), c.$setViewValue(a)
                            })
                        })
                    }

                    function m(b, g, h) {
                        function i(a, c, d) {
                            return H[x] = d, A && (H[A] = c), a(b, H)
                        }

                        function j(a) {
                            var b;
                            if (p)
                                if (E && Hd(a)) {
                                    b = new Eb([]);
                                    for (var c = 0; c < a.length; c++) b.put(i(E, null, a[c]), !0)
                                } else b = new Eb(a);
                            else E && (a = i(E, null, a));
                            return function(c, d) {
                                var e;
                                return e = E ? E : z ? z : C, p ? r(b.remove(i(e, c, d))) : a === i(e, c, d)
                            }
                        }

                        function k() {
                            u || (b.$$postDigest(m), u = !0)
                        }

                        function l(a, b, c) {
                            a[b] = a[b] || 0, a[b] += c ? 1 : -1
                        }

                        function m() {
                            u = !1;
                            var a, c, d, e, k, m = {
                                    "": []
                                },
                                o = [""];
                            d = h.$viewValue, e = D(b) || [];
                            var s, x, y, z, C = A ? Object.keys(e).sort() : e,
                                I = {};
                            k = j(d);
                            var J, K, L = !1;
                            for (F = {}, z = 0; y = C.length, y > z; z++) s = z, A && (s = C[z], "$" === s.charAt(0)) || (x = e[s], a = i(B, s, x) || "", (c = m[a]) || (c = m[a] = [], o.push(a)), a = k(s, x), L = L || a, x = i(q, s, x), x = r(x) ? x : "", K = E ? E(b, H) : A ? C[z] : z, E && (F[K] = s), c.push({
                                id: K,
                                label: x,
                                selected: a
                            }));
                            for (p || (t || null === d ? m[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !L
                                }) : L || m[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                })), s = 0, C = o.length; C > s; s++) {
                                for (a = o[s], c = m[a], G.length <= s ? (d = {
                                        element: w.clone().attr("label", a),
                                        label: c.label
                                    }, e = [d], G.push(e), g.append(d.element)) : (e = G[s], d = e[0], d.label != a && d.element.attr("label", d.label = a)), L = null, z = 0, y = c.length; y > z; z++) a = c[z], (k = e[z + 1]) ? (L = k.element, k.label !== a.label && (l(I, k.label, !1), l(I, a.label, !0), L.text(k.label = a.label), L.prop("label", k.label)), k.id !== a.id && L.val(k.id = a.id), L[0].selected !== a.selected && (L.prop("selected", k.selected = a.selected), rd && L.prop("selected", k.selected))) : ("" === a.id && t ? J = t : (J = v.clone()).val(a.id).prop("selected", a.selected).attr("selected", a.selected).prop("label", a.label).text(a.label), e.push(k = {
                                    element: J,
                                    label: a.label,
                                    id: a.id,
                                    selected: a.selected
                                }), l(I, a.label, !0), L ? L.after(J) : d.element.append(J), L = J);
                                for (z++; e.length > z;) a = e.pop(), l(I, a.label, !1), a.element.remove()
                            }
                            for (; G.length > s;) {
                                for (c = G.pop(), z = 1; z < c.length; ++z) l(I, c[z].label, !1);
                                c[0].element.remove()
                            }
                            f(I, function(a, b) {
                                a > 0 ? n.addOption(b) : 0 > a && n.removeOption(b)
                            })
                        }
                        var o;
                        if (!(o = s.match(e))) throw Xf("iexp", s, N(g));
                        var q = d(o[2] || o[1]),
                            x = o[4] || o[6],
                            y = / as /.test(o[0]) && o[1],
                            z = y ? d(y) : null,
                            A = o[5],
                            B = d(o[3] || ""),
                            C = d(o[2] ? o[1] : x),
                            D = d(o[7]),
                            E = o[8] ? d(o[8]) : null,
                            F = {},
                            G = [
                                [{
                                    element: g,
                                    label: ""
                                }]
                            ],
                            H = {};
                        t && (a(t)(b), t.removeClass("ng-scope"), t.remove()), g.empty(), g.on("change", function() {
                            b.$apply(function() {
                                var a, d = D(b) || [];
                                if (p) a = [], f(g.val(), function(b) {
                                    b = E ? F[b] : b, a.push("?" === b ? c : "" === b ? null : i(z ? z : C, b, d[b]))
                                });
                                else {
                                    var e = E ? F[g.val()] : g.val();
                                    a = "?" === e ? c : "" === e ? null : i(z ? z : C, e, d[e])
                                }
                                h.$setViewValue(a), m()
                            })
                        }), h.$render = m, b.$watchCollection(D, k), b.$watchCollection(function() {
                            var a, c = D(b);
                            if (c && Hd(c)) {
                                a = Array(c.length);
                                for (var d = 0, e = c.length; e > d; d++) a[d] = i(q, d, c[d])
                            } else if (c)
                                for (d in a = {}, c) c.hasOwnProperty(d) && (a[d] = i(q, d, c[d]));
                            return a
                        }, k), p && b.$watchCollection(function() {
                            return h.$modelValue
                        }, k)
                    }
                    if (j[1]) {
                        var n = j[0];
                        j = j[1];
                        var o, p = i.multiple,
                            s = i.ngOptions,
                            t = !1,
                            u = !1,
                            v = sd(b.createElement("option")),
                            w = sd(b.createElement("optgroup")),
                            x = v.clone();
                        i = 0;
                        for (var y = h.children(), z = y.length; z > i; i++)
                            if ("" === y[i].value) {
                                o = t = y.eq(i);
                                break
                            }
                        n.init(j, t, x), p && (j.$isEmpty = function(a) {
                            return !a || 0 === a.length
                        }), s ? m(g, h, j) : p ? l(g, h, j) : k(g, h, j, n)
                    }
                }
            }
        }],
        $f = ["$interpolate", function(a) {
            var b = {
                addOption: n,
                removeOption: n
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(c, d) {
                    if (q(d.value)) {
                        var e = a(c.text(), !0);
                        e || d.$set("value", c.text())
                    }
                    return function(a, c, d) {
                        var f = c.parent(),
                            g = f.data("$selectController") || f.parent().data("$selectController");
                        g && g.databound || (g = b), e ? a.$watch(e, function(a, b) {
                            d.$set("value", a), b !== a && g.removeOption(b), g.addOption(a, c)
                        }) : g.addOption(d.value, c), c.on("$destroy", function() {
                            g.removeOption(d.value)
                        })
                    }
                }
            }
        }],
        _f = p({
            restrict: "E",
            terminal: !1
        }),
        ag = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    d && (c.required = !0, d.$validators.required = function(a, b) {
                        return !c.required || !d.$isEmpty(b)
                    }, c.$observe("required", function() {
                        d.$validate()
                    }))
                }
            }
        },
        bg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, e, f) {
                    if (f) {
                        var g, h = e.ngPattern || e.pattern;
                        e.$observe("pattern", function(a) {
                            if (t(a) && 0 < a.length && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", h, a, N(b));
                            g = a || c, f.$validate()
                        }), f.$validators.pattern = function(a) {
                            return f.$isEmpty(a) || q(g) || g.test(a)
                        }
                    }
                }
            }
        },
        cg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    if (d) {
                        var e = -1;
                        c.$observe("maxlength", function(a) {
                            a = l(a), e = isNaN(a) ? -1 : a, d.$validate()
                        }), d.$validators.maxlength = function(a, b) {
                            return 0 > e || d.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        },
        dg = function() {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function(a, b, c, d) {
                    if (d) {
                        var e = 0;
                        c.$observe("minlength", function(a) {
                            e = l(a) || 0, d.$validate()
                        }), d.$validators.minlength = function(a, b) {
                            return d.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    a.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Z(), fb(Ed), sd(b).ready(function() {
        U(b, V)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),
    function(a, b, c) {
        "use strict";

        function d(a, c) {
            c = c || {}, b.forEach(c, function(a, b) {
                delete c[b]
            });
            for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
            return c
        }
        var e = b.$$minErr("$resource"),
            f = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
        b.module("ngResource", ["ng"]).provider("$resource", function() {
            var a = this;
            this.defaults = {
                stripTrailingSlashes: !0,
                actions: {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET",
                        isArray: !0
                    },
                    remove: {
                        method: "DELETE"
                    },
                    "delete": {
                        method: "DELETE"
                    }
                }
            }, this.$get = ["$http", "$q", function(g, h) {
                function i(b, c) {
                    this.template = b, this.defaults = m({}, a.defaults, c), this.urlParams = {}
                }

                function j(p, q, r, s) {
                    function t(a, b) {
                        var d = {};
                        return b = m({}, q, b), l(b, function(b, g) {
                            o(b) && (b = b());
                            var h;
                            if (b && b.charAt && "@" == b.charAt(0)) {
                                h = a;
                                var i = b.substr(1);
                                if (null == i || "" === i || "hasOwnProperty" === i || !f.test("." + i)) throw e("badmember", i);
                                for (var i = i.split("."), j = 0, k = i.length; k > j && h !== c; j++) {
                                    var l = i[j];
                                    h = null !== h ? h[l] : c
                                }
                            } else h = b;
                            d[g] = h
                        }), d
                    }

                    function u(a) {
                        return a.resource
                    }

                    function v(a) {
                        d(a || {}, this)
                    }
                    var w = new i(p, s);
                    return r = m({}, a.defaults.actions, r), v.prototype.toJSON = function() {
                        var a = m({}, this);
                        return delete a.$promise, delete a.$resolved, a
                    }, l(r, function(a, f) {
                        var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                        v[f] = function(j, p, q, r) {
                            var s, x, y, z = {};
                            switch (arguments.length) {
                                case 4:
                                    y = r, x = q;
                                case 3:
                                case 2:
                                    if (!o(p)) {
                                        z = j, s = p, x = q;
                                        break
                                    }
                                    if (o(j)) {
                                        x = j, y = p;
                                        break
                                    }
                                    x = p, y = q;
                                case 1:
                                    o(j) ? x = j : i ? s = j : z = j;
                                    break;
                                case 0:
                                    break;
                                default:
                                    throw e("badargs", arguments.length)
                            }
                            var A = this instanceof v,
                                B = A ? s : a.isArray ? [] : new v(s),
                                C = {},
                                D = a.interceptor && a.interceptor.response || u,
                                E = a.interceptor && a.interceptor.responseError || c;
                            return l(a, function(a, b) {
                                "params" != b && "isArray" != b && "interceptor" != b && (C[b] = n(a))
                            }), i && (C.data = s), w.setUrlParams(C, m({}, t(s, a.params || {}), z), a.url), z = g(C).then(function(c) {
                                var g = c.data,
                                    h = B.$promise;
                                if (g) {
                                    if (b.isArray(g) !== !!a.isArray) throw e("badcfg", f, a.isArray ? "array" : "object", b.isArray(g) ? "array" : "object");
                                    a.isArray ? (B.length = 0, l(g, function(a) {
                                        B.push("object" == typeof a ? new v(a) : a)
                                    })) : (d(g, B), B.$promise = h)
                                }
                                return B.$resolved = !0, c.resource = B, c
                            }, function(a) {
                                return B.$resolved = !0, (y || k)(a), h.reject(a)
                            }), z = z.then(function(a) {
                                var b = D(a);
                                return (x || k)(b, a.headers), b
                            }, E), A ? z : (B.$promise = z, B.$resolved = !1, B)
                        }, v.prototype["$" + f] = function(a, b, c) {
                            return o(a) && (c = b, b = a, a = {}), a = v[f].call(this, a, this, b, c), a.$promise || a
                        }
                    }), v.bind = function(a) {
                        return j(p, m({}, q, a), r)
                    }, v
                }
                var k = b.noop,
                    l = b.forEach,
                    m = b.extend,
                    n = b.copy,
                    o = b.isFunction;
                return i.prototype = {
                    setUrlParams: function(a, c, d) {
                        var f, g, h = this,
                            i = d || h.template,
                            j = h.urlParams = {};
                        l(i.split(/\W/), function(a) {
                            if ("hasOwnProperty" === a) throw e("badname");
                            !/^\d+$/.test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(i) && (j[a] = !0)
                        }), i = i.replace(/\\:/g, ":"), c = c || {}, l(h.urlParams, function(a, d) {
                            f = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(f) && null !== f ? (g = encodeURIComponent(f).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), i = i.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
                                return g + b
                            })) : i = i.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                                return "/" == c.charAt(0) ? c : b + c
                            })
                        }), h.defaults.stripTrailingSlashes && (i = i.replace(/\/+$/, "") || "/"), i = i.replace(/\/\.(?=\w+($|\?))/, "."), a.url = i.replace(/\/\\\./, "/."), l(c, function(b, c) {
                            h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
                        })
                    }
                }, j
            }]
        })
    }(window, window.angular), angular.module("ui.bootstrap", ["ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b]) return a[b]
        }
        var e = function(d, f, g) {
                g = g || {};
                var h = a.defer(),
                    i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                    j = function() {
                        c.$apply(function() {
                            d.unbind(i, j), h.resolve(d)
                        })
                    };
                return i && d.bind(i, j), b(function() {
                    angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
                }), h.promise.cancel = function() {
                    i && d.unbind(i, j), h.reject("Transition cancelled")
                }, h.promise
            },
            f = document.createElement("trans"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            h = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(a) {
        return {
            link: function(b, c, d) {
                function e(b) {
                    function d() {
                        j === e && (j = void 0)
                    }
                    var e = a(c, b);
                    return j && j.cancel(), j = e, e.then(d, d), e
                }

                function f() {
                    k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
                        height: c[0].scrollHeight + "px"
                    }).then(g))
                }

                function g() {
                    c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
                        height: "auto"
                    })
                }

                function h() {
                    k ? (k = !1, i(), c.css({
                        height: 0
                    })) : (c.css({
                        height: c[0].scrollHeight + "px"
                    }), c[0].offsetWidth, c.removeClass("collapse in").addClass("collapsing"), e({
                        height: 0
                    }).then(i))
                }

                function i() {
                    c.removeClass("collapsing"), c.addClass("collapse")
                }
                var j, k = !0;
                b.$watch(d.collapse, function(a) {
                    a ? h() : f()
                })
            }
        }
    }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
        closeOthers: !0
    }).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
        this.groups = [], this.closeOthers = function(d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function(a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function(a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function() {
                b.removeGroup(a)
            })
        }, this.removeGroup = function(a) {
            var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
        }
    }]).directive("accordion", function() {
        return {
            restrict: "EA",
            controller: "AccordionController",
            transclude: !0,
            replace: !1,
            templateUrl: "template/accordion/accordion.html"
        }
    }).directive("accordionGroup", function() {
        return {
            require: "^accordion",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/accordion/accordion-group.html",
            scope: {
                heading: "@",
                isOpen: "=?",
                isDisabled: "=?"
            },
            controller: function() {
                this.setHeading = function(a) {
                    this.heading = a
                }
            },
            link: function(a, b, c, d) {
                d.addGroup(a), a.$watch("isOpen", function(b) {
                    b && d.closeOthers(a)
                }), a.toggleOpen = function() {
                    a.isDisabled || (a.isOpen = !a.isOpen)
                }
            }
        }
    }).directive("accordionHeading", function() {
        return {
            restrict: "EA",
            transclude: !0,
            template: "",
            replace: !0,
            require: "^accordionGroup",
            link: function(a, b, c, d, e) {
                d.setHeading(e(a, function() {}))
            }
        }
    }).directive("accordionTransclude", function() {
        return {
            require: "^accordionGroup",
            link: function(a, b, c, d) {
                a.$watch(function() {
                    return d[c.accordionTransclude]
                }, function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(a, b) {
        a.closeable = "close" in b, this.close = a.close
    }]).directive("alert", function() {
        return {
            restrict: "EA",
            controller: "AlertController",
            templateUrl: "template/alert/alert.html",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@",
                close: "&"
            }
        }
    }).directive("dismissOnTimeout", ["$timeout", function(a) {
        return {
            require: "alert",
            link: function(b, c, d, e) {
                a(function() {
                    e.close()
                }, parseInt(d.dismissOnTimeout, 10))
            }
        }
    }]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
        return function(a, b, c) {
            b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
                b.html(a || "")
            })
        }
    }), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
        activeClass: "active",
        toggleEvent: "click"
    }).controller("ButtonsController", ["buttonConfig", function(a) {
        this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
    }]).directive("btnRadio", function() {
        return {
            require: ["btnRadio", "ngModel"],
            controller: "ButtonsController",
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f.$render = function() {
                    b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
                }, b.bind(e.toggleEvent, function() {
                    var d = b.hasClass(e.activeClass);
                    (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                        f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                    })
                })
            }
        }
    }).directive("btnCheckbox", function() {
        return {
            require: ["btnCheckbox", "ngModel"],
            controller: "ButtonsController",
            link: function(a, b, c, d) {
                function e() {
                    return g(c.btnCheckboxTrue, !0)
                }

                function f() {
                    return g(c.btnCheckboxFalse, !1)
                }

                function g(b, c) {
                    var d = a.$eval(b);
                    return angular.isDefined(d) ? d : c
                }
                var h = d[0],
                    i = d[1];
                i.$render = function() {
                    b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
                }, b.bind(h.toggleEvent, function() {
                    a.$apply(function() {
                        i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition", function(a, b, c, d) {
        function e() {
            f();
            var b = +a.interval;
            !isNaN(b) && b > 0 && (h = c(g, b))
        }

        function f() {
            h && (c.cancel(h), h = null)
        }

        function g() {
            var b = +a.interval;
            i && !isNaN(b) && b > 0 ? a.next() : a.pause()
        }
        var h, i, j = this,
            k = j.slides = a.slides = [],
            l = -1;
        j.currentSlide = null;
        var m = !1;
        j.select = a.select = function(c, f) {
            function g() {
                m || (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element ? (c.$element.addClass(f), c.$element[0].offsetWidth, angular.forEach(k, function(a) {
                    angular.extend(a, {
                        direction: "",
                        entering: !1,
                        leaving: !1,
                        active: !1
                    })
                }), angular.extend(c, {
                    direction: f,
                    active: !0,
                    entering: !0
                }), angular.extend(j.currentSlide || {}, {
                    direction: f,
                    leaving: !0
                }), a.$currentTransition = d(c.$element, {}), function(b, c) {
                    a.$currentTransition.then(function() {
                        h(b, c)
                    }, function() {
                        h(b, c)
                    })
                }(c, j.currentSlide)) : h(c, j.currentSlide), j.currentSlide = c, l = i, e())
            }

            function h(b, c) {
                angular.extend(b, {
                    direction: "",
                    active: !0,
                    leaving: !1,
                    entering: !1
                }), angular.extend(c || {}, {
                    direction: "",
                    active: !1,
                    leaving: !1,
                    entering: !1
                }), a.$currentTransition = null
            }
            var i = k.indexOf(c);
            void 0 === f && (f = i > l ? "next" : "prev"), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
        }, a.$on("$destroy", function() {
            m = !0
        }), j.indexOfSlide = function(a) {
            return k.indexOf(a)
        }, a.next = function() {
            var b = (l + 1) % k.length;
            return a.$currentTransition ? void 0 : j.select(k[b], "next")
        }, a.prev = function() {
            var b = 0 > l - 1 ? k.length - 1 : l - 1;
            return a.$currentTransition ? void 0 : j.select(k[b], "prev")
        }, a.isActive = function(a) {
            return j.currentSlide === a
        }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function() {
            i || (i = !0, e())
        }, a.pause = function() {
            a.noPause || (i = !1, f())
        }, j.addSlide = function(b, c) {
            b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
        }, j.removeSlide = function(a) {
            var b = k.indexOf(a);
            k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--
        }
    }]).directive("carousel", [function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "="
            }
        }
    }]).directive("slide", function() {
        return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/carousel/slide.html",
            scope: {
                active: "=?"
            },
            link: function(a, b, c, d) {
                d.addSlide(a, b), a.$on("$destroy", function() {
                    d.removeSlide(a)
                }), a.$watch("active", function(b) {
                    b && d.select(a)
                })
            }
        }
    }), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(a, b) {
        function c(a) {
            var c = [],
                d = a.split("");
            return angular.forEach(e, function(b, e) {
                var f = a.indexOf(e);
                if (f > -1) {
                    a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                    for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                    a = a.join(""), c.push({
                        index: f,
                        apply: b.apply
                    })
                }
            }), {
                regex: new RegExp("^" + d.join("") + "$"),
                map: b(c, "index")
            }
        }

        function d(a, b, c) {
            return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
        }
        this.parsers = {};
        var e = {
            yyyy: {
                regex: "\\d{4}",
                apply: function(a) {
                    this.year = +a
                }
            },
            yy: {
                regex: "\\d{2}",
                apply: function(a) {
                    this.year = +a + 2e3
                }
            },
            y: {
                regex: "\\d{1,4}",
                apply: function(a) {
                    this.year = +a
                }
            },
            MMMM: {
                regex: a.DATETIME_FORMATS.MONTH.join("|"),
                apply: function(b) {
                    this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
                }
            },
            MMM: {
                regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
                apply: function(b) {
                    this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
                }
            },
            MM: {
                regex: "0[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1
                }
            },
            M: {
                regex: "[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1
                }
            },
            dd: {
                regex: "[0-2][0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a
                }
            },
            d: {
                regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a
                }
            },
            EEEE: {
                regex: a.DATETIME_FORMATS.DAY.join("|")
            },
            EEE: {
                regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
            }
        };
        this.parse = function(b, e) {
            if (!angular.isString(b) || !e) return b;
            e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
            var f = this.parsers[e],
                g = f.regex,
                h = f.map,
                i = b.match(g);
            if (i && i.length) {
                for (var j, k = {
                        year: 1900,
                        month: 0,
                        date: 1,
                        hours: 0
                    }, l = 1, m = i.length; m > l; l++) {
                    var n = h[l - 1];
                    n.apply && n.apply.call(k, i[l])
                }
                return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
            }
        }
    }]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
        function c(a, c) {
            return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
        }

        function d(a) {
            return "static" === (c(a, "position") || "static")
        }
        var e = function(b) {
            for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
            return e || c
        };
        return {
            position: function(b) {
                var c = this.offset(b),
                    d = {
                        top: 0,
                        left: 0
                    },
                    f = e(b[0]);
                f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
                var g = b[0].getBoundingClientRect();
                return {
                    width: g.width || b.prop("offsetWidth"),
                    height: g.height || b.prop("offsetHeight"),
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offset: function(c) {
                var d = c[0].getBoundingClientRect();
                return {
                    width: d.width || c.prop("offsetWidth"),
                    height: d.height || c.prop("offsetHeight"),
                    top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                    left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
                }
            },
            positionElements: function(a, b, c, d) {
                var e, f, g, h, i = c.split("-"),
                    j = i[0],
                    k = i[1] || "center";
                e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
                var l = {
                        center: function() {
                            return e.left + e.width / 2 - f / 2
                        },
                        left: function() {
                            return e.left
                        },
                        right: function() {
                            return e.left + e.width
                        }
                    },
                    m = {
                        center: function() {
                            return e.top + e.height / 2 - g / 2
                        },
                        top: function() {
                            return e.top
                        },
                        bottom: function() {
                            return e.top + e.height
                        }
                    };
                switch (j) {
                    case "right":
                        h = {
                            top: m[k](),
                            left: l[j]()
                        };
                        break;
                    case "left":
                        h = {
                            top: m[k](),
                            left: e.left - f
                        };
                        break;
                    case "bottom":
                        h = {
                            top: m[j](),
                            left: l[k]()
                        };
                        break;
                    default:
                        h = {
                            top: e.top - g,
                            left: l[k]()
                        }
                }
                return h
            }
        }
    }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
        formatDay: "dd",
        formatMonth: "MMMM",
        formatYear: "yyyy",
        formatDayHeader: "EEE",
        formatDayTitle: "MMMM yyyy",
        formatMonthTitle: "yyyy",
        datepickerMode: "day",
        minMode: "day",
        maxMode: "year",
        showWeeks: !0,
        startingDay: 0,
        yearRange: 20,
        minDate: null,
        maxDate: null
    }).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(a, b, c, d, e, f, g, h) {
        var i = this,
            j = {
                $setViewValue: angular.noop
            };
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function(c, e) {
            i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
        }), angular.forEach(["minDate", "maxDate"], function(d) {
            b[d] ? a.$parent.$watch(c(b[d]), function(a) {
                i[d] = a ? new Date(a) : null, i.refreshView()
            }) : i[d] = h[d] ? new Date(h[d]) : null
        }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function(b) {
            return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
        }, this.init = function(a) {
            j = a, j.$render = function() {
                i.render()
            }
        }, this.render = function() {
            if (j.$modelValue) {
                var a = new Date(j.$modelValue),
                    b = !isNaN(a);
                b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
            }
            this.refreshView()
        }, this.refreshView = function() {
            if (this.element) {
                this._refreshView();
                var a = j.$modelValue ? new Date(j.$modelValue) : null;
                j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
            }
        }, this.createDateObject = function(a, b) {
            var c = j.$modelValue ? new Date(j.$modelValue) : null;
            return {
                date: a,
                label: g(a, b),
                selected: c && 0 === this.compare(a, c),
                disabled: this.isDisabled(a),
                current: 0 === this.compare(a, new Date)
            }
        }, this.isDisabled = function(c) {
            return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
                date: c,
                mode: a.datepickerMode
            })
        }, this.split = function(a, b) {
            for (var c = []; a.length > 0;) c.push(a.splice(0, b));
            return c
        }, a.select = function(b) {
            if (a.datepickerMode === i.minMode) {
                var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
            } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
        }, a.move = function(a) {
            var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
                c = i.activeDate.getMonth() + a * (i.step.months || 0);
            i.activeDate.setFullYear(b, c, 1), i.refreshView()
        }, a.toggleMode = function(b) {
            b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
        }, a.keys = {
            13: "enter",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var k = function() {
            e(function() {
                i.element[0].focus()
            }, 0, !1)
        };
        a.$on("datepicker.focus", k), a.keydown = function(b) {
            var c = a.keys[b.which];
            if (c && !b.shiftKey && !b.altKey)
                if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
                    if (i.isDisabled(i.activeDate)) return;
                    a.select(i.activeDate), k()
                } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
        }
    }]).directive("datepicker", function() {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/datepicker.html",
            scope: {
                datepickerMode: "=?",
                dateDisabled: "&"
            },
            require: ["datepicker", "?^ngModel"],
            controller: "DatepickerController",
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f)
            }
        }
    }).directive("daypicker", ["dateFilter", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/day.html",
            require: "^datepicker",
            link: function(b, c, d, e) {
                function f(a, b) {
                    return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
                }

                function g(a, b) {
                    var c = new Array(b),
                        d = new Date(a),
                        e = 0;
                    for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                    return c
                }

                function h(a) {
                    var b = new Date(a);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var c = b.getTime();
                    return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
                }
                b.showWeeks = e.showWeeks, e.step = {
                    months: 1
                }, e.element = c;
                var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                e._refreshView = function() {
                    var c = e.activeDate.getFullYear(),
                        d = e.activeDate.getMonth(),
                        f = new Date(c, d, 1),
                        i = e.startingDay - f.getDay(),
                        j = i > 0 ? 7 - i : -i,
                        k = new Date(f);
                    j > 0 && k.setDate(-j + 1);
                    for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                        secondary: l[m].getMonth() !== d,
                        uid: b.uniqueId + "-" + m
                    });
                    b.labels = new Array(7);
                    for (var n = 0; 7 > n; n++) b.labels[n] = {
                        abbr: a(l[n].date, e.formatDayHeader),
                        full: a(l[n].date, "EEEE")
                    };
                    if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                        b.weekNumbers = [];
                        for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
                    }
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
                }, e.handleKeyDown = function(a) {
                    var b = e.activeDate.getDate();
                    if ("left" === a) b -= 1;
                    else if ("up" === a) b -= 7;
                    else if ("right" === a) b += 1;
                    else if ("down" === a) b += 7;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
                    } else "home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                    e.activeDate.setDate(b)
                }, e.refreshView()
            }
        }
    }]).directive("monthpicker", ["dateFilter", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/month.html",
            require: "^datepicker",
            link: function(b, c, d, e) {
                e.step = {
                    years: 1
                }, e.element = c, e._refreshView = function() {
                    for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                        uid: b.uniqueId + "-" + f
                    });
                    b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
                }, e.handleKeyDown = function(a) {
                    var b = e.activeDate.getMonth();
                    if ("left" === a) b -= 1;
                    else if ("up" === a) b -= 3;
                    else if ("right" === a) b += 1;
                    else if ("down" === a) b += 3;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setFullYear(c)
                    } else "home" === a ? b = 0 : "end" === a && (b = 11);
                    e.activeDate.setMonth(b)
                }, e.refreshView()
            }
        }
    }]).directive("yearpicker", ["dateFilter", function() {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/year.html",
            require: "^datepicker",
            link: function(a, b, c, d) {
                function e(a) {
                    return parseInt((a - 1) / f, 10) * f + 1
                }
                var f = d.yearRange;
                d.step = {
                    years: f
                }, d.element = b, d._refreshView = function() {
                    for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                        uid: a.uniqueId + "-" + c
                    });
                    a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
                }, d.compare = function(a, b) {
                    return a.getFullYear() - b.getFullYear()
                }, d.handleKeyDown = function(a) {
                    var b = d.activeDate.getFullYear();
                    "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
                }, d.refreshView()
            }
        }
    }]).constant("datepickerPopupConfig", {
        datepickerPopup: "yyyy-MM-dd",
        currentText: "Today",
        clearText: "Clear",
        closeText: "Done",
        closeOnDateSelection: !0,
        appendToBody: !1,
        showButtonBar: !0
    }).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(a, b, c, d, e, f, g) {
        return {
            restrict: "EA",
            require: "ngModel",
            scope: {
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                dateDisabled: "&"
            },
            link: function(h, i, j, k) {
                function l(a) {
                    return a.replace(/([A-Z])/g, function(a) {
                        return "-" + a.toLowerCase()
                    })
                }

                function m(a) {
                    if (a) {
                        if (angular.isDate(a) && !isNaN(a)) return k.$setValidity("date", !0), a;
                        if (angular.isString(a)) {
                            var b = f.parse(a, n) || new Date(a);
                            return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                        }
                        return void k.$setValidity("date", !1)
                    }
                    return k.$setValidity("date", !0), null
                }
                var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                    p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
                h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
                    return h[a + "Text"] || g[a + "Text"]
                }, j.$observe("datepickerPopup", function(a) {
                    n = a || g.datepickerPopup, k.$render()
                });
                var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                q.attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection()"
                });
                var r = angular.element(q.children()[0]);
                j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function(a, b) {
                    r.attr(l(b), a)
                }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function(a) {
                    if (j[a]) {
                        var c = b(j[a]);
                        if (h.$parent.$watch(c, function(b) {
                                h.watchData[a] = b
                            }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                            var d = c.assign;
                            h.$watch("watchData." + a, function(a, b) {
                                a !== b && d(h.$parent, a)
                            })
                        }
                    }
                }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function(a) {
                    angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
                }, i.bind("input change keyup", function() {
                    h.$apply(function() {
                        h.date = k.$modelValue
                    })
                }), k.$render = function() {
                    var a = k.$viewValue ? e(k.$viewValue, n) : "";
                    i.val(a), h.date = m(k.$modelValue)
                };
                var s = function(a) {
                        h.isOpen && a.target !== i[0] && h.$apply(function() {
                            h.isOpen = !1
                        })
                    },
                    t = function(a) {
                        h.keydown(a)
                    };
                i.bind("keydown", t), h.keydown = function(a) {
                    27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
                }, h.$watch("isOpen", function(a) {
                    a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
                }), h.select = function(a) {
                    if ("today" === a) {
                        var b = new Date;
                        angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                    }
                    h.dateSelection(a)
                }, h.close = function() {
                    h.isOpen = !1, i[0].focus()
                };
                var u = a(q)(h);
                q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function() {
                    u.remove(), i.unbind("keydown", t), c.unbind("click", s)
                })
            }
        }
    }]).directive("datepickerPopupWrap", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            templateUrl: "template/datepicker/popup.html",
            link: function(a, b) {
                b.bind("click", function(a) {
                    a.preventDefault(), a.stopPropagation()
                })
            }
        }
    }), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
        openClass: "open"
    }).service("dropdownService", ["$document", function(a) {
        var b = null;
        this.open = function(e) {
            b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
        }, this.close = function(e) {
            b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
        };
        var c = function(a) {
                if (b) {
                    var c = b.getToggleElement();
                    a && c && c[0].contains(a.target) || b.$apply(function() {
                        b.isOpen = !1
                    })
                }
            },
            d = function(a) {
                27 === a.which && (b.focusToggleElement(), c())
            }
    }]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function(a, b, c, d, e, f) {
        var g, h = this,
            i = a.$new(),
            j = d.openClass,
            k = angular.noop,
            l = b.onToggle ? c(b.onToggle) : angular.noop;
        this.init = function(d) {
            h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function(a) {
                i.isOpen = !!a
            }))
        }, this.toggle = function(a) {
            return i.isOpen = arguments.length ? !!a : !i.isOpen
        }, this.isOpen = function() {
            return i.isOpen
        }, i.getToggleElement = function() {
            return h.toggleElement
        }, i.focusToggleElement = function() {
            h.toggleElement && h.toggleElement[0].focus()
        }, i.$watch("isOpen", function(b, c) {
            f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {
                open: !!b
            })
        }), a.$on("$locationChangeSuccess", function() {
            i.isOpen = !1
        }), a.$on("$destroy", function() {
            i.$destroy()
        })
    }]).directive("dropdown", function() {
        return {
            controller: "DropdownController",
            link: function(a, b, c, d) {
                d.init(b)
            }
        }
    }).directive("dropdownToggle", function() {
        return {
            require: "?^dropdown",
            link: function(a, b, c, d) {
                if (d) {
                    d.toggleElement = b;
                    var e = function(e) {
                        e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                            d.toggle()
                        })
                    };
                    b.bind("click", e), b.attr({
                        "aria-haspopup": !0,
                        "aria-expanded": !1
                    }), a.$watch(d.isOpen, function(a) {
                        b.attr("aria-expanded", !!a)
                    }), a.$on("$destroy", function() {
                        b.unbind("click", e)
                    })
                }
            }
        }
    }), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
        return {
            createNew: function() {
                var a = [];
                return {
                    add: function(b, c) {
                        a.push({
                            key: b,
                            value: c
                        })
                    },
                    get: function(b) {
                        for (var c = 0; c < a.length; c++)
                            if (b == a[c].key) return a[c]
                    },
                    keys: function() {
                        for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                        return b
                    },
                    top: function() {
                        return a[a.length - 1]
                    },
                    remove: function(b) {
                        for (var c = -1, d = 0; d < a.length; d++)
                            if (b == a[d].key) {
                                c = d;
                                break
                            }
                        return a.splice(c, 1)[0]
                    },
                    removeTop: function() {
                        return a.splice(a.length - 1, 1)[0]
                    },
                    length: function() {
                        return a.length
                    }
                }
            }
        }
    }).directive("modalBackdrop", ["$timeout", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/modal/backdrop.html",
            link: function(b, c, d) {
                b.backdropClass = d.backdropClass || "", b.animate = !1, a(function() {
                    b.animate = !0
                })
            }
        }
    }]).directive("modalWindow", ["$modalStack", "$timeout", function(a, b) {
        return {
            restrict: "EA",
            scope: {
                index: "@",
                animate: "="
            },
            replace: !0,
            transclude: !0,
            templateUrl: function(a, b) {
                return b.templateUrl || "template/modal/window.html"
            },
            link: function(c, d, e) {
                d.addClass(e.windowClass || ""), c.size = e.size, b(function() {
                    c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
                }), c.close = function(b) {
                    var c = a.getTop();
                    c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
                }
            }
        }
    }]).directive("modalTransclude", function() {
        return {
            link: function(a, b, c, d, e) {
                e(a.$parent, function(a) {
                    b.empty(), b.append(a)
                })
            }
        }
    }).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f) {
        function g() {
            for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
            return a
        }

        function h(a) {
            var b = c.find("body").eq(0),
                d = n.get(a).value;
            n.remove(a), j(d.modalDomEl, d.modalScope, 300, function() {
                d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
            })
        }

        function i() {
            if (k && -1 == g()) {
                var a = l;
                j(k, l, 150, function() {
                    a.$destroy(), a = null
                }), k = void 0, l = void 0
            }
        }

        function j(c, d, e, f) {
            function g() {
                g.done || (g.done = !0, c.remove(), f && f())
            }
            d.animate = !1;
            var h = a.transitionEndEventName;
            if (h) {
                var i = b(g, e);
                c.bind(h, function() {
                    b.cancel(i), g(), d.$apply()
                })
            } else b(g)
        }
        var k, l, m = "modal-open",
            n = f.createNew(),
            o = {};
        return e.$watch(g, function(a) {
            l && (l.index = a)
        }), c.bind("keydown", function(a) {
            var b;
            27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
                o.dismiss(b.key, "escape key press")
            })))
        }), o.open = function(a, b) {
            n.add(a, {
                deferred: b.deferred,
                modalScope: b.scope,
                backdrop: b.backdrop,
                keyboard: b.keyboard
            });
            var f = c.find("body").eq(0),
                h = g();
            if (h >= 0 && !k) {
                l = e.$new(!0), l.index = h;
                var i = angular.element("<div modal-backdrop></div>");
                i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
            }
            var j = angular.element("<div modal-window></div>");
            j.attr({
                "template-url": b.windowTemplateUrl,
                "window-class": b.windowClass,
                size: b.size,
                index: n.length() - 1,
                animate: "animate"
            }).html(b.content);
            var o = d(j)(b.scope);
            n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
        }, o.close = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.resolve(b), h(a))
        }, o.dismiss = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.reject(b), h(a))
        }, o.dismissAll = function(a) {
            for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
        }, o.getTop = function() {
            return n.top()
        }, o
    }]).provider("$modal", function() {
        var a = {
            options: {
                backdrop: !0,
                keyboard: !0
            },
            $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(b, c, d, e, f, g, h) {
                function i(a) {
                    return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {
                        cache: f
                    }).then(function(a) {
                        return a.data
                    })
                }

                function j(a) {
                    var c = [];
                    return angular.forEach(a, function(a) {
                        (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                    }), c
                }
                var k = {};
                return k.open = function(b) {
                    var e = d.defer(),
                        f = d.defer(),
                        k = {
                            result: e.promise,
                            opened: f.promise,
                            close: function(a) {
                                h.close(k, a)
                            },
                            dismiss: function(a) {
                                h.dismiss(k, a)
                            }
                        };
                    if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                    var l = d.all([i(b)].concat(j(b.resolve)));
                    return l.then(function(a) {
                        var d = (b.scope || c).$new();
                        d.$close = k.close, d.$dismiss = k.dismiss;
                        var f, i = {},
                            j = 1;
                        b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                            i[c] = a[j++]
                        }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
                            scope: d,
                            deferred: e,
                            content: a[0],
                            backdrop: b.backdrop,
                            keyboard: b.keyboard,
                            backdropClass: b.backdropClass,
                            windowClass: b.windowClass,
                            windowTemplateUrl: b.windowTemplateUrl,
                            size: b.size
                        })
                    }, function(a) {
                        e.reject(a)
                    }), l.then(function() {
                        f.resolve(!0)
                    }, function() {
                        f.reject(!1)
                    }), k
                }, k
            }]
        };
        return a
    }), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
        var d = this,
            e = {
                $setViewValue: angular.noop
            },
            f = b.numPages ? c(b.numPages).assign : angular.noop;
        this.init = function(f, g) {
            e = f, this.config = g, e.$render = function() {
                d.render()
            }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
                d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
            }) : this.itemsPerPage = g.itemsPerPage
        }, this.calculateTotalPages = function() {
            var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
            return Math.max(b || 0, 1)
        }, this.render = function() {
            a.page = parseInt(e.$viewValue, 10) || 1
        }, a.selectPage = function(b) {
            a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
        }, a.getText = function(b) {
            return a[b + "Text"] || d.config[b + "Text"]
        }, a.noPrevious = function() {
            return 1 === a.page
        }, a.noNext = function() {
            return a.page === a.totalPages
        }, a.$watch("totalItems", function() {
            a.totalPages = d.calculateTotalPages()
        }), a.$watch("totalPages", function(b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
        })
    }]).constant("paginationConfig", {
        itemsPerPage: 10,
        boundaryLinks: !1,
        directionLinks: !0,
        firstText: "First",
        previousText: "Previous",
        nextText: "Next",
        lastText: "Last",
        rotate: !0
    }).directive("pagination", ["$parse", "paginationConfig", function(a, b) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@"
            },
            require: ["pagination", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pagination.html",
            replace: !0,
            link: function(c, d, e, f) {
                function g(a, b, c) {
                    return {
                        number: a,
                        text: b,
                        active: c
                    }
                }

                function h(a, b) {
                    var c = [],
                        d = 1,
                        e = b,
                        f = angular.isDefined(k) && b > k;
                    f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                    for (var h = d; e >= h; h++) {
                        var i = g(h, h, h === a);
                        c.push(i)
                    }
                    if (f && !l) {
                        if (d > 1) {
                            var j = g(d - 1, "...", !1);
                            c.unshift(j)
                        }
                        if (b > e) {
                            var m = g(e + 1, "...", !1);
                            c.push(m)
                        }
                    }
                    return c
                }
                var i = f[0],
                    j = f[1];
                if (j) {
                    var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                        l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                    c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                        k = parseInt(a, 10), i.render()
                    });
                    var m = i.render;
                    i.render = function() {
                        m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                    }
                }
            }
        }
    }]).constant("pagerConfig", {
        itemsPerPage: 10,
        previousText: "« Previous",
        nextText: "Next »",
        align: !0
    }).directive("pager", ["pagerConfig", function(a) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                previousText: "@",
                nextText: "@"
            },
            require: ["pager", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pager.html",
            replace: !0,
            link: function(b, c, d, e) {
                var f = e[0],
                    g = e[1];
                g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
            }
        }
    }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
        function a(a) {
            var b = /[A-Z]/g,
                c = "-";
            return a.replace(b, function(a, b) {
                return (b ? c : "") + a.toLowerCase()
            })
        }
        var b = {
                placement: "top",
                animation: !0,
                popupDelay: 0
            },
            c = {
                mouseenter: "mouseleave",
                click: "click",
                focus: "blur"
            },
            d = {};
        this.options = function(a) {
            angular.extend(d, a)
        }, this.setTriggers = function(a) {
            angular.extend(c, a)
        }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function(e, f, g, h, i, j) {
            return function(e, k, l) {
                function m(a) {
                    var b = a || n.trigger || l,
                        d = c[b] || b;
                    return {
                        show: b,
                        hide: d
                    }
                }
                var n = angular.extend({}, b, d),
                    o = a(e),
                    p = j.startSymbol(),
                    q = j.endSymbol(),
                    r = "<div " + o + '-popup title="' + p + "title" + q + '" content="' + p + "content" + q + '" placement="' + p + "placement" + q + '" animation="animation" is-open="isOpen"></div>';
                return {
                    restrict: "EA",
                    compile: function() {
                        var a = f(r);
                        return function(b, c, d) {
                            function f() {
                                D.isOpen ? l() : j()
                            }

                            function j() {
                                (!C || b.$eval(d[k + "Enable"])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function(a) {
                                    a()
                                })) : o()())
                            }

                            function l() {
                                b.$apply(function() {
                                    p()
                                })
                            }

                            function o() {
                                return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({
                                    top: 0,
                                    left: 0,
                                    display: "block"
                                }), D.$digest(), E(), D.isOpen = !0, D.$digest(), E) : angular.noop
                            }

                            function p() {
                                D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r()
                            }

                            function q() {
                                w && r(), x = D.$new(), w = a(x, function(a) {
                                    A ? h.find("body").append(a) : c.after(a)
                                })
                            }

                            function r() {
                                y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null)
                            }

                            function s() {
                                t(), u()
                            }

                            function t() {
                                var a = d[k + "Placement"];
                                D.placement = angular.isDefined(a) ? a : n.placement
                            }

                            function u() {
                                var a = d[k + "PopupDelay"],
                                    b = parseInt(a, 10);
                                D.popupDelay = isNaN(b) ? n.popupDelay : b
                            }

                            function v() {
                                var a = d[k + "Trigger"];
                                F(), B = m(a), B.show === B.hide ? c.bind(B.show, f) : (c.bind(B.show, j), c.bind(B.hide, l))
                            }
                            var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1,
                                B = m(void 0),
                                C = angular.isDefined(d[k + "Enable"]),
                                D = b.$new(!0),
                                E = function() {
                                    var a = i.positionElements(c, w, D.placement, A);
                                    a.top += "px", a.left += "px", w.css(a)
                                };
                            D.isOpen = !1, d.$observe(e, function(a) {
                                D.content = a, !a && D.isOpen && p()
                            }), d.$observe(k + "Title", function(a) {
                                D.title = a
                            });
                            var F = function() {
                                c.unbind(B.show, j), c.unbind(B.hide, l)
                            };
                            v();
                            var G = b.$eval(d[k + "Animation"]);
                            D.animation = angular.isDefined(G) ? !!G : n.animation;
                            var H = b.$eval(d[k + "AppendToBody"]);
                            A = angular.isDefined(H) ? H : A, A && b.$on("$locationChangeSuccess", function() {
                                D.isOpen && p()
                            }), b.$on("$destroy", function() {
                                g.cancel(y), g.cancel(z), F(), r(), D = null
                            })
                        }
                    }
                }
            }
        }]
    }).directive("tooltipPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-popup.html"
        }
    }).directive("tooltip", ["$tooltip", function(a) {
        return a("tooltip", "tooltip", "mouseenter")
    }]).directive("tooltipHtmlUnsafePopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
        }
    }).directive("tooltipHtmlUnsafe", ["$tooltip", function(a) {
        return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                title: "@",
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/popover/popover.html"
        }
    }).directive("popover", ["$tooltip", function(a) {
        return a("popover", "popover", "click")
    }]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
        animate: !0,
        max: 100
    }).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
        var d = this,
            e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
        this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function(b, c) {
            e || c.css({
                transition: "none"
            }), this.bars.push(b), b.$watch("value", function(c) {
                b.percent = +(100 * c / a.max).toFixed(2)
            }), b.$on("$destroy", function() {
                c = null, d.removeBar(b)
            })
        }, this.removeBar = function(a) {
            this.bars.splice(this.bars.indexOf(a), 1)
        }
    }]).directive("progress", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            require: "progress",
            scope: {},
            templateUrl: "template/progressbar/progress.html"
        }
    }).directive("bar", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: "^progress",
            scope: {
                value: "=",
                type: "@"
            },
            templateUrl: "template/progressbar/bar.html",
            link: function(a, b, c, d) {
                d.addBar(a, b)
            }
        }
    }).directive("progressbar", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            scope: {
                value: "=",
                type: "@"
            },
            templateUrl: "template/progressbar/progressbar.html",
            link: function(a, b, c, d) {
                d.addBar(a, angular.element(b.children()[0]))
            }
        }
    }), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
        max: 5,
        stateOn: null,
        stateOff: null
    }).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(a, b, c) {
        var d = {
            $setViewValue: angular.noop
        };
        this.init = function(e) {
            d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
            var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
            a.range = this.buildTemplateObjects(f)
        }, this.buildTemplateObjects = function(a) {
            for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
                index: b
            }, {
                stateOn: this.stateOn,
                stateOff: this.stateOff
            }, a[b]);
            return a
        }, a.rate = function(b) {
            !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
        }, a.enter = function(b) {
            a.readonly || (a.value = b), a.onHover({
                value: b
            })
        }, a.reset = function() {
            a.value = d.$viewValue, a.onLeave()
        }, a.onKeydown = function(b) {
            /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
        }, this.render = function() {
            a.value = d.$viewValue
        }
    }]).directive("rating", function() {
        return {
            restrict: "EA",
            require: ["rating", "ngModel"],
            scope: {
                readonly: "=?",
                onHover: "&",
                onLeave: "&"
            },
            controller: "RatingController",
            templateUrl: "template/rating/rating.html",
            replace: !0,
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f)
            }
        }
    }), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(a) {
        var b = this,
            c = b.tabs = a.tabs = [];
        b.select = function(a) {
            angular.forEach(c, function(b) {
                b.active && b !== a && (b.active = !1, b.onDeselect())
            }), a.active = !0, a.onSelect()
        }, b.addTab = function(a) {
            c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
        }, b.removeTab = function(a) {
            var e = c.indexOf(a);
            if (a.active && c.length > 1 && !d) {
                var f = e == c.length - 1 ? e - 1 : e + 1;
                b.select(c[f])
            }
            c.splice(e, 1)
        };
        var d;
        a.$on("$destroy", function() {
            d = !0
        })
    }]).directive("tabset", function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@"
            },
            controller: "TabsetController",
            templateUrl: "template/tabs/tabset.html",
            link: function(a, b, c) {
                a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
            }
        }
    }).directive("tab", ["$parse", function(a) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function() {},
            compile: function(b, c, d) {
                return function(b, c, e, f) {
                    b.$watch("active", function(a) {
                        a && f.select(b)
                    }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                        b.disabled = !!a
                    }), b.select = function() {
                        b.disabled || (b.active = !0)
                    }, f.addTab(b), b.$on("$destroy", function() {
                        f.removeTab(b)
                    }), b.$transcludeFn = d
                }
            }
        }
    }]).directive("tabHeadingTransclude", [function() {
        return {
            restrict: "A",
            require: "^tab",
            link: function(a, b) {
                a.$watch("headingElement", function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }]).directive("tabContentTransclude", function() {
        function a(a) {
            return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
        }
        return {
            restrict: "A",
            require: "^tabset",
            link: function(b, c, d) {
                var e = b.$eval(d.tabContentTransclude);
                e.$transcludeFn(e.$parent, function(b) {
                    angular.forEach(b, function(b) {
                        a(b) ? e.headingElement = b : c.append(b)
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
        hourStep: 1,
        minuteStep: 1,
        showMeridian: !0,
        meridians: null,
        readonlyInput: !1,
        mousewheel: !0
    }).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(a, b, c, d, e, f) {
        function g() {
            var b = parseInt(a.hours, 10),
                c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
            return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
        }

        function h() {
            var b = parseInt(a.minutes, 10);
            return b >= 0 && 60 > b ? b : void 0
        }

        function i(a) {
            return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
        }

        function j(a) {
            k(), o.$setViewValue(new Date(n)), l(a)
        }

        function k() {
            o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
        }

        function l(b) {
            var c = n.getHours(),
                d = n.getMinutes();
            a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
        }

        function m(a) {
            var b = new Date(n.getTime() + 6e4 * a);
            n.setHours(b.getHours(), b.getMinutes()), j()
        }
        var n = new Date,
            o = {
                $setViewValue: angular.noop
            },
            p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
        this.init = function(c, d) {
            o = c, o.$render = this.render;
            var e = d.eq(0),
                g = d.eq(1),
                h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
            h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
        };
        var q = f.hourStep;
        b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
            q = parseInt(a, 10)
        });
        var r = f.minuteStep;
        b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
            r = parseInt(a, 10)
        }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
            if (a.showMeridian = !!b, o.$error.time) {
                var c = g(),
                    d = h();
                angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
            } else l()
        }), this.setupMousewheelEvents = function(b, c) {
            var d = function(a) {
                a.originalEvent && (a = a.originalEvent);
                var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
                return a.detail || b > 0
            };
            b.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
            }), c.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
            })
        }, this.setupInputEvents = function(b, c) {
            if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
            var d = function(b, c) {
                o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
            };
            a.updateHours = function() {
                var a = g();
                angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
            }, b.bind("blur", function() {
                !a.invalidHours && a.hours < 10 && a.$apply(function() {
                    a.hours = i(a.hours)
                })
            }), a.updateMinutes = function() {
                var a = h();
                angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
            }, c.bind("blur", function() {
                !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                    a.minutes = i(a.minutes)
                })
            })
        }, this.render = function() {
            var a = o.$modelValue ? new Date(o.$modelValue) : null;
            isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
        }, a.incrementHours = function() {
            m(60 * q)
        }, a.decrementHours = function() {
            m(60 * -q)
        }, a.incrementMinutes = function() {
            m(r)
        }, a.decrementMinutes = function() {
            m(-r)
        }, a.toggleMeridian = function() {
            m(720 * (n.getHours() < 12 ? 1 : -1))
        }
    }]).directive("timepicker", function() {
        return {
            restrict: "EA",
            require: ["timepicker", "?^ngModel"],
            controller: "TimepickerController",
            replace: !0,
            scope: {},
            templateUrl: "template/timepicker/timepicker.html",
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f, b.find("input"))
            }
        }
    }), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(a) {
        var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {
            parse: function(c) {
                var d = c.match(b);
                if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
                return {
                    itemName: d[3],
                    source: a(d[4]),
                    viewMapper: a(d[2] || d[1]),
                    modelMapper: a(d[1])
                }
            }
        }
    }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
        var h = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function(i, j, k, l) {
                var m, n = i.$eval(k.typeaheadMinLength) || 1,
                    o = i.$eval(k.typeaheadWaitMs) || 0,
                    p = i.$eval(k.typeaheadEditable) !== !1,
                    q = b(k.typeaheadLoading).assign || angular.noop,
                    r = b(k.typeaheadOnSelect),
                    s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                    t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                    u = i.$eval(k.typeaheadFocusFirst) !== !1,
                    v = b(k.ngModel).assign,
                    w = g.parse(k.typeahead),
                    x = i.$new();
                i.$on("$destroy", function() {
                    x.$destroy()
                });
                var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
                j.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": !1,
                    "aria-owns": y
                });
                var z = angular.element("<div typeahead-popup></div>");
                z.attr({
                    id: y,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    query: "query",
                    position: "position"
                }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
                var A = function() {
                        x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                    },
                    B = function(a) {
                        return y + "-option-" + a
                    };
                x.$watch("activeIdx", function(a) {
                    0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
                });
                var C = function(a) {
                    var b = {
                        $viewValue: a
                    };
                    q(i, !0), c.when(w.source(i, b)).then(function(c) {
                        var d = a === l.$viewValue;
                        if (d && m)
                            if (c.length > 0) {
                                x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                                for (var e = 0; e < c.length; e++) b[w.itemName] = c[e], x.matches.push({
                                    id: B(e),
                                    label: w.viewMapper(x, b),
                                    model: c[e]
                                });
                                x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                            } else A();
                        d && q(i, !1)
                    }, function() {
                        A(), q(i, !1)
                    })
                };
                A(), x.query = void 0;
                var D, E = function(a) {
                        D = d(function() {
                            C(a)
                        }, o)
                    },
                    F = function() {
                        D && d.cancel(D)
                    };
                l.$parsers.unshift(function(a) {
                    return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
                }), l.$formatters.push(function(a) {
                    var b, c, d = {};
                    return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
                }), x.select = function(a) {
                    var b, c, e = {};
                    e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), r(i, {
                        $item: c,
                        $model: b,
                        $label: w.viewMapper(i, e)
                    }), A(), d(function() {
                        j[0].focus()
                    }, 0, !1)
                }, j.bind("keydown", function(a) {
                    0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                        x.select(x.activeIdx)
                    }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
                }), j.bind("blur", function() {
                    m = !1
                });
                var G = function(a) {
                    j[0] !== a.target && (A(), x.$digest())
                };
                e.bind("click", G), i.$on("$destroy", function() {
                    e.unbind("click", G), t && H.remove()
                });
                var H = a(z)(x);
                t ? e.find("body").append(H) : j.after(H)
            }
        }
    }]).directive("typeaheadPopup", function() {
        return {
            restrict: "EA",
            scope: {
                matches: "=",
                query: "=",
                active: "=",
                position: "=",
                select: "&"
            },
            replace: !0,
            templateUrl: "template/typeahead/typeahead-popup.html",
            link: function(a, b, c) {
                a.templateUrl = c.templateUrl, a.isOpen = function() {
                    return a.matches.length > 0
                }, a.isActive = function(b) {
                    return a.active == b
                }, a.selectActive = function(b) {
                    a.active = b
                }, a.selectMatch = function(b) {
                    a.select({
                        activeIdx: b
                    })
                }
            }
        }
    }).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(a, b, c, d) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function(e, f, g) {
                var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
                a.get(h, {
                    cache: b
                }).success(function(a) {
                    f.replaceWith(c(a.trim())(e))
                })
            }
        }
    }]).filter("typeaheadHighlight", function() {
        function a(a) {
            return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        }
        return function(b, c) {
            return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
        }
    }), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b]) return a[b]
        }
        var e = function(d, f, g) {
                g = g || {};
                var h = a.defer(),
                    i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                    j = function() {
                        c.$apply(function() {
                            d.unbind(i, j), h.resolve(d)
                        })
                    };
                return i && d.bind(i, j), b(function() {
                    angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
                }), h.promise.cancel = function() {
                    i && d.unbind(i, j), h.reject("Transition cancelled")
                }, h.promise
            },
            f = document.createElement("trans"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            h = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(a) {
        return {
            link: function(b, c, d) {
                function e(b) {
                    function d() {
                        j === e && (j = void 0)
                    }
                    var e = a(c, b);
                    return j && j.cancel(), j = e, e.then(d, d), e
                }

                function f() {
                    k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
                        height: c[0].scrollHeight + "px"
                    }).then(g))
                }

                function g() {
                    c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
                        height: "auto"
                    })
                }

                function h() {
                    k ? (k = !1, i(), c.css({
                        height: 0
                    })) : (c.css({
                        height: c[0].scrollHeight + "px"
                    }), c[0].offsetWidth, c.removeClass("collapse in").addClass("collapsing"), e({
                        height: 0
                    }).then(i))
                }

                function i() {
                    c.removeClass("collapsing"), c.addClass("collapse")
                }
                var j, k = !0;
                b.$watch(d.collapse, function(a) {
                    a ? h() : f()
                })
            }
        }
    }]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
        closeOthers: !0
    }).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
        this.groups = [], this.closeOthers = function(d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function(a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function(a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function() {
                b.removeGroup(a)
            })
        }, this.removeGroup = function(a) {
            var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
        }
    }]).directive("accordion", function() {
        return {
            restrict: "EA",
            controller: "AccordionController",
            transclude: !0,
            replace: !1,
            templateUrl: "template/accordion/accordion.html"
        }
    }).directive("accordionGroup", function() {
        return {
            require: "^accordion",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/accordion/accordion-group.html",
            scope: {
                heading: "@",
                isOpen: "=?",
                isDisabled: "=?"
            },
            controller: function() {
                this.setHeading = function(a) {
                    this.heading = a
                }
            },
            link: function(a, b, c, d) {
                d.addGroup(a), a.$watch("isOpen", function(b) {
                    b && d.closeOthers(a)
                }), a.toggleOpen = function() {
                    a.isDisabled || (a.isOpen = !a.isOpen)
                }
            }
        }
    }).directive("accordionHeading", function() {
        return {
            restrict: "EA",
            transclude: !0,
            template: "",
            replace: !0,
            require: "^accordionGroup",
            link: function(a, b, c, d, e) {
                d.setHeading(e(a, function() {}))
            }
        }
    }).directive("accordionTransclude", function() {
        return {
            require: "^accordionGroup",
            link: function(a, b, c, d) {
                a.$watch(function() {
                    return d[c.accordionTransclude]
                }, function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(a, b) {
        a.closeable = "close" in b, this.close = a.close
    }]).directive("alert", function() {
        return {
            restrict: "EA",
            controller: "AlertController",
            templateUrl: "template/alert/alert.html",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@",
                close: "&"
            }
        }
    }).directive("dismissOnTimeout", ["$timeout", function(a) {
        return {
            require: "alert",
            link: function(b, c, d, e) {
                a(function() {
                    e.close()
                }, parseInt(d.dismissOnTimeout, 10))
            }
        }
    }]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
        return function(a, b, c) {
            b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
                b.html(a || "")
            })
        }
    }), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
        activeClass: "active",
        toggleEvent: "click"
    }).controller("ButtonsController", ["buttonConfig", function(a) {
        this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
    }]).directive("btnRadio", function() {
        return {
            require: ["btnRadio", "ngModel"],
            controller: "ButtonsController",
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f.$render = function() {
                    b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
                }, b.bind(e.toggleEvent, function() {
                    var d = b.hasClass(e.activeClass);
                    (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                        f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                    })
                })
            }
        }
    }).directive("btnCheckbox", function() {
        return {
            require: ["btnCheckbox", "ngModel"],
            controller: "ButtonsController",
            link: function(a, b, c, d) {
                function e() {
                    return g(c.btnCheckboxTrue, !0)
                }

                function f() {
                    return g(c.btnCheckboxFalse, !1)
                }

                function g(b, c) {
                    var d = a.$eval(b);
                    return angular.isDefined(d) ? d : c
                }
                var h = d[0],
                    i = d[1];
                i.$render = function() {
                    b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
                }, b.bind(h.toggleEvent, function() {
                    a.$apply(function() {
                        i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition", function(a, b, c, d) {
        function e() {
            f();
            var b = +a.interval;
            !isNaN(b) && b > 0 && (h = c(g, b))
        }

        function f() {
            h && (c.cancel(h), h = null)
        }

        function g() {
            var b = +a.interval;
            i && !isNaN(b) && b > 0 ? a.next() : a.pause()
        }
        var h, i, j = this,
            k = j.slides = a.slides = [],
            l = -1;
        j.currentSlide = null;
        var m = !1;
        j.select = a.select = function(c, f) {
            function g() {
                m || (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element ? (c.$element.addClass(f), c.$element[0].offsetWidth, angular.forEach(k, function(a) {
                    angular.extend(a, {
                        direction: "",
                        entering: !1,
                        leaving: !1,
                        active: !1
                    })
                }), angular.extend(c, {
                    direction: f,
                    active: !0,
                    entering: !0
                }), angular.extend(j.currentSlide || {}, {
                    direction: f,
                    leaving: !0
                }), a.$currentTransition = d(c.$element, {}), function(b, c) {
                    a.$currentTransition.then(function() {
                        h(b, c)
                    }, function() {
                        h(b, c)
                    })
                }(c, j.currentSlide)) : h(c, j.currentSlide), j.currentSlide = c, l = i, e())
            }

            function h(b, c) {
                angular.extend(b, {
                    direction: "",
                    active: !0,
                    leaving: !1,
                    entering: !1
                }), angular.extend(c || {}, {
                    direction: "",
                    active: !1,
                    leaving: !1,
                    entering: !1
                }), a.$currentTransition = null
            }
            var i = k.indexOf(c);
            void 0 === f && (f = i > l ? "next" : "prev"), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
        }, a.$on("$destroy", function() {
            m = !0
        }), j.indexOfSlide = function(a) {
            return k.indexOf(a)
        }, a.next = function() {
            var b = (l + 1) % k.length;
            return a.$currentTransition ? void 0 : j.select(k[b], "next")
        }, a.prev = function() {
            var b = 0 > l - 1 ? k.length - 1 : l - 1;
            return a.$currentTransition ? void 0 : j.select(k[b], "prev")
        }, a.isActive = function(a) {
            return j.currentSlide === a
        }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function() {
            i || (i = !0, e())
        }, a.pause = function() {
            a.noPause || (i = !1, f())
        }, j.addSlide = function(b, c) {
            b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
        }, j.removeSlide = function(a) {
            var b = k.indexOf(a);
            k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--
        }
    }]).directive("carousel", [function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "="
            }
        }
    }]).directive("slide", function() {
        return {
            require: "^carousel",
            restrict: "EA",
            transclude: !0,
            replace: !0,
            templateUrl: "template/carousel/slide.html",
            scope: {
                active: "=?"
            },
            link: function(a, b, c, d) {
                d.addSlide(a, b), a.$on("$destroy", function() {
                    d.removeSlide(a)
                }), a.$watch("active", function(b) {
                    b && d.select(a)
                })
            }
        }
    }), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(a, b) {
        function c(a) {
            var c = [],
                d = a.split("");
            return angular.forEach(e, function(b, e) {
                var f = a.indexOf(e);
                if (f > -1) {
                    a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                    for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                    a = a.join(""), c.push({
                        index: f,
                        apply: b.apply
                    })
                }
            }), {
                regex: new RegExp("^" + d.join("") + "$"),
                map: b(c, "index")
            }
        }

        function d(a, b, c) {
            return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
        }
        this.parsers = {};
        var e = {
            yyyy: {
                regex: "\\d{4}",
                apply: function(a) {
                    this.year = +a
                }
            },
            yy: {
                regex: "\\d{2}",
                apply: function(a) {
                    this.year = +a + 2e3
                }
            },
            y: {
                regex: "\\d{1,4}",
                apply: function(a) {
                    this.year = +a
                }
            },
            MMMM: {
                regex: a.DATETIME_FORMATS.MONTH.join("|"),
                apply: function(b) {
                    this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
                }
            },
            MMM: {
                regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
                apply: function(b) {
                    this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
                }
            },
            MM: {
                regex: "0[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1
                }
            },
            M: {
                regex: "[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1
                }
            },
            dd: {
                regex: "[0-2][0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a
                }
            },
            d: {
                regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a
                }
            },
            EEEE: {
                regex: a.DATETIME_FORMATS.DAY.join("|")
            },
            EEE: {
                regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
            }
        };
        this.parse = function(b, e) {
            if (!angular.isString(b) || !e) return b;
            e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
            var f = this.parsers[e],
                g = f.regex,
                h = f.map,
                i = b.match(g);
            if (i && i.length) {
                for (var j, k = {
                        year: 1900,
                        month: 0,
                        date: 1,
                        hours: 0
                    }, l = 1, m = i.length; m > l; l++) {
                    var n = h[l - 1];
                    n.apply && n.apply.call(k, i[l])
                }
                return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
            }
        }
    }]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
        function c(a, c) {
            return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
        }

        function d(a) {
            return "static" === (c(a, "position") || "static")
        }
        var e = function(b) {
            for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
            return e || c
        };
        return {
            position: function(b) {
                var c = this.offset(b),
                    d = {
                        top: 0,
                        left: 0
                    },
                    f = e(b[0]);
                f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
                var g = b[0].getBoundingClientRect();
                return {
                    width: g.width || b.prop("offsetWidth"),
                    height: g.height || b.prop("offsetHeight"),
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offset: function(c) {
                var d = c[0].getBoundingClientRect();
                return {
                    width: d.width || c.prop("offsetWidth"),
                    height: d.height || c.prop("offsetHeight"),
                    top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                    left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
                }
            },
            positionElements: function(a, b, c, d) {
                var e, f, g, h, i = c.split("-"),
                    j = i[0],
                    k = i[1] || "center";
                e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
                var l = {
                        center: function() {
                            return e.left + e.width / 2 - f / 2
                        },
                        left: function() {
                            return e.left
                        },
                        right: function() {
                            return e.left + e.width
                        }
                    },
                    m = {
                        center: function() {
                            return e.top + e.height / 2 - g / 2
                        },
                        top: function() {
                            return e.top
                        },
                        bottom: function() {
                            return e.top + e.height
                        }
                    };
                switch (j) {
                    case "right":
                        h = {
                            top: m[k](),
                            left: l[j]()
                        };
                        break;
                    case "left":
                        h = {
                            top: m[k](),
                            left: e.left - f
                        };
                        break;
                    case "bottom":
                        h = {
                            top: m[j](),
                            left: l[k]()
                        };
                        break;
                    default:
                        h = {
                            top: e.top - g,
                            left: l[k]()
                        }
                }
                return h
            }
        }
    }]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
        formatDay: "dd",
        formatMonth: "MMMM",
        formatYear: "yyyy",
        formatDayHeader: "EEE",
        formatDayTitle: "MMMM yyyy",
        formatMonthTitle: "yyyy",
        datepickerMode: "day",
        minMode: "day",
        maxMode: "year",
        showWeeks: !0,
        startingDay: 0,
        yearRange: 20,
        minDate: null,
        maxDate: null
    }).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(a, b, c, d, e, f, g, h) {
        var i = this,
            j = {
                $setViewValue: angular.noop
            };
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function(c, e) {
            i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
        }), angular.forEach(["minDate", "maxDate"], function(d) {
            b[d] ? a.$parent.$watch(c(b[d]), function(a) {
                i[d] = a ? new Date(a) : null, i.refreshView()
            }) : i[d] = h[d] ? new Date(h[d]) : null
        }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function(b) {
            return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
        }, this.init = function(a) {
            j = a, j.$render = function() {
                i.render()
            }
        }, this.render = function() {
            if (j.$modelValue) {
                var a = new Date(j.$modelValue),
                    b = !isNaN(a);
                b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
            }
            this.refreshView()
        }, this.refreshView = function() {
            if (this.element) {
                this._refreshView();
                var a = j.$modelValue ? new Date(j.$modelValue) : null;
                j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
            }
        }, this.createDateObject = function(a, b) {
            var c = j.$modelValue ? new Date(j.$modelValue) : null;
            return {
                date: a,
                label: g(a, b),
                selected: c && 0 === this.compare(a, c),
                disabled: this.isDisabled(a),
                current: 0 === this.compare(a, new Date)
            }
        }, this.isDisabled = function(c) {
            return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
                date: c,
                mode: a.datepickerMode
            })
        }, this.split = function(a, b) {
            for (var c = []; a.length > 0;) c.push(a.splice(0, b));
            return c
        }, a.select = function(b) {
            if (a.datepickerMode === i.minMode) {
                var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
            } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
        }, a.move = function(a) {
            var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
                c = i.activeDate.getMonth() + a * (i.step.months || 0);
            i.activeDate.setFullYear(b, c, 1), i.refreshView()
        }, a.toggleMode = function(b) {
            b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
        }, a.keys = {
            13: "enter",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var k = function() {
            e(function() {
                i.element[0].focus()
            }, 0, !1)
        };
        a.$on("datepicker.focus", k), a.keydown = function(b) {
            var c = a.keys[b.which];
            if (c && !b.shiftKey && !b.altKey)
                if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
                    if (i.isDisabled(i.activeDate)) return;
                    a.select(i.activeDate), k()
                } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
        }
    }]).directive("datepicker", function() {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/datepicker.html",
            scope: {
                datepickerMode: "=?",
                dateDisabled: "&"
            },
            require: ["datepicker", "?^ngModel"],
            controller: "DatepickerController",
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f)
            }
        }
    }).directive("daypicker", ["dateFilter", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/day.html",
            require: "^datepicker",
            link: function(b, c, d, e) {
                function f(a, b) {
                    return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
                }

                function g(a, b) {
                    var c = new Array(b),
                        d = new Date(a),
                        e = 0;
                    for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                    return c
                }

                function h(a) {
                    var b = new Date(a);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var c = b.getTime();
                    return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
                }
                b.showWeeks = e.showWeeks, e.step = {
                    months: 1
                }, e.element = c;
                var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                e._refreshView = function() {
                    var c = e.activeDate.getFullYear(),
                        d = e.activeDate.getMonth(),
                        f = new Date(c, d, 1),
                        i = e.startingDay - f.getDay(),
                        j = i > 0 ? 7 - i : -i,
                        k = new Date(f);
                    j > 0 && k.setDate(-j + 1);
                    for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                        secondary: l[m].getMonth() !== d,
                        uid: b.uniqueId + "-" + m
                    });
                    b.labels = new Array(7);
                    for (var n = 0; 7 > n; n++) b.labels[n] = {
                        abbr: a(l[n].date, e.formatDayHeader),
                        full: a(l[n].date, "EEEE")
                    };
                    if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                        b.weekNumbers = [];
                        for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
                    }
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
                }, e.handleKeyDown = function(a) {
                    var b = e.activeDate.getDate();
                    if ("left" === a) b -= 1;
                    else if ("up" === a) b -= 7;
                    else if ("right" === a) b += 1;
                    else if ("down" === a) b += 7;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
                    } else "home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                    e.activeDate.setDate(b)
                }, e.refreshView()
            }
        }
    }]).directive("monthpicker", ["dateFilter", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/month.html",
            require: "^datepicker",
            link: function(b, c, d, e) {
                e.step = {
                    years: 1
                }, e.element = c, e._refreshView = function() {
                    for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                        uid: b.uniqueId + "-" + f
                    });
                    b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
                }, e.handleKeyDown = function(a) {
                    var b = e.activeDate.getMonth();
                    if ("left" === a) b -= 1;
                    else if ("up" === a) b -= 3;
                    else if ("right" === a) b += 1;
                    else if ("down" === a) b += 3;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setFullYear(c)
                    } else "home" === a ? b = 0 : "end" === a && (b = 11);
                    e.activeDate.setMonth(b)
                }, e.refreshView()
            }
        }
    }]).directive("yearpicker", ["dateFilter", function() {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/year.html",
            require: "^datepicker",
            link: function(a, b, c, d) {
                function e(a) {
                    return parseInt((a - 1) / f, 10) * f + 1
                }
                var f = d.yearRange;
                d.step = {
                    years: f
                }, d.element = b, d._refreshView = function() {
                    for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                        uid: a.uniqueId + "-" + c
                    });
                    a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
                }, d.compare = function(a, b) {
                    return a.getFullYear() - b.getFullYear()
                }, d.handleKeyDown = function(a) {
                    var b = d.activeDate.getFullYear();
                    "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
                }, d.refreshView()
            }
        }
    }]).constant("datepickerPopupConfig", {
        datepickerPopup: "yyyy-MM-dd",
        currentText: "Today",
        clearText: "Clear",
        closeText: "Done",
        closeOnDateSelection: !0,
        appendToBody: !1,
        showButtonBar: !0
    }).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(a, b, c, d, e, f, g) {
        return {
            restrict: "EA",
            require: "ngModel",
            scope: {
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                dateDisabled: "&"
            },
            link: function(h, i, j, k) {
                function l(a) {
                    return a.replace(/([A-Z])/g, function(a) {
                        return "-" + a.toLowerCase()
                    })
                }

                function m(a) {
                    if (a) {
                        if (angular.isDate(a) && !isNaN(a)) return k.$setValidity("date", !0), a;
                        if (angular.isString(a)) {
                            var b = f.parse(a, n) || new Date(a);
                            return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                        }
                        return void k.$setValidity("date", !1)
                    }
                    return k.$setValidity("date", !0), null
                }
                var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                    p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
                h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
                    return h[a + "Text"] || g[a + "Text"]
                }, j.$observe("datepickerPopup", function(a) {
                    n = a || g.datepickerPopup, k.$render()
                });
                var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                q.attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection()"
                });
                var r = angular.element(q.children()[0]);
                j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function(a, b) {
                    r.attr(l(b), a)
                }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function(a) {
                    if (j[a]) {
                        var c = b(j[a]);
                        if (h.$parent.$watch(c, function(b) {
                                h.watchData[a] = b
                            }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                            var d = c.assign;
                            h.$watch("watchData." + a, function(a, b) {
                                a !== b && d(h.$parent, a)
                            })
                        }
                    }
                }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function(a) {
                    angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
                }, i.bind("input change keyup", function() {
                    h.$apply(function() {
                        h.date = k.$modelValue
                    })
                }), k.$render = function() {
                    var a = k.$viewValue ? e(k.$viewValue, n) : "";
                    i.val(a), h.date = m(k.$modelValue)
                };
                var s = function(a) {
                        h.isOpen && a.target !== i[0] && h.$apply(function() {
                            h.isOpen = !1
                        })
                    },
                    t = function(a) {
                        h.keydown(a)
                    };
                i.bind("keydown", t), h.keydown = function(a) {
                    27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
                }, h.$watch("isOpen", function(a) {
                    a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
                }), h.select = function(a) {
                    if ("today" === a) {
                        var b = new Date;
                        angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                    }
                    h.dateSelection(a)
                }, h.close = function() {
                    h.isOpen = !1, i[0].focus()
                };
                var u = a(q)(h);
                q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function() {
                    u.remove(), i.unbind("keydown", t), c.unbind("click", s)
                })
            }
        }
    }]).directive("datepickerPopupWrap", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            templateUrl: "template/datepicker/popup.html",
            link: function(a, b) {
                b.bind("click", function(a) {
                    a.preventDefault(), a.stopPropagation()
                })
            }
        }
    }), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
        openClass: "open"
    }).service("dropdownService", ["$document", function(a) {
        var b = null;
        this.open = function(e) {
            b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
        }, this.close = function(e) {
            b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
        };
        var c = function(a) {
                if (b) {
                    var c = b.getToggleElement();
                    a && c && c[0].contains(a.target) || b.$apply(function() {
                        b.isOpen = !1
                    })
                }
            },
            d = function(a) {
                27 === a.which && (b.focusToggleElement(), c())
            }
    }]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function(a, b, c, d, e, f) {
        var g, h = this,
            i = a.$new(),
            j = d.openClass,
            k = angular.noop,
            l = b.onToggle ? c(b.onToggle) : angular.noop;
        this.init = function(d) {
            h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function(a) {
                i.isOpen = !!a
            }))
        }, this.toggle = function(a) {
            return i.isOpen = arguments.length ? !!a : !i.isOpen
        }, this.isOpen = function() {
            return i.isOpen
        }, i.getToggleElement = function() {
            return h.toggleElement
        }, i.focusToggleElement = function() {
            h.toggleElement && h.toggleElement[0].focus()
        }, i.$watch("isOpen", function(b, c) {
            f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {
                open: !!b
            })
        }), a.$on("$locationChangeSuccess", function() {
            i.isOpen = !1
        }), a.$on("$destroy", function() {
            i.$destroy()
        })
    }]).directive("dropdown", function() {
        return {
            controller: "DropdownController",
            link: function(a, b, c, d) {
                d.init(b)
            }
        }
    }).directive("dropdownToggle", function() {
        return {
            require: "?^dropdown",
            link: function(a, b, c, d) {
                if (d) {
                    d.toggleElement = b;
                    var e = function(e) {
                        e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                            d.toggle()
                        })
                    };
                    b.bind("click", e), b.attr({
                        "aria-haspopup": !0,
                        "aria-expanded": !1
                    }), a.$watch(d.isOpen, function(a) {
                        b.attr("aria-expanded", !!a)
                    }), a.$on("$destroy", function() {
                        b.unbind("click", e)
                    })
                }
            }
        }
    }), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
        return {
            createNew: function() {
                var a = [];
                return {
                    add: function(b, c) {
                        a.push({
                            key: b,
                            value: c
                        })
                    },
                    get: function(b) {
                        for (var c = 0; c < a.length; c++)
                            if (b == a[c].key) return a[c]
                    },
                    keys: function() {
                        for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                        return b
                    },
                    top: function() {
                        return a[a.length - 1]
                    },
                    remove: function(b) {
                        for (var c = -1, d = 0; d < a.length; d++)
                            if (b == a[d].key) {
                                c = d;
                                break
                            }
                        return a.splice(c, 1)[0]
                    },
                    removeTop: function() {
                        return a.splice(a.length - 1, 1)[0]
                    },
                    length: function() {
                        return a.length
                    }
                }
            }
        }
    }).directive("modalBackdrop", ["$timeout", function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/modal/backdrop.html",
            link: function(b, c, d) {
                b.backdropClass = d.backdropClass || "", b.animate = !1, a(function() {
                    b.animate = !0
                })
            }
        }
    }]).directive("modalWindow", ["$modalStack", "$timeout", function(a, b) {
        return {
            restrict: "EA",
            scope: {
                index: "@",
                animate: "="
            },
            replace: !0,
            transclude: !0,
            templateUrl: function(a, b) {
                return b.templateUrl || "template/modal/window.html"
            },
            link: function(c, d, e) {
                d.addClass(e.windowClass || ""), c.size = e.size, b(function() {
                    c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
                }), c.close = function(b) {
                    var c = a.getTop();
                    c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
                }
            }
        }
    }]).directive("modalTransclude", function() {
        return {
            link: function(a, b, c, d, e) {
                e(a.$parent, function(a) {
                    b.empty(), b.append(a)
                })
            }
        }
    }).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f) {
        function g() {
            for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
            return a
        }

        function h(a) {
            var b = c.find("body").eq(0),
                d = n.get(a).value;
            n.remove(a), j(d.modalDomEl, d.modalScope, 300, function() {
                d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
            })
        }

        function i() {
            if (k && -1 == g()) {
                var a = l;
                j(k, l, 150, function() {
                    a.$destroy(), a = null
                }), k = void 0, l = void 0
            }
        }

        function j(c, d, e, f) {
            function g() {
                g.done || (g.done = !0, c.remove(), f && f())
            }
            d.animate = !1;
            var h = a.transitionEndEventName;
            if (h) {
                var i = b(g, e);
                c.bind(h, function() {
                    b.cancel(i), g(), d.$apply()
                })
            } else b(g)
        }
        var k, l, m = "modal-open",
            n = f.createNew(),
            o = {};
        return e.$watch(g, function(a) {
            l && (l.index = a)
        }), c.bind("keydown", function(a) {
            var b;
            27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
                o.dismiss(b.key, "escape key press")
            })))
        }), o.open = function(a, b) {
            n.add(a, {
                deferred: b.deferred,
                modalScope: b.scope,
                backdrop: b.backdrop,
                keyboard: b.keyboard
            });
            var f = c.find("body").eq(0),
                h = g();
            if (h >= 0 && !k) {
                l = e.$new(!0), l.index = h;
                var i = angular.element("<div modal-backdrop></div>");
                i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
            }
            var j = angular.element("<div modal-window></div>");
            j.attr({
                "template-url": b.windowTemplateUrl,
                "window-class": b.windowClass,
                size: b.size,
                index: n.length() - 1,
                animate: "animate"
            }).html(b.content);
            var o = d(j)(b.scope);
            n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
        }, o.close = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.resolve(b), h(a))
        }, o.dismiss = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.reject(b), h(a))
        }, o.dismissAll = function(a) {
            for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
        }, o.getTop = function() {
            return n.top()
        }, o
    }]).provider("$modal", function() {
        var a = {
            options: {
                backdrop: !0,
                keyboard: !0
            },
            $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(b, c, d, e, f, g, h) {
                function i(a) {
                    return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {
                        cache: f
                    }).then(function(a) {
                        return a.data
                    })
                }

                function j(a) {
                    var c = [];
                    return angular.forEach(a, function(a) {
                        (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                    }), c
                }
                var k = {};
                return k.open = function(b) {
                    var e = d.defer(),
                        f = d.defer(),
                        k = {
                            result: e.promise,
                            opened: f.promise,
                            close: function(a) {
                                h.close(k, a)
                            },
                            dismiss: function(a) {
                                h.dismiss(k, a)
                            }
                        };
                    if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                    var l = d.all([i(b)].concat(j(b.resolve)));
                    return l.then(function(a) {
                        var d = (b.scope || c).$new();
                        d.$close = k.close, d.$dismiss = k.dismiss;
                        var f, i = {},
                            j = 1;
                        b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                            i[c] = a[j++]
                        }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
                            scope: d,
                            deferred: e,
                            content: a[0],
                            backdrop: b.backdrop,
                            keyboard: b.keyboard,
                            backdropClass: b.backdropClass,
                            windowClass: b.windowClass,
                            windowTemplateUrl: b.windowTemplateUrl,
                            size: b.size
                        })
                    }, function(a) {
                        e.reject(a)
                    }), l.then(function() {
                        f.resolve(!0)
                    }, function() {
                        f.reject(!1)
                    }), k
                }, k
            }]
        };
        return a
    }), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
        var d = this,
            e = {
                $setViewValue: angular.noop
            },
            f = b.numPages ? c(b.numPages).assign : angular.noop;
        this.init = function(f, g) {
            e = f, this.config = g, e.$render = function() {
                d.render()
            }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
                d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
            }) : this.itemsPerPage = g.itemsPerPage
        }, this.calculateTotalPages = function() {
            var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
            return Math.max(b || 0, 1)
        }, this.render = function() {
            a.page = parseInt(e.$viewValue, 10) || 1
        }, a.selectPage = function(b) {
            a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
        }, a.getText = function(b) {
            return a[b + "Text"] || d.config[b + "Text"]
        }, a.noPrevious = function() {
            return 1 === a.page
        }, a.noNext = function() {
            return a.page === a.totalPages
        }, a.$watch("totalItems", function() {
            a.totalPages = d.calculateTotalPages()
        }), a.$watch("totalPages", function(b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
        })
    }]).constant("paginationConfig", {
        itemsPerPage: 10,
        boundaryLinks: !1,
        directionLinks: !0,
        firstText: "First",
        previousText: "Previous",
        nextText: "Next",
        lastText: "Last",
        rotate: !0
    }).directive("pagination", ["$parse", "paginationConfig", function(a, b) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@"
            },
            require: ["pagination", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pagination.html",
            replace: !0,
            link: function(c, d, e, f) {
                function g(a, b, c) {
                    return {
                        number: a,
                        text: b,
                        active: c
                    }
                }

                function h(a, b) {
                    var c = [],
                        d = 1,
                        e = b,
                        f = angular.isDefined(k) && b > k;
                    f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                    for (var h = d; e >= h; h++) {
                        var i = g(h, h, h === a);
                        c.push(i)
                    }
                    if (f && !l) {
                        if (d > 1) {
                            var j = g(d - 1, "...", !1);
                            c.unshift(j)
                        }
                        if (b > e) {
                            var m = g(e + 1, "...", !1);
                            c.push(m)
                        }
                    }
                    return c
                }
                var i = f[0],
                    j = f[1];
                if (j) {
                    var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                        l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                    c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                        k = parseInt(a, 10), i.render()
                    });
                    var m = i.render;
                    i.render = function() {
                        m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                    }
                }
            }
        }
    }]).constant("pagerConfig", {
        itemsPerPage: 10,
        previousText: "« Previous",
        nextText: "Next »",
        align: !0
    }).directive("pager", ["pagerConfig", function(a) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                previousText: "@",
                nextText: "@"
            },
            require: ["pager", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pager.html",
            replace: !0,
            link: function(b, c, d, e) {
                var f = e[0],
                    g = e[1];
                g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
            }
        }
    }]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
        function a(a) {
            var b = /[A-Z]/g,
                c = "-";
            return a.replace(b, function(a, b) {
                return (b ? c : "") + a.toLowerCase()
            })
        }
        var b = {
                placement: "top",
                animation: !0,
                popupDelay: 0
            },
            c = {
                mouseenter: "mouseleave",
                click: "click",
                focus: "blur"
            },
            d = {};
        this.options = function(a) {
            angular.extend(d, a)
        }, this.setTriggers = function(a) {
            angular.extend(c, a)
        }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function(e, f, g, h, i, j) {
            return function(e, k, l) {
                function m(a) {
                    var b = a || n.trigger || l,
                        d = c[b] || b;
                    return {
                        show: b,
                        hide: d
                    }
                }
                var n = angular.extend({}, b, d),
                    o = a(e),
                    p = j.startSymbol(),
                    q = j.endSymbol(),
                    r = "<div " + o + '-popup title="' + p + "title" + q + '" content="' + p + "content" + q + '" placement="' + p + "placement" + q + '" animation="animation" is-open="isOpen"></div>';
                return {
                    restrict: "EA",
                    compile: function() {
                        var a = f(r);
                        return function(b, c, d) {
                            function f() {
                                D.isOpen ? l() : j()
                            }

                            function j() {
                                (!C || b.$eval(d[k + "Enable"])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function(a) {
                                    a()
                                })) : o()())
                            }

                            function l() {
                                b.$apply(function() {
                                    p()
                                })
                            }

                            function o() {
                                return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({
                                    top: 0,
                                    left: 0,
                                    display: "block"
                                }), D.$digest(), E(), D.isOpen = !0, D.$digest(), E) : angular.noop
                            }

                            function p() {
                                D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r()
                            }

                            function q() {
                                w && r(), x = D.$new(), w = a(x, function(a) {
                                    A ? h.find("body").append(a) : c.after(a)
                                })
                            }

                            function r() {
                                y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null)
                            }

                            function s() {
                                t(), u()
                            }

                            function t() {
                                var a = d[k + "Placement"];
                                D.placement = angular.isDefined(a) ? a : n.placement
                            }

                            function u() {
                                var a = d[k + "PopupDelay"],
                                    b = parseInt(a, 10);
                                D.popupDelay = isNaN(b) ? n.popupDelay : b
                            }

                            function v() {
                                var a = d[k + "Trigger"];
                                F(), B = m(a), B.show === B.hide ? c.bind(B.show, f) : (c.bind(B.show, j), c.bind(B.hide, l))
                            }
                            var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1,
                                B = m(void 0),
                                C = angular.isDefined(d[k + "Enable"]),
                                D = b.$new(!0),
                                E = function() {
                                    var a = i.positionElements(c, w, D.placement, A);
                                    a.top += "px", a.left += "px", w.css(a)
                                };
                            D.isOpen = !1, d.$observe(e, function(a) {
                                D.content = a, !a && D.isOpen && p()
                            }), d.$observe(k + "Title", function(a) {
                                D.title = a
                            });
                            var F = function() {
                                c.unbind(B.show, j), c.unbind(B.hide, l)
                            };
                            v();
                            var G = b.$eval(d[k + "Animation"]);
                            D.animation = angular.isDefined(G) ? !!G : n.animation;
                            var H = b.$eval(d[k + "AppendToBody"]);
                            A = angular.isDefined(H) ? H : A, A && b.$on("$locationChangeSuccess", function() {
                                D.isOpen && p()
                            }), b.$on("$destroy", function() {
                                g.cancel(y), g.cancel(z), F(), r(), D = null
                            })
                        }
                    }
                }
            }
        }]
    }).directive("tooltipPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-popup.html"
        }
    }).directive("tooltip", ["$tooltip", function(a) {
        return a("tooltip", "tooltip", "mouseenter")
    }]).directive("tooltipHtmlUnsafePopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
        }
    }).directive("tooltipHtmlUnsafe", ["$tooltip", function(a) {
        return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
        return {
            restrict: "EA",
            replace: !0,
            scope: {
                title: "@",
                content: "@",
                placement: "@",
                animation: "&",
                isOpen: "&"
            },
            templateUrl: "template/popover/popover.html"
        }
    }).directive("popover", ["$tooltip", function(a) {
        return a("popover", "popover", "click")
    }]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
        animate: !0,
        max: 100
    }).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
        var d = this,
            e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
        this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function(b, c) {
            e || c.css({
                transition: "none"
            }), this.bars.push(b), b.$watch("value", function(c) {
                b.percent = +(100 * c / a.max).toFixed(2)
            }), b.$on("$destroy", function() {
                c = null, d.removeBar(b)
            })
        }, this.removeBar = function(a) {
            this.bars.splice(this.bars.indexOf(a), 1)
        }
    }]).directive("progress", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            require: "progress",
            scope: {},
            templateUrl: "template/progressbar/progress.html"
        }
    }).directive("bar", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            require: "^progress",
            scope: {
                value: "=",
                type: "@"
            },
            templateUrl: "template/progressbar/bar.html",
            link: function(a, b, c, d) {
                d.addBar(a, b)
            }
        }
    }).directive("progressbar", function() {
        return {
            restrict: "EA",
            replace: !0,
            transclude: !0,
            controller: "ProgressController",
            scope: {
                value: "=",
                type: "@"
            },
            templateUrl: "template/progressbar/progressbar.html",
            link: function(a, b, c, d) {
                d.addBar(a, angular.element(b.children()[0]))
            }
        }
    }), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
        max: 5,
        stateOn: null,
        stateOff: null
    }).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(a, b, c) {
        var d = {
            $setViewValue: angular.noop
        };
        this.init = function(e) {
            d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
            var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
            a.range = this.buildTemplateObjects(f)
        }, this.buildTemplateObjects = function(a) {
            for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
                index: b
            }, {
                stateOn: this.stateOn,
                stateOff: this.stateOff
            }, a[b]);
            return a
        }, a.rate = function(b) {
            !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
        }, a.enter = function(b) {
            a.readonly || (a.value = b), a.onHover({
                value: b
            })
        }, a.reset = function() {
            a.value = d.$viewValue, a.onLeave()
        }, a.onKeydown = function(b) {
            /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
        }, this.render = function() {
            a.value = d.$viewValue
        }
    }]).directive("rating", function() {
        return {
            restrict: "EA",
            require: ["rating", "ngModel"],
            scope: {
                readonly: "=?",
                onHover: "&",
                onLeave: "&"
            },
            controller: "RatingController",
            templateUrl: "template/rating/rating.html",
            replace: !0,
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f)
            }
        }
    }), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(a) {
        var b = this,
            c = b.tabs = a.tabs = [];
        b.select = function(a) {
            angular.forEach(c, function(b) {
                b.active && b !== a && (b.active = !1, b.onDeselect())
            }), a.active = !0, a.onSelect()
        }, b.addTab = function(a) {
            c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
        }, b.removeTab = function(a) {
            var e = c.indexOf(a);
            if (a.active && c.length > 1 && !d) {
                var f = e == c.length - 1 ? e - 1 : e + 1;
                b.select(c[f])
            }
            c.splice(e, 1)
        };
        var d;
        a.$on("$destroy", function() {
            d = !0
        })
    }]).directive("tabset", function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            scope: {
                type: "@"
            },
            controller: "TabsetController",
            templateUrl: "template/tabs/tabset.html",
            link: function(a, b, c) {
                a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
            }
        }
    }).directive("tab", ["$parse", function(a) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function() {},
            compile: function(b, c, d) {
                return function(b, c, e, f) {
                    b.$watch("active", function(a) {
                        a && f.select(b)
                    }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                        b.disabled = !!a
                    }), b.select = function() {
                        b.disabled || (b.active = !0)
                    }, f.addTab(b), b.$on("$destroy", function() {
                        f.removeTab(b)
                    }), b.$transcludeFn = d
                }
            }
        }
    }]).directive("tabHeadingTransclude", [function() {
        return {
            restrict: "A",
            require: "^tab",
            link: function(a, b) {
                a.$watch("headingElement", function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }]).directive("tabContentTransclude", function() {
        function a(a) {
            return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
        }
        return {
            restrict: "A",
            require: "^tabset",
            link: function(b, c, d) {
                var e = b.$eval(d.tabContentTransclude);
                e.$transcludeFn(e.$parent, function(b) {
                    angular.forEach(b, function(b) {
                        a(b) ? e.headingElement = b : c.append(b)
                    })
                })
            }
        }
    }), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
        hourStep: 1,
        minuteStep: 1,
        showMeridian: !0,
        meridians: null,
        readonlyInput: !1,
        mousewheel: !0
    }).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(a, b, c, d, e, f) {
        function g() {
            var b = parseInt(a.hours, 10),
                c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
            return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
        }

        function h() {
            var b = parseInt(a.minutes, 10);
            return b >= 0 && 60 > b ? b : void 0
        }

        function i(a) {
            return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
        }

        function j(a) {
            k(), o.$setViewValue(new Date(n)), l(a)
        }

        function k() {
            o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
        }

        function l(b) {
            var c = n.getHours(),
                d = n.getMinutes();
            a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
        }

        function m(a) {
            var b = new Date(n.getTime() + 6e4 * a);
            n.setHours(b.getHours(), b.getMinutes()), j()
        }
        var n = new Date,
            o = {
                $setViewValue: angular.noop
            },
            p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
        this.init = function(c, d) {
            o = c, o.$render = this.render;
            var e = d.eq(0),
                g = d.eq(1),
                h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
            h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
        };
        var q = f.hourStep;
        b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
            q = parseInt(a, 10)
        });
        var r = f.minuteStep;
        b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
            r = parseInt(a, 10)
        }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
            if (a.showMeridian = !!b, o.$error.time) {
                var c = g(),
                    d = h();
                angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
            } else l()
        }), this.setupMousewheelEvents = function(b, c) {
            var d = function(a) {
                a.originalEvent && (a = a.originalEvent);
                var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
                return a.detail || b > 0
            };
            b.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
            }), c.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
            })
        }, this.setupInputEvents = function(b, c) {
            if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
            var d = function(b, c) {
                o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
            };
            a.updateHours = function() {
                var a = g();
                angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
            }, b.bind("blur", function() {
                !a.invalidHours && a.hours < 10 && a.$apply(function() {
                    a.hours = i(a.hours)
                })
            }), a.updateMinutes = function() {
                var a = h();
                angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
            }, c.bind("blur", function() {
                !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                    a.minutes = i(a.minutes)
                })
            })
        }, this.render = function() {
            var a = o.$modelValue ? new Date(o.$modelValue) : null;
            isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
        }, a.incrementHours = function() {
            m(60 * q)
        }, a.decrementHours = function() {
            m(60 * -q)
        }, a.incrementMinutes = function() {
            m(r)
        }, a.decrementMinutes = function() {
            m(-r)
        }, a.toggleMeridian = function() {
            m(720 * (n.getHours() < 12 ? 1 : -1))
        }
    }]).directive("timepicker", function() {
        return {
            restrict: "EA",
            require: ["timepicker", "?^ngModel"],
            controller: "TimepickerController",
            replace: !0,
            scope: {},
            templateUrl: "template/timepicker/timepicker.html",
            link: function(a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f, b.find("input"))
            }
        }
    }), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(a) {
        var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {
            parse: function(c) {
                var d = c.match(b);
                if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
                return {
                    itemName: d[3],
                    source: a(d[4]),
                    viewMapper: a(d[2] || d[1]),
                    modelMapper: a(d[1])
                }
            }
        }
    }]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
        var h = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function(i, j, k, l) {
                var m, n = i.$eval(k.typeaheadMinLength) || 1,
                    o = i.$eval(k.typeaheadWaitMs) || 0,
                    p = i.$eval(k.typeaheadEditable) !== !1,
                    q = b(k.typeaheadLoading).assign || angular.noop,
                    r = b(k.typeaheadOnSelect),
                    s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                    t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                    u = i.$eval(k.typeaheadFocusFirst) !== !1,
                    v = b(k.ngModel).assign,
                    w = g.parse(k.typeahead),
                    x = i.$new();
                i.$on("$destroy", function() {
                    x.$destroy()
                });
                var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
                j.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": !1,
                    "aria-owns": y
                });
                var z = angular.element("<div typeahead-popup></div>");
                z.attr({
                    id: y,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    query: "query",
                    position: "position"
                }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
                var A = function() {
                        x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                    },
                    B = function(a) {
                        return y + "-option-" + a
                    };
                x.$watch("activeIdx", function(a) {
                    0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
                });
                var C = function(a) {
                    var b = {
                        $viewValue: a
                    };
                    q(i, !0), c.when(w.source(i, b)).then(function(c) {
                        var d = a === l.$viewValue;
                        if (d && m)
                            if (c.length > 0) {
                                x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                                for (var e = 0; e < c.length; e++) b[w.itemName] = c[e], x.matches.push({
                                    id: B(e),
                                    label: w.viewMapper(x, b),
                                    model: c[e]
                                });
                                x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                            } else A();
                        d && q(i, !1)
                    }, function() {
                        A(), q(i, !1)
                    })
                };
                A(), x.query = void 0;
                var D, E = function(a) {
                        D = d(function() {
                            C(a)
                        }, o)
                    },
                    F = function() {
                        D && d.cancel(D)
                    };
                l.$parsers.unshift(function(a) {
                    return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
                }), l.$formatters.push(function(a) {
                    var b, c, d = {};
                    return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
                }), x.select = function(a) {
                    var b, c, e = {};
                    e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), r(i, {
                        $item: c,
                        $model: b,
                        $label: w.viewMapper(i, e)
                    }), A(), d(function() {
                        j[0].focus()
                    }, 0, !1)
                }, j.bind("keydown", function(a) {
                    0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                        x.select(x.activeIdx)
                    }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
                }), j.bind("blur", function() {
                    m = !1
                });
                var G = function(a) {
                    j[0] !== a.target && (A(), x.$digest())
                };
                e.bind("click", G), i.$on("$destroy", function() {
                    e.unbind("click", G), t && H.remove()
                });
                var H = a(z)(x);
                t ? e.find("body").append(H) : j.after(H)
            }
        }
    }]).directive("typeaheadPopup", function() {
        return {
            restrict: "EA",
            scope: {
                matches: "=",
                query: "=",
                active: "=",
                position: "=",
                select: "&"
            },
            replace: !0,
            templateUrl: "template/typeahead/typeahead-popup.html",
            link: function(a, b, c) {
                a.templateUrl = c.templateUrl, a.isOpen = function() {
                    return a.matches.length > 0
                }, a.isActive = function(b) {
                    return a.active == b
                }, a.selectActive = function(b) {
                    a.active = b
                }, a.selectMatch = function(b) {
                    a.select({
                        activeIdx: b
                    })
                }
            }
        }
    }).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(a, b, c, d) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function(e, f, g) {
                var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
                a.get(h, {
                    cache: b
                }).success(function(a) {
                    f.replaceWith(c(a.trim())(e))
                })
            }
        }
    }]).filter("typeaheadHighlight", function() {
        function a(a) {
            return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        }
        return function(b, c) {
            return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
        }
    }), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
        a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n    <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
    }]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
        a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
        a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
    }]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
        a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
    }]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
        a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
    }]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
    }]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n    <li ng-transclude></li>\n   <li ng-if="showButtonBar" style="padding:10px 9px 2px">\n       <span class="btn-group pull-left">\n            <button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n            <button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n     </span>\n       <button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n')
    }]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(a) {
        a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
        a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
    }]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
        a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
    }]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
        a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
    }]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
        a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
    }]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(a) {
        a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
        a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
        a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
        a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
    }]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
        a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(a) {
        a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
    }]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
        a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
    }]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
        a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
        a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
        a.put("template/timepicker/timepicker.html", '<table>\n <tbody>\n       <tr class="text-center">\n          <td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n         <td>&nbsp;</td>\n           <td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n           <td ng-show="showMeridian"></td>\n      </tr>\n     <tr>\n          <td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n              <input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n            </td>\n         <td>:</td>\n            <td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n                <input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n         </td>\n         <td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n       </tr>\n     <tr class="text-center">\n          <td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n           <td>&nbsp;</td>\n           <td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n         <td ng-show="showMeridian"></td>\n      </tr>\n </tbody>\n</table>\n')
    }]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(a) {
        a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(a) {
        a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
    }]), ! function(a) {
        "use strict";
        a.module("ngPrettyJson", []).directive("prettyJson", ["$compile", "$templateCache", "ngPrettyJsonFunctions", function(b, c, d) {
            var e = a.isDefined;
            return {
                restrict: "AE",
                scope: {
                    json: "=",
                    prettyJson: "=",
                    onEdit: "&"
                },
                template: "<div></div>",
                replace: !0,
                link: function(f, g, h) {
                    var i = {},
                        j = null;
                    f.id = h.id || "prettyjson", f.editActivated = !1, f.edition = h.edition, f.aceEditor = void 0 !== window.ace;
                    var k = b(c.get("ng-prettyjson/ng-prettyjson-panel.tmpl.html"))(f, function(a, b) {
                        b.tmplElt = a
                    });
                    g.removeAttr("id"), g.append(k);
                    var l, m = e(h.json) ? "json" : "prettyJson",
                        n = function(a) {
                            var b = d.syntaxHighlight(a) || "";
                            return b = b.replace(/\{/g, "<span class='sep'>{</span>").replace(/\}/g, "<span class='sep'>}</span>").replace(/\[/g, "<span class='sep'>[</span>").replace(/\]/g, "<span class='sep'>]</span>").replace(/\,/g, "<span class='sep'>,</span>"), e(a) ? f.tmplElt.find("pre").html(b) : f.tmplElt.find("pre").empty()
                        };
                    l = f.$watch(m, function(b) {
                        a.isObject(b) && e(b.json) ? (l(), f.$watch(m + ".json", function(a) {
                            f.editActivated || n(a), i = a
                        }, !0)) : (f.editActivated || n(b), i = b), j && (j.removeListener("change", o), j.setValue(JSON.stringify(b, null, "   ")), j.on("change", o), j.resize())
                    }, !0);
                    var o = function() {
                        try {
                            i = JSON.parse(j.getValue()), f.parsable = !0
                        } catch (a) {
                            f.parsable = !1
                        }
                        f.$apply(function() {})
                    };
                    f.edit = function() {
                        return f.aceEditor ? (f.editActivated ? (j && (document.getElementById(f.id).env = null), n(i)) : (j = ace.edit(f.id), j.setAutoScrollEditorIntoView(!0), j.setOptions({
                            maxLines: 1 / 0
                        }), j.on("change", o), j.getSession().setMode("ace/mode/json")), void(f.editActivated = !f.editActivated)) : void(console && console.log("'ace lib is missing'"))
                    }, f.update = function() {
                        f[m] = i, f.$emit("json-updated", i), f.onEdit && f.onEdit({
                            newJson: i
                        }), this.edit()
                    }
                }
            }
        }]).factory("ngPrettyJsonFunctions", function() {
            var b = {
                    entities: /((&)|(<)|(>))/g,
                    json: /"(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|(null))\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
                },
                c = ["&amp;", "&lt;", "&gt;"],
                d = ["number", "string", "key", "boolean", "null"],
                e = function() {
                    var a = arguments.length - 2;
                    do a--; while (!arguments[a]);
                    return a
                },
                f = function(a) {
                    var b;
                    if (arguments.length < 7) throw new Error("markup() must be called from String.prototype.replace()");
                    return b = e.apply(null, arguments), '<span class="' + d[b] + '">' + a + "</span>"
                },
                g = function() {
                    var a;
                    if (arguments.length < 5) throw new Error("makeEntities() must be called from String.prototype.replace()");
                    return a = e.apply(null, arguments), c[a - 2]
                },
                h = function(c) {
                    return a.isString(c) || (c = JSON.stringify(c, null, 2)), a.isDefined(c) ? c.replace(b.entities, g).replace(b.json, f) : void 0
                };
            return {
                syntaxHighlight: h,
                makeEntities: g,
                markup: f,
                rx: b
            }
        })
    }(window.angular),
    function(a) {
        "use strict";
        a.module("ngPrettyJson").run(["$templateCache", function(a) {
            a.put("ng-prettyjson/ng-prettyjson-panel.tmpl.html", '<div><button ng-click="edit()" ng-show="edition && !editActivated">Edit</button><button ng-click="edit()" ng-show="edition && editActivated">Cancel</button><button ng-click="update()" ng-show="editActivated && parsable">Update</button><pre class="pretty-json" id="{{id}}"></pre></div>')
        }])
    }(window.angular),
    function(a) {
        "use strict";
        a(["jquery"], function(a) {
            function b(b) {
                return a.isFunction(b) || a.isPlainObject(b) ? b : {
                    top: b,
                    left: b
                }
            }
            var c = a.scrollTo = function(b, c, d) {
                return a(window).scrollTo(b, c, d)
            };
            return c.defaults = {
                axis: "xy",
                duration: 0,
                limit: !0
            }, c.window = function() {
                return a(window)._scrollable()
            }, a.fn._scrollable = function() {
                return this.map(function() {
                    var b = this,
                        c = !b.nodeName || -1 != a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                    if (!c) return b;
                    var d = (b.contentWindow || b).document || b.ownerDocument || b;
                    return /webkit/i.test(navigator.userAgent) || "BackCompat" == d.compatMode ? d.body : d.documentElement
                })
            }, a.fn.scrollTo = function(d, e, f) {
                return "object" == typeof e && (f = e, e = 0), "function" == typeof f && (f = {
                    onAfter: f
                }), "max" == d && (d = 9e9), f = a.extend({}, c.defaults, f), e = e || f.duration, f.queue = f.queue && f.axis.length > 1, f.queue && (e /= 2), f.offset = b(f.offset), f.over = b(f.over), this._scrollable().each(function() {
                    function g(a) {
                        j.animate(l, e, f.easing, a && function() {
                            a.call(this, k, f)
                        })
                    }
                    if (null != d) {
                        var h, i = this,
                            j = a(i),
                            k = d,
                            l = {},
                            m = j.is("html,body");
                        switch (typeof k) {
                            case "number":
                            case "string":
                                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)) {
                                    k = b(k);
                                    break
                                }
                                if (k = m ? a(k) : a(k, this), !k.length) return;
                            case "object":
                                (k.is || k.style) && (h = (k = a(k)).offset())
                        }
                        var n = a.isFunction(f.offset) && f.offset(i, k) || f.offset;
                        a.each(f.axis.split(""), function(a, b) {
                            var d = "x" == b ? "Left" : "Top",
                                e = d.toLowerCase(),
                                o = "scroll" + d,
                                p = i[o],
                                q = c.max(i, b);
                            if (h) l[o] = h[e] + (m ? 0 : p - j.offset()[e]), f.margin && (l[o] -= parseInt(k.css("margin" + d)) || 0, l[o] -= parseInt(k.css("border" + d + "Width")) || 0), l[o] += n[e] || 0, f.over[e] && (l[o] += k["x" == b ? "width" : "height"]() * f.over[e]);
                            else {
                                var r = k[e];
                                l[o] = r.slice && "%" == r.slice(-1) ? parseFloat(r) / 100 * q : r
                            }
                            f.limit && /^\d+$/.test(l[o]) && (l[o] = l[o] <= 0 ? 0 : Math.min(l[o], q)), !a && f.queue && (p != l[o] && g(f.onAfterFirst), delete l[o])
                        }), g(f.onAfter)
                    }
                }).end()
            }, c.max = function(b, c) {
                var d = "x" == c ? "Width" : "Height",
                    e = "scroll" + d;
                if (!a(b).is("html,body")) return b[e] - a(b)[d.toLowerCase()]();
                var f = "client" + d,
                    g = b.ownerDocument.documentElement,
                    h = b.ownerDocument.body;
                return Math.max(g[e], h[e]) - Math.min(g[f], h[f])
            }, c
        })
    }("function" == typeof define && define.amd ? define : function(a, b) {
        "undefined" != typeof module && module.exports ? module.exports = b(require("jquery")) : b(jQuery)
    }), ! function(a) {
        "use strict";
        a.expr[":"].icontains = function(b, c, d) {
            return a(b).text().toUpperCase().indexOf(d[3].toUpperCase()) >= 0
        };
        var b = function(c, d, e) {
            e && (e.stopPropagation(), e.preventDefault()), this.$element = a(c), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = a.extend({}, a.fn.selectpicker.defaults, this.$element.data(), "object" == typeof d && d), null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = b.prototype.val, this.render = b.prototype.render, this.refresh = b.prototype.refresh, this.setStyle = b.prototype.setStyle, this.selectAll = b.prototype.selectAll, this.deselectAll = b.prototype.deselectAll, this.init()
        };
        b.prototype = {
            constructor: b,
            init: function() {
                var b = this,
                    c = this.$element.attr("id");
                this.$element.hide(), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), void 0 !== c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function(a) {
                    a.preventDefault(), b.$button.focus()
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this)
            },
            createDropdown: function() {
                var b = this.multiple ? " show-tick" : "",
                    c = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    d = this.autofocus ? " autofocus" : "",
                    e = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    f = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>' : "",
                    g = this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">Select All</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">Deselect All</button></div></div>' : "",
                    h = '<div class="btn-group bootstrap-select' + b + c + '"><button type="button" class="btn dropdown-toggle selectpicker" data-toggle="dropdown"' + d + '><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">' + e + f + g + '<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';
                return a(h)
            },
            createView: function() {
                var a = this.createDropdown(),
                    b = this.createLi();
                return a.find("ul").append(b), a
            },
            reloadLi: function() {
                this.destroyLi();
                var a = this.createLi();
                this.$menu.find("ul").append(a)
            },
            destroyLi: function() {
                this.$menu.find("li").remove()
            },
            createLi: function() {
                var b = this,
                    c = [],
                    d = "";
                return this.$element.find("option").each(function() {
                    var d = a(this),
                        e = d.attr("class") || "",
                        f = d.attr("style") || "",
                        g = d.data("content") ? d.data("content") : d.html(),
                        h = void 0 !== d.data("subtext") ? '<small class="muted text-muted">' + d.data("subtext") + "</small>" : "",
                        i = void 0 !== d.data("icon") ? '<i class="' + b.options.iconBase + " " + d.data("icon") + '"></i> ' : "";
                    if ("" !== i && (d.is(":disabled") || d.parent().is(":disabled")) && (i = "<span>" + i + "</span>"), d.data("content") || (g = i + '<span class="text">' + g + h + "</span>"), b.options.hideDisabled && (d.is(":disabled") || d.parent().is(":disabled"))) c.push('<a style="min-height: 0; padding: 0"></a>');
                    else if (d.parent().is("optgroup") && d.data("divider") !== !0)
                        if (0 === d.index()) {
                            var j = d.parent().attr("label"),
                                k = void 0 !== d.parent().data("subtext") ? '<small class="muted text-muted">' + d.parent().data("subtext") + "</small>" : "",
                                l = d.parent().data("icon") ? '<i class="' + d.parent().data("icon") + '"></i> ' : "";
                            j = l + '<span class="text">' + j + k + "</span>", c.push(0 !== d[0].index ? '<div class="div-contain"><div class="divider"></div></div><dt>' + j + "</dt>" + b.createA(g, "opt " + e, f) : "<dt>" + j + "</dt>" + b.createA(g, "opt " + e, f))
                        } else c.push(b.createA(g, "opt " + e, f));
                    else c.push(d.data("divider") === !0 ? '<div class="div-contain"><div class="divider"></div></div>' : a(this).data("hidden") === !0 ? "<a></a>" : b.createA(g, e, f))
                }), a.each(c, function(a, b) {
                    var c = "<a></a>" === b ? 'class="hide is-hidden"' : "";
                    d += '<li rel="' + a + '"' + c + ">" + b + "</li>"
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), a(d)
            },
            createA: function(a, b, c) {
                return '<a tabindex="0" class="' + b + '" style="' + c + '">' + a + '<i class="' + this.options.iconBase + " " + this.options.tickIcon + ' icon-ok check-mark"></i></a>'
            },
            render: function(b) {
                var c = this;
                b !== !1 && this.$element.find("option").each(function(b) {
                    c.setDisabled(b, a(this).is(":disabled") || a(this).parent().is(":disabled")), c.setSelected(b, a(this).is(":selected"))
                }), this.tabIndex();
                var d = this.$element.find("option:selected").map(function() {
                        var b, d = a(this),
                            e = d.data("icon") && c.options.showIcon ? '<i class="' + c.options.iconBase + " " + d.data("icon") + '"></i> ' : "";
                        return b = c.options.showSubtext && d.attr("data-subtext") && !c.multiple ? ' <small class="muted text-muted">' + d.data("subtext") + "</small>" : "", d.data("content") && c.options.showContent ? d.data("content") : void 0 !== d.attr("title") ? d.attr("title") : e + d.html() + b
                    }).toArray(),
                    e = this.multiple ? d.join(this.options.multipleSeparator) : d[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var f = this.options.selectedTextFormat.split(">"),
                        g = this.options.hideDisabled ? ":not([disabled])" : "";
                    (f.length > 1 && d.length > f[1] || 1 == f.length && d.length >= 2) && (e = this.options.countSelectedText.replace("{0}", d.length).replace("{1}", this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])' + g).length))
                }
                this.options.title = this.$element.attr("title"), e || (e = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(e)), this.$newElement.find(".filter-option").html(e)
            },
            setStyle: function(a, b) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi, ""));
                var c = a ? a : this.options.style;
                "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
            },
            liHeight: function() {
                if (this.options.size !== !1) {
                    var a = this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus", !1).end().appendTo("body"),
                        b = a.addClass("open").find("> .dropdown-menu"),
                        c = b.find("li > a").outerHeight(),
                        d = this.options.header ? b.find(".popover-title").outerHeight() : 0,
                        e = this.options.liveSearch ? b.find(".bootstrap-select-searchbox").outerHeight() : 0,
                        f = this.options.actionsBox ? b.find(".bs-actionsbox").outerHeight() : 0;
                    a.remove(), this.$newElement.data("liHeight", c).data("headerHeight", d).data("searchHeight", e).data("actionsHeight", f)
                }
            },
            setSize: function() {
                var b, c, d, e = this,
                    f = this.$menu,
                    g = f.find(".inner"),
                    h = this.$newElement.outerHeight(),
                    i = this.$newElement.data("liHeight"),
                    j = this.$newElement.data("headerHeight"),
                    k = this.$newElement.data("searchHeight"),
                    l = this.$newElement.data("actionsHeight"),
                    m = f.find("li .divider").outerHeight(!0),
                    n = parseInt(f.css("padding-top")) + parseInt(f.css("padding-bottom")) + parseInt(f.css("border-top-width")) + parseInt(f.css("border-bottom-width")),
                    o = this.options.hideDisabled ? ":not(.disabled)" : "",
                    p = a(window),
                    q = n + parseInt(f.css("margin-top")) + parseInt(f.css("margin-bottom")) + 2,
                    r = function() {
                        c = e.$newElement.offset().top - p.scrollTop(), d = p.height() - c - h
                    };
                if (r(), this.options.header && f.css("padding-top", 0), "auto" == this.options.size) {
                    var s = function() {
                        var a, h = e.$lis.not(".hide");
                        r(), b = d - q, e.options.dropupAuto && e.$newElement.toggleClass("dropup", c > d && b - q < f.height()), e.$newElement.hasClass("dropup") && (b = c - q), a = h.length + h.find("dt").length > 3 ? 3 * i + q - 2 : 0, f.css({
                            "max-height": b + "px",
                            overflow: "hidden",
                            "min-height": a + j + k + l + "px"
                        }), g.css({
                            "max-height": b - j - k - l - n + "px",
                            "overflow-y": "auto",
                            "min-height": Math.max(a - n, 0) + "px"
                        })
                    };
                    s(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", s), a(window).off("resize.getSize").on("resize.getSize", s), a(window).off("scroll.getSize").on("scroll.getSize", s)
                } else if (this.options.size && "auto" != this.options.size && f.find("li" + o).length > this.options.size) {
                    var t = f.find("li" + o + " > *").filter(":not(.div-contain)").slice(0, this.options.size).last().parent().index(),
                        u = f.find("li").slice(0, t + 1).find(".div-contain").length;
                    b = i * this.options.size + u * m + n, e.options.dropupAuto && this.$newElement.toggleClass("dropup", c > d && b < f.height()), f.css({
                        "max-height": b + j + k + l + "px",
                        overflow: "hidden"
                    }), g.css({
                        "max-height": b - n + "px",
                        "overflow-y": "auto"
                    })
                }
            },
            setWidth: function() {
                if ("auto" == this.options.width) {
                    this.$menu.css("min-width", "0");
                    var a = this.$newElement.clone().appendTo("body"),
                        b = a.find("> .dropdown-menu").css("width"),
                        c = a.css("width", "auto").find("> button").css("width");
                    a.remove(), this.$newElement.css("width", Math.max(parseInt(b), parseInt(c)) + "px")
                } else "fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                var b, c, d = this,
                    e = "<div />",
                    f = a(e),
                    g = function(a) {
                        f.addClass(a.attr("class").replace(/form-control/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, f.css({
                            top: b.top + c,
                            left: b.left,
                            width: a[0].offsetWidth,
                            position: "absolute"
                        })
                    };
                this.$newElement.on("click", function() {
                    d.isDisabled() || (g(a(this)), f.appendTo(d.options.container), f.toggleClass("open", !a(this).hasClass("open")), f.append(d.$menu))
                }), a(window).resize(function() {
                    g(d.$newElement)
                }), a(window).on("scroll", function() {
                    g(d.$newElement)
                }), a("html").on("click", function(b) {
                    a(b.target).closest(d.$newElement).length < 1 && f.removeClass("open")
                })
            },
            mobile: function() {
                this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
            },
            refresh: function() {
                this.$lis = null, this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
            },
            update: function() {
                this.reloadLi(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
            },
            setSelected: function(b, c) {
                null == this.$lis && (this.$lis = this.$menu.find("li")), a(this.$lis[b]).toggleClass("selected", c)
            },
            setDisabled: function(b, c) {
                null == this.$lis && (this.$lis = this.$menu.find("li")), c ? a(this.$lis[b]).addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : a(this.$lis[b]).removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0)
            },
            isDisabled: function() {
                return this.$element.is(":disabled")
            },
            checkDisabled: function() {
                var a = this;
                this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), -1 == this.$button.attr("tabindex") && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function() {
                    return !a.isDisabled()
                })
            },
            tabIndex: function() {
                this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
            },
            clickListener: function() {
                var b = this;
                a("body").on("touchstart.dropdown", ".dropdown-menu", function(a) {
                    a.stopPropagation()
                }), this.$newElement.on("click", function() {
                    b.setSize(), b.options.liveSearch || b.multiple || setTimeout(function() {
                        b.$menu.find(".selected a").focus()
                    }, 10)
                }), this.$menu.on("click", "li a", function(c) {
                    var d = a(this).parent().index(),
                        e = b.$element.val(),
                        f = b.$element.prop("selectedIndex");
                    if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !a(this).parent().hasClass("disabled")) {
                        var g = b.$element.find("option"),
                            h = g.eq(d),
                            i = h.prop("selected"),
                            j = h.parent("optgroup"),
                            k = b.options.maxOptions,
                            l = j.data("maxOptions") || !1;
                        if (b.multiple) {
                            if (h.prop("selected", !i), b.setSelected(d, !i), k !== !1 || l !== !1) {
                                var m = k < g.filter(":selected").length,
                                    n = l < j.find("option:selected").length,
                                    o = b.options.maxOptionsText,
                                    p = o[0].replace("{n}", k),
                                    q = o[1].replace("{n}", l),
                                    r = a('<div class="notify"></div>');
                                (k && m || l && n) && (o[2] && (p = p.replace("{var}", o[2][k > 1 ? 0 : 1]), q = q.replace("{var}", o[2][l > 1 ? 0 : 1])), h.prop("selected", !1), b.$menu.append(r), k && m && (r.append(a("<div>" + p + "</div>")), b.$element.trigger("maxReached.bs.select")), l && n && (r.append(a("<div>" + q + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                    b.setSelected(d, !1)
                                }, 10), r.delay(750).fadeOut(300, function() {
                                    a(this).remove()
                                }))
                            }
                        } else g.prop("selected", !1), h.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(d, !0);
                        b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (e != b.$element.val() && b.multiple || f != b.$element.prop("selectedIndex") && !b.multiple) && b.$element.change()
                    }
                }), this.$menu.on("click", "li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)", function(a) {
                    a.target == this && (a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus())
                }), this.$menu.on("click", ".popover-title .close", function() {
                    b.$button.focus()
                }), this.$searchbox.on("click", function(a) {
                    a.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function(c) {
                    b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).is(".bs-select-all") ? b.selectAll() : b.deselectAll(), b.$element.change()
                }), this.$element.change(function() {
                    b.render(!1)
                })
            },
            liveSearchListener: function() {
                var b = this,
                    c = a('<li class="no-results"></li>');
                this.$newElement.on("click.dropdown.data-api", function() {
                    b.$menu.find(".active").removeClass("active"), b.$searchbox.val() && (b.$searchbox.val(""), b.$lis.not(".is-hidden").removeClass("hide"), c.parent().length && c.remove()), b.multiple || b.$menu.find(".selected").addClass("active"), setTimeout(function() {
                        b.$searchbox.focus()
                    }, 10)
                }), this.$searchbox.on("input propertychange", function() {
                    b.$searchbox.val() ? (b.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains(" + b.$searchbox.val() + ")").parent().addClass("hide"), b.$menu.find("li").filter(":visible:not(.no-results)").length ? c.parent().length && c.remove() : (c.parent().length && c.remove(), c.html(b.options.noneResultsText + ' "' + b.$searchbox.val() + '"').show(), b.$menu.find("li").last().after(c))) : (b.$lis.not(".is-hidden").removeClass("hide"), c.parent().length && c.remove()), b.$menu.find("li.active").removeClass("active"), b.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(), a(this).focus()
                }), this.$menu.on("mouseenter", "a", function(c) {
                    b.$menu.find(".active").removeClass("active"), a(c.currentTarget).parent().not(".disabled").addClass("active")
                }), this.$menu.on("mouseleave", "a", function() {
                    b.$menu.find(".active").removeClass("active")
                })
            },
            val: function(a) {
                return void 0 !== a ? (this.$element.val(a), this.$element.change(), this.$element) : this.$element.val()
            },
            selectAll: function() {
                null == this.$lis && (this.$lis = this.$menu.find("li")), this.$element.find("option:enabled").prop("selected", !0), a(this.$lis).filter(":not(.disabled)").addClass("selected"), this.render(!1)
            },
            deselectAll: function() {
                null == this.$lis && (this.$lis = this.$menu.find("li")), this.$element.find("option:enabled").prop("selected", !1), a(this.$lis).filter(":not(.disabled)").removeClass("selected"), this.render(!1)
            },
            keydown: function(b) {
                var c, d, e, f, g, h, i, j, k, l, m, n, o = {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9"
                };
                if (c = a(this), e = c.parent(), c.is("input") && (e = c.parent().parent()), l = e.data("this"), l.options.liveSearch && (e = c.parent().parent()), l.options.container && (e = l.$menu), d = a("[role=menu] li:not(.divider) a", e), n = l.$menu.parent().hasClass("open"), !n && /([0-9]|[A-z])/.test(String.fromCharCode(b.keyCode)) && (l.options.container ? l.$newElement.trigger("click") : (l.setSize(), l.$menu.parent().addClass("open"), n = l.$menu.parent().hasClass("open")), l.$searchbox.focus()), l.options.liveSearch && (/(^9$|27)/.test(b.keyCode) && n && 0 === l.$menu.find(".active").length && (b.preventDefault(), l.$menu.parent().removeClass("open"), l.$button.focus()), d = a("[role=menu] li:not(.divider):visible", e), c.val() || /(38|40)/.test(b.keyCode) || 0 === d.filter(".active").length && (d = l.$newElement.find("li").filter(":icontains(" + o[b.keyCode] + ")"))), d.length) {
                    if (/(38|40)/.test(b.keyCode)) f = d.index(d.filter(":focus")), h = d.parent(":not(.disabled):visible").first().index(), i = d.parent(":not(.disabled):visible").last().index(), g = d.eq(f).parent().nextAll(":not(.disabled):visible").eq(0).index(), j = d.eq(f).parent().prevAll(":not(.disabled):visible").eq(0).index(), k = d.eq(g).parent().prevAll(":not(.disabled):visible").eq(0).index(), l.options.liveSearch && (d.each(function(b) {
                        a(this).is(":not(.disabled)") && a(this).data("index", b)
                    }), f = d.index(d.filter(".active")), h = d.filter(":not(.disabled):visible").first().data("index"), i = d.filter(":not(.disabled):visible").last().data("index"), g = d.eq(f).nextAll(":not(.disabled):visible").eq(0).data("index"), j = d.eq(f).prevAll(":not(.disabled):visible").eq(0).data("index"), k = d.eq(g).prevAll(":not(.disabled):visible").eq(0).data("index")), m = c.data("prevIndex"), 38 == b.keyCode && (l.options.liveSearch && (f -= 1), f != k && f > j && (f = j), h > f && (f = h), f == m && (f = i)), 40 == b.keyCode && (l.options.liveSearch && (f += 1), -1 == f && (f = 0), f != k && g > f && (f = g), f > i && (f = i), f == m && (f = h)), c.data("prevIndex", f), l.options.liveSearch ? (b.preventDefault(), c.is(".dropdown-toggle") || (d.removeClass("active"), d.eq(f).addClass("active").find("a").focus(), c.focus())) : d.eq(f).focus();
                    else if (!c.is("input")) {
                        var p, q, r = [];
                        d.each(function() {
                            a(this).parent().is(":not(.disabled)") && a.trim(a(this).text().toLowerCase()).substring(0, 1) == o[b.keyCode] && r.push(a(this).parent().index())
                        }), p = a(document).data("keycount"), p++, a(document).data("keycount", p), q = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), q != o[b.keyCode] ? (p = 1, a(document).data("keycount", p)) : p >= r.length && (a(document).data("keycount", 0), p > r.length && (p = 1)), d.eq(r[p - 1]).focus()
                    }
                    /(13|32|^9$)/.test(b.keyCode) && n && (/(32)/.test(b.keyCode) || b.preventDefault(), l.options.liveSearch ? /(32)/.test(b.keyCode) || (l.$menu.find(".active a").click(), c.focus()) : a(":focus").click(), a(document).data("keycount", 0)), (/(^9$|27)/.test(b.keyCode) && n && (l.multiple || l.options.liveSearch) || /(27)/.test(b.keyCode) && !n) && (l.$menu.parent().removeClass("open"), l.$button.focus())
                }
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            destroy: function() {
                this.$newElement.remove(), this.$element.remove()
            }
        }, a.fn.selectpicker = function(c, d) {
            var e, f = arguments,
                g = this.each(function() {
                    if (a(this).is("select")) {
                        var g = a(this),
                            h = g.data("selectpicker"),
                            i = "object" == typeof c && c;
                        if (h) {
                            if (i)
                                for (var j in i) h.options[j] = i[j]
                        } else g.data("selectpicker", h = new b(this, i, d));
                        if ("string" == typeof c) {
                            var k = c;
                            h[k] instanceof Function ? ([].shift.apply(f), e = h[k].apply(h, f)) : e = h.options[k]
                        }
                    }
                });
            return void 0 !== e ? e : g
        }, a.fn.selectpicker.defaults = {
            style: "btn-default",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results match",
            countSelectedText: "{0} of {1} selected",
            maxOptionsText: ["Limit reached ({n} {var} max)", "Group limit reached ({n} {var} max)", ["items", "item"]],
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            actionsBox: !1,
            multipleSeparator: ", ",
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            maxOptions: !1
        }, a(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input", b.prototype.keydown).on("focusin.modal", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input", function(a) {
            a.stopPropagation()
        })
    }(window.jQuery);
var psParticle = function(a) {
    this.ps = a, this.ttl = null, this.color = a.colorArr, this.next = null, this.prev = null, this.gravityX = 0, this.gravityY = 0, this.x = Math.random() * a.cw, this.y = Math.random() * a.ch, this.velocityX = 10 * Math.random() - 5, this.velocityY = 10 * Math.random() - 5
};
psParticle.prototype.move = function() {
    var a = this.ps,
        b = this;
    if (null != this.ttl && this.ttl-- <= 0) a.swapList(b, a.pxlBuffer, a.recycleBuffer), this.ttl = null;
    else {
        var c = this.gravityX + a.swipeOffset - this.x,
            d = this.gravityY - this.y,
            e = Math.sqrt(Math.pow(c, 2) + Math.pow(d, 2)),
            f = Math.atan2(d, c),
            g = .01 * e;
        1 == a.restless ? g += .1 * Math.random() - .05 : .01 > g && (this.x = this.gravityX + .25, this.y = this.gravityY + .25);
        var h = 0,
            i = 0;
        if (a.mx >= 0 && a.mouseForce) {
            var j = this.x - a.mx,
                k = this.y - a.my;
            h = Math.min(a.mouseForce / (Math.pow(j, 2) + Math.pow(k, 2)), a.mouseForce), i = Math.atan2(k, j), "function" == typeof this.color && (i += Math.PI, h *= .001 + .1 * Math.random() - .05)
        } else h = 0, i = 0;
        this.velocityX += g * Math.cos(f) + h * Math.cos(i), this.velocityY += g * Math.sin(f) + h * Math.sin(i), this.velocityX *= .92, this.velocityY *= .92, this.x += this.velocityX, this.y += this.velocityY
    }
}, ParticleSlider.prototype.Particle = psParticle, ParticleSlider.prototype.swapList = function(a, b, c) {
    var d = this;
    null == a ? a = new d.Particle(d) : b.first == a ? null != a.next ? (a.next.prev = null, b.first = a.next) : b.first = null : null == a.next ? a.prev.next = null : (a.prev.next = a.next, a.next.prev = a.prev), null == c.first ? (c.first = a, a.prev = null, a.next = null) : (a.next = c.first, c.first.prev = a, c.first = a, a.prev = null)
}, ParticleSlider.prototype.parseColor = function(a) {
    var b, a = a.replace(" ", "");
    if (b = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(a)) b = [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)];
    else if (b = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(a)) b = [17 * parseInt(b[1], 16), 17 * parseInt(b[2], 16), 17 * parseInt(b[3], 16)];
    else if (b = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(a)) b = [+b[1], +b[2], +b[3], +b[4]];
    else {
        if (!(b = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(a))) return null;
        b = [+b[1], +b[2], +b[3]]
    }
    return isNaN(b[3]) && (b[3] = 1), b[3] *= 255, b
}, ParticleSlider.prototype.loadingStep = function() {
    var a = this;
    a.imagesLoaded++, (a.imagesLoaded >= 3 || 0 == a.showArrowControls) && (a.resize(), a.slideDelay > 0 && (a.nextSlideTimer = setTimeout(function() {
        a.nextSlide()
    }, 1e3 * a.slideDelay)))
}, ParticleSlider.prototype.$ = function(a, b, c) {
    var d = this;
    if ("." == a[0]) {
        var e = a.substr(1);
        b || (b = d.$$children);
        for (var f = [], g = 0, h = b.length; h > g; g++) b[g].className && b[g].className == e && f.push(b[g]);
        return 0 == f.length ? null : 1 != f.length || c ? f : f[0]
    }
    return document.getElementById(a.substr(1))
}, ParticleSlider.prototype.nextFrame = function() {
    var a = this;
    a.swipeOffset = 1 == a.mouseDownRegion && a.mx < a.cw / 2 || -1 == a.mouseDownRegion && a.mx > a.cw / 2 ? a.mx - a.cw / 2 : 0;
    for (var b = a.pxlBuffer.first, c = null; null != b;) c = b.next, b.move(), b = c;
    if (a.drawParticles(), a.frame++ % 25 == 0 && (a.cw != a.getCw() || a.ch != a.getCh())) {
        var d = a.getCh(),
            e = a.getCw();
        a.ch != e && "function" == typeof a.onWidthChange && a.onWidthChange(a, e), a.ch != d && "function" == typeof a.onHeightChange && a.onHeightChange(a, d), "function" == typeof a.onSizeChange && a.onSizeChange(a, e, d), a.resize()
    }
    setTimeout(function() {
        a.requestAnimationFrame(function() {
            a.nextFrame()
        })
    }, 15)
}, ParticleSlider.prototype.nextSlide = function(a) {
    var b = this;
    null != b.nextSlideTimer && b.imgs.length > 1 ? (b.currImg = (b.currImg + b.imgs.length + (a ? a : 1)) % b.imgs.length, b.resize(), b.slideDelay > 0 && (b.nextSlideTimer = setTimeout(function() {
        b.nextSlide()
    }, 1e3 * b.slideDelay))) : b.slideDelay > 0 && (b.nextSlideTimer = setTimeout(function() {
        b.nextSlide()
    }, 1e3 * b.slideDelay)), "function" == typeof b.onNextSlide && b.onNextSlide(b.currImg)
}, ParticleSlider.prototype.drawParticles = function() {
    for (var a, b, c, d, e, f, g = this, h = g.ctx.createImageData(g.cw, g.ch), i = h.data, j = g.pxlBuffer.first; null != j;) {
        for (b = ~~j.x, c = ~~j.y, d = b; d < b + g.ptlSize && d >= 0 && d < g.cw; d++)
            for (e = c; e < c + g.ptlSize && e >= 0 && e < g.ch; e++) a = 4 * (e * h.width + d), f = "function" == typeof j.color ? j.color() : j.color, i[a + 0] = f[0], i[a + 1] = f[1], i[a + 2] = f[2], i[a + 3] = f[3];
        j = j.next
    }
    h.data = i, g.ctx.putImageData(h, 0, 0)
}, ParticleSlider.prototype.getPixelFromImageData = function(a, b, c) {
    for (var d = this, e = [], f = 0; f < a.width; f += d.ptlGap + 1)
        for (var g = 0; g < a.height; g += d.ptlGap + 1) i = 4 * (g * a.width + f), a.data[i + 3] > 0 && e.push({
            x: b + f,
            y: c + g,
            color: 1 == d.monochrome ? [d.colorArr[0], d.colorArr[1], d.colorArr[2], d.colorArr[3]] : [a.data[i], a.data[i + 1], a.data[i + 2], a.data[i + 3]]
        });
    return e
}, ParticleSlider.prototype.init = function(a) {
    var b = this;
    if (b.imgs.length > 0) {
        b.$srcCanv.width = b.imgs[b.currImg].width, b.$srcCanv.height = b.imgs[b.currImg].height, b.srcCtx.clearRect(0, 0, b.$srcCanv.width, b.$srcCanv.height), b.srcCtx.drawImage(b.imgs[b.currImg], 0, 0);
        var c = b.getPixelFromImageData(b.srcCtx.getImageData(0, 0, b.$srcCanv.width, b.$srcCanv.height), ~~(b.cw / 2 - b.$srcCanv.width / 2), ~~(b.ch / 2 - b.$srcCanv.height / 2));
        if (1 == b.showArrowControls) {
            b.prevCtx.clearRect(0, 0, b.$prevCanv.width, b.$prevCanv.height), b.prevCtx.drawImage(b.imgControlPrev, 0, 0);
            for (var d = b.getPixelFromImageData(b.prevCtx.getImageData(0, 0, b.$prevCanv.width, b.$prevCanv.height), b.arrowPadding, ~~(b.ch / 2 - b.$prevCanv.height / 2)), e = 0, f = d.length; f > e; e++) d[e].color = function() {
                return b.mx >= 0 && b.mx < 2 * b.arrowPadding + b.$prevCanv.width ? b.hoverColorArr : b.colorArr
            }, c.push(d[e]);
            b.nextCtx.clearRect(0, 0, b.$nextCanv.width, b.$nextCanv.height), b.nextCtx.drawImage(b.imgControlNext, 0, 0);
            for (var g = b.getPixelFromImageData(b.nextCtx.getImageData(0, 0, b.$nextCanv.width, b.$nextCanv.height), b.cw - b.arrowPadding - b.$nextCanv.width, ~~(b.ch / 2 - b.$nextCanv.height / 2)), e = 0, f = g.length; f > e; e++) g[e].color = function() {
                return b.mx > 0 && b.mx > b.cw - (2 * b.arrowPadding + b.$nextCanv.width) ? b.hoverColorArr : b.colorArr
            }, c.push(g[e])
        }(b.currImg != b.lastImg || 1 == a) && (c.shuffle(), b.lastImg = b.currImg);
        for (var h = b.pxlBuffer.first, e = 0, f = c.length; f > e; e++) {
            var i = null;
            null != h ? (i = h, h = h.next) : (b.swapList(b.recycleBuffer.first, b.recycleBuffer, b.pxlBuffer), i = b.pxlBuffer.first), i.gravityX = c[e].x, i.gravityY = c[e].y, i.color = c[e].color
        }
        for (; null != h;) h.ttl = ~~(10 * Math.random()), h.gravityY = ~~(b.ch * Math.random()), h.gravityX = ~~(b.cw * Math.random()), h = h.next;
        b.$overlay.innerHTML = b.$$slides[b.currImg].innerHTML
    }
}, ParticleSlider.prototype.getCw = function() {
    var a = this;
    return Math.min(document.body.clientWidth, a.width, a.$container.clientWidth)
}, ParticleSlider.prototype.getCh = function() {
    var a = this;
    return Math.min(document.body.clientHeight, a.height, a.$container.clientHeight)
}, ParticleSlider.prototype.resize = function() {
    var a = this;
    a.cw = a.getCw(), a.ch = a.getCh(), a.$canv.width = a.cw, a.$canv.height = a.ch, a.init(!0)
}, ParticleSlider.prototype.setColor = function(a) {
    var b = this;
    b.colorArr = b.parseColor(a)
}, ParticleSlider.prototype.setHoverColor = function(a) {
    var b = this;
    b.hoverColorArr = b.parseColor(a)
}, ParticleSlider.prototype.requestAnimationFrame = function(a) {
    var b = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1e3 / 60)
    };
    b(a)
};
var partha = angular.module("partha", ["ngPrettyJson", "ui.bootstrap", "partha.controllers", "partha.directives", "partha.services"]).constant("settings", window.settings);
partha.config(["$compileProvider", function(a) {
    a.debugInfoEnabled(!1)
}]);
var partha = angular.module("partha");
partha.run(["$rootScope", "$timeout", "settings", function(a, b, c) {
    a.settings = c;
    var d = function() {
        if (window.appLoaded) {
            var c = document.getElementById("loader");
            c.style.opacity = 0, b(function() {
                a.appLoaded = !0
            }, 500), b(function() {
                c.style.display = "none"
            }, 1500)
        } else b(d, 500)
    };
    d()
}]);
var controllers = angular.module("partha.controllers", []);
controllers.controller("HomeController", ["$scope", "$window", function() {}]), controllers.controller("ContactController", ["$scope", "$window", "$timeout", "$http", "flashMessages", function(a, b, c, d, e) {
    angular.extend(a, {
        data: {
            requiredService: "strategy"
        },
        budgetOptions: ["R50 000 - R100 000", "R100 000 - R200 000", "Over R200 000"],
        deadlineOptions: ["Less than 2 months", "More than 2 months"],
        requiredServices: ["strategy", "branding", "user experience", "design", "development", "social media", "content", "consulting"],
        processing: !1
    });
    var f = function() {
        a.data = {
            requiredService: "strategy"
        }, a.contactForm.$setPristine(), a.contactForm.$setUntouched()
    };
    a.send = function() {
        a.processing = !0, d.post("/contact", a.data).success(function() {
            e.success("Your meassage was sent successfully."), a.processing = !1, f()
        }).error(function() {
            e.error("Something went wrong please try again."), a.processing = !1
        })
    }
}]);
var directives = angular.module("partha.directives", []);
directives.directive("tgFitScreen", ["$window", "$timeout", function(a, b) {
    return {
        restrict: "A",
        scope: !1,
        link: function(c, d) {
            var e = angular.element(a),
                f = 0,
                g = function(a, b) {
                    b > f && d.css({
                        height: b + "px"
                    })
                };
            b(function() {
                f = d.outerHeight(), g(e.width(), e.height())
            }), angular.element(a).bind("resize", function() {
                g($(this).width(), $(this).height())
            })
        }
    }
}]), directives.directive("tgParticleLogo", ["settings", "$rootScope", "$timeout", "$window", function(a, b, c, d) {
    var e = '            <div id="particle-slider">                <img data-ng-src="{{ src }}" class="img-responsive" data-ng-hide="enabled"/>                <div class="slides">                    <div class="slide" data-src="{{ src }}"></div>                </div>                <canvas class="draw" data-ng-show="enabled"></canvas>            </div>';
    return {
        restrict: "E",
        scope: !0,
        replace: !0,
        template: e,
        link: function(e) {
            e.src = a.static_url_prefix + "img/landing/logo.png", e.enabled = a.particle_slider_enabled;
            var f = null,
                g = function(b, d) {
                    a.particle_slider_enabled && b > 768 ? c(function() {
                        null == f && (f = new ParticleSlider({
                            ptlGap: 0,
                            ptlSize: 1,
                            mouseForce: 5e3,
                            showArrowControls: !1,
                            height: d
                        })), f.height = d, f.init(!0), e.enabled = !0
                    }) : a.particle_slider_enabled && (e.enabled = !1)
                };
            windowElement = angular.element(d), windowElement.bind("resize", function() {
                e.$apply(function() {
                    g(windowElement.width(), windowElement.height())
                })
            }), g(windowElement.width(), windowElement.height()), b.$on("tgNavbar.open", function() {
                g($(this).width(), $(this).height())
            }), b.$on("tgNavbar.close", function() {
                g($(this).width(), $(this).height())
            })
        }
    }
}]), directives.directive("tgShowcaseProject", ["settings", "$timeout", "$window", function() {
    var a = '            <a class="project">                <img class="background" data-ng-if="bgSrc" data-ng-src="{{ bgSrc }}">                <img class="zoom-background" data-ng-if="bgSrc" data-ng-src="{{ bgSrc }}" data-ng-show="hoverState == \'zoom\'">                <div class="content" data-ng-class="{ \'slide-up\': overlaySrc }">                    <img class="logo" data-ng-class="{fading: hoverState == \'fading\'}" data-ng-src="{{ logoSrc }}">                </div>                <div class="hover-overlay" data-ng-if="overlaySrc">                    <img data-ng-src="{{ overlaySrc }}">                </div>            </a>';
    return {
        restrict: "E",
        scope: {
            logoSrc: "@",
            bgSrc: "@",
            overlaySrc: "@?",
            hoverState: "@?"
        },
        replace: !0,
        template: a,
        link: function(a) {
            _.isEmpty(a.hoverState) && (a.hoverState = "zoom")
        }
    }
}]), directives.directive("tgAutoScroll", ["settings", "$timeout", "$window", function(a, b, c) {
    var d = "            <div>                <ng-transclude></ng-transclude>            </div>";
    return {
        restrict: "A",
        scope: !0,
        transclude: !0,
        replace: !0,
        template: d,
        controller: ["$scope", "$element", "$attrs", "$timeout", function(a) {
            a.sections = [], a.activeSectionIndex = null, this.addSection = function(b) {
                a.sections.push(b), _.isEmpty(a.activeSectionIndex) && (a.activeSectionIndex = 0)
            }
        }],
        link: function(a) {
            var b = !1,
                d = $(document).scrollTop(),
                e = $(window).height(),
                f = function() {
                    var c = $(document).scrollTop(),
                        f = c + .2 * e,
                        g = c + .8 * e;
                    if (!b && c > d)
                        for (var h = 0; h < a.sections.length; ++h) {
                            var i = a.sections[h],
                                j = i.offset().top;
                            if (g > j && j > f) {
                                b = !0, $.scrollTo(j, 500, {
                                    onAfter: function() {
                                        a.$apply(function() {
                                            b = !1, a.activeSectionIndex = h
                                        })
                                    }
                                });
                                break
                            }
                        }
                    d = c
                };
            a.scrollTo = function(b) {
                var c = a.sections[b],
                    d = c.offset().top;
                $.scrollTo(d, 500, {
                    onAfter: function() {
                        a.$apply(function() {
                            a.activeSectionIndex = b
                        })
                    }
                })
            }, angular.element(c).bind("scroll", function() {
                f()
            }), angular.element(c).bind("resize", function() {
                e = $(window).height(), f()
            })
        }
    }
}]), directives.directive("tgScrollSection", ["$rootScope", "settings", function() {
    return {
        restrict: "A",
        scope: !1,
        require: "^tgAutoScroll",
        controller: ["$scope", "$element", "$attrs", "$timeout", function() {}],
        link: function(a, b, c, d) {
            d.addSection(b)
        }
    }
}]), directives.directive("tgNavbarContainer", ["$rootScope", "settings", function(a) {
    return {
        restrict: "A",
        scope: !1,
        controller: ["$scope", "$element", "$attrs", "$timeout", function() {
            a.$on("tgNavbar.open", function() {}), a.$on("tgNavbar.close", function() {})
        }],
        link: function() {}
    }
}]), directives.directive("tgNavbar", ["$rootScope", "settings", function(a, b) {
    var c = b.static_url_prefix + "templates/navbar.html";
    return {
        restrict: "E",
        scope: {
            isCollapsed: "&?"
        },
        replace: !0,
        templateUrl: c,
        controller: ["$scope", "$element", "$attrs", "$timeout", function(b) {
            angular.isUndefined(b.isCollapsed()) && (b.isCollapsed = function() {
                return !1
            }), b.collapsed = b.isCollapsed(), b.toggleCollapse = function() {
                a.$emit(b.collapsed ? "tgNavbar.open" : "tgNavbar.close"), b.collapsed = !b.collapsed
            }
        }],
        link: function() {}
    }
}]), directives.directive("tgTeamMember", ["settings", "$timeout", "$window", function() {
    var a = '            <div class="team-member">                <img class="background" data-ng-if="bgSrc" data-ng-src="{{ bgSrc }}">                <div class="hover-overlay" data-ng-if="overlaySrc">                    <img data-ng-src="{{ overlaySrc }}">                </div>            </div>';
    return {
        restrict: "E",
        scope: {
            bgSrc: "@",
            overlaySrc: "@?"
        },
        replace: !0,
        template: a,
        link: function() {}
    }
}]), directives.directive("tgClientLogo", ["settings", "$timeout", "clientLogos", function(a, b, c) {
    var d = 6e3,
        e = 3e3,
        f = '            <div class="client-logo">                <div class="logo-face">                    <img class="front img-responsive" data-ng-src="{{ frontSrc }}">                    <img class="back img-responsive" data-ng-src="{{ backSrc }}">                </div>            </div>',
        g = function() {
            return parseInt(Math.random() * (d - e) + e)
        };
    return {
        restrict: "E",
        scope: !0,
        replace: !0,
        template: f,
        link: function(a, d) {
            var e = "front",
                f = null,
                h = null,
                i = function() {
                    f = c.getRandomLogo(), a.frontSrc = f.url, b(j, g())
                },
                j = function() {
                    "front" == e ? (h = c.getRandomLogo(), a.backSrc = h.url, e = "back", c.releaseLogo(f), f = null, d.addClass("flipped")) : (f = c.getRandomLogo(), a.frontSrc = f.url, e = "front", c.releaseLogo(h), h = null, d.removeClass("flipped")), b(j, g())
                };
            i()
        }
    }
}]), directives.directive("tgSelectPicker", ["settings", "$timeout", function(a, b) {
    return NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/, {
        restrict: "A",
        require: "?ngModel",
        link: function(a, c, d, e) {
            function f() {
                b(g ? function() {
                    g.refresh()
                } : function() {
                    g = c.selectpicker({
                        size: 10
                    }).data("selectpicker")
                })
            }
            var g = null;
            e ? ($render = e.$render, e.$render = function() {
                $render(), f()
            }) : f(), a.$watch(d.ngModel, function() {
                f()
            }), d.ngOptions && e && (match = d.ngOptions.match(NG_OPTIONS_REGEXP), values = match[7], a.$watchCollection(values, function() {
                f()
            }))
        }
    }
}]), directives.directive("tgFlashMessages", ["$rootScope", "flashMessages", "settings", function(a, b, c) {
    var d = c.static_url_prefix + "templates/directives/flash_messages.html";
    return {
        restrict: "E",
        replace: !0,
        templateUrl: d,
        controller: ["$scope", "$element", "$attrs", function(a) {
            a.close = function(b) {
                a.flashMessages.splice(b, 1)
            }
        }]
    }
}]), directives.directive("tgMap", ["$rootScope", "flashMessages", "settings", function(a, b, c) {
    return {
        restrict: "E",
        replace: !0,
        template: '<div id="map"></div>',
        controller: ["$scope", "$element", "$attrs", function() {}],
        link: function() {
            if (c.map_enabled) {
                var a = L.mapbox.map("map", "ryanbrussow.l7aa439e", {
                    zoomControl: !0,
                    accessToken: "pk.eyJ1IjoicnlhbmJydXNzb3ciLCJhIjoiSEx5UUpyYyJ9.B_3LXcEliiVNwth5wIQx0w"
                });
                a.touchZoom.disable(), a.doubleClickZoom.disable(), a.scrollWheelZoom.disable(), a.tap && a.tap.disable()
            }
        }
    }
}]), directives.directive("tgScrollToContent", ["$rootScope", "$window", "settings", function(a, b) {
    return {
        restrict: "A",
        link: function(a, c) {
            c.click(function() {
                var a = angular.element(b).width();
                768 >= a && $.scrollTo(".tab-content:first", 500)
            })
        }
    }
}]), directives.directive("tgCaseStudyNavbar", ["$rootScope", "$window", "settings", function() {
    var a = '            <div class="case-study-navbar">                <ul class="nav">                    <li>                        <a data-ng-href="{{ previousProject.url }}" title="{{ previousProject.title }}">                            <i class="fa fa-chevron-left"></i>                        </a>                    </li>                    <li>                        <a href="/projects" title="Work"><i class="fa fa-th"></i></a>                    </li>                    <li>                        <a data-ng-href="{{ nextProject.url }}" title="{{ nextProject.title }}">                            <i class="fa fa-chevron-right"></i>                        </a>                    </li>                </ul>            </div>';
    return {
        restrict: "E",
        scope: {
            currentProject: "@?"
        },
        template: a,
        link: function(a) {
            var b = [{
                name: "devguild",
                title: "Devguild",
                url: "/project/devguild"
            }, {
                name: "getbucks",
                title: "GetBucks",
                url: "/project/getbucks"
            }, {
                name: "stickaroo",
                title: "Sticakroo",
                url: "/project/stickaroo"
            }, {
                name: "discovery",
                title: "Discovery",
                url: "/project/discovery"
            }, {
                name: "fforever",
                title: "FForever",
                url: "/project/fforever"
            }, {
                name: "webalytics",
                title: "Webalytics",
                url: "/project/webalytics"
            }];
            a.previousProject = b[b.length - 1], a.nextProject = b[1];
            for (var c = 0; c < b.length; c++) b[c].name == a.currentProject && (0 == c ? (a.previousProject = b[b.length - 1], a.nextProject = b[1]) : c != b.length - 1 ? (a.previousProject = b[c - 1], a.nextProject = b[c + 1]) : c == b.length - 1 && (a.previousProject = b[c - 1], a.nextProject = b[0]))
        }
    }
}]), directives.directive("tgMacSlider", ["$rootScope", "$window", "settings", function(a, b, c) {
    var d = '            <div class="viewport">                <div class="screen">                    <carousel data-interval="5000" data-wrap="true">                        <slide data-ng-repeat="slide in slides" data-active="slide.active">                            <img class="img-responsive" data-ng-src="{{ slide.image }}"/>                        </slide>                    </carousel>                </div>                <img data-ng-src="{{ frameSrc }}" class="img-responsive"/>            </div>';
    return {
        restrict: "E",
        scope: {
            images: "="
        },
        template: d,
        controller: ["$scope", function(a) {
            a.frameSrc = c.static_url_prefix + "img/projects/macbook-frame.png", a.slides = [], _.forEach(a.images, function(b) {
                a.slides.push({
                    active: !1,
                    image: b
                })
            })
        }],
        link: function() {}
    }
}]);
var services = angular.module("partha.services", []);
services.factory("clientLogos", ["settings", function(a) {
    var b = [{
            url: a.static_url_prefix + "img/landing/clients/accenture.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/apple.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/discovery.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/27dinner.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/getbucks.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/redbull.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/stickaroo.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/tsogo.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/vitality.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/vumi.png"
        }, {
            url: a.static_url_prefix + "img/landing/clients/jacaranda.jpg"
        }],
        c = function() {
            for (var a = [], c = 0; c < b.length; ++c)(void 0 == b[c].showing || 0 == b[c].showing) && a.push(b[c]);
            return a
        },
        d = function() {
            var a = c(),
                b = Math.random() * a.length,
                d = parseInt(b);
            return a[d].showing = !0, a[d]
        },
        e = function(a) {
            a.showing = !1
        };
    return {
        getRandomLogo: d,
        releaseLogo: e
    }
}]), services.factory("flashMessages", ["$rootScope", "$timeout", "settings", function(a, b) {
    a.flashMessages = [];
    var c = function(c, d, e) {
            var f = {
                text: c,
                cls: d
            };
            a.flashMessages.push(f), e && b(function() {
                var b = a.flashMessages.indexOf(f); - 1 != b && a.flashMessages.splice(b, 1)
            }, e)
        },
        d = function() {
            a.flashMessages = []
        },
        e = function(a) {
            c(a, "alert-info")
        },
        f = function(a) {
            c(a, "alert-success", 5e3)
        },
        g = function(a) {
            c(a, "alert-warning", 1e4)
        },
        h = function(a) {
            c(a, "alert-danger")
        };
    return {
        info: e,
        success: f,
        warning: g,
        error: h,
        clear: d
    }
}]);