! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("jquery"));
    else if ("function" == typeof define && define.amd) define(["jquery"], t);
    else {
        var r = "object" == typeof exports ? t(require("jquery")) : t(e.$);
        for (var i in r)("object" == typeof exports ? exports : e)[i] = r[i]
    }
}(this, (function(e) {
    return function(e) {
        var t = {};

        function r(i) {
            if (t[i]) return t[i].exports;
            var o = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function(e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(i, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return i
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 38)
    }({
        0: function(t, r) {
            t.exports = e
        },
        38: function(e, t, r) {
            "use strict";
            r(39)
        },
        39: function(e, t, r) {
            "use strict";
            (function(e) {
                
                t.datepickerExample = function() {
                  $(document).ready(function() {
                    $("#datepicker").datetimepicker({
                        locale: "sv",
                        format: "YYYY-MM-DD",
                        allowInputToggle: !0
                    }), $(".datepicker").on("dp.show", (function() {
                        $("#datepicker .bootstrap-datetimepicker-widget").attr("aria-hidden", "true"), e(".datepicker button").addClass("active")
                    })), $(".datepicker").on("dp.hide", (function() {
                        $(".datepicker button").removeClass("active")
                    }))
                });
                }, t.timepickerExample = function() {
                    e("#timepicker").datetimepicker({
                        format: "LT",
                        locale: "sv",
                        allowInputToggle: !0,
                        icons: {
                            up: "next",
                            down: "prev"
                        }
                    }), e(".datepicker").on("dp.show", (function() {
                        e("#datetimepicker .bootstrap-datetimepicker-widget").attr("aria-hidden", "true"), e(".datepicker button").addClass("active")
                    })), e(".datepicker").on("dp.hide", (function() {
                        e(".datepicker button").removeClass("active")
                    }))
                }, t.disabledDatesExample = function() {
                    e("#datetimepicker-disabled-input").datetimepicker({
                        format: "YYYY-MM-DD",
                        locale: "sv",
                        allowInputToggle: !0,
                        defaultDate: "2017/06/02",
                        disabledDates: ["2017/06/04", "2017/06/05", "2017/06/06"]
                    }), e(".datepicker").on("dp.show", (function() {
                        e("#datetimepicker .bootstrap-datetimepicker-widget").attr("aria-hidden", "true"), e(".datepicker button").addClass("active")
                    })), e(".datepicker").on("dp.hide", (function() {
                        e(".datepicker button").removeClass("active")
                    }))
                }
            }).call(this, r(0))
        }
    })
}));