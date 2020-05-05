function jsonpLele(t) {
  t.data = t.data || {}, t.timeout = t.timeout || 0, t.callback = t.callback || "jsoncallback";
  var e = "jsonp_" + Math.random();
  e = e.replace(".", ""), window[e] = function (s) {
    clearTimeout(r), t.success && t.success(s), t.complete && t.complete(), d.removeChild(n), window[e] = null
  }, t.data[t.callback] = e;
  var s = [];
  for (var i in t.data) s.push(i + "=" + encodeURIComponent(t.data[i]));
  var a = "&" + s.join("&"),
    n = document.createElement("script");
  n.src = t.url + a;
  var d = document.getElementsByTagName("head")[0];
  if (d.appendChild(n), t.timeout) var r = setTimeout(function () {
    t.error && t.error(), t.complete && t.complete(), d.removeChild(n), window[e] = null
  }, t.timeout)
}

function insertJDT(t) {
  if ($(".tj_num").html($(".tj_num").html() - 0 + 1), $("#j_imgSwipe").length > 0 || $("#imgSwipe").length > 0) {
    var e = $("#j_imgSwipe .swipe_pic").eq(parseInt(t.getAttribute("data-pos")) - 1);
    e.length > 0 ? e.before(t) : $("#j_imgSwipe").children(".swipe-wrap").append(t)
  }
  t.classList.add("swipe_pic"), window.imgXwipe && (imgXwipe.destroy(), imgXwipe = null), window.initXwipe()
}

function sendPv(t) {
  if (t && !sinaSax.isBlank(t)) {
    var e = sinaSax.creatElement("img", {
      src: t
    });
    $("#sax_pv_count").append(e)
  }
}

function sendVideoPv(t) {
  if (0 !== t.readyState) {
    var e = $(t).parents(".carditems_list_dd").data("videojc");
    sendPv(e)
  }
}

function listenV(t) {
  var e = 0,
    s = proxy_column_feed.vid.length,
    i = document.getElementsByTagName("video");
  if ("undefined" != typeof i && i.length > 0)
    for (; s > e; e++) i[e].addEventListener("play", function () {
      sendVideoPv(this)
    }), i[e].addEventListener("pause", function () {
      this.parentNode.previousSibling.className = "carditems_patronage", this.parentNode.className = "carditems_patronage hide"
    });
  else $(window).on("loadedVideo", function () {
    listenV()
  })
}
var isUC = !1,
  isQQ = !1,
  is360 = !1,
  isBaidu = !1,
  feedPush = {
    dataLength: 0,
    count: 0,
    ready: !1,
    likeCount: 0,
    ZTcount: 1,
    init: function () {
      this.insertRioSax(), this._ua = this._getUA(), $(".carditems_push .hide").data("more") || $(".carditems_push .hide").data("more", "true"), $(".carditems").filter(".hide").data("more") || $(".carditems").filter(".hide").data("more", "true"), window.channelPushs && window.channelPushs.length > 0 && (this.channelPushs = window.channelPushs, this.dataLength = window.channelPushs.length, this.push()), window.zhuanTiPushs && window.zhuanTiPushs.length > 0 && (this.channelPushs = window.zhuanTiPushs, this.dataLength = window.zhuanTiPushs.length, this.push()), window.guessLike && this.initEvent(), isUC = this._isUCCheck(), isQQ = this._isQQBrowserCheck(), isBaidu = this._isBaiduBrowserCheck(), is360 = this._is360BrowserCheck()
    },
    insertRioSax: function () {
      $(".j_cardTitle").each(function (t, e) {
        if ("閲岀害濂ヨ繍" == e.innerText) {
          var s = $(e).parents(".carditems_push");
          feedPush.insertRioLanmu(s.find(".card_tips")[0]), feedPush.insertRioGif(s.find(".carditems"))
        }
      })
    },
    insertRioLanmu: function (t) {
      if (t) {
        t.appendChild(sinaSax.creatElement("span", {
          "sax-type": "lanmu",
          "class": "j_sax",
          "data-id": "766FC5C8AC52",
          style: "float: right;"
        }));
        var e = sinaSax.creatElement("script", {
          "sax-type": "lanmu",
          type: "text/html"
        });
        e.innerHTML = '<img src="<% content[0].src[0] %>" class="f_md_th_ad_pic" style="height:30px;max-width:80px" />', document.body.appendChild(e)
      }
    },
    insertRioGif: function (t) {
      if (t.length > 0) {
        $(t.children().eq(1)[0]).after(sinaSax.creatElement("span", {
          "sax-type": "gif",
          "class": "j_sax",
          "data-id": "0E8EAEA40DBC",
          style: "float: left;margin-top: 10px;"
        }));
        var e = sinaSax.creatElement("script", {
          "sax-type": "gif",
          type: "text/html"
        });
        e.innerHTML = '<img src="<% content[0].src[0] %>" class="f_md_th_ad_pic" style="height:24px;" />', document.body.appendChild(e)
      }
    },
    _getUA: function () {
      return navigator.userAgent.toLowerCase()
    },
    _isUCCheck: function () {
      var t = this._ua,
        e = !1;
      return e = t.indexOf("ucbrowser") > -1 && -1 == t.indexOf("iphone")
    },
    _isQQBrowserCheck: function () {
      var t = this._ua,
        e = !1;
      return e = t.indexOf("qqbrowser") > -1 && -1 == t.indexOf("iphone")
    },
    _isBaiduBrowserCheck: function () {
      var t = this._ua,
        e = !1;
      return e = t.indexOf("baidu") > -1 && -1 == t.indexOf("iphone")
    },
    _is360BrowserCheck: function () {
      var t = this._ua,
        e = !1;
      return e = t.indexOf("360 aphone") > -1 && -1 == t.indexOf("iphone")
    },
    initEvent: function () {
      var t = this;
      guessLike.bind("insertSucc", function (e) {
        t.likeIndex = e, t.ready = !0
      })
    },
    dataHandle: function () {
      for (var t = 0, e = this.dataLength; e > t; t++) {
        var s = $(".carditems").not("[data-more='true']").children(":not(img)").not("[data-more='true']"),
          i = feedPush.getMaxDom($(".card_layer").not($("#j_items_list")).children(".carditems")),
          a = $("#j_items_list .carditems").first().children(),
          n = this.channelPushs[t].caIndex;
        if ($("#sax_dom_storage").children().eq(t).html())
          if (n <= this.likeIndex) this.likeIndex++, !$("#sax_dom_storage").children().eq(t).attr("pushed") && s.eq(n - 2)[0] && (s.eq(n - 2).after($("#sax_dom_storage").children().eq(t)[0].cloneNode(!0)), $("#sax_dom_storage").children().eq(t).attr("pushed", 1));
          else {
            if ("undefined" == typeof this.likeIndex && "undefined" != typeof i && "undefined" != typeof window.zhuanTiPushs && i.children.length >= 7) {
              var d = [
                [7, 15, 20],
                [4, 9, 14]
              ];
              if (feedPush.syncruler(i.children, $("#sax_dom_storage").children(), d), $("#j_items_list .carditems").first().children().length >= 5) {
                var r = [
                  [5, 10, 15],
                  [4, 9, 14]
                ];
                feedPush.ruler($("#j_items_list .carditems").first().children(), $("#sax_dom_storage").children(".j_items_list"), r)
              }
              return void(0 == $("#sax_dom_storage").children().length && $("#sax_dom_storage").remove())
            }
            if (n > this.likeIndex && n < this.likeIndex + 3) like.fixSaxPush($("#sax_dom_storage").children().eq(t)[0].cloneNode(!0), n - this.likeIndex);
            else {
              if ("undefined" == typeof this.likeIndex && "undefined" != typeof a && "undefined" != typeof window.zhuanTiPushs) {
                var r = [
                  [5, 10, 15],
                  [4, 9, 14]
                ];
                return void feedPush.ruler($("#j_items_list .carditems").first().children(), $("#sax_dom_storage").children(".j_items_list"), r)
              }
              this.likeIndex + 3 ? !$("#sax_dom_storage").children().eq(t).attr("pushed") && s.eq(n - 1)[0] && (s.eq(n - 1).before($("#sax_dom_storage").children().eq(t)[0].cloneNode(!0)), $("#sax_dom_storage").children().eq(t).attr("pushed", 1)) : !$("#sax_dom_storage").children().eq(t).attr("pushed") && s.eq(n - 2)[0] && (s.eq(n - 2).after($("#sax_dom_storage").children().eq(t)[0].cloneNode(!0)), $("#sax_dom_storage").children().eq(t).attr("pushed", 1))
            }
          } this.nba && this.nba(n)
      }
      $("#sax_dom_storage").children().eq(this.dataLength - 1).attr("pushed") && $("#sax_dom_storage").remove(), listenV()
    },
    push: function () {
      var t = "",
        e = 0,
        s = this.channelPushs.length,
        i = document.createElement("div");
      for (i.id = "sax_dom_storage"; s > e; e++) t += this.channelPushs[e].domHTML;
      i.innerHTML = t, document.body.appendChild(i), $("#sax_dom_storage").hide(), sinaSax.init()
    },
    check: function () {
      this.count++, this.dataLength === this.count && this.checkLike()
    },
    checkLike: function () {
      var t = this;
      t.likeCount++ >= 10 || t.ready ? t.dataHandle() : setTimeout(function () {
        t.checkLike()
      }, 10)
    },
    getMaxDom: function (t) {
      var e = t.length,
        s = 1,
        i = 0;
      if (1 == e) return t[0];
      for (; e > s; s++) i = t[s].children.length > t[i].children.length ? s : i;
      return t[i]
    },
    syncruler: function (t, e, s) {
      t.length >= s[0][0] && $(t[s[1][0]]).after(e[0]), t.length >= s[0][1] && $(t[s[1][1]]).after(e[1]), t.length >= s[0][2] && $(t[s[1][2]]).after(e[2])
    },
    ruler: function (t, e, s) {
      t.length >= s[0][0] && t.length < s[0][1] && $(t[s[1][0]]).after(e[0]), t.length >= s[0][1] && t.length < s[0][2] && $(t[s[1][1]]).after(e[0]), t.length >= s[0][2] && $(t[s[1][2]]).after(e[0])
    },
    checkMediem: function () {
      var t = [
        [5, 10, 15],
        [4, 9, 14]
      ];
      $("#j_items_list .carditems").first().children().length >= t[0][feedPush.ZTcount] ? (feedPush.ruler($("#j_items_list .carditems").first().children(), $("#sax_dom_storage").children(".j_items_list"), t), feedPush.ZTcount += 1) : setTimeout(function () {
        feedPush.checkMediem()
      }, 300)
    },
    nba: function (t) {
      if (-1 != window.location.href.indexOf("nba") && 9 === t && 0 == $("#j_nba_qy").length) {
        var e = new Date;
        if (2016 == e.getFullYear() && (3 == e.getMonth() && e.getDate() >= 20 || 4 == e.getMonth() && e.getDate() <= 20)) {
          var s = {
              title: "",
              url: "http://sax.sina.com.cn/click?type=nonstd&t=REowMDAxMTUzNg%3D%3D&sign=c43a86229b4fb266&url=http%3A%2F%2Fad.doubleclick.net%2Fddm%2Ftrackclk%2FN4517.2207.3295452092421%2FB9326100.130499187%3Bdc_trk_aid%3D303311696%3Bdc_trk_cid%3D54934957",
              img: {
                u: "http://d1.sina.com.cn/201604/19/1415781_400x.jpg"
              },
              weibourl: ""
            },
            i = $("<div>")[0];
          i.id = "j_nba_qy", proxy_column_feed.temp35(i, s), $(".carditems").not("[data-more='true']").children(":not(img)").not("[data-more='true']").eq(11).before(i),
            function () {
              function t(t, e) {
                var s = new Image,
                  i = "_sinaads_sio_log_" + Math.random();
                window[i] = s, s.onload = s.onerror = s.onabort = function () {
                  s.onload = s.onerror = s.onabort = null, window[i] = null, s = null
                }, t = t.replace(/\[timestamp\]/g, 1e13 * Math.random()), s.src = t + (e ? "" : (t.indexOf("?") > 0 ? "&" : "?") + i), console.log(t + (e ? "" : (t.indexOf("?") > 0 ? "&" : "?") + i))
              }
              t("http://ad.doubleclick.net/ddm/trackimp/N4517.2207.3295452092421/B9326100.130499187;dc_trk_aid=303311696;dc_trk_cid=54934957;ord=[timestamp]?"), t("http://sax.sina.com.cn/view?type=nonstd&t=REowMDAxMTUzNg%3D%3D&t=[timestamp]")
            }()
        }
      }
    }
  };
feedPush.init();
var proxy_column_feed = {
  vid: [],
  getCommStr: function (t) {
    var e = t.comment_total,
      s = "01" == t.adtype && 0 == e ? "" : e;
    return 0 == s ? "" : s
  },
  temp31: function (t, e) {
    var s = [];
    s.push('<a href="' + e.url + '">'), s.push('<dl class="carditems_list">'), s.push('<dt class="carditems_list_dt"><img src="' + e.img.u + '" alt="' + e.title + '"></dt>'), s.push('<dd class="carditems_list_dd">'), s.push('<h3 class="carditems_list_h3 intro_h3">' + e.title + "</h3>"), s.push('<h4 class="carditems_list_h4">' + e.intro + "</h4>"), s.push('<p class="carditems_list_opright">'), s.push('<span class="op_ico op_patronage_tips fl">骞垮憡</span>'), s.push('<span class="op_ico num_ico fr">' + this.getCommStr(e) + "</span></p></dd></dl></a>"), t.innerHTML = s.join("")
  },
  temp32: function (t, e) {
    var s = [];
    s.push('<a href="' + e.url + '">'), s.push('<dl class="carditems_list">'), s.push('<dt class="carditems_list_dt"><img src="' + e.img.u + '" alt="' + e.title + '"><span class="video_tips">&nbsp;</span></dt>'), s.push('<dd class="carditems_list_dd">'), s.push('<h3 class="carditems_list_h3 pic_t_44">' + e.title + "</h3>"), s.push('<p class="carditems_list_op">'), s.push('<span class="op_ico op_patronage_tips fl">骞垮憡</span>'), s.push('<span class="op_ico num_ico fr">' + this.getCommStr(e) + "</span>"), s.push("</p></dd></dl></a>"), t.innerHTML = s.join("")
  },
  temp33: function (t, e) {
    var s = [];
    s.push('<a href="' + e.url + '">'), s.push('<dl class="carditems_list j_imgdelay">'), s.push('<dd class="carditems_list_dd">'), s.push('<h3 class="carditems_list_h3">' + e.title + "</h3>"), s.push('<ul class="carditems_list_pics">'), e.images.length >= 3 && (s.push('<li><span><img src="' + e.images[0].u + '" alt="' + e.title + '" /></span></li>'), s.push('<li><span><img src="' + e.images[1].u + '" alt="' + e.title + '" /></span></li>'), s.push('<li><span><img src="' + e.images[2].u + '" alt="' + e.title + '" /></span></li>')), s.push("</ul>"), s.push('<p class="carditems_list_op">'), s.push('<span class="op_ico op_patronage_tips fl">骞垮憡</span>'), s.push('<span class="op_ico num_ico fr">' + this.getCommStr(e) + "</span>"), s.push("</p></dd></dl> </a>"), t.innerHTML = s.join("")
  },
  temp34: function (t, e) {
    var s = [];
    s.push('<a href="' + e.url + '">'), s.push('<dl class="carditems_list">'), s.push('<dd class="carditems_list_dd">'), s.push('<h3 class="carditems_list_h3">' + e.title + "</h3>"), s.push('<h4 class="carditems_list_h4">' + e.intro + "</h4>"), s.push('<p class="carditems_list_op">'), s.push('<span class="op_ico op_patronage_tips fl">骞垮憡</span>'), s.push('<span class="op_ico num_ico fr">' + this.getCommStr(e) + "</span>"), s.push("</p></dd></dl></a>"), t.innerHTML = s.join("")
  },
  temp35: function (t, e) {
    var s = [];
    s.push('<a href="' + e.url + '">'), s.push('<dl class="carditems_list">'), s.push('<dd class="carditems_list_dd">'), s.push('<h3 class="carditems_list_h3">' + e.title + "</h3>"), s.push('<p class="carditems_patronage"><img src="' + e.img.u + '" alt="' + e.title + '"></p>'), s.push('<p class="carditems_list_op">'), s.push('<span class="op_ico op_patronage_tips fl">骞垮憡</span>'), s.push('<span class="op_ico num_ico fr" style="background:none">' + e.weibourl + "</span>"), s.push("</p></dd></dl></a>"), t.innerHTML = s.join("")
  },
  temp36: function (t, e) {
    var s = [];
    s.push('<div class="card_phone_box">'), s.push('<a href="' + e.url + '">'), s.push('<dl id="" class="carditems_list">'), s.push('<dt class="carditems_list_dt"><img src="' + e.img.u + '" alt="' + e.title + '" /></dt>'), s.push('<dd class="carditems_list_dd zz_phonebox">'), s.push('<h3 class="carditems_list_h3 intro_h3">' + e.title + "</h3>"), s.push('<h4 class="carditems_list_h4">' + e.intro + "</h4>"), s.push('<p class="carditems_list_opright">'), s.push('<span class="op_ico op_patronage_tips fl">骞垮憡</span>'), s.push("</p></dd></dl></a>"), s.push('<a href="tel:' + e.tel + '" data-teljc="' + e.namonitor.tel + '" class="zz_phonebtn teljc">鐢佃瘽鍙风爜</a>'), s.push("</div>"), t.innerHTML = s.join("")
  },
  temp37: function (t, e) {
    var s = [];
    s.push('<a href="' + e.url + '">'), s.push('<div class="card_zz_wrap">'), s.push('<dl class="card_zz_list">'), s.push('<dt><img src="' + e.img.u + '" alt="' + e.title + '" /></dt><dd>'), s.push('<div class="card_zz_list_mate">'), s.push("<h2>" + e.title + "</h2>"), s.push("<h4>" + e.intro + "</h4>"), s.push('<p class="carditems_list_op">'), s.push('<span class="op_ico op_patronage_tips fl">骞垮憡</span>'), s.push('</p></div><p class="card_zz_list_btn">涓嬭浇</p></dd></dl></div></a>'), t.innerHTML = s.join("")
  },
  temp38: function (t, e) {
    var s = [],
      i = e.scheme.replace("://", "");
    if (s.push('<a href="javascript:void(0);" class="j_appentrance" data-type="' + i + '" data-schemejc="' + e.namonitor.scheme + '" data-newsid="" data-downloadurl="' + e.download + '" data-downloadjc="' + e.namonitor.download + '">'), s.push('<div class="card_zz_wrap">'), s.push('<dl class="card_zz_list">'), s.push('<dt><img src="' + e.img.u + '" alt="' + e.title + '" /></dt>'), s.push('<dd><div class="card_zz_list_mate">'), s.push("<h2>" + e.title + "</h2>"), s.push("<h4>" + e.intro + "</h4>"), s.push('<p class="carditems_list_op">'), s.push('<span class="op_ico op_patronage_tips fl">骞垮憡</span></p></div>'), s.push('<p class="card_zz_list_btn">鎵撳紑</p></dd></dl></div></a>'), !window.apiCallbackFunction) {
      var a = document.createElement("script");
      a.src = "http://mjs.sinaimg.cn/wap/public/generalize/appentrance/201504141720/callup.min.js", document.getElementsByTagName("body")[0].appendChild(a)
    }
    t.innerHTML = s.join("")
  },
  temp40: function (t, e) {
    var s = [];
    s.push('<dl class="carditems_list gifImg">'), s.push('<a href="' + e.url + '"><dt class="carditems_list_gifImg"><h3 class="carditems_list_h3 intro_h3">' + e.title + '</h3><span class="carditems_list_right"></span></dt></a>'), s.push('<dd class="carditems_list_dd">'), s.push('<p class="carditems_gifImg">'), s.push('<img src="' + e.images[0].u + '" alt="' + e.title + '">'), s.push('<span class="s_gifImg">鐐瑰嚮鏌ョ湅鍔ㄥ浘</span><span class="gif_loading_wrap hide"><span class="gif_loading">|&nbsp;|</span><i>鍔犺浇涓�</i></span></p>'), s.push('<p class="carditems_gifImg hide"><img class="carditems_gifImg_img" src="' + e.images[1].u + '" alt="' + e.title + '"></p>'), s.push('<p class="carditems_gifImg_op">'), s.push('<span class="op_patronage_tips fr">骞垮憡</span>'), s.push('<span class="op_patronage_name fl">' + e.weibourl + "</span>"), s.push("</p></dd></dl>"), t.innerHTML = s.join("")
  },
  temp42: function (t, e) {
    var s = [];
    s.push('<dl class="carditems_list">'), s.push('<dd class="carditems_list_dd" data-videojc="' + e.play + '">'), s.push('<a href="' + e.url + '"><h3 class="carditems_list_h3 intro_h3">' + e.title + "</h3></a>"), s.push('<p class="carditems_patronage" style="position:relative">'), s.push('<a href="javascript:;" class="vedioWrap"><img style="width:100%"  src="' + e.img.u + '" alt="' + e.title + '"></a>'), s.push('<span class="vedioBtn" style="position: absolute;top: 50%;left: 50%;-webkit-transform: translate(-50%,-50%);transform: translate(-50%,-50%);"><img src="http://n.sinaimg.cn/default/d1c9d4ed/20151217/veido_play.png" style="width:60px;height:60px"/>'), isUC || isQQ || isBaidu || is360 || s.push('<span class="video_des" style="position: absolute;top:68%;left: 50%;-webkit-transform: translate(-50%,0);transform: translate(-50%,0);display: block;width: 86px;height: 22px;font-size: 10px;color: #fff;background: rgba(0,0,0,.4);text-align: center;line-height: 22px;border-radius: 3px">鐐瑰嚮鍏ㄥ睆鎾斁</span>'), s.push("</span>"), s.push('<a href="' + e.url + '"><span  class="video_info" style="bottom: 5px;">鐐瑰嚮鏌ョ湅璇︽儏<i class="icon_op"></i></span></a>'), s.push('</p><p class="carditems_patronage hide" vid="' + e.vid + '" id="vid' + e.vid + '" style="display: block;width: 100%;height: 100%;background-color: #000;text-align: center;padding-bottom: 0;">'), s.push("</p>"), s.push('<div><span class="op_patronage_tips fl">骞垮憡</span>'), s.push("</div></dd></dl>"), t.innerHTML = s.join(""), this.vid.push("vid" + e.vid);
    var i = "http://interface.sina.cn/video/wap/videoinfo.d.json?vid=" + e.vid;
    jsonpLele({
      timeout: 1e4,
      error: function (t) {
        console.log(t)
      },
      success: function (t) {
        t.data.baseUrl || arguments.callee(this), url = t.data.baseUrl;
        var e = document.querySelector("#" + proxy_column_feed.vid[proxy_column_feed.vid.length - 1]);
        e.innerHTML = '<video src="' + url + '" controls="controls" width="100%"></video>', $(window).trigger("loadedVideo")
      },
      url: i,
      callback: "callback",
      data: {}
    })
  }
};
sinaSax.bind("proxy", function (t, e) {
  switch (parseInt(e.templateid)) {
    case 31:
      proxy_column_feed.temp31(t, e);
      break;
    case 32:
      proxy_column_feed.temp32(t, e);
      break;
    case 33:
      proxy_column_feed.temp33(t, e);
      break;
    case 34:
      proxy_column_feed.temp34(t, e);
      break;
    case 35:
      proxy_column_feed.temp35(t, e);
      break;
    case 36:
      proxy_column_feed.temp36(t, e);
      break;
    case 37:
      proxy_column_feed.temp37(t, e);
      break;
    case 38:
      proxy_column_feed.temp38(t, e);
      break;
    case 40:
      proxy_column_feed.temp40(t, e);
      break;
    case 42:
      proxy_column_feed.temp42(t, e)
  }
  feedPush.check()
}), sinaSax.bind("nullData", function (t) {
  feedPush.check()
});
var mediaFlag = !1,
  topTjCallback = function (t) {
    var e, s = storage.get("topTjStorage"),
      i = new Date,
      a = i.getFullYear() + "-" + i.getMonth() + "-" + i.getDate(),
      n = 0,
      d = $(t).find(".j_adImgUp"),
      r = new Image,
      l = document.documentElement.clientWidth;
    r.onload = function () {
      if (e = l / 320 * 180, -1 != window.location.href.indexOf("tech") && (s = -1), a !== s) {
        mediaFlag = !0, storage.set("topTjStorage", a), $(t).find(".j_adCloseBtn").css({
          "-webkit-transform": "rotate(-45deg)"
        });
        var i = setInterval(function () {
          n > l / 320 * 180 ? (clearInterval(i), setTimeout(function () {
            $(t).find(".j_adImgUp").css({
              height: "0"
            }), $(t).find(".j_adCloseBtn").css({
              "-webkit-transform": "rotate(135deg)"
            }), sinaSax.callback("qpSaxFin")
          }, 5e3)) : (n += 5, d.css({
            height: n + "px"
          }))
        }, 20)
      } else sinaSax.callback("qpSaxFin");
      $(t).find(".j_adClose").on("click", function () {
        d.height() ? ($(this).find(".j_adCloseBtn").css({
          "-webkit-transform": "rotate(135deg)"
        }), d.css({
          height: 0
        })) : ($(this).find(".j_adCloseBtn").css({
          "-webkit-transform": "rotate(-45deg)"
        }), d.css({
          height: e + "px"
        }))
      })
    }, r.src = $(t).find(".j_adImgUp").attr("data-img")
  },
  bottomTjCallback = function (t) {
    var e, s = 0,
      i = $(t).find(".j_lmtimage"),
      a = new Image,
      n = new Date,
      d = storage.get("bottomTjStorage"),
      r = n.getFullYear() + "-" + n.getMonth() + "-" + n.getDate();
    a.onload = function () {
      if (e = a.height, r !== d) {
        if (mediaFlag) setTimeout(function () {
          var a = setInterval(function () {
            s > e ? (clearInterval(a), setTimeout(function () {
              $(t).find(".j_lmtimage").css({
                height: "0"
              })
            }, 5e3)) : (s += 5, i.css({
              height: s + "px"
            }))
          }, 20)
        }, 6e3);
        else var n = setInterval(function () {
          s > e ? (clearInterval(n), setTimeout(function () {
            $(t).find(".j_lmtimage").css({
              height: "0"
            })
          }, 5e3)) : (s += 5, i.css({
            height: s + "px"
          }))
        }, 20);
        storage.set("bottomTjStorage", r)
      }
    }, a.src = $(t).find(".j_lmtimage").attr("data-img"), $(t).find(".j_adClose").on("click tap", function (t) {
      t.preventDefault(), $(".j_lmtimage").remove()
    })
  },
  sina_tj_qp = document.getElementsByClassName("sina_tj_qp")[0],
  sina_tj_lmt = document.getElementsByClassName("sina_tj_lmt")[0],
  sina_tj_jdt = $(".sina_tj_jdt"),
  sina_tj_qp_pdps, sina_tj_lmt_pdps, sina_tj_jdt_pdps = [];
if (sina_tj_qp && (sina_tj_qp_pdps = sina_tj_qp.getAttribute("data-id")), sina_tj_lmt && (sina_tj_lmt_pdps = sina_tj_lmt.getAttribute("data-id")), sina_tj_jdt)
  for (var i = 0; i < $(sina_tj_jdt).length; i++) sina_tj_jdt_pdps[i] = sina_tj_jdt[i].getAttribute("data-id");
sinaSax.bind("insertSucc", function (t) {
  switch (t.getAttribute("data-id")) {
    case sina_tj_qp_pdps:
      topTjCallback(t);
      break;
    case sina_tj_lmt_pdps:
      bottomTjCallback(t);
      break;
    case sina_tj_jdt_pdps[0]:
      insertJDT(t);
      break;
    case sina_tj_jdt_pdps[1]:
      insertJDT(t)
  }
}), sinaSax.bind("error", function (t) {}), sinaSax.bind("nullData", function (t) {
  switch (t.getAttribute("data-id")) {
    case sina_tj_jdt_pdps:
      window.imgXwipe && (imgXwipe.destroy(), imgXwipe = null)
  }
});
var storage = {
  set: function (t, e) {
    localStorage.setItem(t, JSON.stringify(e))
  },
  get: function (t) {
    return JSON.parse(localStorage.getItem(t))
  }
};
$(document).on("click tap", ".gifImg", function (t) {
  var e = $(t.target).parents(".carditems_list_dd"),
    s = e.find(".hide");
  return e.children().hasClass("carditems_gifImg") && e.children().hasClass("j_link") && (location.href = e.prev()[0].href), s.hasClass("carditems_gifImg") && s.hasClass("hide") ? (s.removeClass("hide"), e.children().first().addClass("hide"), void s.addClass("j_link")) : void 0
}), $("#j_loading_btn").on("click", function (t) {
  feedPush.checkMediem()
}), $(document).on("tap click", ".vedioWrap", function (t) {
  var e = $(t.target).width(),
    s = $(t.target).parents(".carditems_patronage").next();
  s.children().first().height(e / 2 + "px"), s.prev().addClass("hide"), s.removeClass("hide").addClass("playing");
  var i = s.children().first()[0];
  i.play()
}), $(document).on("tap click", ".vedioBtn", function (t) {
  var e = $(t.target).parents(".carditems_patronage").find(".vedioWrap").children().first().width(),
    s = $(t.target).parents(".carditems_patronage").next();
  s.children().first().height(e / 2 + "px"), s.prev().addClass("hide"), s.removeClass("hide").addClass("playing");
  var i = s.children().first()[0];
  i.play()
}), $(document).on("tap click", ".teljc", function (t) {
  var e = $(t.target).data("teljc");
  sendPv(e)
});