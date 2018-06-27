
var increment = 'vw'
var orientation = 'vertical'// this var is used by the slider
var _w = jQuery(window).width()
var _h = jQuery(window).height()
jQuery(document).ready(function () {
    console.log("location hash="+location.hash)
    jQuery(".wheelnav-outer-nav-title").css("display:none;");
    reposition_screen()
})
function calibrateCircle(id,size,increment){
  //console.log("calibrate",id,size,increment)
  jQuery(id).css('width', size+increment)
  jQuery(id).css('height', size+increment)
  jQuery(id).css('margin-left', ((size/2)*-1)+increment)
  jQuery(id).css('margin-top', ((size/2)*-1)+increment)

}

function pinSlider(){
 
    if (_w >= _h) {
      orientation = 'vertical'
      slider_left = (_w / 2) + ((_h * 0.8) / 2) + 24 + "px"
      console.log(slider_left);
      jQuery("#slider.ui-slider-vertical").css("left", slider_left)
      jQuery("#slider.ui-slider-vertical").css("top", "19.9%")

    } else {
      orientation = 'horizontal'
      slider_top = (_h / 2) + ((_w * 0.8) / 2) + 24 + "px"
      jQuery("#slider.ui-slider-horizontal").css("top", slider_top)
      jQuery("#slider.ui-slider-horizontal").css("left", "19.9%")
    }
}



function reposition_screen () {
  jQuery('#main').css('height', '100vw')
  jQuery('#main').css('width', '100vh')


  setSlider()
  pinSlider ();
 jQuery("#slider").css("visibility", "visible")
  var  calibrate_elements = [
    { id:".phi-centered",
      size: 61.8,//use number, it needs to be divided
      increment:"vw"
    },
    { id:"#outer-ring",
      size: 80,//use number, it needs to be divided
      increment:"vw"
    },
    { id:"#inner-ring",
      size: 72,//use number, it needs to be divided
      increment:"vw"
    },
    { id:"#inner-subring",
      size: 65,//use number, it needs to be divided
      increment:"vw"
    }
    
  ]

  
  for(var e=0; e<calibrate_elements.length;e++) {
    var ob = calibrate_elements[e]
    if(_w<540){
      ob.size+=14;
    }
    
      if (_w > _h) {

        if(ob.increment == 'vw'){
          ob.increment = 'vh' //because if landscape orientation needs to be measured to viewer height;
        }

        calibrateCircle(ob.id,ob.size,ob.increment)

        jQuery(".slick-track").css('height', "61.8vh")

      } else {
      
       calibrateCircle(ob.id,ob.size,ob.increment)
       jQuery(".slick-track").css('height', "61.8vw")
      }
    }


  jQuery('#stars').css('height', '100vh')
  jQuery('#stars').css('width', '100vw')
}


jQuery(window).resize(function () {
  _w = jQuery(window).width()
  _h = jQuery(window).height()
  
  if (_w > _h) {
    increment = 'vh'
  } else {
    increment = 'vw'
  }
   
  reposition_screen()

})

function setSlideContent(slide,id){
   
  if(posts[id] !=undefined){ 
    jQuery("#slide"+slide+" h2").html(posts[+id].title)
    jQuery("#slide" + slide + " section div.content").html(posts[ + id].content)
    $carousel.slick('slickGoTo', slide);
  } else {
    console.log("post undefined", slide, id, posts)
  }
}


function setContent(dest,object_id,object){
    var slide = posts_nav[object_id]
    console.log("setContent",object_id,object)

    //console.log("posts",posts,posts.length)
      var page_title = site_title;

      if(object == 'category'){
        console.log("set_content cat",object_id,categories[object_id].children);
        //
        var data = []
        var cat_children = categories[object_id].children;
        if(cat_children.length>0){
          for(c=0;c<cat_children.length;c++){
            
            data.push({
                  id : categories[cat_children[c]].id,
                  title : categories[cat_children[c]].name,
                  type: "category",
                  children: categories[cat_children[c]].children
              }
            )
            
          }
          

          makeWheelNav(dest, data, inner_subnav_params)
          //

        }

      } else {
        if (posts[object_id] != undefined) {
        page_title = posts[object_id].title + " | " + site_title;
          document.title = page_title
          location.hash = posts[object_id].slug
         
        }
      }
      setSlideContent(slide,object_id)
     


    
} 

/*!
 * circletype 2.3.0
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2018 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */
jQuery.fn.circleType = function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.CircleType = e() : t.CircleType = e()
}("undefined" != typeof self ? self : this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 29)
    }([function (t, e, n) {
        var r = n(24)("wks"),
            i = n(12),
            o = n(1).Symbol,
            u = "function" == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = u && o[t] || (u ? o : i)("Symbol." + t))
        }).store = r
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e) {
        var n = t.exports = {
            version: "2.5.6"
        };
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        var r = n(4),
            i = n(11);
        t.exports = n(6) ? function (t, e, n) {
            return r.f(t, e, i(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e, n) {
        var r = n(5),
            i = n(34),
            o = n(35),
            u = Object.defineProperty;
        e.f = n(6) ? Object.defineProperty : function (t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return u(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e, n) {
        var r = n(10);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e, n) {
        t.exports = !n(17)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        var r = n(24)("keys"),
            i = n(12);
        t.exports = function (t) {
            return r[t] || (r[t] = i(t))
        }
    }, function (t, e) {
        t.exports = !1
    }, function (t, e, n) {
        var r = n(1),
            i = n(2),
            o = n(3),
            u = n(19),
            c = n(20),
            f = function (t, e, n) {
                var a, s, l, p, h = t & f.F,
                    d = t & f.G,
                    v = t & f.S,
                    y = t & f.P,
                    _ = t & f.B,
                    m = d ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    g = d ? i : i[e] || (i[e] = {}),
                    x = g.prototype || (g.prototype = {});
                d && (n = e);
                for (a in n) s = !h && m && void 0 !== m[a], l = (s ? m : n)[a], p = _ && s ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l, m && u(m, a, l, t & f.U), g[a] != l && o(g, a, p), y && x[a] != l && (x[a] = l)
            };
        r.core = i, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, t.exports = f
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e, n) {
        var r = n(10),
            i = n(1).document,
            o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o ? i.createElement(t) : {}
        }
    }, function (t, e, n) {
        var r = n(1),
            i = n(3),
            o = n(7),
            u = n(12)("src"),
            c = Function.toString,
            f = ("" + c).split("toString");
        n(2).inspectSource = function (t) {
            return c.call(t)
        }, (t.exports = function (t, e, n, c) {
            var a = "function" == typeof n;
            a && (o(n, "name") || i(n, "name", e)), t[e] !== n && (a && (o(n, u) || i(n, u, t[e] ? "" + t[e] : f.join(String(e)))), t === r ? t[e] = n : c ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[u] || c.call(this)
        })
    }, function (t, e, n) {
        var r = n(36);
        t.exports = function (t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e, n) {
        var r = n(42),
            i = n(9);
        t.exports = function (t) {
            return r(i(t))
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e, n) {
        var r = n(8),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }, function (t, e, n) {
        var r = n(2),
            i = n(1),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(15) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, n) {
        var r = n(4).f,
            i = n(7),
            o = n(0)("toStringTag");
        t.exports = function (t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    }, function (t, e, n) {
        var r = n(9);
        t.exports = function (t) {
            return Object(r(t))
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = Math.PI / 180;
        e.default = function (t) {
            return t * r
        }
    }, function (t, e, n) {
        "use strict";
        n(30);
        var r = n(54),
            i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r);
        t.exports = i.default
    }, function (t, e, n) {
        n(31), n(47), t.exports = n(2).Array.from
    }, function (t, e, n) {
        "use strict";
        var r = n(32)(!0);
        n(33)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function (t, e, n) {
        var r = n(8),
            i = n(9);
        t.exports = function (t) {
            return function (e, n) {
                var o, u, c = String(i(e)),
                    f = r(n),
                    a = c.length;
                return f < 0 || f >= a ? t ? "" : void 0 : (o = c.charCodeAt(f), o < 55296 || o > 56319 || f + 1 === a || (u = c.charCodeAt(f + 1)) < 56320 || u > 57343 ? t ? c.charAt(f) : o : t ? c.slice(f, f + 2) : u - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(15),
            i = n(16),
            o = n(19),
            u = n(3),
            c = n(13),
            f = n(37),
            a = n(26),
            s = n(46),
            l = n(0)("iterator"),
            p = !([].keys && "next" in [].keys()),
            h = function () {
                return this
            };
        t.exports = function (t, e, n, d, v, y, _) {
            f(n, e, d);
            var m, g, x, b = function (t) {
                    if (!p && t in M) return M[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                },
                O = e + " Iterator",
                w = "values" == v,
                j = !1,
                M = t.prototype,
                S = M[l] || M["@@iterator"] || v && M[v],
                P = S || b(v),
                A = v ? w ? b("entries") : P : void 0,
                T = "Array" == e ? M.entries || S : S;
            if (T && (x = s(T.call(new t))) !== Object.prototype && x.next && (a(x, O, !0), r || "function" == typeof x[l] || u(x, l, h)), w && S && "values" !== S.name && (j = !0, P = function () {
                    return S.call(this)
                }), r && !_ || !p && !j && M[l] || u(M, l, P), c[e] = P, c[O] = h, v)
                if (m = {
                        values: w ? P : b("values"),
                        keys: y ? P : b("keys"),
                        entries: A
                    }, _)
                    for (g in m) g in M || o(M, g, m[g]);
                else i(i.P + i.F * (p || j), e, m);
            return m
        }
    }, function (t, e, n) {
        t.exports = !n(6) && !n(17)(function () {
            return 7 != Object.defineProperty(n(18)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        var r = n(10);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(38),
            i = n(11),
            o = n(26),
            u = {};
        n(3)(u, n(0)("iterator"), function () {
            return this
        }), t.exports = function (t, e, n) {
            t.prototype = r(u, {
                next: i(1, n)
            }), o(t, e + " Iterator")
        }
    }, function (t, e, n) {
        var r = n(5),
            i = n(39),
            o = n(25),
            u = n(14)("IE_PROTO"),
            c = function () {},
            f = function () {
                var t, e = n(18)("iframe"),
                    r = o.length;
                for (e.style.display = "none", n(45).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), f = t.F; r--;) delete f.prototype[o[r]];
                return f()
            };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[u] = t) : n = f(), void 0 === e ? n : i(n, e)
        }
    }, function (t, e, n) {
        var r = n(4),
            i = n(5),
            o = n(40);
        t.exports = n(6) ? Object.defineProperties : function (t, e) {
            i(t);
            for (var n, u = o(e), c = u.length, f = 0; c > f;) r.f(t, n = u[f++], e[n]);
            return t
        }
    }, function (t, e, n) {
        var r = n(41),
            i = n(25);
        t.exports = Object.keys || function (t) {
            return r(t, i)
        }
    }, function (t, e, n) {
        var r = n(7),
            i = n(21),
            o = n(43)(!1),
            u = n(14)("IE_PROTO");
        t.exports = function (t, e) {
            var n, c = i(t),
                f = 0,
                a = [];
            for (n in c) n != u && r(c, n) && a.push(n);
            for (; e.length > f;) r(c, n = e[f++]) && (~o(a, n) || a.push(n));
            return a
        }
    }, function (t, e, n) {
        var r = n(22);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function (t, e, n) {
        var r = n(21),
            i = n(23),
            o = n(44);
        t.exports = function (t) {
            return function (e, n, u) {
                var c, f = r(e),
                    a = i(f.length),
                    s = o(u, a);
                if (t && n != n) {
                    for (; a > s;)
                        if ((c = f[s++]) != c) return !0
                } else
                    for (; a > s; s++)
                        if ((t || s in f) && f[s] === n) return t || s || 0;
                return !t && -1
            }
        }
    }, function (t, e, n) {
        var r = n(8),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, e) {
            return t = r(t), t < 0 ? i(t + e, 0) : o(t, e)
        }
    }, function (t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement
    }, function (t, e, n) {
        var r = n(7),
            i = n(27),
            o = n(14)("IE_PROTO"),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(20),
            i = n(16),
            o = n(27),
            u = n(48),
            c = n(49),
            f = n(23),
            a = n(50),
            s = n(51);
        i(i.S + i.F * !n(53)(function (t) {
            Array.from(t)
        }), "Array", {
            from: function (t) {
                var e, n, i, l, p = o(t),
                    h = "function" == typeof this ? this : Array,
                    d = arguments.length,
                    v = d > 1 ? arguments[1] : void 0,
                    y = void 0 !== v,
                    _ = 0,
                    m = s(p);
                if (y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)), void 0 == m || h == Array && c(m))
                    for (e = f(p.length), n = new h(e); e > _; _++) a(n, _, y ? v(p[_], _) : p[_]);
                else
                    for (l = m.call(p), n = new h; !(i = l.next()).done; _++) a(n, _, y ? u(l, v, [i.value, _], !0) : i.value);
                return n.length = _, n
            }
        })
    }, function (t, e, n) {
        var r = n(5);
        t.exports = function (t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), e
            }
        }
    }, function (t, e, n) {
        var r = n(13),
            i = n(0)("iterator"),
            o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    }, function (t, e, n) {
        "use strict";
        var r = n(4),
            i = n(11);
        t.exports = function (t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n
        }
    }, function (t, e, n) {
        var r = n(52),
            i = n(0)("iterator"),
            o = n(13);
        t.exports = n(2).getIteratorMethod = function (t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function (t, e, n) {
        var r = n(22),
            i = n(0)("toStringTag"),
            o = "Arguments" == r(function () {
                return arguments
            }()),
            u = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            };
        t.exports = function (t) {
            var e, n, c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = u(e = Object(t), i)) ? n : o ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
        }
    }, function (t, e, n) {
        var r = n(0)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function () {
                i = !0
            }, Array.from(o, function () {
                throw 2
            })
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    u = o[r]();
                u.next = function () {
                    return {
                        done: n = !0
                    }
                }, o[r] = function () {
                    return u
                }, t(o)
            } catch (t) {}
            return n
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            u = n(55),
            c = r(u),
            f = n(56),
            a = r(f),
            s = n(57),
            l = r(s),
            p = n(58),
            h = r(p),
            d = n(59),
            v = r(d),
            y = Math.PI,
            _ = Math.max,
            m = Math.min,
            g = function () {
                function t(e, n) {
                    i(this, t), this.element = e, this.originalHTML = this.element.innerHTML;
                    var r = document.createElement("div"),
                        o = document.createDocumentFragment();
                    r.setAttribute("aria-label", e.innerText), r.style.position = "relative", this.container = r, this._letters = (0, a.default)(e, n), this._letters.forEach(function (t) {
                        return o.appendChild(t)
                    }), r.appendChild(o), this.element.innerHTML = "", this.element.appendChild(r);
                    var u = window.getComputedStyle(this.element),
                        f = u.fontSize,
                        s = u.lineHeight;
                    this._fontSize = parseFloat(f), this._lineHeight = parseFloat(s) || this._fontSize, this._metrics = this._letters.map(c.default);
                    var l = this._metrics.reduce(function (t, e) {
                        return t + e.width
                    }, 0);
                    this._minRadius = l / y / 2 + this._lineHeight, this._dir = 1, this._forceWidth = !1, this._forceHeight = !0, this._radius = this._minRadius, this._invalidate()
                }
                return o(t, [{
                    key: "radius",
                    value: function (t) {
                        return void 0 !== t ? (this._radius = _(this._minRadius, t), this._invalidate(), this) : this._radius
                    }
                }, {
                    key: "dir",
                    value: function (t) {
                        return void 0 !== t ? (this._dir = t, this._invalidate(), this) : this._dir
                    }
                }, {
                    key: "forceWidth",
                    value: function (t) {
                        return void 0 !== t ? (this._forceWidth = t, this._invalidate(), this) : this._forceWidth
                    }
                }, {
                    key: "forceHeight",
                    value: function (t) {
                        return void 0 !== t ? (this._forceHeight = t, this._invalidate(), this) : this._forceHeight
                    }
                }, {
                    key: "refresh",
                    value: function () {
                        return this._invalidate()
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        return this.element.innerHTML = this.originalHTML, this
                    }
                }, {
                    key: "_invalidate",
                    value: function () {
                        var t = this;
                        return cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(function () {
                            t._layout()
                        }), this
                    }
                }, {
                    key: "_layout",
                    value: function () {
                        var t = this,
                            e = this._radius,
                            n = this._dir,
                            r = -1 === n ? -e + this._lineHeight : e,
                            i = "center " + r / this._fontSize + "em",
                            o = e - this._lineHeight,
                            u = (0, v.default)(this._metrics, o),
                            c = u.rotations,
                            f = u.θ;
                        if (this._letters.forEach(function (e, r) {
                                var o = e.style,
                                    u = (-.5 * f + c[r]) * n,
                                    a = -.5 * t._metrics[r].width / t._fontSize,
                                    s = "translateX(" + a + "em) rotate(" + u + "deg)";
                                o.position = "absolute", o.bottom = -1 === n ? 0 : "auto", o.left = "50%", o.transform = s, o.transformOrigin = i, o.webkitTransform = s, o.webkitTransformOrigin = i
                            }), this._forceHeight) {
                            var a = f > 180 ? (0, l.default)(e, f) : (0, l.default)(o, f) + this._lineHeight;
                            this.container.style.height = a / this._fontSize + "em"
                        }
                        if (this._forceWidth) {
                            var s = (0, h.default)(e, m(180, f));
                            this.container.style.width = s / this._fontSize + "em"
                        }
                        return this
                    }
                }]), t
            }();
        e.default = g
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function (t) {
            var e = t.getBoundingClientRect();
            return {
                height: e.height,
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: e.width
            }
        }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
            return Array.from(t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function (t, e) {
            var n = document.createElement("span"),
                i = t.innerText.trim();
            return (e ? e(i) : [].concat(r(i))).map(function (t) {
                var e = n.cloneNode();
                return e.insertAdjacentHTML("afterbegin", " " === t ? "&nbsp;" : t), e
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(28),
            i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r);
        e.default = function (t, e) {
            return t * (1 - Math.cos((0, i.default)(e / 2)))
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(28),
            i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r);
        e.default = function (t, e) {
            return 2 * t * Math.sin((0, i.default)(e / 2))
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n(60),
            i = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(r);
        e.default = function (t, e) {
            return t.reduce(function (t, n) {
                var r = n.width,
                    o = (0, i.default)(r / e);
                return {
                    "θ": t.θ + o,
                    rotations: t.rotations.concat([t.θ + o / 2])
                }
            }, {
                "θ": 0,
                rotations: []
            })
        }
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = 180 / Math.PI;
        e.default = function (t) {
            return t * r
        }
    }])
});
function displayPage (dest, posts) {
  var cards = ''
  // console.log(posts)

  if (posts.length > 0) {
    cards = "<ul class='nav_project'>"
    for (i = 0;i < post_ids.length;i++) {
      displayProjectCard(posts[i])
    }
    cards += '</ul>'
  }
  jQuery('#project-nav').html(cards)
}

function displayPosts (dest, posts) {
  var cards = ''
  // console.log(posts)
  if (posts.length > 0) {
    cards = "<ul class='nav_project'>"
    for (i = 0;i < post_ids.length;i++) {
      //displayProjectCard(posts[i])
    }
    cards += '</ul>'
  }
  
  //jQuery(dest).html(cards)
}

function displayProjects (dest, posts) {
  var cards = ''
  if (posts.length > 0) {type = data[i].type // set the type for the log
      
    posts["p" + data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object


    cards = "<ul class='nav_project'>"
    for (i = 0;i < post_ids.length;i++) {
      
      displayProjectCard(posts[i])
    }
    cards += '</ul>'
  }
  jQuery('#project-nav').html(cards)
}
function displayProjectCard (id) {
  var project = posts[id]
  //console.log('project', id, project)
  var card = '<li class="project-card">'
  card += project.title
  card += '</li>'
  return card
}

function menu_order(a, b) {
  if (a.menu_order < b.menu_order)
    return -1;
  if (a.menu_order > b.menu_order)
    return 1;
  return 0;
}
function post_order(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}

function setLinearNav(menu){
  var counter = 0
  for (var i in menu.items) {
    menu.items[i].post = posts[menu.items[i].object_id]
    id = menu.items[i].object_id.toString()
    linear_nav.push(menu.items[i])
    posts_nav[id] = counter;
    counter++;
  }
  linear_nav.sort(menu_order);
  
  setSlider(linear_nav)
  setSlides(linear_nav)
  
  console.log("posts_nav", posts_nav);

  
}



function displayMenus () {
  var data = [];
  for (var m in menus) {
    if (menu_config[m] != undefined) {
      var items = ''

      //menus[m].items.sort(function(a,b){return a.menu_order-b.menu_order})

      

      menu_array = [];
      for (var i in menus[m].items) {
        //console.log('menu item', menus[m].items[i], menu_config[m].location)
        if (menus[m].items[i].parent == 0) {
         // console.log("menu", menus[m].items[i].title)
          menu_array.push(menus[m].items[i]);
        }
         // items += '<a href="#" class="">' + menus[m].items[i].title + '</a>'
        
      }
      menu_array.sort(menu_order);
      
      
      var children = [];
      for(var a=0;a<menu_array.length;a++){
        children = [];
       for (var c = 0; c < menu_array[a].children.length;c++){
          children.push( // data for childe menus
            {
              "title": menus[m].items[menu_array[a].children[c]].title,
              "id": menus[m].items[menu_array[a].children[c]].id,
              
              "object": menus[m].items[menu_array[a].children[c]].object,
              "object_id": menus[m].items[menu_array[a].children[c]].object_id,// the post id
              "children": menus[m].items[menu_array[a].children[c]].children
            }
          )

       }
        

        data.push({// data for top level
          "title": menu_array[a].title,
          "id": menu_array[a].id,
          "object": menu_array[a].object,
          "object_id": menu_array[a].object_id,//the post_id
          "children":children
        })
      }
      
      setLinearNav(menus[m])
   
      jQuery(menu_config[m].location).html(items)
       if(menu_config[m].menu_type == "wheel"){
         makeWheelNav("outer-nav", data, menu_config[m]._p)
       }
       setSlideShow();


      //circleMenu('.circle a')
    }
  }

  
}

function displayTags (dest, tags) {
  for (var i in tags) {
    //console.log('tag', tags[i].id)
  }
}
function displayCategories (dest, categories) {
  var tabs = "<ul class='nav_cat'>"
  for (var i in categories) {
    tabs += navTab(categories[i])
  //  console.log(dest, 'cat', categories[i].id)
  }
  tabs += '</ul>'
  jQuery(dest).html(tabs)
}

// EVENTS
jQuery('#portfolio').on('click', '.nav__item', function () {
  var cat = jQuery(this).data('id')
  displayProjects(categories[cat].category_posts)

// console.log('posts', categories[cat].category_posts)
})

// pass the type in the route
// param = url arguments for the REST API
// callback is a dynamic function name 
// Pass the name of a function and it will return the data to that function

var posts = {}, categories = {}, tags = {}, menus = {}, linear_nav = [], posts_nav= {}, posts_slug_ids = {}
function getStaticJSON (route, callback, dest) {
  // route =  the type 
  // param = url arguments for the REST API
  // callback = dynamic function name 
  // Pass in the name of a function and it will return the data to that function

   // local absolute path to the REST API + routing arguments
  var endpoint = json_path+route+".json"
  console.log(endpoint);
  jQuery.ajax({
    url: endpoint, // the url 
    data: '',
    success: function (data, textStatus, request) {
      //console.log(endpoint,data)
      return data,
      
        callback(data, dest) // this is the callback that sends the data to your custom function
        
    },
    error: function (data, textStatus, request) {
      console.log(endpoint,data.responseText)
    },

    cache: false
  })
}

getStaticJSON('posts', setPosts, '#posts') // get posts

// retrieves all projects, with fields from REST API
getStaticJSON('pages', setPosts, '#pages') // get pages

// retrieves all projects, with fields from REST API
getStaticJSON('project', setPosts, '#projects') // get the projects

// retrieves all categories for the development category
getStaticJSON('categories',  setCategories, '#category-menu') // returns the children of a specified parent category

// retrieves all categories for the development category
getStaticJSON('tags', setTags, 'tags') // returns the tags

// retrieves top menu
getStaticJSON('menus', setMenus, '#main-menu') // returns the tags




function setPosts (data, dest) { // special function for the any post type

  var type = 'post'
 

if(Array.isArray(data)){

  for (var i = 0;i < data.length;i++) { // loop through the list of data
    //console.log("home", data[i].id)
    /*
      The REST API nests the output of title and content in the rendered variable, 
      so we must unpack and set it our way, which is just .title and .content
    */
    if (data[i].title !== undefined && data[i].title.rendered !== undefined) { // make sure the var is there
      data[i].title = data[i].title.rendered // lose that stupid rendered parameter
    }

    if (data[i].content !== undefined && data[i].content.rendered !== undefined) { // make sure the var is there
      data[i].content = data[i].content.rendered // lose the unnecessary "rendered" parameter
    }
    
    
    //console.log(dest,data[i]);
    if (data[i].type !== undefined) { // make sure the var is there
      type = data[i].type // set the type for the log
      
      posts[data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object
    }
    
  } 
}  else {
    type = data.type // set the type for the log
      
      posts[data.id] = data // adds a key of the post id to address all data in the post as a JSON object

}

  if (type !== undefined) {
    switch (type) {
      case type = 'project':
      //  console.log(dest, posts)
       // displayProjects(dest, posts)
        break
      case type = 'post':
      //  console.log(dest, posts)
        //displayProjects(dest, posts)
        break
      case type = 'page':
       //console.log(dest, posts)
      //  displayProjects(dest, posts)
        break
    }
  }

   
   
  return posts
}

function setMenuItem (item) {
  this_item = {}
  this_item.menu_id = item.ID
  this_item.title = item.title
  this_item.slug = item.slug
  this_item.menu_order = item.menu_order
  this_item.object = item.object
  this_item.object_id = item.object_id
  this_item.parent = item.menu_item_parent
  this_item.children = []

  return this_item
}
function setMenu (dest,slug, items) {
  menu = {}
  for (var i = 0; i < items.length; i++) {
    menu[items[i].ID] = setMenuItem(items[i])
    if (items[i].menu_item_parent != 0) { //recursive
      menu[items[i].menu_item_parent].children.push(items[i].ID)
    } 
    menus[dest].menu_array.push(menu[items[i].ID])

  }
  //console.log("MENU ARRAY",menus[dest].menu_array)
//  console.log(slug, menu)
  return menu
}
function setMenus (data, dest) {
  //console.log("raw menu data",data)
  menus[dest] = {};
  menus[dest].menu_array = [];
  for (var i = 0; i < data.length; i++) {
    menus[data[i].slug] = {}
    menus[data[i].slug].name = data[i].name
   // menus[data[i].slug].slug = data[i].slug
    menus[data[i].slug].items = setMenu(dest,data[i].slug, data[i].items)
  }

  
  
  //console.log("MENUS", menus)
  //console.log("menu array",menus[dest])
  displayMenus();

}




function setChildCategories (data, dest) {
  for (var i = 0;i < data.length;i++) {
    categories[data[i].id] = data[i]
  }
  // console.log('categories', categories)
  //displayCategories(dest, categories)
  return data
}

function setCategories (data, dest) {
  //console.log("categories json", dest, data)
  for (var i = 0;i < data.length;i++) {//creates object of categories by key
    categories[data[i].id] = data[i]
  }
   console.log('categories', categories)
  //displayCategories(dest, categories)
  return data
}
function setTags (data, dest) {
  for (var i = 0; i < data.length; i++) {
    tags[data[i].id] = data[i]
  }
  //  console.log('tags', tags)
  displayTags(dest, tags)
  return data
}







/* 
=== 
  HERE LIES THE GRAVE OF THE VERSION THAT HIT THE REST API EVERY TIME THE USER HIT THE PAGE
  ALAS, SO INEFFICIENT THAT WAS. NOW, in functions/rest-json.php, the json is rendered statically upon save
====

// THE FORMER FUNCTION GET REST WHICH CONCATENATED THE VARIABLES NEEDED TO RETRIEVE.
function getREST(route, params, callback, dest) {
  // route =  the type 
  // param = url arguments for the REST API
  // callback = dynamic function name 
  // Pass in the name of a function and it will return the data to that function

  var endpoint = '/wp-json/wp/v2/' + route // local absolute path to the REST API + routing arguments
  console.log('endpoint', endpoint + "?" + params)
  jQuery.ajax({
    url: endpoint, // the url 
    data: params,
    success: function (data, textStatus, request) {
      //console.log(endpoint,data)
      return data,

        callback(data, dest) // this is the callback that sends the data to your custom function

    },
    error: function (data, textStatus, request) {
      console.log(endpoint, data.responseText)
    },

    cache: false
  })
}


//HERE ARE ALL THE FUNCTION CALLS, LEFT HERE FOR POSTERITY IN CASE YOU WISH TO ATTEMPT SUCH TOMFOOLERY
var REST_post_filter = "filter[orderby]=ID&order=asc&per_page=100";

getREST('posts', 'fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_video,type&'+REST_post_filter, setPosts, '#posts') // get posts

// retrieves all projects, with fields from REST API
getREST('pages', 'fields=id,type,title,content,slug,excerpt,thumbnail_url,video,type&'+REST_post_filter, setPosts, '#pages') // get pages

// retrieves all projects, with fields from REST API
getREST('project', 'fields=id,type,title,content,slug,excerpt,thumbnail_url,project_info,thumbnail_versions,featured_videotype&'+REST_post_filter, setPosts, '#projects') // get the projects

// retrieves all categories for the development category
getREST('categories', 'fields=id,name,count,slug,description,category_posts,children', setCategories, '#category-menu') // returns the children of a specified parent category

// retrieves all categories for the development category
getREST('tags', 'fields=id,name,slug,tag_posts', setTags, 'tags') // returns the tags

// retrieves top menu
getREST('menus', '', setMenus, '#main-menu') // returns the tags
*/
var canvas = document.getElementById('matrix');
var ctx = canvas.getContext('2d');
var fontSize = 18;
var chars = generateChars();
var columns;
var drops; // Current position of last letter (for each column)
var drawnToBottom;

// Generate Matrix code characters
function generateChars() {
    var chars = '0123456789';

    // Get ALL half-width katakana characters by unicode value
    for (var i = 0; i <= 55; i++) {
        chars += String.fromCharCode(i + 65382);
    }

    return chars.split('');
}

// Initialize default canvas state
function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    columns = Math.round(canvas.width / fontSize);
    drops = [];

    // Set initial position on y coordinate for each column
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    drawnToBottom = false;
}

// Resize canvas to fit window
window.onresize = function () {
    initCanvas();
};

function draw() {
    // Set nearly transparent background so character trail is visible
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set color and font of falling letters
    ctx.fillStyle = '#19FF19';
    ctx.font = 'bold ' + fontSize + 'px monospace';

    var dropCount = drops.length;
    var charCount = chars.length;

    for (var i = 0; i < dropCount; i++) {
        // Choose a random letter
        var text = chars[Math.floor(Math.random() * charCount)];
        // Get the y position of the letter
        var rowNum = drops[i] * fontSize;
        // Draw it!
        ctx.fillText(text, i * fontSize, rowNum);

        // Check if the canvas has been drawn to the bottom
        if (rowNum > canvas.height) drawnToBottom = true;

        // Randomly reset the y position of a column
        if ((!drawnToBottom && Math.random() > 0.925) || (drawnToBottom && Math.random() > 0.95)) drops[i] = 0;

        drops[i]++;
    }
}

initCanvas();
setInterval(draw, 160);
var gotoslide = function(slide){
  console.log("click on slick dot ", slide);
  setSlideContent(notch, linear_nav[slide].object_id)
    $( '.slideshow' ).slickGoTo(parseInt(slide));
}
jQuery('.slick-dots li button').on('click', function (e) {
   e.stopPropagation(); // use this
  console.log("slick dot clicked")
});
function setSlideShow(){
  jQuery('.slideshow').slick({
  //	autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase:  'linear',
    focusoOnSelect: true,
    nextArrow: '<i class="slick-arrow slick-next"></i>',
    prevArrow: '<i class="slick-arrow slick-prev"></i>',
     
  });
}
function setSlide(slide,id){
  /*
  these carousel slides are created here, but their content is populated dynamically
  because it was unreliable populating the content in a loop
  see setSlideContent in app.js
  */
  slide = '\n<div><div id="slide'+slide+'" data-id="'+id+'" class="slide-wrap">'
  slide += '\n\t<h2></h2>'
  slide += '\n\t<div class="img-wrap"></div>'
  slide += '\n\t<section><div class="content"></div></section>'
  slide +='\n</div></div>\n';

  return slide
}


function setSlides(){
  var id="0"
  var content = ''
  var title = ''
  var slides = ''
 console.log("Begin Render Slides", linear_nav, posts)
  if(posts == undefined){
    console.log("No Posts Data Yet",  posts)
    window.setTimeout(setSlides(), 100);//without this, we cannot relay that the post data is available yet
  } else {
  
  for(i=0;linear_nav[i];i++){
    
     id = linear_nav[i].object_id.toString()
  
      slides += setSlide(i,id)
   
  }
  console.log("slides rendered")


  jQuery('#article').html(slides);
 
  }


}
var $carousel = jQuery('.slideshow');
jQuery(document).on('keydown', function(e) {
    if(e.keyCode == 37) {
        $carousel.slick('slickPrev');
    }
    if(e.keyCode == 39) {
        $carousel.slick('slickNext');
    }
});

jQuery('a[data-slide]').click(function(e) {
        console.log("click on slick dot ", slide);
  e.preventDefault();
  var slide = jQuery(this).data('slide');
  console.log("click on slick dot ", slide);
  setSlideContent(notch, linear_nav[slide].object_id)
  //$carousel.slick('slickGoTo', slideno);

});
function setSlider(){
 // console.log("Set Slider", orientation)
  
    jQuery( "#slider" ).slider({
      orientation: orientation,
      range: "max",
      min: 0,
      max: linear_nav.length,
      value: 0,
      slide: function( event, ui ) {
        setSliderNotch(ui.value)
        console.log("slider",ui.value)
       // jQuery( "#amount" ).val( ui.value );
      }


      
    });
  
    


}
jQuery('#slider').on('mousewheel', function(event) {
  event.preventDefault();
  value = jQuery( "#slider" ).slider( "value" );

  //console.log(event.deltaX, event.deltaY, event.deltaFactor);

  //Mousewheel Scrolled up
  if(event.deltaY == -1){
      //alert("scrolled down");
      value = value+1;
      setSliderNotch(value)
  }
  //Mousewheel Scrolled down
  else if(event.deltaY == 1){
      //alert("scrolled up");
      value = value-1;
      setSliderNotch(value)
      
  }
  
});

function setSliderNotch(notch){
 

   console.log("notch",notch,linear_nav[notch].object_id)
   if (linear_nav[notch] != undefined){
      setContent(notch, linear_nav[notch].object_id)

   }
 // document.title = linear_nav[notch].title+" | "+site_title
}
// Declare three.js variables
var camera, scene, renderer, stars = []

// assign three.js objects to each variable
function init () {

  // camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
  camera.position.z = 5

  // scene
  scene = new THREE.Scene()

  // renderer
  renderer = new THREE.WebGLRenderer()
  // set the size of the renderer
  renderer.setSize(window.innerWidth, window.innerHeight)

  // add the renderer to the html document body
  jQuery('#stars').append(renderer.domElement)
}

function addSphere () {

  // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
  for ( var z = -1000; z < 1000; z += 20) {

    // Make a sphere (exactly the same as before). 
    var geometry = new THREE.SphereGeometry(0.5, 32, 32)
    var material = new THREE.MeshBasicMaterial({color: 0xffffff})
    var sphere = new THREE.Mesh(geometry, material)

    // This time we give the sphere random x and y positions between -500 and 500
    sphere.position.x = Math.random() * 1000 - 500
    sphere.position.y = Math.random() * 1000 - 500

    // Then set the z position to where it is in the loop (distance of camera)
    sphere.position.z = z

    // scale it up a bit
    sphere.scale.x = sphere.scale.y = 2

    // add the sphere to the scene
    scene.add(sphere)

    // finally push it to the stars array 
    stars.push(sphere)
  }
}

function animateStars () {

  // loop through each star
  for (var i = 0; i < stars.length; i++) {
    star = stars[i]

    // and move it forward dependent on the mouseY position. 
    star.position.z += i / 10

    // if the particle is too close move it to the back
    if (star.position.z > 1000) star.position.z -= 2000
  }
}

function render () {
  // get the frame
  requestAnimationFrame(render)

  // render the scene
  renderer.render(scene, camera)
  animateStars()
}

init()
addSphere()
render()
jQuery(window).on('resize', function () {
  renderer.setSize(window.innerWidth, window.innerHeight)
  
})
//renderer.setSize(window.innerWidth, window.innerHeight)


var menu_config = {
    'top-menu': {
        'menu_type': 'wheel',
        'location': '#outer-nav',
        '_p': {
            'maxPercent': 1,
            'min': 0.91,
            'max': 1,
            'sel_min': 0.91,
            'sel_max': 1,
        }
    }
}
var inner_nav_params = {
    'maxPercent': 1,
    'min': 0.91,
    'max': 1,
    'sel_min': 0.91,
    'sel_max': 1.0,
}
var inner_subnav_params = {
    'maxPercent': 1,
    'min': 0.90,
    'max': 1,
    'sel_min': 0.90,
    'sel_max': 1.0,
}
/**/
var menu_raphael = {}
var wheels = {}
function makeWheelNav(dest,data,_p){
    //console.log(dest,data,_p);

    if(dest == "outer-nav"){
        child_dest = "inner-nav"
        child_params = inner_nav_params;
    } else if (dest == "inner-nav"){
        child_dest = 'inner-subnav'
        child_params = inner_subnav_params;
    } 


    var titles = [];
    var ids = []
    wheels[dest] = new wheelnav(dest);
    //console.log(dest,data,_p);
    wheels[dest].spreaderEnable = false;
//    WebSlice.titleRotateAngle -45;
    wheels[dest].cssMode = true;
    wheels[dest].navAngle = 270;
    
    wheels[dest].maxPercent = _p.maxPercent;
   // wheels[dest].clickModeRotate = false;
    wheels[dest].slicePathFunction = slicePath().DonutSlice;
    wheels[dest].slicePathCustom = slicePath().PieSliceCustomization();
    wheels[dest].slicePathCustom.minRadiusPercent = _p.min;
    wheels[dest].slicePathCustom.maxRadiusPercent = _p.max;
    wheels[dest].sliceSelectedPathCustom = slicePath().PieSliceCustomization();
    wheels[dest].sliceSelectedPathCustom.minRadiusPercent = _p.sel_min;
    wheels[dest].sliceSelectedPathCustom.maxRadiusPercent = _p.sel_max;
    wheels[dest].titleSelectedAttr = {
      
    };

    for(i=0;i<data.length;i++){
       // console.log(data[i]);
        titles.push(data[i].title);
        ids.push(data[i].id)
    }
    wheels[dest].initWheel(titles) // init before creating wheel so we can define the items.
    

    var rotation = 90; //first item is is the default rotation
    var degrees = (360 / wheels[dest].navItemCount); //divide circle by number of items
    var tilt = rotation // default the tilt of text to the rotation
    for (i = 0; i < wheels[dest].navItemCount; i++) { // loop through items
       // console.log("tilt"+i,titles[i],tilt);
       
       
        wheels[dest].navItems[i].titleRotateAngle = tilt; // set tilt
        tilt = degrees+(rotation-degrees) // rotate angle is additive using this formula
        
        
    }
  

    wheels[dest].createWheel();
    counter = 0;
    for (var i = 0; i < wheels[dest].navItemCount; i++) {
        
        
       // console.log("local-data",i,data[i]);
        type = data[i].type // set the type for the log
        if(type == "category"){
            data[i].object = "category"
    
            data[i].object_id = data[i].id  
        }
        wheels[dest].navItems[i].data = data[i];
        posts[data[i].id] = data[i] // adds a key of the post id to address all data in the post as a JSON object
        
        


        wheels[dest].navItems[i].navigateFunction = function () {
        
            //console.log(child_dest,"this",this.data);
            if(this.data.children.length>0){ 

                makeWheelNav(child_dest, this.data.children, child_params)
                console.log("child dest", child_dest)

            } else {
                console.log("no-children of",dest)
                popAWheelie(dest)
                


               
            }
          
               
            
            setContent(child_dest,this.data.object_id,this.data.object)
           
        }
    
    }
    menu_raphael[dest] = wheels[dest].raphael
    
    reposition_screen()

  // console.log(dest,menu_raphael[dest]);
}


function popAWheelie(dest){
    if (dest == "outer-nav" && wheels["inner-nav"] != undefined) {
        wheels["inner-nav"].raphael.remove();
        child_dest = "inner-nav"
        if(wheels["inner-subnav"] != undefined){
            wheels["inner-subnav"].raphael.remove()
        }
    } else if (dest == "inner-nav") {
        if (wheels["inner-subnav"] != undefined) {
            wheels["inner-subnav"].raphael.remove()
            child_dest = "inner-subnav"
        }
    }


}

window.onload = function () {
    
}
