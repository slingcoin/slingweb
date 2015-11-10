




/*
     FILE ARCHIVED ON 19:20:14 May 26, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 2:42:15 Nov 10, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.6.4 (26.11.2014)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
 **************************************************************************/


function revslider_showDoubleJqueryError(e) {
    var t = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    t += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    t += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    t += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    t = "<span style='font-size:16px;color:#BC0C06;'>" + t + "</span>";
    jQuery(e).show().html(t)
}(function(e, t) {
    function n() {
        var e = false;
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
            if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) {
                e = true
            }
        } else {
            e = false
        }
        return e
    }

    function r(r, i) {
        if (r == t) return false;
        if (r.data("aimg") != t) {
            if (r.data("aie8") == "enabled" && a(8) || r.data("amobile") == "enabled" && J()) r.html('<img class="tp-slider-alternative-image" src="' + r.data("aimg") + '">')
        }
        if (i.navigationStyle == "preview1" || i.navigationStyle == "preview3" || i.navigationStyle == "preview4") {
            i.soloArrowLeftHalign = "left";
            i.soloArrowLeftValign = "center";
            i.soloArrowLeftHOffset = 0;
            i.soloArrowLeftVOffset = 0;
            i.soloArrowRightHalign = "right";
            i.soloArrowRightValign = "center";
            i.soloArrowRightHOffset = 0;
            i.soloArrowRightVOffset = 0;
            i.navigationArrows = "solo"
        }
        if (i.simplifyAll == "on" && (a(8) || n())) {
            r.find(".tp-caption").each(function() {
                var t = e(this);
                t.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout");
                t.data("splitin", "");
                t.data("speed", 400)
            });
            r.find(">ul>li").each(function() {
                var t = e(this);
                t.data("transition", "fade");
                t.data("masterspeed", 500);
                t.data("slotamount", 1);
                var n = t.find(">img").first();
                n.data("kenburns", "off")
            })
        }
        i.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i);
        if (i.fullWidth != "on" && i.fullScreen != "on") i.autoHeight = "off";
        if (i.fullScreen == "on") i.autoHeight = "on";
        if (i.fullWidth != "on" && i.fullScreen != "on") forceFulWidth = "off";
        if (i.fullWidth == "on" && i.autoHeight == "off") r.css({
            maxHeight: i.startheight + "px"
        });
        if (J() && i.hideThumbsOnMobile == "on" && i.navigationType == "thumb") i.navigationType = "none";
        if (J() && i.hideBulletsOnMobile == "on" && i.navigationType == "bullet") i.navigationType = "none";
        if (J() && i.hideBulletsOnMobile == "on" && i.navigationType == "both") i.navigationType = "none";
        if (J() && i.hideArrowsOnMobile == "on") i.navigationArrows = "none";
        if (i.forceFullWidth == "on" && r.closest(".forcefullwidth_wrapper_tp_banner").length == 0) {
            var f = r.parent().offset().left;
            var v = r.parent().css("marginBottom");
            var m = r.parent().css("marginTop");
            if (v == t) v = 0;
            if (m == t) m = 0;
            r.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + m + ";margin-bottom:" + v + '" class="forcefullwidth_wrapper_tp_banner"></div>');
            r.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + r.height() + 'px"></div>');
            r.css({
                backgroundColor: r.parent().css("backgroundColor"),
                backgroundImage: r.parent().css("backgroundImage")
            });
            r.parent().css({
                left: 0 - f + "px",
                position: "absolute",
                width: e(window).width()
            });
            i.width = e(window).width()
        }
        try {
            if (i.hideThumbsUnderResolution > e(window).width() && i.hideThumbsUnderResolution != 0) {
                r.parent().find(".tp-bullets.tp-thumbs").css({
                    display: "none"
                })
            } else {
                r.parent().find(".tp-bullets.tp-thumbs").css({
                    display: "block"
                })
            }
        } catch (g) {}
        if (!r.hasClass("revslider-initialised")) {
            r.addClass("revslider-initialised");
            if (r.attr("id") == t) r.attr("id", "revslider-" + Math.round(Math.random() * 1e3 + 5));
            i.firefox13 = false;
            i.ie = !e.support.opacity;
            i.ie9 = document.documentMode == 9;
            i.origcd = i.delay;
            var b = e.fn.jquery.split("."),
                w = parseFloat(b[0]),
                E = parseFloat(b[1]),
                S = parseFloat(b[2] || "0");
            if (w == 1 && E < 7) {
                r.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + b + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>")
            }
            if (w > 1) i.ie = false;
            if (!e.support.transition) e.fn.transition = e.fn.animate;
            r.find(".caption").each(function() {
                e(this).addClass("tp-caption")
            });
            if (J()) {
                r.find(".tp-caption").each(function() {
                    var t = e(this);
                    if (t.data("autoplayonlyfirsttime") == true || t.data("autoplayonlyfirsttime") == "true") t.data("autoplayonlyfirsttime", "false");
                    if (t.data("autoplay") == true || t.data("autoplay") == "true") t.data("autoplay", false)
                })
            }
            var x = 0;
            var T = 0;
            var C = 0;
            var k = "http";
            if (location.protocol === "https:") {
                k = "https"
            }
            r.find(".tp-caption").each(function(n) {
                try {
                    if ((e(this).data("ytid") != t || e(this).find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && x == 0) {
                        x = 1;
                        var r = document.createElement("script");
                        var i = "https";
                        r.src = i + "://www.youtube.com/iframe_api";
                        var s = document.getElementsByTagName("script")[0];
                        var o = true;
                        e("head").find("*").each(function() {
                            if (e(this).attr("src") == i + "://www.youtube.com/iframe_api") o = false
                        });
                        if (o) {
                            s.parentNode.insertBefore(r, s)
                        }
                    }
                } catch (u) {}
                try {
                    if ((e(this).data("vimeoid") != t || e(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && T == 0) {
                        T = 1;
                        var a = document.createElement("script");
                        a.src = k + "://a.vimeocdn.com/js/froogaloop2.min.js";
                        var s = document.getElementsByTagName("script")[0];
                        var o = true;
                        e("head").find("*").each(function() {
                            if (e(this).attr("src") == k + "://a.vimeocdn.com/js/froogaloop2.min.js") o = false
                        });
                        if (o) s.parentNode.insertBefore(a, s)
                    }
                } catch (u) {}
                try {
                    if (e(this).data("videomp4") != t || e(this).data("videowebm") != t) {}
                } catch (u) {}
            });
            r.find(".tp-caption video").each(function(t) {
                e(this).removeClass("video-js").removeClass("vjs-default-skin");
                e(this).attr("preload", "");
                e(this).css({
                    display: "none"
                })
            });
            r.find(">ul:first-child >li").each(function() {
                var t = e(this);
                t.data("origindex", t.index())
            });
            if (i.shuffle == "on") {
                var L = new Object,
                    A = r.find(">ul:first-child >li:first-child");
                L.fstransition = A.data("fstransition");
                L.fsmasterspeed = A.data("fsmasterspeed");
                L.fsslotamount = A.data("fsslotamount");
                for (var O = 0; O < r.find(">ul:first-child >li").length; O++) {
                    var M = Math.round(Math.random() * r.find(">ul:first-child >li").length);
                    r.find(">ul:first-child >li:eq(" + M + ")").prependTo(r.find(">ul:first-child"))
                }
                var _ = r.find(">ul:first-child >li:first-child");
                _.data("fstransition", L.fstransition);
                _.data("fsmasterspeed", L.fsmasterspeed);
                _.data("fsslotamount", L.fsslotamount)
            }
            i.slots = 4;
            i.act = -1;
            i.next = 0;
            if (i.startWithSlide != t) i.next = i.startWithSlide;
            var D = o("#")[0];
            if (D.length < 9) {
                if (D.split("slide").length > 1) {
                    var P = parseInt(D.split("slide")[1], 0);
                    if (P < 1) P = 1;
                    if (P > r.find(">ul:first >li").length) P = r.find(">ul:first >li").length;
                    i.next = P - 1
                }
            }
            i.firststart = 1;
            if (i.navigationHOffset == t) i.navOffsetHorizontal = 0;
            if (i.navigationVOffset == t) i.navOffsetVertical = 0;
            r.append('<div class="tp-loader ' + i.spinner + '">' + '<div class="dot1"></div>' + '<div class="dot2"></div>' + '<div class="bounce1"></div>' + '<div class="bounce2"></div>' + '<div class="bounce3"></div>' + "</div>");
            if (r.find(".tp-bannertimer").length == 0) r.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
            var H = r.find(".tp-bannertimer");
            if (H.length > 0) {
                H.css({
                    width: "0%"
                })
            }
            r.addClass("tp-simpleresponsive");
            i.container = r;
            i.slideamount = r.find(">ul:first >li").length;
            if (r.height() == 0) r.height(i.startheight);
            if (i.startwidth == t || i.startwidth == 0) i.startwidth = r.width();
            if (i.startheight == t || i.startheight == 0) i.startheight = r.height();
            i.width = r.width();
            i.height = r.height();
            i.bw = i.startwidth / r.width();
            i.bh = i.startheight / r.height();
            if (i.width != i.startwidth) {
                i.height = Math.round(i.startheight * (i.width / i.startwidth));
                r.height(i.height)
            }
            if (i.shadow != 0) {
                r.parent().append('<div class="tp-bannershadow tp-shadow' + i.shadow + '"></div>');
                var f = 0;
                if (i.forceFullWidth == "on") f = 0 - i.container.parent().offset().left;
                r.parent().find(".tp-bannershadow").css({
                    width: i.width,
                    left: f
                })
            }
            r.find("ul").css({
                display: "none"
            });
            var B = r;
            r.find("ul").css({
                display: "block"
            });
            y(r, i);
            if (i.parallax != "off") et(r, i);
            if (i.slideamount > 1) l(r, i);
            if (i.slideamount > 1 && i.navigationType == "thumb") nt(r, i);
            if (i.slideamount > 1) c(r, i);
            if (i.keyboardNavigation == "on") h(r, i);
            p(r, i);
            if (i.hideThumbs > 0) d(r, i);
            setTimeout(function() {
                N(r, i)
            }, i.startDelay);
            i.startDelay = 0;
            if (i.slideamount > 1) $(r, i);
            setTimeout(function() {
                r.trigger("revolution.slide.onloaded")
            }, 500);
            e("body").data("rs-fullScreenMode", false);
            e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode"));
                if (e("body").data("rs-fullScreenMode")) {
                    setTimeout(function() {
                        e(window).trigger("resize")
                    }, 200)
                }
            });
            var j = "resize.revslider-" + r.attr("id");
            e(window).on(j, function() {
                if (r == t) return false;
                if (e("body").find(r) != 0)
                    if (i.forceFullWidth == "on") {
                        var n = i.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                        i.container.parent().css({
                            left: 0 - n + "px",
                            width: e(window).width()
                        })
                    }
                if (r.outerWidth(true) != i.width || r.is(":hidden")) {
                    u(r, i)
                }
            });
            try {
                if (i.hideThumbsUnderResoluition != 0 && i.navigationType == "thumb") {
                    if (i.hideThumbsUnderResoluition > e(window).width()) e(".tp-bullets").css({
                        display: "none"
                    });
                    else e(".tp-bullets").css({
                        display: "block"
                    })
                }
            } catch (g) {}
            r.find(".tp-scrollbelowslider").on("click", function() {
                var t = 0;
                try {
                    t = e("body").find(i.fullScreenOffsetContainer).height()
                } catch (n) {}
                try {
                    t = t - parseInt(e(this).data("scrolloffset"), 0)
                } catch (n) {}
                e("body,html").animate({
                    scrollTop: r.offset().top + r.find(">ul >li").height() - t + "px"
                }, {
                    duration: 400
                })
            });
            var F = r.parent();
            if (e(window).width() < i.hideSliderAtLimit) {
                r.trigger("stoptimer");
                if (F.css("display") != "none") F.data("olddisplay", F.css("display"));
                F.css({
                    display: "none"
                })
            }
            s(r, i)
        }
    }
    e.fn.extend({
        revolution: function(n) {
            var i = {
                delay: 9e3,
                startheight: 500,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",
                hideTimerBar: "off",
                hideThumbs: 200,
                hideNavDelayOnMobile: 1500,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationInGrid: "off",
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,
                navigationStyle: "round",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                keyboardNavigation: "on",
                touchenabled: "on",
                onHoverStop: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",
                minFullScreenHeight: 0,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                dottedOverlay: "none",
                forceFullWidth: "off",
                spinner: "spinner0",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                isJoomla: false,
                parallax: "off",
                parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                parallaxBgFreeze: "off",
                parallaxOpacity: "on",
                parallaxDisableOnMobile: "off",
                panZoomDisableOnMobile: "off",
                simplifyAll: "on",
                minHeight: 0,
                nextSlideOnWindowFocus: "off",
                startDelay: 0
            };
            n = e.extend({}, i, n);
            return this.each(function() {
                if (punchgs.TweenLite == t) {
                    if (window.tplogs == true) try {
                        console.error("GreenSock Engine Does not Exist!")
                    } catch (i) {}
                    return false
                }
                punchgs.force3D = true;
                if (n.simplifyAll == "on") {} else {
                    punchgs.TweenLite.lagSmoothing(1e3, 16);
                    punchgs.force3D = "true"
                }
                if (window.tplogs == true) try {
                    console.groupEnd();
                    console.groupEnd()
                } catch (i) {}
                r(e(this), n)
            })
        },
        revscroll: function(n) {
            return this.each(function() {
                var r = e(this);
                if (r != t && r.length > 0 && e("body").find("#" + r.attr("id")).length > 0) e("body,html").animate({
                    scrollTop: r.offset().top + r.find(">ul >li").height() - n + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                    var r = n.parent().find(".tp-bannertimer");
                    var i = r.data("opt");
                    u(n, i)
                }
            })
        },
        revkill: function(n) {
            var r = this,
                i = e(this);
            if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                i.data("conthover", 1);
                i.data("conthover-changed", 1);
                i.trigger("revolution.slide.onpause");
                var s = i.parent().find(".tp-bannertimer");
                var o = s.data("opt");
                o.bannertimeronpause = true;
                i.trigger("stoptimer");
                punchgs.TweenLite.killTweensOf(i.find("*"), false);
                punchgs.TweenLite.killTweensOf(i, false);
                i.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var u = "resize.revslider-" + i.attr("id");
                e(window).off(u);
                i.find("*").each(function() {
                    var n = e(this);
                    n.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer");
                    n.off("on, hover, mouseenter,mouseleave,mouseover, resize");
                    n.data("mySplitText", null);
                    n.data("ctl", null);
                    if (n.data("tween") != t) n.data("tween").kill();
                    if (n.data("kenburn") != t) n.data("kenburn").kill();
                    n.remove();
                    n.empty();
                    n = null
                });
                punchgs.TweenLite.killTweensOf(i.find("*"), false);
                punchgs.TweenLite.killTweensOf(i, false);
                s.remove();
                try {
                    i.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (a) {}
                try {
                    i.closest(".rev_slider_wrapper").remove()
                } catch (a) {}
                try {
                    i.remove()
                } catch (a) {}
                i.empty();
                i.html();
                i = null;
                o = null;
                delete r.container;
                delete r.opt;
                return true
            } else {
                return false
            }
        },
        revpause: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                    n.data("conthover", 1);
                    n.data("conthover-changed", 1);
                    n.trigger("revolution.slide.onpause");
                    var r = n.parent().find(".tp-bannertimer");
                    var i = r.data("opt");
                    i.bannertimeronpause = true;
                    n.trigger("stoptimer")
                }
            })
        },
        revresume: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                    n.data("conthover", 0);
                    n.data("conthover-changed", 1);
                    n.trigger("revolution.slide.onresume");
                    var r = n.parent().find(".tp-bannertimer");
                    var i = r.data("opt");
                    i.bannertimeronpause = false;
                    n.trigger("starttimer")
                }
            })
        },
        revnext: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) n.parent().find(".tp-rightarrow").click()
            })
        },
        revprev: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) n.parent().find(".tp-leftarrow").click()
            })
        },
        revmaxslide: function(t) {
            return e(this).find(">ul:first-child >li").length
        },
        revcurrentslide: function(n) {
            var r = e(this);
            if (r != t && r.length > 0 && e("body").find("#" + r.attr("id")).length > 0) {
                var i = r.parent().find(".tp-bannertimer");
                var s = i.data("opt");
                return s.act
            }
        },
        revlastslide: function(n) {
            var r = e(this);
            if (r != t && r.length > 0 && e("body").find("#" + r.attr("id")).length > 0) {
                var i = r.parent().find(".tp-bannertimer");
                var s = i.data("opt");
                return s.lastslide
            }
        },
        revshowslide: function(n) {
            return this.each(function() {
                var r = e(this);
                if (r != t && r.length > 0 && e("body").find("#" + r.attr("id")).length > 0) {
                    r.data("showus", n);
                    r.parent().find(".tp-rightarrow").click()
                }
            })
        }
    });
    var i = function() {
        var e, t, n = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };
        for (e in n) {
            if (e in document) {
                t = n[e];
                break
            }
        }
        return function(n) {
            if (n) document.addEventListener(t, n);
            return !document[e]
        }
    }();
    var s = function(n, r) {
        var i = document.documentMode === t,
            s = window.chrome;
        if (i && !s) {
            e(window).on("focusin", function() {
                if (n == t) return false;
                setTimeout(function() {
                    if (r.nextSlideOnWindowFocus == "on") n.revnext();
                    n.revredraw()
                }, 300)
            }).on("focusout", function() {})
        } else {
            if (window.addEventListener) {
                window.addEventListener("focus", function(e) {
                    if (n == t) return false;
                    setTimeout(function() {
                        if (r.nextSlideOnWindowFocus == "on") n.revnext();
                        n.revredraw()
                    }, 300)
                }, false);
                window.addEventListener("blur", function(e) {}, false)
            } else {
                window.attachEvent("focus", function(e) {
                    setTimeout(function() {
                        if (n == t) return false;
                        if (r.nextSlideOnWindowFocus == "on") n.revnext();
                        n.revredraw()
                    }, 300)
                });
                window.attachEvent("blur", function(e) {})
            }
        }
    };
    var o = function(e) {
        var t = [],
            n;
        var r = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_");
        for (var i = 0; i < r.length; i++) {
            r[i] = r[i].replace("%3D", "=");
            n = r[i].split("=");
            t.push(n[0]);
            t[n[0]] = n[1]
        }
        return t
    };
    var u = function(n, r) {
        if (n == t) return false;
        try {
            if (r.hideThumbsUnderResoluition != 0 && r.navigationType == "thumb") {
                if (r.hideThumbsUnderResoluition > e(window).width()) e(".tp-bullets").css({
                    display: "none"
                });
                else e(".tp-bullets").css({
                    display: "block"
                })
            }
        } catch (i) {}
        n.find(".defaultimg").each(function(t) {
            g(e(this), r)
        });
        var s = n.parent();
        if (e(window).width() < r.hideSliderAtLimit) {
            n.trigger("stoptimer");
            if (s.css("display") != "none") s.data("olddisplay", s.css("display"));
            s.css({
                display: "none"
            })
        } else {
            if (n.is(":hidden")) {
                if (s.data("olddisplay") != t && s.data("olddisplay") != "undefined" && s.data("olddisplay") != "none") s.css({
                    display: s.data("olddisplay")
                });
                else s.css({
                    display: "block"
                });
                n.trigger("restarttimer");
                setTimeout(function() {
                    u(n, r)
                }, 150)
            }
        }
        var o = 0;
        if (r.forceFullWidth == "on") o = 0 - r.container.parent().offset().left;
        try {
            n.parent().find(".tp-bannershadow").css({
                width: r.width,
                left: o
            })
        } catch (i) {}
        var a = n.find(">ul >li:eq(" + r.act + ") .slotholder");
        var f = n.find(">ul >li:eq(" + r.next + ") .slotholder");
        E(n, r, n);
        punchgs.TweenLite.set(f.find(".defaultimg"), {
            opacity: 0
        });
        a.find(".defaultimg").css({
            opacity: 1
        });
        f.find(".defaultimg").each(function() {
            var i = e(this);
            if (r.panZoomDisableOnMobile == "on") {} else {
                if (i.data("kenburn") != t) {
                    i.data("kenburn").restart();
                    Q(n, r, true)
                }
            }
        });
        var l = n.find(">ul >li:eq(" + r.next + ")");
        var c = n.parent().find(".tparrows");
        if (c.hasClass("preview2")) c.css({
            width: parseInt(c.css("minWidth"), 0)
        });
        j(l, r, true);
        v(n, r)
    };
    var a = function(t, n) {
        var r = e('<div style="display:none;"/>').appendTo(e("body"));
        r.html("<!--[if " + (n || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]-->");
        var i = r.find("a").length;
        r.remove();
        return i
    };
    var f = function(e, t) {
        if (e.next == t.find(">ul >li").length - 1) {
            e.looptogo = e.looptogo - 1;
            if (e.looptogo <= 0) e.stopLoop = "on"
        }
        N(t, e)
    };
    var l = function(t, n) {
        var r = "hidebullets";
        if (n.hideThumbs == 0) r = "";
        if (n.navigationType == "bullet" || n.navigationType == "both") {
            t.parent().append('<div class="tp-bullets ' + r + " simplebullets " + n.navigationStyle + '"></div>')
        }
        var i = t.parent().find(".tp-bullets");
        t.find(">ul:first >li").each(function(e) {
            var n = t.find(">ul:first >li:eq(" + e + ") img:first").attr("src");
            i.append('<div class="bullet"></div>');
            var r = i.find(".bullet:first")
        });
        i.find(".bullet").each(function(r) {
            var i = e(this);
            if (r == n.slideamount - 1) i.addClass("last");
            if (r == 0) i.addClass("first");
            i.click(function() {
                var e = false,
                    r = i.index();
                if (n.navigationArrows == "withbullet" || n.navigationArrows == "nexttobullets") r = i.index() - 1;
                if (r == n.act) e = true;
                if (n.transition == 0 && !e) {
                    n.next = r;
                    f(n, t)
                }
            })
        });
        i.append('<div class="tpclear"></div>');
        v(t, n)
    };
    var c = function(e, n) {
        function u(t) {
            e.parent().append('<div style="' + i + '" class="tp-' + t + "arrow " + s + " tparrows " + o + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
        }
        var r = e.find(".tp-bullets"),
            i = "",
            s = "hidearrows",
            o = n.navigationStyle;
        if (n.hideThumbs == 0) s = "";
        if (n.navigationArrows == "none") i = "visibility:hidden;display:none";
        n.soloArrowStyle = "default" + " " + n.navigationStyle;
        if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets") o = n.soloArrowStyle;
        u("left");
        u("right");
        e.parent().find(".tp-rightarrow").click(function() {
            if (n.transition == 0) {
                if (e.data("showus") != t && e.data("showus") != -1) n.next = e.data("showus") - 1;
                else n.next = n.next + 1;
                e.data("showus", -1);
                if (n.next >= n.slideamount) n.next = 0;
                if (n.next < 0) n.next = 0;
                if (n.act != n.next) f(n, e)
            }
        });
        e.parent().find(".tp-leftarrow").click(function() {
            if (n.transition == 0) {
                n.next = n.next - 1;
                n.leftarrowpressed = 1;
                if (n.next < 0) n.next = n.slideamount - 1;
                f(n, e)
            }
        });
        v(e, n)
    };
    var h = function(n, r) {
        e(document).keydown(function(e) {
            if (r.transition == 0 && e.keyCode == 39) {
                if (n.data("showus") != t && n.data("showus") != -1) r.next = n.data("showus") - 1;
                else r.next = r.next + 1;
                n.data("showus", -1);
                if (r.next >= r.slideamount) r.next = 0;
                if (r.next < 0) r.next = 0;
                if (r.act != r.next) f(r, n)
            }
            if (r.transition == 0 && e.keyCode == 37) {
                r.next = r.next - 1;
                r.leftarrowpressed = 1;
                if (r.next < 0) r.next = r.slideamount - 1;
                f(r, n)
            }
        });
        v(n, r)
    };
    var p = function(t, n) {
        var r = "vertical";
        if (n.touchenabled == "on") {
            if (n.drag_block_vertical == true) r = "none";
            t.swipe({
                allowPageScroll: r,
                fingers: n.swipe_min_touches,
                treshold: n.swipe_treshold,
                swipe: function(i, s, o, u, a, l) {
                    switch (s) {
                        case "left":
                            if (n.transition == 0) {
                                n.next = n.next + 1;
                                if (n.next == n.slideamount) n.next = 0;
                                f(n, t)
                            }
                            break;
                        case "right":
                            if (n.transition == 0) {
                                n.next = n.next - 1;
                                n.leftarrowpressed = 1;
                                if (n.next < 0) n.next = n.slideamount - 1;
                                f(n, t)
                            }
                            break;
                        case "up":
                            if (r == "none") e("html, body").animate({
                                scrollTop: t.offset().top + t.height() + "px"
                            });
                            break;
                        case "down":
                            if (r == "none") e("html, body").animate({
                                scrollTop: t.offset().top - e(window).height() + "px"
                            });
                            break
                    }
                }
            })
        }
    };
    var d = function(e, t) {
        var n = e.parent().find(".tp-bullets"),
            r = e.parent().find(".tparrows");
        if (n == null) {
            e.append('<div class=".tp-bullets"></div>');
            var n = e.parent().find(".tp-bullets")
        }
        if (r == null) {
            e.append('<div class=".tparrows"></div>');
            var r = e.parent().find(".tparrows")
        }
        e.data("hideThumbs", t.hideThumbs);
        n.addClass("hidebullets");
        r.addClass("hidearrows");
        if (J()) {
            try {
                e.hammer().on("touch", function() {
                    e.addClass("hovered");
                    if (t.onHoverStop == "on") e.trigger("stoptimer");
                    clearTimeout(e.data("hideThumbs"));
                    n.removeClass("hidebullets");
                    r.removeClass("hidearrows")
                });
                e.hammer().on("release", function() {
                    e.removeClass("hovered");
                    e.trigger("starttimer");
                    if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hideThumbs", setTimeout(function() {
                        n.addClass("hidebullets");
                        r.addClass("hidearrows");
                        e.trigger("starttimer")
                    }, t.hideNavDelayOnMobile))
                })
            } catch (i) {}
        } else {
            n.hover(function() {
                t.overnav = true;
                if (t.onHoverStop == "on") e.trigger("stoptimer");
                n.addClass("hovered");
                clearTimeout(e.data("hideThumbs"));
                n.removeClass("hidebullets");
                r.removeClass("hidearrows")
            }, function() {
                t.overnav = false;
                e.trigger("starttimer");
                n.removeClass("hovered");
                if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hideThumbs", setTimeout(function() {
                    n.addClass("hidebullets");
                    r.addClass("hidearrows")
                }, t.hideThumbs))
            });
            r.hover(function() {
                t.overnav = true;
                if (t.onHoverStop == "on") e.trigger("stoptimer");
                n.addClass("hovered");
                clearTimeout(e.data("hideThumbs"));
                n.removeClass("hidebullets");
                r.removeClass("hidearrows")
            }, function() {
                t.overnav = false;
                e.trigger("starttimer");
                n.removeClass("hovered")
            });
            e.on("mouseenter", function() {
                e.addClass("hovered");
                if (t.onHoverStop == "on") e.trigger("stoptimer");
                clearTimeout(e.data("hideThumbs"));
                n.removeClass("hidebullets");
                r.removeClass("hidearrows")
            });
            e.on("mouseleave", function() {
                e.removeClass("hovered");
                e.trigger("starttimer");
                if (!e.hasClass("hovered") && !n.hasClass("hovered")) e.data("hideThumbs", setTimeout(function() {
                    n.addClass("hidebullets");
                    r.addClass("hidearrows")
                }, t.hideThumbs))
            })
        }
    };
    var v = function(t, n) {
        var r = t.parent();
        var i = r.find(".tp-bullets");
        if (n.navigationType == "thumb") {
            i.find(".thumb").each(function(t) {
                var r = e(this);
                r.css({
                    width: n.thumbWidth * n.bw + "px",
                    height: n.thumbHeight * n.bh + "px"
                })
            });
            var s = i.find(".tp-mask");
            s.width(n.thumbWidth * n.thumbAmount * n.bw);
            s.height(n.thumbHeight * n.bh);
            s.parent().width(n.thumbWidth * n.thumbAmount * n.bw);
            s.parent().height(n.thumbHeight * n.bh)
        }
        var o = r.find(".tp-leftarrow");
        var u = r.find(".tp-rightarrow");
        if (n.navigationType == "thumb" && n.navigationArrows == "nexttobullets") n.navigationArrows = "solo";
        if (n.navigationArrows == "nexttobullets") {
            o.prependTo(i).css({
                "float": "left"
            });
            u.insertBefore(i.find(".tpclear")).css({
                "float": "left"
            })
        }
        var a = 0;
        if (n.forceFullWidth == "on") a = 0 - n.container.parent().offset().left;
        var f = 0,
            l = 0;
        if (n.navigationInGrid == "on") {
            f = t.width() > n.startwidth ? (t.width() - n.startwidth) / 2 : 0, l = t.height() > n.startheight ? (t.height() - n.startheight) / 2 : 0
        }
        if (n.navigationArrows != "none" && n.navigationArrows != "nexttobullets") {
            var c = n.soloArrowLeftValign,
                h = n.soloArrowLeftHalign,
                p = n.soloArrowRightValign,
                d = n.soloArrowRightHalign,
                v = n.soloArrowLeftVOffset,
                m = n.soloArrowLeftHOffset,
                g = n.soloArrowRightVOffset,
                y = n.soloArrowRightHOffset;
            o.css({
                position: "absolute"
            });
            u.css({
                position: "absolute"
            });
            if (c == "center") o.css({
                top: "50%",
                marginTop: v - Math.round(o.innerHeight() / 2) + "px"
            });
            else if (c == "bottom") o.css({
                top: "auto",
                bottom: 0 + v + "px"
            });
            else if (c == "top") o.css({
                bottom: "auto",
                top: 0 + v + "px"
            });
            if (h == "center") o.css({
                left: "50%",
                marginLeft: a + m - Math.round(o.innerWidth() / 2) + "px"
            });
            else if (h == "left") o.css({
                left: f + m + a + "px"
            });
            else if (h == "right") o.css({
                right: f + m - a + "px"
            });
            if (p == "center") u.css({
                top: "50%",
                marginTop: g - Math.round(u.innerHeight() / 2) + "px"
            });
            else if (p == "bottom") u.css({
                top: "auto",
                bottom: 0 + g + "px"
            });
            else if (p == "top") u.css({
                bottom: "auto",
                top: 0 + g + "px"
            });
            if (d == "center") u.css({
                left: "50%",
                marginLeft: a + y - Math.round(u.innerWidth() / 2) + "px"
            });
            else if (d == "left") u.css({
                left: f + y + a + "px"
            });
            else if (d == "right") u.css({
                right: f + y - a + "px"
            });
            if (o.position() != null) o.css({
                top: Math.round(parseInt(o.position().top, 0)) + "px"
            });
            if (u.position() != null) u.css({
                top: Math.round(parseInt(u.position().top, 0)) + "px"
            })
        }
        if (n.navigationArrows == "none") {
            o.css({
                visibility: "hidden"
            });
            u.css({
                visibility: "hidden"
            })
        }
        var b = n.navigationVAlign,
            w = n.navigationHAlign,
            E = n.navigationVOffset * n.bh,
            S = n.navigationHOffset * n.bw;
        if (b == "center") i.css({
            top: "50%",
            marginTop: E - Math.round(i.innerHeight() / 2) + "px"
        });
        if (b == "bottom") i.css({
            bottom: 0 + E + "px"
        });
        if (b == "top") i.css({
            top: 0 + E + "px"
        });
        if (w == "center") i.css({
            left: "50%",
            marginLeft: a + S - Math.round(i.innerWidth() / 2) + "px"
        });
        if (w == "left") i.css({
            left: 0 + S + a + "px"
        });
        if (w == "right") i.css({
            right: 0 + S - a + "px"
        })
    };
    var m = function(n) {
        var r = n.container;
        n.beforli = n.next - 1;
        n.comingli = n.next + 1;
        if (n.beforli < 0) n.beforli = n.slideamount - 1;
        if (n.comingli >= n.slideamount) n.comingli = 0;
        var i = r.find(">ul:first-child >li:eq(" + n.comingli + ")"),
            s = r.find(">ul:first-child >li:eq(" + n.beforli + ")"),
            o = s.find(".defaultimg").attr("src"),
            u = i.find(".defaultimg").attr("src");
        if (n.arr == t) {
            n.arr = r.parent().find(".tparrows"), n.rar = r.parent().find(".tp-rightarrow"), n.lar = r.parent().find(".tp-leftarrow"), n.raimg = n.rar.find(".tp-arr-imgholder"), n.laimg = n.lar.find(".tp-arr-imgholder"), n.raimg_b = n.rar.find(".tp-arr-imgholder2"), n.laimg_b = n.lar.find(".tp-arr-imgholder2"), n.ratit = n.rar.find(".tp-arr-titleholder"), n.latit = n.lar.find(".tp-arr-titleholder")
        }
        var a = n.arr,
            f = n.rar,
            l = n.lar,
            c = n.raimg,
            h = n.laimg,
            p = n.raimg_b,
            d = n.laimg_b,
            v = n.ratit,
            m = n.latit;
        if (i.data("title") != t) v.html(i.data("title"));
        if (s.data("title") != t) m.html(s.data("title"));
        if (f.hasClass("itishovered")) {
            f.width(v.outerWidth(true) + parseInt(f.css("minWidth"), 0))
        }
        if (l.hasClass("itishovered")) {
            l.width(m.outerWidth(true) + parseInt(l.css("minWidth"), 0))
        }
        if (a.hasClass("preview2") && !a.hasClass("hashoveralready")) {
            a.addClass("hashoveralready");
            if (!J()) a.hover(function() {
                var t = e(this),
                    n = t.find(".tp-arr-titleholder");
                if (e(window).width() > 767) t.width(n.outerWidth(true) + parseInt(t.css("minWidth"), 0));
                t.addClass("itishovered")
            }, function() {
                var t = e(this),
                    n = t.find(".tp-arr-titleholder");
                t.css({
                    width: parseInt(t.css("minWidth"), 0)
                });
                t.removeClass("itishovered")
            });
            else {
                var a = e(this),
                    g = a.find(".tp-arr-titleholder");
                g.addClass("alwayshidden");
                punchgs.TweenLite.set(g, {
                    autoAlpha: 0
                })
            }
        }
        if (s.data("thumb") != t) o = s.data("thumb");
        if (i.data("thumb") != t) u = i.data("thumb");
        if (!a.hasClass("preview4")) {
            punchgs.TweenLite.to(c, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" + u + ")"
                    });
                    h.css({
                        backgroundImage: "url(" + o + ")"
                    })
                }
            });
            punchgs.TweenLite.to(h, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.to(c, .5, {
                        autoAlpha: 1,
                        delay: .2
                    });
                    punchgs.TweenLite.to(h, .5, {
                        autoAlpha: 1,
                        delay: .2
                    })
                }
            })
        } else {
            p.css({
                backgroundImage: "url(" + u + ")"
            });
            d.css({
                backgroundImage: "url(" + o + ")"
            });
            punchgs.TweenLite.fromTo(p, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" + u + ")"
                    });
                    punchgs.TweenLite.set(p, {
                        x: 0
                    })
                }
            });
            punchgs.TweenLite.fromTo(d, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    h.css({
                        backgroundImage: "url(" + o + ")"
                    });
                    punchgs.TweenLite.set(d, {
                        x: 0
                    })
                }
            });
            punchgs.TweenLite.fromTo(c, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(c, {
                        x: 0
                    })
                }
            });
            punchgs.TweenLite.fromTo(h, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(h, {
                        x: 0
                    })
                }
            })
        }
        if (f.hasClass("preview4") && !f.hasClass("hashoveralready")) {
            f.addClass("hashoveralready");
            f.hover(function() {
                var t = e(this).find(".tp-arr-iwrapper");
                var n = e(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(t, .4, {
                    x: t.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(n, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var t = e(this).find(".tp-arr-iwrapper");
                var n = e(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(t, .4, {
                    x: t.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(n, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            });
            l.hover(function() {
                var t = e(this).find(".tp-arr-iwrapper");
                var n = e(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(t, .4, {
                    x: 0 - t.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(n, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var t = e(this).find(".tp-arr-iwrapper");
                var n = e(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(t, .4, {
                    x: 0 - t.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(n, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            })
        }
    };
    var g = function(n, r) {
        r.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
            height: r.container.height()
        });
        r.container.closest(".rev_slider_wrapper").css({
            height: r.container.height()
        });
        r.width = parseInt(r.container.width(), 0);
        r.height = parseInt(r.container.height(), 0);
        r.bw = r.width / r.startwidth;
        r.bh = r.height / r.startheight;
        if (r.bh > r.bw) r.bh = r.bw;
        if (r.bh < r.bw) r.bw = r.bh;
        if (r.bw < r.bh) r.bh = r.bw;
        if (r.bh > 1) {
            r.bw = 1;
            r.bh = 1
        }
        if (r.bw > 1) {
            r.bw = 1;
            r.bh = 1
        }
        r.height = Math.round(r.startheight * (r.width / r.startwidth));
        if (r.height > r.startheight && r.autoHeight != "on") r.height = r.startheight;
        if (r.fullScreen == "on") {
            r.height = r.bw * r.startheight;
            var i = r.container.parent().width();
            var s = e(window).height();
            if (r.fullScreenOffsetContainer != t) {
                try {
                    var o = r.fullScreenOffsetContainer.split(",");
                    e.each(o, function(t, n) {
                        s = s - e(n).outerHeight(true);
                        if (s < r.minFullScreenHeight) s = r.minFullScreenHeight
                    })
                } catch (u) {}
                try {
                    if (r.fullScreenOffset.split("%").length > 1 && r.fullScreenOffset != t && r.fullScreenOffset.length > 0) {
                        s = s - e(window).height() * parseInt(r.fullScreenOffset, 0) / 100
                    } else {
                        if (r.fullScreenOffset != t && r.fullScreenOffset.length > 0) s = s - parseInt(r.fullScreenOffset, 0)
                    }
                    if (s < r.minFullScreenHeight) s = r.minFullScreenHeight
                } catch (u) {}
            }
            r.container.parent().height(s);
            r.container.closest(".rev_slider_wrapper").height(s);
            r.container.css({
                height: "100%"
            });
            r.height = s;
            if (r.minHeight != t && r.height < r.minHeight) r.height = r.minHeight
        } else {
            if (r.minHeight != t && r.height < r.minHeight) r.height = r.minHeight;
            r.container.height(r.height)
        }
        r.slotw = Math.ceil(r.width / r.slots);
        if (r.fullScreen == "on") r.sloth = Math.ceil(e(window).height() / r.slots);
        else r.sloth = Math.ceil(r.height / r.slots);
        if (r.autoHeight == "on") r.sloth = Math.ceil(n.height() / r.slots)
    };
    var y = function(n, r) {
        n.find(".tp-caption").each(function() {
            e(this).addClass(e(this).data("transition"));
            e(this).addClass("start")
        });
        n.find(">ul:first").css({
            overflow: "hidden",
            width: "100%",
            height: "100%",
            maxHeight: n.parent().css("maxHeight")
        }).addClass("tp-revslider-mainul");
        if (r.autoHeight == "on") {
            n.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: "none"
            });
            n.css({
                maxHeight: "none"
            });
            n.parent().css({
                maxHeight: "none"
            })
        }
        n.find(">ul:first >li").each(function(r) {
            var i = e(this);
            i.addClass("tp-revslider-slidesli");
            i.css({
                width: "100%",
                height: "100%",
                overflow: "hidden"
            });
            if (i.data("link") != t) {
                var s = i.data("link");
                var o = "_self";
                var u = 60;
                if (i.data("slideindex") == "back") u = 0;
                var a = checksl = i.data("linktoslide");
                if (a != t) {
                    if (a != "next" && a != "prev") n.find(">ul:first-child >li").each(function() {
                        var t = e(this);
                        if (t.data("origindex") + 1 == checksl) a = t.index() + 1
                    })
                }
                if (i.data("target") != t) o = i.data("target");
                if (s != "slide") a = "no";
                var f = '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + u + ';" data-x="center" data-y="center" data-linktoslide="' + a + '" data-start="0"><a style="width:100%;height:100%;display:block"';
                if (s != "slide") f = f + ' target="' + o + '" href="' + s + '"';
                f = f + '><span style="width:100%;height:100%;display:block"></span></a></div>';
                i.append(f)
            }
        });
        n.parent().css({
            overflow: "visible"
        });
        n.find(">ul:first >li >img").each(function(n) {
            var i = e(this);
            i.addClass("defaultimg");
            if (i.data("lazyload") != t && i.data("lazydone") != 1) {} else {
                g(i, r)
            }
            if (a(8)) {
                i.data("kenburns", "off")
            }
            if (r.panZoomDisableOnMobile == "on" && J()) {
                i.data("kenburns", "off");
                i.data("bgfit", "cover")
            }
            i.wrap('<div class="slotholder" style="width:100%;height:100%;"' + 'data-duration="' + i.data("duration") + '"' + 'data-zoomstart="' + i.data("zoomstart") + '"' + 'data-zoomend="' + i.data("zoomend") + '"' + 'data-rotationstart="' + i.data("rotationstart") + '"' + 'data-rotationend="' + i.data("rotationend") + '"' + 'data-ease="' + i.data("ease") + '"' + 'data-duration="' + i.data("duration") + '"' + 'data-bgpositionend="' + i.data("bgpositionend") + '"' + 'data-bgposition="' + i.data("bgposition") + '"' + 'data-duration="' + i.data("duration") + '"' + 'data-kenburns="' + i.data("kenburns") + '"' + 'data-easeme="' + i.data("ease") + '"' + 'data-bgfit="' + i.data("bgfit") + '"' + 'data-bgfitend="' + i.data("bgfitend") + '"' + 'data-owidth="' + i.data("owidth") + '"' + 'data-oheight="' + i.data("oheight") + '"' + "></div>");
            if (r.dottedOverlay != "none" && r.dottedOverlay != t) i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + r.dottedOverlay + '"></div>');
            var s = i.attr("src"),
                o = i.data("lazyload"),
                u = i.data("bgfit"),
                f = i.data("bgrepeat"),
                l = i.data("bgposition");
            if (u == t) u = "cover";
            if (f == t) f = "no-repeat";
            if (l == t) l = "center center";
            var c = i.closest(".slotholder");
            i.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + i.data("lazyload") + '" data-bgfit="' + u + '"data-bgposition="' + l + '" data-bgrepeat="' + f + '" data-lazydone="' + i.data("lazydone") + '" src="' + s + '" data-src="' + s + '" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + f + ";background-image:url(" + s + ");background-size:" + u + ";background-position:" + l + ';width:100%;height:100%;"></div>');
            if (a(8)) {
                c.find(".tp-bgimg").css({
                    backgroundImage: "none",
                    "background-image": "none"
                });
                c.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + s + '" style="width:100%">')
            }
            i.css({
                opacity: 0
            });
            i.data("li-id", n)
        })
    };
    var b = function(e, n, r, i) {
        var s = e,
            o = s.find(".defaultimg"),
            u = s.data("zoomstart"),
            f = s.data("rotationstart");
        if (o.data("currotate") != t) f = o.data("currotate");
        if (o.data("curscale") != t && i == "box") u = o.data("curscale") * 100;
        else if (o.data("curscale") != t) u = o.data("curscale");
        g(o, n);
        var l = o.data("src"),
            c = o.css("backgroundColor"),
            h = n.width,
            p = n.height,
            d = o.data("fxof"),
            v = 0;
        if (n.autoHeight == "on") p = n.container.height();
        if (d == t) d = 0;
        var m = 0,
            y = o.data("bgfit"),
            b = o.data("bgrepeat"),
            E = o.data("bgposition");
        if (y == t) y = "cover";
        if (b == t) b = "no-repeat";
        if (E == t) E = "center center";
        if (a(8)) {
            s.data("kenburns", "off");
            var S = l;
            l = ""
        }
        switch (i) {
            case "box":
                var x = 0,
                    T = 0,
                    N = 0;
                if (n.sloth > n.slotw) x = n.sloth;
                else x = n.slotw;
                if (!r) {
                    var m = 0 - x
                }
                n.slotw = x;
                n.sloth = x;
                var T = 0;
                var N = 0;
                if (s.data("kenburns") == "on") {
                    y = u;
                    if (y.toString().length < 4) y = K(y, s, n)
                }
                for (var C = 0; C < n.slots; C++) {
                    N = 0;
                    for (var k = 0; k < n.slots; k++) {
                        s.append('<div class="slot" ' + 'style="position:absolute;' + "top:" + (v + N) + "px;" + "left:" + (d + T) + "px;" + "width:" + x + "px;" + "height:" + x + "px;" + 'overflow:hidden;">' + '<div class="slotslide" data-x="' + T + '" data-y="' + N + '" ' + 'style="position:absolute;' + "top:" + 0 + "px;" + "left:" + 0 + "px;" + "width:" + x + "px;" + "height:" + x + "px;" + 'overflow:hidden;">' + '<div style="position:absolute;' + "top:" + (0 - N) + "px;" + "left:" + (0 - T) + "px;" + "width:" + h + "px;" + "height:" + p + "px;" + "background-color:" + c + ";" + "background-image:url(" + l + ");" + "background-repeat:" + b + ";" + "background-size:" + y + ";background-position:" + E + ';">' + "</div></div></div>");
                        N = N + x;
                        if (a(8)) {
                            s.find(".slot ").last().find(".slotslide").append('<img src="' + S + '">');
                            w(s, n)
                        }
                        if (u != t && f != t) punchgs.TweenLite.set(s.find(".slot").last(), {
                            rotationZ: f
                        })
                    }
                    T = T + x
                }
                break;
            case "vertical":
            case "horizontal":
                if (s.data("kenburns") == "on") {
                    y = u;
                    if (y.toString().length < 4) y = K(y, s, n)
                }
                if (i == "horizontal") {
                    if (!r) var m = 0 - n.slotw;
                    for (var k = 0; k < n.slots; k++) {
                        s.append('<div class="slot" style="position:absolute;' + "top:" + (0 + v) + "px;" + "left:" + (d + k * n.slotw) + "px;" + "overflow:hidden;width:" + (n.slotw + .6) + "px;" + "height:" + p + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:0px;left:" + m + "px;" + "width:" + (n.slotw + .6) + "px;" + "height:" + p + 'px;overflow:hidden;">' + '<div style="background-color:' + c + ";" + "position:absolute;top:0px;" + "left:" + (0 - k * n.slotw) + "px;" + "width:" + h + "px;height:" + p + "px;" + "background-image:url(" + l + ");" + "background-repeat:" + b + ";" + "background-size:" + y + ";background-position:" + E + ';">' + "</div></div></div>");
                        if (u != t && f != t) punchgs.TweenLite.set(s.find(".slot").last(), {
                            rotationZ: f
                        });
                        if (a(8)) {
                            s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + S + '" style="width:100%;height:auto">');
                            w(s, n)
                        }
                    }
                } else {
                    if (!r) var m = 0 - n.sloth;
                    for (var k = 0; k < n.slots + 2; k++) {
                        s.append('<div class="slot" style="position:absolute;' + "top:" + (v + k * n.sloth) + "px;" + "left:" + d + "px;" + "overflow:hidden;" + "width:" + h + "px;" + "height:" + n.sloth + 'px">' + '<div class="slotslide" style="position:absolute;' + "top:" + m + "px;" + "left:0px;width:" + h + "px;" + "height:" + n.sloth + "px;" + 'overflow:hidden;">' + '<div style="background-color:' + c + ";" + "position:absolute;" + "top:" + (0 - k * n.sloth) + "px;" + "left:0px;" + "width:" + h + "px;height:" + p + "px;" + "background-image:url(" + l + ");" + "background-repeat:" + b + ";" + "background-size:" + y + ";background-position:" + E + ';">' + "</div></div></div>");
                        if (u != t && f != t) punchgs.TweenLite.set(s.find(".slot").last(), {
                            rotationZ: f
                        });
                        if (a(8)) {
                            s.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + S + '" style="width:100%;height:auto;">');
                            w(s, n)
                        }
                    }
                }
                break
        }
    };
    var w = function(e, t) {
        if (a(8)) {
            var n = e.find(".ieeightfallbackimage");
            var r = n.width(),
                i = n.height();
            if (t.startwidth / t.startheight < e.data("owidth") / e.data("oheight")) n.css({
                width: "auto",
                height: "100%"
            });
            else n.css({
                width: "100%",
                height: "auto"
            });
            setTimeout(function() {
                var r = n.width(),
                    i = n.height(),
                    s = e.data("bgposition");
                if (s == "center center") n.css({
                    position: "absolute",
                    top: t.height / 2 - i / 2 + "px",
                    left: t.width / 2 - r / 2 + "px"
                });
                if (s == "center top" || s == "top center") n.css({
                    position: "absolute",
                    top: "0px",
                    left: t.width / 2 - r / 2 + "px"
                });
                if (s == "center bottom" || s == "bottom center") n.css({
                    position: "absolute",
                    bottom: "0px",
                    left: t.width / 2 - r / 2 + "px"
                });
                if (s == "right top" || s == "top right") n.css({
                    position: "absolute",
                    top: "0px",
                    right: "0px"
                });
                if (s == "right bottom" || s == "bottom right") n.css({
                    position: "absolute",
                    bottom: "0px",
                    right: "0px"
                });
                if (s == "right center" || s == "center right") n.css({
                    position: "absolute",
                    top: t.height / 2 - i / 2 + "px",
                    right: "0px"
                });
                if (s == "left bottom" || s == "bottom left") n.css({
                    position: "absolute",
                    bottom: "0px",
                    left: "0px"
                });
                if (s == "left center" || s == "center left") n.css({
                    position: "absolute",
                    top: t.height / 2 - i / 2 + "px",
                    left: "0px"
                })
            }, 20)
        }
    };
    var E = function(t, n, r) {
        r.find(".slot").each(function() {
            e(this).remove()
        });
        n.transition = 0
    };
    var S = function(n, r) {
        n.find("img, .defaultimg").each(function(n) {
            var i = e(this),
                s = i.data("lazyload");
            if (s != i.attr("src") && r < 3 && s != t && s != "undefined") {
                if (s != t && s != "undefined") {
                    i.attr("src", s);
                    var o = new Image;
                    o.onload = function(e) {
                        i.data("lazydone", 1);
                        if (i.hasClass("defaultimg")) x(i, o)
                    };
                    o.error = function() {
                        i.data("lazydone", 1)
                    };
                    o.src = i.attr("src");
                    if (o.complete) {
                        if (i.hasClass("defaultimg")) x(i, o);
                        i.data("lazydone", 1)
                    }
                }
            } else {
                if ((s === t || s === "undefined") && i.data("lazydone") != 1) {
                    var o = new Image;
                    o.onload = function() {
                        if (i.hasClass("defaultimg")) x(i, o);
                        i.data("lazydone", 1)
                    };
                    o.error = function() {
                        i.data("lazydone", 1)
                    };
                    if (i.attr("src") != t && i.attr("src") != "undefined") {
                        o.src = i.attr("src")
                    } else o.src = i.data("src");
                    if (o.complete) {
                        if (i.hasClass("defaultimg")) {
                            x(i, o)
                        }
                        i.data("lazydone", 1)
                    }
                }
            }
        })
    };
    var x = function(e, t) {
        var n = e.closest("li"),
            r = t.width,
            i = t.height;
        n.data("owidth", r);
        n.data("oheight", i);
        n.find(".slotholder").data("owidth", r);
        n.find(".slotholder").data("oheight", i);
        n.data("loadeddone", 1)
    };
    var T = function(n, r, i) {
        S(n, 0);
        var s = setInterval(function() {
            i.bannertimeronpause = true;
            i.container.trigger("stoptimer");
            i.cd = 0;
            var o = 0;
            n.find("img, .defaultimg").each(function(t) {
                if (e(this).data("lazydone") != 1) {
                    o++
                }
            });
            if (o > 0) S(n, o);
            else {
                clearInterval(s);
                if (r != t) r()
            }
        }, 100)
    };
    var N = function(e, n) {
        try {
            var r = e.find(">ul:first-child >li:eq(" + n.act + ")")
        } catch (i) {
            var r = e.find(">ul:first-child >li:eq(1)")
        }
        n.lastslide = n.act;
        var s = e.find(">ul:first-child >li:eq(" + n.next + ")");
        var o = s.find(".defaultimg");
        n.bannertimeronpause = true;
        e.trigger("stoptimer");
        n.cd = 0;
        if (o.data("lazyload") != t && o.data("lazyload") != "undefined" && o.data("lazydone") != 1) {
            if (!a(8)) o.css({
                backgroundImage: 'url("' + s.find(".defaultimg").data("lazyload") + '")'
            });
            else {
                o.attr("src", s.find(".defaultimg").data("lazyload"))
            }
            o.data("src", s.find(".defaultimg").data("lazyload"));
            o.data("lazydone", 1);
            o.data("orgw", 0);
            s.data("loadeddone", 1);
            e.find(".tp-loader").css({
                display: "block"
            });
            T(e.find(".tp-static-layers"), function() {
                T(s, function() {
                    var t = s.find(".slotholder");
                    if (t.data("kenburns") == "on") {
                        var r = setInterval(function() {
                            var i = t.data("owidth");
                            if (i >= 0) {
                                clearInterval(r);
                                C(n, o, e)
                            }
                        }, 10)
                    } else C(n, o, e)
                }, n)
            }, n)
        } else {
            if (s.data("loadeddone") === t) {
                s.data("loadeddone", 1);
                T(s, function() {
                    C(n, o, e)
                }, n)
            } else C(n, o, e)
        }
    };
    var C = function(e, t, n) {
        e.bannertimeronpause = false;
        e.cd = 0;
        n.trigger("nulltimer");
        n.find(".tp-loader").css({
            display: "none"
        });
        g(t, e);
        v(n, e);
        g(t, e);
        k(n, e)
    };
    var k = function(e, n) {
        e.trigger("revolution.slide.onbeforeswap");
        n.transition = 1;
        n.videoplaying = false;
        try {
            var r = e.find(">ul:first-child >li:eq(" + n.act + ")")
        } catch (i) {
            var r = e.find(">ul:first-child >li:eq(1)")
        }
        n.lastslide = n.act;
        var s = e.find(">ul:first-child >li:eq(" + n.next + ")");
        setTimeout(function() {
            m(n)
        }, 200);
        var o = r.find(".slotholder"),
            u = s.find(".slotholder");
        if (u.data("kenburns") == "on" || o.data("kenburns") == "on") {
            Z(e, n);
            e.find(".kenburnimg").remove()
        }
        if (s.data("delay") != t) {
            n.cd = 0;
            n.delay = s.data("delay")
        } else {
            n.delay = n.origcd
        }
        if (n.firststart == 1) punchgs.TweenLite.set(r, {
            autoAlpha: 0
        });
        punchgs.TweenLite.set(r, {
            zIndex: 18
        });
        punchgs.TweenLite.set(s, {
            autoAlpha: 0,
            zIndex: 20
        });
        var a = 0;
        if (r.index() != s.index() && n.firststart != 1) {
            a = z(r, n)
        }
        if (r.data("saveperformance") != "on") a = 0;
        setTimeout(function() {
            e.trigger("restarttimer");
            L(e, n, s, r, o, u)
        }, a)
    };
    var L = function(n, r, i, s, o, u) {
        function x() {
            e.each(d, function(e, t) {
                if (t[0] == h || t[8] == h) {
                    f = t[1];
                    p = t[2];
                    g = y
                }
                y = y + 1
            })
        }
        if (i.data("differentissplayed") == "prepared") {
            i.data("differentissplayed", "done");
            i.data("transition", i.data("savedtransition"));
            i.data("slotamount", i.data("savedslotamount"));
            i.data("masterspeed", i.data("savedmasterspeed"))
        }
        if (i.data("fstransition") != t && i.data("differentissplayed") != "done") {
            i.data("savedtransition", i.data("transition"));
            i.data("savedslotamount", i.data("slotamount"));
            i.data("savedmasterspeed", i.data("masterspeed"));
            i.data("transition", i.data("fstransition"));
            i.data("slotamount", i.data("fsslotamount"));
            i.data("masterspeed", i.data("fsmasterspeed"));
            i.data("differentissplayed", "prepared")
        }
        n.find(".active-revslide").removeClass(".active-revslide");
        i.addClass("active-revslide");
        if (i.data("transition") == t) i.data("transition", "random");
        var f = 0,
            l = i.data("transition").split(","),
            c = i.data("nexttransid") == t ? -1 : i.data("nexttransid");
        if (i.data("randomtransition") == "on") c = Math.round(Math.random() * l.length);
        else c = c + 1;
        if (c == l.length) c = 0;
        i.data("nexttransid", c);
        var h = l[c];
        if (r.ie) {
            if (h == "boxfade") h = "boxslide";
            if (h == "slotfade-vertical") h = "slotzoom-vertical";
            if (h == "slotfade-horizontal") h = "slotzoom-horizontal"
        }
        if (a(8)) {
            h = 11
        }
        var p = 0;
        if (r.parallax == "scroll" && r.parallaxFirstGo == t) {
            r.parallaxFirstGo = true;
            tt(n, r);
            setTimeout(function() {
                tt(n, r)
            }, 210);
            setTimeout(function() {
                tt(n, r)
            }, 420)
        }
        if (h == "slidehorizontal") {
            h = "slideleft";
            if (r.leftarrowpressed == 1) h = "slideright"
        }
        if (h == "slidevertical") {
            h = "slideup";
            if (r.leftarrowpressed == 1) h = "slidedown"
        }
        if (h == "parallaxhorizontal") {
            h = "parallaxtoleft";
            if (r.leftarrowpressed == 1) h = "parallaxtoright"
        }
        if (h == "parallaxvertical") {
            h = "parallaxtotop";
            if (r.leftarrowpressed == 1) h = "parallaxtobottom"
        }
        var d = [
            ["boxslide", 0, 1, 10, 0, "box", false, null, 0],
            ["boxfade", 1, 0, 10, 0, "box", false, null, 1],
            ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", true, false, 2],
            ["slotslide-vertical", 3, 0, 0, 200, "vertical", true, false, 3],
            ["curtain-1", 4, 3, 0, 0, "horizontal", true, true, 4],
            ["curtain-2", 5, 3, 0, 0, "horizontal", true, true, 5],
            ["curtain-3", 6, 3, 25, 0, "horizontal", true, true, 6],
            ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", true, true, 7],
            ["slotzoom-vertical", 8, 0, 0, 0, "vertical", true, true, 8],
            ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", true, null, 9],
            ["slotfade-vertical", 10, 0, 0, 500, "vertical", true, null, 10],
            ["fade", 11, 0, 1, 300, "horizontal", true, null, 11],
            ["slideleft", 12, 0, 1, 0, "horizontal", true, true, 12],
            ["slideup", 13, 0, 1, 0, "horizontal", true, true, 13],
            ["slidedown", 14, 0, 1, 0, "horizontal", true, true, 14],
            ["slideright", 15, 0, 1, 0, "horizontal", true, true, 15],
            ["papercut", 16, 0, 0, 600, "", null, null, 16],
            ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", false, true, 17],
            ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", false, true, 18],
            ["cubic", 19, 0, 20, 600, "horizontal", false, true, 19],
            ["cube", 19, 0, 20, 600, "horizontal", false, true, 20],
            ["flyin", 20, 0, 4, 600, "vertical", false, true, 21],
            ["turnoff", 21, 0, 1, 1600, "horizontal", false, true, 22],
            ["incube", 22, 0, 20, 200, "horizontal", false, true, 23],
            ["cubic-horizontal", 23, 0, 20, 500, "vertical", false, true, 24],
            ["cube-horizontal", 23, 0, 20, 500, "vertical", false, true, 25],
            ["incube-horizontal", 24, 0, 20, 500, "vertical", false, true, 26],
            ["turnoff-vertical", 25, 0, 1, 200, "horizontal", false, true, 27],
            ["fadefromright", 12, 1, 1, 0, "horizontal", true, true, 28],
            ["fadefromleft", 15, 1, 1, 0, "horizontal", true, true, 29],
            ["fadefromtop", 14, 1, 1, 0, "horizontal", true, true, 30],
            ["fadefrombottom", 13, 1, 1, 0, "horizontal", true, true, 31],
            ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", true, true, 32],
            ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", true, true, 33],
            ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", true, true, 34],
            ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", true, true, 35],
            ["parallaxtoright", 12, 3, 1, 0, "horizontal", true, true, 36],
            ["parallaxtoleft", 15, 3, 1, 0, "horizontal", true, true, 37],
            ["parallaxtotop", 14, 3, 1, 0, "horizontal", true, true, 38],
            ["parallaxtobottom", 13, 3, 1, 0, "horizontal", true, true, 39],
            ["scaledownfromright", 12, 4, 1, 0, "horizontal", true, true, 40],
            ["scaledownfromleft", 15, 4, 1, 0, "horizontal", true, true, 41],
            ["scaledownfromtop", 14, 4, 1, 0, "horizontal", true, true, 42],
            ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", true, true, 43],
            ["zoomout", 13, 5, 1, 0, "horizontal", true, true, 44],
            ["zoomin", 13, 6, 1, 0, "horizontal", true, true, 45],
            ["notransition", 26, 0, 1, 0, "horizontal", true, null, 46]
        ];
        var v = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        var m = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
        var f = 0;
        var p = 1;
        var g = 0;
        var y = 0;
        var w = new Array;
        if (u.data("kenburns") == "on") {
            if (h == "boxslide" || h == 0 || h == "boxfade" || h == 1 || h == "papercut" || h == 16) h = 11;
            Q(n, r, true, true)
        }
        if (h == "random") {
            h = Math.round(Math.random() * d.length - 1);
            if (h > d.length - 1) h = d.length - 1
        }
        if (h == "random-static") {
            h = Math.round(Math.random() * v.length - 1);
            if (h > v.length - 1) h = v.length - 1;
            h = v[h]
        }
        if (h == "random-premium") {
            h = Math.round(Math.random() * m.length - 1);
            if (h > m.length - 1) h = m.length - 1;
            h = m[h]
        }
        var E = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        if (r.isJoomla == true && window.MooTools != t && E.indexOf(h) != -1) {
            var S = Math.round(Math.random() * (m.length - 2)) + 1;
            if (S > m.length - 1) S = m.length - 1;
            if (S == 0) S = 1;
            h = m[S]
        }
        x();
        if (a(8) && f > 15 && f < 28) {
            h = Math.round(Math.random() * v.length - 1);
            if (h > v.length - 1) h = v.length - 1;
            h = v[h];
            y = 0;
            x()
        }
        var T = -1;
        if (r.leftarrowpressed == 1 || r.act > r.next) T = 1;
        r.leftarrowpressed = 0;
        if (f > 26) f = 26;
        if (f < 0) f = 0;
        var N = 300;
        if (i.data("masterspeed") != t && i.data("masterspeed") > 99 && i.data("masterspeed") < r.delay) N = i.data("masterspeed");
        if (i.data("masterspeed") != t && i.data("masterspeed") > r.delay) N = r.delay;
        w = d[g];
        n.parent().find(".bullet").each(function() {
            var t = e(this),
                n = t.index();
            t.removeClass("selected");
            if (r.navigationArrows == "withbullet" || r.navigationArrows == "nexttobullets") n = t.index() - 1;
            if (n == r.next) t.addClass("selected")
        });
        var C = new punchgs.TimelineLite({
            onComplete: function() {
                A(n, r, u, o, i, s, C)
            }
        });
        C.add(punchgs.TweenLite.set(u.find(".defaultimg"), {
            opacity: 0
        }));
        C.pause();
        if (i.data("slotamount") == t || i.data("slotamount") < 1) {
            r.slots = Math.round(Math.random() * 12 + 4);
            if (h == "boxslide") r.slots = Math.round(Math.random() * 6 + 3);
            else if (h == "flyin") r.slots = Math.round(Math.random() * 4 + 1)
        } else {
            r.slots = i.data("slotamount")
        }
        if (i.data("rotate") == t) r.rotate = 0;
        else if (i.data("rotate") == 999) r.rotate = Math.round(Math.random() * 360);
        else r.rotate = i.data("rotate");
        if (!e.support.transition || r.ie || r.ie9) r.rotate = 0;
        if (r.firststart == 1) r.firststart = 0;
        N = N + w[4];
        if ((f == 4 || f == 5 || f == 6) && r.slots < 3) r.slots = 3;
        if (w[3] != 0) r.slots = Math.min(r.slots, w[3]);
        if (f == 9) r.slots = r.width / 20;
        if (f == 10) r.slots = r.height / 20;
        if (w[7] != null) b(o, r, w[7], w[5]);
        if (w[6] != null) b(u, r, w[6], w[5]);
        if (f == 0) {
            var k = Math.ceil(r.height / r.sloth);
            var L = 0;
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                L = L + 1;
                if (L == k) L = 0;
                C.add(punchgs.TweenLite.from(n, N / 600, {
                    opacity: 0,
                    top: 0 - r.sloth,
                    left: 0 - r.slotw,
                    rotation: r.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeOut
                }), (t * 15 + L * 30) / 1500)
            })
        }
        if (f == 1) {
            var O, M = 0;
            u.find(".slotslide").each(function(t) {
                var n = e(this),
                    i = Math.random() * N + 300,
                    s = Math.random() * 500 + 200;
                if (i + s > O) {
                    O = s + s;
                    M = t
                }
                C.add(punchgs.TweenLite.from(n, i / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    rotation: r.rotate,
                    ease: punchgs.Power2.easeInOut
                }), s / 1e3)
            })
        }
        if (f == 2) {
            var _ = new punchgs.TimelineLite;
            o.find(".slotslide").each(function() {
                var t = e(this);
                _.add(punchgs.TweenLite.to(t, N / 1e3, {
                    left: r.slotw,
                    force3D: "auto",
                    rotation: 0 - r.rotate
                }), 0);
                C.add(_, 0)
            });
            u.find(".slotslide").each(function() {
                var t = e(this);
                _.add(punchgs.TweenLite.from(t, N / 1e3, {
                    left: 0 - r.slotw,
                    force3D: "auto",
                    rotation: r.rotate
                }), 0);
                C.add(_, 0)
            })
        }
        if (f == 3) {
            var _ = new punchgs.TimelineLite;
            o.find(".slotslide").each(function() {
                var t = e(this);
                _.add(punchgs.TweenLite.to(t, N / 1e3, {
                    top: r.sloth,
                    rotation: r.rotate,
                    force3D: "auto",
                    transformPerspective: 600
                }), 0);
                C.add(_, 0)
            });
            u.find(".slotslide").each(function() {
                var t = e(this);
                _.add(punchgs.TweenLite.from(t, N / 1e3, {
                    top: 0 - r.sloth,
                    rotation: r.rotate,
                    ease: punchgs.Power2.easeOut,
                    force3D: "auto",
                    transformPerspective: 600
                }), 0);
                C.add(_, 0)
            })
        }
        if (f == 4 || f == 5) {
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var D = N / 1e3,
                P = D,
                _ = new punchgs.TimelineLite;
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                var i = t * D / r.slots;
                if (f == 5) i = (r.slots - t - 1) * D / r.slots / 1.5;
                _.add(punchgs.TweenLite.to(n, D * 3, {
                    transformPerspective: 600,
                    force3D: "auto",
                    top: 0 + r.height,
                    opacity: .5,
                    rotation: r.rotate,
                    ease: punchgs.Power2.easeInOut,
                    delay: i
                }), 0);
                C.add(_, 0)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                var i = t * D / r.slots;
                if (f == 5) i = (r.slots - t - 1) * D / r.slots / 1.5;
                _.add(punchgs.TweenLite.from(n, D * 3, {
                    top: 0 - r.height,
                    opacity: .5,
                    rotation: r.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut,
                    delay: i
                }), 0);
                C.add(_, 0)
            })
        }
        if (f == 6) {
            if (r.slots < 2) r.slots = 2;
            if (r.slots % 2) r.slots = r.slots + 1;
            var _ = new punchgs.TimelineLite;
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                if (t + 1 < r.slots / 2) var i = (t + 2) * 90;
                else var i = (2 + r.slots - t) * 90;
                _.add(punchgs.TweenLite.to(n, (N + i) / 1e3, {
                    top: 0 + r.height,
                    opacity: 1,
                    force3D: "auto",
                    rotation: r.rotate,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                C.add(_, 0)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                if (t + 1 < r.slots / 2) var i = (t + 2) * 90;
                else var i = (2 + r.slots - t) * 90;
                _.add(punchgs.TweenLite.from(n, (N + i) / 1e3, {
                    top: 0 - r.height,
                    opacity: 1,
                    force3D: "auto",
                    rotation: r.rotate,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                C.add(_, 0)
            })
        }
        if (f == 7) {
            N = N * 2;
            if (N > r.delay) N = r.delay;
            var _ = new punchgs.TimelineLite;
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            o.find(".slotslide").each(function() {
                var t = e(this).find("div");
                _.add(punchgs.TweenLite.to(t, N / 1e3, {
                    left: 0 - r.slotw / 2 + "px",
                    top: 0 - r.height / 2 + "px",
                    width: r.slotw * 2 + "px",
                    height: r.height * 2 + "px",
                    opacity: 0,
                    rotation: r.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeOut
                }), 0);
                C.add(_, 0)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this).find("div");
                _.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    left: 0,
                    top: 0,
                    opacity: 0,
                    transformPerspective: 600
                }, {
                    left: 0 - t * r.slotw + "px",
                    ease: punchgs.Power2.easeOut,
                    force3D: "auto",
                    top: 0 + "px",
                    width: r.width,
                    height: r.height,
                    opacity: 1,
                    rotation: 0,
                    delay: .1
                }), 0);
                C.add(_, 0)
            })
        }
        if (f == 8) {
            N = N * 3;
            if (N > r.delay) N = r.delay;
            var _ = new punchgs.TimelineLite;
            o.find(".slotslide").each(function() {
                var t = e(this).find("div");
                _.add(punchgs.TweenLite.to(t, N / 1e3, {
                    left: 0 - r.width / 2 + "px",
                    top: 0 - r.sloth / 2 + "px",
                    width: r.width * 2 + "px",
                    height: r.sloth * 2 + "px",
                    force3D: "auto",
                    opacity: 0,
                    rotation: r.rotate
                }), 0);
                C.add(_, 0)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this).find("div");
                _.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    left: 0,
                    top: 0,
                    opacity: 0,
                    force3D: "auto"
                }, {
                    left: 0 + "px",
                    top: 0 - t * r.sloth + "px",
                    width: u.find(".defaultimg").data("neww") + "px",
                    height: u.find(".defaultimg").data("newh") + "px",
                    opacity: 1,
                    rotation: 0
                }), 0);
                C.add(_, 0)
            })
        }
        if (f == 9 || f == 10) {
            var H = 0;
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                H++;
                C.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    transformPerspective: 600
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power2.easeInOut,
                    delay: t * 5 / 1e3
                }), 0)
            })
        }
        if (f == 11 || f == 26) {
            var H = 0;
            if (f == 26) N = 0;
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                C.add(punchgs.TweenLite.from(n, N / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut
                }), 0)
            })
        }
        if (f == 12 || f == 13 || f == 14 || f == 15) {
            N = N;
            if (N > r.delay) N = r.delay;
            setTimeout(function() {
                punchgs.TweenLite.set(o.find(".defaultimg"), {
                    autoAlpha: 0
                })
            }, 100);
            var B = r.width,
                F = r.height,
                I = u.find(".slotslide"),
                q = 0,
                R = 0,
                U = 1,
                z = 1,
                W = 1,
                X = punchgs.Power2.easeInOut,
                V = punchgs.Power2.easeInOut,
                $ = N / 1e3,
                J = $;
            if (r.fullWidth == "on" || r.fullScreen == "on") {
                B = I.width();
                F = I.height()
            }
            if (f == 12) q = B;
            else if (f == 15) q = 0 - B;
            else if (f == 13) R = F;
            else if (f == 14) R = 0 - F;
            if (p == 1) U = 0;
            if (p == 2) U = 0;
            if (p == 3) {
                X = punchgs.Power2.easeInOut;
                V = punchgs.Power1.easeInOut;
                $ = N / 1200
            }
            if (p == 4 || p == 5) z = .6;
            if (p == 6) z = 1.4;
            if (p == 5 || p == 6) {
                W = 1.4;
                U = 0;
                B = 0;
                F = 0;
                q = 0;
                R = 0
            }
            if (p == 6) W = .6;
            var K = 0;
            C.add(punchgs.TweenLite.from(I, $, {
                left: q,
                top: R,
                scale: W,
                opacity: U,
                rotation: r.rotate,
                ease: V,
                force3D: "auto"
            }), 0);
            var G = o.find(".slotslide");
            if (p == 4 || p == 5) {
                B = 0;
                F = 0
            }
            if (p != 1) switch (f) {
                case 12:
                    C.add(punchgs.TweenLite.to(G, J, {
                        left: 0 - B + "px",
                        force3D: "auto",
                        scale: z,
                        opacity: U,
                        rotation: r.rotate,
                        ease: X
                    }), 0);
                    break;
                case 15:
                    C.add(punchgs.TweenLite.to(G, J, {
                        left: B + "px",
                        force3D: "auto",
                        scale: z,
                        opacity: U,
                        rotation: r.rotate,
                        ease: X
                    }), 0);
                    break;
                case 13:
                    C.add(punchgs.TweenLite.to(G, J, {
                        top: 0 - F + "px",
                        force3D: "auto",
                        scale: z,
                        opacity: U,
                        rotation: r.rotate,
                        ease: X
                    }), 0);
                    break;
                case 14:
                    C.add(punchgs.TweenLite.to(G, J, {
                        top: F + "px",
                        force3D: "auto",
                        scale: z,
                        opacity: U,
                        rotation: r.rotate,
                        ease: X
                    }), 0);
                    break
            }
        }
        if (f == 16) {
            var _ = new punchgs.TimelineLite;
            C.add(punchgs.TweenLite.set(s, {
                position: "absolute",
                "z-index": 20
            }), 0);
            C.add(punchgs.TweenLite.set(i, {
                position: "absolute",
                "z-index": 15
            }), 0);
            s.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>');
            s.find(".tp-half-one").clone(true).appendTo(s).addClass("tp-half-two");
            s.find(".tp-half-two").removeClass("tp-half-one");
            var B = r.width,
                F = r.height;
            if (r.autoHeight == "on") F = n.height();
            s.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + B + "px;height:" + F + 'px;"></div>');
            s.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + B + "px;height:" + F + 'px;"></div>');
            s.find(".tp-half-two .defaultimg").css({
                position: "absolute",
                top: "-50%"
            });
            s.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>');
            C.add(punchgs.TweenLite.set(s.find(".tp-half-two"), {
                width: B,
                height: F,
                overflow: "hidden",
                zIndex: 15,
                position: "absolute",
                top: F / 2,
                left: "0px",
                transformPerspective: 600,
                transformOrigin: "center bottom"
            }), 0);
            C.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                width: B,
                height: F / 2,
                overflow: "visible",
                zIndex: 10,
                position: "absolute",
                top: "0px",
                left: "0px",
                transformPerspective: 600,
                transformOrigin: "center top"
            }), 0);
            var Y = s.find(".defaultimg"),
                Z = Math.round(Math.random() * 20 - 10),
                et = Math.round(Math.random() * 20 - 10),
                nt = Math.round(Math.random() * 20 - 10),
                rt = Math.random() * .4 - .2,
                it = Math.random() * .4 - .2,
                st = Math.random() * 1 + 1,
                ot = Math.random() * 1 + 1,
                ut = Math.random() * .3 + .3;
            C.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                overflow: "hidden"
            }), 0);
            C.add(punchgs.TweenLite.fromTo(s.find(".tp-half-one"), N / 800, {
                width: B,
                height: F / 2,
                position: "absolute",
                top: "0px",
                left: "0px",
                force3D: "auto",
                transformOrigin: "center top"
            }, {
                scale: st,
                rotation: Z,
                y: 0 - F - F / 4,
                autoAlpha: 0,
                ease: punchgs.Power2.easeInOut
            }), 0);
            C.add(punchgs.TweenLite.fromTo(s.find(".tp-half-two"), N / 800, {
                width: B,
                height: F,
                overflow: "hidden",
                position: "absolute",
                top: F / 2,
                left: "0px",
                force3D: "auto",
                transformOrigin: "center bottom"
            }, {
                scale: ot,
                rotation: et,
                y: F + F / 4,
                ease: punchgs.Power2.easeInOut,
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.set(s, {
                        position: "absolute",
                        "z-index": 15
                    });
                    punchgs.TweenLite.set(i, {
                        position: "absolute",
                        "z-index": 20
                    });
                    if (s.find(".tp-half-one").length > 0) {
                        s.find(".tp-half-one .defaultimg").unwrap();
                        s.find(".tp-half-one .slotholder").unwrap()
                    }
                    s.find(".tp-half-two").remove()
                }
            }), 0);
            _.add(punchgs.TweenLite.set(u.find(".defaultimg"), {
                autoAlpha: 1
            }), 0);
            if (s.html() != null) C.add(punchgs.TweenLite.fromTo(i, (N - 200) / 1e3, {
                scale: ut,
                x: r.width / 4 * rt,
                y: F / 4 * it,
                rotation: nt,
                force3D: "auto",
                transformOrigin: "center center",
                ease: punchgs.Power2.easeOut
            }, {
                autoAlpha: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotation: 0
            }), 0);
            C.add(_, 0)
        }
        if (f == 17) {
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                C.add(punchgs.TweenLite.fromTo(n, N / 800, {
                    opacity: 0,
                    rotationY: 0,
                    scale: .9,
                    rotationX: -110,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    opacity: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    force3D: "auto",
                    rotationY: 0,
                    ease: punchgs.Power3.easeOut,
                    delay: t * .06
                }), 0)
            })
        }
        if (f == 18) {
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                C.add(punchgs.TweenLite.fromTo(n, N / 500, {
                    autoAlpha: 0,
                    rotationY: 310,
                    scale: .9,
                    rotationX: 10,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    autoAlpha: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    force3D: "auto",
                    rotationY: 0,
                    ease: punchgs.Power3.easeOut,
                    delay: t * .06
                }), 0)
            })
        }
        if (f == 19 || f == 22) {
            var _ = new punchgs.TimelineLite;
            C.add(punchgs.TweenLite.set(s, {
                zIndex: 20
            }), 0);
            C.add(punchgs.TweenLite.set(i, {
                zIndex: 20
            }), 0);
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var at = i.css("z-index"),
                ft = s.css("z-index"),
                lt = 90,
                U = 1,
                ct = "center center ";
            if (T == 1) lt = -90;
            if (f == 19) {
                ct = ct + "-" + r.height / 2;
                U = 0
            } else {
                ct = ct + r.height / 2
            }
            punchgs.TweenLite.set(n, {
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                transformPerspective: 600
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                _.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    left: 0,
                    rotationY: r.rotate,
                    z: 10,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ct,
                    rotationX: lt
                }, {
                    left: 0,
                    rotationY: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    rotationX: 0,
                    delay: t * 50 / 1e3,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                _.add(punchgs.TweenLite.to(n, .1, {
                    autoAlpha: 1,
                    delay: t * 50 / 1e3
                }), 0);
                C.add(_)
            });
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                var i = -90;
                if (T == 1) i = 90;
                _.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    autoAlpha: 1,
                    rotationY: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ct,
                    rotationX: 0
                }, {
                    autoAlpha: 1,
                    rotationY: r.rotate,
                    top: 0,
                    z: 10,
                    scale: 1,
                    rotationX: i,
                    delay: t * 50 / 1e3,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut
                }), 0);
                C.add(_)
            })
        }
        if (f == 20) {
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var at = i.css("z-index"),
                ft = s.css("z-index");
            if (T == 1) {
                var ht = -r.width;
                var lt = 70;
                var ct = "left center -" + r.height / 2
            } else {
                var ht = r.width;
                var lt = -70;
                var ct = "right center -" + r.height / 2
            }
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                C.add(punchgs.TweenLite.fromTo(n, N / 1500, {
                    left: ht,
                    rotationX: 40,
                    z: -600,
                    opacity: U,
                    top: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ct,
                    rotationY: lt
                }, {
                    left: 0,
                    delay: t * 50 / 1e3,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                C.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    rotationX: 40,
                    z: -600,
                    opacity: U,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ct,
                    rotationY: lt
                }, {
                    rotationX: 0,
                    opacity: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: t * 50 / 1e3,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                C.add(punchgs.TweenLite.to(n, .1, {
                    opacity: 1,
                    force3D: "auto",
                    delay: t * 50 / 1e3 + N / 2e3
                }), 0)
            });
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                if (T != 1) {
                    var i = -r.width;
                    var s = 70;
                    var o = "left center -" + r.height / 2
                } else {
                    var i = r.width;
                    var s = -70;
                    var o = "right center -" + r.height / 2
                }
                C.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    opacity: 1,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    left: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: o,
                    rotationY: 0
                }, {
                    opacity: 1,
                    rotationX: 40,
                    top: 0,
                    z: -600,
                    left: i,
                    force3D: "auto",
                    scale: .8,
                    rotationY: s,
                    delay: t * 50 / 1e3,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                C.add(punchgs.TweenLite.to(n, .1, {
                    force3D: "auto",
                    opacity: 0,
                    delay: t * 50 / 1e3 + (N / 1e3 - N / 1e4)
                }), 0)
            })
        }
        if (f == 21 || f == 25) {
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var at = i.css("z-index"),
                ft = s.css("z-index"),
                lt = 90,
                ht = -r.width,
                pt = -lt;
            if (T == 1) {
                if (f == 25) {
                    var ct = "center top 0";
                    lt = r.rotate
                } else {
                    var ct = "left center 0";
                    pt = r.rotate
                }
            } else {
                ht = r.width;
                lt = -90;
                if (f == 25) {
                    var ct = "center bottom 0";
                    pt = -lt;
                    lt = r.rotate
                } else {
                    var ct = "right center 0";
                    pt = r.rotate
                }
            }
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                C.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    left: 0,
                    transformStyle: "flat",
                    rotationX: pt,
                    z: 0,
                    autoAlpha: 0,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ct,
                    rotationY: lt
                }, {
                    left: 0,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    autoAlpha: 1,
                    scale: 1,
                    rotationY: 0,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), 0)
            });
            if (T != 1) {
                ht = -r.width;
                lt = 90;
                if (f == 25) {
                    ct = "center top 0";
                    pt = -lt;
                    lt = r.rotate
                } else {
                    ct = "left center 0";
                    pt = r.rotate
                }
            } else {
                ht = r.width;
                lt = -90;
                if (f == 25) {
                    ct = "center bottom 0";
                    pt = -lt;
                    lt = r.rotate
                } else {
                    ct = "right center 0";
                    pt = r.rotate
                }
            }
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                C.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    left: 0,
                    transformStyle: "flat",
                    rotationX: 0,
                    z: 0,
                    autoAlpha: 1,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ct,
                    rotationY: 0
                }, {
                    left: 0,
                    rotationX: pt,
                    top: 0,
                    z: 0,
                    autoAlpha: 1,
                    force3D: "auto",
                    scale: 1,
                    rotationY: lt,
                    ease: punchgs.Power1.easeInOut
                }), 0)
            })
        }
        if (f == 23 || f == 24) {
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var at = i.css("z-index"),
                ft = s.css("z-index"),
                lt = -90,
                U = 1,
                dt = 0;
            if (T == 1) lt = 90;
            if (f == 23) {
                var ct = "center center -" + r.width / 2;
                U = 0
            } else var ct = "center center " + r.width / 2;
            punchgs.TweenLite.set(n, {
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                perspective: 2500
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                C.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    left: dt,
                    rotationX: r.rotate,
                    force3D: "auto",
                    opacity: U,
                    top: 0,
                    scale: 1,
                    transformPerspective: 600,
                    transformOrigin: ct,
                    rotationY: lt
                }, {
                    left: 0,
                    rotationX: 0,
                    autoAlpha: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: t * 50 / 500,
                    ease: punchgs.Power2.easeInOut
                }), 0)
            });
            lt = 90;
            if (T == 1) lt = -90;
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                C.add(punchgs.TweenLite.fromTo(n, N / 1e3, {
                    left: 0,
                    autoAlpha: 1,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ct,
                    rotationY: 0
                }, {
                    left: dt,
                    autoAlpha: 1,
                    rotationX: r.rotate,
                    top: 0,
                    scale: 1,
                    rotationY: lt,
                    delay: t * 50 / 500,
                    ease: punchgs.Power2.easeInOut
                }), 0)
            })
        }
        C.pause();
        j(i, r, null, C);
        punchgs.TweenLite.to(i, .001, {
            autoAlpha: 1
        });
        var vt = {};
        vt.slideIndex = r.next + 1;
        vt.slide = i;
        n.trigger("revolution.slide.onchange", vt);
        setTimeout(function() {
            n.trigger("revolution.slide.onafterswap")
        }, N);
        n.trigger("revolution.slide.onvideostop")
    };
    var A = function(e, t, n, r, i, s, o) {
        punchgs.TweenLite.to(n.find(".defaultimg"), .001, {
            autoAlpha: 1,
            onComplete: function() {
                E(e, t, i)
            }
        });
        if (i.index() != s.index()) {
            punchgs.TweenLite.to(s, .2, {
                autoAlpha: 0,
                onComplete: function() {
                    E(e, t, s)
                }
            })
        }
        t.act = t.next;
        if (t.navigationType == "thumb") rt(e);
        if (n.data("kenburns") == "on") {
            Q(e, t)
        }
        e.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible");
        i.addClass("current-sr-slide-visible");
        if (t.parallax == "scroll" || t.parallax == "scroll+mouse" || t.parallax == "mouse+scroll") {
            tt(e, t)
        }
        o.clear()
    };
    var O = function(t) {
        var n = t.target.getVideoEmbedCode();
        var r = e("#" + n.split('id="')[1].split('"')[0]);
        var i = r.closest(".tp-simpleresponsive");
        var s = r.parent().data("player");
        if (t.data == YT.PlayerState.PLAYING) {
            var o = i.find(".tp-bannertimer");
            var u = o.data("opt");
            if (r.closest(".tp-caption").data("volume") == "mute") s.mute();
            u.videoplaying = true;
            i.trigger("stoptimer");
            i.trigger("revolution.slide.onvideoplay")
        } else {
            var o = i.find(".tp-bannertimer");
            var u = o.data("opt");
            if (t.data != -1 && t.data != 3) {
                u.videoplaying = false;
                i.trigger("starttimer");
                i.trigger("revolution.slide.onvideostop")
            }
            if (t.data == 0 && u.nextslideatend == true) u.container.revnext();
            else {
                u.videoplaying = false;
                i.trigger("starttimer");
                i.trigger("revolution.slide.onvideostop")
            }
        }
    };
    var M = function(e, t, n) {
        if (e.addEventListener) e.addEventListener(t, n, false);
        else e.attachEvent(t, n, false)
    };
    var _ = function(t, n) {
        var r = $f(t),
            i = e("#" + t),
            s = i.closest(".tp-simpleresponsive"),
            o = i.closest(".tp-caption");
        setTimeout(function() {
            r.addEvent("ready", function(t) {
                if (n) r.api("play");
                r.addEvent("play", function(e) {
                    var t = s.find(".tp-bannertimer");
                    var n = t.data("opt");
                    n.videoplaying = true;
                    s.trigger("stoptimer");
                    if (o.data("volume") == "mute") r.api("setVolume", "0")
                });
                r.addEvent("finish", function(e) {
                    var t = s.find(".tp-bannertimer");
                    var n = t.data("opt");
                    n.videoplaying = false;
                    s.trigger("starttimer");
                    s.trigger("revolution.slide.onvideoplay");
                    if (n.nextslideatend == true) n.container.revnext()
                });
                r.addEvent("pause", function(e) {
                    var t = s.find(".tp-bannertimer");
                    var n = t.data("opt");
                    n.videoplaying = false;
                    s.trigger("starttimer");
                    s.trigger("revolution.slide.onvideostop")
                });
                o.find(".tp-thumb-image").click(function() {
                    punchgs.TweenLite.to(e(this), .3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    });
                    r.api("play")
                })
            })
        }, 150)
    };
    var D = function(e, n) {
        var r = n.width();
        var i = n.height();
        var s = e.data("mediaAspect");
        if (s == t) s = 1;
        var o = r / i;
        e.css({
            position: "absolute"
        });
        var u = e.find("video");
        if (o < s) {
            punchgs.TweenLite.to(e, 1e-4, {
                width: i * s,
                force3D: "auto",
                top: 0,
                left: 0 - (i * s - r) / 2,
                height: i
            })
        } else {
            punchgs.TweenLite.to(e, 1e-4, {
                width: r,
                force3D: "auto",
                top: 0 - (r / s - i) / 2,
                left: 0,
                height: r / s
            })
        }
    };
    var P = function() {
        var e = new Object;
        e.x = 0;
        e.y = 0;
        e.rotationX = 0;
        e.rotationY = 0;
        e.rotationZ = 0;
        e.scale = 1;
        e.scaleX = 1;
        e.scaleY = 1;
        e.skewX = 0;
        e.skewY = 0;
        e.opacity = 0;
        e.transformOrigin = "center, center";
        e.transformPerspective = 400;
        e.rotation = 0;
        return e
    };
    var H = function(t, n) {
        var r = n.split(";");
        e.each(r, function(e, n) {
            n = n.split(":");
            var r = n[0],
                i = n[1];
            if (r == "rotationX") t.rotationX = parseInt(i, 0);
            if (r == "rotationY") t.rotationY = parseInt(i, 0);
            if (r == "rotationZ") t.rotationZ = parseInt(i, 0);
            if (r == "rotationZ") t.rotation = parseInt(i, 0);
            if (r == "scaleX") t.scaleX = parseFloat(i);
            if (r == "scaleY") t.scaleY = parseFloat(i);
            if (r == "opacity") t.opacity = parseFloat(i);
            if (r == "skewX") t.skewX = parseInt(i, 0);
            if (r == "skewY") t.skewY = parseInt(i, 0);
            if (r == "x") t.x = parseInt(i, 0);
            if (r == "y") t.y = parseInt(i, 0);
            if (r == "z") t.z = parseInt(i, 0);
            if (r == "transformOrigin") t.transformOrigin = i.toString();
            if (r == "transformPerspective") t.transformPerspective = parseInt(i, 0)
        });
        return t
    };
    var B = function(t) {
        var n = t.split("animation:");
        var r = new Object;
        r.animation = H(P(), n[1]);
        var i = n[0].split(";");
        e.each(i, function(e, t) {
            t = t.split(":");
            var n = t[0],
                i = t[1];
            if (n == "typ") r.typ = i;
            if (n == "speed") r.speed = parseInt(i, 0) / 1e3;
            if (n == "start") r.start = parseInt(i, 0) / 1e3;
            if (n == "elementdelay") r.elementdelay = parseFloat(i);
            if (n == "ease") r.ease = i
        });
        return r
    };
    var j = function(n, r, i, s) {
        function o() {}

        function u() {}
        if (n.data("ctl") == t) {
            n.data("ctl", new punchgs.TimelineLite)
        }
        var f = n.data("ctl"),
            l = 0,
            c = 0,
            h = n.find(".tp-caption"),
            p = r.container.find(".tp-static-layers").find(".tp-caption");
        f.pause();
        e.each(p, function(e, t) {
            h.push(t)
        });
        h.each(function(n) {
            var s = i,
                f = -1,
                h = e(this);
            if (h.hasClass("tp-static-layer")) {
                var p = h.data("startslide"),
                    d = h.data("endslide");
                if (p == -1 || p == "-1") h.data("startslide", 0);
                if (d == -1 || d == "-1") h.data("endslide", r.slideamount);
                if (p == 0 && d == r.slideamount - 1) h.data("endslide", r.slideamount + 1);
                p = h.data("startslide"), d = h.data("endslide");
                if (!h.hasClass("tp-is-shown")) {
                    if (p <= r.next && d >= r.next || p == r.next || d == r.next) {
                        h.addClass("tp-is-shown");
                        f = 1
                    } else {
                        f = 0
                    }
                } else {
                    if (d == r.next || p > r.next || d < r.next) {
                        f = 2
                    } else {
                        f = 0
                    }
                }
            }
            l = r.width / 2 - r.startwidth * r.bw / 2;
            var v = r.bw;
            var m = r.bh;
            if (r.fullScreen == "on") c = r.height / 2 - r.startheight * r.bh / 2;
            if (r.autoHeight == "on" || r.minHeight != t && r.minHeight > 0) c = r.container.height() / 2 - r.startheight * r.bh / 2;
            if (c < 0) c = 0;
            var g = 0;
            if (r.width < r.hideCaptionAtLimit && h.data("captionhidden") == "on") {
                h.addClass("tp-hidden-caption");
                g = 1
            } else {
                if (r.width < r.hideAllCaptionAtLimit || r.width < r.hideAllCaptionAtLilmit) {
                    h.addClass("tp-hidden-caption");
                    g = 1
                } else {
                    h.removeClass("tp-hidden-caption")
                }
            }
            if (g == 0) {
                if (h.data("linktoslide") != t && !h.hasClass("hasclicklistener")) {
                    h.addClass("hasclicklistener");
                    h.css({
                        cursor: "pointer"
                    });
                    if (h.data("linktoslide") != "no") {
                        h.click(function() {
                            var t = e(this);
                            var n = t.data("linktoslide");
                            if (n != "next" && n != "prev") {
                                r.container.data("showus", n);
                                r.container.parent().find(".tp-rightarrow").click()
                            } else if (n == "next") r.container.parent().find(".tp-rightarrow").click();
                            else if (n == "prev") r.container.parent().find(".tp-leftarrow").click()
                        })
                    }
                }
                if (l < 0) l = 0;
                if (h.hasClass("tp-videolayer") || h.find("iframe").length > 0 || h.find("video").length > 0) {
                    var y = "iframe" + Math.round(Math.random() * 1e5 + 1),
                        b = h.data("videowidth"),
                        w = h.data("videoheight"),
                        E = h.data("videoattributes"),
                        S = h.data("ytid"),
                        x = h.data("vimeoid"),
                        T = h.data("videpreload"),
                        N = h.data("videomp4"),
                        C = h.data("videowebm"),
                        k = h.data("videoogv"),
                        L = h.data("videocontrols"),
                        A = "http",
                        j = h.data("videoloop") == "loop" ? "loop" : h.data("videoloop") == "loopandnoslidestop" ? "loop" : "";
                    if (h.data("thumbimage") != t && h.data("videoposter") == t) h.data("videoposter", h.data("thumbimage"));
                    if (S != t && String(S).length > 1 && h.find("iframe").length == 0) {
                        A = "https";
                        if (L == "none") {
                            E = E.replace("controls=1", "controls=0");
                            if (E.toLowerCase().indexOf("controls") == -1) E = E + "&controls=0"
                        }
                        h.append('<iframe style="visible:hidden" src="' + A + "://www.youtube.com/embed/" + S + "?" + E + '" width="' + b + '" height="' + w + '" style="width:' + b + "px;height:" + w + 'px"></iframe>')
                    }
                    if (x != t && String(x).length > 1 && h.find("iframe").length == 0) {
                        if (location.protocol === "https:") A = "https";
                        h.append('<iframe style="visible:hidden" src="' + A + "://player.vimeo.com/video/" + x + "?" + E + '" width="' + b + '" height="' + w + '" style="width:' + b + "px;height:" + w + 'px"></iframe>')
                    }
                    if ((N != t || C != t) && h.find("video").length == 0) {
                        if (L != "controls") L = "";
                        var I = '<video style="visible:hidden" class="" ' + j + ' preload="' + T + '" width="' + b + '" height="' + w + '"';
                        if (h.data("videoposter") != t)
                            if (h.data("videoposter") != t) I = I + 'poster="' + h.data("videoposter") + '">';
                        if (C != t && F().toLowerCase() == "firefox") I = I + '<source src="' + C + '" type="video/webm" />';
                        if (N != t) I = I + '<source src="' + N + '" type="video/mp4" />';
                        if (k != t) I = I + '<source src="' + k + '" type="video/ogg" />';
                        I = I + "</video>";
                        h.append(I);
                        if (L == "controls") h.append('<div class="tp-video-controls">' + '<div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div>' + '<div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div>' + '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div>' + '<div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>' + '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>' + "</div>")
                    }
                    var z = false;
                    if (h.data("autoplayonlyfirsttime") == true || h.data("autoplayonlyfirsttime") == "true" || h.data("autoplay") == true) {
                        h.data("autoplay", true);
                        z = true
                    }
                    h.find("iframe").each(function() {
                        var n = e(this);
                        punchgs.TweenLite.to(n, .1, {
                            autoAlpha: 1,
                            zIndex: 0,
                            transformStyle: "preserve-3d",
                            z: 0,
                            rotationX: 0,
                            force3D: "auto"
                        });
                        if (J()) {
                            var o = n.attr("src");
                            n.attr("src", "");
                            n.attr("src", o)
                        }
                        r.nextslideatend = h.data("nextslideatend");
                        if (h.data("videoposter") != t && h.data("videoposter").length > 2 && h.data("autoplay") != true && !s) {
                            if (h.find(".tp-thumb-image").length == 0) h.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + h.data("videoposter") + '); background-size:cover"></div>');
                            else punchgs.TweenLite.set(h.find(".tp-thumb-image"), {
                                autoAlpha: 1
                            })
                        }
                        if (n.attr("src").toLowerCase().indexOf("youtube") >= 0) {
                            if (!n.hasClass("HasListener")) {
                                try {
                                    n.attr("id", y);
                                    var u;
                                    var a = setInterval(function() {
                                        if (YT != t)
                                            if (typeof YT.Player != t && typeof YT.Player != "undefined") {
                                                u = new YT.Player(y, {
                                                    events: {
                                                        onStateChange: O,
                                                        onReady: function(n) {
                                                            var r = n.target.getVideoEmbedCode(),
                                                                i = e("#" + r.split('id="')[1].split('"')[0]),
                                                                s = i.closest(".tp-caption"),
                                                                o = s.data("videorate"),
                                                                a = s.data("videostart");
                                                            if (o != t) n.target.setPlaybackRate(parseFloat(o));
                                                            if (!J() && s.data("autoplay") == true || z) {
                                                                s.data("timerplay", setTimeout(function() {
                                                                    n.target.playVideo()
                                                                }, s.data("start")))
                                                            }
                                                            s.find(".tp-thumb-image").click(function() {
                                                                punchgs.TweenLite.to(e(this), .3, {
                                                                    autoAlpha: 0,
                                                                    force3D: "auto",
                                                                    ease: punchgs.Power3.easeInOut
                                                                });
                                                                if (!J()) {
                                                                    u.playVideo()
                                                                }
                                                            })
                                                        }
                                                    }
                                                })
                                            }
                                        n.addClass("HasListener");
                                        h.data("player", u);
                                        clearInterval(a)
                                    }, 100)
                                } catch (f) {}
                            } else {
                                if (!i) {
                                    var u = h.data("player");
                                    if (h.data("forcerewind") == "on" && !J()) u.seekTo(0);
                                    if (!J() && h.data("autoplay") == true || z) {
                                        h.data("timerplay", setTimeout(function() {
                                            u.playVideo()
                                        }, h.data("start")))
                                    }
                                }
                            }
                        } else if (n.attr("src").toLowerCase().indexOf("vimeo") >= 0) {
                            if (!n.hasClass("HasListener")) {
                                n.addClass("HasListener");
                                n.attr("id", y);
                                var l = n.attr("src");
                                var c = {},
                                    p = l,
                                    d = /([^&=]+)=([^&]*)/g,
                                    v;
                                while (v = d.exec(p)) {
                                    c[decodeURIComponent(v[1])] = decodeURIComponent(v[2])
                                }
                                if (c["player_id"] != t) l = l.replace(c["player_id"], y);
                                else l = l + "&player_id=" + y;
                                try {
                                    l = l.replace("api=0", "api=1")
                                } catch (f) {}
                                l = l + "&api=1";
                                n.attr("src", l);
                                var u = h.find("iframe")[0];
                                var m = setInterval(function() {
                                    if ($f != t) {
                                        if (typeof $f(y).api != t && typeof $f(y).api != "undefined") {
                                            $f(u).addEvent("ready", function() {
                                                _(y, z)
                                            });
                                            clearInterval(m)
                                        }
                                    }
                                }, 100)
                            } else {
                                if (!i) {
                                    if (!J() && (h.data("autoplay") == true || h.data("forcerewind") == "on")) {
                                        var n = h.find("iframe");
                                        var g = n.attr("id");
                                        var b = $f(g);
                                        if (h.data("forcerewind") == "on") b.api("seekTo", 0);
                                        h.data("timerplay", setTimeout(function() {
                                            if (h.data("autoplay") == true) b.api("play")
                                        }, h.data("start")))
                                    }
                                }
                            }
                        }
                    });
                    if (J() && h.data("disablevideoonmobile") == 1 || a(8)) h.find("video").remove();
                    if (h.find("video").length > 0) {
                        h.find("video").each(function(n) {
                            var i = this,
                                s = e(this);
                            if (!s.parent().hasClass("html5vid")) s.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                            var o = s.parent();
                            M(i, "loadedmetadata", function(e) {
                                e.data("metaloaded", 1)
                            }(o));
                            clearInterval(o.data("interval"));
                            o.data("interval", setInterval(function() {
                                if (o.data("metaloaded") == 1 || i.duration != NaN) {
                                    clearInterval(o.data("interval"));
                                    if (!o.hasClass("HasListener")) {
                                        o.addClass("HasListener");
                                        if (h.data("dottedoverlay") != "none" && h.data("dottedoverlay") != t)
                                            if (h.find(".tp-dottedoverlay").length != 1) o.append('<div class="tp-dottedoverlay ' + h.data("dottedoverlay") + '"></div>');
                                        if (s.attr("control") == t) {
                                            if (o.find(".tp-video-play-button").length == 0) o.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>');
                                            o.find("video, .tp-poster, .tp-video-play-button").click(function() {
                                                if (o.hasClass("videoisplaying")) i.pause();
                                                else i.play()
                                            })
                                        }
                                        if (h.data("forcecover") == 1 || h.hasClass("fullscreenvideo")) {
                                            if (h.data("forcecover") == 1) {
                                                D(o, r.container);
                                                o.addClass("fullcoveredvideo");
                                                h.addClass("fullcoveredvideo")
                                            }
                                            o.css({
                                                width: "100%",
                                                height: "100%"
                                            })
                                        }
                                        var e = h.find(".tp-vid-play-pause")[0],
                                            n = h.find(".tp-vid-mute")[0],
                                            u = h.find(".tp-vid-full-screen")[0],
                                            a = h.find(".tp-seek-bar")[0],
                                            f = h.find(".tp-volume-bar")[0];
                                        if (e != t) {
                                            M(e, "click", function() {
                                                if (i.paused == true) i.play();
                                                else i.pause()
                                            });
                                            M(n, "click", function() {
                                                if (i.muted == false) {
                                                    i.muted = true;
                                                    n.innerHTML = "Unmute"
                                                } else {
                                                    i.muted = false;
                                                    n.innerHTML = "Mute"
                                                }
                                            });
                                            M(u, "click", function() {
                                                if (i.requestFullscreen) {
                                                    i.requestFullscreen()
                                                } else if (i.mozRequestFullScreen) {
                                                    i.mozRequestFullScreen()
                                                } else if (i.webkitRequestFullscreen) {
                                                    i.webkitRequestFullscreen()
                                                }
                                            });
                                            M(a, "change", function() {
                                                var e = i.duration * (a.value / 100);
                                                i.currentTime = e
                                            });
                                            M(i, "timeupdate", function() {
                                                var e = 100 / i.duration * i.currentTime;
                                                a.value = e
                                            });
                                            M(a, "mousedown", function() {
                                                i.pause()
                                            });
                                            M(a, "mouseup", function() {
                                                i.play()
                                            });
                                            M(f, "change", function() {
                                                i.volume = f.value
                                            })
                                        }
                                        M(i, "play", function() {
                                            if (h.data("volume") == "mute") i.muted = true;
                                            o.addClass("videoisplaying");
                                            if (h.data("videoloop") == "loopandnoslidestop") {
                                                r.videoplaying = false;
                                                r.container.trigger("starttimer");
                                                r.container.trigger("revolution.slide.onvideostop")
                                            } else {
                                                r.videoplaying = true;
                                                r.container.trigger("stoptimer");
                                                r.container.trigger("revolution.slide.onvideoplay")
                                            }
                                            var e = h.find(".tp-vid-play-pause")[0],
                                                n = h.find(".tp-vid-mute")[0];
                                            if (e != t) e.innerHTML = "Pause";
                                            if (n != t && i.muted) n.innerHTML = "Unmute"
                                        });
                                        M(i, "pause", function() {
                                            o.removeClass("videoisplaying");
                                            r.videoplaying = false;
                                            r.container.trigger("starttimer");
                                            r.container.trigger("revolution.slide.onvideostop");
                                            var e = h.find(".tp-vid-play-pause")[0];
                                            if (e != t) e.innerHTML = "Play"
                                        });
                                        M(i, "ended", function() {
                                            o.removeClass("videoisplaying");
                                            r.videoplaying = false;
                                            r.container.trigger("starttimer");
                                            r.container.trigger("revolution.slide.onvideostop");
                                            if (r.nextslideatend == true) r.container.revnext()
                                        })
                                    }
                                    var l = false;
                                    if (h.data("autoplayonlyfirsttime") == true || h.data("autoplayonlyfirsttime") == "true") l = true;
                                    var c = 16 / 9;
                                    if (h.data("aspectratio") == "4:3") c = 4 / 3;
                                    o.data("mediaAspect", c);
                                    if (o.closest(".tp-caption").data("forcecover") == 1) {
                                        D(o, r.container);
                                        o.addClass("fullcoveredvideo")
                                    }
                                    s.css({
                                        display: "block"
                                    });
                                    r.nextslideatend = h.data("nextslideatend");
                                    if (h.data("autoplay") == true || l == true) {
                                        if (h.data("videoloop") == "loopandnoslidestop") {
                                            r.videoplaying = false;
                                            r.container.trigger("starttimer");
                                            r.container.trigger("revolution.slide.onvideostop")
                                        } else {
                                            r.videoplaying = true;
                                            r.container.trigger("stoptimer");
                                            r.container.trigger("revolution.slide.onvideoplay")
                                        }
                                        if (h.data("forcerewind") == "on" && !o.hasClass("videoisplaying"))
                                            if (i.currentTime > 0) i.currentTime = 0;
                                        if (h.data("volume") == "mute") i.muted = true;
                                        o.data("timerplay", setTimeout(function() {
                                            if (h.data("forcerewind") == "on" && !o.hasClass("videoisplaying"))
                                                if (i.currentTime > 0) i.currentTime = 0;
                                            if (h.data("volume") == "mute") i.muted = true;
                                            i.play()
                                        }, 10 + h.data("start")))
                                    }
                                    if (o.data("ww") == t) o.data("ww", s.attr("width"));
                                    if (o.data("hh") == t) o.data("hh", s.attr("height"));
                                    if (!h.hasClass("fullscreenvideo") && h.data("forcecover") == 1) {
                                        try {
                                            o.width(o.data("ww") * r.bw);
                                            o.height(o.data("hh") * r.bh)
                                        } catch (p) {}
                                    }
                                    clearInterval(o.data("interval"))
                                }
                            }), 100)
                        })
                    }
                    if (h.data("autoplay") == true) {
                        setTimeout(function() {
                            if (h.data("videoloop") != "loopandnoslidestop") {
                                r.videoplaying = true;
                                r.container.trigger("stoptimer")
                            }
                        }, 200);
                        if (h.data("videoloop") != "loopandnoslidestop") {
                            r.videoplaying = true;
                            r.container.trigger("stoptimer")
                        }
                        if (h.data("autoplayonlyfirsttime") == true || h.data("autoplayonlyfirsttime") == "true") {
                            h.data("autoplay", false);
                            h.data("autoplayonlyfirsttime", false)
                        }
                    }
                }
                var V = 0;
                var $ = 0;
                if (h.find("img").length > 0) {
                    var K = h.find("img");
                    if (K.width() == 0) K.css({
                        width: "auto"
                    });
                    if (K.height() == 0) K.css({
                        height: "auto"
                    });
                    if (K.data("ww") == t && K.width() > 0) K.data("ww", K.width());
                    if (K.data("hh") == t && K.height() > 0) K.data("hh", K.height());
                    var Q = K.data("ww");
                    var G = K.data("hh");
                    if (Q == t) Q = 0;
                    if (G == t) G = 0;
                    K.width(Q * r.bw);
                    K.height(G * r.bh);
                    V = K.width();
                    $ = K.height()
                } else {
                    if (h.find("iframe").length > 0 || h.find("video").length > 0) {
                        var Y = false,
                            K = h.find("iframe");
                        if (K.length == 0) {
                            K = h.find("video");
                            Y = true
                        }
                        K.css({
                            display: "block"
                        });
                        if (h.data("ww") == t) h.data("ww", K.width());
                        if (h.data("hh") == t) h.data("hh", K.height());
                        var Q = h.data("ww"),
                            G = h.data("hh");
                        var Z = h;
                        if (Z.data("fsize") == t) Z.data("fsize", parseInt(Z.css("font-size"), 0) || 0);
                        if (Z.data("pt") == t) Z.data("pt", parseInt(Z.css("paddingTop"), 0) || 0);
                        if (Z.data("pb") == t) Z.data("pb", parseInt(Z.css("paddingBottom"), 0) || 0);
                        if (Z.data("pl") == t) Z.data("pl", parseInt(Z.css("paddingLeft"), 0) || 0);
                        if (Z.data("pr") == t) Z.data("pr", parseInt(Z.css("paddingRight"), 0) || 0);
                        if (Z.data("mt") == t) Z.data("mt", parseInt(Z.css("marginTop"), 0) || 0);
                        if (Z.data("mb") == t) Z.data("mb", parseInt(Z.css("marginBottom"), 0) || 0);
                        if (Z.data("ml") == t) Z.data("ml", parseInt(Z.css("marginLeft"), 0) || 0);
                        if (Z.data("mr") == t) Z.data("mr", parseInt(Z.css("marginRight"), 0) || 0);
                        if (Z.data("bt") == t) Z.data("bt", parseInt(Z.css("borderTop"), 0) || 0);
                        if (Z.data("bb") == t) Z.data("bb", parseInt(Z.css("borderBottom"), 0) || 0);
                        if (Z.data("bl") == t) Z.data("bl", parseInt(Z.css("borderLeft"), 0) || 0);
                        if (Z.data("br") == t) Z.data("br", parseInt(Z.css("borderRight"), 0) || 0);
                        if (Z.data("lh") == t) Z.data("lh", parseInt(Z.css("lineHeight"), 0) || 0);
                        if (Z.data("lh") == "auto") Z.data("lh", Z.data("fsize") + 4);
                        var et = r.width,
                            tt = r.height;
                        if (et > r.startwidth) et = r.startwidth;
                        if (tt > r.startheight) tt = r.startheight;
                        if (!h.hasClass("fullscreenvideo")) h.css({
                            "font-size": Z.data("fsize") * r.bw + "px",
                            "padding-top": Z.data("pt") * r.bh + "px",
                            "padding-bottom": Z.data("pb") * r.bh + "px",
                            "padding-left": Z.data("pl") * r.bw + "px",
                            "padding-right": Z.data("pr") * r.bw + "px",
                            "margin-top": Z.data("mt") * r.bh + "px",
                            "margin-bottom": Z.data("mb") * r.bh + "px",
                            "margin-left": Z.data("ml") * r.bw + "px",
                            "margin-right": Z.data("mr") * r.bw + "px",
                            "border-top": Z.data("bt") * r.bh + "px",
                            "border-bottom": Z.data("bb") * r.bh + "px",
                            "border-left": Z.data("bl") * r.bw + "px",
                            "border-right": Z.data("br") * r.bw + "px",
                            "line-height": Z.data("lh") * r.bh + "px",
                            height: G * r.bh + "px"
                        });
                        else {
                            l = 0;
                            c = 0;
                            h.data("x", 0);
                            h.data("y", 0);
                            var nt = r.height;
                            if (r.autoHeight == "on") nt = r.container.height();
                            h.css({
                                width: r.width,
                                height: nt
                            })
                        }
                        if (Y == false) {
                            K.width(Q * r.bw);
                            K.height(G * r.bh)
                        } else if (h.data("forcecover") != 1 && !h.hasClass("fullscreenvideo")) {
                            K.width(Q * r.bw);
                            K.height(G * r.bh)
                        }
                        V = K.width();
                        $ = K.height()
                    } else {
                        h.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            q(e(this), r)
                        });
                        if (h.hasClass("tp-resizeme")) {
                            h.find("*").each(function() {
                                q(e(this), r)
                            })
                        }
                        q(h, r);
                        $ = h.outerHeight(true);
                        V = h.outerWidth(true);
                        var rt = h.outerHeight();
                        var it = h.css("backgroundColor");
                        h.find(".frontcorner").css({
                            borderWidth: rt + "px",
                            left: 0 - rt + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: it
                        });
                        h.find(".frontcornertop").css({
                            borderWidth: rt + "px",
                            left: 0 - rt + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: it
                        });
                        h.find(".backcorner").css({
                            borderWidth: rt + "px",
                            right: 0 - rt + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: it
                        });
                        h.find(".backcornertop").css({
                            borderWidth: rt + "px",
                            right: 0 - rt + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: it
                        })
                    }
                }
                if (r.fullScreenAlignForce == "on") {
                    l = 0;
                    c = 0
                }
                if (h.data("voffset") == t) h.data("voffset", 0);
                if (h.data("hoffset") == t) h.data("hoffset", 0);
                var st = h.data("voffset") * v;
                var ot = h.data("hoffset") * v;
                var ut = r.startwidth * v;
                var at = r.startheight * v;
                if (r.fullScreenAlignForce == "on") {
                    ut = r.container.width();
                    at = r.container.height()
                }
                if (h.data("x") == "center" || h.data("xcenter") == "center") {
                    h.data("xcenter", "center");
                    h.data("x", ut / 2 - h.outerWidth(true) / 2 + ot)
                }
                if (h.data("x") == "left" || h.data("xleft") == "left") {
                    h.data("xleft", "left");
                    h.data("x", 0 / v + ot)
                }
                if (h.data("x") == "right" || h.data("xright") == "right") {
                    h.data("xright", "right");
                    h.data("x", (ut - h.outerWidth(true) + ot) / v)
                }
                if (h.data("y") == "center" || h.data("ycenter") == "center") {
                    h.data("ycenter", "center");
                    h.data("y", at / 2 - h.outerHeight(true) / 2 + st)
                }
                if (h.data("y") == "top" || h.data("ytop") == "top") {
                    h.data("ytop", "top");
                    h.data("y", 0 / r.bh + st)
                }
                if (h.data("y") == "bottom" || h.data("ybottom") == "bottom") {
                    h.data("ybottom", "bottom");
                    h.data("y", (at - h.outerHeight(true) + st) / v)
                }
                if (h.data("start") == t) h.data("start", 1e3);
                var ft = h.data("easing");
                if (ft == t) ft = "punchgs.Power1.easeOut";
                var lt = h.data("start") / 1e3,
                    ct = h.data("speed") / 1e3;
                if (h.data("x") == "center" || h.data("xcenter") == "center") var ht = h.data("x") + l;
                else {
                    var ht = v * h.data("x") + l
                }
                if (h.data("y") == "center" || h.data("ycenter") == "center") var pt = h.data("y") + c;
                else {
                    var pt = r.bh * h.data("y") + c
                }
                punchgs.TweenLite.set(h, {
                    top: pt,
                    left: ht,
                    overwrite: "auto"
                });
                if (f == 0) s = true;
                if (h.data("timeline") != t && !s) {
                    if (f != 2) h.data("timeline").gotoAndPlay(0);
                    s = true
                }
                if (!s) {
                    if (h.data("timeline") != t) {}
                    var dt = new punchgs.TimelineLite({
                        smoothChildTiming: true,
                        onStart: u
                    });
                    dt.pause();
                    if (r.fullScreenAlignForce == "on") {}
                    var vt = h;
                    if (h.data("mySplitText") != t) h.data("mySplitText").revert();
                    if (h.data("splitin") == "chars" || h.data("splitin") == "words" || h.data("splitin") == "lines" || h.data("splitout") == "chars" || h.data("splitout") == "words" || h.data("splitout") == "lines") {
                        if (h.find("a").length > 0) h.data("mySplitText", new punchgs.SplitText(h.find("a"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        }));
                        else if (h.find(".tp-layer-inner-rotation").length > 0) h.data("mySplitText", new punchgs.SplitText(h.find(".tp-layer-inner-rotation"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        }));
                        else h.data("mySplitText", new punchgs.SplitText(h, {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        }));
                        h.addClass("splitted")
                    }
                    if (h.data("splitin") == "chars") vt = h.data("mySplitText").chars;
                    if (h.data("splitin") == "words") vt = h.data("mySplitText").words;
                    if (h.data("splitin") == "lines") vt = h.data("mySplitText").lines;
                    var mt = P();
                    var gt = P();
                    if (h.data("repeat") != t) repeatV = h.data("repeat");
                    if (h.data("yoyo") != t) yoyoV = h.data("yoyo");
                    if (h.data("repeatdelay") != t) repeatdelayV = h.data("repeatdelay");
                    var yt = h.attr("class");
                    if (yt.match("customin")) mt = H(mt, h.data("customin"));
                    else if (yt.match("randomrotate")) {
                        mt.scale = Math.random() * 3 + 1;
                        mt.rotation = Math.round(Math.random() * 200 - 100);
                        mt.x = Math.round(Math.random() * 200 - 100);
                        mt.y = Math.round(Math.random() * 200 - 100)
                    } else if (yt.match("lfr") || yt.match("skewfromright")) mt.x = 15 + r.width;
                    else if (yt.match("lfl") || yt.match("skewfromleft")) mt.x = -15 - V;
                    else if (yt.match("sfl") || yt.match("skewfromleftshort")) mt.x = -50;
                    else if (yt.match("sfr") || yt.match("skewfromrightshort")) mt.x = 50;
                    else if (yt.match("lft")) mt.y = -25 - $;
                    else if (yt.match("lfb")) mt.y = 25 + r.height;
                    else if (yt.match("sft")) mt.y = -50;
                    else if (yt.match("sfb")) mt.y = 50;
                    if (yt.match("skewfromright") || h.hasClass("skewfromrightshort")) mt.skewX = -85;
                    else if (yt.match("skewfromleft") || h.hasClass("skewfromleftshort")) mt.skewX = 85;
                    if (yt.match("fade") || yt.match("sft") || yt.match("sfl") || yt.match("sfb") || yt.match("skewfromleftshort") || yt.match("sfr") || yt.match("skewfromrightshort")) mt.opacity = 0;
                    if (F().toLowerCase() == "safari") {}
                    var bt = h.data("elementdelay") == t ? 0 : h.data("elementdelay");
                    gt.ease = mt.ease = h.data("easing") == t ? punchgs.Power1.easeInOut : h.data("easing");
                    mt.data = new Object;
                    mt.data.oldx = mt.x;
                    mt.data.oldy = mt.y;
                    gt.data = new Object;
                    gt.data.oldx = gt.x;
                    gt.data.oldy = gt.y;
                    mt.x = mt.x * v;
                    mt.y = mt.y * v;
                    var wt = new punchgs.TimelineLite;
                    if (f != 2) {
                        if (yt.match("customin")) {
                            if (vt != h) dt.add(punchgs.TweenLite.set(h, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                delay: 0,
                                overwrite: "all"
                            }));
                            mt.visibility = "hidden";
                            gt.visibility = "visible";
                            gt.overwrite = "all";
                            gt.opacity = 1;
                            gt.onComplete = o();
                            gt.delay = lt;
                            gt.force3D = "auto";
                            dt.add(wt.staggerFromTo(vt, ct, mt, gt, bt), "frame0")
                        } else {
                            mt.visibility = "visible";
                            mt.transformPerspective = 600;
                            if (vt != h) dt.add(punchgs.TweenLite.set(h, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                delay: 0,
                                overwrite: "all"
                            }));
                            gt.visibility = "visible";
                            gt.delay = lt;
                            gt.onComplete = o();
                            gt.opacity = 1;
                            gt.force3D = "auto";
                            if (yt.match("randomrotate") && vt != h) {
                                for (var n = 0; n < vt.length; n++) {
                                    var Et = new Object;
                                    var St = new Object;
                                    e.extend(Et, mt);
                                    e.extend(St, gt);
                                    mt.scale = Math.random() * 3 + 1;
                                    mt.rotation = Math.round(Math.random() * 200 - 100);
                                    mt.x = Math.round(Math.random() * 200 - 100);
                                    mt.y = Math.round(Math.random() * 200 - 100);
                                    if (n != 0) St.delay = lt + n * bt;
                                    dt.append(punchgs.TweenLite.fromTo(vt[n], ct, Et, St), "frame0")
                                }
                            } else dt.add(wt.staggerFromTo(vt, ct, mt, gt, bt), "frame0")
                        }
                    }
                    h.data("timeline", dt);
                    var xt = new Array;
                    if (h.data("frames") != t) {
                        var Tt = h.data("frames");
                        Tt = Tt.replace(/\s+/g, "");
                        Tt = Tt.replace("{", "");
                        var Nt = Tt.split("}");
                        e.each(Nt, function(e, t) {
                            if (t.length > 0) {
                                var n = B(t);
                                W(h, r, n, "frame" + (e + 10), v)
                            }
                        })
                    }
                    dt = h.data("timeline");
                    if (h.data("end") != t && (f == -1 || f == 2)) {
                        X(h, r, h.data("end") / 1e3, mt, "frame99", v)
                    } else {
                        if (f == -1 || f == 2) X(h, r, 999999, mt, "frame99", v);
                        else X(h, r, 200, mt, "frame99", v)
                    }
                    dt = h.data("timeline");
                    h.data("timeline", dt);
                    R(h, v);
                    dt.resume()
                }
            }
            if (s) {
                U(h);
                R(h, v);
                if (h.data("timeline") != t) {
                    var Ct = h.data("timeline").getTweensOf();
                    e.each(Ct, function(e, n) {
                        if (n.vars.data != t) {
                            var r = n.vars.data.oldx * v;
                            var i = n.vars.data.oldy * v;
                            if (n.progress() != 1 && n.progress() != 0) {
                                try {
                                    n.vars.x = r;
                                    n.vary.y = i
                                } catch (s) {}
                            } else {
                                if (n.progress() == 1) {
                                    punchgs.TweenLite.set(n.target, {
                                        x: r,
                                        y: i
                                    })
                                }
                            }
                        }
                    })
                }
            }
        });
        var d = e("body").find("#" + r.container.attr("id")).find(".tp-bannertimer");
        d.data("opt", r);
        if (s != t) setTimeout(function() {
            s.resume()
        }, 30)
    };
    var F = function() {
        var e = navigator.appName,
            t = navigator.userAgent,
            n;
        var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] = n[1];
        r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"];
        return r[0]
    };
    var I = function() {
        var e = navigator.appName,
            t = navigator.userAgent,
            n;
        var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] = n[1];
        r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"];
        return r[1]
    };
    var q = function(e, n) {
        if (e.data("fsize") == t) e.data("fsize", parseInt(e.css("font-size"), 0) || 0);
        if (e.data("pt") == t) e.data("pt", parseInt(e.css("paddingTop"), 0) || 0);
        if (e.data("pb") == t) e.data("pb", parseInt(e.css("paddingBottom"), 0) || 0);
        if (e.data("pl") == t) e.data("pl", parseInt(e.css("paddingLeft"), 0) || 0);
        if (e.data("pr") == t) e.data("pr", parseInt(e.css("paddingRight"), 0) || 0);
        if (e.data("mt") == t) e.data("mt", parseInt(e.css("marginTop"), 0) || 0);
        if (e.data("mb") == t) e.data("mb", parseInt(e.css("marginBottom"), 0) || 0);
        if (e.data("ml") == t) e.data("ml", parseInt(e.css("marginLeft"), 0) || 0);
        if (e.data("mr") == t) e.data("mr", parseInt(e.css("marginRight"), 0) || 0);
        if (e.data("bt") == t) e.data("bt", parseInt(e.css("borderTopWidth"), 0) || 0);
        if (e.data("bb") == t) e.data("bb", parseInt(e.css("borderBottomWidth"), 0) || 0);
        if (e.data("bl") == t) e.data("bl", parseInt(e.css("borderLeftWidth"), 0) || 0);
        if (e.data("br") == t) e.data("br", parseInt(e.css("borderRightWidth"), 0) || 0);
        if (e.data("ls") == t) e.data("ls", parseInt(e.css("letterSpacing"), 0) || 0);
        if (e.data("lh") == t) e.data("lh", parseInt(e.css("lineHeight"), 0) || "auto");
        if (e.data("minwidth") == t) e.data("minwidth", parseInt(e.css("minWidth"), 0) || 0);
        if (e.data("minheight") == t) e.data("minheight", parseInt(e.css("minHeight"), 0) || 0);
        if (e.data("maxwidth") == t) e.data("maxwidth", parseInt(e.css("maxWidth"), 0) || "none");
        if (e.data("maxheight") == t) e.data("maxheight", parseInt(e.css("maxHeight"), 0) || "none");
        if (e.data("wii") == t) e.data("wii", parseInt(e.css("width"), 0) || 0);
        if (e.data("hii") == t) e.data("hii", parseInt(e.css("height"), 0) || 0);
        if (e.data("wan") == t) e.data("wan", e.css("-webkit-transition"));
        if (e.data("moan") == t) e.data("moan", e.css("-moz-animation-transition"));
        if (e.data("man") == t) e.data("man", e.css("-ms-animation-transition"));
        if (e.data("ani") == t) e.data("ani", e.css("transition"));
        if (e.data("lh") == "auto") e.data("lh", e.data("fsize") + 4);
        if (!e.hasClass("tp-splitted")) {
            e.css("-webkit-transition", "none");
            e.css("-moz-transition", "none");
            e.css("-ms-transition", "none");
            e.css("transition", "none");
            punchgs.TweenLite.set(e, {
                fontSize: Math.round(e.data("fsize") * n.bw) + "px",
                letterSpacing: Math.floor(e.data("ls") * n.bw) + "px",
                paddingTop: Math.round(e.data("pt") * n.bh) + "px",
                paddingBottom: Math.round(e.data("pb") * n.bh) + "px",
                paddingLeft: Math.round(e.data("pl") * n.bw) + "px",
                paddingRight: Math.round(e.data("pr") * n.bw) + "px",
                marginTop: e.data("mt") * n.bh + "px",
                marginBottom: e.data("mb") * n.bh + "px",
                marginLeft: e.data("ml") * n.bw + "px",
                marginRight: e.data("mr") * n.bw + "px",
                borderTopWidth: Math.round(e.data("bt") * n.bh) + "px",
                borderBottomWidth: Math.round(e.data("bb") * n.bh) + "px",
                borderLeftWidth: Math.round(e.data("bl") * n.bw) + "px",
                borderRightWidth: Math.round(e.data("br") * n.bw) + "px",
                lineHeight: Math.round(e.data("lh") * n.bh) + "px",
                minWidth: e.data("minwidth") * n.bw + "px",
                minHeight: e.data("minheight") * n.bh + "px",
                overwrite: "auto"
            });
            setTimeout(function() {
                e.css("-webkit-transition", e.data("wan"));
                e.css("-moz-transition", e.data("moan"));
                e.css("-ms-transition", e.data("man"));
                e.css("transition", e.data("ani"))
            }, 30);
            if (e.data("maxheight") != "none") e.css({
                maxHeight: e.data("maxheight") * n.bh + "px"
            });
            if (e.data("maxwidth") != "none") e.css({
                maxWidth: e.data("maxwidth") * n.bw + "px"
            })
        }
    };
    var R = function(n, r) {
        n.find(".rs-pendulum").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var i = n.data("startdeg") == t ? -20 : n.data("startdeg"),
                    s = n.data("enddeg") == t ? 20 : n.data("enddeg"),
                    o = n.data("speed") == t ? 2 : n.data("speed"),
                    u = n.data("origin") == t ? "50% 50%" : n.data("origin"),
                    a = n.data("easing") == t ? punchgs.Power2.easeInOut : n.data("ease");
                i = i * r;
                s = s * r;
                n.data("timeline").append(new punchgs.TweenLite.fromTo(n, o, {
                    force3D: "auto",
                    rotation: i,
                    transformOrigin: u
                }, {
                    rotation: s,
                    ease: a
                }));
                n.data("timeline").append(new punchgs.TweenLite.fromTo(n, o, {
                    force3D: "auto",
                    rotation: s,
                    transformOrigin: u
                }, {
                    rotation: i,
                    ease: a,
                    onComplete: function() {
                        n.data("timeline").restart()
                    }
                }))
            }
        });
        n.find(".rs-rotate").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var i = n.data("startdeg") == t ? 0 : n.data("startdeg"),
                    s = n.data("enddeg") == t ? 360 : n.data("enddeg");
                speed = n.data("speed") == t ? 2 : n.data("speed"), origin = n.data("origin") == t ? "50% 50%" : n.data("origin"), easing = n.data("easing") == t ? punchgs.Power2.easeInOut : n.data("easing");
                i = i * r;
                s = s * r;
                n.data("timeline").append(new punchgs.TweenLite.fromTo(n, speed, {
                    force3D: "auto",
                    rotation: i,
                    transformOrigin: origin
                }, {
                    rotation: s,
                    ease: easing,
                    onComplete: function() {
                        n.data("timeline").restart()
                    }
                }))
            }
        });
        n.find(".rs-slideloop").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var i = n.data("xs") == t ? 0 : n.data("xs"),
                    s = n.data("ys") == t ? 0 : n.data("ys"),
                    o = n.data("xe") == t ? 0 : n.data("xe"),
                    u = n.data("ye") == t ? 0 : n.data("ye"),
                    a = n.data("speed") == t ? 2 : n.data("speed"),
                    f = n.data("easing") == t ? punchgs.Power2.easeInOut : n.data("easing");
                i = i * r;
                s = s * r;
                o = o * r;
                u = u * r;
                n.data("timeline").append(new punchgs.TweenLite.fromTo(n, a, {
                    force3D: "auto",
                    x: i,
                    y: s
                }, {
                    x: o,
                    y: u,
                    ease: f
                }));
                n.data("timeline").append(new punchgs.TweenLite.fromTo(n, a, {
                    force3D: "auto",
                    x: o,
                    y: u
                }, {
                    x: i,
                    y: s,
                    onComplete: function() {
                        n.data("timeline").restart()
                    }
                }))
            }
        });
        n.find(".rs-pulse").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var r = n.data("zoomstart") == t ? 0 : n.data("zoomstart"),
                    i = n.data("zoomend") == t ? 0 : n.data("zoomend"),
                    s = n.data("speed") == t ? 2 : n.data("speed"),
                    o = n.data("easing") == t ? punchgs.Power2.easeInOut : n.data("easing");
                n.data("timeline").append(new punchgs.TweenLite.fromTo(n, s, {
                    force3D: "auto",
                    scale: r
                }, {
                    scale: i,
                    ease: o
                }));
                n.data("timeline").append(new punchgs.TweenLite.fromTo(n, s, {
                    force3D: "auto",
                    scale: i
                }, {
                    scale: r,
                    onComplete: function() {
                        n.data("timeline").restart()
                    }
                }))
            }
        });
        n.find(".rs-wave").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var i = n.data("angle") == t ? 10 : n.data("angle"),
                    s = n.data("radius") == t ? 10 : n.data("radius"),
                    o = n.data("speed") == t ? -20 : n.data("speed"),
                    u = n.data("origin") == t ? -20 : n.data("origin");
                i = i * r;
                s = s * r;
                var a = {
                    a: 0,
                    ang: i,
                    element: n,
                    unit: s
                };
                n.data("timeline").append(new punchgs.TweenLite.fromTo(a, o, {
                    a: 360
                }, {
                    a: 0,
                    force3D: "auto",
                    ease: punchgs.Linear.easeNone,
                    onUpdate: function() {
                        var e = a.a * (Math.PI / 180);
                        punchgs.TweenLite.to(a.element, .1, {
                            force3D: "auto",
                            x: Math.cos(e) * a.unit,
                            y: a.unit * (1 - Math.sin(e))
                        })
                    },
                    onComplete: function() {
                        n.data("timeline").restart()
                    }
                }))
            }
        })
    };
    var U = function(n) {
        n.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
            var n = e(this);
            if (n.data("timeline") != t) {
                n.data("timeline").pause();
                n.data("timeline", null)
            }
        })
    };
    var z = function(n, r) {
        var i = 0;
        var s = n.find(".tp-caption"),
            o = r.container.find(".tp-static-layers").find(".tp-caption");
        e.each(o, function(e, t) {
            s.push(t)
        });
        s.each(function(n) {
            var s = -1;
            var o = e(this);
            if (o.hasClass("tp-static-layer")) {
                if (o.data("startslide") == -1 || o.data("startslide") == "-1") o.data("startslide", 0);
                if (o.data("endslide") == -1 || o.data("endslide") == "-1") o.data("endslide", r.slideamount);
                if (o.hasClass("tp-is-shown")) {
                    if (o.data("startslide") > r.next || o.data("endslide") < r.next) {
                        s = 2;
                        o.removeClass("tp-is-shown")
                    } else {
                        s = 0
                    }
                } else {
                    s = 2
                }
            }
            if (s != 0) {
                U(o);
                if (o.find("iframe").length > 0) {
                    punchgs.TweenLite.to(o.find("iframe"), .2, {
                        autoAlpha: 0
                    });
                    if (J()) o.find("iframe").remove();
                    try {
                        var u = o.find("iframe");
                        var a = u.attr("id");
                        var f = $f(a);
                        f.api("pause");
                        clearTimeout(o.data("timerplay"))
                    } catch (l) {}
                    try {
                        var c = o.data("player");
                        c.stopVideo();
                        clearTimeout(o.data("timerplay"))
                    } catch (l) {}
                }
                if (o.find("video").length > 0) {
                    try {
                        o.find("video").each(function(t) {
                            var n = e(this).parent();
                            var r = n.attr("id");
                            clearTimeout(n.data("timerplay"));
                            var i = this;
                            i.pause()
                        })
                    } catch (l) {}
                }
                try {
                    var h = o.data("timeline");
                    var p = h.getLabelTime("frame99");
                    var d = h.time();
                    if (p > d) {
                        var v = h.getTweensOf(o);
                        e.each(v, function(e, t) {
                            if (e != 0) t.pause()
                        });
                        if (o.css("opacity") != 0) {
                            var m = o.data("endspeed") == t ? o.data("speed") : o.data("endspeed");
                            if (m > i) i = m;
                            h.play("frame99")
                        } else h.progress(1, false)
                    }
                } catch (l) {}
            }
        });
        return i
    };
    var W = function(e, n, r, i, s) {
        var o = e.data("timeline");
        var u = new punchgs.TimelineLite;
        var a = e;
        if (r.typ == "chars") a = e.data("mySplitText").chars;
        else if (r.typ == "words") a = e.data("mySplitText").words;
        else if (r.typ == "lines") a = e.data("mySplitText").lines;
        r.animation.ease = r.ease;
        if (r.animation.rotationZ != t) r.animation.rotation = r.animation.rotationZ;
        r.animation.data = new Object;
        r.animation.data.oldx = r.animation.x;
        r.animation.data.oldy = r.animation.y;
        r.animation.x = r.animation.x * s;
        r.animation.y = r.animation.y * s;
        o.add(u.staggerTo(a, r.speed, r.animation, r.elementdelay), r.start);
        o.addLabel(i, r.start);
        e.data("timeline", o)
    };
    var X = function(e, n, r, i, s, o) {
        var u = e.data("timeline"),
            a = new punchgs.TimelineLite;
        var f = P(),
            l = e.data("endspeed") == t ? e.data("speed") : e.data("endspeed"),
            c = e.attr("class");
        f.ease = e.data("endeasing") == t ? punchgs.Power1.easeInOut : e.data("endeasing");
        l = l / 1e3;
        if (c.match("ltr") || c.match("ltl") || c.match("str") || c.match("stl") || c.match("ltt") || c.match("ltb") || c.match("stt") || c.match("stb") || c.match("skewtoright") || c.match("skewtorightshort") || c.match("skewtoleft") || c.match("skewtoleftshort") || c.match("fadeout") || c.match("randomrotateout")) {
            if (c.match("skewtoright") || c.match("skewtorightshort")) f.skewX = 35;
            else if (c.match("skewtoleft") || c.match("skewtoleftshort")) f.skewX = -35;
            if (c.match("ltr") || c.match("skewtoright")) f.x = n.width + 60;
            else if (c.match("ltl") || c.match("skewtoleft")) f.x = 0 - (n.width + 60);
            else if (c.match("ltt")) f.y = 0 - (n.height + 60);
            else if (c.match("ltb")) f.y = n.height + 60;
            else if (c.match("str") || c.match("skewtorightshort")) {
                f.x = 50;
                f.opacity = 0
            } else if (c.match("stl") || c.match("skewtoleftshort")) {
                f.x = -50;
                f.opacity = 0
            } else if (c.match("stt")) {
                f.y = -50;
                f.opacity = 0
            } else if (c.match("stb")) {
                f.y = 50;
                f.opacity = 0
            } else if (c.match("randomrotateout")) {
                f.x = Math.random() * n.width;
                f.y = Math.random() * n.height;
                f.scale = Math.random() * 2 + .3;
                f.rotation = Math.random() * 360 - 180;
                f.opacity = 0
            } else if (c.match("fadeout")) {
                f.opacity = 0
            }
            if (c.match("skewtorightshort")) f.x = 270;
            else if (c.match("skewtoleftshort")) f.x = -270;
            f.data = new Object;
            f.data.oldx = f.x;
            f.data.oldy = f.y;
            f.x = f.x * o;
            f.y = f.y * o;
            f.overwrite = "auto";
            var h = e;
            var h = e;
            if (e.data("splitout") == "chars") h = e.data("mySplitText").chars;
            else if (e.data("splitout") == "words") h = e.data("mySplitText").words;
            else if (e.data("splitout") == "lines") h = e.data("mySplitText").lines;
            var p = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay");
            u.add(a.staggerTo(h, l, f, p), r)
        } else if (e.hasClass("customout")) {
            f = H(f, e.data("customout"));
            var h = e;
            if (e.data("splitout") == "chars") h = e.data("mySplitText").chars;
            else if (e.data("splitout") == "words") h = e.data("mySplitText").words;
            else if (e.data("splitout") == "lines") h = e.data("mySplitText").lines;
            var p = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay");
            f.onStart = function() {
                punchgs.TweenLite.set(e, {
                    transformPerspective: f.transformPerspective,
                    transformOrigin: f.transformOrigin,
                    overwrite: "auto"
                })
            };
            f.data = new Object;
            f.data.oldx = f.x;
            f.data.oldy = f.y;
            f.x = f.x * o;
            f.y = f.y * o;
            u.add(a.staggerTo(h, l, f, p), r)
        } else {
            i.delay = 0;
            u.add(punchgs.TweenLite.to(e, l, i), r)
        }
        u.addLabel(s, r);
        e.data("timeline", u)
    };
    var V = function(t, n) {
        t.children().each(function() {
            try {
                e(this).die("click")
            } catch (t) {}
            try {
                e(this).die("mouseenter")
            } catch (t) {}
            try {
                e(this).die("mouseleave")
            } catch (t) {}
            try {
                e(this).unbind("hover")
            } catch (t) {}
        });
        try {
            t.die("click", "mouseenter", "mouseleave")
        } catch (r) {}
        clearInterval(n.cdint);
        t = null
    };
    var $ = function(n, r) {
        r.cd = 0;
        r.loop = 0;
        if (r.stopAfterLoops != t && r.stopAfterLoops > -1) r.looptogo = r.stopAfterLoops;
        else r.looptogo = 9999999;
        if (r.stopAtSlide != t && r.stopAtSlide > -1) r.lastslidetoshow = r.stopAtSlide;
        else r.lastslidetoshow = 999;
        r.stopLoop = "off";
        if (r.looptogo == 0) r.stopLoop = "on";
        if (r.slideamount > 1 && !(r.stopAfterLoops == 0 && r.stopAtSlide == 1)) {
            var i = n.find(".tp-bannertimer");
            n.on("stoptimer", function() {
                var t = e(this).find(".tp-bannertimer");
                t.data("tween").pause();
                if (r.hideTimerBar == "on") t.css({
                    visibility: "hidden"
                })
            });
            n.on("starttimer", function() {
                if (r.conthover != 1 && r.videoplaying != true && r.width > r.hideSliderAtLimit && r.bannertimeronpause != true && r.overnav != true)
                    if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1 || r.noloopanymore == 1) r.noloopanymore = 1;
                    else {
                        i.css({
                            visibility: "visible"
                        });
                        i.data("tween").resume()
                    }
                if (r.hideTimerBar == "on") i.css({
                    visibility: "hidden"
                })
            });
            n.on("restarttimer", function() {
                var t = e(this).find(".tp-bannertimer");
                if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1 || r.noloopanymore == 1) r.noloopanymore = 1;
                else {
                    t.css({
                        visibility: "visible"
                    });
                    t.data("tween").kill();
                    t.data("tween", punchgs.TweenLite.fromTo(t, r.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: s,
                        delay: 1
                    }))
                }
                if (r.hideTimerBar == "on") t.css({
                    visibility: "hidden"
                })
            });
            n.on("nulltimer", function() {
                i.data("tween").pause(0);
                if (r.hideTimerBar == "on") i.css({
                    visibility: "hidden"
                })
            });
            var s = function() {
                if (e("body").find(n).length == 0) {
                    V(n, r);
                    clearInterval(r.cdint)
                }
                n.trigger("revolution.slide.slideatend");
                if (n.data("conthover-changed") == 1) {
                    r.conthover = n.data("conthover");
                    n.data("conthover-changed", 0)
                }
                r.act = r.next;
                r.next = r.next + 1;
                if (r.next > n.find(">ul >li").length - 1) {
                    r.next = 0;
                    r.looptogo = r.looptogo - 1;
                    if (r.looptogo <= 0) {
                        r.stopLoop = "on"
                    }
                }
                if (r.stopLoop == "on" && r.next == r.lastslidetoshow - 1) {
                    n.find(".tp-bannertimer").css({
                        visibility: "hidden"
                    });
                    n.trigger("revolution.slide.onstop");
                    r.noloopanymore = 1
                } else {
                    i.data("tween").restart()
                }
                N(n, r)
            };
            i.data("tween", punchgs.TweenLite.fromTo(i, r.delay / 1e3, {
                width: "0%"
            }, {
                force3D: "auto",
                width: "100%",
                ease: punchgs.Linear.easeNone,
                onComplete: s,
                delay: 1
            }));
            i.data("opt", r);
            n.hover(function() {
                if (r.onHoverStop == "on" && !J()) {
                    n.trigger("stoptimer");
                    n.trigger("revolution.slide.onpause");
                    var i = n.find(">ul >li:eq(" + r.next + ") .slotholder");
                    i.find(".defaultimg").each(function() {
                        var n = e(this);
                        if (n.data("kenburn") != t) {
                            n.data("kenburn").pause()
                        }
                    })
                }
            }, function() {
                if (n.data("conthover") != 1) {
                    n.trigger("revolution.slide.onresume");
                    n.trigger("starttimer");
                    var i = n.find(">ul >li:eq(" + r.next + ") .slotholder");
                    i.find(".defaultimg").each(function() {
                        var n = e(this);
                        if (n.data("kenburn") != t) {
                            n.data("kenburn").play()
                        }
                    })
                }
            })
        }
    };
    var J = function() {
        var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"];
        var t = false;
        for (var n in e) {
            if (navigator.userAgent.split(e[n]).length > 1) {
                t = true
            }
        }
        return t
    };
    var K = function(e, t, n) {
        var r = t.data("owidth");
        var i = t.data("oheight");
        if (r / i > n.width / n.height) {
            var s = n.container.width() / r;
            var o = i * s;
            var u = o / n.container.height() * e;
            e = e * (100 / u);
            u = 100;
            e = e;
            return e + "% " + u + "%" + " 1"
        } else {
            var s = n.container.width() / r;
            var o = i * s;
            var u = o / n.container.height() * e;
            return e + "% " + u + "%"
        }
    };
    var Q = function(n, r, i, s) {
        try {
            var o = n.find(">ul:first-child >li:eq(" + r.act + ")")
        } catch (u) {
            var o = n.find(">ul:first-child >li:eq(1)")
        }
        r.lastslide = r.act;
        var f = n.find(">ul:first-child >li:eq(" + r.next + ")"),
            l = f.find(".slotholder"),
            c = l.data("bgposition"),
            h = l.data("bgpositionend"),
            p = l.data("zoomstart") / 100,
            d = l.data("zoomend") / 100,
            v = l.data("rotationstart"),
            m = l.data("rotationend"),
            g = l.data("bgfit"),
            y = l.data("bgfitend"),
            b = l.data("easeme"),
            w = l.data("duration") / 1e3,
            E = 100;
        if (g == t) g = 100;
        if (y == t) y = 100;
        var S = g,
            x = y;
        g = K(g, l, r);
        y = K(y, l, r);
        E = K(100, l, r);
        if (p == t) p = 1;
        if (d == t) d = 1;
        if (v == t) v = 0;
        if (m == t) m = 0;
        if (p < 1) p = 1;
        if (d < 1) d = 1;
        var T = new Object;
        T.w = parseInt(E.split(" ")[0], 0), T.h = parseInt(E.split(" ")[1], 0);
        var N = false;
        if (E.split(" ")[2] == "1") {
            N = true
        }
        l.find(".defaultimg").each(function() {
            var t = e(this);
            if (l.find(".kenburnimg").length == 0) l.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + t.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + T.w + "%;height:" + T.h + '%;"></div>');
            else {
                l.find(".kenburnimg img").css({
                    width: T.w + "%",
                    height: T.h + "%"
                })
            }
            var n = l.find(".kenburnimg img");
            var i = G(r, c, g, n, N),
                o = G(r, h, y, n, N);
            if (N) {
                i.w = S / 100;
                o.w = x / 100
            }
            if (s) {
                punchgs.TweenLite.set(n, {
                    autoAlpha: 0,
                    transformPerspective: 1200,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: i.w,
                    x: i.x,
                    y: i.y
                });
                var u = i.w,
                    f = u * n.width() - r.width,
                    p = u * n.height() - r.height,
                    d = Math.abs(i.x / f * 100),
                    v = Math.abs(i.y / p * 100);
                if (p == 0) v = 0;
                if (f == 0) d = 0;
                t.data("bgposition", d + "% " + v + "%");
                if (!a(8)) t.data("currotate", Y(n));
                if (!a(8)) t.data("curscale", T.w * u + "%  " + (T.h * u + "%"));
                l.find(".kenburnimg").remove()
            } else t.data("kenburn", punchgs.TweenLite.fromTo(n, w, {
                autoAlpha: 1,
                force3D: punchgs.force3d,
                transformOrigin: "0% 0%",
                top: 0,
                left: 0,
                scale: i.w,
                x: i.x,
                y: i.y
            }, {
                autoAlpha: 1,
                rotationZ: m,
                ease: b,
                x: o.x,
                y: o.y,
                scale: o.w,
                onUpdate: function() {
                    var e = n[0]._gsTransform.scaleX;
                    var i = e * n.width() - r.width,
                        s = e * n.height() - r.height,
                        o = Math.abs(n[0]._gsTransform.x / i * 100),
                        u = Math.abs(n[0]._gsTransform.y / s * 100);
                    if (s == 0) u = 0;
                    if (i == 0) o = 0;
                    t.data("bgposition", o + "% " + u + "%");
                    if (!a(8)) t.data("currotate", Y(n));
                    if (!a(8)) t.data("curscale", T.w * e + "%  " + (T.h * e + "%"))
                }
            }))
        })
    };
    var G = function(e, t, n, r, i) {
        var s = new Object;
        if (!i) s.w = parseInt(n.split(" ")[0], 0) / 100;
        else s.w = parseInt(n.split(" ")[1], 0) / 100;
        switch (t) {
            case "left top":
            case "top left":
                s.x = 0;
                s.y = 0;
                break;
            case "center top":
            case "top center":
                s.x = ((0 - r.width()) * s.w + parseInt(e.width, 0)) / 2;
                s.y = 0;
                break;
            case "top right":
            case "right top":
                s.x = (0 - r.width()) * s.w + parseInt(e.width, 0);
                s.y = 0;
                break;
            case "center left":
            case "left center":
                s.x = 0;
                s.y = ((0 - r.height()) * s.w + parseInt(e.height, 0)) / 2;
                break;
            case "center center":
                s.x = ((0 - r.width()) * s.w + parseInt(e.width, 0)) / 2;
                s.y = ((0 - r.height()) * s.w + parseInt(e.height, 0)) / 2;
                break;
            case "center right":
            case "right center":
                s.x = (0 - r.width()) * s.w + parseInt(e.width, 0);
                s.y = ((0 - r.height()) * s.w + parseInt(e.height, 0)) / 2;
                break;
            case "bottom left":
            case "left bottom":
                s.x = 0;
                s.y = (0 - r.height()) * s.w + parseInt(e.height, 0);
                break;
            case "bottom center":
            case "center bottom":
                s.x = ((0 - r.width()) * s.w + parseInt(e.width, 0)) / 2;
                s.y = (0 - r.height()) * s.w + parseInt(e.height, 0);
                break;
            case "bottom right":
            case "right bottom":
                s.x = (0 - r.width()) * s.w + parseInt(e.width, 0);
                s.y = (0 - r.height()) * s.w + parseInt(e.height, 0);
                break
        }
        return s
    };
    var Y = function(e) {
        var t = e.css("-webkit-transform") || e.css("-moz-transform") || e.css("-ms-transform") || e.css("-o-transform") || e.css("transform");
        if (t !== "none") {
            var n = t.split("(")[1].split(")")[0].split(",");
            var r = n[0];
            var i = n[1];
            var s = Math.round(Math.atan2(i, r) * (180 / Math.PI))
        } else {
            var s = 0
        }
        return s < 0 ? s += 360 : s
    };
    var Z = function(n, r) {
        try {
            var i = n.find(">ul:first-child >li:eq(" + r.act + ")")
        } catch (s) {
            var i = n.find(">ul:first-child >li:eq(1)")
        }
        r.lastslide = r.act;
        var o = n.find(">ul:first-child >li:eq(" + r.next + ")");
        var u = i.find(".slotholder");
        var a = o.find(".slotholder");
        n.find(".defaultimg").each(function() {
            var n = e(this);
            punchgs.TweenLite.killTweensOf(n, false);
            punchgs.TweenLite.set(n, {
                scale: 1,
                rotationZ: 0
            });
            punchgs.TweenLite.killTweensOf(n.data("kenburn img"), false);
            if (n.data("kenburn") != t) {
                n.data("kenburn").pause()
            }
            if (n.data("currotate") != t && n.data("bgposition") != t && n.data("curscale") != t) punchgs.TweenLite.set(n, {
                rotation: n.data("currotate"),
                backgroundPosition: n.data("bgposition"),
                backgroundSize: n.data("curscale")
            });
            if (n != t && n.data("kenburn img") != t && n.data("kenburn img").length > 0) punchgs.TweenLite.set(n.data("kenburn img"), {
                autoAlpha: 0
            })
        })
    };
    var et = function(t, n) {
        if (J() && n.parallaxDisableOnMobile == "on") return false;
        t.find(">ul:first-child >li").each(function() {
            var t = e(this);
            for (var r = 1; r <= 10; r++) t.find(".rs-parallaxlevel-" + r).each(function() {
                var t = e(this);
                t.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + t.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + n.parallaxLevels[r - 1] + '"></div>')
            })
        });
        if (n.parallax == "mouse" || n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") {
            t.mouseenter(function(e) {
                var n = t.find(".current-sr-slide-visible");
                var r = t.offset().top,
                    i = t.offset().left,
                    s = e.pageX - i,
                    o = e.pageY - r;
                n.data("enterx", s);
                n.data("entery", o)
            });
            t.on("mousemove.hoverdir, mouseleave.hoverdir", function(r) {
                var i = t.find(".current-sr-slide-visible");
                switch (r.type) {
                    case "mousemove":
                        var s = t.offset().top,
                            o = t.offset().left,
                            u = i.data("enterx"),
                            a = i.data("entery"),
                            f = u - (r.pageX - o),
                            l = a - (r.pageY - s);
                        i.find(".tp-parallax-container").each(function() {
                            var t = e(this),
                                r = parseInt(t.data("parallaxlevel"), 0) / 100,
                                i = f * r,
                                s = l * r;
                            if (n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") punchgs.TweenLite.to(t, .4, {
                                force3D: "auto",
                                x: i,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            });
                            else punchgs.TweenLite.to(t, .4, {
                                force3D: "auto",
                                x: i,
                                y: s,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        });
                        break;
                    case "mouseleave":
                        i.find(".tp-parallax-container").each(function() {
                            var t = e(this);
                            if (n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") punchgs.TweenLite.to(t, 1.5, {
                                force3D: "auto",
                                x: 0,
                                ease: punchgs.Power3.easeOut
                            });
                            else punchgs.TweenLite.to(t, 1.5, {
                                force3D: "auto",
                                x: 0,
                                y: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        });
                        break
                }
            });
            if (J()) window.ondeviceorientation = function(n) {
                var r = Math.round(n.beta || 0),
                    i = Math.round(n.gamma || 0);
                var s = t.find(".current-sr-slide-visible");
                if (e(window).width() > e(window).height()) {
                    var o = i;
                    i = r;
                    r = o
                }
                var u = 360 / t.width() * i,
                    a = 180 / t.height() * r;
                s.find(".tp-parallax-container").each(function() {
                    var t = e(this),
                        n = parseInt(t.data("parallaxlevel"), 0) / 100,
                        r = u * n,
                        i = a * n;
                    punchgs.TweenLite.to(t, .2, {
                        force3D: "auto",
                        x: r,
                        y: i,
                        ease: punchgs.Power3.easeOut
                    })
                })
            }
        }
        if (n.parallax == "scroll" || n.parallax == "scroll+mouse" || n.parallax == "mouse+scroll") {
            e(window).on("scroll", function(e) {
                tt(t, n)
            })
        }
    };
    var tt = function(t, n) {
        if (J() && n.parallaxDisableOnMobile == "on") return false;
        var r = t.offset().top,
            i = e(window).scrollTop(),
            s = r + t.height() / 2,
            o = r + t.height() / 2 - i,
            u = e(window).height() / 2,
            a = u - o;
        if (s < u) a = a - (u - s);
        var f = t.find(".current-sr-slide-visible");
        t.find(".tp-parallax-container").each(function(t) {
            var n = e(this),
                r = parseInt(n.data("parallaxlevel"), 0) / 100,
                i = a * r;
            n.data("parallaxoffset", i);
            punchgs.TweenLite.to(n, .2, {
                force3D: "auto",
                y: i,
                ease: punchgs.Power3.easeOut
            })
        });
        if (n.parallaxBgFreeze != "on") {
            var l = n.parallaxLevels[0] / 100,
                c = a * l;
            punchgs.TweenLite.to(t, .2, {
                force3D: "auto",
                y: c,
                ease: punchgs.Power3.easeOut
            })
        }
    };
    var nt = function(n, r) {
        var i = n.parent();
        if (r.navigationType == "thumb" || r.navsecond == "both") {
            i.append('<div class="tp-bullets tp-thumbs ' + r.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>')
        }
        var s = i.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer");
        var o = s.parent();
        o.width(r.thumbWidth * r.thumbAmount);
        o.height(r.thumbHeight);
        o.parent().width(r.thumbWidth * r.thumbAmount);
        o.parent().height(r.thumbHeight);
        n.find(">ul:first >li").each(function(e) {
            var i = n.find(">ul:first >li:eq(" + e + ")");
            var o = i.find(".defaultimg").css("backgroundColor");
            if (i.data("thumb") != t) var u = i.data("thumb");
            else var u = i.find("img:first").attr("src");
            s.append('<div class="bullet thumb" style="background-color:' + o + ";position:relative;width:" + r.thumbWidth + "px;height:" + r.thumbHeight + "px;background-image:url(" + u + ') !important;background-size:cover;background-position:center center;"></div>');
            var a = s.find(".bullet:first")
        });
        var u = 10;
        s.find(".bullet").each(function(t) {
            var i = e(this);
            if (t == r.slideamount - 1) i.addClass("last");
            if (t == 0) i.addClass("first");
            i.width(r.thumbWidth);
            i.height(r.thumbHeight);
            if (u < i.outerWidth(true)) u = i.outerWidth(true);
            i.click(function() {
                if (r.transition == 0 && i.index() != r.act) {
                    r.next = i.index();
                    f(r, n)
                }
            })
        });
        var a = u * n.find(">ul:first >li").length;
        var l = s.parent().width();
        r.thumbWidth = u;
        if (l < a) {
            e(document).mousemove(function(t) {
                e("body").data("mousex", t.pageX)
            });
            s.parent().mouseenter(function() {
                var t = e(this);
                var r = t.offset(),
                    i = e("body").data("mousex") - r.left,
                    s = t.width(),
                    o = t.find(".bullet:first").outerWidth(true),
                    u = o * n.find(">ul:first >li").length,
                    a = u - s + 15,
                    f = a / s;
                t.addClass("over");
                i = i - 30;
                var l = 0 - i * f;
                if (l > 0) l = 0;
                if (l < 0 - u + s) l = 0 - u + s;
                it(t, l, 200)
            });
            s.parent().mousemove(function() {
                var t = e(this),
                    r = t.offset(),
                    i = e("body").data("mousex") - r.left,
                    s = t.width(),
                    o = t.find(".bullet:first").outerWidth(true),
                    u = o * n.find(">ul:first >li").length - 1,
                    a = u - s + 15,
                    f = a / s;
                i = i - 3;
                if (i < 6) i = 0;
                if (i + 3 > s - 6) i = s;
                var l = 0 - i * f;
                if (l > 0) l = 0;
                if (l < 0 - u + s) l = 0 - u + s;
                it(t, l, 0)
            });
            s.parent().mouseleave(function() {
                var t = e(this);
                t.removeClass("over");
                rt(n)
            })
        }
    };
    var rt = function(e) {
        var t = e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
            n = t.parent(),
            r = n.offset(),
            i = n.find(".bullet:first").outerWidth(true),
            s = n.find(".bullet.selected").index() * i,
            o = n.width(),
            i = n.find(".bullet:first").outerWidth(true),
            u = i * e.find(">ul:first >li").length,
            a = u - o,
            f = a / o,
            l = 0 - s;
        if (l > 0) l = 0;
        if (l < 0 - u + o) l = 0 - u + o;
        if (!n.hasClass("over")) {
            it(n, l, 200)
        }
    };
    var it = function(e, t, n) {
        punchgs.TweenLite.to(e.find(".tp-thumbcontainer"), .2, {
            force3D: "auto",
            left: t,
            ease: punchgs.Power3.easeOut,
            overwrite: "auto"
        })
    }
})(jQuery)
